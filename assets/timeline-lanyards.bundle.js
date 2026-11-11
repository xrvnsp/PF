var mC=Object.create;var pF=Object.defineProperty;var IC=Object.getOwnPropertyDescriptor;var xC=Object.getOwnPropertyNames;var gC=Object.getPrototypeOf,FC=Object.prototype.hasOwnProperty;var vC=(t,e)=>()=>(t&&(e=t(t=0)),e);var Br=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var SC=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of xC(e))!FC.call(t,n)&&n!==a&&pF(t,n,{get:()=>e[n],enumerable:!(o=IC(e,n))||o.enumerable});return t};var mn=(t,e,a)=>(a=t!=null?mC(gC(t)):{},SC(e||!t||!t.__esModule?pF(a,"default",{value:t,enumerable:!0}):a,t));var CF=Br(yt=>{"use strict";ht();var gm=Symbol.for("react.transitional.element"),yC=Symbol.for("react.portal"),MC=Symbol.for("react.fragment"),bC=Symbol.for("react.strict_mode"),_C=Symbol.for("react.profiler"),CC=Symbol.for("react.consumer"),TC=Symbol.for("react.context"),wC=Symbol.for("react.forward_ref"),AC=Symbol.for("react.suspense"),EC=Symbol.for("react.memo"),gF=Symbol.for("react.lazy"),RC=Symbol.for("react.activity"),DC=Symbol.for("react.view_transition"),hF=Symbol.iterator;function LC(t){return t===null||typeof t!="object"?null:(t=hF&&t[hF]||t["@@iterator"],typeof t=="function"?t:null)}var FF={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vF=Object.assign,SF={};function _i(t,e,a){this.props=t,this.context=e,this.refs=SF,this.updater=a||FF}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yF(){}yF.prototype=_i.prototype;function Fm(t,e,a){this.props=t,this.context=e,this.refs=SF,this.updater=a||FF}var vm=Fm.prototype=new yF;vm.constructor=Fm;vF(vm,_i.prototype);vm.isPureReactComponent=!0;var mF=Array.isArray;function xm(){}var ra={H:null,A:null,T:null,S:null},MF=Object.prototype.hasOwnProperty;function Sm(t,e,a){var o=a.ref;return{$$typeof:gm,type:t,key:e,ref:o!==void 0?o:null,props:a}}function PC(t,e){return Sm(t.type,e,t.props)}function ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===gm}function BC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var IF=/\/+/g;function Im(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BC(""+t.key):e.toString(36)}function kC(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(xm,xm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function bi(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case gm:case yC:s=!0;break;case gF:return s=t._init,bi(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+Im(t,0):o,mF(n)?(a="",s!=null&&(a=s.replace(IF,"$&/")+"/"),bi(n,e,a,"",function(c){return c})):n!=null&&(ym(n)&&(n=PC(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(IF,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(mF(t))for(var l=0;l<t.length;l++)o=t[l],r=i+Im(o,l),s+=bi(o,e,a,r,n);else if(l=LC(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+Im(o,l++),s+=bi(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return bi(kC(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function mu(t,e,a){if(t==null)return t;var o=[],n=0;return bi(t,o,"","",function(r){return e.call(a,r,n++)}),o}function UC(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var xF=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function bF(t){var e=ra.T,a={};a.types=e!==null?e.types:null,ra.T=a;try{var o=t(),n=ra.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(xm,xF)}catch(r){xF(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),ra.T=e}}function _F(t){var e=ra.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else bF(_F.bind(null,t))}var NC={map:mu,forEach:function(t,e,a){mu(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return mu(t,function(){e++}),e},toArray:function(t){return mu(t,function(e){return e})||[]},only:function(t){if(!ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};yt.Activity=RC;yt.Children=NC;yt.Component=_i;yt.Fragment=MC;yt.Profiler=_C;yt.PureComponent=Fm;yt.StrictMode=bC;yt.Suspense=AC;yt.ViewTransition=DC;yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ra;yt.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ra.H.useMemoCache(t)}};yt.addTransitionType=_F;yt.cache=function(t){return function(){return t.apply(null,arguments)}};yt.cacheSignal=function(){return null};yt.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=vF({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!MF.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return Sm(t.type,n,o)};yt.createContext=function(t){return t={$$typeof:TC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:CC,_context:t},t};yt.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)MF.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return Sm(t,r,n)};yt.createRef=function(){return{current:null}};yt.forwardRef=function(t){return{$$typeof:wC,render:t}};yt.isValidElement=ym;yt.lazy=function(t){return{$$typeof:gF,_payload:{_status:-1,_result:t},_init:UC}};yt.memo=function(t,e){return{$$typeof:EC,type:t,compare:e===void 0?null:e}};yt.startTransition=bF;yt.unstable_useCacheRefresh=function(){return ra.H.useCacheRefresh()};yt.use=function(t){return ra.H.use(t)};yt.useActionState=function(t,e,a){return ra.H.useActionState(t,e,a)};yt.useCallback=function(t,e){return ra.H.useCallback(t,e)};yt.useContext=function(t){return ra.H.useContext(t)};yt.useDebugValue=function(){};yt.useDeferredValue=function(t,e){return ra.H.useDeferredValue(t,e)};yt.useEffect=function(t,e){return ra.H.useEffect(t,e)};yt.useEffectEvent=function(t){return ra.H.useEffectEvent(t)};yt.useId=function(){return ra.H.useId()};yt.useImperativeHandle=function(t,e,a){return ra.H.useImperativeHandle(t,e,a)};yt.useInsertionEffect=function(t,e){return ra.H.useInsertionEffect(t,e)};yt.useLayoutEffect=function(t,e){return ra.H.useLayoutEffect(t,e)};yt.useMemo=function(t,e){return ra.H.useMemo(t,e)};yt.useOptimistic=function(t,e){return ra.H.useOptimistic(t,e)};yt.useReducer=function(t,e,a){return ra.H.useReducer(t,e,a)};yt.useRef=function(t){return ra.H.useRef(t)};yt.useState=function(t){return ra.H.useState(t)};yt.useSyncExternalStore=function(t,e,a){return ra.H.useSyncExternalStore(t,e,a)};yt.useTransition=function(){return ra.H.useTransition()};yt.version="19.3.0"});var Lo=Br((gB,TF)=>{"use strict";ht();TF.exports=CF()});var ke,ht=vC(()=>{ke=mn(Lo())});var UF=Br(ha=>{"use strict";ht();function Cm(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<Iu(n,e))t[o]=e,t[a]=n,a=o;else break e}}function Ln(t){return t.length===0?null:t[0]}function gu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>Iu(i,a))l<n&&0>Iu(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>Iu(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function Iu(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}ha.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(wF=performance,ha.unstable_now=function(){return wF.now()}):(Mm=Date,AF=Mm.now(),ha.unstable_now=function(){return Mm.now()-AF});var wF,Mm,AF,ir=[],kr=[],OC=1,jo=null,ao=3,Tm=!1,hc=!1,mc=!1,wm=!1,DF=typeof setTimeout=="function"?setTimeout:null,LF=typeof clearTimeout=="function"?clearTimeout:null,EF=typeof setImmediate<"u"?setImmediate:null;function xu(t){for(var e=Ln(kr);e!==null;){if(e.callback===null)gu(kr);else if(e.startTime<=t)gu(kr),e.sortIndex=e.expirationTime,Cm(ir,e);else break;e=Ln(kr)}}function Am(t){if(mc=!1,xu(t),!hc)if(Ln(ir)!==null)hc=!0,Ti||(Ti=!0,Ci());else{var e=Ln(kr);e!==null&&Em(Am,e.startTime-t)}}var Ti=!1,Ic=-1,PF=5,BF=-1;function kF(){return wm?!0:!(ha.unstable_now()-BF<PF)}function bm(){if(wm=!1,Ti){var t=ha.unstable_now();BF=t;var e=!0;try{e:{hc=!1,mc&&(mc=!1,LF(Ic),Ic=-1),Tm=!0;var a=ao;try{t:{for(xu(t),jo=Ln(ir);jo!==null&&!(jo.expirationTime>t&&kF());){var o=jo.callback;if(typeof o=="function"){jo.callback=null,ao=jo.priorityLevel;var n=o(jo.expirationTime<=t);if(t=ha.unstable_now(),typeof n=="function"){jo.callback=n,xu(t),e=!0;break t}jo===Ln(ir)&&gu(ir),xu(t)}else gu(ir);jo=Ln(ir)}if(jo!==null)e=!0;else{var r=Ln(kr);r!==null&&Em(Am,r.startTime-t),e=!1}}break e}finally{jo=null,ao=a,Tm=!1}e=void 0}}finally{e?Ci():Ti=!1}}}var Ci;typeof EF=="function"?Ci=function(){EF(bm)}:typeof MessageChannel<"u"?(_m=new MessageChannel,RF=_m.port2,_m.port1.onmessage=bm,Ci=function(){RF.postMessage(null)}):Ci=function(){DF(bm,0)};var _m,RF;function Em(t,e){Ic=DF(function(){t(ha.unstable_now())},e)}ha.unstable_IdlePriority=5;ha.unstable_ImmediatePriority=1;ha.unstable_LowPriority=4;ha.unstable_NormalPriority=3;ha.unstable_Profiling=null;ha.unstable_UserBlockingPriority=2;ha.unstable_cancelCallback=function(t){t.callback=null};ha.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):PF=0<t?Math.floor(1e3/t):5};ha.unstable_getCurrentPriorityLevel=function(){return ao};ha.unstable_next=function(t){switch(ao){case 1:case 2:case 3:var e=3;break;default:e=ao}var a=ao;ao=e;try{return t()}finally{ao=a}};ha.unstable_requestPaint=function(){wm=!0};ha.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ao;ao=t;try{return e()}finally{ao=a}};ha.unstable_scheduleCallback=function(t,e,a){var o=ha.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:OC++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,Cm(kr,t),Ln(ir)===null&&t===Ln(kr)&&(mc?(LF(Ic),Ic=-1):mc=!0,Em(Am,a-o))):(t.sortIndex=n,Cm(ir,t),hc||Tm||(hc=!0,Ti||(Ti=!0,Ci()))),t};ha.unstable_shouldYield=kF;ha.unstable_wrapCallback=function(t){var e=ao;return function(){var a=ao;ao=e;try{return t.apply(this,arguments)}finally{ao=a}}}});var OF=Br((MB,NF)=>{"use strict";ht();NF.exports=UF()});var VF=Br(oo=>{"use strict";ht();var zC=Lo();function HF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ur(){}var uo={d:{f:Ur,r:function(){throw Error(HF(522))},D:Ur,C:Ur,L:Ur,m:Ur,X:Ur,S:Ur,M:Ur},p:0,findDOMNode:null},HC=Symbol.for("react.portal"),VC=Symbol.for("react.recoverable"),zF=Symbol.for("react.optimistic_key");function GC(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:HC,key:o==null?null:o===zF?zF:""+o,children:t,containerInfo:e,implementation:a}}var xc=zC.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}oo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=uo;oo.browser=function(t){return{$$typeof:VC,_reason:t}};oo.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(HF(299));return GC(t,e,null,a)};oo.flushSync=function(t){var e=xc.T,a=uo.p;try{if(xc.T=null,uo.p=2,t)return t()}finally{xc.T=e,uo.p=a,uo.d.f()}};oo.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,uo.d.C(t,e))};oo.prefetchDNS=function(t){typeof t=="string"&&uo.d.D(t)};oo.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=Fu(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?uo.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&uo.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};oo.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Fu(e.as,e.crossOrigin);uo.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&uo.d.M(t)};oo.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=Fu(a,e.crossOrigin);uo.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};oo.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Fu(e.as,e.crossOrigin);uo.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else uo.d.m(t)};oo.requestFormReset=function(t){uo.d.r(t)};oo.unstable_batchedUpdates=function(t,e){return t(e)};oo.useFormState=function(t,e,a){return xc.H.useFormState(t,e,a)};oo.useFormStatus=function(){return xc.H.useHostTransitionStatus()};oo.version="19.3.0"});var WF=Br((TB,qF)=>{"use strict";ht();function GF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GF)}catch(t){console.error(t)}}GF(),qF.exports=VF()});var RM=Br(ep=>{"use strict";ht();var Ua=OF(),ES=Lo(),qC=WF();function pe(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function RS(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nf(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function DS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function LS(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function XF(t){if(nf(t)!==t)throw Error(pe(188))}function WC(t){var e=t.alternate;if(!e){if(e=nf(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return XF(n),t;if(r===o)return XF(n),e;r=r.sibling}throw Error(pe(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(pe(189))}}if(a.alternate!==o)throw Error(pe(190))}if(a.tag!==3)throw Error(pe(188));return a.stateNode.current===a?t:e}function PS(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=PS(t),e!==null)return e;t=t.sibling}return null}function wo(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&wo(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function ei(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function YF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function BS(t){var e=[null,null],a=ei(t);return a===null||kS(e,t,a.child,{foundSelf:!1}),e}function kS(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&kS(t,e,a.child,o))return!0;a=a.sibling}return!1}function ka(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(pe(559))}}var Pi=null,lI=null;function XC(t,e,a){return t===a?!0:t===e?(Pi=t,!0):!1}function YC(t,e,a){return t===a?(lI=t,!1):t===e?(lI!==null&&(Pi=t),!0):!1}function ZF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function cI(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var aa=Object.assign,ZC=Symbol.for("react.element"),vu=Symbol.for("react.transitional.element"),bc=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),US=Symbol.for("react.strict_mode"),fI=Symbol.for("react.profiler"),NS=Symbol.for("react.consumer"),On=Symbol.for("react.context"),F0=Symbol.for("react.forward_ref"),uI=Symbol.for("react.suspense"),dI=Symbol.for("react.suspense_list"),v0=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy");Symbol.for("react.scope");var pI=Symbol.for("react.activity"),KC=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var JC=Symbol.for("react.memo_cache_sentinel"),hI=Symbol.for("react.view_transition"),QC=Symbol.for("react.recoverable"),KF=Symbol.iterator;function gc(t){return t===null||typeof t!="object"?null:(t=KF&&t[KF]||t["@@iterator"],typeof t=="function"?t:null)}var jC=Symbol.for("react.client.reference");function mI(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===jC?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case fI:return"Profiler";case US:return"StrictMode";case uI:return"Suspense";case dI:return"SuspenseList";case pI:return"Activity";case hI:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case bc:return"Portal";case On:return t.displayName||"Context";case NS:return(t._context.displayName||"Context")+".Consumer";case F0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case v0:return e=t.displayName||null,e!==null?e:mI(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return mI(t(e))}catch{}}return null}var _c=Array.isArray,Ft=ES.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=qC.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hs={pending:!1,data:null,method:null,action:null},II=[],ki=-1;function Xn(t){return{current:t}}function Qa(t){0>ki||(t.current=II[ki],II[ki]=null,ki--)}function la(t,e){ki++,II[ki]=t.current,t.current=e}var Gn=Xn(null),Vc=Xn(null),Jr=Xn(null),sd=Xn(null);function id(t,e){switch(la(Jr,e),la(Vc,t),la(Gn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?cS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=cS(e),t=sM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Qa(Gn),la(Gn,t)}function al(){Qa(Gn),Qa(Vc),Qa(Jr)}function xI(t){var e=t.memoizedState;e!==null&&(dl._currentValue=e.memoizedState,la(sd,t)),e=Gn.current;var a=sM(e,t.type);e!==a&&(la(Vc,t),la(Gn,a))}function ld(t){Vc.current===t&&(Qa(Gn),Qa(Vc)),sd.current===t&&(Qa(sd),dl._currentValue=Hs)}var Rm,JF;function Or(t){if(Rm===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Rm=e&&e[1]||"",JF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rm+t+JF}var Dm=!1;function Lm(t,e){if(!t||Dm)return"";Dm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(m){var f=m}Reflect.construct(t,[],h)}else{try{h.call()}catch(m){f=m}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(m){f=m}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(m){if(m&&f&&typeof m.stack=="string")return[m.stack,f.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var u=`
`+l[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=n);break}}}finally{Dm=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Or(a):""}function $C(t,e){switch(t.tag){case 26:case 27:case 5:return Or(t.type);case 16:return Or("Lazy");case 13:return t.child!==e&&e!==null?Or("Suspense Fallback"):Or("Suspense");case 19:return Or("SuspenseList");case 0:case 15:return Lm(t.type,!1);case 11:return Lm(t.type.render,!1);case 1:return Lm(t.type,!0);case 31:return Or("Activity");case 30:return Or("ViewTransition");default:return""}}function QF(t){try{var e="",a=null;do e+=$C(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var gI=Object.prototype.hasOwnProperty,S0=Ua.unstable_scheduleCallback,Pm=Ua.unstable_cancelCallback,eT=Ua.unstable_shouldYield,tT=Ua.unstable_requestPaint,Oo=Ua.unstable_now,aT=Ua.unstable_getCurrentPriorityLevel,OS=Ua.unstable_ImmediatePriority,zS=Ua.unstable_UserBlockingPriority,cd=Ua.unstable_NormalPriority,oT=Ua.unstable_LowPriority,HS=Ua.unstable_IdlePriority,nT=Ua.log,rT=Ua.unstable_setDisableYieldValue,rf=null,zo=null;function qr(t){if(typeof nT=="function"&&rT(t),zo&&typeof zo.setStrictMode=="function")try{zo.setStrictMode(rf,t)}catch{}}var Ho=Math.clz32?Math.clz32:lT,sT=Math.log,iT=Math.LN2;function lT(t){return t>>>=0,t===0?32:31-(sT(t)/iT|0)|0}var Su=256,yu=262144,Mu=4194304;function ks(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bd(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=ks(o):(s&=i,s!==0?n=ks(s):a||(a=i&~t,a!==0&&(n=ks(a))))):(i=o&~r,i!==0?n=ks(i):s!==0?n=ks(s):a||(a=o&~t,a!==0&&(n=ks(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function sf(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function VS(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-Ho(a),n=1<<o;e|=t[o],a&=~n}return e}function cT(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(){var t=Mu;return Mu<<=1,!(Mu&62914560)&&(Mu=4194304),t}function Bm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function lf(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fT(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var u=31-Ho(a),h=1<<u;i[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var d=f[u];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&qS(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function qS(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Ho(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function WS(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-Ho(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function XS(t,e){var a=e&-e;return a=a&42?1:y0(a),a&(t.suspendedLanes|e)?0:a}function y0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function M0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function YS(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:wM(t.type))}function jF(t,e){var a=qt.p;try{return qt.p=t,e()}finally{qt.p=a}}var vr=Math.random().toString(36).slice(2),Ka="__reactFiber$"+vr,Ao="__reactProps$"+vr,ml="__reactContainer$"+vr,$F="__reactEvents$"+vr,uT="__reactListeners$"+vr,dT="__reactHandles$"+vr,ev="__reactResources$"+vr,cf="__reactMarker$"+vr,fd="__reactLoad$"+vr;function kd(t){delete t[Ka],delete t[Ao],delete t[uT],delete t[dT]}function Os(t){var e;if(e=t[Ka])return e;for(var a=t.parentNode;a;){if(e=a[ml]||a[Ka]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=xS(t);t!==null;){if(a=t[Ka])return a;t=xS(t)}return e}t=a,a=t.parentNode}return null}function Il(t){if(t=t[Ka]||t[ml]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Cc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(pe(33))}function Xi(t){var e=t[ev];return e||(e=t[ev]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ga(t){t[cf]=!0}function ZS(t){t[fd]=void 0}var KS=new Set,JS={};function ti(t,e){ol(t,e),ol(t+"Capture",e)}function ol(t,e){for(JS[t]=e,t=0;t<e.length;t++)KS.add(e[t])}var pT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tv={},av={};function hT(t){return gI.call(av,t)?!0:gI.call(tv,t)?!1:pT.test(t)?av[t]=!0:(tv[t]=!0,!1)}var Vt=!1;function ov(){var t=Vt;return Vt=!1,t}function Hu(t,e,a){if(hT(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function bu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function lr(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function Bo(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function QS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mT(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function FI(t){if(!t._valueTracker){var e=QS(t)?"checked":"value";t._valueTracker=mT(t,e,""+t[e])}}function jS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=QS(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var IT=/[\n"\\]/g;function on(t){return t.replace(IT,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vI(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Bo(e)):t.value!==""+Bo(e)&&(t.value=""+Bo(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?km(t,Bo(t.value)):km(t,Bo(e)):a!=null?km(t,Bo(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+Bo(i):t.removeAttribute("name")}function $S(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){FI(t);return}a=a!=null?""+Bo(a):"",e=e!=null?""+Bo(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),FI(t)}function km(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Yi(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Bo(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ey(t,e,a){if(e!=null&&(e=""+Bo(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Bo(a):""}function ty(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(pe(92));if(_c(o)){if(1<o.length)throw Error(pe(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=Bo(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),FI(t)}function nl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var xT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nv(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||xT.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ay(t,e,a){if(e!=null&&typeof e!="object")throw Error(pe(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",Vt=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(nv(t,n,o),Vt=!0)}else for(var r in e)e.hasOwnProperty(r)&&nv(t,r,e[r])}function b0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vu(t){return FT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zn(){}var SI=null;function _0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ui=null,Zi=null;function rv(t){var e=Il(t);if(e&&(t=e.stateNode)){var a=t[Ao]||null;e:switch(t=e.stateNode,e.type){case"input":if(vI(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+on(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[Ao]||null;if(!n)throw Error(pe(90));vI(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&jS(o)}break e;case"textarea":ey(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Yi(t,!!a.multiple,e,!1)}}}var Um=!1;function oy(t,e,a){if(Um)return t(e,a);Um=!0;try{var o=t(e);return o}finally{if(Um=!1,(Ui!==null||Zi!==null)&&(Jd(),Ui&&(e=Ui,t=Zi,Zi=Ui=null,rv(e),t)))for(e=0;e<t.length;e++)rv(t[e])}}function Gc(t,e){var a=t.stateNode;if(a===null)return null;var o=a[Ao]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(pe(231,e,typeof a));return a}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yI=!1;if(hr)try{wi={},Object.defineProperty(wi,"passive",{get:function(){yI=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{yI=!1}var wi,Wr=null,C0=null,Gu=null;function ny(){if(Gu)return Gu;var t,e=C0,a=e.length,o,n="value"in Wr?Wr.value:Wr.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return Gu=n.slice(t,1<o?1-o:void 0)}function qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function sv(){return!1}function Io(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?_u:sv,this.isPropagationStopped=sv,this}return aa(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=Io(us),ff=aa({},us,{view:0,detail:0}),vT=Io(ff),Nm,Om,Fc,Nd=aa({},ff,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:T0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fc&&(Fc&&t.type==="mousemove"?(Nm=t.screenX-Fc.screenX,Om=t.screenY-Fc.screenY):Om=Nm=0,Fc=t),Nm)},movementY:function(t){return"movementY"in t?t.movementY:Om}}),iv=Io(Nd),ST=aa({},Nd,{dataTransfer:0}),yT=Io(ST),MT=aa({},ff,{relatedTarget:0}),zm=Io(MT),bT=aa({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),_T=Io(bT),CT=aa({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TT=Io(CT),wT=aa({},us,{data:0}),lv=Io(wT),AT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ET={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RT[t])?!!e[t]:!1}function T0(){return DT}var LT=aa({},ff,{key:function(t){if(t.key){var e=AT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ET[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:T0,charCode:function(t){return t.type==="keypress"?qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PT=Io(LT),BT=aa({},Nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cv=Io(BT),kT=aa({},us,{submitter:0}),UT=Io(kT),NT=aa({},ff,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:T0}),OT=Io(NT),zT=aa({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),HT=Io(zT),VT=aa({},Nd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GT=Io(VT),qT=aa({},us,{newState:0,oldState:0,source:0}),WT=Io(qT),XT=[9,13,27,32],w0=hr&&"CompositionEvent"in window,Ac=null;hr&&"documentMode"in document&&(Ac=document.documentMode);var YT=hr&&"TextEvent"in window&&!Ac,ry=hr&&(!w0||Ac&&8<Ac&&11>=Ac),fv=" ",uv=!1;function sy(t,e){switch(t){case"keyup":return XT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function ZT(t,e){switch(t){case"compositionend":return iy(e);case"keypress":return e.which!==32?null:(uv=!0,fv);case"textInput":return t=e.data,t===fv&&uv?null:t;default:return null}}function KT(t,e){if(Ni)return t==="compositionend"||!w0&&sy(t,e)?(t=ny(),Gu=C0=Wr=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ry&&e.locale!=="ko"?null:e.data;default:return null}}var JT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JT[t.type]:e==="textarea"}function ly(t,e,a,o){Ui?Zi?Zi.push(o):Zi=[o]:Ui=o,e=Dd(e,"onChange"),0<e.length&&(a=new Ud("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var Ec=null,qc=null;function QT(t){oM(t,0)}function Od(t){var e=Cc(t);if(jS(e))return t}function pv(t,e){if(t==="change")return e}var cy=!1;hr&&(hr?(Tu="oninput"in document,Tu||(Hm=document.createElement("div"),Hm.setAttribute("oninput","return;"),Tu=typeof Hm.oninput=="function"),Cu=Tu):Cu=!1,cy=Cu&&(!document.documentMode||9<document.documentMode));var Cu,Tu,Hm;function hv(){Ec&&(Ec.detachEvent("onpropertychange",fy),qc=Ec=null)}function fy(t){if(t.propertyName==="value"&&Od(qc)){var e=[];ly(e,qc,t,_0(t)),oy(QT,e)}}function jT(t,e,a){t==="focusin"?(hv(),Ec=e,qc=a,Ec.attachEvent("onpropertychange",fy)):t==="focusout"&&hv()}function $T(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Od(qc)}function ew(t,e){if(t==="click")return Od(e)}function tw(t,e){if(t==="input"||t==="change")return Od(e)}function aw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Go=typeof Object.is=="function"?Object.is:aw;function Wc(t,e){if(Go(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!gI.call(e,n)||!Go(t[n],e[n]))return!1}return!0}function MI(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iv(t,e){var a=mv(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mv(a)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=MI(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=MI(t.document)}return e}function A0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ow=hr&&"documentMode"in document&&11>=document.documentMode,Oi=null,bI=null,Rc=null,_I=!1;function xv(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_I||Oi==null||Oi!==MI(o)||(o=Oi,"selectionStart"in o&&A0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rc&&Wc(Rc,o)||(Rc=o,o=Dd(bI,"onSelect"),0<o.length&&(e=new Ud("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Oi)))}function Ps(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var zi={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Vm={},py={};hr&&(py=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function ai(t){if(Vm[t])return Vm[t];if(!zi[t])return t;var e=zi[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in py)return Vm[t]=e[a];return t}var hy=ai("animationend"),my=ai("animationiteration"),Iy=ai("animationstart"),nw=ai("transitionrun"),rw=ai("transitionstart"),sw=ai("transitioncancel"),xy=ai("transitionend"),gy=new Map,CI="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");CI.push("scrollEnd");function Sn(t,e){gy.set(t,e),ti(e,[t])}var iw=0;function mr(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=vn.identifierPrefix;var a=iw++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function gv(t){if(t==null||typeof t=="string")return t;var e=null,a=tl;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function Sr(t,e){return t=gv(t),e=gv(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var ud=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},en=[],Hi=0,E0=0;function zd(){for(var t=Hi,e=E0=Hi=0;e<t;){var a=en[e];en[e++]=null;var o=en[e];en[e++]=null;var n=en[e];en[e++]=null;var r=en[e];if(en[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&Fy(a,n,r)}}function Hd(t,e,a,o){en[Hi++]=t,en[Hi++]=e,en[Hi++]=a,en[Hi++]=o,E0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function R0(t,e,a,o){return Hd(t,e,a,o),dd(t)}function oi(t,e){return Hd(t,null,null,e),dd(t)}function Fy(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-Ho(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function dd(t){if(50<Hc)throw Hc=0,ed=null,Error(pe(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Vi={};function lw(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Co(t,e,a,o){return new lw(t,e,a,o)}function D0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dr(t,e){var a=t.alternate;return a===null?(a=Co(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vy(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Wu(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")D0(o)&&(s=1);else if(typeof o=="string")s=PA(t,a,Gn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case pI:return t=Co(31,a,e,n),t.elementType=pI,t.lanes=r,t;case Bi:return Vs(a.children,n,r,e);case US:s=8,n|=24;break;case fI:return t=Co(12,a,e,n|2),t.elementType=fI,t.lanes=r,t;case uI:return t=Co(13,a,e,n),t.elementType=uI,t.lanes=r,t;case dI:return t=Co(19,a,e,n),t.elementType=dI,t.lanes=r,t;case KC:case hI:return t=n|32,t=Co(30,a,e,t),t.elementType=hI,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case On:s=10;break e;case NS:s=9;break e;case F0:s=11;break e;case v0:s=14;break e;case Hr:s=16,o=null;break e}s=29,a=Error(pe(130,t===null?"null":typeof t,"")),o=null}return e=Co(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function Vs(t,e,a,o){return t=Co(7,t,o,e),t.lanes=a,t}function Gm(t,e,a){return t=Co(6,t,null,e),t.lanes=a,t}function Sy(t){var e=Co(18,null,null,0);return e.stateNode=t,e}function qm(t,e,a){return e=Co(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Fv=new WeakMap;function nn(t,e){if(typeof t=="object"&&t!==null){var a=Fv.get(t);return a!==void 0?a:(e={value:t,source:e,stack:QF(e)},Fv.set(t,e),e)}return{value:t,source:e,stack:QF(e)}}var Gi=[],qi=0,pd=null,Xc=0,tn=[],an=0,ss=null,Hn=1,Vn="";function fr(t,e){Gi[qi++]=Xc,Gi[qi++]=pd,pd=t,Xc=e}function yy(t,e,a){tn[an++]=Hn,tn[an++]=Vn,tn[an++]=ss,ss=t;var o=Hn;t=Vn;var n=32-Ho(o)-1;o&=~(1<<n),a+=1;var r=32-Ho(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Hn=1<<32-Ho(e)+n|a<<n|o,Vn=r+t}else Hn=1<<r|a<<n|o,Vn=t}function Vd(t){t.return!==null&&(fr(t,1),yy(t,1,0))}function L0(t){for(;t===pd;)pd=Gi[--qi],Gi[qi]=null,Xc=Gi[--qi],Gi[qi]=null;for(;t===ss;)ss=tn[--an],tn[an]=null,Vn=tn[--an],tn[an]=null,Hn=tn[--an],tn[an]=null}function My(t,e){tn[an++]=Hn,tn[an++]=Vn,tn[an++]=ss,Hn=e.id,Vn=e.overflow,ss=t}var qa=null,ia=null,Et=!1,Qr=null,rn=!1,TI=Error(pe(519));function is(t){var e=Error(pe(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yc(nn(e,t)),TI}function vv(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Ka]=t,e[Ao]=o,a){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(a=0;a<Qc.length;a++)Dt(Qc[a],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),$S(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),ty(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||rM(e.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),o.onScroll!=null&&Dt("scroll",e),o.onScrollEnd!=null&&Dt("scrollend",e),o.onClick!=null&&(e.onclick=zn),e=!0):e=!1,e||is(t,!0)}function hd(t){for(qa=t.return;qa;)switch(qa.tag){case 5:case 31:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:qa=qa.return}}function Ai(t){if(t!==qa)return!1;if(!Et)return hd(t),Et=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||u0(t.type,t.memoizedProps)),a=!a),a&&ia&&is(t),hd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));ia=IS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));ia=IS(t)}else e===27?(e=ia,ds(t.type)?(t=m0,m0=null,ia=t):ia=e):ia=qa?sn(t.stateNode.nextSibling):null;return!0}function Xs(){ia=qa=null,Et=!1}function Wm(){var t=Qr;return t!==null&&(bo===null?bo=t:bo.push.apply(bo,t),Qr=null),t}function Yc(t){Qr===null?Qr=[t]:Qr.push(t)}var wI=Xn(null),ni=null,ur=null;function Xr(t,e,a){la(wI,e._currentValue),e._currentValue=a}function pr(t){t._currentValue=wI.current,Qa(wI)}function Xu(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function AI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Xu(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(pe(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Xu(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Xu(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Ys(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(pe(387));if(s=s.memoizedProps,s!==null){var i=n.type;Go(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===sd.current){if(s=n.alternate,s===null)throw Error(pe(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(dl):t=[dl])}n=n.return}return t!==null&&AI(e,t,a,o),e.flags|=262144,t!==null}function md(t){for(t=t.firstContext;t!==null;){if(!Go(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){ni=t,ur=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ja(t){return by(ni,t)}function wu(t,e){return ni===null&&Zs(t),by(t,e)}function by(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ur===null){if(t===null)throw Error(pe(308));ur=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ur=ur.next=e;return a}var cw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},fw=Ua.unstable_scheduleCallback,uw=Ua.unstable_NormalPriority,Aa={$$typeof:On,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function P0(){return{controller:new cw,data:new Map,refCount:0}}function uf(t){t.refCount--,t.refCount===0&&fw(uw,function(){t.controller.abort()})}function Sv(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var Tc=null;function dw(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Dc=null,EI=0,Ks=0,Ki=null;function pw(t,e){if(Dc===null){var a=Dc=[];EI=0,Ks=lx(),Ki={status:"pending",value:void 0,then:function(o){a.push(o)}}}return EI++,e.then(yv,yv),e}function yv(){if(--EI===0&&(Tc=null,Dc!==null)){Ki!==null&&(Ki.status="fulfilled");var t=Dc;Dc=null,Ks=0,Ki=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function hw(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Mv=Ft.S;Ft.S=function(t,e){if(V1=Oo(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&pw(t,e),Tc!==null)for(var a=cl;a!==null;)Sv(a,Tc),a=a.next;if(a=t.types,a!==null){for(var o=cl;o!==null;)Sv(o,a),o=o.next;if(Ks!==0){o=Tc,o===null&&(o=Tc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}Mv!==null&&Mv(t,e)};var Gs=Xn(null);function B0(){var t=Gs.current;return t!==null?t:ta.pooledCache}function Yu(t,e){e===null?la(Gs,Gs.current):la(Gs,e.pool)}function _y(){var t=B0();return t===null?null:{parent:Aa._currentValue,pool:t}}var xl=Error(pe(460)),k0=Error(pe(474)),Gd=Error(pe(542)),Id={then:function(){}};function bv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cy(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(zn,zn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cv(t),t===void 0&&!("reason"in e)?Error(pe(600)):t;default:if(typeof e.status=="string")e.then(zn,zn);else{if(t=ta,t!==null&&100<t.shellSuspendCounter)throw Error(pe(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cv(t),t}throw qs=e,xl}}function Us(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qs=a,xl):a}}var qs=null;function _v(){if(qs===null)throw Error(pe(459));var t=qs;return qs=null,t}function Cv(t){if(t===xl||t===Gd)throw Error(pe(483))}var Ji=null,Zc=0;function Au(t){var e=Zc;return Zc+=1,Ji===null&&(Ji=[]),Cy(Ji,t,e)}function Nr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Eu(t,e){throw e.$$typeof===ZC?Error(pe(525)):(t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ty(t){function e(p,g){if(t){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function a(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function o(p){for(var g=new Map;p!==null;)p.key===null?g.set(p.index,p):g.set(p.key,p),p=p.sibling;return g}function n(p,g){return p=dr(p,g),p.index=0,p.sibling=null,p}function r(p,g,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=134217730,g)):(p.flags|=1048576,g)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,g,y,x){return g===null||g.tag!==6?(g=Gm(y,p.mode,x),g.return=p,g):(g=n(g,y),g.return=p,g)}function l(p,g,y,x){var b=y.type;return b===Bi?(p=u(p,g,y.props.children,x,y.key),Nr(p,y),p):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hr&&Us(b)===g.type)?(g=n(g,y.props),Nr(g,y),g.return=p,g):(g=Wu(y.type,y.key,y.props,null,p.mode,x),Nr(g,y),g.return=p,g)}function c(p,g,y,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=qm(y,p.mode,x),g.return=p,g):(g=n(g,y.children||[]),g.return=p,g)}function u(p,g,y,x,b){return g===null||g.tag!==7?(g=Vs(y,p.mode,x,b),g.return=p,g):(g=n(g,y),g.return=p,g)}function h(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Gm(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vu:return y=Wu(g.type,g.key,g.props,null,p.mode,y),Nr(y,g),y.return=p,y;case bc:return g=qm(g,p.mode,y),g.return=p,g;case Hr:return g=Us(g),h(p,g,y)}if(_c(g)||gc(g))return g=Vs(g,p.mode,y,null),g.return=p,g;if(typeof g.then=="function")return h(p,Au(g),y);if(g.$$typeof===On)return h(p,wu(p,g),y);Eu(p,g)}return null}function f(p,g,y,x){var b=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return b!==null?null:i(p,g,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vu:return y.key===b?l(p,g,y,x):null;case bc:return y.key===b?c(p,g,y,x):null;case Hr:return y=Us(y),f(p,g,y,x)}if(_c(y)||gc(y))return b!==null?null:u(p,g,y,x,null);if(typeof y.then=="function")return f(p,g,Au(y),x);if(y.$$typeof===On)return f(p,g,wu(p,y),x);Eu(p,y)}return null}function d(p,g,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(y)||null,i(g,p,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vu:return p=p.get(x.key===null?y:x.key)||null,l(g,p,x,b);case bc:return p=p.get(x.key===null?y:x.key)||null,c(g,p,x,b);case Hr:return x=Us(x),d(p,g,y,x,b)}if(_c(x)||gc(x))return p=p.get(y)||null,u(g,p,x,b,null);if(typeof x.then=="function")return d(p,g,y,Au(x),b);if(x.$$typeof===On)return d(p,g,y,wu(g,x),b);Eu(g,x)}return null}function m(p,g,y,x){for(var b=null,C=null,T=g,S=g=0,w=null;T!==null&&S<y.length;S++){T.index>S?(w=T,T=null):w=T.sibling;var A=f(p,T,y[S],x);if(A===null){T===null&&(T=w);break}t&&T&&A.alternate===null&&e(p,T),g=r(A,g,S),C===null?b=A:C.sibling=A,C=A,T=w}if(S===y.length)return a(p,T),Et&&fr(p,S),b;if(T===null){for(;S<y.length;S++)T=h(p,y[S],x),T!==null&&(g=r(T,g,S),C===null?b=T:C.sibling=T,C=T);return Et&&fr(p,S),b}for(T=o(T);S<y.length;S++)w=d(T,p,S,y[S],x),w!==null&&(t&&(A=w.alternate,A!==null&&T.delete(A.key===null?S:A.key)),g=r(w,g,S),C===null?b=w:C.sibling=w,C=w);return t&&T.forEach(function(L){return e(p,L)}),Et&&fr(p,S),b}function v(p,g,y,x){if(y==null)throw Error(pe(151));for(var b=null,C=null,T=g,S=g=0,w=null,A=y.next();T!==null&&!A.done;S++,A=y.next()){T.index>S?(w=T,T=null):w=T.sibling;var L=f(p,T,A.value,x);if(L===null){T===null&&(T=w);break}t&&T&&L.alternate===null&&e(p,T),g=r(L,g,S),C===null?b=L:C.sibling=L,C=L,T=w}if(A.done)return a(p,T),Et&&fr(p,S),b;if(T===null){for(;!A.done;S++,A=y.next())A=h(p,A.value,x),A!==null&&(g=r(A,g,S),C===null?b=A:C.sibling=A,C=A);return Et&&fr(p,S),b}for(T=o(T);!A.done;S++,A=y.next())A=d(T,p,S,A.value,x),A!==null&&(t&&(w=A.alternate,w!==null&&T.delete(w.key===null?S:w.key)),g=r(A,g,S),C===null?b=A:C.sibling=A,C=A);return t&&T.forEach(function(X){return e(p,X)}),Et&&fr(p,S),b}function I(p,g,y,x){if(typeof y=="object"&&y!==null&&y.type===Bi&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vu:e:{for(var b=y.key;g!==null;){if(g.key===b){if(b=y.type,b===Bi){if(g.tag===7){a(p,g.sibling),x=n(g,y.props.children),Nr(x,y),x.return=p,p=x;break e}}else if(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hr&&Us(b)===g.type){a(p,g.sibling),x=n(g,y.props),Nr(x,y),x.return=p,p=x;break e}a(p,g);break}else e(p,g);g=g.sibling}y.type===Bi?(x=Vs(y.props.children,p.mode,x,y.key),Nr(x,y),x.return=p,p=x):(x=Wu(y.type,y.key,y.props,null,p.mode,x),Nr(x,y),x.return=p,p=x)}return s(p);case bc:e:{for(b=y.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){a(p,g.sibling),x=n(g,y.children||[]),x.return=p,p=x;break e}else{a(p,g);break}else e(p,g);g=g.sibling}x=qm(y,p.mode,x),x.return=p,p=x}return s(p);case Hr:return y=Us(y),I(p,g,y,x)}if(_c(y))return m(p,g,y,x);if(gc(y)){if(b=gc(y),typeof b!="function")throw Error(pe(150));return y=b.call(y),v(p,g,y,x)}if(typeof y.then=="function")return I(p,g,Au(y),x);if(y.$$typeof===On)return I(p,g,wu(p,y),x);Eu(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(a(p,g.sibling),x=n(g,y),x.return=p,p=x):(a(p,g),x=Gm(y,p.mode,x),x.return=p,p=x),s(p)):a(p,g)}return function(p,g,y,x){try{Zc=0;var b=I(p,g,y,x);return Ji=null,b}catch(T){if(T===xl||T===Gd)throw T;var C=Co(29,T,null,p.mode);return C.lanes=x,C.return=p,C}finally{}}}var Js=Ty(!0),wy=Ty(!1),Vr=!1;function U0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function RI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function jr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $r(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Gt&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=dd(t),Fy(t,null,a),e}return Hd(t,o,e,a),dd(t)}function Lc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,WS(t,a)}}function Xm(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var DI=!1;function Pc(){if(DI){var t=Ki;if(t!==null)throw t}}function Bc(t,e,a,o){DI=!1;var n=t.updateQueue;Vr=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==s&&(i===null?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,u=c=l=null,i=r;do{var f=i.lane&-536870913,d=f!==i.lane;if(d?(Bt&f)===f:(o&f)===f){f!==0&&f===Ks&&(DI=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var m=t,v=i;f=e;var I=a;switch(v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(I,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(I,h,f):m,f==null)break e;h=aa({},h,f);break e;case 2:Vr=!0}}f=i.callback,f!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[f]:d.push(f))}else d={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,s|=f;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);u===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=u,r===null&&(n.shared.lanes=0),fs|=s,t.lanes=s,t.memoizedState=h}}function Ay(t,e){if(typeof t!="function")throw Error(pe(191,t));t.call(e)}function Ey(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ay(a[t],e)}var ls=Xn(null),xd=Xn(0);function Tv(t,e){t=Fr,la(xd,t),la(ls,e),Fr=t|e.baseLanes}function LI(){la(xd,Fr),la(ls,ls.current)}function N0(){Fr=xd.current,Qa(ls),Qa(xd)}var eo=Xn(null),no=null;function es(t){var e=t.alternate;la(ja,ja.current&1),la(eo,t),no===null&&(e===null||ls.current!==null||e.memoizedState!==null)&&(no=t)}function PI(t){la(ja,ja.current),la(eo,t),no===null&&(no=t)}function Ry(t){t.tag===22?(la(ja,ja.current),la(eo,t),no===null&&(no=t)):ts()}function ts(){la(ja,ja.current),la(eo,eo.current)}function ko(t){Qa(eo),no===t&&(no=null),Qa(ja)}var ja=Xn(0);function Kc(t,e){la(eo,eo.current),la(ja,e)}function O0(t){Qa(ja),Qa(eo),no===t&&(no=null)}function gd(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||h0(a)||dx(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ir=0,Ct=null,$t=null,wa=null,Fd=!1,Qi=!1,Qs=!1,vd=0,Jc=0,ji=null,mw=0;function Fa(){throw Error(pe(321))}function z0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Go(t[a],e[a]))return!1;return!0}function H0(t,e,a,o,n,r){return Ir=r,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ft.H=t===null||t.memoizedState===null?l1:c1,Qs=!1,r=a(o,n),Qs=!1,Qi&&(r=Ly(e,a,o,n)),Dy(t),r}function Dy(t){Ft.H=Sd;var e=$t!==null&&$t.next!==null;if(Ir=0,wa=$t=Ct=null,Fd=!1,Jc=0,ji=null,e)throw Error(pe(300));t===null||Ea||(t=t.dependencies,t!==null&&md(t)&&(Ea=!0))}function Ly(t,e,a,o){Ct=t;var n=0;do{if(Qi&&(ji=null),Jc=0,Qi=!1,25<=n)throw Error(pe(301));if(n+=1,wa=$t=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ft.H=Mw,r=e(a,o)}while(Qi);return r}function Iw(){var t=Ft.H,e=t.useState()[0];return e=typeof e.then=="function"?df(e):e,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(Ct.flags|=1024),e}function V0(){var t=vd!==0;return vd=0,t}function G0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function q0(t){if(Fd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Fd=!1}Ir=0,wa=$t=Ct=null,Qi=!1,Jc=vd=0,ji=null}function mo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wa===null?Ct.memoizedState=wa=t:wa=wa.next=t,wa}function Ma(){if($t===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=wa===null?Ct.memoizedState:wa.next;if(e!==null)wa=e,$t=t;else{if(t===null)throw Ct.alternate===null?Error(pe(467)):Error(pe(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},wa===null?Ct.memoizedState=wa=t:wa=wa.next=t}return wa}function qd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function df(t){var e=Jc;return Jc+=1,ji===null&&(ji=[]),t=Cy(ji,t,e),e=Ct,(wa===null?e.memoizedState:wa.next)===null&&(e=e.alternate,Ft.H=e===null||e.memoizedState===null?l1:c1),t}function Wd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return df(t);if(t.$$typeof===QC)return;if(t.$$typeof===On)return Ja(t)}throw Error(pe(438,String(t)))}function W0(t){var e=null,a=Ct.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=Ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=qd(),Ct.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=JC;return e.index++,a}function xr(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Ma();return X0(e,$t,t)}function X0(t,e,a){var o=t.queue;if(o===null)throw Error(pe(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Bt&h)===h:(Ir&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Ks&&(u=!0);else if((Ir&f)===f){c=c.next,f===Ks&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,Ct.lanes|=f,fs|=f;h=c.action,Qs&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=f,s=r):l=l.next=f,Ct.lanes|=h,fs|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!Go(r,t.memoizedState)&&(Ea=!0,u&&(a=Ki,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ym(t){var e=Ma(),a=e.queue;if(a===null)throw Error(pe(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);Go(r,e.memoizedState)||(Ea=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function Py(t,e,a){var o=Ct,n=Ma(),r=Et;if(r){if(a===void 0)throw Error(pe(407));a=a()}else a=e();var s=!Go(($t||n).memoizedState,a);if(s&&(n.memoizedState=a,Ea=!0),n=n.queue,Y0(Uy.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||wa!==null&&(wa.memoizedState.tag&1)!==0,rl(t?9:8,{destroy:void 0},ky.bind(null,o,n,a,e),null),t){if(o.flags|=2048,ta===null)throw Error(pe(349));r||Ir&127||By(o,e,a)}return a}function By(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Ct.updateQueue,e===null?(e=qd(),Ct.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ky(t,e,a,o){e.value=a,e.getSnapshot=o,Ny(e)&&Oy(t)}function Uy(t,e,a){return a(function(){Ny(e)&&Oy(t)})}function Ny(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Go(t,a)}catch{return!0}}function Oy(t){var e=oi(t,2);e!==null&&To(e,t,2)}function BI(t){var e=mo();if(typeof t=="function"){var a=t;if(t=a(),Qs){qr(!0);try{a()}finally{qr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:t},e}function zy(t,e,a,o){return t.baseState=a,X0(t,$t,typeof o=="function"?o:xr)}function xw(t,e,a,o,n){if(Yd(t))throw Error(pe(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ft.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,Hy(e,r)):(r.next=a.next,e.pending=a.next=r)}}function Hy(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=Ft.T,s={};s.types=r!==null?r.types:null,Ft.T=s;try{var i=a(n,o),l=Ft.S;l!==null&&l(s,i),wv(t,e,i)}catch(c){kI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Ft.T=r}}else try{r=a(n,o),wv(t,e,r)}catch(c){kI(t,e,c)}}function wv(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Av(t,e,o)},function(o){return kI(t,e,o)}):Av(t,e,a)}function Av(t,e,a){e.status="fulfilled",e.value=a,Vy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Hy(t,a)))}function kI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,Vy(e),e=e.next;while(e!==o)}t.action=null}function Vy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gy(t,e){return e}function Ev(t,e){if(Et){var a=ta.formState;if(a!==null){e:{var o=Ct;if(Et){if(ia){t:{for(var n=ia,r=rn;n.nodeType!==8;){if(!r){n=null;break t}if(n=sn(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ia=sn(n.nextSibling),o=n.data==="F!";break e}}is(o)}o=!1}o&&(e=a[0])}}return a=mo(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gy,lastRenderedState:e},a.queue=o,a=r1.bind(null,Ct,o),o.dispatch=a,o=BI(!1),r=Q0.bind(null,Ct,!1,o.queue),o=mo(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=xw.bind(null,Ct,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function Rv(t){var e=Ma();return qy(e,$t,t)}function qy(t,e,a){if(e=X0(t,e,Gy)[0],t=Zu(xr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=df(e)}catch(s){throw s===xl?Gd:s}else o=e;e=Ma();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(Ct.flags|=2048,rl(9,{destroy:void 0},gw.bind(null,n,a),null)),[o,r,t]}function gw(t,e){t.action=e}function Dv(t){var e=Ma(),a=$t;if(a!==null)return qy(e,a,t);Ma(),e=e.memoizedState,a=Ma();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function rl(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=Ct.updateQueue,e===null&&(e=qd(),Ct.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function Wy(){return Ma().memoizedState}function Ku(t,e,a,o){var n=mo();Ct.flags|=t,n.memoizedState=rl(1|e,{destroy:void 0},a,o===void 0?null:o)}function Xd(t,e,a,o){var n=Ma();o=o===void 0?null:o;var r=n.memoizedState.inst;$t!==null&&o!==null&&z0(o,$t.memoizedState.deps)?n.memoizedState=rl(e,r,a,o):(Ct.flags|=t,n.memoizedState=rl(1|e,r,a,o))}function Lv(t,e){Ku(8390656,8,t,e)}function Y0(t,e){Xd(2048,8,t,e)}function Fw(t){Ct.flags|=4;var e=Ct.updateQueue;if(e===null)e=qd(),Ct.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Xy(t){var e=Ma().memoizedState;return Fw({ref:e,nextImpl:t}),function(){if(Gt&2)throw Error(pe(440));return e.impl.apply(void 0,arguments)}}function Yy(t,e){return Xd(4,2,t,e)}function Zy(t,e){return Xd(4,4,t,e)}function Ky(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jy(t,e,a){a=a!=null?a.concat([t]):null,Xd(4,4,Ky.bind(null,e,t),a)}function Z0(){}function Qy(t,e){var a=Ma();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&z0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function jy(t,e){var a=Ma();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&z0(e,o[1]))return o[0];if(o=t(),Qs){qr(!0);try{t()}finally{qr(!1)}}return a.memoizedState=[o,e],o}function K0(t,e,a){return a===void 0||Ir&1073741824&&!(Bt&261930)?t.memoizedState=e:(t.memoizedState=a,t=q1(),Ct.lanes|=t,fs|=t,a)}function $y(t,e,a,o){return Go(a,e)?a:ls.current!==null?(t=K0(t,a,o),Go(t,e)||(Ea=!0),t):!(Ir&106)||Ir&1073741824&&!(Bt&261930)?(Ea=!0,t.memoizedState=a):(t=q1(),Ct.lanes|=t,fs|=t,e)}function e1(t,e,a,o,n){var r=qt.p;qt.p=r!==0&&8>r?r:8;var s=Ft.T,i={};i.types=s!==null?s.types:null,Ft.T=i,Q0(t,!1,e,a);try{var l=n(),c=Ft.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=hw(l,o);kc(t,e,u,Vo(t))}else kc(t,e,o,Vo(t))}catch(h){kc(t,e,{then:function(){},status:"rejected",reason:h},Vo())}finally{qt.p=r,s!==null&&i.types!==null&&(s.types=i.types),Ft.T=s}}function vw(){}function UI(t,e,a,o){if(t.tag!==5)throw Error(pe(476));var n=t1(t).queue;e1(t,n,e,Hs,a===null?vw:function(){return a1(t),a(o)})}function t1(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Hs,baseState:Hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:Hs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function a1(t){var e=t1(t);e.next===null&&(e=t.alternate.memoizedState),kc(t,e.next.queue,{},Vo())}function J0(){return Ja(dl)}function o1(){return Ma().memoizedState}function n1(){return Ma().memoizedState}function Sw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Vo();t=jr(a);var o=$r(e,t,a);o!==null&&(To(o,e,a),Lc(o,e,a)),e={cache:P0()},t.payload=e;return}e=e.return}}function yw(t,e,a){var o=Vo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yd(t)?s1(e,a):(a=R0(t,e,a,o),a!==null&&(To(a,t,o),i1(a,e,o)))}function r1(t,e,a){var o=Vo();kc(t,e,a,o)}function kc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yd(t))s1(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,Go(i,s))return Hd(t,e,n,0),ta===null&&zd(),!1}catch{}finally{}if(a=R0(t,e,n,o),a!==null)return To(a,t,o),i1(a,e,o),!0}return!1}function Q0(t,e,a,o){if(o={lane:2,revertLane:lx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yd(t)){if(e)throw Error(pe(479))}else e=R0(t,a,o,2),e!==null&&To(e,t,2)}function Yd(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function s1(t,e){Qi=Fd=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function i1(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,WS(t,a)}}var Sd={readContext:Ja,use:Wd,useCallback:Fa,useContext:Fa,useEffect:Fa,useImperativeHandle:Fa,useLayoutEffect:Fa,useInsertionEffect:Fa,useMemo:Fa,useReducer:Fa,useRef:Fa,useState:Fa,useDebugValue:Fa,useDeferredValue:Fa,useTransition:Fa,useSyncExternalStore:Fa,useId:Fa,useHostTransitionStatus:Fa,useFormState:Fa,useActionState:Fa,useOptimistic:Fa,useMemoCache:Fa,useCacheRefresh:Fa,useEffectEvent:Fa},l1={readContext:Ja,use:Wd,useCallback:function(t,e){return mo().memoizedState=[t,e===void 0?null:e],t},useContext:Ja,useEffect:Lv,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ku(4194308,4,Ky.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ku(4194308,4,t,e)},useInsertionEffect:function(t,e){Ku(4,2,t,e)},useMemo:function(t,e){var a=mo();e=e===void 0?null:e;var o=t();if(Qs){qr(!0);try{t()}finally{qr(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=mo();if(a!==void 0){var n=a(e);if(Qs){qr(!0);try{a(e)}finally{qr(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=yw.bind(null,Ct,t),[o.memoizedState,t]},useRef:function(t){var e=mo();return t={current:t},e.memoizedState=t},useState:function(t){t=BI(t);var e=t.queue,a=r1.bind(null,Ct,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Z0,useDeferredValue:function(t,e){var a=mo();return K0(a,t,e)},useTransition:function(){var t=BI(!1);return t=e1.bind(null,Ct,t.queue,!0,!1),mo().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=Ct,n=mo();if(Et){if(a===void 0)throw Error(pe(407));a=a()}else{if(a=e(),ta===null)throw Error(pe(349));Bt&127||By(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,Lv(Uy.bind(null,o,r,t),[t]),o.flags|=2048,rl(9,{destroy:void 0},ky.bind(null,o,r,a,e),null),a},useId:function(){var t=mo(),e=ta.identifierPrefix;if(Et){var a=Vn,o=Hn;a=(o&~(1<<32-Ho(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=vd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=mw++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:J0,useFormState:Ev,useActionState:Ev,useOptimistic:function(t){var e=mo();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Q0.bind(null,Ct,!0,a),a.dispatch=e,[t,e]},useMemoCache:W0,useCacheRefresh:function(){return mo().memoizedState=Sw.bind(null,Ct)},useEffectEvent:function(t){var e=mo(),a={impl:t};return e.memoizedState=a,function(){if(Gt&2)throw Error(pe(440));return a.impl.apply(void 0,arguments)}}},c1={readContext:Ja,use:Wd,useCallback:Qy,useContext:Ja,useEffect:Y0,useImperativeHandle:Jy,useInsertionEffect:Yy,useLayoutEffect:Zy,useMemo:jy,useReducer:Zu,useRef:Wy,useState:function(){return Zu(xr)},useDebugValue:Z0,useDeferredValue:function(t,e){var a=Ma();return $y(a,$t.memoizedState,t,e)},useTransition:function(){var t=Zu(xr)[0],e=Ma().memoizedState;return[typeof t=="boolean"?t:df(t),e]},useSyncExternalStore:Py,useId:o1,useHostTransitionStatus:J0,useFormState:Rv,useActionState:Rv,useOptimistic:function(t,e){var a=Ma();return zy(a,$t,t,e)},useMemoCache:W0,useCacheRefresh:n1,useEffectEvent:Xy},Mw={readContext:Ja,use:Wd,useCallback:Qy,useContext:Ja,useEffect:Y0,useImperativeHandle:Jy,useInsertionEffect:Yy,useLayoutEffect:Zy,useMemo:jy,useReducer:Ym,useRef:Wy,useState:function(){return Ym(xr)},useDebugValue:Z0,useDeferredValue:function(t,e){var a=Ma();return $t===null?K0(a,t,e):$y(a,$t.memoizedState,t,e)},useTransition:function(){var t=Ym(xr)[0],e=Ma().memoizedState;return[typeof t=="boolean"?t:df(t),e]},useSyncExternalStore:Py,useId:o1,useHostTransitionStatus:J0,useFormState:Dv,useActionState:Dv,useOptimistic:function(t,e){var a=Ma();return $t!==null?zy(a,$t,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:W0,useCacheRefresh:n1,useEffectEvent:Xy};function Zm(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:aa({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var NI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=Vo(),n=jr(o);n.payload=e,a!=null&&(n.callback=a),e=$r(t,n,o),e!==null&&(To(e,t,o),Lc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=Vo(),n=jr(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=$r(t,n,o),e!==null&&(To(e,t,o),Lc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Vo(),o=jr(a);o.tag=2,e!=null&&(o.callback=e),e=$r(t,o,a),e!==null&&(To(e,t,a),Lc(e,t,a))}};function Pv(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!Wc(a,o)||!Wc(n,r):!0}function Bv(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&NI.enqueueReplaceState(e,e.state,null)}function js(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=aa({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function f1(t){ud(t)}function u1(t){console.error(t)}function d1(t){ud(t)}function yd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function kv(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function OI(t,e,a){return a=jr(a),a.tag=3,a.payload={element:null},a.callback=function(){yd(t,e)},a}function p1(t){return t=jr(t),t.tag=3,t}function h1(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){kv(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){kv(e,a,o),typeof n!="function"&&(as===null?as=new Set([this]):as.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function bw(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Ys(e,a,n,!0),a=eo.current,a!==null){switch(a.tag){case 31:case 13:case 19:return no===null?Ed():a.alternate===null&&va===0&&(va=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Id?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),tI(t,o,n)),!1;case 22:return a.flags|=65536,o===Id?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),tI(t,o,n)),!1}throw Error(pe(435,a.tag))}return tI(t,o,n),Ed(),!1}if(Et)return e=eo.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==TI&&(t=Error(pe(422),{cause:o}),Yc(nn(t,a)))):(o!==TI&&(e=Error(pe(423),{cause:o}),Yc(nn(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=nn(o,a),n=OI(t.stateNode,o,n),Xm(t,n),va!==4&&(va=2)),!1;var r=Error(pe(520),{cause:o});if(r=nn(r,a),zc===null?zc=[r]:zc.push(r),va!==4&&(va=2),e===null)return!0;o=nn(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=OI(a.stateNode,o,t),Xm(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(as===null||!as.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=p1(n),h1(n,t,a,o),Xm(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var j0=Error(pe(461)),Ea=!1;function Ba(t,e,a,o){e.child=t===null?wy(e,null,a,o):Js(e,t.child,a,o)}function Uv(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return Zs(e),o=H0(t,e,a,s,r,n),i=V0(),t!==null&&!Ea?(G0(t,e,n),gr(t,e,n)):(Et&&i&&Vd(e),e.flags|=1,Ba(t,e,o,n),e.child)}function Nv(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!D0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,m1(t,e,r,o,n)):(t=Wu(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!ex(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Wc,a(s,o)&&t.ref===e.ref)return gr(t,e,n)}return e.flags|=1,t=dr(r,o),t.ref=e.ref,t.return=e,e.child=t}function m1(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(Wc(r,o)&&t.ref===e.ref)if(Ea=!1,e.pendingProps=o=r,ex(t,n))t.flags&131072&&(Ea=!0);else return e.lanes=t.lanes,gr(t,e,n)}return zI(t,e,a,o,n)}function I1(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return Ov(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yu(e,r!==null?r.cachePool:null),r!==null?Tv(e,r):LI(),Ry(e);else return o=e.lanes=536870912,Ov(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Yu(e,r.cachePool),Tv(e,r),ts(),e.memoizedState=null):(t!==null&&Yu(e,null),LI(),ts());return Ba(t,e,n,a),e.child}function Uc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ov(t,e,a,o,n){var r=B0();return r=r===null?null:{parent:Aa._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&Yu(e,null),LI(),Ry(e),t!==null&&Ys(t,e,o,!0),e.childLanes=n,null}function Ju(t,e){return e=Zd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function zv(t,e,a){return Js(e,t.child,null,a),t=Ju(e,e.pendingProps),t.flags|=2,ko(e),e.memoizedState=null,t}function _w(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Ju(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uc(null,t);if(PI(e),(t=ia)?(t=IM(t,rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ss!==null?{id:Hn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=Sy(t),a.return=e,e.child=a,qa=e,ia=null)):t=null,t===null)throw is(e);return e.lanes=536870912,null}return Ju(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(PI(e),n)if(e.flags&256)e.flags&=-257,e=zv(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(pe(558));else if(Ea||Ys(t,e,a,!1),n=(a&t.childLanes)!==0,Ea||n){if(ls.current===null){if(o=ta,o!==null&&(s=XS(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,oi(t,s),To(o,t,s),j0;Ed()}e=zv(t,e,a)}else t=r.treeContext,ia=sn(s.nextSibling),qa=e,Et=!0,Qr=null,rn=!1,t!==null&&My(e,t),e=Ju(e,o),e.flags|=134221824;return e}return t=dr(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ri(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(pe(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function zI(t,e,a,o,n){return Zs(e),a=H0(t,e,a,o,void 0,n),o=V0(),t!==null&&!Ea?(G0(t,e,n),gr(t,e,n)):(Et&&o&&Vd(e),e.flags|=1,Ba(t,e,a,n),e.child)}function Hv(t,e,a,o,n,r){return Zs(e),e.updateQueue=null,a=Ly(e,o,a,n),Dy(t),o=V0(),t!==null&&!Ea?(G0(t,e,r),gr(t,e,r)):(Et&&o&&Vd(e),e.flags|=1,Ba(t,e,a,r),e.child)}function Vv(t,e,a,o,n){if(Zs(e),e.stateNode===null){var r=Vi,s=a.contextType;typeof s=="object"&&s!==null&&(r=Ja(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=NI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},U0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Ja(s):Vi,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Zm(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&NI.enqueueReplaceState(r,r.state,null),Bc(e,o,r,n),Pc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=js(a,i);r.props=l;var c=r.context,u=a.contextType;s=Vi,typeof u=="object"&&u!==null&&(s=Ja(u));var h=a.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&Bv(e,r,o,s),Vr=!1;var f=e.memoizedState;r.state=f,Bc(e,o,r,n),Pc(),c=e.memoizedState,i||f!==c||Vr?(typeof h=="function"&&(Zm(e,a,h,o),c=e.memoizedState),(l=Vr||Pv(e,a,l,o,f,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,RI(t,e),s=e.memoizedProps,u=js(a,s),r.props=u,h=e.pendingProps,f=r.context,c=a.contextType,l=Vi,typeof c=="object"&&c!==null&&(l=Ja(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&Bv(e,r,o,l),Vr=!1,f=e.memoizedState,r.state=f,Bc(e,o,r,n),Pc();var d=e.memoizedState;s!==h||f!==d||Vr||t!==null&&t.dependencies!==null&&md(t.dependencies)?(typeof i=="function"&&(Zm(e,a,i,o),d=e.memoizedState),(u=Vr||Pv(e,a,u,o,f,d,l)||t!==null&&t.dependencies!==null&&md(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,Ri(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,n),e.child=Js(e,null,a,n)):Ba(t,e,a,n),e.memoizedState=r.state,t=e.child):t=gr(t,e,n),t}function Gv(t,e,a,o){return Xs(),e.flags|=256,Ba(t,e,a,o),e.child}var HI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function VI(t){return{baseLanes:t,cachePool:_y()}}function GI(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=No),t}function x1(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(ja.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Et){if(n?es(e):ts(),(t=ia)?(t=IM(t,rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ss!==null?{id:Hn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=Sy(t),a.return=e,e.child=a,qa=e,ia=null)):t=null,t===null)throw is(e);return dx(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(ts(),n=e.mode,r=Zd({mode:"hidden",children:r},n),o=Vs(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=VI(a),o.childLanes=GI(t,s,a),e.memoizedState=HI,Uc(null,o)):(es(e),$0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return Cw(t,e,r,s,o,l,i,a)}return n?(ts(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=dr(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=dr(l,n):(n=Vs(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,Uc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=VI(a):(r=n.cachePool,r!==null?(i=Aa._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=_y(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=GI(t,s,a),e.memoizedState=HI,Uc(t.child,o)):(es(e),a=t.child,t=a.sibling,a=dr(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function $0(t,e){return e=Zd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Zd(t,e){return t=Co(22,t,null,e),t.lanes=0,t}function Ru(t,e,a){return Js(e,t.child,null,a),t=$0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cw(t,e,a,o,n,r,s,i){if(a)return e.flags&256?(es(e),e.flags&=-257,Ru(t,e,i)):e.memoizedState!==null?(ts(),e.child=t.child,e.flags|=128,null):(ts(),r=n.fallback,s=e.mode,n=Zd({mode:"visible",children:n.children},s),r=Vs(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Js(e,t.child,null,i),n=e.child,n.memoizedState=VI(i),n.childLanes=GI(t,o,i),e.memoizedState=HI,Uc(null,n));if(es(e),dx(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(pe(419)),n.stack="",n.digest=o,Yc({value:n,source:null,stack:null})),Ru(t,e,i)}if(Ea||Ys(t,e,i,!1),o=(i&t.childLanes)!==0,Ea||o){if(ls.current!==null)return Ru(t,e,i);if(o=ta,o!==null&&(n=XS(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,oi(t,n),To(o,t,n),j0;return h0(r)||Ed(),Ru(t,e,i)}return h0(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,ia=sn(r.nextSibling),qa=e,Et=!0,Qr=null,rn=!1,t!==null&&My(e,t),e=$0(e,n.children),e.flags|=134221824,e)}function qv(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Xu(t.return,e,a)}function Wv(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&gd(a)===null&&(e=t),t=t.sibling}return e}function Du(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function Km(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function qI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=ja.current;if(e.flags&128)return Kc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Kc(e,s),n==="backwards"&&t!==null?(Km(t),Ba(t,e,o,a),Km(t)):Ba(t,e,o,a),o=Et?Xc:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qv(t,a,e);else if(t.tag===19)qv(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=Wv(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,Km(e)),Du(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&gd(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Du(e,!0,a,null,r,o);break;case"together":Du(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=Wv(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Du(e,!1,n,a,r,o)}return e.child}function Xv(t,e,a){var o=e.pendingProps;return Xr(e,e.type,o.value),Ba(t,e,o.children,a),e.child}function gr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(a&e.childLanes))if(t!==null){if(Ys(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,a=dr(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=dr(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ex(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&md(t)))}function Tw(t,e,a){switch(e.tag){case 3:id(e,e.stateNode.containerInfo),Xr(e,Aa,t.memoizedState.cache),Xs();break;case 27:case 5:xI(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:Xr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,PI(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return es(e),e.flags|=128,null;o=Ys(t,e,a,!1);var n=e.child.childLanes;return o||a&n?x1(t,e,a):(es(e),t=gr(t,e,a),t!==null?t.sibling:null)}es(e);break;case 19:if(e.flags&128)return qI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(Ys(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return qI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Kc(e,ja.current),o)break;return null;case 22:return e.lanes=0,I1(t,e,a,e.pendingProps);case 24:Xr(e,Aa,t.memoizedState.cache)}return gr(t,e,a)}function g1(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ea=!0;else{if(!ex(t,a)&&!(e.flags&128))return Ea=!1,Tw(t,e,a);Ea=!!(t.flags&131072)}else Ea=!1,Et&&e.flags&1048576&&yy(e,Xc,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=Us(e.elementType),e.type=t,typeof t=="function")D0(t)?(o=js(t,o),e.tag=1,e=Vv(null,e,t,o,a)):(e.tag=0,e=zI(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===F0){e.tag=11,e=Uv(null,e,t,o,a);break e}else if(n===v0){e.tag=14,e=Nv(null,e,t,o,a);break e}else if(n===On){e.tag=10,e.type=t,e=Xv(null,e,a);break e}}throw e=mI(t)||t,Error(pe(306,e,""))}}return e;case 0:return zI(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=js(o,e.pendingProps),Vv(t,e,o,n,a);case 3:e:{if(id(e,e.stateNode.containerInfo),t===null)throw Error(pe(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,RI(t,e),Bc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Xr(e,Aa,o),o!==r.cache&&AI(e,[Aa],a,!0),Pc(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Gv(t,e,o,a);break e}else if(o!==n){n=nn(Error(pe(424)),e),Yc(n),e=Gv(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ia=sn(t.firstChild),qa=e,Et=!0,Qr=null,rn=!0,a=wy(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Xs(),o===n){e=gr(t,e,a);break e}Ba(t,e,o,a)}e=e.child}return e;case 26:return Ri(t,e),t===null?(a=FS(e.type,null,e.pendingProps,null))?e.memoizedState=a:Et||(e.stateNode=iM(e.type,e.pendingProps,Jr.current,e)):e.memoizedState=FS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return xI(e),t===null&&Et&&(o=e.stateNode=xM(e.type,e.pendingProps,Jr.current),qa=e,rn=!0,n=ia,ds(e.type)?(m0=n,ia=sn(o.firstChild)):ia=n),Ba(t,e,e.pendingProps.children,a),Ri(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Et&&((n=o=ia)&&(o=FA(o,e.type,e.pendingProps,rn),o!==null?(e.stateNode=o,qa=e,ia=sn(o.firstChild),rn=!1,n=!0):n=!1),n||is(e)),xI(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,u0(n,r)?o=null:s!==null&&u0(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=H0(t,e,Iw,null,null,a),dl._currentValue=n),Ri(t,e),Ba(t,e,o,a),e.child;case 6:return t===null&&Et&&((t=a=ia)&&(a=vA(a,e.pendingProps,rn),a!==null?(e.stateNode=a,qa=e,ia=null,t=!0):t=!1),t||is(e)),null;case 13:return x1(t,e,a);case 4:return id(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Js(e,null,o,a):Ba(t,e,o,a),e.child;case 11:return Uv(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,Ri(t,e),Ba(t,e,o,a),e.child;case 8:return Ba(t,e,e.pendingProps.children,a),e.child;case 12:return Ba(t,e,e.pendingProps.children,a),e.child;case 10:return Xv(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,Zs(e),n=Ja(n),o=o(n),e.flags|=1,Ba(t,e,o,a),e.child;case 14:return Nv(t,e,e.type,e.pendingProps,a);case 15:return m1(t,e,e.type,e.pendingProps,a);case 19:return qI(t,e,a);case 31:return _w(t,e,a);case 22:return I1(t,e,a,e.pendingProps);case 24:return Zs(e),o=Ja(Aa),t===null?(n=B0(),n===null&&(n=ta,r=P0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},U0(e),Xr(e,Aa,n)):(t.lanes&a&&(RI(t,e),Bc(e,null,null,a),Pc()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Xr(e,Aa,o)):(o=r.cache,Xr(e,Aa,o),o!==n.cache&&AI(e,[Aa],a,!0))),Ba(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:Et&&Vd(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:Ri(t,e),Ba(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(pe(156,e.tag))}function cr(t){t.flags|=4}function Jm(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?yS(e,o):yS(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Y1())t.flags|=8192;else throw qs=Id,k0}else t.flags&=-16777217}function Yv(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!SM(e))if(Y1())t.flags|=8192;else throw qs=Id,k0}function Lu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?GS():536870912,t.lanes|=e,sl|=e)}function vc(t,e){if(!Et)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function sa(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function ww(t,e,a){var o=e.pendingProps;switch(L0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sa(e),null;case 1:return sa(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),pr(Aa),al(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ai(e)?cr(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wm())),sa(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(cr(e),r!==null?(sa(e),Yv(e,r)):(sa(e),Jm(e,n,null,o,a))):r?r!==t.memoizedState?(cr(e),sa(e),Yv(e,r)):(sa(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&cr(e),sa(e),Jm(e,n,t,o,a)),null;case 27:if(ld(e),a=Jr.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(!o){if(e.stateNode===null)throw Error(pe(166));return sa(e),e.subtreeFlags&=-33554433,null}t=Gn.current,Ai(e)?vv(e,t):(t=xM(n,o,a),e.stateNode=t,cr(e))}return sa(e),e.subtreeFlags&=-33554433,null;case 5:if(ld(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(!o){if(e.stateNode===null)throw Error(pe(166));return sa(e),e.subtreeFlags&=-33554433,null}if(r=Gn.current,Ai(e))vv(e,r);else{var s=$c(Jr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Ka]=e,r[Ao]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch($a(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&cr(e)}}return sa(e),e.subtreeFlags&=-33554433,Jm(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(pe(166));if(t=Jr.current,Ai(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=qa,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Ka]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||rM(t.nodeValue,a)),t||is(e,!0)}else t=$c(t).createTextNode(o),t[Ka]=e,e.stateNode=t}return sa(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=Ai(e),a!==null){if(t===null){if(!o)throw Error(pe(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(557));t[Ka]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),t=!1}else a=Wm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ko(e),e):(ko(e),null);if(e.flags&128)throw Error(pe(558))}return sa(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ai(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(pe(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(pe(317));n[Ka]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),n=!1}else n=Wm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ko(e),e):(ko(e),null)}return ko(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Lu(e,e.updateQueue),sa(e),null);case 4:return al(),t===null&&cx(e.stateNode.containerInfo),e.flags|=67108864,sa(e),null;case 10:return pr(e.type),sa(e),null;case 19:if(O0(e),o=e.memoizedState,o===null)return sa(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)vc(o,!1);else{if(va!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=gd(t),r!==null){for(e.flags|=128,vc(o,!1),t=r.updateQueue,e.updateQueue=t,Lu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)vy(a,t),a=a.sibling;return Kc(e,ja.current&1|2),Et&&fr(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&Oo()>wd&&(e.flags|=128,n=!0,vc(o,!1),e.lanes=4194304)}else{if(!n)if(t=gd(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Lu(e,t),vc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!Et)return sa(e),null}else 2*Oo()-o.renderingStartTime>wd&&a!==536870912&&(e.flags|=128,n=!0,vc(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oo(),t.sibling=null,r=ja.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Et?Kc(e,r):(a=r,la(eo,e),la(ja,a),no===null&&(no=e)),Et&&fr(e,o.treeForkCount),t}return sa(e),null;case 22:case 23:return ko(e),N0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(sa(e),e.subtreeFlags&6&&(e.flags|=8192)):sa(e),a=e.updateQueue,a!==null&&Lu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&Qa(Gs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),pr(Aa),sa(e),null;case 25:return null;case 30:return e.flags|=33554432,sa(e),null}throw Error(pe(156,e.tag))}function Aw(t,e){switch(L0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(Aa),al(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ld(e),null;case 31:if(e.memoizedState!==null){if(ko(e),e.alternate===null)throw Error(pe(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ko(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return O0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return al(),null;case 10:return pr(e.type),null;case 22:case 23:return ko(e),N0(),t!==null&&Qa(Gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pr(Aa),null;case 25:return null;default:return null}}function F1(t,e){switch(L0(e),e.tag){case 3:pr(Aa),al();break;case 26:case 27:case 5:ld(e);break;case 4:al();break;case 31:e.memoizedState!==null&&ko(e);break;case 13:ko(e);break;case 19:O0(e);break;case 10:pr(e.type);break;case 22:case 23:ko(e),N0(),t!==null&&Qa(Gs);break;case 24:pr(Aa)}}function pf(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Kt(e,e.return,i)}}function cs(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(u){Kt(n,l,u)}}}o=o.next}while(o!==r)}}catch(u){Kt(e,e.return,u)}}function v1(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ey(e,a)}catch(o){Kt(t,t.return,o)}}}function S1(t,e,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Kt(t,e,o)}}function Un(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=mr(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=uM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new qo(t);wo(t.child,!1,xA,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Kt(t,e,i)}}function Za(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Kt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Kt(t,e,n)}else a.current=null}function Md(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)mM(t.stateNode,e[a])}function Zv(t){for(var e=t.return;e!==null&&(ax(e)&&mM(t.stateNode,e.stateNode),!tx(e));)e=e.return}function Nc(t){for(var e=t.return;e!==null&&(ax(e)&&gA(t.stateNode,e.stateNode),!tx(e));)e=e.return}function tx(t){return t.tag===5||t.tag===3||t.tag===27}function ax(t){return t&&t.tag===7&&t.stateNode!==null}function WI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Kt(t,t.return,n)}}function Qm(t,e,a){try{var o=t.stateNode;$w(o,t.type,a,e),o[Ao]=e}catch(n){Kt(t,t.return,n)}}function y1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ds(t.type)||t.tag===4}function jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ds(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function XI(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=zn)),Md(t,o),Vt=!0;else if(n!==4&&(n===27&&(Md(t,o),o=null,ds(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(XI(t,e,a,o),t=t.sibling;t!==null;)XI(t,e,a,o),t=t.sibling}function bd(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),Md(t,o),Vt=!0;else if(n!==4&&(n===27&&(Md(t,o),o=null,ds(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(bd(t,e,a,o),t=t.sibling;t!==null;)bd(t,e,a,o),t=t.sibling}function M1(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$a(e,o,a),e[Ka]=t,e[Ao]=a}catch(r){Kt(t,t.return,r)}}var _d=!1,Uo=null;function Kv(t){(t.tag===30||t.subtreeFlags&33554432)&&(_d=!0)}var Nn=null;function Jv(){var t=Nn;return Nn=null,t}var _o=0;function gl(t,e,a,o,n){return _o=0,b1(t.child,e,a,o,n)}function b1(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=d0(s);o.push(i),i.view&&(r=!0)}else r||d0(s).view&&(r=!0);_d=!0,lM(s,_o===0?e:e+"_"+_o,a),_o++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||b1(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function Wn(t,e){for(;t!==null;)t.tag===5?cM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Wn(t.child,e)),t=t.sibling}function Qu(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Qu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(pe(544));var a=e.name;e=Sr(e.default,e.share),e!=="none"&&(gl(t,a,e,null,!1)||Wn(t.child,!1))}t=t.sibling}}function YI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=mr(o,a),r=Sr(o.default,a.paired?o.share:o.enter);r!=="none"?gl(t,n,r,null,!1)?(Qu(t),a.paired||e||il(t,o.onEnter)):Wn(t.child,!1):Qu(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)YI(t,e),t=t.sibling;else Qu(t)}function ZI(t){if(Uo!==null&&Uo.size!==0){var e=Uo;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=Sr(a.default,a.share);if(r!=="none"&&(gl(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,il(t,a.onShare)):Wn(t.child,!1)),e.delete(o),e.size===0)break}}}ZI(t)}t=t.sibling}}}function KI(t){if(t.tag===30){var e=t.memoizedProps,a=mr(e,t.stateNode),o=Uo!==null?Uo.get(a):void 0,n=Sr(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(gl(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,Uo.delete(a),il(t,e.onShare)):il(t,e.onExit):Wn(t.child,!1)),Uo!==null&&ZI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)KI(t),t=t.sibling;else Uo!==null&&ZI(t)}function _1(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=mr(e,t.stateNode);e=Sr(e.default,e.update),t.flags&=-5,e!=="none"&&gl(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&_1(t);t=t.sibling}}function JI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Wn(t.child,!1))}JI(t)}t=t.sibling}}function ju(t){if(t.tag===30)t.stateNode.paired=null,Wn(t.child,!1),JI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)ju(t),t=t.sibling;else JI(t)}function C1(t){for(t=t.child;t!==null;)t.tag===30?Wn(t.child,!1):t.subtreeFlags&33554432&&C1(t),t=t.sibling}function ox(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&_o<r.length){var c=r[_o],u=d0(l);(c.view||u.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(u.clip)h=!0;else{h=c.rect;var f=u.rect;h=h.y!==f.y||h.x!==f.x||h.height!==f.height||h.width!==f.width}h&&(t.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(t.flags|=32)}else t.flags|=32;t.flags&4&&lM(l,_o===0?a:a+"_"+_o,n),i&&t.flags&4||(Nn===null&&(Nn=[]),Nn.push(l,_o===0?o:o+"_"+_o,e.memoizedProps)),_o++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:ox(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function T1(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=mr(a,o),r=Sr(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map(rA)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;_o=0,n=ox(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||il(t,a.onUpdate))}else t.subtreeFlags&33554432&&T1(t,e);t=t.sibling}}var Ha=!1,Wt=!1,Pn=!1,$m=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,Va=null,Bn=!1,wc=!1,Cd=!1,QI=!1;function Ew(t,e,a){if(t=t.containerInfo,c0=pl,t=dy(t),A0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==o||r!==0&&f.nodeType!==3||(l=i+r),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===o&&++u===r&&(l=i),d===s&&++h===n&&(c=i),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(f0={focusedElem:t,selectionRange:o},pl=!1,a=(a&335544064)===a,Va=e,e=a?9270:1024;Va!==null;){if(t=Va,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&KI(o[r]);if(t.alternate===null&&t.flags&2)a&&Kv(t),Pu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&KI(o),Pu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&Kv(t),Pu(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,Va=o):(a&&_1(t),Pu(a))}}Uo=null}function Pu(t){for(;Va!==null;){var e=Va,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=js(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Kt(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)p0(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":p0(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=mr(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=Sr(n.default,n.update),n!=="none"&&gl(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(pe(163))}if(o=e.sibling,o!==null){o.return=e.return,Va=o;break}Va=e.return}}function w1(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:kn(t,a),o&4&&pf(5,a);break;case 1:if(kn(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Kt(a,a.return,s)}else{var n=js(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Kt(a,a.return,s)}}o&64&&v1(a),o&512&&Un(a,a.return);break;case 3:if(kn(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ey(t,e)}catch(s){Kt(a,a.return,s)}}break;case 27:e===null&&o&4&&M1(a);case 26:case 5:kn(t,a),e===null&&o&4&&WI(a),o&512&&Un(a,a.return);break;case 12:kn(t,a);break;case 31:kn(t,a),o&4&&D1(t,a);break;case 13:kn(t,a),o&4&&L1(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vw.bind(null,a),SA(t,a))));break;case 22:if(o=a.memoizedState!==null||Ha,!o){var r=e!==null&&e.memoizedState!==null||Wt;e=Ha,n=Wt,Ha=o,(Wt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),xn(t,a,o)):kn(t,a),Ha=e,Wt=n}break;case 30:kn(t,a),o&512&&Un(a,a.return);break;case 7:o&512&&Un(a,a.return);default:kn(t,a)}}function jI(t,e){for(t=t.child;t!==null;)A1(t,e),t=t.sibling}function A1(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Kt(t,t.return,l)}$I(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Vt=!0}catch(l){Kt(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?pS(i,!0):pS(t.stateNode,!1)}catch(l){Kt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&jI(t,e);break;default:jI(t,e)}}function $I(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:A1(a,o);break e;case 22:a.memoizedState===null&&$I(a,o);break e;default:$I(a,o)}}t=t.sibling}}function E1(t){var e=t.alternate;e!==null&&(t.alternate=null,E1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&kd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ma=null,Mo=!1;function In(t,e,a){for(a=a.child;a!==null;)R1(t,e,a),a=a.sibling}function R1(t,e,a){if(zo&&typeof zo.onCommitFiberUnmount=="function")try{zo.onCommitFiberUnmount(rf,a)}catch{}switch(a.tag){case 26:Wt||Za(a,e),In(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Wt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Wt||Za(a,e),Nc(a);var o=ma,n=Mo;ds(a.type)&&(ma=a.stateNode,Mo=!1),In(t,e,a),gM(a.stateNode,a.type,a.memoizedProps),ma=o,Mo=n;break;case 5:Wt||Za(a,e),Nc(a);case 6:if(a.tag===6&&Nc(a),o=ma,n=Mo,ma=null,In(t,e,a),ma=o,Mo=n,ma!==null)if(Mo)try{(ma.nodeType===9?ma.body:ma.nodeName==="HTML"?ma.ownerDocument.body:ma).removeChild(a.stateNode),Vt=!0}catch(r){Kt(a,e,r)}else try{ma.removeChild(a.stateNode),Vt=!0}catch(r){Kt(a,e,r)}break;case 18:ma!==null&&(Mo?(t=ma,dS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hl(t)):dS(ma,a.stateNode));break;case 4:o=ma,n=Mo,ma=a.stateNode.containerInfo,Mo=!0,In(t,e,a),ma=o,Mo=n;break;case 0:case 11:case 14:case 15:cs(2,a,e),Wt||cs(4,a,e),In(t,e,a);break;case 1:Wt||(Za(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&S1(a,e,o)),In(t,e,a);break;case 21:In(t,e,a);break;case 22:Wt=(o=Wt)||a.memoizedState!==null,In(t,e,a),Wt=o;break;case 30:Za(a,e),In(t,e,a);break;case 7:Wt||Za(a,e),In(t,e,a);break;default:In(t,e,a)}}function D1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hl(t)}catch(a){Kt(e,e.return,a)}}}function L1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hl(t)}catch(a){Kt(e,e.return,a)}}function Rw(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Qv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Qv),e;default:throw Error(pe(435,t.tag))}}function Bu(t,e){var a=Rw(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=Gw.bind(null,t,o);o.then(n,n)}})}function po(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(ds(l.type)){ma=l.stateNode,Mo=!1;break e}break;case 5:ma=l.stateNode,Mo=!1;break e;case 3:case 4:ma=l.stateNode.containerInfo,Mo=!0;break e}l=l.return}if(ma===null)throw Error(pe(160));R1(s,i,r),ma=null,Mo=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)P1(e,t,a),e=e.sibling}var gn=null;function P1(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}po(e,t,a),ho(t),n&4&&(cs(3,t,t.return),pf(3,t),cs(5,t,t.return));break;case 1:po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),n&64&&Ha&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=gn,po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Ha)t.stateNode=iM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[cf]||o[Ka]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),$a(o,e,a),o[Ka]=t,Ga(o),e=o;break e;case"link":if(r=SS("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),$a(o,e,a),n.head.appendChild(o);break;case"meta":if(r=SS("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),$a(o,e,a),n.head.appendChild(o);break;default:throw Error(pe(468,e))}o[Ka]=t,Ga(o),e=o}t.stateNode=e}else Ha||I0(r,t.type,t.stateNode);else t.stateNode=vS(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||Wt||e.parentNode.removeChild(e)):n.count--,a===null?Ha||I0(r,t.type,t.stateNode):vS(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Qm(t,t.memoizedProps,o.memoizedProps);break;case 27:po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),o!==null&&n&4&&Qm(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=Pn,Pn=!1,po(e,t,a),Pn=r,ho(t),n&512&&(Wt||o===null||Za(o,o.return)),t.flags&32){e=t.stateNode;try{nl(e,""),Vt=!0}catch(u){Kt(t,t.return,u)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Qm(t,e,o!==null?o.memoizedProps:e)),n&1024&&($m=!0);break;case 6:if(po(e,t,a),ho(t),n&4){if(t.stateNode===null)throw Error(pe(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,Vt=!0}catch(u){Kt(t,t.return,u)}}break;case 3:if(Vt=!1,ad=null,r=gn,gn=ef(e.containerInfo),po(e,t,a),gn=r,ho(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{hl(e.containerInfo)}catch(u){Kt(t,t.return,u)}$m&&($m=!1,B1(t)),Vt=!1;break;case 4:n=Pn,Pn=Ha,o=ov(),r=gn,gn=ef(t.stateNode.containerInfo),po(e,t,a),ho(t),gn=r,Vt&&wc&&(Cd=!0),Vt=o,Pn=n;break;case 12:po(e,t,a),ho(t);break;case 31:po(e,t,a),ho(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Bu(t,e)));break;case 13:po(e,t,a),ho(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Kd=Oo()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Bu(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Ha,l=Wt,c=Pn;Ha=i||r,Pn=c||r,Wt=l||s,po(e,t,a),Wt=l,Pn=c,Ha=i,ho(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Ha||Wt||(e=s||Wt,a=Ha,o=Wt,Ha=r||Ha,Wt=e,zr(t,2),Ha=a,Wt=o),!r&&Pn||jI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Bu(t,a))));break;case 19:po(e,t,a),ho(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Bu(t,e)));break;case 30:n&512&&(Wt||o===null||Za(o,o.return)),n=ov(),r=wc,s=(a&335544064)===a,i=t.memoizedProps,wc=s&&Sr(i.default,i.update)!=="none",po(e,t,a),ho(t),s&&o!==null&&Vt&&(t.flags|=4),wc=r,Vt=n;break;case 21:break;case 7:n&512&&(Wt||o===null||Za(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:po(e,t,a),ho(t)}}function ho(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(y1(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if(ax(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(tx(n))break;n=n.return}var s=o;if(a==null)throw Error(pe(160));switch(a.tag){case 27:var i=a.stateNode,l=jm(t);bd(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(nl(c,""),a.flags&=-33);var u=jm(t);bd(t,u,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,f=jm(t);XI(t,f,h,s);break;default:throw Error(pe(161))}}catch(d){Kt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;B1(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,pl=!0,e.reset(),pl=!1),t=t.sibling}}function Ei(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)k1(e,t),e=e.sibling;else T1(e,!1)}function k1(t,e){var a=t.alternate;if(a===null)YI(t,!1);else switch(t.tag){case 3:if(QI=Bn=!1,Jv(),Ei(e,t),!Bn&&!Cd){if(t=Nn,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];cM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),QI=!0}Nn=null;break;case 5:Ei(e,t);break;case 4:o=Bn,Bn=!1,Ei(e,t),Bn&&(Cd=!0),Bn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?YI(t,!1):Ei(e,t));break;case 30:o=Bn,n=Jv(),Bn=!1,Ei(e,t),Bn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=mr(r,s),s=mr(a.memoizedProps,s);var i=Sr(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,_o=0,e=ox(t,a,e,s,i,r,!0),_o!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(il(t,t.memoizedProps.onUpdate),Nn=n):n!==null&&(n.push.apply(n,Nn),Nn=n),Bn=t.flags&32?!0:o;break;default:Ei(e,t)}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)w1(t,e.alternate,e),e=e.sibling}function zr(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:cs(4,a,a.return),zr(a,o);break;case 1:Za(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&S1(a,a.return,n),zr(a,o);break;case 27:o&2&&gM(a.stateNode,a.type,a.memoizedProps);case 5:Za(a,a.return),a.tag!==5&&a.tag!==27||Nc(a),zr(a,o);break;case 6:Nc(a);break;case 26:Za(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||Wt||n.parentNode.removeChild(n),zr(a,o);break;case 22:a.memoizedState===null&&zr(a,o);break;case 30:Za(a,a.return),zr(a,o);break;case 7:Za(a,a.return);default:zr(a,o)}t=t.sibling}}function xn(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:xn(n,r,a),pf(4,r);break;case 1:if(xn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Kt(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Ay(c[n],l)}catch(u){Kt(o,o.return,u)}}i&&s&64&&v1(r),Un(r,r.return);break;case 27:a&2&&M1(r);case 5:r.tag!==5&&r.tag!==27||Zv(r),xn(n,r,a),i&&o===null&&s&4&&WI(r),Un(r,r.return);break;case 6:Zv(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Ha||I0(ef(l.ownerDocument),r.type,l),xn(n,r,a),i&&o===null&&s&4&&WI(r),Un(r,r.return);break;case 12:xn(n,r,a);break;case 31:xn(n,r,a),i&&s&4&&D1(n,r);break;case 13:xn(n,r,a),i&&s&4&&L1(n,r);break;case 22:r.memoizedState===null&&xn(n,r,a),Un(r,r.return);break;case 30:xn(n,r,a),Un(r,r.return);break;case 7:Un(r,r.return);default:xn(n,r,a)}e=e.sibling}}function nx(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uf(a))}function rx(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&uf(t))}function $o(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)U1(t,e,a,o),e=e.sibling;else n&&C1(e)}function U1(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&ju(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:$o(t,e,a,o),r&2048&&pf(9,e);break;case 1:$o(t,e,a,o);break;case 3:$o(t,e,a,o),n&&QI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&uf(r)));break;case 12:if(r&2048){$o(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Kt(e,e.return,c)}}else $o(t,e,a,o);break;case 31:$o(t,e,a,o);break;case 13:$o(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&ju(i),s._visibility&2?$o(t,e,a,o):Oc(t,e)):(n&&i!==null&&i.memoizedState!==null&&ju(e),s._visibility&2?$o(t,e,a,o):(s._visibility|=2,Di(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&nx(i,e);break;case 24:$o(t,e,a,o),r&2048&&rx(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(Wn(r.child,!0),Wn(e.child,!0))),$o(t,e,a,o);break;default:$o(t,e,a,o)}}function Di(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:Di(r,s,i,l,n),pf(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?Di(r,s,i,l,n):Oc(r,s):(u._visibility|=2,Di(r,s,i,l,n)),n&&c&2048&&nx(s.alternate,s);break;case 24:Di(r,s,i,l,n),n&&c&2048&&rx(s.alternate,s);break;default:Di(r,s,i,l,n)}e=e.sibling}}function Oc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:Oc(a,o),n&2048&&nx(o.alternate,o);break;case 24:Oc(a,o),n&2048&&rx(o.alternate,o);break;default:Oc(a,o)}e=e.sibling}}var Ns=8192;function Bs(t,e,a){if(t.subtreeFlags&Ns)for(t=t.child;t!==null;)N1(t,e,a),t=t.sibling}function N1(t,e,a){switch(t.tag){case 26:Bs(t,e,a),t.flags&Ns&&(t.memoizedState!==null?BA(a,gn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&MS(a,t)));break;case 5:Bs(t,e,a),t.flags&Ns&&(t=t.stateNode,(e&335544128)===e&&MS(a,t));break;case 3:case 4:var o=gn;gn=ef(t.stateNode.containerInfo),Bs(t,e,a),gn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ns,Ns=16777216,Bs(t,e,a),Ns=o):Bs(t,e,a));break;case 30:if(t.flags&Ns&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,Uo===null&&(Uo=new Map),Uo.set(o,n)}Bs(t,e,a);break;default:Bs(t,e,a)}}function O1(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Sc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Va=o,H1(o,t)}O1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z1(t),t=t.sibling}function z1(t){switch(t.tag){case 0:case 11:case 15:Sc(t),t.flags&2048&&cs(9,t,t.return);break;case 3:Sc(t);break;case 12:Sc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$u(t)):Sc(t);break;default:Sc(t)}}function $u(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Va=o,H1(o,t)}O1(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cs(8,e,e.return),$u(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,$u(e));break;default:$u(e)}t=t.sibling}}function H1(t,e){for(;Va!==null;){var a=Va;switch(a.tag){case 0:case 11:case 15:cs(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uf(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Va=o;else e:for(a=t;Va!==null;){o=Va;var n=o.sibling,r=o.return;if(E1(o),o===a){Va=null;break e}if(n!==null){n.return=r,Va=n;break e}Va=r}}}var Dw={getCacheForType:function(t){var e=Ja(Aa),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ja(Aa).controller.signal}},Lw=typeof WeakMap=="function"?WeakMap:Map,Gt=0,ta=null,Lt=null,Bt=0,Yt=0,Po=null,Yr=!1,Fl=!1,sx=!1,Fr=0,va=0,fs=0,Ws=0,Td=0,No=0,sl=0,zc=null,bo=null,e0=!1,Kd=0,V1=0,wd=1/0,Ad=null,as=null,xa=0,vn=null,$s=null,qn=0,t0=0,a0=null,G1=null,$i=null,el=null,tl=null,Hc=0,ed=null;function Vo(){return Gt&2&&Bt!==0?Bt&-Bt:Ft.T!==null?lx():YS()}function q1(){if(No===0)if(!(Bt&536870912)||Et){var t=yu;yu<<=1,!(yu&3932160)&&(yu=262144),No=t}else No=536870912;return t=eo.current,t!==null&&(t.flags|=32),No}function il(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=uM(mr(t.memoizedProps,a))),el===null&&(el=[]),el.push(e.bind(null,o))}}function To(t,e,a){(t===ta&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(ll(t,0),Zr(t,Bt,No,!1)),lf(t,a),(!(Gt&2)||t!==ta)&&(t===ta&&(!(Gt&2)&&(Ws|=a),va===4&&Zr(t,Bt,No,!1)),Yn(t))}function W1(t,e,a){if(Gt&6)throw Error(pe(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||sf(t,e),n=o?kw(t,e):eI(t,e,!0),r=o;do{if(n===0){Fl&&!o&&Zr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!Pw(a)){n=eI(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=zc;var l=i.current.memoizedState.isDehydrated;if(l&&(ll(i,s).flags|=256),s=eI(i,s,!1),s!==2&&s!==6){if(sx&&!l){i.errorRecoveryDisabledLanes|=r,Ws|=r,n=4;break e}r=bo,bo=n,r!==null&&(bo===null?bo=r:bo.push.apply(bo,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){ll(t,0),Zr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(pe(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Zr(o,e,No,!Yr);break e;case 2:bo=null;break;case 3:case 5:break;default:throw Error(pe(329))}if((e&62914560)===e&&(n=Kd+300-Oo(),10<n)){if(Zr(o,e,No,!Yr),Bd(o,0,!0)!==0)break e;qn=e,o.timeoutHandle=fx(jv.bind(null,o,a,bo,Ad,e0,e,No,Ws,sl,Yr,r,"Throttled",-0,0),n);break e}jv(o,a,bo,Ad,e0,e,No,Ws,sl,Yr,r,null,-0,0)}}break}while(!0);Yn(t)}function jv(t,e,a,o,n,r,s,i,l,c,u,h,f,d){t.timeoutHandle=-1;var m=e.subtreeFlags,v=(r&335544064)===r;if(h=null,(v||m&8192||(m&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},Uo=null,N1(e,r,h),v&&(m=h,v=t.containerInfo,v=(v.nodeType===9?v:v.ownerDocument).__reactViewTransition,v!=null&&(m.count++,m.waitingForViewTransition=!0,m=tf.bind(m),v.finished.then(m,m))),m=(r&62914560)===r?Kd-Oo():(r&4194048)===r?V1-Oo():0,m=kA(h,m),m!==null)){qn=r,t.cancelPendingCommit=m(eS.bind(null,t,e,r,a,o,n,s,i,l,c,u,h,null,f,d)),Zr(t,r,s,!c);return}eS(t,e,r,a,o,n,s,i,l,c,u,h)}function Pw(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Go(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(t,e,a,o){e=VS(t,e),e&=~Td,e&=~Ws,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-Ho(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&qS(t,a,e)}function Jd(){return Gt&6?!0:(hf(0,!1),!1)}function ix(){if(Lt!==null){if(Yt===0)var t=Lt.return;else t=Lt,ur=ni=null,q0(t),Ji=null,Zc=0,t=Lt;for(;t!==null;)F1(t.alternate,t),t=t.return;Lt=null}}function ll(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,aA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qn=0,ix(),ta=t,Lt=a=dr(t.current,null),Bt=e,Yt=0,Po=null,Yr=!1,Fl=sf(t,e),sx=!1,sl=No=Td=Ws=fs=va=0,bo=zc=null,e0=!1,Fr=VS(t,e),zd(),a}function X1(t,e){Ct=null,Ft.H=Sd,e===xl||e===Gd?(e=_v(),Yt=3):e===k0?(e=_v(),Yt=4):Yt=e===j0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Po=e,Lt===null&&(va=1,yd(t,nn(e,t.current)))}function Y1(){var t=eo.current;return t===null?!0:(Bt&4194048)===Bt?no===null:(Bt&62914560)===Bt||Bt&536870912?t===no:!1}function Z1(){var t=Ft.H;return Ft.H=Sd,t===null?Sd:t}function K1(){var t=Ft.A;return Ft.A=Dw,t}function Ed(){va=4,Yr||(Bt&4194048)!==Bt&&eo.current!==null||(Fl=!0),!(fs&134217727)&&!(Ws&134217727)||ta===null||Zr(ta,Bt,No,!1)}function eI(t,e,a){var o=Gt;Gt|=2;var n=Z1(),r=K1();(ta!==t||Bt!==e)&&(Ad=null,ll(t,e)),e=!1;var s=va;e:do try{if(Yt!==0&&Lt!==null){var i=Lt,l=Po;switch(Yt){case 8:ix(),s=6;break e;case 3:case 2:case 9:case 6:eo.current===null&&(e=!0);var c=Yt;if(Yt=0,Po=null,Wi(t,i,l,c),a&&Fl){s=0;break e}break;default:c=Yt,Yt=0,Po=null,Wi(t,i,l,c)}}Bw(),s=va;break}catch(u){X1(t,u)}while(!0);return e&&t.shellSuspendCounter++,ur=ni=null,Gt=o,Ft.H=n,Ft.A=r,Lt===null&&(ta=null,Bt=0,zd()),s}function Bw(){for(;Lt!==null;)J1(Lt)}function kw(t,e){var a=Gt;Gt|=2;var o=Z1(),n=K1();ta!==t||Bt!==e?(Ad=null,wd=Oo()+500,ll(t,e)):Fl=sf(t,e);e:do try{if(Yt!==0&&Lt!==null){e=Lt;var r=Po;t:switch(Yt){case 1:Yt=0,Po=null,Wi(t,e,r,1);break;case 2:case 9:if(bv(r)){Yt=0,Po=null,$v(e);break}e=function(){Yt!==2&&Yt!==9||ta!==t||(Yt=7),Yn(t)},r.then(e,e);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:bv(r)?(Yt=0,Po=null,$v(e)):(Yt=0,Po=null,Wi(t,e,r,7));break;case 5:var s=null;switch(Lt.tag){case 26:s=Lt.memoizedState;case 5:case 27:var i=Lt;if(s?SM(s):i.stateNode.complete){Yt=0,Po=null;var l=i.sibling;if(l!==null)Lt=l;else{var c=i.return;c!==null?(Lt=c,Qd(c)):Lt=null}break t}}Yt=0,Po=null,Wi(t,e,r,5);break;case 6:Yt=0,Po=null,Wi(t,e,r,6);break;case 8:ix(),va=6;break e;default:throw Error(pe(462))}}Uw();break}catch(u){X1(t,u)}while(!0);return ur=ni=null,Ft.H=o,Ft.A=n,Gt=a,Lt!==null?0:(ta=null,Bt=0,zd(),va)}function Uw(){for(;Lt!==null&&!eT();)J1(Lt)}function J1(t){var e=g1(t.alternate,t,Fr);t.memoizedProps=t.pendingProps,e===null?Qd(t):Lt=e}function $v(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Hv(a,e,e.pendingProps,e.type,void 0,Bt);break;case 11:e=Hv(a,e,e.pendingProps,e.type.render,e.ref,Bt);break;case 5:q0(e);var o=e;o===qa&&(Et?(hd(o),o.tag===5&&o.stateNode!=null&&(ia=o.stateNode)):(hd(o),Et=!0));default:F1(a,e),e=Lt=vy(e,Fr),e=g1(a,e,Fr)}t.memoizedProps=t.pendingProps,e===null?Qd(t):Lt=e}function Wi(t,e,a,o){ur=ni=null,q0(e),Ji=null,Zc=0;var n=e.return;try{if(bw(t,n,e,a,Bt)){va=1,yd(t,nn(a,t.current)),Lt=null;return}}catch(r){if(n!==null)throw Lt=n,r;va=1,yd(t,nn(a,t.current)),Lt=null;return}e.flags&32768?(Et||o===1?t=!0:Fl||Bt&536870912?t=!1:(Yr=t=!0,(o===2||o===9||o===3||o===6)&&(o=eo.current,o!==null&&o.tag===13&&(o.flags|=16384))),Q1(e,t)):Qd(e)}function Qd(t){var e=t;do{if(e.flags&32768){Q1(e,Yr);return}t=e.return;var a=ww(e.alternate,e,Fr);if(a!==null){Lt=a;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);va===0&&(va=5)}function Q1(t,e){do{var a=Aw(t.alternate,t);if(a!==null){a.flags&=32767,Lt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=a}while(t!==null);va=6,Lt=null}function eS(t,e,a,o,n,r,s,i,l,c,u,h){t.cancelPendingCommit=null;do jd();while(xa!==0);if(Gt&6)throw Error(pe(327));if(e!==null){if(e===t.current)throw Error(pe(177));t===ta&&(Lt=ta=null,Bt=0),$s=e,vn=t,qn=a,a0=n,G1=o,Nw(t,e,a,s,i,l,h)}}function Nw(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(t0=i,i|=E0,fT(t,a,i,o,n,r),el=null,(a&335544064)===a?(tl=dw(t),o=10262):(tl=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,qw(cd,function(){return s0(),null})):(t.callbackNode=null,t.callbackPriority=0),_d=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=Ft.T,Ft.T=null,n=qt.p,qt.p=2,r=Gt,Gt|=4;try{Ew(t,e,a)}finally{Gt=r,qt.p=n,Ft.T=o}}xa=1,_d?$i=lA(s,t.containerInfo,tl,o0,n0,zw,r0,s0,Ow,null,null):(o0(),n0(),r0())}function Ow(t){if(xa!==0){var e=vn.onRecoverableError;e(t,{componentStack:null})}}function zw(){xa===3&&(xa=0,k1($s,vn),xa=4)}function o0(){if(xa===1){xa=0;var t=vn,e=$s,a=qn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=Ft.T,Ft.T=null;var n=qt.p;qt.p=2;var r=Gt;Gt|=4;try{wc=Cd=!1,P1(e,t,a),a=f0;var s=dy(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&uy(i.ownerDocument.documentElement,i)){if(l!==null&&A0(i)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(u,i.value.length);else{var h=i.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),m=i.textContent.length,v=Math.min(l.start,m),I=l.end===void 0?v:Math.min(l.end,m);!d.extend&&v>I&&(s=I,I=v,v=s);var p=Iv(i,v),g=Iv(i,I);if(p&&g&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var y=h.createRange();y.setStart(p.node,p.offset),d.removeAllRanges(),v>I?(d.addRange(y),d.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),d.addRange(y))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var x=h[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}pl=!!c0,f0=c0=null}finally{Gt=r,qt.p=n,Ft.T=o}}t.current=e,xa=2}}function n0(){if(xa===2){xa=0;var t=vn,e=$s,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=Ft.T,Ft.T=null;var o=qt.p;qt.p=2;var n=Gt;Gt|=4;try{w1(t,e.alternate,e)}finally{Gt=n,qt.p=o,Ft.T=a}}xa=3}}function r0(){if(xa===4||xa===3){xa=0;var t=$i;$i=null,tT();var e=vn,a=$s,o=qn,n=G1,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?xa=5:(xa=0,$s=vn=null,j1(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(as=null),M0(o),a=a.stateNode,zo&&typeof zo.onCommitFiberRoot=="function")try{zo.onCommitFiberRoot(rf,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=Ft.T,r=qt.p,qt.p=2,Ft.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{Ft.T=a,qt.p=r}}if(n=el,s=tl,tl=null,n!==null&&(el=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);qn&3&&jd(),Yn(e),r=e.pendingLanes,o&261930&&r&42?e===ed?Hc++:(Hc=0,ed=e):(Hc=0,ed=null),hf(0,!1)}}function j1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,uf(e)))}function jd(){return $i!==null&&($i.skipTransition(),$i=null),o0(),n0(),r0(),s0()}function s0(){if(xa!==5)return!1;var t=vn,e=t0;t0=0;var a=M0(qn),o=Ft.T,n=qt.p;try{qt.p=32>a?32:a,Ft.T=null,a=a0,a0=null;var r=vn,s=qn;if(xa=0,$s=vn=null,qn=0,Gt&6)throw Error(pe(331));var i=Gt;if(Gt|=4,z1(r.current),U1(r,r.current,s,a),Gt=i,hf(0,!1),zo&&typeof zo.onPostCommitFiberRoot=="function")try{zo.onPostCommitFiberRoot(rf,r)}catch{}return!0}finally{qt.p=n,Ft.T=o,j1(t,e)}}function tS(t,e,a){e=nn(a,e),e=OI(t.stateNode,e,2),t=$r(t,e,2),t!==null&&(lf(t,2),Yn(t))}function Kt(t,e,a){if(t.tag===3)tS(t,t,a);else for(;e!==null;){if(e.tag===3){tS(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){t=nn(a,t),a=p1(2),o=$r(e,a,2),o!==null&&(h1(a,o,e,t),lf(o,2),Yn(o));break}}e=e.return}}function tI(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Lw;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(sx=!0,n.add(a),t=Hw.bind(null,t,e,a),e.then(t,t))}function Hw(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ta===t&&(Bt&a)===a&&(va===4||va===3&&(Bt&62914560)===Bt&&300>Oo()-Kd?Gt&2?Td|=a:ll(t,0):Td|=a,sl===Bt&&(sl=0)),Yn(t)}function $1(t,e){e===0&&(e=GS()),t=oi(t,e),t!==null&&(lf(t,e),Yn(t))}function Vw(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),$1(t,a)}function Gw(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(pe(314))}o!==null&&o.delete(e),$1(t,a)}function qw(t,e){return S0(t,e)}var cl=null,Li=null,i0=!1,Rd=!1,aI=!1,Kr=0;function Yn(t){t!==Li&&t.next===null&&(Li===null?cl=Li=t:Li=Li.next=t),Rd=!0,i0||(i0=!0,Xw())}function hf(t,e){if(!aI&&Rd){aI=!0;do for(var a=!1,o=cl;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-Ho(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,aS(o,r))}else r=Bt,r=Bd(o,o===ta?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||sf(o,r)||(a=!0,aS(o,r));o=o.next}while(a);aI=!1}}function Ww(){eM()}function eM(){Rd=i0=!1;var t=0;Kr!==0&&tA()&&(t=Kr);for(var e=Oo(),a=null,o=cl;o!==null;){var n=o.next,r=tM(o,e);r===0?(o.next=null,a===null?cl=n:a.next=n,n===null&&(Li=a)):(a=o,(t!==0||r&3)&&(Rd=!0)),o=n}xa!==0&&xa!==5||hf(t,!1),Kr!==0&&(Kr=0)}function tM(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Ho(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=cT(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=ta,a=Bt,a=Bd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pm(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||sf(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&Pm(o),M0(a)){case 2:case 8:a=zS;break;case 32:a=cd;break;case 268435456:a=HS;break;default:a=cd}return o=aM.bind(null,t),a=S0(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&Pm(o),t.callbackPriority=2,t.callbackNode=null,2}function aM(t,e){if(xa!==0&&xa!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jd()&&t.callbackNode!==a)return null;var o=Bt;return o=Bd(t,t===ta?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(W1(t,o,e),tM(t,Oo()),t.callbackNode!=null&&t.callbackNode===a?aM.bind(null,t):null)}function aS(t,e){if(jd())return null;W1(t,e,!0)}function Xw(){oA(function(){Gt&6?S0(OS,Ww):eM()})}function lx(){if(Kr===0){var t=Ks;t===0&&(t=Su,Su<<=1,!(Su&261888)&&(Su=256)),Kr=t}return Kr}function oS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vu(t)}function Yw(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=oS((n[Ao]||null).action),s=o.submitter;s&&(e=(e=s[Ao]||null)?oS(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new Ud("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Kr!==0){var l=new FormData(n,s);UI(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),UI(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(ku=0;ku<CI.length;ku++)Uu=CI[ku],nS=Uu.toLowerCase(),rS=Uu[0].toUpperCase()+Uu.slice(1),Sn(nS,"on"+rS);var Uu,nS,rS,ku;Sn(hy,"onAnimationEnd");Sn(my,"onAnimationIteration");Sn(Iy,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(nw,"onTransitionRun");Sn(rw,"onTransitionStart");Sn(sw,"onTransitionCancel");Sn(xy,"onTransitionEnd");ol("onMouseEnter",["mouseout","mouseover"]);ol("onMouseLeave",["mouseout","mouseover"]);ol("onPointerEnter",["pointerout","pointerover"]);ol("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qc));function oM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){ud(u)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){ud(u)}n.currentTarget=null,r=l}}}}function Dt(t,e){var a=e[$F];a===void 0&&(a=e[$F]=new Set);var o=t+"__bubble";a.has(o)||(nM(e,t,2,!1),a.add(o))}function oI(t,e,a){var o=0;e&&(o|=4),nM(a,t,o,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function cx(t){if(!t[Nu]){t[Nu]=!0,KS.forEach(function(a){a!=="selectionchange"&&(Zw.has(a)||oI(a,!1,t),oI(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,oI("selectionchange",!1,e))}}function nM(t,e,a,o){switch(wM(e)){case 2:var n=zA;break;case 8:n=HA;break;default:n=Ix}a=n.bind(null,e,a,t),n=void 0,!yI||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function nI(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Os(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}oy(function(){var c=r,u=_0(a),h=[];e:{var f=gy.get(t);if(f!==void 0){var d=Ud,m=t;switch(t){case"keypress":if(qu(a)===0)break e;case"keydown":case"keyup":d=PT;break;case"focusin":m="focus",d=zm;break;case"focusout":m="blur",d=zm;break;case"beforeblur":case"afterblur":d=zm;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=yT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=OT;break;case hy:case my:case Iy:d=_T;break;case xy:d=HT;break;case"scroll":case"scrollend":d=vT;break;case"wheel":d=GT;break;case"copy":case"cut":case"paste":d=TT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=cv;break;case"submit":d=UT;break;case"toggle":case"beforetoggle":d=WT}var v=(e&4)!==0,I=!v&&(t==="scroll"||t==="scrollend"),p=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,y;g!==null;){var x=g;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||p===null||(x=Gc(g,p),x!=null&&v.push(jc(g,x,y))),I)break;g=g.return}0<v.length&&(f=new d(f,m,null,a,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&a!==SI&&(m=a.relatedTarget||a.fromElement)&&(Os(m)||m[ml]))break e;(f||d)&&(m=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,f?(d=a.relatedTarget||a.toElement,f=c,d=d?Os(d):null,d!==null&&(I=nf(d),v=d.tag,d!==I||v!==5&&v!==27&&v!==6)&&(d=null)):(f=null,d=c),f!==d&&(v=iv,x="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=cv,x="onPointerLeave",p="onPointerEnter",g="pointer"),I=f==null?m:Cc(f),y=d==null?m:Cc(d),m=new v(x,g+"leave",f,a,u),m.target=I,m.relatedTarget=y,x=null,Os(u)===c&&(v=new v(p,g+"enter",d,a,u),v.target=y,v.relatedTarget=I,x=v),I=x,v=f&&d?cI(f,d,Kw):null,f!==null&&sS(h,m,f,v,!1),d!==null&&I!==null&&sS(h,I,d,v,!0)))}e:{if(f=c?Cc(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var b=pv;else if(dv(f))if(cy)b=tw;else{b=$T;var C=jT}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&b0(c.elementType)&&(b=pv):b=ew;if(b&&(b=b(t,c))){ly(h,b,a,u);break e}C&&C(t,f,c)}switch(C=c?Cc(c):window,t){case"focusin":(dv(C)||C.contentEditable==="true")&&(Oi=C,bI=c,Rc=null);break;case"focusout":Rc=bI=Oi=null;break;case"mousedown":_I=!0;break;case"contextmenu":case"mouseup":case"dragend":_I=!1,xv(h,a,u);break;case"selectionchange":if(ow)break;case"keydown":case"keyup":xv(h,a,u)}var T;if(w0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ni?sy(t,a)&&(S="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(S="onCompositionStart");S&&(ry&&a.locale!=="ko"&&(Ni||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ni&&(T=ny()):(Wr=u,C0="value"in Wr?Wr.value:Wr.textContent,Ni=!0)),C=Dd(c,S),0<C.length&&(S=new lv(S,t,null,a,u),h.push({event:S,listeners:C}),T?S.data=T:(T=iy(a),T!==null&&(S.data=T)))),(T=YT?ZT(t,a):KT(t,a))&&(S=Dd(c,"onBeforeInput"),0<S.length&&(C=new lv("onBeforeInput","beforeinput",null,a,u),h.push({event:C,listeners:S}),C.data=T)),Yw(h,t,c,a,u)}oM(h,e)})}function jc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Dd(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Gc(t,a),n!=null&&o.unshift(jc(t,n,r)),n=Gc(t,e),n!=null&&o.push(jc(t,n,r))),t.tag===3)return o;t=t.return}return[]}function Kw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sS(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=Gc(a,r),c!=null&&s.unshift(jc(a,c,l))):n||(c=Gc(a,r),c!=null&&s.push(jc(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var Jw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function iS(t){return(typeof t=="string"?t:""+t).replace(Jw,`
`).replace(Qw,"")}function rM(t,e){return e=iS(e),iS(t)===e}function Zt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||nl(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&nl(t,""+o);else return;break;case"className":bu(t,"class",o);break;case"tabIndex":bu(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bu(t,a,o);break;case"style":ay(t,o,r);return;case"data":if(e!=="object"){bu(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Vu(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Zt(t,e,"name",n.name,n,null),Zt(t,e,"formEncType",n.formEncType,n,null),Zt(t,e,"formMethod",n.formMethod,n,null),Zt(t,e,"formTarget",n.formTarget,n,null)):(Zt(t,e,"encType",n.encType,n,null),Zt(t,e,"method",n.method,n,null),Zt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Vu(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=zn);return;case"onScroll":o!=null&&Dt("scroll",t);return;case"onScrollEnd":o!=null&&Dt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(pe(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(pe(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Vu(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Hu(t,"popover",o);break;case"xlinkActuate":lr(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":lr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":lr(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":lr(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":lr(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":lr(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":lr(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":lr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":lr(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Hu(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=gT.get(a)||a,Hu(t,a,o);else return}Vt=!0}function l0(t,e,a,o,n,r){switch(a){case"style":ay(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(pe(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(pe(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")nl(t,o);else if(typeof o=="number"||typeof o=="bigint")nl(t,""+o);else return;break;case"onScroll":o!=null&&Dt("scroll",t);return;case"onScrollEnd":o!=null&&Dt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=zn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!JS.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[Ao]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}Vt=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Hu(t,a,o)}return}Vt=!0}function $a(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(pe(137,e));default:Zt(t,e,r,s,a,null)}}n&&Zt(t,e,"srcSet",a.srcSet,a,null),o&&Zt(t,e,"src",a.src,a,null);return;case"input":Dt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"name":n=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(pe(137,e));break;default:Zt(t,e,o,u,a,null)}}$S(t,r,i,l,c,s,n,!1);return;case"select":Dt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Zt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Yi(t,!!o,e,!1):a!=null&&Yi(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(pe(91));break;default:Zt(t,e,s,i,a,null)}ty(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,e,l,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<Qc.length;o++)Dt(Qc[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(pe(137,e));default:Zt(t,e,c,o,a,null)}return;default:if(b0(e)){for(u in a)a.hasOwnProperty(u)&&(o=a[u],o!==void 0&&l0(t,e,u,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Zt(t,e,i,o,a,null))}var jw={};function $w(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,u=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Zt(t,e,d,null,o,h)}}for(var f in o){var d=o[f];if(h=a[f],o.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":d!==h&&(Vt=!0),r=d;break;case"name":d!==h&&(Vt=!0),n=d;break;case"checked":d!==h&&(Vt=!0),c=d;break;case"defaultChecked":d!==h&&(Vt=!0),u=d;break;case"value":d!==h&&(Vt=!0),s=d;break;case"defaultValue":d!==h&&(Vt=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(pe(137,e));break;default:d!==h&&Zt(t,e,f,d,o,h)}}vI(t,s,i,l,c,u,r,n);return;case"select":d=s=i=f=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Zt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(Vt=!0),f=r;break;case"defaultValue":r!==l&&(Vt=!0),i=r;break;case"multiple":r!==l&&(Vt=!0),s=r;default:r!==l&&Zt(t,e,n,r,o,l)}e=i,a=s,o=d,f!=null?Yi(t,!!a,f,!1):!!o!=!!a&&(e!=null?Yi(t,!!a,e,!0):Yi(t,!!a,a?[]:"",!1));return;case"textarea":d=f=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Zt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(Vt=!0),f=n;break;case"defaultValue":n!==r&&(Vt=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(pe(91));break;default:n!==r&&Zt(t,e,s,n,o,r)}ey(t,f,d);return;case"option":for(var m in a)if(f=a[m],a.hasOwnProperty(m)&&f!=null&&!o.hasOwnProperty(m))switch(m){case"selected":t.selected=!1;break;default:Zt(t,e,m,null,o,f)}for(l in o)if(f=o[l],d=a[l],o.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":f!==d&&(Vt=!0),t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Zt(t,e,l,f,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in a)f=a[v],a.hasOwnProperty(v)&&f!=null&&!o.hasOwnProperty(v)&&Zt(t,e,v,null,o,f);for(c in o)if(f=o[c],d=a[c],o.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(pe(137,e));break;default:Zt(t,e,c,f,o,d)}return;default:if(b0(e)){for(var I in a)f=a[I],a.hasOwnProperty(I)&&f!==void 0&&!o.hasOwnProperty(I)&&l0(t,e,I,void 0,o,f);for(u in o)f=o[u],d=a[u],!o.hasOwnProperty(u)||f===d||f===void 0&&d===void 0||l0(t,e,u,f,o,d);return}}for(var p in a)f=a[p],a.hasOwnProperty(p)&&f!=null&&!o.hasOwnProperty(p)&&Zt(t,e,p,null,o,f);for(h in o)f=o[h],d=a[h],!o.hasOwnProperty(h)||f===d||f==null&&d==null||Zt(t,e,h,f,o,d)}function lS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&lS(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var u=l.transferSize,h=l.initiatorType;u&&lS(h)&&(l=l.responseEnd,s+=u*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var c0=null,f0=null;function $c(t){return t.nodeType===9?t:t.ownerDocument}function cS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function iM(t,e,a,o){return a=$c(a).createElement(t),a[Ka]=o,a[Ao]=e,$a(a,t,e),Ga(a),a}function u0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rI=null;function tA(){var t=window.event;return t&&t.type==="popstate"?t===rI?!1:(rI=t,!0):(rI=null,!1)}var fx=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,fS=typeof Promise=="function"?Promise:void 0,uS=typeof requestAnimationFrame=="function"?requestAnimationFrame:fx,oA=typeof queueMicrotask=="function"?queueMicrotask:typeof fS<"u"?function(t){return fS.resolve(null).then(t).catch(nA)}:fx;function nA(t){setTimeout(function(){throw t})}function ds(t){return t==="head"}function dS(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),hl(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")iI(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,iI(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[cf]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&iI(t.ownerDocument.body);a=n}while(a);hl(e)}function pS(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function lM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function cM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function fM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function d0(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return fM(e,a,t)}function rA(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return fM(e,a,t)}function sA(t){return t.documentElement.clientHeight}function iA(t){this.addEventListener("load",t),this.addEventListener("error",t)}function lA(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var u=c.startViewTransition({update:function(){var f=c.defaultView,d=f.navigation&&f.navigation.transition,m=c.fonts.status;o();var v=[];if(m==="loaded"&&(sA(c),c.fonts.status==="loading"&&v.push(c.fonts.ready)),m=v.length,t!==null)for(var I=t.suspenseyImages,p=0,g=0;g<I.length;g++){var y=I[g];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<f.innerHeight&&x.left<f.innerWidth){if(p+=yM(y),p>od){v.length=m;break}y=new Promise(iA.bind(y)),v.push(y)}}}if(0<v.length)return f=Promise.race([Promise.all(v),new Promise(function(b){return setTimeout(b,500)})]).then(n,n),(d?Promise.allSettled([d.finished,f]):f).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=u;var h=[];return u.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),d=0;d<f.length;d++){var m=f[d],v=m.effect,I=v.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){h.push(m),m=v.getKeyframes();for(var p=I=void 0,g=!0,y=0;y<m.length;y++){var x=m[y],b=x.width;if(I===void 0)I=b;else if(I!==b){g=!1;break}if(b=x.height,p===void 0)p=b;else if(p!==b){g=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}g&&I!==void 0&&p!==void 0&&(v.setKeyframes(m),g=getComputedStyle(v.target,v.pseudoElement),g.width!==I||g.height!==p)&&(g=m[0],g.width=I,g.height=p,g=m[m.length-1],g.width=I,g.height=p,v.setKeyframes(m))}}s()},function(f){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{o(),n(),s()}}),u.finished.finally(function(){for(var f=0;f<h.length;f++)h[f].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),i()}),u}catch{return o(),n(),s(),null}}function zs(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}zs.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:aa({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};zs.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uM(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function qo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}qo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(dM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=fl(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),wo(this._fragmentFiber.child,!1,cA,t,i,o)}this._eventListeners=r}};function cA(t,e,a,o){return ka(t).addEventListener(e,a,o),!1}qo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=dM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=fl(n.optionsOrUseCapture),wo(this._fragmentFiber.child,!1,fA,t,a,n),o.splice(e,1),r!==null&&r()}};function fA(t,e,a,o){return ka(t).removeEventListener(e,a,o),!1}function fl(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function hS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function dM(t,e,a,o){if(t.length===0)return-1;o=hS(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&hS(r.optionsOrUseCapture)===o)return n}return-1}qo.prototype.dispatchEvent=function(t){var e=ei(this._fragmentFiber);if(e===null)return!0;e=ka(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,fl(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,fl(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};qo.prototype.focus=function(t){wo(this._fragmentFiber.child,!0,pM,t,void 0,void 0)};function pM(t,e){return t.tag===6?!1:(t=ka(t),yA(t,e))}qo.prototype.focusLast=function(t){var e=[];wo(this._fragmentFiber.child,!0,ux,e,void 0,void 0);for(var a=e.length-1;0<=a&&!pM(e[a],t);a--);};function ux(t,e){return e.push(t),!1}qo.prototype.blur=function(){var t=ei(this._fragmentFiber);t!==null&&(t=ka(t),t=$c(t).activeElement,t!==null&&wo(this._fragmentFiber.child,!1,uA,t,void 0,void 0))};function uA(t,e){return t.tag===6?!1:(t=ka(t),t===e||t.contains(e)?(e.blur(),!0):!1)}qo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),wo(this._fragmentFiber.child,!1,dA,t,void 0,void 0)};function dA(t,e){return t.tag===6||(t=ka(t),e.observe(t)),!1}qo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),wo(this._fragmentFiber.child,!1,pA,t,void 0,void 0);for(var a=e=0;a<Fn.length;a++){var o=Fn[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):Fn[e++]=o}Fn.length=e}};function pA(t,e){return t.tag===6||(t=ka(t),e.unobserve(t)),!1}var Fn=[],sI=!1;function hA(t,e,a){Fn.push({fragmentInstance:t,observer:e,instance:a}),sI||(sI=!0,MA(function(){sI=!1;var o=Fn;Fn=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}qo.prototype.getClientRects=function(){var t=[];return wo(this._fragmentFiber.child,!1,mA,t,void 0,void 0),t};function mA(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=ka(t),e.push.apply(e,t.getClientRects());return!1}qo.prototype.getRootNode=function(t){var e=ei(this._fragmentFiber);return e===null?this:ka(e).getRootNode(t)};qo.prototype.compareDocumentPosition=function(t){var e=ei(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];wo(this._fragmentFiber.child,!1,ux,a,void 0,void 0);var o=ka(e);if(a.length===0){if(a=o,YF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=BS(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=ka(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=ka(a[0]),n=ka(a[a.length-1]);var r=YF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IA(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IA(t,e,a,o,n){var r=Os(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=ei(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=cI(a,r,ZF),e===null?e=!1:(wo(e,!0,XC,r,a),r=Pi,Pi=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=cI(o,r,ZF),e===null?e=!1:(wo(e,!0,YC,r,o),r=Pi,lI=Pi=null,e=r!==null)),e):!1}function mS(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}qo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(pe(566));var e=[];wo(this._fragmentFiber.child,!1,ux,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=BS(this._fragmentFiber);if(o=a?o[1]||o[0]||ei(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=ka(o),mS(t,a);return}if(o=ka(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=ka(n),mS(n,a)):ka(n).scrollIntoView(t),o+=a?-1:1}};function xA(t,e){return t=ka(t),hM(t,e),!1}function hM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function mM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,fl(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<Fn.length;i++){var l=Fn[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(Fn[s++]=l)}Fn.length=s,r.observe(t)}),hM(t,e))}function gA(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,fl(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?hA(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function p0(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":p0(a),kd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function FA(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cf])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function vA(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=sn(t.nextSibling),t===null))return null;return t}function IM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=sn(t.nextSibling),t===null))return null;return t}function h0(t){return t.data==="$?"||t.data==="$~"}function dx(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var m0=null;function IS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return sn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function xS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function yA(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function MA(t){uS(function(){uS(function(e){return t(e)})})}function xM(t,e,a){switch(e=$c(a),t){case"html":if(t=e.documentElement,!t)throw Error(pe(452));return t;case"head":if(t=e.head,!t)throw Error(pe(453));return t;case"body":if(t=e.body,!t)throw Error(pe(454));return t;default:throw Error(pe(451))}}function gM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Zt(t,e,o,null,jw,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zn&&(t.onclick=null),kd(t)}function iI(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);kd(t)}var ln=new Map,gS=new Set;function ef(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var yr=qt.d;qt.d={f:bA,r:_A,D:CA,C:TA,L:wA,m:AA,X:RA,S:EA,M:DA};function bA(){var t=yr.f(),e=Jd();return t||e}function _A(t){var e=Il(t);e!==null&&e.tag===5&&e.type==="form"?a1(e):yr.r(t)}var vl=typeof document>"u"?null:document;function FM(t,e,a){var o=vl;if(o&&typeof e=="string"&&e){var n=on(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),gS.has(n)||(gS.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),$a(e,"link",t),Ga(e),o.head.appendChild(e)))}}function CA(t){yr.D(t),FM("dns-prefetch",t,null)}function TA(t,e){yr.C(t,e),FM("preconnect",t,e)}function wA(t,e,a){yr.L(t,e,a);var o=vl;if(o&&t&&e){var n='link[rel="preload"][as="'+on(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+on(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+on(a.imageSizes)+'"]')):n+='[href="'+on(t)+'"]';var r=n;switch(e){case"style":r=ul(t);break;case"script":r=Sl(t)}if(!(ln.has(r)||(t=aa({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ln.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(mf(r))||e==="script"&&o.querySelector(If(r))))){var s=o.createElement("link");$a(s,"link",t),e==="style"&&(s[fd]=!0,s.onload=s.onerror=function(){ZS(s)}),Ga(s),o.head.appendChild(s)}}}function AA(t,e){yr.m(t,e);var a=vl;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+on(o)+'"][href="'+on(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Sl(t)}if(!ln.has(r)&&(t=aa({rel:"modulepreload",href:t},e),ln.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(If(r)))return}o=a.createElement("link"),$a(o,"link",t),Ga(o),a.head.appendChild(o)}}}function EA(t,e,a){yr.S(t,e,a);var o=vl;if(o&&t){var n=Xi(o).hoistableStyles,r=ul(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(mf(r)))i.loading=5;else{t=aa({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ln.get(r))&&px(t,a);var l=s=o.createElement("link");Ga(l),$a(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,td(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function RA(t,e){yr.X(t,e);var a=vl;if(a&&t){var o=Xi(a).hoistableScripts,n=Sl(t),r=o.get(n);r||(r=a.querySelector(If(n)),r||(t=aa({src:t,async:!0},e),(e=ln.get(n))&&hx(t,e),r=a.createElement("script"),Ga(r),$a(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function DA(t,e){yr.M(t,e);var a=vl;if(a&&t){var o=Xi(a).hoistableScripts,n=Sl(t),r=o.get(n);r||(r=a.querySelector(If(n)),r||(t=aa({src:t,async:!0,type:"module"},e),(e=ln.get(n))&&hx(t,e),r=a.createElement("script"),Ga(r),$a(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function FS(t,e,a,o){var n=(n=Jr.current)?ef(n):null;if(!n)throw Error(pe(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=ul(a.href),e=Xi(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ul(a.href);var r=Xi(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(mf(t)))?r._p||(s.instance=r,s.state.loading=5):(r=ln.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(t,r)),LA(n,t,r,s.state))),e&&o===null)throw Error(pe(528,""));return s}if(e&&o!==null)throw Error(pe(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=Sl(a),e=Xi(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(pe(444,t))}}function ul(t){return'href="'+on(t)+'"'}function mf(t){return'link[rel="stylesheet"]['+t+"]"}function vM(t){return aa({},t,{"data-precedence":t.precedence,precedence:null})}function LA(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[fd]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[fd]=!0,e.onload=e.onerror=ZS.bind(null,e),$a(e,"link",a),Ga(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function Sl(t){return'[src="'+on(t)+'"]'}function If(t){return"script[async]"+t}function vS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+on(a.href)+'"]');if(o)return e.instance=o,Ga(o),o;var n=aa({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ga(o),$a(o,"style",n),td(o,a.precedence,t),e.instance=o;case"stylesheet":n=ul(a.href);var r=t.querySelector(mf(n));if(r)return e.state.loading|=4,e.instance=r,Ga(r),r;o=vM(a),(n=ln.get(n))&&px(o,n),r=(t.ownerDocument||t).createElement("link"),Ga(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),$a(r,"link",o),e.state.loading|=4,td(r,a.precedence,t),e.instance=r;case"script":return r=Sl(a.src),(n=t.querySelector(If(r)))?(e.instance=n,Ga(n),n):(o=a,(n=ln.get(r))&&(o=aa({},a),hx(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ga(n),$a(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(pe(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,td(o,a.precedence,t));return e.instance}function td(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function px(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function hx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ad=null;function SS(t,e,a){if(ad===null){var o=new Map,n=ad=new Map;n.set(a,o)}else n=ad,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[cf]||r[Ka]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function I0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function PA(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function yS(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function SM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function yM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function MS(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=yM(e),t.suspenseyImages.push(e)),t=UA.bind(t),e.decode().then(t,t))}function BA(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=ul(o.href),r=e.querySelector(mf(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=tf.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,Ga(r);return}r=e.ownerDocument||e,o=vM(o),(n=ln.get(n))&&px(o,n),r=r.createElement("link"),Ga(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),$a(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=tf.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var od=0;function kA(t,e){return t.stylesheets&&t.count===0&&nd(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&nd(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&od===0&&(od=62500*eA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nd(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>od?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function MM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)nd(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function tf(){this.count--,MM(this)}function UA(){this.imgCount--,MM(this)}var Ld=null;function nd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ld=new Map,e.forEach(NA,t),Ld=null,tf.call(t))}function NA(t,e){if(!(e.state.loading&4)){var a=Ld.get(t);if(a)var o=a.get(null);else{a=new Map,Ld.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=tf.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var dl={$$typeof:On,Provider:null,Consumer:null,_currentValue:Hs,_currentValue2:Hs,_threadCount:0};function OA(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bm(0),this.hiddenUpdates=Bm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function bM(t,e,a,o,n,r,s,i,l,c,u,h){return t=new OA(t,e,a,s,l,c,u,h,i),e=1,r===!0&&(e|=24),r=Co(3,null,null,e),t.current=r,r.stateNode=t,e=P0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},U0(r),t}function _M(t){return t?(t=Vi,t):Vi}function CM(t,e,a,o,n,r){n=_M(n),o.context===null?o.context=n:o.pendingContext=n,o=jr(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=$r(t,o,e),a!==null&&(To(a,t,e),Lc(a,t,e))}function bS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function mx(t,e){bS(t,e),(t=t.alternate)&&bS(t,e)}function TM(t){if(t.tag===13||t.tag===31){var e=oi(t,67108864);e!==null&&To(e,t,67108864),mx(t,67108864)}}function _S(t){if(t.tag===13||t.tag===31){var e=Vo();e=y0(e);var a=oi(t,e);a!==null&&To(a,t,e),mx(t,e)}}var pl=!0;function zA(t,e,a,o){var n=Ft.T;Ft.T=null;var r=qt.p;try{qt.p=2,Ix(t,e,a,o)}finally{qt.p=r,Ft.T=n}}function HA(t,e,a,o){var n=Ft.T;Ft.T=null;var r=qt.p;try{qt.p=8,Ix(t,e,a,o)}finally{qt.p=r,Ft.T=n}}function Ix(t,e,a,o){if(pl){var n=x0(o);if(n===null)nI(t,e,o,Pd,a),CS(t,o);else if(GA(n,t,e,a,o))o.stopPropagation();else if(CS(t,o),e&4&&-1<VA.indexOf(t)){for(;n!==null;){var r=Il(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=ks(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-Ho(s);i.entanglements[1]|=l,s&=~l}Yn(r),!(Gt&6)&&(wd=Oo()+500,hf(0,!1))}}break;case 31:case 13:i=oi(r,2),i!==null&&To(i,r,2),Jd(),mx(r,2)}if(r=x0(o),r===null&&nI(t,e,o,Pd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else nI(t,e,o,null,a)}}function x0(t){return t=_0(t),xx(t)}var Pd=null;function xx(t){if(Pd=null,t=Os(t),t!==null){var e=nf(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=DS(e),t!==null)return t;t=null}else if(a===31){if(t=LS(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pd=t,null}function wM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(aT()){case OS:return 2;case zS:return 8;case cd:case oT:return 32;case HS:return 268435456;default:return 32}default:return 32}}var g0=!1,os=null,ns=null,rs=null,af=new Map,of=new Map,Gr=[],VA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function CS(t,e){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":af.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":of.delete(e.pointerId)}}function yc(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=Il(e),e!==null&&TM(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function GA(t,e,a,o,n){switch(e){case"focusin":return os=yc(os,t,e,a,o,n),!0;case"dragenter":return ns=yc(ns,t,e,a,o,n),!0;case"mouseover":return rs=yc(rs,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return af.set(r,yc(af.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,of.set(r,yc(of.get(r)||null,t,e,a,o,n)),!0}return!1}function AM(t){var e=Os(t.target);if(e!==null){var a=nf(e);if(a!==null){if(e=a.tag,e===13){if(e=DS(a),e!==null){t.blockedOn=e,jF(t.priority,function(){_S(a)});return}}else if(e===31){if(e=LS(a),e!==null){t.blockedOn=e,jF(t.priority,function(){_S(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=x0(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);SI=o,a.target.dispatchEvent(o),SI=null}else return e=Il(a),e!==null&&TM(e),t.blockedOn=a,!1;e.shift()}return!0}function TS(t,e,a){rd(t)&&a.delete(e)}function qA(){g0=!1,os!==null&&rd(os)&&(os=null),ns!==null&&rd(ns)&&(ns=null),rs!==null&&rd(rs)&&(rs=null),af.forEach(TS),of.forEach(TS)}function Ou(t,e){t.blockedOn===e&&(t.blockedOn=null,g0||(g0=!0,Ua.unstable_scheduleCallback(Ua.unstable_NormalPriority,qA)))}var zu=null;function wS(t){zu!==t&&(zu=t,Ua.unstable_scheduleCallback(Ua.unstable_NormalPriority,function(){zu===t&&(zu=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if(xx(o||a)===null)continue;break}var r=Il(a);r!==null&&(t.splice(e,3),e-=3,UI(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function hl(t){function e(l){return Ou(l,t)}os!==null&&Ou(os,t),ns!==null&&Ou(ns,t),rs!==null&&Ou(rs,t),af.forEach(e),of.forEach(e);for(var a=0;a<Gr.length;a++){var o=Gr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Gr.length&&(a=Gr[0],a.blockedOn===null);)AM(a),a.blockedOn===null&&Gr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[Ao]||null;if(typeof r=="function")s||wS(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[Ao]||null)i=s.formAction;else if(xx(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),wS(a)}}}function EM(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function gx(t){this._internalRoot=t}$d.prototype.render=gx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));var a=e.current,o=Vo();CM(a,o,t,e,null,null)};$d.prototype.unmount=gx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;CM(t.current,2,null,t,null,null),Jd(),e[ml]=null}};function $d(t){this._internalRoot=t}$d.prototype.unstable_scheduleHydration=function(t){if(t){var e=YS();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Gr.length&&e!==0&&e<Gr[a].priority;a++);Gr.splice(a,0,t),a===0&&AM(t)}};var AS=ES.version;if(AS!=="19.3.0")throw Error(pe(527,AS,"19.3.0"));qt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=WC(e),t=t!==null?PS(t):null,t=t===null?null:t.stateNode,t};var WA={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Mc.isDisabled&&Mc.supportsFiber))try{rf=Mc.inject(WA),zo=Mc}catch{}var Mc;ep.createRoot=function(t,e){if(!RS(t))throw Error(pe(299));var a=!1,o="",n=f1,r=u1,s=d1;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=bM(t,1,!1,null,null,a,o,null,n,r,s,EM),t[ml]=e.current,cx(t),new gx(e)};ep.hydrateRoot=function(t,e,a){if(!RS(t))throw Error(pe(299));var o=!1,n="",r=f1,s=u1,i=d1,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=bM(t,1,!0,e,a??null,o,n,l,r,s,i,EM),e.context=_M(null),a=e.current,o=Vo(),o=y0(o),n=jr(o),n.callback=null,$r(a,n,o),a=o,e.current.lanes=a,lf(e,a),Yn(e),t[ml]=e.current,cx(t),new $d(e)};ep.version="19.3.0"});var PM=Br((RB,LM)=>{"use strict";ht();function DM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DM)}catch(t){console.error(t)}}DM(),LM.exports=RM()});ht();var Si=mn(Lo()),yi=mn(PM());ht();var vi=mn(Lo());ht();ht();var sh="186";var fb=0,og=1,ub=2;var Xf=1,db=2,tc=3,Ts=0,So=1,Jo=2,er=0,ac=1,ng=2,rg=3,sg=4,pb=5;var mi=100,hb=101,mb=102,Ib=103,xb=104,gb=200,Fb=201,vb=202,Sb=203,ig=204,lg=205,yb=206,Mb=207,bb=208,_b=209,Cb=210,Tb=211,wb=212,Ab=213,Eb=214,bp=0,_p=1,Cp=2,kl=3,Tp=4,wp=5,Ap=6,Ep=7,cg=0,Rb=1,Db=2,Tn=0,fg=1,ug=2,dg=3,pg=4,hg=5,mg=6,Yf=7;var Ig=300,ws=301,Ii=302,ih=303,lh=304,Zf=306,Qn=1e3,fn=1001,Rp=1002,Xa=1003,Lb=1004;var Kf=1005;var Na=1006,ch=1007;var tr=1008;var Do=1009,xg=1010,gg=1011,oc=1012,fh=1013,wn=1014,An=1015,En=1016,uh=1017,dh=1018,nc=1020,Fg=35902,vg=35899,Sg=1021,yg=1022,un=1023,jn=1026,As=1027,Mg=1028,ph=1029,Es=1030,hh=1031;var mh=1033,Jf=33776,Qf=33777,jf=33778,$f=33779,Ih=35840,xh=35841,gh=35842,Fh=35843,vh=36196,Sh=37492,yh=37496,Mh=37488,bh=37489,eu=37490,_h=37491,Ch=37808,Th=37809,wh=37810,Ah=37811,Eh=37812,Rh=37813,Dh=37814,Lh=37815,Ph=37816,Bh=37817,kh=37818,Uh=37819,Nh=37820,Oh=37821,zh=36492,Hh=36494,Vh=36495,Gh=36283,qh=36284,tu=36285,Wh=36286;var _f=2300,Dp=2301,yp=2302,Wx=2303,Xx=2400,Yx=2401,Zx=2402;var Pb=3200;var Xh=0,Bb=1,Er="",to="srgb",Cf="srgb-linear",Tf="linear",Xt="srgb";var Mp=7680;var kb=519,Ub=512,Nb=513,Ob=514,Yh=515,zb=516,Hb=517,Zh=518,Vb=519,Gb=35044;var bg="300 es",Cn=2e3,Ul=2001;function XA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function YA(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function wf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qb(){let t=wf("canvas");return t.style.display="block",t}var BM={},Nl=null;function _g(...t){let e="THREE."+t.shift();Nl?Nl("log",e,...t):console.log(e,...t)}function Wb(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function It(...t){t=Wb(t);let e="THREE."+t.shift();if(Nl)Nl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function mt(...t){t=Wb(t);let e="THREE."+t.shift();if(Nl)Nl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function ci(...t){let e=t.join(" ");e in BM||(BM[e]=!0,It(...t))}function Xb(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var Yb={[bp]:_p,[Cp]:Ap,[Tp]:Ep,[kl]:wp,[_p]:bp,[Ap]:Cp,[Ep]:Tp,[wp]:kl},$n=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},ro=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fx=Math.PI/180,Lp=180/Math.PI;function rc(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(ro[t&255]+ro[t>>8&255]+ro[t>>16&255]+ro[t>>24&255]+"-"+ro[e&255]+ro[e>>8&255]+"-"+ro[e>>16&15|64]+ro[e>>24&255]+"-"+ro[a&63|128]+ro[a>>8&255]+"-"+ro[a>>16&255]+ro[a>>24&255]+ro[o&255]+ro[o>>8&255]+ro[o>>16&255]+ro[o>>24&255]).toLowerCase()}function Rt(t,e,a){return Math.max(e,Math.min(a,t))}function ZA(t,e){return(t%e+e)%e}function vx(t,e,a){return(1-a)*t+a*e}function xf(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ue=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xo=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],u=o[n+2],h=o[n+3],f=r[s+0],d=r[s+1],m=r[s+2],v=r[s+3];if(h!==v||l!==f||c!==d||u!==m){let I=l*f+c*d+u*m+h*v;I<0&&(f=-f,d=-d,m=-m,v=-v,I=-I);let p=1-i;if(I<.9995){let g=Math.acos(I),y=Math.sin(g);p=Math.sin(p*g)/y,i=Math.sin(i*g)/y,l=l*p+f*i,c=c*p+d*i,u=u*p+m*i,h=h*p+v*i}else{l=l*p+f*i,c=c*p+d*i,u=u*p+m*i,h=h*p+v*i;let g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[a]=l,e[a+1]=c,e[a+2]=u,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],u=o[n+3],h=r[s],f=r[s+1],d=r[s+2],m=r[s+3];return e[a]=i*m+u*h+l*d-c*f,e[a+1]=l*m+u*f+c*h-i*d,e[a+2]=c*m+u*d+i*f-l*h,e[a+3]=u*m-i*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),u=i(n/2),h=i(r/2),f=l(o/2),d=l(n/2),m=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],u=a[6],h=a[10],f=o+i+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,u=a._w;return this._x=o*u+s*i+n*c-r*l,this._y=n*u+s*l+r*i-o*c,this._z=r*u+s*c+o*l-n*i,this._w=s*u-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),u=Math.sin(c);l=Math.sin(l*c)/u,a=Math.sin(a*c)/u,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(kM.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(kM.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),u=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*u,this.y=o+l*u+i*c-r*h,this.z=n+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Sx.copy(this).projectOnVector(e),this.sub(Sx)}reflect(e){return this.sub(Sx.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sx=new O,kM=new xo,Mt=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=i,u[3]=a,u[4]=r,u[5]=l,u[6]=o,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],u=o[4],h=o[7],f=o[2],d=o[5],m=o[8],v=n[0],I=n[3],p=n[6],g=n[1],y=n[4],x=n[7],b=n[2],C=n[5],T=n[8];return r[0]=s*v+i*g+l*b,r[3]=s*I+i*y+l*C,r[6]=s*p+i*x+l*T,r[1]=c*v+u*g+h*b,r[4]=c*I+u*y+h*C,r[7]=c*p+u*x+h*T,r[2]=f*v+d*g+m*b,r[5]=f*I+d*y+m*C,r[8]=f*p+d*x+m*T,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return a*s*u-a*i*c-o*r*u+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=u*s-i*c,f=i*l-u*r,d=c*r-s*l,m=a*h+o*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=h*v,e[1]=(n*c-u*o)*v,e[2]=(i*o-n*s)*v,e[3]=f*v,e[4]=(u*a-n*l)*v,e[5]=(n*r-i*a)*v,e[6]=d*v,e[7]=(o*l-c*a)*v,e[8]=(s*a-o*r)*v,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yx.makeScale(e,a)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yx.makeRotation(-e)),this}translate(e,a){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yx=new Mt,UM=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),NM=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KA(){let t={enabled:!0,workingColorSpace:Cf,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Xt&&(n.r=wr(n.r),n.g=wr(n.g),n.b=wr(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Xt&&(n.r=Bl(n.r),n.g=Bl(n.g),n.b=Bl(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Er?Tf:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[Cf]:{primaries:e,whitePoint:o,transfer:Tf,toXYZ:UM,fromXYZ:NM,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:to},outputColorSpaceConfig:{drawingBufferColorSpace:to}},[to]:{primaries:e,whitePoint:o,transfer:Xt,toXYZ:UM,fromXYZ:NM,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:to}}}),t}var kt=KA();function wr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var yl,Pp=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{yl===void 0&&(yl=wf("canvas")),yl.width=e.width,yl.height=e.height;let n=yl.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=yl}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=wf("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=wr(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(wr(a[o]/255)*255):a[o]=wr(a[o]);return{data:a,width:e.width,height:e.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},JA=0,Ol=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=rc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push(Mx(n[s].image)):r.push(Mx(n[s]))}else r=Mx(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function Mx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var QA=0,bx=new O,go=class t extends $n{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=fn,n=fn,r=Na,s=tr,i=un,l=Do,c=t.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=rc(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bx).x}get height(){return this.source.getSize(bx).y}get depth(){return this.source.getSize(bx).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){It(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){It(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};go.DEFAULT_IMAGE=null;go.DEFAULT_MAPPING=Ig;go.DEFAULT_ANISOTROPY=1;var Ia=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],I=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-I)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+I)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(c+1)/2,x=(d+1)/2,b=(p+1)/2,C=(u+f)/4,T=(h+v)/4,S=(m+I)/4;return y>x&&y>b?y<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(y),n=C/o,r=T/o):x>b?x<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),o=C/n,r=S/n):b<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),o=T/r,n=S/r),this.set(o,n,r,a),this}let g=Math.sqrt((I-m)*(I-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(I-m)/g,this.y=(h-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this.w=Rt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this.w=Rt(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bp=class extends $n{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Na,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new Ia(0,0,e,a),this.scissorTest=!1,this.viewport=new Ia(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new go(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Na,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new Ol(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class extends Bp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},Af=class extends go{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Xa,this.minFilter=Xa,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kp=class extends go{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Xa,this.minFilter=Xa,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oa=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,u,h,f,d,m,v,I){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,u,h,f,d,m,v,I)}set(e,a,o,n,r,s,i,l,c,u,h,f,d,m,v,I){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/Ml.setFromMatrixColumn(e,0).length(),r=1/Ml.setFromMatrixColumn(e,1).length(),s=1/Ml.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*u,d=s*h,m=i*u,v=i*h;a[0]=l*u,a[4]=-l*h,a[8]=c,a[1]=d+m*c,a[5]=f-v*c,a[9]=-i*l,a[2]=v-f*c,a[6]=m+d*c,a[10]=s*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,v=c*h;a[0]=f+v*i,a[4]=m*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*u,a[9]=-i,a[2]=d*i-m,a[6]=v+f*i,a[10]=s*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,v=c*h;a[0]=f-v*i,a[4]=-s*h,a[8]=m+d*i,a[1]=d+m*i,a[5]=s*u,a[9]=v-f*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let f=s*u,d=s*h,m=i*u,v=i*h;a[0]=l*u,a[4]=m*c-d,a[8]=f*c+v,a[1]=l*h,a[5]=v*c+f,a[9]=d*c-m,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let f=s*l,d=s*c,m=i*l,v=i*c;a[0]=l*u,a[4]=v-f*h,a[8]=m*h+d,a[1]=h,a[5]=s*u,a[9]=-i*u,a[2]=-c*u,a[6]=d*h+m,a[10]=f-v*h}else if(e.order==="XZY"){let f=s*l,d=s*c,m=i*l,v=i*c;a[0]=l*u,a[4]=-h,a[8]=c*u,a[1]=f*h+v,a[5]=s*u,a[9]=d*h-m,a[2]=m*h-d,a[6]=i*u,a[10]=v*h+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jA,e,$A)}lookAt(e,a,o){let n=this.elements;return Wo.subVectors(e,a),Wo.lengthSq()===0&&(Wo.z=1),Wo.normalize(),ps.crossVectors(o,Wo),ps.lengthSq()===0&&(Math.abs(o.z)===1?Wo.x+=1e-4:Wo.z+=1e-4,Wo.normalize(),ps.crossVectors(o,Wo)),ps.normalize(),tp.crossVectors(Wo,ps),n[0]=ps.x,n[4]=tp.x,n[8]=Wo.x,n[1]=ps.y,n[5]=tp.y,n[9]=Wo.y,n[2]=ps.z,n[6]=tp.z,n[10]=Wo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],u=o[1],h=o[5],f=o[9],d=o[13],m=o[2],v=o[6],I=o[10],p=o[14],g=o[3],y=o[7],x=o[11],b=o[15],C=n[0],T=n[4],S=n[8],w=n[12],A=n[1],L=n[5],X=n[9],z=n[13],B=n[2],U=n[6],ae=n[10],J=n[14],se=n[3],G=n[7],K=n[11],oe=n[15];return r[0]=s*C+i*A+l*B+c*se,r[4]=s*T+i*L+l*U+c*G,r[8]=s*S+i*X+l*ae+c*K,r[12]=s*w+i*z+l*J+c*oe,r[1]=u*C+h*A+f*B+d*se,r[5]=u*T+h*L+f*U+d*G,r[9]=u*S+h*X+f*ae+d*K,r[13]=u*w+h*z+f*J+d*oe,r[2]=m*C+v*A+I*B+p*se,r[6]=m*T+v*L+I*U+p*G,r[10]=m*S+v*X+I*ae+p*K,r[14]=m*w+v*z+I*J+p*oe,r[3]=g*C+y*A+x*B+b*se,r[7]=g*T+y*L+x*U+b*G,r[11]=g*S+y*X+x*ae+b*K,r[15]=g*w+y*z+x*J+b*oe,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],I=e[11],p=e[15],g=l*d-c*f,y=i*d-c*h,x=i*f-l*h,b=s*d-c*u,C=s*f-l*u,T=s*h-i*u;return a*(v*g-I*y+p*x)-o*(m*g-I*b+p*C)+n*(m*y-v*b+p*T)-r*(m*x-v*C+I*T)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],u=e[10];return a*(s*u-i*c)-o*(r*u-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],I=e[14],p=e[15],g=a*i-o*s,y=a*l-n*s,x=a*c-r*s,b=o*l-n*i,C=o*c-r*i,T=n*c-r*l,S=u*v-h*m,w=u*I-f*m,A=u*p-d*m,L=h*I-f*v,X=h*p-d*v,z=f*p-d*I,B=g*z-y*X+x*L+b*A-C*w+T*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/B;return e[0]=(i*z-l*X+c*L)*U,e[1]=(n*X-o*z-r*L)*U,e[2]=(v*T-I*C+p*b)*U,e[3]=(f*C-h*T-d*b)*U,e[4]=(l*A-s*z-c*w)*U,e[5]=(a*z-n*A+r*w)*U,e[6]=(I*x-m*T-p*y)*U,e[7]=(u*T-f*x+d*y)*U,e[8]=(s*X-i*A+c*S)*U,e[9]=(o*A-a*X-r*S)*U,e[10]=(m*C-v*x+p*g)*U,e[11]=(h*x-u*C-d*g)*U,e[12]=(i*w-s*L-l*S)*U,e[13]=(a*L-o*w+n*S)*U,e[14]=(v*y-m*b-I*g)*U,e[15]=(u*b-h*y+f*g)*U,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,u=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,u*i+o,u*l-n*s,0,c*l-n*i,u*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,u=s+s,h=i+i,f=r*c,d=r*u,m=r*h,v=s*u,I=s*h,p=i*h,g=l*c,y=l*u,x=l*h,b=o.x,C=o.y,T=o.z;return n[0]=(1-(v+p))*b,n[1]=(d+x)*b,n[2]=(m-y)*b,n[3]=0,n[4]=(d-x)*C,n[5]=(1-(f+p))*C,n[6]=(I+g)*C,n[7]=0,n[8]=(m+y)*T,n[9]=(I-g)*T,n[10]=(1-(f+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=Ml.set(n[0],n[1],n[2]).length(),i=Ml.set(n[4],n[5],n[6]).length(),l=Ml.set(n[8],n[9],n[10]).length();r<0&&(s=-s),yn.copy(this);let c=1/s,u=1/i,h=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,a.setFromRotationMatrix(yn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=Cn,l=!1){let c=this.elements,u=2*r/(a-e),h=2*r/(o-n),f=(a+e)/(a-e),d=(o+n)/(o-n),m,v;if(l)m=r/(s-r),v=s*r/(s-r);else if(i===Cn)m=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(i===Ul)m=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=Cn,l=!1){let c=this.elements,u=2/(a-e),h=2/(o-n),f=-(a+e)/(a-e),d=-(o+n)/(o-n),m,v;if(l)m=1/(s-r),v=s/(s-r);else if(i===Cn)m=-2/(s-r),v=-(s+r)/(s-r);else if(i===Ul)m=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},Ml=new O,yn=new oa,jA=new O(0,0,0),$A=new O(1,1,1),ps=new O,tp=new O,Wo=new O,OM=new oa,zM=new xo,Ar=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(Rt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return OM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(OM,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return zM.setFromEuler(this),this.setFromQuaternion(zM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ar.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e2=0,HM=new O,bl=new xo,Mr=new oa,ap=new O,gf=new O,t2=new O,a2=new xo,VM=new O(1,0,0),GM=new O(0,1,0),qM=new O(0,0,1),WM={type:"added"},o2={type:"removed"},_l={type:"childadded",child:null},_x={type:"childremoved",child:null},Fo=class t extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=rc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new O,a=new Ar,o=new xo,n=new O(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new oa},normalMatrix:{value:new Mt}}),this.matrix=new oa,this.matrixWorld=new oa,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return bl.setFromAxisAngle(e,a),this.quaternion.multiply(bl),this}rotateOnWorldAxis(e,a){return bl.setFromAxisAngle(e,a),this.quaternion.premultiply(bl),this}rotateX(e){return this.rotateOnAxis(VM,e)}rotateY(e){return this.rotateOnAxis(GM,e)}rotateZ(e){return this.rotateOnAxis(qM,e)}translateOnAxis(e,a){return HM.copy(e).applyQuaternion(this.quaternion),this.position.add(HM.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(VM,e)}translateY(e){return this.translateOnAxis(GM,e)}translateZ(e){return this.translateOnAxis(qM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?ap.copy(e):ap.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),gf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(gf,ap,this.up):Mr.lookAt(ap,gf,this.up),this.quaternion.setFromRotationMatrix(Mr),n&&(Mr.extractRotation(n.matrixWorld),bl.setFromRotationMatrix(Mr),this.quaternion.premultiply(bl.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(WM),_l.child=e,this.dispatchEvent(_l),_l.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(o2),_x.child=e,this.dispatchEvent(_x),_x.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(WM),_l.child=e,this.dispatchEvent(_l),_l.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gf,e,t2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gf,a2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),m=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),f.length>0&&(o.skeletons=f),d.length>0&&(o.animations=d),m.length>0&&(o.nodes=m)}return o.object=n,o;function s(i){let l=[];for(let c in i){let u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fo.DEFAULT_UP=new O(0,1,0);Fo.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=class extends Fo{constructor(){super(),this.isGroup=!0,this.type="Group"}},n2={type:"move"},Hl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let v of e.hand.values()){let I=a.getJointPose(v,o),p=this._getHandJoint(c,v);I!==null&&(p.matrix.fromArray(I.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=I.radius),p.visible=I!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(n2)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Kn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},Zb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},op={h:0,s:0,l:0};function Cx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var _t=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=to){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=kt.workingColorSpace){return this.r=e,this.g=a,this.b=o,kt.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=kt.workingColorSpace){if(e=ZA(e,1),a=Rt(a,0,1),o=Rt(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=Cx(s,r,e+1/3),this.g=Cx(s,r,e),this.b=Cx(s,r,e-1/3)}return kt.colorSpaceToWorking(this,n),this}setStyle(e,a=to){function o(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:It("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);It("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=to){let o=Zb[e.toLowerCase()];return o!==void 0?this.setHex(o,a):It("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=to){return kt.workingToColorSpace(so.copy(this),e),Math.round(Rt(so.r*255,0,255))*65536+Math.round(Rt(so.g*255,0,255))*256+Math.round(Rt(so.b*255,0,255))}getHexString(e=to){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=kt.workingColorSpace){kt.workingToColorSpace(so.copy(this),a);let o=so.r,n=so.g,r=so.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,u=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=u<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,a=kt.workingColorSpace){return kt.workingToColorSpace(so.copy(this),a),e.r=so.r,e.g=so.g,e.b=so.b,e}getStyle(e=to){kt.workingToColorSpace(so.copy(this),e);let a=so.r,o=so.g,n=so.b;return e!==to?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+a,hs.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL(hs),e.getHSL(op);let o=vx(hs.h,op.h,a),n=vx(hs.s,op.s,a),r=vx(hs.l,op.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},so=new _t;_t.NAMES=Zb;var Vl=class extends Fo{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Mn=new O,br=new O,Tx=new O,_r=new O,Cl=new O,Tl=new O,XM=new O,wx=new O,Ax=new O,Ex=new O,Rx=new Ia,Dx=new Ia,Lx=new Ia,gs=class t{constructor(e=new O,a=new O,o=new O){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),Mn.subVectors(e,a),n.cross(Mn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){Mn.subVectors(n,a),br.subVectors(o,a),Tx.subVectors(e,a);let s=Mn.dot(Mn),i=Mn.dot(br),l=Mn.dot(Tx),c=br.dot(br),u=br.dot(Tx),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-i*u)*f,m=(s*u-i*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_r.x),l.addScaledVector(s,_r.y),l.addScaledVector(i,_r.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return Rx.setScalar(0),Dx.setScalar(0),Lx.setScalar(0),Rx.fromBufferAttribute(e,a),Dx.fromBufferAttribute(e,o),Lx.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Rx,r.x),s.addScaledVector(Dx,r.y),s.addScaledVector(Lx,r.z),s}static isFrontFacing(e,a,o,n){return Mn.subVectors(o,a),br.subVectors(e,a),Mn.cross(br).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Mn.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;Cl.subVectors(n,o),Tl.subVectors(r,o),wx.subVectors(e,o);let l=Cl.dot(wx),c=Tl.dot(wx);if(l<=0&&c<=0)return a.copy(o);Ax.subVectors(e,n);let u=Cl.dot(Ax),h=Tl.dot(Ax);if(u>=0&&h<=u)return a.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),a.copy(o).addScaledVector(Cl,s);Ex.subVectors(e,r);let d=Cl.dot(Ex),m=Tl.dot(Ex);if(m>=0&&d<=m)return a.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return i=c/(c-m),a.copy(o).addScaledVector(Tl,i);let I=u*m-d*h;if(I<=0&&h-u>=0&&d-m>=0)return XM.subVectors(r,n),i=(h-u)/(h-u+(d-m)),a.copy(n).addScaledVector(XM,i);let p=1/(I+v+f);return s=v*p,i=f*p,a.copy(o).addScaledVector(Cl,s).addScaledVector(Tl,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fs=class{constructor(e=new O(1/0,1/0,1/0),a=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(bn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(bn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=bn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(r,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),np.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),np.copy(o.boundingBox)),np.applyMatrix4(e.matrixWorld),this.union(np)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ff),rp.subVectors(this.max,Ff),wl.subVectors(e.a,Ff),Al.subVectors(e.b,Ff),El.subVectors(e.c,Ff),ms.subVectors(Al,wl),Is.subVectors(El,Al),ri.subVectors(wl,El);let a=[0,-ms.z,ms.y,0,-Is.z,Is.y,0,-ri.z,ri.y,ms.z,0,-ms.x,Is.z,0,-Is.x,ri.z,0,-ri.x,-ms.y,ms.x,0,-Is.y,Is.x,0,-ri.y,ri.x,0];return!Px(a,wl,Al,El,rp)||(a=[1,0,0,0,1,0,0,0,1],!Px(a,wl,Al,El,rp))?!1:(sp.crossVectors(ms,Is),a=[sp.x,sp.y,sp.z],Px(a,wl,Al,El,rp))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cr=[new O,new O,new O,new O,new O,new O,new O,new O],bn=new O,np=new Fs,wl=new O,Al=new O,El=new O,ms=new O,Is=new O,ri=new O,Ff=new O,rp=new O,sp=new O,si=new O;function Px(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){si.fromArray(t,r);let i=n.x*Math.abs(si.x)+n.y*Math.abs(si.y)+n.z*Math.abs(si.z),l=e.dot(si),c=a.dot(si),u=o.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}var Ra=new O,ip=new Ue,r2=0,lo=class extends $n{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r2++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=Gb,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)ip.fromBufferAttribute(this,a),ip.applyMatrix3(e),this.setXY(a,ip.x,ip.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyMatrix3(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyMatrix4(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyNormalMatrix(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.transformDirection(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=xf(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=Eo(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=xf(a,this.array)),a}setX(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=xf(a,this.array)),a}setY(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=xf(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=xf(a,this.array)),a}setW(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array),n=Eo(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array),n=Eo(n,this.array),r=Eo(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ef=class extends lo{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var Rf=class extends lo{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var Da=class extends lo{constructor(e,a,o){super(new Float32Array(e),a,o)}},s2=new Fs,vf=new O,Bx=new O,Gl=class{constructor(e=new O,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):s2.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vf.subVectors(e,this.center);let a=vf.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(vf,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vf.copy(e.center).add(Bx)),this.expandByPoint(vf.copy(e.center).sub(Bx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},i2=0,cn=new oa,kx=new Fo,Rl=new O,Xo=new Fs,Sf=new Fs,Wa=new O,vo=class t extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=rc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XA(e)?Rf:Ef)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new Mt().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,a,o){return cn.makeTranslation(e,a,o),this.applyMatrix4(cn),this}scale(e,a,o){return cn.makeScale(e,a,o),this.applyMatrix4(cn),this}lookAt(e){return kx.lookAt(e),kx.updateMatrix(),this.applyMatrix4(kx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rl).negate(),this.translate(Rl.x,Rl.y,Rl.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Da(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];Xo.setFromBufferAttribute(r),this.morphTargetsRelative?(Wa.addVectors(this.boundingBox.min,Xo.min),this.boundingBox.expandByPoint(Wa),Wa.addVectors(this.boundingBox.max,Xo.max),this.boundingBox.expandByPoint(Wa)):(this.boundingBox.expandByPoint(Xo.min),this.boundingBox.expandByPoint(Xo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let o=this.boundingSphere.center;if(Xo.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];Sf.setFromBufferAttribute(i),this.morphTargetsRelative?(Wa.addVectors(Xo.min,Sf.min),Xo.expandByPoint(Wa),Wa.addVectors(Xo.max,Sf.max),Xo.expandByPoint(Wa)):(Xo.expandByPoint(Sf.min),Xo.expandByPoint(Sf.max))}Xo.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Wa.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Wa));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)Wa.fromBufferAttribute(i,c),l&&(Rl.fromBufferAttribute(e,c),Wa.add(Rl)),n=Math.max(n,o.distanceToSquared(Wa))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new lo(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let S=0;S<o.count;S++)i[S]=new O,l[S]=new O;let c=new O,u=new O,h=new O,f=new Ue,d=new Ue,m=new Ue,v=new O,I=new O;function p(S,w,A){c.fromBufferAttribute(o,S),u.fromBufferAttribute(o,w),h.fromBufferAttribute(o,A),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),I.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),i[S].add(v),i[w].add(v),i[A].add(v),l[S].add(I),l[w].add(I),l[A].add(I))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,w=g.length;S<w;++S){let A=g[S],L=A.start,X=A.count;for(let z=L,B=L+X;z<B;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new O,x=new O,b=new O,C=new O;function T(S){b.fromBufferAttribute(n,S),C.copy(b);let w=i[S];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(C,w);let L=x.dot(l[S])<0?-1:1;s.setXYZW(S,y.x,y.y,y.z,L)}for(let S=0,w=g.length;S<w;++S){let A=g[S],L=A.start,X=A.count;for(let z=L,B=L+X;z<B;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new lo(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let f=0,d=o.count;f<d;f++)o.setXYZ(f,0,0,0);let n=new O,r=new O,s=new O,i=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),v=e.getX(f+1),I=e.getX(f+2);n.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,I),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),i.fromBufferAttribute(o,m),l.fromBufferAttribute(o,v),c.fromBufferAttribute(o,I),i.add(u),l.add(u),c.add(u),o.setXYZ(m,i.x,i.y,i.z),o.setXYZ(v,l.x,l.y,l.z),o.setXYZ(I,c.x,c.y,c.z)}else for(let f=0,d=a.count;f<d;f+=3)n.fromBufferAttribute(a,f+0),r.fromBufferAttribute(a,f+1),s.fromBufferAttribute(a,f+2),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Wa.fromBufferAttribute(e,a),Wa.normalize(),e.setXYZ(a,Wa.x,Wa.y,Wa.z)}toNonIndexed(){function e(i,l){let c=i.array,u=i.itemSize,h=i.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let v=0,I=l.length;v<I;v++){i.isInterleavedBufferAttribute?d=l[v]*i.data.stride+i.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new lo(f,u,h)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(a))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(a));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ux=new O,l2=new O,c2=new Mt,_n=class{constructor(e=new O(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=Ux.subVectors(o,a).cross(l2.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(Ux),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||c2.getNormalMatrix(e),n=this.coplanarPoint(Ux).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},f2=0,vs=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=rc(),this.name="",this.type="Material",this.blending=ac,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ig,this.blendDst=lg,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mp,this.stencilZFail=Mp,this.stencilZPass=Mp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){It(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){It(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new _n().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new Ue().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tr=new O,Nx=new O,lp=new O,cp=new O,Df=class{constructor(e=new O,a=new O(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Tr.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,a),Tr.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){Nx.copy(e).add(a).multiplyScalar(.5),lp.copy(a).sub(e).normalize(),cp.copy(this.origin).sub(Nx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(lp),i=cp.dot(this.direction),l=-cp.dot(lp),c=cp.lengthSq(),u=Math.abs(1-s*s),h,f,d,m;if(u>0)if(h=s*l-i,f=s*i-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let v=1/u;h*=v,f*=v,d=h*(h+s*f+2*i)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-s*r+i)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+i)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Nx).addScaledVector(lp,f),d}intersectSphere(e,a){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let o=Tr.dot(this.direction),n=Tr.dot(Tr)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(o=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(o=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(i=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,u=i.z,h=e.x-s.x,f=e.y-s.y,d=e.z-s.z,m=a.x-s.x,v=a.y-s.y,I=a.z-s.z,p=o.x-s.x,g=o.y-s.y,y=o.z-s.z,x=Math.abs(l),b=Math.abs(c),C=Math.abs(u),T,S,w,A,L,X,z,B,U,ae,J,se;if(x>=b&&x>=C?(w=l,X=h,U=m,se=p,l>=0?(T=c,S=u,A=f,L=d,z=v,B=I,ae=g,J=y):(T=u,S=c,A=d,L=f,z=I,B=v,ae=y,J=g)):b>=C?(w=c,X=f,U=v,se=g,c>=0?(T=u,S=l,A=d,L=h,z=I,B=m,ae=y,J=p):(T=l,S=u,A=h,L=d,z=m,B=I,ae=p,J=y)):(w=u,X=d,U=I,se=y,u>=0?(T=l,S=c,A=h,L=f,z=m,B=v,ae=p,J=g):(T=c,S=l,A=f,L=h,z=v,B=m,ae=g,J=p)),w===0)return null;let G=T/w,K=S/w,oe=1/w,De=A-G*X,Ce=L-K*X,$e=z-G*U,H=B-K*U,lt=ae-G*se,ee=J-K*se,te=lt*H-ee*$e,Ee=De*ee-Ce*lt,Ke=$e*Ce-H*De;if(n){if(te<0||Ee<0||Ke<0)return null}else if((te<0||Ee<0||Ke<0)&&(te>0||Ee>0||Ke>0))return null;let Me=te+Ee+Ke;if(Me===0)return null;let Ye=oe*(te*X+Ee*U+Ke*se);return(Me>0?Ye<0:Ye>0)?null:this.at(Ye/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},YM=new oa,ii=new Df,fp=new Gl,ZM=new O,up=new O,dp=new O,pp=new O,Ox=new O,hp=new O,KM=new O,mp=new O,ba=class extends Fo{constructor(e=new vo,a=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){hp.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=i[l],h=r[l];u!==0&&(Ox.fromBufferAttribute(h,e),s?hp.addScaledVector(Ox,u):hp.addScaledVector(Ox.sub(a),u))}a.add(hp)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),fp.copy(o.boundingSphere),fp.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(fp.containsPoint(ii.origin)===!1&&(ii.intersectSphere(fp,ZM)===null||ii.origin.distanceToSquared(ZM)>(e.far-e.near)**2))&&(YM.copy(r).invert(),ii.copy(e.ray).applyMatrix4(YM),!(o.boundingBox!==null&&ii.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,ii)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){let I=f[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(i.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,b=y;x<b;x+=3){let C=i.getX(x),T=i.getX(x+1),S=i.getX(x+2);n=Ip(this,p,e,o,c,u,h,C,T,S),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(i.count,d.start+d.count);for(let I=m,p=v;I<p;I+=3){let g=i.getX(I),y=i.getX(I+1),x=i.getX(I+2);n=Ip(this,s,e,o,c,u,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){let I=f[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(l.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,b=y;x<b;x+=3){let C=x,T=x+1,S=x+2;n=Ip(this,p,e,o,c,u,h,C,T,S),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let I=m,p=v;I<p;I+=3){let g=I,y=I+1,x=I+2;n=Ip(this,s,e,o,c,u,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}}};function u2(t,e,a,o,n,r,s,i){let l;if(e.side===So?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===Ts,i),l===null)return null;mp.copy(i),mp.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(mp);return c<a.near||c>a.far?null:{distance:c,point:mp.clone(),object:t}}function Ip(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,up),t.getVertexPosition(l,dp),t.getVertexPosition(c,pp);let u=u2(t,e,a,o,up,dp,pp,KM);if(u){let h=new O;gs.getBarycoord(KM,up,dp,pp,h),n&&(u.uv=gs.getInterpolatedAttribute(n,i,l,c,h,new Ue)),r&&(u.uv1=gs.getInterpolatedAttribute(r,i,l,c,h,new Ue)),s&&(u.normal=gs.getInterpolatedAttribute(s,i,l,c,h,new O),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let f={a:i,b:l,c,normal:new O,materialIndex:0};gs.getNormal(up,dp,pp,f.normal),u.face=f,u.barycoord=h}return u}var ql=class extends go{constructor(e=null,a=1,o=1,n,r,s,i,l,c=Xa,u=Xa,h,f){super(null,s,i,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=new Gl,d2=new Ue(.5,.5),xp=new O,Wl=class{constructor(e=new _n,a=new _n,o=new _n,n=new _n,r=new _n,s=new _n){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=Cn,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],I=r[10],p=r[11],g=r[12],y=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,d-u,p-m,b-g).normalize(),n[1].setComponents(c+s,d+u,p+m,b+g).normalize(),n[2].setComponents(c+i,d+h,p+v,b+y).normalize(),n[3].setComponents(c-i,d-h,p-v,b-y).normalize(),o)n[4].setComponents(l,f,I,x).normalize(),n[5].setComponents(c-l,d-f,p-I,b-x).normalize();else if(n[4].setComponents(c-l,d-f,p-I,b-x).normalize(),a===Cn)n[5].setComponents(c+l,d+f,p+I,b+x).normalize();else if(a===Ul)n[5].setComponents(l,f,I,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),li.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let a=d2.distanceTo(e.center);return li.radius=.7071067811865476+a,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if(xp.x=n.normal.x>0?e.max.x:e.min.x,xp.y=n.normal.y>0?e.max.y:e.min.y,xp.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(xp)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lf=class extends go{constructor(e=[],a=ws,o,n,r,s,i,l,c,u){super(e,a,o,n,r,s,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ui=class extends go{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ss=class extends go{constructor(e,a,o=wn,n,r,s,i=Xa,l=Xa,c,u=jn,h=1){if(u!==jn&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:h};super(f,n,r,s,i,l,u,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},Up=class extends Ss{constructor(e,a=wn,o=ws,n,r,s=Xa,i=Xa,l,c=jn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pf=class extends go{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xl=class t extends vo{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,o,a,e,s,r,0),m("z","y","x",1,-1,o,a,-e,s,r,1),m("x","z","y",1,1,e,o,a,n,s,2),m("x","z","y",1,-1,e,o,-a,n,s,3),m("x","y","z",1,-1,e,a,o,n,r,4),m("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new Da(c,3)),this.setAttribute("normal",new Da(u,3)),this.setAttribute("uv",new Da(h,2));function m(v,I,p,g,y,x,b,C,T,S,w){let A=x/T,L=b/S,X=x/2,z=b/2,B=C/2,U=T+1,ae=S+1,J=0,se=0,G=new O;for(let K=0;K<ae;K++){let oe=K*L-z;for(let De=0;De<U;De++){let Ce=De*A-X;G[v]=Ce*g,G[I]=oe*y,G[p]=B,c.push(G.x,G.y,G.z),G[v]=0,G[I]=0,G[p]=C>0?1:-1,u.push(G.x,G.y,G.z),h.push(De/T),h.push(1-K/S),J+=1}}for(let K=0;K<S;K++)for(let oe=0;oe<T;oe++){let De=f+oe+U*K,Ce=f+oe+U*(K+1),$e=f+(oe+1)+U*(K+1),H=f+(oe+1)+U*K;l.push(De,Ce,H),l.push(Ce,$e,H),se+=6}i.addGroup(d,se,w),d+=se,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Yo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let u=o[n],f=o[n+1]-u,d=(s-u)/f;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new Ue:new O);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new O,n=[],r=[],s=[],i=new O,l=new oa;for(let d=0;d<=e;d++){let m=d/e;n[d]=this.getTangentAt(m,new O)}r[0]=new O,s[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),f<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let m=Math.acos(Rt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,m))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yl=class extends Yo{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new Ue){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Np=class extends Yl{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Cg(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,u,h){let f=(s-r)/c-(i-r)/(c+u)+(i-s)/u,d=(i-s)/u-(l-s)/(u+h)+(l-i)/h;f*=u,d*=u,n(s,i,f,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var JM=new O,QM=new O,zx=new Cg,Hx=new Cg,Vx=new Cg,Zl=class extends Yo{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new O){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,u;this.closed||i>0?c=n[(i-1)%r]:(QM.subVectors(n[0],n[1]).add(n[0]),c=QM);let h=n[i%r],f=n[(i+1)%r];if(this.closed||i+2<r?u=n[(i+2)%r]:(JM.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=JM),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),I=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),I<1e-4&&(I=v),zx.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,v,I),Hx.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,v,I),Vx.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,v,I)}else this.curveType==="catmullrom"&&(zx.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Hx.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vx.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return o.set(zx.calc(l),Hx.calc(l),Vx.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new O().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jM(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function p2(t,e){let a=1-t;return a*a*e}function h2(t,e){return 2*(1-t)*t*e}function m2(t,e){return t*t*e}function Mf(t,e,a,o){return p2(t,e)+h2(t,a)+m2(t,o)}function I2(t,e){let a=1-t;return a*a*a*e}function x2(t,e){let a=1-t;return 3*a*a*t*e}function g2(t,e){return 3*(1-t)*t*t*e}function F2(t,e){return t*t*t*e}function bf(t,e,a,o,n){return I2(t,e)+x2(t,a)+g2(t,o)+F2(t,n)}var Bf=class extends Yo{constructor(e=new Ue,a=new Ue,o=new Ue,n=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new Ue){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(bf(e,n.x,r.x,s.x,i.x),bf(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Op=class extends Yo{constructor(e=new O,a=new O,o=new O,n=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new O){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(bf(e,n.x,r.x,s.x,i.x),bf(e,n.y,r.y,s.y,i.y),bf(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kf=class extends Yo{constructor(e=new Ue,a=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Ue){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Ue){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zp=class extends Yo{constructor(e=new O,a=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new O){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new O){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uf=class extends Yo{constructor(e=new Ue,a=new Ue,o=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new Ue){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(Mf(e,n.x,r.x,s.x),Mf(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hp=class extends Yo{constructor(e=new O,a=new O,o=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new O){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(Mf(e,n.x,r.x,s.x),Mf(e,n.y,r.y,s.y),Mf(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nf=class extends Yo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Ue){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(jM(i,l.x,c.x,u.x,h.x),jM(i,l.y,c.y,u.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new Ue().fromArray(n))}return this}},Kx=Object.freeze({__proto__:null,ArcCurve:Np,CatmullRomCurve3:Zl,CubicBezierCurve:Bf,CubicBezierCurve3:Op,EllipseCurve:Yl,LineCurve:kf,LineCurve3:zp,QuadraticBezierCurve:Uf,QuadraticBezierCurve3:Hp,SplineCurve:Nf}),Vp=class extends Yo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kx[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let u=l[c];o&&o.equals(u)||(a.push(u),o=u)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new Kx[n.type]().fromJSON(n))}return this}},di=class extends Vp{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new kf(this.currentPoint.clone(),new Ue(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new Uf(this.currentPoint.clone(),new Ue(e,a),new Ue(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new Bf(this.currentPoint.clone(),new Ue(e,a),new Ue(o,n),new Ue(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new Nf(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,a+u,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new Yl(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ys=class extends di{constructor(e){super(e),this.uuid=rc(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new di().fromJSON(n))}return this}};function v2(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=Kb(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=_2(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let u=i,h=l;for(let f=a;f<n;f+=a){let d=t[f],m=t[f+1];d<i&&(i=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-i,h-l),c=c!==0?32767/c:0}return Of(r,s,a,i,l,c,0),s}function Kb(t,e,a,o,n){let r;if(n===k2(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=$M(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=$M(s/o|0,t[s],t[s+1],r);return r&&Kl(r,r.next)&&(Hf(r),r=r.next),r}function pi(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(Kl(a,a.next)||ga(a.prev,a,a.next)===0)){if(Hf(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function Of(t,e,a,o,n,r,s){if(!t)return;!s&&r&&E2(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?y2(t,o,n,r):S2(t)){e.push(l.i,t.i,c.i),Hf(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=M2(pi(t),e),Of(t,e,a,o,n,r,2)):s===2&&b2(t,e,a,o,n,r):Of(pi(t),e,a,o,n,r,1);break}}}function S2(t){let e=t.prev,a=t,o=t.next;if(ga(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,u=Math.min(n,r,s),h=Math.min(i,l,c),f=Math.max(n,r,s),d=Math.max(i,l,c),m=o.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&yf(n,i,r,l,s,c,m.x,m.y)&&ga(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function y2(t,e,a,o){let n=t.prev,r=t,s=t.next;if(ga(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,u=n.y,h=r.y,f=s.y,d=Math.min(i,l,c),m=Math.min(u,h,f),v=Math.max(i,l,c),I=Math.max(u,h,f),p=Jx(d,m,e,a,o),g=Jx(v,I,e,a,o),y=t.prevZ,x=t.nextZ;for(;y&&y.z>=p&&x&&x.z<=g;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&yf(i,u,l,h,c,f,y.x,y.y)&&ga(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&yf(i,u,l,h,c,f,x.x,x.y)&&ga(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&yf(i,u,l,h,c,f,y.x,y.y)&&ga(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=g;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&yf(i,u,l,h,c,f,x.x,x.y)&&ga(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function M2(t,e){let a=t;do{let o=a.prev,n=a.next.next;!Kl(o,n)&&Qb(o,a,a.next,n)&&zf(o,n)&&zf(n,o)&&(e.push(o.i,a.i,n.i),Hf(a),Hf(a.next),a=t=n),a=a.next}while(a!==t);return pi(a)}function b2(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&L2(s,i)){let l=jb(s,i);s=pi(s,s.next),l=pi(l,l.next),Of(s,e,a,o,n,r,0),Of(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function _2(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=Kb(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(D2(c))}n.sort(C2);for(let r=0;r<n.length;r++)a=T2(n[r],a);return a}function C2(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function T2(t,e){let a=w2(t,e);if(!a)return e;let o=jb(a,t);return pi(o,o.next),pi(a,a.next)}function w2(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(Kl(t,a))return a;do{if(Kl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,u=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&Jb(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);zf(a,t)&&(h<u||h===u&&(a.x>s.x||a.x===s.x&&A2(s,a)))&&(s=a,u=h)}a=a.next}while(a!==i);return s}function A2(t,e){return ga(t.prev,t,e.prev)<0&&ga(e.next,t,t.next)<0}function E2(t,e,a,o){let n=t;do n.z===0&&(n.z=Jx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,R2(n)}function R2(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function Jx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function D2(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function Jb(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function yf(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&Jb(t,e,a,o,n,r,s,i)}function L2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!P2(t,e)&&(zf(t,e)&&zf(e,t)&&B2(t,e)&&(ga(t.prev,t,e.prev)||ga(t,e.prev,e))||Kl(t,e)&&ga(t.prev,t,t.next)>0&&ga(e.prev,e,e.next)>0)}function ga(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function Kl(t,e){return t.x===e.x&&t.y===e.y}function Qb(t,e,a,o){let n=Fp(ga(t,e,a)),r=Fp(ga(t,e,o)),s=Fp(ga(a,o,t)),i=Fp(ga(a,o,e));return!!(n!==r&&s!==i||n===0&&gp(t,a,e)||r===0&&gp(t,o,e)||s===0&&gp(a,t,o)||i===0&&gp(a,e,o))}function gp(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function Fp(t){return t>0?1:t<0?-1:0}function P2(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&Qb(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function zf(t,e){return ga(t.prev,t,t.next)<0?ga(t,e,t.next)>=0&&ga(t,t.prev,e)>=0:ga(t,e,t.prev)<0||ga(t,t.next,e)<0}function B2(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function jb(t,e){let a=Qx(t.i,t.x,t.y),o=Qx(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function $M(t,e,a,o){let n=Qx(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function Hf(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Qx(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k2(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var jx=class{static triangulate(e,a,o=2){return v2(e,a,o)}},Jn=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];eb(e),tb(o,e);let s=e.length;a.forEach(eb);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,tb(o,a[l]);let i=jx.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function eb(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tb(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var Jl=class t extends vo{constructor(e=new ys([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new Da(n,3)),this.setAttribute("uv",new Da(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,u=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,f=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,m=a.bevelSize!==void 0?a.bevelSize:d-.1,v=a.bevelOffset!==void 0?a.bevelOffset:0,I=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,g=a.UVGenerator!==void 0?a.UVGenerator:U2,y,x=!1,b,C,T,S;if(p){y=p.getSpacedPoints(u),x=!0,f=!1;let $=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,$),C=new O,T=new O,S=new O}f||(I=0,d=0,m=0,v=0);let w=i.extractPoints(c),A=w.shape,L=w.holes;if(!Jn.isClockWise(A)){A=A.reverse();for(let $=0,le=L.length;$<le;$++){let Ie=L[$];Jn.isClockWise(Ie)&&(L[$]=Ie.reverse())}}function z($){let Ie=10000000000000001e-36,ie=$[0];for(let fe=1;fe<=$.length;fe++){let be=fe%$.length,Xe=$[be],Ne=Xe.x-ie.x,Be=Xe.y-ie.y,R=Ne*Ne+Be*Be,it=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(ie.x),Math.abs(ie.y)),tt=Ie*it*it;if(R<=tt){$.splice(be,1),fe--;continue}ie=Xe}}z(A),L.forEach(z);let B=L.length,U=A;for(let $=0;$<B;$++){let le=L[$];A=A.concat(le)}function ae($,le,Ie){return le||mt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(le,Ie)}let J=A.length;function se($,le,Ie){let ie,fe,be,Xe=$.x-le.x,Ne=$.y-le.y,Be=Ie.x-$.x,R=Ie.y-$.y,it=Xe*Xe+Ne*Ne,tt=Xe*R-Ne*Be;if(Math.abs(tt)>Number.EPSILON){let _=Math.sqrt(it),F=Math.sqrt(Be*Be+R*R),N=le.x-Ne/_,q=le.y+Xe/_,re=Ie.x-R/F,ye=Ie.y+Be/F,xe=((re-N)*R-(ye-q)*Be)/(Xe*R-Ne*Be);ie=N+Xe*xe-$.x,fe=q+Ne*xe-$.y;let j=ie*ie+fe*fe;if(j<=2)return new Ue(ie,fe);be=Math.sqrt(j/2)}else{let _=!1;Xe>Number.EPSILON?Be>Number.EPSILON&&(_=!0):Xe<-Number.EPSILON?Be<-Number.EPSILON&&(_=!0):Math.sign(Ne)===Math.sign(R)&&(_=!0),_?(ie=-Ne,fe=Xe,be=Math.sqrt(it)):(ie=Xe,fe=Ne,be=Math.sqrt(it/2))}return new Ue(ie/be,fe/be)}let G=[];for(let $=0,le=U.length,Ie=le-1,ie=$+1;$<le;$++,Ie++,ie++)Ie===le&&(Ie=0),ie===le&&(ie=0),G[$]=se(U[$],U[Ie],U[ie]);let K=[],oe,De=G.concat();for(let $=0,le=B;$<le;$++){let Ie=L[$];oe=[];for(let ie=0,fe=Ie.length,be=fe-1,Xe=ie+1;ie<fe;ie++,be++,Xe++)be===fe&&(be=0),Xe===fe&&(Xe=0),oe[ie]=se(Ie[ie],Ie[be],Ie[Xe]);K.push(oe),De=De.concat(oe)}let Ce;if(I===0)Ce=Jn.triangulateShape(U,L);else{let $=[],le=[];for(let Ie=0;Ie<I;Ie++){let ie=Ie/I,fe=d*Math.cos(ie*Math.PI/2),be=m*Math.sin(ie*Math.PI/2)+v;for(let Xe=0,Ne=U.length;Xe<Ne;Xe++){let Be=ae(U[Xe],G[Xe],be);Ee(Be.x,Be.y,-fe),ie===0&&$.push(Be)}for(let Xe=0,Ne=B;Xe<Ne;Xe++){let Be=L[Xe];oe=K[Xe];let R=[];for(let it=0,tt=Be.length;it<tt;it++){let _=ae(Be[it],oe[it],be);Ee(_.x,_.y,-fe),ie===0&&R.push(_)}ie===0&&le.push(R)}}Ce=Jn.triangulateShape($,le)}let $e=Ce.length,H=m+v;for(let $=0;$<J;$++){let le=f?ae(A[$],De[$],H):A[$];x?(T.copy(b.normals[0]).multiplyScalar(le.x),C.copy(b.binormals[0]).multiplyScalar(le.y),S.copy(y[0]).add(T).add(C),Ee(S.x,S.y,S.z)):Ee(le.x,le.y,0)}for(let $=1;$<=u;$++)for(let le=0;le<J;le++){let Ie=f?ae(A[le],De[le],H):A[le];x?(T.copy(b.normals[$]).multiplyScalar(Ie.x),C.copy(b.binormals[$]).multiplyScalar(Ie.y),S.copy(y[$]).add(T).add(C),Ee(S.x,S.y,S.z)):Ee(Ie.x,Ie.y,h/u*$)}for(let $=I-1;$>=0;$--){let le=$/I,Ie=d*Math.cos(le*Math.PI/2),ie=m*Math.sin(le*Math.PI/2)+v;for(let fe=0,be=U.length;fe<be;fe++){let Xe=ae(U[fe],G[fe],ie);Ee(Xe.x,Xe.y,h+Ie)}for(let fe=0,be=L.length;fe<be;fe++){let Xe=L[fe];oe=K[fe];for(let Ne=0,Be=Xe.length;Ne<Be;Ne++){let R=ae(Xe[Ne],oe[Ne],ie);x?Ee(R.x,R.y+y[u-1].y,y[u-1].x+Ie):Ee(R.x,R.y,h+Ie)}}}lt(),ee();function lt(){let $=n.length/3;if(f){let le=0,Ie=J*le;for(let ie=0;ie<$e;ie++){let fe=Ce[ie];Ke(fe[2]+Ie,fe[1]+Ie,fe[0]+Ie)}le=u+I*2,Ie=J*le;for(let ie=0;ie<$e;ie++){let fe=Ce[ie];Ke(fe[0]+Ie,fe[1]+Ie,fe[2]+Ie)}}else{for(let le=0;le<$e;le++){let Ie=Ce[le];Ke(Ie[2],Ie[1],Ie[0])}for(let le=0;le<$e;le++){let Ie=Ce[le];Ke(Ie[0]+J*u,Ie[1]+J*u,Ie[2]+J*u)}}o.addGroup($,n.length/3-$,0)}function ee(){let $=n.length/3,le=0;te(U,le),le+=U.length;for(let Ie=0,ie=L.length;Ie<ie;Ie++){let fe=L[Ie];te(fe,le),le+=fe.length}o.addGroup($,n.length/3-$,1)}function te($,le){let Ie=$.length;for(;--Ie>=0;){let ie=Ie,fe=Ie-1;fe<0&&(fe=$.length-1);for(let be=0,Xe=u+I*2;be<Xe;be++){let Ne=J*be,Be=J*(be+1),R=le+ie+Ne,it=le+fe+Ne,tt=le+fe+Be,_=le+ie+Be;Me(R,it,tt,_)}}}function Ee($,le,Ie){l.push($),l.push(le),l.push(Ie)}function Ke($,le,Ie){Ye($),Ye(le),Ye(Ie);let ie=n.length/3,fe=g.generateTopUV(o,n,ie-3,ie-2,ie-1);Qe(fe[0]),Qe(fe[1]),Qe(fe[2])}function Me($,le,Ie,ie){Ye($),Ye(le),Ye(ie),Ye(le),Ye(Ie),Ye(ie);let fe=n.length/3,be=g.generateSideWallUV(o,n,fe-6,fe-3,fe-2,fe-1);Qe(be[0]),Qe(be[1]),Qe(be[3]),Qe(be[1]),Qe(be[2]),Qe(be[3])}function Ye($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function Qe($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return N2(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Kx[n.type]().fromJSON(n)),new t(o,e.options)}},U2={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],u=e[n*3+1];return[new Ue(r,s),new Ue(i,l),new Ue(c,u)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],u=e[o*3+1],h=e[o*3+2],f=e[n*3],d=e[n*3+1],m=e[n*3+2],v=e[r*3],I=e[r*3+1],p=e[r*3+2];return Math.abs(i-u)<Math.abs(s-c)?[new Ue(s,1-l),new Ue(c,1-h),new Ue(f,1-m),new Ue(v,1-p)]:[new Ue(i,1-l),new Ue(u,1-h),new Ue(d,1-m),new Ue(I,1-p)]}};function N2(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var hi=class t extends vo{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,u=l+1,h=e/i,f=a/l,d=[],m=[],v=[],I=[];for(let p=0;p<u;p++){let g=p*f-s;for(let y=0;y<c;y++){let x=y*h-r;m.push(x,-g,0),v.push(0,0,1),I.push(y/i),I.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<i;g++){let y=g+c*p,x=g+c*(p+1),b=g+1+c*(p+1),C=g+1+c*p;d.push(y,x,C),d.push(x,b,C)}this.setIndex(d),this.setAttribute("position",new Da(m,3)),this.setAttribute("normal",new Da(v,3)),this.setAttribute("uv",new Da(I,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vf=class t extends vo{constructor(e=new ys([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(i,l,u),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new Da(n,3)),this.setAttribute("normal",new Da(r,3)),this.setAttribute("uv",new Da(s,2));function c(u){let h=n.length/3,f=u.extractPoints(a),d=f.shape,m=f.holes;Jn.isClockWise(d)===!1&&(d=d.reverse());for(let I=0,p=m.length;I<p;I++){let g=m[I];Jn.isClockWise(g)===!0&&(m[I]=g.reverse())}let v=Jn.triangulateShape(d,m);for(let I=0,p=m.length;I<p;I++){let g=m[I];d=d.concat(g)}for(let I=0,p=d.length;I<p;I++){let g=d[I];n.push(g.x,g.y,0),r.push(0,0,1),s.push(g.x,g.y)}for(let I=0,p=v.length;I<p;I++){let g=v[I],y=g[0]+h,x=g[1]+h,b=g[2]+h;o.push(y,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return O2(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function O2(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Ql=class t extends vo{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new O,d=new O,m=new O;for(let v=0;v<=o;v++){let I=s+v/o*i;for(let p=0;p<=n;p++){let g=p/n*r;d.x=(e+a*Math.cos(I))*Math.cos(g),d.y=(e+a*Math.cos(I))*Math.sin(g),d.z=a*Math.sin(I),c.push(d.x,d.y,d.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(p/n),h.push(v/o)}}for(let v=1;v<=o;v++)for(let I=1;I<=n;I++){let p=(n+1)*v+I-1,g=(n+1)*(v-1)+I-1,y=(n+1)*(v-1)+I,x=(n+1)*v+I;l.push(p,g,x),l.push(g,y,x)}this.setIndex(l),this.setAttribute("position",new Da(c,3)),this.setAttribute("normal",new Da(u,3)),this.setAttribute("uv",new Da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xi(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if(ab(n))n.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if(ab(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function co(t){let e={};for(let a=0;a<t.length;a++){let o=xi(t[a]);for(let n in o)e[n]=o[n]}return e}function ab(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function z2(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function Tg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var $b={clone:xi,merge:co},H2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zo=class extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H2,this.fragmentShader=V2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=z2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new _t().setHex(n.value);break;case"v2":this.uniforms[o].value=new Ue().fromArray(n.value);break;case"v3":this.uniforms[o].value=new O().fromArray(n.value);break;case"v4":this.uniforms[o].value=new Ia().fromArray(n.value);break;case"m3":this.uniforms[o].value=new Mt().fromArray(n.value);break;case"m4":this.uniforms[o].value=new oa().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gp=class extends Zo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jl=class extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ms=class extends jl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qp=class extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wp=class extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Gx(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var bs=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xp=class extends bs{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xx,endingEnd:Xx}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case Yx:r=e,i=2*a-o;break;case Zx:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case Yx:s=e,l=2*o-a;break;case Zx:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,u=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(o-a)/(n-a),v=m*m,I=v*m,p=-f*I+2*f*v-f*m,g=(1+f)*I+(-1.5-2*f)*v+(-.5+f)*m+1,y=(-1-d)*I+(1.5+d)*v+.5*m,x=d*I-d*v;for(let b=0;b!==i;++b)r[b]=p*s[u+b]+g*s[c+b]+y*s[l+b]+x*s[h+b];return r}},Yp=class extends bs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(o-a)/(n-a),h=1-u;for(let f=0;f!==i;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}},Zp=class extends bs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Kp=class extends bs{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(o-a)/(n-a),v=1-m;for(let I=0;I!==i;++I)r[I]=s[c+I]*v+s[l+I]*m;return r}let f=i*2,d=e-1;for(let m=0;m!==i;++m){let v=s[c+m],I=s[l+m],p=d*f+m*2,g=h[p],y=h[p+1],x=e*f+m*2,b=u[x],C=u[x+1],T=q2(o,a,g,b,n);r[m]=e_(T,v,y,C,I)}return r}};function e_(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function G2(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function q2(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=e_(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=G2(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Ko=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(a,this.TimeBufferType),this.values=Dl(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),Gx(e.settings)&&(o.settings={inTangents:Dl(e.settings.inTangents,Array),outTangents:Dl(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Kp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case _f:a=this.InterpolantFactoryMethodDiscrete;break;case Dp:a=this.InterpolantFactoryMethodLinear;break;case yp:a=this.InterpolantFactoryMethodSmooth;break;case Wx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return It("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _f;case this.InterpolantFactoryMethodLinear:return Dp;case this.InterpolantFactoryMethodSmooth:return yp;case this.InterpolantFactoryMethodBezier:return Wx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;Gx(this.settings)&&(ob(this.settings.inTangents,e),ob(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){mt("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&YA(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===yp,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,f=h-o,d=h+o;for(let m=0;m!==o;++m){let v=a[h+m];if(v!==a[f+m]||v!==a[d+m]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,f=s*o;for(let d=0;d!==o;++d)a[f+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,Gx(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function ob(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Ko.prototype.ValueTypeName="";Ko.prototype.TimeBufferType=Float32Array;Ko.prototype.ValueBufferType=Float32Array;Ko.prototype.DefaultInterpolation=Dp;var _s=class extends Ko{constructor(e,a,o){super(e,a,o)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=_f;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Jp=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};Jp.prototype.ValueTypeName="color";var Qp=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};Qp.prototype.ValueTypeName="number";var jp=class extends bs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let u=c+i;c!==u;c+=4)xo.slerpFlat(r,0,s,c-i,s,c,l);return r}},Gf=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}};Gf.prototype.ValueTypeName="quaternion";Gf.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Ko{constructor(e,a,o){super(e,a,o)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=_f;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var $p=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};$p.prototype.ValueTypeName="vector";var eh=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(u){i++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,i),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},t_=new eh,th=class{constructor(e){this.manager=e!==void 0?e:t_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};th.DEFAULT_MATERIAL_NAME="__DEFAULT";var ah=class extends Fo{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var qx=new oa,nb=new O,rb=new O,oh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Do,this.map=null,this.mapPass=null,this.matrix=new oa,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ia(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;nb.setFromMatrixPosition(e.matrixWorld),a.position.copy(nb),rb.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(rb),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){qx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(qx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Ul||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(qx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vp=new O,Sp=new xo,Zn=new O,qf=class extends Fo{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oa,this.projectionMatrix=new oa,this.projectionMatrixInverse=new oa,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vp,Sp,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vp,Sp,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(vp,Sp,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vp,Sp,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new O,sb=new Ue,ib=new Ue,io=class extends qf{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fx*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Fx*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,a){return this.getViewBounds(e,sb,ib),a.subVectors(ib,sb)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(Fx*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var $l=class extends qf{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},$x=class extends oh{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ec=class extends ah{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fo.DEFAULT_UP),this.updateMatrix(),this.target=new Fo,this.shadow=new $x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var Ll=-90,Pl=1,nh=class extends Fo{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new io(Ll,Pl,e,a);n.layers=this.layers,this.add(n);let r=new io(Ll,Pl,e,a);r.layers=this.layers,this.add(r);let s=new io(Ll,Pl,e,a);s.layers=this.layers,this.add(s);let i=new io(Ll,Pl,e,a);i.layers=this.layers,this.add(i);let l=new io(Ll,Pl,e,a);l.layers=this.layers,this.add(l);let c=new io(Ll,Pl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===Cn)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let I=!1;e.isWebGLRenderer===!0?I=e.state.buffers.depth.getReversed():I=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=v,e.setRenderTarget(o,5,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,o.texture.needsPMREMUpdate=!0}},rh=class extends io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wg="\\[\\]\\.:\\/",W2=new RegExp("["+wg+"]","g"),Ag="[^"+wg+"]",X2="[^"+wg.replace("\\.","")+"]",Y2=/((?:WC+[\/:])*)/.source.replace("WC",Ag),Z2=/(WCOD+)?/.source.replace("WCOD",X2),K2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ag),J2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ag),Q2=new RegExp("^"+Y2+Z2+K2+J2+"$"),j2=["material","materials","bones","map"],eg=class{constructor(e,a,o){let n=o||ua.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},ua=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W2,"")}static parseTrackName(e){let a=Q2.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);j2.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ua.Composite=eg;ua.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ua.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ua.prototype.GetterByBindingType=[ua.prototype._getValue_direct,ua.prototype._getValue_array,ua.prototype._getValue_arrayElement,ua.prototype._getValue_toArray];ua.prototype.SetterByBindingTypeAndVersioning=[[ua.prototype._setValue_direct,ua.prototype._setValue_direct_setNeedsUpdate,ua.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ua.prototype._setValue_array,ua.prototype._setValue_array_setNeedsUpdate,ua.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ua.prototype._setValue_arrayElement,ua.prototype._setValue_arrayElement_setNeedsUpdate,ua.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ua.prototype._setValue_fromArray,ua.prototype._setValue_fromArray_setNeedsUpdate,ua.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LB=new Float32Array(1);var lb=new oa,Wf=class{constructor(e,a,o=0,n=1/0){this.ray=new Df(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):mt("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return lb.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lb),this}intersectObject(e,a=!0,o=[]){return tg(e,this,o,a),o.sort(cb),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)tg(e[n],this,o,a);return o.sort(cb),o}};function cb(t,e){return t.distance-e.distance}function tg(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)tg(r[s],e,a,!0)}}var ag=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function Eg(t,e,a,o){let n=$2(o);switch(a){case Sg:return t*e;case Mg:return t*e/n.components*n.byteLength;case ph:return t*e/n.components*n.byteLength;case Es:return t*e*2/n.components*n.byteLength;case hh:return t*e*2/n.components*n.byteLength;case yg:return t*e*3/n.components*n.byteLength;case un:return t*e*4/n.components*n.byteLength;case mh:return t*e*4/n.components*n.byteLength;case Jf:case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jf:case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xh:case Fh:return Math.max(t,16)*Math.max(e,8)/4;case Ih:case gh:return Math.max(t,8)*Math.max(e,8)/2;case vh:case Sh:case Mh:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:case eu:case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zh:case Hh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gh:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tu:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function $2(t){switch(t){case Do:case xg:return{byteLength:1,components:1};case oc:case gg:case En:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case wn:case fh:case An:return{byteLength:4,components:1};case Fg:case vg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);function M_(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function eE(t){let e=new WeakMap;function a(i,l){let c=i.array,u=i.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let v=h[d];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let u=e.get(i);(!u||u.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_R=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ER=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ID=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_D=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ED=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:tE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:nE,alphatest_fragment:rE,alphatest_pars_fragment:sE,aomap_fragment:iE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:fE,begin_vertex:uE,beginnormal_vertex:dE,bsdfs:pE,iridescence_fragment:hE,bumpmap_pars_fragment:mE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:FE,color_fragment:vE,color_pars_fragment:SE,color_pars_vertex:yE,color_vertex:ME,common:bE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:CE,displacementmap_pars_vertex:TE,displacementmap_vertex:wE,emissivemap_fragment:AE,emissivemap_pars_fragment:EE,colorspace_fragment:RE,colorspace_pars_fragment:DE,envmap_fragment:LE,envmap_common_pars_fragment:PE,envmap_pars_fragment:BE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:YE,envmap_vertex:UE,fog_vertex:NE,fog_pars_vertex:OE,fog_fragment:zE,fog_pars_fragment:HE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:GE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:WE,lights_pars_begin:XE,lights_toon_fragment:ZE,lights_toon_pars_fragment:KE,lights_phong_fragment:JE,lights_phong_pars_fragment:QE,lights_physical_fragment:jE,lights_physical_pars_fragment:$E,lights_fragment_begin:eR,lights_fragment_maps:tR,lights_fragment_end:aR,lightprobes_pars_fragment:oR,logdepthbuf_fragment:nR,logdepthbuf_pars_fragment:rR,logdepthbuf_pars_vertex:sR,logdepthbuf_vertex:iR,map_fragment:lR,map_pars_fragment:cR,map_particle_fragment:fR,map_particle_pars_fragment:uR,metalnessmap_fragment:dR,metalnessmap_pars_fragment:pR,morphinstance_vertex:hR,morphcolor_vertex:mR,morphnormal_vertex:IR,morphtarget_pars_vertex:xR,morphtarget_vertex:gR,normal_fragment_begin:FR,normal_fragment_maps:vR,normal_pars_fragment:SR,normal_pars_vertex:yR,normal_vertex:MR,normalmap_pars_fragment:bR,clearcoat_normal_fragment_begin:_R,clearcoat_normal_fragment_maps:CR,clearcoat_pars_fragment:TR,iridescence_pars_fragment:wR,opaque_fragment:AR,packing:ER,premultiplied_alpha_fragment:RR,project_vertex:DR,dithering_fragment:LR,dithering_pars_fragment:PR,roughnessmap_fragment:BR,roughnessmap_pars_fragment:kR,shadowmap_pars_fragment:UR,shadowmap_pars_vertex:NR,shadowmap_vertex:OR,shadowmask_pars_fragment:zR,skinbase_vertex:HR,skinning_pars_vertex:VR,skinning_vertex:GR,skinnormal_vertex:qR,specularmap_fragment:WR,specularmap_pars_fragment:XR,tonemapping_fragment:YR,tonemapping_pars_fragment:ZR,transmission_fragment:KR,transmission_pars_fragment:JR,uv_pars_fragment:QR,uv_pars_vertex:jR,uv_vertex:$R,worldpos_vertex:eD,background_vert:tD,background_frag:aD,backgroundCube_vert:oD,backgroundCube_frag:nD,cube_vert:rD,cube_frag:sD,depth_vert:iD,depth_frag:lD,distance_vert:cD,distance_frag:fD,equirect_vert:uD,equirect_frag:dD,linedashed_vert:pD,linedashed_frag:hD,meshbasic_vert:mD,meshbasic_frag:ID,meshlambert_vert:xD,meshlambert_frag:gD,meshmatcap_vert:FD,meshmatcap_frag:vD,meshnormal_vert:SD,meshnormal_frag:yD,meshphong_vert:MD,meshphong_frag:bD,meshphysical_vert:_D,meshphysical_frag:CD,meshtoon_vert:TD,meshtoon_frag:wD,points_vert:AD,points_frag:ED,shadow_vert:RD,shadow_frag:DD,sprite_vert:LD,sprite_frag:PD},Ze={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},or={basic:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:co([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:co([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:co([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:co([Ze.points,Ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:co([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:co([Ze.common,Ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:co([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:co([Ze.sprite,Ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:co([Ze.common,Ze.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:co([Ze.lights,Ze.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};or.physical={uniforms:co([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var Kh={r:0,b:0,g:0},BD=new oa,b_=new Mt;b_.set(-1,0,0,0,1,0,0,0,1);function kD(t,e,a,o,n,r){let s=new _t(0),i=n===!0?0:1,l,c,u=null,h=0,f=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){let x=g.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(g){let y=!1,x=d(g);x===null?I(s,i):x&&x.isColor&&(I(x,1),y=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?a.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===Zf)?(c===void 0&&(c=new ba(new Xl(1,1,1),new Zo({name:"BackgroundCubeMaterial",uniforms:xi(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:So,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BD.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(b_),c.material.toneMapped=kt.getTransfer(x.colorSpace)!==Xt,(u!==x||h!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ba(new hi(2,2),new Zo({name:"BackgroundMaterial",uniforms:xi(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=kt.getTransfer(x.colorSpace)!==Xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function I(g,y){g.getRGB(Kh,Tg(t)),a.buffers.color.setClear(Kh.r,Kh.g,Kh.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),i=y,I(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(g){i=g,I(s,i)},render:m,addToRenderList:v,dispose:p}}function UD(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=f(null),r=n,s=!1;function i(L,X,z,B,U){let ae=!1,J=h(L,B,z,X);r!==J&&(r=J,c(r.object)),ae=d(L,B,z,U),ae&&m(L,B,z,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,x(L,X,z,B),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function h(L,X,z,B){let U=B.wireframe===!0,ae=o[X.id];ae===void 0&&(ae={},o[X.id]=ae);let J=L.isInstancedMesh===!0?L.id:0,se=ae[J];se===void 0&&(se={},ae[J]=se);let G=se[z.id];G===void 0&&(G={},se[z.id]=G);let K=G[U];return K===void 0&&(K=f(l()),G[U]=K),K}function f(L){let X=[],z=[],B=[];for(let U=0;U<a;U++)X[U]=0,z[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:B,object:L,attributes:{},index:null}}function d(L,X,z,B){let U=r.attributes,ae=X.attributes,J=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let oe=U[G],De=ae[G];if(De===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(De=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(De=L.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function m(L,X,z,B){let U={},ae=X.attributes,J=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let oe=ae[G];oe===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));let De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),U[G]=De,J++}r.attributes=U,r.attributesNum=J,r.index=B}function v(){let L=r.newAttributes;for(let X=0,z=L.length;X<z;X++)L[X]=0}function I(L){p(L,0)}function p(L,X){let z=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;z[L]=1,B[L]===0&&(t.enableVertexAttribArray(L),B[L]=1),U[L]!==X&&(t.vertexAttribDivisor(L,X),U[L]=X)}function g(){let L=r.newAttributes,X=r.enabledAttributes;for(let z=0,B=X.length;z<B;z++)X[z]!==L[z]&&(t.disableVertexAttribArray(z),X[z]=0)}function y(L,X,z,B,U,ae,J){J===!0?t.vertexAttribIPointer(L,X,z,U,ae):t.vertexAttribPointer(L,X,z,B,U,ae)}function x(L,X,z,B){v();let U=B.attributes,ae=z.getAttributes(),J=X.defaultAttributeValues;for(let se in ae){let G=ae[se];if(G.location>=0){let K=U[se];if(K===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let oe=K.normalized,De=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;let $e=Ce.buffer,H=Ce.type,lt=Ce.bytesPerElement,ee=H===t.INT||H===t.UNSIGNED_INT||K.gpuType===fh;if(K.isInterleavedBufferAttribute){let te=K.data,Ee=te.stride,Ke=K.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)p(G.location+Me,te.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<G.locationSize;Me++)I(G.location+Me);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Me=0;Me<G.locationSize;Me++)y(G.location+Me,De/G.locationSize,H,oe,Ee*lt,(Ke+De/G.locationSize*Me)*lt,ee)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,K.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<G.locationSize;te++)I(G.location+te);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let te=0;te<G.locationSize;te++)y(G.location+te,De/G.locationSize,H,oe,De*lt,De/G.locationSize*te*lt,ee)}}else if(J!==void 0){let oe=J[se];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(G.location,oe);break;case 3:t.vertexAttrib3fv(G.location,oe);break;case 4:t.vertexAttrib4fv(G.location,oe);break;default:t.vertexAttrib1fv(G.location,oe)}}}}g()}function b(){w();for(let L in o){let X=o[L];for(let z in X){let B=X[z];for(let U in B){let ae=B[U];for(let J in ae)u(ae[J].object),delete ae[J];delete B[U]}}delete o[L]}}function C(L){if(o[L.id]===void 0)return;let X=o[L.id];for(let z in X){let B=X[z];for(let U in B){let ae=B[U];for(let J in ae)u(ae[J].object),delete ae[J];delete B[U]}}delete o[L.id]}function T(L){for(let X in o){let z=o[X];for(let B in z){let U=z[B];if(U[L.id]===void 0)continue;let ae=U[L.id];for(let J in ae)u(ae[J].object),delete ae[J];delete U[L.id]}}}function S(L){for(let X in o){let z=o[X],B=L.isInstancedMesh===!0?L.id:0,U=z[B];if(U!==void 0){for(let ae in U){let J=U[ae];for(let se in J)u(J[se].object),delete J[se];delete U[ae]}delete z[B],Object.keys(z).length===0&&delete o[X]}}}function w(){A(),s=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:w,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:I,disableUnusedAttributes:g}}function ND(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,u){u!==0&&(t.drawArraysInstanced(o,l,c,u),a.update(c,o,u))}function i(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];a.update(f,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function OD(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==un&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(T){let S=T===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Do&&T!==An&&!S&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",u=l(c);u!==c&&(It("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=a.logarithmicDepthBuffer===!0,f=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&f===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),I=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:I,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:x,maxSamples:b,samples:C}}function zD(t){let e=this,a=null,o=0,n=!1,r=!1,s=new _n,i=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||o!==0||n;return n=f,o=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){a=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,v=h.clipIntersection,I=h.clipShadows,p=t.get(h);if(!n||m===null||m.length===0||r&&!I)r?u(null):c();else{let g=r?0:o,y=g*4,x=p.clippingState||null;l.value=x,x=u(m,f,y,d);for(let b=0;b!==y;++b)x[b]=a[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(h,f,d,m){let v=h!==null?h.length:0,I=null;if(v!==0){if(I=l.value,m!==!0||I===null){let p=d+v*4,g=f.matrixWorldInverse;i.getNormalMatrix(g),(I===null||I.length<p)&&(I=new Float32Array(p));for(let y=0,x=d;y!==v;++y,x+=4)s.copy(h[y]).applyMatrix4(g,i),s.normal.toArray(I,x),I[x+3]=s.constant}l.value=I,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,I}}var ic=4,HD=6,VD=20,GD=256,au=new $l,a_=new _t,Rg=null,Dg=0,Lg=0,Pg=!1,qD=new O,gi=new O,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=qD}=r;Rg=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rg,Dg,Lg),this._renderer.xr.enabled=Pg,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===ws||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rg=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Na,minFilter:Na,generateMipmaps:!1,type:En,format:un,colorSpace:Cf,depthBuffer:!1},n=o_(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WD(r)),this._blurMaterial=YD(r,e,a),this._ggxMaterial=XD(r,e,a)}return n}_compileMaterial(e){let a=new ba(new vo,e);this._renderer.compile(a,au)}_sceneToCubeUV(e,a,o,n,r){let l=new io(90,1,a,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(a_),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ba(new Xl,new fi({name:"PMREM.Background",side:So,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,I=v.material,p=!1,g=e.background;g?g.isColor&&(I.color.copy(g),e.background=null,p=!0):(I.color.copy(a_),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let b=this._cubeSize;sc(n,x*b,y>2?b:0,b,b),h.setRenderTarget(n),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===ws||e.mapping===Ii;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;sc(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,au)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),u=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,v=this._sizeLods[o],I=3*v*(o>m-ic?o-m+ic:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-a,sc(r,I,p,3*v,2*v),n.setRenderTarget(r),n.render(i,au),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-o,sc(e,I,p,3*v,2*v),n.setRenderTarget(e),n.render(i,au)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-ic?n-this._lodMax+ic:0),f=4*(this._cubeSize-u);sc(a,h,f,3*u,2*u),s.setRenderTarget(a),s.render(l,au)}};function WD(t){let e=[],a=[],o=t,n=t-ic+1+HD;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),v=new Float32Array(d*f*h);for(let p=0;p<h;p++){let g=p%3*2/3-1,y=p>2?0:-1,x=[g,y,0,g+2/3,y,0,g+2/3,y+1,0,g,y,0,g+2/3,y+1,0,g,y+1,0];m.set(x,d*f*p);for(let b=0;b<f;b++){let C=u[b*2]*2-1,T=u[b*2+1]*2-1;p===0?gi.set(1,T,C):p===1?gi.set(-C,1,-T):p===2?gi.set(-C,T,1):p===3?gi.set(-1,T,-C):p===4?gi.set(-C,-1,T):gi.set(C,T,-1),gi.toArray(v,(p*f+b)*d)}}let I=new vo;I.setAttribute("position",new lo(m,d)),I.setAttribute("outputDirection",new lo(v,d)),a.push(new ba(I,null)),o>ic&&o--}return{lodMeshes:a,sizeLods:e}}function o_(t,e,a){let o=new Ro(t,e,a);return o.texture.mapping=Zf,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function sc(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function XD(t,e,a){return new Zo({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function YD(t,e,a){return new Zo({name:"SphericalGaussianBlur",defines:{SAMPLES:VD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$h(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function n_(){return new Zo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function r_(){return new Zo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qh=class extends Ro{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new Lf(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Xl(5,5,5),r=new Zo({name:"CubemapFromEquirect",uniforms:xi(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:So,blending:er});r.uniforms.tEquirect.value=a;let s=new ba(n,r),i=a.minFilter;return a.minFilter===tr&&(a.minFilter=Na),new nh(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function ZD(t){let e=new WeakMap,a=new WeakMap,o=null;function n(f,d=!1){return f==null?null:d?s(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ih||d===lh)if(e.has(f)){let m=e.get(f).texture;return i(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let v=new Qh(m.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",c),i(v.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,m=d===ih||d===lh,v=d===ws||d===Ii;if(m||v){let I=a.get(f),p=I!==void 0?I.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return o===null&&(o=new cc(t)),I=m?o.fromEquirectangular(f,I):o.fromCubemap(f,I),I.texture.pmremVersion=f.pmremVersion,a.set(f,I),I.texture;if(I!==void 0)return I.texture;{let g=f.image;return m&&g&&g.height>0||v&&g&&l(g)?(o===null&&(o=new cc(t)),I=m?o.fromEquirectangular(f):o.fromCubemap(f),I.texture.pmremVersion=f.pmremVersion,a.set(f,I),f.addEventListener("dispose",u),I.texture):null}}}return f}function i(f,d){return d===ih?f.mapping=ws:d===lh&&(f.mapping=Ii),f}function l(f){let d=0,m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=a.get(d);m!==void 0&&(a.delete(d),m.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function KD(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&ci("WebGLRenderer: "+o+" extension not supported."),n}}}function JD(t,e,a,o){let n={},r=new WeakMap;function s(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,a.memory.geometries--}function i(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,a.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,v=0;if(m===void 0)return;if(d!==null){let g=d.array;v=d.version;for(let y=0,x=g.length;y<x;y+=3){let b=g[y+0],C=g[y+1],T=g[y+2];f.push(b,C,C,T,T,b)}}else{let g=m.array;v=m.version;for(let y=0,x=g.length/3-1;y<x;y+=3){let b=y+0,C=y+1,T=y+2;f.push(b,C,C,T,T,b)}}let I=new(m.count>=65535?Rf:Ef)(f,1);I.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,I)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:u}}function QD(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,f){t.drawElements(o,f,r,h*s),a.update(f,o,1)}function c(h,f,d){d!==0&&(t.drawElementsInstanced(o,f,r,h*s,d),a.update(f,o,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,f,0,r,h,0,d);let v=0;for(let I=0;I<d;I++)v+=f[I];a.update(v,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jD(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:mt("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function $D(t,e,a){let o=new WeakMap,n=new Ia;function r(s,i,l){let c=s.morphTargetInfluences,u=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=u!==void 0?u.length:0,f=o.get(i);if(f===void 0||f.count!==h){let w=function(){T.dispose(),o.delete(i),i.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=i.morphAttributes.position!==void 0,m=i.morphAttributes.normal!==void 0,v=i.morphAttributes.color!==void 0,I=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],g=i.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let x=i.attributes.position.count*y,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let C=new Float32Array(x*b*4*h),T=new Af(C,x,b,h);T.type=An,T.needsUpdate=!0;let S=y*4;for(let A=0;A<h;A++){let L=I[A],X=p[A],z=g[A],B=x*b*4*A;for(let U=0;U<L.count;U++){let ae=U*S;d===!0&&(n.fromBufferAttribute(L,U),C[B+ae+0]=n.x,C[B+ae+1]=n.y,C[B+ae+2]=n.z,C[B+ae+3]=0),m===!0&&(n.fromBufferAttribute(X,U),C[B+ae+4]=n.x,C[B+ae+5]=n.y,C[B+ae+6]=n.z,C[B+ae+7]=0),v===!0&&(n.fromBufferAttribute(z,U),C[B+ae+8]=n.x,C[B+ae+9]=n.y,C[B+ae+10]=n.z,C[B+ae+11]=z.itemSize===4?n.w:1)}}f={count:h,texture:T,size:new Ue(x,b)},o.set(i,f),i.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function eL(t,e,a,o,n){let r=new WeakMap;function s(c){let u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function i(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),o.releaseStatesOfObject(u),a.remove(u.instanceMatrix),u.instanceColor!==null&&a.remove(u.instanceColor)}return{update:s,dispose:i}}var tL={[fg]:"LINEAR_TONE_MAPPING",[ug]:"REINHARD_TONE_MAPPING",[dg]:"CINEON_TONE_MAPPING",[pg]:"ACES_FILMIC_TONE_MAPPING",[mg]:"AGX_TONE_MAPPING",[Yf]:"NEUTRAL_TONE_MAPPING",[hg]:"CUSTOM_TONE_MAPPING"};function aL(t,e,a,o,n,r){let s=new Ro(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new vo;c.setAttribute("position",new Da([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Da([0,2,0,0,2,0],2));let u=new Gp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ba(c,u),f=new $l(-1,1,1,-1,0,1),d=null,m=null,v=!1,I,p=null,g=[],y=!1;this.setSize=function(x,b){s.setSize(x,b),i!==null&&i.setSize(x,b),l!==null&&l.setSize(x,b);for(let C=0;C<g.length;C++){let T=g[C];T.setSize&&T.setSize(x,b)}},this.setEffects=function(x){g=x,y=g.length>0&&g[0].isRenderPass===!0;let b=s.width,C=s.height;g.length>0&&i===null&&(i=new Ro(b,C,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Ro(b,C,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){let S=g[T];S.setSize&&S.setSize(b,C)}},this.begin=function(x,b){if(v||x.toneMapping===Tn&&g.length===0)return!1;if(p=b,b!==null){let C=b.width,T=b.height;(s.width!==C||s.height!==T)&&this.setSize(C,T)}return y===!1&&x.setRenderTarget(s),I=x.toneMapping,x.toneMapping=Tn,!0},this.hasRenderPass=function(){return y},this.end=function(x,b){x.toneMapping=I,v=!0;let C=s,T=i;for(let S=0;S<g.length;S++){let w=g[S];w.enabled!==!1&&(w.render(x,T,C,b),w.needsSwap!==!1&&(C=T,T=T===i?l:i))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,u.defines={},kt.getTransfer(d)===Xt&&(u.defines.SRGB_TRANSFER="");let S=tL[m];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,x.setRenderTarget(p),x.render(h,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var __=new go,Ug=new Ss(1,1),C_=new Af,T_=new kp,w_=new Lf,s_=[],i_=[],l_=new Float32Array(16),c_=new Float32Array(9),f_=new Float32Array(4);function fc(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=s_[n];if(r===void 0&&(r=new Float32Array(n),s_[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Oa(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function za(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function em(t,e){let a=i_[e];a===void 0&&(a=new Int32Array(e),i_[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function oL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function nL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2fv(this.addr,e),za(a,e)}}function rL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Oa(a,e))return;t.uniform3fv(this.addr,e),za(a,e)}}function sL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4fv(this.addr,e),za(a,e)}}function iL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;f_.set(o),t.uniformMatrix2fv(this.addr,!1,f_),za(a,o)}}function lL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;c_.set(o),t.uniformMatrix3fv(this.addr,!1,c_),za(a,o)}}function cL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;l_.set(o),t.uniformMatrix4fv(this.addr,!1,l_),za(a,o)}}function fL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function uL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2iv(this.addr,e),za(a,e)}}function dL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Oa(a,e))return;t.uniform3iv(this.addr,e),za(a,e)}}function pL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4iv(this.addr,e),za(a,e)}}function hL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function mL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2uiv(this.addr,e),za(a,e)}}function IL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Oa(a,e))return;t.uniform3uiv(this.addr,e),za(a,e)}}function xL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4uiv(this.addr,e),za(a,e)}}function gL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(Ug.compareFunction=a.isReversedDepthBuffer()?Zh:Yh,r=Ug):r=__,a.setTexture2D(e||r,n)}function FL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||T_,n)}function vL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||w_,n)}function SL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||C_,n)}function yL(t){switch(t){case 5126:return oL;case 35664:return nL;case 35665:return rL;case 35666:return sL;case 35674:return iL;case 35675:return lL;case 35676:return cL;case 5124:case 35670:return fL;case 35667:case 35671:return uL;case 35668:case 35672:return dL;case 35669:case 35673:return pL;case 5125:return hL;case 36294:return mL;case 36295:return IL;case 36296:return xL;case 35678:case 36198:case 36298:case 36306:case 35682:return gL;case 35679:case 36299:case 36307:return FL;case 35680:case 36300:case 36308:case 36293:return vL;case 36289:case 36303:case 36311:case 36292:return SL}}function ML(t,e){t.uniform1fv(this.addr,e)}function bL(t,e){let a=fc(e,this.size,2);t.uniform2fv(this.addr,a)}function _L(t,e){let a=fc(e,this.size,3);t.uniform3fv(this.addr,a)}function CL(t,e){let a=fc(e,this.size,4);t.uniform4fv(this.addr,a)}function TL(t,e){let a=fc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function wL(t,e){let a=fc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function AL(t,e){let a=fc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function EL(t,e){t.uniform1iv(this.addr,e)}function RL(t,e){t.uniform2iv(this.addr,e)}function DL(t,e){t.uniform3iv(this.addr,e)}function LL(t,e){t.uniform4iv(this.addr,e)}function PL(t,e){t.uniform1uiv(this.addr,e)}function BL(t,e){t.uniform2uiv(this.addr,e)}function kL(t,e){t.uniform3uiv(this.addr,e)}function UL(t,e){t.uniform4uiv(this.addr,e)}function NL(t,e,a){let o=this.cache,n=e.length,r=em(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Ug:s=__;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function OL(t,e,a){let o=this.cache,n=e.length,r=em(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||T_,r[s])}function zL(t,e,a){let o=this.cache,n=e.length,r=em(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||w_,r[s])}function HL(t,e,a){let o=this.cache,n=e.length,r=em(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||C_,r[s])}function VL(t){switch(t){case 5126:return ML;case 35664:return bL;case 35665:return _L;case 35666:return CL;case 35674:return TL;case 35675:return wL;case 35676:return AL;case 5124:case 35670:return EL;case 35667:case 35671:return RL;case 35668:case 35672:return DL;case 35669:case 35673:return LL;case 5125:return PL;case 36294:return BL;case 36295:return kL;case 36296:return UL;case 35678:case 36198:case 36298:case 36306:case 35682:return NL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return zL;case 36289:case 36303:case 36311:case 36292:return HL}}var Ng=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=yL(a.type)}},Og=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=VL(a.type)}},zg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},Bg=/(\w+)(\])?(\[|\.)?/g;function u_(t,e){t.seq.push(e),t.map[e.id]=e}function GL(t,e,a){let o=t.name,n=o.length;for(Bg.lastIndex=0;;){let r=Bg.exec(o),s=Bg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){u_(a,c===void 0?new Ng(i,t,e):new Og(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new zg(i),u_(a,h)),a=h}}}var lc=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);GL(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function d_(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var qL=37297,WL=0;function XL(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var p_=new Mt;function YL(t){kt._getMatrix(p_,kt.workingColorSpace,t);let e=`mat3( ${p_.elements.map(a=>a.toFixed(4))} )`;switch(kt.getTransfer(t)){case Tf:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function h_(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+XL(t.getShaderSource(e),i)}else return r}function ZL(t,e){let a=YL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var KL={[fg]:"Linear",[ug]:"Reinhard",[dg]:"Cineon",[pg]:"ACESFilmic",[mg]:"AgX",[Yf]:"Neutral",[hg]:"Custom"};function JL(t,e){let a=KL[e];return a===void 0?(It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Jh=new O;function QL(){kt.getLuminanceCoefficients(Jh);let t=Jh.x.toFixed(4),e=Jh.y.toFixed(4),a=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nu).join(`
`)}function $L(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function e3(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function nu(t){return t!==""}function m_(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hg(t){return t.replace(t3,o3)}var a3=new Map;function o3(t,e){let a=wt[e];if(a===void 0){let o=a3.get(e);if(o!==void 0)a=wt[o],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hg(a)}var n3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(t){return t.replace(n3,r3)}function r3(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function g_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var s3={[Xf]:"SHADOWMAP_TYPE_PCF",[tc]:"SHADOWMAP_TYPE_VSM"};function i3(t){return s3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l3={[ws]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Zf]:"ENVMAP_TYPE_CUBE_UV"};function c3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":l3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var f3={[Ii]:"ENVMAP_MODE_REFRACTION"};function u3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":f3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d3={[cg]:"ENVMAP_BLENDING_MULTIPLY",[Rb]:"ENVMAP_BLENDING_MIX",[Db]:"ENVMAP_BLENDING_ADD"};function p3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":d3[t.combine]||"ENVMAP_BLENDING_NONE"}function h3(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function m3(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=i3(a),c=c3(a),u=u3(a),h=p3(a),f=h3(a),d=jL(a),m=$L(r),v=n.createProgram(),I,p,g=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(I=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(nu).join(`
`),I.length>0&&(I+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(nu).join(`
`),p.length>0&&(p+=`
`)):(I=[g_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nu).join(`
`),p=[g_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+u:"",a.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Tn?"#define TONE_MAPPING":"",a.toneMapping!==Tn?wt.tonemapping_pars_fragment:"",a.toneMapping!==Tn?JL("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,ZL("linearToOutputTexel",a.outputColorSpace),QL(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(nu).join(`
`)),s=Hg(s),s=m_(s,a),s=I_(s,a),i=Hg(i),i=m_(i,a),i=I_(i,a),s=x_(s),i=x_(i),a.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,p=["#define varying in",a.glslVersion===bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+I+s,x=g+p+i,b=d_(n,n.VERTEX_SHADER,y),C=d_(n,n.FRAGMENT_SHADER,x);n.attachShader(v,b),n.attachShader(v,C),a.index0AttributeName!==void 0?n.bindAttribLocation(v,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(L){if(t.debug.checkShaderErrors){let X=n.getProgramInfoLog(v)||"",z=n.getShaderInfoLog(b)||"",B=n.getShaderInfoLog(C)||"",U=X.trim(),ae=z.trim(),J=B.trim(),se=!0,G=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,v,b,C);else{let K=h_(n,b,"vertex"),oe=h_(n,C,"fragment");mt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+K+`
`+oe)}else U!==""?It("WebGLProgram: Program Info Log:",U):(ae===""||J==="")&&(G=!1);G&&(L.diagnostics={runnable:se,programLog:U,vertexShader:{log:ae,prefix:I},fragmentShader:{log:J,prefix:p}})}n.deleteShader(b),n.deleteShader(C),S=new lc(n,v),w=e3(n,v)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(v,qL)),A},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=WL++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}var I3=0,Vg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new Gg(e),a.set(e,o)),o}},Gg=class{constructor(e){this.id=I3++,this.code=e,this.usedTimes=0}};function x3(t){return t===Es||t===eu||t===tu}function g3(t,e,a,o,n,r){let s=new zl,i=new Vg,l=new Set,c=[],u=new Map,h=o.logarithmicDepthBuffer,f=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,w,A,L,X,z){let B=L.fog,U=X.geometry,ae=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,se=e.get(S.envMap||ae,J),G=se&&se.mapping===Zf?se.image.height:null,K=d[S.type];S.precision!==null&&(f=o.getMaxPrecision(S.precision),f!==S.precision&&It("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,De=oe!==void 0?oe.length:0,Ce=0;U.morphAttributes.position!==void 0&&(Ce=1),U.morphAttributes.normal!==void 0&&(Ce=2),U.morphAttributes.color!==void 0&&(Ce=3);let $e,H,lt,ee;if(K){let vt=or[K];$e=vt.vertexShader,H=vt.fragmentShader}else{$e=S.vertexShader,H=S.fragmentShader;let vt=i.getVertexShaderStage(S),xt=i.getFragmentShaderStage(S);i.update(S,vt,xt),lt=vt.id,ee=xt.id}let te=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Ke=X.isInstancedMesh===!0,Me=X.isBatchedMesh===!0,Ye=!!S.map,Qe=!!S.matcap,$=!!se,le=!!S.aoMap,Ie=!!S.lightMap,ie=!!S.bumpMap&&S.wireframe===!1,fe=!!S.normalMap,be=!!S.displacementMap,Xe=!!S.emissiveMap,Ne=!!S.metalnessMap,Be=!!S.roughnessMap,R=S.anisotropy>0,it=S.clearcoat>0,tt=S.dispersion>0,_=S.retroreflectivity>0,F=S.iridescence>0,N=S.sheen>0,q=S.transmission>0,re=R&&!!S.anisotropyMap,ye=it&&!!S.clearcoatMap,xe=it&&!!S.clearcoatNormalMap,j=it&&!!S.clearcoatRoughnessMap,V=F&&!!S.iridescenceMap,ue=F&&!!S.iridescenceThicknessMap,Te=N&&!!S.sheenColorMap,D=N&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,me=!!S.specularColorMap,ge=!!S.specularIntensityMap,ve=q&&!!S.transmissionMap,P=q&&!!S.thicknessMap,Se=!!S.gradientMap,ne=!!S.alphaMap,we=S.alphaTest>0,Re=!!S.alphaHash,de=!!S.extensions,Ve=Tn;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=t.toneMapping);let qe={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:H,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Me,batchingColor:Me&&X._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&X.instanceColor!==null,instancingMorph:Ke&&X.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:Qe,envMap:$,envMapMode:$&&se.mapping,envMapCubeUVHeight:G,aoMap:le,lightMap:Ie,bumpMap:ie,normalMap:fe,displacementMap:be,emissiveMap:Xe,normalMapObjectSpace:fe&&S.normalMapType===Bb,normalMapTangentSpace:fe&&S.normalMapType===Xh,packedNormalMap:fe&&S.normalMapType===Xh&&x3(S.normalMap.format),metalnessMap:Ne,roughnessMap:Be,anisotropy:R,anisotropyMap:re,clearcoat:it,clearcoatMap:ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:j,dispersion:tt,retroreflection:_,iridescence:F,iridescenceMap:V,iridescenceThicknessMap:ue,sheen:N,sheenColorMap:Te,sheenRoughnessMap:D,specularMap:Pe,specularColorMap:me,specularIntensityMap:ge,transmission:q,transmissionMap:ve,thicknessMap:P,gradientMap:Se,opaque:S.transparent===!1&&S.blending===ac&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:we,alphaHash:Re,combine:S.combine,mapUv:Ye&&m(S.map.channel),aoMapUv:le&&m(S.aoMap.channel),lightMapUv:Ie&&m(S.lightMap.channel),bumpMapUv:ie&&m(S.bumpMap.channel),normalMapUv:fe&&m(S.normalMap.channel),displacementMapUv:be&&m(S.displacementMap.channel),emissiveMapUv:Xe&&m(S.emissiveMap.channel),metalnessMapUv:Ne&&m(S.metalnessMap.channel),roughnessMapUv:Be&&m(S.roughnessMap.channel),anisotropyMapUv:re&&m(S.anisotropyMap.channel),clearcoatMapUv:ye&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:D&&m(S.sheenRoughnessMap.channel),specularMapUv:Pe&&m(S.specularMap.channel),specularColorMapUv:me&&m(S.specularColorMap.channel),specularIntensityMapUv:ge&&m(S.specularIntensityMap.channel),transmissionMapUv:ve&&m(S.transmissionMap.channel),thicknessMapUv:P&&m(S.thicknessMap.channel),alphaMapUv:ne&&m(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(fe||R),vertexNormals:!!U.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(Ye||ne),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&fe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&kt.getTransfer(S.map.colorSpace)===Xt,decodeVideoTextureEmissive:Xe&&S.emissiveMap.isVideoTexture===!0&&kt.getTransfer(S.emissiveMap.colorSpace)===Xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jo,flipSided:S.side===So,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||Me)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function I(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)w.push(A),w.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(p(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function p(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numSunLights),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numSunLightShadows),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function y(S){let w=d[S.type],A;if(w){let L=or[w];A=$b.clone(L.uniforms)}else A=S.uniforms;return A}function x(S,w){let A=u.get(w);return A!==void 0?++A.usedTimes:(A=new m3(t,w,S,n),c.push(A),u.set(w,A)),A}function b(S){if(--S.usedTimes===0){let w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){i.remove(S)}function T(){i.dispose()}return{getParameters:v,getProgramCacheKey:I,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:T}}function F3(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function v3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function F_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function v_(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function i(f,d,m,v,I,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,materialVariant:s(f),groupOrder:v,renderOrder:f.renderOrder,z:I,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.materialVariant=s(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=I,g.group=p),e++,g}function l(f,d,m,v,I,p,g){g.reversedDepth===!0&&(I=-I);let y=i(f,d,m,v,I,p);m.transmission>0?o.push(y):m.transparent===!0?n.push(y):a.push(y)}function c(f,d,m,v,I,p){let g=i(f,d,m,v,I,p);m.transmission>0?o.unshift(g):m.transparent===!0?n.unshift(g):a.unshift(g)}function u(f,d){a.length>1&&a.sort(f||v3),o.length>1&&o.sort(d||F_),n.length>1&&n.sort(d||F_)}function h(){for(let f=e,d=t.length;f<d;f++){let m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:u}}function S3(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new v_,t.set(o,[s])):n>=r.length?(s=new v_,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function y3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new O,color:new _t};break;case"SpotLight":a={position:new O,direction:new O,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new O,color:new _t,distance:0,decay:0};break;case"HemisphereLight":a={direction:new O,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":a={color:new _t,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=a,a}}}function M3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var b3=0;function _3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function C3(t){let e=new y3,a=M3(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new O);let n=new O,r=new oa,s=new oa;function i(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)o.probe[X].set(0,0,0);let d=0,m=0,v=0,I=0,p=0,g=0,y=0,x=0,b=0,C=0,T=0,S=0,w=0,A=0;c.sort(_3);for(let X=0,z=c.length;X<z;X++){let B=c[X],U=B.color,ae=B.intensity,J=B.distance,se=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Es?se=B.shadow.map.texture:se=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=U.r*ae,h+=U.g*ae,f+=U.b*ae;else if(B.isLightProbe){for(let G=0;G<9;G++)o.probe[G].addScaledVector(B.sh.coefficients[G],ae);A++}else if(B.isSunLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),o.sunShadow[m]=oe,o.sunShadowMap[m]=se;let De=K.getViewportCount();for(let Ce=0;Ce<De;Ce++)o.sunShadowMatrix[v+Ce]=K.getMatrix(Ce),o.sunShadowCascade[v+Ce]=K._cascadeData[Ce];v+=De,m++}o.sun[d]=G,d++}else if(B.isDirectionalLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,o.directionalShadow[I]=oe,o.directionalShadowMap[I]=se,o.directionalShadowMatrix[I]=B.shadow.matrix,b++}o.directional[I]=G,I++}else if(B.isSpotLight){let G=e.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(U).multiplyScalar(ae),G.distance=J,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,o.spot[g]=G;let K=B.shadow;if(B.map&&(o.spotLightMap[S]=B.map,S++,K.updateMatrices(B),B.castShadow&&w++),o.spotLightMatrix[g]=K.matrix,B.castShadow){let oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,o.spotShadow[g]=oe,o.spotShadowMap[g]=se,T++}g++}else if(B.isRectAreaLight){let G=e.get(B);G.color.copy(U).multiplyScalar(ae),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),o.rectArea[y]=G,y++}else if(B.isPointLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,oe.shadowCameraNear=K.camera.near,oe.shadowCameraFar=K.camera.far,o.pointShadow[p]=oe,o.pointShadowMap[p]=se,o.pointShadowMatrix[p]=B.shadow.matrix,C++}o.point[p]=G,p++}else if(B.isHemisphereLight){let G=e.get(B);G.skyColor.copy(B.color).multiplyScalar(ae),G.groundColor.copy(B.groundColor).multiplyScalar(ae),o.hemi[x]=G,x++}}y>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ze.LTC_FLOAT_1,o.rectAreaLTC2=Ze.LTC_FLOAT_2):(o.rectAreaLTC1=Ze.LTC_HALF_1,o.rectAreaLTC2=Ze.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=f;let L=o.hash;(L.sunLength!==d||L.directionalLength!==I||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==y||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==b||L.numPointShadows!==C||L.numSpotShadows!==T||L.numSpotMaps!==S||L.numLightProbes!==A)&&(o.sun.length=d,o.directional.length=I,o.spot.length=g,o.rectArea.length=y,o.point.length=p,o.hemi.length=x,o.sunShadow.length=m,o.sunShadowMap.length=m,o.sunShadowMatrix.length=v,o.sunShadowCascade.length=v,o.directionalShadow.length=b,o.directionalShadowMap.length=b,o.directionalShadowMatrix.length=b,o.pointShadow.length=C,o.pointShadowMap.length=C,o.pointShadowMatrix.length=C,o.spotShadow.length=T,o.spotShadowMap.length=T,o.spotLightMatrix.length=T+S-w,o.spotLightMap.length=S,o.numSpotLightShadowsWithMaps=w,o.numLightProbes=A,L.sunLength=d,L.directionalLength=I,L.pointLength=p,L.spotLength=g,L.rectAreaLength=y,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=b,L.numPointShadows=C,L.numSpotShadows=T,L.numSpotMaps=S,L.numLightProbes=A,o.version=b3++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0,I=0,p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let x=c[g];if(x.isSunLight){let b=o.sun[h];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),h++}else if(x.isDirectionalLight){let b=o.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),f++}else if(x.isSpotLight){let b=o.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let b=o.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){let b=o.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let b=o.hemi[I];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),I++}}}return{setup:i,setupView:l,state:o}}function S_(t){let e=new C3(t),a=[],o=[],n=[];function r(f){h.camera=f,a.length=0,o.length=0,n.length=0}function s(f){a.push(f)}function i(f){o.push(f)}function l(f){n.push(f)}function c(){e.setup(a)}function u(f){e.setupView(a,f)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function T3(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new S_(t),e.set(n,[i])):r>=s.length?(i=new S_(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var w3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],R3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],y_=new oa,ou=new O,kg=new O;function D3(t,e,a){let o=new Wl,n=new Ue,r=new Ue,s=new Ia,i=new qp,l=new Wp,c={},u=a.maxTextureSize,h={[Ts]:So,[So]:Ts,[Jo]:Jo},f=new Zo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:w3,fragmentShader:A3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new vo;m.setAttribute("position",new lo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ba(m,f),I=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(C,T,S){if(I.enabled===!1||I.autoUpdate===!1&&I.needsUpdate===!1||C.length===0)return;this.type===db&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xf);let w=t.getRenderTarget(),A=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),X=t.state;X.setBlending(er),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let z=p!==this.type;z&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(U=>U.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,U=C.length;B<U;B++){let ae=C[B],J=ae.shadow;if(J===void 0){It("WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);let se=J.getFrameExtents();n.multiply(se),r.copy(J.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/se.x),n.x=r.x*se.x,J.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/se.y),n.y=r.y*se.y,J.mapSize.y=r.y));let G=t.state.buffers.depth.getReversed();if(J.camera._reversedDepth=G,J.map===null||z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===tc){if(ae.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ro(n.x,n.y,{format:Es,type:En,minFilter:Na,magFilter:Na,generateMipmaps:!1}),J.map.texture.name=ae.name+".shadowMap",J.map.depthTexture=new Ss(n.x,n.y,An),J.map.depthTexture.name=ae.name+".shadowMapDepth",J.map.depthTexture.format=jn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Xa,J.map.depthTexture.magFilter=Xa}else ae.isPointLight?(J.map=new Qh(n.x),J.map.depthTexture=new Up(n.x,wn)):(J.map=new Ro(n.x,n.y),J.map.depthTexture=new Ss(n.x,n.y,wn)),J.map.depthTexture.name=ae.name+".shadowMap",J.map.depthTexture.format=jn,this.type===Xf?(J.map.depthTexture.compareFunction=G?Zh:Yh,J.map.depthTexture.minFilter=Na,J.map.depthTexture.magFilter=Na):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Xa,J.map.depthTexture.magFilter=Xa);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==n.x||J.map.height!==n.y)&&J.map.setSize(n.x,n.y);let K=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ae.isPointLight!==!0&&J.updateMatrices(ae,S);for(let oe=0;oe<K;oe++){let De=J.getCamera(oe);if(ae.isPointLight){let Ce=J.camera,$e=J.matrix,H=ae.distance||Ce.far;H!==Ce.far&&(Ce.far=H,Ce.updateProjectionMatrix()),ou.setFromMatrixPosition(ae.matrixWorld),Ce.position.copy(ou),kg.copy(Ce.position),kg.add(E3[oe]),Ce.up.copy(R3[oe]),Ce.lookAt(kg),Ce.updateMatrixWorld(),$e.makeTranslation(-ou.x,-ou.y,-ou.z),y_.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),J._frustum.setFromProjectionMatrix(y_,Ce.coordinateSystem,Ce.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)t.setRenderTarget(J.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(J.map),t.clear());let Ce=J.getViewport(oe);s.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),X.viewport(s)}o=J.getFrustum(oe),x(T,S,De,ae,this.type)}J.isPointLightShadow!==!0&&this.type===tc&&g(J,S),J.needsUpdate=!1}p=this.type,I.needsUpdate=!1,t.setRenderTarget(w,A,L)};function g(C,T){let S=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new Ro(n.x,n.y,{format:Es,type:En}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,S,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,S,d,v,null)}function y(C,T,S,w){let A=null,L=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:i,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let X=A.uuid,z=T.uuid,B=c[X];B===void 0&&(B={},c[X]=B);let U=B[z];U===void 0&&(U=A.clone(),B[z]=U,T.addEventListener("dispose",b)),A=U}if(A.visible=T.visible,A.wireframe=T.wireframe,w===tc?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:h[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let X=t.properties.get(A);X.light=S}return A}function x(C,T,S,w,A){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===tc)&&(!C.frustumCulled||C.intersectsFrustum(o))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);let z=e.update(C),B=C.material;if(Array.isArray(B)){let U=z.groups;for(let ae=0,J=U.length;ae<J;ae++){let se=U[ae],G=B[se.materialIndex];if(G&&G.visible){let K=y(C,G,w,A);C.onBeforeShadow(t,C,T,S,z,K,se),t.renderBufferDirect(S,null,z,K,C,se),C.onAfterShadow(t,C,T,S,z,K,se)}}}else if(B.visible){let U=y(C,B,w,A);C.onBeforeShadow(t,C,T,S,z,U,null),t.renderBufferDirect(S,null,z,U,C,null),C.onAfterShadow(t,C,T,S,z,U,null)}}let X=C.children;for(let z=0,B=X.length;z<B;z++)x(X[z],T,S,w,A)}function b(C){C.target.removeEventListener("dispose",b);for(let S in c){let w=c[S],A=C.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function L3(t,e){function a(){let P=!1,Se=new Ia,ne=null,we=new Ia(0,0,0,0);return{setMask:function(Re){ne!==Re&&!P&&(t.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){P=Re},setClear:function(Re,de,Ve,qe,vt){vt===!0&&(Re*=qe,de*=qe,Ve*=qe),Se.set(Re,de,Ve,qe),we.equals(Se)===!1&&(t.clearColor(Re,de,Ve,qe),we.copy(Se))},reset:function(){P=!1,ne=null,we.set(-1,0,0,0)}}}function o(){let P=!1,Se=!1,ne=null,we=null,Re=null;return{setReversed:function(de){if(Se!==de){let Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Se=de;let qe=Re;Re=null,this.setClear(qe)}},getReversed:function(){return Se},setTest:function(de){de?te(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(de){ne!==de&&!P&&(t.depthMask(de),ne=de)},setFunc:function(de){if(Se&&(de=Yb[de]),we!==de){switch(de){case bp:t.depthFunc(t.NEVER);break;case _p:t.depthFunc(t.ALWAYS);break;case Cp:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case Tp:t.depthFunc(t.EQUAL);break;case wp:t.depthFunc(t.GEQUAL);break;case Ap:t.depthFunc(t.GREATER);break;case Ep:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=de}},setLocked:function(de){P=de},setClear:function(de){Re!==de&&(Re=de,Se&&(de=1-de),t.clearDepth(de))},reset:function(){P=!1,ne=null,we=null,Re=null,Se=!1}}}function n(){let P=!1,Se=null,ne=null,we=null,Re=null,de=null,Ve=null,qe=null,vt=null;return{setTest:function(xt){P||(xt?te(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(xt){Se!==xt&&!P&&(t.stencilMask(xt),Se=xt)},setFunc:function(xt,_a,da){(ne!==xt||we!==_a||Re!==da)&&(t.stencilFunc(xt,_a,da),ne=xt,we=_a,Re=da)},setOp:function(xt,_a,da){(de!==xt||Ve!==_a||qe!==da)&&(t.stencilOp(xt,_a,da),de=xt,Ve=_a,qe=da)},setLocked:function(xt){P=xt},setClear:function(xt){vt!==xt&&(t.clearStencil(xt),vt=xt)},reset:function(){P=!1,Se=null,ne=null,we=null,Re=null,de=null,Ve=null,qe=null,vt=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],v=null,I=!1,p=null,g=null,y=null,x=null,b=null,C=null,T=null,S=new _t(0,0,0),w=0,A=!1,L=null,X=null,z=null,B=null,U=null,ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,se=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=se>=1):G.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=se>=2);let K=null,oe={},De=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),$e=new Ia().fromArray(De),H=new Ia().fromArray(Ce);function lt(P,Se,ne,we){let Re=new Uint8Array(4),de=t.createTexture();t.bindTexture(P,de),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<ne;Ve++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(Se+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return de}let ee={};ee[t.TEXTURE_2D]=lt(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=lt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=lt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=lt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),te(t.DEPTH_TEST),s.setFunc(kl),ie(!1),fe(og),te(t.CULL_FACE),le(er);function te(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function Ee(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Ke(P,Se){return f[P]!==Se?(t.bindFramebuffer(P,Se),f[P]=Se,P===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),P===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function Me(P,Se){let ne=m,we=!1;if(P){ne=d.get(Se),ne===void 0&&(ne=[],d.set(Se,ne));let Re=P.textures;if(ne.length!==Re.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ve=Re.length;de<Ve;de++)ne[de]=t.COLOR_ATTACHMENT0+de;ne.length=Re.length,we=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,we=!0);we&&t.drawBuffers(ne)}function Ye(P){return v!==P?(t.useProgram(P),v=P,!0):!1}let Qe={[mi]:t.FUNC_ADD,[hb]:t.FUNC_SUBTRACT,[mb]:t.FUNC_REVERSE_SUBTRACT};Qe[Ib]=t.MIN,Qe[xb]=t.MAX;let $={[gb]:t.ZERO,[Fb]:t.ONE,[vb]:t.SRC_COLOR,[ig]:t.SRC_ALPHA,[Cb]:t.SRC_ALPHA_SATURATE,[bb]:t.DST_COLOR,[yb]:t.DST_ALPHA,[Sb]:t.ONE_MINUS_SRC_COLOR,[lg]:t.ONE_MINUS_SRC_ALPHA,[_b]:t.ONE_MINUS_DST_COLOR,[Mb]:t.ONE_MINUS_DST_ALPHA,[Tb]:t.CONSTANT_COLOR,[wb]:t.ONE_MINUS_CONSTANT_COLOR,[Ab]:t.CONSTANT_ALPHA,[Eb]:t.ONE_MINUS_CONSTANT_ALPHA};function le(P,Se,ne,we,Re,de,Ve,qe,vt,xt){if(P===er){I===!0&&(Ee(t.BLEND),I=!1);return}if(I===!1&&(te(t.BLEND),I=!0),P!==pb){if(P!==p||xt!==A){if((g!==mi||b!==mi)&&(t.blendEquation(t.FUNC_ADD),g=mi,b=mi),xt)switch(P){case ac:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ng:t.blendFunc(t.ONE,t.ONE);break;case rg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:mt("WebGLState: Invalid blending: ",P);break}else switch(P){case ac:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ng:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rg:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sg:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",P);break}y=null,x=null,C=null,T=null,S.set(0,0,0),w=0,p=P,A=xt}return}Re=Re||Se,de=de||ne,Ve=Ve||we,(Se!==g||Re!==b)&&(t.blendEquationSeparate(Qe[Se],Qe[Re]),g=Se,b=Re),(ne!==y||we!==x||de!==C||Ve!==T)&&(t.blendFuncSeparate($[ne],$[we],$[de],$[Ve]),y=ne,x=we,C=de,T=Ve),(qe.equals(S)===!1||vt!==w)&&(t.blendColor(qe.r,qe.g,qe.b,vt),S.copy(qe),w=vt),p=P,A=!1}function Ie(P,Se){P.side===Jo?Ee(t.CULL_FACE):te(t.CULL_FACE);let ne=P.side===So;Se&&(ne=!ne),ie(ne),P.blending===ac&&P.transparent===!1?le(er):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);let we=P.stencilWrite;i.setTest(we),we&&(i.setMask(P.stencilWriteMask),i.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),i.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(P){L!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),L=P)}function fe(P){P!==fb?(te(t.CULL_FACE),P!==X&&(P===og?t.cullFace(t.BACK):P===ub?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),X=P}function be(P){P!==z&&(J&&t.lineWidth(P),z=P)}function Xe(P,Se,ne){P?(te(t.POLYGON_OFFSET_FILL),(B!==Se||U!==ne)&&(B=Se,U=ne,s.getReversed()&&(Se=-Se),t.polygonOffset(Se,ne))):Ee(t.POLYGON_OFFSET_FILL)}function Ne(P){P?te(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Be(P){P===void 0&&(P=t.TEXTURE0+ae-1),K!==P&&(t.activeTexture(P),K=P)}function R(P,Se,ne){ne===void 0&&(K===null?ne=t.TEXTURE0+ae-1:ne=K);let we=oe[ne];we===void 0&&(we={type:void 0,texture:void 0},oe[ne]=we),(we.type!==P||we.texture!==Se)&&(K!==ne&&(t.activeTexture(ne),K=ne),t.bindTexture(P,Se||ee[P]),we.type=P,we.texture=Se)}function it(){let P=oe[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function _(){try{t.compressedTexImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function F(){try{t.texSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function N(){try{t.texSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function re(){try{t.compressedTexSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function ye(){try{t.texStorage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function xe(){try{t.texStorage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function j(){try{t.texImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function V(){try{t.texImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function ue(P){return h[P]!==void 0?h[P]:t.getParameter(P)}function Te(P,Se){h[P]!==Se&&(t.pixelStorei(P,Se),h[P]=Se)}function D(P){$e.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function Pe(P){H.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),H.copy(P))}function me(P,Se){let ne=c.get(Se);ne===void 0&&(ne=new WeakMap,c.set(Se,ne));let we=ne.get(P);we===void 0&&(we=t.getUniformBlockIndex(Se,P.name),ne.set(P,we))}function ge(P,Se){let we=c.get(Se).get(P);l.get(Se)!==we&&(t.uniformBlockBinding(Se,we,P.__bindingPointIndex),l.set(Se,we))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,oe={},f={},d=new WeakMap,m=[],v=null,I=!1,p=null,g=null,y=null,x=null,b=null,C=null,T=null,S=new _t(0,0,0),w=0,A=!1,L=null,X=null,z=null,B=null,U=null,$e.set(0,0,t.canvas.width,t.canvas.height),H.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:te,disable:Ee,bindFramebuffer:Ke,drawBuffers:Me,useProgram:Ye,setBlending:le,setMaterial:Ie,setFlipSided:ie,setCullFace:fe,setLineWidth:be,setPolygonOffset:Xe,setScissorTest:Ne,activeTexture:Be,bindTexture:R,unbindTexture:it,compressedTexImage2D:tt,compressedTexImage3D:_,texImage2D:j,texImage3D:V,pixelStorei:Te,getParameter:ue,updateUBOMapping:me,uniformBlockBinding:ge,texStorage2D:ye,texStorage3D:xe,texSubImage2D:F,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:re,scissor:D,viewport:Pe,reset:ve}}function P3(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,F){return m?new OffscreenCanvas(_,F):wf("canvas")}function I(_,F,N){let q=1,re=tt(_);if((re.width>N||re.height>N)&&(q=N/Math.max(re.width,re.height)),q<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let ye=Math.floor(q*re.width),xe=Math.floor(q*re.height);f===void 0&&(f=v(ye,xe));let j=F?v(ye,xe):f;return j.width=ye,j.height=xe,j.getContext("2d").drawImage(_,0,0,ye,xe),It("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ye+"x"+xe+")."),j}else return"data"in _&&It("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),_;return _}function p(_){return _.generateMipmaps}function g(_){t.generateMipmap(_)}function y(_){return _.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?t.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(_,F,N,q,re,ye=!1){if(_!==null){if(t[_]!==void 0)return t[_];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=F;if(F===t.RED&&(N===t.FLOAT&&(j=t.R32F),N===t.HALF_FLOAT&&(j=t.R16F),N===t.UNSIGNED_BYTE&&(j=t.R8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.R16_EXT),N===t.SHORT&&xe&&(j=xe.R16_SNORM_EXT)),F===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.R8UI),N===t.UNSIGNED_SHORT&&(j=t.R16UI),N===t.UNSIGNED_INT&&(j=t.R32UI),N===t.BYTE&&(j=t.R8I),N===t.SHORT&&(j=t.R16I),N===t.INT&&(j=t.R32I)),F===t.RG&&(N===t.FLOAT&&(j=t.RG32F),N===t.HALF_FLOAT&&(j=t.RG16F),N===t.UNSIGNED_BYTE&&(j=t.RG8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.RG16_EXT),N===t.SHORT&&xe&&(j=xe.RG16_SNORM_EXT)),F===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RG8UI),N===t.UNSIGNED_SHORT&&(j=t.RG16UI),N===t.UNSIGNED_INT&&(j=t.RG32UI),N===t.BYTE&&(j=t.RG8I),N===t.SHORT&&(j=t.RG16I),N===t.INT&&(j=t.RG32I)),F===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGB8UI),N===t.UNSIGNED_SHORT&&(j=t.RGB16UI),N===t.UNSIGNED_INT&&(j=t.RGB32UI),N===t.BYTE&&(j=t.RGB8I),N===t.SHORT&&(j=t.RGB16I),N===t.INT&&(j=t.RGB32I)),F===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),N===t.UNSIGNED_INT&&(j=t.RGBA32UI),N===t.BYTE&&(j=t.RGBA8I),N===t.SHORT&&(j=t.RGBA16I),N===t.INT&&(j=t.RGBA32I)),F===t.RGB&&(N===t.UNSIGNED_SHORT&&xe&&(j=xe.RGB16_EXT),N===t.SHORT&&xe&&(j=xe.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),F===t.RGBA){let V=ye?Tf:kt.getTransfer(re);N===t.FLOAT&&(j=t.RGBA32F),N===t.HALF_FLOAT&&(j=t.RGBA16F),N===t.UNSIGNED_BYTE&&(j=V===Xt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.RGBA16_EXT),N===t.SHORT&&xe&&(j=xe.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(_,F){let N;return _?F===null||F===wn||F===nc?N=t.DEPTH24_STENCIL8:F===An?N=t.DEPTH32F_STENCIL8:F===oc&&(N=t.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===wn||F===nc?N=t.DEPTH_COMPONENT24:F===An?N=t.DEPTH_COMPONENT32F:F===oc&&(N=t.DEPTH_COMPONENT16),N}function C(_,F){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Xa&&_.minFilter!==Na?Math.log2(Math.max(F.width,F.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?F.mipmaps.length:1}function T(_){let F=_.target;F.removeEventListener("dispose",T),w(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function S(_){let F=_.target;F.removeEventListener("dispose",S),L(F)}function w(_){let F=o.get(_);if(F.__webglInit===void 0)return;let N=_.source,q=d.get(N);if(q){let re=q[F.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(_),Object.keys(q).length===0&&d.delete(N)}o.remove(_)}function A(_){let F=o.get(_);t.deleteTexture(F.__webglTexture);let N=_.source,q=d.get(N);delete q[F.__cacheKey],s.memory.textures--}function L(_){let F=o.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),o.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(F.__webglFramebuffer[q]))for(let re=0;re<F.__webglFramebuffer[q].length;re++)t.deleteFramebuffer(F.__webglFramebuffer[q][re]);else t.deleteFramebuffer(F.__webglFramebuffer[q]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[q])}else{if(Array.isArray(F.__webglFramebuffer))for(let q=0;q<F.__webglFramebuffer.length;q++)t.deleteFramebuffer(F.__webglFramebuffer[q]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let q=0;q<F.__webglColorRenderbuffer.length;q++)F.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[q]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let N=_.textures;for(let q=0,re=N.length;q<re;q++){let ye=o.get(N[q]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),s.memory.textures--),o.remove(N[q])}o.remove(_)}let X=0;function z(){X=0}function B(){return X}function U(_){X=_}function ae(){let _=X;return _>=n.maxTextures&&It("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,_}function J(_){let F=[];return F.push(_.wrapS),F.push(_.wrapT),F.push(_.wrapR||0),F.push(_.magFilter),F.push(_.minFilter),F.push(_.anisotropy),F.push(_.internalFormat),F.push(_.format),F.push(_.type),F.push(_.generateMipmaps),F.push(_.premultiplyAlpha),F.push(_.flipY),F.push(_.unpackAlignment),F.push(_.colorSpace),F.join()}function se(_,F){let N=o.get(_);if(_.isVideoTexture&&R(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&N.__version!==_.version){let q=_.image;if(q===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(N,_,F);return}}else _.isExternalTexture&&(N.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+F)}function G(_,F){let N=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){Ee(N,_,F);return}else _.isExternalTexture&&(N.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+F)}function K(_,F){let N=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){Ee(N,_,F);return}a.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+F)}function oe(_,F){let N=o.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&N.__version!==_.version){Ke(N,_,F);return}a.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+F)}let De={[Qn]:t.REPEAT,[fn]:t.CLAMP_TO_EDGE,[Rp]:t.MIRRORED_REPEAT},Ce={[Xa]:t.NEAREST,[Lb]:t.NEAREST_MIPMAP_NEAREST,[Kf]:t.NEAREST_MIPMAP_LINEAR,[Na]:t.LINEAR,[ch]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},$e={[Ub]:t.NEVER,[Vb]:t.ALWAYS,[Nb]:t.LESS,[Yh]:t.LEQUAL,[Ob]:t.EQUAL,[Zh]:t.GEQUAL,[zb]:t.GREATER,[Hb]:t.NOTEQUAL};function H(_,F){if(F.type===An&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===Na||F.magFilter===ch||F.magFilter===Kf||F.magFilter===tr||F.minFilter===Na||F.minFilter===ch||F.minFilter===Kf||F.minFilter===tr)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(_,t.TEXTURE_WRAP_S,De[F.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,De[F.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,De[F.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,Ce[F.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,Ce[F.minFilter]),F.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,$e[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Xa||F.minFilter!==Kf&&F.minFilter!==tr||F.type===An&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||o.get(F).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,n.getMaxAnisotropy())),o.get(F).__currentAnisotropy=F.anisotropy}}}function lt(_,F){let N=!1;_.__webglInit===void 0&&(_.__webglInit=!0,F.addEventListener("dispose",T));let q=F.source,re=d.get(q);re===void 0&&(re={},d.set(q,re));let ye=J(F);if(ye!==_.__cacheKey){re[ye]===void 0&&(re[ye]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),re[ye].usedTimes++;let xe=re[_.__cacheKey];xe!==void 0&&(re[_.__cacheKey].usedTimes--,xe.usedTimes===0&&A(F)),_.__cacheKey=ye,_.__webglTexture=re[ye].texture}return N}function ee(_,F,N){return Math.floor(Math.floor(_/N)/F)}function te(_,F,N,q){let ye=_.updateRanges;if(ye.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,F.width,F.height,N,q,F.data);else{ye.sort((Te,D)=>Te.start-D.start);let xe=0;for(let Te=1;Te<ye.length;Te++){let D=ye[xe],Pe=ye[Te],me=D.start+D.count,ge=ee(Pe.start,F.width,4),ve=ee(D.start,F.width,4);Pe.start<=me+1&&ge===ve&&ee(Pe.start+Pe.count-1,F.width,4)===ge?D.count=Math.max(D.count,Pe.start+Pe.count-D.start):(++xe,ye[xe]=Pe)}ye.length=xe+1;let j=a.getParameter(t.UNPACK_ROW_LENGTH),V=a.getParameter(t.UNPACK_SKIP_PIXELS),ue=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,F.width);for(let Te=0,D=ye.length;Te<D;Te++){let Pe=ye[Te],me=Math.floor(Pe.start/4),ge=Math.ceil(Pe.count/4),ve=me%F.width,P=Math.floor(me/F.width),Se=ge,ne=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,ve),a.pixelStorei(t.UNPACK_SKIP_ROWS,P),a.texSubImage2D(t.TEXTURE_2D,0,ve,P,Se,ne,N,q,F.data)}_.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,j),a.pixelStorei(t.UNPACK_SKIP_PIXELS,V),a.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Ee(_,F,N){let q=t.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),F.isData3DTexture&&(q=t.TEXTURE_3D);let re=lt(_,F),ye=F.source;a.bindTexture(q,_.__webglTexture,t.TEXTURE0+N);let xe=o.get(ye);if(ye.version!==xe.__version||re===!0){if(a.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ne=kt.getPrimaries(kt.workingColorSpace),we=F.colorSpace===Er?null:kt.getPrimaries(F.colorSpace),Re=F.colorSpace===Er||ne===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment);let V=I(F.image,!1,n.maxTextureSize);V=it(F,V);let ue=r.convert(F.format,F.colorSpace),Te=r.convert(F.type),D=x(F.internalFormat,ue,Te,F.normalized,F.colorSpace,F.isVideoTexture);H(q,F);let Pe,me=F.mipmaps,ge=F.isVideoTexture!==!0,ve=xe.__version===void 0||re===!0,P=ye.dataReady,Se=C(F,V);if(F.isDepthTexture)D=b(F.format===As,F.type),ve&&(ge?a.texStorage2D(t.TEXTURE_2D,1,D,V.width,V.height):a.texImage2D(t.TEXTURE_2D,0,D,V.width,V.height,0,ue,Te,null));else if(F.isDataTexture)if(me.length>0){ge&&ve&&a.texStorage2D(t.TEXTURE_2D,Se,D,me[0].width,me[0].height);for(let ne=0,we=me.length;ne<we;ne++)Pe=me[ne],ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,ue,Te,Pe.data):a.texImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,ue,Te,Pe.data);F.generateMipmaps=!1}else ge?(ve&&a.texStorage2D(t.TEXTURE_2D,Se,D,V.width,V.height),P&&te(F,V,ue,Te)):a.texImage2D(t.TEXTURE_2D,0,D,V.width,V.height,0,ue,Te,V.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){ge&&ve&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Se,D,me[0].width,me[0].height,V.depth);for(let ne=0,we=me.length;ne<we;ne++)if(Pe=me[ne],F.format!==un)if(ue!==null)if(ge){if(P)if(F.layerUpdates.size>0){let Re=Eg(Pe.width,Pe.height,F.format,F.type);for(let de of F.layerUpdates){let Ve=Pe.data.subarray(de*Re/Pe.data.BYTES_PER_ELEMENT,(de+1)*Re/Pe.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,de,Pe.width,Pe.height,1,ue,Ve)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,V.depth,ue,Pe.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,D,Pe.width,Pe.height,V.depth,0,Pe.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?P&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,V.depth,ue,Te,Pe.data):a.texImage3D(t.TEXTURE_2D_ARRAY,ne,D,Pe.width,Pe.height,V.depth,0,ue,Te,Pe.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{ge&&ve&&a.texStorage2D(t.TEXTURE_2D,Se,D,me[0].width,me[0].height);for(let ne=0,we=me.length;ne<we;ne++)Pe=me[ne],F.format!==un?ue!==null?ge?P&&a.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,ue,Pe.data):a.compressedTexImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,Pe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,ue,Te,Pe.data):a.texImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,ue,Te,Pe.data)}else if(F.isDataArrayTexture)if(ge){if(ve&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Se,D,V.width,V.height,V.depth),P)if(F.layerUpdates.size>0){let ne=Eg(V.width,V.height,F.format,F.type);for(let we of F.layerUpdates){let Re=V.data.subarray(we*ne/V.data.BYTES_PER_ELEMENT,(we+1)*ne/V.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,we,V.width,V.height,1,ue,Te,Re)}F.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ue,Te,V.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,D,V.width,V.height,V.depth,0,ue,Te,V.data);else if(F.isData3DTexture)ge?(ve&&a.texStorage3D(t.TEXTURE_3D,Se,D,V.width,V.height,V.depth),P&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ue,Te,V.data)):a.texImage3D(t.TEXTURE_3D,0,D,V.width,V.height,V.depth,0,ue,Te,V.data);else if(F.isFramebufferTexture){if(ve)if(ge)a.texStorage2D(t.TEXTURE_2D,Se,D,V.width,V.height);else{let ne=V.width,we=V.height;for(let Re=0;Re<Se;Re++)a.texImage2D(t.TEXTURE_2D,Re,D,ne,we,0,ue,Te,null),ne>>=1,we>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in t){let ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),V.parentNode!==ne){ne.appendChild(V),h.add(F),ne.onpaint=we=>{let Re=we.changedElements;for(let de of h)Re.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,V);else{let Re=t.RGBA,de=t.RGBA,Ve=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Re,de,Ve,V)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(me.length>0){if(ge&&ve){let ne=tt(me[0]);a.texStorage2D(t.TEXTURE_2D,Se,D,ne.width,ne.height)}for(let ne=0,we=me.length;ne<we;ne++)Pe=me[ne],ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,ue,Te,Pe):a.texImage2D(t.TEXTURE_2D,ne,D,ue,Te,Pe);F.generateMipmaps=!1}else if(ge){if(ve){let ne=tt(V);a.texStorage2D(t.TEXTURE_2D,Se,D,ne.width,ne.height)}P&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Te,V)}else a.texImage2D(t.TEXTURE_2D,0,D,ue,Te,V);p(F)&&g(q),xe.__version=ye.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function Ke(_,F,N){if(F.image.length!==6)return;let q=lt(_,F),re=F.source;a.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+N);let ye=o.get(re);if(re.version!==ye.__version||q===!0){a.activeTexture(t.TEXTURE0+N);let xe=kt.getPrimaries(kt.workingColorSpace),j=F.colorSpace===Er?null:kt.getPrimaries(F.colorSpace),V=F.colorSpace===Er||xe===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let ue=F.isCompressedTexture||F.image[0].isCompressedTexture,Te=F.image[0]&&F.image[0].isDataTexture,D=[];for(let de=0;de<6;de++)!ue&&!Te?D[de]=I(F.image[de],!0,n.maxCubemapSize):D[de]=Te?F.image[de].image:F.image[de],D[de]=it(F,D[de]);let Pe=D[0],me=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),ve=x(F.internalFormat,me,ge,F.normalized,F.colorSpace),P=F.isVideoTexture!==!0,Se=ye.__version===void 0||q===!0,ne=re.dataReady,we=C(F,Pe);H(t.TEXTURE_CUBE_MAP,F);let Re;if(ue){P&&Se&&a.texStorage2D(t.TEXTURE_CUBE_MAP,we,ve,Pe.width,Pe.height);for(let de=0;de<6;de++){Re=D[de].mipmaps;for(let Ve=0;Ve<Re.length;Ve++){let qe=Re[Ve];F.format!==un?me!==null?P?ne&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,qe.width,qe.height,me,qe.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,ve,qe.width,qe.height,0,qe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,qe.width,qe.height,me,ge,qe.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,ve,qe.width,qe.height,0,me,ge,qe.data)}}}else{if(Re=F.mipmaps,P&&Se){Re.length>0&&we++;let de=tt(D[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,we,ve,de.width,de.height)}for(let de=0;de<6;de++)if(Te){P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,D[de].width,D[de].height,me,ge,D[de].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ve,D[de].width,D[de].height,0,me,ge,D[de].data);for(let Ve=0;Ve<Re.length;Ve++){let vt=Re[Ve].image[de].image;P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,vt.width,vt.height,me,ge,vt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,ve,vt.width,vt.height,0,me,ge,vt.data)}}else{P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,me,ge,D[de]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ve,me,ge,D[de]);for(let Ve=0;Ve<Re.length;Ve++){let qe=Re[Ve];P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,me,ge,qe.image[de]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,ve,me,ge,qe.image[de])}}}p(F)&&g(t.TEXTURE_CUBE_MAP),ye.__version=re.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function Me(_,F,N,q,re,ye){let xe=r.convert(N.format,N.colorSpace),j=r.convert(N.type),V=x(N.internalFormat,xe,j,N.normalized,N.colorSpace),ue=o.get(F),Te=o.get(N);if(Te.__renderTarget=F,!ue.__hasExternalTextures){let D=Math.max(1,F.width>>ye),Pe=Math.max(1,F.height>>ye);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?a.texImage3D(re,ye,V,D,Pe,F.depth,0,xe,j,null):a.texImage2D(re,ye,V,D,Pe,0,xe,j,null)}a.bindFramebuffer(t.FRAMEBUFFER,_),Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,re,Te.__webglTexture,0,Ne(F)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,re,Te.__webglTexture,ye),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(_,F,N){if(t.bindRenderbuffer(t.RENDERBUFFER,_),F.depthBuffer){let q=F.depthTexture,re=q&&q.isDepthTexture?q.type:null,ye=b(F.stencilBuffer,re),xe=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(F),ye,F.width,F.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(F),ye,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,ye,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,_)}else{let q=F.textures;for(let re=0;re<q.length;re++){let ye=q[re],xe=r.convert(ye.format,ye.colorSpace),j=r.convert(ye.type),V=x(ye.internalFormat,xe,j,ye.normalized,ye.colorSpace);Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(F),V,F.width,F.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(F),V,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,V,F.width,F.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(_,F,N){let q=F.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,_),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=o.get(F.depthTexture);if(re.__renderTarget=F,(!re.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),q){if(re.__webglInit===void 0&&(re.__webglInit=!0,F.depthTexture.addEventListener("dispose",T)),re.__webglTexture===void 0){re.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),H(t.TEXTURE_CUBE_MAP,F.depthTexture);let ue=r.convert(F.depthTexture.format),Te=r.convert(F.depthTexture.type),D;F.depthTexture.format===jn?D=t.DEPTH_COMPONENT24:F.depthTexture.format===As&&(D=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,D,F.width,F.height,0,ue,Te,null)}}else se(F.depthTexture,0);let ye=re.__webglTexture,xe=Ne(F),j=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,V=F.depthTexture.format===As?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(F.depthTexture.format===jn)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ye,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ye,0);else if(F.depthTexture.format===As)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ye,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(_){let F=o.get(_),N=_.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==_.depthTexture){let q=_.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),q){let re=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,q.removeEventListener("dispose",re)};q.addEventListener("dispose",re),F.__depthDisposeCallback=re}F.__boundDepthTexture=q}if(_.depthTexture&&!F.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Qe(F.__webglFramebuffer[q],_,q);else{let q=_.texture.mipmaps;q&&q.length>0?Qe(F.__webglFramebuffer[0],_,0):Qe(F.__webglFramebuffer,_,0)}else if(N){F.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[q]),F.__webglDepthbuffer[q]===void 0)F.__webglDepthbuffer[q]=t.createRenderbuffer(),Ye(F.__webglDepthbuffer[q],_,!1);else{let re=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=F.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ye)}}else{let q=_.texture.mipmaps;if(q&&q.length>0?a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=t.createRenderbuffer(),Ye(F.__webglDepthbuffer,_,!1);else{let re=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=F.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ye)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function le(_,F,N){let q=o.get(_);F!==void 0&&Me(q.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&$(_)}function Ie(_){let F=_.texture,N=o.get(_),q=o.get(F);_.addEventListener("dispose",S);let re=_.textures,ye=_.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=F.version,s.memory.textures++),ye){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(F.mipmaps&&F.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let V=0;V<F.mipmaps.length;V++)N.__webglFramebuffer[j][V]=t.createFramebuffer()}else N.__webglFramebuffer[j]=t.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<F.mipmaps.length;j++)N.__webglFramebuffer[j]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(xe)for(let j=0,V=re.length;j<V;j++){let ue=o.get(re[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),s.memory.textures++)}if(_.samples>0&&Be(_)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){let V=re[j];N.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[j]);let ue=r.convert(V.format,V.colorSpace),Te=r.convert(V.type),D=x(V.internalFormat,ue,Te,V.normalized,V.colorSpace,_.isXRRenderTarget===!0),Pe=Ne(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,D,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,N.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(N.__webglDepthRenderbuffer,_,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ye){a.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),H(t.TEXTURE_CUBE_MAP,F);for(let j=0;j<6;j++)if(F.mipmaps&&F.mipmaps.length>0)for(let V=0;V<F.mipmaps.length;V++)Me(N.__webglFramebuffer[j][V],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,V);else Me(N.__webglFramebuffer[j],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(F)&&g(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(xe){for(let j=0,V=re.length;j<V;j++){let ue=re[j],Te=o.get(ue),D=t.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(D=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(D,Te.__webglTexture),H(D,ue),Me(N.__webglFramebuffer,_,ue,t.COLOR_ATTACHMENT0+j,D,0),p(ue)&&g(D)}a.unbindTexture()}else{let j=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(j=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(j,q.__webglTexture),H(j,F),F.mipmaps&&F.mipmaps.length>0)for(let V=0;V<F.mipmaps.length;V++)Me(N.__webglFramebuffer[V],_,F,t.COLOR_ATTACHMENT0,j,V);else Me(N.__webglFramebuffer,_,F,t.COLOR_ATTACHMENT0,j,0);p(F)&&g(j),a.unbindTexture()}_.depthBuffer&&$(_)}function ie(_){let F=_.textures;for(let N=0,q=F.length;N<q;N++){let re=F[N];if(p(re)){let ye=y(_),xe=o.get(re).__webglTexture;a.bindTexture(ye,xe),g(ye),a.unbindTexture()}}}let fe=[],be=[];function Xe(_){if(_.samples>0){if(Be(_)===!1){let F=_.textures,N=_.width,q=_.height,re=t.COLOR_BUFFER_BIT,ye=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=o.get(_),j=F.length>1;if(j)for(let ue=0;ue<F.length;ue++)a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let V=_.texture.mipmaps;V&&V.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<F.length;ue++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);let Te=o.get(F[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,re,t.NEAREST),l===!0&&(fe.length=0,be.length=0,fe.push(t.COLOR_ATTACHMENT0+ue),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(fe.push(ye),be.push(ye),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<F.length;ue++){a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);let Te=o.get(F[ue]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Te,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){let F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[F])}}}function Ne(_){return Math.min(n.maxSamples,_.samples)}function Be(_){let F=o.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function R(_){let F=s.render.frame;u.get(_)!==F&&(u.set(_,F),_.update())}function it(_,F){let N=_.colorSpace,q=_.format,re=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||N!==Cf&&N!==Er&&(kt.getTransfer(N)===Xt?(q!==un||re!==Do)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",N)),F}function tt(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=z,this.getTextureUnits=B,this.setTextureUnits=U,this.setTexture2D=se,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=le,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function B3(t,e){function a(o,n=Er){let r,s=kt.getTransfer(n);if(o===Do)return t.UNSIGNED_BYTE;if(o===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(o===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(o===Fg)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===vg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===xg)return t.BYTE;if(o===gg)return t.SHORT;if(o===oc)return t.UNSIGNED_SHORT;if(o===fh)return t.INT;if(o===wn)return t.UNSIGNED_INT;if(o===An)return t.FLOAT;if(o===En)return t.HALF_FLOAT;if(o===Sg)return t.ALPHA;if(o===yg)return t.RGB;if(o===un)return t.RGBA;if(o===jn)return t.DEPTH_COMPONENT;if(o===As)return t.DEPTH_STENCIL;if(o===Mg)return t.RED;if(o===ph)return t.RED_INTEGER;if(o===Es)return t.RG;if(o===hh)return t.RG_INTEGER;if(o===mh)return t.RGBA_INTEGER;if(o===Jf||o===Qf||o===jf||o===$f)if(s===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Jf)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Qf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===jf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===$f)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Jf)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Qf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===jf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===$f)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ih||o===xh||o===gh||o===Fh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===Ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Fh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===vh||o===Sh||o===yh||o===Mh||o===bh||o===eu||o===_h)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===vh||o===Sh)return s===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===yh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===Mh)return r.COMPRESSED_R11_EAC;if(o===bh)return r.COMPRESSED_SIGNED_R11_EAC;if(o===eu)return r.COMPRESSED_RG11_EAC;if(o===_h)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===Ch||o===Th||o===wh||o===Ah||o===Eh||o===Rh||o===Dh||o===Lh||o===Ph||o===Bh||o===kh||o===Uh||o===Nh||o===Oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===Ch)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Th)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===wh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ah)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Eh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Rh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Dh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Lh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ph)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Bh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===kh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Uh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Nh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Oh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===zh||o===Hh||o===Vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===zh)return s===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Gh||o===qh||o===tu||o===Wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===Gh)return r.COMPRESSED_RED_RGTC1_EXT;if(o===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===tu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===nc?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var k3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new Pf(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Zo({vertexShader:k3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ba(new hi(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wg=class extends $n{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,v=typeof XRWebGLBinding<"u",I=new qg,p={},g=a.getContextAttributes(),y=null,x=null,b=[],C=[],T=new Ue,S=null,w=null,A=new io;A.viewport=new Ia;let L=new io;L.viewport=new Ia;let X=[A,L],z=new rh,B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=b[ee];return te===void 0&&(te=new Hl,b[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=b[ee];return te===void 0&&(te=new Hl,b[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=b[ee];return te===void 0&&(te=new Hl,b[ee]=te),te.getHandSpace()};function ae(ee){let te=C.indexOf(ee.inputSource);if(te===-1)return;let Ee=b[te];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||s),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){n.removeEventListener("select",ae),n.removeEventListener("selectstart",ae),n.removeEventListener("selectend",ae),n.removeEventListener("squeeze",ae),n.removeEventListener("squeezestart",ae),n.removeEventListener("squeezeend",ae),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",se);for(let ee=0;ee<b.length;ee++){let te=C[ee];te!==null&&(C[ee]=null,b[ee].disconnect(te))}B=null,U=null,I.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(y),d=null,f=null,h=null,n=null,x=null,lt.stop(),o.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),w!==null){let ee=w.camera;ee.fov=w.fov,ee.zoom=w.zoom,ee.updateProjectionMatrix(),w=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,o.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){i=ee,o.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",ae),n.addEventListener("selectstart",ae),n.addEventListener("selectend",ae),n.addEventListener("squeeze",ae),n.addEventListener("squeezestart",ae),n.addEventListener("squeezeend",ae),n.addEventListener("end",J),n.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await a.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ke=null,Me=null;g.depth&&(Me=g.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Ee=g.stencil?As:jn,Ke=g.stencil?nc:wn);let Ye={colorFormat:a.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ye),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ro(f.textureWidth,f.textureHeight,{format:un,type:Do,depthTexture:new Ss(f.textureWidth,f.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,Ee),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ro(d.framebufferWidth,d.framebufferHeight,{format:un,type:Do,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),lt.setContext(n),lt.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function se(ee){for(let te=0;te<ee.removed.length;te++){let Ee=ee.removed[te],Ke=C.indexOf(Ee);Ke>=0&&(C[Ke]=null,b[Ke].disconnect(Ee))}for(let te=0;te<ee.added.length;te++){let Ee=ee.added[te],Ke=C.indexOf(Ee);if(Ke===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=C.length){C.push(Ee),Ke=Ye;break}else if(C[Ye]===null){C[Ye]=Ee,Ke=Ye;break}if(Ke===-1)break}let Me=b[Ke];Me&&Me.connect(Ee)}}let G=new O,K=new O;function oe(ee,te,Ee){G.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);let Ke=G.distanceTo(K),Me=te.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),$=Me[14]/(Me[10]+1),le=(Me[9]+1)/Me[5],Ie=(Me[9]-1)/Me[5],ie=(Me[8]-1)/Me[0],fe=(Ye[8]+1)/Ye[0],be=Qe*ie,Xe=Qe*fe,Ne=Ke/(-ie+fe),Be=Ne*-ie;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(Ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Me[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let R=Qe+Ne,it=$+Ne,tt=be-Be,_=Xe+(Ke-Be),F=le*$/it*R,N=Ie*$/it*R;ee.projectionMatrix.makePerspective(tt,_,F,N,R,it),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let te=ee.near,Ee=ee.far;I.texture!==null&&(I.depthNear>0&&(te=I.depthNear),I.depthFar>0&&(Ee=I.depthFar)),z.near=L.near=A.near=te,z.far=L.far=A.far=Ee,(B!==z.near||U!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,U=z.far),z.layers.mask=ee.layers.mask|6,A.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Ke=ee.parent,Me=z.cameras;De(z,Ke);for(let Ye=0;Ye<Me.length;Ye++)De(Me[Ye],Ke);Me.length===2?oe(z,A,L):z.projectionMatrix.copy(A.projectionMatrix),w===null&&ee.isPerspectiveCamera&&(w={camera:ee,fov:ee.fov,zoom:ee.zoom}),Ce(ee,z,Ke)};function Ce(ee,te,Ee){Ee===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Lp*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(z)},this.getCameraTexture=function(ee){return p[ee]};let $e=null;function H(ee,te){if(u=te.getViewerPose(c||s),m=te,u!==null){let Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ke=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,Ke=!0);for(let $=0;$<Ee.length;$++){let le=Ee[$],Ie=null;if(d!==null)Ie=d.getViewport(le);else{let fe=h.getViewSubImage(f,le);Ie=fe.viewport,$===0&&(e.setRenderTargetTextures(x,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(x))}let ie=X[$];ie===void 0&&(ie=new io,ie.layers.enable($),ie.viewport=new Ia,X[$]=ie),ie.matrix.fromArray(le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),$===0&&(z.matrix.copy(ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ke===!0&&z.cameras.push(ie)}let Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){h=o.getBinding();let $=h.getDepthInformation(Ee[0]);$&&$.isValid&&$.texture&&I.init($,n.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),h=o.getBinding();for(let $=0;$<Ee.length;$++){let le=Ee[$].camera;if(le){let Ie=p[le];Ie||(Ie=new Pf,p[le]=Ie);let ie=h.getCameraImage(le);Ie.sourceTexture=ie}}}}for(let Ee=0;Ee<b.length;Ee++){let Ke=C[Ee],Me=b[Ee];Ke!==null&&Me!==void 0&&Me.update(Ke,te,c||s)}$e&&$e(ee,te),te.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:te}),m=null}let lt=new M_;lt.setAnimationLoop(H),this.setAnimationLoop=function(ee){$e=ee},this.dispose=function(){}}},N3=new oa,A_=new Mt;A_.set(-1,0,0,0,1,0,0,0,1);function O3(t,e){function a(I,p){I.matrixAutoUpdate===!0&&I.updateMatrix(),p.value.copy(I.matrix)}function o(I,p){p.color.getRGB(I.fogColor.value,Tg(t)),p.isFog?(I.fogNear.value=p.near,I.fogFar.value=p.far):p.isFogExp2&&(I.fogDensity.value=p.density)}function n(I,p,g,y,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(I,p):p.isMeshLambertMaterial?(r(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(I,p),h(I,p)):p.isMeshPhongMaterial?(r(I,p),u(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(I,p),f(I,p),p.isMeshPhysicalMaterial&&d(I,p,x)):p.isMeshMatcapMaterial?(r(I,p),m(I,p)):p.isMeshDepthMaterial?r(I,p):p.isMeshDistanceMaterial?(r(I,p),v(I,p)):p.isMeshNormalMaterial?r(I,p):p.isLineBasicMaterial?(s(I,p),p.isLineDashedMaterial&&i(I,p)):p.isPointsMaterial?l(I,p,g,y):p.isSpriteMaterial?c(I,p):p.isShadowMaterial?(I.color.value.copy(p.color),I.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(I,p){I.opacity.value=p.opacity,p.color&&I.diffuse.value.copy(p.color),p.emissive&&I.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.bumpMap&&(I.bumpMap.value=p.bumpMap,a(p.bumpMap,I.bumpMapTransform),I.bumpScale.value=p.bumpScale,p.side===So&&(I.bumpScale.value*=-1)),p.normalMap&&(I.normalMap.value=p.normalMap,a(p.normalMap,I.normalMapTransform),I.normalScale.value.copy(p.normalScale),p.side===So&&I.normalScale.value.negate()),p.displacementMap&&(I.displacementMap.value=p.displacementMap,a(p.displacementMap,I.displacementMapTransform),I.displacementScale.value=p.displacementScale,I.displacementBias.value=p.displacementBias),p.emissiveMap&&(I.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,I.emissiveMapTransform)),p.specularMap&&(I.specularMap.value=p.specularMap,a(p.specularMap,I.specularMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest);let g=e.get(p),y=g.envMap,x=g.envMapRotation;y&&(I.envMap.value=y,I.envMapRotation.value.setFromMatrix4(N3.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&I.envMapRotation.value.premultiply(A_),I.reflectivity.value=p.reflectivity,I.ior.value=p.ior,I.refractionRatio.value=p.refractionRatio),p.lightMap&&(I.lightMap.value=p.lightMap,I.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,I.lightMapTransform)),p.aoMap&&(I.aoMap.value=p.aoMap,I.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,I.aoMapTransform))}function s(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform))}function i(I,p){I.dashSize.value=p.dashSize,I.totalSize.value=p.dashSize+p.gapSize,I.scale.value=p.scale}function l(I,p,g,y){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.size.value=p.size*g,I.scale.value=y*.5,p.map&&(I.map.value=p.map,a(p.map,I.uvTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function c(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.rotation.value=p.rotation,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function u(I,p){I.specular.value.copy(p.specular),I.shininess.value=Math.max(p.shininess,1e-4)}function h(I,p){p.gradientMap&&(I.gradientMap.value=p.gradientMap)}function f(I,p){I.metalness.value=p.metalness,p.metalnessMap&&(I.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,I.metalnessMapTransform)),I.roughness.value=p.roughness,p.roughnessMap&&(I.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,I.roughnessMapTransform)),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)}function d(I,p,g){I.ior.value=p.ior,p.sheen>0&&(I.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),I.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(I.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,I.sheenColorMapTransform)),p.sheenRoughnessMap&&(I.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,I.sheenRoughnessMapTransform))),p.clearcoat>0&&(I.clearcoat.value=p.clearcoat,I.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(I.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,I.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(I.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,I.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(I.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,I.clearcoatNormalMapTransform),I.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===So&&I.clearcoatNormalScale.value.negate())),p.dispersion>0&&(I.dispersion.value=p.dispersion),p.retroreflectivity>0&&(I.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(I.iridescence.value=p.iridescence,I.iridescenceIOR.value=p.iridescenceIOR,I.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],I.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(I.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,I.iridescenceMapTransform)),p.iridescenceThicknessMap&&(I.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,I.iridescenceThicknessMapTransform))),p.transmission>0&&(I.transmission.value=p.transmission,I.transmissionSamplerMap.value=g.texture,I.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(I.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,I.transmissionMapTransform)),I.thickness.value=p.thickness,p.thicknessMap&&(I.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,I.thicknessMapTransform)),I.attenuationDistance.value=p.attenuationDistance,I.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(I.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(I.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,I.anisotropyMapTransform))),I.specularIntensity.value=p.specularIntensity,I.specularColor.value.copy(p.specularColor),p.specularColorMap&&(I.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,I.specularColorMapTransform)),p.specularIntensityMap&&(I.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,I.specularIntensityMapTransform))}function m(I,p){p.matcap&&(I.matcap.value=p.matcap)}function v(I,p){let g=e.get(p).light;I.referencePosition.value.setFromMatrixPosition(g.matrixWorld),I.nearDistance.value=g.shadow.camera.near,I.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function z3(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let C=b.program;o.uniformBlockBinding(x,C)}function c(x,b){let C=n[x.id];C===void 0&&(I(x),C=u(x),n[x.id]=C,x.addEventListener("dispose",g));let T=b.program;o.updateUBOMapping(x,T);let S=e.render.frame;r[x.id]!==S&&(f(x),r[x.id]=S)}function u(x){let b=h();x.__bindingPointIndex=b;let C=t.createBuffer(),T=x.__size,S=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,T,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,C),C}function h(){for(let x=0;x<i;x++)if(s.indexOf(x)===-1)return s.push(x),x;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let b=n[x.id],C=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let S=0,w=C.length;S<w;S++){let A=C[S];if(Array.isArray(A))for(let L=0,X=A.length;L<X;L++)d(A[L],S,L,T);else d(A,S,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(x,b,C,T){if(v(x,b,C,T)===!0){let S=x.__offset,w=x.value;if(Array.isArray(w)){let A=0;for(let L=0;L<w.length;L++){let X=w[L],z=p(X);m(X,x.__data,A),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,x.__data)}}function m(x,b,C){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,C)}function v(x,b,C,T){let S=x.value,w=b+"_"+C;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:ArrayBuffer.isView(S)?T[w]=S.slice():T[w]=S.clone(),!0;{let A=T[w];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function I(x){let b=x.uniforms,C=0,T=16;for(let w=0,A=b.length;w<A;w++){let L=Array.isArray(b[w])?b[w]:[b[w]];for(let X=0,z=L.length;X<z;X++){let B=L[X],U=Array.isArray(B.value)?B.value:[B.value];for(let ae=0,J=U.length;ae<J;ae++){let se=U[ae],G=p(se),K=C%T,oe=K%G.boundary,De=K+oe;C+=oe,De!==0&&T-De<G.storage&&(C+=T-De),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,C+=G.storage}}}let S=C%T;return S>0&&(C+=T-S),x.__size=C,x.__cache={},this}function p(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):It("WebGLRenderer: Unsupported uniform value type.",x),b}function g(x){let b=x.target;b.removeEventListener("dispose",g);let C=s.indexOf(b.__bindingPointIndex);s.splice(C,1),t.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function y(){for(let x in n)t.deleteBuffer(n[x]);s=[],n={},r={}}return{bind:l,update:c,dispose:y}}var H3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ar=null;function V3(){return ar===null&&(ar=new ql(H3,16,16,Es,En),ar.name="DFG_LUT",ar.minFilter=Na,ar.magFilter=Na,ar.wrapS=fn,ar.wrapT=fn,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}var jh=class{constructor(e={}){let{canvas:a=qb(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Do}=e;this.isWebGLRenderer=!0;let m;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=o.getContextAttributes().alpha}else m=s;let v=d,I=new Set([mh,hh,ph]),p=new Set([Do,wn,oc,nc,uh,dh]),g=new Uint32Array(4),y=new Int32Array(4),x=new O,b=null,C=null,T=[],S=[],w=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,X=null,z=null,B=null,U=null;this._outputColorSpace=to;let ae=0,J=0,se=null,G=-1,K=null,oe=new Ia,De=new Ia,Ce=null,$e=new _t(0),H=0,lt=a.width,ee=a.height,te=1,Ee=null,Ke=null,Me=new Ia(0,0,lt,ee),Ye=new Ia(0,0,lt,ee),Qe=!1,$=new Wl,le=!1,Ie=!1,ie=new oa,fe=new O,be=new Ia,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Be(){return se===null?te:1}let R=o;function it(M,E){return a.getContext(M,E)}let tt,_,F,N,q,re,ye,xe,j,V,ue,Te,D,Pe,me,ge,ve,P,Se,ne,we,Re,de;try{let M={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${sh}`),a.addEventListener("webglcontextlost",vt,!1),a.addEventListener("webglcontextrestored",xt,!1),a.addEventListener("webglcontextcreationerror",_a,!1),R===null){let E="webgl2";if(R=it(E,M),R===null)throw it(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(M){throw a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",xt,!1),a.removeEventListener("webglcontextcreationerror",_a,!1),mt("WebGLRenderer: "+M.message),M}function Ve(){tt=new KD(R),tt.init(),we=new B3(R,tt),_=new OD(R,tt,e,we),F=new L3(R,tt),_.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),z=R.createFramebuffer(),B=R.createFramebuffer(),U=R.createFramebuffer(),N=new jD(R),q=new F3,re=new P3(R,tt,F,q,_,we,N),ye=new ZD(A),xe=new eE(R),Re=new UD(R,xe),j=new JD(R,xe,N,Re),V=new eL(R,j,xe,Re,N),P=new $D(R,_,re),me=new zD(q),ue=new g3(A,ye,tt,_,Re,me),Te=new O3(A,q),D=new S3,Pe=new T3(tt),ve=new kD(A,ye,F,V,m,l),ge=new D3(A,V,_),de=new z3(R,N,_,F),Se=new ND(R,tt,N),ne=new QD(R,tt,N),N.programs=ue.programs,A.capabilities=_,A.extensions=tt,A.properties=q,A.renderLists=D,A.shadowMap=ge,A.state=F,A.info=N}v!==Do&&(w=new aL(v,a.width,a.height,i,n,r));let qe=new Wg(A,R);this.xr=qe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(lt,ee,!1))},this.getSize=function(M){return M.set(lt,ee)},this.setSize=function(M,E,Z=!0){if(qe.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,ee=E,a.width=Math.floor(M*te),a.height=Math.floor(E*te),Z===!0&&(a.style.width=M+"px",a.style.height=E+"px"),w!==null&&w.setSize(a.width,a.height),this.setViewport(0,0,M,E)},this.getDrawingBufferSize=function(M){return M.set(lt*te,ee*te).floor()},this.setDrawingBufferSize=function(M,E,Z){lt=M,ee=E,te=Z,a.width=Math.floor(M*Z),a.height=Math.floor(E*Z),this.setViewport(0,0,M,E)},this.setEffects=function(M){if(v===Do){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let E=0;E<M.length;E++)if(M[E].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(oe)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,E,Z,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,E,Z,k),F.viewport(oe.copy(Me).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,E,Z,k){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,E,Z,k),F.scissor(De.copy(Ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){F.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Ke=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,E=!0,Z=!0){let k=0;if(M){let Y=!1;if(se!==null){let _e=se.texture.format;Y=I.has(_e)}if(Y){let _e=se.texture.type,Fe=p.has(_e),Le=ve.getClearColor(),He=ve.getClearAlpha(),et=Le.r,dt=Le.g,ct=Le.b;Fe?(g[0]=et,g[1]=dt,g[2]=ct,g[3]=He,R.clearBufferuiv(R.COLOR,0,g)):(y[0]=et,y[1]=dt,y[2]=ct,y[3]=He,R.clearBufferiv(R.COLOR,0,y))}else k|=R.COLOR_BUFFER_BIT}E&&(k|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),X=M},this.dispose=function(){a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",xt,!1),a.removeEventListener("webglcontextcreationerror",_a,!1),ve.dispose(),D.dispose(),Pe.dispose(),q.dispose(),ye.dispose(),V.dispose(),Re.dispose(),de.dispose(),ue.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",st),qe.removeEventListener("sessionend",rt),bt.stop()};function vt(M){M.preventDefault(),_g("WebGLRenderer: Context Lost."),L=!0}function xt(){_g("WebGLRenderer: Context Restored."),L=!1;let M=N.autoReset,E=ge.enabled,Z=ge.autoUpdate,k=ge.needsUpdate,Y=ge.type;Ve(),N.autoReset=M,ge.enabled=E,ge.autoUpdate=Z,ge.needsUpdate=k,ge.type=Y}function _a(M){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function da(M){let E=M.target;E.removeEventListener("dispose",da),Ca(E)}function Ca(M){Dn(M),q.remove(M)}function Dn(M){let E=q.get(M).programs;E!==void 0&&(E.forEach(function(Z){ue.releaseProgram(Z)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,E,Z,k,Y,_e){E===null&&(E=Xe);let Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=pt(M,E,Z,k,Y);F.setMaterial(k,Fe);let He=Z.index,et=1;if(k.wireframe===!0){if(He=j.getWireframeAttribute(Z),He===void 0)return;et=2}let dt=Z.drawRange,ct=Z.attributes.position,Je=dt.start*et,gt=(dt.start+dt.count)*et;_e!==null&&(Je=Math.max(Je,_e.start*et),gt=Math.min(gt,(_e.start+_e.count)*et)),He!==null?(Je=Math.max(Je,0),gt=Math.min(gt,He.count)):ct!=null&&(Je=Math.max(Je,0),gt=Math.min(gt,ct.count));let Ot=gt-Je;if(Ot<0||Ot===1/0)return;Re.setup(Y,k,Le,Z,He);let ft,Tt=Se;if(He!==null&&(ft=xe.get(He),Tt=ne,Tt.setIndex(ft)),Y.isMesh)k.wireframe===!0?(F.setLineWidth(k.wireframeLinewidth*Be()),Tt.setMode(R.LINES)):Tt.setMode(R.TRIANGLES);else if(Y.isLine){let fa=k.linewidth;fa===void 0&&(fa=1),F.setLineWidth(fa*Be()),Y.isLineSegments?Tt.setMode(R.LINES):Y.isLineLoop?Tt.setMode(R.LINE_LOOP):Tt.setMode(R.LINE_STRIP)}else Y.isPoints?Tt.setMode(R.POINTS):Y.isSprite&&Tt.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let fa=Y._multiDrawStarts,We=Y._multiDrawCounts,Qt=Y._multiDrawCount,St=He?xe.get(He).bytesPerElement:1,jt=q.get(k).currentProgram.getUniforms();for(let pa=0;pa<Qt;pa++)jt.setValue(R,"_gl_DrawID",pa),Tt.render(fa[pa]/St,We[pa])}else if(Y.isInstancedMesh)Tt.renderInstances(Je,Ot,Y.count);else if(Z.isInstancedBufferGeometry){let fa=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,We=Math.min(Z.instanceCount,fa);Tt.renderInstances(Je,Ot,We)}else Tt.render(Je,Ot)};function dn(M,E,Z,k){X!==null&&M.isNodeMaterial&&X.setObject(k,M),le===!0&&me.setState(M,Z,!1),M.transparent===!0&&M.side===Jo&&M.forceSinglePass===!1?(M.side=So,M.needsUpdate=!0,W(M,E,k),M.side=Ts,M.needsUpdate=!0,W(M,E,k),M.side=Jo):W(M,E,k)}this.compile=function(M,E,Z=null){Z===null&&(Z=M),X!==null&&X.renderStart(M,E,Z),C=Pe.get(Z),C.init(E),S.push(C),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(E.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),M!==Z&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(E.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights(),X!==null&&X.updateLights(C.state.lightsArray),Ie=this.localClippingEnabled,le=me.init(this.clippingPlanes,Ie),le===!0&&me.setGlobalState(this.clippingPlanes,E),X!==null&&ge.render(C.state.shadowsArray,Z,E);let k=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let _e=Y.material;if(_e)if(Array.isArray(_e))for(let Fe=0;Fe<_e.length;Fe++){let Le=_e[Fe];dn(Le,Z,E,Y),k.add(Le)}else dn(_e,Z,E,Y),k.add(_e)}),C=S.pop(),X!==null&&X.renderEnd(),k},this.compileAsync=function(M,E,Z=null){let k=this.compile(M,E,Z);return new Promise(Y=>{function _e(){if(k.forEach(function(Fe){let He=q.get(Fe).currentProgram;(He===void 0||He.isReady())&&k.delete(Fe)}),k.size===0){Y(M);return}setTimeout(_e,10)}tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let pn=null;function ze(M){pn&&pn(M)}function st(){bt.stop()}function rt(){bt.start()}let bt=new M_;bt.setAnimationLoop(ze),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(M){pn=M,qe.setAnimationLoop(M),M===null?bt.stop():bt.start()},qe.addEventListener("sessionstart",st),qe.addEventListener("sessionend",rt),this.render=function(M,E){if(E!==void 0&&E.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;X!==null&&X.renderStart(M,E);let Z=qe.enabled===!0&&qe.isPresenting===!0,k=w!==null&&(se===null||Z)&&w.begin(A,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(E),E=qe.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,E,se),C=Pe.get(M,S.length),C.init(E),C.state.textureUnits=re.getTextureUnits(),S.push(C),ie.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),$.setFromProjectionMatrix(ie,Cn,E.reversedDepth),Ie=this.localClippingEnabled,le=me.init(this.clippingPlanes,Ie),b=D.get(M,T.length),b.init(),T.push(b),qe.enabled===!0&&qe.isPresenting===!0){let Fe=A.xr.getDepthSensingMesh();Fe!==null&&Ut(Fe,E,-1/0,A.sortObjects)}Ut(M,E,0,A.sortObjects),b.finish(),X!==null&&X.updateLights(C.state.lightsArray),A.sortObjects===!0&&b.sort(Ee,Ke),Ne=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ne&&ve.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&me.beginShadows();let Y=C.state.shadowsArray;if(ge.render(Y,M,E),le===!0&&me.endShadows(),(k&&w.hasRenderPass())===!1){let Fe=b.opaque,Le=b.transmissive;if(C.setupLights(),E.isArrayCamera){let He=E.cameras;if(Le.length>0)for(let et=0,dt=He.length;et<dt;et++){let ct=He[et];Pa(Fe,Le,M,ct)}Ne&&ve.render(M);for(let et=0,dt=He.length;et<dt;et++){let ct=He[et];ca(b,M,ct,ct.viewport)}}else Le.length>0&&Pa(Fe,Le,M,E),Ne&&ve.render(M),ca(b,M,E)}se!==null&&J===0&&(re.updateMultisampleRenderTarget(se),re.updateRenderTargetMipmap(se)),k&&w.end(A),M.isScene===!0&&M.onAfterRender(A,M,E),Re.resetDefaultState(),G=-1,K=null,S.pop(),S.length>0?(C=S[S.length-1],re.setTextureUnits(C.state.textureUnits),le===!0&&me.setGlobalState(A.clippingPlanes,C.state.camera)):C=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,X!==null&&X.renderEnd()};function Ut(M,E,Z,k){if(M.visible===!1)return;if(M.layers.test(E.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(E);else if(M.isLightProbeGrid)C.pushLightProbeGrid(M);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($)){k&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);let Fe=V.update(M),Le=M.material;Le.visible&&b.push(M,Fe,Le,Z,be.z,null,E)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($))){let Fe=V.update(M),Le=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),be.copy(Fe.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(Le)){let He=Fe.groups;for(let et=0,dt=He.length;et<dt;et++){let ct=He[et],Je=Le[ct.materialIndex];Je&&Je.visible&&b.push(M,Fe,Je,Z,be.z,ct,E)}}else Le.visible&&b.push(M,Fe,Le,Z,be.z,null,E)}}let _e=M.children;for(let Fe=0,Le=_e.length;Fe<Le;Fe++)Ut(_e[Fe],E,Z,k)}function ca(M,E,Z,k){let{opaque:Y,transmissive:_e,transparent:Fe}=M;C.setupLightsView(Z),le===!0&&me.setGlobalState(A.clippingPlanes,Z),k&&F.viewport(oe.copy(k)),Y.length>0&&Nt(Y,E,Z),_e.length>0&&Nt(_e,E,Z),Fe.length>0&&Nt(Fe,E,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Pa(M,E,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[k.id]===void 0){let Je=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[k.id]=new Ro(1,1,{generateMipmaps:!0,type:Je?En:Do,minFilter:tr,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let _e=C.state.transmissionRenderTarget[k.id],Fe=k.viewport||oe;_e.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);let Le=A.getRenderTarget(),He=A.getActiveCubeFace(),et=A.getActiveMipmapLevel();A.setRenderTarget(_e),A.getClearColor($e),H=A.getClearAlpha(),H<1&&A.setClearColor(16777215,.5),A.clear(),Ne&&ve.render(Z);let dt=A.toneMapping;A.toneMapping=Tn;let ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),C.setupLightsView(k),le===!0&&me.setGlobalState(A.clippingPlanes,k),Nt(M,Z,k),re.updateMultisampleRenderTarget(_e),re.updateRenderTargetMipmap(_e),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let gt=0,Ot=E.length;gt<Ot;gt++){let ft=E[gt],{object:Tt,geometry:fa,material:We,group:Qt}=ft;if(We.side===Jo&&Tt.layers.test(k.layers)){let St=We.side;We.side=So,We.needsUpdate=!0,ut(Tt,Z,k,fa,We,Qt),We.side=St,We.needsUpdate=!0,Je=!0}}Je===!0&&(re.updateMultisampleRenderTarget(_e),re.updateRenderTargetMipmap(_e))}A.setRenderTarget(Le,He,et),A.setClearColor($e,H),ct!==void 0&&(k.viewport=ct),A.toneMapping=dt}function Nt(M,E,Z){let k=E.isScene===!0?E.overrideMaterial:null;for(let Y=0,_e=M.length;Y<_e;Y++){let Fe=M[Y],{object:Le,geometry:He,group:et}=Fe,dt=Fe.material;dt.allowOverride===!0&&k!==null&&(dt=k),Le.layers.test(Z.layers)&&ut(Le,E,Z,He,dt,et)}}function ut(M,E,Z,k,Y,_e){X!==null&&Y.isNodeMaterial&&X.setObject(M,Y),M.onBeforeRender(A,E,Z,k,Y,_e),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(A,E,Z,k,M,_e),Y.transparent===!0&&Y.side===Jo&&Y.forceSinglePass===!1?(Y.side=So,Y.needsUpdate=!0,A.renderBufferDirect(Z,E,k,Y,M,_e),Y.side=Ts,Y.needsUpdate=!0,A.renderBufferDirect(Z,E,k,Y,M,_e),Y.side=Jo):A.renderBufferDirect(Z,E,k,Y,M,_e),M.onAfterRender(A,E,Z,k,Y,_e)}function W(M,E,Z){E.isScene!==!0&&(E=Xe);let k=q.get(M),Y=C.state.lights,_e=C.state.shadowsArray,Fe=Y.state.version,Le=ue.getParameters(M,Y.state,_e,E,Z,C.state.lightProbeGridArray),He=ue.getProgramCacheKey(Le),et=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?E.environment:null,k.fog=E.fog;let dt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ye.get(M.envMap||k.environment,dt),k.envMapRotation=k.environment!==null&&M.envMap===null?E.environmentRotation:M.envMapRotation,et===void 0&&(M.addEventListener("dispose",da),et=new Map,k.programs=et);let ct=et.get(He);if(ct!==void 0){if(k.currentProgram===ct&&k.lightsStateVersion===Fe)return he(M,Le),ct}else Le.uniforms=ue.getUniforms(M),X!==null&&M.isNodeMaterial&&X.build(M,Z,Le),M.onBeforeCompile(Le,A),ct=ue.acquireProgram(Le,He),et.set(He,ct),k.uniforms=Le.uniforms;let Je=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Je.clippingPlanes=me.uniform),he(M,Le),k.needsLights=ce(M),k.lightsStateVersion=Fe,k.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.sunLights.value=Y.state.sun,Je.sunLightShadows.value=Y.state.sunShadow,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.sunShadowMatrix.value=Y.state.sunShadowMatrix,Je.sunShadowCascade.value=Y.state.sunShadowCascade,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),k.lightProbeGrid=C.state.lightProbeGridArray.length>0,k.currentProgram=ct,k.uniformsList=null,ct}function Q(M){if(M.uniformsList===null){let E=M.currentProgram.getUniforms();M.uniformsList=lc.seqWithValue(E.seq,M.uniforms)}return M.uniformsList}function he(M,E){let Z=q.get(M);Z.outputColorSpace=E.outputColorSpace,Z.batching=E.batching,Z.batchingColor=E.batchingColor,Z.instancing=E.instancing,Z.instancingColor=E.instancingColor,Z.instancingMorph=E.instancingMorph,Z.skinning=E.skinning,Z.morphTargets=E.morphTargets,Z.morphNormals=E.morphNormals,Z.morphColors=E.morphColors,Z.morphTargetsCount=E.morphTargetsCount,Z.numClippingPlanes=E.numClippingPlanes,Z.numIntersection=E.numClipIntersection,Z.vertexAlphas=E.vertexAlphas,Z.vertexTangents=E.vertexTangents,Z.toneMapping=E.toneMapping}function Oe(M,E){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(E.matrixWorld);for(let Z=0,k=M.length;Z<k;Z++){let Y=M[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function pt(M,E,Z,k,Y){E.isScene!==!0&&(E=Xe),re.resetTextureUnits();let _e=E.fog,Fe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?E.environment:null,Le=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:kt.workingColorSpace,He=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,et=ye.get(k.envMap||Fe,He),dt=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ct=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Je=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color,ft=Tn;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=A.toneMapping);let Tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fa=Tt!==void 0?Tt.length:0,We=q.get(k),Qt=C.state.lights;if(le===!0&&(Ie===!0||M!==K)){let Ae=M===K&&k.id===G;me.setState(k,M,Ae)}let St=!1;k.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Qt.state.version||We.outputColorSpace!==Le||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isBatchedMesh&&We.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&We.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==et||k.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==me.numPlanes||We.numIntersection!==me.numIntersection)||We.vertexAlphas!==dt||We.vertexTangents!==ct||We.morphTargets!==Je||We.morphNormals!==gt||We.morphColors!==Ot||We.toneMapping!==ft||We.morphTargetsCount!==fa||!!We.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,We.__version=k.version);let jt=We.currentProgram;St===!0&&(jt=W(k,E,Y),X&&k.isNodeMaterial&&X.onUpdateProgram(k,jt,We));let pa=!1,Ta=!1,Ya=!1,Ht=jt.getUniforms(),at=We.uniforms;if(F.useProgram(jt.program)&&(pa=!0,Ta=!0,Ya=!0),k.id!==G&&(G=k.id,Ta=!0),We.needsLights){let Ae=Oe(C.state.lightProbeGridArray,Y);We.lightProbeGrid!==Ae&&(We.lightProbeGrid=Ae,Ta=!0)}if(pa||K!==M){F.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ht.setValue(R,"projectionMatrix",M.projectionMatrix),Ht.setValue(R,"viewMatrix",M.matrixWorldInverse);let At=Ht.map.cameraPosition;At!==void 0&&At.setValue(R,fe.setFromMatrixPosition(M.matrixWorld)),_.logarithmicDepthBuffer&&Ht.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ht.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Ta=!0,Ya=!0)}if(We.needsLights&&(Qt.state.sunShadowMap.length>0&&Ht.setValue(R,"sunShadowMap",Qt.state.sunShadowMap,re),Qt.state.directionalShadowMap.length>0&&Ht.setValue(R,"directionalShadowMap",Qt.state.directionalShadowMap,re),Qt.state.spotShadowMap.length>0&&Ht.setValue(R,"spotShadowMap",Qt.state.spotShadowMap,re),Qt.state.pointShadowMap.length>0&&Ht.setValue(R,"pointShadowMap",Qt.state.pointShadowMap,re)),Y.isSkinnedMesh){Ht.setOptional(R,Y,"bindMatrix"),Ht.setOptional(R,Y,"bindMatrixInverse");let Ae=Y.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Ht.setValue(R,"boneTexture",Ae.boneTexture,re))}Y.isBatchedMesh&&(Ht.setOptional(R,Y,"batchingTexture"),Ht.setValue(R,"batchingTexture",Y._matricesTexture,re),Ht.setOptional(R,Y,"batchingIdTexture"),Ht.setValue(R,"batchingIdTexture",Y._indirectTexture,re),Ht.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(R,"batchingColorTexture",Y._colorsTexture,re));let Sa=Z.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&P.update(Y,Z,jt),(Ta||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Ht.setValue(R,"receiveShadow",Y.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&E.environment!==null&&(at.envMapIntensity.value=E.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=V3()),Ta){if(Ht.setValue(R,"toneMappingExposure",A.toneMappingExposure),We.needsLights&&zt(at,Ya),_e&&k.fog===!0&&Te.refreshFogUniforms(at,_e),Te.refreshMaterialUniforms(at,k,te,ee,C.state.transmissionRenderTarget[M.id]),We.needsLights&&We.lightProbeGrid){let Ae=We.lightProbeGrid;at.probesSH.value=Ae.texture,at.probesMin.value.copy(Ae.boundingBox.min),at.probesMax.value.copy(Ae.boundingBox.max),at.probesResolution.value.copy(Ae.resolution)}lc.upload(R,Q(We),at,re)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(lc.upload(R,Q(We),at,re),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ht.setValue(R,"center",Y.center),Ht.setValue(R,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(R,"normalMatrix",Y.normalMatrix),Ht.setValue(R,"modelMatrix",Y.matrixWorld),k.uniformsGroups!==void 0){let Ae=k.uniformsGroups;for(let At=0,Pt=Ae.length;At<Pt;At++){let ya=Ae[At];de.update(ya,jt),de.bind(ya,jt)}}return jt}function zt(M,E){M.ambientLightColor.needsUpdate=E,M.lightProbe.needsUpdate=E,M.sunLights.needsUpdate=E,M.sunLightShadows.needsUpdate=E,M.directionalLights.needsUpdate=E,M.directionalLightShadows.needsUpdate=E,M.pointLights.needsUpdate=E,M.pointLightShadows.needsUpdate=E,M.spotLights.needsUpdate=E,M.spotLightShadows.needsUpdate=E,M.rectAreaLights.needsUpdate=E,M.hemisphereLights.needsUpdate=E}function ce(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,E,Z){let k=q.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=E,q.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,E){let Z=q.get(M);Z.__webglFramebuffer=E,Z.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(M,E=0,Z=0){se=M,ae=E,J=Z;let k=null,Y=!1,_e=!1;if(M){let Le=q.get(M);if(Le.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(R.FRAMEBUFFER,Le.__webglFramebuffer),oe.copy(M.viewport),De.copy(M.scissor),Ce=M.scissorTest,F.viewport(oe),F.scissor(De),F.setScissorTest(Ce),G=-1;return}else if(Le.__webglFramebuffer===void 0)re.setupRenderTarget(M);else if(Le.__hasExternalTextures)re.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let dt=M.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&q.has(dt)&&(M.width!==dt.image.width||M.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(M)}}let He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);let et=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(et[E])?k=et[E][Z]:k=et[E],Y=!0):M.samples>0&&re.useMultisampledRTT(M)===!1?k=q.get(M).__webglMultisampledFramebuffer:Array.isArray(et)?k=et[Z]:k=et,oe.copy(M.viewport),De.copy(M.scissor),Ce=M.scissorTest}else oe.copy(Me).multiplyScalar(te).floor(),De.copy(Ye).multiplyScalar(te).floor(),Ce=Qe;if(Z!==0&&(k=z),F.bindFramebuffer(R.FRAMEBUFFER,k)&&F.drawBuffers(M,k),F.viewport(oe),F.scissor(De),F.setScissorTest(Ce),Y){let Le=q.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+E,Le.__webglTexture,Z)}else if(_e){let Le=E;for(let He=0;He<M.textures.length;He++){let et=q.get(M.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,et.__webglTexture,Z,Le)}}else if(M!==null&&Z!==0){let Le=q.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,Z)}G=-1};function Ge(M){let E=q.get(M);return(E.__readFormat!==M.format||E.__readType!==M.type)&&(E.__readFormat=M.format,E.__readType=M.type,E.__formatReadable=_.textureFormatReadable(M.format),E.__typeReadable=_.textureTypeReadable(M.type)),E}this.readRenderTargetPixels=function(M,E,Z,k,Y,_e,Fe,Le=0){if(!(M&&M.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){F.bindFramebuffer(R.FRAMEBUFFER,He);try{let et=M.textures[Le],dt=et.format,ct=et.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let Je=Ge(et);if(Je.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=M.width-k&&Z>=0&&Z<=M.height-Y&&R.readPixels(E,Z,k,Y,we.convert(dt),we.convert(ct),_e)}finally{let et=se!==null?q.get(se).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(M,E,Z,k,Y,_e,Fe,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(E>=0&&E<=M.width-k&&Z>=0&&Z<=M.height-Y){F.bindFramebuffer(R.FRAMEBUFFER,He);let et=M.textures[Le],dt=et.format,ct=et.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let Je=Ge(et);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,gt),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),R.readPixels(E,Z,k,Y,we.convert(dt),we.convert(ct),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Ot=se!==null?q.get(se).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,Ot);let ft=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Xb(R,ft,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,gt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(gt),R.deleteSync(ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,E=null,Z=0){let k=Math.pow(2,-Z),Y=Math.floor(M.image.width*k),_e=Math.floor(M.image.height*k),Fe=E!==null?E.x:0,Le=E!==null?E.y:0;re.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Fe,Le,Y,_e),F.unbindTexture()},this.copyTextureToTexture=function(M,E,Z=null,k=null,Y=0,_e=0){let Fe,Le,He,et,dt,ct,Je,gt,Ot,ft=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(Z!==null)Fe=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,et=Z.min.x,dt=Z.min.y,ct=Z.isBox3?Z.min.z:0;else{let at=Math.pow(2,-Y);Fe=Math.floor(ft.width*at),Le=Math.floor(ft.height*at),M.isDataArrayTexture?He=ft.depth:M.isData3DTexture?He=Math.floor(ft.depth*at):He=1,et=0,dt=0,ct=0}k!==null?(Je=k.x,gt=k.y,Ot=k.z):(Je=0,gt=0,Ot=0);let Tt=we.convert(E.format),fa=we.convert(E.type),We;E.isData3DTexture?(re.setTexture3D(E,0),We=R.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(re.setTexture2DArray(E,0),We=R.TEXTURE_2D_ARRAY):(re.setTexture2D(E,0),We=R.TEXTURE_2D),F.activeTexture(R.TEXTURE0),F.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,E.flipY),F.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),F.pixelStorei(R.UNPACK_ALIGNMENT,E.unpackAlignment);let Qt=F.getParameter(R.UNPACK_ROW_LENGTH),St=F.getParameter(R.UNPACK_IMAGE_HEIGHT),jt=F.getParameter(R.UNPACK_SKIP_PIXELS),pa=F.getParameter(R.UNPACK_SKIP_ROWS),Ta=F.getParameter(R.UNPACK_SKIP_IMAGES);F.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(R.UNPACK_SKIP_PIXELS,et),F.pixelStorei(R.UNPACK_SKIP_ROWS,dt),F.pixelStorei(R.UNPACK_SKIP_IMAGES,ct);let Ya=M.isDataArrayTexture||M.isData3DTexture,Ht=E.isDataArrayTexture||E.isData3DTexture;if(M.isDepthTexture){let at=q.get(M),Sa=q.get(E),Ae=q.get(at.__renderTarget),At=q.get(Sa.__renderTarget);F.bindFramebuffer(R.READ_FRAMEBUFFER,Ae.__webglFramebuffer),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Pt=0;Pt<He;Pt++)Ya&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(M).__webglTexture,Y,ct+Pt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(E).__webglTexture,_e,Ot+Pt)),R.blitFramebuffer(et,dt,Fe,Le,Je,gt,Fe,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||q.has(M)){let at=q.get(M),Sa=q.get(E);F.bindFramebuffer(R.READ_FRAMEBUFFER,B),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,U);for(let Ae=0;Ae<He;Ae++)Ya?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,at.__webglTexture,Y,ct+Ae):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,at.__webglTexture,Y),Ht?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Sa.__webglTexture,_e,Ot+Ae):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Sa.__webglTexture,_e),Y!==0?R.blitFramebuffer(et,dt,Fe,Le,Je,gt,Fe,Le,R.COLOR_BUFFER_BIT,R.NEAREST):Ht?R.copyTexSubImage3D(We,_e,Je,gt,Ot+Ae,et,dt,Fe,Le):R.copyTexSubImage2D(We,_e,Je,gt,et,dt,Fe,Le);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ht?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,fa,ft.data):E.isCompressedArrayTexture?R.compressedTexSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,ft.data):R.texSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,fa,ft):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,Je,gt,Fe,Le,Tt,fa,ft.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,Je,gt,ft.width,ft.height,Tt,ft.data):R.texSubImage2D(R.TEXTURE_2D,_e,Je,gt,Fe,Le,Tt,fa,ft);F.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),F.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St),F.pixelStorei(R.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(R.UNPACK_SKIP_ROWS,pa),F.pixelStorei(R.UNPACK_SKIP_IMAGES,Ta),_e===0&&E.generateMipmaps&&R.generateMipmap(We),F.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&re.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?re.setTextureCube(M,0):M.isData3DTexture?re.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?re.setTexture2DArray(M,0):re.setTexture2D(M,0),F.unbindTexture()},this.resetState=function(){ae=0,J=0,se=null,F.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),a.unpackColorSpace=kt._getUnpackColorSpace()}};var E_=`.lanyard {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
  overflow: hidden;\r
}\r
\r
.lanyard-canvas {\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
}\r
`;var R_={portrait:[1.32,2.25],landscape:[2.25,1.32]},W3={left:.27,center:.5,right:.73},iu=.018,yo=.007,La=4,D_=1/.05,X3=1/960,Y3=2,Rr=72,L_=24,Xg=.36,Qg=.095,Z3=.0135,tm=.036,ru=.15,P_=1024,B_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},am=[0,.07,.93,1],K3=[-.95,-.28,.28,.95],J3=9,Q3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,j3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,$3=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,eP=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,k_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Fi=(t,e,a)=>Math.min(a,Math.max(e,t)),om=(t,e,a)=>t+(e-t)*a,Yg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},tP=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],nm=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,H_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Jg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},rm=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=async()=>{try{await r.decode()}catch{}n(r)},r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},sm=new Map,jg=t=>Promise.all(t.map(e=>rm(sm,e))),U_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:R_[t]||R_.portrait,r=om(.03,Math.min(o,n)*.2,Fi(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Qg}},aP=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new ys;Jg(r,-e/2+yo,-a/2+yo,e-yo*2,a-yo*2,Math.max(o-yo,.005));let s=new di;Jg(s,-n.width/2-yo,n.y-n.height/2-yo,n.width+yo*2,n.height+yo*2,n.height/2+yo),r.holes.push(s);let i=new Jl(r,{depth:iu,bevelEnabled:!0,bevelThickness:yo,bevelSize:yo,bevelSegments:5,curveSegments:24});i.translate(0,0,-iu/2);let l=new Vf(r,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let h=0;h<c.count;h++)u.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return u.needsUpdate=!0,{body:i,face:l}},N_=t=>{let e=new ys,a=t*1.16;Jg(e,-a/2+.014,-ru/2+.014,a-.028,ru-.028,.024);let o=new Jl(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},oP=t=>{let e=am.length,a=new vo;a.setAttribute("position",new lo(new Float32Array(t*e*3),3)),a.setAttribute("normal",new lo(new Float32Array(t*e*3),3)),a.setAttribute("uv",new lo(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},nP=t=>{let e=new Vl;e.background=new _t(.035,.035,.04);let a=new hi(1,1),o=[],n=(i,l,c,u=0)=>{let h=new fi({color:new _t(i,i,i),side:Jo});o.push(h);let f=new ba(a,h);f.position.set(...l),f.scale.set(c[0],c[1],1),f.lookAt(0,0,0),f.rotateZ(u),e.add(f)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new cc(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},Zg=(t,e)=>{let a=new ui(t);return a.colorSpace=to,a.anisotropy=e,a},rP=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new ui(e);let o=H_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let u=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)u+=n[(c+h+128)%128*128+(l+f+128)%128];return u/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),f=Math.hypot(u,h,1),d=(l*128+c)*4;s.data[d]=(u/f*.5+.5)*255,s.data[d+1]=(h/f*.5+.5)*255,s.data[d+2]=(1/f*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new ui(e);return i.wrapS=Qn,i.wrapT=Qn,i.repeat.set(5,7),i},sP=()=>{let a=H_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let u=(l%128+128)%128,h=(c%128+128)%128,f=u/128*8,d=h/128*8,m=Math.floor(f),v=Math.floor(d),I=f-m-.5,p=d-v-.5,g=(m+v)%2===0,y=n(I)*(.55+.45*Math.cos(p*Math.PI*(g?1:.6))),x=n(p)*(.55+.45*Math.cos(I*Math.PI*(g?.6:1)));return(g?Math.max(y,x*.7):Math.max(x,y*.7))+o[h*128+u]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,f=Math.hypot(u,h,1),d=(l*128+c)*4;s[d]=(u/f*.5+.5)*255,s[d+1]=(h/f*.5+.5)*255,s[d+2]=(1/f*.5+.5)*255,s[d+3]=255}let i=new ql(s,128,128);return i.wrapS=Qn,i.wrapT=Qn,i.magFilter=Na,i.minFilter=tr,i.generateMipmaps=!0,i.needsUpdate=!0,i},su=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},iP=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Qg),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},O_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=su(e,.98,.02),s=su(e,.05,.02),i=su(e,.5,.02);if(!r||!s)return;let l=x=>{let b=x.match(/[\d.]+/g);return b?[Number(b[0]),Number(b[1]),Number(b[2])]:[255,255,255]},c=l(s),u=l(r),h=i?l(i):c;if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),m=Math.hypot(u[0]-h[0],u[1]-h[1],u[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&m>40){let x=t.createLinearGradient(0,0,a,0);x.addColorStop(0,s),x.addColorStop(1,r),t.fillStyle=x,t.fillRect(0,0,a,o+2);return}let I=1254/1495,p=.42;try{let x=document.createElement("canvas");x.width=100,x.height=20;let b=x.getContext("2d",{willReadFrequently:!0});if(b){b.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let C=b.getImageData(0,0,100,1).data,T=b.getImageData(0,19,100,1).data,S=C[98*4],w=C[98*4+1],A=C[98*4+2],L=-1,X=-1;for(let z=98;z>=0;z--){let B=z*4;if(Math.hypot(C[B]-S,C[B+1]-w,C[B+2]-A)>40){L=z+1;break}}for(let z=98;z>=0;z--){let B=z*4;if(Math.hypot(T[B]-S,T[B+1]-w,T[B+2]-A)>40){X=z+1;break}}if(L>50&&L<98&&(I=L/100,X>0)){let z=Math.min(e.height*.1,200)*.95,B=(X-L)/100*e.width;z>0&&(p=Math.max(0,Math.min(1.5,B/z)))}}}catch{}let g=a*I,y=g-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(y,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(g,o+2),t.closePath(),t.fill(),t.restore()}catch{}},lP=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let u=o-l;O_(t,e,a,u,i),t.drawImage(e,0,u,a,l)}else{let c=Math.min(a/e.width,s/e.height),u=e.width*c,h=e.height*c,f=(a-u)/2,d=o-h;O_(t,e,a,d,c),t.drawImage(e,f,d,u,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},z_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?iP(n,t.height,s):0,c=e?su(e,.05,.02):null;if(i.fillStyle=c||nm(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let u=su(e,.05,.98);u&&u!==c&&(i.fillStyle=u,i.fillRect(0,t.height-30,t.width,30))}lP(i,e,t.width,t.height,o,l)}},cP=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=nm(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=tP(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=nm(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=nm(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},fP=()=>{let t=()=>Array.from({length:La+1},()=>new O);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(La),impulses:new Float64Array(La),rest:1,anchor:new O,body:{position:new O,previous:new O,velocity:new O,quaternion:new xo,previousQuaternion:new xo,angular:new O,mass:1,inverseInertia:new O(1,1,1),hang:new O},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Jt={a:new O,b:new O,c:new O,d:new O,e:new O,f:new O,g:new O,pin:new O,q:new xo,r:new xo},$g=(t,e,a)=>(Jt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(Jt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),V_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},G_=(t,e,a)=>{let o=Jt.c.crossVectors(e,a);return 1/t.mass+o.dot($g(t,o,Jt.d))},q_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),V_(t.quaternion,$g(t,Jt.e.crossVectors(e,a),Jt.f))},uP=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:D_,l=e===La-1,c=Jt.g,u=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),u=Jt.b.copy(r.position).add(c));let h=Jt.a.subVectors(u,s),f=h.length(),d=f-t.rest;if(d<=0||f<1e-9)return;let m=h.divideScalar(f),v=l?G_(r,c,m):D_,I=(f-t.lengths[e])/a,g=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,I))*a*a-t.impulses[e];if(g<=0)return;let y=Math.min(d/(i+v),g);t.impulses[e]+=y,i&&s.addScaledVector(m,y*i),l?q_(r,c,m.multiplyScalar(-y)):u.addScaledVector(m,-y*v)},dP=(t,e,a)=>{let o=Jt.g.copy(e.local).applyQuaternion(t.quaternion),n=Jt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/G_(t,o,s);q_(t,o,s.multiplyScalar(i))},Kg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=La;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=Jt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[La]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=La;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},pP=(t,e,a)=>{t.rest=a/La;let{width:o,height:n}=e,r=t.body,s=iu+yo*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},hP=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/X3-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,u=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,f=t.grab,d=Jt.pin,m=Math.exp(-a.nodeDrag*r),v=Math.exp(-a.linearDrag*r),I=Math.exp(-a.angularDrag*r);for(let g=0;g<n;g++){for(let A=1;A<La;A++){let L=l[A];L.y-=a.gravity*r,L.x+=u*r,L.z+=h*r,i[A].copy(s[A]),s[A].addScaledVector(L,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let y=c.quaternion;if(f){let A=Jt.q.copy(f.rotation).multiply(Jt.r.copy(y).invert());A.w<0&&A.set(-A.x,-A.y,-A.z,-A.w);let L=Jt.a.set(A.x,A.y,A.z).multiplyScalar(2*a.grip);L.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector($g(c,L,Jt.b),r)}let x=Jt.a.set(0,1,0).applyQuaternion(y),b=Jt.b.set(-x.x*x.z,-x.y*x.z,1-x.z*x.z);if(b.lengthSq()>.001){let A=Jt.d.set(0,0,1).applyQuaternion(y),L=Math.atan2(Jt.e.crossVectors(b,A).dot(x),b.dot(A)),X=L-t.twistRaw;X>Math.PI?X-=Math.PI*2:X<-Math.PI&&(X+=Math.PI*2),t.twist+=X,t.twistRaw=L}if(!f){let A=c.angular.dot(x);c.angular.addScaledVector(x,(a.twist*(t.turn-t.twist)-a.twistDamping*A)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=u*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),V_(c.quaternion,Jt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),f&&d.lerpVectors(f.from,f.target,(g+1)/n);for(let A=0;A<Y3;A++){for(let L=0;L<La;L++)uP(t,L,r,a);f&&dP(c,f,d)}for(let A=1;A<La;A++){let L=l[A].subVectors(s[A],i[A]).divideScalar(r).multiplyScalar(m);L.multiplyScalar(1/(1+a.nodeAir*L.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let C=Jt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(C.x,C.y,C.z).multiplyScalar(2/r*(C.w<0?-1:1));let T=Jt.a.set(0,0,1).applyQuaternion(c.quaternion),S=c.velocity.dot(T),w=Jt.b.copy(c.velocity).addScaledVector(T,-S);w.multiplyScalar(1/(1+a.air*w.length()*r)),c.velocity.copy(w).addScaledVector(T,S/(1+a.broadside*Math.abs(S)*r)).multiplyScalar(v),c.angular.multiplyScalar(I/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[La].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let A=0;A<La;A++)t.lengths[A]=s[A].distanceTo(s[A+1])}f&&f.from.copy(f.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let g=1;g<La;g++)p+=l[g].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},mP=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:u="center",strapLength:h=.5,strapImage:f,strapColor:d="#111111",strapWidth:m=.65,metal:v="silver",gravity:I=1,damping:p=.5,elasticity:g=.5,breeze:y=.5,interactive:x=!0,intro:b=!0,className:C="",style:T})=>{let S=(0,vi.useRef)(null),w=(0,vi.useRef)(null),A=(0,vi.useRef)(null);return w.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:u,strapLength:h,strapImage:f,strapColor:d,strapWidth:m,metal:v,gravity:I,damping:p,elasticity:g,breeze:y,interactive:x,intro:b},(0,vi.useEffect)(()=>{A.current?.()}),(0,vi.useEffect)(()=>{let L=S.current;if(!L)return;let X;try{X=new jh({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}X.setClearColor(0,0),X.outputColorSpace=to,X.toneMapping=Yf,X.toneMappingExposure=1;let z=X.domElement;z.className="lanyard-canvas",z.setAttribute("aria-hidden","true"),L.appendChild(z);let B=Math.min(8,X.capabilities.getMaxAnisotropy()),U=new Vl,ae=nP(X);U.environment=ae.texture;let J=new io(L_,1,.1,200),se=new ec(16777215,1.6);se.position.set(-2.5,4,6);let G=new ec(16777215,.35);G.position.set(3,-1,4),U.add(se,G);let K={front:null,back:null,strap:null},oe=document.createElement("canvas"),De=document.createElement("canvas"),Ce=document.createElement("canvas"),$e=Zg(oe,B),H=Zg(De,B),lt=Zg(Ce,B);lt.wrapS=fn,lt.wrapT=Qn;let ee=rP(),te=sP(),Ee={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new O},foilFill:{value:new O},foilTop:{value:new O}},Ke=ce=>{Object.assign(ce.uniforms,Ee),ce.vertexShader=ce.vertexShader.replace("#include <common>",`#include <common>
${Q3}`).replace("#include <project_vertex>",`#include <project_vertex>
${j3}`),ce.fragmentShader=ce.fragmentShader.replace("#include <common>",`#include <common>
${$3}`).replace("#include <opaque_fragment>",`${eP}
#include <opaque_fragment>`)},Me=new Ms({map:$e,normalMap:ee,normalScale:new Ue(.06,.06)}),Ye=new Ms({map:H,normalMap:ee,normalScale:new Ue(.06,.06)});Me.onBeforeCompile=Ke,Ye.onBeforeCompile=Ke;let Qe=new Ms,$=new jl({metalness:1}),le=new Ms({map:lt,normalMap:te,normalScale:new Ue(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new _t(.32,.32,.34),side:Jo}),Ie=new Kn,ie=new ba(void 0,Qe),fe=new ba(void 0,Me),be=new ba(void 0,Ye),Xe=new ba(new Ql(Qg,Z3,18,72),$);Xe.rotation.y=Math.PI/2-.7,Ie.add(ie,fe,be,Xe),U.add(Ie);let Ne=oP(Rr),Be=new ba(Ne,le);Be.frustumCulled=!1,U.add(Be);let R=new Kn,it=new ba(N_(Xg),$);it.position.y=tm+ru/2-.004;let tt=new ba(new Ql(tm,.0105,14,40),$);R.add(it,tt),U.add(R);let _=fP(),F=[],N=new O,q=new O,re=new Zl(F,!1,"centripetal"),ye={width:1,height:1},xe=U_("portrait",.3),j={},V=Xg,ue=2,Te=0,D=performance.now(),Pe=0,me=!0,ge=!0,ve=!1,P=!1,Se=null,ne=0,we=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Re=(ce="both")=>{let Ge=w.current,M=Yg(Ge.cardColor,[1,1,1]),E=P_,Z=Math.round(P_*xe.height/xe.width);(oe.width!==E||oe.height!==Z)&&(oe.width=E,oe.height=Z,De.width=E,De.height=Z,$e.dispose(),H.dispose()),ce!=="back"&&(z_(oe,K.front,M,Ge.imageFit,xe,Ge.slotClearance,Ge.slotClearanceValue),$e.needsUpdate=!0),ce!=="front"&&(z_(De,K.back||K.front,M,Ge.imageFit,xe,Ge.slotClearance,Ge.slotClearanceValue),H.needsUpdate=!0),ze()},de=()=>{let ce=w.current,Ge=Ce.width,M=Ce.height;ue=cP(Ce,K.strap,Yg(ce.strapColor,[.07,.07,.07])),te.repeat.set(2,2*ue),(Ce.width!==Ge||Ce.height!==M)&&lt.dispose(),lt.needsUpdate=!0,ze()},Ve=()=>{let ce=w.current,Ge=ye.width/ye.height,M=Fi(ce.size??1,.2,3),E=xe.height/.72/M,Z=xe.width/.65/M;E*Ge<Z&&(E=Z/Ge);let k=E*Ge,Y=.04*E,_e=((W3[ce.anchor]??.5)-.5)*k,Fe=Y+E/2+.15,Le=Y+xe.height/2+(xe.hangY-xe.height/2);J.aspect=Ge,J.position.set(0,Y,E/2/Math.tan(L_*Math.PI/360)),J.lookAt(0,Y,0),J.updateProjectionMatrix(),J.updateMatrixWorld(),Ee.foilKey.value.set(-2.5,4,6).normalize().transformDirection(J.matrixWorldInverse),Ee.foilFill.value.set(3,-1,4).normalize().transformDirection(J.matrixWorldInverse),Ee.foilTop.value.set(.5,4.5,8).normalize().transformDirection(J.matrixWorldInverse),_.anchor.set(_e,Fe,0),pP(_,xe,Math.max(.4,Fe-Le)),_.nodes[0].copy(_.anchor),_.previous[0].copy(_.anchor)},qe=()=>{let ce=w.current,Ge=`${ce.orientation}|${ce.cornerRadius}|${JSON.stringify(ce.cardSize)}`;if(Ge!==j.layoutKey){xe=U_(ce.orientation,ce.cornerRadius,ce.cardSize);let Fe=aP(xe);ie.geometry.dispose(),fe.geometry.dispose(),be.geometry.dispose(),ie.geometry=Fe.body,fe.geometry=Fe.face,be.geometry=Fe.face.clone(),fe.position.z=iu/2+yo+6e-4,be.rotation.y=Math.PI,be.position.z=-(iu/2+yo+6e-4),Xe.position.set(0,xe.ringY,0),j.framingKey=""}let M=`${Ge}|${ce.size}|${ce.anchor}|${ce.strapLength}|${ye.width}|${ye.height}`;M!==j.framingKey&&(Ve(),ve?Ge!==j.layoutKey&&Kg(_,xe,!1):(Kg(_,xe,ce.intro&&!we),ve=!0));let E=`${ce.frontImage}|${ce.backImage}|${ce.strapImage}`;if(E!==j.imageKey){let Fe=++ne;K.front=K.back=K.strap=null;let Le=!1;rm(sm,ce.frontImage).then(He=>{!ge||Fe!==ne||(K.front=He,Re("front"),(!ce.backImage||Le)&&Re("back"))}),rm(sm,ce.backImage).then(He=>{!ge||Fe!==ne||(K.back=He,Le=!He,Re("back"))}),rm(sm,ce.strapImage).then(He=>{!ge||Fe!==ne||(K.strap=He,de())})}let Z=`${Ge}|${ce.cardColor}|${ce.imageFit}|${ce.slotClearance}|${ce.slotClearanceValue}`;Z!==j.faceKey&&Re(),ce.strapColor!==j.strapColor&&de();let k=B_[ce.finish]||B_.glossy,Y=Yg(ce.cardColor,[1,1,1]);[Me,Ye].forEach(Fe=>{Fe.roughness=k.roughness,Fe.metalness=k.metalness,Fe.clearcoat=k.clearcoat,Fe.clearcoatRoughness=k.clearcoatRoughness,Fe.anisotropy=k.anisotropy}),Ee.foilStrength.value=k.foil,Ee.foilAspect.value=xe.height/xe.width,Qe.color.setRGB(Y[0]*.92,Y[1]*.92,Y[2]*.92,to),Qe.roughness=Math.min(k.roughness,.35),Qe.metalness=k.metalness,Qe.clearcoat=1,Qe.clearcoatRoughness=.08;let _e=k_[ce.metal]||k_.silver;$.color.set(_e.color),$.roughness=_e.roughness,V=Xg*Fi(ce.strapWidth,.4,2),V!==j.strapScale&&(it.geometry.dispose(),it.geometry=N_(V)),z.style.touchAction=ce.interactive?"pan-y":"auto",j={layoutKey:Ge,framingKey:M,imageKey:E,faceKey:Z,strapColor:ce.strapColor,strapScale:V},ze()},vt=Array.from({length:Rr},()=>new O),xt=Array.from({length:Rr},()=>new O),_a=K3.map(ce=>[Math.cos(ce),Math.sin(ce)]),da={tangent:new O,toCamera:new O,basis:new oa,up:new O,across:new O,facing:new O,end:new O},Ca=()=>{let ce=_.nodes[La],Ge=tm+ru+.05,M=La-1;for(;M>0&&_.nodes[M].distanceTo(ce)<Ge*1.1;)M--;let E=da.up.subVectors(_.nodes[M],ce);E.lengthSq()<1e-8&&E.set(0,1,0).applyQuaternion(_.body.quaternion),E.normalize(),N.copy(ce).addScaledVector(E,Ge),q.copy(ce).addScaledVector(E,tm+ru*.35),F.length=0;for(let ft=0;ft<=M;ft++)F.push(_.nodes[ft]);F.push(N,q),re.updateArcLengths();for(let ft=0;ft<Rr;ft++)re.getPointAt(ft/(Rr-1),vt[ft]);let Z=re.getLength(),k=1-N.distanceTo(q)/Math.max(Z,.001),Y=Ne.getAttribute("position"),_e=Ne.getAttribute("normal"),Fe=Ne.getAttribute("uv"),Le=am.length,He=_.rest*La,et=He/(V*ue),dt=V/Math.pow(Math.max(1,Z/Math.max(He,.001)),.35),{tangent:ct,toCamera:Je,across:gt,facing:Ot}=da;for(let ft=0;ft<Rr;ft++){ct.subVectors(vt[Math.min(Rr-1,ft+1)],vt[Math.max(0,ft-1)]),ct.lengthSq()<1e-12&&ct.set(0,-1,0),ct.normalize(),Je.subVectors(J.position,vt[ft]).normalize();let Tt=xt[ft].crossVectors(Je,ct);Tt.lengthSq()<1e-10&&Tt.copy(ft>0?xt[ft-1]:Jt.a.set(1,0,0)),Tt.normalize(),ft>0&&Tt.dot(xt[ft-1])<0&&Tt.negate();let fa=-_.twist*Math.pow(Math.min(1,ft/(Rr-1)/k),1.3);Ot.crossVectors(ct,Tt),gt.copy(Tt).multiplyScalar(Math.cos(fa)).addScaledVector(Ot,Math.sin(fa)),Ot.crossVectors(ct,gt);let We=vt[ft],Qt=(1-ft/(Rr-1))*et;for(let St=0;St<Le;St++){let jt=ft*Le+St,pa=(am[St]-.5)*dt,[Ta,Ya]=_a[St];Y.setXYZ(jt,We.x+gt.x*pa,We.y+gt.y*pa,We.z+gt.z*pa),_e.setXYZ(jt,Ot.x*Ta+gt.x*Ya,Ot.y*Ta+gt.y*Ya,Ot.z*Ta+gt.z*Ya),Fe.setXY(jt,am[St],Qt)}}da.end.copy(gt),Y.needsUpdate=!0,_e.needsUpdate=!0,Fe.needsUpdate=!0,gt.copy(da.end).addScaledVector(E,-da.end.dot(E)).normalize(),Ot.crossVectors(gt,E).normalize(),da.basis.makeBasis(gt,E,Ot),R.quaternion.setFromRotationMatrix(da.basis),R.position.copy(ce)},Dn=()=>{Ie.position.copy(_.body.position),Ie.quaternion.copy(_.body.quaternion),Ca(),X.render(U,J)},dn=()=>{let ce=w.current,Ge=40*Fi(ce.gravity,0,3),M=Math.max(Ge,20),E=Fi(ce.elasticity,0,1),Z=Fi(ce.damping,0,1);return{gravity:Ge,hold:M*om(2.2,5.5,E),stiffness:M*10*La,spring:M*om(.1,.4,E)*La,bandDamping:M*om(.3,.08,E)*La,linearDrag:.25*Math.pow(16,Z),angularDrag:.5*Math.pow(12,Z),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:we?0:Fi(ce.breeze,0,1)}},pn=ce=>{if(Te=0,!ge)return;let Ge=Math.min(1/30,Math.max(1/240,(ce-D)/1e3));D=ce,Pe+=Ge;let M=dn();hP(_,Ge,M,Pe);let E=_.body;Number.isFinite(E.position.x+E.position.y+E.position.z+E.quaternion.w)||(_.grab=null,Kg(_,xe,!1)),Dn();let Z=_.calm>1.2&&!_.grab&&M.breeze===0;me&&!Z&&(Te=requestAnimationFrame(pn))},ze=()=>{Te||!me||!ge||(_.calm=0,D=performance.now(),Te=requestAnimationFrame(pn))},st=new Wf,rt=new Ue,bt=ce=>{let Ge=z.getBoundingClientRect();rt.set((ce.clientX-Ge.left)/Ge.width*2-1,-((ce.clientY-Ge.top)/Ge.height)*2+1),st.setFromCamera(rt,J)},Ut=()=>(Ie.updateMatrixWorld(),st.intersectObjects([ie,fe,be],!1)[0]||null),ca=ce=>{z.style.cursor!==ce&&(z.style.cursor=ce)},Pa=ce=>{let Ge=_.body,M=Jt.a.set(0,1,0).applyQuaternion(Ge.quaternion),E=_.turn>0?-1:1;if(_.turn===0){let Z=Jt.c.subVectors(ce,J.position).normalize();E=Jt.b.subVectors(ce,Ge.position).cross(Z).dot(M)<0?-1:1}_.turn=_.turn===0?Math.PI*E:0,Ge.angular.addScaledVector(M,J3*E)},Nt=ce=>{if(!w.current.interactive||ce.button>0)return;bt(ce);let Ge=Ut();Ge&&(_.grab={local:Ge.point.clone().sub(_.body.position).applyQuaternion(_.body.quaternion.clone().invert()),rotation:_.body.quaternion.clone(),reach:Ge.distance,from:Ge.point.clone(),target:Ge.point.clone()},Se={x:ce.clientX,y:ce.clientY,time:performance.now(),point:Ge.point.clone()},z.setPointerCapture?.(ce.pointerId),ca("grabbing"),ce.preventDefault(),ze())},ut=ce=>{if(w.current.interactive){if(bt(ce),_.grab){Se&&Math.hypot(ce.clientX-Se.x,ce.clientY-Se.y)>6&&(Se=null),st.ray.at(_.grab.reach,_.grab.target),ze();return}ce.pointerType!=="touch"&&(P=!!Ut(),ca(P?"grab":""))}},W=ce=>{_.grab&&(_.grab=null,Se&&ce.type==="pointerup"&&performance.now()-Se.time<450&&Pa(Se.point),Se=null,z.releasePointerCapture?.(ce.pointerId),ca(P&&ce.pointerType!=="touch"?"grab":""),ze())},Q=ce=>{!w.current.interactive||ce.touches.length!==1||(bt(ce.touches[0]),Ut()&&ce.preventDefault())};z.addEventListener("pointerdown",Nt),z.addEventListener("pointermove",ut),z.addEventListener("pointerup",W),z.addEventListener("pointercancel",W),z.addEventListener("lostpointercapture",W),z.addEventListener("touchstart",Q,{passive:!1});let he=()=>{ye.width=Math.max(1,L.clientWidth),ye.height=Math.max(1,L.clientHeight),X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.setSize(ye.width,ye.height,!1),qe(),Dn()},Oe=new ResizeObserver(he);Oe.observe(L);let pt=new IntersectionObserver(([ce])=>{me=ce.isIntersecting,me&&ze()});pt.observe(L);let zt=()=>{document.hidden||ze()};return document.addEventListener("visibilitychange",zt),A.current=qe,he(),()=>{ge=!1,cancelAnimationFrame(Te),A.current=null,Oe.disconnect(),pt.disconnect(),document.removeEventListener("visibilitychange",zt),z.removeEventListener("pointerdown",Nt),z.removeEventListener("pointermove",ut),z.removeEventListener("pointerup",W),z.removeEventListener("pointercancel",W),z.removeEventListener("lostpointercapture",W),z.removeEventListener("touchstart",Q),[ie,fe,be,Xe,it,tt,Be].forEach(ce=>ce.geometry?.dispose()),[Me,Ye,Qe,$,le].forEach(ce=>ce.dispose()),[$e,H,lt,ee,te].forEach(ce=>ce.dispose()),ae.dispose(),X.dispose(),z.parentNode&&z.parentNode.removeChild(z)}},[]),ke.createElement("div",{ref:S,className:`lanyard ${C}`.trim(),style:T})},eF=mP;ht();var Qo=mn(Lo());var W_=`.grid-scan {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
  overflow: hidden;\r
}\r
\r
.grid-scan-canvas {\r
  position: absolute;\r
  inset: 0;\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.grid-scan-preview {\r
  position: absolute;\r
  right: 12px;\r
  bottom: 12px;\r
  width: 168px;\r
  aspect-ratio: 4 / 3;\r
  overflow: hidden;\r
  border-radius: 14px;\r
  background: #0b0b0e;\r
  box-shadow:\r
    0 0 0 1px rgba(255, 255, 255, 0.08),\r
    0 8px 24px rgba(0, 0, 0, 0.35);\r
  pointer-events: none;\r
}\r
\r
.grid-scan-video {\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  transform: scaleX(-1);\r
}\r
\r
.grid-scan-status {\r
  position: absolute;\r
  left: 8px;\r
  bottom: 8px;\r
  padding: 3px 8px;\r
  border-radius: 8px;\r
  background: rgba(10, 10, 12, 0.6);\r
  color: #ffffff;\r
  font:\r
    500 11px/1.4 system-ui,\r
    -apple-system,\r
    sans-serif;\r
  backdrop-filter: blur(8px);\r
}\r
\r
.grid-scan-hidden {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  overflow: hidden;\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
`;var im=4,X_=2.4,xP=2.2,lm=1.25,gP="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",FP="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",vP={solid:0,dashed:1,dotted:2},SP=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,yP=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uPixel;
uniform vec3 uEye;
uniform float uDepth;
uniform vec3 uCell;
uniform float uThick;
uniform float uDot;
uniform int uStyle;
uniform vec3 uLineColor;
uniform vec3 uScanColor;
uniform vec3 uCoreColor;
uniform float uFade;
uniform float uScanZ;
uniform float uScanDir;
uniform float uScanAlpha;
uniform float uScanWidth;
uniform float uTrail;
uniform float uReveal;
uniform float uPoints;
uniform float uReflect;
uniform float uHaze;
uniform float uShade;
uniform float uLight;
uniform vec4 uPing[4];
uniform float uPingAlpha[4];
uniform vec4 uHover;
uniform float uTime;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outGlow;

struct Light {
  float grid;
  float fade;
  float core;
  float trail;
  float spill;
  float ping;
  float wake;
  float reveal;
};

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy);
}

float lines(float across, float along, float period, float dash, float fa, float fb) {
  float u = across / period;
  float du = fa / period;
  float d = abs(fract(u + 0.5) - 0.5) / max(du, 1e-5);
  float dense = smoothstep(0.1, 0.4, du);
  if (uStyle == 2) {
    float c = along / dash * 5.0;
    float dc = fb / dash * 5.0;
    float e = abs(fract(c + 0.5) - 0.5) / max(dc, 1e-5);
    float cov = clamp(uThick + 1.0 - length(vec2(d, e)), 0.0, 1.0);
    float mean = min(1.0, 3.1416 * (uThick + 0.5) * (uThick + 0.5) * du * dc);
    return mix(cov, mean, max(dense, smoothstep(0.1, 0.4, dc)));
  }
  float cov = clamp(uThick + 0.5 - d, 0.0, 1.0);
  float mean = min(1.0, 2.0 * uThick * du);
  if (uStyle == 1) {
    float c = along / dash * 4.0;
    float dc = fb / dash * 4.0;
    float e = abs(fract(c + 0.5) - 0.5);
    float m = clamp((0.25 - e) / max(dc, 1e-5) + 0.5, 0.0, 1.0);
    cov *= mix(m, 0.5, smoothstep(0.1, 0.4, dc));
    mean *= 0.5;
  }
  return mix(cov, mean, dense);
}

float depthFade(float z) {
  float n = clamp(z / uDepth, 0.0, 1.0);
  return mix(1.0, (exp(-3.0 * n) - 0.0497871) / 0.9502129, uFade);
}

vec3 project(vec3 eye, vec3 o, int face, float plane) {
  vec3 d = o - eye;
  float t = face == 0 ? (plane - o.x) / d.x : (face == 1 ? (plane - o.y) / d.y : (plane - o.z) / d.z);
  return o + d * t;
}

void trace(vec3 o, vec3 d, out int face, out float plane, out vec3 h) {
  float sx = d.x > 0.0 ? 0.5 * uAspect : -0.5 * uAspect;
  float sy = d.y > 0.0 ? 0.5 : -0.5;
  float tx = abs(d.x) > 1e-6 ? (sx - o.x) / d.x : 1e9;
  float ty = abs(d.y) > 1e-6 ? (sy - o.y) / d.y : 1e9;
  float t = (uDepth - o.z) / d.z;
  face = 2;
  plane = uDepth;
  if (tx < t) {
    face = 0;
    plane = sx;
    t = tx;
  }
  if (ty < t) {
    face = 1;
    plane = sy;
    t = ty;
  }
  h = o + d * t;
}

vec2 faceUv(vec3 h, int face) {
  if (face == 0) return vec2(h.z, h.y + 0.5);
  if (face == 1) return vec2(h.x + 0.5 * uAspect, h.z);
  return vec2(h.x + 0.5 * uAspect, h.y + 0.5);
}

Light illuminate(vec3 h, int face, vec2 uv, vec2 foot, float blur) {
  Light l;
  vec2 cell = face == 0 ? uCell.zy : (face == 1 ? uCell.xz : uCell.xy);
  vec2 f = foot * blur;
  float minor = max(lines(uv.x, uv.y, cell.x, cell.y, f.x, f.y), lines(uv.y, uv.x, cell.y, cell.x, f.y, f.x));
  float major = max(
    lines(uv.x, uv.y, cell.x * 4.0, cell.y, f.x, f.y),
    lines(uv.y, uv.x, cell.y * 4.0, cell.x, f.y, f.x)
  );
  l.grid = max(minor * 0.75, major) / blur;
  float z = h.z;
  l.fade = depthFade(z);
  l.reveal = clamp((uReveal - z) / 0.2, 0.0, 1.0);
  float zFoot = face == 0 ? f.x : (face == 1 ? f.y : 0.0);
  float width = max(uScanWidth, zFoot * 1.1);
  float dz = z - uScanZ;
  l.core = exp(-dz * dz / (width * width)) * (face == 2 ? 0.45 : 1.0) * uScanAlpha;
  float behind = -dz * uScanDir;
  l.trail = exp(-max(behind, 0.0) / uTrail) * smoothstep(-width, width * 0.5, behind) * uScanAlpha;
  l.spill = exp(-dz * dz / 0.05) * uScanAlpha;
  l.ping = 0.0;
  l.wake = 0.0;
  for (int i = 0; i < 4; i++) {
    float alpha = uPingAlpha[i];
    if (alpha <= 0.0) continue;
    float dist = length(h - uPing[i].xyz) - uPing[i].w;
    l.ping += exp(-dist * dist / 0.0012) * alpha;
    l.wake += exp(min(dist, 0.0) / 0.22) * (1.0 - smoothstep(-0.03, 0.03, dist)) * alpha;
  }
  return l;
}

void over(inout vec4 acc, vec3 color, float alpha) {
  alpha = clamp(alpha, 0.0, 1.0);
  acc = vec4(color * alpha, alpha) + acc * (1.0 - alpha);
}

void paint(inout vec4 color, inout float energy, Light l, float gain, float lift, float hover) {
  float base = l.grid * l.fade * l.reveal * lift;
  float far = l.fade * l.reveal * gain;
  float lit = l.grid * (l.core * 1.2 + l.trail * 0.75 + l.ping * 1.4 + l.wake * 0.5 + hover * 0.5) * far;
  float sheen = (l.core * 0.14 + l.spill * 0.05 + l.trail * 0.03 + l.ping * 0.2 + l.wake * 0.04) * far;
  float laser = (l.core + l.ping * 0.35) * far;
  over(color, uLineColor, base);
  over(color, uScanColor, sheen);
  over(color, uScanColor, lit);
  over(color, uCoreColor, laser * 0.9);
  energy += laser * 0.9 + lit * 0.5;
}

void main() {
  vec3 p = vec3((vUv.x - 0.5) * uAspect, vUv.y - 0.5, 0.0);
  vec3 d = p - uEye;
  int face;
  float plane;
  vec3 h;
  trace(p, d, face, plane, h);
  vec3 hx = project(uEye, p + vec3(uPixel, 0.0, 0.0), face, plane);
  vec3 hy = project(uEye, p + vec3(0.0, uPixel, 0.0), face, plane);
  vec2 uv = faceUv(h, face);
  vec2 ux = faceUv(hx, face) - uv;
  vec2 uy = faceUv(hy, face) - uv;
  vec2 foot = vec2(length(vec2(ux.x, uy.x)), length(vec2(ux.y, uy.y)));
  Light l = illuminate(h, face, uv, foot, 1.0);

  vec4 color = vec4(0.0);
  float energy = 0.0;

  if (uShade > 0.0) {
    vec2 gaps = face == 0
      ? vec2(0.5 - abs(h.y), uDepth - h.z)
      : (face == 1 ? vec2(0.5 * uAspect - abs(h.x), uDepth - h.z) : vec2(0.5 * uAspect - abs(h.x), 0.5 - abs(h.y)));
    vec2 crease = 1.0 - exp(-max(gaps, 0.0) / 0.16);
    float occlusion = crease.x * crease.y;
    float lamp = 1.0 / (1.0 + h.z * h.z * 0.9);
    float tilt = face == 1 ? (plane < 0.0 ? 1.1 : 0.85) : (face == 2 ? 0.8 : 1.0);
    float glowSpill = (l.spill * 0.5 + l.trail * 0.12) * l.reveal * l.fade;
    if (uLight > 0.5) {
      float shadow = (1.0 - lamp * tilt) * 0.09 + (1.0 - occlusion) * 0.2;
      over(color, vec3(0.0), shadow * uShade * l.reveal * l.fade);
    } else {
      over(color, vec3(1.0), lamp * tilt * occlusion * 0.11 * uShade * l.reveal * l.fade);
    }
    over(color, uScanColor, glowSpill * uShade * occlusion * 0.35);
  }

  if (face == 1 && plane < 0.0 && uReflect > 0.0) {
    vec3 mirror = vec3(uEye.x, -1.0 - uEye.y, uEye.z);
    vec3 r = h - mirror;
    int face2;
    float plane2;
    vec3 h2;
    trace(h, r, face2, plane2, h2);
    vec2 uv2 = faceUv(h2, face2);
    vec2 ux2 = faceUv(project(mirror, hx, face2, plane2), face2) - uv2;
    vec2 uy2 = faceUv(project(mirror, hy, face2, plane2), face2) - uv2;
    vec2 foot2 = vec2(length(vec2(ux2.x, uy2.x)), length(vec2(ux2.y, uy2.y)));
    float travel = length(h2 - h);
    Light m = illuminate(h2, face2, uv2, foot2, 1.0 + travel * 4.0);
    m.reveal *= l.reveal;
    float grazing = 1.0 - normalize(r).y;
    float gain = (0.3 + 0.7 * grazing * grazing * grazing * grazing) * uReflect * exp(-travel * 1.1) * (uLight > 0.5 ? 0.6 : 1.0);
    float reflected = 0.0;
    paint(color, reflected, m, gain, 0.0, 0.0);
    energy += reflected * 0.6;
  }

  vec3 near = h - uHover.xyz;
  float hover = exp(-dot(near, near) / 0.08) * uHover.w;
  paint(color, energy, l, 1.0, 1.0, hover);

  if (uPoints > 0.5) {
    vec2 cell = face == 0 ? uCell.zy : (face == 1 ? uCell.xz : uCell.xy);
    vec2 spacing = cell / 2.5;
    vec2 q = uv / spacing;
    vec2 id = floor(q);
    vec2 seed = id + vec2(float(face) * 13.7 + plane * 5.3, float(face) * 3.1);
    vec2 delta = (q - id - (0.2 + 0.6 * hash2(seed))) * spacing;
    float det = ux.x * uy.y - ux.y * uy.x;
    vec2 s = vec2(delta.x * uy.y - delta.y * uy.x, ux.x * delta.y - ux.y * delta.x) / det;
    float radius = uDot * mix(1.0, 0.55, clamp(h.z / uDepth, 0.0, 1.0));
    float spot = clamp(radius + 0.5 - length(s), 0.0, 1.0);
    float gap = min(spacing.x / foot.x, spacing.y / foot.y);
    float r = hash(seed + 7.7);
    float flicker = 0.75 + 0.25 * sin(uTime * (3.0 + r * 5.0) + r * 40.0);
    float dots = spot * smoothstep(5.0, 10.0, gap) * smoothstep(0.25, 0.6, r) * (0.3 + 0.7 * r * r) * flicker;
    float hot = l.core * 2.5 + l.ping * 1.6;
    float warm = l.trail * l.trail * 1.3 + l.wake * 0.6 + hover * 1.3;
    float spark = dots * (hot + warm) * l.fade * l.reveal;
    over(color, mix(uScanColor, uCoreColor, clamp(hot / max(hot + warm, 1e-4), 0.0, 1.0)), spark);
    energy += spark * 0.9;
  }

  if (uHaze > 0.0 && uScanAlpha > 0.0 && uScanZ > 0.0 && h.z > uScanZ) {
    vec3 c = p + d * (uScanZ / d.z);
    float grain = hash(floor(c.xy * 180.0) + floor(uTime * 24.0) * 7.0);
    float edge = min(0.5 * uAspect - abs(c.x), 0.5 - abs(c.y));
    float rim = exp(-edge / 0.06);
    float veil = uHaze * uScanAlpha * (0.45 + 0.9 * grain) * (0.55 + rim * 1.6);
    over(color, uScanColor, veil * depthFade(uScanZ) * l.reveal);
  }

  energy = clamp(energy, 0.0, 1.0);
  outColor = color;
  outGlow = vec4(uScanColor * energy, energy);
}`,MP=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec2 o = uTexel;
  outColor = 0.25 * (
    texture(uSource, vUv + vec2(-o.x, -o.y)) +
    texture(uSource, vUv + vec2(o.x, -o.y)) +
    texture(uSource, vUv + vec2(-o.x, o.y)) +
    texture(uSource, vUv + vec2(o.x, o.y))
  );
}`,bP=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec4 sum = texture(uSource, vUv) * 0.1964825501511404;
  sum += (texture(uSource, vUv + uStep * 1.411764705882353) + texture(uSource, vUv - uStep * 1.411764705882353)) * 0.2969069646728344;
  sum += (texture(uSource, vUv + uStep * 3.2941176470588234) + texture(uSource, vUv - uStep * 3.2941176470588234)) * 0.09447039785044732;
  sum += (texture(uSource, vUv + uStep * 5.176470588235294) + texture(uSource, vUv - uStep * 5.176470588235294)) * 0.010381362401148057;
  outColor = sum;
}`,_P=`#version 300 es
precision highp float;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uGlow;
in vec2 vUv;
out vec4 outColor;
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
void main() {
  vec4 scene = texture(uScene, vUv);
  vec4 bloom = texture(uBloom, vUv) * uGlow;
  bloom.a = min(bloom.a, 1.0);
  bloom.rgb = min(bloom.rgb, vec3(bloom.a));
  vec4 color = scene + bloom * (1.0 - scene.a);
  float noise = (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  color.a = clamp(color.a + noise, 0.0, 1.0);
  color.rgb = clamp(color.rgb + noise, vec3(0.0), vec3(color.a));
  outColor = color;
}`,fo=(t,e,a)=>Math.min(a,Math.max(e,t)),Y_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},cm=(t,e)=>{let a=Y_(t,t.VERTEX_SHADER,SP),o=Y_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},fm=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},um=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},dm=null,CP=()=>window.faceapi?Promise.resolve(window.faceapi):(dm||(dm=new Promise((t,e)=>{let a=document.createElement("script");a.src=gP,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{dm=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),dm),TP={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},wP=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:u=.7,scanDirection:h="forward",scanDuration:f=2.4,scanDelay:d=1.6,scanWidth:m=1,trail:v=.5,glow:I=.6,autoScan:p=!0,interactive:g=!0,clickEffect:y="ping",enableWebcam:x=!1,showPreview:b=!1,modelsPath:C=FP,enableGyro:T=!1,intro:S=!0,lightMode:w=!1,dpr:A,className:L="",style:X,...z})=>{let B=(0,Qo.useRef)(null),U=(0,Qo.useRef)(null),ae=(0,Qo.useRef)(null),J=(0,Qo.useRef)(null),se=(0,Qo.useRef)(null),[G,K]=(0,Qo.useState)("loading"),oe={linesColor:t??(w?"#d4d4d8":"#4d4757"),scanColor:e??(w?"#0284c7":"#7dd3fc"),cells:fo(a,2,40),thickness:fo(o,.5,4),style:vP[n]??0,depth:fo(r,.5,12),depthFade:fo(s,0,1),parallax:fo(i,0,3),points:l,reflection:fo(c,0,1),shading:fo(u,0,1),direction:h,duration:fo(f,.3,20),delay:fo(d,0,30),scanWidth:fo(m,.2,5),trail:fo(v,0,1),glow:fo(I,0,1.5),autoScan:p,interactive:g,clickEffect:y,enableGyro:T,intro:S,lightMode:w,dpr:A},De=(0,Qo.useRef)(oe);return De.current=oe,(0,Qo.useEffect)(()=>{let Ce=B.current,$e=U.current,H=$e?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!Ce||!$e||!H)return;let lt=cm(H,yP),ee=cm(H,MP),te=cm(H,bP),Ee=cm(H,_P);if(!lt||!ee||!te||!Ee)return;let Ke=H.createVertexArray(),Me=fm(H),Ye=fm(H),Qe=fm(H),$=fm(H),le=H.createFramebuffer(),Ie=H.createFramebuffer(),ie=H.createFramebuffer(),fe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),be=new Map,Xe=ze=>{let st=String(ze),rt=be.get(st);if(rt)return rt;let bt=[1,1,1];if(fe){fe.clearRect(0,0,1,1),fe.fillStyle="#000000",fe.fillStyle=st,fe.fillRect(0,0,1,1);let[Ut,ca,Pa]=fe.getImageData(0,0,1,1).data;bt=[Ut/255,ca/255,Pa/255]}return be.set(st,bt),bt},Ne=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Be={width:1,height:1,ratio:1},R={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:lm,vf:0,tf:lm},it={x:0,y:0,inside:!1},tt={x:0,y:0,held:!1},_={gamma:0,beta:0,ready:!1,asked:!1},F={x:0,y:0,z:0,strength:0,ready:!1},N={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},q=[],re=new Float32Array(im*4),ye=new Float32Array(im),xe=0,j=De.current.intro&&!Ne?0:1,V=0,ue=0,Te=!0,D=0,Pe=()=>{let ze=De.current,st=Be.width/Be.height,rt=1/Math.round(ze.cells),bt=st/Math.max(1,Math.round(st/rt)),Ut=Math.max(rt,Math.round(ze.depth/rt)*rt);return{aspect:st,cx:bt,cy:rt,roomDepth:Ut}},me=(ze,st)=>{let{aspect:rt,roomDepth:bt}=Pe(),Ut=(ze-.5)*rt,ca=st-.5,Pa=Ut-R.x,Nt=ca-R.y,ut=R.f,W=Pa>0?.5*rt:-.5*rt,Q=Nt>0?.5:-.5,he=bt/ut;return Math.abs(Pa)>1e-6&&(he=Math.min(he,(W-Ut)/Pa)),Math.abs(Nt)>1e-6&&(he=Math.min(he,(Q-ca)/Nt)),{x:Ut+Pa*he,y:ca+Nt*he,z:ut*he}},ge=ze=>{N.dir=ze.direction==="backward"||ze.direction==="pingpong"&&N.sweeps%2===1?-1:1,N.start=xe,N.waiting=!1,N.sweeps+=1},ve=(ze,st)=>{if(j<1){let Ut=j;N.dir=1,N.z=Ut*(st+.4)-.2,N.alpha=Math.min(1,Ut*6)*(1-Math.max(0,Ut-.85)/.15);return}if(N.sweeps===0&&!N.waiting&&(N.waiting=!0,N.start=xe,N.alpha=0),N.waiting){N.alpha=0,ze.autoScan&&!Ne&&xe-N.start>=ze.delay&&ge(ze);return}let rt=(xe-N.start)/ze.duration;if(rt>=1){N.waiting=!0,N.start=xe,N.alpha=0;return}let bt=rt*(st+.3)-.15;N.z=N.dir>0?bt:st-bt,N.alpha=Math.min(1,rt/.12)*Math.min(1,(1-rt)/.12)},P=ze=>{let st=Math.max(1,Math.ceil(ze/.008333333333333333)),rt=ze/st;for(let bt=0;bt<st;bt++)R.vx+=((R.tx-R.x)*42-R.vx*11)*rt,R.vy+=((R.ty-R.y)*42-R.vy*11)*rt,R.vf+=((R.tf-R.f)*42-R.vf*11)*rt,R.x+=R.vx*rt,R.y+=R.vy*rt,R.f+=R.vf*rt},Se=(ze,st,rt)=>{tt.x=fo(ze,-1,1),tt.y=fo(st,-1,1),tt.held=rt},ne=ze=>{let st=Be.width/Be.height,rt=Ne?0:1,bt=tt.held?tt.x:(Math.sin(xe*.21)*.2+Math.sin(xe*.083+1.3)*.12)*rt,Ut=tt.held?tt.y:Math.sin(xe*.17+2.1)*.16*rt;R.tx=bt*ze.parallax*.22*st,R.ty=Ut*ze.parallax*.22},we=()=>{let ze=De.current;Be.width=Math.max(1,Ce.clientWidth),Be.height=Math.max(1,Ce.clientHeight),Be.ratio=Math.min(ze.dpr||window.devicePixelRatio||1,2),$e.width=Math.max(1,Math.round(Be.width*Be.ratio)),$e.height=Math.max(1,Math.round(Be.height*Be.ratio)),um(H,Me,$e.width,$e.height),um(H,Ye,$e.width,$e.height),H.bindFramebuffer(H.FRAMEBUFFER,le),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Me.texture,0),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT1,H.TEXTURE_2D,Ye.texture,0);let st=Math.max(1,Math.round($e.width/4)),rt=Math.max(1,Math.round($e.height/4));um(H,Qe,st,rt),um(H,$,st,rt),H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.texture,0),H.bindFramebuffer(H.FRAMEBUFFER,ie),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$.texture,0),H.bindFramebuffer(H.FRAMEBUFFER,null),Re(),Ve()},Re=()=>{let ze=De.current,{aspect:st,cx:rt,cy:bt,roomDepth:Ut}=Pe(),ca=Xe(ze.linesColor),Pa=Xe(ze.scanColor),Nt=ze.lightMode?Pa:Pa.map(Q=>Q+(1-Q)*.65),ut=lt.uniforms;H.bindVertexArray(Ke),H.disable(H.BLEND),H.bindFramebuffer(H.FRAMEBUFFER,le),H.drawBuffers([H.COLOR_ATTACHMENT0,H.COLOR_ATTACHMENT1]),H.viewport(0,0,$e.width,$e.height),H.useProgram(lt.program),H.uniform1f(ut.uAspect,st),H.uniform1f(ut.uPixel,1/$e.height),H.uniform3f(ut.uEye,R.x,R.y,-R.f),H.uniform1f(ut.uDepth,Ut),H.uniform3f(ut.uCell,rt,bt,bt),H.uniform1f(ut.uThick,ze.thickness*Be.ratio*.5),H.uniform1f(ut.uDot,1.8*Be.ratio),H.uniform1i(ut.uStyle,ze.style),H.uniform3fv(ut.uLineColor,ca),H.uniform3fv(ut.uScanColor,Pa),H.uniform3fv(ut.uCoreColor,Nt),H.uniform1f(ut.uFade,ze.depthFade),H.uniform1f(ut.uScanZ,N.z),H.uniform1f(ut.uScanDir,N.dir),H.uniform1f(ut.uScanAlpha,N.alpha),H.uniform1f(ut.uScanWidth,.006*ze.scanWidth),H.uniform1f(ut.uTrail,.04+ze.trail*1.1),H.uniform1f(ut.uReveal,j<1?N.z+.05:1e4),H.uniform1f(ut.uPoints,ze.points?1:0),H.uniform1f(ut.uReflect,ze.reflection),H.uniform1f(ut.uHaze,ze.lightMode?.03:.05),H.uniform1f(ut.uShade,ze.shading),H.uniform1f(ut.uLight,ze.lightMode?1:0),H.uniform4fv(ut.uPing,re),H.uniform1fv(ut.uPingAlpha,ye),H.uniform4f(ut.uHover,F.x,F.y,F.z,F.strength),H.uniform1f(ut.uTime,xe),H.drawArrays(H.TRIANGLES,0,3);let W=ze.glow>0;if(W){H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.viewport(0,0,Qe.width,Qe.height),H.useProgram(ee.program),H.activeTexture(H.TEXTURE0),H.bindTexture(H.TEXTURE_2D,Ye.texture),H.uniform1i(ee.uniforms.uSource,0),H.uniform2f(ee.uniforms.uTexel,1/Ye.width,1/Ye.height),H.drawArrays(H.TRIANGLES,0,3);let Q=2.2*Be.ratio/2;H.useProgram(te.program),H.uniform1i(te.uniforms.uSource,0),H.bindFramebuffer(H.FRAMEBUFFER,ie),H.bindTexture(H.TEXTURE_2D,Qe.texture),H.uniform2f(te.uniforms.uStep,Q/Qe.width,0),H.drawArrays(H.TRIANGLES,0,3),H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.bindTexture(H.TEXTURE_2D,$.texture),H.uniform2f(te.uniforms.uStep,0,Q/Qe.height),H.drawArrays(H.TRIANGLES,0,3)}H.bindFramebuffer(H.FRAMEBUFFER,null),H.viewport(0,0,$e.width,$e.height),H.useProgram(Ee.program),H.activeTexture(H.TEXTURE0),H.bindTexture(H.TEXTURE_2D,Me.texture),H.uniform1i(Ee.uniforms.uScene,0),H.activeTexture(H.TEXTURE1),H.bindTexture(H.TEXTURE_2D,Qe.texture),H.uniform1i(Ee.uniforms.uBloom,1),H.uniform1f(Ee.uniforms.uGlow,W?ze.glow*(ze.lightMode?.8:1.6):0),H.drawArrays(H.TRIANGLES,0,3),H.activeTexture(H.TEXTURE0)},de=ze=>{if(V=0,!Te||document.hidden)return;let st=De.current,rt=ue?fo((ze-ue)/1e3,.001,.05):1/60;ue=ze,xe+=rt,j<1&&(j=Math.min(1,j+rt/xP));let{roomDepth:bt}=Pe();ve(st,bt),ne(st),P(rt);let Ut=st.interactive&&it.inside&&!Ne?1:0;if(Ut){let Nt=me(it.x,it.y);F.ready||Object.assign(F,Nt,{ready:!0});let ut=1-Math.exp(-rt/.08);F.x+=(Nt.x-F.x)*ut,F.y+=(Nt.y-F.y)*ut,F.z+=(Nt.z-F.z)*ut}F.strength+=(Ut-F.strength)*(1-Math.exp(-rt/.25)),!Ut&&F.strength<.01&&(F.ready=!1);for(let Nt=q.length-1;Nt>=0;Nt--)q[Nt].age+=rt,q[Nt].age>X_&&q.splice(Nt,1);for(let Nt=0;Nt<im;Nt++){let ut=q[Nt];if(!ut){ye[Nt]=0;continue}let W=ut.age/X_;re.set([ut.x,ut.y,ut.z,ut.age*1.15],Nt*4),ye[Nt]=Math.min(1,ut.age/.05)*(1-W)*(1-W)}Re();let ca=Math.abs(R.tx-R.x)+Math.abs(R.ty-R.y)+Math.abs(R.tf-R.f)>1e-4||Math.abs(R.vx)+Math.abs(R.vy)+Math.abs(R.vf)>1e-4;j<1||!Ne&&st.autoScan||!N.waiting||q.length>0||ca||F.strength>.002||!Ne&&st.parallax>0&&!tt.held||st.points&&!Ne&&N.alpha>0?V=requestAnimationFrame(de):ue=0};function Ve(){!V&&Te&&!document.hidden&&(V=requestAnimationFrame(de))}let qe=ze=>{let st=Ce.getBoundingClientRect(),rt=(ze.clientX-st.left)/Math.max(1,st.width),bt=1-(ze.clientY-st.top)/Math.max(1,st.height);return{u:rt,v:bt,inside:rt>=0&&rt<=1&&bt>=0&&bt<=1}},vt=ze=>{let st=De.current,{u:rt,v:bt,inside:Ut}=qe(ze);it.x=rt,it.y=bt;let ca=it.inside;it.inside=Ut,Ut?(window.clearTimeout(D),D=0,!se.current?.active&&st.interactive&&!Ne&&Se(rt*2-1,bt*2-1,!0),Ve()):ca&&!D&&(D=window.setTimeout(()=>{D=0,se.current?.active||(tt.held=!1),Ve()},220),Ve())},xt=ze=>{let st=De.current,{u:rt,v:bt,inside:Ut}=qe(ze);if(!(!Ut||Ne||st.clickEffect==="none")){if(st.clickEffect==="scan")j>=1&&ge(st);else{let ca=me(rt,bt);q.unshift({...ca,age:0}),q.length>im&&q.pop()}Ve()}},_a=()=>{it.inside=!1,se.current?.active||(tt.held=!1),Ve()},da=ze=>{!De.current.enableGyro||se.current?.active||Ne||ze.gamma===null||ze.beta===null||(_.ready||Object.assign(_,{gamma:ze.gamma,beta:ze.beta,ready:!0}),Se((ze.gamma-_.gamma)/25,(ze.beta-_.beta)/-25,!0),Ve())},Ca=()=>{let ze=De.current,st=window.DeviceOrientationEvent?.requestPermission;!ze.enableGyro||_.asked||typeof st!="function"||(_.asked=!0,st.call(window.DeviceOrientationEvent).catch(()=>{}))},Dn=()=>{ue=0,Ve()},dn=new ResizeObserver(we);dn.observe(Ce);let pn=new IntersectionObserver(ze=>{Te=ze.some(st=>st.isIntersecting),Te&&(ue=0,Ve())});return pn.observe(Ce),window.addEventListener("pointermove",vt,{passive:!0}),window.addEventListener("pointerdown",xt,{passive:!0}),window.addEventListener("deviceorientation",da),window.addEventListener("click",Ca),document.documentElement.addEventListener("pointerleave",_a),document.addEventListener("visibilitychange",Dn),se.current={active:!1,move:(ze,st,rt)=>{Ne||(Se(ze*1.3,st*1.3,!0),R.tf=lm*fo(rt,.6,1.6),Ve())},release:()=>{R.tf=lm,tt.held=!1,Ve()}},we(),J.current=Ve,()=>{cancelAnimationFrame(V),window.clearTimeout(D),J.current=null,se.current=null,dn.disconnect(),pn.disconnect(),window.removeEventListener("pointermove",vt),window.removeEventListener("pointerdown",xt),window.removeEventListener("deviceorientation",da),window.removeEventListener("click",Ca),document.documentElement.removeEventListener("pointerleave",_a),document.removeEventListener("visibilitychange",Dn),[Me,Ye,Qe,$].forEach(ze=>H.deleteTexture(ze.texture)),[le,Ie,ie].forEach(ze=>H.deleteFramebuffer(ze)),H.deleteVertexArray(Ke),[lt,ee,te,Ee].forEach(ze=>H.deleteProgram(ze.program)),H.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Qo.useEffect)(()=>{J.current?.()}),(0,Qo.useEffect)(()=>{if(!x)return;let Ce=ae.current;if(!Ce)return;let $e=!1,H=null,lt=0,ee=0,te={x:0,y:0,near:1,ready:!1};return K("loading"),(async()=>{try{let Ke=await CP();if(await Ke.nets.tinyFaceDetector.loadFromUri(C),$e)return;if(H=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),$e){H.getTracks().forEach(Qe=>Qe.stop());return}Ce.srcObject=H,await Ce.play(),K("searching");let Me=new Ke.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ye=async()=>{if($e)return;let Qe=null;try{Qe=await Ke.detectSingleFace(Ce,Me)}catch{Qe=null}if($e)return;let $=se.current;if(Qe&&$){let le=Qe.box,Ie=Ce.videoWidth||1,ie=Ce.videoHeight||1,fe=-((le.x+le.width/2)/Ie-.5)*2,be=-((le.y+le.height/2)/ie-.5)*2,Xe=.32/Math.max(.08,le.width/Ie),Ne=te.ready?.45:1;te.x+=(fe-te.x)*Ne,te.y+=(be-te.y)*Ne,te.near+=(Xe-te.near)*Ne,te.ready=!0,ee=0,$.active=!0,$.move(te.x,te.y,te.near),K("tracking")}else $&&++ee>12&&$.active&&($.active=!1,te.ready=!1,$.release(),K("searching"));lt=window.setTimeout(Ye,40)};Ye()}catch{$e||K("blocked")}})(),()=>{$e=!0,window.clearTimeout(lt),H?.getTracks().forEach(Me=>Me.stop()),Ce.srcObject=null;let Ke=se.current;Ke?.active&&(Ke.active=!1,Ke.release())}},[x,C]),ke.createElement("div",{ref:B,className:`grid-scan${L?` ${L}`:""}`,style:X,...z},ke.createElement("canvas",{ref:U,className:"grid-scan-canvas","aria-hidden":"true"}),x&&ke.createElement("div",{className:b?"grid-scan-preview":"grid-scan-hidden"},ke.createElement("video",{ref:ae,className:"grid-scan-video",muted:!0,playsInline:!0}),b&&ke.createElement("span",{className:"grid-scan-status"},TP[G])))},Z_=wP;ht();var nt=mn(Lo());ht();var ea=mn(Lo());ht();ht();var lu=mn(Lo(),1),AP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Rs=(0,lu.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:u=!1,...h},f)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,m=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},v={ref:f,...AP,width:e,height:e,color:l||t,className:n,...m,...h},p=[...s&&r?r:i].sort(([,g],[,y])=>{let x=g.opacity!==void 0;return y.opacity!==void 0?1:x?-1:0}).map(([g,y])=>{let x=y.opacity!==void 0,b=x&&!u?y.opacity:void 0,C=c?{...y.stroke!==void 0?{stroke:x?c:l||t}:{fill:x?c:l||t}}:{};return(0,lu.createElement)(g,{...y,...m,...C,opacity:b,key:y.key})});return(0,lu.createElement)("svg",v,p)});Rs.displayName="HugeiconsIcon";ht();ht();var nr=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ht();var Dr=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ht();var Lr=[["path",{d:"M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]];ht();var cu=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var K_=`.stepper {\r
  --stepper-pad: 0px;\r
  --stepper-inset: 0px;\r
  --stepper-bleed: 8px;\r
  --stepper-well-radius: max(6px, calc(var(--stepper-radius) - 8px));\r
  --stepper-tile-radius: max(4px, calc(var(--stepper-well-radius) - 4px));\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  width: min(100%, var(--stepper-width));\r
  min-width: 0;\r
  max-width: 100%;\r
  box-sizing: border-box;\r
  border-radius: var(--stepper-radius);\r
  color: var(--stepper-ink);\r
  -webkit-tap-highlight-color: transparent;\r
  margin: 0 auto;\r
}\r
\r
.stepper--framed {\r
  --stepper-pad: 12px;\r
  --stepper-inset: 16px;\r
  --stepper-bleed: 20px;\r
  padding: var(--stepper-pad);\r
  background: var(--stepper-frame);\r
  box-shadow: var(--stepper-frame-shadow);\r
  -webkit-backdrop-filter: blur(24px) saturate(1.8);\r
  backdrop-filter: blur(24px) saturate(1.8);\r
  border: 1px solid rgba(0, 245, 255, 0.25);\r
}\r
\r
.stepper__rim {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 2;\r
  border-radius: inherit;\r
  box-shadow:\r
    inset 0 0 0 1px var(--stepper-frame-edge),\r
    inset 0 1px 0 var(--stepper-frame-highlight);\r
  pointer-events: none;\r
}\r
\r
.stepper__header--dots,\r
.stepper__header--bars {\r
  padding: var(--stepper-inset) var(--stepper-inset) 0;\r
}\r
\r
.stepper__track {\r
  position: relative;\r
  display: flex;\r
  gap: 4px;\r
  padding: 4px;\r
  border-radius: var(--stepper-well-radius);\r
  background: var(--stepper-well);\r
}\r
\r
.stepper__glider {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  border-radius: var(--stepper-tile-radius);\r
  background: var(--stepper-tile);\r
  box-shadow:\r
    inset 0 0 0 1px var(--stepper-tile-edge),\r
    inset 0 1px 0 var(--stepper-tile-highlight),\r
    var(--stepper-tile-shadow);\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
\r
.stepper__segment {\r
  position: relative;\r
  display: flex;\r
  flex: 1 1 auto;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  min-width: 0;\r
  height: 40px;\r
  padding: 0 10px;\r
  box-sizing: border-box;\r
  border: none;\r
  border-radius: var(--stepper-tile-radius);\r
  background: none;\r
  color: var(--stepper-muted);\r
  font-family: inherit;\r
  cursor: pointer;\r
  transition: background-color 0.2s ease;\r
}\r
\r
.stepper__segment:disabled {\r
  cursor: default;\r
}\r
\r
.stepper__badge {\r
  display: grid;\r
  flex: none;\r
  place-items: center;\r
  width: 22px;\r
  height: 22px;\r
  border-radius: 50%;\r
  box-shadow: inset 0 0 0 1px var(--stepper-faint);\r
  color: var(--stepper-muted);\r
  font-size: 11.5px;\r
  font-weight: 600;\r
  font-variant-numeric: tabular-nums;\r
  line-height: 1;\r
  transition:\r
    background-color 0.15s ease,\r
    box-shadow 0.15s ease,\r
    color 0.15s ease;\r
}\r
\r
.stepper__badge[data-status='active'] {\r
  box-shadow: inset 0 0 0 1.5px var(--stepper-solid);\r
  color: var(--stepper-solid);\r
}\r
\r
.stepper__badge[data-status='complete'] {\r
  background: var(--stepper-solid);\r
  box-shadow: none;\r
  color: var(--stepper-solid-ink);\r
}\r
\r
.stepper__glyph,\r
.stepper__check {\r
  display: grid;\r
  place-items: center;\r
}\r
\r
.stepper__text {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  min-width: 0;\r
  text-align: left;\r
}\r
\r
.stepper__title {\r
  overflow: hidden;\r
  font-size: 13px;\r
  font-weight: 600;\r
  line-height: 1.2;\r
  color: var(--stepper-muted);\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  transition: color 0.2s ease;\r
}\r
\r
.stepper__title:not([data-status='upcoming']) {\r
  color: var(--stepper-ink);\r
}\r
\r
.stepper__description {\r
  overflow: hidden;\r
  font-size: 12px;\r
  line-height: 1.35;\r
  color: var(--stepper-muted);\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.stepper__track[data-layout='rail'] {\r
  flex: 1;\r
  flex-direction: column;\r
}\r
\r
.stepper__track[data-layout='rail'] .stepper__segment {\r
  flex: none;\r
  align-items: flex-start;\r
  justify-content: flex-start;\r
  gap: 10px;\r
  height: auto;\r
  padding: 10px;\r
}\r
\r
.stepper__track[data-layout='rail'] .stepper__text {\r
  padding-top: 3px;\r
}\r
\r
.stepper__dots {\r
  display: flex;\r
  justify-content: center;\r
  gap: 8px;\r
  padding-top: 4px;\r
}\r
\r
.stepper__dot {\r
  display: grid;\r
  place-items: center;\r
  width: 22px;\r
  height: 22px;\r
  padding: 0;\r
  border: none;\r
  border-radius: 50%;\r
  background: none;\r
  cursor: pointer;\r
}\r
\r
.stepper__dot-mark {\r
  width: 9px;\r
  height: 9px;\r
  border-radius: 50%;\r
  background: var(--stepper-faint);\r
  transition:\r
    background-color 0.25s ease,\r
    transform 0.45s var(--stepper-spring);\r
}\r
\r
.stepper__dot-mark[data-status='complete'] {\r
  background: var(--stepper-solid);\r
}\r
\r
.stepper__dot-mark[data-status='active'] {\r
  background: var(--stepper-solid);\r
  transform: scale(1.35);\r
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.6);\r
}\r
\r
.stepper__bars {\r
  display: flex;\r
  gap: 8px;\r
  padding-top: 4px;\r
}\r
\r
.stepper__bar {\r
  display: flex;\r
  flex: 1;\r
  align-items: center;\r
  height: 18px;\r
  padding: 0;\r
  border: none;\r
  background: none;\r
  cursor: pointer;\r
}\r
\r
.stepper__bar-track {\r
  position: relative;\r
  width: 100%;\r
  height: 4px;\r
  overflow: hidden;\r
  border-radius: 4px;\r
  background: var(--stepper-track);\r
}\r
\r
.stepper__bar-fill {\r
  position: absolute;\r
  inset: 0;\r
  background: var(--stepper-solid);\r
  box-shadow: 0 0 8px rgba(0, 245, 255, 0.5);\r
  transform: scaleX(0);\r
  transform-origin: left center;\r
  transition: transform 560ms var(--stepper-spring);\r
}\r
\r
.stepper__bar-fill[data-filled] {\r
  transform: none;\r
}\r
\r
.stepper__dot:disabled,\r
.stepper__bar:disabled {\r
  cursor: default;\r
}\r
\r
.stepper__body {\r
  display: flex;\r
  flex-direction: column;\r
  min-width: 0;\r
  padding: 20px var(--stepper-inset) var(--stepper-inset);\r
}\r
\r
.stepper__viewport {\r
  position: relative;\r
  margin: -6px calc(var(--stepper-bleed) * -1);\r
  overflow: hidden;\r
}\r
\r
.stepper__pane {\r
  box-sizing: border-box;\r
  padding: 6px var(--stepper-bleed);\r
  outline: none;\r
}\r
\r
.stepper__pane--leaving {\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  left: 0;\r
  pointer-events: none;\r
}\r
\r
.stepper__step {\r
  min-width: 0;\r
}\r
\r
.stepper__footer-wrap {\r
  display: grid;\r
  grid-template-rows: 1fr;\r
  transition:\r
    grid-template-rows 480ms var(--stepper-spring),\r
    opacity 0.2s ease;\r
}\r
\r
.stepper__footer-wrap[data-hidden] {\r
  grid-template-rows: 0fr;\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
\r
.stepper__footer-clip {\r
  min-height: 0;\r
}\r
\r
.stepper__footer-wrap[data-hidden] .stepper__footer-clip {\r
  overflow: hidden;\r
}\r
\r
.stepper__footer {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  padding-top: 20px;\r
}\r
\r
.stepper__button {\r
  display: inline-flex;\r
  flex: none;\r
  align-items: center;\r
  gap: 6px;\r
  height: 40px;\r
  padding: 0 18px;\r
  border: none;\r
  border-radius: max(8px, calc(var(--stepper-radius) * 0.5));\r
  font-family: inherit;\r
  font-size: 13.5px;\r
  font-weight: 600;\r
  line-height: 1;\r
  cursor: pointer;\r
  transition:\r
    filter 0.2s ease,\r
    transform 0.2s ease,\r
    opacity 0.2s ease;\r
}\r
\r
.stepper__button--back {\r
  padding-left: 12px;\r
  background: var(--stepper-tile);\r
  box-shadow:\r
    inset 0 0 0 1px var(--stepper-tile-edge),\r
    inset 0 1px 0 var(--stepper-tile-highlight),\r
    var(--stepper-tile-shadow);\r
  color: var(--stepper-ink);\r
}\r
\r
.stepper__button--back[data-hidden] {\r
  visibility: hidden;\r
  opacity: 0;\r
  transition:\r
    opacity 0.2s ease,\r
    visibility 0s 0.2s;\r
}\r
\r
.stepper__button--next {\r
  margin-left: auto;\r
  padding-right: 14px;\r
  background: var(--stepper-solid);\r
  box-shadow: 0 4px 16px -4px rgba(0, 245, 255, 0.4);\r
  color: var(--stepper-solid-ink);\r
}\r
\r
.stepper__button:disabled {\r
  opacity: 0.4;\r
  cursor: not-allowed;\r
}\r
\r
.stepper__button:focus-visible,\r
.stepper__segment:focus-visible,\r
.stepper__dot:focus-visible,\r
.stepper__bar:focus-visible {\r
  outline: 2px solid var(--stepper-ink);\r
  outline-offset: 2px;\r
}\r
\r
.stepper--vertical {\r
  flex-direction: row;\r
  align-items: stretch;\r
}\r
\r
.stepper--vertical .stepper__header {\r
  display: flex;\r
  flex: none;\r
  width: 212px;\r
  max-width: 42%;\r
}\r
\r
.stepper--vertical .stepper__body {\r
  flex: 1;\r
  padding: var(--stepper-inset) var(--stepper-inset) var(--stepper-inset) 20px;\r
}\r
\r
@media (hover: hover) {\r
  .stepper__segment:not(:disabled):hover {\r
    background: var(--stepper-hover-fill);\r
  }\r
\r
  .stepper__button--back:not(:disabled):hover {\r
    filter: var(--stepper-hover);\r
  }\r
\r
  .stepper__button--next:not(:disabled):hover {\r
    filter: var(--stepper-solid-hover);\r
  }\r
\r
  .stepper__dot:not(:disabled):hover .stepper__dot-mark {\r
    transform: scale(1.3);\r
  }\r
\r
  .stepper__bar:not(:disabled):hover .stepper__bar-track {\r
    background: var(--stepper-faint);\r
  }\r
}\r
\r
.stepper__button:not(:disabled):active {\r
  filter: var(--stepper-press);\r
  transform: scale(0.96);\r
  transition-duration: 0s;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .stepper__bar-fill,\r
  .stepper__dot-mark,\r
  .stepper__footer-wrap {\r
    transition-duration: 0.01ms;\r
  }\r
}\r
\r
/* ========================================================\r
   QUICK MESSAGE STEPPER INTEGRATION STYLES\r
   ======================================================== */\r
\r
.stepper-quick-message-container {\r
  max-width: 680px;\r
  width: 100%;\r
  margin: 0 auto var(--spacing-xl);\r
  text-align: left;\r
}\r
\r
.stepper-qm-header {\r
  margin-bottom: 18px;\r
}\r
\r
.stepper-qm-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 5px 14px;\r
  background: rgba(0, 245, 255, 0.08);\r
  border: 1px solid rgba(0, 245, 255, 0.3);\r
  border-radius: 20px;\r
  font-size: 0.78rem;\r
  font-weight: 600;\r
  letter-spacing: 0.04em;\r
  color: #00f5ff;\r
  text-transform: uppercase;\r
  margin-bottom: 8px;\r
}\r
\r
.stepper-qm-subtitle {\r
  font-size: 0.92rem;\r
  color: var(--color-text-secondary);\r
  margin: 0;\r
  line-height: 1.45;\r
}\r
\r
.step-pane-content {\r
  padding: 10px 4px 6px;\r
  text-align: left;\r
}\r
\r
.step-title {\r
  font-size: 1.25rem;\r
  font-weight: 700;\r
  color: #ffffff;\r
  margin-bottom: 4px;\r
  letter-spacing: -0.01em;\r
}\r
\r
.step-desc {\r
  font-size: 0.88rem;\r
  color: var(--color-text-secondary);\r
  margin-bottom: 16px;\r
  line-height: 1.4;\r
}\r
\r
.step-input-box {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.step-input-box svg {\r
  position: absolute;\r
  left: 14px;\r
  color: #00f5ff;\r
  pointer-events: none;\r
}\r
\r
.step-text-input {\r
  width: 100%;\r
  padding: 13px 14px 13px 44px;\r
  background: rgba(4, 9, 20, 0.85);\r
  border: 1px solid rgba(0, 245, 255, 0.25);\r
  border-radius: 12px;\r
  color: #ffffff;\r
  font-size: 0.95rem;\r
  font-family: inherit;\r
  outline: none;\r
  transition: all 0.25s ease;\r
  box-sizing: border-box;\r
}\r
\r
.step-text-input:focus {\r
  border-color: #00f5ff;\r
  background: rgba(4, 9, 20, 0.98);\r
  box-shadow: 0 0 16px rgba(0, 245, 255, 0.25);\r
}\r
\r
.step-field-hint {\r
  display: block;\r
  font-size: 0.78rem;\r
  margin-top: 8px;\r
  font-weight: 500;\r
}\r
\r
.step-field-hint.error {\r
  color: #f43f5e;\r
}\r
\r
.step-field-hint.success {\r
  color: #10b981;\r
}\r
\r
/* Intent Pills */\r
.intent-pills-grid {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
  margin-bottom: 16px;\r
}\r
\r
.intent-pill {\r
  display: inline-flex;\r
  align-items: center;\r
  padding: 8px 14px;\r
  background: rgba(255, 255, 255, 0.05);\r
  border: 1px solid rgba(255, 255, 255, 0.12);\r
  border-radius: 12px;\r
  color: #ffffff;\r
  font-size: 0.84rem;\r
  font-weight: 500;\r
  font-family: inherit;\r
  cursor: pointer;\r
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\r
}\r
\r
.intent-pill:hover {\r
  background: rgba(0, 245, 255, 0.1);\r
  border-color: rgba(0, 245, 255, 0.4);\r
  transform: translateY(-1px);\r
}\r
\r
.intent-pill.active {\r
  background: rgba(0, 245, 255, 0.18);\r
  border-color: #00f5ff;\r
  color: #00f5ff;\r
  font-weight: 600;\r
  box-shadow: 0 0 14px rgba(0, 245, 255, 0.25);\r
}\r
\r
.step-message-box {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
}\r
\r
.step-message-label {\r
  font-size: 0.82rem;\r
  font-weight: 600;\r
  color: var(--color-text-primary);\r
}\r
\r
.step-textarea {\r
  width: 100%;\r
  padding: 12px 14px;\r
  background: rgba(4, 9, 20, 0.85);\r
  border: 1px solid rgba(255, 255, 255, 0.12);\r
  border-radius: 12px;\r
  color: #ffffff;\r
  font-size: 0.92rem;\r
  font-family: inherit;\r
  outline: none;\r
  resize: vertical;\r
  min-height: 75px;\r
  box-sizing: border-box;\r
  transition: all 0.25s ease;\r
}\r
\r
.step-textarea:focus {\r
  border-color: #00f5ff;\r
  background: rgba(4, 9, 20, 0.98);\r
  box-shadow: 0 0 16px rgba(0, 245, 255, 0.25);\r
}\r
\r
/* Review Card */\r
.review-summary-card {\r
  background: rgba(4, 9, 20, 0.65);\r
  border: 1px solid rgba(0, 245, 255, 0.2);\r
  border-radius: 14px;\r
  padding: 16px 18px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
}\r
\r
.review-row {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  padding-bottom: 8px;\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\r
  font-size: 0.88rem;\r
}\r
\r
.review-row.column {\r
  flex-direction: column;\r
  align-items: flex-start;\r
  border-bottom: none;\r
  padding-bottom: 0;\r
}\r
\r
.review-label {\r
  color: var(--color-text-muted);\r
  font-weight: 500;\r
  font-size: 0.82rem;\r
}\r
\r
.review-value {\r
  color: #ffffff;\r
  font-weight: 600;\r
}\r
\r
.review-value.cyan {\r
  color: #00f5ff;\r
  font-family: 'JetBrains Mono', monospace;\r
}\r
\r
.review-value.muted {\r
  color: var(--color-text-muted);\r
  font-weight: 400;\r
  font-style: italic;\r
}\r
\r
.review-quote {\r
  width: 100%;\r
  font-style: italic;\r
  color: #e2e8f0;\r
  background: rgba(255, 255, 255, 0.04);\r
  padding: 8px 12px;\r
  border-left: 2px solid #00f5ff;\r
  border-radius: 6px;\r
  margin-top: 6px;\r
  font-size: 0.85rem;\r
  line-height: 1.4;\r
  box-sizing: border-box;\r
}\r
\r
.step-error-banner {\r
  margin-top: 12px;\r
  padding: 8px 12px;\r
  border-radius: 8px;\r
  background: rgba(244, 63, 94, 0.15);\r
  border: 1px solid #f43f5e;\r
  color: #f43f5e;\r
  font-size: 0.82rem;\r
  font-weight: 600;\r
}\r
\r
/* Completed Card */\r
.stepper-complete-card {\r
  text-align: center;\r
  padding: 24px 16px 16px;\r
}\r
\r
.stepper-complete-icon {\r
  width: 54px;\r
  height: 54px;\r
  border-radius: 50%;\r
  background: rgba(16, 185, 129, 0.15);\r
  border: 2px solid #10b981;\r
  color: #10b981;\r
  font-size: 1.8rem;\r
  display: grid;\r
  place-items: center;\r
  margin: 0 auto 16px;\r
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.35);\r
}\r
\r
.stepper-complete-title {\r
  font-size: 1.35rem;\r
  font-weight: 700;\r
  color: #ffffff;\r
  margin-bottom: 8px;\r
}\r
\r
.stepper-complete-desc {\r
  font-size: 0.92rem;\r
  color: var(--color-text-secondary);\r
  line-height: 1.5;\r
  max-width: 420px;\r
  margin: 0 auto 20px;\r
}\r
\r
.stepper-reset-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  padding: 8px 18px;\r
  border-radius: 20px;\r
  background: rgba(255, 255, 255, 0.08);\r
  border: 1px solid rgba(255, 255, 255, 0.2);\r
  color: #ffffff;\r
  font-size: 0.84rem;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
\r
.stepper-reset-btn:hover {\r
  background: rgba(0, 245, 255, 0.15);\r
  border-color: #00f5ff;\r
  color: #00f5ff;\r
}\r
\r
`;var fu=typeof window>"u"?ea.useEffect:ea.useLayoutEffect,J_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},$_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",eC="cubic-bezier(0.22, 1, 0.36, 1)",Q_=(t,e,a)=>Math.min(a,Math.max(e,t)),RP=t=>typeof t=="number"?`${t}px`:t,DP=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},j_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?$_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function LP(){let t=(0,ea.useRef)(null);return fu(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:eC}))},[]),ke.createElement("span",{ref:t,className:"stepper__check"},ke.createElement(Rs,{icon:cu,size:16,strokeWidth:2.4}))}function pm({children:t}){return ke.createElement("div",{className:"stepper__step"},t)}function tF({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:u,showFooter:h=!0,backButtonText:f="Back",nextButtonText:d="Continue",completeButtonText:m="Complete",backButtonProps:v={},nextButtonProps:I={},completedContent:p,theme:g="dark",accentColor:y="#00f5ff",frame:x=!0,radius:b=20,width:C=620,className:T="",stepCircleContainerClassName:S="",stepContainerClassName:w="",contentClassName:A="",footerClassName:L="",style:X,...z}){let B=ea.Children.toArray(t).filter(ea.isValidElement),U=B.length,ae=typeof e=="number",[J,se]=(0,ea.useState)(a),G=Q_(Math.round(ae?e:J),1,U+1),K=G>U,oe=s==="vertical",De=oe?"numbers":r,Ce=B.some(me=>me.props.title),[$e,H]=(0,ea.useState)(!1),[lt,ee]=(0,ea.useState)(!1),te=oe&&!$e,[Ee,Ke]=(0,ea.useState)(G);G>Ee&&Ke(G);let[Me,Ye]=(0,ea.useState)({step:G,previous:null,direction:1,id:0});Me.step!==G&&Ye({step:G,previous:Me.step,direction:G>Me.step?1:-1,id:Me.id+1});let Qe=(0,ea.useRef)(null),$=(0,ea.useRef)(null),le=(0,ea.useRef)(null),Ie=(0,ea.useRef)([]),ie=(0,ea.useRef)([]),fe=(0,ea.useRef)(null),be=(0,ea.useRef)(null),Xe=(0,ea.useRef)(null),Ne=(0,ea.useRef)(0),Be=(0,ea.useRef)([]),R=(0,ea.useRef)(!1);R.current=lt;let it=(0,ea.useRef)(!1),tt=me=>{let ge=Q_(me,1,U+1);ge!==G&&(ae||se(ge),ge>U?n():o(ge))},_=me=>!c&&me!==G&&(!l||me<=Math.min(Ee,U));fu(()=>{let me=Qe.current;if(!me)return;let ge=()=>{let P=oe&&me.clientWidth<520;H(P);let Se=$.current;if(!Se||!Ce||oe&&!P){ee(!1);return}let ne=Ie.current.slice(0,U);R.current||ne.forEach((Ve,qe)=>{let vt=ie.current[qe];Be.current[qe]=vt&&Ve?.contains(vt)?vt.scrollWidth+8:0});let we=ne.reduce((Ve,qe)=>Ve+(qe?.firstElementChild?.getBoundingClientRect().width??22)+20,0),Re=Be.current.slice(0,U).reduce((Ve,qe)=>Ve+(qe||0),0),de=Se.clientWidth-8-4*Math.max(0,U-1);ee(we+Re>de+.5)};ge();let ve=new ResizeObserver(ge);return ve.observe(me),()=>ve.disconnect()},[oe,Ce,x,U,De]),fu(()=>{let me=fe.current;if(!me)return;Ne.current=me.offsetHeight;let ge=new ResizeObserver(()=>{Ne.current=me.offsetHeight});return ge.observe(me),()=>ge.disconnect()},[]),fu(()=>{if(Me.id===0)return;let me=fe.current,ge=be.current,ve=Xe.current,P=Me.id,Se=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ne=i==="none"?"none":Se?"fade":i,we=()=>Ye(xt=>xt.id===P?{...xt,previous:null}:xt);if(ve&&ge&&ve.contains(document.activeElement)&&ge.focus({preventScroll:!0}),!me||typeof me.animate!="function"||ne==="none"){we();return}for(let xt of[me,ge,ve])xt?.getAnimations().forEach(_a=>_a.cancel());let Re=Ne.current,de=me.offsetHeight,Ve=j_();Math.abs(Re-de)>.5&&me.animate([{height:`${Re}px`},{height:`${de}px`}],{duration:Se?200:560,easing:Se?eC:Ve});let qe=oe?"Y":"X",vt=ne==="slide"?36:0;if(ge&&(vt&&ge.animate([{transform:`translate${qe}(${Me.direction*vt}px)`},{transform:"none"}],{duration:560,easing:Ve}),ge.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),ve){ve.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let xt=ve.animate([{transform:"none"},{transform:`translate${qe}(${-Me.direction*vt}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});xt.onfinish=we}else we()},[Me.id]),fu(()=>{let me=$.current,ge=le.current;if(!me||!ge)return;let ve=Se=>{let ne=Ie.current[Math.min(G,U)-1];if(!ne)return;let we=j_();ge.style.transition=Se?`transform 560ms ${we}, width 560ms ${we}, height 560ms ${we}, opacity 200ms ease`:"opacity 200ms ease",ge.style.transform=`translate3d(${ne.offsetLeft}px, ${ne.offsetTop}px, 0)`,ge.style.width=`${ne.offsetWidth}px`,ge.style.height=`${ne.offsetHeight}px`,ge.style.opacity=K?"0":"1"};ve(it.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),it.current=!0;let P=new ResizeObserver(()=>ve(!1));return P.observe(me),()=>P.disconnect()},[G,U,K,De,Ce,oe,$e,lt]);let F=me=>me>U?p??null:B[me-1],N=y?{"--stepper-solid":y,"--stepper-solid-ink":DP(y)}:{},q=(me,ge,ve)=>ke.createElement("span",{className:"stepper__badge","data-status":ve},ve==="complete"?ke.createElement(LP,null):me.props.icon?ke.createElement("span",{className:"stepper__glyph"},me.props.icon):ge),re=()=>De==="dots"?ke.createElement("div",{className:"stepper__dots"},B.map((me,ge)=>{let ve=ge+1,P=K||ve<G?"complete":ve===G?"active":"upcoming";return ke.createElement("button",{key:ve,type:"button",className:"stepper__dot","data-status":P,"aria-label":me.props.title?`Step ${ve}: ${me.props.title}`:`Step ${ve}`,"aria-current":ve===G?"step":void 0,disabled:!_(ve),onClick:()=>tt(ve)},ke.createElement("span",{className:"stepper__dot-mark","data-status":P}))})):De==="bars"?ke.createElement("div",{className:"stepper__bars"},B.map((me,ge)=>{let ve=ge+1,P=K||ve<=G;return ke.createElement("button",{key:ve,type:"button",className:"stepper__bar","data-status":K||ve<G?"complete":ve===G?"active":"upcoming","aria-label":me.props.title?`Step ${ve}: ${me.props.title}`:`Step ${ve}`,"aria-current":ve===G?"step":void 0,disabled:!_(ve),onClick:()=>tt(ve)},ke.createElement("span",{className:"stepper__bar-track"},ke.createElement("span",{className:"stepper__bar-fill","data-filled":P?"":void 0})))})):ke.createElement("div",{ref:$,className:"stepper__track","data-layout":te?"rail":"row"},ke.createElement("span",{ref:le,className:"stepper__glider","aria-hidden":"true"}),B.map((me,ge)=>{let ve=ge+1,P=K||ve<G?"complete":ve===G?"active":"upcoming",Se=me.props.title,ne=Se&&!(lt&&!te)&&ke.createElement("span",{className:"stepper__text"},ke.createElement("span",{ref:Re=>{ie.current[ge]=Re},className:"stepper__title","data-status":P},Se),te&&me.props.description&&ke.createElement("span",{className:"stepper__description"},me.props.description)),we=Re=>{Ie.current[ge]=Re};return u?ke.createElement("div",{key:ve,ref:we,className:"stepper__segment","data-status":P},u({step:ve,currentStep:G,onStepClick:Re=>tt(Re)}),ne):ke.createElement("button",{key:ve,ref:we,type:"button",className:"stepper__segment","data-status":P,"aria-label":typeof Se=="string"?`Step ${ve}: ${Se}`:`Step ${ve}`,"aria-current":ve===G?"step":void 0,disabled:!_(ve),onClick:()=>tt(ve)},q(me,ve,P),ne)})),ye=G===U,xe=ye?m:d,{className:j="",onClick:V,...ue}=v,{className:Te="",onClick:D,...Pe}=I;return ke.createElement("div",{...z,ref:Qe,className:`stepper stepper--${te?"vertical":"horizontal"}${x?" stepper--framed":""} ${S} ${T}`.replace(/\s+/g," ").trim(),"data-completed":K?"":void 0,style:{...J_[g]??J_.dark,"--stepper-radius":`${Math.max(0,b)}px`,"--stepper-spring":$_,"--stepper-width":RP(C),...N,...X}},ke.createElement("div",{className:`stepper__header stepper__header--${De} ${w}`.trim()},re()),ke.createElement("div",{className:"stepper__body"},ke.createElement("div",{ref:fe,className:`stepper__viewport ${A}`.trim(),"aria-live":"polite"},Me.previous!==null&&ke.createElement("div",{key:Me.id-1,ref:Xe,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},F(Me.previous)),ke.createElement("div",{key:Me.id,ref:be,className:"stepper__pane",tabIndex:-1},F(Me.step))),h&&ke.createElement("div",{className:"stepper__footer-wrap","data-hidden":K?"":void 0,"aria-hidden":K?!0:void 0},ke.createElement("div",{className:"stepper__footer-clip"},ke.createElement("div",{className:`stepper__footer ${L}`.trim()},ke.createElement("button",{type:"button",...ue,className:`stepper__button stepper__button--back ${j}`.trim(),"data-hidden":G<=1?"":void 0,tabIndex:K?-1:ue.tabIndex,onClick:me=>{V?.(me),me.defaultPrevented||tt(G-1)}},ke.createElement(Rs,{icon:nr,size:16,strokeWidth:2}),ke.createElement("span",null,f)),ke.createElement("button",{type:"button",...Pe,className:`stepper__button stepper__button--next ${Te}`.trim(),tabIndex:K?-1:Pe.tabIndex,onClick:me=>{D?.(me),me.defaultPrevented||tt(G+1)}},ke.createElement("span",null,xe),ke.createElement(Rs,{icon:ye?cu:Dr,size:16,strokeWidth:2})))))),x&&ke.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var PP=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function aF(){let[t,e]=(0,nt.useState)(1),[a,o]=(0,nt.useState)(""),[n,r]=(0,nt.useState)("Project Inquiry"),[s,i]=(0,nt.useState)(""),[l,c]=(0,nt.useState)(!1),[u,h]=(0,nt.useState)(""),f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return nt.default.createElement("div",{className:"stepper-quick-message-container"},nt.default.createElement("div",{className:"stepper-qm-header"},nt.default.createElement("div",{className:"stepper-qm-badge"},nt.default.createElement("span",{className:"pulse-dot-cyan"}),nt.default.createElement("span",null,"Send a Quick Message")),nt.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),nt.default.createElement(tF,{step:t,onStepChange:v=>{h(""),e(v)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!f||l},onFinalStepCompleted:async()=>{if(!f){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let v=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(v&&v.success)e(4);else throw new Error(v&&v.error||"Failed to send message. Please retry.")}catch(v){h(v.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:nt.default.createElement("div",{className:"stepper-complete-card"},nt.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),nt.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),nt.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",nt.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),nt.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},nt.default.createElement(pm,{title:"Email"},nt.default.createElement("div",{className:"step-pane-content"},nt.default.createElement("h3",{className:"step-title"},"Where should I reply?"),nt.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),nt.default.createElement("div",{className:"step-input-box"},nt.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},nt.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),nt.default.createElement("polyline",{points:"22,6 12,13 2,6"})),nt.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:v=>{o(v.target.value),u&&h("")},className:"step-text-input"})),!f&&a.length>0&&nt.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),f&&nt.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),nt.default.createElement(pm,{title:"Details"},nt.default.createElement("div",{className:"step-pane-content"},nt.default.createElement("h3",{className:"step-title"},"What is this regarding?"),nt.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),nt.default.createElement("div",{className:"intent-pills-grid"},PP.map(v=>nt.default.createElement("button",{key:v.id,type:"button",className:`intent-pill ${n===v.id?"active":""}`,onClick:()=>r(v.id)},nt.default.createElement("span",{className:"intent-pill-label"},v.label)))),nt.default.createElement("div",{className:"step-message-box"},nt.default.createElement("label",{className:"step-message-label"},"Your Message ",nt.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),nt.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:v=>i(v.target.value),className:"step-textarea"})))),nt.default.createElement(pm,{title:"Review"},nt.default.createElement("div",{className:"step-pane-content"},nt.default.createElement("h3",{className:"step-title"},"Ready to transmit"),nt.default.createElement("p",{className:"step-desc"},"Review your message before sending."),nt.default.createElement("div",{className:"review-summary-card"},nt.default.createElement("div",{className:"review-row"},nt.default.createElement("span",{className:"review-label"},"Your Email:"),nt.default.createElement("span",{className:"review-value cyan"},a)),nt.default.createElement("div",{className:"review-row"},nt.default.createElement("span",{className:"review-label"},"Topic:"),nt.default.createElement("span",{className:"review-value"},n)),s?nt.default.createElement("div",{className:"review-row column"},nt.default.createElement("span",{className:"review-label"},"Message:"),nt.default.createElement("p",{className:"review-quote"},'"',s,'"')):nt.default.createElement("div",{className:"review-row"},nt.default.createElement("span",{className:"review-label"},"Message:"),nt.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),u&&nt.default.createElement("div",{className:"step-error-banner"},nt.default.createElement("span",null,"\u26A0 ",u))))))}ht();var rr=mn(Lo());var tC=`.profile-card {
  --pc-light-x: 50%;
  --pc-light-y: 50%;
  --pc-pointer-x: 50%;
  --pc-pointer-y: 50%;
  --pc-band-x: 50%;
  --pc-band-y: 50%;
  --pc-reach: 0;
  --pc-rotate-x: 0deg;
  --pc-rotate-y: 0deg;
  --pc-shift-x: 0px;
  --pc-shift-y: 0px;
  --pc-tilt: 0;
  --pc-active: 0;
  --pc-pattern: url('/assets/csharp-pattern.svg');
  --pc-pattern-size: 200px 200px;
  position: relative;
  width: 340px;
  max-width: 100%;
  perspective: 1000px;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  margin: 0 auto;
}

.profile-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: calc(var(--pc-radius) + 10px);
  background: var(--pc-frame);
  box-shadow: var(--pc-frame-shadow);
  -webkit-backdrop-filter: blur(20px) saturate(1.6);
  backdrop-filter: blur(20px) saturate(1.6);
  transform: rotateX(var(--pc-rotate-x)) rotateY(var(--pc-rotate-y));
  will-change: transform;
}

.profile-card__tile {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--pc-radius);
  background: var(--pc-backdrop);
  box-shadow: var(--pc-tile-shadow);
  overflow: hidden;
  isolation: isolate;
}

.profile-card__sheen,
.profile-card__holo,
.profile-card__scrim,
.profile-card__tile-rim,
.profile-card__glare,
.profile-card__shade,
.profile-card__rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.profile-card__sheen {
  background: radial-gradient(
    farthest-corner circle at calc(var(--pc-light-x) - 10px) calc(var(--pc-light-y) - 10px),
    var(--pc-sheen) 0%,
    transparent 55%
  );
  opacity: calc(var(--pc-holo) * var(--pc-active));
}

.profile-card__holo {
  --pc-spectrum: repeating-linear-gradient(
    0deg,
    hsl(2, 100%, 73%) 5%,
    hsl(53, 100%, 69%) 10%,
    hsl(93, 100%, 69%) 15%,
    hsl(176, 100%, 76%) 20%,
    hsl(228, 100%, 74%) 25%,
    hsl(260, 100%, 76%) 30%,
    hsl(2, 100%, 73%) 35%
  );
  --pc-bars: repeating-linear-gradient(
    -45deg,
    #0e152e 0%,
    hsl(180, 10%, 60%) 3.8%,
    hsl(180, 29%, 66%) 4.5%,
    hsl(180, 10%, 60%) 5.2%,
    #0e152e 10%,
    #0e152e 12%
  );
  --pc-falloff: radial-gradient(
    farthest-corner circle at var(--pc-pointer-x) var(--pc-pointer-y),
    hsla(0, 0%, 0%, 0.1) 12%,
    hsla(0, 0%, 0%, 0.15) 20%,
    hsla(0, 0%, 0%, 0.25) 120%
  );
  background-image: var(--pc-spectrum), var(--pc-bars), var(--pc-falloff);
  background-position:
    0 var(--pc-band-y),
    var(--pc-band-x) var(--pc-band-y),
    center;
  background-size:
    500% 500%,
    300% 300%,
    200% 200%;
  background-blend-mode: color, hard-light;
  mix-blend-mode: var(--pc-blend);
  filter: brightness(calc(0.66 + 0.19 * var(--pc-active))) contrast(calc(1.33 + 0.17 * var(--pc-active)))
    saturate(calc(0.33 + 0.17 * var(--pc-active))) var(--pc-holo-filter);
  opacity: calc(var(--pc-holo) * var(--pc-holo-gain) * (0.5 + 0.5 * var(--pc-active)));
  -webkit-mask-image: var(--pc-pattern);
  -webkit-mask-size: var(--pc-pattern-size);
  -webkit-mask-position: calc(50% - var(--pc-shift-x) * 1.5) calc(65% - var(--pc-shift-y) * 1.5);
  -webkit-mask-repeat: repeat;
  mask-image: var(--pc-pattern);
  mask-size: var(--pc-pattern-size);
  mask-position: calc(50% - var(--pc-shift-x) * 1.5) calc(65% - var(--pc-shift-y) * 1.5);
  mask-repeat: repeat;
}

.profile-card__holo-glow,
.profile-card__holo-shift {
  position: absolute;
  inset: 0;
  opacity: calc(var(--pc-active) * var(--pc-holo-detail));
}

.profile-card__holo-glow {
  background-image:
    linear-gradient(
      45deg,
      hsl(176, 100%, 76%),
      hsl(228, 100%, 74%),
      hsl(260, 100%, 76%),
      hsl(2, 100%, 73%),
      hsl(53, 100%, 69%),
      hsl(93, 100%, 69%)
    ),
    radial-gradient(circle at var(--pc-pointer-x) var(--pc-pointer-y), hsl(0, 0%, 70%) 0%, hsla(0, 0%, 30%, 0.2) 90%),
    var(--pc-grain);
  background-size:
    250% 250%,
    100% 100%,
    220px 220px;
  background-position:
    var(--pc-pointer-x) var(--pc-pointer-y),
    center,
    0 0;
  background-blend-mode: color-dodge;
  filter: brightness(calc(2 - var(--pc-reach))) contrast(calc(var(--pc-reach) + 2))
    saturate(calc(0.5 + var(--pc-reach)));
  mix-blend-mode: luminosity;
}

.profile-card__holo-shift {
  background-image: var(--pc-spectrum), var(--pc-bars), var(--pc-falloff);
  background-position:
    0 var(--pc-band-y),
    calc(var(--pc-band-x) * 0.4) calc(var(--pc-band-y) * 0.5),
    center;
  background-size:
    200% 300%,
    700% 700%,
    100% 100%;
  background-blend-mode: color, hard-light;
  mix-blend-mode: difference;
  filter: brightness(0.8) contrast(1.5);
}

.profile-card__photo {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 106% !important;
  height: 92% !important;
  max-width: none !important;
  max-height: none !important;
  object-fit: contain;
  object-position: center bottom;
  transform: translate3d(calc(-50% + var(--pc-shift-x)), var(--pc-shift-y), 0);
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}

.profile-card__scrim {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.57) 6%,
    rgba(0, 0, 0, 0.5) 12%,
    rgba(0, 0, 0, 0.4) 19%,
    rgba(0, 0, 0, 0.28) 26%,
    rgba(0, 0, 0, 0.16) 33%,
    rgba(0, 0, 0, 0.07) 40%,
    rgba(0, 0, 0, 0.02) 46%,
    rgba(0, 0, 0, 0) 52%
  );
}

.profile-card__info {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 18px;
  color: #ffffff;
}

.profile-card__name {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: inherit;
}

.profile-card__title {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.78);
}

.profile-card__tile-rim {
  box-shadow:
    inset 0 0 0 1px var(--pc-tile-edge),
    inset 0 1px 0 var(--pc-tile-highlight);
}

.profile-card__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 6px 20px 8px;
}

.profile-card__avatar {
  position: relative;
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--pc-tile);
  overflow: hidden;
}

.profile-card__avatar::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px var(--pc-tile-edge);
}

.profile-card__avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.profile-card__meta {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.profile-card__handle {
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--pc-ink);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.profile-card__status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  line-height: 1.25;
  color: var(--pc-muted);
  white-space: nowrap;
}

.profile-card__status::before {
  content: '';
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pc-status);
}

.profile-card__contact {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: none;
  height: 36px;
  padding: 0 14px;
  border: none;
  border-radius: calc(var(--pc-radius) * 0.75);
  background: var(--pc-tile);
  box-shadow:
    inset 0 0 0 1px var(--pc-tile-edge),
    inset 0 1px 0 var(--pc-tile-highlight),
    var(--pc-tile-shadow);
  color: var(--pc-ink);
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;
}

.profile-card__contact:active {
  filter: var(--pc-press);
  transform: scale(0.96);
  transition-duration: 0s;
}

.profile-card__contact:focus-visible {
  outline: 2px solid var(--pc-ink);
  outline-offset: 2px;
}

.profile-card__glare {
  background: radial-gradient(
    farthest-corner circle at var(--pc-light-x) var(--pc-light-y),
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.36) 20%,
    rgba(255, 255, 255, 0) 60%
  );
  mix-blend-mode: overlay;
  opacity: calc(var(--pc-glare) * var(--pc-active));
}

.profile-card__shade {
  background: radial-gradient(
    farthest-corner circle at var(--pc-light-x) var(--pc-light-y),
    transparent 30%,
    var(--pc-shade) 100%
  );
  opacity: calc(var(--pc-glare) * var(--pc-tilt));
}

.profile-card__rim {
  box-shadow:
    inset 0 0 0 1px var(--pc-frame-edge),
    inset 0 1px 0 var(--pc-frame-highlight);
}

@media (hover: hover) {
  .profile-card__contact:hover {
    filter: var(--pc-hover);
  }

  .profile-card__contact:hover:active {
    filter: var(--pc-press);
  }
}
`;var kP={dark:{"--pc-frame":"rgba(38, 35, 46, 0.66)","--pc-frame-edge":"rgba(255, 255, 255, 0.08)","--pc-frame-highlight":"rgba(255, 255, 255, 0.07)","--pc-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--pc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--pc-tile-edge":"rgba(255, 255, 255, 0.07)","--pc-tile-highlight":"rgba(255, 255, 255, 0.12)","--pc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--pc-ink":"#f4f4f5","--pc-muted":"rgba(244, 244, 245, 0.6)","--pc-hover":"brightness(1.12)","--pc-press":"brightness(0.8)","--pc-shade":"rgba(0, 0, 0, 0.4)"},light:{"--pc-frame":"rgba(240, 240, 243, 0.8)","--pc-frame-edge":"rgba(24, 24, 27, 0.07)","--pc-frame-highlight":"rgba(255, 255, 255, 0.95)","--pc-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--pc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--pc-tile-edge":"rgba(24, 24, 27, 0.08)","--pc-tile-highlight":"rgba(255, 255, 255, 1)","--pc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--pc-ink":"#27272a","--pc-muted":"rgba(39, 39, 42, 0.6)","--pc-hover":"brightness(0.97)","--pc-press":"brightness(0.92)","--pc-shade":"rgba(24, 24, 27, 0.14)"}},UP={dark:{"--pc-blend":"color-dodge","--pc-holo-filter":"hue-rotate(0deg)","--pc-sheen":"rgba(255, 255, 255, 0.16)"},light:{"--pc-blend":"multiply","--pc-holo-filter":"invert(1) hue-rotate(180deg)","--pc-sheen":"rgba(255, 255, 255, 0)"}},NP=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`,hm=(t,e,a)=>Math.min(a,Math.max(e,t)),OP=t=>{let e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(t).trim());if(!e)return null;let a=e[1].length===3?e[1].replace(/./g,s=>s+s):e[1],[o,n,r]=[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255);return .2126*o+.7152*n+.0722*r<.5},zP=({avatarUrl:t="",iconUrl:e="assets/csharp-pattern.svg",miniAvatarUrl:a,name:o="Javi A. Torres",title:n="Software Engineer",handle:r="javicodes",status:s="Online",statusColor:i="#22c55e",contactText:l="Contact",showUserInfo:c=!0,onContactClick:u,theme:h="dark",backdropColor:f,radius:d=16,holo:m=.8,glare:v=.5,enableTilt:I=!0,tiltStrength:p=12,parallax:g=8,enableMobileTilt:y=!1,mobileTiltSensitivity:x=5,intro:b=!0,className:C=""})=>{let T=(0,rr.useRef)(null),S=(0,rr.useRef)(null),w={enableTilt:I,tiltStrength:p,parallax:g,mobileTiltSensitivity:x,intro:b},A=(0,rr.useRef)(w);A.current=w,(0,rr.useEffect)(()=>{let U=T.current;if(!U)return;let ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,J={width:U.offsetWidth,height:U.offsetHeight},se={p:0,v:0,target:0},G={p:0,v:0,target:0},K={p:0,target:0},oe=0,De=0,Ce=0,$e=null,H=()=>{let{enableTilt:ie,tiltStrength:fe,parallax:be}=A.current,Xe=ie&&!ae?fe:0,Ne=Math.min(1,Math.hypot(se.p,G.p)),Be=U.style;Be.setProperty("--pc-light-x",`${((se.p+1)*.5*J.width).toFixed(1)}px`),Be.setProperty("--pc-light-y",`${((G.p+1)*.5*J.height).toFixed(1)}px`),Be.setProperty("--pc-pointer-x",`${((se.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-pointer-y",`${((G.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-band-x",`${(50+se.p*15).toFixed(2)}%`),Be.setProperty("--pc-band-y",`${(50+G.p*15).toFixed(2)}%`),Be.setProperty("--pc-rotate-x",`${(G.p*Xe).toFixed(3)}deg`),Be.setProperty("--pc-rotate-y",`${(-se.p*Xe).toFixed(3)}deg`),Be.setProperty("--pc-shift-x",`${(se.p*(ae?0:be)).toFixed(2)}px`),Be.setProperty("--pc-shift-y",`${(G.p*(ae?0:be)).toFixed(2)}px`),Be.setProperty("--pc-reach",Ne.toFixed(4)),Be.setProperty("--pc-tilt",(Ne*K.p).toFixed(4)),Be.setProperty("--pc-active",K.p.toFixed(4))},lt=ie=>{let fe=Math.min(.05,(ie-De)/1e3||0);De=ie;let be=ie<Ce,Xe=be?24:120,Ne=be?9:16,Be=Math.max(1,Math.ceil(fe/(1/120))),R=fe/Be;for(let _=0;_<Be;_++)for(let F of[se,G])F.v+=(Xe*(F.target-F.p)-Ne*F.v)*R,F.p+=F.v*R;let it=K.target>K.p?.18:be?.9:.45;K.p+=(K.target-K.p)*(1-Math.exp(-fe/it)),H(),Math.abs(se.target-se.p)>5e-4||Math.abs(G.target-G.p)>5e-4||Math.abs(se.v)>5e-4||Math.abs(G.v)>5e-4||Math.abs(K.target-K.p)>.002?oe=requestAnimationFrame(lt):(se.p=se.target,G.p=G.target,K.p=K.target,H(),oe=0)},ee=()=>{oe||(De=performance.now(),oe=requestAnimationFrame(lt))},te=(ie,fe,be=!0)=>{se.target=hm(ie,-1,1),G.target=hm(fe,-1,1),K.target=be?1:0,Ce=0,ee()},Ee=ie=>{let fe=U.getBoundingClientRect();!fe.width||!fe.height||te((ie.clientX-fe.left)/fe.width*2-1,(ie.clientY-fe.top)/fe.height*2-1)},Ke=()=>te(0,0,!1),Me=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ee(ie)},Ye=ie=>{(ie.pointerType==="mouse"||!ie.pointerType||ie.pointerId===$e)&&Ee(ie)},Qe=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ke()},$=ie=>{ie.pointerType!=="mouse"&&($e=ie.pointerId,Ee(ie))},le=ie=>{ie.pointerId===$e&&($e=null,Ke())};U.addEventListener("pointerenter",Me),U.addEventListener("pointermove",Ye),U.addEventListener("pointerleave",Qe),U.addEventListener("pointerdown",$),U.addEventListener("pointerup",le),U.addEventListener("pointercancel",le),U.addEventListener("mousemove",Ye),U.addEventListener("mouseleave",Ke);let Ie=new ResizeObserver(()=>{J.width=U.offsetWidth,J.height=U.offsetHeight,H()});return Ie.observe(U),S.current={aim:te,release:Ke,write:H},A.current.intro&&!ae?(se.p=.62,G.p=-.55,K.p=1,Ce=performance.now()+1400,H(),ee()):H(),()=>{cancelAnimationFrame(oe),Ie.disconnect(),U.removeEventListener("pointerenter",Me),U.removeEventListener("pointermove",Ye),U.removeEventListener("pointerleave",Qe),U.removeEventListener("pointerdown",$),U.removeEventListener("pointerup",le),U.removeEventListener("pointercancel",le),U.removeEventListener("mousemove",Ye),U.removeEventListener("mouseleave",Ke),S.current=null}},[]),(0,rr.useEffect)(()=>{S.current?.write()},[I,p,g]),(0,rr.useEffect)(()=>{let U=T.current;if(!U||!y)return;let ae=!1,J=K=>{if(K.beta==null||K.gamma==null)return;let oe=A.current.mobileTiltSensitivity;S.current?.aim(K.gamma*oe/150,(K.beta-20)*oe/150)},se=()=>{ae||(ae=!0,window.addEventListener("deviceorientation",J))},G=()=>{let K=window.DeviceOrientationEvent;K&&typeof K.requestPermission=="function"?K.requestPermission().then(oe=>{oe==="granted"&&se()}).catch(()=>{}):se()};return U.addEventListener("click",G),()=>{U.removeEventListener("click",G),window.removeEventListener("deviceorientation",J)}},[y]);let L=h==="light"?"light":"dark",X=f?OP(f)??L==="dark"?"dark":"light":L,z=f?`linear-gradient(180deg, color-mix(in srgb, ${f}, #ffffff 12%) 0%, color-mix(in srgb, ${f}, #000000 18%) 100%)`:"var(--pc-tile)",B=e?e.startsWith("/")||e.startsWith("http")||e.startsWith("data:")?e:`/${e}`:"/assets/csharp-pattern.svg";return ke.createElement("div",{ref:T,className:`profile-card ${C}`.trim(),style:{...kP[L],...UP[X],"--pc-radius":`${Math.max(0,d)}px`,"--pc-backdrop":z,"--pc-holo":hm(m,0,1),"--pc-glare":hm(v,0,1),"--pc-parallax":`${Math.max(0,g)}px`,"--pc-status":i,"--pc-grain":NP,"--pc-pattern":`url("${B}")`,"--pc-pattern-size":"200px 200px","--pc-holo-gain":1.25,"--pc-holo-detail":X==="dark"?1:0}},ke.createElement("div",{className:"profile-card__body"},ke.createElement("div",{className:"profile-card__tile"},ke.createElement("span",{className:"profile-card__sheen"}),ke.createElement("span",{className:"profile-card__holo"},ke.createElement("span",{className:"profile-card__holo-glow"}),ke.createElement("span",{className:"profile-card__holo-shift"})),t&&ke.createElement("img",{className:"profile-card__photo",src:t,alt:o||"",loading:"lazy",draggable:!1}),(o||n)&&ke.createElement(ke.Fragment,null,ke.createElement("span",{className:"profile-card__scrim"}),ke.createElement("div",{className:"profile-card__info"},o&&ke.createElement("h3",{className:"profile-card__name"},o),n&&ke.createElement("p",{className:"profile-card__title"},n))),ke.createElement("span",{className:"profile-card__tile-rim"})),c&&ke.createElement("div",{className:"profile-card__footer"},a&&ke.createElement("span",{className:"profile-card__avatar"},ke.createElement("img",{src:a,alt:"",loading:"lazy",draggable:!1})),ke.createElement("div",{className:"profile-card__meta"},r&&ke.createElement("span",{className:"profile-card__handle"},"@",r),s&&ke.createElement("span",{className:"profile-card__status"},s)),l&&ke.createElement("button",{type:"button",className:"profile-card__contact",onClick:u,"aria-label":o?`${l} ${o}`:l},ke.createElement(Rs,{icon:Lr,size:16,strokeWidth:1.8}),l)),ke.createElement("span",{className:"profile-card__glare"}),ke.createElement("span",{className:"profile-card__shade"}),ke.createElement("span",{className:"profile-card__rim"})))},aC=(0,rr.memo)(zP);ht();var ot=mn(Lo());ht();var je=mn(Lo());var oC=`.folder-root {
  --folder-ground: rgba(0, 0, 0, 0.42);
  --folder-ground-soft: rgba(0, 0, 0, 0.26);
  --folder-focus: #ffffff;
  position: relative;
  display: inline-block;
  width: var(--folder-w);
  height: calc(var(--folder-tab-h) + var(--folder-h));
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.folder-root[data-theme='light'] {
  --folder-ground: rgba(24, 22, 40, 0.16);
  --folder-ground-soft: rgba(24, 22, 40, 0.1);
  --folder-focus: #18181b;
}

.folder-stage {
  position: absolute;
  inset: 0;
  perspective: var(--folder-depth);
  perspective-origin: calc(var(--folder-w) / 2) calc(var(--folder-tab-h) + var(--folder-h) / 2);
  cursor: pointer;
  outline: none;
  isolation: isolate;
}

.folder-layer {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  will-change: transform;
}

.folder-ground {
  z-index: 1;
  width: var(--folder-w);
  pointer-events: none;
}

.folder-root[data-mode='book'] .folder-ground,
.folder-cast {
  height: var(--folder-h);
  border-radius: var(--folder-front-radius);
  box-shadow:
    0 calc(1px * var(--folder-scale)) calc(2px * var(--folder-scale)) var(--folder-ground),
    0 calc(10px * var(--folder-scale)) calc(28px * var(--folder-scale)) var(--folder-ground-soft);
}

.folder-cast {
  z-index: 1;
  width: var(--folder-w);
  height: calc(var(--folder-h) - var(--folder-front-y) + var(--folder-tab-h));
  pointer-events: none;
}

.folder-root[data-mode='flap'] .folder-ground {
  height: calc(var(--folder-h) * 0.14);
  margin-top: calc(var(--folder-h) * -0.07);
  border-radius: 50%;
  background: var(--folder-ground);
  filter: blur(calc(var(--folder-h) * 0.05));
}

.folder-back {
  z-index: 4;
  width: var(--folder-w);
  height: calc(var(--folder-tab-h) + var(--folder-h));
}

.folder-back-fill {
  position: absolute;
  inset: 0;
}

.folder-gutter {
  position: absolute;
  top: var(--folder-tab-h);
  bottom: 0;
  left: 0;
  width: calc(12px * var(--folder-scale));
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0));
  opacity: var(--folder-gutter, 0);
}

.folder-back-rim {
  position: absolute;
  inset: 0;
  overflow: visible;
  pointer-events: none;
}

.folder-focus {
  fill: none;
  stroke: none;
}

.folder-stage:focus-visible .folder-focus {
  stroke: var(--folder-focus);
  stroke-width: 2;
}

.folder-tab-text {
  position: absolute;
  top: 0;
  display: flex;
  height: var(--folder-tab-h);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding-top: calc(1px * var(--folder-scale));
  overflow: hidden;
  color: var(--folder-tab-ink);
  opacity: var(--folder-label, 1);
  font-size: calc(10.5px * var(--folder-scale));
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.folder-measure {
  left: 0;
  width: auto;
  padding: 0;
  visibility: hidden;
  pointer-events: none;
}

.folder-item {
  z-index: 10;
  width: var(--folder-doc-w);
  height: var(--folder-doc-h);
  overflow: hidden;
  border-radius: calc(8px * var(--folder-scale));
  background: var(--folder-paper);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: flat;
  box-shadow:
    0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 calc(1px * var(--folder-scale)) calc(2px * var(--folder-scale)) rgba(0, 0, 0, 0.12),
    0 calc((2px + var(--folder-lift, 0) * 16px) * var(--folder-scale)) calc((5px + var(--folder-lift, 0) * 26px) * var(--folder-scale)) rgba(0, 0, 0, calc(0.1 + var(--folder-lift, 0) * 0.14));
  outline: none;
}

.folder-root[data-open] .folder-item {
  cursor: pointer;
}

.folder-root[data-draggable] .folder-item {
  cursor: grab;
  touch-action: none;
}

.folder-root[data-dragging],
.folder-root[data-dragging] * {
  cursor: grabbing !important;
}

.folder-item:focus-visible {
  outline: 2px solid var(--folder-focus);
  outline-offset: 3px;
}

.folder-shade {
  z-index: 39;
  width: var(--folder-w);
  height: var(--folder-front-h);
  border-radius: var(--folder-front-radius);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.16));
  filter: blur(calc(6px * var(--folder-scale)));
  opacity: 0;
  pointer-events: none;
}

.folder-front {
  z-index: 40;
  width: var(--folder-w);
  height: var(--folder-front-h);
}

.folder-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: var(--folder-front-radius);
}

.folder-face::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    linear-gradient(rgba(255, 255, 255, var(--folder-glint, 0)), rgba(255, 255, 255, var(--folder-glint, 0))),
    rgba(0, 0, 0, var(--folder-dim, 0));
  pointer-events: none;
}

.folder-face-inner,
.folder-front[data-face='inner'] .folder-face-outer {
  visibility: hidden;
}

.folder-face-inner {
  left: -1px;
}

.folder-front[data-face='inner'] .folder-face-inner {
  visibility: visible;
}

.folder-inner-gutter {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(12px * var(--folder-scale));
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0));
}

.folder-root[data-variant='solid'] .folder-back-fill,
.folder-root[data-variant='solid'] .folder-face-inner {
  background: linear-gradient(180deg, var(--folder-inside-top), var(--folder-inside-bottom));
}

.folder-root[data-variant='solid'] .folder-face-outer {
  background: linear-gradient(160deg,
      var(--folder-front-top) 0%,
      var(--folder-base) 48%,
      var(--folder-front-bottom) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.folder-root[data-variant='glass'] .folder-back-fill {
  background: linear-gradient(180deg, var(--folder-inside-top), var(--folder-inside-bottom));
}

.folder-root[data-variant='glass'] .folder-face-outer,
.folder-root[data-variant='glass'] .folder-face-inner {
  background:
    linear-gradient(160deg,
      rgba(255, 255, 255, 0.34) 0%,
      rgba(255, 255, 255, 0.08) 46%,
      rgba(255, 255, 255, 0.16) 100%),
    rgba(var(--folder-rgb), 0.24);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(var(--folder-frost)) saturate(1.8);
  backdrop-filter: blur(var(--folder-frost)) saturate(1.8);
}

.folder-root[data-gl] .folder-face {
  visibility: hidden;
}

.folder-glass {
  position: absolute;
  z-index: 40;
  pointer-events: none;
}

.folder-root[data-variant='matte'] .folder-back-fill,
.folder-root[data-variant='matte'] .folder-face-inner {
  background: var(--folder-inside-bottom);
}

.folder-root[data-variant='matte'] .folder-face-outer {
  background: var(--folder-base);
}

.folder-doc {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  gap: calc(6px * var(--folder-scale));
  padding: calc(14px * var(--folder-scale)) calc(13px * var(--folder-scale));
}

.folder-doc-title {
  overflow: hidden;
  margin-bottom: calc(4px * var(--folder-scale));
  color: var(--folder-paper-text);
  font-size: calc(11px * var(--folder-scale));
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.folder-doc-text {
  margin-top: calc(-6px * var(--folder-scale));
  margin-bottom: calc(4px * var(--folder-scale));
  color: var(--folder-paper-ink-strong);
  font-size: calc(9px * var(--folder-scale));
  line-height: 1.3;
}

.folder-doc-heading {
  width: 56%;
  height: calc(7px * var(--folder-scale));
  flex: none;
  margin-bottom: calc(4px * var(--folder-scale));
  border-radius: 999px;
  background: var(--folder-paper-ink-strong);
}

.folder-doc-line {
  height: calc(4px * var(--folder-scale));
  flex: none;
  border-radius: 999px;
  background: var(--folder-paper-ink);
}

.folder-doc-block {
  height: calc(40px * var(--folder-scale));
  flex: none;
  margin: calc(3px * var(--folder-scale)) 0;
  border-radius: calc(5px * var(--folder-scale));
  background: var(--folder-paper-ink);
  opacity: 0.75;
}

.folder-photo {
  position: absolute;
  inset: calc(5px * var(--folder-scale));
  overflow: hidden;
  border-radius: calc(3px * var(--folder-scale));
}

.folder-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  -webkit-user-drag: none;
}

/* Custom Certification Card Styling inside Folder */
.cert-doc-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: calc(9px * var(--folder-scale)) calc(12px * var(--folder-scale)) calc(10px * var(--folder-scale));
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: #090d16;
  background: #ffffff;
  position: relative;
  border-radius: calc(8px * var(--folder-scale));
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.06);
  user-select: none;
  overflow: hidden;
}

.cert-doc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: calc(5px * var(--folder-scale));
  min-height: calc(20px * var(--folder-scale));
  flex-shrink: 0;
}

.cert-doc-logo-box {
  display: flex;
  align-items: center;
  max-width: 58%;
  height: calc(18px * var(--folder-scale));
  flex-shrink: 1;
  overflow: hidden;
}

.cert-doc-logo {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: left center;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: high-quality;
  filter: contrast(1.05);
}

.cert-doc-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: calc(7.5px * var(--folder-scale));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: 999px;
  color: #ffffff;
}

.cert-doc-badge.microsoft {
  background: linear-gradient(135deg, #0078d4, #00a4ef);
}

.cert-doc-badge.anthropic {
  background: linear-gradient(135deg, #c45b3d, #e07a5f);
}

.cert-doc-badge.simplilearn {
  background: linear-gradient(135deg, #d97706, #f59e0b);
}

.cert-doc-date {
  font-size: calc(7.5px * var(--folder-scale));
  font-weight: 700;
  color: #475569;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.cert-doc-date-badge {
  display: inline-flex;
  align-items: center;
  font-size: calc(7.2px * var(--folder-scale));
  font-weight: 700;
  color: #334155;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -0.01em;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 2.5px 7px;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
}

.cert-doc-title {
  font-size: calc(9.8px * var(--folder-scale));
  font-weight: 750;
  color: #020617;
  line-height: 1.28;
  margin-bottom: calc(2.5px * var(--folder-scale));
  word-break: break-word;
  flex-shrink: 0;
}

.cert-doc-issuer {
  font-size: calc(7.8px * var(--folder-scale));
  font-weight: 700;
  color: #0284c7;
  margin-bottom: calc(3px * var(--folder-scale));
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.cert-doc-desc {
  font-size: calc(7.4px * var(--folder-scale));
  line-height: 1.36;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: calc(4px * var(--folder-scale));
  flex: 1 1 auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.cert-doc-id {
  font-size: calc(6.8px * var(--folder-scale));
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  color: #475569;
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: calc(4px * var(--folder-scale));
  display: inline-block;
  align-self: flex-start;
  flex-shrink: 0;
}

.cert-doc-footer {
  margin-top: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding-top: calc(5px * var(--folder-scale));
  border-top: 1px dashed #cbd5e1;
  position: relative;
  z-index: 25;
  pointer-events: auto;
}

.cert-doc-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: calc(7.8px * var(--folder-scale));
  font-weight: 700;
  color: #ffffff !important;
  text-decoration: none;
  background: #0284c7 !important;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.35);
  padding: 3.5px 8px;
  border-radius: 5px;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  z-index: 30;
  pointer-events: auto;
  cursor: pointer;
}

.cert-doc-link:hover {
  background: #0369a1 !important;
  color: #ffffff !important;
}

.cert-doc-pdf-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: calc(7.8px * var(--folder-scale));
  font-weight: 700;
  color: #ffffff !important;
  text-decoration: none;
  background: #dc2626 !important;
  box-shadow: 0 2px 6px rgba(220, 38, 38, 0.35);
  padding: 3.5px 8px;
  border-radius: 5px;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  z-index: 30;
  pointer-events: auto;
  cursor: pointer;
}

.cert-doc-pdf-link:hover {
  background: #b91c1c !important;
  color: #ffffff !important;
}

.folder-item[data-focused="true"] {
  box-shadow: 0 35px 85px rgba(0, 0, 0, 0.75), 0 0 0 2.5px #00f5ff, 0 0 35px rgba(0, 245, 255, 0.45) !important;
  cursor: zoom-out !important;
  z-index: 9999 !important;
}

.folder-item[data-focused="true"] .cert-doc-card {
  box-shadow: inset 0 0 0 1px rgba(0, 245, 255, 0.2);
}

/* Certifications Layout & Details Pane */
.cert-interactive-container {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 24px 16px;
  position: relative;
}

@media (max-width: 960px) {
  .cert-interactive-container {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

.cert-folder-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  min-height: 480px;
  padding-top: 15px;
  z-index: 10;
}

.cert-folder-hint {
  margin-bottom: 75px;
  font-size: 11px;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.08);
  border: 1px solid rgba(0, 245, 255, 0.25);
  padding: 7px 16px;
  border-radius: 20px;
  box-shadow: 0 0 16px rgba(0, 245, 255, 0.15);
  animation: pulse-glow 2.5s infinite ease-in-out;
  z-index: 50;
}

@keyframes pulse-glow {

  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.02);
    box-shadow: 0 0 22px rgba(0, 245, 255, 0.3);
  }
}

.cert-details-column {
  position: relative;
  z-index: 2;
  padding: 32px 36px;
  border-radius: 20px;
  background: rgba(8, 12, 24, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cert-details-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.cert-details-logo-badge {
  background: #ffffff !important;
  padding: 6px 14px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  max-width: 60%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}

.cert-details-logo-img {
  max-height: 22px;
  max-width: 130px;
  object-fit: contain;
  display: block;
}

.cert-details-date {
  font-size: 12px;
  font-family: 'Roboto Mono', monospace;
  color: #94a3b8;
  letter-spacing: 0.05em;
}

.cert-details-date-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.08);
  border: 1px solid rgba(0, 245, 255, 0.3);
  padding: 5px 12px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}

.cert-details-title {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.cert-details-issuer {
  font-size: 13px;
  font-weight: 500;
  color: #00f5ff;
  margin-bottom: 16px;
}

.cert-details-cred-id {
  color: #94a3b8;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
}

.cert-details-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 20px;
}

.cert-details-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.cert-skill-tag {
  font-size: 11px;
  font-family: 'Roboto Mono', monospace;
  color: #a855f7;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.25);
  padding: 3px 10px;
  border-radius: 6px;
}

.cert-details-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.cert-btn-verify {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00f5ff, #00b4d8);
  color: #010206;
  font-weight: 700;
  font-size: 13px;
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 18px rgba(0, 245, 255, 0.35);
  white-space: nowrap !important;
}

.cert-btn-verify:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 245, 255, 0.55);
}

.cert-btn-pdf {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: linear-gradient(135deg, #ef4444, #dc2626) !important;
  color: #ffffff !important;
  border: 1px solid rgba(239, 68, 68, 0.5);
  font-weight: 700;
  font-size: 13px;
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);
  white-space: nowrap !important;
}

.cert-btn-pdf:hover {
  background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(239, 68, 68, 0.6);
}

.cert-btn-linkedin {
  display: inline-flex;
  align-items: center;
  color: #e2e8f0;
  font-weight: 500;
  font-size: 13px;
  padding: 10px 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap !important;
}

.cert-btn-linkedin:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  transform: translateY(-2px);
}

.cert-quick-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cert-quick-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: 'Roboto Mono', monospace;
  color: #64748b;
}

.cert-quick-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cert-pill {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 11px;
  font-family: 'Inter', sans-serif;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.cert-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.cert-pill.active {
  background: rgba(0, 245, 255, 0.15);
  border-color: #00f5ff;
  color: #00f5ff;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(0, 245, 255, 0.2);
}

@media (max-width: 768px) {
  .cert-interactive-container {
    padding: 10px 0;
  }

  .cert-folder-column {
    min-height: 440px;
    padding-top: 10px;
  }

  .cert-folder-hint {
    margin-bottom: 65px;
    font-size: 9.5px;
    padding: 6px 12px;
  }

  .cert-details-column {
    padding: 22px 18px;
  }

  .cert-details-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .cert-details-logo-badge {
    max-width: 55%;
    padding: 4px 10px;
  }

  .cert-details-title {
    font-size: 18px;
  }

  .cert-details-actions {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 12px !important;
  }

  .cert-btn-verify,
  .cert-btn-pdf,
  .cert-btn-linkedin {
    width: 100% !important;
    box-sizing: border-box !important;
    justify-content: center !important;
    text-align: center !important;
  }
}`;var uc=Math.PI*2,VP=1/240,GP=6,qP=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],WP=[.5,-1.1,1.5,-.7,1.2,-1.6],XP=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],YP=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],oF=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],ZP=[4,-5,3,-6,5,-3],uC=[.03,-.04,.05,-.02,.04,-.05],KP=[-6,4,-3,7,-5,3],JP={open:-180,receive:-24,peek:-13,rest:0},QP={open:-64,receive:-30,peek:-15,rest:0},nF={out:50,drag:80,focus:90},jP=typeof window>"u"?je.useEffect:je.useLayoutEffect,na=(t,e,a)=>Math.min(a,Math.max(e,t)),nC=(()=>{let t=null,e=new Map;return a=>{let o=String(a);if(e.has(o))return e.get(o);let n=[61,139,255];return typeof document<"u"&&(t??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=o,t.fillRect(0,0,1,1),n=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(o,n),n}})(),Ds=(t,e,a)=>t.map((o,n)=>Math.round(o+(e[n]-o)*a)),Pr=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,$P=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,lF=(t,e)=>{let a=new Array(16);for(let o=0;o<4;o++)for(let n=0;n<4;n++)a[o*4+n]=t[n]*e[o*4]+t[4+n]*e[o*4+1]+t[8+n]*e[o*4+2]+t[12+n]*e[o*4+3];return a},dc=(...t)=>t.reduce(lF),Rn=(t,e,a=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,a,1],mm=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],rC=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[1,0,0,0,0,a,o,0,0,-o,a,0,0,0,0,1]},rF=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,0,-o,0,0,1,0,0,o,0,a,0,0,0,0,1]},eB=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,o,0,0,-o,a,0,0,0,0,1,0,0,0,0,1]},pc=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,tB=(t,e,a,o,n)=>{let r=(t?180:224)*e,s=(t?232:176)*e,i=20*e,l=12*e,c=i*.75,u=t?i:i+s*.3,h=t?[0,l,l,0]:[l,l,l,l],f=r-h[0]-h[1]-c*2-10*e,d=na(o?a+14*e+c:r*.34,Math.min(r*.3,f),f),m=n==="left"?h[0]+5*e+c:n==="center"?(r-d)/2:r-h[1]-5*e-c-d,v=t?r*.8:r*.6;return{book:t,scale:e,w:r,h:s,tabH:i,r:l,shoulder:c,corners:h,tabW:d,tabX:m,frontTop:u,frontH:i+s-u,docW:v,docH:v*(t?1.3:1.58)}},dC=t=>{let{w:e,h:a,tabX:o,tabW:n,tabH:r,shoulder:s}=t,[i,l,c,u]=t.corners,h=r,f=r+a;return[`M 0 ${h+i}`,`Q 0 ${h} ${i} ${h}`,`L ${o-s} ${h}`,`C ${o} ${h} ${o} 0 ${o+s} 0`,`L ${o+n-s} 0`,`C ${o+n} 0 ${o+n} ${h} ${o+n+s} ${h}`,`L ${e-l} ${h}`,`Q ${e} ${h} ${e} ${h+l}`,`L ${e} ${f-c}`,`Q ${e} ${f} ${e-c} ${f}`,`L ${u} ${f}`,`Q 0 ${f} 0 ${f-u}`,"Z"].join(" ")},sC=`#version 300 es
layout(location = 0) in vec2 aCorner;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform float uBleed;
out vec2 vLocal;
out vec2 vUv;
void main() {
  vLocal = aCorner * (uSize + vec2(uBleed, 0.0)) - vec2(uBleed, 0.0);
  vUv = aCorner;
  vec4 q = uModel * vec4(vLocal, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 p = q.xy - uOrigin + (uOrigin - uView.xy) * w;
  vec2 clip = p / uView.zw * 2.0 - w;
  gl_Position = vec4(clip.x, -clip.y, 0.0, w);
}`,aB=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,oB=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,nB=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform vec2 uStep;
uniform float uSigma;
out vec4 outColor;
void main() {
  float spacing = max(1.0, uSigma * 2.5 / 24.0);
  int reach = int(min(ceil(uSigma * 2.5 / spacing), 24.0));
  vec4 sum = texture(uImage, vUv);
  float total = 1.0;
  for (int i = 1; i <= 24; i++) {
    if (i > reach) break;
    float x = float(i) * spacing;
    float weight = exp(-0.5 * x * x / (uSigma * uSigma));
    sum += (texture(uImage, vUv + uStep * x) + texture(uImage, vUv - uStep * x)) * weight;
    total += 2.0 * weight;
  }
  outColor = sum / total;
}`,rB=`#version 300 es
precision highp float;
in vec2 vLocal;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform sampler2D uBehind;
uniform vec4 uRadii;
uniform float uSpine;
uniform float uLens;
uniform float uMorph;
uniform vec3 uInsideTop;
uniform vec3 uInsideBottom;
uniform float uTabRatio;
uniform vec2 uGutter;
uniform float uBevel;
uniform float uStrength;
uniform float uSplit;
uniform vec4 uTint;
uniform float uHaze;
uniform float uDim;
uniform float uGlint;
uniform float uShine;
uniform vec2 uLight;
out vec4 outColor;

float box(vec2 p, vec2 b, vec4 r) {
  float k = p.x > 0.0 ? (p.y > 0.0 ? r.z : r.y) : (p.y > 0.0 ? r.w : r.x);
  vec2 q = abs(p) - b + k;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - k;
}

float shape(vec2 p) {
  vec2 halfSize = vec2(uSize.x + uSpine, uSize.y) * 0.5;
  return box(p - vec2(uSize.x - halfSize.x, halfSize.y), halfSize, uRadii);
}

vec2 locate(vec2 p) {
  vec4 q = uModel * vec4(p, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 s = uOrigin + (q.xy - uOrigin) / w;
  vec2 uv = (s - uView.xy) / uView.zw;
  return vec2(uv.x, 1.0 - uv.y);
}

void main() {
  float d = shape(vLocal);
  float aa = max(fwidth(d), 1e-3);
  float cover = clamp(0.5 - d / aa, 0.0, 1.0);
  if (cover <= 0.0) discard;
  float e = 0.5;
  vec2 n = vec2(
    shape(vLocal + vec2(e, 0.0)) - shape(vLocal - vec2(e, 0.0)),
    shape(vLocal + vec2(0.0, e)) - shape(vLocal - vec2(0.0, e))
  );
  n /= max(length(n), 1e-5);
  float inside = max(0.0, -d);
  float t = 1.0 - clamp(inside / uBevel, 0.0, 1.0);
  vec2 bend = -n * pow(t, 2.0) * uStrength + (uSize * 0.5 - vLocal) * uLens;
  vec2 p = vLocal + bend;
  vec2 uv = locate(p);
  mat2 jac = mat2(locate(p + vec2(1.0, 0.0)) - uv, locate(p + vec2(0.0, 1.0)) - uv);
  vec4 seen = texture(uBehind, uv);
  if (uSplit > 0.0) {
    vec2 split = jac * (bend * uSplit);
    seen.r = texture(uBehind, uv + split).r;
    seen.b = texture(uBehind, uv - split).b;
  }
  vec4 color = vec4(uTint.rgb, 1.0) * uTint.a + seen * (1.0 - uTint.a);
  color.rgb = mix(color.rgb, vec3(color.a), uHaze + uGlint);
  color.rgb *= 1.0 - uDim;
  float band = 0.0;
  if (uMorph > 0.0) {
    band = (1.0 - smoothstep(0.0, uSize.x * 0.75, vLocal.x)) * uMorph;
    vec3 solid = mix(uInsideTop, uInsideBottom, uTabRatio + vLocal.y / uSize.y * (1.0 - uTabRatio));
    color = mix(color, vec4(solid, 1.0), band);
  }
  if (uGutter.y > 0.0) color.rgb *= 1.0 - uGutter.y * (1.0 - smoothstep(0.0, uGutter.x, vLocal.x));
  float facing = dot(n, uLight);
  float edge = clamp(inside / aa, 0.0, 1.0);
  vec2 span = vLocal / uSize;
  float across = uLight.x > 0.0 ? 1.0 - span.x : span.x;
  float sheen = smoothstep(0.85, 0.0, across * 0.55 + span.y) * 0.07 * uShine * (1.0 - band);
  float light = (max(facing, 0.0) * 0.85 + max(-facing, 0.0) * 0.28) * t * t * t * uShine + sheen;
  light += exp(-inside / 0.9) * (0.16 + 0.3 * max(facing, 0.0)) * uShine;
  float shade = max(-facing, 0.0) * t * t * 0.22 * (1.0 - band);
  color = color * (1.0 - shade) + vec4(0.0, 0.0, 0.0, shade);
  light = clamp(light * edge * (1.0 - band), 0.0, 1.0);
  color = color * (1.0 - light) + vec4(light);
  outColor = color * cover;
}`,iC=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},sF=(t,e,a,o)=>{let n=iC(t,t.VERTEX_SHADER,e),r=iC(t,t.FRAGMENT_SHADER,a),s=t.createProgram();if(!n||!r||!s)return null;if(t.attachShader(s,n),t.attachShader(s,r),t.linkProgram(s),t.deleteShader(n),t.deleteShader(r),!t.getProgramParameter(s,t.LINK_STATUS))return t.deleteProgram(s),null;let i={};return o.forEach(l=>{i[l]=t.getUniformLocation(s,l)}),{program:s,uniforms:i}},lC=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],sB=t=>{let e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;let a=sF(e,sC,aB,[...lC,"uImage","uAlpha"]),o=sF(e,oB,nB,["uImage","uStep","uSigma"]),n=sF(e,sC,rB,[...lC,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!a||!o||!n)return null;let r=e.createVertexArray(),s=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),l=[i(),i(),i()],c={width:0,height:0},u=new Map,h=(m,v)=>{e.uniform1f(m.uniforms.uDepth,v.depth),e.uniform2f(m.uniforms.uOrigin,v.origin[0],v.origin[1]),e.uniform4f(m.uniforms.uView,v.view.x,v.view.y,v.view.width,v.view.height)},f=(m,v)=>{t.width!==m&&(t.width=m),t.height!==v&&(t.height=v),!(c.width===m&&c.height===v)&&(c.width=m,c.height=v,l.forEach(I=>{e.bindTexture(e.TEXTURE_2D,I.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,v,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,I.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,I.texture,0)}))},d=(m,v,I,p,g)=>{e.bindFramebuffer(e.FRAMEBUFFER,v.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,m.texture),e.uniform2f(o.uniforms.uStep,I,p),e.uniform1f(o.uniforms.uSigma,g),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(m,v){let I=u.get(m);I||(I=e.createTexture(),u.set(m,I)),e.bindTexture(e.TEXTURE_2D,I),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,v),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(m){u.forEach((v,I)=>{m.has(I)||(e.deleteTexture(v),u.delete(I))})},render(m){if(e.isContextLost())return;let v=Math.max(1,Math.round(m.view.width*m.dpr)),I=Math.max(1,Math.round(m.view.height*m.dpr));f(v,I);let[p,g,y]=l;e.bindVertexArray(r),e.activeTexture(e.TEXTURE0),e.viewport(0,0,v,I),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,p.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(a.program),h(a,m),e.uniform1i(a.uniforms.uImage,0),e.uniform1f(a.uniforms.uBleed,0),m.layers.forEach(S=>{let w=u.get(S.key);w&&(e.bindTexture(e.TEXTURE_2D,w),e.uniformMatrix4fv(a.uniforms.uModel,!1,S.matrix),e.uniform2f(a.uniforms.uSize,S.width,S.height),e.uniform1f(a.uniforms.uAlpha,S.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});let x=m.glass,b=x.frost*m.dpr,C=p;b>.35&&(e.disable(e.BLEND),e.useProgram(o.program),e.uniform1i(o.uniforms.uImage,0),d(p,g,1/v,0,b),d(g,y,0,1/I,b),e.enable(e.BLEND),C=y),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);let T=n.uniforms;e.useProgram(n.program),h(n,m),e.bindTexture(e.TEXTURE_2D,C.texture),e.uniform1i(T.uBehind,0),e.uniformMatrix4fv(T.uModel,!1,x.matrix),e.uniform2f(T.uSize,x.width,x.height),e.uniform1f(T.uBleed,x.bleed),e.uniform4fv(T.uRadii,x.radii),e.uniform1f(T.uSpine,x.spine),e.uniform1f(T.uLens,x.lens),e.uniform1f(T.uMorph,x.morph),e.uniform3fv(T.uInsideTop,x.insideTop),e.uniform3fv(T.uInsideBottom,x.insideBottom),e.uniform1f(T.uTabRatio,x.tabRatio),e.uniform2fv(T.uGutter,x.gutter),e.uniform1f(T.uBevel,x.bevel),e.uniform1f(T.uStrength,x.strength),e.uniform1f(T.uSplit,x.split),e.uniform4fv(T.uTint,x.tint),e.uniform1f(T.uHaze,x.haze),e.uniform1f(T.uDim,x.dim),e.uniform1f(T.uGlint,x.glint),e.uniform1f(T.uShine,x.shine),e.uniform2fv(T.uLight,x.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){u.forEach(m=>e.deleteTexture(m)),u.clear(),l.forEach(m=>{e.deleteTexture(m.texture),e.deleteFramebuffer(m.frame)}),e.deleteBuffer(s),e.deleteVertexArray(r),e.deleteProgram(a.program),e.deleteProgram(o.program),e.deleteProgram(n.program)}}},cC=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2));t.beginPath(),t.moveTo(e+s,a),t.arcTo(e+o,a,e+o,a+n,s),t.arcTo(e+o,a+n,e,a+n,s),t.arcTo(e,a+n,e,a,s),t.arcTo(e,a+o,e,a,s),t.closePath()},iB=(t,e)=>{let a=0,o=0,n=t;for(;n&&n!==e;)a+=n.offsetLeft,o+=n.offsetTop,n=n.offsetParent;return n===e?[a,o]:null},lB=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),cB=(t,e,a,o,n,r)=>{let s=Array.from(e.childNodes).filter(v=>v.nodeType===3).map(v=>v.textContent).join("").trim();if(!s)return;let i=parseFloat(r.fontSize)||12,l=parseFloat(r.lineHeight)||i*1.2,c=a+(parseFloat(r.paddingLeft)||0),u=o+(parseFloat(r.paddingTop)||0),h=n-(parseFloat(r.paddingLeft)||0)-(parseFloat(r.paddingRight)||0);t.font=`${r.fontStyle} ${r.fontWeight} ${r.fontSize} ${r.fontFamily}`,t.fillStyle=r.color,t.textBaseline="middle";let f=v=>{if(t.measureText(v).width<=h)return v;let I=v;for(;I.length>1&&t.measureText(`${I}\u2026`).width>h;)I=I.slice(0,-1);return`${I.trimEnd()}\u2026`};if(r.whiteSpace==="nowrap"){t.fillText(f(s),c,u+l/2);return}let d="",m=0;s.split(/\s+/).forEach(v=>{let I=d?`${d} ${v}`:v;d&&t.measureText(I).width>h?(t.fillText(d,c,u+l*(m+.5)),m+=1,d=v):d=I}),d&&t.fillText(d,c,u+l*(m+.5))},fC=(t,e,a)=>{let o=Math.max(1,t.offsetWidth),n=Math.max(1,t.offsetHeight),r=document.createElement("canvas");r.width=Math.max(1,Math.round(o*e)),r.height=Math.max(1,Math.round(n*e));let s=[],i=r.getContext("2d");if(!i)return{canvas:r,pending:s};i.scale(e,e);let l=(c,u,h)=>{let f=getComputedStyle(c);if(f.display==="none"||f.visibility==="hidden")return;let d=c.offsetWidth,m=c.offsetHeight,v=parseFloat(f.borderTopLeftRadius)||0,I=c!==t&&Number.isFinite(parseFloat(f.opacity))?parseFloat(f.opacity):1;if(i.save(),i.globalAlpha*=I,lB(f.backgroundColor)||(i.fillStyle=f.backgroundColor,cC(i,u,h,d,m,v),i.fill()),f.overflow!=="visible"&&(cC(i,u,h,d,m,v),i.clip()),c instanceof HTMLImageElement){if(!c.complete||!c.naturalWidth)s.push(c);else if(!a){let p=Math.max(d/c.naturalWidth,m/c.naturalHeight),g=d/p,y=m/p;i.drawImage(c,(c.naturalWidth-g)/2,(c.naturalHeight-y)/2,g,y,u,h,d,m)}}else cB(i,c,u,h,d,f),Array.from(c.children).forEach(p=>{let g=iB(p,t);g&&l(p,g[0],g[1])});i.restore()};return l(t,0,0),{canvas:r,pending:s}},fB=(t,e,a,o)=>{let n=document.createElement("canvas");n.width=Math.max(1,Math.round(t.w*o)),n.height=Math.max(1,Math.round((t.tabH+t.h)*o));let r=n.getContext("2d");if(!r)return n;r.scale(o,o);let s=r.createLinearGradient(0,0,0,t.tabH+t.h);return s.addColorStop(0,e),s.addColorStop(1,a),r.fillStyle=s,r.fill(new Path2D(dC(t))),n},iF=({title:t,description:e})=>je.default.createElement("div",{className:"folder-doc"},t?je.default.createElement("span",{className:"folder-doc-title"},t):je.default.createElement("span",{className:"folder-doc-heading"}),e&&je.default.createElement("span",{className:"folder-doc-text"},e),je.default.createElement("span",{className:"folder-doc-line",style:{width:"92%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"84%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"88%"}}),je.default.createElement("span",{className:"folder-doc-block"}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"80%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"62%"}})),uB=t=>(0,je.isValidElement)(t)?t:typeof t=="string"||typeof t=="number"?je.default.createElement(iF,{title:String(t)}):t&&typeof t=="object"?t.image?je.default.createElement("div",{className:"folder-photo"},je.default.createElement("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})):t.content?t.content:je.default.createElement(iF,{title:t.title,description:t.description}):je.default.createElement(iF,null),dB=(t,e,a,o,n)=>{let r=n.w/2,s=n.frontTop+n.frontH/2;if(a==="open"){if(o==="row"){let f=10*n.scale,d=Math.min(.8,(n.w*1.86-f*(e-1))/(e*n.docW)),m=n.docW*d+f;return{x:n.w/2+(t-(e-1)/2)*m,y:s,z:0,r:0,ry:0,s:d}}if(o==="stack"){let d=Math.min(26*n.scale,n.h*.36/Math.max(1,e-1)),m=n.frontTop+14*n.scale+(e-1)*d;return{x:n.w,y:m+n.docH*.74/2-t*d,z:0,r:0,ry:0,s:.74}}let c=e>4?.58:e>3?.64:.72,u=e===2?n.w:Math.min(n.w*1.3,n.w*.6*(e-1)),h=e>1?u/2-t*u/(e-1):n.w*.5;return{x:n.w/2+h,y:s+uC[t]*n.h,z:0,r:ZP[t],ry:0,s:c}}let l=(a==="rest"?XP:YP)[t]??{x:.06,y:0,r:WP[t]??0};return{x:r+l.x*n.w,y:s+l.y*n.h+t*.8*n.scale,z:0,r:l.r,ry:0,s:1}},pB=(t,e,a,o,n,r)=>{let s=oF[t]??oF[oF.length-1],i=n.tabH+n.h-5*n.scale-n.docH/2,l=(e-1)/2;if(a==="open"){let d=n.tabH+n.h*.12;if(o==="stack"){let g=Math.min(30*n.scale,n.h*.62/Math.max(1,e-1)),y=1.04-t*.05;return{x:n.w/2,y:n.tabH+n.h*.1-t*g-n.docH*(1.04-y)/2,z:-t*18*n.scale,r:0,ry:0,s:y}}let v=Math.min(270*n.scale,n.w*.98)/Math.max(1,e-1),I=.96,p=o==="row";return{x:n.w/2+(t-l)*v,y:d+(p?0:uC[t]*n.h*.45),z:0,r:p?0:(t-l)*3.6,ry:0,s:I}}let c=a==="receive"?1.7:a==="peek"?1.3:1,u=n.w/2+s.x*n.w*c;if(a==="rest")return{x:u,y:i-s.rise*n.h,z:0,r:s.r,ry:0,s:1};let h=a==="peek"&&r!=null?Math.max(0,1-Math.abs(r-u)/(n.w*.32)):0,f=s.rise+(a==="receive"?.03:.1);return{x:u,y:i-f*n.h-h*h*n.h*.09,z:0,r:s.r*1.6,ry:0,s:1}},hB=({items:t,label:e,mode:a="flap",variant:o="solid",color:n="#3d8bff",paperColor:r="#ffffff",tabPosition:s="right",layout:i="spread",size:l=1,openOn:c="click",open:u,defaultOpen:h=!1,onOpenChange:f,onItemClick:d,onItemDrop:m,draggable:v=!0,zoomOnClick:I=!0,focusScale:p,peek:g=!0,intro:y=!0,tilt:x=.5,bounce:b=.4,speed:C=1,frost:T=.25,closeOnOutsideClick:S=!0,theme:w="dark",className:A="",style:L,children:X})=>{let z=(0,je.useRef)(null),B=(0,je.useRef)(null),U=(0,je.useRef)(null),ae=(0,je.useRef)(null),J=(0,je.useRef)(null),se=(0,je.useRef)(null),G=(0,je.useRef)(null),K=(0,je.useRef)([]),oe=(0,je.useRef)(null),De=(0,je.useRef)(null),Ce=(0,je.useRef)(null),[$e,H]=(0,je.useState)(h),[lt,ee]=(0,je.useState)(0),[te,Ee]=(0,je.useState)([]),[Ke,Me]=(0,je.useState)(!1),Ye=u!==void 0,Qe=Ye?!!u:$e,$=a==="book",le=o==="glass",Ie=(0,je.useMemo)(()=>{let V=je.Children.toArray(X).filter(je.isValidElement);return(V.length?V:t?.length?t:qP).slice(0,GP)},[X,t]),ie=Ie.length,fe=Math.max(.3,Number(l)||1),be=tB($,fe,lt,!!e,s),Xe=be.tabH+be.h,Ne=$?{x:-.75*be.w,y:-.25*Xe,width:2.5*be.w,height:1.5*Xe}:{x:-.25*be.w,y:-.1*Xe,width:1.5*be.w,height:1.3*Xe};jP(()=>{let V=oe.current;if(!V)return;let ue=!0,Te=()=>{ue&&ee(V.offsetWidth)};return Te(),document.fonts?.ready.then(Te),()=>{ue=!1}},[e,fe]);let Be=(0,je.useCallback)(V=>{let ue=typeof V=="function"?V(Qe):V;Ye||H(ue),ue!==Qe&&f?.(ue)},[Ye,Qe,f]),R=(0,je.useRef)(Be);R.current=Be;let it=nC(n),tt=nC(r),_=Ds(it,[0,0,0],.16),F=Pr(Ds(it,[0,0,0],.08)),N=Pr(_),q=(0,je.useRef)(null);q.current={open:Qe,layout:i,openOn:c,peek:g,intro:y,draggable:v,zoomOnClick:I,focusScale:p,closeOnOutsideClick:S,onItemClick:d,onItemDrop:m,tilt:na(x,0,1.5),bounce:na(b,0,1),speed:na(C,.2,3),frost:na(T,0,1),count:ie,entries:Ie,glass:le,light:w==="light",tint:it,insideTop:F,insideBottom:N,insideTone:[Ds(it,[0,0,0],.08).map(V=>V/255),_.map(V=>V/255)],content:`${a}|${fe}|${r}|${n}|${be.tabX}|${be.tabW}`,depth:Math.round(Math.max(be.w,be.h)*5),view:Ne,g:be},(0,je.useEffect)(()=>{let V=z.current;if(!V)return;let ue=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Te=W=>({value:W,velocity:0}),D={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:Te(0),rx:Te(0),ry:Te(0),lift:Te(0),squash:Te(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:Te(0),appear:1,content:{key:"",entries:null,renderer:null}},Pe=W=>{for(;D.items.length<W;)D.items.push({x:Te(0),y:Te(0),z:Te(0),r:Te(0),ry:Te(0),s:Te(1),hover:Te(0),mx:Te(0),my:Te(0),alpha:Te(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});D.items.length>W&&(D.items.length=W,D.focus>=W&&(D.focus=-1),me())},me=()=>{let W=[];D.items.forEach((Q,he)=>{Q.place==="out"&&W.push(he)}),Ee(Q=>Q.length===W.length&&Q.every((he,Oe)=>he===W[Oe])?Q:W)},ge=(W,Q,he,Oe,pt)=>{let zt=he*he,ce=2*Oe*he,Ge=Math.max(1,Math.ceil(pt/VP)),M=pt/Ge;for(let E=0;E<Ge;E++)W.velocity+=(zt*(Q-W.value)-ce*W.velocity)*M,W.value+=W.velocity*M;return Math.abs(Q-W.value)>.01||Math.abs(W.velocity)>.01},ve=(W,Q)=>{W.value=Q,W.velocity=0},P=()=>{let{g:W}=q.current;return W.book?W.w/2*na(-D.front.value/180,0,1):0},Se=(W,Q)=>{let he=V.getBoundingClientRect(),Oe=V.offsetWidth/(he.width||1),pt=V.offsetHeight/(he.height||1);return[(W-he.left)*Oe,(Q-he.top)*pt]},ne=()=>{let W=V.getBoundingClientRect(),Q=0,he=0,Oe=window.innerWidth,pt=window.innerHeight;for(let Ge=V.parentElement;Ge&&Ge!==document.body;Ge=Ge.parentElement){let M=getComputedStyle(Ge);if(/(hidden|clip|auto|scroll)/.test(`${M.overflowX} ${M.overflowY}`)){let E=Ge.getBoundingClientRect();Q=Math.max(Q,E.left),he=Math.max(he,E.top),Oe=Math.min(Oe,E.right),pt=Math.min(pt,E.bottom);break}}let zt=V.offsetWidth/(W.width||1),ce=V.offsetHeight/(W.height||1);return{left:(Q-W.left)*zt,top:(he-W.top)*ce,right:(Oe-W.left)*zt,bottom:(pt-W.top)*ce}},we=(W,Q)=>{let{g:he}=q.current,Oe=P();if(he.book){let pt=D.front.value<-90?Oe-he.w:Oe;return W>=pt&&W<=Oe+he.w&&Q>=he.tabH*.5&&Q<=he.tabH+he.h}return W>=0&&W<=he.w&&Q>=0&&Q<=he.tabH+he.h},Re=W=>{let{g:Q}=q.current,he=Q.docW*W.s.value/2,Oe=Q.docH*W.s.value/2;if(Q.book){if(D.front.value<-60)return!1;let pt=P();return W.x.value-he<pt+Q.w&&W.x.value+he>pt&&W.y.value+Oe>Q.tabH&&W.y.value-Oe<Q.tabH+Q.h}return D.front.value<-45?!1:W.y.value+Oe>Q.frontTop+4*Q.scale&&W.x.value+he>0&&W.x.value-he<Q.w},de=W=>{if(W.length<2)return[0,0];let Q=W[0],he=W[W.length-1],Oe=Math.max(.016,(he[0]-Q[0])/1e3);return[(he[1]-Q[1])/Oe,(he[2]-Q[2])/Oe]},Ve=(W,Q)=>W.open?"open":D.receiving||Q<D.receiveUntil?"receive":W.peek&&D.hovered&&!D.drag?.active?"peek":"rest",qe=(W,Q,he,Oe)=>{if(Oe.g.book)return dB(W,Q,he,Oe.layout,Oe.g);let pt=D.hovered?(D.pointerX+1)/2*Oe.g.w:null;return pB(W,Q,he,Oe.layout,Oe.g,pt)},vt=(W,Q,he)=>{let{g:Oe}=he;return W.insertFrom==="side"?{...Q,x:Math.max(Q.x,Oe.w+Oe.docW*.54*Q.s)}:{...Q,y:Math.min(Q.y,Oe.frontTop-Oe.docH*.5*Q.s-8*Oe.scale)}},xt=W=>{D.raf=0;let Q=q.current,{g:he}=Q;Pe(Q.count);let Oe=W/1e3,pt=D.last?Math.min(.05,(W-D.last)/1e3):1/60;D.last=W;let zt=ue?1:1-.72*Q.bounce,ce=uc*(he.book?1.55:2)*Q.speed,Ge=uc*2.1*Q.speed,M=uc*1.6*Q.speed,E=Ve(Q,Oe);E!==D.phase&&(D.previous=D.phase,D.phase=E,D.changedAt=W);let Z=(W-D.changedAt)/1e3,k=Oe<D.receiveUntil,Y=[];D.items.forEach((Ae,At)=>{Ae.place==="inside"&&Y.push(At)});let _e=Y.length;Y.forEach((Ae,At)=>{D.items[Ae].rank=At}),D.focus>=0&&E!=="open"&&D.items[D.focus]?.place==="inside"&&(D.focus=-1);let Fe=D.intro;D.ready||(Fe.opening=Q.open),Fe.phase==="run"&&!Fe.opening&&(Q.open||D.drag?.active)&&(Fe.phase="done");let Le=Fe.phase==="run"?Oe-Fe.start:0,He=Fe.phase!=="done"&&!Fe.opening,et=(.16+_e*.085+.3)/Q.speed,dt=He&&Le<et,ct=Ae=>(.16+(_e-1-Ae)*.085)/Q.speed,Je=(Ae,At)=>he.book?{...At,r:At.r+(Ae.rank%2?7:-6),s:At.s*1.12}:{...At,y:At.y-(he.h*.8+he.docH*.5),r:At.r+(Ae.rank%2?9:-7)};Fe.phase==="run"&&(k=!0,Le>(Fe.opening?1.4:et+1)/Q.speed&&(Fe.phase="done"));let gt=Fe.phase==="wait"?0:Fe.phase==="run"?na(Le/(.34/Q.speed),0,1):1;D.appear=1-(1-gt)**3;let ft=D.previous==="open"&&E!=="open"&&!ue?((he.book?.1:.06)+.035*_e)/Q.speed:0,Tt=Z<ft?D.previous:E,fa=dt?he.book?-150:-42:(he.book?JP:QP)[Tt];if(!D.ready){D.ready=!0;let Ae=Fe.phase!=="done"&&Fe.opening;Ae&&(D.phase="rest",D.previous="rest"),ve(D.front,Ae?0:fa),ve(D.anchor,He?1:0),D.items.forEach(At=>{let Pt=qe(At.rank,_e,Ae?"rest":E,Q),ya=He?Je(At,Pt):Pt;ve(At.x,ya.x),ve(At.y,ya.y),ve(At.z,ya.z),ve(At.r,ya.r),ve(At.ry,ya.ry),ve(At.s,ya.s),ve(At.alpha,He?0:1),ve(At.hover,He&&he.book?3:0),At.fresh=!1})}if(Fe.phase==="wait"){da(),D.last=0;return}k=ge(D.front,fa,ce,zt,pt)||k;let We=.2+.35*Q.bounce;he.book&&D.front.value<-180?(D.front.value=-360-D.front.value,D.front.velocity=-D.front.velocity*We):D.front.value>0&&(D.front.value=-D.front.value,D.front.velocity=-D.front.velocity*We),Z<ft&&(k=!0),k=ge(D.anchor,He?1:0,ce,1,pt)||k;let Qt=D.hovered&&!ue;k=ge(D.rx,Qt?-D.pointerY*8*Q.tilt:0,M,1,pt)||k,k=ge(D.ry,Qt?D.pointerX*10*Q.tilt:0,M,1,pt)||k,k=ge(D.lift,D.hovered&&E!=="open"?1:0,M,1,pt)||k,k=ge(D.squash,D.pressed?.975:1,uc*3.2,.6,pt)||k;let St=E==="open"&&D.previous!=="open",jt=D.drag?.active?D.drag:null,pa=D.hoveredItem,Ta=!jt&&pa>=0&&D.items[pa]?D.items[pa]:null,Ya=Ta&&Ta.place==="inside"&&E==="open"?qe(Ta.rank,_e,"open",Q):null,Ht=Q.focusScale??2.3,at=typeof window<"u"&&window.innerWidth<480?Math.min(2.35,Math.max(1.95,window.innerWidth*.9/he.docW)):Ht,Sa=he.book?he.tabH+he.h/2:he.tabH+he.h*.08;D.items.forEach((Ae,At)=>{if(Ae.fresh){let hn=qe(Ae.rank,_e,"rest",Q);ve(Ae.x,hn.x),ve(Ae.y,hn.y),ve(Ae.r,hn.r),Ae.fresh=!1}let Pt,ya=Ge,du=zt,sr=0,uF=1,pu=!1;if(D.focus===At)Pt={x:he.w/2,y:Sa,z:0,r:0,ry:0,s:at},sr=3.5,Ae.layer="focus";else if(jt&&jt.index===At){let[hn]=de(jt.samples);Pt={x:D.deskX+jt.grabX,y:D.deskY+jt.grabY,z:0,r:na(hn*.012,-14,14),ry:0,s:jt.scale*1.05},ya=uc*5,du=.78,sr=1.4,!Ae.elevated&&!Re(Ae)&&(Ae.elevated=!0),Ae.layer=Ae.elevated?"drag":"inside"}else if(Ae.place==="out")Pt={x:Ae.outX,y:Ae.outY,z:0,r:Ae.outR,ry:0,s:Ae.outS},sr=pa===At?1:.15,pu=pa===At,Ae.layer="out";else{let hn=St&&he.book?_e-1-Ae.rank:Ae.rank,hu=ue?0:St?((he.book?.16:.05)+hn*(he.book?.055:.045))/Q.speed:hn*.03/Q.speed,Mi=Z>=hu?E:D.previous;if(Pt=qe(Ae.rank,_e,Mi,Q),Z<hu&&(k=!0),He&&Le<ct(Ae.rank))Pt=Je(Ae,Pt),uF=0,sr=he.book?3:0,Ae.layer="inside";else if(Ae.insertUntil>Oe)k=!0,Pt=vt(Ae,Pt,Q),Ae.layer="drag",sr=.6;else if(Ae.insertUntil=0,Ae.elevated=!1,Ae.layer="inside",Ya&&Mi==="open")if(pa===At)Pt={...Pt,y:Pt.y-6*he.scale,r:Pt.r*.2,ry:0,s:Pt.s*1.05},sr=1,pu=!0;else{let dF=Pt.x-Ya.x;Pt={...Pt,x:Pt.x+Math.sign(dF)*12*he.scale*Math.max(0,1-Math.abs(dF)/(he.w*1.1))},sr=.2}else Mi==="open"&&(sr=.2)}if(k=ge(Ae.x,Pt.x,ya,du,pt)||k,k=ge(Ae.y,Pt.y,ya,du,pt)||k,!he.book&&Ae.layer==="inside"){let hn=Ae.r.value*Math.PI/180,hu=(he.docW*Math.abs(Math.sin(hn))+he.docH*Math.abs(Math.cos(hn)))*Ae.s.value/2,Mi=he.tabH+he.h-2*he.scale-hu;Ae.y.value>Mi&&(Ae.y.value=Mi,Ae.y.velocity>0&&(Ae.y.velocity*=-.25))}k=ge(Ae.z,Pt.z,Ge,zt,pt)||k,k=ge(Ae.r,Pt.r,ya,du,pt)||k,k=ge(Ae.ry,Pt.ry,Ge,zt,pt)||k,k=ge(Ae.s,Pt.s,Ge,zt,pt)||k,k=ge(Ae.hover,sr,Ge,zt,pt)||k,k=ge(Ae.alpha,uF,uc*3*Q.speed,1,pt)||k,k=ge(Ae.mx,pu?Ae.localX*7*he.scale:0,M,.85,pt)||k,k=ge(Ae.my,pu?Ae.localY*7*he.scale:0,M,.85,pt)||k}),da(),k||jt?D.raf=requestAnimationFrame(xt):D.last=0},_a=(W,Q)=>{if(D.content.key===Q.content&&D.content.entries===Q.entries&&D.content.renderer===W)return;D.content={key:Q.content,entries:Q.entries,renderer:W};let he=Math.min(window.devicePixelRatio||1,2),Oe=new Set(["back"]);W.upload("back",fB(Q.g,Q.insideTop,Q.insideBottom,he)),K.current.slice(0,Q.count).forEach((pt,zt)=>{if(!pt)return;let ce=`item-${zt}`;Oe.add(ce);let Ge=fC(pt,he,!1);try{W.upload(ce,Ge.canvas)}catch{Ge=fC(pt,he,!0),W.upload(ce,Ge.canvas)}Ge.pending.forEach(M=>M.addEventListener("load",dn,{once:!0}))}),W.prune(Oe)},da=()=>{let W=q.current,{w:Q,h:he,tabH:Oe,frontTop:pt,frontH:zt,docW:ce,docH:Ge,scale:M,book:E}=W.g,Z=Q/2,k=Oe+he/2,Y=D.front.value,_e=Y*Math.PI/180,Fe=E?na(-Y/180,0,1):0,Le=Q/2*Fe*(1-D.anchor.value),He=(1+D.lift.value*.012)*D.squash.value*(.94+.06*D.appear);V.style.opacity=D.appear<.999?D.appear.toFixed(3):"";let et=dc(Rn(Z,k),rC(D.rx.value),rF(D.ry.value),mm(He,He),Rn(-Z,-k)),dt=lF(et,Rn(Le,0)),ct=E&&Y<-90,Je=ct?"3":"40";B.current&&(B.current.style.transform=pc(dt),B.current.style.setProperty("--folder-gutter",Fe.toFixed(3)),B.current.style.setProperty("--folder-label",(E?1:1-na((-Y-18)/26,0,1)).toFixed(3)));let gt=E?dc(dt,Rn(0,pt,2*M*(1-Fe)),rF(Y)):dc(dt,Rn(0,Oe+he,2*M),rC(Y),Rn(0,-zt)),Ot=E?Math.sin(_e)*-.42+Math.cos(_e)*.9:Math.sin(_e)*.5+Math.cos(_e)*.86,ft=(ct?-Ot:Ot)/(E?.9:.86),Tt=na((ft-1)*.9,0,.18),fa=na((1-ft)*(E?.5:.22),0,.5),We=U.current;We&&(We.style.transform=pc(gt),We.style.zIndex=Je,We.dataset.face=ct?"inner":"outer",We.style.setProperty("--folder-glint",Tt.toFixed(3)),We.style.setProperty("--folder-dim",fa.toFixed(3)));let Qt=E?Math.max(0,Math.sin(-_e)):0;if(ae.current&&(ae.current.style.transform=pc(lF(dt,Rn(0,E?Oe:Oe+he))),ae.current.style.opacity=(.75+D.lift.value*.25).toFixed(3)),J.current&&(J.current.style.transform=pc(dc(dt,Rn(Q*Qt*.12,pt+he*Qt*.04),mm(Math.cos(_e),1))),J.current.style.opacity=(ct?1-Qt*.7:0).toFixed(3)),se.current){let at=Q*Math.cos(_e)+Q*Qt*.36;se.current.style.transform=pc(dc(dt,Rn(0,pt+he*Qt*.03),mm(at/Q,1))),se.current.style.zIndex=at>0?"39":"2",se.current.style.opacity=(na(Qt*4,0,1)*(1-Qt*.45)).toFixed(3)}let St=D.items.map((at,Sa)=>[at,Sa]).filter(([at])=>at.layer==="out").sort((at,Sa)=>at[0].outOrder-Sa[0].outOrder).map(([,at])=>at),jt=[];D.items.forEach((at,Sa)=>{let Ae=K.current[Sa],At=3*M+at.z.value+at.hover.value*26*M,Pt=dc(et,Rn(at.x.value+at.mx.value,at.y.value+at.my.value,At),rF(at.ry.value),eB(at.r.value),mm(at.s.value,at.s.value),Rn(-ce/2,-Ge/2)),ya=10+W.count-at.rank;at.layer==="inside"&&D.phase==="open"&&D.hoveredItem===Sa&&(ya=30),at.layer==="out"&&(ya=nF.out+St.indexOf(Sa)),at.layer==="drag"&&(ya=nF.drag),at.layer==="focus"&&(ya=nF.focus),jt.push({index:Sa,matrix:Pt,layer:ya,alpha:na(at.alpha.value,0,1),inside:at.layer==="inside"}),Ae&&(Ae.style.transform=pc(Pt),Ae.style.zIndex=String(ya),Ae.style.setProperty("--folder-lift",na(at.hover.value,0,2.4).toFixed(3)),at.layer==="focus"?Ae.setAttribute("data-focused","true"):Ae.hasAttribute("data-focused")&&Ae.removeAttribute("data-focused"),Ae.style.opacity=at.alpha.value<.995?Math.max(0,at.alpha.value).toFixed(3):"")});let pa=G.current,Ta=Ce.current;if(!pa||!Ta||!W.glass)return;pa.style.zIndex=Je,_a(Ta,W);let Ya=[];ct||(Ya.push({key:"back",matrix:dt,width:Q,height:Oe+he,alpha:1}),jt.filter(at=>at.inside).sort((at,Sa)=>at.layer-Sa.layer).forEach(at=>Ya.push({key:`item-${at.index}`,matrix:at.matrix,width:ce,height:Ge,alpha:at.alpha})));let Ht=Math.min(window.devicePixelRatio||1,2);Ta.render({dpr:Ht,depth:W.depth,origin:[Z,k],view:W.view,layers:Ya,glass:{matrix:gt,width:Q,height:zt,radii:E?[0,W.g.r,W.g.r,0]:[W.g.r,W.g.r,W.g.r,W.g.r],spine:E?Q*2:0,bleed:ct?2:0,morph:E?na((Fe-.55)/.45,0,1)**2:0,insideTop:W.insideTone[0],insideBottom:W.insideTone[1],tabRatio:Oe/(Oe+he),gutter:[12*M,E?.12*Fe:0],bevel:12*M,strength:14*M,split:.26,lens:.02,frost:W.frost*6*M,tint:[W.tint[0]/255,W.tint[1]/255,W.tint[2]/255,W.light?.1:.14],haze:.04+W.frost*.1,dim:fa*.8,glint:Tt,shine:W.light?.72:.85,light:ct?[.55,-.83]:[-.55,-.83]}})},Ca=()=>{D.raf||(D.raf=requestAnimationFrame(xt))},Dn=()=>{D.intro.phase==="wait"&&(D.intro.phase="run",D.intro.start=performance.now()/1e3,Ca())},dn=()=>{D.content.key="",Ca()},pn=()=>{let W=D.drag,Q=W?D.items[W.index]:null;D.receiving=!!(W?.active&&Q&&(Q.place==="out"||Q.elevated)&&we(D.deskX,D.deskY))},ze=W=>{let Q=D.items[W.index];Q&&(W.active=!0,W.grabX=Q.x.value-W.downX,W.grabY=Q.y.value-W.downY,W.scale=Q.place==="out"?Q.outS:Q.s.value,W.clip=ne(),D.suppressClick=!0,D.focus===W.index&&(D.focus=-1),Q.elevated=Q.place==="out"||!Re(Q),V.dataset.dragging="")},st=(W,Q)=>{let he=q.current,Oe=D.items[W.index];if(D.receiving=!1,delete V.dataset.dragging,!Oe)return;let pt=performance.now()/1e3,[zt,ce]=Q?[0,0]:de(W.samples);if(we(D.deskX,D.deskY)){let Le=Oe.place==="out"||Oe.elevated;Oe.place="inside",Le&&!ue&&(Oe.insertUntil=pt+.24/he.speed,Oe.insertFrom=he.g.book?D.front.value<-90?null:"side":"top",Oe.insertFrom||(Oe.insertUntil=0),D.receiveUntil=Oe.insertUntil?Oe.insertUntil+.14/he.speed:0),Oe.elevated=!1,me(),he.onItemDrop?.(he.entries[W.index],W.index,!0);return}let Ge=W.clip??ne(),M=he.g.docW*W.scale/2,E=he.g.docH*W.scale/2,Z=D.deskX+W.grabX+na(zt,-2400,2400)*.09,k=D.deskY+W.grabY+na(ce,-2400,2400)*.09;Oe.place="out",Oe.elevated=!0;let Y=8*he.g.scale,_e=M*1.08+Y,Fe=E*1.08+Y;Oe.outX=na(Z,Ge.left+_e,Math.max(Ge.left+_e,Ge.right-_e)),Oe.outY=na(k,Ge.top+Fe,Math.max(Ge.top+Fe,Ge.bottom-Fe)),Oe.outR=na(Oe.r.value*.5+na(zt,-2400,2400)*.003+KP[W.index%6]*.6,-12,12),Oe.outS=W.scale,D.dropCount+=1,Oe.outOrder=D.dropCount,me(),he.onItemDrop?.(he.entries[W.index],W.index,!1)},rt=W=>{let Q=D.drag;if(Q&&W.pointerId===Q.id){let[zt,ce]=Se(W.clientX,W.clientY);D.deskX=zt,D.deskY=ce;let Ge=performance.now();for(Q.samples.push([Ge,zt,ce]);Q.samples.length>2&&Ge-Q.samples[0][0]>100;)Q.samples.shift();if(!Q.active){let M=W.pointerType==="touch"?20:6;Math.hypot(W.clientX-Q.clientX,W.clientY-Q.clientY)>M&&ze(Q)}Q.active&&pn(),Ca()}if(W.pointerType==="touch")return;let he=V.getBoundingClientRect();D.pointerX=na((W.clientX-he.left)/he.width*2-1,-1.5,1.5),D.pointerY=na((W.clientY-he.top)/he.height*2-1,-1.5,1.5);let Oe=W.target.closest?.("[data-folder-item]"),pt=Oe&&V.contains(Oe)?Number(Oe.getAttribute("data-folder-item")):-1;if(D.hoveredItem=pt,Oe&&pt>=0&&!D.drag?.active){let zt=Oe.getBoundingClientRect(),ce=D.items[pt];ce&&(ce.localX=na((W.clientX-zt.left)/zt.width*2-1,-1,1),ce.localY=na((W.clientY-zt.top)/zt.height*2-1,-1,1))}D.hovered||(D.hovered=!0,q.current.openOn==="hover"&&R.current(!0)),Ca()},bt=W=>{W.pointerType==="touch"||D.drag?.active||(D.hovered=!1,D.pressed=!1,D.hoveredItem=-1,q.current.openOn==="hover"&&R.current(!1),Ca())},Ut=W=>{if(W.button>0||W.target.closest?.('a, button, [role="button"]:not([data-folder-item])'))return;D.suppressClick=!1;let Q=W.target.closest?.("[data-folder-item]");if(Q&&V.contains(Q)&&q.current.draggable){let[he,Oe]=Se(W.clientX,W.clientY);D.deskX=he,D.deskY=Oe,D.drag={index:Number(Q.getAttribute("data-folder-item")),id:W.pointerId,clientX:W.clientX,clientY:W.clientY,downX:he,downY:Oe,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),he,Oe]]};try{Q.setPointerCapture(W.pointerId)}catch{D.drag.id=W.pointerId}}else D.pressed=!0;Ca()},ca=W=>{D.pressed=!1;let Q=D.drag;Q&&W.pointerId===Q.id&&(D.drag=null,Q.active&&st(Q,W.type==="pointercancel")),Ca()},Pa=W=>{if(V.contains(W.target))return;let Q=q.current;D.focus>=0&&(D.focus=-1,Ca()),Q.open&&Q.closeOnOutsideClick&&R.current(!1)},Nt=W=>{if(W.key!=="Escape")return;if(D.focus>=0){D.focus=-1,Ca();return}let Q=q.current;Q.open&&Q.closeOnOutsideClick&&R.current(!1)};V.addEventListener("pointermove",rt),V.addEventListener("pointerleave",bt),V.addEventListener("pointerdown",Ut),window.addEventListener("pointerup",ca),window.addEventListener("pointercancel",ca),document.addEventListener("pointerdown",Pa),document.addEventListener("keydown",Nt),document.fonts?.ready.then(dn);let ut=null;return q.current.intro&&!ue&&(D.intro.phase="wait",V.style.opacity="0",typeof IntersectionObserver>"u"?Dn():(ut=new IntersectionObserver(W=>{W.some(Q=>Q.isIntersecting)&&(ut?.disconnect(),Dn())},{threshold:.2}),ut.observe(V))),De.current={wake:Ca,invalidate:dn,consumeClick:()=>D.suppressClick?(D.suppressClick=!1,!0):!1,interactive:W=>q.current.open||D.items[W]?.place==="out"||D.focus===W,select:W=>{let Q=q.current;Q.zoomOnClick&&(D.focus=D.focus===W?-1:W),Q.onItemClick?.(Q.entries[W],W),Ca()},blur:()=>D.focus<0?!1:(D.focus=-1,Ca(),!0)},Ca(),()=>{cancelAnimationFrame(D.raf),V.removeEventListener("pointermove",rt),V.removeEventListener("pointerleave",bt),V.removeEventListener("pointerdown",Ut),window.removeEventListener("pointerup",ca),window.removeEventListener("pointercancel",ca),document.removeEventListener("pointerdown",Pa),document.removeEventListener("keydown",Nt),ut?.disconnect(),De.current=null}},[]),(0,je.useEffect)(()=>{if(!le)return;let V=G.current;if(!V)return;let ue=sB(V);if(!ue)return;Ce.current=ue,Me(!0);let Te=D=>{D.preventDefault(),Ce.current=null,Me(!1)};return V.addEventListener("webglcontextlost",Te),De.current?.invalidate(),()=>{V.removeEventListener("webglcontextlost",Te),ue.dispose(),Ce.current===ue&&(Ce.current=null),Me(!1)}},[le]),(0,je.useEffect)(()=>{De.current?.wake()});let re=()=>{De.current?.blur()||c!=="hover"&&Be(!Qe)},ye=(V,ue)=>{if(V.target.closest?.('a, button, [role="button"]:not([data-folder-item])'))return;V.stopPropagation();let Te=De.current;Te&&(Qe||Be(!0),Te.select(ue))},xe={"--folder-rgb":it.join(", "),"--folder-base":Pr(it),"--folder-front-top":Pr(Ds(it,[255,255,255],.12)),"--folder-front-bottom":Pr(Ds(it,[0,0,0],.06)),"--folder-inside-top":F,"--folder-inside-bottom":N,"--folder-tab-ink":$P(_)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":Pr(tt),"--folder-paper-ink":Pr(Ds(tt,[0,0,0],.11)),"--folder-paper-ink-strong":Pr(Ds(tt,[0,0,0],.28)),"--folder-paper-text":Pr(Ds(tt,[0,0,0],.72)),"--folder-w":`${be.w}px`,"--folder-h":`${be.h}px`,"--folder-tab-h":`${be.tabH}px`,"--folder-front-y":`${be.frontTop}px`,"--folder-front-h":`${be.frontH}px`,"--folder-r":`${be.r}px`,"--folder-front-radius":$?`0 ${be.r}px ${be.r}px 0`:`${be.r}px`,"--folder-doc-w":`${be.docW}px`,"--folder-doc-h":`${be.docH}px`,"--folder-frost":`${(1.5+na(T,0,1)*10)*fe}px`,"--folder-depth":`${q.current.depth}px`,"--folder-scale":fe,...L},j=dC(be);return je.default.createElement("div",{ref:z,className:`folder-root${A?` ${A}`:""}`,"data-mode":$?"book":"flap","data-variant":o,"data-theme":w==="light"?"light":"dark","data-open":Qe?"":void 0,"data-gl":le&&Ke?"":void 0,"data-draggable":v?"":void 0,style:xe},je.default.createElement("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":Qe,"aria-label":e?`${e} folder`:"Folder",onClick:re,onKeyDown:V=>{V.target===V.currentTarget&&(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),re())}},je.default.createElement("span",{ref:ae,className:"folder-layer folder-ground","aria-hidden":"true"}),$&&je.default.createElement("span",{ref:J,className:"folder-layer folder-cast","aria-hidden":"true"}),je.default.createElement("div",{ref:B,className:"folder-layer folder-back","aria-hidden":"true"},je.default.createElement("div",{className:"folder-back-fill",style:{clipPath:`path('${j}')`}},$&&je.default.createElement("span",{className:"folder-gutter"})),je.default.createElement("svg",{className:"folder-back-rim",width:be.w,height:Xe,viewBox:`0 0 ${be.w} ${Xe}`},je.default.createElement("path",{className:"folder-focus",d:j})),e&&je.default.createElement("span",{className:"folder-tab-text",style:{left:be.tabX,width:be.tabW}},e)),Ie.map((V,ue)=>{let Te=Qe||te.includes(ue);return je.default.createElement("div",{key:(0,je.isValidElement)(V)&&V.key!=null?V.key:ue,ref:D=>{K.current[ue]=D},className:"folder-layer folder-item","data-folder-item":ue,role:Te?"button":void 0,tabIndex:Te?0:-1,onClick:D=>ye(D,ue),onKeyDown:D=>{!Te||D.key!=="Enter"&&D.key!==" "||(D.preventDefault(),D.stopPropagation(),De.current?.select(ue))}},uB(V))}),$&&je.default.createElement("span",{ref:se,className:"folder-layer folder-shade","aria-hidden":"true"}),je.default.createElement("div",{ref:U,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true"},je.default.createElement("div",{className:"folder-face folder-face-outer"}),$&&je.default.createElement("div",{className:"folder-face folder-face-inner"},je.default.createElement("span",{className:"folder-inner-gutter"}))),le&&je.default.createElement("canvas",{ref:G,className:"folder-glass","aria-hidden":"true",style:{left:Ne.x,top:Ne.y,width:Ne.width,height:Ne.height}})),e&&je.default.createElement("span",{ref:oe,className:"folder-tab-text folder-measure","aria-hidden":"true"},e))},pC=hB;var cF=[{id:"microsoft-mr",logo:"assets/logos/microsoft.png",badge:"Microsoft",badgeClass:"microsoft",title:"Introduction to Mixed Reality",issuer:"Microsoft Learn",date:"Feb 2025",credId:"ID: C2558DD477EF1EBB",skills:["Mixed Reality","Spatial Anchors","HoloLens","Perception APIs"],shortDesc:"Foundational concepts in Mixed Reality, spatial mapping, perception APIs & immersive experiences.",description:"Foundational concepts in Mixed Reality, perception APIs, spatial mapping, and immersive experiences.",pdfUrl:"assets/certificates/Introduction to mixed reality - Microsoft.pdf",verifyUrl:"https://learn.microsoft.com/api/achievements/share/en-us/SaravanaPrakashR-4947/N29VQVPF?sharingId=C2558DD477EF1EBB",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/2036338817/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-101",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude 101",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: uuy8y6ghve9v",skills:["Anthropic Claude","Prompt Engineering","AI Automation"],shortDesc:"Foundational knowledge in AI assistants, prompt engineering & automating tasks with Claude.",description:"Completed the Claude 101 certification, gaining foundational knowledge in working with AI assistants and prompt engineering. Learned how to effectively interact with Claude to generate content, analyze information, and automate tasks using natural language.",pdfUrl:"assets/certificates/certificate-uuy8y6ghve9v-1773051032.pdf",verifyUrl:"http://verify.skilljar.com/c/uuy8y6ghve9v",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1377263598/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-code",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude Code in Action",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: 7bdj5ooecz23",skills:["Anthropic Claude","AI Coding Assistants","Agentic Workflows"],shortDesc:"Transforming software engineering productivity with AI coding assistants & agentic workflows.",description:"Excited to see how AI coding assistants are transforming software development, automation, and engineering productivity.",pdfUrl:"assets/certificates/Claude Code in Action.pdf",verifyUrl:"http://verify.skilljar.com/c/7bdj5ooecz23",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1119111007/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"chatgpt-how-it-works",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Understanding ChatGPT: How It Works",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: qmp4Jz3om1b",skills:["Generative AI","NLP","Transformers","ChatGPT"],shortDesc:"Foundational architecture of transformer models, token prediction, NLP & generative AI.",description:"Completed Understanding ChatGPT: How It Works, gaining foundational knowledge of how generative AI models process language, generate responses, and assist in various tasks using natural language processing.",pdfUrl:"assets/certificates/Understanding ChatGPT - How It Works.pdf",verifyUrl:"https://simpli-web.app.link/e/qmp4Jz3om1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1363912282/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"intro-prompt-eng",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Introduction to Prompt Engineering",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: HTn2dmSim1b",skills:["Prompt Engineering","Few-Shot Steering","Instruction Tuning"],shortDesc:"Designing effective prompts, instruction optimization, structuring & response steering.",description:"Successfully completed the Introduction to Prompt Engineering certification, gaining foundational knowledge in designing effective prompts for AI systems. The program covered prompt structuring, instruction optimization, and techniques for improving AI-generated responses across various use cases.",pdfUrl:"assets/certificates/Introduction to Prompt Engineering certification.pdf",verifyUrl:"https://simpli-web.app.link/e/HTn2dmSim1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1358602910/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"}];function fF(){let[t,e]=(0,ot.useState)(0),[a,o]=(0,ot.useState)(!1),n=cF.map((s,i)=>({title:s.title,content:ot.default.createElement("div",{className:"cert-doc-card"},ot.default.createElement("div",{className:"cert-doc-header"},ot.default.createElement("div",{className:"cert-doc-logo-box"},ot.default.createElement("img",{src:s.logo,alt:s.issuer,className:"cert-doc-logo"})),ot.default.createElement("span",{className:"cert-doc-date-badge"},ot.default.createElement("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{marginRight:"3px",verticalAlign:"-1px"}},ot.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),ot.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),ot.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"})),s.date)),ot.default.createElement("div",{className:"cert-doc-title"},s.title),ot.default.createElement("div",{className:"cert-doc-issuer"},s.issuer),ot.default.createElement("div",{className:"cert-doc-desc"},s.shortDesc||s.description),ot.default.createElement("div",{className:"cert-doc-id"},s.credId),ot.default.createElement("div",{className:"cert-doc-footer"},ot.default.createElement("a",{href:s.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-doc-link",onPointerDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),window.open(s.verifyUrl,"_blank","noopener,noreferrer")},title:"Verify credential online"},ot.default.createElement("span",null,"Verify \u2197")),s.pdfUrl&&ot.default.createElement("a",{href:encodeURI(s.pdfUrl),target:"_blank",rel:"noopener noreferrer",className:"cert-doc-pdf-link",onPointerDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),window.open(encodeURI(s.pdfUrl),"_blank","noopener,noreferrer")},title:"View PDF certificate"},ot.default.createElement("span",null,"PDF \u{1F4C4}"))))})),r=cF[t];return ot.default.createElement("div",{className:"cert-interactive-container"},ot.default.createElement("div",{className:"cert-folder-column"},ot.default.createElement("div",{className:"cert-folder-hint"},ot.default.createElement("span",null,a?"Click card to zoom \u2022 Drag to arrange":"Click folder to open \u2022 Drag or click cards")),ot.default.createElement(pC,{label:"Licenses & Certs",items:n,mode:"flap",variant:"glass",color:"#00f5ff",tabPosition:"right",layout:"spread",size:1.25,theme:"dark",defaultOpen:!0,zoomOnClick:!0,focusScale:2.3,draggable:!0,peek:!0,onOpenChange:s=>o(s),onItemClick:(s,i)=>e(i)})),ot.default.createElement("div",{className:"cert-details-column glass"},ot.default.createElement("div",{className:"cert-details-header"},ot.default.createElement("div",{className:"cert-details-logo-badge"},ot.default.createElement("img",{src:r.logo,alt:r.issuer,className:"cert-details-logo-img"})),ot.default.createElement("div",{className:"cert-details-date-pill"},ot.default.createElement("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},ot.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),ot.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),ot.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),ot.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),ot.default.createElement("span",null,r.date))),ot.default.createElement("h3",{className:"cert-details-title"},r.title),ot.default.createElement("p",{className:"cert-details-issuer"},"Issued by ",r.issuer," \u2022 ",ot.default.createElement("span",{className:"cert-details-cred-id"},r.credId)),ot.default.createElement("p",{className:"cert-details-desc"},r.description),ot.default.createElement("div",{className:"cert-details-skills"},r.skills.map((s,i)=>ot.default.createElement("span",{key:i,className:"cert-skill-tag"},"#",s))),ot.default.createElement("div",{className:"cert-details-actions"},ot.default.createElement("a",{href:r.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-verify"},ot.default.createElement("span",null,"Show Credential"),ot.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ot.default.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),ot.default.createElement("polyline",{points:"15 3 21 3 21 9"}),ot.default.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))),r.pdfUrl&&ot.default.createElement("a",{href:encodeURI(r.pdfUrl),target:"_blank",rel:"noopener noreferrer",className:"cert-btn-pdf"},ot.default.createElement("span",null,"View PDF"),ot.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ot.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),ot.default.createElement("polyline",{points:"14 2 14 8 20 8"}),ot.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),ot.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),ot.default.createElement("polyline",{points:"10 9 9 9 8 9"}))),ot.default.createElement("a",{href:r.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-linkedin"},"LinkedIn Record")),ot.default.createElement("div",{className:"cert-quick-selector"},ot.default.createElement("span",{className:"cert-quick-label"},"Browse Certifications:"),ot.default.createElement("div",{className:"cert-quick-pills"},cF.map((s,i)=>ot.default.createElement("button",{key:s.id,className:`cert-pill ${t===i?"active":""} ${s.badgeClass}`,onClick:()=>e(i)},i+1,". ",s.title.length>25?s.title.slice(0,25)+"\u2026":s.title))))))}function uu(t,e){if(typeof document>"u"||!e||document.getElementById(t))return;let a=document.createElement("style");a.id=t,a.textContent=e,document.head.appendChild(a)}uu("bundle-folder-css",oC);uu("bundle-profile-card-css",tC);uu("bundle-stepper-css",K_);uu("bundle-lanyard-css",E_);uu("bundle-gridscan-css",W_);function Ls(t,e,a="250px"){let o=document.getElementById(t);if(!o)return;if(!("IntersectionObserver"in window)){e();return}let n=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&(n.disconnect(),e())},{rootMargin:a});n.observe(o)}function hC(){console.log("\u{1F680} initReactComponents running..."),Ls("lanyard-container",()=>jg(["assets/id_card_front.webp","assets/id_card_back.webp","assets/hepl_lanyard.webp"]),"1000px"),Ls("lanyard-container-mmw",()=>jg(["assets/mmw_id_front.webp","assets/mmw_id_back.webp","assets/mmw_lanyard.webp"]),"1000px"),Ls("lanyard-container",()=>{try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(eF,{frontImage:"assets/id_card_front.webp",backImage:"assets/id_card_back.webp",strapImage:"assets/hepl_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}}),Ls("lanyard-container-mmw",()=>{try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(eF,{frontImage:"assets/mmw_id_front.webp",backImage:"assets/mmw_id_back.webp",strapImage:"assets/mmw_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}}),Ls("disclaimer-gridscan-mount",()=>{try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(Z_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}}),Ls("contact-stepper-mount",()=>{try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(aF,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}}),Ls("profile-card-mount",()=>{try{let t=document.getElementById("profile-card-mount");t&&!t.dataset.profileCardMounted&&(t.dataset.profileCardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(aC,{name:"Saravana Prakash R",title:"XR Engineer",handle:"srvnsp",status:"Online",statusColor:"#00f5ff",contactText:"Contact Me",avatarUrl:"assets/profile_photoroom.png",miniAvatarUrl:"assets/profile_photoroom.png",iconUrl:"/assets/csharp-pattern.svg",holo:.8,glare:.5,tiltStrength:12,parallax:8,radius:20,enableTilt:!0,intro:!0,showUserInfo:!0,theme:"dark",onContactClick:()=>{let a=document.getElementById("contact");if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}})),console.log("\u2705 ProfileCard mounted successfully"))}catch(t){console.error("\u274C Failed mounting ProfileCard:",t)}}),Ls("certifications-folder-mount",()=>{try{let t=document.getElementById("certifications-folder-mount");t&&!t.dataset.folderMounted&&(t.dataset.folderMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(Si.default.createElement(fF,null)),console.log("\u2705 CertificationsFolder mounted successfully"))}catch(t){console.error("\u274C Failed mounting CertificationsFolder:",t)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hC):hC();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
