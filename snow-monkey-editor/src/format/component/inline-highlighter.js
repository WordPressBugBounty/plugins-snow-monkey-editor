import rgb2hex from 'rgb2hex';

import {
	useCachedTruthy,
	useSettings,
	__experimentalColorGradientControl as ColorGradientControl,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';

import { getActiveFormat, useAnchor } from '@wordpress/rich-text';

import { withSpokenMessages, Popover } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import hexLong2Short from '../helper/hex-long2short';

export function getActiveColor( formatName, formatValue ) {
	const activeColorFormat = getActiveFormat( formatValue, formatName );
	if ( ! activeColorFormat ) {
		return;
	}

	const styleColor = activeColorFormat.attributes.style;
	if ( ! styleColor ) {
		return;
	}

	const hex = styleColor.match( /(#[0-9A-F]{3,6}) /i );
	if ( hex ) {
		return hex;
	}

	const rgb = styleColor.match( /,\s*?(rgba?\([^)]+\)) /i );
	if ( rgb ) {
		return hexLong2Short( rgb2hex( rgb[ 1 ] ).hex );
	}
}

const ColorPicker = ( { name, value, onChange } ) => {
	const [ userPalette, themePalette, defaultPalette ] = useSettings(
		'color.palette.custom',
		'color.palette.theme',
		'color.palette.default'
	);

	const colors = useMemo(
		() => [
			...( userPalette || [] ),
			...( themePalette || [] ),
			...( defaultPalette || [] ),
		],
		[ userPalette, themePalette, defaultPalette ]
	);

	const activeColor = useMemo(
		() => getActiveColor( name, value, colors ),
		[ name, value, colors ]
	);

	return (
		<ColorGradientControl
			label={ __( 'Color', 'snow-monkey-editor' ) }
			colorValue={ activeColor }
			onColorChange={ onChange }
			{ ...useMultipleOriginColorsAndGradients() }
			__experimentalHasMultipleOrigins={ true }
			__experimentalIsRenderedInSidebar={ true }
		/>
	);
};

const InlineColorUI = ( {
	name,
	value,
	onChange,
	onClose,
	contentRef,
	settings,
} ) => {
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings,
	} );

	const cachedRect = useCachedTruthy( popoverAnchor.getBoundingClientRect() );
	popoverAnchor.getBoundingClientRect = () => cachedRect;

	return (
		<Popover
			anchor={ popoverAnchor }
			onClose={ onClose }
			className="sme-popover sme-popover--inline-color components-inline-color-popover"
		>
			<ColorPicker name={ name } value={ value } onChange={ onChange } />
		</Popover>
	);
};

export default withSpokenMessages( InlineColorUI );
