(()=>{"use strict";const n=function(n,e){0<n.length&&Array.prototype.slice.call(n,0).forEach((function(n,t){e(n,t)}))},e=["sme-animation-bounce-in","sme-animation-bounce-down","sme-animation-fade-in","sme-animation-fade-in-up","sme-animation-fade-in-down","sme-animation-fade-in-left","sme-animation-fade-in-right"];document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll('[class*="sme-animation-"]');if("undefined"==typeof IntersectionObserver)return void n(t,(n=>{e.forEach((e=>{n.classList.remove(e)}))}));const i=(n,t)=>{n.forEach((n=>{if(!n.isIntersecting)return;const i=n.target;e.forEach((n=>{if(!i.classList.contains(n))return;i.classList.replace(n,`${n}-fired`);const e=i.getAttribute("data-sme-animation-delay");0<e&&(i.style.animationDelay=`${e}s`);const t=i.getAttribute("data-sme-animation-duration");0<t&&(i.style.animationDuration=`${t}s`)})),t&&t.unobserve(i)}))},a=new IntersectionObserver(i,{root:null,rootMargin:"-25% 0px",threshold:[0,.25,.5,.75,1]});n(t,(n=>{const t=n.getBoundingClientRect(),o=window.innerHeight;0<=t.top&&t.top<=o&&i([{target:n,isIntersecting:!0,intersectionRatio:1}]),a.observe(n),n.addEventListener("animationend",(()=>{e.forEach((e=>{n.classList.remove(`${e}-fired`)}))}),!1)}))}),!1)})();