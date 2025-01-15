(()=>{var e={655:(e,t)=>{var n;!function(){"use strict";var s=function(){function e(){}function t(e,t){for(var n=t.length,s=0;s<n;++s)o(e,t[s])}e.prototype=Object.create(null);var n={}.hasOwnProperty,s=/\s+/;function o(e,o){if(o){var i=typeof o;"string"===i?function(e,t){for(var n=t.split(s),o=n.length,i=0;i<o;++i)e[n[i]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===i?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var s in t)n.call(t,s)&&(e[s]=!!t[s]);else e[t.toString()]=!0}(e,o):"number"===i&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];var i=new e;t(i,s);var r=[];for(var a in i)i[a]&&r.push(a);return r.join(" ")}}();e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(655),t=n.n(e);const s=window.wp.components,o=window.wp.blockEditor,i=window.wp.compose,r=window.wp.hooks,a=window.wp.i18n,l=window.lodash,d=window.wp.blocks,m=window.wp.element;function c(e,t){if("core/freeform"===e)return!1;const n=function(e){return(0,r.applyFilters)("SnowMonkeyEditor.extension.allowedNameSpaces",["core","snow-monkey-blocks"],e)}(t);return 0<n.filter((t=>0===e.indexOf(t))).length}function u(e,t){if(!e||!Object.keys(e).length)return!1;const n=function(e){return(0,r.applyFilters)("SnowMonkeyEditor.extension.allowedRoles",["administrator","editor","author","contributor"],e)}(t);return 0<e.roles.filter((e=>-1<n.indexOf(e))).length}const b=JSON.parse('{"smeIsHiddenSm":{"type":"boolean","default":false},"smeIsHiddenMd":{"type":"boolean","default":false},"smeIsHiddenLg":{"type":"boolean","default":false}}'),p=window.ReactJSXRuntime,h={resetAll:{},hasValue:e=>0<(0,l.compact)([e.attributes?.smeIsHiddenSm,e.attributes?.smeIsHiddenMd,e.attributes?.smeIsHiddenLg]).length,resetValue:e=>{e.setAttributes({smeIsHiddenSm:b.smeIsHiddenSm.default,smeIsHiddenMd:b.smeIsHiddenMd.default,smeIsHiddenLg:b.smeIsHiddenLg.default})},resetClassnames:()=>({"sme-hidden-sm":b.smeIsHiddenSm.default,"sme-hidden-md":b.smeIsHiddenMd.default,"sme-hidden-lg-up":b.smeIsHiddenLg.default}),label:(0,a.__)("Display setting (By window size)","snow-monkey-editor"),name:"hidden-by-size",isShown:e=>{if(!u(snowmonkeyeditor?.currentUser,"hidden-by-size"))return!1;if(!c(e.name,"hidden-by-size"))return!1;const t=(0,d.getBlockType)(e.name);return!!t&&!!(0,d.hasBlockSupport)(t,"customClassName",!0)},Content:e=>{const{attributes:n,setAttributes:o}=e,{smeIsHiddenSm:i,smeIsHiddenMd:r,smeIsHiddenLg:l,className:d}=n;return(0,m.useEffect)((()=>{o({className:t()(d,{"sme-hidden-sm":i,"sme-hidden-md":r,"sme-hidden-lg-up":l})})}),[i,r,l]),(0,p.jsxs)(s.__experimentalVStack,{spacing:"16px",children:[(0,p.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Hide on smartphone size","snow-monkey-editor"),checked:i,onChange:e=>{o({smeIsHiddenSm:e})}}),(0,p.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Hide on tablet size","snow-monkey-editor"),checked:r,onChange:e=>{o({smeIsHiddenMd:e})}}),(0,p.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Hide on PC size","snow-monkey-editor"),checked:l,onChange:e=>{o({smeIsHiddenLg:e})}})]})}},g=window.wp.data,y=JSON.parse('{"smeIsHiddenRoles":{"type":"array","default":[]}}'),w=window.wp.dataControls,f={roles:{}},k={setRoles:e=>({type:"SET_ROLES",roles:e}),*fetchRoles(){const e=yield(0,w.apiFetch)({path:"/snow-monkey-editor/v1/roles"});return k.setRoles(e)}},_={*getRoles(){yield k.fetchRoles()}},x=(0,g.createReduxStore)("snow-monkey-editor/roles",{reducer:(e=f,t)=>"SET_ROLES"===t.type?{...e,roles:t.roles}:e,actions:k,selectors:{getRoles:e=>e.roles},controls:w.controls,resolvers:_});(0,g.register)(x);const v={resetAll:{},hasValue:e=>!e.attributes?.smeIsHiddenRoles||0<e.attributes?.smeIsHiddenRoles.length,resetValue:e=>{e.setAttributes({smeIsHiddenRoles:y.smeIsHiddenRoles.default})},resetClassnames:e=>{const t=e.attributes?.smeIsHiddenRoles||[],n={};return t.forEach((e=>{n[`sme-hidden-by-role--${e}`]=!1})),n},label:(0,a.__)("Display setting (By roles)","snow-monkey-editor"),name:"hidden-by-role",isShown:e=>!!u(snowmonkeyeditor?.currentUser,"hidden-by-role")&&(!!c(e.name,"hidden-by-role")&&!!(0,d.getBlockType)(e.name)),Content:e=>{const{attributes:n,setAttributes:o}=e,{smeIsHiddenRoles:i,className:r}=n,d=(()=>{const e=(0,g.useSelect)((e=>{const t={...e(x).getRoles()};return{"sme-guest":{name:(0,a.__)("user is not logged in","snow-monkey-editor")},...t}}),[]);let t={};return snowmonkeyeditor?.currentUser?.roles?.includes("administrator")?t={...e}:Object.keys(e).forEach(((n,s)=>{const o=snowmonkeyeditor?.currentUser?.roles?.includes(n);o||(t[n]=Object.values(e)[s])})),t})();return(0,m.useEffect)((()=>{const e={};Object.keys(d).forEach((t=>{e[`sme-hidden-by-role--${t}`]=!1})),i.forEach((t=>{e[`sme-hidden-by-role--${t}`]=!0})),o({className:t()(r,{...e})})}),[i]),(0,p.jsx)(s.__experimentalVStack,{spacing:"16px",children:Object.keys(d).map((e=>{const t=(0,a.sprintf)(
// translators: %1$s: The role name
// translators: %1$s: The role name
(0,a.__)("Hide if %1$s","snow-monkey-editor"),d[e].name),n="object"==typeof i&&i.includes(e);return(0,p.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:t,checked:n,onChange:t=>{const n=((e,t)=>{let n=[...i];return!0===t?n.push(e):n=n.filter((t=>e!==t)),(0,l.uniq)(n)})(e,t);o({smeIsHiddenRoles:n})}},`sme-hidden-role-${e}`)}))})},Decorator:e=>{const{attributes:t,children:n}=e,{className:s,smeIsHiddenRoles:o=[]}=t;return s&&!snowmonkeyeditor?.currentUser?.roles?.includes("administrator")&&o.some((e=>snowmonkeyeditor?.currentUser?.roles?.includes(e)))?(0,p.jsx)("div",{className:"sme-hidden-by-role",children:n}):(0,p.jsx)(p.Fragment,{children:n})}},j=JSON.parse('{"smeAnimation":{"type":"string"},"smeAnimationDelay":{"type":"number","default":0},"smeAnimationDuration":{"type":"number"}}'),S=[{label:"",value:void 0},{label:(0,a.__)("bounce-in","snow-monkey-editor"),value:"bounce-in"},{label:(0,a.__)("bounce-down","snow-monkey-editor"),value:"bounce-down"},{label:(0,a.__)("fade-in","snow-monkey-editor"),value:"fade-in"},{label:(0,a.__)("fade-in-up","snow-monkey-editor"),value:"fade-in-up"},{label:(0,a.__)("fade-in-down","snow-monkey-editor"),value:"fade-in-down"},{label:(0,a.__)("fade-in-left","snow-monkey-editor"),value:"fade-in-left"},{label:(0,a.__)("fade-in-right","snow-monkey-editor"),value:"fade-in-right"}],A={resetAll:{},hasValue:e=>!!e.attributes?.smeAnimation,resetValue:e=>{e.setAttributes({smeAnimation:j.smeAnimation.default,smeAnimationDelay:j.smeAnimationDelay.default,smeAnimationDuration:j.smeAnimationDuration.default})},resetClassnames:e=>{const t={};return null!=e.attributes?.smeAnimation&&(t[`sme-animation-${e.attributes.smeAnimation}`]=!1),t},label:(0,a.__)("Animation","snow-monkey-editor"),name:"animation",isShown:e=>{if(!u(snowmonkeyeditor?.currentUser,"animation"))return!1;if(!c(e.name,"animation"))return!1;const t=(0,d.getBlockType)(e.name);return!!t&&!!(0,d.hasBlockSupport)(t,"customClassName",!0)},Content:e=>{const{attributes:n,setAttributes:o}=e,{smeAnimation:i,smeAnimationDelay:r,smeAnimationDuration:l,className:d}=n;return(0,m.useEffect)((()=>{const e={};S.forEach((t=>{e[`sme-animation-${t.value}`]=!1})),i&&(e[`sme-animation-${i}`]=!0),o({className:t()(d,{...e})})}),[i]),(0,p.jsxs)(s.__experimentalVStack,{spacing:"16px",children:[(0,p.jsx)(s.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Animation","snow-monkey-editor"),value:i||void 0,options:S,onChange:e=>{o({smeAnimation:e}),e||o({smeAnimationDelay:j.smeAnimationDelay.default})}}),(0,p.jsx)(s.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Delay","snow-monkey-editor"),value:r||0,onChange:e=>{o({smeAnimationDelay:e})},allowReset:!0,min:0,max:5,step:.1}),(0,p.jsx)(s.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Duration","snow-monkey-editor"),value:l||void 0,onChange:e=>{o({smeAnimationDuration:e})},allowReset:!0,min:0,max:5,step:.1})]})}},C=JSON.parse('{"smeStartDateTime":{"type":"string"},"smeEndDateTime":{"type":"string"}}'),H=window.wp.date;function I({currentDate:e,onChange:t,onReset:n}){const o=(0,H.getSettings)(),i=/a(?!\\)/i.test(o.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,p.jsxs)("div",{className:"sme-date-time-picker",children:[(0,p.jsx)(s.DateTimePicker,{currentDate:e,onChange:t,is12Hour:i}),(0,p.jsxs)("div",{className:"sme-date-time-picker__action",children:[(0,p.jsx)("div",{children:e}),(0,p.jsx)(s.Button,{isSmall:!0,onClick:n,children:(0,a.__)("Clear","snow-monkey-editor")})]})]})}const D=e=>!!u(snowmonkeyeditor?.currentUser,"date-time")&&(!!c(e.name,"date-time")&&!!(0,d.getBlockType)(e.name)),E={resetAll:{},hasValue:e=>!!e.attributes?.smeStartDateTime,resetValue:e=>e.setAttributes({smeStartDateTime:void 0}),label:(0,a.__)("Publish setting","snow-monkey-editor"),name:"date-time",isShown:D,Content:e=>{const{attributes:t,setAttributes:n}=e,{smeStartDateTime:s}=t;return(0,p.jsx)(I,{currentDate:s,onChange:e=>n({smeStartDateTime:e}),onReset:()=>n({smeStartDateTime:void 0})})}},N={resetAll:{},hasValue:e=>!!e.attributes?.smeEndDateTime,resetValue:e=>e.setAttributes({smeEndDateTime:void 0}),label:(0,a.__)("Unpublish setting","snow-monkey-editor"),isShown:D,Content:e=>{const{attributes:t,setAttributes:n}=e,{smeEndDateTime:s}=t;return(0,p.jsx)(I,{currentDate:s,onChange:e=>n({smeEndDateTime:e}),onReset:()=>n({smeEndDateTime:void 0})})}},R=JSON.parse('{"smeIsEditingLockRoles":{"type":"array","default":[]}}'),T=e=>0<(0,l.intersection)(e.attributes.smeIsEditingLockRoles,snowmonkeyeditor?.currentUser?.roles).length,B={resetAll:{},hasValue:e=>!e.attributes?.smeIsEditingLockRoles||0<e.attributes?.smeIsEditingLockRoles.length,resetValue:e=>e.setAttributes({smeIsEditingLockRoles:[]}),label:(0,a.__)("Editing lock (By roles)","snow-monkey-editor"),name:"editing-lock",isShown:e=>!!u(snowmonkeyeditor?.currentUser,"editing-lock")&&(!!c(e.name,"editing-lock")&&(!!(0,l.includes)(snowmonkeyeditor?.currentUser?.roles,"administrator")&&!!(0,d.getBlockType)(e.name))),Content:e=>{const{attributes:t,setAttributes:n,clientId:o}=e,{smeIsEditingLockRoles:i}=t,r=(0,g.useSelect)((e=>{const t={...e(x).getRoles()};return delete t.administrator,Object.keys(t).forEach((e=>{!0!==t[e].capabilities.edit_posts&&delete t[e]})),t}),[]),d=document.getElementById(`block-${o}`);if(d)if(T(e)){const e=d.getAttribute("tabindex");e&&(d.setAttribute("data-sme-tabindex",e),d.setAttribute("tabindex",-1))}else{const e=d.getAttribute("tabindex"),t=d.getAttribute("data-sme-tabindex");e&&t&&(d.setAttribute("tabindex",t),d.removeAttribute("data-sme-tabindex"))}return(0,p.jsx)(s.__experimentalVStack,{spacing:"16px",children:Object.keys(r).map((e=>{const t=(0,a.sprintf)(
// translators: %1$s: The role name
// translators: %1$s: The role name
(0,a.__)("Edit lock if %1$s","snow-monkey-editor"),r[e].name),o="object"==typeof i&&i.includes(e);return(0,p.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:t,checked:o,onChange:t=>{const s=((e,t)=>{let n=[...i];return!0===t?n.push(e):n=n.filter((t=>e!==t)),(0,l.uniq)(n)})(e,t);n({smeIsEditingLockRoles:s})}},`sme-editing-lock-role-${e}`)}))})},Decorator:e=>T(e)?(0,p.jsx)(s.Disabled,{children:e.children}):(0,p.jsx)(p.Fragment,{children:e.children})},O=(0,p.jsx)("svg",{role:"img",focusable:"false",width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M13.982,16.711c-0.744,1.441 -2.248,2.428 -3.982,2.428c-1.735,0 -3.238,-0.986 -3.983,-2.428c0.909,-1.213 2.355,-2.002 3.983,-2.002c1.629,0 3.074,0.789 3.982,2.002Zm-0.748,-7.657c-0.314,2.56 1.248,2.919 1.248,5.603c0,0.467 -0.072,0.918 -0.205,1.344c-1.037,-1.203 -2.57,-1.967 -4.277,-1.967c-1.708,0 -3.24,0.764 -4.277,1.967c-0.133,-0.426 -0.205,-0.877 -0.205,-1.344c0,-2.684 1.563,-3.043 1.247,-5.603c-0.362,-2.928 -4.315,-2.465 -4.315,-5.334c0,-1.579 1.279,-2.858 2.858,-2.858c1.709,0 2.765,1.558 4.692,1.558c1.926,0 2.982,-1.558 4.691,-1.558c1.578,0 2.857,1.279 2.857,2.858c0.001,2.869 -3.952,2.406 -4.314,5.334Zm-4.677,-4.947l-0.708,0c0,0.498 -0.403,0.9 -0.901,0.9c-0.498,0 -0.901,-0.402 -0.901,-0.9l-0.708,0c0,0.889 0.72,1.609 1.609,1.609c0.889,0 1.609,-0.72 1.609,-1.609Zm0.979,7.141c0,-0.312 -0.253,-0.568 -0.566,-0.568c-0.313,0 -0.567,0.256 -0.567,0.568c0,0.312 0.254,0.566 0.567,0.566c0.313,0 0.566,-0.253 0.566,-0.566Zm2.062,0c0,-0.312 -0.254,-0.568 -0.568,-0.568c-0.312,0 -0.566,0.256 -0.566,0.568c0,0.312 0.254,0.566 0.566,0.566c0.314,0 0.568,-0.253 0.568,-0.566Zm3.062,-7.141l-0.707,0c0,0.498 -0.404,0.9 -0.9,0.9c-0.498,0 -0.902,-0.402 -0.902,-0.9l-0.707,0c0,0.889 0.721,1.609 1.609,1.609c0.886,0.001 1.607,-0.72 1.607,-1.609Z"})}),V=[h,v,A,E,N,B],M=(0,i.createHigherOrderComponent)((e=>n=>{const i=V.some((e=>e.isShown(n)));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e,{...n}),i&&(0,p.jsx)(o.InspectorControls,{children:(0,p.jsx)(s.__experimentalToolsPanel,{label:(0,a.__)("Snow Monkey Editor","snow-monkey-editor"),resetAll:()=>{V.forEach((e=>e.resetValue(n)));let e={};V.forEach((t=>{t?.resetClassnames&&(e={...e,...t.resetClassnames(n)})})),0<Object.values(e).length&&n.setAttributes({className:t()(n.attributes.className,{...e})})},className:"color-block-support-panel sme-extension-tools-panel",children:(0,p.jsx)("div",{className:"color-block-support-panel__inner-wrapper",style:{gridColumn:"1 / -1"},children:V.map(((e,o)=>e.isShown(n)&&(0,p.jsx)(s.__experimentalToolsPanelItem,{isShownByDefault:!1,hasValue:()=>!!e.hasValue(n),onDeselect:()=>{if(e.resetValue(n),e?.resetClassnames){const s={...e.resetClassnames(n)};n.setAttributes({className:t()(n.attributes.className,{...s})})}},label:e.label,className:t()("block-editor-tools-panel-color-gradient-settings__item",{first:0===o}),children:(0,p.jsx)(s.Dropdown,{popoverProps:{className:`sme-popover sme-popover--${e.name}`,placement:"left-start",offset:36,shift:!0},className:t()("block-editor-tools-panel-color-gradient-settings__dropdown","sme-extension-panel",{"sme-extension-panel--enabled":e.hasValue(n)}),renderToggle:({isOpen:t,onToggle:n})=>(0,p.jsxs)(s.Button,{onClick:n,"aria-expanded":t,className:"block-editor-panel-color-gradient-settings__dropdown",children:[e.label,(0,p.jsx)(s.Icon,{icon:O,className:"components-panel__icon",size:20})]}),renderContent:()=>(0,p.jsxs)(s.__experimentalDropdownContentWrapper,{paddingSize:"none",children:[(0,p.jsx)("div",{className:"sme-popover__title",children:e.label}),(0,p.jsx)("fieldset",{children:(0,p.jsx)(e.Content,{...n})})]})})},o)))})})})]})}),"addBlockControl");(0,r.addFilter)("blocks.registerBlockType","snow-monkey-editor/attributes",(e=>{var t;return t=e,(e=>u(snowmonkeyeditor?.currentUser,"editing-lock")&&c(e.name,"editing-lock")?(e.attributes={...e.attributes,...R},e):e)(e=(e=>u(snowmonkeyeditor?.currentUser,"date-time")&&c(e.name,"date-time")?(e.attributes={...e.attributes,...C},e):e)(e=(e=>u(snowmonkeyeditor?.currentUser,"animation")&&c(e.name,"animation")?(e.attributes={...e.attributes,...j},e):e)(e=(e=>u(snowmonkeyeditor?.currentUser,"hidden-by-role")&&c(e.name,"hidden-by-role")?(e.attributes={...e.attributes,...y},e):e)(e=u(snowmonkeyeditor?.currentUser,"hidden-by-size")&&c(t.name,"hidden-by-size")?(t.attributes={...t.attributes,...b},t):t))))})),(0,r.addFilter)("editor.BlockEdit","snow-monkey-editor/block-control",M,101),V&&V.forEach(((e,t)=>{(0,r.addFilter)("editor.BlockEdit",`snow-monkey-editor/block-edit-${t}`,(0,i.createHigherOrderComponent)((t=>n=>{const s=e?.Decorator;return s?(0,p.jsx)(s,{...n,children:(0,p.jsx)(t,{...n})}):(0,p.jsx)(t,{...n})})))}))})()})();