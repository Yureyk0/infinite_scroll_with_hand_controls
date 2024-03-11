(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function US(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var u0={exports:{}},dl={},l0={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),VS=Symbol.for("react.portal"),HS=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),KS=Symbol.for("react.profiler"),qS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),QS=Symbol.for("react.forward_ref"),XS=Symbol.for("react.suspense"),YS=Symbol.for("react.memo"),JS=Symbol.for("react.lazy"),Lm=Symbol.iterator;function ZS(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,h0={};function Di(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||c0}Di.prototype.isReactComponent={};Di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function p0(){}p0.prototype=Di.prototype;function Zh(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||c0}var ep=Zh.prototype=new p0;ep.constructor=Zh;f0(ep,Di.prototype);ep.isPureReactComponent=!0;var zm=Array.isArray,d0=Object.prototype.hasOwnProperty,tp={current:null},m0={key:!0,ref:!0,__self:!0,__source:!0};function y0(e,t,n){var r,s={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)d0.call(t,r)&&!m0.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:ea,type:e,key:i,ref:o,props:s,_owner:tp.current}}function eN(e,t){return{$$typeof:ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function np(e){return typeof e=="object"&&e!==null&&e.$$typeof===ea}function tN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bm=/\/+/g;function vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tN(""+e.key):t.toString(36)}function Ka(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ea:case VS:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+vc(o,0):r,zm(s)?(n="",e!=null&&(n=e.replace(Bm,"$&/")+"/"),Ka(s,t,n,"",function(l){return l})):s!=null&&(np(s)&&(s=eN(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bm,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",zm(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+vc(i,a);o+=Ka(i,t,n,u,s)}else if(u=ZS(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+vc(i,a++),o+=Ka(i,t,n,u,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(e,t,n){if(e==null)return e;var r=[],s=0;return Ka(e,r,"","",function(i){return t.call(n,i,s++)}),r}function nN(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var It={current:null},qa={transition:null},rN={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:qa,ReactCurrentOwner:tp};me.Children={map:ka,forEach:function(e,t,n){ka(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ka(e,function(){t++}),t},toArray:function(e){return ka(e,function(t){return t})||[]},only:function(e){if(!np(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Di;me.Fragment=HS;me.Profiler=KS;me.PureComponent=Zh;me.StrictMode=WS;me.Suspense=XS;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rN;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=f0({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=tp.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)d0.call(t,u)&&!m0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ea,type:e.type,key:s,ref:i,props:r,_owner:o}};me.createContext=function(e){return e={$$typeof:GS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qS,_context:e},e.Consumer=e};me.createElement=y0;me.createFactory=function(e){var t=y0.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:QS,render:e}};me.isValidElement=np;me.lazy=function(e){return{$$typeof:JS,_payload:{_status:-1,_result:e},_init:nN}};me.memo=function(e,t){return{$$typeof:YS,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=qa.transition;qa.transition={};try{e()}finally{qa.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return It.current.useCallback(e,t)};me.useContext=function(e){return It.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return It.current.useDeferredValue(e)};me.useEffect=function(e,t){return It.current.useEffect(e,t)};me.useId=function(){return It.current.useId()};me.useImperativeHandle=function(e,t,n){return It.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return It.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return It.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return It.current.useMemo(e,t)};me.useReducer=function(e,t,n){return It.current.useReducer(e,t,n)};me.useRef=function(e){return It.current.useRef(e)};me.useState=function(e){return It.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return It.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return It.current.useTransition()};me.version="18.2.0";l0.exports=me;var pt=l0.exports;const et=a0(pt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sN=pt,iN=Symbol.for("react.element"),oN=Symbol.for("react.fragment"),aN=Object.prototype.hasOwnProperty,uN=sN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lN={key:!0,ref:!0,__self:!0,__source:!0};function g0(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)aN.call(t,r)&&!lN.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:iN,type:e,key:i,ref:o,props:s,_owner:uN.current}}dl.Fragment=oN;dl.jsx=g0;dl.jsxs=g0;u0.exports=dl;var Re=u0.exports,hf={},v0={exports:{}},Yt={},w0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(K,Q){var ne=K.length;K.push(Q);e:for(;0<ne;){var ve=ne-1>>>1,Se=K[ve];if(0<s(Se,Q))K[ve]=Q,K[ne]=Se,ne=ve;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Q=K[0],ne=K.pop();if(ne!==Q){K[0]=ne;e:for(var ve=0,Se=K.length,pn=Se>>>1;ve<pn;){var Ct=2*(ve+1)-1,dn=K[Ct],gt=Ct+1,mn=K[gt];if(0>s(dn,ne))gt<Se&&0>s(mn,dn)?(K[ve]=mn,K[gt]=ne,ve=gt):(K[ve]=dn,K[Ct]=ne,ve=Ct);else if(gt<Se&&0>s(mn,ne))K[ve]=mn,K[gt]=ne,ve=gt;else break e}}return Q}function s(K,Q){var ne=K.sortIndex-Q.sortIndex;return ne!==0?ne:K.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],l=[],f=1,h=null,p=3,y=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(K){for(var Q=n(l);Q!==null;){if(Q.callback===null)r(l);else if(Q.startTime<=K)r(l),Q.sortIndex=Q.expirationTime,t(u,Q);else break;Q=n(l)}}function x(K){if(w=!1,T(K),!v)if(n(u)!==null)v=!0,fe(C);else{var Q=n(l);Q!==null&&Ee(x,Q.startTime-K)}}function C(K,Q){v=!1,w&&(w=!1,S(L),L=-1),y=!0;var ne=p;try{for(T(Q),h=n(u);h!==null&&(!(h.expirationTime>Q)||K&&!V());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,p=h.priorityLevel;var Se=ve(h.expirationTime<=Q);Q=e.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(u)&&r(u),T(Q)}else r(u);h=n(u)}if(h!==null)var pn=!0;else{var Ct=n(l);Ct!==null&&Ee(x,Ct.startTime-Q),pn=!1}return pn}finally{h=null,p=ne,y=!1}}var P=!1,F=null,L=-1,M=5,B=-1;function V(){return!(e.unstable_now()-B<M)}function ee(){if(F!==null){var K=e.unstable_now();B=K;var Q=!0;try{Q=F(!0,K)}finally{Q?J():(P=!1,F=null)}}else P=!1}var J;if(typeof N=="function")J=function(){N(ee)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,oe=ie.port2;ie.port1.onmessage=ee,J=function(){oe.postMessage(null)}}else J=function(){k(ee,0)};function fe(K){F=K,P||(P=!0,J())}function Ee(K,Q){L=k(function(){K(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,fe(C))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(K){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var ne=p;p=Q;try{return K()}finally{p=ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,Q){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=p;p=K;try{return Q()}finally{p=ne}},e.unstable_scheduleCallback=function(K,Q,ne){var ve=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,K){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ne+Se,K={id:f++,callback:Q,priorityLevel:K,startTime:ne,expirationTime:Se,sortIndex:-1},ne>ve?(K.sortIndex=ne,t(l,K),n(u)===null&&K===n(l)&&(w?(S(L),L=-1):w=!0,Ee(x,ne-ve))):(K.sortIndex=Se,t(u,K),v||y||(v=!0,fe(C))),K},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(K){var Q=p;return function(){var ne=p;p=Q;try{return K.apply(this,arguments)}finally{p=ne}}}})(b0);w0.exports=b0;var cN=w0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=pt,Xt=cN;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,xo={};function Fs(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(xo[e]=t,e=0;e<t.length;e++)N0.add(t[e])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,fN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Mm={};function hN(e){return pf.call(Mm,e)?!0:pf.call(jm,e)?!1:fN.test(e)?Mm[e]=!0:(jm[e]=!0,!1)}function pN(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dN(e,t,n,r){if(t===null||typeof t>"u"||pN(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function At(e,t,n,r,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yt[e]=new At(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];yt[t]=new At(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yt[e]=new At(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yt[e]=new At(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yt[e]=new At(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yt[e]=new At(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yt[e]=new At(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yt[e]=new At(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yt[e]=new At(e,5,!1,e.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function sp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rp,sp);yt[t]=new At(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rp,sp);yt[t]=new At(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rp,sp);yt[t]=new At(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yt[e]=new At(e,1,!1,e.toLowerCase(),null,!1,!1)});yt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yt[e]=new At(e,1,!1,e.toLowerCase(),null,!0,!0)});function ip(e,t,n,r){var s=yt.hasOwnProperty(t)?yt[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dN(t,n,s,r)&&(n=null),r||s===null?hN(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var br=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),yf=Symbol.for("react.suspense_list"),up=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),Um=Symbol.iterator;function Gi(e){return e===null||typeof e!="object"?null:(e=Um&&e[Um]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,wc;function oo(e){if(wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wc=t&&t[1]||""}return`
`+wc+e}var bc=!1;function Sc(e,t){if(!e||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var s=l.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oo(e):""}function mN(e){switch(e.tag){case 5:return oo(e.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return e=Sc(e.type,!1),e;case 11:return e=Sc(e.type.render,!1),e;case 1:return e=Sc(e.type,!0),e;default:return""}}function gf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ys:return"Fragment";case Xs:return"Portal";case df:return"Profiler";case op:return"StrictMode";case mf:return"Suspense";case yf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T0:return(e.displayName||"Context")+".Consumer";case E0:return(e._context.displayName||"Context")+".Provider";case ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case up:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case _r:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}function yN(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(t);case 8:return t===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function x0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gN(e){var t=x0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _a(e){e._valueTracker||(e._valueTracker=gN(e))}function _0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=x0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vf(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $0(e,t){t=t.checked,t!=null&&ip(e,"checked",t,!1)}function wf(e,t){$0(e,t);var n=Wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bf(e,t.type,n):t.hasOwnProperty("defaultValue")&&bf(e,t.type,Wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bf(e,t,n){(t!=="number"||bu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function li(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Sf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(ao(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wr(n)}}function O0(e,t){var n=Wr(t.value),r=Wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Km(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function I0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?I0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $a,A0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vN=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){vN.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function C0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function D0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=C0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var wN=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ef(e,t){if(t){if(wN[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function Tf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function lp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xf=null,ci=null,fi=null;function qm(e){if(e=ra(e)){if(typeof xf!="function")throw Error(W(280));var t=e.stateNode;t&&(t=wl(t),xf(e.stateNode,e.type,t))}}function P0(e){ci?fi?fi.push(e):fi=[e]:ci=e}function R0(){if(ci){var e=ci,t=fi;if(fi=ci=null,qm(e),t)for(e=0;e<t.length;e++)qm(t[e])}}function F0(e,t){return e(t)}function L0(){}var Nc=!1;function z0(e,t,n){if(Nc)return e(t,n);Nc=!0;try{return F0(e,t,n)}finally{Nc=!1,(ci!==null||fi!==null)&&(L0(),R0())}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var _f=!1;if(cr)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{_f=!1}function bN(e,t,n,r,s,i,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(f){this.onError(f)}}var mo=!1,Su=null,Nu=!1,$f=null,SN={onError:function(e){mo=!0,Su=e}};function NN(e,t,n,r,s,i,o,a,u){mo=!1,Su=null,bN.apply(SN,arguments)}function EN(e,t,n,r,s,i,o,a,u){if(NN.apply(this,arguments),mo){if(mo){var l=Su;mo=!1,Su=null}else throw Error(W(198));Nu||(Nu=!0,$f=l)}}function Ls(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function B0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gm(e){if(Ls(e)!==e)throw Error(W(188))}function TN(e){var t=e.alternate;if(!t){if(t=Ls(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Gm(s),e;if(i===r)return Gm(s),t;i=i.sibling}throw Error(W(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function j0(e){return e=TN(e),e!==null?M0(e):null}function M0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=M0(e);if(t!==null)return t;e=e.sibling}return null}var U0=Xt.unstable_scheduleCallback,Qm=Xt.unstable_cancelCallback,kN=Xt.unstable_shouldYield,xN=Xt.unstable_requestPaint,Ke=Xt.unstable_now,_N=Xt.unstable_getCurrentPriorityLevel,cp=Xt.unstable_ImmediatePriority,V0=Xt.unstable_UserBlockingPriority,Eu=Xt.unstable_NormalPriority,$N=Xt.unstable_LowPriority,H0=Xt.unstable_IdlePriority,ml=null,Gn=null;function ON(e){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:CN,IN=Math.log,AN=Math.LN2;function CN(e){return e>>>=0,e===0?32:31-(IN(e)/AN|0)|0}var Oa=64,Ia=4194304;function uo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=uo(a):(i&=o,i!==0&&(r=uo(i)))}else o=n&~s,o!==0?r=uo(o):i!==0&&(r=uo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tn(t),s=1<<n,r|=e[n],t&=~s;return r}function DN(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PN(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Tn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=DN(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Of(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function W0(){var e=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tn(t),e[t]=n}function RN(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Tn(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function fp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var xe=0;function K0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var q0,hp,G0,Q0,X0,If=!1,Aa=[],Rr=null,Fr=null,Lr=null,Oo=new Map,Io=new Map,Ir=[],FN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(e,t){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function Xi(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ra(t),t!==null&&hp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function LN(e,t,n,r,s){switch(t){case"focusin":return Rr=Xi(Rr,e,t,n,r,s),!0;case"dragenter":return Fr=Xi(Fr,e,t,n,r,s),!0;case"mouseover":return Lr=Xi(Lr,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Oo.set(i,Xi(Oo.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Io.set(i,Xi(Io.get(i)||null,e,t,n,r,s)),!0}return!1}function Y0(e){var t=fs(e.target);if(t!==null){var n=Ls(t);if(n!==null){if(t=n.tag,t===13){if(t=B0(n),t!==null){e.blockedOn=t,X0(e.priority,function(){G0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Af(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return t=ra(n),t!==null&&hp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ym(e,t,n){Ga(e)&&n.delete(t)}function zN(){If=!1,Rr!==null&&Ga(Rr)&&(Rr=null),Fr!==null&&Ga(Fr)&&(Fr=null),Lr!==null&&Ga(Lr)&&(Lr=null),Oo.forEach(Ym),Io.forEach(Ym)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,If||(If=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,zN)))}function Ao(e){function t(s){return Yi(s,e)}if(0<Aa.length){Yi(Aa[0],e);for(var n=1;n<Aa.length;n++){var r=Aa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rr!==null&&Yi(Rr,e),Fr!==null&&Yi(Fr,e),Lr!==null&&Yi(Lr,e),Oo.forEach(t),Io.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)Y0(n),n.blockedOn===null&&Ir.shift()}var hi=br.ReactCurrentBatchConfig,ku=!0;function BN(e,t,n,r){var s=xe,i=hi.transition;hi.transition=null;try{xe=1,pp(e,t,n,r)}finally{xe=s,hi.transition=i}}function jN(e,t,n,r){var s=xe,i=hi.transition;hi.transition=null;try{xe=4,pp(e,t,n,r)}finally{xe=s,hi.transition=i}}function pp(e,t,n,r){if(ku){var s=Af(e,t,n,r);if(s===null)Dc(e,t,r,xu,n),Xm(e,r);else if(LN(s,e,t,n,r))r.stopPropagation();else if(Xm(e,r),t&4&&-1<FN.indexOf(e)){for(;s!==null;){var i=ra(s);if(i!==null&&q0(i),i=Af(e,t,n,r),i===null&&Dc(e,t,r,xu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Dc(e,t,r,null,n)}}var xu=null;function Af(e,t,n,r){if(xu=null,e=lp(r),e=fs(e),e!==null)if(t=Ls(e),t===null)e=null;else if(n=t.tag,n===13){if(e=B0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xu=e,null}function J0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_N()){case cp:return 1;case V0:return 4;case Eu:case $N:return 16;case H0:return 536870912;default:return 16}default:return 16}}var Cr=null,dp=null,Qa=null;function Z0(){if(Qa)return Qa;var e,t=dp,n=t.length,r,s="value"in Cr?Cr.value:Cr.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[i-r];r++);return Qa=s.slice(e,1<r?1-r:void 0)}function Xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function Jm(){return!1}function Jt(e){function t(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ca:Jm,this.isPropagationStopped=Jm,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Jt(Pi),na=Me({},Pi,{view:0,detail:0}),MN=Jt(na),Tc,kc,Ji,yl=Me({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(Tc=e.screenX-Ji.screenX,kc=e.screenY-Ji.screenY):kc=Tc=0,Ji=e),Tc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Zm=Jt(yl),UN=Me({},yl,{dataTransfer:0}),VN=Jt(UN),HN=Me({},na,{relatedTarget:0}),xc=Jt(HN),WN=Me({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),KN=Jt(WN),qN=Me({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),GN=Jt(qN),QN=Me({},Pi,{data:0}),ey=Jt(QN),XN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZN(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=JN[e])?!!t[e]:!1}function yp(){return ZN}var eE=Me({},na,{key:function(e){if(e.key){var t=XN[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?YN[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yp,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tE=Jt(eE),nE=Me({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ty=Jt(nE),rE=Me({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yp}),sE=Jt(rE),iE=Me({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=Jt(iE),aE=Me({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uE=Jt(aE),lE=[9,13,27,32],gp=cr&&"CompositionEvent"in window,yo=null;cr&&"documentMode"in document&&(yo=document.documentMode);var cE=cr&&"TextEvent"in window&&!yo,ev=cr&&(!gp||yo&&8<yo&&11>=yo),ny=" ",ry=!1;function tv(e,t){switch(e){case"keyup":return lE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function fE(e,t){switch(e){case"compositionend":return nv(t);case"keypress":return t.which!==32?null:(ry=!0,ny);case"textInput":return e=t.data,e===ny&&ry?null:e;default:return null}}function hE(e,t){if(Js)return e==="compositionend"||!gp&&tv(e,t)?(e=Z0(),Qa=dp=Cr=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ev&&t.locale!=="ko"?null:t.data;default:return null}}var pE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pE[e.type]:t==="textarea"}function rv(e,t,n,r){P0(r),t=_u(t,"onChange"),0<t.length&&(n=new mp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var go=null,Co=null;function dE(e){dv(e,0)}function gl(e){var t=ti(e);if(_0(t))return e}function mE(e,t){if(e==="change")return t}var sv=!1;if(cr){var _c;if(cr){var $c="oninput"in document;if(!$c){var iy=document.createElement("div");iy.setAttribute("oninput","return;"),$c=typeof iy.oninput=="function"}_c=$c}else _c=!1;sv=_c&&(!document.documentMode||9<document.documentMode)}function oy(){go&&(go.detachEvent("onpropertychange",iv),Co=go=null)}function iv(e){if(e.propertyName==="value"&&gl(Co)){var t=[];rv(t,Co,e,lp(e)),z0(dE,t)}}function yE(e,t,n){e==="focusin"?(oy(),go=t,Co=n,go.attachEvent("onpropertychange",iv)):e==="focusout"&&oy()}function gE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Co)}function vE(e,t){if(e==="click")return gl(t)}function wE(e,t){if(e==="input"||e==="change")return gl(t)}function bE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var In=typeof Object.is=="function"?Object.is:bE;function Do(e,t){if(In(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!pf.call(t,s)||!In(e[s],t[s]))return!1}return!0}function ay(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uy(e,t){var n=ay(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ay(n)}}function ov(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ov(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function av(){for(var e=window,t=bu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bu(e.document)}return t}function vp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function SE(e){var t=av(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&vp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=uy(n,i);var o=uy(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var NE=cr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Cf=null,vo=null,Df=!1;function ly(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Zs==null||Zs!==bu(r)||(r=Zs,"selectionStart"in r&&vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&Do(vo,r)||(vo=r,r=_u(Cf,"onSelect"),0<r.length&&(t=new mp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zs)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Oc={},uv={};cr&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function vl(e){if(Oc[e])return Oc[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uv)return Oc[e]=t[n];return e}var lv=vl("animationend"),cv=vl("animationiteration"),fv=vl("animationstart"),hv=vl("transitionend"),pv=new Map,cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){pv.set(e,t),Fs(t,[e])}for(var Ic=0;Ic<cy.length;Ic++){var Ac=cy[Ic],EE=Ac.toLowerCase(),TE=Ac[0].toUpperCase()+Ac.slice(1);Qr(EE,"on"+TE)}Qr(lv,"onAnimationEnd");Qr(cv,"onAnimationIteration");Qr(fv,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(hv,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function fy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,EN(r,t,void 0,e),e.currentTarget=null}function dv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;fy(s,a,l),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;fy(s,a,l),i=u}}}if(Nu)throw e=$f,Nu=!1,$f=null,e}function Ae(e,t){var n=t[zf];n===void 0&&(n=t[zf]=new Set);var r=e+"__bubble";n.has(r)||(mv(t,e,2,!1),n.add(r))}function Cc(e,t,n){var r=0;t&&(r|=4),mv(n,e,r,t)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[Pa]){e[Pa]=!0,N0.forEach(function(n){n!=="selectionchange"&&(kE.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pa]||(t[Pa]=!0,Cc("selectionchange",!1,t))}}function mv(e,t,n,r){switch(J0(t)){case 1:var s=BN;break;case 4:s=jN;break;default:s=pp}n=s.bind(null,t,n,e),s=void 0,!_f||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Dc(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}z0(function(){var l=i,f=lp(n),h=[];e:{var p=pv.get(e);if(p!==void 0){var y=mp,v=e;switch(e){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":y=tE;break;case"focusin":v="focus",y=xc;break;case"focusout":v="blur",y=xc;break;case"beforeblur":case"afterblur":y=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=VN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sE;break;case lv:case cv:case fv:y=KN;break;case hv:y=oE;break;case"scroll":y=MN;break;case"wheel":y=uE;break;case"copy":case"cut":case"paste":y=GN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ty}var w=(t&4)!==0,k=!w&&e==="scroll",S=w?p!==null?p+"Capture":null:p;w=[];for(var N=l,T;N!==null;){T=N;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,S!==null&&(x=$o(N,S),x!=null&&w.push(Ro(N,x,T)))),k)break;N=N.return}0<w.length&&(p=new y(p,v,null,n,f),h.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==kf&&(v=n.relatedTarget||n.fromElement)&&(fs(v)||v[fr]))break e;if((y||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=l,v=v?fs(v):null,v!==null&&(k=Ls(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=l),y!==v)){if(w=Zm,x="onMouseLeave",S="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(w=ty,x="onPointerLeave",S="onPointerEnter",N="pointer"),k=y==null?p:ti(y),T=v==null?p:ti(v),p=new w(x,N+"leave",y,n,f),p.target=k,p.relatedTarget=T,x=null,fs(f)===l&&(w=new w(S,N+"enter",v,n,f),w.target=T,w.relatedTarget=k,x=w),k=x,y&&v)t:{for(w=y,S=v,N=0,T=w;T;T=Ws(T))N++;for(T=0,x=S;x;x=Ws(x))T++;for(;0<N-T;)w=Ws(w),N--;for(;0<T-N;)S=Ws(S),T--;for(;N--;){if(w===S||S!==null&&w===S.alternate)break t;w=Ws(w),S=Ws(S)}w=null}else w=null;y!==null&&hy(h,p,y,w,!1),v!==null&&k!==null&&hy(h,k,v,w,!0)}}e:{if(p=l?ti(l):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=mE;else if(sy(p))if(sv)C=wE;else{C=gE;var P=yE}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=vE);if(C&&(C=C(e,l))){rv(h,C,n,f);break e}P&&P(e,p,l),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&bf(p,"number",p.value)}switch(P=l?ti(l):window,e){case"focusin":(sy(P)||P.contentEditable==="true")&&(Zs=P,Cf=l,vo=null);break;case"focusout":vo=Cf=Zs=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,ly(h,n,f);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":ly(h,n,f)}var F;if(gp)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Js?tv(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(ev&&n.locale!=="ko"&&(Js||L!=="onCompositionStart"?L==="onCompositionEnd"&&Js&&(F=Z0()):(Cr=f,dp="value"in Cr?Cr.value:Cr.textContent,Js=!0)),P=_u(l,L),0<P.length&&(L=new ey(L,e,null,n,f),h.push({event:L,listeners:P}),F?L.data=F:(F=nv(n),F!==null&&(L.data=F)))),(F=cE?fE(e,n):hE(e,n))&&(l=_u(l,"onBeforeInput"),0<l.length&&(f=new ey("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:l}),f.data=F))}dv(h,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _u(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=$o(e,n),i!=null&&r.unshift(Ro(e,i,s)),i=$o(e,t),i!=null&&r.push(Ro(e,i,s))),e=e.return}return r}function Ws(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hy(e,t,n,r,s){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,s?(u=$o(n,i),u!=null&&o.unshift(Ro(n,u,a))):s||(u=$o(n,i),u!=null&&o.push(Ro(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var xE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function py(e){return(typeof e=="string"?e:""+e).replace(xE,`
`).replace(_E,"")}function Ra(e,t,n){if(t=py(t),py(e)!==t&&n)throw Error(W(425))}function $u(){}var Pf=null,Rf=null;function Ff(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,$E=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,OE=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(e){return dy.resolve(null).then(e).catch(IE)}:Lf;function IE(e){setTimeout(function(){throw e})}function Pc(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ao(t)}function zr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function my(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ri,Fo="__reactProps$"+Ri,fr="__reactContainer$"+Ri,zf="__reactEvents$"+Ri,AE="__reactListeners$"+Ri,CE="__reactHandles$"+Ri;function fs(e){var t=e[Hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[Hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=my(e);e!==null;){if(n=e[Hn])return n;e=my(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[Hn]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function wl(e){return e[Fo]||null}var Bf=[],ni=-1;function Xr(e){return{current:e}}function De(e){0>ni||(e.current=Bf[ni],Bf[ni]=null,ni--)}function Oe(e,t){ni++,Bf[ni]=e.current,e.current=t}var Kr={},Tt=Xr(Kr),Mt=Xr(!1),Ts=Kr;function vi(e,t){var n=e.type.contextTypes;if(!n)return Kr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ut(e){return e=e.childContextTypes,e!=null}function Ou(){De(Mt),De(Tt)}function yy(e,t,n){if(Tt.current!==Kr)throw Error(W(168));Oe(Tt,t),Oe(Mt,n)}function yv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(W(108,yN(e)||"Unknown",s));return Me({},n,r)}function Iu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,Ts=Tt.current,Oe(Tt,e),Oe(Mt,Mt.current),!0}function gy(e,t,n){var r=e.stateNode;if(!r)throw Error(W(169));n?(e=yv(e,t,Ts),r.__reactInternalMemoizedMergedChildContext=e,De(Mt),De(Tt),Oe(Tt,e)):De(Mt),Oe(Mt,n)}var nr=null,bl=!1,Rc=!1;function gv(e){nr===null?nr=[e]:nr.push(e)}function DE(e){bl=!0,gv(e)}function Yr(){if(!Rc&&nr!==null){Rc=!0;var e=0,t=xe;try{var n=nr;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nr=null,bl=!1}catch(s){throw nr!==null&&(nr=nr.slice(e+1)),U0(cp,Yr),s}finally{xe=t,Rc=!1}}return null}var ri=[],si=0,Au=null,Cu=0,nn=[],rn=0,ks=null,or=1,ar="";function as(e,t){ri[si++]=Cu,ri[si++]=Au,Au=e,Cu=t}function vv(e,t,n){nn[rn++]=or,nn[rn++]=ar,nn[rn++]=ks,ks=e;var r=or;e=ar;var s=32-Tn(r)-1;r&=~(1<<s),n+=1;var i=32-Tn(t)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,or=1<<32-Tn(t)+s|n<<s|r,ar=i+e}else or=1<<i|n<<s|r,ar=e}function wp(e){e.return!==null&&(as(e,1),vv(e,1,0))}function bp(e){for(;e===Au;)Au=ri[--si],ri[si]=null,Cu=ri[--si],ri[si]=null;for(;e===ks;)ks=nn[--rn],nn[rn]=null,ar=nn[--rn],nn[rn]=null,or=nn[--rn],nn[rn]=null}var Gt=null,qt=null,Le=!1,Nn=null;function wv(e,t){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,qt=zr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ks!==null?{id:or,overflow:ar}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,qt=null,!0):!1;default:return!1}}function jf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mf(e){if(Le){var t=qt;if(t){var n=t;if(!vy(e,t)){if(jf(e))throw Error(W(418));t=zr(n.nextSibling);var r=Gt;t&&vy(e,t)?wv(r,n):(e.flags=e.flags&-4097|2,Le=!1,Gt=e)}}else{if(jf(e))throw Error(W(418));e.flags=e.flags&-4097|2,Le=!1,Gt=e}}}function wy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Fa(e){if(e!==Gt)return!1;if(!Le)return wy(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ff(e.type,e.memoizedProps)),t&&(t=qt)){if(jf(e))throw bv(),Error(W(418));for(;t;)wv(e,t),t=zr(t.nextSibling)}if(wy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=zr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Gt?zr(e.stateNode.nextSibling):null;return!0}function bv(){for(var e=qt;e;)e=zr(e.nextSibling)}function wi(){qt=Gt=null,Le=!1}function Sp(e){Nn===null?Nn=[e]:Nn.push(e)}var PE=br.ReactCurrentBatchConfig;function bn(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Du=Xr(null),Pu=null,ii=null,Np=null;function Ep(){Np=ii=Pu=null}function Tp(e){var t=Du.current;De(Du),e._currentValue=t}function Uf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){Pu=e,Np=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(Np!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(Pu===null)throw Error(W(308));ii=e,Pu.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var hs=null;function kp(e){hs===null?hs=[e]:hs.push(e)}function Sv(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,kp(t)):(n.next=s.next,s.next=n),t.interleaved=n,hr(e,r)}function hr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $r=!1;function xp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,hr(e,n)}return s=r.interleaved,s===null?(t.next=t,kp(r)):(t.next=s.next,s.next=t),r.interleaved=t,hr(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fp(e,n)}}function by(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ru(e,t,n,r){var s=e.updateQueue;$r=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?i=l:o.next=l,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=l:a.next=l,f.lastBaseUpdate=u))}if(i!==null){var h=s.baseState;o=0,f=l=u=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(p=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(y,h,p):v,p==null)break e;h=Me({},h,p);break e;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(l=f=y,u=h):f=f.next=y,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(f===null&&(u=h),s.baseState=u,s.firstBaseUpdate=l,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);_s|=o,e.lanes=o,e.memoizedState=h}}function Sy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(W(191,s));s.call(r)}}}var Ev=new S0.Component().refs;function Vf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?Ls(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$t(),s=Mr(e),i=ur(r,s);i.payload=t,n!=null&&(i.callback=n),t=Br(e,i,s),t!==null&&(kn(t,e,s,r),Ya(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$t(),s=Mr(e),i=ur(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Br(e,i,s),t!==null&&(kn(t,e,s,r),Ya(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),r=Mr(e),s=ur(n,r);s.tag=2,t!=null&&(s.callback=t),t=Br(e,s,r),t!==null&&(kn(t,e,r,n),Ya(t,e,r))}};function Ny(e,t,n,r,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Do(n,r)||!Do(s,i):!0}function Tv(e,t,n){var r=!1,s=Kr,i=t.contextType;return typeof i=="object"&&i!==null?i=un(i):(s=Ut(t)?Ts:Tt.current,r=t.contextTypes,i=(r=r!=null)?vi(e,s):Kr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ey(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Hf(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=Ev,xp(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=un(i):(i=Ut(t)?Ts:Tt.current,s.context=vi(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vf(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Sl.enqueueReplaceState(s,s.state,null),Ru(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=s.refs;a===Ev&&(a=s.refs={}),o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function La(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ty(e){var t=e._init;return t(e._payload)}function kv(e){function t(S,N){if(e){var T=S.deletions;T===null?(S.deletions=[N],S.flags|=16):T.push(N)}}function n(S,N){if(!e)return null;for(;N!==null;)t(S,N),N=N.sibling;return null}function r(S,N){for(S=new Map;N!==null;)N.key!==null?S.set(N.key,N):S.set(N.index,N),N=N.sibling;return S}function s(S,N){return S=Ur(S,N),S.index=0,S.sibling=null,S}function i(S,N,T){return S.index=T,e?(T=S.alternate,T!==null?(T=T.index,T<N?(S.flags|=2,N):T):(S.flags|=2,N)):(S.flags|=1048576,N)}function o(S){return e&&S.alternate===null&&(S.flags|=2),S}function a(S,N,T,x){return N===null||N.tag!==6?(N=Uc(T,S.mode,x),N.return=S,N):(N=s(N,T),N.return=S,N)}function u(S,N,T,x){var C=T.type;return C===Ys?f(S,N,T.props.children,x,T.key):N!==null&&(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Ty(C)===N.type)?(x=s(N,T.props),x.ref=Zi(S,N,T),x.return=S,x):(x=ru(T.type,T.key,T.props,null,S.mode,x),x.ref=Zi(S,N,T),x.return=S,x)}function l(S,N,T,x){return N===null||N.tag!==4||N.stateNode.containerInfo!==T.containerInfo||N.stateNode.implementation!==T.implementation?(N=Vc(T,S.mode,x),N.return=S,N):(N=s(N,T.children||[]),N.return=S,N)}function f(S,N,T,x,C){return N===null||N.tag!==7?(N=ws(T,S.mode,x,C),N.return=S,N):(N=s(N,T),N.return=S,N)}function h(S,N,T){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Uc(""+N,S.mode,T),N.return=S,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case xa:return T=ru(N.type,N.key,N.props,null,S.mode,T),T.ref=Zi(S,null,N),T.return=S,T;case Xs:return N=Vc(N,S.mode,T),N.return=S,N;case _r:var x=N._init;return h(S,x(N._payload),T)}if(ao(N)||Gi(N))return N=ws(N,S.mode,T,null),N.return=S,N;La(S,N)}return null}function p(S,N,T,x){var C=N!==null?N.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return C!==null?null:a(S,N,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case xa:return T.key===C?u(S,N,T,x):null;case Xs:return T.key===C?l(S,N,T,x):null;case _r:return C=T._init,p(S,N,C(T._payload),x)}if(ao(T)||Gi(T))return C!==null?null:f(S,N,T,x,null);La(S,T)}return null}function y(S,N,T,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(T)||null,a(N,S,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xa:return S=S.get(x.key===null?T:x.key)||null,u(N,S,x,C);case Xs:return S=S.get(x.key===null?T:x.key)||null,l(N,S,x,C);case _r:var P=x._init;return y(S,N,T,P(x._payload),C)}if(ao(x)||Gi(x))return S=S.get(T)||null,f(N,S,x,C,null);La(N,x)}return null}function v(S,N,T,x){for(var C=null,P=null,F=N,L=N=0,M=null;F!==null&&L<T.length;L++){F.index>L?(M=F,F=null):M=F.sibling;var B=p(S,F,T[L],x);if(B===null){F===null&&(F=M);break}e&&F&&B.alternate===null&&t(S,F),N=i(B,N,L),P===null?C=B:P.sibling=B,P=B,F=M}if(L===T.length)return n(S,F),Le&&as(S,L),C;if(F===null){for(;L<T.length;L++)F=h(S,T[L],x),F!==null&&(N=i(F,N,L),P===null?C=F:P.sibling=F,P=F);return Le&&as(S,L),C}for(F=r(S,F);L<T.length;L++)M=y(F,S,L,T[L],x),M!==null&&(e&&M.alternate!==null&&F.delete(M.key===null?L:M.key),N=i(M,N,L),P===null?C=M:P.sibling=M,P=M);return e&&F.forEach(function(V){return t(S,V)}),Le&&as(S,L),C}function w(S,N,T,x){var C=Gi(T);if(typeof C!="function")throw Error(W(150));if(T=C.call(T),T==null)throw Error(W(151));for(var P=C=null,F=N,L=N=0,M=null,B=T.next();F!==null&&!B.done;L++,B=T.next()){F.index>L?(M=F,F=null):M=F.sibling;var V=p(S,F,B.value,x);if(V===null){F===null&&(F=M);break}e&&F&&V.alternate===null&&t(S,F),N=i(V,N,L),P===null?C=V:P.sibling=V,P=V,F=M}if(B.done)return n(S,F),Le&&as(S,L),C;if(F===null){for(;!B.done;L++,B=T.next())B=h(S,B.value,x),B!==null&&(N=i(B,N,L),P===null?C=B:P.sibling=B,P=B);return Le&&as(S,L),C}for(F=r(S,F);!B.done;L++,B=T.next())B=y(F,S,L,B.value,x),B!==null&&(e&&B.alternate!==null&&F.delete(B.key===null?L:B.key),N=i(B,N,L),P===null?C=B:P.sibling=B,P=B);return e&&F.forEach(function(ee){return t(S,ee)}),Le&&as(S,L),C}function k(S,N,T,x){if(typeof T=="object"&&T!==null&&T.type===Ys&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case xa:e:{for(var C=T.key,P=N;P!==null;){if(P.key===C){if(C=T.type,C===Ys){if(P.tag===7){n(S,P.sibling),N=s(P,T.props.children),N.return=S,S=N;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Ty(C)===P.type){n(S,P.sibling),N=s(P,T.props),N.ref=Zi(S,P,T),N.return=S,S=N;break e}n(S,P);break}else t(S,P);P=P.sibling}T.type===Ys?(N=ws(T.props.children,S.mode,x,T.key),N.return=S,S=N):(x=ru(T.type,T.key,T.props,null,S.mode,x),x.ref=Zi(S,N,T),x.return=S,S=x)}return o(S);case Xs:e:{for(P=T.key;N!==null;){if(N.key===P)if(N.tag===4&&N.stateNode.containerInfo===T.containerInfo&&N.stateNode.implementation===T.implementation){n(S,N.sibling),N=s(N,T.children||[]),N.return=S,S=N;break e}else{n(S,N);break}else t(S,N);N=N.sibling}N=Vc(T,S.mode,x),N.return=S,S=N}return o(S);case _r:return P=T._init,k(S,N,P(T._payload),x)}if(ao(T))return v(S,N,T,x);if(Gi(T))return w(S,N,T,x);La(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,N!==null&&N.tag===6?(n(S,N.sibling),N=s(N,T),N.return=S,S=N):(n(S,N),N=Uc(T,S.mode,x),N.return=S,S=N),o(S)):n(S,N)}return k}var bi=kv(!0),xv=kv(!1),sa={},Qn=Xr(sa),Lo=Xr(sa),zo=Xr(sa);function ps(e){if(e===sa)throw Error(W(174));return e}function _p(e,t){switch(Oe(zo,t),Oe(Lo,e),Oe(Qn,sa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nf(t,e)}De(Qn),Oe(Qn,t)}function Si(){De(Qn),De(Lo),De(zo)}function _v(e){ps(zo.current);var t=ps(Qn.current),n=Nf(t,e.type);t!==n&&(Oe(Lo,e),Oe(Qn,n))}function $p(e){Lo.current===e&&(De(Qn),De(Lo))}var Be=Xr(0);function Fu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fc=[];function Op(){for(var e=0;e<Fc.length;e++)Fc[e]._workInProgressVersionPrimary=null;Fc.length=0}var Ja=br.ReactCurrentDispatcher,Lc=br.ReactCurrentBatchConfig,xs=0,je=null,Ze=null,st=null,Lu=!1,wo=!1,Bo=0,RE=0;function vt(){throw Error(W(321))}function Ip(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!In(e[n],t[n]))return!1;return!0}function Ap(e,t,n,r,s,i){if(xs=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?BE:jE,e=n(r,s),wo){i=0;do{if(wo=!1,Bo=0,25<=i)throw Error(W(301));i+=1,st=Ze=null,t.updateQueue=null,Ja.current=ME,e=n(r,s)}while(wo)}if(Ja.current=zu,t=Ze!==null&&Ze.next!==null,xs=0,st=Ze=je=null,Lu=!1,t)throw Error(W(300));return e}function Cp(){var e=Bo!==0;return Bo=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?je.memoizedState=st=e:st=st.next=e,st}function ln(){if(Ze===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=st===null?je.memoizedState:st.next;if(t!==null)st=t,Ze=e;else{if(e===null)throw Error(W(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?je.memoizedState=st=e:st=st.next=e}return st}function jo(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=ln(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=Ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,l=i;do{var f=l.lane;if((xs&f)===f)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var h={lane:f,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,je.lanes|=f,_s|=f}l=l.next}while(l!==null&&l!==i);u===null?o=r:u.next=a,In(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,je.lanes|=i,_s|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bc(e){var t=ln(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);In(i,t.memoizedState)||(Bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $v(){}function Ov(e,t){var n=je,r=ln(),s=t(),i=!In(r.memoizedState,s);if(i&&(r.memoizedState=s,Bt=!0),r=r.queue,Dp(Cv.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Mo(9,Av.bind(null,n,r,s,t),void 0,null),at===null)throw Error(W(349));xs&30||Iv(n,t,s)}return s}function Iv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Av(e,t,n,r){t.value=n,t.getSnapshot=r,Dv(t)&&Pv(e)}function Cv(e,t,n){return n(function(){Dv(t)&&Pv(e)})}function Dv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!In(e,n)}catch{return!0}}function Pv(e){var t=hr(e,1);t!==null&&kn(t,e,1,-1)}function ky(e){var t=Mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=zE.bind(null,je,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rv(){return ln().memoizedState}function Za(e,t,n,r){var s=Mn();je.flags|=e,s.memoizedState=Mo(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var s=ln();r=r===void 0?null:r;var i=void 0;if(Ze!==null){var o=Ze.memoizedState;if(i=o.destroy,r!==null&&Ip(r,o.deps)){s.memoizedState=Mo(t,n,i,r);return}}je.flags|=e,s.memoizedState=Mo(1|t,n,i,r)}function xy(e,t){return Za(8390656,8,e,t)}function Dp(e,t){return Nl(2048,8,e,t)}function Fv(e,t){return Nl(4,2,e,t)}function Lv(e,t){return Nl(4,4,e,t)}function zv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bv(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,zv.bind(null,t,e),n)}function Pp(){}function jv(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ip(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mv(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ip(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uv(e,t,n){return xs&21?(In(n,t)||(n=W0(),je.lanes|=n,_s|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=n)}function FE(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Lc.transition;Lc.transition={};try{e(!1),t()}finally{xe=n,Lc.transition=r}}function Vv(){return ln().memoizedState}function LE(e,t,n){var r=Mr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(e))Wv(t,n);else if(n=Sv(e,t,n,r),n!==null){var s=$t();kn(n,e,r,s),Kv(n,t,r)}}function zE(e,t,n){var r=Mr(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(e))Wv(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,In(a,o)){var u=t.interleaved;u===null?(s.next=s,kp(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=Sv(e,t,s,r),n!==null&&(s=$t(),kn(n,e,r,s),Kv(n,t,r))}}function Hv(e){var t=e.alternate;return e===je||t!==null&&t===je}function Wv(e,t){wo=Lu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fp(e,n)}}var zu={readContext:un,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},BE={readContext:un,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:xy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,zv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=Mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=LE.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:ky,useDebugValue:Pp,useDeferredValue:function(e){return Mn().memoizedState=e},useTransition:function(){var e=ky(!1),t=e[0];return e=FE.bind(null,e[1]),Mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,s=Mn();if(Le){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),at===null)throw Error(W(349));xs&30||Iv(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,xy(Cv.bind(null,r,i,e),[e]),r.flags|=2048,Mo(9,Av.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mn(),t=at.identifierPrefix;if(Le){var n=ar,r=or;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=RE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jE={readContext:un,useCallback:jv,useContext:un,useEffect:Dp,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Lv,useMemo:Mv,useReducer:zc,useRef:Rv,useState:function(){return zc(jo)},useDebugValue:Pp,useDeferredValue:function(e){var t=ln();return Uv(t,Ze.memoizedState,e)},useTransition:function(){var e=zc(jo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Ov,useId:Vv,unstable_isNewReconciler:!1},ME={readContext:un,useCallback:jv,useContext:un,useEffect:Dp,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Lv,useMemo:Mv,useReducer:Bc,useRef:Rv,useState:function(){return Bc(jo)},useDebugValue:Pp,useDeferredValue:function(e){var t=ln();return Ze===null?t.memoizedState=e:Uv(t,Ze.memoizedState,e)},useTransition:function(){var e=Bc(jo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Ov,useId:Vv,unstable_isNewReconciler:!1};function Ni(e,t){try{var n="",r=t;do n+=mN(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function jc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function qv(e,t,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ju||(ju=!0,th=r),Wf(e,t)},n}function Gv(e,t,n){n=ur(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Wf(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wf(e,t),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _y(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new UE;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=nT.bind(null,e,t,n),t.then(e,e))}function $y(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oy(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ur(-1,1),t.tag=2,Br(n,t,1))),n.lanes|=1),e)}var VE=br.ReactCurrentOwner,Bt=!1;function xt(e,t,n,r){t.child=e===null?xv(t,null,n,r):bi(t,e.child,n,r)}function Iy(e,t,n,r,s){n=n.render;var i=t.ref;return pi(t,s),r=Ap(e,t,n,r,i,s),n=Cp(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,pr(e,t,s)):(Le&&n&&wp(t),t.flags|=1,xt(e,t,r,s),t.child)}function Ay(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Up(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qv(e,t,i,r,s)):(e=ru(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&e.ref===t.ref)return pr(e,t,s)}return t.flags|=1,e=Ur(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qv(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Do(i,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,pr(e,t,s)}return Kf(e,t,n,r,s)}function Xv(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ai,Wt),Wt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(ai,Wt),Wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Oe(ai,Wt),Wt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oe(ai,Wt),Wt|=r;return xt(e,t,s,n),t.child}function Yv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kf(e,t,n,r,s){var i=Ut(n)?Ts:Tt.current;return i=vi(t,i),pi(t,s),n=Ap(e,t,n,r,i,s),r=Cp(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,pr(e,t,s)):(Le&&r&&wp(t),t.flags|=1,xt(e,t,n,s),t.child)}function Cy(e,t,n,r,s){if(Ut(n)){var i=!0;Iu(t)}else i=!1;if(pi(t,s),t.stateNode===null)eu(e,t),Tv(t,n,r),Hf(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=un(l):(l=Ut(n)?Ts:Tt.current,l=vi(t,l));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Ey(t,o,r,l),$r=!1;var p=t.memoizedState;o.state=p,Ru(t,r,o,s),u=t.memoizedState,a!==r||p!==u||Mt.current||$r?(typeof f=="function"&&(Vf(t,n,f,r),u=t.memoizedState),(a=$r||Ny(t,n,a,r,p,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Nv(e,t),a=t.memoizedProps,l=t.type===t.elementType?a:bn(t.type,a),o.props=l,h=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=Ut(n)?Ts:Tt.current,u=vi(t,u));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==u)&&Ey(t,o,r,u),$r=!1,p=t.memoizedState,o.state=p,Ru(t,r,o,s);var v=t.memoizedState;a!==h||p!==v||Mt.current||$r?(typeof y=="function"&&(Vf(t,n,y,r),v=t.memoizedState),(l=$r||Ny(t,n,l,r,p,v,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return qf(e,t,n,r,i,s)}function qf(e,t,n,r,s,i){Yv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&gy(t,n,!1),pr(e,t,i);r=t.stateNode,VE.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bi(t,e.child,null,i),t.child=bi(t,null,a,i)):xt(e,t,a,i),t.memoizedState=r.state,s&&gy(t,n,!0),t.child}function Jv(e){var t=e.stateNode;t.pendingContext?yy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yy(e,t.context,!1),_p(e,t.containerInfo)}function Dy(e,t,n,r,s){return wi(),Sp(s),t.flags|=256,xt(e,t,n,r),t.child}var Gf={dehydrated:null,treeContext:null,retryLane:0};function Qf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zv(e,t,n){var r=t.pendingProps,s=Be.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Oe(Be,s&1),e===null)return Mf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=kl(o,r,0,null),e=ws(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qf(n),t.memoizedState=Gf,e):Rp(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return HE(e,t,o,r,a,s,n);if(i){i=r.fallback,o=t.mode,s=e.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Ur(a,i):(i=ws(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Gf,r}return i=e.child,e=i.sibling,r=Ur(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rp(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function za(e,t,n,r){return r!==null&&Sp(r),bi(t,e.child,null,n),e=Rp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function HE(e,t,n,r,s,i,o){if(n)return t.flags&256?(t.flags&=-257,r=jc(Error(W(422))),za(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=kl({mode:"visible",children:r.children},s,0,null),i=ws(i,s,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bi(t,e.child,null,o),t.child.memoizedState=Qf(o),t.memoizedState=Gf,i);if(!(t.mode&1))return za(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(W(419)),r=jc(i,r,void 0),za(e,t,o,r)}if(a=(o&e.childLanes)!==0,Bt||a){if(r=at,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,hr(e,s),kn(r,e,s,-1))}return Mp(),r=jc(Error(W(421))),za(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=rT.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,qt=zr(s.nextSibling),Gt=t,Le=!0,Nn=null,e!==null&&(nn[rn++]=or,nn[rn++]=ar,nn[rn++]=ks,or=e.id,ar=e.overflow,ks=t),t=Rp(t,r.children),t.flags|=4096,t)}function Py(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uf(e.return,t,n)}function Mc(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function e1(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(xt(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Py(e,n,t);else if(e.tag===19)Py(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(Be,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Fu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Mc(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Fu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Mc(t,!0,n,null,i);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_s|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=Ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function WE(e,t,n){switch(t.tag){case 3:Jv(t),wi();break;case 5:_v(t);break;case 1:Ut(t.type)&&Iu(t);break;case 4:_p(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Oe(Du,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Zv(e,t,n):(Oe(Be,Be.current&1),e=pr(e,t,n),e!==null?e.sibling:null);Oe(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return e1(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Oe(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,Xv(e,t,n)}return pr(e,t,n)}var t1,Xf,n1,r1;t1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};n1=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ps(Qn.current);var i=null;switch(n){case"input":s=vf(e,s),r=vf(e,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=Sf(e,s),r=Sf(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$u)}Ef(n,r);var o;n=null;for(l in s)if(!r.hasOwnProperty(l)&&s.hasOwnProperty(l)&&s[l]!=null)if(l==="style"){var a=s[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xo.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var u=r[l];if(a=s!=null?s[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(xo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ae("scroll",e),i||a===u||(i=[])):(i=i||[]).push(l,u))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};r1=function(e,t,n,r){n!==r&&(t.flags|=4)};function eo(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function KE(e,t,n){var r=t.pendingProps;switch(bp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Ut(t.type)&&Ou(),wt(t),null;case 3:return r=t.stateNode,Si(),De(Mt),De(Tt),Op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nn!==null&&(sh(Nn),Nn=null))),Xf(e,t),wt(t),null;case 5:$p(t);var s=ps(zo.current);if(n=t.type,e!==null&&t.stateNode!=null)n1(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(W(166));return wt(t),null}if(e=ps(Qn.current),Fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Hn]=t,r[Fo]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<lo.length;s++)Ae(lo[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Vm(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":Wm(r,i),Ae("invalid",r)}Ef(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ra(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ra(r.textContent,a,e),s=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":_a(r),Hm(r,i,!0);break;case"textarea":_a(r),Km(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$u)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=I0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Hn]=t,e[Fo]=r,t1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Tf(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),s=r;break;case"iframe":case"object":case"embed":Ae("load",e),s=r;break;case"video":case"audio":for(s=0;s<lo.length;s++)Ae(lo[s],e);s=r;break;case"source":Ae("error",e),s=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),s=r;break;case"details":Ae("toggle",e),s=r;break;case"input":Vm(e,r),s=vf(e,r),Ae("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Wm(e,r),s=Sf(e,r),Ae("invalid",e);break;default:s=r}Ef(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?D0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A0(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_o(e,u):typeof u=="number"&&_o(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ae("scroll",e):u!=null&&ip(e,i,u,o))}switch(n){case"input":_a(e),Hm(e,r,!1);break;case"textarea":_a(e),Km(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?li(e,!!r.multiple,i,!1):r.defaultValue!=null&&li(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=$u)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)r1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(W(166));if(n=ps(zo.current),ps(Qn.current),Fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Hn]=t,(i=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:Ra(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=t,t.stateNode=r}return wt(t),null;case 13:if(De(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&qt!==null&&t.mode&1&&!(t.flags&128))bv(),wi(),t.flags|=98560,i=!1;else if(i=Fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(W(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[Hn]=t}else wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),i=!1}else Nn!==null&&(sh(Nn),Nn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?tt===0&&(tt=3):Mp())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Si(),Xf(e,t),e===null&&Po(t.stateNode.containerInfo),wt(t),null;case 10:return Tp(t.type._context),wt(t),null;case 17:return Ut(t.type)&&Ou(),wt(t),null;case 19:if(De(Be),i=t.memoizedState,i===null)return wt(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)eo(i,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fu(e),o!==null){for(t.flags|=128,eo(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Be,Be.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ke()>Ei&&(t.flags|=128,r=!0,eo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Fu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Le)return wt(t),null}else 2*Ke()-i.renderingStartTime>Ei&&n!==1073741824&&(t.flags|=128,r=!0,eo(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ke(),t.sibling=null,n=Be.current,Oe(Be,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return jp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Wt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function qE(e,t){switch(bp(t),t.tag){case 1:return Ut(t.type)&&Ou(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Si(),De(Mt),De(Tt),Op(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $p(t),null;case 13:if(De(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Be),null;case 4:return Si(),null;case 10:return Tp(t.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var Ba=!1,Nt=!1,GE=typeof WeakSet=="function"?WeakSet:Set,Y=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function Yf(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var Ry=!1;function QE(e,t){if(Pf=ku,e=av(),vp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,f=0,h=e,p=null;t:for(;;){for(var y;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++l===s&&(a=o),p===i&&++f===r&&(u=o),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:e,selectionRange:n},ku=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,S=t.stateNode,N=S.getSnapshotBeforeUpdate(t.elementType===t.type?w:bn(t.type,w),k);S.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(x){Ve(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return v=Ry,Ry=!1,v}function bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Yf(t,n,i)}s=s.next}while(s!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function s1(e){var t=e.alternate;t!==null&&(e.alternate=null,s1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hn],delete t[Fo],delete t[zf],delete t[AE],delete t[CE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i1(e){return e.tag===5||e.tag===3||e.tag===4}function Fy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$u));else if(r!==4&&(e=e.child,e!==null))for(Zf(e,t,n),e=e.sibling;e!==null;)Zf(e,t,n),e=e.sibling}function eh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eh(e,t,n),e=e.sibling;e!==null;)eh(e,t,n),e=e.sibling}var ht=null,Sn=!1;function Tr(e,t,n){for(n=n.child;n!==null;)o1(e,t,n),n=n.sibling}function o1(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Nt||oi(n,t);case 6:var r=ht,s=Sn;ht=null,Tr(e,t,n),ht=r,Sn=s,ht!==null&&(Sn?(e=ht,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(Sn?(e=ht,n=n.stateNode,e.nodeType===8?Pc(e.parentNode,n):e.nodeType===1&&Pc(e,n),Ao(e)):Pc(ht,n.stateNode));break;case 4:r=ht,s=Sn,ht=n.stateNode.containerInfo,Sn=!0,Tr(e,t,n),ht=r,Sn=s;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Yf(n,t,o),s=s.next}while(s!==r)}Tr(e,t,n);break;case 1:if(!Nt&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,t,a)}Tr(e,t,n);break;case 21:Tr(e,t,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Tr(e,t,n),Nt=r):Tr(e,t,n);break;default:Tr(e,t,n)}}function Ly(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new GE),t.forEach(function(r){var s=sT.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function vn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,Sn=!1;break e;case 3:ht=a.stateNode.containerInfo,Sn=!0;break e;case 4:ht=a.stateNode.containerInfo,Sn=!0;break e}a=a.return}if(ht===null)throw Error(W(160));o1(i,o,s),ht=null,Sn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(l){Ve(s,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}function a1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(t,e),jn(e),r&4){try{bo(3,e,e.return),El(3,e)}catch(w){Ve(e,e.return,w)}try{bo(5,e,e.return)}catch(w){Ve(e,e.return,w)}}break;case 1:vn(t,e),jn(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(vn(t,e),jn(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var s=e.stateNode;try{_o(s,"")}catch(w){Ve(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&$0(s,i),Tf(a,o);var l=Tf(a,i);for(o=0;o<u.length;o+=2){var f=u[o],h=u[o+1];f==="style"?D0(s,h):f==="dangerouslySetInnerHTML"?A0(s,h):f==="children"?_o(s,h):ip(s,f,h,l)}switch(a){case"input":wf(s,i);break;case"textarea":O0(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?li(s,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?li(s,!!i.multiple,i.defaultValue,!0):li(s,!!i.multiple,i.multiple?[]:"",!1))}s[Fo]=i}catch(w){Ve(e,e.return,w)}}break;case 6:if(vn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(W(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(w){Ve(e,e.return,w)}}break;case 3:if(vn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(w){Ve(e,e.return,w)}break;case 4:vn(t,e),jn(e);break;case 13:vn(t,e),jn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(zp=Ke())),r&4&&Ly(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Nt=(l=Nt)||f,vn(t,e),Nt=l):vn(t,e),jn(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(h=Y=f;Y!==null;){switch(p=Y,y=p.child,p.tag){case 0:case 11:case 14:case 15:bo(4,p,p.return);break;case 1:oi(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ve(r,n,w)}}break;case 5:oi(p,p.return);break;case 22:if(p.memoizedState!==null){By(h);continue}}y!==null?(y.return=p,Y=y):By(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,l?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=C0("display",o))}catch(w){Ve(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(w){Ve(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vn(t,e),jn(e),r&4&&Ly(e);break;case 21:break;default:vn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(i1(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(_o(s,""),r.flags&=-33);var i=Fy(e);eh(e,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fy(e);Zf(e,a,o);break;default:throw Error(W(161))}}catch(u){Ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function XE(e,t,n){Y=e,u1(e)}function u1(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var s=Y,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ba;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||Nt;a=Ba;var l=Nt;if(Ba=o,(Nt=u)&&!l)for(Y=s;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?jy(s):u!==null?(u.return=o,Y=u):jy(s);for(;i!==null;)Y=i,u1(i),i=i.sibling;Y=s,Ba=a,Nt=l}zy(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Y=i):zy(e)}}function zy(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Nt||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:bn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Sy(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var f=l.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Nt||t.flags&512&&Jf(t)}catch(p){Ve(t,t.return,p)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function By(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function jy(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(u){Ve(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){Ve(t,s,u)}}var i=t.return;try{Jf(t)}catch(u){Ve(t,i,u)}break;case 5:var o=t.return;try{Jf(t)}catch(u){Ve(t,o,u)}}}catch(u){Ve(t,t.return,u)}if(t===e){Y=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Y=a;break}Y=t.return}}var YE=Math.ceil,Bu=br.ReactCurrentDispatcher,Fp=br.ReactCurrentOwner,on=br.ReactCurrentBatchConfig,be=0,at=null,Xe=null,mt=0,Wt=0,ai=Xr(0),tt=0,Uo=null,_s=0,Tl=0,Lp=0,So=null,zt=null,zp=0,Ei=1/0,er=null,ju=!1,th=null,jr=null,ja=!1,Dr=null,Mu=0,No=0,nh=null,tu=-1,nu=0;function $t(){return be&6?Ke():tu!==-1?tu:tu=Ke()}function Mr(e){return e.mode&1?be&2&&mt!==0?mt&-mt:PE.transition!==null?(nu===0&&(nu=W0()),nu):(e=xe,e!==0||(e=window.event,e=e===void 0?16:J0(e.type)),e):1}function kn(e,t,n,r){if(50<No)throw No=0,nh=null,Error(W(185));ta(e,n,r),(!(be&2)||e!==at)&&(e===at&&(!(be&2)&&(Tl|=n),tt===4&&Ar(e,mt)),Vt(e,r),n===1&&be===0&&!(t.mode&1)&&(Ei=Ke()+500,bl&&Yr()))}function Vt(e,t){var n=e.callbackNode;PN(e,t);var r=Tu(e,e===at?mt:0);if(r===0)n!==null&&Qm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qm(n),t===1)e.tag===0?DE(My.bind(null,e)):gv(My.bind(null,e)),OE(function(){!(be&6)&&Yr()}),n=null;else{switch(K0(r)){case 1:n=cp;break;case 4:n=V0;break;case 16:n=Eu;break;case 536870912:n=H0;break;default:n=Eu}n=y1(n,l1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function l1(e,t){if(tu=-1,nu=0,be&6)throw Error(W(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=Tu(e,e===at?mt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uu(e,r);else{t=r;var s=be;be|=2;var i=f1();(at!==e||mt!==t)&&(er=null,Ei=Ke()+500,vs(e,t));do try{eT();break}catch(a){c1(e,a)}while(!0);Ep(),Bu.current=i,be=s,Xe!==null?t=0:(at=null,mt=0,t=tt)}if(t!==0){if(t===2&&(s=Of(e),s!==0&&(r=s,t=rh(e,s))),t===1)throw n=Uo,vs(e,0),Ar(e,r),Vt(e,Ke()),n;if(t===6)Ar(e,r);else{if(s=e.current.alternate,!(r&30)&&!JE(s)&&(t=Uu(e,r),t===2&&(i=Of(e),i!==0&&(r=i,t=rh(e,i))),t===1))throw n=Uo,vs(e,0),Ar(e,r),Vt(e,Ke()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(W(345));case 2:us(e,zt,er);break;case 3:if(Ar(e,r),(r&130023424)===r&&(t=zp+500-Ke(),10<t)){if(Tu(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){$t(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Lf(us.bind(null,e,zt,er),t);break}us(e,zt,er);break;case 4:if(Ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Tn(r);i=1<<o,o=t[o],o>s&&(s=o),r&=~i}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YE(r/1960))-r,10<r){e.timeoutHandle=Lf(us.bind(null,e,zt,er),r);break}us(e,zt,er);break;case 5:us(e,zt,er);break;default:throw Error(W(329))}}}return Vt(e,Ke()),e.callbackNode===n?l1.bind(null,e):null}function rh(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(vs(e,t).flags|=256),e=Uu(e,t),e!==2&&(t=zt,zt=n,t!==null&&sh(t)),e}function sh(e){zt===null?zt=e:zt.push.apply(zt,e)}function JE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!In(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ar(e,t){for(t&=~Lp,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tn(t),r=1<<n;e[n]=-1,t&=~r}}function My(e){if(be&6)throw Error(W(327));di();var t=Tu(e,0);if(!(t&1))return Vt(e,Ke()),null;var n=Uu(e,t);if(e.tag!==0&&n===2){var r=Of(e);r!==0&&(t=r,n=rh(e,r))}if(n===1)throw n=Uo,vs(e,0),Ar(e,t),Vt(e,Ke()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,us(e,zt,er),Vt(e,Ke()),null}function Bp(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(Ei=Ke()+500,bl&&Yr())}}function $s(e){Dr!==null&&Dr.tag===0&&!(be&6)&&di();var t=be;be|=1;var n=on.transition,r=xe;try{if(on.transition=null,xe=1,e)return e()}finally{xe=r,on.transition=n,be=t,!(be&6)&&Yr()}}function jp(){Wt=ai.current,De(ai)}function vs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$E(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ou();break;case 3:Si(),De(Mt),De(Tt),Op();break;case 5:$p(r);break;case 4:Si();break;case 13:De(Be);break;case 19:De(Be);break;case 10:Tp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(at=e,Xe=e=Ur(e.current,null),mt=Wt=t,tt=0,Uo=null,Lp=Tl=_s=0,zt=So=null,hs!==null){for(t=0;t<hs.length;t++)if(n=hs[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}hs=null}return e}function c1(e,t){do{var n=Xe;try{if(Ep(),Ja.current=zu,Lu){for(var r=je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Lu=!1}if(xs=0,st=Ze=je=null,wo=!1,Bo=0,Fp.current=null,n===null||n.return===null){tt=1,Uo=t,Xe=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=mt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=$y(o);if(y!==null){y.flags&=-257,Oy(y,o,a,i,t),y.mode&1&&_y(i,l,t),t=y,u=l;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){_y(i,l,t),Mp();break e}u=Error(W(426))}}else if(Le&&a.mode&1){var k=$y(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Oy(k,o,a,i,t),Sp(Ni(u,a));break e}}i=u=Ni(u,a),tt!==4&&(tt=2),So===null?So=[i]:So.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var S=qv(i,u,t);by(i,S);break e;case 1:a=u;var N=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof N.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(jr===null||!jr.has(T)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Gv(i,a,t);by(i,x);break e}}i=i.return}while(i!==null)}p1(n)}catch(C){t=C,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function f1(){var e=Bu.current;return Bu.current=zu,e===null?zu:e}function Mp(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(_s&268435455)&&!(Tl&268435455)||Ar(at,mt)}function Uu(e,t){var n=be;be|=2;var r=f1();(at!==e||mt!==t)&&(er=null,vs(e,t));do try{ZE();break}catch(s){c1(e,s)}while(!0);if(Ep(),be=n,Bu.current=r,Xe!==null)throw Error(W(261));return at=null,mt=0,tt}function ZE(){for(;Xe!==null;)h1(Xe)}function eT(){for(;Xe!==null&&!kN();)h1(Xe)}function h1(e){var t=m1(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?p1(e):Xe=t,Fp.current=null}function p1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qE(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(n=KE(n,t,Wt),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function us(e,t,n){var r=xe,s=on.transition;try{on.transition=null,xe=1,tT(e,t,n,r)}finally{on.transition=s,xe=r}return null}function tT(e,t,n,r){do di();while(Dr!==null);if(be&6)throw Error(W(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(RN(e,i),e===at&&(Xe=at=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,y1(Eu,function(){return di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=on.transition,on.transition=null;var o=xe;xe=1;var a=be;be|=4,Fp.current=null,QE(e,n),a1(n,e),SE(Rf),ku=!!Pf,Rf=Pf=null,e.current=n,XE(n),xN(),be=a,xe=o,on.transition=i}else e.current=n;if(ja&&(ja=!1,Dr=e,Mu=s),i=e.pendingLanes,i===0&&(jr=null),ON(n.stateNode),Vt(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ju)throw ju=!1,e=th,th=null,e;return Mu&1&&e.tag!==0&&di(),i=e.pendingLanes,i&1?e===nh?No++:(No=0,nh=e):No=0,Yr(),null}function di(){if(Dr!==null){var e=K0(Mu),t=on.transition,n=xe;try{if(on.transition=null,xe=16>e?16:e,Dr===null)var r=!1;else{if(e=Dr,Dr=null,Mu=0,be&6)throw Error(W(331));var s=be;for(be|=4,Y=e.current;Y!==null;){var i=Y,o=i.child;if(Y.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(Y=l;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:bo(8,f,i)}var h=f.child;if(h!==null)h.return=f,Y=h;else for(;Y!==null;){f=Y;var p=f.sibling,y=f.return;if(s1(f),f===l){Y=null;break}if(p!==null){p.return=y,Y=p;break}Y=y}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}Y=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Y=o;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,Y=S;break e}Y=i.return}}var N=e.current;for(Y=N;Y!==null;){o=Y;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,Y=T;else e:for(o=N;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){Y=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Y=x;break e}Y=a.return}}if(be=s,Yr(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{xe=n,on.transition=t}}return!1}function Uy(e,t,n){t=Ni(n,t),t=qv(e,t,1),e=Br(e,t,1),t=$t(),e!==null&&(ta(e,1,t),Vt(e,t))}function Ve(e,t,n){if(e.tag===3)Uy(e,e,n);else for(;t!==null;){if(t.tag===3){Uy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){e=Ni(n,e),e=Gv(t,e,1),t=Br(t,e,1),e=$t(),t!==null&&(ta(t,1,e),Vt(t,e));break}}t=t.return}}function nT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$t(),e.pingedLanes|=e.suspendedLanes&n,at===e&&(mt&n)===n&&(tt===4||tt===3&&(mt&130023424)===mt&&500>Ke()-zp?vs(e,0):Lp|=n),Vt(e,t)}function d1(e,t){t===0&&(e.mode&1?(t=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):t=1);var n=$t();e=hr(e,t),e!==null&&(ta(e,t,n),Vt(e,n))}function rT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),d1(e,n)}function sT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(t),d1(e,n)}var m1;m1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Mt.current)Bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Bt=!1,WE(e,t,n);Bt=!!(e.flags&131072)}else Bt=!1,Le&&t.flags&1048576&&vv(t,Cu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eu(e,t),e=t.pendingProps;var s=vi(t,Tt.current);pi(t,n),s=Ap(null,t,r,e,s,n);var i=Cp();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(r)?(i=!0,Iu(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,xp(t),s.updater=Sl,t.stateNode=s,s._reactInternals=t,Hf(t,r,e,n),t=qf(null,t,r,!0,i,n)):(t.tag=0,Le&&i&&wp(t),xt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eu(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=oT(r),e=bn(r,e),s){case 0:t=Kf(null,t,r,e,n);break e;case 1:t=Cy(null,t,r,e,n);break e;case 11:t=Iy(null,t,r,e,n);break e;case 14:t=Ay(null,t,r,bn(r.type,e),n);break e}throw Error(W(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:bn(r,s),Kf(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:bn(r,s),Cy(e,t,r,s,n);case 3:e:{if(Jv(t),e===null)throw Error(W(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Nv(e,t),Ru(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Ni(Error(W(423)),t),t=Dy(e,t,r,n,s);break e}else if(r!==s){s=Ni(Error(W(424)),t),t=Dy(e,t,r,n,s);break e}else for(qt=zr(t.stateNode.containerInfo.firstChild),Gt=t,Le=!0,Nn=null,n=xv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===s){t=pr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return _v(t),e===null&&Mf(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,Ff(r,s)?o=null:i!==null&&Ff(r,i)&&(t.flags|=32),Yv(e,t),xt(e,t,o,n),t.child;case 6:return e===null&&Mf(t),null;case 13:return Zv(e,t,n);case 4:return _p(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bi(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:bn(r,s),Iy(e,t,r,s,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,Oe(Du,r._currentValue),r._currentValue=o,i!==null)if(In(i.value,o)){if(i.children===s.children&&!Mt.current){t=pr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ur(-1,n&-n),u.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var f=l.pending;f===null?u.next=u:(u.next=f.next,f.next=u),l.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Uf(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(W(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uf(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,pi(t,n),s=un(s),r=r(s),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,s=bn(r,t.pendingProps),s=bn(r.type,s),Ay(e,t,r,s,n);case 15:return Qv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:bn(r,s),eu(e,t),t.tag=1,Ut(r)?(e=!0,Iu(t)):e=!1,pi(t,n),Tv(t,r,s),Hf(t,r,s,n),qf(null,t,r,!0,e,n);case 19:return e1(e,t,n);case 22:return Xv(e,t,n)}throw Error(W(156,t.tag))};function y1(e,t){return U0(e,t)}function iT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,n,r){return new iT(e,t,n,r)}function Up(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oT(e){if(typeof e=="function")return Up(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ap)return 11;if(e===up)return 14}return 2}function Ur(e,t){var n=e.alternate;return n===null?(n=sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ru(e,t,n,r,s,i){var o=2;if(r=e,typeof e=="function")Up(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ys:return ws(n.children,s,i,t);case op:o=8,s|=8;break;case df:return e=sn(12,n,t,s|2),e.elementType=df,e.lanes=i,e;case mf:return e=sn(13,n,t,s),e.elementType=mf,e.lanes=i,e;case yf:return e=sn(19,n,t,s),e.elementType=yf,e.lanes=i,e;case k0:return kl(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E0:o=10;break e;case T0:o=9;break e;case ap:o=11;break e;case up:o=14;break e;case _r:o=16,r=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=sn(o,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function ws(e,t,n,r){return e=sn(7,e,r,t),e.lanes=n,e}function kl(e,t,n,r){return e=sn(22,e,r,t),e.elementType=k0,e.lanes=n,e.stateNode={isHidden:!1},e}function Uc(e,t,n){return e=sn(6,e,null,t),e.lanes=n,e}function Vc(e,t,n){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function aT(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vp(e,t,n,r,s,i,o,a,u){return e=new aT(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=sn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(i),e}function uT(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g1(e){if(!e)return Kr;e=e._reactInternals;e:{if(Ls(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(Ut(n))return yv(e,n,t)}return t}function v1(e,t,n,r,s,i,o,a,u){return e=Vp(n,r,!0,e,s,i,o,a,u),e.context=g1(null),n=e.current,r=$t(),s=Mr(n),i=ur(r,s),i.callback=t??null,Br(n,i,s),e.current.lanes=s,ta(e,s,r),Vt(e,r),e}function xl(e,t,n,r){var s=t.current,i=$t(),o=Mr(s);return n=g1(n),t.context===null?t.context=n:t.pendingContext=n,t=ur(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Br(s,t,o),e!==null&&(kn(e,s,o,i),Ya(e,s,o)),o}function Vu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hp(e,t){Vy(e,t),(e=e.alternate)&&Vy(e,t)}function lT(){return null}var w1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wp(e){this._internalRoot=e}_l.prototype.render=Wp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));xl(e,t,null,null)};_l.prototype.unmount=Wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$s(function(){xl(null,e,null,null)}),t[fr]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Q0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&Y0(e)}};function Kp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hy(){}function cT(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var l=Vu(o);i.call(l)}}var o=v1(t,r,e,0,null,!1,!1,"",Hy);return e._reactRootContainer=o,e[fr]=o.current,Po(e.nodeType===8?e.parentNode:e),$s(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var l=Vu(u);a.call(l)}}var u=Vp(e,0,!1,null,null,!1,!1,"",Hy);return e._reactRootContainer=u,e[fr]=u.current,Po(e.nodeType===8?e.parentNode:e),$s(function(){xl(t,u,n,r)}),u}function Ol(e,t,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=Vu(o);a.call(u)}}xl(t,o,e,s)}else o=cT(n,t,e,s,r);return Vu(o)}q0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=uo(t.pendingLanes);n!==0&&(fp(t,n|1),Vt(t,Ke()),!(be&6)&&(Ei=Ke()+500,Yr()))}break;case 13:$s(function(){var r=hr(e,1);if(r!==null){var s=$t();kn(r,e,1,s)}}),Hp(e,1)}};hp=function(e){if(e.tag===13){var t=hr(e,134217728);if(t!==null){var n=$t();kn(t,e,134217728,n)}Hp(e,134217728)}};G0=function(e){if(e.tag===13){var t=Mr(e),n=hr(e,t);if(n!==null){var r=$t();kn(n,e,t,r)}Hp(e,t)}};Q0=function(){return xe};X0=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};xf=function(e,t,n){switch(t){case"input":if(wf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=wl(r);if(!s)throw Error(W(90));_0(r),wf(r,s)}}}break;case"textarea":O0(e,n);break;case"select":t=n.value,t!=null&&li(e,!!n.multiple,t,!1)}};F0=Bp;L0=$s;var fT={usingClientEntryPoint:!1,Events:[ra,ti,wl,P0,R0,Bp]},to={findFiberByHostInstance:fs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hT={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=j0(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{ml=Ma.inject(hT),Gn=Ma}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fT;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(t))throw Error(W(200));return uT(e,t,null,n)};Yt.createRoot=function(e,t){if(!Kp(e))throw Error(W(299));var n=!1,r="",s=w1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Vp(e,1,!1,null,null,n,!1,r,s),e[fr]=t.current,Po(e.nodeType===8?e.parentNode:e),new Wp(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=j0(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return $s(e)};Yt.hydrate=function(e,t,n){if(!$l(t))throw Error(W(200));return Ol(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Kp(e))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=w1;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=v1(t,null,e,1,n??null,s,!1,i,o),e[fr]=t.current,Po(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new _l(t)};Yt.render=function(e,t,n){if(!$l(t))throw Error(W(200));return Ol(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!$l(e))throw Error(W(40));return e._reactRootContainer?($s(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Bp;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$l(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Ol(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function b1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b1)}catch(e){console.error(e)}}b1(),v0.exports=Yt;var S1=v0.exports;const pT=a0(S1);var Wy=S1;hf.createRoot=Wy.createRoot,hf.hydrateRoot=Wy.hydrateRoot;function ih(e,t){return ih=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},ih(e,t)}function Fi(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ih(e,t)}var ia=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var s=this,i=r||function(){};return this.listeners.push(i),this.onSubscribe(),function(){s.listeners=s.listeners.filter(function(o){return o!==i}),s.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}var Hu=typeof window>"u";function bt(){}function dT(e,t){return typeof e=="function"?e(t):e}function oh(e){return typeof e=="number"&&e>=0&&e!==1/0}function Wu(e){return Array.isArray(e)?e:[e]}function N1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function su(e,t,n){return Il(e)?typeof t=="function"?we({},n,{queryKey:e,queryFn:t}):we({},t,{queryKey:e}):e}function Or(e,t,n){return Il(e)?[we({},t,{queryKey:e}),n]:[e||{},t]}function mT(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Ky(e,t){var n=e.active,r=e.exact,s=e.fetching,i=e.inactive,o=e.predicate,a=e.queryKey,u=e.stale;if(Il(a)){if(r){if(t.queryHash!==qp(a,t.options))return!1}else if(!Ku(t.queryKey,a))return!1}var l=mT(n,i);if(l==="none")return!1;if(l!=="all"){var f=t.isActive();if(l==="active"&&!f||l==="inactive"&&f)return!1}return!(typeof u=="boolean"&&t.isStale()!==u||typeof s=="boolean"&&t.isFetching()!==s||o&&!o(t))}function qy(e,t){var n=e.exact,r=e.fetching,s=e.predicate,i=e.mutationKey;if(Il(i)){if(!t.options.mutationKey)return!1;if(n){if(ds(t.options.mutationKey)!==ds(i))return!1}else if(!Ku(t.options.mutationKey,i))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||s&&!s(t))}function qp(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||ds;return n(e)}function ds(e){var t=Wu(e);return yT(t)}function yT(e){return JSON.stringify(e,function(t,n){return ah(n)?Object.keys(n).sort().reduce(function(r,s){return r[s]=n[s],r},{}):n})}function Ku(e,t){return E1(Wu(e),Wu(t))}function E1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!E1(e[n],t[n])}):!1}function qu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||ah(e)&&ah(t)){for(var r=n?e.length:Object.keys(e).length,s=n?t:Object.keys(t),i=s.length,o=n?[]:{},a=0,u=0;u<i;u++){var l=n?u:s[u];o[l]=qu(e[l],t[l]),o[l]===e[l]&&a++}return r===i&&a===r?e:o}return t}function gT(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function ah(e){if(!Gy(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Gy(n)||!n.hasOwnProperty("isPrototypeOf"))}function Gy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Il(e){return typeof e=="string"||Array.isArray(e)}function vT(e){return new Promise(function(t){setTimeout(t,e)})}function Qy(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function T1(){if(typeof AbortController=="function")return new AbortController}var wT=function(e){Fi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(s){var i;if(!Hu&&((i=window)!=null&&i.addEventListener)){var o=function(){return s()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var s;(s=this.cleanup)==null||s.call(this),this.cleanup=void 0}},n.setEventListener=function(s){var i,o=this;this.setup=s,(i=this.cleanup)==null||i.call(this),this.cleanup=s(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(s){this.focused=s,s&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(s){s()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(ia),Eo=new wT,bT=function(e){Fi(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(s){var i;if(!Hu&&((i=window)!=null&&i.addEventListener)){var o=function(){return s()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var s;(s=this.cleanup)==null||s.call(this),this.cleanup=void 0}},n.setEventListener=function(s){var i,o=this;this.setup=s,(i=this.cleanup)==null||i.call(this),this.cleanup=s(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(s){this.online=s,s&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(s){s()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(ia),iu=new bT;function ST(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Gu(e){return typeof(e==null?void 0:e.cancel)=="function"}var k1=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function ou(e){return e instanceof k1}var x1=function(t){var n=this,r=!1,s,i,o,a;this.abort=t.abort,this.cancel=function(p){return s==null?void 0:s(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return i==null?void 0:i()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,y){o=p,a=y});var u=function(y){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(y),i==null||i(),o(y))},l=function(y){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(y),i==null||i(),a(y))},f=function(){return new Promise(function(y){i=y,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){i=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},h=function p(){if(!n.isResolved){var y;try{y=t.fn()}catch(v){y=Promise.reject(v)}s=function(w){if(!n.isResolved&&(l(new k1(w)),n.abort==null||n.abort(),Gu(y)))try{y.cancel()}catch{}},n.isTransportCancelable=Gu(y),Promise.resolve(y).then(u).catch(function(v){var w,k;if(!n.isResolved){var S=(w=t.retry)!=null?w:3,N=(k=t.retryDelay)!=null?k:ST,T=typeof N=="function"?N(n.failureCount,v):N,x=S===!0||typeof S=="number"&&n.failureCount<S||typeof S=="function"&&S(n.failureCount,v);if(r||!x){l(v);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,v),vT(T).then(function(){if(!Eo.isFocused()||!iu.isOnline())return f()}).then(function(){r?l(v):p()})}})}};h()},NT=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var s;this.transactions++;try{s=r()}finally{this.transactions--,this.transactions||this.flush()}return s},t.schedule=function(r){var s=this;this.transactions?this.queue.push(r):Qy(function(){s.notifyFn(r)})},t.batchCalls=function(r){var s=this;return function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];s.schedule(function(){r.apply(void 0,o)})}},t.flush=function(){var r=this,s=this.queue;this.queue=[],s.length&&Qy(function(){r.batchNotifyFn(function(){s.forEach(function(i){r.notifyFn(i)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),He=new NT,_1=console;function Qu(){return _1}function ET(e){_1=e}var TT=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var s;this.options=we({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(s=this.options.cacheTime)!=null?s:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),oh(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,s){var i,o,a=this.state.data,u=dT(r,a);return(i=(o=this.options).isDataEqual)!=null&&i.call(o,a,u)?u=a:this.options.structuralSharing!==!1&&(u=qu(a,u)),this.dispatch({data:u,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt}),u},t.setState=function(r,s){this.dispatch({type:"setState",state:r,setStateOptions:s})},t.cancel=function(r){var s,i=this.promise;return(s=this.retryer)==null||s.cancel(r),i?i.then(bt).catch(bt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!N1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,s=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});s&&s.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,s=this.observers.find(function(i){return i.shouldFetchOnReconnect()});s&&s.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(s){return s!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,s){var i=this,o,a,u;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var l;return(l=this.retryer)==null||l.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var f=this.observers.find(function(N){return N.options.queryFn});f&&this.setOptions(f.options)}var h=Wu(this.queryKey),p=T1(),y={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(y,"signal",{enumerable:!0,get:function(){if(p)return i.abortSignalConsumed=!0,p.signal}});var v=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(y)):Promise.reject("Missing queryFn")},w={fetchOptions:s,options:this.options,queryKey:h,state:this.state,fetchFn:v,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var k;(k=this.options.behavior)==null||k.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=w.fetchOptions)==null?void 0:a.meta)){var S;this.dispatch({type:"fetch",meta:(S=w.fetchOptions)==null?void 0:S.meta})}return this.retryer=new x1({fn:w.fetchFn,abort:p==null||(u=p.abort)==null?void 0:u.bind(p),onSuccess:function(T){i.setData(T),i.cache.config.onSuccess==null||i.cache.config.onSuccess(T,i),i.cacheTime===0&&i.optionalRemove()},onError:function(T){ou(T)&&T.silent||i.dispatch({type:"error",error:T}),ou(T)||(i.cache.config.onError==null||i.cache.config.onError(T,i),Qu().error(T)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var s=this;this.state=this.reducer(this.state,r),He.batch(function(){s.observers.forEach(function(i){i.onQueryUpdate(r)}),s.cache.notify({query:s,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var s=typeof r.initialData=="function"?r.initialData():r.initialData,i=typeof r.initialData<"u",o=i?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof s<"u";return{data:s,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},t.reducer=function(r,s){var i,o;switch(s.type){case"failed":return we({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return we({},r,{isPaused:!0});case"continue":return we({},r,{isPaused:!1});case"fetch":return we({},r,{fetchFailureCount:0,fetchMeta:(i=s.meta)!=null?i:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return we({},r,{data:s.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=s.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=s.error;return ou(a)&&a.revert&&this.revertState?we({},this.revertState):we({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return we({},r,{isInvalidated:!0});case"setState":return we({},r,s.state);default:return r}},e}(),kT=function(e){Fi(t,e);function t(r){var s;return s=e.call(this)||this,s.config=r||{},s.queries=[],s.queriesMap={},s}var n=t.prototype;return n.build=function(s,i,o){var a,u=i.queryKey,l=(a=i.queryHash)!=null?a:qp(u,i),f=this.get(l);return f||(f=new TT({cache:this,queryKey:u,queryHash:l,options:s.defaultQueryOptions(i),state:o,defaultOptions:s.getQueryDefaults(u),meta:i.meta}),this.add(f)),f},n.add=function(s){this.queriesMap[s.queryHash]||(this.queriesMap[s.queryHash]=s,this.queries.push(s),this.notify({type:"queryAdded",query:s}))},n.remove=function(s){var i=this.queriesMap[s.queryHash];i&&(s.destroy(),this.queries=this.queries.filter(function(o){return o!==s}),i===s&&delete this.queriesMap[s.queryHash],this.notify({type:"queryRemoved",query:s}))},n.clear=function(){var s=this;He.batch(function(){s.queries.forEach(function(i){s.remove(i)})})},n.get=function(s){return this.queriesMap[s]},n.getAll=function(){return this.queries},n.find=function(s,i){var o=Or(s,i),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(u){return Ky(a,u)})},n.findAll=function(s,i){var o=Or(s,i),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(u){return Ky(a,u)}):this.queries},n.notify=function(s){var i=this;He.batch(function(){i.listeners.forEach(function(o){o(s)})})},n.onFocus=function(){var s=this;He.batch(function(){s.queries.forEach(function(i){i.onFocus()})})},n.onOnline=function(){var s=this;He.batch(function(){s.queries.forEach(function(i){i.onOnline()})})},t}(ia),xT=function(){function e(n){this.options=we({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||_T(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(s){return s!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(bt).catch(bt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,s,i=this.state.status==="loading",o=Promise.resolve();return i||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){s=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(s,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(s,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(s,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:s}),s}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),Qu().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},t.executeMutation=function(){var r=this,s;return this.retryer=new x1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(s=this.options.retry)!=null?s:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var s=this;this.state=$T(this.state,r),He.batch(function(){s.observers.forEach(function(i){i.onMutationUpdate(r)}),s.mutationCache.notify(s)})},e}();function _T(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function $T(e,t){switch(t.type){case"failed":return we({},e,{failureCount:e.failureCount+1});case"pause":return we({},e,{isPaused:!0});case"continue":return we({},e,{isPaused:!1});case"loading":return we({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return we({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return we({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return we({},e,t.state);default:return e}}var OT=function(e){Fi(t,e);function t(r){var s;return s=e.call(this)||this,s.config=r||{},s.mutations=[],s.mutationId=0,s}var n=t.prototype;return n.build=function(s,i,o){var a=new xT({mutationCache:this,mutationId:++this.mutationId,options:s.defaultMutationOptions(i),state:o,defaultOptions:i.mutationKey?s.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(a),a},n.add=function(s){this.mutations.push(s),this.notify(s)},n.remove=function(s){this.mutations=this.mutations.filter(function(i){return i!==s}),s.cancel(),this.notify(s)},n.clear=function(){var s=this;He.batch(function(){s.mutations.forEach(function(i){s.remove(i)})})},n.getAll=function(){return this.mutations},n.find=function(s){return typeof s.exact>"u"&&(s.exact=!0),this.mutations.find(function(i){return qy(s,i)})},n.findAll=function(s){return this.mutations.filter(function(i){return qy(s,i)})},n.notify=function(s){var i=this;He.batch(function(){i.listeners.forEach(function(o){o(s)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var s=this.mutations.filter(function(i){return i.state.isPaused});return He.batch(function(){return s.reduce(function(i,o){return i.then(function(){return o.continue().catch(bt)})},Promise.resolve())})},t}(ia);function uh(){return{onFetch:function(t){t.fetchFn=function(){var n,r,s,i,o,a,u=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,l=(s=t.fetchOptions)==null||(i=s.meta)==null?void 0:i.fetchMore,f=l==null?void 0:l.pageParam,h=(l==null?void 0:l.direction)==="forward",p=(l==null?void 0:l.direction)==="backward",y=((o=t.state.data)==null?void 0:o.pages)||[],v=((a=t.state.data)==null?void 0:a.pageParams)||[],w=T1(),k=w==null?void 0:w.signal,S=v,N=!1,T=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},x=function(ie,oe,fe,Ee){return S=Ee?[oe].concat(S):[].concat(S,[oe]),Ee?[fe].concat(ie):[].concat(ie,[fe])},C=function(ie,oe,fe,Ee){if(N)return Promise.reject("Cancelled");if(typeof fe>"u"&&!oe&&ie.length)return Promise.resolve(ie);var K={queryKey:t.queryKey,signal:k,pageParam:fe,meta:t.meta},Q=T(K),ne=Promise.resolve(Q).then(function(Se){return x(ie,fe,Se,Ee)});if(Gu(Q)){var ve=ne;ve.cancel=Q.cancel}return ne},P;if(!y.length)P=C([]);else if(h){var F=typeof f<"u",L=F?f:lh(t.options,y);P=C(y,F,L)}else if(p){var M=typeof f<"u",B=M?f:$1(t.options,y);P=C(y,M,B,!0)}else(function(){S=[];var J=typeof t.options.getNextPageParam>"u",ie=u&&y[0]?u(y[0],0,y):!0;P=ie?C([],J,v[0]):Promise.resolve(x([],v[0],y[0]));for(var oe=function(K){P=P.then(function(Q){var ne=u&&y[K]?u(y[K],K,y):!0;if(ne){var ve=J?v[K]:lh(t.options,Q);return C(Q,J,ve)}return Promise.resolve(x(Q,v[K],y[K]))})},fe=1;fe<y.length;fe++)oe(fe)})();var V=P.then(function(J){return{pages:J,pageParams:S}}),ee=V;return ee.cancel=function(){N=!0,w==null||w.abort(),Gu(P)&&P.cancel()},V}}}}function lh(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function $1(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}function IT(e,t){if(e.getNextPageParam&&Array.isArray(t)){var n=lh(e,t);return typeof n<"u"&&n!==null&&n!==!1}}function AT(e,t){if(e.getPreviousPageParam&&Array.isArray(t)){var n=$1(e,t);return typeof n<"u"&&n!==null&&n!==!1}}var CT=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new kT,this.mutationCache=n.mutationCache||new OT,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Eo.subscribe(function(){Eo.isFocused()&&iu.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=iu.subscribe(function(){Eo.isFocused()&&iu.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,s;(r=this.unsubscribeFocus)==null||r.call(this),(s=this.unsubscribeOnline)==null||s.call(this)},t.isFetching=function(r,s){var i=Or(r,s),o=i[0];return o.fetching=!0,this.queryCache.findAll(o).length},t.isMutating=function(r){return this.mutationCache.findAll(we({},r,{fetching:!0})).length},t.getQueryData=function(r,s){var i;return(i=this.queryCache.find(r,s))==null?void 0:i.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(s){var i=s.queryKey,o=s.state,a=o.data;return[i,a]})},t.setQueryData=function(r,s,i){var o=su(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(s,i)},t.setQueriesData=function(r,s,i){var o=this;return He.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var u=a.queryKey;return[u,o.setQueryData(u,s,i)]})})},t.getQueryState=function(r,s){var i;return(i=this.queryCache.find(r,s))==null?void 0:i.state},t.removeQueries=function(r,s){var i=Or(r,s),o=i[0],a=this.queryCache;He.batch(function(){a.findAll(o).forEach(function(u){a.remove(u)})})},t.resetQueries=function(r,s,i){var o=this,a=Or(r,s,i),u=a[0],l=a[1],f=this.queryCache,h=we({},u,{active:!0});return He.batch(function(){return f.findAll(u).forEach(function(p){p.reset()}),o.refetchQueries(h,l)})},t.cancelQueries=function(r,s,i){var o=this,a=Or(r,s,i),u=a[0],l=a[1],f=l===void 0?{}:l;typeof f.revert>"u"&&(f.revert=!0);var h=He.batch(function(){return o.queryCache.findAll(u).map(function(p){return p.cancel(f)})});return Promise.all(h).then(bt).catch(bt)},t.invalidateQueries=function(r,s,i){var o,a,u,l=this,f=Or(r,s,i),h=f[0],p=f[1],y=we({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(u=h.refetchInactive)!=null?u:!1});return He.batch(function(){return l.queryCache.findAll(h).forEach(function(v){v.invalidate()}),l.refetchQueries(y,p)})},t.refetchQueries=function(r,s,i){var o=this,a=Or(r,s,i),u=a[0],l=a[1],f=He.batch(function(){return o.queryCache.findAll(u).map(function(p){return p.fetch(void 0,we({},l,{meta:{refetchPage:u==null?void 0:u.refetchPage}}))})}),h=Promise.all(f).then(bt);return l!=null&&l.throwOnError||(h=h.catch(bt)),h},t.fetchQuery=function(r,s,i){var o=su(r,s,i),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var u=this.queryCache.build(this,a);return u.isStaleByTime(a.staleTime)?u.fetch(a):Promise.resolve(u.state.data)},t.prefetchQuery=function(r,s,i){return this.fetchQuery(r,s,i).then(bt).catch(bt)},t.fetchInfiniteQuery=function(r,s,i){var o=su(r,s,i);return o.behavior=uh(),this.fetchQuery(o)},t.prefetchInfiniteQuery=function(r,s,i){return this.fetchInfiniteQuery(r,s,i).then(bt).catch(bt)},t.cancelMutations=function(){var r=this,s=He.batch(function(){return r.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(s).then(bt).catch(bt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,s){var i=this.queryDefaults.find(function(o){return ds(r)===ds(o.queryKey)});i?i.defaultOptions=s:this.queryDefaults.push({queryKey:r,defaultOptions:s})},t.getQueryDefaults=function(r){var s;return r?(s=this.queryDefaults.find(function(i){return Ku(r,i.queryKey)}))==null?void 0:s.defaultOptions:void 0},t.setMutationDefaults=function(r,s){var i=this.mutationDefaults.find(function(o){return ds(r)===ds(o.mutationKey)});i?i.defaultOptions=s:this.mutationDefaults.push({mutationKey:r,defaultOptions:s})},t.getMutationDefaults=function(r){var s;return r?(s=this.mutationDefaults.find(function(i){return Ku(r,i.mutationKey)}))==null?void 0:s.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var s=we({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!s.queryHash&&s.queryKey&&(s.queryHash=qp(s.queryKey,s)),s},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:we({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),DT=function(e){Fi(t,e);function t(r,s){var i;return i=e.call(this)||this,i.client=r,i.options=s,i.trackedProps=[],i.selectError=null,i.bindMethods(),i.setOptions(s),i}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Xy(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return ch(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return ch(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(s,i){var o=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(s),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var u=this.hasListeners();u&&Yy(this.currentQuery,a,this.options,o)&&this.executeFetch(),this.updateResult(i),u&&(this.currentQuery!==a||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var l=this.computeRefetchInterval();u&&(this.currentQuery!==a||this.options.enabled!==o.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)},n.getOptimisticResult=function(s){var i=this.client.defaultQueryObserverOptions(s),o=this.client.getQueryCache().build(this.client,i);return this.createResult(o,i)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(s,i){var o=this,a={},u=function(f){o.trackedProps.includes(f)||o.trackedProps.push(f)};return Object.keys(s).forEach(function(l){Object.defineProperty(a,l,{configurable:!1,enumerable:!0,get:function(){return u(l),s[l]}})}),(i.useErrorBoundary||i.suspense)&&u("error"),a},n.getNextResult=function(s){var i=this;return new Promise(function(o,a){var u=i.subscribe(function(l){l.isFetching||(u(),l.isError&&(s!=null&&s.throwOnError)?a(l.error):o(l))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(s){return this.fetch(we({},s,{meta:{refetchPage:s==null?void 0:s.refetchPage}}))},n.fetchOptimistic=function(s){var i=this,o=this.client.defaultQueryObserverOptions(s),a=this.client.getQueryCache().build(this.client,o);return a.fetch().then(function(){return i.createResult(a,o)})},n.fetch=function(s){var i=this;return this.executeFetch(s).then(function(){return i.updateResult(),i.currentResult})},n.executeFetch=function(s){this.updateQuery();var i=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(i=i.catch(bt)),i},n.updateStaleTimeout=function(){var s=this;if(this.clearStaleTimeout(),!(Hu||this.currentResult.isStale||!oh(this.options.staleTime))){var i=N1(this.currentResult.dataUpdatedAt,this.options.staleTime),o=i+1;this.staleTimeoutId=setTimeout(function(){s.currentResult.isStale||s.updateResult()},o)}},n.computeRefetchInterval=function(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1},n.updateRefetchInterval=function(s){var i=this;this.clearRefetchInterval(),this.currentRefetchInterval=s,!(Hu||this.options.enabled===!1||!oh(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(i.options.refetchIntervalInBackground||Eo.isFocused())&&i.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(s,i){var o=this.currentQuery,a=this.options,u=this.currentResult,l=this.currentResultState,f=this.currentResultOptions,h=s!==o,p=h?s.state:this.currentQueryInitialState,y=h?this.currentResult:this.previousQueryResult,v=s.state,w=v.dataUpdatedAt,k=v.error,S=v.errorUpdatedAt,N=v.isFetching,T=v.status,x=!1,C=!1,P;if(i.optimisticResults){var F=this.hasListeners(),L=!F&&Xy(s,i),M=F&&Yy(s,o,i,a);(L||M)&&(N=!0,w||(T="loading"))}if(i.keepPreviousData&&!v.dataUpdateCount&&(y!=null&&y.isSuccess)&&T!=="error")P=y.data,w=y.dataUpdatedAt,T=y.status,x=!0;else if(i.select&&typeof v.data<"u")if(u&&v.data===(l==null?void 0:l.data)&&i.select===this.selectFn)P=this.selectResult;else try{this.selectFn=i.select,P=i.select(v.data),i.structuralSharing!==!1&&(P=qu(u==null?void 0:u.data,P)),this.selectResult=P,this.selectError=null}catch(ee){Qu().error(ee),this.selectError=ee}else P=v.data;if(typeof i.placeholderData<"u"&&typeof P>"u"&&(T==="loading"||T==="idle")){var B;if(u!=null&&u.isPlaceholderData&&i.placeholderData===(f==null?void 0:f.placeholderData))B=u.data;else if(B=typeof i.placeholderData=="function"?i.placeholderData():i.placeholderData,i.select&&typeof B<"u")try{B=i.select(B),i.structuralSharing!==!1&&(B=qu(u==null?void 0:u.data,B)),this.selectError=null}catch(ee){Qu().error(ee),this.selectError=ee}typeof B<"u"&&(T="success",P=B,C=!0)}this.selectError&&(k=this.selectError,P=this.selectResult,S=Date.now(),T="error");var V={status:T,isLoading:T==="loading",isSuccess:T==="success",isError:T==="error",isIdle:T==="idle",data:P,dataUpdatedAt:w,error:k,errorUpdatedAt:S,failureCount:v.fetchFailureCount,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>p.dataUpdateCount||v.errorUpdateCount>p.errorUpdateCount,isFetching:N,isRefetching:N&&T!=="loading",isLoadingError:T==="error"&&v.dataUpdatedAt===0,isPlaceholderData:C,isPreviousData:x,isRefetchError:T==="error"&&v.dataUpdatedAt!==0,isStale:Gp(s,i),refetch:this.refetch,remove:this.remove};return V},n.shouldNotifyListeners=function(s,i){if(!i)return!0;var o=this.options,a=o.notifyOnChangeProps,u=o.notifyOnChangePropsExclusions;if(!a&&!u||a==="tracked"&&!this.trackedProps.length)return!0;var l=a==="tracked"?this.trackedProps:a;return Object.keys(s).some(function(f){var h=f,p=s[h]!==i[h],y=l==null?void 0:l.some(function(w){return w===f}),v=u==null?void 0:u.some(function(w){return w===f});return p&&!v&&(!l||y)})},n.updateResult=function(s){var i=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!gT(this.currentResult,i)){var o={cache:!0};(s==null?void 0:s.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,i)&&(o.listeners=!0),this.notify(we({},o,s))}},n.updateQuery=function(){var s=this.client.getQueryCache().build(this.client,this.options);if(s!==this.currentQuery){var i=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(i==null||i.removeObserver(this),s.addObserver(this))}},n.onQueryUpdate=function(s){var i={};s.type==="success"?i.onSuccess=!0:s.type==="error"&&!ou(s.error)&&(i.onError=!0),this.updateResult(i),this.hasListeners()&&this.updateTimers()},n.notify=function(s){var i=this;He.batch(function(){s.onSuccess?(i.options.onSuccess==null||i.options.onSuccess(i.currentResult.data),i.options.onSettled==null||i.options.onSettled(i.currentResult.data,null)):s.onError&&(i.options.onError==null||i.options.onError(i.currentResult.error),i.options.onSettled==null||i.options.onSettled(void 0,i.currentResult.error)),s.listeners&&i.listeners.forEach(function(o){o(i.currentResult)}),s.cache&&i.client.getQueryCache().notify({query:i.currentQuery,type:"observerResultsUpdated"})})},t}(ia);function PT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Xy(e,t){return PT(e,t)||e.state.dataUpdatedAt>0&&ch(e,t,t.refetchOnMount)}function ch(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Gp(e,t)}return!1}function Yy(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gp(e,n)}function Gp(e,t){return e.isStaleByTime(t.staleTime)}var RT=function(e){Fi(t,e);function t(r,s){return e.call(this,r,s)||this}var n=t.prototype;return n.bindMethods=function(){e.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},n.setOptions=function(s,i){e.prototype.setOptions.call(this,we({},s,{behavior:uh()}),i)},n.getOptimisticResult=function(s){return s.behavior=uh(),e.prototype.getOptimisticResult.call(this,s)},n.fetchNextPage=function(s){var i;return this.fetch({cancelRefetch:(i=s==null?void 0:s.cancelRefetch)!=null?i:!0,throwOnError:s==null?void 0:s.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:s==null?void 0:s.pageParam}}})},n.fetchPreviousPage=function(s){var i;return this.fetch({cancelRefetch:(i=s==null?void 0:s.cancelRefetch)!=null?i:!0,throwOnError:s==null?void 0:s.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:s==null?void 0:s.pageParam}}})},n.createResult=function(s,i){var o,a,u,l,f,h,p=s.state,y=e.prototype.createResult.call(this,s,i);return we({},y,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:IT(i,(o=p.data)==null?void 0:o.pages),hasPreviousPage:AT(i,(a=p.data)==null?void 0:a.pages),isFetchingNextPage:p.isFetching&&((u=p.fetchMeta)==null||(l=u.fetchMore)==null?void 0:l.direction)==="forward",isFetchingPreviousPage:p.isFetching&&((f=p.fetchMeta)==null||(h=f.fetchMore)==null?void 0:h.direction)==="backward"})},t}(DT),FT=pT.unstable_batchedUpdates;He.setBatchNotifyFunction(FT);var LT=console;ET(LT);var Jy=et.createContext(void 0),O1=et.createContext(!1);function I1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Jy),window.ReactQueryClientContext):Jy}var zT=function(){var t=et.useContext(I1(et.useContext(O1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},BT=function(t){var n=t.client,r=t.contextSharing,s=r===void 0?!1:r,i=t.children;et.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=I1(s);return et.createElement(O1.Provider,{value:s},et.createElement(o.Provider,{value:n},i))};function jT(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var MT=et.createContext(jT()),UT=function(){return et.useContext(MT)};function VT(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function HT(e,t){var n=et.useRef(!1),r=et.useState(0),s=r[1],i=zT(),o=UT(),a=i.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=He.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=He.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=He.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(o.isReset()||(a.retryOnMount=!1));var u=et.useState(function(){return new t(i,a)}),l=u[0],f=l.getOptimisticResult(a);if(et.useEffect(function(){n.current=!0,o.clearReset();var h=l.subscribe(He.batchCalls(function(){n.current&&s(function(p){return p+1})}));return l.updateResult(),function(){n.current=!1,h()}},[o,l]),et.useEffect(function(){l.setOptions(a,{listeners:!1})},[a,l]),a.suspense&&f.isLoading)throw l.fetchOptimistic(a).then(function(h){var p=h.data;a.onSuccess==null||a.onSuccess(p),a.onSettled==null||a.onSettled(p,null)}).catch(function(h){o.clearReset(),a.onError==null||a.onError(h),a.onSettled==null||a.onSettled(void 0,h)});if(f.isError&&!o.isReset()&&!f.isFetching&&VT(a.suspense,a.useErrorBoundary,[f.error,l.getCurrentQuery()]))throw f.error;return a.notifyOnChangeProps==="tracked"&&(f=l.trackResult(f,a)),f}function WT(e,t,n){var r=su(e,t,n);return HT(r,RT)}const KT=e=>{const[t,n]=pt.useState(null);return pt.useEffect(()=>{const{video:r,audio:s,peerIdentity:i,preferCurrentTab:o}=e;let a=!1,u;return(async()=>{u=await navigator.mediaDevices.getUserMedia({video:r,audio:s,peerIdentity:i,preferCurrentTab:o}),a||n(u)})(),()=>{a=!0,u==null||u.getVideoTracks().map(f=>f.stop()),u==null||u.getAudioTracks().map(f=>f.stop())}},[e]),{stream:t}};var jt=function(){return jt=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jt.apply(this,arguments)};function Vo(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Ce="-ms-",To="-moz-",Te="-webkit-",A1="comm",Al="rule",Qp="decl",qT="@import",C1="@keyframes",GT="@layer",D1=Math.abs,Xp=String.fromCharCode,fh=Object.assign;function QT(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function P1(e){return e.trim()}function tr(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function au(e,t,n){return e.indexOf(t,n)}function it(e,t){return e.charCodeAt(t)|0}function Ti(e,t,n){return e.slice(t,n)}function Un(e){return e.length}function R1(e){return e.length}function co(e,t){return t.push(e),e}function XT(e,t){return e.map(t).join("")}function Zy(e,t){return e.filter(function(n){return!tr(n,t)})}var Cl=1,ki=1,F1=0,cn=0,Ge=0,Li="";function Dl(e,t,n,r,s,i,o,a){return{value:e,root:t,parent:n,type:r,props:s,children:i,line:Cl,column:ki,length:o,return:"",siblings:a}}function xr(e,t){return fh(Dl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ks(e){for(;e.root;)e=xr(e.root,{children:[e]});co(e,e.siblings)}function YT(){return Ge}function JT(){return Ge=cn>0?it(Li,--cn):0,ki--,Ge===10&&(ki=1,Cl--),Ge}function xn(){return Ge=cn<F1?it(Li,cn++):0,ki++,Ge===10&&(ki=1,Cl++),Ge}function bs(){return it(Li,cn)}function uu(){return cn}function Pl(e,t){return Ti(Li,e,t)}function hh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZT(e){return Cl=ki=1,F1=Un(Li=e),cn=0,[]}function ek(e){return Li="",e}function Hc(e){return P1(Pl(cn-1,ph(e===91?e+2:e===40?e+1:e)))}function tk(e){for(;(Ge=bs())&&Ge<33;)xn();return hh(e)>2||hh(Ge)>3?"":" "}function nk(e,t){for(;--t&&xn()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return Pl(e,uu()+(t<6&&bs()==32&&xn()==32))}function ph(e){for(;xn();)switch(Ge){case e:return cn;case 34:case 39:e!==34&&e!==39&&ph(Ge);break;case 40:e===41&&ph(e);break;case 92:xn();break}return cn}function rk(e,t){for(;xn()&&e+Ge!==57;)if(e+Ge===84&&bs()===47)break;return"/*"+Pl(t,cn-1)+"*"+Xp(e===47?e:xn())}function sk(e){for(;!hh(bs());)xn();return Pl(e,cn)}function ik(e){return ek(lu("",null,null,null,[""],e=ZT(e),0,[0],e))}function lu(e,t,n,r,s,i,o,a,u){for(var l=0,f=0,h=o,p=0,y=0,v=0,w=1,k=1,S=1,N=0,T="",x=s,C=i,P=r,F=T;k;)switch(v=N,N=xn()){case 40:if(v!=108&&it(F,h-1)==58){au(F+=le(Hc(N),"&","&\f"),"&\f",D1(l?a[l-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:F+=Hc(N);break;case 9:case 10:case 13:case 32:F+=tk(v);break;case 92:F+=nk(uu()-1,7);continue;case 47:switch(bs()){case 42:case 47:co(ok(rk(xn(),uu()),t,n,u),u);break;default:F+="/"}break;case 123*w:a[l++]=Un(F)*S;case 125*w:case 59:case 0:switch(N){case 0:case 125:k=0;case 59+f:S==-1&&(F=le(F,/\f/g,"")),y>0&&Un(F)-h&&co(y>32?tg(F+";",r,n,h-1,u):tg(le(F," ","")+";",r,n,h-2,u),u);break;case 59:F+=";";default:if(co(P=eg(F,t,n,l,f,s,a,T,x=[],C=[],h,i),i),N===123)if(f===0)lu(F,t,P,P,x,i,h,a,C);else switch(p===99&&it(F,3)===110?100:p){case 100:case 108:case 109:case 115:lu(e,P,P,r&&co(eg(e,P,P,0,0,s,a,T,s,x=[],h,C),C),s,C,h,a,r?x:C);break;default:lu(F,P,P,P,[""],C,0,a,C)}}l=f=y=0,w=S=1,T=F="",h=o;break;case 58:h=1+Un(F),y=v;default:if(w<1){if(N==123)--w;else if(N==125&&w++==0&&JT()==125)continue}switch(F+=Xp(N),N*w){case 38:S=f>0?1:(F+="\f",-1);break;case 44:a[l++]=(Un(F)-1)*S,S=1;break;case 64:bs()===45&&(F+=Hc(xn())),p=bs(),f=h=Un(T=F+=sk(uu())),N++;break;case 45:v===45&&Un(F)==2&&(w=0)}}return i}function eg(e,t,n,r,s,i,o,a,u,l,f,h){for(var p=s-1,y=s===0?i:[""],v=R1(y),w=0,k=0,S=0;w<r;++w)for(var N=0,T=Ti(e,p+1,p=D1(k=o[w])),x=e;N<v;++N)(x=P1(k>0?y[N]+" "+T:le(T,/&\f/g,y[N])))&&(u[S++]=x);return Dl(e,t,n,s===0?Al:a,u,l,f,h)}function ok(e,t,n,r){return Dl(e,t,n,A1,Xp(YT()),Ti(e,2,-2),0,r)}function tg(e,t,n,r,s){return Dl(e,t,n,Qp,Ti(e,0,r),Ti(e,r+1,-1),r,s)}function L1(e,t,n){switch(QT(e,t)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 4789:return To+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+To+e+Ce+e+e;case 5936:switch(it(e,t+11)){case 114:return Te+e+Ce+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+Ce+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+Ce+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Te+e+Ce+e+e;case 6165:return Te+e+Ce+"flex-"+e+e;case 5187:return Te+e+le(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return Te+e+Ce+"flex-item-"+le(e,/flex-|-self/g,"")+(tr(e,/flex-|baseline/)?"":Ce+"grid-row-"+le(e,/flex-|-self/g,""))+e;case 4675:return Te+e+Ce+"flex-line-pack"+le(e,/align-content|flex-|-self/g,"")+e;case 5548:return Te+e+Ce+le(e,"shrink","negative")+e;case 5292:return Te+e+Ce+le(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+le(e,"-grow","")+Te+e+Ce+le(e,"grow","positive")+e;case 4554:return Te+le(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4200:if(!tr(e,/flex-|baseline/))return Ce+"grid-column-align"+Ti(e,t)+e;break;case 2592:case 3360:return Ce+le(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,s){return t=s,tr(r.props,/grid-\w+-end/)})?~au(e+(n=n[t].value),"span",0)?e:Ce+le(e,"-start","")+e+Ce+"grid-row-span:"+(~au(n,"span",0)?tr(n,/\d+/):+tr(n,/\d+/)-+tr(e,/\d+/))+";":Ce+le(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return tr(r.props,/grid-\w+-start/)})?e:Ce+le(le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+To+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~au(e,"stretch",0)?L1(le(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,i,o,a,u,l){return Ce+s+":"+i+l+(o?Ce+s+"-span:"+(a?u:+u-+i)+l:"")+e});case 4949:if(it(e,t+6)===121)return le(e,":",":"+Te)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(it(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Ce+"$2box$3")+e;case 100:return le(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(e,"scroll-","scroll-snap-")+e}return e}function Xu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ak(e,t,n,r){switch(e.type){case GT:if(e.children.length)break;case qT:case Qp:return e.return=e.return||e.value;case A1:return"";case C1:return e.return=e.value+"{"+Xu(e.children,r)+"}";case Al:if(!Un(e.value=e.props.join(",")))return""}return Un(n=Xu(e.children,r))?e.return=e.value+"{"+n+"}":""}function uk(e){var t=R1(e);return function(n,r,s,i){for(var o="",a=0;a<t;a++)o+=e[a](n,r,s,i)||"";return o}}function lk(e){return function(t){t.root||(t=t.return)&&e(t)}}function ck(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qp:e.return=L1(e.value,e.length,n);return;case C1:return Xu([xr(e,{value:le(e.value,"@","@"+Te)})],r);case Al:if(e.length)return XT(n=e.props,function(s){switch(tr(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ks(xr(e,{props:[le(s,/:(read-\w+)/,":"+To+"$1")]})),Ks(xr(e,{props:[s]})),fh(e,{props:Zy(n,r)});break;case"::placeholder":Ks(xr(e,{props:[le(s,/:(plac\w+)/,":"+Te+"input-$1")]})),Ks(xr(e,{props:[le(s,/:(plac\w+)/,":"+To+"$1")]})),Ks(xr(e,{props:[le(s,/:(plac\w+)/,Ce+"input-$1")]})),Ks(xr(e,{props:[s]})),fh(e,{props:Zy(n,r)});break}return""})}}var fk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},xi=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",z1="active",B1="data-styled-version",Rl="6.1.8",Yp=`/*!sc*/
`,Jp=typeof window<"u"&&"HTMLElement"in window,hk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),Fl=Object.freeze([]),_i=Object.freeze({});function pk(e,t,n){return n===void 0&&(n=_i),e.theme!==n.theme&&e.theme||t||n.theme}var j1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mk=/(^-|-$)/g;function ng(e){return e.replace(dk,"-").replace(mk,"")}var yk=/(a)(d)/gi,Ua=52,rg=function(e){return String.fromCharCode(e+(e>25?39:97))};function dh(e){var t,n="";for(t=Math.abs(e);t>Ua;t=t/Ua|0)n=rg(t%Ua)+n;return(rg(t%Ua)+n).replace(yk,"$1-$2")}var Wc,M1=5381,ui=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},U1=function(e){return ui(M1,e)};function V1(e){return dh(U1(e)>>>0)}function gk(e){return e.displayName||e.name||"Component"}function Kc(e){return typeof e=="string"&&!0}var H1=typeof Symbol=="function"&&Symbol.for,W1=H1?Symbol.for("react.memo"):60115,vk=H1?Symbol.for("react.forward_ref"):60112,wk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sk=((Wc={})[vk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wc[W1]=K1,Wc);function sg(e){return("type"in(t=e)&&t.type.$$typeof)===W1?K1:"$$typeof"in e?Sk[e.$$typeof]:wk;var t}var Nk=Object.defineProperty,Ek=Object.getOwnPropertyNames,ig=Object.getOwnPropertySymbols,Tk=Object.getOwnPropertyDescriptor,kk=Object.getPrototypeOf,og=Object.prototype;function q1(e,t,n){if(typeof t!="string"){if(og){var r=kk(t);r&&r!==og&&q1(e,r,n)}var s=Ek(t);ig&&(s=s.concat(ig(t)));for(var i=sg(e),o=sg(t),a=0;a<s.length;++a){var u=s[a];if(!(u in bk||n&&n[u]||o&&u in o||i&&u in i)){var l=Tk(t,u);try{Nk(e,u,l)}catch{}}}}return e}function $i(e){return typeof e=="function"}function Zp(e){return typeof e=="object"&&"styledComponentId"in e}function ms(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yh(e,t,n){if(n===void 0&&(n=!1),!n&&!Ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yh(e[r],t[r]);else if(Ho(t))for(var r in t)e[r]=yh(e[r],t[r]);return e}function ed(e,t){Object.defineProperty(e,"toString",{value:t})}function oa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,i=s;t>=i;)if((i<<=1)<0)throw oa(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=s;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),s=r+n;this.groupSizes[t]=0;for(var i=r;i<s;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],s=this.indexOfGroup(t),i=s+r,o=s;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(Yp);return n},e}(),cu=new Map,Yu=new Map,fu=1,Va=function(e){if(cu.has(e))return cu.get(e);for(;Yu.has(fu);)fu++;var t=fu++;return cu.set(e,t),Yu.set(t,e),t},_k=function(e,t){fu=t+1,cu.set(e,t),Yu.set(t,e)},$k="style[".concat(xi,"][").concat(B1,'="').concat(Rl,'"]'),Ok=new RegExp("^".concat(xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ik=function(e,t,n){for(var r,s=n.split(","),i=0,o=s.length;i<o;i++)(r=s[i])&&e.registerName(t,r)},Ak=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yp),s=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var u=a.match(Ok);if(u){var l=0|parseInt(u[1],10),f=u[2];l!==0&&(_k(f,l),Ik(e,f,u[3]),e.getTag().insertRules(l,s)),s.length=0}else s.push(a)}}};function Ck(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),s=function(a){var u=Array.from(a.querySelectorAll("style[".concat(xi,"]")));return u[u.length-1]}(n),i=s!==void 0?s.nextSibling:null;r.setAttribute(xi,z1),r.setAttribute(B1,Rl);var o=Ck();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Dk=function(){function e(t){this.element=G1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,s=0,i=r.length;s<i;s++){var o=r[s];if(o.ownerNode===n)return o}throw oa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Pk=function(){function e(t){this.element=G1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Rk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ag=Jp,Fk={isServer:!Jp,useCSSOMInjection:!hk},Q1=function(){function e(t,n,r){t===void 0&&(t=_i),n===void 0&&(n={});var s=this;this.options=jt(jt({},Fk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Jp&&ag&&(ag=!1,function(i){for(var o=document.querySelectorAll($k),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(xi)!==z1&&(Ak(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),ed(this,function(){return function(i){for(var o=i.getTag(),a=o.length,u="",l=function(h){var p=function(S){return Yu.get(S)}(h);if(p===void 0)return"continue";var y=i.names.get(p),v=o.getGroup(h);if(y===void 0||v.length===0)return"continue";var w="".concat(xi,".g").concat(h,'[id="').concat(p,'"]'),k="";y!==void 0&&y.forEach(function(S){S.length>0&&(k+="".concat(S,","))}),u+="".concat(v).concat(w,'{content:"').concat(k,'"}').concat(Yp)},f=0;f<a;f++)l(f);return u}(s)})}return e.registerId=function(t){return Va(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(jt(jt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,s=n.target;return n.isServer?new Rk(s):r?new Dk(s):new Pk(s)}(this.options),new xk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Va(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Va(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Va(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lk=/&/g,zk=/^\s*\/\/.*$/gm;function X1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=X1(n.children,t)),n})}function Bk(e){var t,n,r,s=e===void 0?_i:e,i=s.options,o=i===void 0?_i:i,a=s.plugins,u=a===void 0?Fl:a,l=function(p,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},f=u.slice();f.push(function(p){p.type===Al&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Lk,n).replace(r,l))}),o.prefix&&f.push(ck),f.push(ak);var h=function(p,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(zk,""),S=ik(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);o.namespace&&(S=X1(S,o.namespace));var N=[];return Xu(S,uk(f.concat(lk(function(T){return N.push(T)})))),N};return h.hash=u.length?u.reduce(function(p,y){return y.name||oa(15),ui(p,y.name)},M1).toString():"",h}var jk=new Q1,gh=Bk(),Y1=et.createContext({shouldForwardProp:void 0,styleSheet:jk,stylis:gh});Y1.Consumer;et.createContext(void 0);function ug(){return pt.useContext(Y1)}var J1=function(){function e(t,n){var r=this;this.inject=function(s,i){i===void 0&&(i=gh);var o=r.name+i.hash;s.hasNameForId(r.id,o)||s.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ed(this,function(){throw oa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gh),this.name+t.hash},e}(),Mk=function(e){return e>="A"&&e<="Z"};function lg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Mk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Z1=function(e){return e==null||e===!1||e===""},ew=function(e){var t,n,r=[];for(var s in e){var i=e[s];e.hasOwnProperty(s)&&!Z1(i)&&(Array.isArray(i)&&i.isCss||$i(i)?r.push("".concat(lg(s),":"),i,";"):Ho(i)?r.push.apply(r,Vo(Vo(["".concat(s," {")],ew(i),!1),["}"],!1)):r.push("".concat(lg(s),": ").concat((t=s,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ss(e,t,n,r){if(Z1(e))return[];if(Zp(e))return[".".concat(e.styledComponentId)];if($i(e)){if(!$i(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var s=e(t);return Ss(s,t,n,r)}var i;return e instanceof J1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ho(e)?ew(e):Array.isArray(e)?Array.prototype.concat.apply(Fl,e.map(function(o){return Ss(o,t,n,r)})):[e.toString()]}function Uk(e){for(var t=0;t<e.length;t+=1){var n=e[t];if($i(n)&&!Zp(n))return!1}return!0}var Vk=U1(Rl),Hk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Uk(t),this.componentId=n,this.baseHash=ui(Vk,n),this.baseStyle=r,Q1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=ms(s,this.staticRulesId);else{var i=mh(Ss(this.rules,t,n,r)),o=dh(ui(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}s=ms(s,o),this.staticRulesId=o}else{for(var u=ui(this.baseHash,r.hash),l="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")l+=h;else if(h){var p=mh(Ss(h,t,n,r));u=ui(u,p+f),l+=p}}if(l){var y=dh(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(l,".".concat(y),void 0,this.componentId)),s=ms(s,y)}}return s},e}(),tw=et.createContext(void 0);tw.Consumer;var qc={};function Wk(e,t,n){var r=Zp(e),s=e,i=!Kc(e),o=t.attrs,a=o===void 0?Fl:o,u=t.componentId,l=u===void 0?function(x,C){var P=typeof x!="string"?"sc":ng(x);qc[P]=(qc[P]||0)+1;var F="".concat(P,"-").concat(V1(Rl+P+qc[P]));return C?"".concat(C,"-").concat(F):F}(t.displayName,t.parentComponentId):u,f=t.displayName,h=f===void 0?function(x){return Kc(x)?"styled.".concat(x):"Styled(".concat(gk(x),")")}(e):f,p=t.displayName&&t.componentId?"".concat(ng(t.displayName),"-").concat(t.componentId):t.componentId||l,y=r&&s.attrs?s.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&s.shouldForwardProp){var w=s.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(x,C){return w(x,C)&&k(x,C)}}else v=w}var S=new Hk(n,p,r?s.componentStyle:void 0);function N(x,C){return function(P,F,L){var M=P.attrs,B=P.componentStyle,V=P.defaultProps,ee=P.foldedComponentIds,J=P.styledComponentId,ie=P.target,oe=et.useContext(tw),fe=ug(),Ee=P.shouldForwardProp||fe.shouldForwardProp,K=pk(F,oe,V)||_i,Q=function(dn,gt,mn){for(var Nr,Dn=jt(jt({},gt),{className:void 0,theme:mn}),ts=0;ts<dn.length;ts+=1){var Pn=$i(Nr=dn[ts])?Nr(Dn):Nr;for(var Rn in Pn)Dn[Rn]=Rn==="className"?ms(Dn[Rn],Pn[Rn]):Rn==="style"?jt(jt({},Dn[Rn]),Pn[Rn]):Pn[Rn]}return gt.className&&(Dn.className=ms(Dn.className,gt.className)),Dn}(M,F,K),ne=Q.as||ie,ve={};for(var Se in Q)Q[Se]===void 0||Se[0]==="$"||Se==="as"||Se==="theme"&&Q.theme===K||(Se==="forwardedAs"?ve.as=Q.forwardedAs:Ee&&!Ee(Se,ne)||(ve[Se]=Q[Se]));var pn=function(dn,gt){var mn=ug(),Nr=dn.generateAndInjectStyles(gt,mn.styleSheet,mn.stylis);return Nr}(B,Q),Ct=ms(ee,J);return pn&&(Ct+=" "+pn),Q.className&&(Ct+=" "+Q.className),ve[Kc(ne)&&!j1.has(ne)?"class":"className"]=Ct,ve.ref=L,pt.createElement(ne,ve)}(T,x,C)}N.displayName=h;var T=et.forwardRef(N);return T.attrs=y,T.componentStyle=S,T.displayName=h,T.shouldForwardProp=v,T.foldedComponentIds=r?ms(s.foldedComponentIds,s.styledComponentId):"",T.styledComponentId=p,T.target=r?s.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(C){for(var P=[],F=1;F<arguments.length;F++)P[F-1]=arguments[F];for(var L=0,M=P;L<M.length;L++)yh(C,M[L],!0);return C}({},s.defaultProps,x):x}}),ed(T,function(){return".".concat(T.styledComponentId)}),i&&q1(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function cg(e,t){for(var n=[e[0]],r=0,s=t.length;r<s;r+=1)n.push(t[r],e[r+1]);return n}var fg=function(e){return Object.assign(e,{isCss:!0})};function nw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if($i(e)||Ho(e))return fg(Ss(cg(Fl,Vo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ss(r):fg(Ss(cg(r,t)))}function vh(e,t,n){if(n===void 0&&(n=_i),!t)throw oa(1,t);var r=function(s){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,nw.apply(void 0,Vo([s],i,!1)))};return r.attrs=function(s){return vh(e,t,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return vh(e,t,jt(jt({},n),s))},r}var rw=function(e){return vh(Wk,e)},zs=rw;j1.forEach(function(e){zs[e]=rw(e)});function td(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mh(nw.apply(void 0,Vo([e],t,!1))),s=V1(r);return new J1(s,r)}const hg="#4fa94d",Kk={"aria-busy":!0,role:"progressbar"},qk=zs.div`
  display: ${e=>e.$visible?"flex":"none"};
`,wn=242.776657104492,Gk=1.6,Qk=td`
12.5% {
  stroke-dasharray: ${wn*.14}px, ${wn}px;
  stroke-dashoffset: -${wn*.11}px;
}
43.75% {
  stroke-dasharray: ${wn*.35}px, ${wn}px;
  stroke-dashoffset: -${wn*.35}px;
}
100% {
  stroke-dasharray: ${wn*.01}px, ${wn}px;
  stroke-dashoffset: -${wn*.99}px;
}
`;zs.path`
  stroke-dasharray: ${wn*.01}px, ${wn};
  stroke-dashoffset: 0;
  animation: ${Qk} ${Gk}s linear infinite;
`;const Gc=20,Xk=e=>["M"+e+" 0c0-9.94-8.06",e,e,e].join("-"),Yk=(e,t,n)=>{const r=Math.max(e,t),s=-n-r/2+1,i=n*2+r;return[s,s,i,i].join(" ")},Jk=({height:e=80,width:t=80,color:n=hg,secondaryColor:r=hg,ariaLabel:s="oval-loading",wrapperStyle:i,wrapperClass:o,visible:a=!0,strokeWidth:u=2,strokeWidthSecondary:l})=>Re.jsx(qk,{style:i,$visible:a,className:o,"data-testid":"oval-loading","aria-label":s,...Kk,children:Re.jsx("svg",{width:t,height:e,viewBox:Yk(Number(u),Number(l||u),Gc),xmlns:"http://www.w3.org/2000/svg",stroke:n,"data-testid":"oval-svg",children:Re.jsx("g",{fill:"none",fillRule:"evenodd",children:Re.jsxs("g",{transform:"translate(1 1)",strokeWidth:Number(l||u),"data-testid":"oval-secondary-group",children:[Re.jsx("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:Gc,stroke:r,strokeWidth:u}),Re.jsx("path",{d:Xk(Gc),children:Re.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})}),Zk=td`
to {
   transform: rotate(360deg);
 }
`;zs.svg`
  animation: ${Zk} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;zs.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const ex=td`
to {
   stroke-dashoffset: 136;
 }
`;zs.polygon`
  stroke-dasharray: 17;
  animation: ${ex} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;zs.svg`
  transform-origin: 50% 65%;
`;const tx=()=>Re.jsx("div",{id:"loader-photos",children:Re.jsx(Jk,{visible:!0,height:"80",width:"80",color:"blue",secondaryColor:"blue",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:"wrapperClass"})}),nx=({fetchNextPage:e,isLoading:t,triggerRef:n})=>{pt.useEffect(()=>{if(!n.current)return;const r=new IntersectionObserver(([s])=>{t||s.isIntersecting&&e()},{threshold:.1});return r.observe(n.current),()=>{r.disconnect()}},[e,t,n])};function rx({isLoading:e,fetchNextPage:t,children:n}){const r=pt.useRef(null);return nx({fetchNextPage:t,isLoading:e,triggerRef:r}),Re.jsxs("div",{className:"page-container",children:[n,Re.jsx("div",{ref:r,children:Re.jsx(tx,{})})]})}const sx="https://api.unsplash.com",ix="/photos",ox="Client-ID 33jWdlc9b44QWP5A7syPojukLGj0RLtQjxRy-3f1hQA",ax="application/json",ux={runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/hands",modelType:"full"};function sw(e,t){return function(){return e.apply(t,arguments)}}const{toString:lx}=Object.prototype,{getPrototypeOf:nd}=Object,Ll=(e=>t=>{const n=lx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jn=e=>(e=e.toLowerCase(),t=>Ll(t)===e),zl=e=>t=>typeof t===e,{isArray:zi}=Array,Wo=zl("undefined");function cx(e){return e!==null&&!Wo(e)&&e.constructor!==null&&!Wo(e.constructor)&&an(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const iw=Jn("ArrayBuffer");function fx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&iw(e.buffer),t}const hx=zl("string"),an=zl("function"),ow=zl("number"),Bl=e=>e!==null&&typeof e=="object",px=e=>e===!0||e===!1,hu=e=>{if(Ll(e)!=="object")return!1;const t=nd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dx=Jn("Date"),mx=Jn("File"),yx=Jn("Blob"),gx=Jn("FileList"),vx=e=>Bl(e)&&an(e.pipe),wx=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||an(e.append)&&((t=Ll(e))==="formdata"||t==="object"&&an(e.toString)&&e.toString()==="[object FormData]"))},bx=Jn("URLSearchParams"),Sx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function aa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),zi(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function aw(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const uw=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lw=e=>!Wo(e)&&e!==uw;function wh(){const{caseless:e}=lw(this)&&this||{},t={},n=(r,s)=>{const i=e&&aw(t,s)||s;hu(t[i])&&hu(r)?t[i]=wh(t[i],r):hu(r)?t[i]=wh({},r):zi(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&aa(arguments[r],n);return t}const Nx=(e,t,n,{allOwnKeys:r}={})=>(aa(t,(s,i)=>{n&&an(s)?e[i]=sw(s,n):e[i]=s},{allOwnKeys:r}),e),Ex=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},kx=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&nd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_x=e=>{if(!e)return null;if(zi(e))return e;let t=e.length;if(!ow(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$x=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&nd(Uint8Array)),Ox=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ix=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ax=Jn("HTMLFormElement"),Cx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Dx=Jn("RegExp"),cw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};aa(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Px=e=>{cw(e,(t,n)=>{if(an(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(an(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rx=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return zi(e)?r(e):r(String(e).split(t)),n},Fx=()=>{},Lx=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Qc="abcdefghijklmnopqrstuvwxyz",dg="0123456789",fw={DIGIT:dg,ALPHA:Qc,ALPHA_DIGIT:Qc+Qc.toUpperCase()+dg},zx=(e=16,t=fw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bx(e){return!!(e&&an(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jx=e=>{const t=new Array(10),n=(r,s)=>{if(Bl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=zi(r)?[]:{};return aa(r,(o,a)=>{const u=n(o,s+1);!Wo(u)&&(i[a]=u)}),t[s]=void 0,i}}return r};return n(e,0)},Mx=Jn("AsyncFunction"),Ux=e=>e&&(Bl(e)||an(e))&&an(e.then)&&an(e.catch),U={isArray:zi,isArrayBuffer:iw,isBuffer:cx,isFormData:wx,isArrayBufferView:fx,isString:hx,isNumber:ow,isBoolean:px,isObject:Bl,isPlainObject:hu,isUndefined:Wo,isDate:dx,isFile:mx,isBlob:yx,isRegExp:Dx,isFunction:an,isStream:vx,isURLSearchParams:bx,isTypedArray:$x,isFileList:gx,forEach:aa,merge:wh,extend:Nx,trim:Sx,stripBOM:Ex,inherits:Tx,toFlatObject:kx,kindOf:Ll,kindOfTest:Jn,endsWith:xx,toArray:_x,forEachEntry:Ox,matchAll:Ix,isHTMLForm:Ax,hasOwnProperty:pg,hasOwnProp:pg,reduceDescriptors:cw,freezeMethods:Px,toObjectSet:Rx,toCamelCase:Cx,noop:Fx,toFiniteNumber:Lx,findKey:aw,global:uw,isContextDefined:lw,ALPHABET:fw,generateString:zx,isSpecCompliantForm:Bx,toJSONObject:jx,isAsyncFn:Mx,isThenable:Ux};function ge(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}U.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hw=ge.prototype,pw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pw[e]={value:e}});Object.defineProperties(ge,pw);Object.defineProperty(hw,"isAxiosError",{value:!0});ge.from=(e,t,n,r,s,i)=>{const o=Object.create(hw);return U.toFlatObject(e,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),ge.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Vx=null;function bh(e){return U.isPlainObject(e)||U.isArray(e)}function dw(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function mg(e,t,n){return e?e.concat(t).map(function(s,i){return s=dw(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Hx(e){return U.isArray(e)&&!e.some(bh)}const Wx=U.toFlatObject(U,{},null,function(t){return/^is[A-Z]/.test(t)});function jl(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,k){return!U.isUndefined(k[w])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(s))throw new TypeError("visitor must be a function");function l(v){if(v===null)return"";if(U.isDate(v))return v.toISOString();if(!u&&U.isBlob(v))throw new ge("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(v)||U.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,w,k){let S=v;if(v&&!k&&typeof v=="object"){if(U.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(U.isArray(v)&&Hx(v)||(U.isFileList(v)||U.endsWith(w,"[]"))&&(S=U.toArray(v)))return w=dw(w),S.forEach(function(T,x){!(U.isUndefined(T)||T===null)&&t.append(o===!0?mg([w],x,i):o===null?w:w+"[]",l(T))}),!1}return bh(v)?!0:(t.append(mg(k,w,i),l(v)),!1)}const h=[],p=Object.assign(Wx,{defaultVisitor:f,convertValue:l,isVisitable:bh});function y(v,w){if(!U.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(v),U.forEach(v,function(S,N){(!(U.isUndefined(S)||S===null)&&s.call(t,S,U.isString(N)?N.trim():N,w,p))===!0&&y(S,w?w.concat(N):[N])}),h.pop()}}if(!U.isObject(e))throw new TypeError("data must be an object");return y(e),t}function yg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rd(e,t){this._pairs=[],e&&jl(e,this,t)}const mw=rd.prototype;mw.append=function(t,n){this._pairs.push([t,n])};mw.toString=function(t){const n=t?function(r){return t.call(this,r,yg)}:yg;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Kx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yw(e,t,n){if(!t)return e;const r=n&&n.encode||Kx,s=n&&n.serialize;let i;if(s?i=s(t,n):i=U.isURLSearchParams(t)?t.toString():new rd(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class gg{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){U.forEach(this.handlers,function(r){r!==null&&t(r)})}}const gw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qx=typeof URLSearchParams<"u"?URLSearchParams:rd,Gx=typeof FormData<"u"?FormData:null,Qx=typeof Blob<"u"?Blob:null,Xx={isBrowser:!0,classes:{URLSearchParams:qx,FormData:Gx,Blob:Qx},protocols:["http","https","file","blob","url","data"]},vw=typeof window<"u"&&typeof document<"u",Yx=(e=>vw&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Jx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vw,hasStandardBrowserEnv:Yx,hasStandardBrowserWebWorkerEnv:Jx},Symbol.toStringTag,{value:"Module"})),Wn={...Zx,...Xx};function e2(e,t){return jl(e,new Wn.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Wn.isNode&&U.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function t2(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function n2(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ww(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=i>=n.length;return o=!o&&U.isArray(s)?s.length:o,u?(U.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!U.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&U.isArray(s[o])&&(s[o]=n2(s[o])),!a)}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,(r,s)=>{t(t2(r),s,n,0)}),n}return null}function r2(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const sd={transitional:gw,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=U.isObject(t);if(i&&U.isHTMLForm(t)&&(t=new FormData(t)),U.isFormData(t))return s?JSON.stringify(ww(t)):t;if(U.isArrayBuffer(t)||U.isBuffer(t)||U.isStream(t)||U.isFile(t)||U.isBlob(t))return t;if(U.isArrayBufferView(t))return t.buffer;if(U.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return e2(t,this.formSerializer).toString();if((a=U.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return jl(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),r2(t)):t}],transformResponse:[function(t){const n=this.transitional||sd.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&U.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?ge.from(a,ge.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wn.classes.FormData,Blob:Wn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],e=>{sd.headers[e]={}});const id=sd,s2=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i2=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&s2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},vg=Symbol("internals");function no(e){return e&&String(e).trim().toLowerCase()}function pu(e){return e===!1||e==null?e:U.isArray(e)?e.map(pu):String(e)}function o2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const a2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Xc(e,t,n,r,s){if(U.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!U.isString(t)){if(U.isString(r))return t.indexOf(r)!==-1;if(U.isRegExp(r))return r.test(t)}}function u2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function l2(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Ml{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,u,l){const f=no(u);if(!f)throw new Error("header name must be a non-empty string");const h=U.findKey(s,f);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||u]=pu(a))}const o=(a,u)=>U.forEach(a,(l,f)=>i(l,f,u));return U.isPlainObject(t)||t instanceof this.constructor?o(t,n):U.isString(t)&&(t=t.trim())&&!a2(t)?o(i2(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=no(t),t){const r=U.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return o2(s);if(U.isFunction(n))return n.call(this,s,r);if(U.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=no(t),t){const r=U.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Xc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=no(o),o){const a=U.findKey(r,o);a&&(!n||Xc(r,r[a],a,n))&&(delete r[a],s=!0)}}return U.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Xc(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return U.forEach(this,(s,i)=>{const o=U.findKey(r,i);if(o){n[o]=pu(s),delete n[i];return}const a=t?u2(i):String(i).trim();a!==i&&delete n[i],n[a]=pu(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return U.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&U.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[vg]=this[vg]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=no(o);r[a]||(l2(s,o),r[a]=!0)}return U.isArray(t)?t.forEach(i):i(t),this}}Ml.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Ml.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});U.freezeMethods(Ml);const lr=Ml;function Yc(e,t){const n=this||id,r=t||n,s=lr.from(r.headers);let i=r.data;return U.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function bw(e){return!!(e&&e.__CANCEL__)}function ua(e,t,n){ge.call(this,e??"canceled",ge.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(ua,ge,{__CANCEL__:!0});function c2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const f2=Wn.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(r)&&o.push("path="+r),U.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function h2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function p2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Sw(e,t){return e&&!h2(t)?p2(e,t):t}const d2=Wn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=U.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function m2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function y2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),f=r[i];o||(o=l),n[s]=u,r[s]=l;let h=i,p=0;for(;h!==s;)p+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const y=f&&l-f;return y?Math.round(p*1e3/y):void 0}}function wg(e,t){let n=0;const r=y2(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,u=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&l?(o-i)/u:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const g2=typeof XMLHttpRequest<"u",v2=g2&&function(e){return new Promise(function(n,r){let s=e.data;const i=lr.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,u;function l(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;if(U.isFormData(s)){if(Wn.hasStandardBrowserEnv||Wn.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[w,...k]=f?f.split(";").map(S=>S.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...k].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+k))}const p=Sw(e.baseURL,e.url);h.open(e.method.toUpperCase(),yw(p,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function y(){if(!h)return;const w=lr.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:w,config:e,request:h};c2(function(T){n(T),l()},function(T){r(T),l()},S),h=null}if("onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(y)},h.onabort=function(){h&&(r(new ge("Request aborted",ge.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let k=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||gw;e.timeoutErrorMessage&&(k=e.timeoutErrorMessage),r(new ge(k,S.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,e,h)),h=null},Wn.hasStandardBrowserEnv&&(a&&U.isFunction(a)&&(a=a(e)),a||a!==!1&&d2(p))){const w=e.xsrfHeaderName&&e.xsrfCookieName&&f2.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}s===void 0&&i.setContentType(null),"setRequestHeader"in h&&U.forEach(i.toJSON(),function(k,S){h.setRequestHeader(S,k)}),U.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),o&&o!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",wg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",wg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=w=>{h&&(r(!w||w.type?new ua(null,e,h):w),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const v=m2(p);if(v&&Wn.protocols.indexOf(v)===-1){r(new ge("Unsupported protocol "+v+":",ge.ERR_BAD_REQUEST,e));return}h.send(s||null)})},Sh={http:Vx,xhr:v2};U.forEach(Sh,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bg=e=>`- ${e}`,w2=e=>U.isFunction(e)||e===null||e===!1,Nw={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!w2(n)&&(r=Sh[(o=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(bg).join(`
`):" "+bg(i[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Sh};function Jc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ua(null,e)}function Sg(e){return Jc(e),e.headers=lr.from(e.headers),e.data=Yc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Nw.getAdapter(e.adapter||id.adapter)(e).then(function(r){return Jc(e),r.data=Yc.call(e,e.transformResponse,r),r.headers=lr.from(r.headers),r},function(r){return bw(r)||(Jc(e),r&&r.response&&(r.response.data=Yc.call(e,e.transformResponse,r.response),r.response.headers=lr.from(r.response.headers))),Promise.reject(r)})}const Ng=e=>e instanceof lr?e.toJSON():e;function Oi(e,t){t=t||{};const n={};function r(l,f,h){return U.isPlainObject(l)&&U.isPlainObject(f)?U.merge.call({caseless:h},l,f):U.isPlainObject(f)?U.merge({},f):U.isArray(f)?f.slice():f}function s(l,f,h){if(U.isUndefined(f)){if(!U.isUndefined(l))return r(void 0,l,h)}else return r(l,f,h)}function i(l,f){if(!U.isUndefined(f))return r(void 0,f)}function o(l,f){if(U.isUndefined(f)){if(!U.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,h){if(h in t)return r(l,f);if(h in e)return r(void 0,l)}const u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(Ng(l),Ng(f),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),function(f){const h=u[f]||s,p=h(e[f],t[f],f);U.isUndefined(p)&&h!==a||(n[f]=p)}),n}const Ew="1.6.7",od={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{od[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Eg={};od.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ew+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new ge(s(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!Eg[o]&&(Eg[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function b2(e,t,n){if(typeof e!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],u=a===void 0||o(a,i,e);if(u!==!0)throw new ge("option "+i+" must be "+u,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+i,ge.ERR_BAD_OPTION)}}const Nh={assertOptions:b2,validators:od},kr=Nh.validators;class Ju{constructor(t){this.defaults=t,this.interceptors={request:new gg,response:new gg}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Oi(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Nh.assertOptions(r,{silentJSONParsing:kr.transitional(kr.boolean),forcedJSONParsing:kr.transitional(kr.boolean),clarifyTimeoutError:kr.transitional(kr.boolean)},!1),s!=null&&(U.isFunction(s)?n.paramsSerializer={serialize:s}:Nh.assertOptions(s,{encode:kr.function,serialize:kr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&U.merge(i.common,i[n.method]);i&&U.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=lr.concat(o,i);const a=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(u=u&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let f,h=0,p;if(!u){const v=[Sg.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,l),p=v.length,f=Promise.resolve(n);h<p;)f=f.then(v[h++],v[h++]);return f}p=a.length;let y=n;for(h=0;h<p;){const v=a[h++],w=a[h++];try{y=v(y)}catch(k){w.call(this,k);break}}try{f=Sg.call(this,y)}catch(v){return Promise.reject(v)}for(h=0,p=l.length;h<p;)f=f.then(l[h++],l[h++]);return f}getUri(t){t=Oi(this.defaults,t);const n=Sw(t.baseURL,t.url);return yw(n,t.params,t.paramsSerializer)}}U.forEach(["delete","get","head","options"],function(t){Ju.prototype[t]=function(n,r){return this.request(Oi(r||{},{method:t,url:n,data:(r||{}).data}))}});U.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Oi(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Ju.prototype[t]=n(),Ju.prototype[t+"Form"]=n(!0)});const du=Ju;class ad{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new ua(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ad(function(s){t=s}),cancel:t}}}const S2=ad;function N2(e){return function(n){return e.apply(null,n)}}function E2(e){return U.isObject(e)&&e.isAxiosError===!0}const Eh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Eh).forEach(([e,t])=>{Eh[t]=e});const T2=Eh;function Tw(e){const t=new du(e),n=sw(du.prototype.request,t);return U.extend(n,du.prototype,t,{allOwnKeys:!0}),U.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Tw(Oi(e,s))},n}const Ye=Tw(id);Ye.Axios=du;Ye.CanceledError=ua;Ye.CancelToken=S2;Ye.isCancel=bw;Ye.VERSION=Ew;Ye.toFormData=jl;Ye.AxiosError=ge;Ye.Cancel=Ye.CanceledError;Ye.all=function(t){return Promise.all(t)};Ye.spread=N2;Ye.isAxiosError=E2;Ye.mergeConfig=Oi;Ye.AxiosHeaders=lr;Ye.formToJSON=e=>ww(U.isHTMLForm(e)?new FormData(e):e);Ye.getAdapter=Nw.getAdapter;Ye.HttpStatusCode=T2;Ye.default=Ye;const k2=Ye.create({baseURL:sx,headers:{"Content-type":ax,Authorization:ox}}),x2=e=>WT({queryKey:["photo",e.pageSize],queryFn:async({pageParam:t=1})=>(await k2.get(ix,{params:{page:t}})).data,getNextPageParam(t,n){return t.length>0?n.length+1:void 0}});var _2={};(function(){var e;function t(c){var d=0;return function(){return d<c.length?{done:!1,value:c[d++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,g){return c==Array.prototype||c==Object.prototype||(c[d]=g.value),c};function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof qn=="object"&&qn];for(var d=0;d<c.length;++d){var g=c[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=r(this);function i(c,d){if(d)e:{var g=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var _=c[b];if(!(_ in g))break e;g=g[_]}c=c[c.length-1],b=g[c],d=d(b),d!=b&&d!=null&&n(g,c,{configurable:!0,writable:!0,value:d})}}i("Symbol",function(c){function d(I){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new g(b+(I||"")+"_"+_++,I)}function g(I,O){this.h=I,n(this,"description",{configurable:!0,writable:!0,value:O})}if(c)return c;g.prototype.toString=function(){return this.h};var b="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",_=0;return d}),i("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<d.length;g++){var b=s[d[g]];typeof b=="function"&&typeof b.prototype[c]!="function"&&n(b.prototype,c,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return c});function o(c){return c={next:c},c[Symbol.iterator]=function(){return this},c}function a(c){var d=typeof Symbol<"u"&&Symbol.iterator&&c[Symbol.iterator];return d?d.call(c):{next:t(c)}}function u(c){if(!(c instanceof Array)){c=a(c);for(var d,g=[];!(d=c.next()).done;)g.push(d.value);c=g}return c}var l=typeof Object.assign=="function"?Object.assign:function(c,d){for(var g=1;g<arguments.length;g++){var b=arguments[g];if(b)for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&(c[_]=b[_])}return c};i("Object.assign",function(c){return c||l});var f=typeof Object.create=="function"?Object.create:function(c){function d(){}return d.prototype=c,new d},h;if(typeof Object.setPrototypeOf=="function")h=Object.setPrototypeOf;else{var p;e:{var y={a:!0},v={};try{v.__proto__=y,p=v.a;break e}catch{}p=!1}h=p?function(c,d){if(c.__proto__=d,c.__proto__!==d)throw new TypeError(c+" is not extensible");return c}:null}var w=h;function k(c,d){if(c.prototype=f(d.prototype),c.prototype.constructor=c,w)w(c,d);else for(var g in d)if(g!="prototype")if(Object.defineProperties){var b=Object.getOwnPropertyDescriptor(d,g);b&&Object.defineProperty(c,g,b)}else c[g]=d[g];c.ya=d.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function N(c){if(c.m)throw new TypeError("Generator is already running");c.m=!0}S.prototype.u=function(c){this.i=c};function T(c,d){c.l={ma:d,na:!0},c.h=c.s||c.v}S.prototype.return=function(c){this.l={return:c},this.h=this.v};function x(c,d,g){return c.h=g,{value:d}}function C(c){this.h=new S,this.i=c}function P(c,d){N(c.h);var g=c.h.j;return g?F(c,"return"in g?g.return:function(b){return{value:b,done:!0}},d,c.h.return):(c.h.return(d),L(c))}function F(c,d,g,b){try{var _=d.call(c.h.j,g);if(!(_ instanceof Object))throw new TypeError("Iterator result "+_+" is not an object");if(!_.done)return c.h.m=!1,_;var I=_.value}catch(O){return c.h.j=null,T(c.h,O),L(c)}return c.h.j=null,b.call(c.h,I),L(c)}function L(c){for(;c.h.h;)try{var d=c.i(c.h);if(d)return c.h.m=!1,{value:d.value,done:!1}}catch(g){c.h.i=void 0,T(c.h,g)}if(c.h.m=!1,c.h.l){if(d=c.h.l,c.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function M(c){this.next=function(d){return N(c.h),c.h.j?d=F(c,c.h.j.next,d,c.h.u):(c.h.u(d),d=L(c)),d},this.throw=function(d){return N(c.h),c.h.j?d=F(c,c.h.j.throw,d,c.h.u):(T(c.h,d),d=L(c)),d},this.return=function(d){return P(c,d)},this[Symbol.iterator]=function(){return this}}function B(c){function d(b){return c.next(b)}function g(b){return c.throw(b)}return new Promise(function(b,_){function I(O){O.done?b(O.value):Promise.resolve(O.value).then(d,g).then(I,_)}I(c.next())})}function V(c){return B(new M(new C(c)))}i("Promise",function(c){function d(O){this.i=0,this.j=void 0,this.h=[],this.u=!1;var R=this.l();try{O(R.resolve,R.reject)}catch(z){R.reject(z)}}function g(){this.h=null}function b(O){return O instanceof d?O:new d(function(R){R(O)})}if(c)return c;g.prototype.i=function(O){if(this.h==null){this.h=[];var R=this;this.j(function(){R.m()})}this.h.push(O)};var _=s.setTimeout;g.prototype.j=function(O){_(O,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var O=this.h;this.h=[];for(var R=0;R<O.length;++R){var z=O[R];O[R]=null;try{z()}catch(H){this.l(H)}}}this.h=null},g.prototype.l=function(O){this.j(function(){throw O})},d.prototype.l=function(){function O(H){return function(G){z||(z=!0,H.call(R,G))}}var R=this,z=!1;return{resolve:O(this.I),reject:O(this.m)}},d.prototype.I=function(O){if(O===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(O instanceof d)this.L(O);else{e:switch(typeof O){case"object":var R=O!=null;break e;case"function":R=!0;break e;default:R=!1}R?this.F(O):this.s(O)}},d.prototype.F=function(O){var R=void 0;try{R=O.then}catch(z){this.m(z);return}typeof R=="function"?this.M(R,O):this.s(O)},d.prototype.m=function(O){this.v(2,O)},d.prototype.s=function(O){this.v(1,O)},d.prototype.v=function(O,R){if(this.i!=0)throw Error("Cannot settle("+O+", "+R+"): Promise already settled in state"+this.i);this.i=O,this.j=R,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var O=this;_(function(){if(O.D()){var R=s.console;typeof R<"u"&&R.error(O.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var O=s.CustomEvent,R=s.Event,z=s.dispatchEvent;return typeof z>"u"?!0:(typeof O=="function"?O=new O("unhandledrejection",{cancelable:!0}):typeof R=="function"?O=new R("unhandledrejection",{cancelable:!0}):(O=s.document.createEvent("CustomEvent"),O.initCustomEvent("unhandledrejection",!1,!0,O)),O.promise=this,O.reason=this.j,z(O))},d.prototype.H=function(){if(this.h!=null){for(var O=0;O<this.h.length;++O)I.i(this.h[O]);this.h=null}};var I=new g;return d.prototype.L=function(O){var R=this.l();O.T(R.resolve,R.reject)},d.prototype.M=function(O,R){var z=this.l();try{O.call(R,z.resolve,z.reject)}catch(H){z.reject(H)}},d.prototype.then=function(O,R){function z(Z,X){return typeof Z=="function"?function(se){try{H(Z(se))}catch(ce){G(ce)}}:X}var H,G,re=new d(function(Z,X){H=Z,G=X});return this.T(z(O,H),z(R,G)),re},d.prototype.catch=function(O){return this.then(void 0,O)},d.prototype.T=function(O,R){function z(){switch(H.i){case 1:O(H.j);break;case 2:R(H.j);break;default:throw Error("Unexpected state: "+H.i)}}var H=this;this.h==null?I.i(z):this.h.push(z),this.u=!0},d.resolve=b,d.reject=function(O){return new d(function(R,z){z(O)})},d.race=function(O){return new d(function(R,z){for(var H=a(O),G=H.next();!G.done;G=H.next())b(G.value).T(R,z)})},d.all=function(O){var R=a(O),z=R.next();return z.done?b([]):new d(function(H,G){function re(se){return function(ce){Z[se]=ce,X--,X==0&&H(Z)}}var Z=[],X=0;do Z.push(void 0),X++,b(z.value).T(re(Z.length-1),G),z=R.next();while(!z.done)})},d});function ee(c,d){c instanceof String&&(c+="");var g=0,b=!1,_={next:function(){if(!b&&g<c.length){var I=g++;return{value:d(I,c[I]),done:!1}}return b=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}i("Array.prototype.keys",function(c){return c||function(){return ee(this,function(d){return d})}}),i("Array.prototype.fill",function(c){return c||function(d,g,b){var _=this.length||0;for(0>g&&(g=Math.max(0,_+g)),(b==null||b>_)&&(b=_),b=Number(b),0>b&&(b=Math.max(0,_+b)),g=Number(g||0);g<b;g++)this[g]=d;return this}});function J(c){return c||Array.prototype.fill}i("Int8Array.prototype.fill",J),i("Uint8Array.prototype.fill",J),i("Uint8ClampedArray.prototype.fill",J),i("Int16Array.prototype.fill",J),i("Uint16Array.prototype.fill",J),i("Int32Array.prototype.fill",J),i("Uint32Array.prototype.fill",J),i("Float32Array.prototype.fill",J),i("Float64Array.prototype.fill",J),i("Object.is",function(c){return c||function(d,g){return d===g?d!==0||1/d===1/g:d!==d&&g!==g}}),i("Array.prototype.includes",function(c){return c||function(d,g){var b=this;b instanceof String&&(b=String(b));var _=b.length;for(g=g||0,0>g&&(g=Math.max(g+_,0));g<_;g++){var I=b[g];if(I===d||Object.is(I,d))return!0}return!1}}),i("String.prototype.includes",function(c){return c||function(d,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,g||0)!==-1}});var ie=this||self;function oe(c,d){c=c.split(".");var g=ie;c[0]in g||typeof g.execScript>"u"||g.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)c.length||d===void 0?g[b]&&g[b]!==Object.prototype[b]?g=g[b]:g=g[b]={}:g[b]=d}function fe(c){var d;e:{if((d=ie.navigator)&&(d=d.userAgent))break e;d=""}return d.indexOf(c)!=-1}var Ee=Array.prototype.map?function(c,d){return Array.prototype.map.call(c,d,void 0)}:function(c,d){for(var g=c.length,b=Array(g),_=typeof c=="string"?c.split(""):c,I=0;I<g;I++)I in _&&(b[I]=d.call(void 0,_[I],I,c));return b},K={},Q=null;function ne(c){var d=c.length,g=3*d/4;g%3?g=Math.floor(g):"=.".indexOf(c[d-1])!=-1&&(g="=.".indexOf(c[d-2])!=-1?g-2:g-1);var b=new Uint8Array(g),_=0;return ve(c,function(I){b[_++]=I}),_!==g?b.subarray(0,_):b}function ve(c,d){function g(z){for(;b<c.length;){var H=c.charAt(b++),G=Q[H];if(G!=null)return G;if(!/^[\s\xa0]*$/.test(H))throw Error("Unknown base64 encoding at char: "+H)}return z}Se();for(var b=0;;){var _=g(-1),I=g(0),O=g(64),R=g(64);if(R===64&&_===-1)break;d(_<<2|I>>4),O!=64&&(d(I<<4&240|O>>2),R!=64&&d(O<<6&192|R))}}function Se(){if(!Q){Q={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var b=c.concat(d[g].split(""));K[g]=b;for(var _=0;_<b.length;_++){var I=b[_];Q[I]===void 0&&(Q[I]=_)}}}}var pn=typeof Uint8Array<"u",Ct=!(fe("Trident")||fe("MSIE"))&&typeof ie.btoa=="function";function dn(c){if(!Ct){var d;d===void 0&&(d=0),Se(),d=K[d];for(var g=Array(Math.floor(c.length/3)),b=d[64]||"",_=0,I=0;_<c.length-2;_+=3){var O=c[_],R=c[_+1],z=c[_+2],H=d[O>>2];O=d[(O&3)<<4|R>>4],R=d[(R&15)<<2|z>>6],z=d[z&63],g[I++]=H+O+R+z}switch(H=0,z=b,c.length-_){case 2:H=c[_+1],z=d[(H&15)<<2]||b;case 1:c=c[_],g[I]=d[c>>2]+d[(c&3)<<4|H>>4]+z+b}return g.join("")}for(d="";10240<c.length;)d+=String.fromCharCode.apply(null,c.subarray(0,10240)),c=c.subarray(10240);return d+=String.fromCharCode.apply(null,c),btoa(d)}var gt=RegExp("[-_.]","g");function mn(c){switch(c){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Nr(c){if(!Ct)return ne(c);gt.test(c)&&(c=c.replace(gt,mn)),c=atob(c);for(var d=new Uint8Array(c.length),g=0;g<c.length;g++)d[g]=c.charCodeAt(g);return d}var Dn;function ts(){return Dn||(Dn=new Uint8Array(0))}var Pn={},Rn=typeof Uint8Array.prototype.slice=="function",Je=0,kt=0;function zd(c){var d=0>c;c=Math.abs(c);var g=c>>>0;c=Math.floor((c-g)/4294967296),d&&(g=a(Bd(g,c)),d=g.next().value,c=g.next().value,g=d),Je=g>>>0,kt=c>>>0}var eS=typeof BigInt=="function";function Bd(c,d){return d=~d,c?c=~c+1:d+=1,[c,d]}function jd(c,d){this.i=c>>>0,this.h=d>>>0}function Md(c){if(!c)return Ud||(Ud=new jd(0,0));if(!/^-?\d+$/.test(c))return null;if(16>c.length)zd(Number(c));else if(eS)c=BigInt(c),Je=Number(c&BigInt(4294967295))>>>0,kt=Number(c>>BigInt(32)&BigInt(4294967295));else{var d=+(c[0]==="-");kt=Je=0;for(var g=c.length,b=d,_=(g-d)%6+d;_<=g;b=_,_+=6)b=Number(c.slice(b,_)),kt*=1e6,Je=1e6*Je+b,4294967296<=Je&&(kt+=Je/4294967296|0,Je%=4294967296);d&&(d=a(Bd(Je,kt)),c=d.next().value,d=d.next().value,Je=c,kt=d)}return new jd(Je,kt)}var Ud;function Vd(c,d){return Error("Invalid wire type: "+c+" (at position "+d+")")}function Jl(){return Error("Failed to read varint, encoding is invalid.")}function Hd(c,d){return Error("Tried to read past the end of the data "+d+" > "+c)}function ns(){throw Error("Invalid UTF8")}function Wd(c,d){return d=String.fromCharCode.apply(null,d),c==null?d:c+d}var ha=void 0,Zl,tS=typeof TextDecoder<"u",Kd,nS=typeof TextEncoder<"u",qd;function Gd(c){if(c!==Pn)throw Error("illegal external caller")}function Mi(c,d){if(Gd(d),this.V=c,c!=null&&c.length===0)throw Error("ByteString should be constructed with non-empty values")}function ec(){return qd||(qd=new Mi(null,Pn))}function Qd(c){Gd(Pn);var d=c.V;return d=d==null||pn&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?Nr(d):null,d==null?d:c.V=d}function rS(c){if(typeof c=="string")return{buffer:Nr(c),C:!1};if(Array.isArray(c))return{buffer:new Uint8Array(c),C:!1};if(c.constructor===Uint8Array)return{buffer:c,C:!1};if(c.constructor===ArrayBuffer)return{buffer:new Uint8Array(c),C:!1};if(c.constructor===Mi)return{buffer:Qd(c)||ts(),C:!0};if(c instanceof Uint8Array)return{buffer:new Uint8Array(c.buffer,c.byteOffset,c.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Xd(c,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,tc(this,c,d)}function tc(c,d,g){g=g===void 0?{}:g,c.S=g.S===void 0?!1:g.S,d&&(d=rS(d),c.i=d.buffer,c.m=d.C,c.l=0,c.j=c.i.length,c.h=c.l)}Xd.prototype.reset=function(){this.h=this.l};function rs(c,d){if(c.h=d,d>c.j)throw Hd(c.j,d)}function Ui(c){var d=c.i,g=c.h,b=d[g++],_=b&127;if(b&128&&(b=d[g++],_|=(b&127)<<7,b&128&&(b=d[g++],_|=(b&127)<<14,b&128&&(b=d[g++],_|=(b&127)<<21,b&128&&(b=d[g++],_|=b<<28,b&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128)))))throw Jl();return rs(c,g),_}function Yd(c,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var g=c.h,b=g+d;if(b>c.j)throw Hd(d,c.j-g);return c.h=b,g}var Jd=[];function nc(){this.h=[]}nc.prototype.length=function(){return this.h.length},nc.prototype.end=function(){var c=this.h;return this.h=[],c};function Zd(c,d,g){for(;0<g||127<d;)c.h.push(d&127|128),d=(d>>>7|g<<25)>>>0,g>>>=7;c.h.push(d)}function ss(c,d){for(;127<d;)c.h.push(d&127|128),d>>>=7;c.h.push(d)}function rc(c,d){if(Jd.length){var g=Jd.pop();tc(g,c,d),c=g}else c=new Xd(c,d);this.h=c,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}rc.prototype.setOptions=function(c){c=c===void 0?{}:c,this.ca=c.ca===void 0?!1:c.ca},rc.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function em(c){var d=c.h;if(d.h==d.j)return!1;c.j=c.h.h;var g=Ui(c.h)>>>0;if(d=g>>>3,g&=7,!(0<=g&&5>=g))throw Vd(g,c.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+c.j+")");return c.l=d,c.i=g,!0}function pa(c){switch(c.i){case 0:if(c.i!=0)pa(c);else e:{c=c.h;for(var d=c.h,g=d+10,b=c.i;d<g;)if(!(b[d++]&128)){rs(c,d);break e}throw Jl()}break;case 1:c=c.h,rs(c,c.h+8);break;case 2:c.i!=2?pa(c):(d=Ui(c.h)>>>0,c=c.h,rs(c,c.h+d));break;case 5:c=c.h,rs(c,c.h+4);break;case 3:d=c.l;do{if(!em(c))throw Error("Unmatched start-group tag: stream EOF");if(c.i==4){if(c.l!=d)throw Error("Unmatched end-group tag");break}pa(c)}while(!0);break;default:throw Vd(c.i,c.j)}}var da=[];function sS(){this.j=[],this.i=0,this.h=new nc}function Us(c,d){d.length!==0&&(c.j.push(d),c.i+=d.length)}function iS(c,d){if(d=d.R){Us(c,c.h.end());for(var g=0;g<d.length;g++)Us(c,Qd(d[g])||ts())}}var Zn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function is(c,d){return Zn?c[Zn]|=d:c.A!==void 0?c.A|=d:(Object.defineProperties(c,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function tm(c,d){Zn?c[Zn]&&(c[Zn]&=~d):c.A!==void 0&&(c.A&=~d)}function We(c){var d;return Zn?d=c[Zn]:d=c.A,d??0}function Fn(c,d){Zn?c[Zn]=d:c.A!==void 0?c.A=d:Object.defineProperties(c,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function sc(c){return is(c,1),c}function oS(c,d){Fn(d,(c|0)&-51)}function ma(c,d){Fn(d,(c|18)&-41)}var ic={};function ya(c){return c!==null&&typeof c=="object"&&!Array.isArray(c)&&c.constructor===Object}var Vi,nm=[];Fn(nm,23),Vi=Object.freeze(nm);function oc(c){if(We(c.o)&2)throw Error("Cannot mutate an immutable Message")}function ac(c){var d=c.length;(d=d?c[d-1]:void 0)&&ya(d)?d.g=1:(d={},c.push((d.g=1,d)))}function rm(c){var d=c.i+c.G;return c.B||(c.B=c.o[d]={})}function yn(c,d){return d===-1?null:d>=c.i?c.B?c.B[d]:void 0:c.o[d+c.G]}function Ln(c,d,g,b){oc(c),Hi(c,d,g,b)}function Hi(c,d,g,b){c.j&&(c.j=void 0),d>=c.i||b?rm(c)[d]=g:(c.o[d+c.G]=g,(c=c.B)&&d in c&&delete c[d])}function uc(c,d,g,b){var _=yn(c,d);Array.isArray(_)||(_=Vi);var I=We(_);if(I&1||sc(_),b)I&2||is(_,2),g&1||Object.freeze(_);else{b=!(g&2);var O=I&2;g&1||!O?b&&I&16&&!O&&tm(_,16):(_=sc(Array.prototype.slice.call(_)),Hi(c,d,_))}return _}function lc(c,d){var g=yn(c,d),b=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return b!=null&&b!==g&&Hi(c,d,b),b}function sm(c,d,g,b,_){c.h||(c.h={});var I=c.h[g],O=uc(c,g,3,_);if(!I){var R=O;I=[];var z=!!(We(c.o)&16);O=!!(We(R)&2);var H=R;!_&&O&&(R=Array.prototype.slice.call(R));for(var G=O,re=0;re<R.length;re++){var Z=R[re],X=d,se=!1;if(se=se===void 0?!1:se,Z=Array.isArray(Z)?new X(Z):se?new X:void 0,Z!==void 0){X=Z.o;var ce=se=We(X);O&&(ce|=2),z&&(ce|=16),ce!=se&&Fn(X,ce),X=ce,G=G||!!(2&X),I.push(Z)}}return c.h[g]=I,z=We(R),d=z|33,d=G?d&-9:d|8,z!=d&&(G=R,Object.isFrozen(G)&&(G=Array.prototype.slice.call(G)),Fn(G,d),R=G),H!==R&&Hi(c,g,R),(_||b&&O)&&is(I,2),b&&Object.freeze(I),I}return _||(_=Object.isFrozen(I),b&&!_?Object.freeze(I):!b&&_&&(I=Array.prototype.slice.call(I),c.h[g]=I)),I}function ga(c,d,g){var b=!!(We(c.o)&2);if(d=sm(c,d,g,b,b),c=uc(c,g,3,b),!(b||We(c)&8)){for(b=0;b<d.length;b++){if(g=d[b],We(g.o)&2){var _=cm(g,!1);_.j=g}else _=g;g!==_&&(d[b]=_,c[b]=_.o)}is(c,8)}return d}function zn(c,d,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);Ln(c,d,g)}function im(c,d,g,b,_){oc(c);var I=sm(c,g,d,!1,!1);return g=b??new g,c=uc(c,d,2,!1),_!=null?(I.splice(_,0,g),c.splice(_,0,g.o)):(I.push(g),c.push(g.o)),g.C()&&tm(c,8),g}function va(c,d){return c??d}function Bn(c,d,g){return g=g===void 0?0:g,va(lc(c,d),g)}var wa;function aS(c){switch(typeof c){case"number":return isFinite(c)?c:String(c);case"object":if(c)if(Array.isArray(c)){if(We(c)&128)return c=Array.prototype.slice.call(c),ac(c),c}else{if(pn&&c!=null&&c instanceof Uint8Array)return dn(c);if(c instanceof Mi){var d=c.V;return d==null?"":typeof d=="string"?d:c.V=dn(d)}}}return c}function om(c,d,g,b){if(c!=null){if(Array.isArray(c))c=cc(c,d,g,b!==void 0);else if(ya(c)){var _={},I;for(I in c)_[I]=om(c[I],d,g,b);c=_}else c=d(c,b);return c}}function cc(c,d,g,b){var _=We(c);b=b?!!(_&16):void 0,c=Array.prototype.slice.call(c);for(var I=0;I<c.length;I++)c[I]=om(c[I],d,g,b);return g(_,c),c}function uS(c){return c.ja===ic?c.toJSON():aS(c)}function lS(c,d){c&128&&ac(d)}function am(c,d,g){if(g=g===void 0?ma:g,c!=null){if(pn&&c instanceof Uint8Array)return c.length?new Mi(new Uint8Array(c),Pn):ec();if(Array.isArray(c)){var b=We(c);return b&2?c:d&&!(b&32)&&(b&16||b===0)?(Fn(c,b|2),c):(c=cc(c,am,b&4?ma:g,!0),d=We(c),d&4&&d&2&&Object.freeze(c),c)}return c.ja===ic?lm(c):c}}function um(c,d,g,b,_,I,O){if(c=c.h&&c.h[g]){if(b=We(c),b&2?b=c:(I=Ee(c,lm),ma(b,I),Object.freeze(I),b=I),oc(d),O=b==null?Vi:sc([]),b!=null){for(I=!!b.length,c=0;c<b.length;c++){var R=b[c];I=I&&!(We(R.o)&2),O[c]=R.o}I=(I?8:0)|1,c=We(O),(c&I)!==I&&(Object.isFrozen(O)&&(O=Array.prototype.slice.call(O)),Fn(O,c|I)),d.h||(d.h={}),d.h[g]=b}else d.h&&(d.h[g]=void 0);Hi(d,g,O,_)}else Ln(d,g,am(b,I,O),_)}function lm(c){return We(c.o)&2||(c=cm(c,!0),is(c.o,2)),c}function cm(c,d){var g=c.o,b=[];is(b,16);var _=c.constructor.h;if(_&&b.push(_),_=c.B,_){b.length=g.length,b.fill(void 0,b.length,g.length);var I={};b[b.length-1]=I}We(g)&128&&ac(b),d=d||c.C()?ma:oS,I=c.constructor,wa=b,b=new I(b),wa=void 0,c.R&&(b.R=c.R.slice()),I=!!(We(g)&16);for(var O=_?g.length-1:g.length,R=0;R<O;R++)um(c,b,R-c.G,g[R],!1,I,d);if(_)for(var z in _)um(c,b,+z,_[z],!0,I,d);return b}function Dt(c,d,g){c==null&&(c=wa),wa=void 0;var b=this.constructor.i||0,_=0<b,I=this.constructor.h,O=!1;if(c==null){c=I?[I]:[];var R=48,z=!0;_&&(b=0,R|=128),Fn(c,R)}else{if(!Array.isArray(c)||I&&I!==c[0])throw Error();var H=R=is(c,0);if((z=(16&H)!==0)&&((O=(32&H)!==0)||(H|=32)),_){if(128&H)b=0;else if(0<c.length){var G=c[c.length-1];if(ya(G)&&"g"in G){b=0,H|=128,delete G.g;var re=!0,Z;for(Z in G){re=!1;break}re&&c.pop()}}}else if(128&H)throw Error();R!==H&&Fn(c,H)}this.G=(I?0:-1)-b,this.h=void 0,this.o=c;e:{if(I=this.o.length,b=I-1,I&&(I=this.o[b],ya(I))){this.B=I,this.i=b-this.G;break e}d!==void 0&&-1<d?(this.i=Math.max(d,b+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!_&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){d=z&&!O&&!0,_=this.i;var X;for(z=0;z<g.length;z++)O=g[z],O<_?(O+=this.G,(b=c[O])?fm(b,d):c[O]=Vi):(X||(X=rm(this)),(b=X[O])?fm(b,d):X[O]=Vi)}}Dt.prototype.toJSON=function(){return cc(this.o,uS,lS)},Dt.prototype.C=function(){return!!(We(this.o)&2)};function fm(c,d){if(Array.isArray(c)){var g=We(c),b=1;!d||g&2||(b|=16),(g&b)!==b&&Fn(c,g|b)}}Dt.prototype.ja=ic,Dt.prototype.toString=function(){return this.o.toString()};function hm(c,d,g){if(g){var b={},_;for(_ in g){var I=g[_],O=I.qa;O||(b.J=I.wa||I.oa.W,I.ia?(b.aa=gm(I.ia),O=function(R){return function(z,H,G){return R.J(z,H,G,R.aa)}}(b)):I.ka?(b.Z=vm(I.da.P,I.ka),O=function(R){return function(z,H,G){return R.J(z,H,G,R.Z)}}(b)):O=b.J,I.qa=O),O(d,c,I.da),b={J:b.J,aa:b.aa,Z:b.Z}}}iS(d,c)}var ba=Symbol();function pm(c,d,g){return c[ba]||(c[ba]=function(b,_){return d(b,_,g)})}function dm(c){var d=c[ba];if(!d){var g=hc(c);d=function(b,_){return wm(b,_,g)},c[ba]=d}return d}function cS(c){var d=c.ia;if(d)return dm(d);if(d=c.va)return pm(c.da.P,d,c.ka)}function fS(c){var d=cS(c),g=c.da,b=c.oa.U;return d?function(_,I){return b(_,I,g,d)}:function(_,I){return b(_,I,g)}}function mm(c,d){var g=c[d];return typeof g=="function"&&g.length===0&&(g=g(),c[d]=g),Array.isArray(g)&&(Ki in g||Wi in g||0<g.length&&typeof g[0]=="function")?g:void 0}function ym(c,d,g,b,_,I){d.P=c[0];var O=1;if(c.length>O&&typeof c[O]!="number"){var R=c[O++];g(d,R)}for(;O<c.length;){g=c[O++];for(var z=O+1;z<c.length&&typeof c[z]!="number";)z++;switch(R=c[O++],z-=O,z){case 0:b(d,g,R);break;case 1:(z=mm(c,O))?(O++,_(d,g,R,z)):b(d,g,R,c[O++]);break;case 2:z=O++,z=mm(c,z),_(d,g,R,z,c[O++]);break;case 3:I(d,g,R,c[O++],c[O++],c[O++]);break;case 4:I(d,g,R,c[O++],c[O++],c[O++],c[O++]);break;default:throw Error("unexpected number of binary field arguments: "+z)}}return d}var Sa=Symbol();function gm(c){var d=c[Sa];if(!d){var g=fc(c);d=function(b,_){return bm(b,_,g)},c[Sa]=d}return d}function vm(c,d){var g=c[Sa];return g||(g=function(b,_){return hm(b,_,d)},c[Sa]=g),g}var Wi=Symbol();function hS(c,d){c.push(d)}function pS(c,d,g){c.push(d,g.W)}function dS(c,d,g,b){var _=gm(b),I=fc(b).P,O=g.W;c.push(d,function(R,z,H){return O(R,z,H,I,_)})}function mS(c,d,g,b,_,I){var O=vm(b,I),R=g.W;c.push(d,function(z,H,G){return R(z,H,G,b,O)})}function fc(c){var d=c[Wi];return d||(d=ym(c,c[Wi]=[],hS,pS,dS,mS),Ki in c&&Wi in c&&(c.length=0),d)}var Ki=Symbol();function yS(c,d){c[0]=d}function gS(c,d,g,b){var _=g.U;c[d]=b?function(I,O,R){return _(I,O,R,b)}:_}function vS(c,d,g,b,_){var I=g.U,O=dm(b),R=hc(b).P;c[d]=function(z,H,G){return I(z,H,G,R,O,_)}}function wS(c,d,g,b,_,I,O){var R=g.U,z=pm(b,_,I);c[d]=function(H,G,re){return R(H,G,re,b,z,O)}}function hc(c){var d=c[Ki];return d||(d=ym(c,c[Ki]={},yS,gS,vS,wS),Ki in c&&Wi in c&&(c.length=0),d)}function wm(c,d,g){for(;em(d)&&d.i!=4;){var b=d.l,_=g[b];if(!_){var I=g[0];I&&(I=I[b])&&(_=g[b]=fS(I))}if(!_||!_(d,c,b)){_=d,b=c,I=_.j,pa(_);var O=_;if(!O.ca){if(_=O.h.h-I,O.h.h=I,O=O.h,_==0)_=ec();else{if(I=Yd(O,_),O.S&&O.m)_=O.i.subarray(I,I+_);else{O=O.i;var R=I;_=I+_,_=R===_?ts():Rn?O.slice(R,_):new Uint8Array(O.subarray(R,_))}_=_.length==0?ec():new Mi(_,Pn)}(I=b.R)?I.push(_):b.R=[_]}}}return c}function bm(c,d,g){for(var b=g.length,_=b%2==1,I=_?1:0;I<b;I+=2)(0,g[I+1])(d,c,g[I]);hm(c,d,_?g[0]:void 0)}function qi(c,d){return{U:c,W:d}}var gn=qi(function(c,d,g){if(c.i!==5)return!1;c=c.h;var b=c.i,_=c.h,I=b[_],O=b[_+1],R=b[_+2];return b=b[_+3],rs(c,c.h+4),O=(I<<0|O<<8|R<<16|b<<24)>>>0,c=2*(O>>31)+1,I=O>>>23&255,O&=8388607,Ln(d,g,I==255?O?NaN:1/0*c:I==0?c*Math.pow(2,-149)*O:c*Math.pow(2,I-150)*(O+Math.pow(2,23))),!0},function(c,d,g){if(d=lc(d,g),d!=null){ss(c.h,8*g+5),c=c.h;var b=+d;b===0?0<1/b?Je=kt=0:(kt=0,Je=2147483648):isNaN(b)?(kt=0,Je=2147483647):(b=(g=0>b?-2147483648:0)?-b:b,34028234663852886e22<b?(kt=0,Je=(g|2139095040)>>>0):11754943508222875e-54>b?(b=Math.round(b/Math.pow(2,-149)),kt=0,Je=(g|b)>>>0):(d=Math.floor(Math.log(b)/Math.LN2),b*=Math.pow(2,-d),b=Math.round(8388608*b),16777216<=b&&++d,kt=0,Je=(g|d+127<<23|b&8388607)>>>0)),g=Je,c.h.push(g>>>0&255),c.h.push(g>>>8&255),c.h.push(g>>>16&255),c.h.push(g>>>24&255)}}),bS=qi(function(c,d,g){if(c.i!==0)return!1;var b=c.h,_=0,I=c=0,O=b.i,R=b.h;do{var z=O[R++];_|=(z&127)<<I,I+=7}while(32>I&&z&128);for(32<I&&(c|=(z&127)>>4),I=3;32>I&&z&128;I+=7)z=O[R++],c|=(z&127)<<I;if(rs(b,R),128>z)b=_>>>0,z=c>>>0,(c=z&2147483648)&&(b=~b+1>>>0,z=~z>>>0,b==0&&(z=z+1>>>0)),b=4294967296*z+(b>>>0);else throw Jl();return Ln(d,g,c?-b:b),!0},function(c,d,g){d=yn(d,g),d!=null&&(typeof d=="string"&&Md(d),d!=null&&(ss(c.h,8*g),typeof d=="number"?(c=c.h,zd(d),Zd(c,Je,kt)):(g=Md(d),Zd(c.h,g.i,g.h))))}),SS=qi(function(c,d,g){return c.i!==0?!1:(Ln(d,g,Ui(c.h)),!0)},function(c,d,g){if(d=yn(d,g),d!=null&&d!=null)if(ss(c.h,8*g),c=c.h,g=d,0<=g)ss(c,g);else{for(d=0;9>d;d++)c.h.push(g&127|128),g>>=7;c.h.push(1)}}),Sm=qi(function(c,d,g){if(c.i!==2)return!1;var b=Ui(c.h)>>>0;c=c.h;var _=Yd(c,b);if(c=c.i,tS){var I=c,O;(O=Zl)||(O=Zl=new TextDecoder("utf-8",{fatal:!0})),c=_+b,I=_===0&&c===I.length?I:I.subarray(_,c);try{var R=O.decode(I)}catch(re){if(ha===void 0){try{O.decode(new Uint8Array([128]))}catch{}try{O.decode(new Uint8Array([97])),ha=!0}catch{ha=!1}}throw!ha&&(Zl=void 0),re}}else{R=_,b=R+b,_=[];for(var z=null,H,G;R<b;)H=c[R++],128>H?_.push(H):224>H?R>=b?ns():(G=c[R++],194>H||(G&192)!==128?(R--,ns()):_.push((H&31)<<6|G&63)):240>H?R>=b-1?ns():(G=c[R++],(G&192)!==128||H===224&&160>G||H===237&&160<=G||((I=c[R++])&192)!==128?(R--,ns()):_.push((H&15)<<12|(G&63)<<6|I&63)):244>=H?R>=b-2?ns():(G=c[R++],(G&192)!==128||(H<<28)+(G-144)>>30||((I=c[R++])&192)!==128||((O=c[R++])&192)!==128?(R--,ns()):(H=(H&7)<<18|(G&63)<<12|(I&63)<<6|O&63,H-=65536,_.push((H>>10&1023)+55296,(H&1023)+56320))):ns(),8192<=_.length&&(z=Wd(z,_),_.length=0);R=Wd(z,_)}return Ln(d,g,R),!0},function(c,d,g){if(d=yn(d,g),d!=null){var b=!1;if(b=b===void 0?!1:b,nS){if(b&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Kd||(Kd=new TextEncoder)).encode(d)}else{for(var _=0,I=new Uint8Array(3*d.length),O=0;O<d.length;O++){var R=d.charCodeAt(O);if(128>R)I[_++]=R;else{if(2048>R)I[_++]=R>>6|192;else{if(55296<=R&&57343>=R){if(56319>=R&&O<d.length){var z=d.charCodeAt(++O);if(56320<=z&&57343>=z){R=1024*(R-55296)+z-56320+65536,I[_++]=R>>18|240,I[_++]=R>>12&63|128,I[_++]=R>>6&63|128,I[_++]=R&63|128;continue}else O--}if(b)throw Error("Found an unpaired surrogate");R=65533}I[_++]=R>>12|224,I[_++]=R>>6&63|128}I[_++]=R&63|128}}d=_===I.length?I:I.subarray(0,_)}ss(c.h,8*g+2),ss(c.h,d.length),Us(c,c.h.end()),Us(c,d)}}),Nm=qi(function(c,d,g,b,_){if(c.i!==2)return!1;d=im(d,g,b),g=c.h.j,b=Ui(c.h)>>>0;var I=c.h.h+b,O=I-g;if(0>=O&&(c.h.j=I,_(d,c,void 0,void 0,void 0),O=I-c.h.h),O)throw Error("Message parsing ended unexpectedly. Expected to read "+(b+" bytes, instead read "+(b-O)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return c.h.h=I,c.h.j=g,!0},function(c,d,g,b,_){if(d=ga(d,b,g),d!=null)for(b=0;b<d.length;b++){var I=c;ss(I.h,8*g+2);var O=I.h.end();Us(I,O),O.push(I.i),I=O,_(d[b],c),O=c;var R=I.pop();for(R=O.i+O.h.length()-R;127<R;)I.push(R&127|128),R>>>=7,O.i++;I.push(R),O.i++}});function pc(c){return function(d,g){e:{if(da.length){var b=da.pop();b.setOptions(g),tc(b.h,d,g),d=b}else d=new rc(d,g);try{var _=hc(c),I=wm(new _.P,d,_);break e}finally{_=d.h,_.i=null,_.m=!1,_.l=0,_.j=0,_.h=0,_.S=!1,d.l=-1,d.i=-1,100>da.length&&da.push(d)}I=void 0}return I}}function dc(c){return function(){var d=new sS;bm(this,d,fc(c)),Us(d,d.h.end());for(var g=new Uint8Array(d.i),b=d.j,_=b.length,I=0,O=0;O<_;O++){var R=b[O];g.set(R,I),I+=R.length}return d.j=[g],g}}function Vs(c){Dt.call(this,c)}k(Vs,Dt);var Em=[Vs,1,SS,2,gn,3,Sm,4,Sm];Vs.prototype.l=dc(Em);function mc(c){Dt.call(this,c,-1,NS)}k(mc,Dt),mc.prototype.addClassification=function(c,d){return im(this,1,Vs,c,d),this};var NS=[1],Tm=pc([mc,1,Nm,Em]);function Hs(c){Dt.call(this,c)}k(Hs,Dt);var km=[Hs,1,gn,2,gn,3,gn,4,gn,5,gn];Hs.prototype.l=dc(km);function xm(c){Dt.call(this,c,-1,ES)}k(xm,Dt);var ES=[1],_m=pc([xm,1,Nm,km]);function Na(c){Dt.call(this,c)}k(Na,Dt);var $m=[Na,1,gn,2,gn,3,gn,4,gn,5,gn,6,bS],TS=pc($m);Na.prototype.l=dc($m);function Om(c,d,g){if(g=c.createShader(g===0?c.VERTEX_SHADER:c.FRAGMENT_SHADER),c.shaderSource(g,d),c.compileShader(g),!c.getShaderParameter(g,c.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+c.getShaderInfoLog(g));return g}function Im(c){return ga(c,Vs,1).map(function(d){var g=yn(d,1);return{index:g??0,score:Bn(d,2),label:yn(d,3)!=null?va(yn(d,3),""):void 0,displayName:yn(d,4)!=null?va(yn(d,4),""):void 0}})}function Am(c){return{x:Bn(c,1),y:Bn(c,2),z:Bn(c,3),visibility:lc(c,4)!=null?Bn(c,4):void 0}}function Cm(c){return c.map(function(d){return ga(_m(d),Hs,1).map(Am)})}function yc(c,d){this.i=c,this.h=d,this.m=0}function Dm(c,d,g){return kS(c,d),typeof c.h.canvas.transferToImageBitmap=="function"?Promise.resolve(c.h.canvas.transferToImageBitmap()):g?Promise.resolve(c.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(c.h.canvas):(c.j===void 0&&(c.j=document.createElement("canvas")),new Promise(function(b){c.j.height=c.h.canvas.height,c.j.width=c.h.canvas.width,c.j.getContext("2d",{}).drawImage(c.h.canvas,0,0,c.h.canvas.width,c.h.canvas.height),b(c.j)}))}function kS(c,d){var g=c.h;if(c.s===void 0){var b=Om(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),_=Om(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),I=g.createProgram();if(g.attachShader(I,b),g.attachShader(I,_),g.linkProgram(I),!g.getProgramParameter(I,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(I));b=c.s=I,g.useProgram(b),_=g.getUniformLocation(b,"sampler0"),c.l={O:g.getAttribLocation(b,"aVertex"),N:g.getAttribLocation(b,"aTex"),xa:_},c.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,c.v),g.enableVertexAttribArray(c.l.O),g.vertexAttribPointer(c.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),c.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,c.u),g.enableVertexAttribArray(c.l.N),g.vertexAttribPointer(c.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(_,0)}b=c.l,g.useProgram(c.s),g.canvas.width=d.width,g.canvas.height=d.height,g.viewport(0,0,d.width,d.height),g.activeTexture(g.TEXTURE0),c.i.bindTexture2d(d.glName),g.enableVertexAttribArray(b.O),g.bindBuffer(g.ARRAY_BUFFER,c.v),g.vertexAttribPointer(b.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(b.N),g.bindBuffer(g.ARRAY_BUFFER,c.u),g.vertexAttribPointer(b.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(b.O),g.disableVertexAttribArray(b.N),g.bindBuffer(g.ARRAY_BUFFER,null),c.i.bindTexture2d(0)}function xS(c){this.h=c}var _S=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function $S(c,d){return d+c}function Pm(c,d){window[c]=d}function OS(c){var d=document.createElement("script");return d.setAttribute("src",c),d.setAttribute("crossorigin","anonymous"),new Promise(function(g){d.addEventListener("load",function(){g()},!1),d.addEventListener("error",function(){g()},!1),document.body.appendChild(d)})}function IS(){return V(function(c){switch(c.h){case 1:return c.s=2,x(c,WebAssembly.instantiate(_S),4);case 4:c.h=3,c.s=0;break;case 2:return c.s=0,c.l=null,c.return(!1);case 3:return c.return(!0)}})}function gc(c){if(this.h=c,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=c&&c.locateFile||$S,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,c.options){d=a(Object.keys(c.options));for(var g=d.next();!g.done;g=d.next()){g=g.value;var b=c.options[g].default;b!==void 0&&(this.l[g]=typeof b=="function"?b():b)}}}e=gc.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function AS(c){var d,g,b,_,I,O,R,z,H,G,re;return V(function(Z){switch(Z.h){case 1:return c.ga?(d=c.h.files===void 0?[]:typeof c.h.files=="function"?c.h.files(c.l):c.h.files,x(Z,IS(),2)):Z.return();case 2:if(g=Z.i,typeof window=="object")return Pm("createMediapipeSolutionsWasm",{locateFile:c.locateFile}),Pm("createMediapipeSolutionsPackedAssets",{locateFile:c.locateFile}),O=d.filter(function(X){return X.data!==void 0}),R=d.filter(function(X){return X.data===void 0}),z=Promise.all(O.map(function(X){var se=Ea(c,X.url);if(X.path!==void 0){var ce=X.path;se=se.then(function(Ie){return c.overrideFile(ce,Ie),Promise.resolve(Ie)})}return se})),H=Promise.all(R.map(function(X){return X.simd===void 0||X.simd&&g||!X.simd&&!g?OS(c.locateFile(X.url,c.ha)):Promise.resolve()})).then(function(){var X,se,ce;return V(function(Ie){if(Ie.h==1)return X=window.createMediapipeSolutionsWasm,se=window.createMediapipeSolutionsPackedAssets,ce=c,x(Ie,X(se),2);ce.i=Ie.i,Ie.h=0})}),G=function(){return V(function(X){return c.h.graph&&c.h.graph.url?X=x(X,Ea(c,c.h.graph.url),0):(X.h=0,X=void 0),X})}(),x(Z,Promise.all([H,z,G]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return b=d.filter(function(X){return X.simd===void 0||X.simd&&g||!X.simd&&!g}).map(function(X){return c.locateFile(X.url,c.ha)}),importScripts.apply(null,u(b)),_=c,x(Z,createMediapipeSolutionsWasm(Module),6);case 6:_.i=Z.i,c.m=new OffscreenCanvas(1,1),c.i.canvas=c.m,I=c.i.GL.createContext(c.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),c.i.GL.makeContextCurrent(I),Z.h=4;break;case 7:if(c.m=document.createElement("canvas"),re=c.m.getContext("webgl2",{}),!re&&(re=c.m.getContext("webgl",{}),!re))return alert("Failed to create WebGL canvas context when passing video frame."),Z.return();c.K=re,c.i.canvas=c.m,c.i.createContext(c.m,!0,!0,{});case 4:c.j=new c.i.SolutionWasm,c.ga=!1,Z.h=0}})}function CS(c){var d,g,b,_,I,O,R,z;return V(function(H){if(H.h==1){if(c.h.graph&&c.h.graph.url&&c.fa===c.h.graph.url)return H.return();if(c.u=!0,!c.h.graph||!c.h.graph.url){H.h=2;return}return c.fa=c.h.graph.url,x(H,Ea(c,c.h.graph.url),3)}for(H.h!=2&&(d=H.i,c.j.loadGraph(d)),g=a(Object.keys(c.D)),b=g.next();!b.done;b=g.next())_=b.value,c.j.overrideFile(_,c.D[_]);if(c.D={},c.h.listeners)for(I=a(c.h.listeners),O=I.next();!O.done;O=I.next())R=O.value,FS(c,R);z=c.l,c.l={},c.setOptions(z),H.h=0})}e.reset=function(){var c=this;return V(function(d){c.j&&(c.j.reset(),c.s={},c.v={}),d.h=0})},e.setOptions=function(c,d){var g=this;if(d=d||this.h.options){for(var b=[],_=[],I={},O=a(Object.keys(c)),R=O.next();!R.done;I={X:I.X,Y:I.Y},R=O.next())if(R=R.value,!(R in this.l&&this.l[R]===c[R])){this.l[R]=c[R];var z=d[R];z!==void 0&&(z.onChange&&(I.X=z.onChange,I.Y=c[R],b.push(function(H){return function(){var G;return V(function(re){if(re.h==1)return x(re,H.X(H.Y),2);G=re.i,G===!0&&(g.u=!0),re.h=0})}}(I))),z.graphOptionXref&&(R=Object.assign({},{calculatorName:"",calculatorIndex:0},z.graphOptionXref,{valueNumber:z.type===1?c[R]:0,valueBoolean:z.type===0?c[R]:!1,valueString:z.type===2?c[R]:""}),_.push(R)))}(b.length!==0||_.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(_),this.F=(this.F===void 0?[]:this.F).concat(b))}};function DS(c){var d,g,b,_,I,O,R;return V(function(z){switch(z.h){case 1:if(!c.u)return z.return();if(!c.F){z.h=2;break}d=a(c.F),g=d.next();case 3:if(g.done){z.h=5;break}return b=g.value,x(z,b(),4);case 4:g=d.next(),z.h=3;break;case 5:c.F=void 0;case 2:if(c.H){for(_=new c.i.GraphOptionChangeRequestList,I=a(c.H),O=I.next();!O.done;O=I.next())R=O.value,_.push_back(R);c.j.changeOptions(_),_.delete(),c.H=void 0}c.u=!1,z.h=0}})}e.initialize=function(){var c=this;return V(function(d){return d.h==1?x(d,AS(c),2):d.h!=3?x(d,CS(c),3):x(d,DS(c),0)})};function Ea(c,d){var g,b;return V(function(_){return d in c.L?_.return(c.L[d]):(g=c.locateFile(d,""),b=fetch(g).then(function(I){return I.arrayBuffer()}),c.L[d]=b,_.return(b))})}e.overrideFile=function(c,d){this.j?this.j.overrideFile(c,d):this.D[c]=d},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(c,d){var g=this,b,_,I,O,R,z,H,G,re;return V(function(Z){switch(Z.h){case 1:return g.h.inputs?(b=1e3*(d??performance.now()),x(Z,g.I,2)):Z.return();case 2:return x(Z,g.initialize(),3);case 3:for(_=new g.i.PacketDataList,I=a(Object.keys(c)),O=I.next();!O.done;O=I.next())if(R=O.value,z=g.h.inputs[R]){e:{var X=c[R];switch(z.type){case"video":var se=g.s[z.stream];if(se||(se=new yc(g.i,g.K),g.s[z.stream]=se),se.m===0&&(se.m=se.i.createTexture()),typeof HTMLVideoElement<"u"&&X instanceof HTMLVideoElement)var ce=X.videoWidth,Ie=X.videoHeight;else typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(ce=X.naturalWidth,Ie=X.naturalHeight):(ce=X.width,Ie=X.height);Ie={glName:se.m,width:ce,height:Ie},ce=se.h,ce.canvas.width=Ie.width,ce.canvas.height=Ie.height,ce.activeTexture(ce.TEXTURE0),se.i.bindTexture2d(se.m),ce.texImage2D(ce.TEXTURE_2D,0,ce.RGBA,ce.RGBA,ce.UNSIGNED_BYTE,X),se.i.bindTexture2d(0),se=Ie;break e;case"detections":for(se=g.s[z.stream],se||(se=new xS(g.i),g.s[z.stream]=se),se.data||(se.data=new se.h.DetectionListData),se.data.reset(X.length),Ie=0;Ie<X.length;++Ie){ce=X[Ie];var _e=se.data,ct=_e.setBoundingBox,en=Ie,Pt=ce.la,Ne=new Na;if(zn(Ne,1,Pt.ra),zn(Ne,2,Pt.sa),zn(Ne,3,Pt.height),zn(Ne,4,Pt.width),zn(Ne,5,Pt.rotation),Ln(Ne,6,Pt.pa),Pt=Ne.l(),ct.call(_e,en,Pt),ce.ea)for(_e=0;_e<ce.ea.length;++_e){Ne=ce.ea[_e],ct=se.data,en=ct.addNormalizedLandmark,Pt=Ie,Ne=Object.assign({},Ne,{visibility:Ne.visibility?Ne.visibility:0});var ft=new Hs;zn(ft,1,Ne.x),zn(ft,2,Ne.y),zn(ft,3,Ne.z),Ne.visibility&&zn(ft,4,Ne.visibility),Ne=ft.l(),en.call(ct,Pt,Ne)}if(ce.ba)for(_e=0;_e<ce.ba.length;++_e)ct=se.data,en=ct.addClassification,Pt=Ie,Ne=ce.ba[_e],ft=new Vs,zn(ft,2,Ne.score),Ne.index&&Ln(ft,1,Ne.index),Ne.label&&Ln(ft,3,Ne.label),Ne.displayName&&Ln(ft,4,Ne.displayName),Ne=ft.l(),en.call(ct,Pt,Ne)}se=se.data;break e;default:se={}}}switch(H=se,G=z.stream,z.type){case"video":_.pushTexture2d(Object.assign({},H,{stream:G,timestamp:b}));break;case"detections":re=H,re.stream=G,re.timestamp=b,_.pushDetectionList(re);break;default:throw Error("Unknown input config type: '"+z.type+"'")}}return g.j.send(_),x(Z,g.I,4);case 4:_.delete(),Z.h=0}})};function PS(c,d,g){var b,_,I,O,R,z,H,G,re,Z,X,se,ce,Ie;return V(function(_e){switch(_e.h){case 1:if(!g)return _e.return(d);for(b={},_=0,I=a(Object.keys(g)),O=I.next();!O.done;O=I.next())R=O.value,z=g[R],typeof z!="string"&&z.type==="texture"&&d[z.stream]!==void 0&&++_;1<_&&(c.M=!1),H=a(Object.keys(g)),O=H.next();case 2:if(O.done){_e.h=4;break}if(G=O.value,re=g[G],typeof re=="string")return ce=b,Ie=G,x(_e,RS(c,G,d[re]),14);if(Z=d[re.stream],re.type==="detection_list"){if(Z){for(var ct=Z.getRectList(),en=Z.getLandmarksList(),Pt=Z.getClassificationsList(),Ne=[],ft=0;ft<ct.size();++ft){var Er=TS(ct.get(ft)),LS=Bn(Er,1),zS=Bn(Er,2),BS=Bn(Er,3),jS=Bn(Er,4),MS=Bn(Er,5,0),Ta=void 0;Ta=Ta===void 0?0:Ta,Er={la:{ra:LS,sa:zS,height:BS,width:jS,rotation:MS,pa:va(yn(Er,6),Ta)},ea:ga(_m(en.get(ft)),Hs,1).map(Am),ba:Im(Tm(Pt.get(ft)))},Ne.push(Er)}ct=Ne}else ct=[];b[G]=ct,_e.h=7;break}if(re.type==="proto_list"){if(Z){for(ct=Array(Z.size()),en=0;en<Z.size();en++)ct[en]=Z.get(en);Z.delete()}else ct=[];b[G]=ct,_e.h=7;break}if(Z===void 0){_e.h=3;break}if(re.type==="float_list"){b[G]=Z,_e.h=7;break}if(re.type==="proto"){b[G]=Z,_e.h=7;break}if(re.type!=="texture")throw Error("Unknown output config type: '"+re.type+"'");return X=c.v[G],X||(X=new yc(c.i,c.K),c.v[G]=X),x(_e,Dm(X,Z,c.M),13);case 13:se=_e.i,b[G]=se;case 7:re.transform&&b[G]&&(b[G]=re.transform(b[G])),_e.h=3;break;case 14:ce[Ie]=_e.i;case 3:O=H.next(),_e.h=2;break;case 4:return _e.return(b)}})}function RS(c,d,g){var b;return V(function(_){return typeof g=="number"||g instanceof Uint8Array||g instanceof c.i.Uint8BlobList?_.return(g):g instanceof c.i.Texture2dDataOut?(b=c.v[d],b||(b=new yc(c.i,c.K),c.v[d]=b),_.return(Dm(b,g,c.M))):_.return(void 0)})}function FS(c,d){for(var g=d.name||"$",b=[].concat(u(d.wants)),_=new c.i.StringList,I=a(d.wants),O=I.next();!O.done;O=I.next())_.push_back(O.value);I=c.i.PacketListener.implement({onResults:function(R){for(var z={},H=0;H<d.wants.length;++H)z[b[H]]=R.get(H);var G=c.listeners[g];G&&(c.I=PS(c,z,d.outs).then(function(re){re=G(re);for(var Z=0;Z<d.wants.length;++Z){var X=z[b[Z]];typeof X=="object"&&X.hasOwnProperty&&X.hasOwnProperty("delete")&&X.delete()}re&&(c.I=re)}))}}),c.j.attachMultiListener(_,I),_.delete()}e.onResults=function(c,d){this.listeners[d||"$"]=c},oe("Solution",gc),oe("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Rm(c){return c===void 0&&(c=0),c===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Fm(c){var d=this;c=c||{},this.h=new gc({locateFile:c.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Rm(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Cm},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Cm},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(b){return Im(Tm(b))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var b,_,I;return V(function(O){return O.h==1?(b=Rm(g),_="third_party/mediapipe/modules/hand_landmark/"+b,x(O,Ea(d.h,b),2)):(I=O.i,d.h.overrideFile(_,I),O.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}e=Fm.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(c){this.h.onResults(c)},e.initialize=function(){var c=this;return V(function(d){return x(d,c.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(c){var d=this;return V(function(g){return x(g,d.h.send(c),0)})},e.setOptions=function(c){this.h.setOptions(c)},oe("Hands",Fm),oe("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),oe("VERSION","0.4.1675469240")}).call(qn);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $2=1e-7,O2=1e-4;class I2{refCount(t){return Rt("refCount")}incRef(t){return Rt("incRef")}timerAvailable(){return!0}time(t){return Rt("time")}read(t){return Rt("read")}readSync(t){return Rt("readSync")}readToGPU(t,n){return Rt("readToGPU")}numDataIds(){return Rt("numDataIds")}disposeData(t,n){return Rt("disposeData")}write(t,n,r){return Rt("write")}move(t,n,r,s,i){return Rt("move")}createTensorFromGPUData(t,n,r){return Rt("createTensorFromGPUData")}memory(){return Rt("memory")}floatPrecision(){return Rt("floatPrecision")}epsilon(){return this.floatPrecision()===32?$2:O2}dispose(){return Rt("dispose")}}function Rt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function hn(e,t,n=""){$(dr(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function Bi(e){$(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function qe(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function A2(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function dr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ko(e){return e%1===0}function mu(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Ul(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),$(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),$(e.every(r=>Ko(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function C2(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||s?null:Ul(t,e).sort();let o=0;for(let a=0;a<e.length;++a){if(i!=null){if(i[o]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(i[o]==null||i[o]>a)&&e[a]===1&&(n.push(e[a]),r.push(a)),i[o]<=a&&o++}e[a]!==1&&(n.push(e[a]),r.push(a))}return{newShape:n,keptDims:r}}function D2(e,t){return kw(e,t)}function kw(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function P2(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function R2(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Th(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function F2(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function ud(e){return typeof e=="string"||e instanceof String}function L2(e){return typeof e=="boolean"}function z2(e){return typeof e=="number"}function Vl(e){return Array.isArray(e)?Vl(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":z2(e)?"float32":ud(e)?"string":L2(e)?"bool":"float32"}function kh(e){return!!(e&&e.constructor&&e.call&&e.apply)}function ld(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function xw(e,t,n,r=!1){const s=new Array;if(t.length===1){const i=t[0]*(r?2:1);for(let o=0;o<i;o++)s[o]=n[e+o]}else{const i=t[0],o=t.slice(1),a=o.reduce((u,l)=>u*l)*(r?2:1);for(let u=0;u<i;u++)s[u]=xw(e+u*a,o,n,r)}return s}function xh(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,i)=>s*i)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return xw(0,e,t,n)}function _w(e,t){const n=cd(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function cd(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function Zt(e){e.forEach(t=>{$(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Os(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tg="tfjsflags";class B2{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=j2,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(pe().getBool("IS_TEST")||pe().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];pe().getBool("IS_TEST")||pe().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(Os(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Tg in t&&t[Tg].split(",").forEach(r=>{const[s,i]=r.split(":");this.urlFlags[s]=U2(s,i)})}}function j2(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(M2(t,r[0],r[1]),r.join("="))),t}function M2(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function U2(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function pe(){return $w}let $w=null;function V2(e){$w=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Zc;function Ow(){if(Zc==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Zc=e}return Zc}function H2(){const e=Ow();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function fd(e,t){const n=H2();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const W2="Abs",K2="Acos",q2="Acosh",Iw="Add",G2="AddN",Q2="All",X2="Any",Y2="ArgMax",J2="ArgMin",Z2="Asin",e_="Asinh",t_="Atan",n_="Atanh",r_="Atan2",s_="AvgPool",i_="AvgPool3D",o_="BatchMatMul",a_="BatchToSpaceND",u_="Bincount",l_="BitwiseAnd",c_="BroadcastArgs",Aw="Cast",f_="Ceil",h_="ClipByValue",p_="Complex",d_="ComplexAbs",m_="Concat",y_="Conv2D",g_="Conv2DBackpropFilter",v_="Conv2DBackpropInput",w_="Conv3D",b_="Conv3DBackpropInputV2",S_="Cos",N_="Cosh",E_="Cumprod",T_="Cumsum",k_="CropAndResize",x_="DenseBincount",__="DepthToSpace",$_="DepthwiseConv2dNative",O_="DepthwiseConv2dNativeBackpropFilter",I_="DepthwiseConv2dNativeBackpropInput",A_="Diag",C_="Dilation2D",D_="Draw",P_="RealDiv",R_="Einsum",F_="Elu",L_="Erf",z_="Equal",B_="Exp",j_="ExpandDims",M_="Expm1",U_="FFT",V_="Fill",H_="FlipLeftRight",W_="Floor",K_="FloorDiv",q_="FusedBatchNorm",G_="GatherV2",Q_="GatherNd",X_="Greater",Y_="GreaterEqual",Cw="Identity",J_="IFFT",Z_="Imag",e$="IsFinite",t$="IsInf",n$="IsNan",r$="LeakyRelu",s$="Less",i$="LessEqual",o$="LinSpace",a$="Log",u$="Log1p",l$="LogicalAnd",c$="LogicalNot",f$="LogicalOr",h$="LRN",p$="Max",d$="Maximum",m$="MaxPool",y$="MaxPool3D",g$="MaxPoolWithArgmax",v$="Mean",w$="Min",b$="Minimum",S$="MirrorPad",N$="Mod",E$="Multinomial",T$="Multiply",k$="Neg",x$="NotEqual",_$="NonMaxSuppressionV3",$$="NonMaxSuppressionV4",O$="NonMaxSuppressionV5",I$="OnesLike",A$="OneHot",C$="Pack",D$="PadV2",P$="Pow",R$="Prelu",F$="Prod",L$="RaggedGather",z$="RaggedRange",B$="RaggedTensorToTensor",j$="Range",M$="Real",U$="Reciprocal",V$="Relu",H$="Reshape",W$="ResizeNearestNeighbor",K$="ResizeBilinear",q$="Relu6",G$="Reverse",Q$="Round",X$="Rsqrt",Y$="ScatterNd",J$="TensorScatterUpdate",Z$="SearchSorted",eO="Select",tO="Selu",nO="Slice",rO="Sin",sO="Sinh",iO="Sign",oO="Sigmoid",aO="Softplus",uO="Sqrt",lO="Sum",cO="SpaceToBatchND",fO="SplitV",hO="Softmax",pO="SparseFillEmptyRows",dO="SparseReshape",mO="SparseSegmentMean",yO="SparseSegmentSum",gO="SparseToDense",vO="SquaredDifference",wO="StaticRegexReplace",bO="StridedSlice",SO="StringNGrams",NO="StringSplit",EO="StringToHashBucketFast",TO="Sub",kO="Tan",xO="Tanh",Dw="Tile",_O="TopK",$O="Transform",ef="Transpose",OO="Unique",IO="Unpack",AO="UnsortedSegmentSum",CO="ZerosLike",DO="Step",kg="FromPixels",PO="RotateWithOffset",xg="_FusedMatMul",_g="FusedConv2D",$g="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(...e){pe().getBool("IS_TEST")||pe().getBool("PROD")||console.warn(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pw=fd("kernelRegistry",()=>new Map),RO=fd("gradRegistry",()=>new Map);function Zu(e,t){const n=FO(e,t);return Pw.get(n)}function Og(e){return RO.get(e)}function Ig(e){const t=Pw.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[i,o]=s,[a]=i.split("_");a===e&&n.push(o)}return n}function FO(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rw(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LO(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Fw(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=qo(e)),pe().getBool("DEBUG")&&P2(e,t),LO(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function el(){return pe().platform.now()}function zO(e,t="utf-8"){return t=t||"utf-8",pe().platform.encode(e,t)}function Ag(e,t="utf-8"){return t=t||"utf-8",pe().platform.decode(e,t)}function fn(e){return pe().platform.isTypedArray!=null?pe().platform.isTypedArray(e):Rw(e)}function qo(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Os(e)||e==null||fn(e)&&n)t.push(e);else if(Array.isArray(e)||fn(e))for(let r=0;r<e.length;++r)qo(e[r],t,n);else{let r=-1;for(const s of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)qo(e[s],t,n)}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class BO{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new MO)}profileKernel(t,n,r){let s;const i=()=>{s=r()};let o;const a=el();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{i();for(const l of s)l.dataSync();o=Promise.resolve({kernelMs:el()-a})}if(pe().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const f=s[l];f.data().then(h=>{jO(h,f.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:o.then(l=>l.kernelMs),extraInfo:o.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:i,extraInfo:o}=t;r.forEach(a=>{Promise.all([a.data(),s,o]).then(u=>{this.logger.logKernelProfile(n,a,u[0],u[1],i,u[2])})})}}function jO(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class MO{logKernelProfile(t,n,r,s,i,o){const a=typeof s=="number"?mu(`${s}ms`,9):s.error,u=mu(t,25),l=n.rank,f=n.size,h=mu(n.shape.toString(),14);let p="";for(const y in i){const v=i[y];if(v!=null){const w=v.shape||n.shape,k=w.length;p+=`${y}: ${k}D ${k>0?w:""} `}}console.log(`%c${u}	%c${a}	%c${l}D ${h}	%c${f}	%c${p}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UO(e,t,n){const r={},s={};for(let u=0;u<t.length;u++)r[t[u].id]=!0;for(let u=0;u<e.length;u++){const l=e[u],f=l.inputs;for(const h in f){const p=f[h];let y=!1;for(let v=0;v<t.length;v++)if(r[p.id]){l.outputs.forEach(w=>r[w.id]=!0),y=!0,s[l.id]=!0;break}if(y)break}}const i={};i[n.id]=!0;const o={};for(let u=e.length-1;u>=0;u--){const l=e[u],f=l.inputs;for(let h=0;h<l.outputs.length;h++)if(i[l.outputs[h].id]){for(const p in f)i[f[p].id]=!0,o[l.id]=!0;break}}const a=[];for(let u=0;u<e.length;u++){const l=e[u];if(s[l.id]&&o[l.id]){const f={};for(const p in l.inputs){const y=l.inputs[p];r[y.id]&&(f[p]=y)}const h=Object.assign({},l);h.inputs=f,h.outputs=l.outputs,a.push(h)}}return a}function VO(e,t,n,r){for(let s=t.length-1;s>=0;s--){const i=t[s],o=[];if(i.outputs.forEach(u=>{const l=e[u.id];l!=null?o.push(l):o.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(o);for(const u in i.inputs){if(!(u in a))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(a)}.`);const l=n(()=>a[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);const f=i.inputs[u];if(!dr(l.shape,f.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${f.shape}'`);if(e[f.id]==null)e[f.id]=l;else{const h=e[f.id];e[f.id]=r(h,l),h.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cg=20,so=3,tf=7;function HO(e,t,n,r){const s=ld(t),i=WO(e,t,n,s),o=t.length,a=yu(e,t,n,s,i),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(a.map(l=>"    "+l).join(`
`)),u.join(`
`)}function WO(e,t,n,r){const s=qe(t),i=r[r.length-1],o=new Array(i).fill(0),a=t.length,u=n==="complex64"?ho(e):e;if(a>1)for(let l=0;l<s/i;l++){const f=l*i;for(let h=0;h<i;h++)o[h]=Math.max(o[h],fo(u[f+h],0,n).length)}return o}function fo(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(tf))} + ${parseFloat(e[1].toFixed(tf))}j`:ud(e)?r=`'${e}'`:n==="bool"?r=Lw(e):r=parseFloat(e.toFixed(tf)).toString(),mu(r,t)}function Lw(e){return e===0?"false":"true"}function yu(e,t,n,r,s,i=!0){const o=n==="complex64"?2:1,a=t[0],u=t.length;if(u===0){if(n==="complex64"){const w=ho(e);return[fo(w[0],0,n)]}return n==="bool"?[Lw(e[0])]:[e[0].toString()]}if(u===1){if(a>Cg){const k=so*o;let S=Array.from(e.slice(0,k)),N=Array.from(e.slice((a-so)*o,a*o));return n==="complex64"&&(S=ho(S),N=ho(N)),["["+S.map((T,x)=>fo(T,s[x],n)).join(", ")+", ..., "+N.map((T,x)=>fo(T,s[a-so+x],n)).join(", ")+"]"]}return["["+(n==="complex64"?ho(e):Array.from(e)).map((k,S)=>fo(k,s[S],n)).join(", ")+"]"]}const l=t.slice(1),f=r.slice(1),h=r[0]*o,p=[];if(a>Cg){for(let w=0;w<so;w++){const k=w*h,S=k+h;p.push(...yu(e.slice(k,S),l,n,f,s,!1))}p.push("...");for(let w=a-so;w<a;w++){const k=w*h,S=k+h;p.push(...yu(e.slice(k,S),l,n,f,s,w===a-1))}}else for(let w=0;w<a;w++){const k=w*h,S=k+h;p.push(...yu(e.slice(k,S),l,n,f,s,w===a-1))}const y=u===2?",":"";p[0]="["+(a>0?p[0]+y:"");for(let w=1;w<p.length-1;w++)p[w]=" "+p[w]+y;let v=`,
`;for(let w=2;w<u;w++)v+=`
`;return p[p.length-1]=" "+p[p.length-1]+"]"+(i?"":v),p}function ho(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _h{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=qe(t),r!=null){const s=r.length;$(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||kw(n,this.size),this.strides=ld(t)}set(t,...n){n.length===0&&(n=[0]),$(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const i=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(i)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return En().makeTensor(this.values,this.shape,this.dtype)}}let En=null,qs=null;function KO(e){En=e}function qO(e){qs=e}class Qe{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=qe(t),this.strides=ld(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return qs.buffer(this.shape,this.dtype,t)}bufferSync(){return qs.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return xh(this.shape,t,this.dtype==="complex64")}arraySync(){return xh(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=En().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>Ag(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),En().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=En().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>Ag(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await En().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),En().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return qs.print(this,t)}clone(){return this.throwIfDisposed(),qs.clone(this)}toString(t=!1){const n=this.dataSync();return HO(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),qs.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),En().makeVariable(this,t,n,r)}}Object.defineProperty(Qe,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function zw(){return fd("Tensor",()=>Qe)}zw();class tl extends Qe{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!dr(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);En().disposeTensor(this),this.dataId=t.dataId,En().incRef(this,null)}dispose(){En().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(tl,Symbol.hasInstance,{value:e=>e instanceof Qe&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Dg;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Dg||(Dg={}));var $h;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})($h||($h={}));var Oh;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(Oh||(Oh={}));var Ih;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Ih||(Ih={}));var Ah;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Ah||(Ah={}));const GO={float32:Ih,int32:$h,bool:Oh,complex64:Ah};function QO(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return GO[e][t]}function Bw(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function jw(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ue(e,t){if(e.dtype===t.dtype)return[e,t];const n=QO(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function XO(e,t){$(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function Mw(e){const t=[];return Uw(e,t,new Set),t}function Uw(e,t,n){if(e==null)return;if(e instanceof Qe){t.push(e);return}if(!YO(e))return;const r=e;for(const s in r){const i=r[s];n.has(i)||(n.add(i),Uw(i,t,n))}}function YO(e){return Array.isArray(e)||typeof e=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(e){return e.kernelName!=null}class Pg{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Ii{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Pg}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(ro(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new BO(this.backendInstance),!0}setupRegisteredKernels(){Ig(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Ig(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof I2)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,i=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,ro(`Initialization of backend ${t} failed`),ro(o.stack||o.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return ro(`Initialization of backend ${t} failed`),ro(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:i}=this.initializeBackend(r);if(i||s)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,i=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,i,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Ii.nextTensorId++}nextVariableId(){return Ii.nextVariableId++}clone(t){const n=D.runKernel(Cw,{x:t}),r={x:t},s=o=>({x:()=>{const a="float32",u={x:o},l={dtype:a};return D.runKernel(Aw,u,l)}}),i=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,i,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(Zu(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let i=0;r.forEach(u=>{i+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=s-n-i-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),i=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let u;const l=nf(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(nf(t)){const{kernelName:v,inputs:w,attrs:k}=t;this.backendName==null&&this.backend;const S=Zu(v,this.backendName);$(S!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),a=()=>{const N=this.backend.numDataIds();u=S.kernelFunc({inputs:w,attrs:k,backend:this.backend});const T=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,N,T);const x=T.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(s){const C=this.getTensorsForGradient(v,w,x);r=this.saveTensorsForBackwardMode(C)}return x}}else{const{forwardFunc:v}=t,w=k=>{s&&(r=k.map(S=>this.keep(this.clone(S))))};a=()=>{const k=this.backend.numDataIds();u=this.tidy(()=>v(this.backend,w));const S=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,k,S),S}}const{inputs:f,attrs:h}=t,p=nf(t)?null:t.backwardsFunc;let y;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(y=this.profiler.profileKernel(l,f,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(y),n=y.outputs)}),s&&this.addTapeNode(l,f,n,p,r,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(v=>f[v]!=null?f[v].shape:null),outputShapes:n.map(v=>v.shape),kernelTimeMs:y.timeMs,extraInfo:y.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=Og(t);if(s!=null){const i=s.inputsToSave||[],o=s.outputsToSave||[];let a;s.saveAllInputs?($(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(l=>n[l])):a=i.map(l=>n[l]);const u=r.filter((l,f)=>o[f]);return a.concat(u)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let i=t;r==="string"&&ud(t[0])&&(i=t.map(u=>zO(u)));const o=s.write(i,n,r),a=new Qe(n,r,o,this.nextTensorId());if(this.trackTensor(a,s),r==="string"){const u=this.state.tensorInfo.get(o),l=F2(i);this.state.numBytes+=l-u.bytes,u.bytes=l}return a}makeTensorFromDataId(t,n,r,s){r=r||"float32";const i={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:i}=t,o=new Qe(s,i,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const i=new tl(t,n,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*Th(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof tl||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*Th(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,i,o){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:i},u=Og(t);u!=null&&(s=u.gradFunc),s!=null&&(a.gradient=l=>(l=l.map((f,h)=>{if(f==null){const p=r[h],y=cd(p.size,p.dtype);return this.makeTensor(y,p.shape,p.dtype)}return f}),s(l.length>1?l:l[0],i,o))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=Mw(t),r=new Set(n.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const o=this.state.activeScope.track[i];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(t,n,r,s=!1){if($(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));$(i instanceof Qe,()=>"The result y returned by f() must be a tensor.");const o=UO(this.state.activeTape,n,i);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[i.id]=r??JO(i.shape),VO(a,o,l=>this.tidy(l),ZO);const u=n.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const f of l.saved)f.dispose()}),this.state.activeTape=null),{value:i,grads:u}})}customGrad(t){return $(kh(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{$(n.every(a=>a instanceof Qe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((a,u)=>{s[u]=a});const i=(a,u)=>(r=t(...n,u),$(r.value instanceof Qe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),$(kh(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(a,u)=>{const l=r.gradFunc(a,u),f=Array.isArray(l)?l:[l];$(f.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),$(f.every(p=>p instanceof Qe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return f.forEach((p,y)=>{h[y]=()=>p}),h};return this.runKernelFunc({forwardFunc:i,backwardsFunc:o,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=el(),r=await this.backend.time(t);return r.wallMs=el()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Pg;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ii.nextTensorId=0;Ii.nextVariableId=0;function JO(e){const t=_w(qe(e),"float32");return D.makeTensor(t,e,"float32")}function Vw(){const e=Ow();if(e._tfengine==null){const t=new B2(e);e._tfengine=new Ii(t)}return V2(e._tfengine.ENV),KO(()=>e._tfengine),e._tfengine}const D=Vw();function ZO(e,t){const n={a:e,b:t};return D.runKernel(Iw,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eI(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ot=pe();Ot.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ot.registerFlag("IS_BROWSER",()=>eI());Ot.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ot.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ot.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Ot.registerFlag("PROD",()=>!1);Ot.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ot.getBool("DEBUG"));Ot.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ot.registerFlag("IS_TEST",()=>!1);Ot.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ot.getBool("DEBUG"));Ot.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ot.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ot.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jr(e,t){let n=e;if(fn(e))return t==="string"?[]:[e.length];if(Bw(e)){const s=e.channels||"RGBA";return[e.height,e.width*s.length]}else if(jw(e))return[e.buffer.size/(t==null?4:Th(t))];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||fn(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&pe().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Hw(e,r,[]),r}function Hw(e,t,n){if(n=n||[],!Array.isArray(e)&&!fn(e)){$(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}$(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),$(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)Hw(e[s],r,n.concat(s))}function Rg(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function E(e,t,n,r="numeric"){if(e instanceof zw())return Rg(r,e.dtype,t,n),e;let s=Vl(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Rg(r,s,t,n),e==null||!fn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const u=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${u}'`)}const i=Jr(e,s);!fn(e)&&!Array.isArray(e)&&(e=[e]);const a=s!=="string"?Fw(e,s):qo(e,[],!0);return D.makeTensor(a,i,s)}function nl(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((i,o)=>E(i,`${t}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ww="__op";function A(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Ww;const s=(...i)=>{D.startScope(n);try{const o=r(...i);return Os(o)&&console.error("Cannot return a Promise inside of tidy."),D.endScope(o),o}catch(o){throw D.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tI(e,t){const n=E(e,"real","complex"),r=E(t,"imag","complex");hn(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return D.runKernel(p_,s)}const qr=A({complex_:tI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zr(e,t,n,r){if(r==null)r=Vl(e);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(jw(e)||Bw(e)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return D.backend.createTensorFromGPUData(e,t||n,r)}if(!fn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Zt(t);const s=qe(t),i=qe(n);$(s===i,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${i}`);for(let o=0;o<n.length;++o){const a=n[o],u=o===n.length-1?a!==qe(t.slice(o)):!0;$(n[o]===t[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!fn(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?Fw(e,r):qo(e,[],!0),D.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xn(e,t,n){const r=Jr(e,n);return Zr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Is={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class An{static join(t){return new An(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(r=>fn(r)?r.buffer:r),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let r=0;r<t.length;r++){const s=t[r];r!==t.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const i=n+s.byteLength;this.shards.push({buffer:s,start:n,end:i}),n=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const r=this.findShardForByte(t);if(r===-1)throw new Error(`Could not find start shard for byte ${t}`);const s=n-t,i=new ArrayBuffer(s),o=new Uint8Array(i);let a=0;for(let u=r;u<this.shards.length;u++){const l=this.shards[u],h=t+a-l.start,p=a,v=Math.min(n,l.end)-l.start,w=new Uint8Array(l.buffer,h,v-h);if(o.set(w,p),a+=w.length,n<l.end)break}return i}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(s){return t<s.start?-1:t>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=nI(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function nI(e,t){let n=0,r=e.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,i=t(e[s]);if(i===0)return s;i<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function de(e,t){return D.tidy(e,t)}function Fe(e){Mw(e).forEach(n=>n.dispose())}function Kn(e){return D.keep(e)}function rI(){return D.backendName}function sI(){return D.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gr=4;async function iI(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);for(let o=0;o<s.length;++o){const a=s[o],u=Array.isArray(e)?e[o].tensor:e[a];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${u.dtype}`);const l={name:a,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const f=new Promise(async h=>{const p=await u.bytes(),y=p.reduce((k,S)=>k+S.length,0)+Gr*p.length,v=new Uint8Array(y);let w=0;for(let k=0;k<p.length;k++){const S=p[k],N=new Uint8Array(new Uint32Array([S.length]).buffer);v.set(N,w),w+=Gr,v.set(S,w),w+=S.length}h(v)});r.push(f)}else r.push(u.data());t!=null&&(l.group=t),n.push(l)}const i=await Promise.all(r);return{data:uI(i),specs:n}}function Kw(e,t){const n=new An(e),r={};let s=0;for(const i of t){const o=oI(i,(a,u)=>n.slice(s+a,s+u));r[i.name]=qw(i,n.slice(s,s+o)),s+=o}return r}function oI(e,t){const n=qe(e.shape);let r;if("quantization"in e){const s=e.quantization;r=Is[s.dtype]}else if(e.dtype==="string"){let s=0;for(let i=0;i<n;i++)s+=Gr+new Uint32Array(t(s,s+Gr))[0];return s}else r=Is[e.dtype];return n*r}async function aI(e,t){const n=qe(e.shape);let r;if("quantization"in e){const s=e.quantization;r=Is[s.dtype]}else if(e.dtype==="string"){let s=0;for(let i=0;i<n;i++)s+=Gr+new Uint32Array(await t(s,s+Gr))[0];return s}else r=Is[e.dtype];return n*r}function qw(e,t){const n=e.name,r=e.dtype,s=e.shape,i=qe(s);let o,a=0;if("quantization"in e){const u=e.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${e.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${e.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=Is[u.dtype],f=u.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(r==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){o=new Float32Array(f.length);for(let h=0;h<f.length;h++){const p=f[h];o[h]=p*u.scale+u.min}}else if(u.dtype==="float16")o=mI()(f);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(r==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);o=new Int32Array(f.length);for(let h=0;h<f.length;h++){const p=f[h];o[h]=Math.round(p*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);a+=i*l}else if(r==="string"){const u=qe(e.shape);o=[];for(let l=0;l<u;l++){const f=new Uint32Array(t.slice(a,a+Gr))[0];a+=Gr;const h=new Uint8Array(t.slice(a,a+f));o.push(h),a+=f}}else{const u=Is[r];if(r==="float32")o=new Float32Array(t);else if(r==="int32")o=new Int32Array(t);else if(r==="bool")o=new Uint8Array(t);else if(r==="complex64"){o=new Float32Array(t);const l=new Float32Array(o.length/2),f=new Float32Array(o.length/2);for(let v=0;v<l.length;v++)l[v]=o[v*2],f[v]=o[v*2+1];const h=Xn(l,s,"float32"),p=Xn(f,s,"float32"),y=qr(h,p);return h.dispose(),p.dispose(),y}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);a+=i*u}return Xn(o,s,r)}async function Fg(e,t,n){let r=new Uint8Array(t);for(;r.byteLength<n;){const{done:s,value:i}=await e.read();if(s&&i==null){const a=n-r.byteLength;throw new Error(`Reader is done but ${a} bytes are still expected`)}const o=new Uint8Array(r.length+i.byteLength);o.set(r,0),o.set(new Uint8Array(i),r.length),r=o}return r.buffer}async function Gw(e,t){const n={},r=e.getReader();let s=new ArrayBuffer(0);for(const i of t){const o=await aI(i,async(l,f)=>(s=await Fg(r,s,f),s.slice(l,f)));s=await Fg(r,s,o);const a=s.slice(0,o);s=s.slice(o);const u=qw(i,a);if(n[i.name]=u,rI()==="webgpu"){const l=sI();"uploadToGPU"in l&&qe(u.shape)>=pe().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(u.dataId)}}return n}function uI(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(i=>{if(t+=i.byteLength,n.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(i=>{r.set(new Uint8Array(i.buffer),s),s+=i.byteLength}),r.buffer}const hd=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Lg(e){return hd?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function lI(e){if(hd)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function cI(e){if(hd){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function fI(e){return An.join(e)}function zg(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function Qw(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Xw(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function pd(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),Xw(e,n,r)}function la(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Lg(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Lg(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new An(e.weightData).byteLength}}function Ch(e){const t=[];for(const n of e)t.push(...n.weights);return t}function hI(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function pI(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function dI(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function mI(){const e=hI(),t=pI(),n=dI();return r=>{const s=new ArrayBuffer(4*r.length),i=new Uint32Array(s);for(let o=0;o<r.length;o++){const a=r[o],u=e[n[a>>10]+(a&1023)]+t[a>>10];i[o]=u}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pe{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Pe.instance==null&&(Pe.instance=new Pe),Pe.instance}static registerSaveRouter(t){Pe.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Pe.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Pe.getHandlers(t,"save")}static getLoadHandlers(t,n){return Pe.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?Pe.getInstance().loadRouters:Pe.getInstance().saveRouters).forEach(o=>{const a=o(t,r);a!==null&&s.push(a)}),s}}const yI=e=>Pe.registerSaveRouter(e),gI=e=>Pe.registerLoadRouter(e),vI=e=>Pe.getSaveHandlers(e),wI=(e,t)=>Pe.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dh="tensorflowjs",Ph=1,ys="models_store",Pr="model_info_store";function Yw(){if(!pe().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Rh(e){const t=e.result;t.createObjectStore(ys,{keyPath:"modelPath"}),t.createObjectStore(Pr,{keyPath:"modelPath"})}class As{constructor(t){if(this.indexedDB=Yw(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const i=this.indexedDB.open(Dh,Ph);i.onupgradeneeded=()=>Rh(i),i.onsuccess=()=>{const o=i.result;if(n==null){const a=o.transaction(ys,"readonly"),l=a.objectStore(ys).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=f=>(o.close(),s(l.error)),a.oncomplete=()=>o.close()}else{n.weightData=An.join(n.weightData);const a=la(n),u=o.transaction(Pr,"readwrite");let l=u.objectStore(Pr),f;try{f=l.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(p){return s(p)}let h;f.onsuccess=()=>{h=o.transaction(ys,"readwrite");const p=h.objectStore(ys);let y;try{y=p.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a})}catch(v){return s(v)}y.onsuccess=()=>r({modelArtifactsInfo:a}),y.onerror=v=>{l=u.objectStore(Pr);const w=l.delete(this.modelPath);w.onsuccess=()=>(o.close(),s(y.error)),w.onerror=k=>(o.close(),s(y.error))}},f.onerror=p=>(o.close(),s(f.error)),u.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},i.onerror=o=>s(i.error)})}}As.URL_SCHEME="indexeddb://";const Jw=e=>pe().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(As.URL_SCHEME)?bI(e.slice(As.URL_SCHEME.length)):null;Pe.registerSaveRouter(Jw);Pe.registerLoadRouter(Jw);function bI(e){return new As(e)}function SI(e){return e.startsWith(As.URL_SCHEME)?e.slice(As.URL_SCHEME.length):e}class NI{constructor(){this.indexedDB=Yw()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(Dh,Ph);r.onupgradeneeded=()=>Rh(r),r.onsuccess=()=>{const s=r.result,i=s.transaction(Pr,"readonly"),a=i.objectStore(Pr).getAll();a.onsuccess=()=>{const u={};for(const l of a.result)u[l.modelPath]=l.modelArtifactsInfo;t(u)},a.onerror=u=>(s.close(),n(a.error)),i.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=SI(t),new Promise((n,r)=>{const s=this.indexedDB.open(Dh,Ph);s.onupgradeneeded=()=>Rh(s),s.onsuccess=()=>{const i=s.result,o=i.transaction(Pr,"readwrite"),a=o.objectStore(Pr),u=a.get(t);let l;u.onsuccess=()=>{if(u.result==null)return i.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const f=a.delete(t),h=()=>{l=i.transaction(ys,"readwrite");const y=l.objectStore(ys).delete(t);y.onsuccess=()=>n(u.result.modelArtifactsInfo),y.onerror=v=>r(u.error)};f.onsuccess=h,f.onerror=p=>(h(),i.close(),r(u.error))}},u.onerror=f=>(i.close(),r(u.error)),o.oncomplete=()=>{l==null?i.close():l.oncomplete=()=>i.close()}},s.onerror=i=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ir="/",Gs="tensorflowjs_models",Zw="info",EI="model_topology",TI="weight_specs",kI="weight_data",xI="model_metadata";function eb(e){return{info:[Gs,e,Zw].join(ir),topology:[Gs,e,EI].join(ir),weightSpecs:[Gs,e,TI].join(ir),weightData:[Gs,e,kI].join(ir),modelMetadata:[Gs,e,xI].join(ir)}}function tb(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function _I(e){const t=e.split(ir);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(ir)}function $I(e){return e.startsWith(Cs.URL_SCHEME)?e.slice(Cs.URL_SCHEME.length):e}class Cs{constructor(t){if(!pe().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=eb(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=la(t),i=An.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,lI(i));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw tb(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const a=JSON.parse(i);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(n.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=cI(o),n}}Cs.URL_SCHEME="localstorage://";const nb=e=>pe().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Cs.URL_SCHEME)?OI(e.slice(Cs.URL_SCHEME.length)):null;Pe.registerSaveRouter(nb);Pe.registerLoadRouter(nb);function OI(e){return new Cs(e)}class II{constructor(){$(pe().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),$(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Gs+ir,r=ir+Zw;for(let s=0;s<this.LS.length;++s){const i=this.LS.key(s);if(i.startsWith(n)&&i.endsWith(r)){const o=_I(i);t[o]=JSON.parse(this.LS.getItem(i))}}return t}async removeModel(t){t=$I(t);const n=eb(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return tb(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mi="://";class St{constructor(){this.managers={}}static getInstance(){return St.instance==null&&(St.instance=new St),St.instance}static registerManager(t,n){$(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(mi)&&(t=t.slice(0,t.indexOf(mi))),$(t.length>0,()=>"scheme must not be an empty string.");const r=St.getInstance();$(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=St.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(St.getInstance().managers)}}function gu(e){if(e.indexOf(mi)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${St.getSchemes().join(",")}`);return{scheme:e.split(mi)[0],path:e.split(mi)[1]}}async function rb(e,t,n=!1){$(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=Pe.getLoadHandlers(e);$(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),$(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],i=Pe.getSaveHandlers(t);$(i.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),$(i.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const o=i[0],a=gu(e).scheme,u=gu(e).path,l=a===gu(e).scheme,f=await s.load();n&&l&&await St.getManager(a).removeModel(u);const h=await o.save(f);return n&&!l&&await St.getManager(a).removeModel(u),h.modelArtifactsInfo}async function AI(){const e=St.getSchemes(),t={};for(const n of e){const r=await St.getManager(n).listModels();for(const s in r){const i=n+mi+s;t[i]=r[s]}}return t}async function CI(e){const t=gu(e);return St.getManager(t.scheme).removeModel(t.path)}async function DI(e,t){return rb(e,t,!1)}async function PI(e,t){return rb(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class RI{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!pe().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Rw(t)}}if(pe().get("IS_BROWSER")){pe().setPlatform("browser",new RI);try{St.registerManager(Cs.URL_SCHEME,new II)}catch{}try{St.registerManager(As.URL_SCHEME,new NI)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FI={importFetch:()=>require("node-fetch")};let rf;class LI{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return pe().global.fetch!=null?pe().global.fetch(t,n):(rf==null&&(rf=FI.importFetch()),rf(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}pe().get("IS_NODE")&&!pe().get("IS_BROWSER")&&pe().setPlatform("node",new LI);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mr(e,t="float32",n){return t=t||"float32",Zt(e),new _h(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zI(e,t){const n=E(e,"x","cast");if(!R2(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return D.runKernel(Aw,r,s)}const ze=A({cast_:zI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BI(e){const n={x:E(e,"x","clone","string_or_numeric")};return D.runKernel(Cw,n)}const Vr=A({clone_:BI});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sb(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Vw();const jI={buffer:mr,cast:ze,clone:Vr,print:sb};qO(jI);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MI(e,t){let n=E(e,"a","add"),r=E(t,"b","add");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(Iw,s)}const te=A({add_:MI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UI(e,t){let n=E(e,"a","floorDiv"),r=E(t,"b","floorDiv");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(K_,s)}const ib=A({floorDiv_:UI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VI(e,t){let n=E(e,"a","div"),r=E(t,"b","div");if([n,r]=Ue(n,r),n.dtype==="int32"&&r.dtype==="int32")return ib(n,r);const s={a:n,b:r},i={};return D.runKernel(P_,s,i)}const he=A({div_:VI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HI(e,t){let n=E(e,"a","mul"),r=E(t,"b","mul");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(T$,s)}const q=A({mul_:HI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WI(e){const t=E(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return D.runKernel(d_,n)}else{const n={x:t};return D.runKernel(W2,n)}}const Kt=A({abs_:WI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KI(e){const n={x:E(e,"x","acos")};return D.runKernel(K2,n)}const qI=A({acos_:KI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GI(e){const n={x:E(e,"x","acosh")};return D.runKernel(q2,n)}const QI=A({acosh_:GI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XI(e){$(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),$(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,i)=>E(s,`tensors${i}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!dr(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return D.runKernel(G2,r)}const YI=A({addN_:XI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JI(e,t=null,n=!1){const s={x:E(e,"x","all","bool")},i={axis:t,keepDims:n};return D.runKernel(Q2,s,i)}const ZI=A({all_:JI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eA(e,t=null,n=!1){const s={x:E(e,"x","any","bool")},i={axis:t,keepDims:n};return D.runKernel(X2,s,i)}const tA=A({any_:eA});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nA(e,t=0){const r={x:E(e,"x","argMax")},s={axis:t};return D.runKernel(Y2,r,s)}const rA=A({argMax_:nA});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sA(e,t=0){const r={x:E(e,"x","argMin")},s={axis:t};return D.runKernel(J2,r,s)}const iA=A({argMin_:sA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oA(e){const n={x:E(e,"x","asin")};return D.runKernel(Z2,n)}const aA=A({asin_:oA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uA(e){const n={x:E(e,"x","asinh")};return D.runKernel(e_,n)}const lA=A({asinh_:uA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cA(e){const n={x:E(e,"x","atan")};return D.runKernel(t_,n)}const fA=A({atan_:cA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hA(e,t){let n=E(e,"a","atan2"),r=E(t,"b","atan2");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(r_,s)}const pA=A({atan2_:hA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dA(e){const n={x:E(e,"x","atanh")};return D.runKernel(n_,n)}const mA=A({atanh_:dA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yA(e,t,n,r,s,i,o="channelsLast"){const[a,u]=Go(t);let l;if(o==="channelsLast")l=[a,u,e[3],e[3]];else if(o==="channelsFirst")l=[a,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${o}`);return dd(e,l,n,r,s,i,!1,o)}function dd(e,t,n,r,s,i,o=!1,a="channelsLast"){let[u,l,f,h]=[-1,-1,-1,-1];if(a==="channelsLast")[u,l,f,h]=e;else if(a==="channelsFirst")[u,h,l,f]=e;else throw new Error(`Unknown dataFormat ${a}`);const[p,y,,v]=t,[w,k]=Go(n),[S,N]=Go(r),T=Fh(p,S),x=Fh(y,N),{padInfo:C,outHeight:P,outWidth:F}=wA(s,l,f,w,k,T,x,i,a),L=o?v*h:v;let M;return a==="channelsFirst"?M=[u,L,P,F]:a==="channelsLast"&&(M=[u,P,F,L]),{batchSize:u,dataFormat:a,inHeight:l,inWidth:f,inChannels:h,outHeight:P,outWidth:F,outChannels:L,padInfo:C,strideHeight:w,strideWidth:k,filterHeight:p,filterWidth:y,effectiveFilterHeight:T,effectiveFilterWidth:x,dilationHeight:S,dilationWidth:N,inShape:e,outShape:M,filterShape:t}}function gA(e,t,n,r,s){r==null&&(r=vA(e,t,n));const i=e[0],o=e[1],a=rl((i-t+2*r)/n+1,s),u=rl((o-t+2*r)/n+1,s);return[a,u]}function vA(e,t,n,r=1){const s=Fh(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function Go(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Fh(e,t){return t<=1?e:e+(e-1)*(t-1)}function wA(e,t,n,r,s,i,o,a,u){let l,f,h;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const y=gA([t,n],i,r,e,a);f=y[0],h=y[1]}else if(e==="same"){f=Math.ceil(t/r),h=Math.ceil(n/s);const p=Math.max(0,(f-1)*r+i-t),y=Math.max(0,(h-1)*s+o-n),v=Math.floor(p/2),w=p-v,k=Math.floor(y/2),S=y-k;l={top:v,bottom:w,left:k,right:S,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-i+1)/r),h=Math.ceil((n-o+1)/s);else if(typeof e=="object"){const p=u==="channelsLast"?e[1][0]:e[2][0],y=u==="channelsLast"?e[1][1]:e[2][1],v=u==="channelsLast"?e[2][0]:e[3][0],w=u==="channelsLast"?e[2][1]:e[3][1];l={top:p,bottom:y,left:v,right:w,type:p===0&&y===0&&v===0&&w===0?"VALID":"EXPLICIT"},f=rl((t-i+p+y)/r+1,a),h=rl((n-o+v+w)/s+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:f,outWidth:h}}function rl(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function sl(e){const[t,n,r]=Go(e);return t===1&&n===1&&r===1}function es(e,t){return sl(e)||sl(t)}function Ai(e){return Go(e).every(t=>t>0)}function Cn(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")$(Ko(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{$(Ko(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bA(e,t){const r={x:E(e,"x","reshape","string_or_numeric")},s={shape:t};return D.runKernel(H$,r,s)}const j=A({reshape_:bA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SA(e,t,n,r,s){const i=E(e,"x","avgPool","float32"),o=1;$(es(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let a=i,u=!1;i.rank===3&&(u=!0,a=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),$(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Cn("avgPool",r,s);const l={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let h=D.runKernel(s_,l,f);return h=ze(h,i.dtype),u?j(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ob=A({avgPool_:SA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NA(e,t,n,r,s,i="NDHWC"){const o=E(e,"x","avgPool3d","float32");let a=o,u=!1;o.rank===4&&(u=!0,a=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),$(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),$(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),$(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Cn("avgPool3d",r,s);const l={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:i};let h=D.runKernel(i_,l,f);return h=ze(h,a.dtype),u?j(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const EA=A({avgPool3d_:NA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TA(e,t=0){$(e.length>=1,()=>"Pass at least one tensor to concat");const n=nl(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),n.length===1)return Vr(n[0]);const r=n,s={axis:t};return D.runKernel(m_,r,s)}const ut=A({concat_:TA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kA(e,t,n=!1,r=!1){let s=E(e,"a","matMul"),i=E(t,"b","matMul");[s,i]=Ue(s,i);const o={a:s,b:i},a={transposeA:n,transposeB:r};return D.runKernel(o_,o,a)}const ke=A({matMul_:kA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xA(e){const n={x:E(e,"x","sigmoid","float32")};return D.runKernel(oO,n)}const Ns=A({sigmoid_:xA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _A(e,t,n){const r=E(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},i={begin:t,size:n};return D.runKernel(nO,s,i)}const ae=A({slice_:_A});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $A(e){const n={x:E(e,"x","tanh","float32")};return D.runKernel(xO,n)}const Lh=A({tanh_:$A});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OA(e,t,n,r,s,i){const o=E(e,"forgetBias","basicLSTMCell"),a=E(t,"lstmKernel","basicLSTMCell"),u=E(n,"lstmBias","basicLSTMCell"),l=E(r,"data","basicLSTMCell"),f=E(s,"c","basicLSTMCell"),h=E(i,"h","basicLSTMCell"),p=ut([l,h],1),y=ke(p,a),v=te(y,u),w=v.shape[0],k=v.shape[1]/4,S=[w,k],N=ae(v,[0,0],S),T=ae(v,[0,k],S),x=ae(v,[0,k*2],S),C=ae(v,[0,k*3],S),P=te(q(Ns(N),Lh(T)),q(f,Ns(te(o,x)))),F=q(Lh(P),Ns(C));return[P,F]}const IA=A({basicLSTMCell_:OA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AA(e,t,n){const r=E(e,"x","batchToSpaceND"),s=t.reduce((a,u)=>a*u);$(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),$(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),$(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const i={x:r},o={blockShape:t,crops:n};return D.runKernel(a_,i,o)}const ab=A({batchToSpaceND_:AA});function CA(e){let t;return e.rank===0||e.rank===1?t=j(e,[1,1,1,e.size]):e.rank===2?t=j(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DA(e,t,n,r,s,i){i==null&&(i=.001);const o=E(e,"x","batchNorm"),a=E(t,"mean","batchNorm"),u=E(n,"variance","batchNorm");let l;s!=null&&(l=E(s,"scale","batchNorm"));let f;r!=null&&(f=E(r,"offset","batchNorm")),$(a.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),$(f==null||a.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),$(l==null||a.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const p={x:CA(o),scale:l,offset:f,mean:a,variance:u},y={varianceEpsilon:i},v=D.runKernel(q_,p,y);return j(v,o.shape)}const Hl=A({batchNorm_:DA});function PA(e,t,n,r,s,i){const o=E(e,"x","batchNorm"),a=E(t,"mean","batchNorm"),u=E(n,"variance","batchNorm");let l;s!=null&&(l=E(s,"scale","batchNorm"));let f;return r!=null&&(f=E(r,"offset","batchNorm")),$(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),$(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),$(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),l!=null&&$(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),f!=null&&$(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),Hl(o,a,u,f,l,i)}const RA=A({batchNorm2d_:PA});function FA(e,t,n,r,s,i){const o=E(e,"x","batchNorm"),a=E(t,"mean","batchNorm"),u=E(n,"variance","batchNorm");let l;s!=null&&(l=E(s,"scale","batchNorm"));let f;return r!=null&&(f=E(r,"offset","batchNorm")),$(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),$(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),$(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),l!=null&&$(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),f!=null&&$(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),Hl(o,a,u,f,l,i)}const LA=A({batchNorm3d_:FA});function zA(e,t,n,r,s,i){const o=E(e,"x","batchNorm"),a=E(t,"mean","batchNorm"),u=E(n,"variance","batchNorm");let l;s!=null&&(l=E(s,"scale","batchNorm"));let f;return r!=null&&(f=E(r,"offset","batchNorm")),$(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),$(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),$(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),l!=null&&$(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),f!=null&&$(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),Hl(o,a,u,f,l,i)}const BA=A({batchNorm4d_:zA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jA(e,t,n){const r=E(e,"x","bincount"),s=E(t,"weights","bincount");$(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),$(n>=0,()=>`size must be non-negative, but got ${n}.`),$(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const i={x:r,weights:s},o={size:n};return D.runKernel(u_,i,o)}const ub=A({bincount_:jA});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MA(e,t){const n=E(e,"x","bitwiseAnd"),r=E(t,"y","bitwiseAnd");if(!dr(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return D.runKernel(l_,s)}const UA=A({bitwiseAnd_:MA});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VA(e,t){const n=E(e,"s0","broadcastArgs","int32"),r=E(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return D.runKernel(c_,s)}const HA=A({broadcastArgs_:VA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WA(e,t){let n=E(e,"broadcastTo","x");const r=n.shape;if(Zt(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=j(n,l)}const s=n.shape,i=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])i[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(i.map((l,f)=>l>1?f:-1).filter(l=>l>=0).length===0)return Vr(n);const a={x:n},u={reps:i};return D.runKernel(Dw,a,u)}const vu=A({broadcastTo_:WA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KA(e){const n={x:E(e,"x","ceil","float32")};return D.runKernel(f_,n)}const qA=A({ceil_:KA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ca(e,t,n){Zt(e),n=n||Vl(t);const r={shape:e,value:t,dtype:n};return D.runKernel(V_,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GA(e,t,n){const r=E(e,"x","clipByValue");if($(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return ca(r.shape,t,r.dtype);const s={x:r},i={clipValueMin:t,clipValueMax:n};return D.runKernel(h_,s,i)}const lb=A({clipByValue_:GA});function QA(e){return ut(e,0)}const XA=A({concat1d_:QA});function YA(e,t){return ut(e,t)}const JA=A({concat2d_:YA});function ZA(e,t){return ut(e,t)}const eC=A({concat3d_:ZA});function tC(e,t){return ut(e,t)}const nC=A({concat4d_:tC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rC(e,t,n,r,s="NHWC",i=[1,1],o){const a=E(e,"x","conv2d","float32"),u=E(t,"filter","conv2d","float32");let l=a,f=!1;a.rank===3&&(f=!0,l=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),$(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Cn("conv2d",r,o);const h=s==="NHWC"?l.shape[3]:l.shape[1];$(h===u.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${u.shape[2]}.`),$(es(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),$(Ai(i),()=>"Error in conv2D: Dilated rates should be larger than 0."),$(Ai(n),()=>"Error in conv2D: Strides should be larger than 0.");const p={x:l,filter:u},y={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},v=D.runKernel(y_,p,y);return f?j(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Wl=A({conv2d_:rC});function sC(e,t,n,r,s="NWC",i=1,o){const a=E(e,"x","conv1d"),u=E(t,"filter","conv1d");let l=a,f=!1;a.rank===2&&(f=!0,l=j(a,[1,a.shape[0],a.shape[1]])),$(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),$(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Cn("conv1d",r,o),$(l.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`),$(es(n,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${i}'`),$(Ai(i),()=>"Error in conv1D: Dilated rates should be larger than 0."),$(Ai(n),()=>"Error in conv1D: Stride should be larger than 0."),$(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const h=j(u,[1,u.shape[0],u.shape[1],u.shape[2]]),p=j(l,[l.shape[0],1,l.shape[1],l.shape[2]]),k=Wl(p,h,[1,n],r,"NHWC",[1,i],o);return f?j(k,[k.shape[2],k.shape[3]]):j(k,[k.shape[0],k.shape[2],k.shape[3]])}const iC=A({conv1d_:sC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oC(e,t,n,r,s,i="NHWC",o){$(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,u=t,l=!1;t.rank===3&&(l=!0,u=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,e[0],e[1],e[2]]),$(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),$(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),$(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const f=i==="NHWC"?a[3]:a[1],h=i==="NHWC"?u.shape[3]:u.shape[1];$(f===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${n.shape[2]}.`),$(h===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[3]}.`),Cn("conv2dDerInput",s,o);const p={dy:u,filter:n},y={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,inputShape:a},v=D.runKernel(v_,p,y);return l?j(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const cb=A({conv2DBackpropInput_:oC});function aC(e,t,n,r,s,i){const o=E(e,"x","conv2dTranspose"),a=E(t,"filter","conv2dTranspose");return cb(n,o,a,r,s,"NHWC",i)}const uC=A({conv2dTranspose_:aC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lC(e,t,n,r,s="NDHWC",i=[1,1,1]){const o=E(e,"x","conv3d"),a=E(t,"filter","conv3d");let u=o,l=!1;o.rank===4&&(l=!0,u=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),$(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),$(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),$(u.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${a.shape[3]}.`),$(es(n,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),$(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),$(Ai(i),()=>"Error in conv3D: Dilated rates should be larger than 0."),$(Ai(n),()=>"Error in conv3D: Strides should be larger than 0.");const f={x:u,filter:a},h={strides:n,pad:r,dataFormat:s,dilations:i},p=D.runKernel(w_,f,h);return l?j(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const cC=A({conv3d_:lC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fC(e,t,n,r,s){$(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,o=t,a=!1;t.rank===4&&(a=!0,o=j(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,e[0],e[1],e[2],e[3]]);const u=i[4],l=o.shape[4];$(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),$(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),$(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),$(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),$(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const f={dy:o,filter:n},h={pad:s,strides:r,inputShape:i},p=D.runKernel(b_,f,h);return a?j(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const hC=A({conv3DBackpropInput_:fC});function pC(e,t,n,r,s){const i=E(e,"x","conv3dTranspose"),o=E(t,"filter","conv3dTranspose");return hC(n,i,o,r,s)}const dC=A({conv3dTranspose_:pC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mC(e){const n={x:E(e,"x","cos","float32")};return D.runKernel(S_,n)}const yC=A({cos_:mC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gC(e){const n={x:E(e,"x","cosh","float32")};return D.runKernel(N_,n)}const vC=A({cosh_:gC});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wC(e,t=0,n=!1,r=!1){const i={x:E(e,"x","cumprod")},o={axis:t,exclusive:n,reverse:r};return D.runKernel(E_,i,o)}const bC=A({cumprod_:wC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SC(e,t=0,n=!1,r=!1){const i={x:E(e,"x","cumsum")},o={axis:t,exclusive:n,reverse:r};return D.runKernel(T_,i,o)}const NC=A({cumsum_:SC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EC(e,t,n,r=!1){const s=E(e,"x","denseBincount"),i=E(t,"weights","denseBincount");$(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),$(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),$(n>=0,()=>`size must be non-negative, but got ${n}.`),$(i.size===s.size||i.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${i.shape}.`);const o={x:s,weights:i},a={size:n,binaryOutput:r};return D.runKernel(x_,o,a)}const TC=A({denseBincount_:EC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kC(e,t,n="NHWC"){const r=E(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],i=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];$(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),$(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),$(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t} for depthToSpace with input shape
        ${r.shape}`),$(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);const a={x:r},u={blockSize:t,dataFormat:n};return D.runKernel(__,a,u)}const xC=A({depthToSpace_:kC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _C(e,t,n,r,s="NHWC",i=[1,1],o){const a=E(e,"x","depthwiseConv2d","float32"),u=E(t,"filter","depthwiseConv2d","float32");let l=a,f=!1;a.rank===3&&(f=!0,l=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),$(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const h=s==="NHWC"?l.shape[3]:l.shape[1];$(h===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${u.shape[2]}.`),Cn("depthwiseConv2d",r,o);const p={x:l,filter:u},y={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},v=D.runKernel($_,p,y);return f?j(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const md=A({depthwiseConv2d_:_C});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $C(e){const n={x:E(e,"x","diag")};return D.runKernel(A_,n)}const OC=A({diag_:$C});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IC(e,t,n,r,s=[1,1],i="NHWC"){const o=E(e,"x","dilation2d"),a=E(t,"filter","dilation2d");$(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),$(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),$(i==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${i}`);let u=o,l=!1;o.rank===3&&(u=j(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),$(u.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${a.shape[2]}`);const f={x:u,filter:a},h={strides:n,pad:r,dilations:s},p=D.runKernel(C_,f,h);return l?j(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const AC=A({dilation2d_:IC});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CC(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],i=t.length-r-1,o=t[i];(s==null||s===1&&o>1)&&n.unshift(i)}return n}function nt(e,t){const n=Math.max(e.length,t.length),r=new Array(n);for(let s=0;s<n;s++){let i=e[e.length-s-1];i==null&&(i=1);let o=t[t.length-s-1];if(o==null&&(o=1),i===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=i;else if(i!==o){const a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else r[n-s-1]=i}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DC(e,t){let n=E(e,"a","equal","string_or_numeric"),r=E(t,"b","equal","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(z_,s)}const fb=A({equal_:DC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PC(e,t,n){const r=E(t,"a","where"),s=E(n,"b","where"),i=E(e,"condition","where","bool"),o=nt(nt(i.shape,r.shape),s.shape),a=vu(i,o),u=vu(r,o),l=vu(s,o),f={condition:a,t:u,e:l};return D.runKernel(eO,f)}const Hr=A({where_:PC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RC(e){const n={x:E(e,"x","zerosLike")};return D.runKernel(CO,n)}const Qt=A({zerosLike_:RC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FC(e,t){let n=E(e,"a","div"),r=E(t,"b","div");[n,r]=Ue(n,r);const s=he(n,r),i=Qt(s),o=fb(r,i);return Hr(o,i,s)}const LC=A({divNoNan_:FC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zC(e,t){const n=E(e,"t1","dot"),r=E(t,"t2","dot");$((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],i=r.rank===1?r.size:r.shape[0];if($(s===i,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${i}.`),n.rank===1&&r.rank===1){const o=j(n,[1,-1]),a=j(r,[-1,1]),u=ke(o,a);return j(u,[])}else if(n.rank===1&&r.rank===2){const o=j(n,[1,-1]),a=j(r,[r.shape[0],r.shape[1]]),u=ke(o,a);return j(u,[u.size])}else if(n.rank===2&&r.rank===1){const o=j(r,[-1,1]),a=ke(n,o);return j(a,[a.size])}else{const o=j(r,[r.shape[0],r.shape[1]]);return ke(n,o)}}const BC=A({dot_:zC});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jC(e,...t){const n=t.map((s,i)=>E(s,`tensors${i}`,"einsum")),r={equation:e};return D.runKernel(R_,n,r)}const Qs=A({einsum_:jC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MC(e){const n={x:E(e,"x","elu","float32")};return D.runKernel(F_,n)}const hb=A({elu_:MC});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UC(e,t){const n=E(e,"x","ensureShape","string_or_numeric");if(!A2(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const VC=A({ensureShape_:UC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HC(e){let t=E(e,"x","erf");$(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=ze(t,"float32"));const n={x:t};return D.runKernel(L_,n)}const WC=A({erf_:HC});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KC(e,t,n){const r=e.length+t.length,s=[];let i=0,o=0;for(let a=0;a<r;a++)n.indexOf(a)===-1?s.push(e[i++]):s.push(t[o++]);return s}function Kl(e,t){const n=t.map(r=>1);return KC(e,n,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qC(e,t=null,n=!1){const s={x:E(e,"x","max")},i={reductionIndices:t,keepDims:n};return D.runKernel(p$,s,i)}const yi=A({max_:qC});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GC(e,t=null,n=!1){const s={x:E(e,"x","min")},i={axis:t,keepDims:n};return D.runKernel(w$,s,i)}const zh=A({min_:GC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QC(e,t){let n=E(e,"base","pow"),r=E(t,"exp","pow");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(P$,s)}const Qo=A({pow_:QC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ye(e,t){if((fn(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&fn(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Zr(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XC(e){const n={x:E(e,"x","sqrt","float32")};return D.runKernel(uO,n)}const yr=A({sqrt_:XC});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YC(e){const t=E(e,"x","square"),n={};return D.runKernel("Square",{x:t},n)}const _n=A({square_:YC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JC(e,t=null,n=!1){let r=E(e,"x","sum");r.dtype==="bool"&&(r=ze(r,"int32"));const s={x:r},i={axis:t,keepDims:n};return D.runKernel(lO,s,i)}const $e=A({sum_:JC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZC(e,t="euclidean",n=null,r=!1){e=E(e,"x","norm");const s=pb(e,t,n);let i=s.shape;if(r){const o=Ul(n,e.shape);i=Kl(s.shape,o)}return j(s,i)}function pb(e,t,n=null){if(e.rank===0)return Kt(e);if(e.rank!==1&&n===null)return pb(j(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return $e(Kt(e),n);if(t===1/0)return yi(Kt(e),n);if(t===-1/0)return zh(Kt(e),n);if(t==="euclidean"||t===2)return yr($e(Qo(Kt(e),ye(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return yi($e(Kt(e),n[0]),n[1]-1);if(t===1/0)return yi($e(Kt(e),n[1]),n[0]);if(t===-1/0)return zh($e(Kt(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return yr($e(_n(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const ql=A({norm_:ZC});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e3(e,t=null,n=!1){return ql(e,"euclidean",t,n)}const t3=A({euclideanNorm_:e3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n3(e){const n={x:E(e,"x","exp")};return D.runKernel(B_,n)}const gr=A({exp_:n3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r3(e,t=0){const n=E(e,"x","expandDims","string_or_numeric");$(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return D.runKernel(j_,r,s)}const Vn=A({expandDims_:r3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s3(e){const n={x:E(e,"x","expm1")};return D.runKernel(M_,n)}const i3=A({expm1_:s3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o3(e,t){const n=E(e,"x","tile","string_or_numeric");$(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return D.runKernel(Dw,r,s)}const ko=A({tile_:o3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a3(e,t,n,r="float32"){t==null&&(t=e);const s=mr([e,t],r),i=e<=t?e:t;for(let a=0;a<i;++a)s.set(1,a,a);const o=j(s.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return ko(Vn(o,0),[n[0],1,1]);if(n.length===2)return ko(Vn(Vn(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return ko(Vn(Vn(Vn(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const db=A({eye_:a3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u3(e){const n={x:E(e,"x","floor","float32")};return D.runKernel(W_,n)}const mb=A({floor_:u3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l3(e,t,n=0,r=0){const s=E(e,"x","gather"),i=E(t,"indices","gather","int32"),o={x:s,indices:i},a={axis:n,batchDims:r};return D.runKernel(G_,o,a)}const yb=A({gather_:l3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c3(e,t){let n=E(e,"a","greater","string_or_numeric"),r=E(t,"b","greater","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(X_,s)}const Gl=A({greater_:c3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f3(e,t){let n=E(e,"a","greaterEqual","string_or_numeric"),r=E(t,"b","greaterEqual","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(Y_,s)}const gb=A({greaterEqual_:f3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h3(e){const n={input:E(e,"input","imag")};return D.runKernel(Z_,n)}const Ql=A({imag_:h3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p3(e){const n={x:E(e,"x","isFinite")};return D.runKernel(e$,n)}const d3=A({isFinite_:p3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m3(e){const n={x:E(e,"x","isInf")};return D.runKernel(t$,n)}const y3=A({isInf_:m3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g3(e){const n={x:E(e,"x","isNaN")};return D.runKernel(n$,n)}const v3=A({isNaN_:g3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w3(e,t=.2){const r={x:E(e,"x","leakyRelu")},s={alpha:t};return D.runKernel(r$,r,s)}const vb=A({leakyRelu_:w3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b3(e,t){let n=E(e,"a","less","string_or_numeric"),r=E(t,"b","less","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(s$,s)}const Bh=A({less_:b3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S3(e,t){let n=E(e,"a","lessEqual","string_or_numeric"),r=E(t,"b","lessEqual","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(i$,s)}const yd=A({lessEqual_:S3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N3(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return D.runKernel(o$,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E3(e,t=5,n=1,r=1,s=.5){const i=E(e,"x","localResponseNormalization");$(i.rank===4||i.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${i.rank}.`),$(Ko(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=i,a=!1;i.rank===3&&(a=!0,o=j(i,[1,i.shape[0],i.shape[1],i.shape[2]]));const u={x:o},l={depthRadius:t,bias:n,alpha:r,beta:s},f=D.runKernel(h$,u,l);return a?j(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const T3=A({localResponseNormalization_:E3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k3(e){const n={x:E(e,"x","log","float32")};return D.runKernel(a$,n)}const Xo=A({log_:k3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x3(e){const n={x:E(e,"x","log1p")};return D.runKernel(u$,n)}const wb=A({log1p_:x3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _3(e,t){$(kh(e),()=>"The f passed in variableGrads(f) must be a function"),$(t==null||Array.isArray(t)&&t.every(l=>l instanceof tl),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in D.registeredVariables)t.push(D.registeredVariables[l])}const r=n?t.filter(l=>!l.trainable):null,s=t.length;t=t.filter(l=>l.trainable),$(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const i=!0,{value:o,grads:a}=D.gradients(e,t,null,i);$(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),$(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const u={};return t.forEach((l,f)=>{a[f]!=null&&(u[l.name]=a[f])}),r!=null&&r.forEach(l=>u[l.name]=null),{value:o,grads:u}}function vr(e){return D.customGrad(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $3(e){const n={x:E(e,"x","neg")};return D.runKernel(k$,n)}const Yn=A({neg_:$3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O3(e){const n={x:E(e,"x","softplus")};return D.runKernel(aO,n)}const bb=A({softplus_:O3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I3(e){const t=E(e,"x","logSigmoid");return vr(r=>({value:Yn(bb(Yn(r))),gradFunc:o=>q(o,Ns(Yn(r)))}))(t)}const A3=A({logSigmoid_:I3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C3(e,t){let n=E(e,"a","sub"),r=E(t,"b","sub");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(TO,s)}const ue=A({sub_:C3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D3(e,t=-1){const n=E(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return vr((s,i)=>{const a=yi(s,t,!0),u=ue(s,a),l=ue(ze(u,"float32"),Xo($e(gr(u),t,!0)));return i([l]),{value:l,gradFunc:(h,p)=>{const[y]=p,v=!0,w=gr(y);return ue(h,q($e(h,t,v),w))}}})(n)}const P3=A({logSoftmax_:D3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R3(e,t=null,n=!1){const r=E(e,"x","logSumExp"),s=Ul(t,r.shape),i=yi(r,s,!0),o=ue(r,i),a=gr(o),u=$e(a,s),l=Xo(u),f=te(j(i,l.shape),l);if(n){const h=Kl(f.shape,s);return j(f,h)}return f}const Sb=A({logSumExp_:R3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F3(e,t){const n=E(e,"a","logicalAnd","bool"),r=E(t,"b","logicalAnd","bool");nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(l$,s)}const il=A({logicalAnd_:F3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L3(e){const n={x:E(e,"x","logicalNot","bool")};return D.runKernel(c$,n)}const Nb=A({logicalNot_:L3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z3(e,t){const n=E(e,"a","logicalOr","bool"),r=E(t,"b","logicalOr","bool");nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(f$,s)}const Eb=A({logicalOr_:z3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B3(e,t){const n=E(e,"a","logicalXor","bool"),r=E(t,"b","logicalXor","bool");return nt(n.shape,r.shape),il(Eb(e,t),Nb(il(e,t)))}const j3=A({logicalXor_:B3});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ha=2147483648;function M3(e,t,n="left"){const r=E(e,"sortedSequence","searchSorted"),s=E(t,"values","searchSorted"),i=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],a=j(r,[-1,i]),u=j(s,[-1,o]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(qe(u.shape)>=Ha)throw new Error(`values tensor size must less than ${Ha}`);if(a.shape[1]>=Ha)throw new Error(`trailing dim_size must less than ${Ha} for int32 output type, was ${a.shape[1]}`);const l={sortedSequence:a,values:u},f={side:n};return D.runKernel(Z$,l,f)}const gd=A({searchSorted_:M3});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U3(e,t){return gd(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V3(e,t,n,r,s){const i=E(e,"x","maxPool"),o=1;let a=i,u=!1;i.rank===3&&(u=!0,a=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),$(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),$(es(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Cn("maxPool",r,s);const l={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s},h=D.runKernel(m$,l,f);return u?j(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Tb=A({maxPool_:V3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H3(e,t=[1,1,1],n,r,s,i="NDHWC"){const o=E(e,"x","maxPool3d");let a=o,u=!1;o.rank===4&&(u=!0,a=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),$(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),$(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Cn("maxPool3d",r,s);const l={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:i},h=D.runKernel(y$,l,f);return u?j(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const W3=A({maxPool3d_:H3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K3(e,t,n,r,s=!1){const o={x:E(e,"x","maxPoolWithArgmax")},a={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},u=D.runKernel(g$,o,a);return{result:u[0],indexes:u[1]}}const q3=A({maxPoolWithArgmax_:K3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G3(e,t){let n=E(e,"a","maximum"),r=E(t,"b","maximum");[n,r]=Ue(n,r),n.dtype==="bool"&&(n=ze(n,"int32"),r=ze(r,"int32")),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(d$,s)}const kb=A({maximum_:G3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q3(e,t=null,n=!1){const s={x:E(e,"x","mean")},i={axis:t,keepDims:n};return D.runKernel(v$,s,i)}const ol=A({mean_:Q3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ci(e,t="float32"){if(Zt(e),t==="complex64"){const r=Ci(e,"float32"),s=Ci(e,"float32");return qr(r,s)}const n=cd(qe(e),t);return D.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gs(e,t="float32"){if(Zt(e),t==="complex64"){const r=gs(e,"float32"),s=Ci(e,"float32");return qr(r,s)}const n=_w(qe(e),t);return D.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X3(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=E(e,"x","meshgrid",e instanceof Qe?e.dtype:"float32");if(t===void 0)return[r];let s=E(t,"y","meshgrid",t instanceof Qe?t.dtype:"float32");const i=qe(r.shape),o=qe(s.shape);return n==="xy"?(r=j(r,[1,-1]),s=j(s,[-1,1]),[ke(gs([o,1],r.dtype),r),ke(s,gs([1,i],s.dtype))]):(r=j(r,[-1,1]),s=j(s,[1,-1]),[ke(r,gs([1,o],r.dtype)),ke(gs([i,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(e,t){let n=E(e,"a","minimum"),r=E(t,"b","minimum");[n,r]=Ue(n,r),n.dtype==="bool"&&(n=ze(n,"int32"),r=ze(r,"int32")),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(b$,s)}const al=A({minimum_:Y3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J3(e,t,n){$(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=E(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");$(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let a=0;a<r.rank;a++)$(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),$(t[a][0]>=0&&t[a][0]<=r.shape[a]-s&&t[a][1]>=0&&t[a][1]<=r.shape[a]-s,()=>`Padding in dimension ${a} cannot be greater than or equal to ${r.shape[a]-s} or less than 0 for input of shape ${r.shape}`);const i={paddings:t,mode:n},o={x:r};return D.runKernel(S$,o,i)}const Z3=A({mirrorPad_:J3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eD(e,t){let n=E(e,"a","mod"),r=E(t,"b","mod");[n,r]=Ue(n,r);const s={a:n,b:r};return D.runKernel(N$,s)}const tD=A({mod_:eD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nD(e,t=null,n=!1){e=E(e,"x","moments");const r=Ul(t,e.shape),s=ol(e,r,n);let i=s.shape;n||(i=Kl(s.shape,r));const o=_n(ue(ze(e,"float32"),j(s,i))),a=ol(o,r,n);return{mean:s,variance:a}}const rD=A({moments_:nD});function sD(e,t,n,r){const s=E(t,"data","multiRNNCell"),i=nl(n,"c","multiRNNCell"),o=nl(r,"h","multiRNNCell");let a=s;const u=[];for(let h=0;h<e.length;h++){const p=e[h](a,i[h],o[h]);u.push(p[0]),u.push(p[1]),a=p[1]}const l=[],f=[];for(let h=0;h<u.length;h+=2)l.push(u[h]),f.push(u[h+1]);return[l,f]}const iD=A({multiRNNCell_:sD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oD(e,t,n,r=!1){const s=E(e,"logits","multinomial"),i=s.size,o=s.rank;if(i<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${i}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const u={logits:o===1?j(s,[1,-1]):s},l={numSamples:t,seed:n,normalized:r},f=D.runKernel(E$,u,l);return o===1?j(f,[f.size]):f}const aD=A({multinomial_:oD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uD(e,t){let n=E(e,"a","notEqual","string_or_numeric"),r=E(t,"b","notEqual","string_or_numeric");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(x$,s)}const xb=A({notEqual_:uD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lD(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:E(e,"indices","oneHot","int32")},a={dtype:s,depth:t,onValue:n,offValue:r};return D.runKernel(A$,o,a)}const cD=A({oneHot_:lD});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fD(e){const n={x:E(e,"x","onesLike")};return D.runKernel(I$,n)}const hD=A({onesLike_:fD});function pD(e,t){const n=E(e,"v1","outerProduct"),r=E(t,"v2","outerProduct");$(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=j(n,[-1,1]),i=j(r,[1,-1]);return ke(s,i)}const dD=A({outerProduct_:pD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mD(e,t,n=0){const r=E(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},i={x:r};return D.runKernel(D$,i,s)}const fa=A({pad_:mD});function yD(e,t,n=0){return $(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),fa(e,[t],n)}const gD=A({pad1d_:yD});function vD(e,t,n=0){return $(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fa(e,t,n)}const wD=A({pad2d_:vD});function bD(e,t,n=0){return $(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fa(e,t,n)}const SD=A({pad3d_:bD});function ND(e,t,n=0){return $(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fa(e,t,n)}const ED=A({pad4d_:ND});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TD(e,t,n){const r=E(e,"x","spaceToBatchND");$(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),$(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),$(r.shape.reduce((o,a,u)=>u>0&&u<=t.length?o&&(a+n[u-1][0]+n[u-1][1])%t[u-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},i={blockShape:t,paddings:n};return D.runKernel(cO,s,i)}const _b=A({spaceToBatchND_:TD});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kD(e,t,n,r,s,i,o){s==null&&(s=[1,1]),i==null&&(i=1),r===0&&(r="valid");const a=E(e,"x","maxPool");let u=a,l=!1;a.rank===3&&(l=!0,u=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(es(i,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${i} and dilations '${s}'`);const f=yA(u.shape,t,i,s,r),h=[f.dilationHeight,f.dilationWidth];let p;r==="same"?p=_D([f.filterHeight,f.filterWidth],h):p=[[0,0],[0,0]];const y=h[0]===1&&h[1]===1,[v,w]=xD([f.inHeight,f.inWidth],h,p),k=y?r:"valid",S=y?u:_b(u,h,v),T=(n==="avg"?()=>ob(S,t,i,k,o):()=>Tb(S,t,i,k,o))(),x=y?T:ab(T,h,w);return l?j(x,[x.shape[1],x.shape[2],x.shape[3]]):x}function xD(e,t,n){const r=n.map(f=>f[0]),s=n.map(f=>f[1]),i=e.concat(r,s),o=t.map((f,h)=>(f-i[h]%f)%f),a=s.map((f,h)=>f+o[h]),u=t.map((f,h)=>[r[h],a[h]]),l=t.map((f,h)=>[0,o[h]]);return[u,l]}function _D(e,t){const r=e.map((o,a)=>o+(o-1)*(t[a]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),i=r.map((o,a)=>o-s[a]);return r.map((o,a)=>[s[a],i[a]])}const $D=A({pool_:kD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OD(e,t){const n=E(e,"x","prelu"),r=E(t,"alpha","prelu"),s={x:n,alpha:r};return D.runKernel(R$,s)}const $b=A({prelu_:OD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ID(e,t=null,n=!1){let r=E(e,"x","prod");r.dtype==="bool"&&(r=ze(r,"int32"));const s={x:r},i={axis:t,keepDims:n};return D.runKernel(F$,s,i)}const AD=A({prod_:ID});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CD(e,t,n,r){const s=e.map((f,h)=>E(f,`tensors${h}`,"raggedGather","int32")),i=E(t,"paramsDenseValues","raggedGather"),o=E(n,"indices","raggedGather","int32"),a={paramsNestedSplits:s,paramsDenseValues:i,indices:o},u={outputRaggedRank:r},l=D.runKernel(L$,a,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const DD=A({raggedGather_:CD});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PD(e,t,n){const r=E(e,"starts","raggedRange"),s=E(t,"limits","raggedRange",r.dtype),i=E(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:i},a=D.runKernel(z$,o);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}const RD=A({raggedRange_:PD});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FD(e,t,n,r,s){const i=E(e,"shape","raggedTensorToTensor","int32"),o=E(t,"values","raggedTensorToTensor"),a=E(n,"defaultValue","raggedTensorToTensor",o.dtype),u=r.map((h,p)=>E(h,`tensors${p}`,"raggedTensorToTensor","int32")),l={shape:i,values:o,defaultValue:a,rowPartitionTensors:u},f={rowPartitionTypes:s};return D.runKernel(B$,l,f)}const LD=A({raggedTensorToTensor_:FD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zD(e,t,n){Zt(e);const r=qe(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let i=0;i<r;i++)s[i]=t();return D.makeTensor(s,e,n)}const BD=A({rand_:zD});var vd={exports:{}};vd.exports;(function(e){(function(t,n,r){function s(u){var l=this,f=a();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(u),l.s0<0&&(l.s0+=1),l.s1-=f(u),l.s1<0&&(l.s1+=1),l.s2-=f(u),l.s2<0&&(l.s2+=1),f=null}function i(u,l){return l.c=u.c,l.s0=u.s0,l.s1=u.s1,l.s2=u.s2,l}function o(u,l){var f=new s(u),h=l&&l.state,p=f.next;return p.int32=function(){return f.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,h&&(typeof h=="object"&&i(h,f),p.state=function(){return i(f,{})}),p}function a(){var u=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){u+=f.charCodeAt(h);var p=.02519603282416938*u;u=p>>>0,p-=u,p*=u,u=p>>>0,p-=u,u+=p*4294967296}return(u>>>0)*23283064365386963e-26};return l}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.alea=o})(qn,e,!1)})(vd);var jD=vd.exports,wd={exports:{}};wd.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},a===(a|0)?u.x=a:l+=a;for(var f=0;f<l.length+64;f++)u.x^=l.charCodeAt(f)|0,u.next()}function i(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u}function o(a,u){var l=new s(a),f=u&&u.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var p=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(p+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&i(f,l),h.state=function(){return i(l,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor128=o})(qn,e,!1)})(wd);var MD=wd.exports,bd={exports:{}};bd.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(h^h<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,a===(a|0)?u.x=a:l+=a;for(var f=0;f<l.length+64;f++)u.x^=l.charCodeAt(f)|0,f==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u.v=a.v,u.d=a.d,u}function o(a,u){var l=new s(a),f=u&&u.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var p=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(p+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&i(f,l),h.state=function(){return i(l,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorwow=o})(qn,e,!1)})(bd);var UD=bd.exports,Sd={exports:{}};Sd.exports;(function(e){(function(t,n,r){function s(a){var u=this;u.next=function(){var f=u.x,h=u.i,p,y;return p=f[h],p^=p>>>7,y=p^p<<24,p=f[h+1&7],y^=p^p>>>10,p=f[h+3&7],y^=p^p>>>3,p=f[h+4&7],y^=p^p<<7,p=f[h+7&7],p=p^p<<13,y^=p^p<<9,f[h]=y,u.i=h+1&7,y};function l(f,h){var p,y=[];if(h===(h|0))y[0]=h;else for(h=""+h,p=0;p<h.length;++p)y[p&7]=y[p&7]<<15^h.charCodeAt(p)+y[p+1&7]<<13;for(;y.length<8;)y.push(0);for(p=0;p<8&&y[p]===0;++p);for(p==8?y[7]=-1:y[p],f.x=y,f.i=0,p=256;p>0;--p)f.next()}l(u,a)}function i(a,u){return u.x=a.x.slice(),u.i=a.i,u}function o(a,u){a==null&&(a=+new Date);var l=new s(a),f=u&&u.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var p=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(p+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,f&&(f.x&&i(f,l),h.state=function(){return i(l,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorshift7=o})(qn,e,!1)})(Sd);var VD=Sd.exports,Nd={exports:{}};Nd.exports;(function(e){(function(t,n,r){function s(a){var u=this;u.next=function(){var f=u.w,h=u.X,p=u.i,y,v;return u.w=f=f+1640531527|0,v=h[p+34&127],y=h[p=p+1&127],v^=v<<13,y^=y<<17,v^=v>>>15,y^=y>>>12,v=h[p]=v^y,u.i=p,v+(f^f>>>16)|0};function l(f,h){var p,y,v,w,k,S=[],N=128;for(h===(h|0)?(y=h,h=null):(h=h+"\0",y=0,N=Math.max(N,h.length)),v=0,w=-32;w<N;++w)h&&(y^=h.charCodeAt((w+32)%h.length)),w===0&&(k=y),y^=y<<10,y^=y>>>15,y^=y<<4,y^=y>>>13,w>=0&&(k=k+1640531527|0,p=S[w&127]^=y+k,v=p==0?v+1:0);for(v>=128&&(S[(h&&h.length||0)&127]=-1),v=127,w=4*128;w>0;--w)y=S[v+34&127],p=S[v=v+1&127],y^=y<<13,p^=p<<17,y^=y>>>15,p^=p>>>12,S[v]=y^p;f.w=k,f.X=S,f.i=v}l(u,a)}function i(a,u){return u.i=a.i,u.w=a.w,u.X=a.X.slice(),u}function o(a,u){a==null&&(a=+new Date);var l=new s(a),f=u&&u.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var p=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(p+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,f&&(f.X&&i(f,l),h.state=function(){return i(l,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor4096=o})(qn,e,!1)})(Nd);var HD=Nd.exports,Ed={exports:{}};Ed.exports;(function(e){(function(t,n,r){function s(a){var u=this,l="";u.next=function(){var h=u.b,p=u.c,y=u.d,v=u.a;return h=h<<25^h>>>7^p,p=p-y|0,y=y<<24^y>>>8^v,v=v-h|0,u.b=h=h<<20^h>>>12^p,u.c=p=p-y|0,u.d=y<<16^p>>>16^v,u.a=v-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,a===Math.floor(a)?(u.a=a/4294967296|0,u.b=a|0):l+=a;for(var f=0;f<l.length+20;f++)u.b^=l.charCodeAt(f)|0,u.next()}function i(a,u){return u.a=a.a,u.b=a.b,u.c=a.c,u.d=a.d,u}function o(a,u){var l=new s(a),f=u&&u.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var p=l.next()>>>11,y=(l.next()>>>0)/4294967296,v=(p+y)/(1<<21);while(v===0);return v},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&i(f,l),h.state=function(){return i(l,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.tychei=o})(qn,e,!1)})(Ed);var WD=Ed.exports,Ob={exports:{}};const KD={},qD=Object.freeze(Object.defineProperty({__proto__:null,default:KD},Symbol.toStringTag,{value:"Module"})),GD=US(qD);(function(e){(function(t,n,r){var s=256,i=6,o=52,a="random",u=r.pow(s,i),l=r.pow(2,o),f=l*2,h=s-1,p;function y(x,C,P){var F=[];C=C==!0?{entropy:!0}:C||{};var L=S(k(C.entropy?[x,T(n)]:x??N(),3),F),M=new v(F),B=function(){for(var V=M.g(i),ee=u,J=0;V<l;)V=(V+J)*s,ee*=s,J=M.g(1);for(;V>=f;)V/=2,ee/=2,J>>>=1;return(V+J)/ee};return B.int32=function(){return M.g(4)|0},B.quick=function(){return M.g(4)/4294967296},B.double=B,S(T(M.S),n),(C.pass||P||function(V,ee,J,ie){return ie&&(ie.S&&w(ie,M),V.state=function(){return w(M,{})}),J?(r[a]=V,ee):V})(B,L,"global"in C?C.global:this==r,C.state)}function v(x){var C,P=x.length,F=this,L=0,M=F.i=F.j=0,B=F.S=[];for(P||(x=[P++]);L<s;)B[L]=L++;for(L=0;L<s;L++)B[L]=B[M=h&M+x[L%P]+(C=B[L])],B[M]=C;(F.g=function(V){for(var ee,J=0,ie=F.i,oe=F.j,fe=F.S;V--;)ee=fe[ie=h&ie+1],J=J*s+fe[h&(fe[ie]=fe[oe=h&oe+ee])+(fe[oe]=ee)];return F.i=ie,F.j=oe,J})(s)}function w(x,C){return C.i=x.i,C.j=x.j,C.S=x.S.slice(),C}function k(x,C){var P=[],F=typeof x,L;if(C&&F=="object")for(L in x)try{P.push(k(x[L],C-1))}catch{}return P.length?P:F=="string"?x:x+"\0"}function S(x,C){for(var P=x+"",F,L=0;L<P.length;)C[h&L]=h&(F^=C[h&L]*19)+P.charCodeAt(L++);return T(C)}function N(){try{var x;return p&&(x=p.randomBytes)?x=x(s):(x=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(x)),T(x)}catch{var C=t.navigator,P=C&&C.plugins;return[+new Date,t,P,t.screen,T(n)]}}function T(x){return String.fromCharCode.apply(0,x)}if(S(r.random(),n),e.exports){e.exports=y;try{p=GD}catch{}}else r["seed"+a]=y})(typeof self<"u"?self:qn,[],Math)})(Ob);var QD=Ob.exports,XD=jD,YD=MD,JD=UD,ZD=VD,eP=HD,tP=WD,Bs=QD;Bs.alea=XD;Bs.xor128=YD;Bs.xorwow=JD;Bs.xorshift7=ZD;Bs.xor4096=eP;Bs.tychei=tP;var Td=Bs;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kd{constructor(t,n,r,s,i){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=i||Math.random();this.random=Td.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,i,o;do s=2*this.random()-1,i=2*this.random()-1,o=s*s+i*i;while(o>=1||o===0);const a=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*s*a,n=this.mean+this.stdDev*i*a,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class nP{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const i=s||Math.random();this.randu=Td.alea(i.toString()),this.randn=new kd(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,i,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-o+Math.log(o)),i=this.randu(),i<n||Math.log(i)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class rP{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=Td.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sP(e,t,n=1,r="float32",s){if(Zt(e),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const i=new nP(t,n,r,s),o=mr(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const iP=A({randomGamma_:sP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oP(e,t=0,n=1,r,s){if(Zt(e),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const i=new kd(t,n,r,!1,s),o=mr(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Ib=A({randomNormal_:oP});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aP(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return Ib(e,0,1,t,n)}const uP=A({randomStandardNormal_:aP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lP(e,t=0,n=1,r="float32",s){Zt(e);const i=mr(e,r),o=new rP(t,n,null,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const xd=A({randomUniform_:lP});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cP(e,t,n,r){return xd(e,t,n,"int32",r)}const fP=A({randomUniformInt_:cP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yo(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return D.runKernel(j$,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hP(e){const n={input:E(e,"input","real")};return D.runKernel(M$,n)}const Jo=A({real_:hP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pP(e){const n={x:E(e,"x","reciprocal")};return D.runKernel(U$,n)}const dP=A({reciprocal_:pP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mP(e){const n={x:E(e,"x","relu")};return D.runKernel(V$,n)}const Xl=A({relu_:mP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yP(e){const n={x:E(e,"x","relu6")};return D.runKernel(q$,n)}const Ab=A({relu6_:yP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gP(e,t){const r={x:E(e,"x","reverse")},s={dims:t};return D.runKernel(G$,r,s)}const Ds=A({reverse_:gP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vP(e){const t=E(e,"x","reverse");return $(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Ds(t,0)}const wP=A({reverse1d_:vP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bP(e,t){const n=E(e,"x","reverse");return $(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Ds(n,t)}const SP=A({reverse2d_:bP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NP(e,t){const n=E(e,"x","reverse");return $(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Ds(n,t)}const EP=A({reverse3d_:NP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TP(e,t){const n=E(e,"x","reverse");return $(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Ds(n,t)}const kP=A({reverse4d_:TP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xP(e){const n={x:E(e,"x","round")};return D.runKernel(Q$,n)}const Cb=A({round_:xP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _P(e){const n={x:E(e,"x","rsqrt","float32")};return D.runKernel(X$,n)}const $P=A({rsqrt_:_P});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OP(e){const n={x:E(e,"x","selu")};return D.runKernel(tO,n)}const IP=A({selu_:OP});function AP(e,t,n,r,s,i=[1,1],o="NHWC"){const a=E(e,"x","separableConv2d"),u=E(t,"depthwiseFilter","separableConv2d"),l=E(n,"pointwiseFilter","separableConv2d");let f=a,h=!1;if(a.rank===3&&(h=!0,f=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");$(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),$(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),$(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),$(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),$(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const p=u.shape[2],y=u.shape[3];$(l.shape[2]===p*y,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*y}, but got ${l.shape[2]}.`);const v=md(f,u,r,s,o,i),k=Wl(v,l,1,"valid",o);return h?j(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const CP=A({separableConv2d_:AP});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function DP(e,t){const n=E(e,"x","setdiff1d"),r=E(t,"y","setdiff1d");$(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),$(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),$(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),i=await r.data(),o=new Set(i);let a=0;for(let f=0;f<s.length;f++)o.has(s[f])||a++;const u=new _h([a],n.dtype),l=new _h([a],"int32");for(let f=0,h=0;f<s.length;f++)o.has(s[f])||(u.values[h]=s[f],l.values[h]=f,h++);return[u.toTensor(),l.toTensor()]}const PP=DP;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RP(e){const n={x:E(e,"x","sign")};return D.runKernel(iO,n)}const FP=A({sign_:RP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LP(e){const n={x:E(e,"x","sin","float32")};return D.runKernel(rO,n)}const zP=A({sin_:LP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BP(e){const n={x:E(e,"x","sinh")};return D.runKernel(sO,n)}const jP=A({sinh_:BP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MP(e,t,n){const r=E(e,"x","slice1d");return $(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ae(r,[t],[n])}const UP=A({slice1d_:MP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VP(e,t,n){const r=E(e,"x","slice2d");return $(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ae(r,t,n)}const HP=A({slice2d_:VP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WP(e,t,n){const r=E(e,"x","slice3d");return $(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ae(r,t,n)}const KP=A({slice3d_:WP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qP(e,t,n){const r=E(e,"x","slice4d");return $(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ae(r,t,n)}const GP=A({slice4d_:qP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QP(e,t=-1){const n=E(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return D.runKernel(hO,r,s)}const XP=A({softmax_:QP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YP(e){$(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return D.runKernel(U_,t)}const _d=A({fft_:YP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JP(e){$(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return D.runKernel(J_,t)}const ul=A({ifft_:JP});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZP(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=j(e,[n,t]);r=ul(s)}else{const s=[n,2*(t-1)],i=j(Jo(e),[n,t]),o=j(Ql(e),[n,t]),a=Ds(ae(i,[0,1],[n,t-2]),1),u=q(Ds(ae(o,[0,1],[n,t-2]),1),ye(-1)),l=ut([i,a],1),f=ut([o,u],1),h=j(qr(l,f),[s[0],s[1]]);r=ul(h)}if(r=Jo(r),e.rank===3&&e.shape[0]!==0){const s=r,i=e.shape[0];r=j(r,[i,r.shape[0]/i,r.shape[1]]),s.dispose()}return r}const Db=A({irfft_:ZP});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eR(e,t,n=0){const s={x:E(e,"x","split")},i={numOrSizeSplits:t,axis:n};return D.runKernel(fO,s,i)}const Zo=A({split_:eR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tR(e,t){$(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const v=e.shape.map(k=>0),w=e.shape.map(k=>k);w[e.shape.length-1]=t,s=ae(e,v,w),n=t}else if(t!=null&&t>n){const v=e.shape.map(w=>w);v[e.shape.length-1]=t-n,s=ut([e,Ci(v)],e.shape.length-1),n=t}else s=e;const i=Qt(s),o=j(qr(s,i),[r,n]),a=_d(o),u=Math.floor(n/2)+1,l=Jo(a),f=Ql(a),h=Zo(l,[u,n-u],l.shape.length-1),p=Zo(f,[u,n-u],f.shape.length-1),y=s.shape.slice();return y[s.shape.length-1]=u,j(qr(h[0],p[0]),y)}const $d=A({rfft_:tR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nR(e,t){let n=E(e,"a","squaredDifference"),r=E(t,"b","squaredDifference");[n,r]=Ue(n,r),nt(n.shape,r.shape);const s={a:n,b:r},i={};return D.runKernel(vO,s,i)}const Pb=A({squaredDifference_:nR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rR(e,t){const n=E(e,"x","squeeze","string_or_numeric");return j(n,C2(n.shape,t).newShape)}const rt=A({squeeze_:rR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sR(e,t=0){const n=nl(e,"tensors","stack","string_or_numeric");$(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&$(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return D.runKernel(C$,r,s)}const wr=A({stack_:sR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iR(e,t=0){const r={x:E(e,"x","step")},s={alpha:t};return D.runKernel(DO,r,s)}const Rb=A({step_:iR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oR(e,t,n,r,s=0,i=0,o=0,a=0,u=0){const f={x:E(e,"x","stridedSlice","string_or_numeric")},h={begin:t,end:n,strides:r,beginMask:s,endMask:i,ellipsisMask:o,newAxisMask:a,shrinkAxisMask:u};return D.runKernel(bO,f,h)}const aR=A({stridedSlice_:oR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uR(e){const n={x:E(e,"x","tan","float32")};return D.runKernel(kO,n)}const lR=A({tan_:uR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dt(e,t){Bi(e);const n=Jr(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Zr(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Es(e,t,n){if(Bi(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Jr(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Zr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(e,t,n){if(Bi(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Jr(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Zr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cR(e,t,n){if(Bi(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Jr(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Zr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fR(e,t,n){if(Bi(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Jr(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Zr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hR(e,t,n){if(Bi(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Jr(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,Zr(e,t,r,n)}function pR(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,i=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(i+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(i+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(i+` update.rank != ${s+e.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==t.shape[o])throw new Error(i+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==e[o+r])throw new Error(i+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${e[o+s]})`)}function Lb(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}pR(n,t,e)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dR(e,t,n){const r=E(e,"tensor","tensorScatterupdate"),s=E(t,"indices","tensorScatterupdate","int32"),i=E(n,"updates","tensorScatterupdate");if(Lb(i,s,r.shape),r.dtype!==i.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${i.dtype}.`);const o={tensor:r,indices:s,updates:i},a={};return D.runKernel(J$,o,a)}const mR=A({tensorScatterUpdate_:dR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yR(e,t=1,n=!0){const r=E(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const i={x:r},o={k:t,sorted:n},[a,u]=D.runKernel(_O,i,o);return{values:a,indices:u}}const gR=A({topk_:yR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vR(e,t=0,n=1,r,s){if(Zt(e),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new kd(t,n,r,!0,s),o=mr(e,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const wR=A({truncatedNormal_:vR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bR(e,t=0){const n=E(e,"x","unique","string_or_numeric");$(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[i,o]=D.runKernel(OO,r,s);return{values:i,indices:o}}const SR=A({unique_:bR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NR(e,t,n){const r=E(e,"x","unsortedSegmentSum"),s=E(t,"segmentIds","unsortedSegmentSum","int32");$(Ko(n),()=>"numSegments must be of dtype int");const i={x:r,segmentIds:s},o={numSegments:n};return D.runKernel(AO,i,o)}const ER=A({unsortedSegmentSum_:NR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TR(e,t=0){const n=E(e,"x","unstack","string_or_numeric");$(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return D.runKernel(IO,r,s)}const js=A({unstack_:TR});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kR(e,t){return gd(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xR(e,t=!0,n,r){return D.makeVariable(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _R(e,t){const n=[];for(let i=0;i<t.length;i++)t[i]&&n.push(i);const r=mr(e,"int32"),s=mr([n.length,e.length],"int32");for(let i=0;i<n.length;i++){const o=r.indexToLoc(n[i]),a=i*e.length;s.values.set(o,a)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $R(e){const t=E(e,"condition","whereAsync","bool"),n=await t.data(),r=_R(t.shape,n);return e!==t&&t.dispose(),r}const zb=$R;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function OR(e,t,n){const r=E(e,"tensor","boolMask"),s=E(t,"mask","boolMask","bool"),i=n??0,o=s.rank,a=r.shape;$(o>0,()=>"mask cannot be scalar"),hn(a.slice(i,i+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let w=i;w<i+o;w++)u*=a[w];const l=a.slice(0,i).concat([u],a.slice(i+o)),f=j(r,l),h=j(s,[-1]),p=await zb(h),y=rt(p,[1]),v=yb(f,y,i);return e!==r&&r.dispose(),t!==s&&s.dispose(),y.dispose(),f.dispose(),h.dispose(),p.dispose(),v}const IR=OR;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AR(e,t,n){const r=E(e,"x","transpose");if(t==null&&(t=r.shape.map((o,a)=>a).reverse()),$(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(o=>{$(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},i={perm:t};return r.dtype==="complex64"?de(()=>{let o=Jo(r),a=Ql(r);return o=D.runKernel(ef,{x:o},i),a=D.runKernel(ef,{x:a},i),n&&(a=Yn(a)),qr(o,a)}):D.runKernel(ef,s,i)}const jh=A({transpose_:AR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CR(e,t,n,r,s=!0){const i=E(e,"v","movingAverage"),o=E(t,"x","movingAverage"),a=E(n,"decay","movingAverage");XO(i,o),$(dr(i.shape,o.shape),()=>"Shape mismatch in v and x");const u=ye(1),l=ue(u,a);let f=q(ue(o,i),l);if(s){$(r!=null,()=>"When using zeroDebias: true, step is required.");const h=E(r,"step","movingAverage");f=he(f,ue(u,Qo(a,h)))}return te(i,f)}const DR=A({movingAverage_:CR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PR(e,t,n){Zt(n);const r=E(e,"indices","scatterND","int32"),s=E(t,"updates","scatterND");Lb(s,r,n);const i={indices:r,updates:s},o={shape:n};return D.runKernel(Y$,i,o)}const RR=A({scatterND_:PR});function FR(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,i=e.rank>1?e.shape[1]:1;if(n.length!==i)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${i}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LR(e,t,n,r=0){Zt(n);const s=E(e,"sparseIndices","sparseToDense","int32"),i=E(t,"sparseValues","sparseToDense","string_or_numeric"),o=E(r,"defaultValue","sparseToDense",i.dtype);FR(s,i,n,o);const a={sparseIndices:s,sparseValues:i,defaultValue:o},u={outputShape:n};return D.runKernel(gO,a,u)}const zR=A({sparseToDense_:LR});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BR(e,t){const n=E(t,"indices","gatherND","int32"),s={params:E(e,"x","gatherND","string_or_numeric"),indices:n};return D.runKernel(Q_,s)}const jR=A({gatherND_:BR});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MR(e,t){if(t==null)return e.shape.slice();if(dr(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UR(e,t,n,r){const s=E(e,"x","dropout");if($(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),$(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Qe?s.clone():s;const i=MR(s,n),o=1-t,a=he(mb(te(xd(i,0,1,"float32",r),o)),o);return q(s,a)}const VR=A({dropout_:UR});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Od(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let i=0;i<e;++i){const o=2*Math.PI*i/(e+r-1);s[i]=t-n*Math.cos(o)}return dt(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function HR(e,t,n=1){const r=E(e,"predictions","inTopK"),s=E(t,"targets","inTopK");$(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),$(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),hn(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const i=r.shape[r.shape.length-1];$(n>0&&n<=i,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${i}), but got ${n}`);const o=await r.data(),a=await s.data(),[u,l]=[o.length/i,i],f=D2("bool",u);for(let h=0;h<u;h++){const p=h*l,y=o.subarray(p,p+l),v=[];for(let w=0;w<y.length;w++)v.push({value:y[w],index:w});v.sort((w,k)=>k.value-w.value),f[h]=0;for(let w=0;w<n;w++)if(v[w].index===a[h]){f[h]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),Xn(f,s.shape,"bool")}const WR=HR;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KR(e,t,n,r,s,i="NHWC",o){let a=e;e.rank===3&&(a=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=j(t,[1,t.shape[0],t.shape[1],t.shape[2]])),$(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),$(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),$(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=i==="NHWC"?a.shape[3]:a.shape[1],f=i==="NHWC"?u.shape[3]:u.shape[1];$(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),$(f===n[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${n[3]}).`),Cn("conv2dDerFilter",s,o);const h={x:a,dy:u},p={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,filterShape:n};return D.runKernel(g_,h,p)}const qR=A({conv2DBackpropFilter_:KR});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return q(e,Rb(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Ad(e,t){let n=t;const r=CC(e.shape,t.shape);return r.length>0&&(n=$e(n,r)),j(n,e.shape)}function Cd(e,t,n,r){if(t==="linear")return e;if(t==="relu")return Xl(e);if(t==="elu")return hb(e);if(t==="relu6")return Ab(e);if(t==="prelu")return $b(e,n);if(t==="leakyrelu")return vb(e,r);if(t==="sigmoid")return Ns(e);throw new Error(`Unknown fused activation ${t}.`)}const Dd=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GR({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:f}){if(u=u||"linear",Dd(D.state.gradientDepth,u)===!1){$(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let P=Wl(e,t,n,r,s,i,o);return a!=null&&(P=te(P,a)),Cd(P,u,l,f)}const h=E(e,"x","conv2d","float32"),p=E(t,"filter","conv2d","float32");let y=h,v=!1;h.rank===3&&(v=!0,y=j(h,[1,h.shape[0],h.shape[1],h.shape[2]])),$(y.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${y.rank}.`),$(p.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${p.rank}.`),Cn("fused conv2d",r,o);const w=s==="NHWC"?y.shape[3]:y.shape[1];$(p.shape[2]===w,()=>`Error in conv2d: depth of input (${w}) must match input depth for filter ${p.shape[2]}.`),$(es(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`);const k=dd(y.shape,p.shape,n,i,r,o);let S;a!=null&&(S=E(a,"bias","fused conv2d"),[S]=Ue(S,h),s==="NHWC"?nt(k.outShape,S.shape):($(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),$(S.shape.length===0||S.shape[0]===k.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${k.outChannels})`)));let N;if(l!=null){const P=l.shape;if($(P.length<=1||P.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${P.length}.`),P.length===1)$(P[0]===1||P[0]===k.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${P}) is not compatible with the number of output channels (${k.outChannels}).`);else if(P.length===3)try{nt(P,k.outShape)}catch{const L=`Error in fused conv2d: PReLU activation weights (${P}) is not compatible with the output shape of the conv2d (${k.outShape}).`;throw Error(L)}N=E(l,"prelu weights","fused conv2d")}const T=(P,F)=>{$(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[L,M,B,V]=F,ee=Id(P,B,u);$(sl(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const J=cb(M.shape,ee,L,n,r),ie=qR(M,ee,L.shape,n,r),oe=[J,ie];if(V!=null){const fe=Ad(V,ee);oe.push(fe)}return oe},x={x:y,filter:p,bias:S,preluActivationWeights:N},C={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o,activation:u,leakyreluAlpha:f};return a==null?vr((F,L,M)=>{let B=D.runKernel(_g,x,C);return M([L,F,B]),v&&(B=j(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:T}})(y,p):vr((F,L,M,B)=>{let V=D.runKernel(_g,x,C);return B([L,F,V,M]),v&&(V=j(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:T}})(y,p,S)}const QR=A({fusedConv2d_:GR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XR(e,t,n,r,s,i=[1,1],o){let a=e;e.rank===3&&(a=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:a,dy:u},f={strides:r,pad:s,dimRoundingMode:o,dilations:i,filterShape:n};return D.runKernel(O_,l,f)}const YR=A({depthwiseConv2dNativeBackpropFilter_:XR});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JR(e,t,n,r,s,i=[1,1],o){let a=t,u=!1;t.rank===3&&(u=!0,a=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:a,filter:n},f={strides:r,pad:s,dimRoundingMode:o,dilations:i,inputShape:e},h=D.runKernel(I_,l,f);return u?j(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ZR=A({depthwiseConv2dNativeBackpropInput_:JR});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eF({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:f}){if(Dd(D.state.gradientDepth,u)===!1){let C=md(e,t,n,r,s,i,o);return a!=null&&(C=te(C,a)),Cd(C,u,l,f)}const h=E(e,"x","depthwiseConv2d","float32"),p=E(t,"filter","depthwiseConv2d","float32");let y=h,v=!1;h.rank===3&&(v=!0,y=j(h,[1,h.shape[0],h.shape[1],h.shape[2]])),$(y.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${y.rank}.`),$(p.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${p.rank}.`),$(y.shape[3]===p.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${y.shape[3]}) must match the inChannels dimension in filter ${p.shape[2]}.`),i==null&&(i=[1,1]),$(es(n,i),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),Cn("fused depthwiseConv2d",r,o);const w=dd(y.shape,p.shape,n,i,r,o,!0);let k;a!=null&&(k=E(a,"bias","fused conv2d"),[k]=Ue(k,h),nt(w.outShape,k.shape));let S;l!=null&&(S=E(l,"prelu weights","fused depthwiseConv2d"));const N=(C,P)=>{$(sl(i),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[F,L,M,B]=P,V=Id(C,M,u),ee=ZR(L.shape,V,F,n,r,i,o),J=YR(L,V,F.shape,n,r,i,o);if(B!=null){const ie=Ad(k,V);return[ee,J,ie]}return[ee,J]},T={x:y,filter:p,bias:k,preluActivationWeights:S},x={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o,activation:u,leakyreluAlpha:f};return a==null?vr((P,F,L)=>{let M=D.runKernel($g,T,x);return L([F,P,M]),v&&(M=j(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:N}})(y,p):vr((P,F,L,M)=>{let B=D.runKernel($g,T,x);return M([F,P,B,L]),v&&(B=j(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:N}})(y,p,k)}const tF=A({fusedDepthwiseConv2d_:eF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nF({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:i="linear",preluActivationWeights:o,leakyreluAlpha:a=.2}){if(Dd(D.state.gradientDepth,i)===!1){let V=ke(e,t,n,r);return s!=null&&(V=te(V,s)),Cd(V,i,o,a)}let u=E(e,"a","fused matMul"),l=E(t,"b","fused matMul");[u,l]=Ue(u,l);const f=n?u.shape[u.rank-2]:u.shape[u.rank-1],h=r?l.shape[l.rank-1]:l.shape[l.rank-2],p=n?u.shape[u.rank-1]:u.shape[u.rank-2],y=r?l.shape[l.rank-2]:l.shape[l.rank-1],v=u.shape.slice(0,-2),w=l.shape.slice(0,-2),k=qe(v),S=qe(w);$(f===h,()=>`Error in fused matMul: inner shapes (${f}) and (${h}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);const T=nt(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([p,y]),x=n?j(u,[k,f,p]):j(u,[k,p,f]),C=r?j(l,[S,y,h]):j(l,[S,h,y]);let P;s!=null&&(P=E(s,"bias","fused matMul"),[P]=Ue(P,u),nt(T,P.shape));let F;o!=null&&(F=E(o,"prelu weights","fused matMul"));const L=(V,ee)=>{const[J,ie,oe,fe]=ee,Ee=Id(j(V,oe.shape),oe,i);let K,Q;if(!n&&!r?(K=ke(Ee,ie,!1,!0),Q=ke(J,Ee,!0,!1)):!n&&r?(K=ke(Ee,ie,!1,!1),Q=ke(Ee,J,!0,!1)):n&&!r?(K=ke(ie,Ee,!1,!0),Q=ke(J,Ee,!1,!1)):(K=ke(ie,Ee,!0,!0),Q=ke(Ee,J,!0,!0)),s!=null){const ne=Ad(fe,Ee);return[K,Q,ne]}else return[K,Q]},M={a:x,b:C,bias:P,preluActivationWeights:F},B={transposeA:n,transposeB:r,activation:i,leakyreluAlpha:a};return s==null?vr((ee,J,ie)=>{const oe=D.runKernel(xg,M,B);return ie([ee,J,oe]),{value:j(oe,T),gradFunc:L}})(x,C):vr((ee,J,ie,oe)=>{const fe=D.runKernel(xg,M,B);return oe([ee,J,fe,ie]),{value:j(fe,T),gradFunc:L}})(x,C,P)}const rF=A({fusedMatMul_:nF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sF=Object.freeze(Object.defineProperty({__proto__:null,conv2d:QR,depthwiseConv2d:tF,matMul:rF},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iF(e){return Od(e,.54,.46)}const oF=A({hammingWindow_:iF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aF(e){return Od(e,.5,.5)}const jb=A({hannWindow_:aF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uF(e,t,n,r=!1,s=0){let i=0;const o=[];for(;i+t<=e.size;)o.push(ae(e,i,t)),i+=n;if(r)for(;i<e.size;){const a=i+t-e.size,u=ut([ae(e,i,t-a),ca([a],s)]);o.push(u),i+=n}return o.length===0?Es([],[0,t]):j(ut(o),[o.length,t])}const Mb=A({frame_:uF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lF(e,t,n,r,s=jb){r==null&&(r=Bb(t));const i=Mb(e,t,n),o=q(i,s(t));return $d(o,r)}const cF=A({stft_:lF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fF(e,t,n,r,s="bilinear",i=0){const o=E(e,"image","cropAndResize"),a=E(t,"boxes","cropAndResize","float32"),u=E(n,"boxInd","cropAndResize","int32"),l=a.shape[0];$(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),$(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${a.shape}.`),$(u.rank===1&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${a.shape}.`),$(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),$(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),$(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:o,boxes:a,boxInd:u},h={method:s,extrapolationValue:i,cropSize:r};return D.runKernel(k_,f,h)}const hF=A({cropAndResize_:fF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pF(e){const t=E(e,"image","flipLeftRight","float32");$(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return D.runKernel(H_,n,{})}const dF=A({flipLeftRight_:pF});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mF(e){const t=E(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];$(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),$(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,ko(t,s)}const yF=A({grayscaleToRGB_:mF});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gF(e){const t=E(e,"image","RGBToGrayscale"),n=t.rank-1,r=t.shape[n];$(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),$(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=t.dtype,i=ze(t,"float32"),o=dt([.2989,.587,.114]);let a;switch(t.rank){case 2:a=Qs("ij,j->i",i,o);break;case 3:a=Qs("ijk,k->ij",i,o);break;case 4:a=Qs("ijkl,l->ijk",i,o);break;case 5:a=Qs("ijklm,m->ijkl",i,o);break;case 6:a=Qs("ijklmn,n->ijklm",i,o);break;default:throw new Error("Not a valid tensor rank.")}return a=Vn(a,-1),ze(a,s)}const vF=A({rgbToGrayscale_:gF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wF(e,t,n=0,r=.5){const s=E(e,"image","rotateWithOffset","float32");$(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const i={image:s},o={radians:t,fillValue:n,center:r};return D.runKernel(PO,i,o)}const bF=A({rotateWithOffset_:wF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ji(e,t,n,r,s,i){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),i==null&&(i=0);const o=e.shape[0];return n=Math.min(n,o),$(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),$(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),$(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),$(t.rank===1,()=>"scores must be a 1D tensor"),$(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),$(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=E(e,"boxes","nonMaxSuppression","float32"),o=E(t,"scores","nonMaxSuppression","float32"),a=ji(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const u={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return D.runKernel(_$,{boxes:i,scores:o},u)}const NF=A({nonMaxSuppression_:SF});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EF(e,t,n){const r=TF(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function TF(e,t,n){return xF(e,t,n||kF)}function kF(e,t){return e>t?1:e<t?-1:0}function xF(e,t,n){let r=0,s=e.length,i=0,o=!1;for(;r<s;){i=r+(s-r>>>1);const a=n(t,e[i]);a>0?r=i+1:(s=i,o=!a)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _F(e,t,n,r,s){return Pd(e,t,n,r,s,0)}function $F(e,t,n,r,s,i){return Pd(e,t,n,r,s,0,!1,i,!0)}function OF(e,t,n,r,s,i){return Pd(e,t,n,r,s,i,!0)}function Pd(e,t,n,r,s,i,o=!1,a=!1,u=!1){const l=[];for(let k=0;k<t.length;k++)t[k]>s&&l.push({score:t[k],boxIndex:k,suppressBeginIndex:0});l.sort(Bg);const f=i>0?-.5/i:0,h=[],p=[];for(;h.length<n&&l.length>0;){const k=l.pop(),{score:S,boxIndex:N,suppressBeginIndex:T}=k;if(S<s)break;let x=!1;for(let C=h.length-1;C>=T;--C){const P=IF(e,N,h[C]);if(P>=r){x=!0;break}if(k.score=k.score*AF(r,f,P),k.score<=s)break}k.suppressBeginIndex=h.length,x||(k.score===S?(h.push(N),p.push(k.score)):k.score>s&&EF(l,k,Bg))}const y=h.length,v=n-y;a&&v>0&&(h.push(...new Array(v).fill(0)),p.push(...new Array(v).fill(0)));const w={selectedIndices:h};return o&&(w.selectedScores=p),u&&(w.validOutputs=y),w}function IF(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),i=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),h=Math.max(s[0],s[2]),p=Math.max(s[1],s[3]),y=(a-i)*(u-o),v=(h-l)*(p-f);if(y<=0||v<=0)return 0;const w=Math.max(i,l),k=Math.max(o,f),S=Math.min(a,h),N=Math.min(u,p),T=Math.max(S-w,0)*Math.max(N-k,0);return T/(y+v-T)}function AF(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function Bg(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function CF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=E(e,"boxes","nonMaxSuppressionAsync"),o=E(t,"scores","nonMaxSuppressionAsync"),a=ji(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const u=await Promise.all([i.data(),o.data()]),l=u[0],f=u[1],{selectedIndices:h}=_F(l,f,n,r,s);return i!==e&&i.dispose(),o!==t&&o.dispose(),dt(h,"int32")}const DF=CF;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=E(e,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),u=ji(o,a,n,r,s,i);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,i=u.softNmsSigma;const l={boxes:o,scores:a},f={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i},h=D.runKernel(O$,l,f);return{selectedIndices:h[0],selectedScores:h[1]}}const RF=A({nonMaxSuppressionWithScore_:PF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function FF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=E(e,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),u=ji(o,a,n,r,s,i);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,i=u.softNmsSigma;const l=await Promise.all([o.data(),a.data()]),f=l[0],h=l[1],{selectedIndices:p,selectedScores:y}=OF(f,h,n,r,s,i);return o!==e&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:dt(p,"int32"),selectedScores:dt(y)}}const LF=FF;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=E(e,"boxes","nonMaxSuppression"),a=E(t,"scores","nonMaxSuppression"),u=ji(o,a,n,r,s,null),l=u.maxOutputSize,f=u.iouThreshold,h=u.scoreThreshold,p={boxes:o,scores:a},y={maxOutputSize:l,iouThreshold:f,scoreThreshold:h,padToMaxOutputSize:i},v=D.runKernel($$,p,y);return{selectedIndices:v[0],validOutputs:v[1]}}const BF=A({nonMaxSuppressionPadded_:zF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function jF(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=E(e,"boxes","nonMaxSuppressionAsync"),a=E(t,"scores","nonMaxSuppressionAsync"),u=ji(o,a,n,r,s,null),l=u.maxOutputSize,f=u.iouThreshold,h=u.scoreThreshold,[p,y]=await Promise.all([o.data(),a.data()]),{selectedIndices:v,validOutputs:w}=$F(p,y,l,f,h,i);return o!==e&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:dt(v,"int32"),validOutputs:ye(w,"int32")}}const MF=jF;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UF(e,t,n=!1,r=!1){const s=E(e,"images","resizeBilinear");$(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),$(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),$(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=j(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},u={alignCorners:n,halfPixelCenters:r,size:t},l=D.runKernel(K$,a,u);return o?j(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const VF=A({resizeBilinear_:UF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HF(e,t,n=!1,r=!1){const s=E(e,"images","resizeNearestNeighbor");$(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),$(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),$(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),$(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=j(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},u={alignCorners:n,halfPixelCenters:r,size:t},l=D.runKernel(W$,a,u);return o?j(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const WF=A({resizeNearestNeighbor_:HF});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KF(e,t="binary",n=!1,r=.5){const s=E(e,"image","threshold"),i=.2989,o=.587,a=.114,u=s.shape[0]*s.shape[1];let l=q(dt([r]),255),f,h,p,y;if($(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),$(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),$(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),$(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[f,h,p]=Zo(s,[1,1,1],-1);const k=q(f,i),S=q(h,o),N=q(p,a);y=te(te(k,S),N)}else y=e;if(t==="otsu"){const k=ub(ze(Cb(y),"int32"),Xn([]),256);l=qF(k,u)}const v=n?yd(y,l):Gl(y,l);return ze(q(v,255),"int32")}function qF(e,t){let n=dt([-1]),r=dt([0]),s=dt([0]),i,o,a,u,l,f;for(let h=0;h<e.size-1;h++){i=ae(e,0,h+1),o=ae(e,h+1),l=he($e(i),t),f=he($e(o),t);const p=$e(q(i,Yo(0,i.size)));a=he(p,$e(i));const y=ca(o.shape,i.size),v=te(Yo(0,o.size),y),w=q(o,v);u=he($e(w),$e(o));const k=ue(a,u),S=ue(a,u),N=q(l,f);s=q(q(N,k),S);const T=Gl(s,r);r=Hr(T,s,r),n=Hr(T,dt([h]),n)}return n}const GF=A({threshold_:KF});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QF(e,t,n="nearest",r="constant",s=0,i){const o=E(e,"image","transform","float32"),a=E(t,"transforms","transform","float32");$(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),$(a.rank===2&&(a.shape[0]===o.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),$(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const u={image:o,transforms:a},l={interpolation:n,fillMode:r,fillValue:s,outputShape:i};return D.runKernel($O,u,l)}const XF=A({transform_:QF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YF(e,t,n){const r=E(e,"a","bandPart");$(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[i,o]=r.shape.slice(-2);let a,u;typeof t=="number"?($(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),$(t<=i,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`),a=E(t<0?i:t,"numLower","bandPart")):($(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Hr(Bh(t,0),i,al(t,i))),typeof n=="number"?($(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),$(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),u=E(n<0?o:n,"numUpper","bandPart")):($(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=Hr(Bh(n,0),o,al(n,o)));const l=j(Yo(0,i,1,"int32"),[-1,1]),f=Yo(0,o,1,"int32"),h=ue(l,f),p=il(yd(h,a),gb(h,Yn(u))),y=Ci([i,o],r.dtype);return j(wr(js(j(r,[-1,i,o])).map(v=>Hr(p,v,y))),s)}const JF=A({bandPart_:YF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZF(e){let t;if(Array.isArray(e)){t=!1,$(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let i=1;i<e.length;++i)$(e[i].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[i].shape[0]} vs. ${s})`)}else t=!0,e=Zo(e,e.shape[0],0).map(s=>rt(s,[0]));$(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(D.tidy(()=>{let i=r[s];if(s>0)for(let o=0;o<s;++o){const a=q($e(q(n[o],i)),n[o]);i=ue(i,a)}return he(i,ql(i,"euclidean"))}));return t?wr(n,0):n}const e4=A({gramSchmidt_:ZF});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t4(e,t=!1){if($(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return jg(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((u,l)=>u*l),r=js(j(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],i=[];r.forEach(u=>{const[l,f]=jg(u,t);s.push(l),i.push(f)});const o=j(wr(s,0),e.shape),a=j(wr(i,0),e.shape);return[o,a]}}function jg(e,t=!1){return D.tidy(()=>{$(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=db(n),i=Vr(e);const o=Es([[1]],[1,1]);let a=Vr(o);const u=n>=r?r:n;for(let l=0;l<u;++l){const f=i,h=a,p=s;[a,i,s]=D.tidy(()=>{const y=ae(i,[l,l],[n-l,1]),v=ql(y),w=ae(i,[l,l],[1,1]),k=Hr(Gl(w,0),Es([[-1]]),Es([[1]])),S=ue(w,q(k,v)),N=he(y,S);N.shape[0]===1?a=Vr(o):a=ut([o,ae(N,[1,0],[N.shape[0]-1,N.shape[1]])],0);const T=Yn(he(ke(k,S),v)),x=ae(i,[l,0],[n-l,r]),C=q(T,a),P=jh(a);if(l===0)i=ue(x,ke(C,ke(P,x)));else{const M=ue(x,ke(C,ke(P,x)));i=ut([ae(i,[0,0],[l,r]),M],0)}const F=jh(C),L=ae(s,[0,l],[n,s.shape[1]-l]);if(l===0)s=ue(L,ke(ke(L,a),F));else{const M=ue(L,ke(ke(L,a),F));s=ut([ae(s,[0,0],[n,l]),M],1)}return[a,i,s]}),Fe([f,h,p])}return!t&&n>r&&(s=ae(s,[0,0],[n,r]),i=ae(i,[0,0],[r,r])),[s,i]})}const n4=A({qr_:t4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var _t;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(_t||(_t={}));function r4(e,t,n=_t.SUM_BY_NONZERO_WEIGHTS){const r=E(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=E(t,"weights","computeWeightedLoss"));const i=s==null?r:q(r,s);if(n===_t.NONE)return i;if(n===_t.SUM)return $e(i);if(n===_t.MEAN){if(s==null)return ol(i);{const o=r.size/s.size,a=he($e(i),$e(s));return o>1?he(a,ye(o)):a}}if(n===_t.SUM_BY_NONZERO_WEIGHTS){if(s==null)return he($e(i),ye(r.size));{const o=q(s,gs(r.shape)),a=ze($e(xb(o,ye(0))),"float32");return he($e(i),a)}}throw Error(`Unknown reduction: ${n}`)}const Sr=A({computeWeightedLoss_:r4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s4(e,t,n,r=_t.SUM_BY_NONZERO_WEIGHTS){const s=E(e,"labels","absoluteDifference"),i=E(t,"predictions","absoluteDifference");let o=null;n!=null&&(o=E(n,"weights","absoluteDifference")),hn(s.shape,i.shape,"Error in absoluteDifference: ");const a=Kt(ue(s,i));return Sr(a,o,r)}const i4=A({absoluteDifference_:s4});function o4(e,t,n,r,s=_t.SUM_BY_NONZERO_WEIGHTS){const i=E(e,"labels","cosineDistance"),o=E(t,"predictions","cosineDistance");let a=null;r!=null&&(a=E(r,"weights","cosineDistance")),hn(i.shape,o.shape,"Error in cosineDistance: ");const u=ye(1),l=ue(u,$e(q(i,o),n,!0));return Sr(l,a,s)}const a4=A({cosineDistance_:o4});function u4(e,t,n,r=_t.SUM_BY_NONZERO_WEIGHTS){let s=E(e,"labels","hingeLoss");const i=E(t,"predictions","hingeLoss");let o=null;n!=null&&(o=E(n,"weights","hingeLoss")),hn(s.shape,i.shape,"Error in hingeLoss: ");const a=ye(1);s=ue(q(ye(2),s),a);const u=Xl(ue(a,q(s,i)));return Sr(u,o,r)}const l4=A({hingeLoss_:u4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(e,t,n,r=1,s=_t.SUM_BY_NONZERO_WEIGHTS){const i=E(e,"labels","huberLoss"),o=E(t,"predictions","huberLoss");let a=null;n!=null&&(a=E(n,"weights","huberLoss")),hn(i.shape,o.shape,"Error in huberLoss: ");const u=ye(r),l=Kt(ue(o,i)),f=al(l,u),h=ue(l,f),p=te(q(ye(.5),_n(f)),q(u,h));return Sr(p,a,s)}const f4=A({huberLoss_:c4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h4(e,t,n,r=1e-7,s=_t.SUM_BY_NONZERO_WEIGHTS){const i=E(e,"labels","logLoss"),o=E(t,"predictions","logLoss");let a=null;n!=null&&(a=E(n,"weights","logLoss")),hn(i.shape,o.shape,"Error in logLoss: ");const u=ye(1),l=ye(r),f=Yn(q(i,Xo(te(o,l)))),h=q(ue(u,i),Xo(te(ue(u,o),l))),p=ue(f,h);return Sr(p,a,s)}const p4=A({logLoss_:h4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d4(e,t,n,r=_t.SUM_BY_NONZERO_WEIGHTS){const s=E(e,"labels","meanSquaredError"),i=E(t,"predictions","meanSquaredError");let o=null;n!=null&&(o=E(n,"weights","meanSquaredError")),hn(s.shape,i.shape,"Error in meanSquaredError: ");const a=Pb(s,i);return Sr(a,o,r)}const m4=A({meanSquaredError_:d4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y4(e,t){const n=E(e,"labels","sigmoidCrossEntropyWithLogits"),r=E(t,"logits","sigmoidCrossEntropyWithLogits");hn(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Xl(r),i=q(r,n),o=wb(gr(Yn(Kt(r))));return te(ue(s,i),o)}function g4(e,t,n,r=0,s=_t.SUM_BY_NONZERO_WEIGHTS){let i=E(e,"multiClassLabels","sigmoidCrossEntropy");const o=E(t,"logits","sigmoidCrossEntropy");let a=null;if(n!=null&&(a=E(n,"weights","sigmoidCrossEntropy")),hn(i.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=ye(r),f=ye(1),h=ye(.5);i=te(q(i,ue(f,l)),q(h,l))}const u=y4(i,o);return Sr(u,a,s)}const v4=A({sigmoidCrossEntropy_:g4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w4(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return vr((s,i,o)=>{const u=Sb(i,[n],!0),l=ue(ze(i,"float32"),u);o([s,l]);const f=Yn(q(l,s));return{value:$e(f,[n]),gradFunc:(y,v)=>{const[w,k]=v,S=Kl(y.shape,[n]);return[q(j(y,S),ue(ze(w,"float32"),gr(k))),q(j(y,S),ue(gr(k),ze(w,"float32")))]}}})(e,t)}function b4(e,t,n,r=0,s=_t.SUM_BY_NONZERO_WEIGHTS){let i=E(e,"onehotLabels","softmaxCrossEntropy");const o=E(t,"logits","softmaxCrossEntropy");let a=null;if(n!=null&&(a=E(n,"weights","softmaxCrossEntropy")),hn(i.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const l=ye(r),f=ye(1),h=ye(i.shape[1]);i=te(q(i,ue(f,l)),he(l,h))}const u=w4(i,o);return Sr(u,a,s)}const S4=A({softmaxCrossEntropy_:b4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N4(e,t,n,r){const s=E(e,"indices","sparseFillEmptyRows","int32"),i=E(t,"values","sparseFillEmptyRows"),o=E(n,"denseShape","sparseFillEmptyRows","int32"),a=E(r,"defaultValue","sparseFillEmptyRows",i.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(i.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${i.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const u={indices:s,values:i,denseShape:o,defaultValue:a},l=D.runKernel(pO,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const E4=A({sparseFillEmptyRows_:N4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T4(e,t,n){const r=E(e,"inputIndices","sparseReshape","int32"),s=E(t,"inputShape","sparseReshape","int32"),i=E(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${i.shape}`);const o={inputIndices:r,inputShape:s,newShape:i},a=D.runKernel(dO,o);return{outputIndices:a[0],outputShape:a[1]}}const k4=A({sparseReshape_:T4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x4(e,t,n){const r=E(e,"data","sparseSegmentMean"),s=E(t,"indices","sparseSegmentMean","int32"),i=E(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${i.shape}`);const o={data:r,indices:s,segmentIds:i};return D.runKernel(mO,o)}const _4=A({sparseSegmentMean_:x4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $4(e,t,n){const r=E(e,"data","sparseSegmentSum"),s=E(t,"indices","sparseSegmentSum","int32"),i=E(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${i.shape}`);const o={data:r,indices:s,segmentIds:i};return D.runKernel(yO,o)}const O4=A({sparseSegmentSum_:$4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I4(e,t,n,r,s,i,o,a){const u=E(e,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=E(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:n,nGramWidths:r,leftPad:s,rightPad:i,padWidth:o,preserveShortSequences:a},h={data:u,dataSplits:l},p=D.runKernel(SO,h,f);return{nGrams:p[0],nGramsSplits:p[1]}}const A4=A({stringNGrams_:I4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C4(e,t,n=!0){const r=E(e,"input","stringSplit","string"),s=E(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const i={skipEmpty:n},o={input:r,delimiter:s},a=D.runKernel(NO,o,i);return{indices:a[0],values:a[1],shape:a[2]}}const D4=A({stringSplit_:C4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P4(e,t){const n=E(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return D.runKernel(EO,s,r)}const R4=A({stringToHashBucketFast_:P4});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F4(e,t,n,r=!0){const s=E(e,"input","staticRegexReplace","string"),i={pattern:t,rewrite:n,replaceGlobal:r};return D.runKernel(wO,{x:s},i)}const L4=A({staticRegexReplace_:F4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z4={fft:_d,ifft:ul,rfft:$d,irfft:Db},B4={hammingWindow:oF,hannWindow:jb,frame:Mb,stft:cF},Yl={flipLeftRight:dF,grayscaleToRGB:yF,resizeNearestNeighbor:WF,resizeBilinear:VF,rgbToGrayscale:vF,rotateWithOffset:bF,cropAndResize:hF,nonMaxSuppression:NF,nonMaxSuppressionAsync:DF,nonMaxSuppressionWithScore:RF,nonMaxSuppressionWithScoreAsync:LF,nonMaxSuppressionPadded:BF,nonMaxSuppressionPaddedAsync:MF,threshold:GF,transform:XF},j4={bandPart:JF,gramSchmidt:e4,qr:n4},M4={absoluteDifference:i4,computeWeightedLoss:Sr,cosineDistance:a4,hingeLoss:l4,huberLoss:f4,logLoss:p4,meanSquaredError:m4,sigmoidCrossEntropy:v4,softmaxCrossEntropy:S4},U4={sparseFillEmptyRows:E4,sparseReshape:k4,sparseSegmentMean:_4,sparseSegmentSum:O4},V4={stringNGrams:A4,stringSplit:D4,stringToHashBucketFast:R4,staticRegexReplace:L4};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H4=new Map,W4=new Map;class K4{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class ls{constructor(){this.classNameMap={}}static getMap(){return ls.instance==null&&(ls.instance=new ls),ls.instance}static register(t){ls.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function q4(e,t,n){$(e.className!=null,()=>"Class being registered does not have the static className property defined."),$(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),$(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const r=n,s=t+">"+r;return ls.register(e),H4.set(s,e),W4.set(e,s),e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ms extends K4{minimize(t,n=!1,r){const{value:s,grads:i}=this.computeGradients(t,r);if(r!=null){const o=r.map(a=>({name:a.name,tensor:i[a.name]}));this.applyGradients(o)}else this.applyGradients(i);return Fe(i),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return _3(t,n)}dispose(){this.iterations_!=null&&Fe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ye(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Ms,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class G4 extends Ms{static get className(){return"Adadelta"}constructor(t,n,r=null){super(),this.learningRate=t,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=D.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:de(()=>Qt(i).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:de(()=>Qt(i).variable(o))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const u=this.accumulatedGrads[s].variable,l=this.accumulatedUpdates[s].variable;de(()=>{const f=te(q(u,this.rho),q(_n(a),1-this.rho)),h=q(he(yr(te(l,this.epsilon)),yr(te(u,this.epsilon))),a),p=te(q(l,this.rho),q(_n(h),1-this.rho));u.assign(f),l.assign(p);const y=te(q(h,-this.learningRate),i);i.assign(y)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Fe(this.accumulatedGrads.map(t=>t.variable)),Fe(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Q4 extends Ms{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=D.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:de(()=>ca(i.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(t)?t[s].tensor:t[r];if(o==null)return;const a=this.accumulatedGrads[s].variable;de(()=>{const u=te(a,_n(o));a.assign(u);const l=te(q(he(o,yr(te(u,D.backend.epsilon()))),-this.learningRate),i);i.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Fe(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class X4 extends Ms{static get className(){return"Adam"}constructor(t,n,r,s=null){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],de(()=>{this.accBeta1=ye(n).variable(),this.accBeta2=ye(r).variable()}),s==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);de(()=>{const r=ue(1,this.accBeta1),s=ue(1,this.accBeta2);n.forEach((i,o)=>{const a=D.registeredVariables[i],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:de(()=>Qt(a).variable(u))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${i}/v`,variable:de(()=>Qt(a).variable(u))});const l=Array.isArray(t)?t[o].tensor:t[i];if(l==null)return;const f=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,p=te(q(f,this.beta1),q(l,1-this.beta1)),y=te(q(h,this.beta2),q(_n(l),1-this.beta2)),v=he(p,r),w=he(y,s);f.assign(p),h.assign(y);const k=te(q(he(v,te(yr(w),this.epsilon)),-this.learningRate),a);a.assign(k)}),this.accBeta1.assign(q(this.accBeta1,this.beta1)),this.accBeta2.assign(q(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Fe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Fe(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),de(()=>{this.accBeta1.assign(Qo(this.beta1,this.iterations_+1)),this.accBeta2.assign(Qo(this.beta2,this.iterations_+1))});const n=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y4 extends Ms{static get className(){return"Adamax"}constructor(t,n,r,s=null,i=0){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],de(()=>{this.iteration=ye(0).variable(),this.accBeta1=ye(n).variable()}),s==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);de(()=>{const r=ue(1,this.accBeta1),s=he(-this.learningRate,te(q(this.iteration,this.decay),1));n.forEach((i,o)=>{const a=D.registeredVariables[i],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:Qt(a).variable(u)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${i}/v`,variable:Qt(a).variable(u)});const l=Array.isArray(t)?t[o].tensor:t[i];if(l==null)return;const f=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,p=te(q(f,this.beta1),q(l,1-this.beta1)),y=q(h,this.beta2),v=Kt(l),w=kb(y,v);f.assign(p),h.assign(w);const k=te(q(he(s,r),he(p,te(w,this.epsilon))),a);a.assign(k)}),this.iteration.assign(te(this.iteration,1)),this.accBeta1.assign(q(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Fe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Fe(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ub extends Ms{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const o=D.registeredVariables[r];de(()=>{const a=te(q(this.c,i),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Kn(ye(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J4 extends Ub{static get className(){return"Momentum"}constructor(t,n,r=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=ye(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=D.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:de(()=>Qt(i).variable(!1))});const o=this.accumulations[s].variable,a=Array.isArray(t)?t[s].tensor:t[r];a!=null&&de(()=>{let u;const l=te(q(this.m,o),a);this.useNesterov?u=te(q(this.c,te(a,q(l,this.m))),i):u=te(q(this.c,l),i),o.assign(l),i.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Fe(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Z4 extends Ms{static get className(){return"RMSProp"}constructor(t,n=.9,r=0,s=null,i=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,s==null&&(this.epsilon=D.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const i=D.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:de(()=>Qt(i).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:de(()=>Qt(i).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:de(()=>Qt(i).variable(o))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const u=this.accumulatedMeanSquares[s].variable,l=this.accumulatedMoments[s].variable;de(()=>{const f=te(q(u,this.decay),q(_n(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[s].variable,p=te(q(h,this.decay),q(a,1-this.decay)),y=he(q(a,this.learningRate),yr(ue(f,te(_n(p),this.epsilon)))),v=te(q(l,this.momentum),y);u.assign(f),h.assign(p),l.assign(v);const w=ue(i,v);i.assign(w)}else{const h=te(q(u,this.decay),q(_n(a),1-this.decay)),p=te(q(l,this.momentum),he(q(a,this.learningRate),yr(te(h,this.epsilon))));u.assign(h),l.assign(p);const y=ue(i,p);i.assign(y)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Fe(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Fe(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Fe(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eL=[G4,Q4,X4,Y4,J4,Z4,Ub];function tL(){for(const e of eL)q4(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nL="model",rL=".json",sL=".weights.bin";function Mg(e){return new Promise(t=>setTimeout(t)).then(e)}class Ps{constructor(t){if(!pe().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Ps.URL_SCHEME)&&(t=t.slice(Ps.URL_SCHEME.length)),(t==null||t.length===0)&&(t=nL),this.modelJsonFileName=t+rL,this.weightDataFileName=t+sL}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=An.join(t.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],i=Qw(t,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=o,await Mg(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=r,await Mg(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:la(t)}}}}Ps.URL_SCHEME="downloads://";class iL{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const i=JSON.parse(s.target.result),o=i.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(i.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const u=pd(i,l=>this.loadWeights(l));t(u)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const o of t)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(t),i=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(i).then(o=>[n,o])}loadWeightsFile(t,n){return new Promise((r,s)=>{const i=new FileReader;i.onload=o=>{const a=o.target.result;r(a)},i.onerror=o=>s(`Failed to weights data from file of path '${t}'.`),i.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(i=>zg(i.name)),s={};for(const i of t)i.paths.forEach(o=>{const a=zg(o);if(n.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(n.push(a),r.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(a)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const oL=e=>pe().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ps.URL_SCHEME)?aL(e.slice(Ps.URL_SCHEME.length)):null;Pe.registerSaveRouter(oL);function aL(e="model"){return new Ps(e)}function uL(e){return new iL(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(e,t,n,r){o(e),n=n??0,r=r??1,a(n,r);let s=0;const i=u=>(u.then(l=>{const f=n+ ++s/e.length*(r-n);return t(f),l}),u);function o(u){$(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function a(u,l){$(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),$(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),$(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(e.map(i))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Vb(e,t){t==null&&(t={});const n=t.fetchFunc==null?pe().platform.fetch:t.fetchFunc,r=e.map(h=>n(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(r):await Ug(r,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await Ug(a,t.onProgress,.5,1)}function lL(e,t){var n;const r=t.fetchFunc==null?pe().platform.fetch:t.fetchFunc;let s=0,i;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async o=>{for(var a;s<e.length;){i||(i=(await r(e[s],t.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:l}=await i.read();if(u){s++,i=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,s/e.length);continue}o.enqueue(l);return}o.close()}})}async function cL(e,t="",n,r){return Hb(o=>Vb(o,{requestInit:r}))(e,t,n)}function Hb(e){return async(t,n="",r)=>{const s=t.map(()=>!1),i={},o=r!=null?r.map(()=>!1):[],a=[];if(t.forEach((y,v)=>{let w=0;y.weights.forEach(k=>{const S="quantization"in k?k.quantization.dtype:k.dtype,N=Is[S]*qe(k.shape),T=()=>{s[v]=!0,i[v]==null&&(i[v]=[]),i[v].push({manifestEntry:k,groupOffset:w,sizeBytes:N})};r!=null?r.forEach((x,C)=>{x===k.name&&(T(),o[C]=!0)}):T(),a.push(k.name),w+=N})}),!o.every(y=>y)){const y=r.filter((v,w)=>!o[w]);throw new Error(`Could not find weights in manifest with names: ${y.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const u=s.reduce((y,v,w)=>(v&&y.push(w),y),[]),l=[];u.forEach(y=>{t[y].paths.forEach(v=>{const w=n+(n.endsWith("/")?"":"/")+v;l.push(w)})});const f=await e(l),h={};let p=0;return u.forEach(y=>{const v=t[y].paths.length,w=new An(f.slice(p,p+v));i[y].forEach(S=>{const N=w.slice(S.groupOffset,S.groupOffset+S.sizeBytes),T=Kw(N,[S.manifestEntry]);for(const x in T)h[x]=T[x]}),p+=v}),h}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fL="application/octet-stream",hL="application/json";class Rd{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?($(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=pe().platform.fetch,$(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&$(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=Qw(t,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:hL}),"model.json"),t.weightData!=null){const o=An.join(t.weightData);n.body.append("model.weights.bin",new Blob([o],{type:fL}),"model.weights.bin")}const i=await this.fetch(this.path,n);if(i.ok)return{modelArtifactsInfo:la(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return pd(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),r=Ch(t.weightsManifest),s=()=>lL(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=pL(n),i=this.weightPathPrefix||r,o=[],a=[];for(const u of t)for(const l of u.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(l)):o.push(i+l+s);return this.weightUrlConverter&&o.push(...await Promise.all(a)),o}async loadWeights(t){const n=await this.getWeightUrls(t),r=Ch(t),s=await Vb(n,this.loadOptions);return[r,s]}}Rd.URL_SCHEME_REGEX=/^https?:\/\//;function pL(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function Mh(e){return e.match(Rd.URL_SCHEME_REGEX)!=null}const Wb=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>Mh(r)):n=Mh(e),n)return Fd(e,t)}return null};Pe.registerSaveRouter(Wb);Pe.registerLoadRouter(Wb);function Fd(e,t){return new Rd(e,t)}function dL(e,t){return Fd(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sf{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Kb{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class mL{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function yL(e,t,n,r){const s=arguments;return new mL(qb(...s))}function qb(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new sf(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new sf({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new sf({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function gL(e){return new Kb(e)}function vL(e){return new Kb(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gb=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:An,browserFiles:uL,browserHTTPRequest:dL,concatenateArrayBuffers:fI,copyModel:DI,decodeWeights:Kw,decodeWeightsStream:Gw,encodeWeights:iI,fromMemory:yL,fromMemorySync:qb,getLoadHandlers:wI,getModelArtifactsForJSON:pd,getModelArtifactsForJSONSync:Xw,getModelArtifactsInfoForJSON:la,getSaveHandlers:vI,getWeightSpecs:Ch,http:Fd,isHTTPScheme:Mh,listModels:AI,loadWeights:cL,moveModel:PI,registerLoadRouter:gI,registerSaveRouter:yI,removeModel:CI,weightsLoaderFactory:Hb,withSaveHandler:gL,withSaveHandlerSync:vL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let os,Vg=!1;function wL(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,i=!1,o=!1,a=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)i=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Zu(kg,D.backendName)!=null){const v={pixels:e},w={numChannels:t};return D.runKernel(kg,v,w)}const[l,f]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let h;if(o)h=e.getContext("2d").getImageData(0,0,l,f).data;else if(r||n)h=e.data;else if(i||s||a){if(os==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")os=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else os=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});os.canvas.width=l,os.canvas.height=f,os.drawImage(e,0,0,l,f),h=os.getImageData(0,0,l,f).data}let p;if(t===4)p=new Int32Array(h);else{const v=l*f;p=new Int32Array(v*t);for(let w=0;w<v;w++)for(let k=0;k<t;++k)p[w*t+k]=h[w*4+k]}return Fb(p,[f,l,t],"int32")}function bL(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}async function SL(e,t){let n=E(e,"img","toPixels");if(!(e instanceof Qe)){const l=n;n=ze(l,"int32"),l.dispose()}bL(n);const[r,s]=n.shape.slice(0,2),i=n.rank===2?1:n.shape[2],o=await n.data(),a=n.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const f=[0,0,0,255];for(let p=0;p<i;p++){const y=o[l*i+p];if(n.dtype==="float32"){if(y<0||y>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${y}.`)}else if(n.dtype==="int32"&&(y<0||y>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${y}.`);i===1?(f[0]=y*a,f[1]=y*a,f[2]=y*a):f[p]=y*a}const h=l*4;u[h+0]=Math.round(f[0]),u[h+1]=Math.round(f[1]),u[h+2]=Math.round(f[2]),u[h+3]=Math.round(f[3])}if(t!=null){Vg||Zu(D_,D.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Vg=!0),t.width=s,t.height=r;const l=t.getContext("2d"),f=new ImageData(u,s,r);l.putImageData(f,0,0)}return n!==e&&n.dispose(),u}const NL=A({fromPixels_:wL});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */tL();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EL=pe();EL.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Ft;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ft||(Ft={}));var Hg;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(Hg||(Hg={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TL={};function Qb(e){return TL[e]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m(e,t,n,r,s){const i=t.inputParams[e];if(i&&i.inputIndexStart!==void 0){const a=i.inputIndexStart,u=i.inputIndexEnd===0?void 0:i.inputIndexEnd===void 0?a+1:i.inputIndexEnd,l=a<0?t.inputNames.length+a:a;if(i.type==="tensor")return ot(t.inputNames[l],n,r,s);if(i.type==="tensors"){const p=t.inputs.slice(a,u);return t.inputNames.slice(a,u).filter((v,w)=>{var k;return((k=p[w])===null||k===void 0?void 0:k.op)!=="NoOp"}).map(v=>ot(v,n,r,s))}const f=ot(t.inputNames[l],n,r,s),h=f.dataSync();return i.type==="number"?h[0]:xh(f.shape,h)}const o=t.attrParams[e];return o&&o.value}function ot(e,t,n,r){const[s,i]=Lt(e,n);if(r!=null){const a=r.getHashTableHandleByName(s);if(a!=null)return a}const o=n.currentContextIds.find(a=>!!t[ll(s,a)]);return o!==void 0?t[ll(s,o)][i]:void 0}function Wg(e,t,n){return t[ll(e,n.currentContextId)]}function rr(e,t){const[n,r,s]=Lt(e,t);return[ll(n,t&&t.currentContextId),r,s]}function ll(e,t){return t?`${e}-${t}`:e}function Lt(e,t){if(e==="")return["",0,void 0];const n=t!=null&&t.parseNodeNameCache!=null;if(n){const i=t.parseNodeNameCache.get(e);if(i!=null)return i}const r=e.split(":");let s;if(r.length===1)s=[e,0,void 0];else{const i=r[0],o=r.length===3?r[1]:void 0,a=Number(r[r.length-1]);s=[i,a,o]}return n&&t.parseNodeNameCache.set(e,s),s}function wu(e,t,n){let r=m("pad",e,t,n);if(r==="explicit"){r=m("explicitPaddings",e,t,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let i=0;i<4;i++)s[i][0]=r[i*2],s[i][1]=r[i*2+1];return s}return r}function sr(e){return e.kept?e:Vr(e)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kL=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],xL=Object.freeze(Object.defineProperty({__proto__:null,json:kL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _L=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],$L=Object.freeze(Object.defineProperty({__proto__:null,json:_L},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OL=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],IL=Object.freeze(Object.defineProperty({__proto__:null,json:OL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AL=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],CL=Object.freeze(Object.defineProperty({__proto__:null,json:AL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DL=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],PL=Object.freeze(Object.defineProperty({__proto__:null,json:DL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RL=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],FL=Object.freeze(Object.defineProperty({__proto__:null,json:RL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LL=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],zL=Object.freeze(Object.defineProperty({__proto__:null,json:LL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BL=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],jL=Object.freeze(Object.defineProperty({__proto__:null,json:BL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ML=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],UL=Object.freeze(Object.defineProperty({__proto__:null,json:ML},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VL=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],HL=Object.freeze(Object.defineProperty({__proto__:null,json:VL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WL=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],KL=Object.freeze(Object.defineProperty({__proto__:null,json:WL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qL=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],GL=Object.freeze(Object.defineProperty({__proto__:null,json:qL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QL=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],XL=Object.freeze(Object.defineProperty({__proto__:null,json:QL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YL=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],JL=Object.freeze(Object.defineProperty({__proto__:null,json:YL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZL=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],ez=Object.freeze(Object.defineProperty({__proto__:null,json:ZL},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tz=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],nz=Object.freeze(Object.defineProperty({__proto__:null,json:tz},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rz=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],sz=Object.freeze(Object.defineProperty({__proto__:null,json:rz},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iz=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],oz=Object.freeze(Object.defineProperty({__proto__:null,json:iz},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const az=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],uz=Object.freeze(Object.defineProperty({__proto__:null,json:az},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kg{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[xL,$L,IL,CL,PL,FL,zL,jL,UL,HL,KL,GL,XL,JL,ez,nz,sz,oz,uz],n=[].concat(...t.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,n={}){const r=t.node,s=[],i=[],o=[],a=r.reduce((w,k)=>(w[k.name]=this.mapNode(k),k.op.startsWith("Placeholder")?s.push(w[k.name]):k.op==="Const"?i.push(w[k.name]):(k.input==null||k.input.length===0)&&o.push(w[k.name]),w),{});let u=[];const l=[];let f={},h={};n!=null&&(f=this.mapSignatureEntries(n.inputs),h=this.mapSignatureEntries(n.outputs));const p=Object.keys(a);p.forEach(w=>{const k=a[w];k.inputNames.forEach((S,N)=>{const[T,,x]=rr(S),C=a[T];if(C.outputs!=null){const P=C.outputs.indexOf(x);if(P!==-1){const F=`${T}:${P}`;k.inputNames[N]=F}}k.inputs.push(C),C.children.push(k)})}),Object.keys(h).length===0?p.forEach(w=>{const k=a[w];k.children.length===0&&l.push(k)}):Object.keys(h).forEach(w=>{const[k]=rr(w),S=a[k];S!=null&&(S.signatureKey=h[w],l.push(S))}),Object.keys(f).length>0?Object.keys(f).forEach(w=>{const[k]=rr(w),S=a[k];S&&(S.signatureKey=f[w],u.push(S))}):u=s;let y={};t.library!=null&&t.library.function!=null&&(y=t.library.function.reduce((w,k)=>(w[k.signature.name]=this.mapFunction(k),w),{}));const v={nodes:a,inputs:u,outputs:l,weights:i,placeholders:s,signature:n,functions:y};return o.length>0&&(v.initNodes=o),v}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,r)=>(n[t[r].name]=r,n),{})}mapNode(t){const n=Qb(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,i)=>(s[i.name]={type:i.type,inputIndexStart:i.start,inputIndexEnd:i.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,i)=>{const o=i.type;let a;switch(i.type){case"string":a=Uh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Uh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"string[]":a=Qh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Qh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number":a=Hh(t.attr,i.tfName,i.defaultValue||0),a===void 0&&i.tfDeprecatedName&&(a=Hh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number[]":a=Gh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Gh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool":a=Vh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Vh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool[]":a=Yh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Yh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape":a=qh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=qh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape[]":a=Xh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Xh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype":a=Wh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Wh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype[]":a=Kh(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=Kh(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"func":a=qg(t.attr,i.tfName,i.defaultValue),a===void 0&&i.tfDeprecatedName&&(a=qg(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${i.type} for op: ${t.op}`)}return s[i.name]={value:a,type:o},s},{})),r}mapFunction(t){const n=t.nodeDef,r=[],s=[];let i={};n!=null&&(i=n.reduce((h,p)=>(h[p.name]=this.mapNode(p),p.op==="Const"&&s.push(h[p.name]),h),{}));const o=[],a=[];t.signature.inputArg.forEach(h=>{const[p]=rr(h.name),y={name:p,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Ld(h.type),type:"dtype"}},children:[]};y.signatureKey=h.name,o.push(y),i[p]=y}),Object.keys(i).forEach(h=>{const p=i[h];p.inputNames.forEach((y,v)=>{const[w,,k]=rr(y),S=i[w];if(S.outputs!=null){const N=S.outputs.indexOf(k);if(N!==-1){const T=`${w}:${N}`;p.inputNames[v]=T}}p.inputs.push(S),S.children.push(p)})});const l=t.ret;t.signature.outputArg.forEach(h=>{const[p,y]=rr(l[h.name]),v=i[p];v!=null&&(v.defaultOutput=y,a.push(v))});const f=this.mapArgsToSignature(t);return{nodes:i,inputs:o,outputs:a,weights:s,placeholders:r,signature:f}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:t.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,t.ret),n),{})}}mapArgToTensorInfo(t,n){let r=t.name;return n!=null&&(r=n[r]),{name:r,dtype:t.type}}}function lz(e){const t=pe().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Xb(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):lz(e);return t?n:n.toLowerCase()}function Uh(e,t,n,r=!1){const s=e[t];return s!=null?Xb(s.s,r):n}function Vh(e,t,n){const r=e[t];return r?r.b:n}function Hh(e,t,n){const r=e[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function Ld(e){switch(typeof e=="string"&&(e=Ft[e]),e){case Ft.DT_FLOAT:case Ft.DT_HALF:return"float32";case Ft.DT_INT32:case Ft.DT_INT64:case Ft.DT_INT8:case Ft.DT_UINT8:return"int32";case Ft.DT_BOOL:return"bool";case Ft.DT_DOUBLE:return"float32";case Ft.DT_STRING:return"string";case Ft.DT_COMPLEX64:case Ft.DT_COMPLEX128:return"complex64";default:return null}}function qg(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function Wh(e,t,n){const r=e[t];return r&&r.type?Ld(r.type):n}function Kh(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map(s=>Ld(s)):n}function Yb(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function qh(e,t,n){const r=e[t];return r&&r.shape?Yb(r.shape):n}function Gh(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function Qh(e,t,n,r=!1){const s=e[t];return s&&s.list&&s.list.s?s.list.s.map(i=>Xb(i,r)):n}function Xh(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Yb(s)):n}function Yh(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cz{constructor(t,n,r){this.node=t,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,i)=>(s[i]=this.getAttr(i),s),{}))}getInput(t){return ot(t,this.tensorMap,this.context)}getAttr(t,n){const r=this.node.rawAttrs[t];if(r.tensor!=null)return ot(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Hh(this.node.rawAttrs,t,n);if(r.s!=null)return Uh(this.node.rawAttrs,t,n);if(r.b!=null)return Vh(this.node.rawAttrs,t,n);if(r.shape!=null)return qh(this.node.rawAttrs,t,n);if(r.type!=null)return Wh(this.node.rawAttrs,t,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Gh(this.node.rawAttrs,t,n);if(r.list.s!=null)return Qh(this.node.rawAttrs,t,n);if(r.list.shape!=null)return Xh(this.node.rawAttrs,t,n);if(r.list.b!=null)return Yh(this.node.rawAttrs,t,n);if(r.list.type!=null)return Kh(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lt=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Ww,abs:Kt,acos:qI,acosh:QI,add:te,addN:YI,all:ZI,any:tA,argMax:rA,argMin:iA,asin:aA,asinh:lA,atan:fA,atan2:pA,atanh:mA,avgPool:ob,avgPool3d:EA,basicLSTMCell:IA,batchNorm:Hl,batchNorm2d:RA,batchNorm3d:LA,batchNorm4d:BA,batchToSpaceND:ab,bincount:ub,bitwiseAnd:UA,booleanMaskAsync:IR,broadcastArgs:HA,broadcastTo:vu,buffer:mr,cast:ze,ceil:qA,clipByValue:lb,clone:Vr,complex:qr,concat:ut,concat1d:XA,concat2d:JA,concat3d:eC,concat4d:nC,conv1d:iC,conv2d:Wl,conv2dTranspose:uC,conv3d:cC,conv3dTranspose:dC,cos:yC,cosh:vC,cosineWindow:Od,cumprod:bC,cumsum:NC,denseBincount:TC,depthToSpace:xC,depthwiseConv2d:md,diag:OC,dilation2d:AC,div:he,divNoNan:LC,dot:BC,dropout:VR,einsum:Qs,elu:hb,enclosingPowerOfTwo:Bb,ensureShape:VC,equal:fb,erf:WC,euclideanNorm:t3,exp:gr,expandDims:Vn,expm1:i3,eye:db,fft:_d,fill:ca,floor:mb,floorDiv:ib,fused:sF,gather:yb,gatherND:jR,greater:Gl,greaterEqual:gb,ifft:ul,imag:Ql,image:Yl,inTopKAsync:WR,irfft:Db,isFinite:d3,isInf:y3,isNaN:v3,leakyRelu:vb,less:Bh,lessEqual:yd,linalg:j4,linspace:N3,localResponseNormalization:T3,log:Xo,log1p:wb,logSigmoid:A3,logSoftmax:P3,logSumExp:Sb,logicalAnd:il,logicalNot:Nb,logicalOr:Eb,logicalXor:j3,losses:M4,lowerBound:U3,matMul:ke,max:yi,maxPool:Tb,maxPool3d:W3,maxPoolWithArgmax:q3,maximum:kb,mean:ol,meshgrid:X3,min:zh,minimum:al,mirrorPad:Z3,mod:tD,moments:rD,movingAverage:DR,mul:q,multiRNNCell:iD,multinomial:aD,neg:Yn,norm:ql,notEqual:xb,oneHot:cD,ones:gs,onesLike:hD,op:A,outerProduct:dD,pad:fa,pad1d:gD,pad2d:wD,pad3d:SD,pad4d:ED,pool:$D,pow:Qo,prelu:$b,print:sb,prod:AD,raggedGather:DD,raggedRange:RD,raggedTensorToTensor:LD,rand:BD,randomGamma:iP,randomNormal:Ib,randomStandardNormal:uP,randomUniform:xd,randomUniformInt:fP,range:Yo,real:Jo,reciprocal:dP,relu:Xl,relu6:Ab,reshape:j,reverse:Ds,reverse1d:wP,reverse2d:SP,reverse3d:EP,reverse4d:kP,rfft:$d,round:Cb,rsqrt:$P,scalar:ye,scatterND:RR,searchSorted:gd,selu:IP,separableConv2d:CP,setdiff1dAsync:PP,sigmoid:Ns,sign:FP,signal:B4,sin:zP,sinh:jP,slice:ae,slice1d:UP,slice2d:HP,slice3d:KP,slice4d:GP,softmax:XP,softplus:bb,spaceToBatchND:_b,sparse:U4,sparseToDense:zR,spectral:z4,split:Zo,sqrt:yr,square:_n,squaredDifference:Pb,squeeze:rt,stack:wr,step:Rb,stridedSlice:aR,string:V4,sub:ue,sum:$e,tan:lR,tanh:Lh,tensor:Xn,tensor1d:dt,tensor2d:Es,tensor3d:Fb,tensor4d:cR,tensor5d:fR,tensor6d:hR,tensorScatterUpdate:mR,tile:ko,topk:gR,transpose:jh,truncatedNormal:wR,unique:SR,unsortedSegmentSum:ER,unstack:js,upperBound:kR,variable:xR,where:Hr,whereAsync:zb,zeros:Ci,zerosLike:Qt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fz=(e,t,n,r=lt)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",e,t,n),m("b",e,t,n))];case"AddN":return[r.addN(m("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(m("a",e,t,n),m("b",e,t,n))];case"Mul":return[r.mul(m("a",e,t,n),m("b",e,t,n))];case"RealDiv":case"Div":return[r.div(m("a",e,t,n),m("b",e,t,n))];case"DivNoNan":return[r.divNoNan(m("a",e,t,n),m("b",e,t,n))];case"FloorDiv":return[r.floorDiv(m("a",e,t,n),m("b",e,t,n))];case"Sub":return[r.sub(m("a",e,t,n),m("b",e,t,n))];case"Minimum":return[r.minimum(m("a",e,t,n),m("b",e,t,n))];case"Maximum":return[r.maximum(m("a",e,t,n),m("b",e,t,n))];case"Pow":return[r.pow(m("a",e,t,n),m("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hz=(e,t,n,r=lt)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",e,t,n))];case"Acos":return[r.acos(m("x",e,t,n))];case"Acosh":return[r.acosh(m("x",e,t,n))];case"Asin":return[r.asin(m("x",e,t,n))];case"Asinh":return[r.asinh(m("x",e,t,n))];case"Atan":return[r.atan(m("x",e,t,n))];case"Atan2":return[r.atan2(m("x",e,t,n),m("y",e,t,n))];case"Atanh":return[r.atanh(m("x",e,t,n))];case"Ceil":return[r.ceil(m("x",e,t,n))];case"Complex":return[r.complex(m("real",e,t,n),m("imag",e,t,n))];case"Cos":return[r.cos(m("x",e,t,n))];case"Cosh":return[r.cosh(m("x",e,t,n))];case"Elu":return[r.elu(m("x",e,t,n))];case"Erf":return[r.erf(m("x",e,t,n))];case"Exp":return[r.exp(m("x",e,t,n))];case"Expm1":return[r.expm1(m("x",e,t,n))];case"Floor":return[r.floor(m("x",e,t,n))];case"Log":return[r.log(m("x",e,t,n))];case"Log1p":return[r.log1p(m("x",e,t,n))];case"Imag":return[r.imag(m("x",e,t,n))];case"Neg":return[r.neg(m("x",e,t,n))];case"Reciprocal":return[r.reciprocal(m("x",e,t,n))];case"Real":return[r.real(m("x",e,t,n))];case"Relu":return[r.relu(m("x",e,t,n))];case"Round":return[r.round(m("x",e,t,n))];case"Selu":return[r.selu(m("x",e,t,n))];case"Sigmoid":return[r.sigmoid(m("x",e,t,n))];case"Sin":return[r.sin(m("x",e,t,n))];case"Sign":return[r.sign(m("x",e,t,n))];case"Sinh":return[r.sinh(m("x",e,t,n))];case"Softplus":return[r.softplus(m("x",e,t,n))];case"Sqrt":return[r.sqrt(m("x",e,t,n))];case"Square":return[r.square(m("x",e,t,n))];case"Tanh":return[r.tanh(m("x",e,t,n))];case"Tan":return[r.tan(m("x",e,t,n))];case"ClipByValue":return[r.clipByValue(m("x",e,t,n),m("clipValueMin",e,t,n),m("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(m("x",e,t,n))];case"Rsqrt":return[r.rsqrt(ot(e.inputNames[0],t,n))];case"LeakyRelu":return[r.leakyRelu(m("x",e,t,n),m("alpha",e,t,n))];case"Prelu":return[r.prelu(m("x",e,t,n),m("alpha",e,t,n))];case"IsNan":return[r.isNaN(ot(e.inputNames[0],t,n))];case"IsInf":return[r.isInf(ot(e.inputNames[0],t,n))];case"IsFinite":return[r.isFinite(ot(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tn(e,t,n=""){if(!(typeof e=="number"||typeof t=="number")){$(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){const s=e[r],i=t[r];$(s<0||i<0||s===i,()=>n+` Shapes ${e} and ${t} must match`)}}}function Gg(e){return!(typeof e=="number"||e.some(t=>t<0))}function io(e,t,n){let r=Jh(e,n);const s=!Gg(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(i=>{r=Jh(i.shape,r)}),!Gg(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Jh(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const s=e[r],i=t[r];if(s>=0&&i>=0&&s!==i)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=s>=0?s:i}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pz{constructor(t,n,r,s,i,o,a){this.name=t,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=i,this.dynamicSize=o,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=ye(0),Kn(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),tn(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=n,Kn(n),r.written=!0,this.tensors[t]=r}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((r,s)=>this.write(r,n[s]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return Xn([],[0].concat(this.elementShape));const r=this.readMany(t);return tn(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),wr(r,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return Xn([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return tn(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),ut(r,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,js(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=t.map(u=>(r+=u,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const i=r===0?0:n.size/r,o=[];de(()=>{n=j(n,[1,r,i]);for(let u=0;u<t.length;++u){const f=[0,u===0?0:s[u-1],0],h=[1,t[u],i];o[u]=j(ae(n,f,h),this.elementShape)}return o});const a=[];for(let u=0;u<t.length;u++)a[u]=u;this.writeMany(a,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rs{get id(){return this.idTensor.id}constructor(t,n,r,s=-1){this.tensors=t,this.elementShape=n,this.elementDtype=r,t!=null&&t.forEach(i=>{if(r!==i.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${i.dtype}`);tn(n,i.shape,"TensorList shape mismatch: "),Kn(i)}),this.idTensor=ye(0),this.maxNumElements=s,Kn(this.idTensor)}copy(){return new Rs([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);tn(t,this.elementShape,"TensorList shape mismatch: ");const s=io(this.elementShape,this.tensors,t);return de(()=>{const i=this.tensors.map(o=>j(o,s));return wr(i,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=io(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,tn(s.shape,t,"TensorList shape mismatch: "),j(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(tn(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Kn(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new Rs([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)n.tensors[r]=this.tensors[r];return n}getItem(t,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);tn(this.tensors[t].shape,n,"TensorList shape mismatch: ");const s=io(this.elementShape,this.tensors,n);return j(this.tensors[t],s)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);tn(this.elementShape,n.shape,"TensorList shape mismatch: "),Kn(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);tn(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=io(this.elementShape,this.tensors,r);return t.length===0?Xn([],[0].concat(s)):de(()=>{const i=t.map(o=>j(this.tensors[o],s));return wr(i,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);tn(this.elementShape,n,"TensorList shape mismatch: ");const r=io(this.elementShape,this.tensors,n);return this.size()===0?Xn([],[0].concat(r)):de(()=>{const s=this.tensors.map(i=>j(i,r));return ut(s,0)})}}function dz(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const s=e.shape.slice(1);tn(s,t,"TensorList shape mismatch: ");const i=js(e);return new Rs(i,t,r)}function mz(e,t,n,r){return new Rs([],e,t,r)}function yz(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const i=new Rs([],n,e.dtype,r),o=js(e,0);return t.forEach((a,u)=>{i.setItem(a,o[u])}),i}function gz(e,t,n){let r=0;const s=t.map(f=>(r+=f,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);const i=e.shape.slice(1),o=Jh(i,n),a=r===0?0:e.size/r,u=de(()=>{const f=[];e=j(e,[1,r,a]);for(let h=0;h<t.length;++h){const y=[0,h===0?0:s[h-1],0],v=[1,t[h],a];f[h]=j(ae(e,y,v),o)}return e.dispose(),f}),l=new Rs([],n,e.dtype,t.length);for(let f=0;f<u.length;f++)l.setItem(f,u[f]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vz=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const r=m("thenBranch",e,t,n),s=m("elseBranch",e,t,n),i=m("cond",e,t,n),o=m("args",e,t,n);return(await i.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",e,t,n),s=m("cond",e,t,n),i=m("args",e,t,n),o=await n.functionMap[s].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap),a=i.map(f=>f.id);let u=await o[0].data();o.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&f.dispose()});let l=i;for(;u[0];){const f=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const h=l.map(y=>y.id);f.forEach(y=>{!y.kept&&a.indexOf(y.id)===-1&&h.indexOf(y.id)===-1&&y.dispose()});const p=await n.functionMap[s].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await p[0].data(),p.forEach(y=>{!y.kept&&a.indexOf(y.id)===-1&&h.indexOf(y.id)===-1&&y.dispose()})}return l}case"LoopCond":{const r=m("pred",e,t,n);return[sr(r)]}case"Switch":{const r=m("pred",e,t,n);let s=m("data",e,t,n);return s.kept||(s=sr(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=e.inputNames.find(s=>ot(s,t,n)!==void 0);if(r){const s=ot(r,t,n);return[sr(s)]}return}case"Enter":{const r=m("frameName",e,t,n),s=m("tensor",e,t,n);return n.enterFrame(r),[sr(s)]}case"Exit":{const r=m("tensor",e,t,n);return n.exitFrame(),[sr(r)]}case"NextIteration":{const r=m("tensor",e,t,n);return n.nextIteration(),[sr(r)]}case"TensorArrayV3":{const r=m("size",e,t,n),s=m("dtype",e,t,n),i=m("elementShape",e,t,n),o=m("dynamicSize",e,t,n),a=m("clearAfterRead",e,t,n),u=m("identicalElementShapes",e,t,n),l=m("name",e,t,n),f=new pz(l,s,r,i,u,o,a);return n.addTensorArray(f),[f.idTensor,ye(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n),i=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.write(s,i),[o.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),i=m("dtype",e,t,n);return[n.getTensorArray(r.id).gather(s,i)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),i=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.scatter(s,i),[o.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id),i=m("dtype",e,t,n);return[s.concat(i)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",e,t,n),s=m("tensor",e,t,n),i=m("lengths",e,t,n),o=n.getTensorArray(r.id);return o.split(i,s),[o.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return[ye(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),i=m("tensor",e,t,n),o=n.getTensorList(r.id);return o.setItem(s,i),[o.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),i=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(s,i,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",e,t,n),s=m("tensor",e,t,n),i=m("elementShape",e,t,n),o=m("numElements",e,t,n),a=yz(s,r,i,o);return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",e,t,n),s=m("elementDType",e,t,n);let i;e.op==="TensorListReserve"?i="numElements":i="maxNumElements";const o=m(i,e,t,n),a=e.op==="TensorListReserve"?-1:o,u=mz(r,s,o,a);return n.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=m("tensorListId",e,t,n),s=m("indices",e,t,n),i=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).gather(s,o,i)]}case"TensorListStack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n),o=m("numElements",e,t,n);return[n.getTensorList(r.id).stack(s,i,o)]}case"TensorListFromTensor":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n),o=dz(r,s,i);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id),i=m("dtype",e,t,n),o=m("elementShape",e,t,n);return[s.concat(i,o)]}case"TensorListPushBack":{const r=m("tensorListId",e,t,n),s=m("tensor",e,t,n),i=n.getTensorList(r.id);return i.pushBack(s),[i.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),i=m("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(s,i)]}case"TensorListSplit":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),i=m("lengths",e,t,n),o=gz(r,i,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id);return[ye(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",e,t,n),s=m("size",e,t,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(e,t,n){const[r,s]=m("fusedOps",e,t,n),i=r==="biasadd",o=!i,a=s==="prelu",u=r==="fusedbatchnorm",l=m("numArgs",e,t,n);if(i){if(a&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&i&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=m("strides",e,t,n),h=wu(e,t,n),p=m("dataFormat",e,t,n).toUpperCase(),y=m("dilations",e,t,n);let[v,w]=m("args",e,t,n);o&&(w=v,v=void 0);const k=m("leakyreluAlpha",e,t,n);return{stride:f,pad:h,dataFormat:p,dilations:y,biasArg:v,preluArg:w,activationFunc:s,leakyreluAlpha:k}}const wz=(e,t,n,r=lt)=>{switch(e.op){case"Conv1D":{const s=m("stride",e,t,n),i=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilation",e,t,n);return[r.conv1d(m("x",e,t,n),m("filter",e,t,n),s,i,o,a)]}case"Conv2D":{const s=m("strides",e,t,n),i=wu(e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilations",e,t,n);return[r.conv2d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2]],i,o,[a[1],a[2]])]}case"_FusedConv2D":{const{stride:s,pad:i,dataFormat:o,dilations:a,biasArg:u,preluArg:l,activationFunc:f,leakyreluAlpha:h}=Qg(e,t,n);return[r.fused.conv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:i,dataFormat:o,dilations:[a[1],a[2]],bias:u,activation:f,preluActivationWeights:l,leakyreluAlpha:h})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:i,dataFormat:o,dilations:a,biasArg:u,preluArg:l,activationFunc:f,leakyreluAlpha:h}=Qg(e,t,n);return[r.fused.depthwiseConv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:i,dataFormat:o,dilations:[a[1],a[2]],bias:u,activation:f,preluActivationWeights:l,leakyreluAlpha:h})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",e,t,n),i=m("strides",e,t,n),o=wu(e,t,n);return[r.conv2dTranspose(m("x",e,t,n),m("filter",e,t,n),s,[i[1],i[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",e,t,n),i=wu(e,t,n),o=m("dilations",e,t,n),a=m("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(m("input",e,t,n),m("filter",e,t,n),[s[1],s[2]],i,a,[o[1],o[2]])]}case"Conv3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),a=m("dilations",e,t,n);return[r.conv3d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2],s[3]],i,o,[a[1],a[2],a[3]])]}case"AvgPool":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i)]}case"MaxPool":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i)]}case"MaxPoolWithArgmax":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n),a=m("includeBatchInIndex",e,t,n),{result:u,indexes:l}=r.maxPoolWithArgmax(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],i,a);return[u,l]}case"AvgPool3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],i)]}case"MaxPool3D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],i)]}case"Dilation2D":{const s=m("strides",e,t,n),i=m("pad",e,t,n),o=m("dilations",e,t,n),a=s[1],u=s[2],l=o[1],f=o[2];return[r.dilation2d(m("x",e,t,n),m("filter",e,t,n),[a,u],i,[l,f],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bz=(e,t,n,r=lt)=>{switch(e.op){case"Fill":{const s=m("shape",e,t,n),i=m("dtype",e,t,n),o=m("value",e,t,n);return[r.fill(s,o,i)]}case"LinSpace":{const s=m("start",e,t,n),i=m("stop",e,t,n),o=m("num",e,t,n);return[r.linspace(s,i,o)]}case"Multinomial":{const s=m("logits",e,t,n),i=m("numSamples",e,t,n),o=m("seed",e,t,n);return[r.multinomial(s,i,o)]}case"OneHot":{const s=m("indices",e,t,n),i=m("depth",e,t,n),o=m("onValue",e,t,n),a=m("offValue",e,t,n),u=m("dtype",e,t,n);return[r.oneHot(s,i,o,a,u)]}case"Ones":return[r.ones(m("shape",e,t,n),m("dtype",e,t,n))];case"OnesLike":return[r.onesLike(m("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",e,t,n),m("dtype",e,t,n),m("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(m("shape",e,t,n),m("minval",e,t,n),m("maxval",e,t,n),m("dtype",e,t,n))];case"RandomUniformInt":return[r.randomUniformInt(m("shape",e,t,n),m("minval",e,t,n),m("maxval",e,t,n),m("seed",e,t,n))];case"Range":{const s=m("start",e,t,n),i=m("stop",e,t,n),o=m("step",e,t,n);return[r.range(s,i,o,m("dtype",e,t,n))]}case"TruncatedNormal":{const s=m("shape",e,t,n),i=m("mean",e,t,n),o=m("stdDev",e,t,n),a=m("seed",e,t,n);return[r.truncatedNormal(s,i,o,m("dtype",e,t,n),a)]}case"Zeros":return[r.zeros(m("shape",e,t,n),m("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(e,t,n){const r=m("boxes",e,t,n),s=m("scores",e,t,n),i=m("maxOutputSize",e,t,n),o=m("iouThreshold",e,t,n),a=m("scoreThreshold",e,t,n),u=m("softNmsSigma",e,t,n);return{boxes:r,scores:s,maxOutputSize:i,iouThreshold:o,scoreThreshold:a,softNmsSigma:u}}const Sz=async(e,t,n,r,s=lt)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l,softNmsSigma:f}=of(e,t,n),h=await s.image.nonMaxSuppressionWithScoreAsync(i,o,a,u,l,f);return[h.selectedIndices,h.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=of(e,t,n),f=m("padToMaxOutputSize",e,t,n),h=await s.image.nonMaxSuppressionPaddedAsync(i,o,a,u,l,f);return[h.selectedIndices,h.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:i,scores:o,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=of(e,t,n);return[await s.image.nonMaxSuppressionAsync(i,o,a,u,l)]}case"Where":{const i=s.cast(m("condition",e,t,n),"bool"),o=[await s.whereAsync(i)];return i.dispose(),o}case"ListDiff":return s.setdiff1dAsync(m("x",e,t,n),m("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nz=(e,t,n,r=lt)=>{switch(e.op){case"LowerBound":{const s=m("sortedSequence",e,t,n),i=m("values",e,t,n);return[r.lowerBound(s,i)]}case"TopKV2":{const s=m("x",e,t,n),i=m("k",e,t,n),o=m("sorted",e,t,n),a=r.topk(s,i,o);return[a.values,a.indices]}case"UpperBound":{const s=m("sortedSequence",e,t,n),i=m("values",e,t,n);return[r.upperBound(s,i)]}case"Unique":{const s=m("x",e,t,n),i=r.unique(s);return[i.values,i.indices]}case"UniqueV2":{const s=m("x",e,t,n),i=m("axis",e,t,n),o=r.unique(s,i);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ez=(e,t,n,r=lt)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const s=m("default",e,t,n);return[ot(e.name,t,n)||s];case"Placeholder":return[ot(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=m("x",e,t,n);return[sr(f)]}case"IdentityN":return m("x",e,t,n).map(f=>sr(f));case"Snapshot":const i=m("x",e,t,n);return[sr(i)];case"Shape":return[r.tensor1d(m("x",e,t,n).shape,"int32")];case"ShapeN":return m("x",e,t,n).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(m("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(m("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=m("x",e,t,n),a=m("data",e,t,n),u=m("message",e,t,n),l=m("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let f=0;f<a.length;f++)console.log(Array.prototype.slice.call(a[f].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tz{get id(){return this.handle.id}constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=ye(0),this.tensorMap=new Map,Kn(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return ye(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),de(()=>{const s=js(n),i=r.length,o=s.length;$(i===o,()=>`The number of elements doesn't match, keys has ${i} elements, the values has ${o} elements.`);for(let a=0;a<i;a++){const u=r[a],l=s[a];Kn(l),this.tensorMap.set(u,l)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return de(()=>{const s=[];for(let i=0;i<r.length;i++){const o=r[i],a=this.findWithDefault(o,n);s.push(a)}return wr(s)})}findWithDefault(t,n){const r=this.tensorMap.get(t);return r??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kz=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(e.name);if(s!=null)return[s];{const i=m("keyDType",e,t,n),o=m("valueDType",e,t,n),a=new Tz(i,o);return r.addHashTable(e.name,a),[a.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",e,t,n,r),i=m("keys",e,t,n),o=m("values",e,t,n);return[await r.getHashTableById(s.id).import(i,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",e,t,n,r),i=m("keys",e,t,n),o=m("defaultValue",e,t,n);return[await r.getHashTableById(s.id).find(i,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",e,t,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xz=(e,t,n,r=lt)=>{switch(e.op){case"ResizeBilinear":{const s=m("images",e,t,n),i=m("size",e,t,n),o=m("alignCorners",e,t,n),a=m("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(s,[i[0],i[1]],o,a)]}case"ResizeNearestNeighbor":{const s=m("images",e,t,n),i=m("size",e,t,n),o=m("alignCorners",e,t,n),a=m("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(s,[i[0],i[1]],o,a)]}case"CropAndResize":{const s=m("image",e,t,n),i=m("boxes",e,t,n),o=m("boxInd",e,t,n),a=m("cropSize",e,t,n),u=m("method",e,t,n),l=m("extrapolationValue",e,t,n);return[r.image.cropAndResize(s,i,o,a,u,l)]}case"ImageProjectiveTransformV3":{const s=m("images",e,t,n),i=m("transforms",e,t,n),o=m("outputShape",e,t,n),a=m("fillValue",e,t,n),u=m("interpolation",e,t,n),l=m("fillMode",e,t,n);return[r.image.transform(s,i,u.toLowerCase(),l.toLowerCase(),a,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _z=(e,t,n,r=lt)=>{switch(e.op){case"Equal":return[r.equal(m("a",e,t,n),m("b",e,t,n))];case"NotEqual":return[r.notEqual(m("a",e,t,n),m("b",e,t,n))];case"Greater":return[r.greater(m("a",e,t,n),m("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(m("a",e,t,n),m("b",e,t,n))];case"Less":return[r.less(m("a",e,t,n),m("b",e,t,n))];case"LessEqual":return[r.lessEqual(m("a",e,t,n),m("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(m("a",e,t,n),m("b",e,t,n))];case"LogicalNot":return[r.logicalNot(m("a",e,t,n))];case"LogicalOr":return[r.logicalOr(m("a",e,t,n),m("b",e,t,n))];case"Select":case"SelectV2":return[r.where(m("condition",e,t,n),m("a",e,t,n),m("b",e,t,n))];case"BitwiseAnd":return[r.bitwiseAnd(m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $z=(e,t,n,r=lt)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",e,t,n),m("b",e,t,n),m("transposeA",e,t,n),m("transposeB",e,t,n))];case"Einsum":return[r.einsum(m("equation",e,t,n),...m("tensors",e,t,n))];case"Transpose":return[r.transpose(m("x",e,t,n),m("perm",e,t,n))];case"_FusedMatMul":const[s,i]=m("fusedOps",e,t,n),o=s==="biasadd",a=i==="prelu",u=m("numArgs",e,t,n),l=m("leakyreluAlpha",e,t,n);if(o){if(a&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,h]=m("args",e,t,n);return[r.fused.matMul({a:m("a",e,t,n),b:m("b",e,t,n),transposeA:m("transposeA",e,t,n),transposeB:m("transposeB",e,t,n),bias:f,activation:i,preluActivationWeights:h,leakyreluAlpha:l})];case"MatrixBandPart":return[r.linalg.bandPart(m("a",e,t,n),m("numLower",e,t,n),m("numUpper",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oz=(e,t,n,r=lt)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",e,t,n),m("axis",e,t,n),m("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"FusedBatchNormV3":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(m("x",e,t,n),m("radius",e,t,n),m("bias",e,t,n),m("alpha",e,t,n),m("beta",e,t,n))];case"Softmax":return[r.softmax(m("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iz=(e,t,n,r=lt)=>{switch(e.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:i}=r.raggedGather(m("paramsNestedSplits",e,t,n),m("paramsDenseValues",e,t,n),m("indices",e,t,n),m("outputRaggedRank",e,t,n));return s.concat(i)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:i}=r.raggedRange(m("starts",e,t,n),m("limits",e,t,n),m("splits",e,t,n));return[s,i]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(m("shape",e,t,n),m("values",e,t,n),m("defaultValue",e,t,n),m("rowPartitionTensors",e,t,n),m("rowPartitionTypes",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Az=(e,t,n,r=lt)=>{switch(e.op){case"Max":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.max(m("x",e,t,n),a,u)]}case"Mean":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.mean(m("x",e,t,n),a,u)]}case"Min":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.min(m("x",e,t,n),a,u)]}case"Sum":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.sum(m("x",e,t,n),a,u)]}case"All":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.all(m("x",e,t,n),a,u)]}case"Any":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.any(m("x",e,t,n),a,u)]}case"ArgMax":{const a=m("axis",e,t,n);return[r.argMax(m("x",e,t,n),a)]}case"ArgMin":{const a=m("axis",e,t,n);return[r.argMin(m("x",e,t,n),a)]}case"Prod":{const a=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.prod(m("x",e,t,n),a,u)]}case"Cumprod":{const a=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumprod(m("x",e,t,n),a,u,l)]}case"Cumsum":{const a=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumsum(m("x",e,t,n),a,u,l)]}case"Bincount":const s=m("x",e,t,n),i=m("weights",e,t,n),o=m("size",e,t,n);return[r.bincount(s,i,o)];case"DenseBincount":{const a=m("x",e,t,n),u=m("weights",e,t,n),l=m("size",e,t,n),f=m("binaryOutput",e,t,n);return[r.denseBincount(a,u,l,f)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cz=(e,t,n,r=lt)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=m("n",e,t,n),i=m("axis",e,t,n);let o=m("tensors",e,t,n);return o=o.slice(0,s),[r.concat(o,i)]}case"Gather":{const s=m("x",e,t,n),i=m("indices",e,t,n);return[r.gather(s,r.cast(i,"int32"),0)]}case"GatherV2":{const s=m("axis",e,t,n),i=m("batchDims",e,t,n),o=m("x",e,t,n),a=m("indices",e,t,n);return[r.gather(o,r.cast(a,"int32"),s,i)]}case"Reverse":{const s=m("dims",e,t,n),i=[];for(let a=0;a<s.length;a++)s[a]&&i.push(a);const o=m("x",e,t,n);return[r.reverse(o,i)]}case"ReverseV2":{const s=m("axis",e,t,n),i=m("x",e,t,n);return[r.reverse(i,s)]}case"Slice":{const s=m("begin",e,t,n),i=m("size",e,t,n);return[r.slice(m("x",e,t,n),s,i)]}case"StridedSlice":{const s=m("begin",e,t,n),i=m("end",e,t,n),o=m("strides",e,t,n),a=m("beginMask",e,t,n),u=m("endMask",e,t,n),l=m("ellipsisMask",e,t,n),f=m("newAxisMask",e,t,n),h=m("shrinkAxisMask",e,t,n),p=m("x",e,t,n);return[r.stridedSlice(p,s,i,o,a,u,l,f,h)]}case"Pack":return de(()=>{const s=m("axis",e,t,n),i=m("tensors",e,t,n),o=i[0].shape,a=r.squeeze(i[0]).shape,u=i.map(l=>{const f=dr(l.shape,o);if(!f&&!dr(r.squeeze(l).shape,a))throw new Error("the input tensors shape does not match");return f?l:r.reshape(l,o)});return[r.stack(u,s)]});case"Unpack":{const s=m("axis",e,t,n),i=m("tensor",e,t,n);return r.unstack(i,s)}case"Tile":{const s=m("reps",e,t,n);return[r.tile(m("x",e,t,n),s)]}case"Split":case"SplitV":{const s=m("axis",e,t,n),i=m("numOrSizeSplits",e,t,n),o=m("x",e,t,n);return r.split(o,i,s)}case"ScatterNd":{const s=m("indices",e,t,n),i=m("values",e,t,n),o=m("shape",e,t,n);return[r.scatterND(s,i,o)]}case"GatherNd":{const s=m("x",e,t,n),i=m("indices",e,t,n);return[r.gatherND(s,i)]}case"SparseToDense":{const s=m("sparseIndices",e,t,n),i=m("outputShape",e,t,n),o=m("sparseValues",e,t,n),a=m("defaultValue",e,t,n);return[r.sparseToDense(s,o,i,o.dtype===a.dtype?a:r.cast(a,o.dtype))]}case"TensorScatterUpdate":{const s=m("indices",e,t,n),i=m("values",e,t,n),o=m("tensor",e,t,n);return[r.tensorScatterUpdate(o,s,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dz=(e,t,n,r=lt)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:i,emptyRowIndicator:o,reverseIndexMap:a}=r.sparse.sparseFillEmptyRows(m("indices",e,t,n),m("values",e,t,n),m("denseShape",e,t,n),m("defaultValue",e,t,n));return[s,i,o,a]}case"SparseReshape":{const{outputIndices:s,outputShape:i}=r.sparse.sparseReshape(m("inputIndices",e,t,n),m("inputShape",e,t,n),m("newShape",e,t,n));return[s,i]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pz=(e,t,n,r=lt)=>{switch(e.op){case"FFT":return[r.fft(m("x",e,t,n))];case"IFFT":return[r.ifft(m("x",e,t,n))];case"RFFT":return[r.rfft(m("x",e,t,n))];case"IRFFT":return[r.irfft(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rz=(e,t,n,r=lt)=>{switch(e.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(m("input",e,t,n),m("pattern",e,t,n),m("rewrite",e,t,n),m("replaceGlobal",e,t,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:i}=r.string.stringNGrams(m("data",e,t,n),m("dataSplits",e,t,n),m("separator",e,t,n),m("nGramWidths",e,t,n),m("leftPad",e,t,n),m("rightPad",e,t,n),m("padWidth",e,t,n),m("preserveShortSequences",e,t,n));return[s,i]}case"StringSplit":{const{indices:s,values:i,shape:o}=r.string.stringSplit(m("input",e,t,n),m("delimiter",e,t,n),m("skipEmpty",e,t,n));return[s,i,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",e,t,n),m("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fz=(e,t,n,r=lt)=>{switch(e.op){case"Cast":return[r.cast(m("x",e,t,n),m("dtype",e,t,n))];case"ExpandDims":{const s=m("axis",e,t,n);return[r.expandDims(m("x",e,t,n),s)]}case"Squeeze":{const s=m("axis",e,t,n);return[r.squeeze(m("x",e,t,n),s)]}case"Reshape":return[r.reshape(m("x",e,t,n),m("shape",e,t,n))];case"EnsureShape":return[r.ensureShape(m("x",e,t,n),m("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(m("x",e,t,n),m("padding",e,t,n),m("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(m("x",e,t,n),m("padding",e,t,n),m("constantValue",e,t,n))];case"SpaceToBatchND":{const s=m("blockShape",e,t,n),i=m("paddings",e,t,n);return[r.spaceToBatchND(m("x",e,t,n),s,i)]}case"BatchToSpaceND":{const s=m("blockShape",e,t,n),i=m("crops",e,t,n);return[r.batchToSpaceND(m("x",e,t,n),s,i)]}case"DepthToSpace":{const s=m("blockSize",e,t,n),i=m("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(m("x",e,t,n),s,i)]}case"BroadcastTo":return[r.broadcastTo(m("x",e,t,n),m("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",e,t,n),m("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(e,t,n,r,s=de){const i=((o,a,u)=>{switch(o.category){case"arithmetic":return s(()=>fz(o,a,u));case"basic_math":return s(()=>hz(o,a,u));case"control":return vz(o,a,u);case"convolution":return s(()=>wz(o,a,u));case"creation":return s(()=>bz(o,a,u));case"dynamic":return Sz(o,a,u);case"evaluation":return s(()=>Nz(o,a,u));case"image":return s(()=>xz(o,a,u));case"graph":return s(()=>Ez(o,a,u));case"logical":return s(()=>_z(o,a,u));case"matrices":return s(()=>$z(o,a,u));case"normalization":return s(()=>Oz(o,a,u));case"ragged":return s(()=>Iz(o,a,u));case"reduction":return s(()=>Az(o,a,u));case"slice_join":return s(()=>Cz(o,a,u));case"sparse":return s(()=>Dz(o,a,u));case"spectral":return s(()=>Pz(o,a,u));case"string":return s(()=>Rz(o,a,u));case"transformation":return s(()=>Fz(o,a,u));case"hash_table":return kz(o,a,u,r);case"custom":const l=Qb(o.op);if(l&&l.customExecutor)return l.customExecutor(new cz(o,a,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return Os(i)?i.then(o=>[].concat(o)):[].concat(i)}class Yg{constructor(t={},n={},r={},s={},i){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=i,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(e,t,n,r){const s=new Set,i=[];let o=null,a=null;const u=new Set,l=new Set(Object.keys(e).map(p=>Lt(p)[0]));r=r||[];const f=new Set(r.map(p=>Lt(p.name)[0])),h=[...t];for(;h.length>0;){const p=h.pop();if((cs(p)||Hz(p)||Wz(p))&&o==null&&(o=p,a=o.children.map(y=>y.name).filter(y=>s.has(y))),s.add(p.name),n[p.name]==null&&!l.has(p.name)&&!f.has(p.name)){if(p.inputs.length===0){i.push(p.name);continue}p.inputs.forEach(y=>{u.has(y.name)||(u.add(y.name),h.push(y))})}}return{inputs:e,outputs:t,usedNodes:s,missingInputs:i,dynamicNode:o,syncInputs:a}}function Lz(e,t){const{usedNodes:n,inputs:r}=t,s=Object.keys(r).map(k=>Lt(k)[0]).map(k=>e.nodes[k]),i=e.initNodes||[],o=k=>n.has(typeof k=="string"?k:k.name);function a(k){return[...new Map(k.map(S=>[S.name,S])).values()]}const u=a([...s,...e.weights,...i]).filter(o),l=a([...u,...Object.values(e.nodes)]).filter(o),f=new Map(l.map(k=>[k.name,k])),h={};for(const k of l){h[k.name]=h[k.name]||0;for(const S of k.children)o(S)||(h[S.name]=Number.POSITIVE_INFINITY),h[S.name]=(h[S.name]||0)+1}const p=Object.entries(h).filter(([,k])=>k===0).map(([k])=>k),y=[...p];for(;p.length>0;){const k=p.pop(),S=f.get(k);for(const N of S.children.filter(o))--h[N.name]===0&&(y.push(N.name),p.push(N.name))}const v=y.map(k=>f.get(k)),w=zz(v,u);return Bz(w,u),w}function zz(e,t){const n=new Map(e.map(o=>[o.name,o])),r=t.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),a=n.get(o);for(const u of a.children)!n.has(u.name)||s.has(u.name)||(s.add(u.name),r.push(u.name))}return e.filter(o=>s.has(o.name))}class Wa extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}function Bz(e,t){const n=new Map(e.map((a,u)=>[a.name,u])),r=new Set(t.map(a=>a.name)),s=a=>r.has(typeof a=="string"?a:a.name),i=new Set(e.map(a=>a.name)),o=a=>i.has(typeof a=="string"?a:a.name);for(const a of e){for(const u of a.children.filter(o)){if(!n.has(u.name))throw new Wa(`Child ${u.name} of node ${a.name} is unreachable.`);if(n.get(a.name)>n.get(u.name))throw new Wa(`Node ${a.name} is scheduled to run after its child ${u.name}.`)}if(!s(a))for(const u of a.inputs){if(!n.has(u.name))throw new Wa(`Input ${u.name} of node ${a.name} is unreachable.`);if(n.get(u.name)>n.get(a.name))throw new Wa(`Node ${a.name} is scheduled to run before its input ${u.name}.`)}}}function jz(e){const t=new Map(e.map((a,u)=>[a.name,u])),n=Number.MAX_SAFE_INTEGER,r=e.map((a,u)=>cs(a)?n:u),s=a=>{const u=r[t.get(a.name)];return u??-1},i=e.map((a,u)=>a.children.map(s).reduce((l,f)=>Math.max(l,f),r[u])),o=new Map;for(let a=0;a<e.length;++a){const u=i[a];if(u===n)continue;const l=e[a],f=e[u];o.has(f.name)||o.set(f.name,[]),o.get(f.name).push(l)}return o}const Mz=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),Uz=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),Vz=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function cs(e){return Mz.has(e.op)}function Hz(e){return Uz.has(e.op)}function Wz(e){return Vz.has(e.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cl{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new cl(t.functions[r],this)})}getCompilationKey(t,n){const r=t.map(i=>i.name).sort(),s=n.map(i=>i.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(t,n){const r=Jg(t,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:i,syncInputs:o}=r;if(i!=null)throw new Error(`This execution contains the node '${i.name}', which has the dynamic op '${i.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const l=n.map(h=>h.name),f=Object.keys(t);throw new Error(`Cannot compute the outputs [${l}] from the provided inputs [${f}]. Missing the following inputs: [${s}]`)}const a=Lz(this.graph,r),u=jz(a);return{orderedNodes:a,nodeLiveUntilMap:u}}cloneAndKeepTensor(t){if(t==null)return null;const n=t.clone();return Kn(n),n}cloneTensorList(t){return t?t.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(t,n){this.disposeIntermediateTensors(),t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(p=>this.graph.nodes[Lt(p)[0]]),i=n.map(p=>Lt(p)[0]),o=new Set(i);let a=i.map(p=>this.graph.nodes[p]);a.length===0&&(a=this._outputs);const u=this.getCompilationKey(s,a);let l=this.compiledMap.get(u);l==null&&(l=this.compile(t,a),this.compiledMap.set(u,l));try{this.keepIntermediateTensors=pe().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const f={},h={};return de(()=>{const p=new Yg(this.weightMap,f,h,this.functionExecutorMap,this.parseNodeNameCache),y=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(S=>{const[N,T]=Lt(S,p),x=[];x[T]=t[S],y[N]=x,this.keepIntermediateTensors&&(this.clonedTensorsMap[N]=this.cloneTensorList(x))});const v=this.getFrozenTensorIds(y),{orderedNodes:w,nodeLiveUntilMap:k}=l;for(const S of w){if(y[S.name])continue;const N=Xg(S,y,p,this._resourceManager);if(Os(N))throw new Error(`The execution of the op '${S.op}' returned a promise. Please use model.executeAsync() instead.`);y[S.name]=N,this.keepIntermediateTensors&&(this.clonedTensorsMap[S.name]=this.cloneTensorList(N)),this.checkTensorForDisposalWithNodeLiveUntilInfo(S,y,p,v,o,k.get(S.name))}return this.parent==null&&p.dispose(v),n.map(S=>ot(S,y,p))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(t,n,r,s,i,o,a){if(!(cs(n)||o.has(t))){for(const u of r[t])u!=null&&(a[u.id]=(a[u.id]||0)+n.children.length);for(const u of n.inputs){if(cs(u))continue;const l=Wg(u.name,r,s);if(l!=null)for(const f of l){if(!f||f.kept||i.has(f.id))continue;const h=a[f.id];h===1?(f.dispose(),delete a[f.id]):h!=null&&a[f.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,n,r,s,i,o){function a(u){return cs(u)||i.has(u.name)}if(!(cs(t)||o==null))for(const u of o){if(a(u))continue;const l=Wg(u.name,n,r);for(const f of l)!f||f.kept||s.has(f.id)||f.dispose()}}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(const n of t)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,n,r=!1,s={},i={}){this.disposeIntermediateTensors(),r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=pe().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const o=new Yg(this.weightMap,s,i,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const a=await this.executeWithControlFlow(t,o,n,r),u=n.map(p=>ot(p,a,o)),l=u.map(p=>p.id),f=Object.keys(t).map(p=>t[p].id),h=new Set([...l,...f,...this.weightIds]);return Object.values(a).forEach(p=>{p.forEach(y=>{y&&!y.isDisposed&&!h.has(y.id)&&y.dispose()})}),this.parent==null&&o.dispose(h),u}async executeFunctionAsync(t,n,r){const s=t.reduce((i,o,a)=>(i[this.inputs[a].name]=o,i),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(t,n,r,s){const i=Object.keys(t),o=i.map(x=>this.graph.nodes[Lt(x)[0]]),a=r.map(x=>Lt(x)[0]),u=new Set(a);let l=a.map(x=>this.graph.nodes[x]);l.length===0&&(l=this._outputs);const{usedNodes:f,missingInputs:h,dynamicNode:p,syncInputs:y}=Jg(t,l,this.weightMap,this._initNodes),v=[...o,...this.graph.weights,...this._initNodes||[]].map(x=>({node:x,contexts:n.currentContext})),w=Object.assign({},this.weightMap);Object.keys(t).forEach(x=>{const[C,P]=Lt(x),F=[];F[P]=t[x],w[C]=F});const k={},S=this.getFrozenTensorIds(w),N={};for(;v.length>0;){const x=this.processStack(o,v,n,w,N,S,u,k,f);await Promise.all(x)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const T=l.filter(x=>!cs(x)&&!ot(x.name,w,n)).map(x=>x.name);if(T.length>0){let x="";throw p!=null&&(x=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${y}]`),new Error(`Cannot compute the outputs [${T}] from the provided inputs [${i}]. Consider providing the following inputs: [${h}]. ${x}`)}return w}processStack(t,n,r,s,i,o,a,u,l){const f=[];for(;n.length>0;){const h=n.pop();r.currentContext=h.contexts;let p="";if(h.node.op==="Enter"&&m("isConstant",h.node,s,r)&&([p]=rr(h.node.name,r)),s[h.node.name]==null){const y=Xg(h.node,s,r,this._resourceManager);p||([p]=rr(h.node.name,r));const v=r.currentContext;Os(y)?f.push(y.then(w=>(s[p]=w,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(w)),r.currentContext=v,this.checkTensorForDisposal(p,h.node,s,r,o,a,u),this.processChildNodes(h.node,n,r,s,i,l),w))):(s[p]=y,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(y)),this.checkTensorForDisposal(p,h.node,s,r,o,a,u),this.processChildNodes(h.node,n,r,s,i,l))}else this.processChildNodes(h.node,n,r,s,i,l)}return f}processChildNodes(t,n,r,s,i,o){t.children.forEach(a=>{const[u]=rr(a.name,r);i[u]||!o.has(a.name)||(a.op==="Merge"?a.inputNames.some(l=>!!ot(l,s,r))&&(i[u]=!0,n.push({contexts:r.currentContext,node:a})):a.inputNames.every(l=>!!ot(l,s,r))&&(i[u]=!0,n.push({contexts:r.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const r=t[n],[s]=Lt(n),i=this.graph.nodes[s];if(i.attrParams.shape&&i.attrParams.shape.value){const o=i.attrParams.shape.value,a=o.length===r.shape.length&&r.shape.every((u,l)=>o[l]===-1||o[l]===u);$(a,()=>`The shape of dict['${i.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}i.attrParams.dtype&&i.attrParams.dtype.value&&$(r.dtype===i.attrParams.dtype.value,()=>`The dtype of dict['${i.name}'] provided in model.execute(dict) must be ${i.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){var n,r;const s={};for(const i in t){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[i];o!=null?s[o.name]=t[i]:s[i]=t[i]}return s}checkInputs(t){const n=Object.keys(t).filter(r=>{const[s]=Lt(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>{var r,s;const i=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return i!=null?i.name:n},{})}checkOutputs(t){t.forEach(n=>{const[r]=Lt(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class Kz{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qz="?tfjs-format=file",Gz="model.json";class Qz{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,n={},r=Gb){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new Kz}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return Os(t)?t.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(t)}loadSync(t){const n=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,n)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await Gw(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,n)}loadWithWeightMap(t,n){this.artifacts=t;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const i=this.artifacts.userDefinedMetadata;i.signature!=null&&(s=i.signature),i.structuredOutputKeys!=null&&(this.structuredOutputKeys=i.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new cl(Kg.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const i=Kg.Instance.transformGraph(t.modelInitializer);this.initializer=new cl(i),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,n){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const n=t instanceof Qe?[t]:t,r={};return n.forEach((s,i)=>r[this.structuredOutputKeys[i]]=s),r}return t}predict(t,n){const r=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(t,n){const r=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(t){var n;if(!(t instanceof Qe)&&!Array.isArray(t)){const i=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(i!=null)for(const o in i){const a=i[o];a.resourceId!=null&&(t[o]=this.resourceIdToCapturedInput[a.resourceId])}return t}t=Array.isArray(t)?t:[t];const r=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${t.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((i,o)=>{var a,u,l;const f=(l=(u=(a=this.signature)===null||a===void 0?void 0:a.inputs)===null||u===void 0?void 0:u[o])===null||l===void 0?void 0:l.resourceId;return f!=null?i[o]=this.resourceIdToCapturedInput[f]:i[o]=t[s++],i},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const i=r[s],o=n[i];this.resourceIdToCapturedInput[o.resourceId]=t[s]}}}execute(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=this.executor.execute(t,n);return r.length>1?r:r[0]}async executeAsync(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(t,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,r)=>(n[r]=[t[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Fe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Zg(e,t={},n=Gb){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=Xz(e));const r=new Qz(e,t,n);return await r.load(),r}function Xz(e){return e.endsWith("/")||(e=e+"/"),`${e}${Gz}${qz}`}/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Et=function(){return Et=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Et.apply(this,arguments)};function $n(e,t,n,r){return new(n||(n=Promise))(function(s,i){function o(l){try{u(r.next(l))}catch(f){i(f)}}function a(l){try{u(r.throw(l))}catch(f){i(f)}}function u(l){var f;l.done?s(l.value):(f=l.value,f instanceof n?f:new n(function(h){h(f)})).then(o,a)}u((r=r.apply(e,t||[])).next())})}function On(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(u){return function(l){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,f[0]&&(o=0)),o;)try{if(n=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,r=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){o=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){o.label=f[1];break}if(f[0]===6&&o.label<s[1]){o.label=s[1],s=f;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(f);break}s[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(e,o)}catch(h){f=[6,h],r=0}finally{n=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,l])}}}var fl=["wrist","thumb_cmc","thumb_mcp","thumb_ip","thumb_tip","index_finger_mcp","index_finger_pip","index_finger_dip","index_finger_tip","middle_finger_mcp","middle_finger_pip","middle_finger_dip","middle_finger_tip","ring_finger_mcp","ring_finger_pip","ring_finger_dip","ring_finger_tip","pinky_finger_mcp","pinky_finger_pip","pinky_finger_dip","pinky_finger_tip"],af={runtime:"mediapipe",maxHands:2,modelType:"full"},Yz=function(){function e(t){var n,r=this;this.width=0,this.height=0,this.selfieMode=!1,this.handsSolution=new _2.Hands({locateFile:function(s,i){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:i+"/"+s}}),t.modelType==="lite"?n=0:n=1,this.handsSolution.setOptions({modelComplexity:n,selfieMode:this.selfieMode,maxNumHands:t.maxHands}),this.handsSolution.onResults(function(s){if(r.height=s.image.height,r.width=s.image.width,r.hands=[],s.multiHandLandmarks!==null)for(var i=s.multiHandedness,o=s.multiHandLandmarks,a=s.multiHandWorldLandmarks,u=0;u<i.length;u++)r.hands.push(Et(Et({},r.translateOutput(o[u],a[u])),{score:i[u].score,handedness:i[u].label}))})}return e.prototype.translateOutput=function(t,n){var r=this;return{keypoints:t.map(function(s,i){return{x:s.x*r.width,y:s.y*r.height,score:s.visibility,name:fl[i]}}),keypoints3D:n.map(function(s,i){return{x:s.x,y:s.y,z:s.z,score:s.visibility,name:fl[i]}})}},e.prototype.estimateHands=function(t,n){return $n(this,void 0,void 0,function(){var r,s;return On(this,function(i){switch(i.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.handsSolution.setOptions({selfieMode:this.selfieMode})),t instanceof Qe?(s=ImageData.bind,[4,SL(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,i.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,i.label=3;case 3:return t=r,[4,this.handsSolution.send({image:t})];case 4:return i.sent(),[2,this.hands]}})})},e.prototype.dispose=function(){this.handsSolution.close()},e.prototype.reset=function(){this.handsSolution.reset(),this.width=0,this.height=0,this.hands=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.handsSolution.initialize()},e}();function Jz(e){return $n(this,void 0,void 0,function(){var t,n;return On(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Et({},af);var i=Et({},s);return i.runtime="mediapipe",i.maxHands==null&&(i.maxHands=af.maxHands),i.modelType==null&&(i.modelType=af.modelType),i}(e),[4,(n=new Yz(t)).initialize()];case 1:return r.sent(),[2,n]}})})}function uf(e){return e.width*e.height}function e0(e){var t=e.xCenter-e.width/2,n=t+e.width,r=e.yCenter-e.height/2;return{xMin:t,xMax:n,yMin:r,yMax:r+e.height,width:e.width,height:e.height}}function Zz(e,t){var n=e0(e),r=e0(t);if(!function(o,a){return!(o.xMax<a.xMin||a.xMax<o.xMin||o.yMax<a.yMin||a.yMax<o.yMin)}(n,r))return 0;var s=uf(function(o,a){var u=Math.max(o.xMin,a.xMin),l=Math.min(o.xMax,a.xMax),f=Math.max(o.yMin,a.yMin),h=Math.min(o.yMax,a.yMax);return{xMin:u,xMax:l,yMin:f,yMax:h,width:Math.max(l-u,0),height:Math.max(h-f,0)}}(n,r)),i=uf(n)+uf(r)-s;return i>0?s/i:0}function eB(e,t,n,r){var s=e.width,i=e.height,o=r?-1:1,a=Math.cos(e.rotation),u=Math.sin(e.rotation),l=e.xCenter,f=e.yCenter,h=1/t,p=1/n,y=new Array(16);return y[0]=s*a*o*h,y[1]=-i*u*h,y[2]=0,y[3]=(-.5*s*a*o+.5*i*u+l)*h,y[4]=s*u*o*p,y[5]=i*a*p,y[6]=0,y[7]=(-.5*i*a-.5*s*u*o+f)*p,y[8]=0,y[9]=0,y[10]=s*h,y[11]=0,y[12]=0,y[13]=0,y[14]=0,y[15]=1,function(v){if(v.length!==16)throw new Error("Array length must be 16 but got "+v.length);return[[v[0],v[1],v[2],v[3]],[v[4],v[5],v[6],v[7]],[v[8],v[9],v[10],v[11]],[v[12],v[13],v[14],v[15]]]}(y)}function Jb(e){return e instanceof Qe?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function hl(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function Zb(e){return e instanceof Qe?e:NL(e)}function lf(e,t){$(e.width!==0,function(){return t+" width cannot be 0."}),$(e.height!==0,function(){return t+" height cannot be 0."})}function tB(e,t){var n=function(r,s,i,o){var a=s-r,u=o-i;if(a===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var l=u/a;return{scale:l,offset:i-r*l}}(0,255,t[0],t[1]);return de(function(){return te(q(e,n.scale),n.offset)})}function t0(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,i=t.borderMode,o=t.outputTensorFloatRange,a=Jb(e),u=function(p,y){return y?{xCenter:y.xCenter*p.width,yCenter:y.yCenter*p.height,width:y.width*p.width,height:y.height*p.height,rotation:y.rotation}:{xCenter:.5*p.width,yCenter:.5*p.height,width:p.width,height:p.height,rotation:0}}(a,n),l=function(p,y,v){if(v===void 0&&(v=!1),!v)return{top:0,left:0,right:0,bottom:0};var w=y.height,k=y.width;lf(y,"targetSize"),lf(p,"roi");var S,N,T=w/k,x=p.height/p.width,C=0,P=0;return T>x?(S=p.width,N=p.width*T,P=(1-x/T)/2):(S=p.height/T,N=p.height,C=(1-T/x)/2),p.width=S,p.height=N,{top:P,left:C,right:C,bottom:P}}(u,r,s),f=eB(u,a.width,a.height,!1),h=de(function(){var p=Zb(e),y=Es(function(k,S,N){return lf(N,"inputResolution"),[1/N.width*k[0][0]*S.width,1/N.height*k[0][1]*S.width,k[0][3]*S.width,1/N.width*k[1][0]*S.height,1/N.height*k[1][1]*S.height,k[1][3]*S.height,0,0]}(f,a,r),[1,8]),v=i==="zero"?"constant":"nearest",w=Yl.transform(Vn(ze(p,"float32")),y,"bilinear",v,0,[r.height,r.width]);return o!=null?tB(w,o):w});return{imageTensor:h,padding:l,transformationMatrix:f}}function n0(e,t,n,r){return r===1?.5*(e+t):e+(t-e)*n/(r-1)}function r0(e){return{xCenter:e.xMin+e.width/2,yCenter:e.yMin+e.height/2,width:e.width,height:e.height}}function s0(e){var t=e.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,i=Number.MIN_VALUE;return t.forEach(function(o){n=Math.min(n,o.x),s=Math.max(s,o.x),r=Math.min(r,o.y),i=Math.max(i,o.y)}),{xCenter:(n+s)/2,yCenter:(r+i)/2,width:s-n,height:i-r}}function nB(e,t,n,r,s){var i=n==="rect"?function(o,a,u){var l,f=o.locationData;if(a==="boundingbox")l=r0(f.boundingBox);else{l=s0(f);var h=u.width,p=u.height;l.xCenter=Math.round(l.xCenter*h),l.yCenter=Math.round(l.yCenter*p),l.width=Math.round(l.width*h),l.height=Math.round(l.height*p)}return l}(e,t,r):function(o,a){var u=o.locationData;return a==="boundingbox"?r0(u.relativeBoundingBox):s0(u)}(e,t);return s&&(i.rotation=function(o,a,u){var l,f=o.locationData,h=u.rotationVectorStartKeypointIndex,p=u.rotationVectorEndKeypointIndex;l=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var y=f.relativeKeypoints[h].x*a.width,v=f.relativeKeypoints[h].y*a.height,w=f.relativeKeypoints[p].x*a.width,k=f.relativeKeypoints[p].y*a.height;return hl(l-Math.atan2(-(k-v),w-y))}(e,r,s)),i}function rB(e){return de(function(){var t=function(s){return de(function(){return[ae(s,[0,0,0],[1,-1,1]),ae(s,[0,0,1],[1,-1,-1])]})}(e),n=t[0],r=t[1];return{boxes:rt(r),logits:rt(n)}})}function sB(e,t,n,r){return $n(this,void 0,void 0,function(){var s,i,o,a,u;return On(this,function(l){switch(l.label){case 0:return e.sort(function(f,h){return Math.max.apply(Math,h.score)-Math.max.apply(Math,f.score)}),s=Es(e.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),i=dt(e.map(function(f){return f.score[0]})),[4,Yl.nonMaxSuppressionAsync(s,i,t,n)];case 1:return[4,(o=l.sent()).array()];case 2:return a=l.sent(),u=e.filter(function(f,h){return a.indexOf(h)>-1}),Fe([s,i,o]),[2,u]}})})}function iB(e,t){return e.map(function(n){var r=Et(Et({},n),{x:n.x*t.width,y:n.y*t.height});return n.z!=null&&(r.z=n.z*t.width),r})}function oB(e,t,n){return $n(this,void 0,void 0,function(){var r,s,i,o,a;return On(this,function(u){switch(u.label){case 0:return r=e[0],s=e[1],i=function(l,f,h){return de(function(){var p,y,v,w;h.reverseOutputOrder?(y=rt(ae(l,[0,h.boxCoordOffset+0],[-1,1])),p=rt(ae(l,[0,h.boxCoordOffset+1],[-1,1])),w=rt(ae(l,[0,h.boxCoordOffset+2],[-1,1])),v=rt(ae(l,[0,h.boxCoordOffset+3],[-1,1]))):(p=rt(ae(l,[0,h.boxCoordOffset+0],[-1,1])),y=rt(ae(l,[0,h.boxCoordOffset+1],[-1,1])),v=rt(ae(l,[0,h.boxCoordOffset+2],[-1,1])),w=rt(ae(l,[0,h.boxCoordOffset+3],[-1,1]))),y=te(q(he(y,h.xScale),f.w),f.x),p=te(q(he(p,h.yScale),f.h),f.y),h.applyExponentialOnBoxSize?(v=q(gr(he(v,h.hScale)),f.h),w=q(gr(he(w,h.wScale)),f.w)):(v=q(he(v,h.hScale),f.h),w=q(he(w,h.wScale),f.h));var k=ue(p,he(v,2)),S=ue(y,he(w,2)),N=te(p,he(v,2)),T=te(y,he(w,2)),x=ut([j(k,[h.numBoxes,1]),j(S,[h.numBoxes,1]),j(N,[h.numBoxes,1]),j(T,[h.numBoxes,1])],1);if(h.numKeypoints)for(var C=0;C<h.numKeypoints;++C){var P=h.keypointCoordOffset+C*h.numValuesPerKeypoint,F=void 0,L=void 0;h.reverseOutputOrder?(F=rt(ae(l,[0,P],[-1,1])),L=rt(ae(l,[0,P+1],[-1,1]))):(L=rt(ae(l,[0,P],[-1,1])),F=rt(ae(l,[0,P+1],[-1,1])));var M=te(q(he(F,h.xScale),f.w),f.x),B=te(q(he(L,h.yScale),f.h),f.y);x=ut([x,j(M,[h.numBoxes,1]),j(B,[h.numBoxes,1])],1)}return x})}(s,t,n),o=de(function(){var l=r;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(l=lb(r,-n.scoreClippingThresh,n.scoreClippingThresh)),l=Ns(l)):l}),[4,aB(i,o,n)];case 1:return a=u.sent(),Fe([i,o]),[2,a]}})})}function aB(e,t,n){return $n(this,void 0,void 0,function(){var r,s,i,o,a,u,l,f,h,p,y,v;return On(this,function(w){switch(w.label){case 0:return r=[],[4,e.data()];case 1:return s=w.sent(),[4,t.data()];case 2:for(i=w.sent(),o=0;o<n.numBoxes;++o)if(!(n.minScoreThresh!=null&&i[o]<n.minScoreThresh||(a=o*n.numCoords,u=uB(s[a+0],s[a+1],s[a+2],s[a+3],i[o],n.flipVertically,o),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((f=u.locationData).relativeKeypoints=[],h=n.numKeypoints*n.numValuesPerKeypoint,p=0;p<h;p+=n.numValuesPerKeypoint)y=a+n.keypointCoordOffset+p,v={x:s[y+0],y:n.flipVertically?1-s[y+1]:s[y+1]},f.relativeKeypoints.push(v);r.push(u)}return[2,r]}})})}function uB(e,t,n,r,s,i,o){return{score:[s],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:i?1-n:e,xMax:r,yMax:i?1-e:n,width:r-t,height:n-e}}}}function lB(e,t){return e==="none"?t:function(n){return 1/(1+Math.exp(-n))}(t)}function i0(e,t,n,r){return $n(this,void 0,void 0,function(){var s,i,o,a,u,l,f,h;return On(this,function(p){switch(p.label){case 0:return n=n||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=e.size,i=s/t.numLandmarks,[4,e.data()];case 1:for(o=p.sent(),a=[],u=0;u<t.numLandmarks;++u)l=u*i,(h={x:0,y:0}).x=n?t.inputImageWidth-o[l]:o[l],i>1&&(h.y=r?t.inputImageHeight-o[l+1]:o[l+1]),i>2&&(h.z=o[l+2]),i>3&&(h.score=lB(t.visibilityActivation,o[l+3])),a.push(h);for(f=0;f<a.length;++f)(h=a[f]).x=h.x/t.inputImageWidth,h.y=h.y/t.inputImageHeight,h.z=h.z/t.inputImageWidth/(t.normalizeZ||1);return[2,a]}})})}function o0(e,t,n){var r=e.width,s=e.height,i=e.rotation;if(n.rotation==null&&n.rotationDegree==null||(i=function(f,h){return h.rotation!=null?f+=h.rotation:h.rotationDegree!=null&&(f+=Math.PI*h.rotationDegree/180),hl(f)}(i,n)),i===0)e.xCenter=e.xCenter+r*n.shiftX,e.yCenter=e.yCenter+s*n.shiftY;else{var o=(t.width*r*n.shiftX*Math.cos(i)-t.height*s*n.shiftY*Math.sin(i))/t.width,a=(t.width*r*n.shiftX*Math.sin(i)+t.height*s*n.shiftY*Math.cos(i))/t.height;e.xCenter=e.xCenter+o,e.yCenter=e.yCenter+a}if(n.squareLong){var u=Math.max(r*t.width,s*t.height);r=u/t.width,s=u/t.height}else if(n.squareShort){var l=Math.min(r*t.width,s*t.height);r=l/t.width,s=l/t.height}return e.width=r*n.scaleX,e.height=s*n.scaleY,e}function cB(e,t){for(var n=function(V,ee){var J=V[0].x*ee.width,ie=V[0].y*ee.height,oe=(V[4].x+V[8].x)/2,fe=(V[4].y+V[8].y)/2;return oe=(oe+V[6].x)/2*ee.width,fe=(fe+V[6].y)/2*ee.height,hl(Math.PI/2-Math.atan2(-(fe-ie),oe-J))}(e,t),r=hl(-n),s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,u=0,l=e;u<l.length;u++){var f=(k=l[u]).x,h=k.y;s=Math.min(s,f),i=Math.max(i,f),o=Math.min(o,h),a=Math.max(a,h)}var p=(i+s)/2,y=(a+o)/2;s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(var v=0,w=e;v<w.length;v++){var k,S=((k=w[v]).x-p)*t.width,N=(k.y-y)*t.height,T=S*Math.cos(r)-N*Math.sin(r),x=S*Math.sin(r)+N*Math.cos(r);s=Math.min(s,T),i=Math.max(i,T),o=Math.min(o,x),a=Math.max(a,x)}var C=(i+s)/2,P=(a+o)/2,F=C*Math.cos(n)-P*Math.sin(n)+t.width*p,L=C*Math.sin(n)+P*Math.cos(n)+t.height*y,M=(i-s)/t.width,B=(a-o)/t.height;return{xCenter:F/t.width,yCenter:L/t.height,width:M,height:B,rotation:n}}var fB={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},cf={runtime:"tfjs",modelType:"full",maxHands:2,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"},ff={flipHorizontal:!1,staticImageMode:!1},hB={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2016,numCoords:18,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:7,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.5},pB=.3,dB={shiftX:0,shiftY:-.5,scaleX:2.6,scaleY:2.6,squareLong:!0},mB={shiftX:0,shiftY:-.1,scaleX:2,scaleY:2,squareLong:!0},yB={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},gB={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},vB={numLandmarks:21,inputImageWidth:224,inputImageHeight:224,normalizeZ:.4,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},wB={numLandmarks:21,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},pl,bB=function(){function e(t,n,r){this.detectorModel=t,this.landmarkModel=n,this.maxHands=r,this.prevHandRectsFromLandmarks=null,this.anchors=function(u){u.reduceBoxesInLowestLayer==null&&(u.reduceBoxesInLowestLayer=!1),u.interpolatedScaleAspectRatio==null&&(u.interpolatedScaleAspectRatio=1),u.fixedAnchorSize==null&&(u.fixedAnchorSize=!1);for(var l=[],f=0;f<u.numLayers;){for(var h=[],p=[],y=[],v=[],w=f;w<u.strides.length&&u.strides[w]===u.strides[f];){var k=n0(u.minScale,u.maxScale,w,u.strides.length);if(w===0&&u.reduceBoxesInLowestLayer)y.push(1),y.push(2),y.push(.5),v.push(.1),v.push(k),v.push(k);else{for(var S=0;S<u.aspectRatios.length;++S)y.push(u.aspectRatios[S]),v.push(k);if(u.interpolatedScaleAspectRatio>0){var N=w===u.strides.length-1?1:n0(u.minScale,u.maxScale,w+1,u.strides.length);v.push(Math.sqrt(k*N)),y.push(u.interpolatedScaleAspectRatio)}}w++}for(var T=0;T<y.length;++T){var x=Math.sqrt(y[T]);h.push(v[T]/x),p.push(v[T]*x)}var C=0,P=0;if(u.featureMapHeight.length>0)C=u.featureMapHeight[f],P=u.featureMapWidth[f];else{var F=u.strides[f];C=Math.ceil(u.inputSizeHeight/F),P=Math.ceil(u.inputSizeWidth/F)}for(var L=0;L<C;++L)for(var M=0;M<P;++M)for(var B=0;B<h.length;++B){var V={xCenter:(M+u.anchorOffsetX)/P,yCenter:(L+u.anchorOffsetY)/C,width:0,height:0};u.fixedAnchorSize?(V.width=1,V.height=1):(V.width=p[B],V.height=h[B]),l.push(V)}f=w}return l}(fB);var s=dt(this.anchors.map(function(u){return u.width})),i=dt(this.anchors.map(function(u){return u.height})),o=dt(this.anchors.map(function(u){return u.xCenter})),a=dt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:o,y:a,w:s,h:i}}return e.prototype.estimateHands=function(t,n){return $n(this,void 0,void 0,function(){var r,s,i,o,a,u,l,f,h,p,y,v,w,k,S,N,T,x,C=this;return On(this,function(P){switch(P.label){case 0:return r=function(M){if(M==null)return Et({},ff);var B=Et({},M);return B.flipHorizontal==null&&(B.flipHorizontal=ff.flipHorizontal),B.staticImageMode==null&&(B.staticImageMode=ff.staticImageMode),B}(n),t==null?(this.reset(),[2,[]]):(s=Jb(t),i=de(function(){var M=ze(Zb(t),"float32");return r.flipHorizontal&&(M=rt(Yl.flipLeftRight(Vn(M,0)),[0])),M}),o=this.prevHandRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxHands?[4,this.detectPalm(i)]:[3,2]);case 1:return(u=P.sent()).length===0?(this.reset(),i.dispose(),[2,[]]):(l=u.map(function(M){return C.palmDetectionToRoi(M,s)}),a=l,[3,3]);case 2:a=o,P.label=3;case 3:return F=.5,L=[],[a].forEach(function(M){return M.forEach(function(B){(L=L.filter(function(V){return Zz(B,V)<=F})).push(B)})}),a=L,[4,Promise.all(a.map(function(M){return C.handLandmarks(M,i)}))];case 4:for(f=P.sent(),h=[],this.prevHandRectsFromLandmarks=[],p=0,y=f;p<y.length;p++)(v=y[p])!=null&&(w=v.landmarks,k=v.worldLandmarks,S=v.handScore,N=v.handedness,this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(w,s)),(T=iB(w,s))!=null&&T.forEach(function(M,B){delete M.z,M.name=fl[B]}),(x=k)!=null&&x.forEach(function(M,B){M.name=fl[B]}),h.push({keypoints:T,keypoints3D:x,handedness:N,score:S}));return i.dispose(),[2,h]}var F,L})})},e.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),Fe([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){this.prevHandRectsFromLandmarks=null},e.prototype.detectPalm=function(t){return $n(this,void 0,void 0,function(){var n,r,s,i,o,a,u,l,f,h;return On(this,function(p){switch(p.label){case 0:return n=t0(t,yB),r=n.imageTensor,s=n.padding,i=this.detectorModel.predict(r),o=rB(i),a=o.boxes,[4,oB([u=o.logits,a],this.anchorTensor,hB)];case 1:return(l=p.sent()).length===0?(Fe([r,i,u,a]),[2,l]):[4,sB(l,this.maxHands,pB)];case 2:return f=p.sent(),h=function(y,v){y===void 0&&(y=[]);for(var w=v.left,k=v.top,S=v.left+v.right,N=v.top+v.bottom,T=0;T<y.length;T++){var x=y[T],C=x.locationData.relativeBoundingBox,P=(C.xMin-w)/(1-S),F=(C.yMin-k)/(1-N),L=C.width/(1-S),M=C.height/(1-N);C.xMin=P,C.yMin=F,C.width=L,C.height=M,C.xMax=P+L,C.yMax=F+M;var B=x.locationData.relativeKeypoints;B&&B.forEach(function(V){var ee=(V.x-w)/(1-S),J=(V.y-k)/(1-N);V.x=ee,V.y=J})}return y}(f,s),Fe([r,i,u,a]),[2,h]}})})},e.prototype.palmDetectionToRoi=function(t,n){return o0(nB(t,"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:2,rotationVectorTargetAngleDegree:90}),n,dB)},e.prototype.handLandmarks=function(t,n){return $n(this,void 0,void 0,function(){var r,s,i,o,a,u,l,f,h,p,y,v,w,k,S,N;return On(this,function(T){switch(T.label){case 0:return r=t0(n,gB,t),s=r.imageTensor,i=r.padding,o=this.landmarkModel.execute(s,["Identity_2:0","Identity_1:0","Identity:0","Identity_3:0"]),a=o[0],u=o[1],l=o[2],f=o[3],[4,u.data()];case 1:return(h=T.sent()[0])<.5?(Fe(o),Fe(s),[2,null]):[4,l.data()];case 2:return p=T.sent()[0],y=p>=.5?"Left":"Right",[4,i0(a,vB)];case 3:return v=T.sent(),[4,i0(f,wB)];case 4:return w=T.sent(),k=function(x,C){var P=C.left,F=C.top,L=C.left+C.right,M=C.top+C.bottom;return x.map(function(B){return Et(Et({},B),{x:(B.x-P)/(1-L),y:(B.y-F)/(1-M),z:B.z/(1-L)})})}(v,i),S=function(x,C,P){P===void 0&&(P={ignoreRotation:!1});for(var F=[],L=0,M=x;L<M.length;L++){var B=M[L],V=B.x-.5,ee=B.y-.5,J=P.ignoreRotation?0:C.rotation,ie=Math.cos(J)*V-Math.sin(J)*ee,oe=Math.sin(J)*V+Math.cos(J)*ee;ie=ie*C.width+C.xCenter,oe=oe*C.height+C.yCenter;var fe=B.z*C.width,Ee=Et({},B);Ee.x=ie,Ee.y=oe,Ee.z=fe,F.push(Ee)}return F}(k,t),N=function(x,C){for(var P=[],F=0,L=x;F<L.length;F++){var M=L[F],B=M.x,V=M.y,ee=C.rotation,J=Math.cos(ee)*B-Math.sin(ee)*V,ie=Math.sin(ee)*B+Math.cos(ee)*V,oe=Et({},M);oe.x=J,oe.y=ie,P.push(oe)}return P}(w,t),Fe(o),Fe(s),[2,{landmarks:S,worldLandmarks:N,handScore:h,handedness:y}]}})})},e.prototype.handLandmarksToRoi=function(t,n){return o0(cB([].concat(t.slice(0,4),t.slice(5,7),t.slice(9,11),t.slice(13,15),t.slice(17,19)),n),n,mB)},e}();function SB(e){return $n(this,void 0,void 0,function(){var t,n,r,s,i,o;return On(this,function(a){switch(a.label){case 0:return t=function(u){if(u==null)return Et({},cf);var l=Et({},u);if(l.runtime="tfjs",l.maxHands==null&&(l.maxHands=cf.maxHands),l.modelType==null&&(l.modelType=cf.modelType),l.modelType!=="lite"&&l.modelType!=="full")throw new Error("Model type must be one of lite or full, but got "+l.modelType);return l.detectorModelUrl==null&&(l.modelType==="lite"?l.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1":l.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1"),l.landmarkModelUrl==null&&(l.modelType==="lite"?l.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1":l.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"),l}(e),n=t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([Zg(t.detectorModelUrl,{fromTFHub:n}),Zg(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return s=a.sent(),i=s[0],o=s[1],[2,new bB(i,o,t.maxHands)]}})})}function NB(e,t){return $n(this,void 0,void 0,function(){var n,r;return On(this,function(s){if(e===pl.MediaPipeHands){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,SB(n)];if(n.runtime==="mediapipe")return[2,Jz(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}(function(e){e.MediaPipeHands="MediaPipeHands"})(pl||(pl={}));const EB=pl.MediaPipeHands,TB=({onThumbs:e,stream:t})=>{const n=pt.useRef(null),r=pt.useRef(null),[s,i]=pt.useState(),o=pt.useRef(!1);return pt.useEffect(()=>{(()=>{t&&(n.current.srcObject=t,n.current.play())})()},[t]),pt.useEffect(()=>o.current?void 0:(o.current=!0,(async()=>{i(await NB(EB,ux))})(),()=>{s==null||s.dispose()}),[s]),pt.useEffect(()=>{if(!s)return;const a=async l=>{if(!r.current||!r.current.getContext("2d")||n.current===null||n.current.readyState!==4)return;const h=n.current,{videoWidth:p,videoHeight:y}=h;r.current.width=p,r.current.height=y;const v=await l.estimateHands(h);v&&v.forEach(({keypoints:w})=>{w[0].y<w[4].y?e(1-w[0].y/w[4].y):e(w[4].y/w[0].y-1)})},u=setInterval(()=>{a(s)},10);return()=>{clearInterval(u)}},[e,s]),Re.jsxs("div",{className:"camera_container",children:[Re.jsx("video",{ref:n,className:"position"}),Re.jsx("canvas",{ref:r,className:"position"})]})};function kB(){const{data:t,error:n,isLoading:r,fetchNextPage:s,isFetchingNextPage:i}=x2({pageSize:4}),o=pt.useMemo(()=>({video:!0}),[]),{stream:a}=KT(o),u=l=>{window.scrollBy(0,window.innerHeight*l*.1)};return n?Re.jsx("div",{children:n.message}):Re.jsxs("div",{className:"container",children:[a&&Re.jsx("div",{children:Re.jsx(TB,{onThumbs:u,stream:a})}),Re.jsx(rx,{isLoading:r||i,fetchNextPage:s,children:t==null?void 0:t.pages.map(l=>l.map(f=>Re.jsx("div",{children:Re.jsx("img",{src:f.urls.regular,alt:f.id,className:"photo-size"})},f.id)))})]})}const xB=new CT;hf.createRoot(document.getElementById("root")).render(Re.jsx(BT,{client:xB,children:Re.jsx(kB,{})}));
