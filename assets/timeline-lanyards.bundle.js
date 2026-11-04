var lb=Object.create;var fF=Object.defineProperty;var cb=Object.getOwnPropertyDescriptor;var fb=Object.getOwnPropertyNames;var ub=Object.getPrototypeOf,db=Object.prototype.hasOwnProperty;var pb=(t,e)=>()=>(t&&(e=t(t=0)),e);var Pr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var hb=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of fb(e))!db.call(t,n)&&n!==a&&fF(t,n,{get:()=>e[n],enumerable:!(o=cb(e,n))||o.enumerable});return t};var hn=(t,e,a)=>(a=t!=null?lb(ub(t)):{},hb(e||!t||!t.__esModule?fF(a,"default",{value:t,enumerable:!0}):a,t));var MF=Pr(Mt=>{"use strict";mt();var mm=Symbol.for("react.transitional.element"),mb=Symbol.for("react.portal"),Ib=Symbol.for("react.fragment"),xb=Symbol.for("react.strict_mode"),gb=Symbol.for("react.profiler"),Fb=Symbol.for("react.consumer"),Sb=Symbol.for("react.context"),vb=Symbol.for("react.forward_ref"),yb=Symbol.for("react.suspense"),Mb=Symbol.for("react.memo"),mF=Symbol.for("react.lazy"),Cb=Symbol.for("react.activity"),_b=Symbol.for("react.view_transition"),uF=Symbol.iterator;function bb(t){return t===null||typeof t!="object"?null:(t=uF&&t[uF]||t["@@iterator"],typeof t=="function"?t:null)}var IF={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xF=Object.assign,gF={};function Ci(t,e,a){this.props=t,this.context=e,this.refs=gF,this.updater=a||IF}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function FF(){}FF.prototype=Ci.prototype;function Im(t,e,a){this.props=t,this.context=e,this.refs=gF,this.updater=a||IF}var xm=Im.prototype=new FF;xm.constructor=Im;xF(xm,Ci.prototype);xm.isPureReactComponent=!0;var dF=Array.isArray;function hm(){}var ra={H:null,A:null,T:null,S:null},SF=Object.prototype.hasOwnProperty;function gm(t,e,a){var o=a.ref;return{$$typeof:mm,type:t,key:e,ref:o!==void 0?o:null,props:a}}function Tb(t,e){return gm(t.type,e,t.props)}function Fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===mm}function Ab(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var pF=/\/+/g;function pm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ab(""+t.key):e.toString(36)}function wb(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(hm,hm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Mi(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case mm:case mb:s=!0;break;case mF:return s=t._init,Mi(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+pm(t,0):o,dF(n)?(a="",s!=null&&(a=s.replace(pF,"$&/")+"/"),Mi(n,e,a,"",function(c){return c})):n!=null&&(Fm(n)&&(n=Tb(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(pF,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(dF(t))for(var l=0;l<t.length;l++)o=t[l],r=i+pm(o,l),s+=Mi(o,e,a,r,n);else if(l=bb(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+pm(o,l++),s+=Mi(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return Mi(wb(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function du(t,e,a){if(t==null)return t;var o=[],n=0;return Mi(t,o,"","",function(r){return e.call(a,r,n++)}),o}function Eb(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var hF=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function vF(t){var e=ra.T,a={};a.types=e!==null?e.types:null,ra.T=a;try{var o=t(),n=ra.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(hm,hF)}catch(r){hF(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),ra.T=e}}function yF(t){var e=ra.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else vF(yF.bind(null,t))}var Rb={map:du,forEach:function(t,e,a){du(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return du(t,function(){e++}),e},toArray:function(t){return du(t,function(e){return e})||[]},only:function(t){if(!Fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Activity=Cb;Mt.Children=Rb;Mt.Component=Ci;Mt.Fragment=Ib;Mt.Profiler=gb;Mt.PureComponent=Im;Mt.StrictMode=xb;Mt.Suspense=yb;Mt.ViewTransition=_b;Mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ra;Mt.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ra.H.useMemoCache(t)}};Mt.addTransitionType=yF;Mt.cache=function(t){return function(){return t.apply(null,arguments)}};Mt.cacheSignal=function(){return null};Mt.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=xF({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!SF.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return gm(t.type,n,o)};Mt.createContext=function(t){return t={$$typeof:Sb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Fb,_context:t},t};Mt.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)SF.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return gm(t,r,n)};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:vb,render:t}};Mt.isValidElement=Fm;Mt.lazy=function(t){return{$$typeof:mF,_payload:{_status:-1,_result:t},_init:Eb}};Mt.memo=function(t,e){return{$$typeof:Mb,type:t,compare:e===void 0?null:e}};Mt.startTransition=vF;Mt.unstable_useCacheRefresh=function(){return ra.H.useCacheRefresh()};Mt.use=function(t){return ra.H.use(t)};Mt.useActionState=function(t,e,a){return ra.H.useActionState(t,e,a)};Mt.useCallback=function(t,e){return ra.H.useCallback(t,e)};Mt.useContext=function(t){return ra.H.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t,e){return ra.H.useDeferredValue(t,e)};Mt.useEffect=function(t,e){return ra.H.useEffect(t,e)};Mt.useEffectEvent=function(t){return ra.H.useEffectEvent(t)};Mt.useId=function(){return ra.H.useId()};Mt.useImperativeHandle=function(t,e,a){return ra.H.useImperativeHandle(t,e,a)};Mt.useInsertionEffect=function(t,e){return ra.H.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return ra.H.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return ra.H.useMemo(t,e)};Mt.useOptimistic=function(t,e){return ra.H.useOptimistic(t,e)};Mt.useReducer=function(t,e,a){return ra.H.useReducer(t,e,a)};Mt.useRef=function(t){return ra.H.useRef(t)};Mt.useState=function(t){return ra.H.useState(t)};Mt.useSyncExternalStore=function(t,e,a){return ra.H.useSyncExternalStore(t,e,a)};Mt.useTransition=function(){return ra.H.useTransition()};Mt.version="19.3.0"});var Ro=Pr((rB,CF)=>{"use strict";mt();CF.exports=MF()});var Ue,mt=pb(()=>{Ue=hn(Ro())});var PF=Pr(fa=>{"use strict";mt();function Mm(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<pu(n,e))t[o]=e,t[a]=n,a=o;else break e}}function Rn(t){return t.length===0?null:t[0]}function mu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>pu(i,a))l<n&&0>pu(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>pu(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function pu(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}fa.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(_F=performance,fa.unstable_now=function(){return _F.now()}):(Sm=Date,bF=Sm.now(),fa.unstable_now=function(){return Sm.now()-bF});var _F,Sm,bF,sr=[],Br=[],Lb=1,Qo=null,$a=3,Cm=!1,pc=!1,hc=!1,_m=!1,wF=typeof setTimeout=="function"?setTimeout:null,EF=typeof clearTimeout=="function"?clearTimeout:null,TF=typeof setImmediate<"u"?setImmediate:null;function hu(t){for(var e=Rn(Br);e!==null;){if(e.callback===null)mu(Br);else if(e.startTime<=t)mu(Br),e.sortIndex=e.expirationTime,Mm(sr,e);else break;e=Rn(Br)}}function bm(t){if(hc=!1,hu(t),!pc)if(Rn(sr)!==null)pc=!0,bi||(bi=!0,_i());else{var e=Rn(Br);e!==null&&Tm(bm,e.startTime-t)}}var bi=!1,mc=-1,RF=5,LF=-1;function DF(){return _m?!0:!(fa.unstable_now()-LF<RF)}function vm(){if(_m=!1,bi){var t=fa.unstable_now();LF=t;var e=!0;try{e:{pc=!1,hc&&(hc=!1,EF(mc),mc=-1),Cm=!0;var a=$a;try{t:{for(hu(t),Qo=Rn(sr);Qo!==null&&!(Qo.expirationTime>t&&DF());){var o=Qo.callback;if(typeof o=="function"){Qo.callback=null,$a=Qo.priorityLevel;var n=o(Qo.expirationTime<=t);if(t=fa.unstable_now(),typeof n=="function"){Qo.callback=n,hu(t),e=!0;break t}Qo===Rn(sr)&&mu(sr),hu(t)}else mu(sr);Qo=Rn(sr)}if(Qo!==null)e=!0;else{var r=Rn(Br);r!==null&&Tm(bm,r.startTime-t),e=!1}}break e}finally{Qo=null,$a=a,Cm=!1}e=void 0}}finally{e?_i():bi=!1}}}var _i;typeof TF=="function"?_i=function(){TF(vm)}:typeof MessageChannel<"u"?(ym=new MessageChannel,AF=ym.port2,ym.port1.onmessage=vm,_i=function(){AF.postMessage(null)}):_i=function(){wF(vm,0)};var ym,AF;function Tm(t,e){mc=wF(function(){t(fa.unstable_now())},e)}fa.unstable_IdlePriority=5;fa.unstable_ImmediatePriority=1;fa.unstable_LowPriority=4;fa.unstable_NormalPriority=3;fa.unstable_Profiling=null;fa.unstable_UserBlockingPriority=2;fa.unstable_cancelCallback=function(t){t.callback=null};fa.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):RF=0<t?Math.floor(1e3/t):5};fa.unstable_getCurrentPriorityLevel=function(){return $a};fa.unstable_next=function(t){switch($a){case 1:case 2:case 3:var e=3;break;default:e=$a}var a=$a;$a=e;try{return t()}finally{$a=a}};fa.unstable_requestPaint=function(){_m=!0};fa.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=$a;$a=t;try{return e()}finally{$a=a}};fa.unstable_scheduleCallback=function(t,e,a){var o=fa.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Lb++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,Mm(Br,t),Rn(sr)===null&&t===Rn(Br)&&(hc?(EF(mc),mc=-1):hc=!0,Tm(bm,a-o))):(t.sortIndex=n,Mm(sr,t),pc||Cm||(pc=!0,bi||(bi=!0,_i()))),t};fa.unstable_shouldYield=DF;fa.unstable_wrapCallback=function(t){var e=$a;return function(){var a=$a;$a=e;try{return t.apply(this,arguments)}finally{$a=a}}}});var UF=Pr((fB,BF)=>{"use strict";mt();BF.exports=PF()});var OF=Pr(eo=>{"use strict";mt();var Db=Ro();function NF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ur(){}var lo={d:{f:Ur,r:function(){throw Error(NF(522))},D:Ur,C:Ur,L:Ur,m:Ur,X:Ur,S:Ur,M:Ur},p:0,findDOMNode:null},Pb=Symbol.for("react.portal"),Bb=Symbol.for("react.recoverable"),kF=Symbol.for("react.optimistic_key");function Ub(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pb,key:o==null?null:o===kF?kF:""+o,children:t,containerInfo:e,implementation:a}}var Ic=Db.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Iu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}eo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lo;eo.browser=function(t){return{$$typeof:Bb,_reason:t}};eo.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(NF(299));return Ub(t,e,null,a)};eo.flushSync=function(t){var e=Ic.T,a=lo.p;try{if(Ic.T=null,lo.p=2,t)return t()}finally{Ic.T=e,lo.p=a,lo.d.f()}};eo.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,lo.d.C(t,e))};eo.prefetchDNS=function(t){typeof t=="string"&&lo.d.D(t)};eo.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=Iu(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?lo.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&lo.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};eo.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Iu(e.as,e.crossOrigin);lo.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&lo.d.M(t)};eo.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=Iu(a,e.crossOrigin);lo.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};eo.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Iu(e.as,e.crossOrigin);lo.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else lo.d.m(t)};eo.requestFormReset=function(t){lo.d.r(t)};eo.unstable_batchedUpdates=function(t,e){return t(e)};eo.useFormState=function(t,e,a){return Ic.H.useFormState(t,e,a)};eo.useFormStatus=function(){return Ic.H.useHostTransitionStatus()};eo.version="19.3.0"});var VF=Pr((hB,HF)=>{"use strict";mt();function zF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zF)}catch(t){console.error(t)}}zF(),HF.exports=OF()});var AM=Pr(Qd=>{"use strict";mt();var Pa=UF(),Tv=Ro(),kb=VF();function he(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Av(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function of(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ev(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function GF(t){if(of(t)!==t)throw Error(he(188))}function Nb(t){var e=t.alternate;if(!e){if(e=of(t),e===null)throw Error(he(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return GF(n),t;if(r===o)return GF(n),e;r=r.sibling}throw Error(he(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(he(189))}}if(a.alternate!==o)throw Error(he(190))}if(a.tag!==3)throw Error(he(188));return a.stateNode.current===a?t:e}function Rv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Rv(t),e!==null)return e;t=t.sibling}return null}function bo(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&bo(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function $s(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function qF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Lv(t){var e=[null,null],a=$s(t);return a===null||Dv(e,t,a.child,{foundSelf:!1}),e}function Dv(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Dv(t,e,a.child,o))return!0;a=a.sibling}return!1}function Da(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(he(559))}}var Di=null,rI=null;function Ob(t,e,a){return t===a?!0:t===e?(Di=t,!0):!1}function zb(t,e,a){return t===a?(rI=t,!1):t===e?(rI!==null&&(Di=t),!0):!1}function WF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function sI(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var aa=Object.assign,Hb=Symbol.for("react.element"),xu=Symbol.for("react.transitional.element"),Mc=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),iI=Symbol.for("react.profiler"),Bv=Symbol.for("react.consumer"),kn=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),lI=Symbol.for("react.suspense"),cI=Symbol.for("react.suspense_list"),x0=Symbol.for("react.memo"),zr=Symbol.for("react.lazy");Symbol.for("react.scope");var fI=Symbol.for("react.activity"),Vb=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Gb=Symbol.for("react.memo_cache_sentinel"),uI=Symbol.for("react.view_transition"),qb=Symbol.for("react.recoverable"),XF=Symbol.iterator;function xc(t){return t===null||typeof t!="object"?null:(t=XF&&t[XF]||t["@@iterator"],typeof t=="function"?t:null)}var Wb=Symbol.for("react.client.reference");function dI(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Wb?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case iI:return"Profiler";case Pv:return"StrictMode";case lI:return"Suspense";case cI:return"SuspenseList";case fI:return"Activity";case uI:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Mc:return"Portal";case kn:return t.displayName||"Context";case Bv:return(t._context.displayName||"Context")+".Consumer";case I0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case x0:return e=t.displayName||null,e!==null?e:dI(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return dI(t(e))}catch{}}return null}var Cc=Array.isArray,gt=Tv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=kb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zs={pending:!1,data:null,method:null,action:null},pI=[],Bi=-1;function qn(t){return{current:t}}function Za(t){0>Bi||(t.current=pI[Bi],pI[Bi]=null,Bi--)}function la(t,e){Bi++,pI[Bi]=t.current,t.current=e}var Hn=qn(null),Hc=qn(null),Kr=qn(null),od=qn(null);function nd(t,e){switch(la(Kr,e),la(Hc,t),la(Hn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?sv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=sv(e),t=oM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Za(Hn),la(Hn,t)}function tl(){Za(Hn),Za(Hc),Za(Kr)}function hI(t){var e=t.memoizedState;e!==null&&(ul._currentValue=e.memoizedState,la(od,t)),e=Hn.current;var a=oM(e,t.type);e!==a&&(la(Hc,t),la(Hn,a))}function rd(t){Hc.current===t&&(Za(Hn),Za(Hc)),od.current===t&&(Za(od),ul._currentValue=zs)}var Am,YF;function Nr(t){if(Am===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Am=e&&e[1]||"",YF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Am+t+YF}var wm=!1;function Em(t,e){if(!t||wm)return"";wm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(m){var f=m}Reflect.construct(t,[],h)}else{try{h.call()}catch(m){f=m}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(m){f=m}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(m){if(m&&f&&typeof m.stack=="string")return[m.stack,f.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var u=`
`+l[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=n);break}}}finally{wm=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Nr(a):""}function Xb(t,e){switch(t.tag){case 26:case 27:case 5:return Nr(t.type);case 16:return Nr("Lazy");case 13:return t.child!==e&&e!==null?Nr("Suspense Fallback"):Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 15:return Em(t.type,!1);case 11:return Em(t.type.render,!1);case 1:return Em(t.type,!0);case 31:return Nr("Activity");case 30:return Nr("ViewTransition");default:return""}}function ZF(t){try{var e="",a=null;do e+=Xb(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var mI=Object.prototype.hasOwnProperty,g0=Pa.unstable_scheduleCallback,Rm=Pa.unstable_cancelCallback,Yb=Pa.unstable_shouldYield,Zb=Pa.unstable_requestPaint,ko=Pa.unstable_now,Kb=Pa.unstable_getCurrentPriorityLevel,Uv=Pa.unstable_ImmediatePriority,kv=Pa.unstable_UserBlockingPriority,sd=Pa.unstable_NormalPriority,Jb=Pa.unstable_LowPriority,Nv=Pa.unstable_IdlePriority,Qb=Pa.log,jb=Pa.unstable_setDisableYieldValue,nf=null,No=null;function Gr(t){if(typeof Qb=="function"&&jb(t),No&&typeof No.setStrictMode=="function")try{No.setStrictMode(nf,t)}catch{}}var Oo=Math.clz32?Math.clz32:tT,$b=Math.log,eT=Math.LN2;function tT(t){return t>>>=0,t===0?32:31-($b(t)/eT|0)|0}var gu=256,Fu=262144,Su=4194304;function Bs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ld(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Bs(o):(s&=i,s!==0?n=Bs(s):a||(a=i&~t,a!==0&&(n=Bs(a))))):(i=o&~r,i!==0?n=Bs(i):s!==0?n=Bs(s):a||(a=o&~t,a!==0&&(n=Bs(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function rf(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ov(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-Oo(a),n=1<<o;e|=t[o],a&=~n}return e}function aT(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(){var t=Su;return Su<<=1,!(Su&62914560)&&(Su=4194304),t}function Lm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function sf(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oT(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var u=31-Oo(a),h=1<<u;i[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var d=f[u];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&Hv(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Hv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Oo(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Vv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-Oo(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function Gv(t,e){var a=e&-e;return a=a&42?1:F0(a),a&(t.suspendedLanes|e)?0:a}function F0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function S0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function qv(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:_M(t.type))}function KF(t,e){var a=Gt.p;try{return Gt.p=t,e()}finally{Gt.p=a}}var Fr=Math.random().toString(36).slice(2),Xa="__reactFiber$"+Fr,To="__reactProps$"+Fr,hl="__reactContainer$"+Fr,JF="__reactEvents$"+Fr,nT="__reactListeners$"+Fr,rT="__reactHandles$"+Fr,QF="__reactResources$"+Fr,lf="__reactMarker$"+Fr,id="__reactLoad$"+Fr;function Dd(t){delete t[Xa],delete t[To],delete t[nT],delete t[rT]}function Ns(t){var e;if(e=t[Xa])return e;for(var a=t.parentNode;a;){if(e=a[hl]||a[Xa]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=hv(t);t!==null;){if(a=t[Xa])return a;t=hv(t)}return e}t=a,a=t.parentNode}return null}function ml(t){if(t=t[Xa]||t[hl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function _c(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(he(33))}function Wi(t){var e=t[QF];return e||(e=t[QF]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ha(t){t[lf]=!0}function Wv(t){t[id]=void 0}var Xv=new Set,Yv={};function ei(t,e){al(t,e),al(t+"Capture",e)}function al(t,e){for(Yv[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var sT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jF={},$F={};function iT(t){return mI.call($F,t)?!0:mI.call(jF,t)?!1:sT.test(t)?$F[t]=!0:(jF[t]=!0,!1)}var Ht=!1;function eS(){var t=Ht;return Ht=!1,t}function Nu(t,e,a){if(iT(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function vu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function ir(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function Do(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lT(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function II(t){if(!t._valueTracker){var e=Zv(t)?"checked":"value";t._valueTracker=lT(t,e,""+t[e])}}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=Zv(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var cT=/[\n"\\]/g;function an(t){return t.replace(cT,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xI(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Do(e)):t.value!==""+Do(e)&&(t.value=""+Do(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?Dm(t,Do(t.value)):Dm(t,Do(e)):a!=null?Dm(t,Do(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+Do(i):t.removeAttribute("name")}function Jv(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){II(t);return}a=a!=null?""+Do(a):"",e=e!=null?""+Do(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),II(t)}function Dm(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Xi(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Do(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Qv(t,e,a){if(e!=null&&(e=""+Do(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Do(a):""}function jv(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(he(92));if(Cc(o)){if(1<o.length)throw Error(he(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=Do(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),II(t)}function ol(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var fT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tS(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||fT.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function $v(t,e,a){if(e!=null&&typeof e!="object")throw Error(he(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",Ht=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(tS(t,n,o),Ht=!0)}else for(var r in e)e.hasOwnProperty(r)&&tS(t,r,e[r])}function v0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ou(t){return dT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Nn(){}var gI=null;function y0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ui=null,Yi=null;function aS(t){var e=ml(t);if(e&&(t=e.stateNode)){var a=t[To]||null;e:switch(t=e.stateNode,e.type){case"input":if(xI(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+an(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[To]||null;if(!n)throw Error(he(90));xI(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&Kv(o)}break e;case"textarea":Qv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Xi(t,!!a.multiple,e,!1)}}}var Pm=!1;function ey(t,e,a){if(Pm)return t(e,a);Pm=!0;try{var o=t(e);return o}finally{if(Pm=!1,(Ui!==null||Yi!==null)&&(Yd(),Ui&&(e=Ui,t=Yi,Yi=Ui=null,aS(e),t)))for(e=0;e<t.length;e++)aS(t[e])}}function Vc(t,e){var a=t.stateNode;if(a===null)return null;var o=a[To]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(he(231,e,typeof a));return a}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),FI=!1;if(pr)try{Ti={},Object.defineProperty(Ti,"passive",{get:function(){FI=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{FI=!1}var Ti,qr=null,M0=null,zu=null;function ty(){if(zu)return zu;var t,e=M0,a=e.length,o,n="value"in qr?qr.value:qr.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return zu=n.slice(t,1<o?1-o:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yu(){return!0}function oS(){return!1}function po(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?yu:oS,this.isPropagationStopped=oS,this}return aa(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=po(fs),cf=aa({},fs,{view:0,detail:0}),pT=po(cf),Bm,Um,gc,Bd=aa({},cf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gc&&(gc&&t.type==="mousemove"?(Bm=t.screenX-gc.screenX,Um=t.screenY-gc.screenY):Um=Bm=0,gc=t),Bm)},movementY:function(t){return"movementY"in t?t.movementY:Um}}),nS=po(Bd),hT=aa({},Bd,{dataTransfer:0}),mT=po(hT),IT=aa({},cf,{relatedTarget:0}),km=po(IT),xT=aa({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=po(xT),FT=aa({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ST=po(FT),vT=aa({},fs,{data:0}),rS=po(vT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _T(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CT[t])?!!e[t]:!1}function C0(){return _T}var bT=aa({},cf,{key:function(t){if(t.key){var e=yT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C0,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TT=po(bT),AT=aa({},Bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sS=po(AT),wT=aa({},fs,{submitter:0}),ET=po(wT),RT=aa({},cf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C0}),LT=po(RT),DT=aa({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=po(DT),BT=aa({},Bd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UT=po(BT),kT=aa({},fs,{newState:0,oldState:0,source:0}),NT=po(kT),OT=[9,13,27,32],_0=pr&&"CompositionEvent"in window,Ac=null;pr&&"documentMode"in document&&(Ac=document.documentMode);var zT=pr&&"TextEvent"in window&&!Ac,ay=pr&&(!_0||Ac&&8<Ac&&11>=Ac),iS=" ",lS=!1;function oy(t,e){switch(t){case"keyup":return OT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function HT(t,e){switch(t){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(lS=!0,iS);case"textInput":return t=e.data,t===iS&&lS?null:t;default:return null}}function VT(t,e){if(ki)return t==="compositionend"||!_0&&oy(t,e)?(t=ty(),zu=M0=qr=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var GT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cS(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GT[t.type]:e==="textarea"}function ry(t,e,a,o){Ui?Yi?Yi.push(o):Yi=[o]:Ui=o,e=wd(e,"onChange"),0<e.length&&(a=new Pd("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var wc=null,Gc=null;function qT(t){eM(t,0)}function Ud(t){var e=_c(t);if(Kv(e))return t}function fS(t,e){if(t==="change")return e}var sy=!1;pr&&(pr?(Cu="oninput"in document,Cu||(Nm=document.createElement("div"),Nm.setAttribute("oninput","return;"),Cu=typeof Nm.oninput=="function"),Mu=Cu):Mu=!1,sy=Mu&&(!document.documentMode||9<document.documentMode));var Mu,Cu,Nm;function uS(){wc&&(wc.detachEvent("onpropertychange",iy),Gc=wc=null)}function iy(t){if(t.propertyName==="value"&&Ud(Gc)){var e=[];ry(e,Gc,t,y0(t)),ey(qT,e)}}function WT(t,e,a){t==="focusin"?(uS(),wc=e,Gc=a,wc.attachEvent("onpropertychange",iy)):t==="focusout"&&uS()}function XT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ud(Gc)}function YT(t,e){if(t==="click")return Ud(e)}function ZT(t,e){if(t==="input"||t==="change")return Ud(e)}function KT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ho=typeof Object.is=="function"?Object.is:KT;function qc(t,e){if(Ho(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!mI.call(e,n)||!Ho(t[n],e[n]))return!1}return!0}function SI(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dS(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pS(t,e){var a=dS(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dS(a)}}function ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=SI(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=SI(t.document)}return e}function b0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var JT=pr&&"documentMode"in document&&11>=document.documentMode,Ni=null,vI=null,Ec=null,yI=!1;function hS(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yI||Ni==null||Ni!==SI(o)||(o=Ni,"selectionStart"in o&&b0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ec&&qc(Ec,o)||(Ec=o,o=wd(vI,"onSelect"),0<o.length&&(e=new Pd("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Ni)))}function Ds(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Oi={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},Om={},fy={};pr&&(fy=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function ti(t){if(Om[t])return Om[t];if(!Oi[t])return t;var e=Oi[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in fy)return Om[t]=e[a];return t}var uy=ti("animationend"),dy=ti("animationiteration"),py=ti("animationstart"),QT=ti("transitionrun"),jT=ti("transitionstart"),$T=ti("transitioncancel"),hy=ti("transitionend"),my=new Map,MI="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");MI.push("scrollEnd");function Sn(t,e){my.set(t,e),ei(e,[t])}var eA=0;function hr(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Fn.identifierPrefix;var a=eA++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function mS(t){if(t==null||typeof t=="string")return t;var e=null,a=el;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function Sr(t,e){return t=mS(t),e=mS(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var ld=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$o=[],zi=0,T0=0;function kd(){for(var t=zi,e=T0=zi=0;e<t;){var a=$o[e];$o[e++]=null;var o=$o[e];$o[e++]=null;var n=$o[e];$o[e++]=null;var r=$o[e];if($o[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&Iy(a,n,r)}}function Nd(t,e,a,o){$o[zi++]=t,$o[zi++]=e,$o[zi++]=a,$o[zi++]=o,T0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function A0(t,e,a,o){return Nd(t,e,a,o),cd(t)}function ai(t,e){return Nd(t,null,null,e),cd(t)}function Iy(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-Oo(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function cd(t){if(50<zc)throw zc=0,Qu=null,Error(he(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hi={};function tA(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Co(t,e,a,o){return new tA(t,e,a,o)}function w0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ur(t,e){var a=t.alternate;return a===null?(a=Co(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xy(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Vu(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")w0(o)&&(s=1);else if(typeof o=="string")s=Tw(t,a,Hn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case fI:return t=Co(31,a,e,n),t.elementType=fI,t.lanes=r,t;case Pi:return Hs(a.children,n,r,e);case Pv:s=8,n|=24;break;case iI:return t=Co(12,a,e,n|2),t.elementType=iI,t.lanes=r,t;case lI:return t=Co(13,a,e,n),t.elementType=lI,t.lanes=r,t;case cI:return t=Co(19,a,e,n),t.elementType=cI,t.lanes=r,t;case Vb:case uI:return t=n|32,t=Co(30,a,e,t),t.elementType=uI,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case kn:s=10;break e;case Bv:s=9;break e;case I0:s=11;break e;case x0:s=14;break e;case zr:s=16,o=null;break e}s=29,a=Error(he(130,t===null?"null":typeof t,"")),o=null}return e=Co(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function Hs(t,e,a,o){return t=Co(7,t,o,e),t.lanes=a,t}function zm(t,e,a){return t=Co(6,t,null,e),t.lanes=a,t}function gy(t){var e=Co(18,null,null,0);return e.stateNode=t,e}function Hm(t,e,a){return e=Co(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var IS=new WeakMap;function on(t,e){if(typeof t=="object"&&t!==null){var a=IS.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ZF(e)},IS.set(t,e),e)}return{value:t,source:e,stack:ZF(e)}}var Vi=[],Gi=0,fd=null,Wc=0,en=[],tn=0,rs=null,On=1,zn="";function cr(t,e){Vi[Gi++]=Wc,Vi[Gi++]=fd,fd=t,Wc=e}function Fy(t,e,a){en[tn++]=On,en[tn++]=zn,en[tn++]=rs,rs=t;var o=On;t=zn;var n=32-Oo(o)-1;o&=~(1<<n),a+=1;var r=32-Oo(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,On=1<<32-Oo(e)+n|a<<n|o,zn=r+t}else On=1<<r|a<<n|o,zn=t}function Od(t){t.return!==null&&(cr(t,1),Fy(t,1,0))}function E0(t){for(;t===fd;)fd=Vi[--Gi],Vi[Gi]=null,Wc=Vi[--Gi],Vi[Gi]=null;for(;t===rs;)rs=en[--tn],en[tn]=null,zn=en[--tn],en[tn]=null,On=en[--tn],en[tn]=null}function Sy(t,e){en[tn++]=On,en[tn++]=zn,en[tn++]=rs,On=e.id,zn=e.overflow,rs=t}var Va=null,ia=null,Et=!1,Jr=null,nn=!1,CI=Error(he(519));function ss(t){var e=Error(he(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xc(on(e,t)),CI}function xS(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Xa]=t,e[To]=o,a){case"dialog":Pt("cancel",e),Pt("close",e);break;case"iframe":case"object":case"embed":Pt("load",e);break;case"video":case"audio":for(a=0;a<Jc.length;a++)Pt(Jc[a],e);break;case"source":Pt("error",e);break;case"img":case"image":case"link":Pt("error",e),Pt("load",e);break;case"details":Pt("toggle",e);break;case"input":Pt("invalid",e),Jv(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pt("invalid",e);break;case"textarea":Pt("invalid",e),jv(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||aM(e.textContent,a)?(o.popover!=null&&(Pt("beforetoggle",e),Pt("toggle",e)),o.onScroll!=null&&Pt("scroll",e),o.onScrollEnd!=null&&Pt("scrollend",e),o.onClick!=null&&(e.onclick=Nn),e=!0):e=!1,e||ss(t,!0)}function ud(t){for(Va=t.return;Va;)switch(Va.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:Va=Va.return}}function Ai(t){if(t!==Va)return!1;if(!Et)return ud(t),Et=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||l0(t.type,t.memoizedProps)),a=!a),a&&ia&&ss(t),ud(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));ia=pv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));ia=pv(t)}else e===27?(e=ia,us(t.type)?(t=d0,d0=null,ia=t):ia=e):ia=Va?rn(t.stateNode.nextSibling):null;return!0}function Ws(){ia=Va=null,Et=!1}function Vm(){var t=Jr;return t!==null&&(yo===null?yo=t:yo.push.apply(yo,t),Jr=null),t}function Xc(t){Jr===null?Jr=[t]:Jr.push(t)}var _I=qn(null),oi=null,fr=null;function Wr(t,e,a){la(_I,e._currentValue),e._currentValue=a}function dr(t){t._currentValue=_I.current,Za(_I)}function Gu(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function bI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Gu(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(he(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Gu(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Gu(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Xs(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(he(387));if(s=s.memoizedProps,s!==null){var i=n.type;Ho(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===od.current){if(s=n.alternate,s===null)throw Error(he(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}n=n.return}return t!==null&&bI(e,t,a,o),e.flags|=262144,t!==null}function dd(t){for(t=t.firstContext;t!==null;){if(!Ho(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){oi=t,fr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ya(t){return vy(oi,t)}function _u(t,e){return oi===null&&Ys(t),vy(t,e)}function vy(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},fr===null){if(t===null)throw Error(he(308));fr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fr=fr.next=e;return a}var aA=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},oA=Pa.unstable_scheduleCallback,nA=Pa.unstable_NormalPriority,_a={$$typeof:kn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function R0(){return{controller:new aA,data:new Map,refCount:0}}function ff(t){t.refCount--,t.refCount===0&&oA(nA,function(){t.controller.abort()})}function gS(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var bc=null;function rA(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Rc=null,TI=0,Zs=0,Zi=null;function sA(t,e){if(Rc===null){var a=Rc=[];TI=0,Zs=rx(),Zi={status:"pending",value:void 0,then:function(o){a.push(o)}}}return TI++,e.then(FS,FS),e}function FS(){if(--TI===0&&(bc=null,Rc!==null)){Zi!==null&&(Zi.status="fulfilled");var t=Rc;Rc=null,Zs=0,Zi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function iA(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var SS=gt.S;gt.S=function(t,e){if(O1=ko(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&sA(t,e),bc!==null)for(var a=ll;a!==null;)gS(a,bc),a=a.next;if(a=t.types,a!==null){for(var o=ll;o!==null;)gS(o,a),o=o.next;if(Zs!==0){o=bc,o===null&&(o=bc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}SS!==null&&SS(t,e)};var Vs=qn(null);function L0(){var t=Vs.current;return t!==null?t:ta.pooledCache}function qu(t,e){e===null?la(Vs,Vs.current):la(Vs,e.pool)}function yy(){var t=L0();return t===null?null:{parent:_a._currentValue,pool:t}}var Il=Error(he(460)),D0=Error(he(474)),zd=Error(he(542)),pd={then:function(){}};function vS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function My(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Nn,Nn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,MS(t),t===void 0&&!("reason"in e)?Error(he(600)):t;default:if(typeof e.status=="string")e.then(Nn,Nn);else{if(t=ta,t!==null&&100<t.shellSuspendCounter)throw Error(he(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,MS(t),t}throw Gs=e,Il}}function Us(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,Il):a}}var Gs=null;function yS(){if(Gs===null)throw Error(he(459));var t=Gs;return Gs=null,t}function MS(t){if(t===Il||t===zd)throw Error(he(483))}var Ki=null,Yc=0;function bu(t){var e=Yc;return Yc+=1,Ki===null&&(Ki=[]),My(Ki,t,e)}function kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Tu(t,e){throw e.$$typeof===Hb?Error(he(525)):(t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Cy(t){function e(p,g){if(t){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function a(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function o(p){for(var g=new Map;p!==null;)p.key===null?g.set(p.index,p):g.set(p.key,p),p=p.sibling;return g}function n(p,g){return p=ur(p,g),p.index=0,p.sibling=null,p}function r(p,g,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=134217730,g)):(p.flags|=1048576,g)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,g,y,x){return g===null||g.tag!==6?(g=zm(y,p.mode,x),g.return=p,g):(g=n(g,y),g.return=p,g)}function l(p,g,y,x){var C=y.type;return C===Pi?(p=u(p,g,y.props.children,x,y.key),kr(p,y),p):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&Us(C)===g.type)?(g=n(g,y.props),kr(g,y),g.return=p,g):(g=Vu(y.type,y.key,y.props,null,p.mode,x),kr(g,y),g.return=p,g)}function c(p,g,y,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Hm(y,p.mode,x),g.return=p,g):(g=n(g,y.children||[]),g.return=p,g)}function u(p,g,y,x,C){return g===null||g.tag!==7?(g=Hs(y,p.mode,x,C),g.return=p,g):(g=n(g,y),g.return=p,g)}function h(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=zm(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xu:return y=Vu(g.type,g.key,g.props,null,p.mode,y),kr(y,g),y.return=p,y;case Mc:return g=Hm(g,p.mode,y),g.return=p,g;case zr:return g=Us(g),h(p,g,y)}if(Cc(g)||xc(g))return g=Hs(g,p.mode,y,null),g.return=p,g;if(typeof g.then=="function")return h(p,bu(g),y);if(g.$$typeof===kn)return h(p,_u(p,g),y);Tu(p,g)}return null}function f(p,g,y,x){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:i(p,g,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xu:return y.key===C?l(p,g,y,x):null;case Mc:return y.key===C?c(p,g,y,x):null;case zr:return y=Us(y),f(p,g,y,x)}if(Cc(y)||xc(y))return C!==null?null:u(p,g,y,x,null);if(typeof y.then=="function")return f(p,g,bu(y),x);if(y.$$typeof===kn)return f(p,g,_u(p,y),x);Tu(p,y)}return null}function d(p,g,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(y)||null,i(g,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xu:return p=p.get(x.key===null?y:x.key)||null,l(g,p,x,C);case Mc:return p=p.get(x.key===null?y:x.key)||null,c(g,p,x,C);case zr:return x=Us(x),d(p,g,y,x,C)}if(Cc(x)||xc(x))return p=p.get(y)||null,u(g,p,x,C,null);if(typeof x.then=="function")return d(p,g,y,bu(x),C);if(x.$$typeof===kn)return d(p,g,y,_u(g,x),C);Tu(g,x)}return null}function m(p,g,y,x){for(var C=null,b=null,T=g,v=g=0,A=null;T!==null&&v<y.length;v++){T.index>v?(A=T,T=null):A=T.sibling;var w=f(p,T,y[v],x);if(w===null){T===null&&(T=A);break}t&&T&&w.alternate===null&&e(p,T),g=r(w,g,v),b===null?C=w:b.sibling=w,b=w,T=A}if(v===y.length)return a(p,T),Et&&cr(p,v),C;if(T===null){for(;v<y.length;v++)T=h(p,y[v],x),T!==null&&(g=r(T,g,v),b===null?C=T:b.sibling=T,b=T);return Et&&cr(p,v),C}for(T=o(T);v<y.length;v++)A=d(T,p,v,y[v],x),A!==null&&(t&&(w=A.alternate,w!==null&&T.delete(w.key===null?v:w.key)),g=r(A,g,v),b===null?C=A:b.sibling=A,b=A);return t&&T.forEach(function(D){return e(p,D)}),Et&&cr(p,v),C}function S(p,g,y,x){if(y==null)throw Error(he(151));for(var C=null,b=null,T=g,v=g=0,A=null,w=y.next();T!==null&&!w.done;v++,w=y.next()){T.index>v?(A=T,T=null):A=T.sibling;var D=f(p,T,w.value,x);if(D===null){T===null&&(T=A);break}t&&T&&D.alternate===null&&e(p,T),g=r(D,g,v),b===null?C=D:b.sibling=D,b=D,T=A}if(w.done)return a(p,T),Et&&cr(p,v),C;if(T===null){for(;!w.done;v++,w=y.next())w=h(p,w.value,x),w!==null&&(g=r(w,g,v),b===null?C=w:b.sibling=w,b=w);return Et&&cr(p,v),C}for(T=o(T);!w.done;v++,w=y.next())w=d(T,p,v,w.value,x),w!==null&&(t&&(A=w.alternate,A!==null&&T.delete(A.key===null?v:A.key)),g=r(w,g,v),b===null?C=w:b.sibling=w,b=w);return t&&T.forEach(function(Y){return e(p,Y)}),Et&&cr(p,v),C}function I(p,g,y,x){if(typeof y=="object"&&y!==null&&y.type===Pi&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xu:e:{for(var C=y.key;g!==null;){if(g.key===C){if(C=y.type,C===Pi){if(g.tag===7){a(p,g.sibling),x=n(g,y.props.children),kr(x,y),x.return=p,p=x;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&Us(C)===g.type){a(p,g.sibling),x=n(g,y.props),kr(x,y),x.return=p,p=x;break e}a(p,g);break}else e(p,g);g=g.sibling}y.type===Pi?(x=Hs(y.props.children,p.mode,x,y.key),kr(x,y),x.return=p,p=x):(x=Vu(y.type,y.key,y.props,null,p.mode,x),kr(x,y),x.return=p,p=x)}return s(p);case Mc:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){a(p,g.sibling),x=n(g,y.children||[]),x.return=p,p=x;break e}else{a(p,g);break}else e(p,g);g=g.sibling}x=Hm(y,p.mode,x),x.return=p,p=x}return s(p);case zr:return y=Us(y),I(p,g,y,x)}if(Cc(y))return m(p,g,y,x);if(xc(y)){if(C=xc(y),typeof C!="function")throw Error(he(150));return y=C.call(y),S(p,g,y,x)}if(typeof y.then=="function")return I(p,g,bu(y),x);if(y.$$typeof===kn)return I(p,g,_u(p,y),x);Tu(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(a(p,g.sibling),x=n(g,y),x.return=p,p=x):(a(p,g),x=zm(y,p.mode,x),x.return=p,p=x),s(p)):a(p,g)}return function(p,g,y,x){try{Yc=0;var C=I(p,g,y,x);return Ki=null,C}catch(T){if(T===Il||T===zd)throw T;var b=Co(29,T,null,p.mode);return b.lanes=x,b.return=p,b}finally{}}}var Ks=Cy(!0),_y=Cy(!1),Hr=!1;function P0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function AI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jr(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Vt&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=cd(t),Iy(t,null,a),e}return Nd(t,o,e,a),cd(t)}function Lc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,Vv(t,a)}}function Gm(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var wI=!1;function Dc(){if(wI){var t=Zi;if(t!==null)throw t}}function Pc(t,e,a,o){wI=!1;var n=t.updateQueue;Hr=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==s&&(i===null?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,u=c=l=null,i=r;do{var f=i.lane&-536870913,d=f!==i.lane;if(d?(Ut&f)===f:(o&f)===f){f!==0&&f===Zs&&(wI=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var m=t,S=i;f=e;var I=a;switch(S.tag){case 1:if(m=S.payload,typeof m=="function"){h=m.call(I,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,f=typeof m=="function"?m.call(I,h,f):m,f==null)break e;h=aa({},h,f);break e;case 2:Hr=!0}}f=i.callback,f!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[f]:d.push(f))}else d={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,s|=f;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);u===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=u,r===null&&(n.shared.lanes=0),cs|=s,t.lanes=s,t.memoizedState=h}}function by(t,e){if(typeof t!="function")throw Error(he(191,t));t.call(e)}function Ty(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)by(a[t],e)}var is=qn(null),hd=qn(0);function CS(t,e){t=gr,la(hd,t),la(is,e),gr=t|e.baseLanes}function EI(){la(hd,gr),la(is,is.current)}function B0(){gr=hd.current,Za(is),Za(hd)}var Qa=qn(null),to=null;function $r(t){var e=t.alternate;la(Ka,Ka.current&1),la(Qa,t),to===null&&(e===null||is.current!==null||e.memoizedState!==null)&&(to=t)}function RI(t){la(Ka,Ka.current),la(Qa,t),to===null&&(to=t)}function Ay(t){t.tag===22?(la(Ka,Ka.current),la(Qa,t),to===null&&(to=t)):es()}function es(){la(Ka,Ka.current),la(Qa,Qa.current)}function Po(t){Za(Qa),to===t&&(to=null),Za(Ka)}var Ka=qn(0);function Zc(t,e){la(Qa,Qa.current),la(Ka,e)}function U0(t){Za(Ka),Za(Qa),to===t&&(to=null)}function md(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||u0(a)||cx(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mr=0,Tt=null,jt=null,Ca=null,Id=!1,Ji=!1,Js=!1,xd=0,Kc=0,Qi=null,lA=0;function Fa(){throw Error(he(321))}function k0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ho(t[a],e[a]))return!1;return!0}function N0(t,e,a,o,n,r){return mr=r,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gt.H=t===null||t.memoizedState===null?r1:s1,Js=!1,r=a(o,n),Js=!1,Ji&&(r=Ey(e,a,o,n)),wy(t),r}function wy(t){gt.H=gd;var e=jt!==null&&jt.next!==null;if(mr=0,Ca=jt=Tt=null,Id=!1,Kc=0,Qi=null,e)throw Error(he(300));t===null||ba||(t=t.dependencies,t!==null&&dd(t)&&(ba=!0))}function Ey(t,e,a,o){Tt=t;var n=0;do{if(Ji&&(Qi=null),Kc=0,Ji=!1,25<=n)throw Error(he(301));if(n+=1,Ca=jt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}gt.H=IA,r=e(a,o)}while(Ji);return r}function cA(){var t=gt.H,e=t.useState()[0];return e=typeof e.then=="function"?uf(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(Tt.flags|=1024),e}function O0(){var t=xd!==0;return xd=0,t}function z0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function H0(t){if(Id){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Id=!1}mr=0,Ca=jt=Tt=null,Ji=!1,Kc=xd=0,Qi=null}function uo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ca===null?Tt.memoizedState=Ca=t:Ca=Ca.next=t,Ca}function ya(){if(jt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Ca===null?Tt.memoizedState:Ca.next;if(e!==null)Ca=e,jt=t;else{if(t===null)throw Tt.alternate===null?Error(he(467)):Error(he(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Ca===null?Tt.memoizedState=Ca=t:Ca=Ca.next=t}return Ca}function Hd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uf(t){var e=Kc;return Kc+=1,Qi===null&&(Qi=[]),t=My(Qi,t,e),e=Tt,(Ca===null?e.memoizedState:Ca.next)===null&&(e=e.alternate,gt.H=e===null||e.memoizedState===null?r1:s1),t}function Vd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uf(t);if(t.$$typeof===qb)return;if(t.$$typeof===kn)return Ya(t)}throw Error(he(438,String(t)))}function V0(t){var e=null,a=Tt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Hd(),Tt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=Gb;return e.index++,a}function Ir(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=ya();return G0(e,jt,t)}function G0(t,e,a){var o=t.queue;if(o===null)throw Error(he(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Ut&h)===h:(mr&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Zs&&(u=!0);else if((mr&f)===f){c=c.next,f===Zs&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,Tt.lanes|=f,cs|=f;h=c.action,Js&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=f,s=r):l=l.next=f,Tt.lanes|=h,cs|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!Ho(r,t.memoizedState)&&(ba=!0,u&&(a=Zi,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qm(t){var e=ya(),a=e.queue;if(a===null)throw Error(he(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);Ho(r,e.memoizedState)||(ba=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function Ry(t,e,a){var o=Tt,n=ya(),r=Et;if(r){if(a===void 0)throw Error(he(407));a=a()}else a=e();var s=!Ho((jt||n).memoizedState,a);if(s&&(n.memoizedState=a,ba=!0),n=n.queue,q0(Py.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||Ca!==null&&(Ca.memoizedState.tag&1)!==0,nl(t?9:8,{destroy:void 0},Dy.bind(null,o,n,a,e),null),t){if(o.flags|=2048,ta===null)throw Error(he(349));r||mr&127||Ly(o,e,a)}return a}function Ly(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Tt.updateQueue,e===null?(e=Hd(),Tt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Dy(t,e,a,o){e.value=a,e.getSnapshot=o,By(e)&&Uy(t)}function Py(t,e,a){return a(function(){By(e)&&Uy(t)})}function By(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ho(t,a)}catch{return!0}}function Uy(t){var e=ai(t,2);e!==null&&_o(e,t,2)}function LI(t){var e=uo();if(typeof t=="function"){var a=t;if(t=a(),Js){Gr(!0);try{a()}finally{Gr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:t},e}function ky(t,e,a,o){return t.baseState=a,G0(t,jt,typeof o=="function"?o:Ir)}function fA(t,e,a,o,n){if(qd(t))throw Error(he(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};gt.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,Ny(e,r)):(r.next=a.next,e.pending=a.next=r)}}function Ny(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=gt.T,s={};s.types=r!==null?r.types:null,gt.T=s;try{var i=a(n,o),l=gt.S;l!==null&&l(s,i),_S(t,e,i)}catch(c){DI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),gt.T=r}}else try{r=a(n,o),_S(t,e,r)}catch(c){DI(t,e,c)}}function _S(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bS(t,e,o)},function(o){return DI(t,e,o)}):bS(t,e,a)}function bS(t,e,a){e.status="fulfilled",e.value=a,Oy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ny(t,a)))}function DI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,Oy(e),e=e.next;while(e!==o)}t.action=null}function Oy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function zy(t,e){return e}function TS(t,e){if(Et){var a=ta.formState;if(a!==null){e:{var o=Tt;if(Et){if(ia){t:{for(var n=ia,r=nn;n.nodeType!==8;){if(!r){n=null;break t}if(n=rn(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ia=rn(n.nextSibling),o=n.data==="F!";break e}}ss(o)}o=!1}o&&(e=a[0])}}return a=uo(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zy,lastRenderedState:e},a.queue=o,a=a1.bind(null,Tt,o),o.dispatch=a,o=LI(!1),r=Z0.bind(null,Tt,!1,o.queue),o=uo(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=fA.bind(null,Tt,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function AS(t){var e=ya();return Hy(e,jt,t)}function Hy(t,e,a){if(e=G0(t,e,zy)[0],t=Wu(Ir)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=uf(e)}catch(s){throw s===Il?zd:s}else o=e;e=ya();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(Tt.flags|=2048,nl(9,{destroy:void 0},uA.bind(null,n,a),null)),[o,r,t]}function uA(t,e){t.action=e}function wS(t){var e=ya(),a=jt;if(a!==null)return Hy(e,a,t);ya(),e=e.memoizedState,a=ya();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function nl(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=Tt.updateQueue,e===null&&(e=Hd(),Tt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function Vy(){return ya().memoizedState}function Xu(t,e,a,o){var n=uo();Tt.flags|=t,n.memoizedState=nl(1|e,{destroy:void 0},a,o===void 0?null:o)}function Gd(t,e,a,o){var n=ya();o=o===void 0?null:o;var r=n.memoizedState.inst;jt!==null&&o!==null&&k0(o,jt.memoizedState.deps)?n.memoizedState=nl(e,r,a,o):(Tt.flags|=t,n.memoizedState=nl(1|e,r,a,o))}function ES(t,e){Xu(8390656,8,t,e)}function q0(t,e){Gd(2048,8,t,e)}function dA(t){Tt.flags|=4;var e=Tt.updateQueue;if(e===null)e=Hd(),Tt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Gy(t){var e=ya().memoizedState;return dA({ref:e,nextImpl:t}),function(){if(Vt&2)throw Error(he(440));return e.impl.apply(void 0,arguments)}}function qy(t,e){return Gd(4,2,t,e)}function Wy(t,e){return Gd(4,4,t,e)}function Xy(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yy(t,e,a){a=a!=null?a.concat([t]):null,Gd(4,4,Xy.bind(null,e,t),a)}function W0(){}function Zy(t,e){var a=ya();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&k0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function Ky(t,e){var a=ya();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&k0(e,o[1]))return o[0];if(o=t(),Js){Gr(!0);try{t()}finally{Gr(!1)}}return a.memoizedState=[o,e],o}function X0(t,e,a){return a===void 0||mr&1073741824&&!(Ut&261930)?t.memoizedState=e:(t.memoizedState=a,t=H1(),Tt.lanes|=t,cs|=t,a)}function Jy(t,e,a,o){return Ho(a,e)?a:is.current!==null?(t=X0(t,a,o),Ho(t,e)||(ba=!0),t):!(mr&106)||mr&1073741824&&!(Ut&261930)?(ba=!0,t.memoizedState=a):(t=H1(),Tt.lanes|=t,cs|=t,e)}function Qy(t,e,a,o,n){var r=Gt.p;Gt.p=r!==0&&8>r?r:8;var s=gt.T,i={};i.types=s!==null?s.types:null,gt.T=i,Z0(t,!1,e,a);try{var l=n(),c=gt.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=iA(l,o);Bc(t,e,u,zo(t))}else Bc(t,e,o,zo(t))}catch(h){Bc(t,e,{then:function(){},status:"rejected",reason:h},zo())}finally{Gt.p=r,s!==null&&i.types!==null&&(s.types=i.types),gt.T=s}}function pA(){}function PI(t,e,a,o){if(t.tag!==5)throw Error(he(476));var n=jy(t).queue;Qy(t,n,e,zs,a===null?pA:function(){return $y(t),a(o)})}function jy(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:zs,baseState:zs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:zs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $y(t){var e=jy(t);e.next===null&&(e=t.alternate.memoizedState),Bc(t,e.next.queue,{},zo())}function Y0(){return Ya(ul)}function e1(){return ya().memoizedState}function t1(){return ya().memoizedState}function hA(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=zo();t=Qr(a);var o=jr(e,t,a);o!==null&&(_o(o,e,a),Lc(o,e,a)),e={cache:R0()},t.payload=e;return}e=e.return}}function mA(t,e,a){var o=zo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qd(t)?o1(e,a):(a=A0(t,e,a,o),a!==null&&(_o(a,t,o),n1(a,e,o)))}function a1(t,e,a){var o=zo();Bc(t,e,a,o)}function Bc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qd(t))o1(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,Ho(i,s))return Nd(t,e,n,0),ta===null&&kd(),!1}catch{}finally{}if(a=A0(t,e,n,o),a!==null)return _o(a,t,o),n1(a,e,o),!0}return!1}function Z0(t,e,a,o){if(o={lane:2,revertLane:rx(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},qd(t)){if(e)throw Error(he(479))}else e=A0(t,a,o,2),e!==null&&_o(e,t,2)}function qd(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function o1(t,e){Ji=Id=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function n1(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,Vv(t,a)}}var gd={readContext:Ya,use:Vd,useCallback:Fa,useContext:Fa,useEffect:Fa,useImperativeHandle:Fa,useLayoutEffect:Fa,useInsertionEffect:Fa,useMemo:Fa,useReducer:Fa,useRef:Fa,useState:Fa,useDebugValue:Fa,useDeferredValue:Fa,useTransition:Fa,useSyncExternalStore:Fa,useId:Fa,useHostTransitionStatus:Fa,useFormState:Fa,useActionState:Fa,useOptimistic:Fa,useMemoCache:Fa,useCacheRefresh:Fa,useEffectEvent:Fa},r1={readContext:Ya,use:Vd,useCallback:function(t,e){return uo().memoizedState=[t,e===void 0?null:e],t},useContext:Ya,useEffect:ES,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Xu(4194308,4,Xy.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){Xu(4,2,t,e)},useMemo:function(t,e){var a=uo();e=e===void 0?null:e;var o=t();if(Js){Gr(!0);try{t()}finally{Gr(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=uo();if(a!==void 0){var n=a(e);if(Js){Gr(!0);try{a(e)}finally{Gr(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=mA.bind(null,Tt,t),[o.memoizedState,t]},useRef:function(t){var e=uo();return t={current:t},e.memoizedState=t},useState:function(t){t=LI(t);var e=t.queue,a=a1.bind(null,Tt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:W0,useDeferredValue:function(t,e){var a=uo();return X0(a,t,e)},useTransition:function(){var t=LI(!1);return t=Qy.bind(null,Tt,t.queue,!0,!1),uo().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=Tt,n=uo();if(Et){if(a===void 0)throw Error(he(407));a=a()}else{if(a=e(),ta===null)throw Error(he(349));Ut&127||Ly(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,ES(Py.bind(null,o,r,t),[t]),o.flags|=2048,nl(9,{destroy:void 0},Dy.bind(null,o,r,a,e),null),a},useId:function(){var t=uo(),e=ta.identifierPrefix;if(Et){var a=zn,o=On;a=(o&~(1<<32-Oo(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=xd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=lA++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Y0,useFormState:TS,useActionState:TS,useOptimistic:function(t){var e=uo();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Z0.bind(null,Tt,!0,a),a.dispatch=e,[t,e]},useMemoCache:V0,useCacheRefresh:function(){return uo().memoizedState=hA.bind(null,Tt)},useEffectEvent:function(t){var e=uo(),a={impl:t};return e.memoizedState=a,function(){if(Vt&2)throw Error(he(440));return a.impl.apply(void 0,arguments)}}},s1={readContext:Ya,use:Vd,useCallback:Zy,useContext:Ya,useEffect:q0,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Wy,useMemo:Ky,useReducer:Wu,useRef:Vy,useState:function(){return Wu(Ir)},useDebugValue:W0,useDeferredValue:function(t,e){var a=ya();return Jy(a,jt.memoizedState,t,e)},useTransition:function(){var t=Wu(Ir)[0],e=ya().memoizedState;return[typeof t=="boolean"?t:uf(t),e]},useSyncExternalStore:Ry,useId:e1,useHostTransitionStatus:Y0,useFormState:AS,useActionState:AS,useOptimistic:function(t,e){var a=ya();return ky(a,jt,t,e)},useMemoCache:V0,useCacheRefresh:t1,useEffectEvent:Gy},IA={readContext:Ya,use:Vd,useCallback:Zy,useContext:Ya,useEffect:q0,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Wy,useMemo:Ky,useReducer:qm,useRef:Vy,useState:function(){return qm(Ir)},useDebugValue:W0,useDeferredValue:function(t,e){var a=ya();return jt===null?X0(a,t,e):Jy(a,jt.memoizedState,t,e)},useTransition:function(){var t=qm(Ir)[0],e=ya().memoizedState;return[typeof t=="boolean"?t:uf(t),e]},useSyncExternalStore:Ry,useId:e1,useHostTransitionStatus:Y0,useFormState:wS,useActionState:wS,useOptimistic:function(t,e){var a=ya();return jt!==null?ky(a,jt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:V0,useCacheRefresh:t1,useEffectEvent:Gy};function Wm(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:aa({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var BI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=zo(),n=Qr(o);n.payload=e,a!=null&&(n.callback=a),e=jr(t,n,o),e!==null&&(_o(e,t,o),Lc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=zo(),n=Qr(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=jr(t,n,o),e!==null&&(_o(e,t,o),Lc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=zo(),o=Qr(a);o.tag=2,e!=null&&(o.callback=e),e=jr(t,o,a),e!==null&&(_o(e,t,a),Lc(e,t,a))}};function RS(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!qc(a,o)||!qc(n,r):!0}function LS(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&BI.enqueueReplaceState(e,e.state,null)}function Qs(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=aa({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function i1(t){ld(t)}function l1(t){console.error(t)}function c1(t){ld(t)}function Fd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function DS(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function UI(t,e,a){return a=Qr(a),a.tag=3,a.payload={element:null},a.callback=function(){Fd(t,e)},a}function f1(t){return t=Qr(t),t.tag=3,t}function u1(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){DS(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){DS(e,a,o),typeof n!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function xA(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Xs(e,a,n,!0),a=Qa.current,a!==null){switch(a.tag){case 31:case 13:case 19:return to===null?Td():a.alternate===null&&Sa===0&&(Sa=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===pd?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),jm(t,o,n)),!1;case 22:return a.flags|=65536,o===pd?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),jm(t,o,n)),!1}throw Error(he(435,a.tag))}return jm(t,o,n),Td(),!1}if(Et)return e=Qa.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==CI&&(t=Error(he(422),{cause:o}),Xc(on(t,a)))):(o!==CI&&(e=Error(he(423),{cause:o}),Xc(on(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=on(o,a),n=UI(t.stateNode,o,n),Gm(t,n),Sa!==4&&(Sa=2)),!1;var r=Error(he(520),{cause:o});if(r=on(r,a),Oc===null?Oc=[r]:Oc.push(r),Sa!==4&&(Sa=2),e===null)return!0;o=on(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=UI(a.stateNode,o,t),Gm(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ts===null||!ts.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=f1(n),u1(n,t,a,o),Gm(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var K0=Error(he(461)),ba=!1;function La(t,e,a,o){e.child=t===null?_y(e,null,a,o):Ks(e,t.child,a,o)}function PS(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return Ys(e),o=N0(t,e,a,s,r,n),i=O0(),t!==null&&!ba?(z0(t,e,n),xr(t,e,n)):(Et&&i&&Od(e),e.flags|=1,La(t,e,o,n),e.child)}function BS(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!w0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,d1(t,e,r,o,n)):(t=Vu(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Q0(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:qc,a(s,o)&&t.ref===e.ref)return xr(t,e,n)}return e.flags|=1,t=ur(r,o),t.ref=e.ref,t.return=e,e.child=t}function d1(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(qc(r,o)&&t.ref===e.ref)if(ba=!1,e.pendingProps=o=r,Q0(t,n))t.flags&131072&&(ba=!0);else return e.lanes=t.lanes,xr(t,e,n)}return kI(t,e,a,o,n)}function p1(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return US(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&qu(e,r!==null?r.cachePool:null),r!==null?CS(e,r):EI(),Ay(e);else return o=e.lanes=536870912,US(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(qu(e,r.cachePool),CS(e,r),es(),e.memoizedState=null):(t!==null&&qu(e,null),EI(),es());return La(t,e,n,a),e.child}function Uc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function US(t,e,a,o,n){var r=L0();return r=r===null?null:{parent:_a._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&qu(e,null),EI(),Ay(e),t!==null&&Xs(t,e,o,!0),e.childLanes=n,null}function Yu(t,e){return e=Wd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function kS(t,e,a){return Ks(e,t.child,null,a),t=Yu(e,e.pendingProps),t.flags|=2,Po(e),e.memoizedState=null,t}function gA(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Yu(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uc(null,t);if(RI(e),(t=ia)?(t=pM(t,nn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:rs!==null?{id:On,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},a=gy(t),a.return=e,e.child=a,Va=e,ia=null)):t=null,t===null)throw ss(e);return e.lanes=536870912,null}return Yu(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(RI(e),n)if(e.flags&256)e.flags&=-257,e=kS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(he(558));else if(ba||Xs(t,e,a,!1),n=(a&t.childLanes)!==0,ba||n){if(is.current===null){if(o=ta,o!==null&&(s=Gv(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,ai(t,s),_o(o,t,s),K0;Td()}e=kS(t,e,a)}else t=r.treeContext,ia=rn(s.nextSibling),Va=e,Et=!0,Jr=null,nn=!1,t!==null&&Sy(e,t),e=Yu(e,o),e.flags|=134221824;return e}return t=ur(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ei(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(he(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function kI(t,e,a,o,n){return Ys(e),a=N0(t,e,a,o,void 0,n),o=O0(),t!==null&&!ba?(z0(t,e,n),xr(t,e,n)):(Et&&o&&Od(e),e.flags|=1,La(t,e,a,n),e.child)}function NS(t,e,a,o,n,r){return Ys(e),e.updateQueue=null,a=Ey(e,o,a,n),wy(t),o=O0(),t!==null&&!ba?(z0(t,e,r),xr(t,e,r)):(Et&&o&&Od(e),e.flags|=1,La(t,e,a,r),e.child)}function OS(t,e,a,o,n){if(Ys(e),e.stateNode===null){var r=Hi,s=a.contextType;typeof s=="object"&&s!==null&&(r=Ya(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=BI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},P0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Ya(s):Hi,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Wm(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&BI.enqueueReplaceState(r,r.state,null),Pc(e,o,r,n),Dc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=Qs(a,i);r.props=l;var c=r.context,u=a.contextType;s=Hi,typeof u=="object"&&u!==null&&(s=Ya(u));var h=a.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&LS(e,r,o,s),Hr=!1;var f=e.memoizedState;r.state=f,Pc(e,o,r,n),Dc(),c=e.memoizedState,i||f!==c||Hr?(typeof h=="function"&&(Wm(e,a,h,o),c=e.memoizedState),(l=Hr||RS(e,a,l,o,f,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,AI(t,e),s=e.memoizedProps,u=Qs(a,s),r.props=u,h=e.pendingProps,f=r.context,c=a.contextType,l=Hi,typeof c=="object"&&c!==null&&(l=Ya(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&LS(e,r,o,l),Hr=!1,f=e.memoizedState,r.state=f,Pc(e,o,r,n),Dc();var d=e.memoizedState;s!==h||f!==d||Hr||t!==null&&t.dependencies!==null&&dd(t.dependencies)?(typeof i=="function"&&(Wm(e,a,i,o),d=e.memoizedState),(u=Hr||RS(e,a,u,o,f,d,l)||t!==null&&t.dependencies!==null&&dd(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,Ei(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,n),e.child=Ks(e,null,a,n)):La(t,e,a,n),e.memoizedState=r.state,t=e.child):t=xr(t,e,n),t}function zS(t,e,a,o){return Ws(),e.flags|=256,La(t,e,a,o),e.child}var NI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function OI(t){return{baseLanes:t,cachePool:yy()}}function zI(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Uo),t}function h1(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Ka.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Et){if(n?$r(e):es(),(t=ia)?(t=pM(t,nn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:rs!==null?{id:On,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},a=gy(t),a.return=e,e.child=a,Va=e,ia=null)):t=null,t===null)throw ss(e);return cx(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(es(),n=e.mode,r=Wd({mode:"hidden",children:r},n),o=Hs(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=OI(a),o.childLanes=zI(t,s,a),e.memoizedState=NI,Uc(null,o)):($r(e),J0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return FA(t,e,r,s,o,l,i,a)}return n?(es(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=ur(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=ur(l,n):(n=Hs(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,Uc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=OI(a):(r=n.cachePool,r!==null?(i=_a._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=yy(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=zI(t,s,a),e.memoizedState=NI,Uc(t.child,o)):($r(e),a=t.child,t=a.sibling,a=ur(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function J0(t,e){return e=Wd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Wd(t,e){return t=Co(22,t,null,e),t.lanes=0,t}function Au(t,e,a){return Ks(e,t.child,null,a),t=J0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FA(t,e,a,o,n,r,s,i){if(a)return e.flags&256?($r(e),e.flags&=-257,Au(t,e,i)):e.memoizedState!==null?(es(),e.child=t.child,e.flags|=128,null):(es(),r=n.fallback,s=e.mode,n=Wd({mode:"visible",children:n.children},s),r=Hs(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Ks(e,t.child,null,i),n=e.child,n.memoizedState=OI(i),n.childLanes=zI(t,o,i),e.memoizedState=NI,Uc(null,n));if($r(e),cx(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(he(419)),n.stack="",n.digest=o,Xc({value:n,source:null,stack:null})),Au(t,e,i)}if(ba||Xs(t,e,i,!1),o=(i&t.childLanes)!==0,ba||o){if(is.current!==null)return Au(t,e,i);if(o=ta,o!==null&&(n=Gv(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,ai(t,n),_o(o,t,n),K0;return u0(r)||Td(),Au(t,e,i)}return u0(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,ia=rn(r.nextSibling),Va=e,Et=!0,Jr=null,nn=!1,t!==null&&Sy(e,t),e=J0(e,n.children),e.flags|=134221824,e)}function HS(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Gu(t.return,e,a)}function VS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&md(a)===null&&(e=t),t=t.sibling}return e}function wu(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function Xm(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function HI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=Ka.current;if(e.flags&128)return Zc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Zc(e,s),n==="backwards"&&t!==null?(Xm(t),La(t,e,o,a),Xm(t)):La(t,e,o,a),o=Et?Wc:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&HS(t,a,e);else if(t.tag===19)HS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=VS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,Xm(e)),wu(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&md(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}wu(e,!0,a,null,r,o);break;case"together":wu(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=VS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),wu(e,!1,n,a,r,o)}return e.child}function GS(t,e,a){var o=e.pendingProps;return Wr(e,e.type,o.value),La(t,e,o.children,a),e.child}function xr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(a&e.childLanes))if(t!==null){if(Xs(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,a=ur(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Q0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&dd(t)))}function SA(t,e,a){switch(e.tag){case 3:nd(e,e.stateNode.containerInfo),Wr(e,_a,t.memoizedState.cache),Ws();break;case 27:case 5:hI(e);break;case 4:nd(e,e.stateNode.containerInfo);break;case 10:Wr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,RI(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return $r(e),e.flags|=128,null;o=Xs(t,e,a,!1);var n=e.child.childLanes;return o||a&n?h1(t,e,a):($r(e),t=xr(t,e,a),t!==null?t.sibling:null)}$r(e);break;case 19:if(e.flags&128)return HI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(Xs(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return HI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Zc(e,Ka.current),o)break;return null;case 22:return e.lanes=0,p1(t,e,a,e.pendingProps);case 24:Wr(e,_a,t.memoizedState.cache)}return xr(t,e,a)}function m1(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ba=!0;else{if(!Q0(t,a)&&!(e.flags&128))return ba=!1,SA(t,e,a);ba=!!(t.flags&131072)}else ba=!1,Et&&e.flags&1048576&&Fy(e,Wc,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=Us(e.elementType),e.type=t,typeof t=="function")w0(t)?(o=Qs(t,o),e.tag=1,e=OS(null,e,t,o,a)):(e.tag=0,e=kI(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===I0){e.tag=11,e=PS(null,e,t,o,a);break e}else if(n===x0){e.tag=14,e=BS(null,e,t,o,a);break e}else if(n===kn){e.tag=10,e.type=t,e=GS(null,e,a);break e}}throw e=dI(t)||t,Error(he(306,e,""))}}return e;case 0:return kI(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=Qs(o,e.pendingProps),OS(t,e,o,n,a);case 3:e:{if(nd(e,e.stateNode.containerInfo),t===null)throw Error(he(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,AI(t,e),Pc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Wr(e,_a,o),o!==r.cache&&bI(e,[_a],a,!0),Dc(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=zS(t,e,o,a);break e}else if(o!==n){n=on(Error(he(424)),e),Xc(n),e=zS(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ia=rn(t.firstChild),Va=e,Et=!0,Jr=null,nn=!0,a=_y(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ws(),o===n){e=xr(t,e,a);break e}La(t,e,o,a)}e=e.child}return e;case 26:return Ei(t,e),t===null?(a=Iv(e.type,null,e.pendingProps,null))?e.memoizedState=a:Et||(e.stateNode=nM(e.type,e.pendingProps,Kr.current,e)):e.memoizedState=Iv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return hI(e),t===null&&Et&&(o=e.stateNode=hM(e.type,e.pendingProps,Kr.current),Va=e,nn=!0,n=ia,us(e.type)?(d0=n,ia=rn(o.firstChild)):ia=n),La(t,e,e.pendingProps.children,a),Ei(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Et&&((n=o=ia)&&(o=dw(o,e.type,e.pendingProps,nn),o!==null?(e.stateNode=o,Va=e,ia=rn(o.firstChild),nn=!1,n=!0):n=!1),n||ss(e)),hI(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,l0(n,r)?o=null:s!==null&&l0(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=N0(t,e,cA,null,null,a),ul._currentValue=n),Ei(t,e),La(t,e,o,a),e.child;case 6:return t===null&&Et&&((t=a=ia)&&(a=pw(a,e.pendingProps,nn),a!==null?(e.stateNode=a,Va=e,ia=null,t=!0):t=!1),t||ss(e)),null;case 13:return h1(t,e,a);case 4:return nd(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Ks(e,null,o,a):La(t,e,o,a),e.child;case 11:return PS(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,Ei(t,e),La(t,e,o,a),e.child;case 8:return La(t,e,e.pendingProps.children,a),e.child;case 12:return La(t,e,e.pendingProps.children,a),e.child;case 10:return GS(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,Ys(e),n=Ya(n),o=o(n),e.flags|=1,La(t,e,o,a),e.child;case 14:return BS(t,e,e.type,e.pendingProps,a);case 15:return d1(t,e,e.type,e.pendingProps,a);case 19:return HI(t,e,a);case 31:return gA(t,e,a);case 22:return p1(t,e,a,e.pendingProps);case 24:return Ys(e),o=Ya(_a),t===null?(n=L0(),n===null&&(n=ta,r=R0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},P0(e),Wr(e,_a,n)):(t.lanes&a&&(AI(t,e),Pc(e,null,null,a),Dc()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Wr(e,_a,o)):(o=r.cache,Wr(e,_a,o),o!==n.cache&&bI(e,[_a],a,!0))),La(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:Et&&Od(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:Ei(t,e),La(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(he(156,e.tag))}function lr(t){t.flags|=4}function Ym(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?Fv(e,o):Fv(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(q1())t.flags|=8192;else throw Gs=pd,D0}else t.flags&=-16777217}function qS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!gM(e))if(q1())t.flags|=8192;else throw Gs=pd,D0}function Eu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zv():536870912,t.lanes|=e,rl|=e)}function Fc(t,e){if(!Et)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function sa(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function vA(t,e,a){var o=e.pendingProps;switch(E0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sa(e),null;case 1:return sa(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),dr(_a),tl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ai(e)?lr(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vm())),sa(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(lr(e),r!==null?(sa(e),qS(e,r)):(sa(e),Ym(e,n,null,o,a))):r?r!==t.memoizedState?(lr(e),sa(e),qS(e,r)):(sa(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&lr(e),sa(e),Ym(e,n,t,o,a)),null;case 27:if(rd(e),a=Kr.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&lr(e);else{if(!o){if(e.stateNode===null)throw Error(he(166));return sa(e),e.subtreeFlags&=-33554433,null}t=Hn.current,Ai(e)?xS(e,t):(t=hM(n,o,a),e.stateNode=t,lr(e))}return sa(e),e.subtreeFlags&=-33554433,null;case 5:if(rd(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&lr(e);else{if(!o){if(e.stateNode===null)throw Error(he(166));return sa(e),e.subtreeFlags&=-33554433,null}if(r=Hn.current,Ai(e))xS(e,r);else{var s=jc(Kr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Xa]=e,r[To]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Ja(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&lr(e)}}return sa(e),e.subtreeFlags&=-33554433,Ym(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&lr(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(he(166));if(t=Kr.current,Ai(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=Va,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Xa]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||aM(t.nodeValue,a)),t||ss(e,!0)}else t=jc(t).createTextNode(o),t[Xa]=e,e.stateNode=t}return sa(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=Ai(e),a!==null){if(t===null){if(!o)throw Error(he(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(557));t[Xa]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),t=!1}else a=Vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Po(e),e):(Po(e),null);if(e.flags&128)throw Error(he(558))}return sa(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ai(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(he(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(he(317));n[Xa]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),n=!1}else n=Vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Po(e),e):(Po(e),null)}return Po(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Eu(e,e.updateQueue),sa(e),null);case 4:return tl(),t===null&&sx(e.stateNode.containerInfo),e.flags|=67108864,sa(e),null;case 10:return dr(e.type),sa(e),null;case 19:if(U0(e),o=e.memoizedState,o===null)return sa(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)Fc(o,!1);else{if(Sa!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=md(t),r!==null){for(e.flags|=128,Fc(o,!1),t=r.updateQueue,e.updateQueue=t,Eu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)xy(a,t),a=a.sibling;return Zc(e,Ka.current&1|2),Et&&cr(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&ko()>_d&&(e.flags|=128,n=!0,Fc(o,!1),e.lanes=4194304)}else{if(!n)if(t=md(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Eu(e,t),Fc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!Et)return sa(e),null}else 2*ko()-o.renderingStartTime>_d&&a!==536870912&&(e.flags|=128,n=!0,Fc(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ko(),t.sibling=null,r=Ka.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Et?Zc(e,r):(a=r,la(Qa,e),la(Ka,a),to===null&&(to=e)),Et&&cr(e,o.treeForkCount),t}return sa(e),null;case 22:case 23:return Po(e),B0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(sa(e),e.subtreeFlags&6&&(e.flags|=8192)):sa(e),a=e.updateQueue,a!==null&&Eu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&Za(Vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),dr(_a),sa(e),null;case 25:return null;case 30:return e.flags|=33554432,sa(e),null}throw Error(he(156,e.tag))}function yA(t,e){switch(E0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dr(_a),tl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return rd(e),null;case 31:if(e.memoizedState!==null){if(Po(e),e.alternate===null)throw Error(he(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Po(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return tl(),null;case 10:return dr(e.type),null;case 22:case 23:return Po(e),B0(),t!==null&&Za(Vs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return dr(_a),null;case 25:return null;default:return null}}function I1(t,e){switch(E0(e),e.tag){case 3:dr(_a),tl();break;case 26:case 27:case 5:rd(e);break;case 4:tl();break;case 31:e.memoizedState!==null&&Po(e);break;case 13:Po(e);break;case 19:U0(e);break;case 10:dr(e.type);break;case 22:case 23:Po(e),B0(),t!==null&&Za(Vs);break;case 24:dr(_a)}}function df(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Kt(e,e.return,i)}}function ls(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(u){Kt(n,l,u)}}}o=o.next}while(o!==r)}}catch(u){Kt(e,e.return,u)}}function x1(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ty(e,a)}catch(o){Kt(t,t.return,o)}}}function g1(t,e,a){a.props=Qs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Kt(t,e,o)}}function Bn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=hr(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=lM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new Vo(t);bo(t.child,!1,fw,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Kt(t,e,i)}}function Wa(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Kt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Kt(t,e,n)}else a.current=null}function Sd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)dM(t.stateNode,e[a])}function WS(t){for(var e=t.return;e!==null&&($0(e)&&dM(t.stateNode,e.stateNode),!j0(e));)e=e.return}function kc(t){for(var e=t.return;e!==null&&($0(e)&&uw(t.stateNode,e.stateNode),!j0(e));)e=e.return}function j0(t){return t.tag===5||t.tag===3||t.tag===27}function $0(t){return t&&t.tag===7&&t.stateNode!==null}function VI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Kt(t,t.return,n)}}function Zm(t,e,a){try{var o=t.stateNode;XA(o,t.type,a,e),o[To]=e}catch(n){Kt(t,t.return,n)}}function F1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&us(t.type)||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function GI(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Nn)),Sd(t,o),Ht=!0;else if(n!==4&&(n===27&&(Sd(t,o),o=null,us(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(GI(t,e,a,o),t=t.sibling;t!==null;)GI(t,e,a,o),t=t.sibling}function vd(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),Sd(t,o),Ht=!0;else if(n!==4&&(n===27&&(Sd(t,o),o=null,us(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vd(t,e,a,o),t=t.sibling;t!==null;)vd(t,e,a,o),t=t.sibling}function S1(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ja(e,o,a),e[Xa]=t,e[To]=a}catch(r){Kt(t,t.return,r)}}var yd=!1,Bo=null;function XS(t){(t.tag===30||t.subtreeFlags&33554432)&&(yd=!0)}var Un=null;function YS(){var t=Un;return Un=null,t}var Mo=0;function xl(t,e,a,o,n){return Mo=0,v1(t.child,e,a,o,n)}function v1(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=c0(s);o.push(i),i.view&&(r=!0)}else r||c0(s).view&&(r=!0);yd=!0,rM(s,Mo===0?e:e+"_"+Mo,a),Mo++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||v1(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function Gn(t,e){for(;t!==null;)t.tag===5?sM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Gn(t.child,e)),t=t.sibling}function Zu(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Zu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(he(544));var a=e.name;e=Sr(e.default,e.share),e!=="none"&&(xl(t,a,e,null,!1)||Gn(t.child,!1))}t=t.sibling}}function qI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=hr(o,a),r=Sr(o.default,a.paired?o.share:o.enter);r!=="none"?xl(t,n,r,null,!1)?(Zu(t),a.paired||e||sl(t,o.onEnter)):Gn(t.child,!1):Zu(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)qI(t,e),t=t.sibling;else Zu(t)}function WI(t){if(Bo!==null&&Bo.size!==0){var e=Bo;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=Sr(a.default,a.share);if(r!=="none"&&(xl(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,sl(t,a.onShare)):Gn(t.child,!1)),e.delete(o),e.size===0)break}}}WI(t)}t=t.sibling}}}function XI(t){if(t.tag===30){var e=t.memoizedProps,a=hr(e,t.stateNode),o=Bo!==null?Bo.get(a):void 0,n=Sr(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(xl(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,Bo.delete(a),sl(t,e.onShare)):sl(t,e.onExit):Gn(t.child,!1)),Bo!==null&&WI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)XI(t),t=t.sibling;else Bo!==null&&WI(t)}function y1(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=hr(e,t.stateNode);e=Sr(e.default,e.update),t.flags&=-5,e!=="none"&&xl(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&y1(t);t=t.sibling}}function YI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Gn(t.child,!1))}YI(t)}t=t.sibling}}function Ku(t){if(t.tag===30)t.stateNode.paired=null,Gn(t.child,!1),YI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Ku(t),t=t.sibling;else YI(t)}function M1(t){for(t=t.child;t!==null;)t.tag===30?Gn(t.child,!1):t.subtreeFlags&33554432&&M1(t),t=t.sibling}function ex(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&Mo<r.length){var c=r[Mo],u=c0(l);(c.view||u.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(u.clip)h=!0;else{h=c.rect;var f=u.rect;h=h.y!==f.y||h.x!==f.x||h.height!==f.height||h.width!==f.width}h&&(t.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(t.flags|=32)}else t.flags|=32;t.flags&4&&rM(l,Mo===0?a:a+"_"+Mo,n),i&&t.flags&4||(Un===null&&(Un=[]),Un.push(l,Mo===0?o:o+"_"+Mo,e.memoizedProps)),Mo++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:ex(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function C1(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=hr(a,o),r=Sr(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map(jA)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;Mo=0,n=ex(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||sl(t,a.onUpdate))}else t.subtreeFlags&33554432&&C1(t,e);t=t.sibling}}var Oa=!1,qt=!1,Ln=!1,Jm=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,za=null,Dn=!1,Tc=!1,Md=!1,ZI=!1;function MA(t,e,a){if(t=t.containerInfo,s0=dl,t=cy(t),b0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==o||r!==0&&f.nodeType!==3||(l=i+r),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===o&&++u===r&&(l=i),d===s&&++h===n&&(c=i),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(i0={focusedElem:t,selectionRange:o},dl=!1,a=(a&335544064)===a,za=e,e=a?9270:1024;za!==null;){if(t=za,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&XI(o[r]);if(t.alternate===null&&t.flags&2)a&&XS(t),Ru(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&XI(o),Ru(a);continue}else if(o!==null&&o.memoizedState!==null){a&&XS(t),Ru(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,za=o):(a&&y1(t),Ru(a))}}Bo=null}function Ru(t){for(;za!==null;){var e=za,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=Qs(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Kt(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)f0(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":f0(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=hr(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=Sr(n.default,n.update),n!=="none"&&xl(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(he(163))}if(o=e.sibling,o!==null){o.return=e.return,za=o;break}za=e.return}}function _1(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Pn(t,a),o&4&&df(5,a);break;case 1:if(Pn(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Kt(a,a.return,s)}else{var n=Qs(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Kt(a,a.return,s)}}o&64&&x1(a),o&512&&Bn(a,a.return);break;case 3:if(Pn(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ty(t,e)}catch(s){Kt(a,a.return,s)}}break;case 27:e===null&&o&4&&S1(a);case 26:case 5:Pn(t,a),e===null&&o&4&&VI(a),o&512&&Bn(a,a.return);break;case 12:Pn(t,a);break;case 31:Pn(t,a),o&4&&w1(t,a);break;case 13:Pn(t,a),o&4&&E1(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=BA.bind(null,a),hw(t,a))));break;case 22:if(o=a.memoizedState!==null||Oa,!o){var r=e!==null&&e.memoizedState!==null||qt;e=Oa,n=qt,Oa=o,(qt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),In(t,a,o)):Pn(t,a),Oa=e,qt=n}break;case 30:Pn(t,a),o&512&&Bn(a,a.return);break;case 7:o&512&&Bn(a,a.return);default:Pn(t,a)}}function KI(t,e){for(t=t.child;t!==null;)b1(t,e),t=t.sibling}function b1(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Kt(t,t.return,l)}JI(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Ht=!0}catch(l){Kt(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?fv(i,!0):fv(t.stateNode,!1)}catch(l){Kt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&KI(t,e);break;default:KI(t,e)}}function JI(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:b1(a,o);break e;case 22:a.memoizedState===null&&JI(a,o);break e;default:JI(a,o)}}t=t.sibling}}function T1(t){var e=t.alternate;e!==null&&(t.alternate=null,T1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Dd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ua=null,vo=!1;function mn(t,e,a){for(a=a.child;a!==null;)A1(t,e,a),a=a.sibling}function A1(t,e,a){if(No&&typeof No.onCommitFiberUnmount=="function")try{No.onCommitFiberUnmount(nf,a)}catch{}switch(a.tag){case 26:qt||Wa(a,e),mn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||Wa(a,e),kc(a);var o=ua,n=vo;us(a.type)&&(ua=a.stateNode,vo=!1),mn(t,e,a),mM(a.stateNode,a.type,a.memoizedProps),ua=o,vo=n;break;case 5:qt||Wa(a,e),kc(a);case 6:if(a.tag===6&&kc(a),o=ua,n=vo,ua=null,mn(t,e,a),ua=o,vo=n,ua!==null)if(vo)try{(ua.nodeType===9?ua.body:ua.nodeName==="HTML"?ua.ownerDocument.body:ua).removeChild(a.stateNode),Ht=!0}catch(r){Kt(a,e,r)}else try{ua.removeChild(a.stateNode),Ht=!0}catch(r){Kt(a,e,r)}break;case 18:ua!==null&&(vo?(t=ua,cv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pl(t)):cv(ua,a.stateNode));break;case 4:o=ua,n=vo,ua=a.stateNode.containerInfo,vo=!0,mn(t,e,a),ua=o,vo=n;break;case 0:case 11:case 14:case 15:ls(2,a,e),qt||ls(4,a,e),mn(t,e,a);break;case 1:qt||(Wa(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&g1(a,e,o)),mn(t,e,a);break;case 21:mn(t,e,a);break;case 22:qt=(o=qt)||a.memoizedState!==null,mn(t,e,a),qt=o;break;case 30:Wa(a,e),mn(t,e,a);break;case 7:qt||Wa(a,e),mn(t,e,a);break;default:mn(t,e,a)}}function w1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pl(t)}catch(a){Kt(e,e.return,a)}}}function E1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pl(t)}catch(a){Kt(e,e.return,a)}}function CA(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ZS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ZS),e;default:throw Error(he(435,t.tag))}}function Lu(t,e){var a=CA(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=UA.bind(null,t,o);o.then(n,n)}})}function co(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(us(l.type)){ua=l.stateNode,vo=!1;break e}break;case 5:ua=l.stateNode,vo=!1;break e;case 3:case 4:ua=l.stateNode.containerInfo,vo=!0;break e}l=l.return}if(ua===null)throw Error(he(160));A1(s,i,r),ua=null,vo=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)R1(e,t,a),e=e.sibling}var xn=null;function R1(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}co(e,t,a),fo(t),n&4&&(ls(3,t,t.return),df(3,t),ls(5,t,t.return));break;case 1:co(e,t,a),fo(t),n&512&&(qt||o===null||Wa(o,o.return)),n&64&&Oa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=xn,co(e,t,a),fo(t),n&512&&(qt||o===null||Wa(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Oa)t.stateNode=nM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[lf]||o[Xa]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),Ja(o,e,a),o[Xa]=t,Ha(o),e=o;break e;case"link":if(r=gv("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),Ja(o,e,a),n.head.appendChild(o);break;case"meta":if(r=gv("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),Ja(o,e,a),n.head.appendChild(o);break;default:throw Error(he(468,e))}o[Xa]=t,Ha(o),e=o}t.stateNode=e}else Oa||p0(r,t.type,t.stateNode);else t.stateNode=xv(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||qt||e.parentNode.removeChild(e)):n.count--,a===null?Oa||p0(r,t.type,t.stateNode):xv(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Zm(t,t.memoizedProps,o.memoizedProps);break;case 27:co(e,t,a),fo(t),n&512&&(qt||o===null||Wa(o,o.return)),o!==null&&n&4&&Zm(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=Ln,Ln=!1,co(e,t,a),Ln=r,fo(t),n&512&&(qt||o===null||Wa(o,o.return)),t.flags&32){e=t.stateNode;try{ol(e,""),Ht=!0}catch(u){Kt(t,t.return,u)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Zm(t,e,o!==null?o.memoizedProps:e)),n&1024&&(Jm=!0);break;case 6:if(co(e,t,a),fo(t),n&4){if(t.stateNode===null)throw Error(he(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,Ht=!0}catch(u){Kt(t,t.return,u)}}break;case 3:if(Ht=!1,$u=null,r=xn,xn=$c(e.containerInfo),co(e,t,a),xn=r,fo(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{pl(e.containerInfo)}catch(u){Kt(t,t.return,u)}Jm&&(Jm=!1,L1(t)),Ht=!1;break;case 4:n=Ln,Ln=Oa,o=eS(),r=xn,xn=$c(t.stateNode.containerInfo),co(e,t,a),fo(t),xn=r,Ht&&Tc&&(Md=!0),Ht=o,Ln=n;break;case 12:co(e,t,a),fo(t);break;case 31:co(e,t,a),fo(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Lu(t,e)));break;case 13:co(e,t,a),fo(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Xd=ko()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Lu(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Oa,l=qt,c=Ln;Oa=i||r,Ln=c||r,qt=l||s,co(e,t,a),qt=l,Ln=c,Oa=i,fo(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Oa||qt||(e=s||qt,a=Oa,o=qt,Oa=r||Oa,qt=e,Or(t,2),Oa=a,qt=o),!r&&Ln||KI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Lu(t,a))));break;case 19:co(e,t,a),fo(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Lu(t,e)));break;case 30:n&512&&(qt||o===null||Wa(o,o.return)),n=eS(),r=Tc,s=(a&335544064)===a,i=t.memoizedProps,Tc=s&&Sr(i.default,i.update)!=="none",co(e,t,a),fo(t),s&&o!==null&&Ht&&(t.flags|=4),Tc=r,Ht=n;break;case 21:break;case 7:n&512&&(qt||o===null||Wa(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:co(e,t,a),fo(t)}}function fo(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(F1(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if($0(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(j0(n))break;n=n.return}var s=o;if(a==null)throw Error(he(160));switch(a.tag){case 27:var i=a.stateNode,l=Km(t);vd(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(ol(c,""),a.flags&=-33);var u=Km(t);vd(t,u,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,f=Km(t);GI(t,f,h,s);break;default:throw Error(he(161))}}catch(d){Kt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;L1(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,dl=!0,e.reset(),dl=!1),t=t.sibling}}function wi(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)D1(e,t),e=e.sibling;else C1(e,!1)}function D1(t,e){var a=t.alternate;if(a===null)qI(t,!1);else switch(t.tag){case 3:if(ZI=Dn=!1,YS(),wi(e,t),!Dn&&!Md){if(t=Un,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];sM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ZI=!0}Un=null;break;case 5:wi(e,t);break;case 4:o=Dn,Dn=!1,wi(e,t),Dn&&(Md=!0),Dn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?qI(t,!1):wi(e,t));break;case 30:o=Dn,n=YS(),Dn=!1,wi(e,t),Dn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=hr(r,s),s=hr(a.memoizedProps,s);var i=Sr(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,Mo=0,e=ex(t,a,e,s,i,r,!0),Mo!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(sl(t,t.memoizedProps.onUpdate),Un=n):n!==null&&(n.push.apply(n,Un),Un=n),Dn=t.flags&32?!0:o;break;default:wi(e,t)}}function Pn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)_1(t,e.alternate,e),e=e.sibling}function Or(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:ls(4,a,a.return),Or(a,o);break;case 1:Wa(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&g1(a,a.return,n),Or(a,o);break;case 27:o&2&&mM(a.stateNode,a.type,a.memoizedProps);case 5:Wa(a,a.return),a.tag!==5&&a.tag!==27||kc(a),Or(a,o);break;case 6:kc(a);break;case 26:Wa(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||qt||n.parentNode.removeChild(n),Or(a,o);break;case 22:a.memoizedState===null&&Or(a,o);break;case 30:Wa(a,a.return),Or(a,o);break;case 7:Wa(a,a.return);default:Or(a,o)}t=t.sibling}}function In(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:In(n,r,a),df(4,r);break;case 1:if(In(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Kt(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)by(c[n],l)}catch(u){Kt(o,o.return,u)}}i&&s&64&&x1(r),Bn(r,r.return);break;case 27:a&2&&S1(r);case 5:r.tag!==5&&r.tag!==27||WS(r),In(n,r,a),i&&o===null&&s&4&&VI(r),Bn(r,r.return);break;case 6:WS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Oa||p0($c(l.ownerDocument),r.type,l),In(n,r,a),i&&o===null&&s&4&&VI(r),Bn(r,r.return);break;case 12:In(n,r,a);break;case 31:In(n,r,a),i&&s&4&&w1(n,r);break;case 13:In(n,r,a),i&&s&4&&E1(n,r);break;case 22:r.memoizedState===null&&In(n,r,a),Bn(r,r.return);break;case 30:In(n,r,a),Bn(r,r.return);break;case 7:Bn(r,r.return);default:In(n,r,a)}e=e.sibling}}function tx(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ff(a))}function ax(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ff(t))}function jo(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)P1(t,e,a,o),e=e.sibling;else n&&M1(e)}function P1(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Ku(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:jo(t,e,a,o),r&2048&&df(9,e);break;case 1:jo(t,e,a,o);break;case 3:jo(t,e,a,o),n&&ZI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&ff(r)));break;case 12:if(r&2048){jo(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Kt(e,e.return,c)}}else jo(t,e,a,o);break;case 31:jo(t,e,a,o);break;case 13:jo(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&Ku(i),s._visibility&2?jo(t,e,a,o):Nc(t,e)):(n&&i!==null&&i.memoizedState!==null&&Ku(e),s._visibility&2?jo(t,e,a,o):(s._visibility|=2,Ri(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&tx(i,e);break;case 24:jo(t,e,a,o),r&2048&&ax(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(Gn(r.child,!0),Gn(e.child,!0))),jo(t,e,a,o);break;default:jo(t,e,a,o)}}function Ri(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ri(r,s,i,l,n),df(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?Ri(r,s,i,l,n):Nc(r,s):(u._visibility|=2,Ri(r,s,i,l,n)),n&&c&2048&&tx(s.alternate,s);break;case 24:Ri(r,s,i,l,n),n&&c&2048&&ax(s.alternate,s);break;default:Ri(r,s,i,l,n)}e=e.sibling}}function Nc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:Nc(a,o),n&2048&&tx(o.alternate,o);break;case 24:Nc(a,o),n&2048&&ax(o.alternate,o);break;default:Nc(a,o)}e=e.sibling}}var ks=8192;function Ps(t,e,a){if(t.subtreeFlags&ks)for(t=t.child;t!==null;)B1(t,e,a),t=t.sibling}function B1(t,e,a){switch(t.tag){case 26:Ps(t,e,a),t.flags&ks&&(t.memoizedState!==null?Aw(a,xn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Sv(a,t)));break;case 5:Ps(t,e,a),t.flags&ks&&(t=t.stateNode,(e&335544128)===e&&Sv(a,t));break;case 3:case 4:var o=xn;xn=$c(t.stateNode.containerInfo),Ps(t,e,a),xn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=ks,ks=16777216,Ps(t,e,a),ks=o):Ps(t,e,a));break;case 30:if(t.flags&ks&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,Bo===null&&(Bo=new Map),Bo.set(o,n)}Ps(t,e,a);break;default:Ps(t,e,a)}}function U1(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Sc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];za=o,N1(o,t)}U1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)k1(t),t=t.sibling}function k1(t){switch(t.tag){case 0:case 11:case 15:Sc(t),t.flags&2048&&ls(9,t,t.return);break;case 3:Sc(t);break;case 12:Sc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ju(t)):Sc(t);break;default:Sc(t)}}function Ju(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];za=o,N1(o,t)}U1(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ls(8,e,e.return),Ju(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Ju(e));break;default:Ju(e)}t=t.sibling}}function N1(t,e){for(;za!==null;){var a=za;switch(a.tag){case 0:case 11:case 15:ls(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ff(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,za=o;else e:for(a=t;za!==null;){o=za;var n=o.sibling,r=o.return;if(T1(o),o===a){za=null;break e}if(n!==null){n.return=r,za=n;break e}za=r}}}var _A={getCacheForType:function(t){var e=Ya(_a),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ya(_a).controller.signal}},bA=typeof WeakMap=="function"?WeakMap:Map,Vt=0,ta=null,Bt=null,Ut=0,Yt=0,Lo=null,Xr=!1,gl=!1,ox=!1,gr=0,Sa=0,cs=0,qs=0,Cd=0,Uo=0,rl=0,Oc=null,yo=null,QI=!1,Xd=0,O1=0,_d=1/0,bd=null,ts=null,ma=0,Fn=null,js=null,Vn=0,jI=0,$I=null,z1=null,ji=null,$i=null,el=null,zc=0,Qu=null;function zo(){return Vt&2&&Ut!==0?Ut&-Ut:gt.T!==null?rx():qv()}function H1(){if(Uo===0)if(!(Ut&536870912)||Et){var t=Fu;Fu<<=1,!(Fu&3932160)&&(Fu=262144),Uo=t}else Uo=536870912;return t=Qa.current,t!==null&&(t.flags|=32),Uo}function sl(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=lM(hr(t.memoizedProps,a))),$i===null&&($i=[]),$i.push(e.bind(null,o))}}function _o(t,e,a){(t===ta&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(il(t,0),Yr(t,Ut,Uo,!1)),sf(t,a),(!(Vt&2)||t!==ta)&&(t===ta&&(!(Vt&2)&&(qs|=a),Sa===4&&Yr(t,Ut,Uo,!1)),Wn(t))}function V1(t,e,a){if(Vt&6)throw Error(he(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||rf(t,e),n=o?wA(t,e):Qm(t,e,!0),r=o;do{if(n===0){gl&&!o&&Yr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!TA(a)){n=Qm(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=Oc;var l=i.current.memoizedState.isDehydrated;if(l&&(il(i,s).flags|=256),s=Qm(i,s,!1),s!==2&&s!==6){if(ox&&!l){i.errorRecoveryDisabledLanes|=r,qs|=r,n=4;break e}r=yo,yo=n,r!==null&&(yo===null?yo=r:yo.push.apply(yo,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){il(t,0),Yr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(he(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Yr(o,e,Uo,!Xr);break e;case 2:yo=null;break;case 3:case 5:break;default:throw Error(he(329))}if((e&62914560)===e&&(n=Xd+300-ko(),10<n)){if(Yr(o,e,Uo,!Xr),Ld(o,0,!0)!==0)break e;Vn=e,o.timeoutHandle=ix(KS.bind(null,o,a,yo,bd,QI,e,Uo,qs,rl,Xr,r,"Throttled",-0,0),n);break e}KS(o,a,yo,bd,QI,e,Uo,qs,rl,Xr,r,null,-0,0)}}break}while(!0);Wn(t)}function KS(t,e,a,o,n,r,s,i,l,c,u,h,f,d){t.timeoutHandle=-1;var m=e.subtreeFlags,S=(r&335544064)===r;if(h=null,(S||m&8192||(m&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},Bo=null,B1(e,r,h),S&&(m=h,S=t.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(m.count++,m.waitingForViewTransition=!0,m=ef.bind(m),S.finished.then(m,m))),m=(r&62914560)===r?Xd-ko():(r&4194048)===r?O1-ko():0,m=ww(h,m),m!==null)){Vn=r,t.cancelPendingCommit=m(QS.bind(null,t,e,r,a,o,n,s,i,l,c,u,h,null,f,d)),Yr(t,r,s,!c);return}QS(t,e,r,a,o,n,s,i,l,c,u,h)}function TA(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ho(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e,a,o){e=Ov(t,e),e&=~Cd,e&=~qs,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-Oo(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&Hv(t,a,e)}function Yd(){return Vt&6?!0:(pf(0,!1),!1)}function nx(){if(Bt!==null){if(Yt===0)var t=Bt.return;else t=Bt,fr=oi=null,H0(t),Ki=null,Yc=0,t=Bt;for(;t!==null;)I1(t.alternate,t),t=t.return;Bt=null}}function il(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,KA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Vn=0,nx(),ta=t,Bt=a=ur(t.current,null),Ut=e,Yt=0,Lo=null,Xr=!1,gl=rf(t,e),ox=!1,rl=Uo=Cd=qs=cs=Sa=0,yo=Oc=null,QI=!1,gr=Ov(t,e),kd(),a}function G1(t,e){Tt=null,gt.H=gd,e===Il||e===zd?(e=yS(),Yt=3):e===D0?(e=yS(),Yt=4):Yt=e===K0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Lo=e,Bt===null&&(Sa=1,Fd(t,on(e,t.current)))}function q1(){var t=Qa.current;return t===null?!0:(Ut&4194048)===Ut?to===null:(Ut&62914560)===Ut||Ut&536870912?t===to:!1}function W1(){var t=gt.H;return gt.H=gd,t===null?gd:t}function X1(){var t=gt.A;return gt.A=_A,t}function Td(){Sa=4,Xr||(Ut&4194048)!==Ut&&Qa.current!==null||(gl=!0),!(cs&134217727)&&!(qs&134217727)||ta===null||Yr(ta,Ut,Uo,!1)}function Qm(t,e,a){var o=Vt;Vt|=2;var n=W1(),r=X1();(ta!==t||Ut!==e)&&(bd=null,il(t,e)),e=!1;var s=Sa;e:do try{if(Yt!==0&&Bt!==null){var i=Bt,l=Lo;switch(Yt){case 8:nx(),s=6;break e;case 3:case 2:case 9:case 6:Qa.current===null&&(e=!0);var c=Yt;if(Yt=0,Lo=null,qi(t,i,l,c),a&&gl){s=0;break e}break;default:c=Yt,Yt=0,Lo=null,qi(t,i,l,c)}}AA(),s=Sa;break}catch(u){G1(t,u)}while(!0);return e&&t.shellSuspendCounter++,fr=oi=null,Vt=o,gt.H=n,gt.A=r,Bt===null&&(ta=null,Ut=0,kd()),s}function AA(){for(;Bt!==null;)Y1(Bt)}function wA(t,e){var a=Vt;Vt|=2;var o=W1(),n=X1();ta!==t||Ut!==e?(bd=null,_d=ko()+500,il(t,e)):gl=rf(t,e);e:do try{if(Yt!==0&&Bt!==null){e=Bt;var r=Lo;t:switch(Yt){case 1:Yt=0,Lo=null,qi(t,e,r,1);break;case 2:case 9:if(vS(r)){Yt=0,Lo=null,JS(e);break}e=function(){Yt!==2&&Yt!==9||ta!==t||(Yt=7),Wn(t)},r.then(e,e);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:vS(r)?(Yt=0,Lo=null,JS(e)):(Yt=0,Lo=null,qi(t,e,r,7));break;case 5:var s=null;switch(Bt.tag){case 26:s=Bt.memoizedState;case 5:case 27:var i=Bt;if(s?gM(s):i.stateNode.complete){Yt=0,Lo=null;var l=i.sibling;if(l!==null)Bt=l;else{var c=i.return;c!==null?(Bt=c,Zd(c)):Bt=null}break t}}Yt=0,Lo=null,qi(t,e,r,5);break;case 6:Yt=0,Lo=null,qi(t,e,r,6);break;case 8:nx(),Sa=6;break e;default:throw Error(he(462))}}EA();break}catch(u){G1(t,u)}while(!0);return fr=oi=null,gt.H=o,gt.A=n,Vt=a,Bt!==null?0:(ta=null,Ut=0,kd(),Sa)}function EA(){for(;Bt!==null&&!Yb();)Y1(Bt)}function Y1(t){var e=m1(t.alternate,t,gr);t.memoizedProps=t.pendingProps,e===null?Zd(t):Bt=e}function JS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=NS(a,e,e.pendingProps,e.type,void 0,Ut);break;case 11:e=NS(a,e,e.pendingProps,e.type.render,e.ref,Ut);break;case 5:H0(e);var o=e;o===Va&&(Et?(ud(o),o.tag===5&&o.stateNode!=null&&(ia=o.stateNode)):(ud(o),Et=!0));default:I1(a,e),e=Bt=xy(e,gr),e=m1(a,e,gr)}t.memoizedProps=t.pendingProps,e===null?Zd(t):Bt=e}function qi(t,e,a,o){fr=oi=null,H0(e),Ki=null,Yc=0;var n=e.return;try{if(xA(t,n,e,a,Ut)){Sa=1,Fd(t,on(a,t.current)),Bt=null;return}}catch(r){if(n!==null)throw Bt=n,r;Sa=1,Fd(t,on(a,t.current)),Bt=null;return}e.flags&32768?(Et||o===1?t=!0:gl||Ut&536870912?t=!1:(Xr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qa.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z1(e,t)):Zd(e)}function Zd(t){var e=t;do{if(e.flags&32768){Z1(e,Xr);return}t=e.return;var a=vA(e.alternate,e,gr);if(a!==null){Bt=a;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Sa===0&&(Sa=5)}function Z1(t,e){do{var a=yA(t.alternate,t);if(a!==null){a.flags&=32767,Bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Bt=t;return}Bt=t=a}while(t!==null);Sa=6,Bt=null}function QS(t,e,a,o,n,r,s,i,l,c,u,h){t.cancelPendingCommit=null;do Kd();while(ma!==0);if(Vt&6)throw Error(he(327));if(e!==null){if(e===t.current)throw Error(he(177));t===ta&&(Bt=ta=null,Ut=0),js=e,Fn=t,Vn=a,$I=n,z1=o,RA(t,e,a,s,i,l,h)}}function RA(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(jI=i,i|=T0,oT(t,a,i,o,n,r),$i=null,(a&335544064)===a?(el=rA(t),o=10262):(el=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,kA(sd,function(){return o0(),null})):(t.callbackNode=null,t.callbackPriority=0),yd=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=gt.T,gt.T=null,n=Gt.p,Gt.p=2,r=Vt,Vt|=4;try{MA(t,e,a)}finally{Vt=r,Gt.p=n,gt.T=o}}ma=1,yd?ji=tw(s,t.containerInfo,el,e0,t0,DA,a0,o0,LA,null,null):(e0(),t0(),a0())}function LA(t){if(ma!==0){var e=Fn.onRecoverableError;e(t,{componentStack:null})}}function DA(){ma===3&&(ma=0,D1(js,Fn),ma=4)}function e0(){if(ma===1){ma=0;var t=Fn,e=js,a=Vn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=gt.T,gt.T=null;var n=Gt.p;Gt.p=2;var r=Vt;Vt|=4;try{Tc=Md=!1,R1(e,t,a),a=i0;var s=cy(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&ly(i.ownerDocument.documentElement,i)){if(l!==null&&b0(i)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(u,i.value.length);else{var h=i.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),m=i.textContent.length,S=Math.min(l.start,m),I=l.end===void 0?S:Math.min(l.end,m);!d.extend&&S>I&&(s=I,I=S,S=s);var p=pS(i,S),g=pS(i,I);if(p&&g&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var y=h.createRange();y.setStart(p.node,p.offset),d.removeAllRanges(),S>I?(d.addRange(y),d.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),d.addRange(y))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var x=h[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}dl=!!s0,i0=s0=null}finally{Vt=r,Gt.p=n,gt.T=o}}t.current=e,ma=2}}function t0(){if(ma===2){ma=0;var t=Fn,e=js,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=gt.T,gt.T=null;var o=Gt.p;Gt.p=2;var n=Vt;Vt|=4;try{_1(t,e.alternate,e)}finally{Vt=n,Gt.p=o,gt.T=a}}ma=3}}function a0(){if(ma===4||ma===3){ma=0;var t=ji;ji=null,Zb();var e=Fn,a=js,o=Vn,n=z1,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?ma=5:(ma=0,js=Fn=null,K1(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(ts=null),S0(o),a=a.stateNode,No&&typeof No.onCommitFiberRoot=="function")try{No.onCommitFiberRoot(nf,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=gt.T,r=Gt.p,Gt.p=2,gt.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{gt.T=a,Gt.p=r}}if(n=$i,s=el,el=null,n!==null&&($i=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);Vn&3&&Kd(),Wn(e),r=e.pendingLanes,o&261930&&r&42?e===Qu?zc++:(zc=0,Qu=e):(zc=0,Qu=null),pf(0,!1)}}function K1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ff(e)))}function Kd(){return ji!==null&&(ji.skipTransition(),ji=null),e0(),t0(),a0(),o0()}function o0(){if(ma!==5)return!1;var t=Fn,e=jI;jI=0;var a=S0(Vn),o=gt.T,n=Gt.p;try{Gt.p=32>a?32:a,gt.T=null,a=$I,$I=null;var r=Fn,s=Vn;if(ma=0,js=Fn=null,Vn=0,Vt&6)throw Error(he(331));var i=Vt;if(Vt|=4,k1(r.current),P1(r,r.current,s,a),Vt=i,pf(0,!1),No&&typeof No.onPostCommitFiberRoot=="function")try{No.onPostCommitFiberRoot(nf,r)}catch{}return!0}finally{Gt.p=n,gt.T=o,K1(t,e)}}function jS(t,e,a){e=on(a,e),e=UI(t.stateNode,e,2),t=jr(t,e,2),t!==null&&(sf(t,2),Wn(t))}function Kt(t,e,a){if(t.tag===3)jS(t,t,a);else for(;e!==null;){if(e.tag===3){jS(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ts===null||!ts.has(o))){t=on(a,t),a=f1(2),o=jr(e,a,2),o!==null&&(u1(a,o,e,t),sf(o,2),Wn(o));break}}e=e.return}}function jm(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new bA;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(ox=!0,n.add(a),t=PA.bind(null,t,e,a),e.then(t,t))}function PA(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ta===t&&(Ut&a)===a&&(Sa===4||Sa===3&&(Ut&62914560)===Ut&&300>ko()-Xd?Vt&2?Cd|=a:il(t,0):Cd|=a,rl===Ut&&(rl=0)),Wn(t)}function J1(t,e){e===0&&(e=zv()),t=ai(t,e),t!==null&&(sf(t,e),Wn(t))}function BA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),J1(t,a)}function UA(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(he(314))}o!==null&&o.delete(e),J1(t,a)}function kA(t,e){return g0(t,e)}var ll=null,Li=null,n0=!1,Ad=!1,$m=!1,Zr=0;function Wn(t){t!==Li&&t.next===null&&(Li===null?ll=Li=t:Li=Li.next=t),Ad=!0,n0||(n0=!0,OA())}function pf(t,e){if(!$m&&Ad){$m=!0;do for(var a=!1,o=ll;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-Oo(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$S(o,r))}else r=Ut,r=Ld(o,o===ta?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||rf(o,r)||(a=!0,$S(o,r));o=o.next}while(a);$m=!1}}function NA(){Q1()}function Q1(){Ad=n0=!1;var t=0;Zr!==0&&ZA()&&(t=Zr);for(var e=ko(),a=null,o=ll;o!==null;){var n=o.next,r=j1(o,e);r===0?(o.next=null,a===null?ll=n:a.next=n,n===null&&(Li=a)):(a=o,(t!==0||r&3)&&(Ad=!0)),o=n}ma!==0&&ma!==5||pf(t,!1),Zr!==0&&(Zr=0)}function j1(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Oo(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=aT(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=ta,a=Ut,a=Ld(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rm(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||rf(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&Rm(o),S0(a)){case 2:case 8:a=kv;break;case 32:a=sd;break;case 268435456:a=Nv;break;default:a=sd}return o=$1.bind(null,t),a=g0(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&Rm(o),t.callbackPriority=2,t.callbackNode=null,2}function $1(t,e){if(ma!==0&&ma!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kd()&&t.callbackNode!==a)return null;var o=Ut;return o=Ld(t,t===ta?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(V1(t,o,e),j1(t,ko()),t.callbackNode!=null&&t.callbackNode===a?$1.bind(null,t):null)}function $S(t,e){if(Kd())return null;V1(t,e,!0)}function OA(){JA(function(){Vt&6?g0(Uv,NA):Q1()})}function rx(){if(Zr===0){var t=Zs;t===0&&(t=gu,gu<<=1,!(gu&261888)&&(gu=256)),Zr=t}return Zr}function ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ou(t)}function zA(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=ev((n[To]||null).action),s=o.submitter;s&&(e=(e=s[To]||null)?ev(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new Pd("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Zr!==0){var l=new FormData(n,s);PI(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),PI(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(Du=0;Du<MI.length;Du++)Pu=MI[Du],tv=Pu.toLowerCase(),av=Pu[0].toUpperCase()+Pu.slice(1),Sn(tv,"on"+av);var Pu,tv,av,Du;Sn(uy,"onAnimationEnd");Sn(dy,"onAnimationIteration");Sn(py,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(QT,"onTransitionRun");Sn(jT,"onTransitionStart");Sn($T,"onTransitionCancel");Sn(hy,"onTransitionEnd");al("onMouseEnter",["mouseout","mouseover"]);al("onMouseLeave",["mouseout","mouseover"]);al("onPointerEnter",["pointerout","pointerover"]);al("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jc));function eM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){ld(u)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){ld(u)}n.currentTarget=null,r=l}}}}function Pt(t,e){var a=e[JF];a===void 0&&(a=e[JF]=new Set);var o=t+"__bubble";a.has(o)||(tM(e,t,2,!1),a.add(o))}function eI(t,e,a){var o=0;e&&(o|=4),tM(a,t,o,e)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function sx(t){if(!t[Bu]){t[Bu]=!0,Xv.forEach(function(a){a!=="selectionchange"&&(HA.has(a)||eI(a,!1,t),eI(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bu]||(e[Bu]=!0,eI("selectionchange",!1,e))}}function tM(t,e,a,o){switch(_M(e)){case 2:var n=Dw;break;case 8:n=Pw;break;default:n=px}a=n.bind(null,e,a,t),n=void 0,!FI||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function tI(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Ns(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}ey(function(){var c=r,u=y0(a),h=[];e:{var f=my.get(t);if(f!==void 0){var d=Pd,m=t;switch(t){case"keypress":if(Hu(a)===0)break e;case"keydown":case"keyup":d=TT;break;case"focusin":m="focus",d=km;break;case"focusout":m="blur",d=km;break;case"beforeblur":case"afterblur":d=km;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=nS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=mT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=LT;break;case uy:case dy:case py:d=gT;break;case hy:d=PT;break;case"scroll":case"scrollend":d=pT;break;case"wheel":d=UT;break;case"copy":case"cut":case"paste":d=ST;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=sS;break;case"submit":d=ET;break;case"toggle":case"beforetoggle":d=NT}var S=(e&4)!==0,I=!S&&(t==="scroll"||t==="scrollend"),p=S?f!==null?f+"Capture":null:f;S=[];for(var g=c,y;g!==null;){var x=g;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||p===null||(x=Vc(g,p),x!=null&&S.push(Qc(g,x,y))),I)break;g=g.return}0<S.length&&(f=new d(f,m,null,a,u),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&a!==gI&&(m=a.relatedTarget||a.fromElement)&&(Ns(m)||m[hl]))break e;(f||d)&&(m=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,f?(d=a.relatedTarget||a.toElement,f=c,d=d?Ns(d):null,d!==null&&(I=of(d),S=d.tag,d!==I||S!==5&&S!==27&&S!==6)&&(d=null)):(f=null,d=c),f!==d&&(S=nS,x="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=sS,x="onPointerLeave",p="onPointerEnter",g="pointer"),I=f==null?m:_c(f),y=d==null?m:_c(d),m=new S(x,g+"leave",f,a,u),m.target=I,m.relatedTarget=y,x=null,Ns(u)===c&&(S=new S(p,g+"enter",d,a,u),S.target=y,S.relatedTarget=I,x=S),I=x,S=f&&d?sI(f,d,VA):null,f!==null&&ov(h,m,f,S,!1),d!==null&&I!==null&&ov(h,I,d,S,!0)))}e:{if(f=c?_c(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var C=fS;else if(cS(f))if(sy)C=ZT;else{C=XT;var b=WT}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&v0(c.elementType)&&(C=fS):C=YT;if(C&&(C=C(t,c))){ry(h,C,a,u);break e}b&&b(t,f,c)}switch(b=c?_c(c):window,t){case"focusin":(cS(b)||b.contentEditable==="true")&&(Ni=b,vI=c,Ec=null);break;case"focusout":Ec=vI=Ni=null;break;case"mousedown":yI=!0;break;case"contextmenu":case"mouseup":case"dragend":yI=!1,hS(h,a,u);break;case"selectionchange":if(JT)break;case"keydown":case"keyup":hS(h,a,u)}var T;if(_0)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ki?oy(t,a)&&(v="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(v="onCompositionStart");v&&(ay&&a.locale!=="ko"&&(ki||v!=="onCompositionStart"?v==="onCompositionEnd"&&ki&&(T=ty()):(qr=u,M0="value"in qr?qr.value:qr.textContent,ki=!0)),b=wd(c,v),0<b.length&&(v=new rS(v,t,null,a,u),h.push({event:v,listeners:b}),T?v.data=T:(T=ny(a),T!==null&&(v.data=T)))),(T=zT?HT(t,a):VT(t,a))&&(v=wd(c,"onBeforeInput"),0<v.length&&(b=new rS("onBeforeInput","beforeinput",null,a,u),h.push({event:b,listeners:v}),b.data=T)),zA(h,t,c,a,u)}eM(h,e)})}function Qc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function wd(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Vc(t,a),n!=null&&o.unshift(Qc(t,n,r)),n=Vc(t,e),n!=null&&o.push(Qc(t,n,r))),t.tag===3)return o;t=t.return}return[]}function VA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ov(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=Vc(a,r),c!=null&&s.unshift(Qc(a,c,l))):n||(c=Vc(a,r),c!=null&&s.push(Qc(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var GA=/\r\n?/g,qA=/\u0000|\uFFFD/g;function nv(t){return(typeof t=="string"?t:""+t).replace(GA,`
`).replace(qA,"")}function aM(t,e){return e=nv(e),nv(t)===e}function Zt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||ol(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&ol(t,""+o);else return;break;case"className":vu(t,"class",o);break;case"tabIndex":vu(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":vu(t,a,o);break;case"style":$v(t,o,r);return;case"data":if(e!=="object"){vu(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ou(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Zt(t,e,"name",n.name,n,null),Zt(t,e,"formEncType",n.formEncType,n,null),Zt(t,e,"formMethod",n.formMethod,n,null),Zt(t,e,"formTarget",n.formTarget,n,null)):(Zt(t,e,"encType",n.encType,n,null),Zt(t,e,"method",n.method,n,null),Zt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ou(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Nn);return;case"onScroll":o!=null&&Pt("scroll",t);return;case"onScrollEnd":o!=null&&Pt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(he(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(he(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ou(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Pt("beforetoggle",t),Pt("toggle",t),Nu(t,"popover",o);break;case"xlinkActuate":ir(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ir(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ir(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ir(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ir(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ir(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ir(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ir(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ir(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Nu(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=uT.get(a)||a,Nu(t,a,o);else return}Ht=!0}function r0(t,e,a,o,n,r){switch(a){case"style":$v(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(he(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(he(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")ol(t,o);else if(typeof o=="number"||typeof o=="bigint")ol(t,""+o);else return;break;case"onScroll":o!=null&&Pt("scroll",t);return;case"onScrollEnd":o!=null&&Pt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Nn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Yv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[To]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}Ht=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Nu(t,a,o)}return}Ht=!0}function Ja(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",t),Pt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(he(137,e));default:Zt(t,e,r,s,a,null)}}n&&Zt(t,e,"srcSet",a.srcSet,a,null),o&&Zt(t,e,"src",a.src,a,null);return;case"input":Pt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"name":n=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(he(137,e));break;default:Zt(t,e,o,u,a,null)}}Jv(t,r,i,l,c,s,n,!1);return;case"select":Pt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Zt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Xi(t,!!o,e,!1):a!=null&&Xi(t,!!o,a,!0);return;case"textarea":Pt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(he(91));break;default:Zt(t,e,s,i,a,null)}jv(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,e,l,o,a,null)}return;case"dialog":Pt("beforetoggle",t),Pt("toggle",t),Pt("cancel",t),Pt("close",t);break;case"iframe":case"object":Pt("load",t);break;case"video":case"audio":for(o=0;o<Jc.length;o++)Pt(Jc[o],t);break;case"image":Pt("error",t),Pt("load",t);break;case"details":Pt("toggle",t);break;case"embed":case"source":case"link":Pt("error",t),Pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(he(137,e));default:Zt(t,e,c,o,a,null)}return;default:if(v0(e)){for(u in a)a.hasOwnProperty(u)&&(o=a[u],o!==void 0&&r0(t,e,u,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Zt(t,e,i,o,a,null))}var WA={};function XA(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,u=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Zt(t,e,d,null,o,h)}}for(var f in o){var d=o[f];if(h=a[f],o.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":d!==h&&(Ht=!0),r=d;break;case"name":d!==h&&(Ht=!0),n=d;break;case"checked":d!==h&&(Ht=!0),c=d;break;case"defaultChecked":d!==h&&(Ht=!0),u=d;break;case"value":d!==h&&(Ht=!0),s=d;break;case"defaultValue":d!==h&&(Ht=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(he(137,e));break;default:d!==h&&Zt(t,e,f,d,o,h)}}xI(t,s,i,l,c,u,r,n);return;case"select":d=s=i=f=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Zt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(Ht=!0),f=r;break;case"defaultValue":r!==l&&(Ht=!0),i=r;break;case"multiple":r!==l&&(Ht=!0),s=r;default:r!==l&&Zt(t,e,n,r,o,l)}e=i,a=s,o=d,f!=null?Xi(t,!!a,f,!1):!!o!=!!a&&(e!=null?Xi(t,!!a,e,!0):Xi(t,!!a,a?[]:"",!1));return;case"textarea":d=f=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Zt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(Ht=!0),f=n;break;case"defaultValue":n!==r&&(Ht=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(he(91));break;default:n!==r&&Zt(t,e,s,n,o,r)}Qv(t,f,d);return;case"option":for(var m in a)if(f=a[m],a.hasOwnProperty(m)&&f!=null&&!o.hasOwnProperty(m))switch(m){case"selected":t.selected=!1;break;default:Zt(t,e,m,null,o,f)}for(l in o)if(f=o[l],d=a[l],o.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":f!==d&&(Ht=!0),t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Zt(t,e,l,f,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)f=a[S],a.hasOwnProperty(S)&&f!=null&&!o.hasOwnProperty(S)&&Zt(t,e,S,null,o,f);for(c in o)if(f=o[c],d=a[c],o.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(he(137,e));break;default:Zt(t,e,c,f,o,d)}return;default:if(v0(e)){for(var I in a)f=a[I],a.hasOwnProperty(I)&&f!==void 0&&!o.hasOwnProperty(I)&&r0(t,e,I,void 0,o,f);for(u in o)f=o[u],d=a[u],!o.hasOwnProperty(u)||f===d||f===void 0&&d===void 0||r0(t,e,u,f,o,d);return}}for(var p in a)f=a[p],a.hasOwnProperty(p)&&f!=null&&!o.hasOwnProperty(p)&&Zt(t,e,p,null,o,f);for(h in o)f=o[h],d=a[h],!o.hasOwnProperty(h)||f===d||f==null&&d==null||Zt(t,e,h,f,o,d)}function rv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&rv(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var u=l.transferSize,h=l.initiatorType;u&&rv(h)&&(l=l.responseEnd,s+=u*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var s0=null,i0=null;function jc(t){return t.nodeType===9?t:t.ownerDocument}function sv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function nM(t,e,a,o){return a=jc(a).createElement(t),a[Xa]=o,a[To]=e,Ja(a,t,e),Ha(a),a}function l0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var aI=null;function ZA(){var t=window.event;return t&&t.type==="popstate"?t===aI?!1:(aI=t,!0):(aI=null,!1)}var ix=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,lv=typeof requestAnimationFrame=="function"?requestAnimationFrame:ix,JA=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(t){return iv.resolve(null).then(t).catch(QA)}:ix;function QA(t){setTimeout(function(){throw t})}function us(t){return t==="head"}function cv(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),pl(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")nI(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,nI(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[lf]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&nI(t.ownerDocument.body);a=n}while(a);pl(e)}function fv(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function sM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function iM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function c0(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return iM(e,a,t)}function jA(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return iM(e,a,t)}function $A(t){return t.documentElement.clientHeight}function ew(t){this.addEventListener("load",t),this.addEventListener("error",t)}function tw(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var u=c.startViewTransition({update:function(){var f=c.defaultView,d=f.navigation&&f.navigation.transition,m=c.fonts.status;o();var S=[];if(m==="loaded"&&($A(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),m=S.length,t!==null)for(var I=t.suspenseyImages,p=0,g=0;g<I.length;g++){var y=I[g];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<f.innerHeight&&x.left<f.innerWidth){if(p+=FM(y),p>ed){S.length=m;break}y=new Promise(ew.bind(y)),S.push(y)}}}if(0<S.length)return f=Promise.race([Promise.all(S),new Promise(function(C){return setTimeout(C,500)})]).then(n,n),(d?Promise.allSettled([d.finished,f]):f).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=u;var h=[];return u.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),d=0;d<f.length;d++){var m=f[d],S=m.effect,I=S.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){h.push(m),m=S.getKeyframes();for(var p=I=void 0,g=!0,y=0;y<m.length;y++){var x=m[y],C=x.width;if(I===void 0)I=C;else if(I!==C){g=!1;break}if(C=x.height,p===void 0)p=C;else if(p!==C){g=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}g&&I!==void 0&&p!==void 0&&(S.setKeyframes(m),g=getComputedStyle(S.target,S.pseudoElement),g.width!==I||g.height!==p)&&(g=m[0],g.width=I,g.height=p,g=m[m.length-1],g.width=I,g.height=p,S.setKeyframes(m))}}s()},function(f){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{o(),n(),s()}}),u.finished.finally(function(){for(var f=0;f<h.length;f++)h[f].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),i()}),u}catch{return o(),n(),s(),null}}function Os(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Os.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:aa({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Os.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};Os.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function lM(t){return{name:t,group:new Os("group",t),imagePair:new Os("image-pair",t),old:new Os("old",t),new:new Os("new",t)}}function Vo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Vo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(cM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=cl(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),bo(this._fragmentFiber.child,!1,aw,t,i,o)}this._eventListeners=r}};function aw(t,e,a,o){return Da(t).addEventListener(e,a,o),!1}Vo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=cM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=cl(n.optionsOrUseCapture),bo(this._fragmentFiber.child,!1,ow,t,a,n),o.splice(e,1),r!==null&&r()}};function ow(t,e,a,o){return Da(t).removeEventListener(e,a,o),!1}function cl(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function uv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function cM(t,e,a,o){if(t.length===0)return-1;o=uv(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&uv(r.optionsOrUseCapture)===o)return n}return-1}Vo.prototype.dispatchEvent=function(t){var e=$s(this._fragmentFiber);if(e===null)return!0;e=Da(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,cl(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,cl(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};Vo.prototype.focus=function(t){bo(this._fragmentFiber.child,!0,fM,t,void 0,void 0)};function fM(t,e){return t.tag===6?!1:(t=Da(t),mw(t,e))}Vo.prototype.focusLast=function(t){var e=[];bo(this._fragmentFiber.child,!0,lx,e,void 0,void 0);for(var a=e.length-1;0<=a&&!fM(e[a],t);a--);};function lx(t,e){return e.push(t),!1}Vo.prototype.blur=function(){var t=$s(this._fragmentFiber);t!==null&&(t=Da(t),t=jc(t).activeElement,t!==null&&bo(this._fragmentFiber.child,!1,nw,t,void 0,void 0))};function nw(t,e){return t.tag===6?!1:(t=Da(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Vo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),bo(this._fragmentFiber.child,!1,rw,t,void 0,void 0)};function rw(t,e){return t.tag===6||(t=Da(t),e.observe(t)),!1}Vo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),bo(this._fragmentFiber.child,!1,sw,t,void 0,void 0);for(var a=e=0;a<gn.length;a++){var o=gn[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):gn[e++]=o}gn.length=e}};function sw(t,e){return t.tag===6||(t=Da(t),e.unobserve(t)),!1}var gn=[],oI=!1;function iw(t,e,a){gn.push({fragmentInstance:t,observer:e,instance:a}),oI||(oI=!0,Iw(function(){oI=!1;var o=gn;gn=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}Vo.prototype.getClientRects=function(){var t=[];return bo(this._fragmentFiber.child,!1,lw,t,void 0,void 0),t};function lw(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=Da(t),e.push.apply(e,t.getClientRects());return!1}Vo.prototype.getRootNode=function(t){var e=$s(this._fragmentFiber);return e===null?this:Da(e).getRootNode(t)};Vo.prototype.compareDocumentPosition=function(t){var e=$s(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];bo(this._fragmentFiber.child,!1,lx,a,void 0,void 0);var o=Da(e);if(a.length===0){if(a=o,qF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=Lv(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=Da(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Da(a[0]),n=Da(a[a.length-1]);var r=qF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||cw(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function cw(t,e,a,o,n){var r=Ns(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=$s(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=sI(a,r,WF),e===null?e=!1:(bo(e,!0,Ob,r,a),r=Di,Di=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=sI(o,r,WF),e===null?e=!1:(bo(e,!0,zb,r,o),r=Di,rI=Di=null,e=r!==null)),e):!1}function dv(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Vo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(he(566));var e=[];bo(this._fragmentFiber.child,!1,lx,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=Lv(this._fragmentFiber);if(o=a?o[1]||o[0]||$s(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=Da(o),dv(t,a);return}if(o=Da(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=Da(n),dv(n,a)):Da(n).scrollIntoView(t),o+=a?-1:1}};function fw(t,e){return t=Da(t),uM(t,e),!1}function uM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function dM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,cl(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<gn.length;i++){var l=gn[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(gn[s++]=l)}gn.length=s,r.observe(t)}),uM(t,e))}function uw(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,cl(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?iw(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function f0(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":f0(a),Dd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dw(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[lf])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=rn(t.nextSibling),t===null)break}return null}function pw(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=rn(t.nextSibling),t===null))return null;return t}function pM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=rn(t.nextSibling),t===null))return null;return t}function u0(t){return t.data==="$?"||t.data==="$~"}function cx(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hw(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var d0=null;function pv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return rn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function mw(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function Iw(t){lv(function(){lv(function(e){return t(e)})})}function hM(t,e,a){switch(e=jc(a),t){case"html":if(t=e.documentElement,!t)throw Error(he(452));return t;case"head":if(t=e.head,!t)throw Error(he(453));return t;case"body":if(t=e.body,!t)throw Error(he(454));return t;default:throw Error(he(451))}}function mM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Zt(t,e,o,null,WA,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Nn&&(t.onclick=null),Dd(t)}function nI(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Dd(t)}var sn=new Map,mv=new Set;function $c(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var vr=Gt.d;Gt.d={f:xw,r:gw,D:Fw,C:Sw,L:vw,m:yw,X:Cw,S:Mw,M:_w};function xw(){var t=vr.f(),e=Yd();return t||e}function gw(t){var e=ml(t);e!==null&&e.tag===5&&e.type==="form"?$y(e):vr.r(t)}var Fl=typeof document>"u"?null:document;function IM(t,e,a){var o=Fl;if(o&&typeof e=="string"&&e){var n=an(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),mv.has(n)||(mv.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),Ja(e,"link",t),Ha(e),o.head.appendChild(e)))}}function Fw(t){vr.D(t),IM("dns-prefetch",t,null)}function Sw(t,e){vr.C(t,e),IM("preconnect",t,e)}function vw(t,e,a){vr.L(t,e,a);var o=Fl;if(o&&t&&e){var n='link[rel="preload"][as="'+an(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+an(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+an(a.imageSizes)+'"]')):n+='[href="'+an(t)+'"]';var r=n;switch(e){case"style":r=fl(t);break;case"script":r=Sl(t)}if(!(sn.has(r)||(t=aa({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),sn.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(hf(r))||e==="script"&&o.querySelector(mf(r))))){var s=o.createElement("link");Ja(s,"link",t),e==="style"&&(s[id]=!0,s.onload=s.onerror=function(){Wv(s)}),Ha(s),o.head.appendChild(s)}}}function yw(t,e){vr.m(t,e);var a=Fl;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+an(o)+'"][href="'+an(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Sl(t)}if(!sn.has(r)&&(t=aa({rel:"modulepreload",href:t},e),sn.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mf(r)))return}o=a.createElement("link"),Ja(o,"link",t),Ha(o),a.head.appendChild(o)}}}function Mw(t,e,a){vr.S(t,e,a);var o=Fl;if(o&&t){var n=Wi(o).hoistableStyles,r=fl(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(hf(r)))i.loading=5;else{t=aa({rel:"stylesheet",href:t,"data-precedence":e},a),(a=sn.get(r))&&fx(t,a);var l=s=o.createElement("link");Ha(l),Ja(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ju(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function Cw(t,e){vr.X(t,e);var a=Fl;if(a&&t){var o=Wi(a).hoistableScripts,n=Sl(t),r=o.get(n);r||(r=a.querySelector(mf(n)),r||(t=aa({src:t,async:!0},e),(e=sn.get(n))&&ux(t,e),r=a.createElement("script"),Ha(r),Ja(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function _w(t,e){vr.M(t,e);var a=Fl;if(a&&t){var o=Wi(a).hoistableScripts,n=Sl(t),r=o.get(n);r||(r=a.querySelector(mf(n)),r||(t=aa({src:t,async:!0,type:"module"},e),(e=sn.get(n))&&ux(t,e),r=a.createElement("script"),Ha(r),Ja(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function Iv(t,e,a,o){var n=(n=Kr.current)?$c(n):null;if(!n)throw Error(he(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=fl(a.href),e=Wi(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fl(a.href);var r=Wi(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(hf(t)))?r._p||(s.instance=r,s.state.loading=5):(r=sn.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},sn.set(t,r)),bw(n,t,r,s.state))),e&&o===null)throw Error(he(528,""));return s}if(e&&o!==null)throw Error(he(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=Sl(a),e=Wi(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(he(444,t))}}function fl(t){return'href="'+an(t)+'"'}function hf(t){return'link[rel="stylesheet"]['+t+"]"}function xM(t){return aa({},t,{"data-precedence":t.precedence,precedence:null})}function bw(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[id]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[id]=!0,e.onload=e.onerror=Wv.bind(null,e),Ja(e,"link",a),Ha(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function Sl(t){return'[src="'+an(t)+'"]'}function mf(t){return"script[async]"+t}function xv(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+an(a.href)+'"]');if(o)return e.instance=o,Ha(o),o;var n=aa({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ha(o),Ja(o,"style",n),ju(o,a.precedence,t),e.instance=o;case"stylesheet":n=fl(a.href);var r=t.querySelector(hf(n));if(r)return e.state.loading|=4,e.instance=r,Ha(r),r;o=xM(a),(n=sn.get(n))&&fx(o,n),r=(t.ownerDocument||t).createElement("link"),Ha(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ja(r,"link",o),e.state.loading|=4,ju(r,a.precedence,t),e.instance=r;case"script":return r=Sl(a.src),(n=t.querySelector(mf(r)))?(e.instance=n,Ha(n),n):(o=a,(n=sn.get(r))&&(o=aa({},a),ux(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ha(n),Ja(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(he(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,ju(o,a.precedence,t));return e.instance}function ju(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function fx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ux(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var $u=null;function gv(t,e,a){if($u===null){var o=new Map,n=$u=new Map;n.set(a,o)}else n=$u,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[lf]||r[Xa]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function p0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Tw(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function gM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function FM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Sv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=FM(e),t.suspenseyImages.push(e)),t=Ew.bind(t),e.decode().then(t,t))}function Aw(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=fl(o.href),r=e.querySelector(hf(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ef.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,Ha(r);return}r=e.ownerDocument||e,o=xM(o),(n=sn.get(n))&&fx(o,n),r=r.createElement("link"),Ha(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ja(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=ef.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var ed=0;function ww(t,e){return t.stylesheets&&t.count===0&&td(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&td(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&ed===0&&(ed=62500*YA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&td(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>ed?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function SM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)td(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function ef(){this.count--,SM(this)}function Ew(){this.imgCount--,SM(this)}var Ed=null;function td(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ed=new Map,e.forEach(Rw,t),Ed=null,ef.call(t))}function Rw(t,e){if(!(e.state.loading&4)){var a=Ed.get(t);if(a)var o=a.get(null);else{a=new Map,Ed.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=ef.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var ul={$$typeof:kn,Provider:null,Consumer:null,_currentValue:zs,_currentValue2:zs,_threadCount:0};function Lw(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lm(0),this.hiddenUpdates=Lm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function vM(t,e,a,o,n,r,s,i,l,c,u,h){return t=new Lw(t,e,a,s,l,c,u,h,i),e=1,r===!0&&(e|=24),r=Co(3,null,null,e),t.current=r,r.stateNode=t,e=R0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},P0(r),t}function yM(t){return t?(t=Hi,t):Hi}function MM(t,e,a,o,n,r){n=yM(n),o.context===null?o.context=n:o.pendingContext=n,o=Qr(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=jr(t,o,e),a!==null&&(_o(a,t,e),Lc(a,t,e))}function vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function dx(t,e){vv(t,e),(t=t.alternate)&&vv(t,e)}function CM(t){if(t.tag===13||t.tag===31){var e=ai(t,67108864);e!==null&&_o(e,t,67108864),dx(t,67108864)}}function yv(t){if(t.tag===13||t.tag===31){var e=zo();e=F0(e);var a=ai(t,e);a!==null&&_o(a,t,e),dx(t,e)}}var dl=!0;function Dw(t,e,a,o){var n=gt.T;gt.T=null;var r=Gt.p;try{Gt.p=2,px(t,e,a,o)}finally{Gt.p=r,gt.T=n}}function Pw(t,e,a,o){var n=gt.T;gt.T=null;var r=Gt.p;try{Gt.p=8,px(t,e,a,o)}finally{Gt.p=r,gt.T=n}}function px(t,e,a,o){if(dl){var n=h0(o);if(n===null)tI(t,e,o,Rd,a),Mv(t,o);else if(Uw(n,t,e,a,o))o.stopPropagation();else if(Mv(t,o),e&4&&-1<Bw.indexOf(t)){for(;n!==null;){var r=ml(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Bs(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-Oo(s);i.entanglements[1]|=l,s&=~l}Wn(r),!(Vt&6)&&(_d=ko()+500,pf(0,!1))}}break;case 31:case 13:i=ai(r,2),i!==null&&_o(i,r,2),Yd(),dx(r,2)}if(r=h0(o),r===null&&tI(t,e,o,Rd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else tI(t,e,o,null,a)}}function h0(t){return t=y0(t),hx(t)}var Rd=null;function hx(t){if(Rd=null,t=Ns(t),t!==null){var e=of(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=wv(e),t!==null)return t;t=null}else if(a===31){if(t=Ev(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Rd=t,null}function _M(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kb()){case Uv:return 2;case kv:return 8;case sd:case Jb:return 32;case Nv:return 268435456;default:return 32}default:return 32}}var m0=!1,as=null,os=null,ns=null,tf=new Map,af=new Map,Vr=[],Bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(t,e){switch(t){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":tf.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":af.delete(e.pointerId)}}function vc(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=ml(e),e!==null&&CM(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Uw(t,e,a,o,n){switch(e){case"focusin":return as=vc(as,t,e,a,o,n),!0;case"dragenter":return os=vc(os,t,e,a,o,n),!0;case"mouseover":return ns=vc(ns,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return tf.set(r,vc(tf.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,af.set(r,vc(af.get(r)||null,t,e,a,o,n)),!0}return!1}function bM(t){var e=Ns(t.target);if(e!==null){var a=of(e);if(a!==null){if(e=a.tag,e===13){if(e=wv(a),e!==null){t.blockedOn=e,KF(t.priority,function(){yv(a)});return}}else if(e===31){if(e=Ev(a),e!==null){t.blockedOn=e,KF(t.priority,function(){yv(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ad(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=h0(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gI=o,a.target.dispatchEvent(o),gI=null}else return e=ml(a),e!==null&&CM(e),t.blockedOn=a,!1;e.shift()}return!0}function Cv(t,e,a){ad(t)&&a.delete(e)}function kw(){m0=!1,as!==null&&ad(as)&&(as=null),os!==null&&ad(os)&&(os=null),ns!==null&&ad(ns)&&(ns=null),tf.forEach(Cv),af.forEach(Cv)}function Uu(t,e){t.blockedOn===e&&(t.blockedOn=null,m0||(m0=!0,Pa.unstable_scheduleCallback(Pa.unstable_NormalPriority,kw)))}var ku=null;function _v(t){ku!==t&&(ku=t,Pa.unstable_scheduleCallback(Pa.unstable_NormalPriority,function(){ku===t&&(ku=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if(hx(o||a)===null)continue;break}var r=ml(a);r!==null&&(t.splice(e,3),e-=3,PI(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function pl(t){function e(l){return Uu(l,t)}as!==null&&Uu(as,t),os!==null&&Uu(os,t),ns!==null&&Uu(ns,t),tf.forEach(e),af.forEach(e);for(var a=0;a<Vr.length;a++){var o=Vr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)bM(a),a.blockedOn===null&&Vr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[To]||null;if(typeof r=="function")s||_v(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[To]||null)i=s.formAction;else if(hx(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),_v(a)}}}function TM(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function mx(t){this._internalRoot=t}Jd.prototype.render=mx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));var a=e.current,o=zo();MM(a,o,t,e,null,null)};Jd.prototype.unmount=mx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;MM(t.current,2,null,t,null,null),Yd(),e[hl]=null}};function Jd(t){this._internalRoot=t}Jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=qv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Vr.length&&e!==0&&e<Vr[a].priority;a++);Vr.splice(a,0,t),a===0&&bM(t)}};var bv=Tv.version;if(bv!=="19.3.0")throw Error(he(527,bv,"19.3.0"));Gt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Nb(e),t=t!==null?Rv(t):null,t=t===null?null:t.stateNode,t};var Nw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:gt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(yc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!yc.isDisabled&&yc.supportsFiber))try{nf=yc.inject(Nw),No=yc}catch{}var yc;Qd.createRoot=function(t,e){if(!Av(t))throw Error(he(299));var a=!1,o="",n=i1,r=l1,s=c1;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=vM(t,1,!1,null,null,a,o,null,n,r,s,TM),t[hl]=e.current,sx(t),new mx(e)};Qd.hydrateRoot=function(t,e,a){if(!Av(t))throw Error(he(299));var o=!1,n="",r=i1,s=l1,i=c1,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=vM(t,1,!0,e,a??null,o,n,l,r,s,i,TM),e.context=yM(null),a=e.current,o=zo(),o=F0(o),n=Qr(o),n.callback=null,jr(a,n,o),a=o,e.current.lanes=a,sf(e,a),Wn(e),t[hl]=e.current,sx(t),new Jd(e)};Qd.version="19.3.0"});var RM=Pr((gB,EM)=>{"use strict";mt();function wM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wM)}catch(t){console.error(t)}}wM(),EM.exports=AM()});mt();var Si=hn(Ro()),vi=hn(RM());mt();var Fi=hn(Ro());mt();mt();var oh="186";var iC=0,eg=1,lC=2;var Wf=1,cC=2,ec=3,bs=0,go=1,Zo=2,jn=0,tc=1,tg=2,ag=3,og=4,fC=5;var hi=100,uC=101,dC=102,pC=103,hC=104,mC=200,IC=201,xC=202,gC=203,ng=204,rg=205,FC=206,SC=207,vC=208,yC=209,MC=210,CC=211,_C=212,bC=213,TC=214,vp=0,yp=1,Mp=2,Bl=3,Cp=4,_p=5,bp=6,Tp=7,sg=0,AC=1,wC=2,bn=0,ig=1,lg=2,cg=3,fg=4,ug=5,dg=6,Xf=7;var pg=300,Ts=301,mi=302,nh=303,rh=304,Yf=306,Kn=1e3,cn=1001,Ap=1002,qa=1003,EC=1004;var Zf=1005;var Ba=1006,sh=1007;var $n=1008;var Eo=1009,hg=1010,mg=1011,ac=1012,ih=1013,Tn=1014,An=1015,wn=1016,lh=1017,ch=1018,oc=1020,Ig=35902,xg=35899,gg=1021,Fg=1022,fn=1023,Jn=1026,As=1027,Sg=1028,fh=1029,ws=1030,uh=1031;var dh=1033,Kf=33776,Jf=33777,Qf=33778,jf=33779,ph=35840,hh=35841,mh=35842,Ih=35843,xh=36196,gh=37492,Fh=37496,Sh=37488,vh=37489,$f=37490,yh=37491,Mh=37808,Ch=37809,_h=37810,bh=37811,Th=37812,Ah=37813,wh=37814,Eh=37815,Rh=37816,Lh=37817,Dh=37818,Ph=37819,Bh=37820,Uh=37821,kh=36492,Nh=36494,Oh=36495,zh=36283,Hh=36284,eu=36285,Vh=36286;var Cf=2300,wp=2301,Fp=2302,Vx=2303,Gx=2400,qx=2401,Wx=2402;var RC=3200;var Gh=0,LC=1,wr="",ja="srgb",_f="srgb-linear",bf="linear",Wt="srgb";var Sp=7680;var DC=519,PC=512,BC=513,UC=514,qh=515,kC=516,NC=517,Wh=518,OC=519,zC=35044;var vg="300 es",_n=2e3,Ul=2001;function Ow(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Tf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HC(){let t=Tf("canvas");return t.style.display="block",t}var LM={},kl=null;function yg(...t){let e="THREE."+t.shift();kl?kl("log",e,...t):console.log(e,...t)}function VC(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function xt(...t){t=VC(t);let e="THREE."+t.shift();if(kl)kl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function It(...t){t=VC(t);let e="THREE."+t.shift();if(kl)kl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function li(...t){let e=t.join(" ");e in LM||(LM[e]=!0,xt(...t))}function GC(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var qC={[vp]:yp,[Mp]:bp,[Cp]:Tp,[Bl]:_p,[yp]:vp,[bp]:Mp,[Tp]:Cp,[_p]:Bl},Qn=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},ao=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ix=Math.PI/180,Ep=180/Math.PI;function nc(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(ao[t&255]+ao[t>>8&255]+ao[t>>16&255]+ao[t>>24&255]+"-"+ao[e&255]+ao[e>>8&255]+"-"+ao[e>>16&15|64]+ao[e>>24&255]+"-"+ao[a&63|128]+ao[a>>8&255]+"-"+ao[a>>16&255]+ao[a>>24&255]+ao[o&255]+ao[o>>8&255]+ao[o>>16&255]+ao[o>>24&255]).toLowerCase()}function Rt(t,e,a){return Math.max(e,Math.min(a,t))}function Hw(t,e){return(t%e+e)%e}function xx(t,e,a){return(1-a)*t+a*e}function If(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ne=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ho=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],u=o[n+2],h=o[n+3],f=r[s+0],d=r[s+1],m=r[s+2],S=r[s+3];if(h!==S||l!==f||c!==d||u!==m){let I=l*f+c*d+u*m+h*S;I<0&&(f=-f,d=-d,m=-m,S=-S,I=-I);let p=1-i;if(I<.9995){let g=Math.acos(I),y=Math.sin(g);p=Math.sin(p*g)/y,i=Math.sin(i*g)/y,l=l*p+f*i,c=c*p+d*i,u=u*p+m*i,h=h*p+S*i}else{l=l*p+f*i,c=c*p+d*i,u=u*p+m*i,h=h*p+S*i;let g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[a]=l,e[a+1]=c,e[a+2]=u,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],u=o[n+3],h=r[s],f=r[s+1],d=r[s+2],m=r[s+3];return e[a]=i*m+u*h+l*d-c*f,e[a+1]=l*m+u*f+c*h-i*d,e[a+2]=c*m+u*d+i*f-l*h,e[a+3]=u*m-i*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),u=i(n/2),h=i(r/2),f=l(o/2),d=l(n/2),m=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],u=a[6],h=a[10],f=o+i+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,u=a._w;return this._x=o*u+s*i+n*c-r*l,this._y=n*u+s*l+r*i-o*c,this._z=r*u+s*c+o*l-n*i,this._w=s*u-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),u=Math.sin(c);l=Math.sin(l*c)/u,a=Math.sin(a*c)/u,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(DM.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(DM.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),u=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*u,this.y=o+l*u+i*c-r*h,this.z=n+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return gx.copy(this).projectOnVector(e),this.sub(gx)}reflect(e){return this.sub(gx.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gx=new z,DM=new ho,Ct=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=i,u[3]=a,u[4]=r,u[5]=l,u[6]=o,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],u=o[4],h=o[7],f=o[2],d=o[5],m=o[8],S=n[0],I=n[3],p=n[6],g=n[1],y=n[4],x=n[7],C=n[2],b=n[5],T=n[8];return r[0]=s*S+i*g+l*C,r[3]=s*I+i*y+l*b,r[6]=s*p+i*x+l*T,r[1]=c*S+u*g+h*C,r[4]=c*I+u*y+h*b,r[7]=c*p+u*x+h*T,r[2]=f*S+d*g+m*C,r[5]=f*I+d*y+m*b,r[8]=f*p+d*x+m*T,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return a*s*u-a*i*c-o*r*u+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=u*s-i*c,f=i*l-u*r,d=c*r-s*l,m=a*h+o*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return e[0]=h*S,e[1]=(n*c-u*o)*S,e[2]=(i*o-n*s)*S,e[3]=f*S,e[4]=(u*a-n*l)*S,e[5]=(n*r-i*a)*S,e[6]=d*S,e[7]=(o*l-c*a)*S,e[8]=(s*a-o*r)*S,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fx.makeScale(e,a)),this}rotate(e){return li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fx.makeRotation(-e)),this}translate(e,a){return li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fx=new Ct,PM=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),BM=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vw(){let t={enabled:!0,workingColorSpace:_f,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Wt&&(n.r=Tr(n.r),n.g=Tr(n.g),n.b=Tr(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Wt&&(n.r=Pl(n.r),n.g=Pl(n.g),n.b=Pl(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wr?bf:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[_f]:{primaries:e,whitePoint:o,transfer:bf,toXYZ:PM,fromXYZ:BM,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ja},outputColorSpaceConfig:{drawingBufferColorSpace:ja}},[ja]:{primaries:e,whitePoint:o,transfer:Wt,toXYZ:PM,fromXYZ:BM,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ja}}}),t}var kt=Vw();function Tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var vl,Rp=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{vl===void 0&&(vl=Tf("canvas")),vl.width=e.width,vl.height=e.height;let n=vl.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=vl}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=Tf("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Tr(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(Tr(a[o]/255)*255):a[o]=Tr(a[o]);return{data:a,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gw=0,Nl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=nc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push(Sx(n[s].image)):r.push(Sx(n[s]))}else r=Sx(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function Sx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Rp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}var qw=0,vx=new z,mo=class t extends Qn{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=cn,n=cn,r=Ba,s=$n,i=fn,l=Eo,c=t.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=nc(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vx).x}get height(){return this.source.getSize(vx).y}get depth(){return this.source.getSize(vx).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){xt(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){xt(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mo.DEFAULT_IMAGE=null;mo.DEFAULT_MAPPING=pg;mo.DEFAULT_ANISOTROPY=1;var da=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],S=l[2],I=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(m-I)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(m+I)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(c+1)/2,x=(d+1)/2,C=(p+1)/2,b=(u+f)/4,T=(h+S)/4,v=(m+I)/4;return y>x&&y>C?y<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(y),n=b/o,r=T/o):x>C?x<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),o=b/n,r=v/n):C<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),o=T/r,n=v/r),this.set(o,n,r,a),this}let g=Math.sqrt((I-m)*(I-m)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(I-m)/g,this.y=(h-S)/g,this.z=(f-u)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this.w=Rt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this.w=Rt(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lp=class extends Qn{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ba,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new da(0,0,e,a),this.scissorTest=!1,this.viewport=new da(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new mo(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Ba,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new Nl(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class extends Lp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},Af=class extends mo{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=qa,this.minFilter=qa,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dp=class extends mo{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=qa,this.minFilter=qa,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oa=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,u,h,f,d,m,S,I){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,u,h,f,d,m,S,I)}set(e,a,o,n,r,s,i,l,c,u,h,f,d,m,S,I){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=S,p[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/yl.setFromMatrixColumn(e,0).length(),r=1/yl.setFromMatrixColumn(e,1).length(),s=1/yl.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*u,d=s*h,m=i*u,S=i*h;a[0]=l*u,a[4]=-l*h,a[8]=c,a[1]=d+m*c,a[5]=f-S*c,a[9]=-i*l,a[2]=S-f*c,a[6]=m+d*c,a[10]=s*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,S=c*h;a[0]=f+S*i,a[4]=m*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*u,a[9]=-i,a[2]=d*i-m,a[6]=S+f*i,a[10]=s*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,S=c*h;a[0]=f-S*i,a[4]=-s*h,a[8]=m+d*i,a[1]=d+m*i,a[5]=s*u,a[9]=S-f*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let f=s*u,d=s*h,m=i*u,S=i*h;a[0]=l*u,a[4]=m*c-d,a[8]=f*c+S,a[1]=l*h,a[5]=S*c+f,a[9]=d*c-m,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let f=s*l,d=s*c,m=i*l,S=i*c;a[0]=l*u,a[4]=S-f*h,a[8]=m*h+d,a[1]=h,a[5]=s*u,a[9]=-i*u,a[2]=-c*u,a[6]=d*h+m,a[10]=f-S*h}else if(e.order==="XZY"){let f=s*l,d=s*c,m=i*l,S=i*c;a[0]=l*u,a[4]=-h,a[8]=c*u,a[1]=f*h+S,a[5]=s*u,a[9]=d*h-m,a[2]=m*h-d,a[6]=i*u,a[10]=S*h+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ww,e,Xw)}lookAt(e,a,o){let n=this.elements;return Go.subVectors(e,a),Go.lengthSq()===0&&(Go.z=1),Go.normalize(),ds.crossVectors(o,Go),ds.lengthSq()===0&&(Math.abs(o.z)===1?Go.x+=1e-4:Go.z+=1e-4,Go.normalize(),ds.crossVectors(o,Go)),ds.normalize(),jd.crossVectors(Go,ds),n[0]=ds.x,n[4]=jd.x,n[8]=Go.x,n[1]=ds.y,n[5]=jd.y,n[9]=Go.y,n[2]=ds.z,n[6]=jd.z,n[10]=Go.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],u=o[1],h=o[5],f=o[9],d=o[13],m=o[2],S=o[6],I=o[10],p=o[14],g=o[3],y=o[7],x=o[11],C=o[15],b=n[0],T=n[4],v=n[8],A=n[12],w=n[1],D=n[5],Y=n[9],V=n[13],N=n[2],k=n[6],ae=n[10],J=n[14],le=n[3],W=n[7],K=n[11],$=n[15];return r[0]=s*b+i*w+l*N+c*le,r[4]=s*T+i*D+l*k+c*W,r[8]=s*v+i*Y+l*ae+c*K,r[12]=s*A+i*V+l*J+c*$,r[1]=u*b+h*w+f*N+d*le,r[5]=u*T+h*D+f*k+d*W,r[9]=u*v+h*Y+f*ae+d*K,r[13]=u*A+h*V+f*J+d*$,r[2]=m*b+S*w+I*N+p*le,r[6]=m*T+S*D+I*k+p*W,r[10]=m*v+S*Y+I*ae+p*K,r[14]=m*A+S*V+I*J+p*$,r[3]=g*b+y*w+x*N+C*le,r[7]=g*T+y*D+x*k+C*W,r[11]=g*v+y*Y+x*ae+C*K,r[15]=g*A+y*V+x*J+C*$,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],S=e[7],I=e[11],p=e[15],g=l*d-c*f,y=i*d-c*h,x=i*f-l*h,C=s*d-c*u,b=s*f-l*u,T=s*h-i*u;return a*(S*g-I*y+p*x)-o*(m*g-I*C+p*b)+n*(m*y-S*C+p*T)-r*(m*x-S*b+I*T)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],u=e[10];return a*(s*u-i*c)-o*(r*u-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],S=e[13],I=e[14],p=e[15],g=a*i-o*s,y=a*l-n*s,x=a*c-r*s,C=o*l-n*i,b=o*c-r*i,T=n*c-r*l,v=u*S-h*m,A=u*I-f*m,w=u*p-d*m,D=h*I-f*S,Y=h*p-d*S,V=f*p-d*I,N=g*V-y*Y+x*D+C*w-b*A+T*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(i*V-l*Y+c*D)*k,e[1]=(n*Y-o*V-r*D)*k,e[2]=(S*T-I*b+p*C)*k,e[3]=(f*b-h*T-d*C)*k,e[4]=(l*w-s*V-c*A)*k,e[5]=(a*V-n*w+r*A)*k,e[6]=(I*x-m*T-p*y)*k,e[7]=(u*T-f*x+d*y)*k,e[8]=(s*Y-i*w+c*v)*k,e[9]=(o*w-a*Y-r*v)*k,e[10]=(m*b-S*x+p*g)*k,e[11]=(h*x-u*b-d*g)*k,e[12]=(i*A-s*D-l*v)*k,e[13]=(a*D-o*A+n*v)*k,e[14]=(S*y-m*C-I*g)*k,e[15]=(u*C-h*y+f*g)*k,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,u=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,u*i+o,u*l-n*s,0,c*l-n*i,u*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,u=s+s,h=i+i,f=r*c,d=r*u,m=r*h,S=s*u,I=s*h,p=i*h,g=l*c,y=l*u,x=l*h,C=o.x,b=o.y,T=o.z;return n[0]=(1-(S+p))*C,n[1]=(d+x)*C,n[2]=(m-y)*C,n[3]=0,n[4]=(d-x)*b,n[5]=(1-(f+p))*b,n[6]=(I+g)*b,n[7]=0,n[8]=(m+y)*T,n[9]=(I-g)*T,n[10]=(1-(f+S))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=yl.set(n[0],n[1],n[2]).length(),i=yl.set(n[4],n[5],n[6]).length(),l=yl.set(n[8],n[9],n[10]).length();r<0&&(s=-s),vn.copy(this);let c=1/s,u=1/i,h=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,a.setFromRotationMatrix(vn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=_n,l=!1){let c=this.elements,u=2*r/(a-e),h=2*r/(o-n),f=(a+e)/(a-e),d=(o+n)/(o-n),m,S;if(l)m=r/(s-r),S=s*r/(s-r);else if(i===_n)m=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(i===Ul)m=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=_n,l=!1){let c=this.elements,u=2/(a-e),h=2/(o-n),f=-(a+e)/(a-e),d=-(o+n)/(o-n),m,S;if(l)m=1/(s-r),S=s/(s-r);else if(i===_n)m=-2/(s-r),S=-(s+r)/(s-r);else if(i===Ul)m=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},yl=new z,vn=new oa,Ww=new z(0,0,0),Xw=new z(1,1,1),ds=new z,jd=new z,Go=new z,UM=new oa,kM=new ho,Ar=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(Rt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return UM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(UM,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return kM.setFromEuler(this),this.setFromQuaternion(kM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ar.DEFAULT_ORDER="XYZ";var Ol=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yw=0,NM=new z,Ml=new ho,yr=new oa,$d=new z,xf=new z,Zw=new z,Kw=new ho,OM=new z(1,0,0),zM=new z(0,1,0),HM=new z(0,0,1),VM={type:"added"},Jw={type:"removed"},Cl={type:"childadded",child:null},yx={type:"childremoved",child:null},Io=class t extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,a=new Ar,o=new ho,n=new z(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new oa},normalMatrix:{value:new Ct}}),this.matrix=new oa,this.matrixWorld=new oa,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Ml.setFromAxisAngle(e,a),this.quaternion.multiply(Ml),this}rotateOnWorldAxis(e,a){return Ml.setFromAxisAngle(e,a),this.quaternion.premultiply(Ml),this}rotateX(e){return this.rotateOnAxis(OM,e)}rotateY(e){return this.rotateOnAxis(zM,e)}rotateZ(e){return this.rotateOnAxis(HM,e)}translateOnAxis(e,a){return NM.copy(e).applyQuaternion(this.quaternion),this.position.add(NM.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(OM,e)}translateY(e){return this.translateOnAxis(zM,e)}translateZ(e){return this.translateOnAxis(HM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?$d.copy(e):$d.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),xf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(xf,$d,this.up):yr.lookAt($d,xf,this.up),this.quaternion.setFromRotationMatrix(yr),n&&(yr.extractRotation(n.matrixWorld),Ml.setFromRotationMatrix(yr),this.quaternion.premultiply(Ml.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(VM),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(Jw),yx.child=e,this.dispatchEvent(yx),yx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(VM),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xf,e,Zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xf,Kw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),m=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),f.length>0&&(o.skeletons=f),d.length>0&&(o.animations=d),m.length>0&&(o.nodes=m)}return o.object=n,o;function s(i){let l=[];for(let c in i){let u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Io.DEFAULT_UP=new z(0,1,0);Io.DEFAULT_MATRIX_AUTO_UPDATE=!0;Io.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=class extends Io{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qw={type:"move"},zl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let S of e.hand.values()){let I=a.getJointPose(S,o),p=this._getHandJoint(c,S);I!==null&&(p.matrix.fromArray(I.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=I.radius),p.visible=I!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Qw)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Yn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},WC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},ep={h:0,s:0,l:0};function Mx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var bt=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ja){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=kt.workingColorSpace){return this.r=e,this.g=a,this.b=o,kt.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=kt.workingColorSpace){if(e=Hw(e,1),a=Rt(a,0,1),o=Rt(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=Mx(s,r,e+1/3),this.g=Mx(s,r,e),this.b=Mx(s,r,e-1/3)}return kt.colorSpaceToWorking(this,n),this}setStyle(e,a=ja){function o(r){r!==void 0&&parseFloat(r)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:xt("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ja){let o=WC[e.toLowerCase()];return o!==void 0?this.setHex(o,a):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ja){return kt.workingToColorSpace(oo.copy(this),e),Math.round(Rt(oo.r*255,0,255))*65536+Math.round(Rt(oo.g*255,0,255))*256+Math.round(Rt(oo.b*255,0,255))}getHexString(e=ja){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=kt.workingColorSpace){kt.workingToColorSpace(oo.copy(this),a);let o=oo.r,n=oo.g,r=oo.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,u=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=u<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,a=kt.workingColorSpace){return kt.workingToColorSpace(oo.copy(this),a),e.r=oo.r,e.g=oo.g,e.b=oo.b,e}getStyle(e=ja){kt.workingToColorSpace(oo.copy(this),e);let a=oo.r,o=oo.g,n=oo.b;return e!==ja?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+a,ps.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL(ps),e.getHSL(ep);let o=xx(ps.h,ep.h,a),n=xx(ps.s,ep.s,a),r=xx(ps.l,ep.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oo=new bt;bt.NAMES=WC;var Hl=class extends Io{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},yn=new z,Mr=new z,Cx=new z,Cr=new z,_l=new z,bl=new z,GM=new z,_x=new z,bx=new z,Tx=new z,Ax=new da,wx=new da,Ex=new da,xs=class t{constructor(e=new z,a=new z,o=new z){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),yn.subVectors(e,a),n.cross(yn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){yn.subVectors(n,a),Mr.subVectors(o,a),Cx.subVectors(e,a);let s=yn.dot(yn),i=yn.dot(Mr),l=yn.dot(Cx),c=Mr.dot(Mr),u=Mr.dot(Cx),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-i*u)*f,m=(s*u-i*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cr.x),l.addScaledVector(s,Cr.y),l.addScaledVector(i,Cr.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return Ax.setScalar(0),wx.setScalar(0),Ex.setScalar(0),Ax.fromBufferAttribute(e,a),wx.fromBufferAttribute(e,o),Ex.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Ax,r.x),s.addScaledVector(wx,r.y),s.addScaledVector(Ex,r.z),s}static isFrontFacing(e,a,o,n){return yn.subVectors(o,a),Mr.subVectors(e,a),yn.cross(Mr).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),yn.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;_l.subVectors(n,o),bl.subVectors(r,o),_x.subVectors(e,o);let l=_l.dot(_x),c=bl.dot(_x);if(l<=0&&c<=0)return a.copy(o);bx.subVectors(e,n);let u=_l.dot(bx),h=bl.dot(bx);if(u>=0&&h<=u)return a.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),a.copy(o).addScaledVector(_l,s);Tx.subVectors(e,r);let d=_l.dot(Tx),m=bl.dot(Tx);if(m>=0&&d<=m)return a.copy(r);let S=d*c-l*m;if(S<=0&&c>=0&&m<=0)return i=c/(c-m),a.copy(o).addScaledVector(bl,i);let I=u*m-d*h;if(I<=0&&h-u>=0&&d-m>=0)return GM.subVectors(r,n),i=(h-u)/(h-u+(d-m)),a.copy(n).addScaledVector(GM,i);let p=1/(I+S+f);return s=S*p,i=f*p,a.copy(o).addScaledVector(_l,s).addScaledVector(bl,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gs=class{constructor(e=new z(1/0,1/0,1/0),a=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(Mn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(Mn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=Mn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,Mn):Mn.fromBufferAttribute(r,s),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tp.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),tp.copy(o.boundingBox)),tp.applyMatrix4(e.matrixWorld),this.union(tp)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gf),ap.subVectors(this.max,gf),Tl.subVectors(e.a,gf),Al.subVectors(e.b,gf),wl.subVectors(e.c,gf),hs.subVectors(Al,Tl),ms.subVectors(wl,Al),ni.subVectors(Tl,wl);let a=[0,-hs.z,hs.y,0,-ms.z,ms.y,0,-ni.z,ni.y,hs.z,0,-hs.x,ms.z,0,-ms.x,ni.z,0,-ni.x,-hs.y,hs.x,0,-ms.y,ms.x,0,-ni.y,ni.x,0];return!Rx(a,Tl,Al,wl,ap)||(a=[1,0,0,0,1,0,0,0,1],!Rx(a,Tl,Al,wl,ap))?!1:(op.crossVectors(hs,ms),a=[op.x,op.y,op.z],Rx(a,Tl,Al,wl,ap))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_r=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,tp=new gs,Tl=new z,Al=new z,wl=new z,hs=new z,ms=new z,ni=new z,gf=new z,ap=new z,op=new z,ri=new z;function Rx(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){ri.fromArray(t,r);let i=n.x*Math.abs(ri.x)+n.y*Math.abs(ri.y)+n.z*Math.abs(ri.z),l=e.dot(ri),c=a.dot(ri),u=o.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}var Ta=new z,np=new Ne,jw=0,ro=class extends Qn{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jw++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=zC,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)np.fromBufferAttribute(this,a),np.applyMatrix3(e),this.setXY(a,np.x,np.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)Ta.fromBufferAttribute(this,a),Ta.applyMatrix3(e),this.setXYZ(a,Ta.x,Ta.y,Ta.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)Ta.fromBufferAttribute(this,a),Ta.applyMatrix4(e),this.setXYZ(a,Ta.x,Ta.y,Ta.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)Ta.fromBufferAttribute(this,a),Ta.applyNormalMatrix(e),this.setXYZ(a,Ta.x,Ta.y,Ta.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)Ta.fromBufferAttribute(this,a),Ta.transformDirection(e),this.setXYZ(a,Ta.x,Ta.y,Ta.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=If(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=Ao(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=If(a,this.array)),a}setX(e,a){return this.normalized&&(a=Ao(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=If(a,this.array)),a}setY(e,a){return this.normalized&&(a=Ao(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=If(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Ao(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=If(a,this.array)),a}setW(e,a){return this.normalized&&(a=Ao(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=Ao(a,this.array),o=Ao(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=Ao(a,this.array),o=Ao(o,this.array),n=Ao(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=Ao(a,this.array),o=Ao(o,this.array),n=Ao(n,this.array),r=Ao(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var wf=class extends ro{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var Ef=class extends ro{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var Aa=class extends ro{constructor(e,a,o){super(new Float32Array(e),a,o)}},$w=new gs,Ff=new z,Lx=new z,Vl=class{constructor(e=new z,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):$w.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ff.subVectors(e,this.center);let a=Ff.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(Ff,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ff.copy(e.center).add(Lx)),this.expandByPoint(Ff.copy(e.center).sub(Lx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},e2=0,ln=new oa,Dx=new Io,El=new z,qo=new gs,Sf=new gs,Ga=new z,xo=class t extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ow(e)?Ef:wf)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new Ct().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,a,o){return ln.makeTranslation(e,a,o),this.applyMatrix4(ln),this}scale(e,a,o){return ln.makeScale(e,a,o),this.applyMatrix4(ln),this}lookAt(e){return Dx.lookAt(e),Dx.updateMatrix(),this.applyMatrix4(Dx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(El).negate(),this.translate(El.x,El.y,El.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Aa(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];qo.setFromBufferAttribute(r),this.morphTargetsRelative?(Ga.addVectors(this.boundingBox.min,qo.min),this.boundingBox.expandByPoint(Ga),Ga.addVectors(this.boundingBox.max,qo.max),this.boundingBox.expandByPoint(Ga)):(this.boundingBox.expandByPoint(qo.min),this.boundingBox.expandByPoint(qo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let o=this.boundingSphere.center;if(qo.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];Sf.setFromBufferAttribute(i),this.morphTargetsRelative?(Ga.addVectors(qo.min,Sf.min),qo.expandByPoint(Ga),Ga.addVectors(qo.max,Sf.max),qo.expandByPoint(Ga)):(qo.expandByPoint(Sf.min),qo.expandByPoint(Sf.max))}qo.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Ga.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Ga));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)Ga.fromBufferAttribute(i,c),l&&(El.fromBufferAttribute(e,c),Ga.add(El)),n=Math.max(n,o.distanceToSquared(Ga))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new ro(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let v=0;v<o.count;v++)i[v]=new z,l[v]=new z;let c=new z,u=new z,h=new z,f=new Ne,d=new Ne,m=new Ne,S=new z,I=new z;function p(v,A,w){c.fromBufferAttribute(o,v),u.fromBufferAttribute(o,A),h.fromBufferAttribute(o,w),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(S.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),I.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),i[v].add(S),i[A].add(S),i[w].add(S),l[v].add(I),l[A].add(I),l[w].add(I))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let v=0,A=g.length;v<A;++v){let w=g[v],D=w.start,Y=w.count;for(let V=D,N=D+Y;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new z,x=new z,C=new z,b=new z;function T(v){C.fromBufferAttribute(n,v),b.copy(C);let A=i[v];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(b,A);let D=x.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,D)}for(let v=0,A=g.length;v<A;++v){let w=g[v],D=w.start,Y=w.count;for(let V=D,N=D+Y;V<N;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new ro(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let f=0,d=o.count;f<d;f++)o.setXYZ(f,0,0,0);let n=new z,r=new z,s=new z,i=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),S=e.getX(f+1),I=e.getX(f+2);n.fromBufferAttribute(a,m),r.fromBufferAttribute(a,S),s.fromBufferAttribute(a,I),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),i.fromBufferAttribute(o,m),l.fromBufferAttribute(o,S),c.fromBufferAttribute(o,I),i.add(u),l.add(u),c.add(u),o.setXYZ(m,i.x,i.y,i.z),o.setXYZ(S,l.x,l.y,l.z),o.setXYZ(I,c.x,c.y,c.z)}else for(let f=0,d=a.count;f<d;f+=3)n.fromBufferAttribute(a,f+0),r.fromBufferAttribute(a,f+1),s.fromBufferAttribute(a,f+2),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Ga.fromBufferAttribute(e,a),Ga.normalize(),e.setXYZ(a,Ga.x,Ga.y,Ga.z)}toNonIndexed(){function e(i,l){let c=i.array,u=i.itemSize,h=i.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let S=0,I=l.length;S<I;S++){i.isInterleavedBufferAttribute?d=l[S]*i.data.stride+i.offset:d=l[S]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new ro(f,u,h)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(a))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(a));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Px=new z,t2=new z,a2=new Ct,Cn=class{constructor(e=new z(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=Px.subVectors(o,a).cross(t2.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(Px),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||a2.getNormalMatrix(e),n=this.coplanarPoint(Px).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},o2=0,Fs=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=tc,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=rg,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=DC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sp,this.stencilZFail=Sp,this.stencilZPass=Sp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){xt(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){xt(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new Cn().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new Ne().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var br=new z,Bx=new z,rp=new z,sp=new z,Rf=class{constructor(e=new z,a=new z(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=br.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,a),br.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){Bx.copy(e).add(a).multiplyScalar(.5),rp.copy(a).sub(e).normalize(),sp.copy(this.origin).sub(Bx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(rp),i=sp.dot(this.direction),l=-sp.dot(rp),c=sp.lengthSq(),u=Math.abs(1-s*s),h,f,d,m;if(u>0)if(h=s*l-i,f=s*i-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let S=1/u;h*=S,f*=S,d=h*(h+s*f+2*i)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-s*r+i)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+i)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Bx).addScaledVector(rp,f),d}intersectSphere(e,a){if(e.radius<0)return null;br.subVectors(e.center,this.origin);let o=br.dot(this.direction),n=br.dot(br)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(o=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(o=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(i=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,u=i.z,h=e.x-s.x,f=e.y-s.y,d=e.z-s.z,m=a.x-s.x,S=a.y-s.y,I=a.z-s.z,p=o.x-s.x,g=o.y-s.y,y=o.z-s.z,x=Math.abs(l),C=Math.abs(c),b=Math.abs(u),T,v,A,w,D,Y,V,N,k,ae,J,le;if(x>=C&&x>=b?(A=l,Y=h,k=m,le=p,l>=0?(T=c,v=u,w=f,D=d,V=S,N=I,ae=g,J=y):(T=u,v=c,w=d,D=f,V=I,N=S,ae=y,J=g)):C>=b?(A=c,Y=f,k=S,le=g,c>=0?(T=u,v=l,w=d,D=h,V=I,N=m,ae=y,J=p):(T=l,v=u,w=h,D=d,V=m,N=I,ae=p,J=y)):(A=u,Y=d,k=I,le=y,u>=0?(T=l,v=c,w=h,D=f,V=m,N=S,ae=p,J=g):(T=c,v=l,w=f,D=h,V=S,N=m,ae=g,J=p)),A===0)return null;let W=T/A,K=v/A,$=1/A,De=w-W*Y,be=D-K*Y,et=V-W*k,q=N-K*k,st=ae-W*le,ee=J-K*le,te=st*q-ee*et,Ce=De*ee-be*st,Ye=et*be-q*De;if(n){if(te<0||Ce<0||Ye<0)return null}else if((te<0||Ce<0||Ye<0)&&(te>0||Ce>0||Ye>0))return null;let ye=te+Ce+Ye;if(ye===0)return null;let Ge=$*(te*Y+Ce*k+Ye*le);return(ye>0?Ge<0:Ge>0)?null:this.at(Ge/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qM=new oa,si=new Rf,ip=new Vl,WM=new z,lp=new z,cp=new z,fp=new z,Ux=new z,up=new z,XM=new z,dp=new z,Ma=class extends Io{constructor(e=new xo,a=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){up.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=i[l],h=r[l];u!==0&&(Ux.fromBufferAttribute(h,e),s?up.addScaledVector(Ux,u):up.addScaledVector(Ux.sub(a),u))}a.add(up)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),ip.copy(o.boundingSphere),ip.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(ip.containsPoint(si.origin)===!1&&(si.intersectSphere(ip,WM)===null||si.origin.distanceToSquared(WM)>(e.far-e.near)**2))&&(qM.copy(r).invert(),si.copy(e.ray).applyMatrix4(qM),!(o.boundingBox!==null&&si.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,si)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let m=0,S=f.length;m<S;m++){let I=f[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(i.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,C=y;x<C;x+=3){let b=i.getX(x),T=i.getX(x+1),v=i.getX(x+2);n=pp(this,p,e,o,c,u,h,b,T,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),S=Math.min(i.count,d.start+d.count);for(let I=m,p=S;I<p;I+=3){let g=i.getX(I),y=i.getX(I+1),x=i.getX(I+2);n=pp(this,s,e,o,c,u,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,S=f.length;m<S;m++){let I=f[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(l.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,C=y;x<C;x+=3){let b=x,T=x+1,v=x+2;n=pp(this,p,e,o,c,u,h,b,T,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let I=m,p=S;I<p;I+=3){let g=I,y=I+1,x=I+2;n=pp(this,s,e,o,c,u,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}}};function n2(t,e,a,o,n,r,s,i){let l;if(e.side===go?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===bs,i),l===null)return null;dp.copy(i),dp.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(dp);return c<a.near||c>a.far?null:{distance:c,point:dp.clone(),object:t}}function pp(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,lp),t.getVertexPosition(l,cp),t.getVertexPosition(c,fp);let u=n2(t,e,a,o,lp,cp,fp,XM);if(u){let h=new z;xs.getBarycoord(XM,lp,cp,fp,h),n&&(u.uv=xs.getInterpolatedAttribute(n,i,l,c,h,new Ne)),r&&(u.uv1=xs.getInterpolatedAttribute(r,i,l,c,h,new Ne)),s&&(u.normal=xs.getInterpolatedAttribute(s,i,l,c,h,new z),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let f={a:i,b:l,c,normal:new z,materialIndex:0};xs.getNormal(lp,cp,fp,f.normal),u.face=f,u.barycoord=h}return u}var Gl=class extends mo{constructor(e=null,a=1,o=1,n,r,s,i,l,c=qa,u=qa,h,f){super(null,s,i,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=new Vl,r2=new Ne(.5,.5),hp=new z,ql=class{constructor(e=new Cn,a=new Cn,o=new Cn,n=new Cn,r=new Cn,s=new Cn){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=_n,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],S=r[9],I=r[10],p=r[11],g=r[12],y=r[13],x=r[14],C=r[15];if(n[0].setComponents(c-s,d-u,p-m,C-g).normalize(),n[1].setComponents(c+s,d+u,p+m,C+g).normalize(),n[2].setComponents(c+i,d+h,p+S,C+y).normalize(),n[3].setComponents(c-i,d-h,p-S,C-y).normalize(),o)n[4].setComponents(l,f,I,x).normalize(),n[5].setComponents(c-l,d-f,p-I,C-x).normalize();else if(n[4].setComponents(c-l,d-f,p-I,C-x).normalize(),a===_n)n[5].setComponents(c+l,d+f,p+I,C+x).normalize();else if(a===Ul)n[5].setComponents(l,f,I,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),ii.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let a=r2.distanceTo(e.center);return ii.radius=.7071067811865476+a,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if(hp.x=n.normal.x>0?e.max.x:e.min.x,hp.y=n.normal.y>0?e.max.y:e.min.y,hp.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(hp)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lf=class extends mo{constructor(e=[],a=Ts,o,n,r,s,i,l,c,u){super(e,a,o,n,r,s,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends mo{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ss=class extends mo{constructor(e,a,o=Tn,n,r,s,i=qa,l=qa,c,u=Jn,h=1){if(u!==Jn&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:h};super(f,n,r,s,i,l,u,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},Pp=class extends Ss{constructor(e,a=Tn,o=Ts,n,r,s=qa,i=qa,l,c=Jn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Df=class extends mo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wl=class t extends xo{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,o,a,e,s,r,0),m("z","y","x",1,-1,o,a,-e,s,r,1),m("x","z","y",1,1,e,o,a,n,s,2),m("x","z","y",1,-1,e,o,-a,n,s,3),m("x","y","z",1,-1,e,a,o,n,r,4),m("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new Aa(c,3)),this.setAttribute("normal",new Aa(u,3)),this.setAttribute("uv",new Aa(h,2));function m(S,I,p,g,y,x,C,b,T,v,A){let w=x/T,D=C/v,Y=x/2,V=C/2,N=b/2,k=T+1,ae=v+1,J=0,le=0,W=new z;for(let K=0;K<ae;K++){let $=K*D-V;for(let De=0;De<k;De++){let be=De*w-Y;W[S]=be*g,W[I]=$*y,W[p]=N,c.push(W.x,W.y,W.z),W[S]=0,W[I]=0,W[p]=b>0?1:-1,u.push(W.x,W.y,W.z),h.push(De/T),h.push(1-K/v),J+=1}}for(let K=0;K<v;K++)for(let $=0;$<T;$++){let De=f+$+k*K,be=f+$+k*(K+1),et=f+($+1)+k*(K+1),q=f+($+1)+k*K;l.push(De,be,q),l.push(be,et,q),le+=6}i.addGroup(d,le,A),d+=le,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let u=o[n],f=o[n+1]-u,d=(s-u)/f;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new Ne:new z);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new z,n=[],r=[],s=[],i=new z,l=new oa;for(let d=0;d<=e;d++){let m=d/e;n[d]=this.getTangentAt(m,new z)}r[0]=new z,s[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),f<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let m=Math.acos(Rt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,m))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xl=class extends Wo{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new Ne){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bp=class extends Xl{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Mg(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,u,h){let f=(s-r)/c-(i-r)/(c+u)+(i-s)/u,d=(i-s)/u-(l-s)/(u+h)+(l-i)/h;f*=u,d*=u,n(s,i,f,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var YM=new z,ZM=new z,kx=new Mg,Nx=new Mg,Ox=new Mg,Yl=class extends Wo{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new z){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,u;this.closed||i>0?c=n[(i-1)%r]:(ZM.subVectors(n[0],n[1]).add(n[0]),c=ZM);let h=n[i%r],f=n[(i+1)%r];if(this.closed||i+2<r?u=n[(i+2)%r]:(YM.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=YM),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),S=Math.pow(h.distanceToSquared(f),d),I=Math.pow(f.distanceToSquared(u),d);S<1e-4&&(S=1),m<1e-4&&(m=S),I<1e-4&&(I=S),kx.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,S,I),Nx.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,S,I),Ox.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,S,I)}else this.curveType==="catmullrom"&&(kx.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Nx.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ox.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return o.set(kx.calc(l),Nx.calc(l),Ox.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function KM(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function s2(t,e){let a=1-t;return a*a*e}function i2(t,e){return 2*(1-t)*t*e}function l2(t,e){return t*t*e}function yf(t,e,a,o){return s2(t,e)+i2(t,a)+l2(t,o)}function c2(t,e){let a=1-t;return a*a*a*e}function f2(t,e){let a=1-t;return 3*a*a*t*e}function u2(t,e){return 3*(1-t)*t*t*e}function d2(t,e){return t*t*t*e}function Mf(t,e,a,o,n){return c2(t,e)+f2(t,a)+u2(t,o)+d2(t,n)}var Pf=class extends Wo{constructor(e=new Ne,a=new Ne,o=new Ne,n=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new Ne){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(Mf(e,n.x,r.x,s.x,i.x),Mf(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Up=class extends Wo{constructor(e=new z,a=new z,o=new z,n=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new z){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(Mf(e,n.x,r.x,s.x,i.x),Mf(e,n.y,r.y,s.y,i.y),Mf(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bf=class extends Wo{constructor(e=new Ne,a=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Ne){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Ne){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kp=class extends Wo{constructor(e=new z,a=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new z){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new z){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uf=class extends Wo{constructor(e=new Ne,a=new Ne,o=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new Ne){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(yf(e,n.x,r.x,s.x),yf(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Np=class extends Wo{constructor(e=new z,a=new z,o=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new z){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(yf(e,n.x,r.x,s.x),yf(e,n.y,r.y,s.y),yf(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kf=class extends Wo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Ne){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(KM(i,l.x,c.x,u.x,h.x),KM(i,l.y,c.y,u.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new Ne().fromArray(n))}return this}},Xx=Object.freeze({__proto__:null,ArcCurve:Bp,CatmullRomCurve3:Yl,CubicBezierCurve:Pf,CubicBezierCurve3:Up,EllipseCurve:Xl,LineCurve:Bf,LineCurve3:kp,QuadraticBezierCurve:Uf,QuadraticBezierCurve3:Np,SplineCurve:kf}),Op=class extends Wo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xx[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let u=l[c];o&&o.equals(u)||(a.push(u),o=u)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new Xx[n.type]().fromJSON(n))}return this}},ui=class extends Op{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new Bf(this.currentPoint.clone(),new Ne(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new Uf(this.currentPoint.clone(),new Ne(e,a),new Ne(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new Pf(this.currentPoint.clone(),new Ne(e,a),new Ne(o,n),new Ne(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new kf(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,a+u,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new Xl(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vs=class extends ui{constructor(e){super(e),this.uuid=nc(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new ui().fromJSON(n))}return this}};function p2(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=XC(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=g2(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let u=i,h=l;for(let f=a;f<n;f+=a){let d=t[f],m=t[f+1];d<i&&(i=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-i,h-l),c=c!==0?32767/c:0}return Nf(r,s,a,i,l,c,0),s}function XC(t,e,a,o,n){let r;if(n===w2(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=JM(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=JM(s/o|0,t[s],t[s+1],r);return r&&Zl(r,r.next)&&(zf(r),r=r.next),r}function di(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(Zl(a,a.next)||Ia(a.prev,a,a.next)===0)){if(zf(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function Nf(t,e,a,o,n,r,s){if(!t)return;!s&&r&&M2(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?m2(t,o,n,r):h2(t)){e.push(l.i,t.i,c.i),zf(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=I2(di(t),e),Nf(t,e,a,o,n,r,2)):s===2&&x2(t,e,a,o,n,r):Nf(di(t),e,a,o,n,r,1);break}}}function h2(t){let e=t.prev,a=t,o=t.next;if(Ia(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,u=Math.min(n,r,s),h=Math.min(i,l,c),f=Math.max(n,r,s),d=Math.max(i,l,c),m=o.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&vf(n,i,r,l,s,c,m.x,m.y)&&Ia(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function m2(t,e,a,o){let n=t.prev,r=t,s=t.next;if(Ia(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,u=n.y,h=r.y,f=s.y,d=Math.min(i,l,c),m=Math.min(u,h,f),S=Math.max(i,l,c),I=Math.max(u,h,f),p=Yx(d,m,e,a,o),g=Yx(S,I,e,a,o),y=t.prevZ,x=t.nextZ;for(;y&&y.z>=p&&x&&x.z<=g;){if(y.x>=d&&y.x<=S&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&vf(i,u,l,h,c,f,y.x,y.y)&&Ia(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=S&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&vf(i,u,l,h,c,f,x.x,x.y)&&Ia(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=S&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&vf(i,u,l,h,c,f,y.x,y.y)&&Ia(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=g;){if(x.x>=d&&x.x<=S&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&vf(i,u,l,h,c,f,x.x,x.y)&&Ia(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function I2(t,e){let a=t;do{let o=a.prev,n=a.next.next;!Zl(o,n)&&ZC(o,a,a.next,n)&&Of(o,n)&&Of(n,o)&&(e.push(o.i,a.i,n.i),zf(a),zf(a.next),a=t=n),a=a.next}while(a!==t);return di(a)}function x2(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&b2(s,i)){let l=KC(s,i);s=di(s,s.next),l=di(l,l.next),Nf(s,e,a,o,n,r,0),Nf(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function g2(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=XC(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(_2(c))}n.sort(F2);for(let r=0;r<n.length;r++)a=S2(n[r],a);return a}function F2(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function S2(t,e){let a=v2(t,e);if(!a)return e;let o=KC(a,t);return di(o,o.next),di(a,a.next)}function v2(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(Zl(t,a))return a;do{if(Zl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,u=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&YC(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);Of(a,t)&&(h<u||h===u&&(a.x>s.x||a.x===s.x&&y2(s,a)))&&(s=a,u=h)}a=a.next}while(a!==i);return s}function y2(t,e){return Ia(t.prev,t,e.prev)<0&&Ia(e.next,t,t.next)<0}function M2(t,e,a,o){let n=t;do n.z===0&&(n.z=Yx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,C2(n)}function C2(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function Yx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _2(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function YC(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function vf(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&YC(t,e,a,o,n,r,s,i)}function b2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!T2(t,e)&&(Of(t,e)&&Of(e,t)&&A2(t,e)&&(Ia(t.prev,t,e.prev)||Ia(t,e.prev,e))||Zl(t,e)&&Ia(t.prev,t,t.next)>0&&Ia(e.prev,e,e.next)>0)}function Ia(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function Zl(t,e){return t.x===e.x&&t.y===e.y}function ZC(t,e,a,o){let n=Ip(Ia(t,e,a)),r=Ip(Ia(t,e,o)),s=Ip(Ia(a,o,t)),i=Ip(Ia(a,o,e));return!!(n!==r&&s!==i||n===0&&mp(t,a,e)||r===0&&mp(t,o,e)||s===0&&mp(a,t,o)||i===0&&mp(a,e,o))}function mp(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function Ip(t){return t>0?1:t<0?-1:0}function T2(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&ZC(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function Of(t,e){return Ia(t.prev,t,t.next)<0?Ia(t,e,t.next)>=0&&Ia(t,t.prev,e)>=0:Ia(t,e,t.prev)<0||Ia(t,t.next,e)<0}function A2(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function KC(t,e){let a=Zx(t.i,t.x,t.y),o=Zx(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function JM(t,e,a,o){let n=Zx(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function zf(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Zx(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w2(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var Kx=class{static triangulate(e,a,o=2){return p2(e,a,o)}},Zn=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];QM(e),jM(o,e);let s=e.length;a.forEach(QM);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,jM(o,a[l]);let i=Kx.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function QM(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function jM(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var Kl=class t extends xo{constructor(e=new vs([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new Aa(n,3)),this.setAttribute("uv",new Aa(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,u=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,f=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,m=a.bevelSize!==void 0?a.bevelSize:d-.1,S=a.bevelOffset!==void 0?a.bevelOffset:0,I=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,g=a.UVGenerator!==void 0?a.UVGenerator:E2,y,x=!1,C,b,T,v;if(p){y=p.getSpacedPoints(u),x=!0,f=!1;let oe=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,oe),b=new z,T=new z,v=new z}f||(I=0,d=0,m=0,S=0);let A=i.extractPoints(c),w=A.shape,D=A.holes;if(!Zn.isClockWise(w)){w=w.reverse();for(let oe=0,ue=D.length;oe<ue;oe++){let xe=D[oe];Zn.isClockWise(xe)&&(D[oe]=xe.reverse())}}function V(oe){let xe=10000000000000001e-36,ie=oe[0];for(let re=1;re<=oe.length;re++){let Oe=re%oe.length,qe=oe[Oe],He=qe.x-ie.x,Be=qe.y-ie.y,E=He*He+Be*Be,it=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(ie.x),Math.abs(ie.y)),at=xe*it*it;if(E<=at){oe.splice(Oe,1),re--;continue}ie=qe}}V(w),D.forEach(V);let N=D.length,k=w;for(let oe=0;oe<N;oe++){let ue=D[oe];w=w.concat(ue)}function ae(oe,ue,xe){return ue||It("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ue,xe)}let J=w.length;function le(oe,ue,xe){let ie,re,Oe,qe=oe.x-ue.x,He=oe.y-ue.y,Be=xe.x-oe.x,E=xe.y-oe.y,it=qe*qe+He*He,at=qe*E-He*Be;if(Math.abs(at)>Number.EPSILON){let _=Math.sqrt(it),F=Math.sqrt(Be*Be+E*E),P=ue.x-He/_,Z=ue.y+qe/_,se=xe.x-E/F,ve=xe.y+Be/F,Ie=((se-P)*E-(ve-Z)*Be)/(qe*E-He*Be);ie=P+qe*Ie-oe.x,re=Z+He*Ie-oe.y;let H=ie*ie+re*re;if(H<=2)return new Ne(ie,re);Oe=Math.sqrt(H/2)}else{let _=!1;qe>Number.EPSILON?Be>Number.EPSILON&&(_=!0):qe<-Number.EPSILON?Be<-Number.EPSILON&&(_=!0):Math.sign(He)===Math.sign(E)&&(_=!0),_?(ie=-He,re=qe,Oe=Math.sqrt(it)):(ie=qe,re=He,Oe=Math.sqrt(it/2))}return new Ne(ie/Oe,re/Oe)}let W=[];for(let oe=0,ue=k.length,xe=ue-1,ie=oe+1;oe<ue;oe++,xe++,ie++)xe===ue&&(xe=0),ie===ue&&(ie=0),W[oe]=le(k[oe],k[xe],k[ie]);let K=[],$,De=W.concat();for(let oe=0,ue=N;oe<ue;oe++){let xe=D[oe];$=[];for(let ie=0,re=xe.length,Oe=re-1,qe=ie+1;ie<re;ie++,Oe++,qe++)Oe===re&&(Oe=0),qe===re&&(qe=0),$[ie]=le(xe[ie],xe[Oe],xe[qe]);K.push($),De=De.concat($)}let be;if(I===0)be=Zn.triangulateShape(k,D);else{let oe=[],ue=[];for(let xe=0;xe<I;xe++){let ie=xe/I,re=d*Math.cos(ie*Math.PI/2),Oe=m*Math.sin(ie*Math.PI/2)+S;for(let qe=0,He=k.length;qe<He;qe++){let Be=ae(k[qe],W[qe],Oe);Ce(Be.x,Be.y,-re),ie===0&&oe.push(Be)}for(let qe=0,He=N;qe<He;qe++){let Be=D[qe];$=K[qe];let E=[];for(let it=0,at=Be.length;it<at;it++){let _=ae(Be[it],$[it],Oe);Ce(_.x,_.y,-re),ie===0&&E.push(_)}ie===0&&ue.push(E)}}be=Zn.triangulateShape(oe,ue)}let et=be.length,q=m+S;for(let oe=0;oe<J;oe++){let ue=f?ae(w[oe],De[oe],q):w[oe];x?(T.copy(C.normals[0]).multiplyScalar(ue.x),b.copy(C.binormals[0]).multiplyScalar(ue.y),v.copy(y[0]).add(T).add(b),Ce(v.x,v.y,v.z)):Ce(ue.x,ue.y,0)}for(let oe=1;oe<=u;oe++)for(let ue=0;ue<J;ue++){let xe=f?ae(w[ue],De[ue],q):w[ue];x?(T.copy(C.normals[oe]).multiplyScalar(xe.x),b.copy(C.binormals[oe]).multiplyScalar(xe.y),v.copy(y[oe]).add(T).add(b),Ce(v.x,v.y,v.z)):Ce(xe.x,xe.y,h/u*oe)}for(let oe=I-1;oe>=0;oe--){let ue=oe/I,xe=d*Math.cos(ue*Math.PI/2),ie=m*Math.sin(ue*Math.PI/2)+S;for(let re=0,Oe=k.length;re<Oe;re++){let qe=ae(k[re],W[re],ie);Ce(qe.x,qe.y,h+xe)}for(let re=0,Oe=D.length;re<Oe;re++){let qe=D[re];$=K[re];for(let He=0,Be=qe.length;He<Be;He++){let E=ae(qe[He],$[He],ie);x?Ce(E.x,E.y+y[u-1].y,y[u-1].x+xe):Ce(E.x,E.y,h+xe)}}}st(),ee();function st(){let oe=n.length/3;if(f){let ue=0,xe=J*ue;for(let ie=0;ie<et;ie++){let re=be[ie];Ye(re[2]+xe,re[1]+xe,re[0]+xe)}ue=u+I*2,xe=J*ue;for(let ie=0;ie<et;ie++){let re=be[ie];Ye(re[0]+xe,re[1]+xe,re[2]+xe)}}else{for(let ue=0;ue<et;ue++){let xe=be[ue];Ye(xe[2],xe[1],xe[0])}for(let ue=0;ue<et;ue++){let xe=be[ue];Ye(xe[0]+J*u,xe[1]+J*u,xe[2]+J*u)}}o.addGroup(oe,n.length/3-oe,0)}function ee(){let oe=n.length/3,ue=0;te(k,ue),ue+=k.length;for(let xe=0,ie=D.length;xe<ie;xe++){let re=D[xe];te(re,ue),ue+=re.length}o.addGroup(oe,n.length/3-oe,1)}function te(oe,ue){let xe=oe.length;for(;--xe>=0;){let ie=xe,re=xe-1;re<0&&(re=oe.length-1);for(let Oe=0,qe=u+I*2;Oe<qe;Oe++){let He=J*Oe,Be=J*(Oe+1),E=ue+ie+He,it=ue+re+He,at=ue+re+Be,_=ue+ie+Be;ye(E,it,at,_)}}}function Ce(oe,ue,xe){l.push(oe),l.push(ue),l.push(xe)}function Ye(oe,ue,xe){Ge(oe),Ge(ue),Ge(xe);let ie=n.length/3,re=g.generateTopUV(o,n,ie-3,ie-2,ie-1);tt(re[0]),tt(re[1]),tt(re[2])}function ye(oe,ue,xe,ie){Ge(oe),Ge(ue),Ge(ie),Ge(ue),Ge(xe),Ge(ie);let re=n.length/3,Oe=g.generateSideWallUV(o,n,re-6,re-3,re-2,re-1);tt(Oe[0]),tt(Oe[1]),tt(Oe[3]),tt(Oe[1]),tt(Oe[2]),tt(Oe[3])}function Ge(oe){n.push(l[oe*3+0]),n.push(l[oe*3+1]),n.push(l[oe*3+2])}function tt(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return R2(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Xx[n.type]().fromJSON(n)),new t(o,e.options)}},E2={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],u=e[n*3+1];return[new Ne(r,s),new Ne(i,l),new Ne(c,u)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],u=e[o*3+1],h=e[o*3+2],f=e[n*3],d=e[n*3+1],m=e[n*3+2],S=e[r*3],I=e[r*3+1],p=e[r*3+2];return Math.abs(i-u)<Math.abs(s-c)?[new Ne(s,1-l),new Ne(c,1-h),new Ne(f,1-m),new Ne(S,1-p)]:[new Ne(i,1-l),new Ne(u,1-h),new Ne(d,1-m),new Ne(I,1-p)]}};function R2(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var pi=class t extends xo{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,u=l+1,h=e/i,f=a/l,d=[],m=[],S=[],I=[];for(let p=0;p<u;p++){let g=p*f-s;for(let y=0;y<c;y++){let x=y*h-r;m.push(x,-g,0),S.push(0,0,1),I.push(y/i),I.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<i;g++){let y=g+c*p,x=g+c*(p+1),C=g+1+c*(p+1),b=g+1+c*p;d.push(y,x,b),d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new Aa(m,3)),this.setAttribute("normal",new Aa(S,3)),this.setAttribute("uv",new Aa(I,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hf=class t extends xo{constructor(e=new vs([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(i,l,u),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new Aa(n,3)),this.setAttribute("normal",new Aa(r,3)),this.setAttribute("uv",new Aa(s,2));function c(u){let h=n.length/3,f=u.extractPoints(a),d=f.shape,m=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let I=0,p=m.length;I<p;I++){let g=m[I];Zn.isClockWise(g)===!0&&(m[I]=g.reverse())}let S=Zn.triangulateShape(d,m);for(let I=0,p=m.length;I<p;I++){let g=m[I];d=d.concat(g)}for(let I=0,p=d.length;I<p;I++){let g=d[I];n.push(g.x,g.y,0),r.push(0,0,1),s.push(g.x,g.y)}for(let I=0,p=S.length;I<p;I++){let g=S[I],y=g[0]+h,x=g[1]+h,C=g[2]+h;o.push(y,x,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return L2(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function L2(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Jl=class t extends xo{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new z,d=new z,m=new z;for(let S=0;S<=o;S++){let I=s+S/o*i;for(let p=0;p<=n;p++){let g=p/n*r;d.x=(e+a*Math.cos(I))*Math.cos(g),d.y=(e+a*Math.cos(I))*Math.sin(g),d.z=a*Math.sin(I),c.push(d.x,d.y,d.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(p/n),h.push(S/o)}}for(let S=1;S<=o;S++)for(let I=1;I<=n;I++){let p=(n+1)*S+I-1,g=(n+1)*(S-1)+I-1,y=(n+1)*(S-1)+I,x=(n+1)*S+I;l.push(p,g,x),l.push(g,y,x)}this.setIndex(l),this.setAttribute("position",new Aa(c,3)),this.setAttribute("normal",new Aa(u,3)),this.setAttribute("uv",new Aa(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ii(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if($M(n))n.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if($M(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function so(t){let e={};for(let a=0;a<t.length;a++){let o=Ii(t[a]);for(let n in o)e[n]=o[n]}return e}function $M(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function D2(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function Cg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var JC={clone:Ii,merge:so},P2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xo=class extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P2,this.fragmentShader=B2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=D2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new bt().setHex(n.value);break;case"v2":this.uniforms[o].value=new Ne().fromArray(n.value);break;case"v3":this.uniforms[o].value=new z().fromArray(n.value);break;case"v4":this.uniforms[o].value=new da().fromArray(n.value);break;case"m3":this.uniforms[o].value=new Ct().fromArray(n.value);break;case"m4":this.uniforms[o].value=new oa().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zp=class extends Xo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ql=class extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ys=class extends Ql{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Hp=class extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vp=class extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function zx(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ms=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gp=class extends Ms{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gx,endingEnd:Gx}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case qx:r=e,i=2*a-o;break;case Wx:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case qx:s=e,l=2*o-a;break;case Wx:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,u=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(o-a)/(n-a),S=m*m,I=S*m,p=-f*I+2*f*S-f*m,g=(1+f)*I+(-1.5-2*f)*S+(-.5+f)*m+1,y=(-1-d)*I+(1.5+d)*S+.5*m,x=d*I-d*S;for(let C=0;C!==i;++C)r[C]=p*s[u+C]+g*s[c+C]+y*s[l+C]+x*s[h+C];return r}},qp=class extends Ms{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(o-a)/(n-a),h=1-u;for(let f=0;f!==i;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}},Wp=class extends Ms{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Xp=class extends Ms{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(o-a)/(n-a),S=1-m;for(let I=0;I!==i;++I)r[I]=s[c+I]*S+s[l+I]*m;return r}let f=i*2,d=e-1;for(let m=0;m!==i;++m){let S=s[c+m],I=s[l+m],p=d*f+m*2,g=h[p],y=h[p+1],x=e*f+m*2,C=u[x],b=u[x+1],T=k2(o,a,g,C,n);r[m]=QC(T,S,y,b,I)}return r}};function QC(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function U2(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function k2(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=QC(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=U2(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Yo=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rl(a,this.TimeBufferType),this.values=Rl(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:Rl(e.times,Array),values:Rl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),zx(e.settings)&&(o.settings={inTangents:Rl(e.settings.inTangents,Array),outTangents:Rl(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Xp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case Cf:a=this.InterpolantFactoryMethodDiscrete;break;case wp:a=this.InterpolantFactoryMethodLinear;break;case Fp:a=this.InterpolantFactoryMethodSmooth;break;case Vx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return xt("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cf;case this.InterpolantFactoryMethodLinear:return wp;case this.InterpolantFactoryMethodSmooth:return Fp;case this.InterpolantFactoryMethodBezier:return Vx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;zx(this.settings)&&(eC(this.settings.inTangents,e),eC(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(It("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){It("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&zw(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===Fp,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,f=h-o,d=h+o;for(let m=0;m!==o;++m){let S=a[h+m];if(S!==a[f+m]||S!==a[d+m]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,f=s*o;for(let d=0;d!==o;++d)a[f+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,zx(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function eC(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Yo.prototype.ValueTypeName="";Yo.prototype.TimeBufferType=Float32Array;Yo.prototype.ValueBufferType=Float32Array;Yo.prototype.DefaultInterpolation=wp;var Cs=class extends Yo{constructor(e,a,o){super(e,a,o)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Cf;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yp=class extends Yo{constructor(e,a,o,n){super(e,a,o,n)}};Yp.prototype.ValueTypeName="color";var Zp=class extends Yo{constructor(e,a,o,n){super(e,a,o,n)}};Zp.prototype.ValueTypeName="number";var Kp=class extends Ms{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let u=c+i;c!==u;c+=4)ho.slerpFlat(r,0,s,c-i,s,c,l);return r}},Vf=class extends Yo{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new Kp(this.times,this.values,this.getValueSize(),e)}};Vf.prototype.ValueTypeName="quaternion";Vf.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Yo{constructor(e,a,o){super(e,a,o)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Cf;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Jp=class extends Yo{constructor(e,a,o,n){super(e,a,o,n)}};Jp.prototype.ValueTypeName="vector";var Qp=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(u){i++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,i),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jC=new Qp,jp=class{constructor(e){this.manager=e!==void 0?e:jC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jp.DEFAULT_MATERIAL_NAME="__DEFAULT";var $p=class extends Io{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var Hx=new oa,tC=new z,aC=new z,eh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Eo,this.map=null,this.mapPass=null,this.matrix=new oa,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new da(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;tC.setFromMatrixPosition(e.matrixWorld),a.position.copy(tC),aC.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(aC),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){Hx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(Hx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Ul||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(Hx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xp=new z,gp=new ho,Xn=new z,Gf=class extends Io{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oa,this.projectionMatrix=new oa,this.projectionMatrixInverse=new oa,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xp,gp,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xp,gp,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(xp,gp,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xp,gp,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Is=new z,oC=new Ne,nC=new Ne,no=class extends Gf{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Ep*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ix*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ep*2*Math.atan(Math.tan(Ix*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,a){return this.getViewBounds(e,oC,nC),a.subVectors(nC,oC)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(Ix*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var jl=class extends Gf{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Jx=class extends eh{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$l=class extends $p{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Io.DEFAULT_UP),this.updateMatrix(),this.target=new Io,this.shadow=new Jx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var Ll=-90,Dl=1,th=class extends Io{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new no(Ll,Dl,e,a);n.layers=this.layers,this.add(n);let r=new no(Ll,Dl,e,a);r.layers=this.layers,this.add(r);let s=new no(Ll,Dl,e,a);s.layers=this.layers,this.add(s);let i=new no(Ll,Dl,e,a);i.layers=this.layers,this.add(i);let l=new no(Ll,Dl,e,a);l.layers=this.layers,this.add(l);let c=new no(Ll,Dl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===_n)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let S=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let I=!1;e.isWebGLRenderer===!0?I=e.state.buffers.depth.getReversed():I=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=S,e.setRenderTarget(o,5,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,o.texture.needsPMREMUpdate=!0}},ah=class extends no{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _g="\\[\\]\\.:\\/",N2=new RegExp("["+_g+"]","g"),bg="[^"+_g+"]",O2="[^"+_g.replace("\\.","")+"]",z2=/((?:WC+[\/:])*)/.source.replace("WC",bg),H2=/(WCOD+)?/.source.replace("WCOD",O2),V2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bg),G2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bg),q2=new RegExp("^"+z2+H2+V2+G2+"$"),W2=["material","materials","bones","map"],Qx=class{constructor(e,a,o){let n=o||ca.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},ca=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N2,"")}static parseTrackName(e){let a=q2.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);W2.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ca.Composite=Qx;ca.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ca.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ca.prototype.GetterByBindingType=[ca.prototype._getValue_direct,ca.prototype._getValue_array,ca.prototype._getValue_arrayElement,ca.prototype._getValue_toArray];ca.prototype.SetterByBindingTypeAndVersioning=[[ca.prototype._setValue_direct,ca.prototype._setValue_direct_setNeedsUpdate,ca.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ca.prototype._setValue_array,ca.prototype._setValue_array_setNeedsUpdate,ca.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ca.prototype._setValue_arrayElement,ca.prototype._setValue_arrayElement_setNeedsUpdate,ca.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ca.prototype._setValue_fromArray,ca.prototype._setValue_fromArray_setNeedsUpdate,ca.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SB=new Float32Array(1);var rC=new oa,qf=class{constructor(e,a,o=0,n=1/0){this.ray=new Rf(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):It("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return rC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rC),this}intersectObject(e,a=!0,o=[]){return jx(e,this,o,a),o.sort(sC),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)jx(e[n],this,o,a);return o.sort(sC),o}};function sC(t,e){return t.distance-e.distance}function jx(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)jx(r[s],e,a,!0)}}var $x=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function Tg(t,e,a,o){let n=X2(o);switch(a){case gg:return t*e;case Sg:return t*e/n.components*n.byteLength;case fh:return t*e/n.components*n.byteLength;case ws:return t*e*2/n.components*n.byteLength;case uh:return t*e*2/n.components*n.byteLength;case Fg:return t*e*3/n.components*n.byteLength;case fn:return t*e*4/n.components*n.byteLength;case dh:return t*e*4/n.components*n.byteLength;case Kf:case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:case Ih:return Math.max(t,16)*Math.max(e,8)/4;case ph:case mh:return Math.max(t,8)*Math.max(e,8)/2;case xh:case gh:case Sh:case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:case $f:case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kh:case Nh:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case eu:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function X2(t){switch(t){case Eo:case hg:return{byteLength:1,components:1};case ac:case mg:case wn:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Tn:case ih:case An:return{byteLength:4,components:1};case Ig:case xg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function S_(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function Y2(t){let e=new WeakMap;function a(i,l){let c=i.array,u=i.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],S=h[d];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++f,h[f]=S)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let S=h[d];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let u=e.get(i);(!u||u.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var Z2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K2=`#ifdef USE_ALPHAHASH
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
#endif`,J2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iE=`#ifdef USE_IRIDESCENCE
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
#endif`,lE=`#ifdef USE_BUMPMAP
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FE=`vec3 transformedNormal = objectNormal;
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
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",_E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,YE=`
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nR=`#if defined( USE_POINTS_UV )
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
#endif`,rR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fR=`#ifdef USE_MORPHTARGETS
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
#endif`,uR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xR=`#ifdef USE_NORMALMAP
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
#endif`,gR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DR=`float getShadowMask() {
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
}`,PR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BR=`#ifdef USE_SKINNING
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
#endif`,UR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kR=`#ifdef USE_SKINNING
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
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VR=`#ifdef USE_TRANSMISSION
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
#endif`,GR=`#ifdef USE_TRANSMISSION
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
#endif`,qR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KR=`uniform sampler2D t2D;
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
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eL=`#include <common>
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
}`,tL=`#if DEPTH_PACKING == 3200
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
}`,aL=`#define DISTANCE
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
}`,oL=`#define DISTANCE
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
}`,nL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sL=`uniform float scale;
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
}`,iL=`uniform vec3 diffuse;
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
}`,lL=`#include <common>
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
}`,cL=`uniform vec3 diffuse;
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
}`,fL=`#define LAMBERT
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
}`,uL=`#define LAMBERT
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
}`,dL=`#define MATCAP
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
}`,pL=`#define MATCAP
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
}`,hL=`#define NORMAL
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
}`,mL=`#define NORMAL
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
}`,IL=`#define PHONG
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
}`,xL=`#define PHONG
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
}`,gL=`#define STANDARD
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
}`,FL=`#define STANDARD
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
}`,SL=`#define TOON
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
}`,vL=`#define TOON
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
}`,yL=`uniform float size;
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
}`,ML=`uniform vec3 diffuse;
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
}`,CL=`#include <common>
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
}`,_L=`uniform vec3 color;
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
}`,bL=`uniform float rotation;
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
}`,TL=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Z2,alphahash_pars_fragment:K2,alphamap_fragment:J2,alphamap_pars_fragment:Q2,alphatest_fragment:j2,alphatest_pars_fragment:$2,aomap_fragment:eE,aomap_pars_fragment:tE,batching_pars_vertex:aE,batching_vertex:oE,begin_vertex:nE,beginnormal_vertex:rE,bsdfs:sE,iridescence_fragment:iE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:dE,color_fragment:pE,color_pars_fragment:hE,color_pars_vertex:mE,color_vertex:IE,common:xE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:FE,displacementmap_pars_vertex:SE,displacementmap_vertex:vE,emissivemap_fragment:yE,emissivemap_pars_fragment:ME,colorspace_fragment:CE,colorspace_pars_fragment:_E,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:zE,envmap_vertex:EE,fog_vertex:RE,fog_pars_vertex:LE,fog_fragment:DE,fog_pars_fragment:PE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:UE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:NE,lights_pars_begin:OE,lights_toon_fragment:HE,lights_toon_pars_fragment:VE,lights_phong_fragment:GE,lights_phong_pars_fragment:qE,lights_physical_fragment:WE,lights_physical_pars_fragment:XE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:KE,lightprobes_pars_fragment:JE,logdepthbuf_fragment:QE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:eR,map_fragment:tR,map_pars_fragment:aR,map_particle_fragment:oR,map_particle_pars_fragment:nR,metalnessmap_fragment:rR,metalnessmap_pars_fragment:sR,morphinstance_vertex:iR,morphcolor_vertex:lR,morphnormal_vertex:cR,morphtarget_pars_vertex:fR,morphtarget_vertex:uR,normal_fragment_begin:dR,normal_fragment_maps:pR,normal_pars_fragment:hR,normal_pars_vertex:mR,normal_vertex:IR,normalmap_pars_fragment:xR,clearcoat_normal_fragment_begin:gR,clearcoat_normal_fragment_maps:FR,clearcoat_pars_fragment:SR,iridescence_pars_fragment:vR,opaque_fragment:yR,packing:MR,premultiplied_alpha_fragment:CR,project_vertex:_R,dithering_fragment:bR,dithering_pars_fragment:TR,roughnessmap_fragment:AR,roughnessmap_pars_fragment:wR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:RR,shadowmap_vertex:LR,shadowmask_pars_fragment:DR,skinbase_vertex:PR,skinning_pars_vertex:BR,skinning_vertex:UR,skinnormal_vertex:kR,specularmap_fragment:NR,specularmap_pars_fragment:OR,tonemapping_fragment:zR,tonemapping_pars_fragment:HR,transmission_fragment:VR,transmission_pars_fragment:GR,uv_pars_fragment:qR,uv_pars_vertex:WR,uv_vertex:XR,worldpos_vertex:YR,background_vert:ZR,background_frag:KR,backgroundCube_vert:JR,backgroundCube_frag:QR,cube_vert:jR,cube_frag:$R,depth_vert:eL,depth_frag:tL,distance_vert:aL,distance_frag:oL,equirect_vert:nL,equirect_frag:rL,linedashed_vert:sL,linedashed_frag:iL,meshbasic_vert:lL,meshbasic_frag:cL,meshlambert_vert:fL,meshlambert_frag:uL,meshmatcap_vert:dL,meshmatcap_frag:pL,meshnormal_vert:hL,meshnormal_frag:mL,meshphong_vert:IL,meshphong_frag:xL,meshphysical_vert:gL,meshphysical_frag:FL,meshtoon_vert:SL,meshtoon_frag:vL,points_vert:yL,points_frag:ML,shadow_vert:CL,shadow_frag:_L,sprite_vert:bL,sprite_frag:TL},Ke={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},tr={basic:{uniforms:so([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:so([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:so([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:so([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:so([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:so([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:so([Ke.points,Ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:so([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:so([Ke.common,Ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:so([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:so([Ke.sprite,Ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:so([Ke.common,Ke.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:so([Ke.lights,Ke.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};tr.physical={uniforms:so([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var Xh={r:0,b:0,g:0},AL=new oa,v_=new Ct;v_.set(-1,0,0,0,1,0,0,0,1);function wL(t,e,a,o,n,r){let s=new bt(0),i=n===!0?0:1,l,c,u=null,h=0,f=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){let x=g.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(g){let y=!1,x=d(g);x===null?I(s,i):x&&x.isColor&&(I(x,1),y=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===Yf)?(c===void 0&&(c=new Ma(new Wl(1,1,1),new Xo({name:"BackgroundCubeMaterial",uniforms:Ii(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:go,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AL.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(v_),c.material.toneMapped=kt.getTransfer(x.colorSpace)!==Wt,(u!==x||h!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ma(new pi(2,2),new Xo({name:"BackgroundMaterial",uniforms:Ii(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=kt.getTransfer(x.colorSpace)!==Wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function I(g,y){g.getRGB(Xh,Cg(t)),a.buffers.color.setClear(Xh.r,Xh.g,Xh.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),i=y,I(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(g){i=g,I(s,i)},render:m,addToRenderList:S,dispose:p}}function EL(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=f(null),r=n,s=!1;function i(D,Y,V,N,k){let ae=!1,J=h(D,N,V,Y);r!==J&&(r=J,c(r.object)),ae=d(D,N,V,k),ae&&m(D,N,V,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,x(D,Y,V,N),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function h(D,Y,V,N){let k=N.wireframe===!0,ae=o[Y.id];ae===void 0&&(ae={},o[Y.id]=ae);let J=D.isInstancedMesh===!0?D.id:0,le=ae[J];le===void 0&&(le={},ae[J]=le);let W=le[V.id];W===void 0&&(W={},le[V.id]=W);let K=W[k];return K===void 0&&(K=f(l()),W[k]=K),K}function f(D){let Y=[],V=[],N=[];for(let k=0;k<a;k++)Y[k]=0,V[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,Y,V,N){let k=r.attributes,ae=Y.attributes,J=0,le=V.getAttributes();for(let W in le)if(le[W].location>=0){let $=k[W],De=ae[W];if(De===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(De=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(De=D.instanceColor)),$===void 0||$.attribute!==De||De&&$.data!==De.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function m(D,Y,V,N){let k={},ae=Y.attributes,J=0,le=V.getAttributes();for(let W in le)if(le[W].location>=0){let $=ae[W];$===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let De={};De.attribute=$,$&&$.data&&(De.data=$.data),k[W]=De,J++}r.attributes=k,r.attributesNum=J,r.index=N}function S(){let D=r.newAttributes;for(let Y=0,V=D.length;Y<V;Y++)D[Y]=0}function I(D){p(D,0)}function p(D,Y){let V=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;V[D]=1,N[D]===0&&(t.enableVertexAttribArray(D),N[D]=1),k[D]!==Y&&(t.vertexAttribDivisor(D,Y),k[D]=Y)}function g(){let D=r.newAttributes,Y=r.enabledAttributes;for(let V=0,N=Y.length;V<N;V++)Y[V]!==D[V]&&(t.disableVertexAttribArray(V),Y[V]=0)}function y(D,Y,V,N,k,ae,J){J===!0?t.vertexAttribIPointer(D,Y,V,k,ae):t.vertexAttribPointer(D,Y,V,N,k,ae)}function x(D,Y,V,N){S();let k=N.attributes,ae=V.getAttributes(),J=Y.defaultAttributeValues;for(let le in ae){let W=ae[le];if(W.location>=0){let K=k[le];if(K===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let $=K.normalized,De=K.itemSize,be=e.get(K);if(be===void 0)continue;let et=be.buffer,q=be.type,st=be.bytesPerElement,ee=q===t.INT||q===t.UNSIGNED_INT||K.gpuType===ih;if(K.isInterleavedBufferAttribute){let te=K.data,Ce=te.stride,Ye=K.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,te.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<W.locationSize;ye++)I(W.location+ye);t.bindBuffer(t.ARRAY_BUFFER,et);for(let ye=0;ye<W.locationSize;ye++)y(W.location+ye,De/W.locationSize,q,$,Ce*st,(Ye+De/W.locationSize*ye)*st,ee)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)p(W.location+te,K.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<W.locationSize;te++)I(W.location+te);t.bindBuffer(t.ARRAY_BUFFER,et);for(let te=0;te<W.locationSize;te++)y(W.location+te,De/W.locationSize,q,$,De*st,De/W.locationSize*te*st,ee)}}else if(J!==void 0){let $=J[le];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(W.location,$);break;case 3:t.vertexAttrib3fv(W.location,$);break;case 4:t.vertexAttrib4fv(W.location,$);break;default:t.vertexAttrib1fv(W.location,$)}}}}g()}function C(){A();for(let D in o){let Y=o[D];for(let V in Y){let N=Y[V];for(let k in N){let ae=N[k];for(let J in ae)u(ae[J].object),delete ae[J];delete N[k]}}delete o[D]}}function b(D){if(o[D.id]===void 0)return;let Y=o[D.id];for(let V in Y){let N=Y[V];for(let k in N){let ae=N[k];for(let J in ae)u(ae[J].object),delete ae[J];delete N[k]}}delete o[D.id]}function T(D){for(let Y in o){let V=o[Y];for(let N in V){let k=V[N];if(k[D.id]===void 0)continue;let ae=k[D.id];for(let J in ae)u(ae[J].object),delete ae[J];delete k[D.id]}}}function v(D){for(let Y in o){let V=o[Y],N=D.isInstancedMesh===!0?D.id:0,k=V[N];if(k!==void 0){for(let ae in k){let J=k[ae];for(let le in J)u(J[le].object),delete J[le];delete k[ae]}delete V[N],Object.keys(V).length===0&&delete o[Y]}}}function A(){w(),s=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:A,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:I,disableUnusedAttributes:g}}function RL(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,u){u!==0&&(t.drawArraysInstanced(o,l,c,u),a.update(c,o,u))}function i(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];a.update(f,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function LL(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==fn&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(T){let v=T===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Eo&&T!==An&&!v&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",u=l(c);u!==c&&(xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=a.logarithmicDepthBuffer===!0,f=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&f===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),I=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:I,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:x,maxSamples:C,samples:b}}function DL(t){let e=this,a=null,o=0,n=!1,r=!1,s=new Cn,i=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||o!==0||n;return n=f,o=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){a=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,S=h.clipIntersection,I=h.clipShadows,p=t.get(h);if(!n||m===null||m.length===0||r&&!I)r?u(null):c();else{let g=r?0:o,y=g*4,x=p.clippingState||null;l.value=x,x=u(m,f,y,d);for(let C=0;C!==y;++C)x[C]=a[C];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(h,f,d,m){let S=h!==null?h.length:0,I=null;if(S!==0){if(I=l.value,m!==!0||I===null){let p=d+S*4,g=f.matrixWorldInverse;i.getNormalMatrix(g),(I===null||I.length<p)&&(I=new Float32Array(p));for(let y=0,x=d;y!==S;++y,x+=4)s.copy(h[y]).applyMatrix4(g,i),s.normal.toArray(I,x),I[x+3]=s.constant}l.value=I,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,I}}var sc=4,PL=6,BL=20,UL=256,tu=new jl,$C=new bt,Ag=null,wg=0,Eg=0,Rg=!1,kL=new z,xi=new z,lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=kL}=r;Ag=this._renderer.getRenderTarget(),wg=this._renderer.getActiveCubeFace(),Eg=this._renderer.getActiveMipmapLevel(),Rg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ag,wg,Eg),this._renderer.xr.enabled=Rg,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===Ts||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ag=this._renderer.getRenderTarget(),wg=this._renderer.getActiveCubeFace(),Eg=this._renderer.getActiveMipmapLevel(),Rg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Ba,minFilter:Ba,generateMipmaps:!1,type:wn,format:fn,colorSpace:_f,depthBuffer:!1},n=e_(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NL(r)),this._blurMaterial=zL(r,e,a),this._ggxMaterial=OL(r,e,a)}return n}_compileMaterial(e){let a=new Ma(new xo,e);this._renderer.compile(a,tu)}_sceneToCubeUV(e,a,o,n,r){let l=new no(90,1,a,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor($C),h.toneMapping=bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ma(new Wl,new ci({name:"PMREM.Background",side:go,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,I=S.material,p=!1,g=e.background;g?g.isColor&&(I.color.copy(g),e.background=null,p=!0):(I.color.copy($C),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let C=this._cubeSize;rc(n,x*C,y>2?C:0,C,C),h.setRenderTarget(n),p&&h.render(S,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===Ts||e.mapping===mi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;rc(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,tu)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),u=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,S=this._sizeLods[o],I=3*S*(o>m-sc?o-m+sc:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-a,rc(r,I,p,3*S,2*S),n.setRenderTarget(r),n.render(i,tu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-o,rc(e,I,p,3*S,2*S),n.setRenderTarget(e),n.render(i,tu)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-sc?n-this._lodMax+sc:0),f=4*(this._cubeSize-u);rc(a,h,f,3*u,2*u),s.setRenderTarget(a),s.render(l,tu)}};function NL(t){let e=[],a=[],o=t,n=t-sc+1+PL;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),S=new Float32Array(d*f*h);for(let p=0;p<h;p++){let g=p%3*2/3-1,y=p>2?0:-1,x=[g,y,0,g+2/3,y,0,g+2/3,y+1,0,g,y,0,g+2/3,y+1,0,g,y+1,0];m.set(x,d*f*p);for(let C=0;C<f;C++){let b=u[C*2]*2-1,T=u[C*2+1]*2-1;p===0?xi.set(1,T,b):p===1?xi.set(-b,1,-T):p===2?xi.set(-b,T,1):p===3?xi.set(-1,T,-b):p===4?xi.set(-b,-1,T):xi.set(b,T,-1),xi.toArray(S,(p*f+C)*d)}}let I=new xo;I.setAttribute("position",new ro(m,d)),I.setAttribute("outputDirection",new ro(S,d)),a.push(new Ma(I,null)),o>sc&&o--}return{lodMeshes:a,sizeLods:e}}function e_(t,e,a){let o=new wo(t,e,a);return o.texture.mapping=Yf,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function rc(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function OL(t,e,a){return new Xo({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zL(t,e,a){return new Xo({name:"SphericalGaussianBlur",defines:{SAMPLES:BL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function t_(){return new Xo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function a_(){return new Xo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zh=class extends wo{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new Lf(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Wl(5,5,5),r=new Xo({name:"CubemapFromEquirect",uniforms:Ii(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:go,blending:jn});r.uniforms.tEquirect.value=a;let s=new Ma(n,r),i=a.minFilter;return a.minFilter===$n&&(a.minFilter=Ba),new th(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function HL(t){let e=new WeakMap,a=new WeakMap,o=null;function n(f,d=!1){return f==null?null:d?s(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===nh||d===rh)if(e.has(f)){let m=e.get(f).texture;return i(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let S=new Zh(m.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",c),i(S.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,m=d===nh||d===rh,S=d===Ts||d===mi;if(m||S){let I=a.get(f),p=I!==void 0?I.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return o===null&&(o=new lc(t)),I=m?o.fromEquirectangular(f,I):o.fromCubemap(f,I),I.texture.pmremVersion=f.pmremVersion,a.set(f,I),I.texture;if(I!==void 0)return I.texture;{let g=f.image;return m&&g&&g.height>0||S&&g&&l(g)?(o===null&&(o=new lc(t)),I=m?o.fromEquirectangular(f):o.fromCubemap(f),I.texture.pmremVersion=f.pmremVersion,a.set(f,I),f.addEventListener("dispose",u),I.texture):null}}}return f}function i(f,d){return d===nh?f.mapping=Ts:d===rh&&(f.mapping=mi),f}function l(f){let d=0,m=6;for(let S=0;S<m;S++)f[S]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=a.get(d);m!==void 0&&(a.delete(d),m.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function VL(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&li("WebGLRenderer: "+o+" extension not supported."),n}}}function GL(t,e,a,o){let n={},r=new WeakMap;function s(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,a.memory.geometries--}function i(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,a.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,S=0;if(m===void 0)return;if(d!==null){let g=d.array;S=d.version;for(let y=0,x=g.length;y<x;y+=3){let C=g[y+0],b=g[y+1],T=g[y+2];f.push(C,b,b,T,T,C)}}else{let g=m.array;S=m.version;for(let y=0,x=g.length/3-1;y<x;y+=3){let C=y+0,b=y+1,T=y+2;f.push(C,b,b,T,T,C)}}let I=new(m.count>=65535?Ef:wf)(f,1);I.version=S;let p=r.get(h);p&&e.remove(p),r.set(h,I)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:u}}function qL(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,f){t.drawElements(o,f,r,h*s),a.update(f,o,1)}function c(h,f,d){d!==0&&(t.drawElementsInstanced(o,f,r,h*s,d),a.update(f,o,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,f,0,r,h,0,d);let S=0;for(let I=0;I<d;I++)S+=f[I];a.update(S,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function WL(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:It("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function XL(t,e,a){let o=new WeakMap,n=new da;function r(s,i,l){let c=s.morphTargetInfluences,u=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=u!==void 0?u.length:0,f=o.get(i);if(f===void 0||f.count!==h){let A=function(){T.dispose(),o.delete(i),i.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=i.morphAttributes.position!==void 0,m=i.morphAttributes.normal!==void 0,S=i.morphAttributes.color!==void 0,I=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],g=i.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),S===!0&&(y=3);let x=i.attributes.position.count*y,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*C*4*h),T=new Af(b,x,C,h);T.type=An,T.needsUpdate=!0;let v=y*4;for(let w=0;w<h;w++){let D=I[w],Y=p[w],V=g[w],N=x*C*4*w;for(let k=0;k<D.count;k++){let ae=k*v;d===!0&&(n.fromBufferAttribute(D,k),b[N+ae+0]=n.x,b[N+ae+1]=n.y,b[N+ae+2]=n.z,b[N+ae+3]=0),m===!0&&(n.fromBufferAttribute(Y,k),b[N+ae+4]=n.x,b[N+ae+5]=n.y,b[N+ae+6]=n.z,b[N+ae+7]=0),S===!0&&(n.fromBufferAttribute(V,k),b[N+ae+8]=n.x,b[N+ae+9]=n.y,b[N+ae+10]=n.z,b[N+ae+11]=V.itemSize===4?n.w:1)}}f={count:h,texture:T,size:new Ne(x,C)},o.set(i,f),i.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let m=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function YL(t,e,a,o,n){let r=new WeakMap;function s(c){let u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function i(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),o.releaseStatesOfObject(u),a.remove(u.instanceMatrix),u.instanceColor!==null&&a.remove(u.instanceColor)}return{update:s,dispose:i}}var ZL={[ig]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[cg]:"CINEON_TONE_MAPPING",[fg]:"ACES_FILMIC_TONE_MAPPING",[dg]:"AGX_TONE_MAPPING",[Xf]:"NEUTRAL_TONE_MAPPING",[ug]:"CUSTOM_TONE_MAPPING"};function KL(t,e,a,o,n,r){let s=new wo(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new xo;c.setAttribute("position",new Aa([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Aa([0,2,0,0,2,0],2));let u=new zp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ma(c,u),f=new jl(-1,1,1,-1,0,1),d=null,m=null,S=!1,I,p=null,g=[],y=!1;this.setSize=function(x,C){s.setSize(x,C),i!==null&&i.setSize(x,C),l!==null&&l.setSize(x,C);for(let b=0;b<g.length;b++){let T=g[b];T.setSize&&T.setSize(x,C)}},this.setEffects=function(x){g=x,y=g.length>0&&g[0].isRenderPass===!0;let C=s.width,b=s.height;g.length>0&&i===null&&(i=new wo(C,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new wo(C,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){let v=g[T];v.setSize&&v.setSize(C,b)}},this.begin=function(x,C){if(S||x.toneMapping===bn&&g.length===0)return!1;if(p=C,C!==null){let b=C.width,T=C.height;(s.width!==b||s.height!==T)&&this.setSize(b,T)}return y===!1&&x.setRenderTarget(s),I=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return y},this.end=function(x,C){x.toneMapping=I,S=!0;let b=s,T=i;for(let v=0;v<g.length;v++){let A=g[v];A.enabled!==!1&&(A.render(x,T,b,C),A.needsSwap!==!1&&(b=T,T=T===i?l:i))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,u.defines={},kt.getTransfer(d)===Wt&&(u.defines.SRGB_TRANSFER="");let v=ZL[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(h,f),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var y_=new mo,Pg=new Ss(1,1),M_=new Af,C_=new Dp,__=new Lf,o_=[],n_=[],r_=new Float32Array(16),s_=new Float32Array(9),i_=new Float32Array(4);function cc(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=o_[n];if(r===void 0&&(r=new Float32Array(n),o_[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Ua(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function ka(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function Qh(t,e){let a=n_[e];a===void 0&&(a=new Int32Array(e),n_[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function JL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function QL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Ua(a,e))return;t.uniform2fv(this.addr,e),ka(a,e)}}function jL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Ua(a,e))return;t.uniform3fv(this.addr,e),ka(a,e)}}function $L(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Ua(a,e))return;t.uniform4fv(this.addr,e),ka(a,e)}}function eD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Ua(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),ka(a,e)}else{if(Ua(a,o))return;i_.set(o),t.uniformMatrix2fv(this.addr,!1,i_),ka(a,o)}}function tD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Ua(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),ka(a,e)}else{if(Ua(a,o))return;s_.set(o),t.uniformMatrix3fv(this.addr,!1,s_),ka(a,o)}}function aD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Ua(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),ka(a,e)}else{if(Ua(a,o))return;r_.set(o),t.uniformMatrix4fv(this.addr,!1,r_),ka(a,o)}}function oD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function nD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Ua(a,e))return;t.uniform2iv(this.addr,e),ka(a,e)}}function rD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Ua(a,e))return;t.uniform3iv(this.addr,e),ka(a,e)}}function sD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Ua(a,e))return;t.uniform4iv(this.addr,e),ka(a,e)}}function iD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function lD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Ua(a,e))return;t.uniform2uiv(this.addr,e),ka(a,e)}}function cD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Ua(a,e))return;t.uniform3uiv(this.addr,e),ka(a,e)}}function fD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Ua(a,e))return;t.uniform4uiv(this.addr,e),ka(a,e)}}function uD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(Pg.compareFunction=a.isReversedDepthBuffer()?Wh:qh,r=Pg):r=y_,a.setTexture2D(e||r,n)}function dD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||C_,n)}function pD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||__,n)}function hD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||M_,n)}function mD(t){switch(t){case 5126:return JL;case 35664:return QL;case 35665:return jL;case 35666:return $L;case 35674:return eD;case 35675:return tD;case 35676:return aD;case 5124:case 35670:return oD;case 35667:case 35671:return nD;case 35668:case 35672:return rD;case 35669:case 35673:return sD;case 5125:return iD;case 36294:return lD;case 36295:return cD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return uD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return hD}}function ID(t,e){t.uniform1fv(this.addr,e)}function xD(t,e){let a=cc(e,this.size,2);t.uniform2fv(this.addr,a)}function gD(t,e){let a=cc(e,this.size,3);t.uniform3fv(this.addr,a)}function FD(t,e){let a=cc(e,this.size,4);t.uniform4fv(this.addr,a)}function SD(t,e){let a=cc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function vD(t,e){let a=cc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function yD(t,e){let a=cc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function MD(t,e){t.uniform1iv(this.addr,e)}function CD(t,e){t.uniform2iv(this.addr,e)}function _D(t,e){t.uniform3iv(this.addr,e)}function bD(t,e){t.uniform4iv(this.addr,e)}function TD(t,e){t.uniform1uiv(this.addr,e)}function AD(t,e){t.uniform2uiv(this.addr,e)}function wD(t,e){t.uniform3uiv(this.addr,e)}function ED(t,e){t.uniform4uiv(this.addr,e)}function RD(t,e,a){let o=this.cache,n=e.length,r=Qh(a,n);Ua(o,r)||(t.uniform1iv(this.addr,r),ka(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Pg:s=y_;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function LD(t,e,a){let o=this.cache,n=e.length,r=Qh(a,n);Ua(o,r)||(t.uniform1iv(this.addr,r),ka(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||C_,r[s])}function DD(t,e,a){let o=this.cache,n=e.length,r=Qh(a,n);Ua(o,r)||(t.uniform1iv(this.addr,r),ka(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||__,r[s])}function PD(t,e,a){let o=this.cache,n=e.length,r=Qh(a,n);Ua(o,r)||(t.uniform1iv(this.addr,r),ka(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||M_,r[s])}function BD(t){switch(t){case 5126:return ID;case 35664:return xD;case 35665:return gD;case 35666:return FD;case 35674:return SD;case 35675:return vD;case 35676:return yD;case 5124:case 35670:return MD;case 35667:case 35671:return CD;case 35668:case 35672:return _D;case 35669:case 35673:return bD;case 5125:return TD;case 36294:return AD;case 36295:return wD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return RD;case 35679:case 36299:case 36307:return LD;case 35680:case 36300:case 36308:case 36293:return DD;case 36289:case 36303:case 36311:case 36292:return PD}}var Bg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=mD(a.type)}},Ug=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=BD(a.type)}},kg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},Lg=/(\w+)(\])?(\[|\.)?/g;function l_(t,e){t.seq.push(e),t.map[e.id]=e}function UD(t,e,a){let o=t.name,n=o.length;for(Lg.lastIndex=0;;){let r=Lg.exec(o),s=Lg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){l_(a,c===void 0?new Bg(i,t,e):new Ug(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new kg(i),l_(a,h)),a=h}}}var ic=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);UD(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function c_(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var kD=37297,ND=0;function OD(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var f_=new Ct;function zD(t){kt._getMatrix(f_,kt.workingColorSpace,t);let e=`mat3( ${f_.elements.map(a=>a.toFixed(4))} )`;switch(kt.getTransfer(t)){case bf:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function u_(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+OD(t.getShaderSource(e),i)}else return r}function HD(t,e){let a=zD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var VD={[ig]:"Linear",[lg]:"Reinhard",[cg]:"Cineon",[fg]:"ACESFilmic",[dg]:"AgX",[Xf]:"Neutral",[ug]:"Custom"};function GD(t,e){let a=VD[e];return a===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Yh=new z;function qD(){kt.getLuminanceCoefficients(Yh);let t=Yh.x.toFixed(4),e=Yh.y.toFixed(4),a=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function XD(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function YD(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function ou(t){return t!==""}function d_(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ng(t){return t.replace(ZD,JD)}var KD=new Map;function JD(t,e){let a=wt[e];if(a===void 0){let o=KD.get(e);if(o!==void 0)a=wt[o],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ng(a)}var QD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(t){return t.replace(QD,jD)}function jD(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function m_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var $D={[Wf]:"SHADOWMAP_TYPE_PCF",[ec]:"SHADOWMAP_TYPE_VSM"};function e3(t){return $D[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t3={[Ts]:"ENVMAP_TYPE_CUBE",[mi]:"ENVMAP_TYPE_CUBE",[Yf]:"ENVMAP_TYPE_CUBE_UV"};function a3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":t3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var o3={[mi]:"ENVMAP_MODE_REFRACTION"};function n3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":o3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r3={[sg]:"ENVMAP_BLENDING_MULTIPLY",[AC]:"ENVMAP_BLENDING_MIX",[wC]:"ENVMAP_BLENDING_ADD"};function s3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":r3[t.combine]||"ENVMAP_BLENDING_NONE"}function i3(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function l3(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=e3(a),c=a3(a),u=n3(a),h=s3(a),f=i3(a),d=WD(a),m=XD(r),S=n.createProgram(),I,p,g=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(I=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(ou).join(`
`),I.length>0&&(I+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(ou).join(`
`),p.length>0&&(p+=`
`)):(I=[m_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),p=[m_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+u:"",a.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==bn?"#define TONE_MAPPING":"",a.toneMapping!==bn?wt.tonemapping_pars_fragment:"",a.toneMapping!==bn?GD("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,HD("linearToOutputTexel",a.outputColorSpace),qD(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ou).join(`
`)),s=Ng(s),s=d_(s,a),s=p_(s,a),i=Ng(i),i=d_(i,a),i=p_(i,a),s=h_(s),i=h_(i),a.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,p=["#define varying in",a.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+I+s,x=g+p+i,C=c_(n,n.VERTEX_SHADER,y),b=c_(n,n.FRAGMENT_SHADER,x);n.attachShader(S,C),n.attachShader(S,b),a.index0AttributeName!==void 0?n.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function T(D){if(t.debug.checkShaderErrors){let Y=n.getProgramInfoLog(S)||"",V=n.getShaderInfoLog(C)||"",N=n.getShaderInfoLog(b)||"",k=Y.trim(),ae=V.trim(),J=N.trim(),le=!0,W=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(le=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,C,b);else{let K=u_(n,C,"vertex"),$=u_(n,b,"fragment");It("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+K+`
`+$)}else k!==""?xt("WebGLProgram: Program Info Log:",k):(ae===""||J==="")&&(W=!1);W&&(D.diagnostics={runnable:le,programLog:k,vertexShader:{log:ae,prefix:I},fragmentShader:{log:J,prefix:p}})}n.deleteShader(C),n.deleteShader(b),v=new ic(n,S),A=YD(n,S)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let w=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(S,kD)),w},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=ND++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}var c3=0,Og=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new zg(e),a.set(e,o)),o}},zg=class{constructor(e){this.id=c3++,this.code=e,this.usedTimes=0}};function f3(t){return t===ws||t===$f||t===eu}function u3(t,e,a,o,n,r){let s=new Ol,i=new Og,l=new Set,c=[],u=new Map,h=o.logarithmicDepthBuffer,f=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,w,D,Y,V){let N=D.fog,k=Y.geometry,ae=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,le=e.get(v.envMap||ae,J),W=le&&le.mapping===Yf?le.image.height:null,K=d[v.type];v.precision!==null&&(f=o.getMaxPrecision(v.precision),f!==v.precision&&xt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,De=$!==void 0?$.length:0,be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let et,q,st,ee;if(K){let vt=tr[K];et=vt.vertexShader,q=vt.fragmentShader}else{et=v.vertexShader,q=v.fragmentShader;let vt=i.getVertexShaderStage(v),Ft=i.getFragmentShaderStage(v);i.update(v,vt,Ft),st=vt.id,ee=Ft.id}let te=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ye=Y.isInstancedMesh===!0,ye=Y.isBatchedMesh===!0,Ge=!!v.map,tt=!!v.matcap,oe=!!le,ue=!!v.aoMap,xe=!!v.lightMap,ie=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,Oe=!!v.displacementMap,qe=!!v.emissiveMap,He=!!v.metalnessMap,Be=!!v.roughnessMap,E=v.anisotropy>0,it=v.clearcoat>0,at=v.dispersion>0,_=v.retroreflectivity>0,F=v.iridescence>0,P=v.sheen>0,Z=v.transmission>0,se=E&&!!v.anisotropyMap,ve=it&&!!v.clearcoatMap,Ie=it&&!!v.clearcoatNormalMap,H=it&&!!v.clearcoatRoughnessMap,j=F&&!!v.iridescenceMap,de=F&&!!v.iridescenceThicknessMap,L=P&&!!v.sheenColorMap,Pe=P&&!!v.sheenRoughnessMap,Le=!!v.specularMap,fe=!!v.specularColorMap,ge=!!v.specularIntensityMap,_e=Z&&!!v.transmissionMap,B=Z&&!!v.thicknessMap,Fe=!!v.gradientMap,ne=!!v.alphaMap,Me=v.alphaTest>0,we=!!v.alphaHash,me=!!v.extensions,ke=bn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=t.toneMapping);let We={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:et,fragmentShader:q,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ye,batchingColor:ye&&Y._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Y.instanceColor!==null,instancingMorph:Ye&&Y.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:tt,envMap:oe,envMapMode:oe&&le.mapping,envMapCubeUVHeight:W,aoMap:ue,lightMap:xe,bumpMap:ie,normalMap:re,displacementMap:Oe,emissiveMap:qe,normalMapObjectSpace:re&&v.normalMapType===LC,normalMapTangentSpace:re&&v.normalMapType===Gh,packedNormalMap:re&&v.normalMapType===Gh&&f3(v.normalMap.format),metalnessMap:He,roughnessMap:Be,anisotropy:E,anisotropyMap:se,clearcoat:it,clearcoatMap:ve,clearcoatNormalMap:Ie,clearcoatRoughnessMap:H,dispersion:at,retroreflection:_,iridescence:F,iridescenceMap:j,iridescenceThicknessMap:de,sheen:P,sheenColorMap:L,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:fe,specularIntensityMap:ge,transmission:Z,transmissionMap:_e,thicknessMap:B,gradientMap:Fe,opaque:v.transparent===!1&&v.blending===tc&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:we,combine:v.combine,mapUv:Ge&&m(v.map.channel),aoMapUv:ue&&m(v.aoMap.channel),lightMapUv:xe&&m(v.lightMap.channel),bumpMapUv:ie&&m(v.bumpMap.channel),normalMapUv:re&&m(v.normalMap.channel),displacementMapUv:Oe&&m(v.displacementMap.channel),emissiveMapUv:qe&&m(v.emissiveMap.channel),metalnessMapUv:He&&m(v.metalnessMap.channel),roughnessMapUv:Be&&m(v.roughnessMap.channel),anisotropyMapUv:se&&m(v.anisotropyMap.channel),clearcoatMapUv:ve&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:L&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(v.sheenRoughnessMap.channel),specularMapUv:Le&&m(v.specularMap.channel),specularColorMapUv:fe&&m(v.specularColorMap.channel),specularIntensityMapUv:ge&&m(v.specularIntensityMap.channel),transmissionMapUv:_e&&m(v.transmissionMap.channel),thicknessMapUv:B&&m(v.thicknessMap.channel),alphaMapUv:ne&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||E),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Ge||ne),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:be,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&kt.getTransfer(v.map.colorSpace)===Wt,decodeVideoTextureEmissive:qe&&v.emissiveMap.isVideoTexture===!0&&kt.getTransfer(v.emissiveMap.colorSpace)===Wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zo,flipSided:v.side===go,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||ye)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function I(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)A.push(w),A.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(A,v),g(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function g(v,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function y(v){let A=d[v.type],w;if(A){let D=tr[A];w=JC.clone(D.uniforms)}else w=v.uniforms;return w}function x(v,A){let w=u.get(A);return w!==void 0?++w.usedTimes:(w=new l3(t,A,v,n),c.push(w),u.set(A,w)),w}function C(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){i.remove(v)}function T(){i.dispose()}return{getParameters:S,getProgramCacheKey:I,getUniforms:y,acquireProgram:x,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:T}}function d3(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function p3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function I_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function x_(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function i(f,d,m,S,I,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,materialVariant:s(f),groupOrder:S,renderOrder:f.renderOrder,z:I,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.materialVariant=s(f),g.groupOrder=S,g.renderOrder=f.renderOrder,g.z=I,g.group=p),e++,g}function l(f,d,m,S,I,p,g){g.reversedDepth===!0&&(I=-I);let y=i(f,d,m,S,I,p);m.transmission>0?o.push(y):m.transparent===!0?n.push(y):a.push(y)}function c(f,d,m,S,I,p){let g=i(f,d,m,S,I,p);m.transmission>0?o.unshift(g):m.transparent===!0?n.unshift(g):a.unshift(g)}function u(f,d){a.length>1&&a.sort(f||p3),o.length>1&&o.sort(d||I_),n.length>1&&n.sort(d||I_)}function h(){for(let f=e,d=t.length;f<d;f++){let m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:u}}function h3(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new x_,t.set(o,[s])):n>=r.length?(s=new x_,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function m3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new z,color:new bt};break;case"SpotLight":a={position:new z,direction:new z,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new z,color:new bt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new z,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":a={color:new bt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=a,a}}}function I3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var x3=0;function g3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function F3(t){let e=new m3,a=I3(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new z);let n=new z,r=new oa,s=new oa;function i(c){let u=0,h=0,f=0;for(let Y=0;Y<9;Y++)o.probe[Y].set(0,0,0);let d=0,m=0,S=0,I=0,p=0,g=0,y=0,x=0,C=0,b=0,T=0,v=0,A=0,w=0;c.sort(g3);for(let Y=0,V=c.length;Y<V;Y++){let N=c[Y],k=N.color,ae=N.intensity,J=N.distance,le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ws?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*ae,h+=k.g*ae,f+=k.b*ae;else if(N.isLightProbe){for(let W=0;W<9;W++)o.probe[W].addScaledVector(N.sh.coefficients[W],ae);w++}else if(N.isSunLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let K=N.shadow,$=a.get(N);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),o.sunShadow[m]=$,o.sunShadowMap[m]=le;let De=K.getViewportCount();for(let be=0;be<De;be++)o.sunShadowMatrix[S+be]=K.getMatrix(be),o.sunShadowCascade[S+be]=K._cascadeData[be];S+=De,m++}o.sun[d]=W,d++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let K=N.shadow,$=a.get(N);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,o.directionalShadow[I]=$,o.directionalShadowMap[I]=le,o.directionalShadowMatrix[I]=N.shadow.matrix,C++}o.directional[I]=W,I++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(k).multiplyScalar(ae),W.distance=J,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,o.spot[g]=W;let K=N.shadow;if(N.map&&(o.spotLightMap[v]=N.map,v++,K.updateMatrices(N),N.castShadow&&A++),o.spotLightMatrix[g]=K.matrix,N.castShadow){let $=a.get(N);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,o.spotShadow[g]=$,o.spotShadowMap[g]=le,T++}g++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(k).multiplyScalar(ae),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),o.rectArea[y]=W,y++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let K=N.shadow,$=a.get(N);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,o.pointShadow[p]=$,o.pointShadowMap[p]=le,o.pointShadowMatrix[p]=N.shadow.matrix,b++}o.point[p]=W,p++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(ae),W.groundColor.copy(N.groundColor).multiplyScalar(ae),o.hemi[x]=W,x++}}y>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ke.LTC_FLOAT_1,o.rectAreaLTC2=Ke.LTC_FLOAT_2):(o.rectAreaLTC1=Ke.LTC_HALF_1,o.rectAreaLTC2=Ke.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=f;let D=o.hash;(D.sunLength!==d||D.directionalLength!==I||D.pointLength!==p||D.spotLength!==g||D.rectAreaLength!==y||D.hemiLength!==x||D.numSunShadows!==m||D.numDirectionalShadows!==C||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==v||D.numLightProbes!==w)&&(o.sun.length=d,o.directional.length=I,o.spot.length=g,o.rectArea.length=y,o.point.length=p,o.hemi.length=x,o.sunShadow.length=m,o.sunShadowMap.length=m,o.sunShadowMatrix.length=S,o.sunShadowCascade.length=S,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.directionalShadowMatrix.length=C,o.pointShadow.length=b,o.pointShadowMap.length=b,o.pointShadowMatrix.length=b,o.spotShadow.length=T,o.spotShadowMap.length=T,o.spotLightMatrix.length=T+v-A,o.spotLightMap.length=v,o.numSpotLightShadowsWithMaps=A,o.numLightProbes=w,D.sunLength=d,D.directionalLength=I,D.pointLength=p,D.spotLength=g,D.rectAreaLength=y,D.hemiLength=x,D.numSunShadows=m,D.numDirectionalShadows=C,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=v,D.numLightProbes=w,o.version=x3++)}function l(c,u){let h=0,f=0,d=0,m=0,S=0,I=0,p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let x=c[g];if(x.isSunLight){let C=o.sun[h];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),h++}else if(x.isDirectionalLight){let C=o.directional[f];C.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),f++}else if(x.isSpotLight){let C=o.spot[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let C=o.rectArea[S];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),S++}else if(x.isPointLight){let C=o.point[d];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let C=o.hemi[I];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),I++}}}return{setup:i,setupView:l,state:o}}function g_(t){let e=new F3(t),a=[],o=[],n=[];function r(f){h.camera=f,a.length=0,o.length=0,n.length=0}function s(f){a.push(f)}function i(f){o.push(f)}function l(f){n.push(f)}function c(){e.setup(a)}function u(f){e.setupView(a,f)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function S3(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new g_(t),e.set(n,[i])):r>=s.length?(i=new g_(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var v3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
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
}`,M3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],C3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],F_=new oa,au=new z,Dg=new z;function _3(t,e,a){let o=new ql,n=new Ne,r=new Ne,s=new da,i=new Hp,l=new Vp,c={},u=a.maxTextureSize,h={[bs]:go,[go]:bs,[Zo]:Zo},f=new Xo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:v3,fragmentShader:y3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new xo;m.setAttribute("position",new ro(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ma(m,f),I=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let p=this.type;this.render=function(b,T,v){if(I.enabled===!1||I.autoUpdate===!1&&I.needsUpdate===!1||b.length===0)return;this.type===cC&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wf);let A=t.getRenderTarget(),w=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(jn),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let V=p!==this.type;V&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){let ae=b[N],J=ae.shadow;if(J===void 0){xt("WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);let le=J.getFrameExtents();n.multiply(le),r.copy(J.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/le.x),n.x=r.x*le.x,J.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/le.y),n.y=r.y*le.y,J.mapSize.y=r.y));let W=t.state.buffers.depth.getReversed();if(J.camera._reversedDepth=W,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ec){if(ae.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new wo(n.x,n.y,{format:ws,type:wn,minFilter:Ba,magFilter:Ba,generateMipmaps:!1}),J.map.texture.name=ae.name+".shadowMap",J.map.depthTexture=new Ss(n.x,n.y,An),J.map.depthTexture.name=ae.name+".shadowMapDepth",J.map.depthTexture.format=Jn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qa,J.map.depthTexture.magFilter=qa}else ae.isPointLight?(J.map=new Zh(n.x),J.map.depthTexture=new Pp(n.x,Tn)):(J.map=new wo(n.x,n.y),J.map.depthTexture=new Ss(n.x,n.y,Tn)),J.map.depthTexture.name=ae.name+".shadowMap",J.map.depthTexture.format=Jn,this.type===Wf?(J.map.depthTexture.compareFunction=W?Wh:qh,J.map.depthTexture.minFilter=Ba,J.map.depthTexture.magFilter=Ba):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qa,J.map.depthTexture.magFilter=qa);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==n.x||J.map.height!==n.y)&&J.map.setSize(n.x,n.y);let K=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ae.isPointLight!==!0&&J.updateMatrices(ae,v);for(let $=0;$<K;$++){let De=J.getCamera($);if(ae.isPointLight){let be=J.camera,et=J.matrix,q=ae.distance||be.far;q!==be.far&&(be.far=q,be.updateProjectionMatrix()),au.setFromMatrixPosition(ae.matrixWorld),be.position.copy(au),Dg.copy(be.position),Dg.add(M3[$]),be.up.copy(C3[$]),be.lookAt(Dg),be.updateMatrixWorld(),et.makeTranslation(-au.x,-au.y,-au.z),F_.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),J._frustum.setFromProjectionMatrix(F_,be.coordinateSystem,be.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)t.setRenderTarget(J.map,$),t.clear();else{$===0&&(t.setRenderTarget(J.map),t.clear());let be=J.getViewport($);s.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),Y.viewport(s)}o=J.getFrustum($),x(T,v,De,ae,this.type)}J.isPointLightShadow!==!0&&this.type===ec&&g(J,v),J.needsUpdate=!1}p=this.type,I.needsUpdate=!1,t.setRenderTarget(A,w,D)};function g(b,T){let v=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new wo(n.x,n.y,{format:ws,type:wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,v,f,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,v,d,S,null)}function y(b,T,v,A){let w=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)w=D;else if(w=v.isPointLight===!0?l:i,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let Y=w.uuid,V=T.uuid,N=c[Y];N===void 0&&(N={},c[Y]=N);let k=N[V];k===void 0&&(k=w.clone(),N[V]=k,T.addEventListener("dispose",C)),w=k}if(w.visible=T.visible,w.wireframe=T.wireframe,A===ec?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Y=t.properties.get(w);Y.light=v}return w}function x(b,T,v,A,w){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ec)&&(!b.frustumCulled||b.intersectsFrustum(o))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let V=e.update(b),N=b.material;if(Array.isArray(N)){let k=V.groups;for(let ae=0,J=k.length;ae<J;ae++){let le=k[ae],W=N[le.materialIndex];if(W&&W.visible){let K=y(b,W,A,w);b.onBeforeShadow(t,b,T,v,V,K,le),t.renderBufferDirect(v,null,V,K,b,le),b.onAfterShadow(t,b,T,v,V,K,le)}}}else if(N.visible){let k=y(b,N,A,w);b.onBeforeShadow(t,b,T,v,V,k,null),t.renderBufferDirect(v,null,V,k,b,null),b.onAfterShadow(t,b,T,v,V,k,null)}}let Y=b.children;for(let V=0,N=Y.length;V<N;V++)x(Y[V],T,v,A,w)}function C(b){b.target.removeEventListener("dispose",C);for(let v in c){let A=c[v],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function b3(t,e){function a(){let B=!1,Fe=new da,ne=null,Me=new da(0,0,0,0);return{setMask:function(we){ne!==we&&!B&&(t.colorMask(we,we,we,we),ne=we)},setLocked:function(we){B=we},setClear:function(we,me,ke,We,vt){vt===!0&&(we*=We,me*=We,ke*=We),Fe.set(we,me,ke,We),Me.equals(Fe)===!1&&(t.clearColor(we,me,ke,We),Me.copy(Fe))},reset:function(){B=!1,ne=null,Me.set(-1,0,0,0)}}}function o(){let B=!1,Fe=!1,ne=null,Me=null,we=null;return{setReversed:function(me){if(Fe!==me){let ke=e.get("EXT_clip_control");me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Fe=me;let We=we;we=null,this.setClear(We)}},getReversed:function(){return Fe},setTest:function(me){me?te(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(me){ne!==me&&!B&&(t.depthMask(me),ne=me)},setFunc:function(me){if(Fe&&(me=qC[me]),Me!==me){switch(me){case vp:t.depthFunc(t.NEVER);break;case yp:t.depthFunc(t.ALWAYS);break;case Mp:t.depthFunc(t.LESS);break;case Bl:t.depthFunc(t.LEQUAL);break;case Cp:t.depthFunc(t.EQUAL);break;case _p:t.depthFunc(t.GEQUAL);break;case bp:t.depthFunc(t.GREATER);break;case Tp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=me}},setLocked:function(me){B=me},setClear:function(me){we!==me&&(we=me,Fe&&(me=1-me),t.clearDepth(me))},reset:function(){B=!1,ne=null,Me=null,we=null,Fe=!1}}}function n(){let B=!1,Fe=null,ne=null,Me=null,we=null,me=null,ke=null,We=null,vt=null;return{setTest:function(Ft){B||(Ft?te(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(Ft){Fe!==Ft&&!B&&(t.stencilMask(Ft),Fe=Ft)},setFunc:function(Ft,va,Nt){(ne!==Ft||Me!==va||we!==Nt)&&(t.stencilFunc(Ft,va,Nt),ne=Ft,Me=va,we=Nt)},setOp:function(Ft,va,Nt){(me!==Ft||ke!==va||We!==Nt)&&(t.stencilOp(Ft,va,Nt),me=Ft,ke=va,We=Nt)},setLocked:function(Ft){B=Ft},setClear:function(Ft){vt!==Ft&&(t.clearStencil(Ft),vt=Ft)},reset:function(){B=!1,Fe=null,ne=null,Me=null,we=null,me=null,ke=null,We=null,vt=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],S=null,I=!1,p=null,g=null,y=null,x=null,C=null,b=null,T=null,v=new bt(0,0,0),A=0,w=!1,D=null,Y=null,V=null,N=null,k=null,ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,le=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=le>=1):W.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=le>=2);let K=null,$={},De=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),et=new da().fromArray(De),q=new da().fromArray(be);function st(B,Fe,ne,Me){let we=new Uint8Array(4),me=t.createTexture();t.bindTexture(B,me),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ne;ke++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Fe,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(Fe+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return me}let ee={};ee[t.TEXTURE_2D]=st(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=st(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=st(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=st(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),te(t.DEPTH_TEST),s.setFunc(Bl),ie(!1),re(eg),te(t.CULL_FACE),ue(jn);function te(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function Ye(B,Fe){return f[B]!==Fe?(t.bindFramebuffer(B,Fe),f[B]=Fe,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Fe),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ye(B,Fe){let ne=m,Me=!1;if(B){ne=d.get(Fe),ne===void 0&&(ne=[],d.set(Fe,ne));let we=B.textures;if(ne.length!==we.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let me=0,ke=we.length;me<ke;me++)ne[me]=t.COLOR_ATTACHMENT0+me;ne.length=we.length,Me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,Me=!0);Me&&t.drawBuffers(ne)}function Ge(B){return S!==B?(t.useProgram(B),S=B,!0):!1}let tt={[hi]:t.FUNC_ADD,[uC]:t.FUNC_SUBTRACT,[dC]:t.FUNC_REVERSE_SUBTRACT};tt[pC]=t.MIN,tt[hC]=t.MAX;let oe={[mC]:t.ZERO,[IC]:t.ONE,[xC]:t.SRC_COLOR,[ng]:t.SRC_ALPHA,[MC]:t.SRC_ALPHA_SATURATE,[vC]:t.DST_COLOR,[FC]:t.DST_ALPHA,[gC]:t.ONE_MINUS_SRC_COLOR,[rg]:t.ONE_MINUS_SRC_ALPHA,[yC]:t.ONE_MINUS_DST_COLOR,[SC]:t.ONE_MINUS_DST_ALPHA,[CC]:t.CONSTANT_COLOR,[_C]:t.ONE_MINUS_CONSTANT_COLOR,[bC]:t.CONSTANT_ALPHA,[TC]:t.ONE_MINUS_CONSTANT_ALPHA};function ue(B,Fe,ne,Me,we,me,ke,We,vt,Ft){if(B===jn){I===!0&&(Ce(t.BLEND),I=!1);return}if(I===!1&&(te(t.BLEND),I=!0),B!==fC){if(B!==p||Ft!==w){if((g!==hi||C!==hi)&&(t.blendEquation(t.FUNC_ADD),g=hi,C=hi),Ft)switch(B){case tc:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tg:t.blendFunc(t.ONE,t.ONE);break;case ag:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case og:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:It("WebGLState: Invalid blending: ",B);break}else switch(B){case tc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ag:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",B);break}y=null,x=null,b=null,T=null,v.set(0,0,0),A=0,p=B,w=Ft}return}we=we||Fe,me=me||ne,ke=ke||Me,(Fe!==g||we!==C)&&(t.blendEquationSeparate(tt[Fe],tt[we]),g=Fe,C=we),(ne!==y||Me!==x||me!==b||ke!==T)&&(t.blendFuncSeparate(oe[ne],oe[Me],oe[me],oe[ke]),y=ne,x=Me,b=me,T=ke),(We.equals(v)===!1||vt!==A)&&(t.blendColor(We.r,We.g,We.b,vt),v.copy(We),A=vt),p=B,w=!1}function xe(B,Fe){B.side===Zo?Ce(t.CULL_FACE):te(t.CULL_FACE);let ne=B.side===go;Fe&&(ne=!ne),ie(ne),B.blending===tc&&B.transparent===!1?ue(jn):ue(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);let Me=B.stencilWrite;i.setTest(Me),Me&&(i.setMask(B.stencilWriteMask),i.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),i.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),qe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){D!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),D=B)}function re(B){B!==iC?(te(t.CULL_FACE),B!==Y&&(B===eg?t.cullFace(t.BACK):B===lC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),Y=B}function Oe(B){B!==V&&(J&&t.lineWidth(B),V=B)}function qe(B,Fe,ne){B?(te(t.POLYGON_OFFSET_FILL),(N!==Fe||k!==ne)&&(N=Fe,k=ne,s.getReversed()&&(Fe=-Fe),t.polygonOffset(Fe,ne))):Ce(t.POLYGON_OFFSET_FILL)}function He(B){B?te(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Be(B){B===void 0&&(B=t.TEXTURE0+ae-1),K!==B&&(t.activeTexture(B),K=B)}function E(B,Fe,ne){ne===void 0&&(K===null?ne=t.TEXTURE0+ae-1:ne=K);let Me=$[ne];Me===void 0&&(Me={type:void 0,texture:void 0},$[ne]=Me),(Me.type!==B||Me.texture!==Fe)&&(K!==ne&&(t.activeTexture(ne),K=ne),t.bindTexture(B,Fe||ee[B]),Me.type=B,Me.texture=Fe)}function it(){let B=$[K];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function _(){try{t.compressedTexImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function F(){try{t.texSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function P(){try{t.texSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function ve(){try{t.texStorage2D(...arguments)}catch(B){It("WebGLState:",B)}}function Ie(){try{t.texStorage3D(...arguments)}catch(B){It("WebGLState:",B)}}function H(){try{t.texImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function j(){try{t.texImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function de(B){return h[B]!==void 0?h[B]:t.getParameter(B)}function L(B,Fe){h[B]!==Fe&&(t.pixelStorei(B,Fe),h[B]=Fe)}function Pe(B){et.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function Le(B){q.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),q.copy(B))}function fe(B,Fe){let ne=c.get(Fe);ne===void 0&&(ne=new WeakMap,c.set(Fe,ne));let Me=ne.get(B);Me===void 0&&(Me=t.getUniformBlockIndex(Fe,B.name),ne.set(B,Me))}function ge(B,Fe){let Me=c.get(Fe).get(B);l.get(Fe)!==Me&&(t.uniformBlockBinding(Fe,Me,B.__bindingPointIndex),l.set(Fe,Me))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,$={},f={},d=new WeakMap,m=[],S=null,I=!1,p=null,g=null,y=null,x=null,C=null,b=null,T=null,v=new bt(0,0,0),A=0,w=!1,D=null,Y=null,V=null,N=null,k=null,et.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:te,disable:Ce,bindFramebuffer:Ye,drawBuffers:ye,useProgram:Ge,setBlending:ue,setMaterial:xe,setFlipSided:ie,setCullFace:re,setLineWidth:Oe,setPolygonOffset:qe,setScissorTest:He,activeTexture:Be,bindTexture:E,unbindTexture:it,compressedTexImage2D:at,compressedTexImage3D:_,texImage2D:H,texImage3D:j,pixelStorei:L,getParameter:de,updateUBOMapping:fe,uniformBlockBinding:ge,texStorage2D:ve,texStorage3D:Ie,texSubImage2D:F,texSubImage3D:P,compressedTexSubImage2D:Z,compressedTexSubImage3D:se,scissor:Pe,viewport:Le,reset:_e}}function T3(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,F){return m?new OffscreenCanvas(_,F):Tf("canvas")}function I(_,F,P){let Z=1,se=at(_);if((se.width>P||se.height>P)&&(Z=P/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let ve=Math.floor(Z*se.width),Ie=Math.floor(Z*se.height);f===void 0&&(f=S(ve,Ie));let H=F?S(ve,Ie):f;return H.width=ve,H.height=Ie,H.getContext("2d").drawImage(_,0,0,ve,Ie),xt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ve+"x"+Ie+")."),H}else return"data"in _&&xt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),_;return _}function p(_){return _.generateMipmaps}function g(_){t.generateMipmap(_)}function y(_){return _.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?t.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(_,F,P,Z,se,ve=!1){if(_!==null){if(t[_]!==void 0)return t[_];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Ie;Z&&(Ie=e.get("EXT_texture_norm16"),Ie||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=F;if(F===t.RED&&(P===t.FLOAT&&(H=t.R32F),P===t.HALF_FLOAT&&(H=t.R16F),P===t.UNSIGNED_BYTE&&(H=t.R8),P===t.UNSIGNED_SHORT&&Ie&&(H=Ie.R16_EXT),P===t.SHORT&&Ie&&(H=Ie.R16_SNORM_EXT)),F===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(H=t.R8UI),P===t.UNSIGNED_SHORT&&(H=t.R16UI),P===t.UNSIGNED_INT&&(H=t.R32UI),P===t.BYTE&&(H=t.R8I),P===t.SHORT&&(H=t.R16I),P===t.INT&&(H=t.R32I)),F===t.RG&&(P===t.FLOAT&&(H=t.RG32F),P===t.HALF_FLOAT&&(H=t.RG16F),P===t.UNSIGNED_BYTE&&(H=t.RG8),P===t.UNSIGNED_SHORT&&Ie&&(H=Ie.RG16_EXT),P===t.SHORT&&Ie&&(H=Ie.RG16_SNORM_EXT)),F===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(H=t.RG8UI),P===t.UNSIGNED_SHORT&&(H=t.RG16UI),P===t.UNSIGNED_INT&&(H=t.RG32UI),P===t.BYTE&&(H=t.RG8I),P===t.SHORT&&(H=t.RG16I),P===t.INT&&(H=t.RG32I)),F===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(H=t.RGB8UI),P===t.UNSIGNED_SHORT&&(H=t.RGB16UI),P===t.UNSIGNED_INT&&(H=t.RGB32UI),P===t.BYTE&&(H=t.RGB8I),P===t.SHORT&&(H=t.RGB16I),P===t.INT&&(H=t.RGB32I)),F===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),P===t.UNSIGNED_INT&&(H=t.RGBA32UI),P===t.BYTE&&(H=t.RGBA8I),P===t.SHORT&&(H=t.RGBA16I),P===t.INT&&(H=t.RGBA32I)),F===t.RGB&&(P===t.UNSIGNED_SHORT&&Ie&&(H=Ie.RGB16_EXT),P===t.SHORT&&Ie&&(H=Ie.RGB16_SNORM_EXT),P===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),F===t.RGBA){let j=ve?bf:kt.getTransfer(se);P===t.FLOAT&&(H=t.RGBA32F),P===t.HALF_FLOAT&&(H=t.RGBA16F),P===t.UNSIGNED_BYTE&&(H=j===Wt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT&&Ie&&(H=Ie.RGBA16_EXT),P===t.SHORT&&Ie&&(H=Ie.RGBA16_SNORM_EXT),P===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function C(_,F){let P;return _?F===null||F===Tn||F===oc?P=t.DEPTH24_STENCIL8:F===An?P=t.DEPTH32F_STENCIL8:F===ac&&(P=t.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Tn||F===oc?P=t.DEPTH_COMPONENT24:F===An?P=t.DEPTH_COMPONENT32F:F===ac&&(P=t.DEPTH_COMPONENT16),P}function b(_,F){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==qa&&_.minFilter!==Ba?Math.log2(Math.max(F.width,F.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?F.mipmaps.length:1}function T(_){let F=_.target;F.removeEventListener("dispose",T),A(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function v(_){let F=_.target;F.removeEventListener("dispose",v),D(F)}function A(_){let F=o.get(_);if(F.__webglInit===void 0)return;let P=_.source,Z=d.get(P);if(Z){let se=Z[F.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(_),Object.keys(Z).length===0&&d.delete(P)}o.remove(_)}function w(_){let F=o.get(_);t.deleteTexture(F.__webglTexture);let P=_.source,Z=d.get(P);delete Z[F.__cacheKey],s.memory.textures--}function D(_){let F=o.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),o.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let se=0;se<F.__webglFramebuffer[Z].length;se++)t.deleteFramebuffer(F.__webglFramebuffer[Z][se]);else t.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)t.deleteFramebuffer(F.__webglFramebuffer[Z]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let P=_.textures;for(let Z=0,se=P.length;Z<se;Z++){let ve=o.get(P[Z]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),o.remove(P[Z])}o.remove(_)}let Y=0;function V(){Y=0}function N(){return Y}function k(_){Y=_}function ae(){let _=Y;return _>=n.maxTextures&&xt("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,_}function J(_){let F=[];return F.push(_.wrapS),F.push(_.wrapT),F.push(_.wrapR||0),F.push(_.magFilter),F.push(_.minFilter),F.push(_.anisotropy),F.push(_.internalFormat),F.push(_.format),F.push(_.type),F.push(_.generateMipmaps),F.push(_.premultiplyAlpha),F.push(_.flipY),F.push(_.unpackAlignment),F.push(_.colorSpace),F.join()}function le(_,F){let P=o.get(_);if(_.isVideoTexture&&E(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&P.__version!==_.version){let Z=_.image;if(Z===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(P,_,F);return}}else _.isExternalTexture&&(P.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+F)}function W(_,F){let P=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){Ce(P,_,F);return}else _.isExternalTexture&&(P.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+F)}function K(_,F){let P=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){Ce(P,_,F);return}a.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+F)}function $(_,F){let P=o.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&P.__version!==_.version){Ye(P,_,F);return}a.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+F)}let De={[Kn]:t.REPEAT,[cn]:t.CLAMP_TO_EDGE,[Ap]:t.MIRRORED_REPEAT},be={[qa]:t.NEAREST,[EC]:t.NEAREST_MIPMAP_NEAREST,[Zf]:t.NEAREST_MIPMAP_LINEAR,[Ba]:t.LINEAR,[sh]:t.LINEAR_MIPMAP_NEAREST,[$n]:t.LINEAR_MIPMAP_LINEAR},et={[PC]:t.NEVER,[OC]:t.ALWAYS,[BC]:t.LESS,[qh]:t.LEQUAL,[UC]:t.EQUAL,[Wh]:t.GEQUAL,[kC]:t.GREATER,[NC]:t.NOTEQUAL};function q(_,F){if(F.type===An&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===Ba||F.magFilter===sh||F.magFilter===Zf||F.magFilter===$n||F.minFilter===Ba||F.minFilter===sh||F.minFilter===Zf||F.minFilter===$n)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(_,t.TEXTURE_WRAP_S,De[F.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,De[F.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,De[F.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,be[F.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,be[F.minFilter]),F.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,et[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===qa||F.minFilter!==Zf&&F.minFilter!==$n||F.type===An&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||o.get(F).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,n.getMaxAnisotropy())),o.get(F).__currentAnisotropy=F.anisotropy}}}function st(_,F){let P=!1;_.__webglInit===void 0&&(_.__webglInit=!0,F.addEventListener("dispose",T));let Z=F.source,se=d.get(Z);se===void 0&&(se={},d.set(Z,se));let ve=J(F);if(ve!==_.__cacheKey){se[ve]===void 0&&(se[ve]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,P=!0),se[ve].usedTimes++;let Ie=se[_.__cacheKey];Ie!==void 0&&(se[_.__cacheKey].usedTimes--,Ie.usedTimes===0&&w(F)),_.__cacheKey=ve,_.__webglTexture=se[ve].texture}return P}function ee(_,F,P){return Math.floor(Math.floor(_/P)/F)}function te(_,F,P,Z){let ve=_.updateRanges;if(ve.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,F.width,F.height,P,Z,F.data);else{ve.sort((L,Pe)=>L.start-Pe.start);let Ie=0;for(let L=1;L<ve.length;L++){let Pe=ve[Ie],Le=ve[L],fe=Pe.start+Pe.count,ge=ee(Le.start,F.width,4),_e=ee(Pe.start,F.width,4);Le.start<=fe+1&&ge===_e&&ee(Le.start+Le.count-1,F.width,4)===ge?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Ie,ve[Ie]=Le)}ve.length=Ie+1;let H=a.getParameter(t.UNPACK_ROW_LENGTH),j=a.getParameter(t.UNPACK_SKIP_PIXELS),de=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,F.width);for(let L=0,Pe=ve.length;L<Pe;L++){let Le=ve[L],fe=Math.floor(Le.start/4),ge=Math.ceil(Le.count/4),_e=fe%F.width,B=Math.floor(fe/F.width),Fe=ge,ne=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),a.pixelStorei(t.UNPACK_SKIP_ROWS,B),a.texSubImage2D(t.TEXTURE_2D,0,_e,B,Fe,ne,P,Z,F.data)}_.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,H),a.pixelStorei(t.UNPACK_SKIP_PIXELS,j),a.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Ce(_,F,P){let Z=t.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),F.isData3DTexture&&(Z=t.TEXTURE_3D);let se=st(_,F),ve=F.source;a.bindTexture(Z,_.__webglTexture,t.TEXTURE0+P);let Ie=o.get(ve);if(ve.version!==Ie.__version||se===!0){if(a.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ne=kt.getPrimaries(kt.workingColorSpace),Me=F.colorSpace===wr?null:kt.getPrimaries(F.colorSpace),we=F.colorSpace===wr||ne===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment);let j=I(F.image,!1,n.maxTextureSize);j=it(F,j);let de=r.convert(F.format,F.colorSpace),L=r.convert(F.type),Pe=x(F.internalFormat,de,L,F.normalized,F.colorSpace,F.isVideoTexture);q(Z,F);let Le,fe=F.mipmaps,ge=F.isVideoTexture!==!0,_e=Ie.__version===void 0||se===!0,B=ve.dataReady,Fe=b(F,j);if(F.isDepthTexture)Pe=C(F.format===As,F.type),_e&&(ge?a.texStorage2D(t.TEXTURE_2D,1,Pe,j.width,j.height):a.texImage2D(t.TEXTURE_2D,0,Pe,j.width,j.height,0,de,L,null));else if(F.isDataTexture)if(fe.length>0){ge&&_e&&a.texStorage2D(t.TEXTURE_2D,Fe,Pe,fe[0].width,fe[0].height);for(let ne=0,Me=fe.length;ne<Me;ne++)Le=fe[ne],ge?B&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,de,L,Le.data):a.texImage2D(t.TEXTURE_2D,ne,Pe,Le.width,Le.height,0,de,L,Le.data);F.generateMipmaps=!1}else ge?(_e&&a.texStorage2D(t.TEXTURE_2D,Fe,Pe,j.width,j.height),B&&te(F,j,de,L)):a.texImage2D(t.TEXTURE_2D,0,Pe,j.width,j.height,0,de,L,j.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){ge&&_e&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Pe,fe[0].width,fe[0].height,j.depth);for(let ne=0,Me=fe.length;ne<Me;ne++)if(Le=fe[ne],F.format!==fn)if(de!==null)if(ge){if(B)if(F.layerUpdates.size>0){let we=Tg(Le.width,Le.height,F.format,F.type);for(let me of F.layerUpdates){let ke=Le.data.subarray(me*we/Le.data.BYTES_PER_ELEMENT,(me+1)*we/Le.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,me,Le.width,Le.height,1,de,ke)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,j.depth,de,Le.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Pe,Le.width,Le.height,j.depth,0,Le.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?B&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,j.depth,de,L,Le.data):a.texImage3D(t.TEXTURE_2D_ARRAY,ne,Pe,Le.width,Le.height,j.depth,0,de,L,Le.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{ge&&_e&&a.texStorage2D(t.TEXTURE_2D,Fe,Pe,fe[0].width,fe[0].height);for(let ne=0,Me=fe.length;ne<Me;ne++)Le=fe[ne],F.format!==fn?de!==null?ge?B&&a.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,de,Le.data):a.compressedTexImage2D(t.TEXTURE_2D,ne,Pe,Le.width,Le.height,0,Le.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?B&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,de,L,Le.data):a.texImage2D(t.TEXTURE_2D,ne,Pe,Le.width,Le.height,0,de,L,Le.data)}else if(F.isDataArrayTexture)if(ge){if(_e&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Pe,j.width,j.height,j.depth),B)if(F.layerUpdates.size>0){let ne=Tg(j.width,j.height,F.format,F.type);for(let Me of F.layerUpdates){let we=j.data.subarray(Me*ne/j.data.BYTES_PER_ELEMENT,(Me+1)*ne/j.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,j.width,j.height,1,de,L,we)}F.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,L,j.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,j.width,j.height,j.depth,0,de,L,j.data);else if(F.isData3DTexture)ge?(_e&&a.texStorage3D(t.TEXTURE_3D,Fe,Pe,j.width,j.height,j.depth),B&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,L,j.data)):a.texImage3D(t.TEXTURE_3D,0,Pe,j.width,j.height,j.depth,0,de,L,j.data);else if(F.isFramebufferTexture){if(_e)if(ge)a.texStorage2D(t.TEXTURE_2D,Fe,Pe,j.width,j.height);else{let ne=j.width,Me=j.height;for(let we=0;we<Fe;we++)a.texImage2D(t.TEXTURE_2D,we,Pe,ne,Me,0,de,L,null),ne>>=1,Me>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in t){let ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),j.parentNode!==ne){ne.appendChild(j),h.add(F),ne.onpaint=Me=>{let we=Me.changedElements;for(let me of h)we.includes(me.image)&&(me.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{let we=t.RGBA,me=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,we,me,ke,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ge&&_e){let ne=at(fe[0]);a.texStorage2D(t.TEXTURE_2D,Fe,Pe,ne.width,ne.height)}for(let ne=0,Me=fe.length;ne<Me;ne++)Le=fe[ne],ge?B&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,L,Le):a.texImage2D(t.TEXTURE_2D,ne,Pe,de,L,Le);F.generateMipmaps=!1}else if(ge){if(_e){let ne=at(j);a.texStorage2D(t.TEXTURE_2D,Fe,Pe,ne.width,ne.height)}B&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,de,L,j)}else a.texImage2D(t.TEXTURE_2D,0,Pe,de,L,j);p(F)&&g(Z),Ie.__version=ve.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function Ye(_,F,P){if(F.image.length!==6)return;let Z=st(_,F),se=F.source;a.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+P);let ve=o.get(se);if(se.version!==ve.__version||Z===!0){a.activeTexture(t.TEXTURE0+P);let Ie=kt.getPrimaries(kt.workingColorSpace),H=F.colorSpace===wr?null:kt.getPrimaries(F.colorSpace),j=F.colorSpace===wr||Ie===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=F.isCompressedTexture||F.image[0].isCompressedTexture,L=F.image[0]&&F.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!de&&!L?Pe[me]=I(F.image[me],!0,n.maxCubemapSize):Pe[me]=L?F.image[me].image:F.image[me],Pe[me]=it(F,Pe[me]);let Le=Pe[0],fe=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),_e=x(F.internalFormat,fe,ge,F.normalized,F.colorSpace),B=F.isVideoTexture!==!0,Fe=ve.__version===void 0||Z===!0,ne=se.dataReady,Me=b(F,Le);q(t.TEXTURE_CUBE_MAP,F);let we;if(de){B&&Fe&&a.texStorage2D(t.TEXTURE_CUBE_MAP,Me,_e,Le.width,Le.height);for(let me=0;me<6;me++){we=Pe[me].mipmaps;for(let ke=0;ke<we.length;ke++){let We=we[ke];F.format!==fn?fe!==null?B?ne&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,We.width,We.height,fe,We.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,_e,We.width,We.height,0,We.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,We.width,We.height,fe,ge,We.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,_e,We.width,We.height,0,fe,ge,We.data)}}}else{if(we=F.mipmaps,B&&Fe){we.length>0&&Me++;let me=at(Pe[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,Me,_e,me.width,me.height)}for(let me=0;me<6;me++)if(L){B?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,fe,ge,Pe[me].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,Pe[me].width,Pe[me].height,0,fe,ge,Pe[me].data);for(let ke=0;ke<we.length;ke++){let vt=we[ke].image[me].image;B?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,vt.width,vt.height,fe,ge,vt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,_e,vt.width,vt.height,0,fe,ge,vt.data)}}else{B?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,fe,ge,Pe[me]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,fe,ge,Pe[me]);for(let ke=0;ke<we.length;ke++){let We=we[ke];B?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,fe,ge,We.image[me]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,_e,fe,ge,We.image[me])}}}p(F)&&g(t.TEXTURE_CUBE_MAP),ve.__version=se.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function ye(_,F,P,Z,se,ve){let Ie=r.convert(P.format,P.colorSpace),H=r.convert(P.type),j=x(P.internalFormat,Ie,H,P.normalized,P.colorSpace),de=o.get(F),L=o.get(P);if(L.__renderTarget=F,!de.__hasExternalTextures){let Pe=Math.max(1,F.width>>ve),Le=Math.max(1,F.height>>ve);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?a.texImage3D(se,ve,j,Pe,Le,F.depth,0,Ie,H,null):a.texImage2D(se,ve,j,Pe,Le,0,Ie,H,null)}a.bindFramebuffer(t.FRAMEBUFFER,_),Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,se,L.__webglTexture,0,He(F)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,se,L.__webglTexture,ve),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(_,F,P){if(t.bindRenderbuffer(t.RENDERBUFFER,_),F.depthBuffer){let Z=F.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,ve=C(F.stencilBuffer,se),Ie=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He(F),ve,F.width,F.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,He(F),ve,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,ve,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,_)}else{let Z=F.textures;for(let se=0;se<Z.length;se++){let ve=Z[se],Ie=r.convert(ve.format,ve.colorSpace),H=r.convert(ve.type),j=x(ve.internalFormat,Ie,H,ve.normalized,ve.colorSpace);Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He(F),j,F.width,F.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,He(F),j,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,j,F.width,F.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function tt(_,F,P){let Z=F.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,_),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=o.get(F.depthTexture);if(se.__renderTarget=F,(!se.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),Z){if(se.__webglInit===void 0&&(se.__webglInit=!0,F.depthTexture.addEventListener("dispose",T)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),q(t.TEXTURE_CUBE_MAP,F.depthTexture);let de=r.convert(F.depthTexture.format),L=r.convert(F.depthTexture.type),Pe;F.depthTexture.format===Jn?Pe=t.DEPTH_COMPONENT24:F.depthTexture.format===As&&(Pe=t.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,F.width,F.height,0,de,L,null)}}else le(F.depthTexture,0);let ve=se.__webglTexture,Ie=He(F),H=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,j=F.depthTexture.format===As?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(F.depthTexture.format===Jn)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,H,ve,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,j,H,ve,0);else if(F.depthTexture.format===As)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,H,ve,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,j,H,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(_){let F=o.get(_),P=_.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==_.depthTexture){let Z=_.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),Z){let se=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),F.__depthDisposeCallback=se}F.__boundDepthTexture=Z}if(_.depthTexture&&!F.__autoAllocateDepthBuffer)if(P)for(let Z=0;Z<6;Z++)tt(F.__webglFramebuffer[Z],_,Z);else{let Z=_.texture.mipmaps;Z&&Z.length>0?tt(F.__webglFramebuffer[0],_,0):tt(F.__webglFramebuffer,_,0)}else if(P){F.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[Z]),F.__webglDepthbuffer[Z]===void 0)F.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ge(F.__webglDepthbuffer[Z],_,!1);else{let se=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=F.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ve)}}else{let Z=_.texture.mipmaps;if(Z&&Z.length>0?a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=t.createRenderbuffer(),Ge(F.__webglDepthbuffer,_,!1);else{let se=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=F.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ve)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(_,F,P){let Z=o.get(_);F!==void 0&&ye(Z.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&oe(_)}function xe(_){let F=_.texture,P=o.get(_),Z=o.get(F);_.addEventListener("dispose",v);let se=_.textures,ve=_.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=F.version,s.memory.textures++),ve){P.__webglFramebuffer=[];for(let H=0;H<6;H++)if(F.mipmaps&&F.mipmaps.length>0){P.__webglFramebuffer[H]=[];for(let j=0;j<F.mipmaps.length;j++)P.__webglFramebuffer[H][j]=t.createFramebuffer()}else P.__webglFramebuffer[H]=t.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){P.__webglFramebuffer=[];for(let H=0;H<F.mipmaps.length;H++)P.__webglFramebuffer[H]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let H=0,j=se.length;H<j;H++){let de=o.get(se[H]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),s.memory.textures++)}if(_.samples>0&&Be(_)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let H=0;H<se.length;H++){let j=se[H];P.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[H]);let de=r.convert(j.format,j.colorSpace),L=r.convert(j.type),Pe=x(j.internalFormat,de,L,j.normalized,j.colorSpace,_.isXRRenderTarget===!0),Le=He(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Pe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,P.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(P.__webglDepthRenderbuffer,_,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ve){a.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),q(t.TEXTURE_CUBE_MAP,F);for(let H=0;H<6;H++)if(F.mipmaps&&F.mipmaps.length>0)for(let j=0;j<F.mipmaps.length;j++)ye(P.__webglFramebuffer[H][j],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,j);else ye(P.__webglFramebuffer[H],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);p(F)&&g(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Ie){for(let H=0,j=se.length;H<j;H++){let de=se[H],L=o.get(de),Pe=t.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Pe=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Pe,L.__webglTexture),q(Pe,de),ye(P.__webglFramebuffer,_,de,t.COLOR_ATTACHMENT0+H,Pe,0),p(de)&&g(Pe)}a.unbindTexture()}else{let H=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(H=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(H,Z.__webglTexture),q(H,F),F.mipmaps&&F.mipmaps.length>0)for(let j=0;j<F.mipmaps.length;j++)ye(P.__webglFramebuffer[j],_,F,t.COLOR_ATTACHMENT0,H,j);else ye(P.__webglFramebuffer,_,F,t.COLOR_ATTACHMENT0,H,0);p(F)&&g(H),a.unbindTexture()}_.depthBuffer&&oe(_)}function ie(_){let F=_.textures;for(let P=0,Z=F.length;P<Z;P++){let se=F[P];if(p(se)){let ve=y(_),Ie=o.get(se).__webglTexture;a.bindTexture(ve,Ie),g(ve),a.unbindTexture()}}}let re=[],Oe=[];function qe(_){if(_.samples>0){if(Be(_)===!1){let F=_.textures,P=_.width,Z=_.height,se=t.COLOR_BUFFER_BIT,ve=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=o.get(_),H=F.length>1;if(H)for(let de=0;de<F.length;de++)a.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let j=_.texture.mipmaps;j&&j.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let de=0;de<F.length;de++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[de]);let L=o.get(F[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,L,0)}t.blitFramebuffer(0,0,P,Z,0,0,P,Z,se,t.NEAREST),l===!0&&(re.length=0,Oe.length=0,re.push(t.COLOR_ATTACHMENT0+de),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(re.push(ve),Oe.push(ve),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Oe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let de=0;de<F.length;de++){a.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[de]);let L=o.get(F[de]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,L,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){let F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[F])}}}function He(_){return Math.min(n.maxSamples,_.samples)}function Be(_){let F=o.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function E(_){let F=s.render.frame;u.get(_)!==F&&(u.set(_,F),_.update())}function it(_,F){let P=_.colorSpace,Z=_.format,se=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||P!==_f&&P!==wr&&(kt.getTransfer(P)===Wt?(Z!==fn||se!==Eo)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",P)),F}function at(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=le,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=ue,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function A3(t,e){function a(o,n=wr){let r,s=kt.getTransfer(n);if(o===Eo)return t.UNSIGNED_BYTE;if(o===lh)return t.UNSIGNED_SHORT_4_4_4_4;if(o===ch)return t.UNSIGNED_SHORT_5_5_5_1;if(o===Ig)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===xg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===hg)return t.BYTE;if(o===mg)return t.SHORT;if(o===ac)return t.UNSIGNED_SHORT;if(o===ih)return t.INT;if(o===Tn)return t.UNSIGNED_INT;if(o===An)return t.FLOAT;if(o===wn)return t.HALF_FLOAT;if(o===gg)return t.ALPHA;if(o===Fg)return t.RGB;if(o===fn)return t.RGBA;if(o===Jn)return t.DEPTH_COMPONENT;if(o===As)return t.DEPTH_STENCIL;if(o===Sg)return t.RED;if(o===fh)return t.RED_INTEGER;if(o===ws)return t.RG;if(o===uh)return t.RG_INTEGER;if(o===dh)return t.RGBA_INTEGER;if(o===Kf||o===Jf||o===Qf||o===jf)if(s===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Kf)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Jf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Qf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===jf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Kf)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Qf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===jf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ph||o===hh||o===mh||o===Ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===hh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xh||o===gh||o===Fh||o===Sh||o===vh||o===$f||o===yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===xh||o===gh)return s===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===Fh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===Sh)return r.COMPRESSED_R11_EAC;if(o===vh)return r.COMPRESSED_SIGNED_R11_EAC;if(o===$f)return r.COMPRESSED_RG11_EAC;if(o===yh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===Mh||o===Ch||o===_h||o===bh||o===Th||o===Ah||o===wh||o===Eh||o===Rh||o===Lh||o===Dh||o===Ph||o===Bh||o===Uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===Mh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ch)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===_h)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===bh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Th)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ah)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===wh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Eh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Rh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Lh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Dh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ph)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Bh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Uh)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===kh||o===Nh||o===Oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===kh)return s===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===zh||o===Hh||o===eu||o===Vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===zh)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===eu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===oc?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var w3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E3=`
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

}`,Hg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new Df(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Xo({vertexShader:w3,fragmentShader:E3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Ma(new pi(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vg=class extends Qn{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,S=typeof XRWebGLBinding<"u",I=new Hg,p={},g=a.getContextAttributes(),y=null,x=null,C=[],b=[],T=new Ne,v=null,A=null,w=new no;w.viewport=new da;let D=new no;D.viewport=new da;let Y=[w,D],V=new ah,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=C[ee];return te===void 0&&(te=new zl,C[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=C[ee];return te===void 0&&(te=new zl,C[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=C[ee];return te===void 0&&(te=new zl,C[ee]=te),te.getHandSpace()};function ae(ee){let te=b.indexOf(ee.inputSource);if(te===-1)return;let Ce=C[te];Ce!==void 0&&(Ce.update(ee.inputSource,ee.frame,c||s),Ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){n.removeEventListener("select",ae),n.removeEventListener("selectstart",ae),n.removeEventListener("selectend",ae),n.removeEventListener("squeeze",ae),n.removeEventListener("squeezestart",ae),n.removeEventListener("squeezeend",ae),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",le);for(let ee=0;ee<C.length;ee++){let te=b[ee];te!==null&&(b[ee]=null,C[ee].disconnect(te))}N=null,k=null,I.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(y),d=null,f=null,h=null,n=null,x=null,st.stop(),o.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),A!==null){let ee=A.camera;ee.fov=A.fov,ee.zoom=A.zoom,ee.updateProjectionMatrix(),A=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,o.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){i=ee,o.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",ae),n.addEventListener("selectstart",ae),n.addEventListener("selectend",ae),n.addEventListener("squeeze",ae),n.addEventListener("squeezestart",ae),n.addEventListener("squeezeend",ae),n.addEventListener("end",J),n.addEventListener("inputsourceschange",le),g.xrCompatible!==!0&&await a.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ye=null,ye=null;g.depth&&(ye=g.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Ce=g.stencil?As:Jn,Ye=g.stencil?oc:Tn);let Ge={colorFormat:a.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ge),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new wo(f.textureWidth,f.textureHeight,{format:fn,type:Eo,depthTexture:new Ss(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,Ce),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new wo(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Eo,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),st.setContext(n),st.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function le(ee){for(let te=0;te<ee.removed.length;te++){let Ce=ee.removed[te],Ye=b.indexOf(Ce);Ye>=0&&(b[Ye]=null,C[Ye].disconnect(Ce))}for(let te=0;te<ee.added.length;te++){let Ce=ee.added[te],Ye=b.indexOf(Ce);if(Ye===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=b.length){b.push(Ce),Ye=Ge;break}else if(b[Ge]===null){b[Ge]=Ce,Ye=Ge;break}if(Ye===-1)break}let ye=C[Ye];ye&&ye.connect(Ce)}}let W=new z,K=new z;function $(ee,te,Ce){W.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(Ce.matrixWorld);let Ye=W.distanceTo(K),ye=te.projectionMatrix.elements,Ge=Ce.projectionMatrix.elements,tt=ye[14]/(ye[10]-1),oe=ye[14]/(ye[10]+1),ue=(ye[9]+1)/ye[5],xe=(ye[9]-1)/ye[5],ie=(ye[8]-1)/ye[0],re=(Ge[8]+1)/Ge[0],Oe=tt*ie,qe=tt*re,He=Ye/(-ie+re),Be=He*-ie;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(He),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ye[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let E=tt+He,it=oe+He,at=Oe-Be,_=qe+(Ye-Be),F=ue*oe/it*E,P=xe*oe/it*E;ee.projectionMatrix.makePerspective(at,_,F,P,E,it),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let te=ee.near,Ce=ee.far;I.texture!==null&&(I.depthNear>0&&(te=I.depthNear),I.depthFar>0&&(Ce=I.depthFar)),V.near=D.near=w.near=te,V.far=D.far=w.far=Ce,(N!==V.near||k!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,k=V.far),V.layers.mask=ee.layers.mask|6,w.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Ye=ee.parent,ye=V.cameras;De(V,Ye);for(let Ge=0;Ge<ye.length;Ge++)De(ye[Ge],Ye);ye.length===2?$(V,w,D):V.projectionMatrix.copy(w.projectionMatrix),A===null&&ee.isPerspectiveCamera&&(A={camera:ee,fov:ee.fov,zoom:ee.zoom}),be(ee,V,Ye)};function be(ee,te,Ce){Ce===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(Ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ep*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(V)},this.getCameraTexture=function(ee){return p[ee]};let et=null;function q(ee,te){if(u=te.getViewerPose(c||s),m=te,u!==null){let Ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ye=!1;Ce.length!==V.cameras.length&&(V.cameras.length=0,Ye=!0);for(let oe=0;oe<Ce.length;oe++){let ue=Ce[oe],xe=null;if(d!==null)xe=d.getViewport(ue);else{let re=h.getViewSubImage(f,ue);xe=re.viewport,oe===0&&(e.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(x))}let ie=Y[oe];ie===void 0&&(ie=new no,ie.layers.enable(oe),ie.viewport=new da,Y[oe]=ie),ie.matrix.fromArray(ue.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(V.matrix.copy(ie.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ye===!0&&V.cameras.push(ie)}let ye=n.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){h=o.getBinding();let oe=h.getDepthInformation(Ce[0]);oe&&oe.isValid&&oe.texture&&I.init(oe,n.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),h=o.getBinding();for(let oe=0;oe<Ce.length;oe++){let ue=Ce[oe].camera;if(ue){let xe=p[ue];xe||(xe=new Df,p[ue]=xe);let ie=h.getCameraImage(ue);xe.sourceTexture=ie}}}}for(let Ce=0;Ce<C.length;Ce++){let Ye=b[Ce],ye=C[Ce];Ye!==null&&ye!==void 0&&ye.update(Ye,te,c||s)}et&&et(ee,te),te.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:te}),m=null}let st=new S_;st.setAnimationLoop(q),this.setAnimationLoop=function(ee){et=ee},this.dispose=function(){}}},R3=new oa,b_=new Ct;b_.set(-1,0,0,0,1,0,0,0,1);function L3(t,e){function a(I,p){I.matrixAutoUpdate===!0&&I.updateMatrix(),p.value.copy(I.matrix)}function o(I,p){p.color.getRGB(I.fogColor.value,Cg(t)),p.isFog?(I.fogNear.value=p.near,I.fogFar.value=p.far):p.isFogExp2&&(I.fogDensity.value=p.density)}function n(I,p,g,y,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(I,p):p.isMeshLambertMaterial?(r(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(I,p),h(I,p)):p.isMeshPhongMaterial?(r(I,p),u(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(I,p),f(I,p),p.isMeshPhysicalMaterial&&d(I,p,x)):p.isMeshMatcapMaterial?(r(I,p),m(I,p)):p.isMeshDepthMaterial?r(I,p):p.isMeshDistanceMaterial?(r(I,p),S(I,p)):p.isMeshNormalMaterial?r(I,p):p.isLineBasicMaterial?(s(I,p),p.isLineDashedMaterial&&i(I,p)):p.isPointsMaterial?l(I,p,g,y):p.isSpriteMaterial?c(I,p):p.isShadowMaterial?(I.color.value.copy(p.color),I.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(I,p){I.opacity.value=p.opacity,p.color&&I.diffuse.value.copy(p.color),p.emissive&&I.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.bumpMap&&(I.bumpMap.value=p.bumpMap,a(p.bumpMap,I.bumpMapTransform),I.bumpScale.value=p.bumpScale,p.side===go&&(I.bumpScale.value*=-1)),p.normalMap&&(I.normalMap.value=p.normalMap,a(p.normalMap,I.normalMapTransform),I.normalScale.value.copy(p.normalScale),p.side===go&&I.normalScale.value.negate()),p.displacementMap&&(I.displacementMap.value=p.displacementMap,a(p.displacementMap,I.displacementMapTransform),I.displacementScale.value=p.displacementScale,I.displacementBias.value=p.displacementBias),p.emissiveMap&&(I.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,I.emissiveMapTransform)),p.specularMap&&(I.specularMap.value=p.specularMap,a(p.specularMap,I.specularMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest);let g=e.get(p),y=g.envMap,x=g.envMapRotation;y&&(I.envMap.value=y,I.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&I.envMapRotation.value.premultiply(b_),I.reflectivity.value=p.reflectivity,I.ior.value=p.ior,I.refractionRatio.value=p.refractionRatio),p.lightMap&&(I.lightMap.value=p.lightMap,I.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,I.lightMapTransform)),p.aoMap&&(I.aoMap.value=p.aoMap,I.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,I.aoMapTransform))}function s(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform))}function i(I,p){I.dashSize.value=p.dashSize,I.totalSize.value=p.dashSize+p.gapSize,I.scale.value=p.scale}function l(I,p,g,y){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.size.value=p.size*g,I.scale.value=y*.5,p.map&&(I.map.value=p.map,a(p.map,I.uvTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function c(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.rotation.value=p.rotation,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function u(I,p){I.specular.value.copy(p.specular),I.shininess.value=Math.max(p.shininess,1e-4)}function h(I,p){p.gradientMap&&(I.gradientMap.value=p.gradientMap)}function f(I,p){I.metalness.value=p.metalness,p.metalnessMap&&(I.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,I.metalnessMapTransform)),I.roughness.value=p.roughness,p.roughnessMap&&(I.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,I.roughnessMapTransform)),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)}function d(I,p,g){I.ior.value=p.ior,p.sheen>0&&(I.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),I.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(I.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,I.sheenColorMapTransform)),p.sheenRoughnessMap&&(I.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,I.sheenRoughnessMapTransform))),p.clearcoat>0&&(I.clearcoat.value=p.clearcoat,I.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(I.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,I.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(I.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,I.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(I.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,I.clearcoatNormalMapTransform),I.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===go&&I.clearcoatNormalScale.value.negate())),p.dispersion>0&&(I.dispersion.value=p.dispersion),p.retroreflectivity>0&&(I.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(I.iridescence.value=p.iridescence,I.iridescenceIOR.value=p.iridescenceIOR,I.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],I.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(I.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,I.iridescenceMapTransform)),p.iridescenceThicknessMap&&(I.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,I.iridescenceThicknessMapTransform))),p.transmission>0&&(I.transmission.value=p.transmission,I.transmissionSamplerMap.value=g.texture,I.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(I.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,I.transmissionMapTransform)),I.thickness.value=p.thickness,p.thicknessMap&&(I.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,I.thicknessMapTransform)),I.attenuationDistance.value=p.attenuationDistance,I.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(I.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(I.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,I.anisotropyMapTransform))),I.specularIntensity.value=p.specularIntensity,I.specularColor.value.copy(p.specularColor),p.specularColorMap&&(I.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,I.specularColorMapTransform)),p.specularIntensityMap&&(I.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,I.specularIntensityMapTransform))}function m(I,p){p.matcap&&(I.matcap.value=p.matcap)}function S(I,p){let g=e.get(p).light;I.referencePosition.value.setFromMatrixPosition(g.matrixWorld),I.nearDistance.value=g.shadow.camera.near,I.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function D3(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,C){let b=C.program;o.uniformBlockBinding(x,b)}function c(x,C){let b=n[x.id];b===void 0&&(I(x),b=u(x),n[x.id]=b,x.addEventListener("dispose",g));let T=C.program;o.updateUBOMapping(x,T);let v=e.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function u(x){let C=h();x.__bindingPointIndex=C;let b=t.createBuffer(),T=x.__size,v=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,T,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,b),b}function h(){for(let x=0;x<i;x++)if(s.indexOf(x)===-1)return s.push(x),x;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let C=n[x.id],b=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let v=0,A=b.length;v<A;v++){let w=b[v];if(Array.isArray(w))for(let D=0,Y=w.length;D<Y;D++)d(w[D],v,D,T);else d(w,v,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(x,C,b,T){if(S(x,C,b,T)===!0){let v=x.__offset,A=x.value;if(Array.isArray(A)){let w=0;for(let D=0;D<A.length;D++){let Y=A[D],V=p(Y);m(Y,x.__data,w),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(w+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,x.__data)}}function m(x,C,b){typeof x=="number"||typeof x=="boolean"?C[0]=x:x.isMatrix3?(C[0]=x.elements[0],C[1]=x.elements[1],C[2]=x.elements[2],C[3]=0,C[4]=x.elements[3],C[5]=x.elements[4],C[6]=x.elements[5],C[7]=0,C[8]=x.elements[6],C[9]=x.elements[7],C[10]=x.elements[8],C[11]=0):ArrayBuffer.isView(x)?C.set(new x.constructor(x.buffer,x.byteOffset,C.length)):x.toArray(C,b)}function S(x,C,b,T){let v=x.value,A=C+"_"+b;if(T[A]===void 0)return typeof v=="number"||typeof v=="boolean"?T[A]=v:ArrayBuffer.isView(v)?T[A]=v.slice():T[A]=v.clone(),!0;{let w=T[A];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function I(x){let C=x.uniforms,b=0,T=16;for(let A=0,w=C.length;A<w;A++){let D=Array.isArray(C[A])?C[A]:[C[A]];for(let Y=0,V=D.length;Y<V;Y++){let N=D[Y],k=Array.isArray(N.value)?N.value:[N.value];for(let ae=0,J=k.length;ae<J;ae++){let le=k[ae],W=p(le),K=b%T,$=K%W.boundary,De=K+$;b+=$,De!==0&&T-De<W.storage&&(b+=T-De),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=W.storage}}}let v=b%T;return v>0&&(b+=T-v),x.__size=b,x.__cache={},this}function p(x){let C={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(C.boundary=4,C.storage=4):x.isVector2?(C.boundary=8,C.storage=8):x.isVector3||x.isColor?(C.boundary=16,C.storage=12):x.isVector4?(C.boundary=16,C.storage=16):x.isMatrix3?(C.boundary=48,C.storage=48):x.isMatrix4?(C.boundary=64,C.storage=64):x.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(C.boundary=16,C.storage=x.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",x),C}function g(x){let C=x.target;C.removeEventListener("dispose",g);let b=s.indexOf(C.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function y(){for(let x in n)t.deleteBuffer(n[x]);s=[],n={},r={}}return{bind:l,update:c,dispose:y}}var P3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),er=null;function B3(){return er===null&&(er=new Gl(P3,16,16,ws,wn),er.name="DFG_LUT",er.minFilter=Ba,er.magFilter=Ba,er.wrapS=cn,er.wrapT=cn,er.generateMipmaps=!1,er.needsUpdate=!0),er}var Kh=class{constructor(e={}){let{canvas:a=HC(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Eo}=e;this.isWebGLRenderer=!0;let m;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=o.getContextAttributes().alpha}else m=s;let S=d,I=new Set([dh,uh,fh]),p=new Set([Eo,Tn,ac,oc,lh,ch]),g=new Uint32Array(4),y=new Int32Array(4),x=new z,C=null,b=null,T=[],v=[],A=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,D=!1,Y=null,V=null,N=null,k=null;this._outputColorSpace=ja;let ae=0,J=0,le=null,W=-1,K=null,$=new da,De=new da,be=null,et=new bt(0),q=0,st=a.width,ee=a.height,te=1,Ce=null,Ye=null,ye=new da(0,0,st,ee),Ge=new da(0,0,st,ee),tt=!1,oe=new ql,ue=!1,xe=!1,ie=new oa,re=new z,Oe=new da,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Be(){return le===null?te:1}let E=o;function it(M,R){return a.getContext(M,R)}let at,_,F,P,Z,se,ve,Ie,H,j,de,L,Pe,Le,fe,ge,_e,B,Fe,ne,Me,we,me;try{let M={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${oh}`),a.addEventListener("webglcontextlost",vt,!1),a.addEventListener("webglcontextrestored",Ft,!1),a.addEventListener("webglcontextcreationerror",va,!1),E===null){let R="webgl2";if(E=it(R,M),E===null)throw it(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(M){throw a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",Ft,!1),a.removeEventListener("webglcontextcreationerror",va,!1),It("WebGLRenderer: "+M.message),M}function ke(){at=new VL(E),at.init(),Me=new A3(E,at),_=new LL(E,at,e,Me),F=new b3(E,at),_.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),V=E.createFramebuffer(),N=E.createFramebuffer(),k=E.createFramebuffer(),P=new WL(E),Z=new d3,se=new T3(E,at,F,Z,_,Me,P),ve=new HL(w),Ie=new Y2(E),we=new EL(E,Ie),H=new GL(E,Ie,P,we),j=new YL(E,H,Ie,we,P),B=new XL(E,_,se),fe=new DL(Z),de=new u3(w,ve,at,_,we,fe),L=new L3(w,Z),Pe=new h3,Le=new S3(at),_e=new wL(w,ve,F,j,m,l),ge=new _3(w,j,_),me=new D3(E,P,_,F),Fe=new RL(E,at,P),ne=new qL(E,at,P),P.programs=de.programs,w.capabilities=_,w.extensions=at,w.properties=Z,w.renderLists=Pe,w.shadowMap=ge,w.state=F,w.info=P}S!==Eo&&(A=new KL(S,a.width,a.height,i,n,r));let We=new Vg(w,E);this.xr=We,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(st,ee,!1))},this.getSize=function(M){return M.set(st,ee)},this.setSize=function(M,R,O=!0){if(We.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=M,ee=R,a.width=Math.floor(M*te),a.height=Math.floor(R*te),O===!0&&(a.style.width=M+"px",a.style.height=R+"px"),A!==null&&A.setSize(a.width,a.height),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(st*te,ee*te).floor()},this.setDrawingBufferSize=function(M,R,O){st=M,ee=R,te=O,a.width=Math.floor(M*O),a.height=Math.floor(R*O),this.setViewport(0,0,M,R)},this.setEffects=function(M){if(S===Eo){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let R=0;R<M.length;R++)if(M[R].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,R,O,X){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,R,O,X),F.viewport($.copy(ye).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ge)},this.setScissor=function(M,R,O,X){M.isVector4?Ge.set(M.x,M.y,M.z,M.w):Ge.set(M,R,O,X),F.scissor(De.copy(Ge).multiplyScalar(te).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){F.setScissorTest(tt=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ye=M},this.getClearColor=function(M){return M.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(M=!0,R=!0,O=!0){let X=0;if(M){let G=!1;if(le!==null){let Se=le.texture.format;G=I.has(Se)}if(G){let Se=le.texture.type,Ae=p.has(Se),Re=_e.getClearColor(),Xe=_e.getClearAlpha(),Je=Re.r,ut=Re.g,ht=Re.b;Ae?(g[0]=Je,g[1]=ut,g[2]=ht,g[3]=Xe,E.clearBufferuiv(E.COLOR,0,g)):(y[0]=Je,y[1]=ut,y[2]=ht,y[3]=Xe,E.clearBufferiv(E.COLOR,0,y))}else X|=E.COLOR_BUFFER_BIT}R&&(X|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),O&&(X|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&E.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),Y=M},this.dispose=function(){a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",Ft,!1),a.removeEventListener("webglcontextcreationerror",va,!1),_e.dispose(),Pe.dispose(),Le.dispose(),Z.dispose(),ve.dispose(),j.dispose(),we.dispose(),me.dispose(),de.dispose(),We.dispose(),We.removeEventListener("sessionstart",nt),We.removeEventListener("sessionend",rt),_t.stop()};function vt(M){M.preventDefault(),yg("WebGLRenderer: Context Lost."),D=!0}function Ft(){yg("WebGLRenderer: Context Restored."),D=!1;let M=P.autoReset,R=ge.enabled,O=ge.autoUpdate,X=ge.needsUpdate,G=ge.type;ke(),P.autoReset=M,ge.enabled=R,ge.autoUpdate=O,ge.needsUpdate=X,ge.type=G}function va(M){It("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Nt(M){let R=M.target;R.removeEventListener("dispose",Nt),nr(R)}function nr(M){un(M),Z.remove(M)}function un(M){let R=Z.get(M).programs;R!==void 0&&(R.forEach(function(O){de.releaseProgram(O)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,O,X,G,Se){R===null&&(R=qe);let Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,Re=zt(M,R,O,X,G);F.setMaterial(X,Ae);let Xe=O.index,Je=1;if(X.wireframe===!0){if(Xe=H.getWireframeAttribute(O),Xe===void 0)return;Je=2}let ut=O.drawRange,ht=O.attributes.position,je=ut.start*Je,St=(ut.start+ut.count)*Je;Se!==null&&(je=Math.max(je,Se.start*Je),St=Math.min(St,(Se.start+Se.count)*Je)),Xe!==null?(je=Math.max(je,0),St=Math.min(St,Xe.count)):ht!=null&&(je=Math.max(je,0),St=Math.min(St,ht.count));let Ot=St-je;if(Ot<0||Ot===1/0)return;we.setup(G,X,Re,O,Xe);let ct,At=Fe;if(Xe!==null&&(ct=Ie.get(Xe),At=ne,At.setIndex(ct)),G.isMesh)X.wireframe===!0?(F.setLineWidth(X.wireframeLinewidth*Be()),At.setMode(E.LINES)):At.setMode(E.TRIANGLES);else if(G.isLine){let Xt=X.linewidth;Xt===void 0&&(Xt=1),F.setLineWidth(Xt*Be()),G.isLineSegments?At.setMode(E.LINES):G.isLineLoop?At.setMode(E.LINE_LOOP):At.setMode(E.LINE_STRIP)}else G.isPoints?At.setMode(E.POINTS):G.isSprite&&At.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(at.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Xt=G._multiDrawStarts,Ve=G._multiDrawCounts,xa=G._multiDrawCount,dt=Xe?Ie.get(Xe).bytesPerElement:1,na=Z.get(X).currentProgram.getUniforms();for(let ga=0;ga<xa;ga++)na.setValue(E,"_gl_DrawID",ga),At.render(Xt[ga]/dt,Ve[ga])}else if(G.isInstancedMesh)At.renderInstances(je,Ot,G.count);else if(O.isInstancedBufferGeometry){let Xt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ve=Math.min(O.instanceCount,Xt);At.renderInstances(je,Ot,Ve)}else At.render(je,Ot)};function rr(M,R,O,X){Y!==null&&M.isNodeMaterial&&Y.setObject(X,M),ue===!0&&fe.setState(M,O,!1),M.transparent===!0&&M.side===Zo&&M.forceSinglePass===!1?(M.side=go,M.needsUpdate=!0,Q(M,R,X),M.side=bs,M.needsUpdate=!0,Q(M,R,X),M.side=Zo):Q(M,R,X)}this.compile=function(M,R,O=null){O===null&&(O=M),Y!==null&&Y.renderStart(M,R,O),b=Le.get(O),b.init(R),v.push(b),O.traverseVisible(function(G){G.isLight&&G.layers.test(R.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),M!==O&&M.traverseVisible(function(G){G.isLight&&G.layers.test(R.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),Y!==null&&Y.updateLights(b.state.lightsArray),xe=this.localClippingEnabled,ue=fe.init(this.clippingPlanes,xe),ue===!0&&fe.setGlobalState(this.clippingPlanes,R),Y!==null&&ge.render(b.state.shadowsArray,O,R);let X=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Se=G.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Re=Se[Ae];rr(Re,O,R,G),X.add(Re)}else rr(Se,O,R,G),X.add(Se)}),b=v.pop(),Y!==null&&Y.renderEnd(),X},this.compileAsync=function(M,R,O=null){let X=this.compile(M,R,O);return new Promise(G=>{function Se(){if(X.forEach(function(Ae){let Xe=Z.get(Ae).currentProgram;(Xe===void 0||Xe.isReady())&&X.delete(Ae)}),X.size===0){G(M);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dn=null;function ze(M){dn&&dn(M)}function nt(){_t.stop()}function rt(){_t.start()}let _t=new S_;_t.setAnimationLoop(ze),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(M){dn=M,We.setAnimationLoop(M),M===null?_t.stop():_t.start()},We.addEventListener("sessionstart",nt),We.addEventListener("sessionend",rt),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;Y!==null&&Y.renderStart(M,R);let O=We.enabled===!0&&We.isPresenting===!0,X=A!==null&&(le===null||O)&&A.begin(w,le);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(R),R=We.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,R,le),b=Le.get(M,v.length),b.init(R),b.state.textureUnits=se.getTextureUnits(),v.push(b),ie.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),oe.setFromProjectionMatrix(ie,_n,R.reversedDepth),xe=this.localClippingEnabled,ue=fe.init(this.clippingPlanes,xe),C=Pe.get(M,T.length),C.init(),T.push(C),We.enabled===!0&&We.isPresenting===!0){let Ae=w.xr.getDepthSensingMesh();Ae!==null&&Lt(Ae,R,-1/0,w.sortObjects)}Lt(M,R,0,w.sortObjects),C.finish(),Y!==null&&Y.updateLights(b.state.lightsArray),w.sortObjects===!0&&C.sort(Ce,Ye),He=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,He&&_e.addToRenderList(C,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&fe.beginShadows();let G=b.state.shadowsArray;if(ge.render(G,M,R),ue===!0&&fe.endShadows(),(X&&A.hasRenderPass())===!1){let Ae=C.opaque,Re=C.transmissive;if(b.setupLights(),R.isArrayCamera){let Xe=R.cameras;if(Re.length>0)for(let Je=0,ut=Xe.length;Je<ut;Je++){let ht=Xe[Je];Ea(Ae,Re,M,ht)}He&&_e.render(M);for(let Je=0,ut=Xe.length;Je<ut;Je++){let ht=Xe[Je];pa(C,M,ht,ht.viewport)}}else Re.length>0&&Ea(Ae,Re,M,R),He&&_e.render(M),pa(C,M,R)}le!==null&&J===0&&(se.updateMultisampleRenderTarget(le),se.updateRenderTargetMipmap(le)),X&&A.end(w),M.isScene===!0&&M.onAfterRender(w,M,R),we.resetDefaultState(),W=-1,K=null,v.pop(),v.length>0?(b=v[v.length-1],se.setTextureUnits(b.state.textureUnits),ue===!0&&fe.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?C=T[T.length-1]:C=null,Y!==null&&Y.renderEnd()};function Lt(M,R,O,X){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(oe)){X&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);let Ae=j.update(M),Re=M.material;Re.visible&&C.push(M,Ae,Re,O,Oe.z,null,R)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(oe))){let Ae=j.update(M),Re=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Oe.copy(Ae.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(Re)){let Xe=Ae.groups;for(let Je=0,ut=Xe.length;Je<ut;Je++){let ht=Xe[Je],je=Re[ht.materialIndex];je&&je.visible&&C.push(M,Ae,je,O,Oe.z,ht,R)}}else Re.visible&&C.push(M,Ae,Re,O,Oe.z,null,R)}}let Se=M.children;for(let Ae=0,Re=Se.length;Ae<Re;Ae++)Lt(Se[Ae],R,O,X)}function pa(M,R,O,X){let{opaque:G,transmissive:Se,transparent:Ae}=M;b.setupLightsView(O),ue===!0&&fe.setGlobalState(w.clippingPlanes,O),X&&F.viewport($.copy(X)),G.length>0&&Dt(G,R,O),Se.length>0&&Dt(Se,R,O),Ae.length>0&&Dt(Ae,R,O),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ea(M,R,O,X){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let je=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new wo(1,1,{generateMipmaps:!0,type:je?wn:Eo,minFilter:$n,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let Se=b.state.transmissionRenderTarget[X.id],Ae=X.viewport||$;Se.setSize(Ae.z*w.transmissionResolutionScale,Ae.w*w.transmissionResolutionScale);let Re=w.getRenderTarget(),Xe=w.getActiveCubeFace(),Je=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(et),q=w.getClearAlpha(),q<1&&w.setClearColor(16777215,.5),w.clear(),He&&_e.render(O);let ut=w.toneMapping;w.toneMapping=bn;let ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),ue===!0&&fe.setGlobalState(w.clippingPlanes,X),Dt(M,O,X),se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let St=0,Ot=R.length;St<Ot;St++){let ct=R[St],{object:At,geometry:Xt,material:Ve,group:xa}=ct;if(Ve.side===Zo&&At.layers.test(X.layers)){let dt=Ve.side;Ve.side=go,Ve.needsUpdate=!0,U(At,O,X,Xt,Ve,xa),Ve.side=dt,Ve.needsUpdate=!0,je=!0}}je===!0&&(se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se))}w.setRenderTarget(Re,Xe,Je),w.setClearColor(et,q),ht!==void 0&&(X.viewport=ht),w.toneMapping=ut}function Dt(M,R,O){let X=R.isScene===!0?R.overrideMaterial:null;for(let G=0,Se=M.length;G<Se;G++){let Ae=M[G],{object:Re,geometry:Xe,group:Je}=Ae,ut=Ae.material;ut.allowOverride===!0&&X!==null&&(ut=X),Re.layers.test(O.layers)&&U(Re,R,O,Xe,ut,Je)}}function U(M,R,O,X,G,Se){Y!==null&&G.isNodeMaterial&&Y.setObject(M,G),M.onBeforeRender(w,R,O,X,G,Se),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(w,R,O,X,M,Se),G.transparent===!0&&G.side===Zo&&G.forceSinglePass===!1?(G.side=go,G.needsUpdate=!0,w.renderBufferDirect(O,R,X,G,M,Se),G.side=bs,G.needsUpdate=!0,w.renderBufferDirect(O,R,X,G,M,Se),G.side=Zo):w.renderBufferDirect(O,R,X,G,M,Se),M.onAfterRender(w,R,O,X,G,Se)}function Q(M,R,O){R.isScene!==!0&&(R=qe);let X=Z.get(M),G=b.state.lights,Se=b.state.shadowsArray,Ae=G.state.version,Re=de.getParameters(M,G.state,Se,R,O,b.state.lightProbeGridArray),Xe=de.getProgramCacheKey(Re),Je=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,X.fog=R.fog;let ut=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=ve.get(M.envMap||X.environment,ut),X.envMapRotation=X.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,Je===void 0&&(M.addEventListener("dispose",Nt),Je=new Map,X.programs=Je);let ht=Je.get(Xe);if(ht!==void 0){if(X.currentProgram===ht&&X.lightsStateVersion===Ae)return Ee(M,Re),ht}else Re.uniforms=de.getUniforms(M),Y!==null&&M.isNodeMaterial&&Y.build(M,O,Re),M.onBeforeCompile(Re,w),ht=de.acquireProgram(Re,Xe),Je.set(Xe,ht),X.uniforms=Re.uniforms;let je=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(je.clippingPlanes=fe.uniform),Ee(M,Re),X.needsLights=ce(M),X.lightsStateVersion=Ae,X.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.sunLights.value=G.state.sun,je.sunLightShadows.value=G.state.sunShadow,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.sunShadowMatrix.value=G.state.sunShadowMatrix,je.sunShadowCascade.value=G.state.sunShadowCascade,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=ht,X.uniformsList=null,ht}function pe(M){if(M.uniformsList===null){let R=M.currentProgram.getUniforms();M.uniformsList=ic.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function Ee(M,R){let O=Z.get(M);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.batchingColor=R.batchingColor,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.instancingMorph=R.instancingMorph,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function pt(M,R){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(R.matrixWorld);for(let O=0,X=M.length;O<X;O++){let G=M[O];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function zt(M,R,O,X,G){R.isScene!==!0&&(R=qe),se.resetTextureUnits();let Se=R.fog,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?R.environment:null,Re=le===null?w.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:kt.workingColorSpace,Xe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Je=ve.get(X.envMap||Ae,Xe),ut=X.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ht=!!O.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!O.morphAttributes.position,St=!!O.morphAttributes.normal,Ot=!!O.morphAttributes.color,ct=bn;X.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ct=w.toneMapping);let At=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xt=At!==void 0?At.length:0,Ve=Z.get(X),xa=b.state.lights;if(ue===!0&&(xe===!0||M!==K)){let lt=M===K&&X.id===W;fe.setState(X,M,lt)}let dt=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xa.state.version||Ve.outputColorSpace!==Re||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Je||X.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==ut||Ve.vertexTangents!==ht||Ve.morphTargets!==je||Ve.morphNormals!==St||Ve.morphColors!==Ot||Ve.toneMapping!==ct||Ve.morphTargetsCount!==Xt||!!Ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ve.__version=X.version);let na=Ve.currentProgram;dt===!0&&(na=Q(X,R,G),Y&&X.isNodeMaterial&&Y.onUpdateProgram(X,na,Ve));let ga=!1,Ra=!1,So=!1,Qe=na.getUniforms(),Te=Ve.uniforms;if(F.useProgram(na.program)&&(ga=!0,Ra=!0,So=!0),X.id!==W&&(W=X.id,Ra=!0),Ve.needsLights){let lt=pt(b.state.lightProbeGridArray,G);Ve.lightProbeGrid!==lt&&(Ve.lightProbeGrid=lt,Ra=!0)}if(ga||K!==M){F.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qe.setValue(E,"projectionMatrix",M.projectionMatrix),Qe.setValue(E,"viewMatrix",M.matrixWorldInverse);let ha=Qe.map.cameraPosition;ha!==void 0&&ha.setValue(E,re.setFromMatrixPosition(M.matrixWorld)),_.logarithmicDepthBuffer&&Qe.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Qe.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Ra=!0,So=!0)}if(Ve.needsLights&&(xa.state.sunShadowMap.length>0&&Qe.setValue(E,"sunShadowMap",xa.state.sunShadowMap,se),xa.state.directionalShadowMap.length>0&&Qe.setValue(E,"directionalShadowMap",xa.state.directionalShadowMap,se),xa.state.spotShadowMap.length>0&&Qe.setValue(E,"spotShadowMap",xa.state.spotShadowMap,se),xa.state.pointShadowMap.length>0&&Qe.setValue(E,"pointShadowMap",xa.state.pointShadowMap,se)),G.isSkinnedMesh){Qe.setOptional(E,G,"bindMatrix"),Qe.setOptional(E,G,"bindMatrixInverse");let lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Qe.setValue(E,"boneTexture",lt.boneTexture,se))}G.isBatchedMesh&&(Qe.setOptional(E,G,"batchingTexture"),Qe.setValue(E,"batchingTexture",G._matricesTexture,se),Qe.setOptional(E,G,"batchingIdTexture"),Qe.setValue(E,"batchingIdTexture",G._indirectTexture,se),Qe.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Qe.setValue(E,"batchingColorTexture",G._colorsTexture,se));let yt=O.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&B.update(G,O,na),(Ra||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,Qe.setValue(E,"receiveShadow",G.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&R.environment!==null&&(Te.envMapIntensity.value=R.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=B3()),Ra){if(Qe.setValue(E,"toneMappingExposure",w.toneMappingExposure),Ve.needsLights&&Qt(Te,So),Se&&X.fog===!0&&L.refreshFogUniforms(Te,Se),L.refreshMaterialUniforms(Te,X,te,ee,b.state.transmissionRenderTarget[M.id]),Ve.needsLights&&Ve.lightProbeGrid){let lt=Ve.lightProbeGrid;Te.probesSH.value=lt.texture,Te.probesMin.value.copy(lt.boundingBox.min),Te.probesMax.value.copy(lt.boundingBox.max),Te.probesResolution.value.copy(lt.resolution)}ic.upload(E,pe(Ve),Te,se)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ic.upload(E,pe(Ve),Te,se),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Qe.setValue(E,"center",G.center),Qe.setValue(E,"modelViewMatrix",G.modelViewMatrix),Qe.setValue(E,"normalMatrix",G.normalMatrix),Qe.setValue(E,"modelMatrix",G.matrixWorld),X.uniformsGroups!==void 0){let lt=X.uniformsGroups;for(let ha=0,Na=lt.length;ha<Na;ha++){let Jo=lt[ha];me.update(Jo,na),me.bind(Jo,na)}}return na}function Qt(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.sunLights.needsUpdate=R,M.sunLightShadows.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function ce(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(M,R,O){let X=Z.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=R,Z.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:O,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,R){let O=Z.get(M);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,O=0){le=M,ae=R,J=O;let X=null,G=!1,Se=!1;if(M){let Re=Z.get(M);if(Re.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(E.FRAMEBUFFER,Re.__webglFramebuffer),$.copy(M.viewport),De.copy(M.scissor),be=M.scissorTest,F.viewport($),F.scissor(De),F.setScissorTest(be),W=-1;return}else if(Re.__webglFramebuffer===void 0)se.setupRenderTarget(M);else if(Re.__hasExternalTextures)se.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ut=M.depthTexture;if(Re.__boundDepthTexture!==ut){if(ut!==null&&Z.has(ut)&&(M.width!==ut.image.width||M.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(M)}}let Xe=M.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Se=!0);let Je=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Je[R])?X=Je[R][O]:X=Je[R],G=!0):M.samples>0&&se.useMultisampledRTT(M)===!1?X=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[O]:X=Je,$.copy(M.viewport),De.copy(M.scissor),be=M.scissorTest}else $.copy(ye).multiplyScalar(te).floor(),De.copy(Ge).multiplyScalar(te).floor(),be=tt;if(O!==0&&(X=V),F.bindFramebuffer(E.FRAMEBUFFER,X)&&F.drawBuffers(M,X),F.viewport($),F.scissor(De),F.setScissorTest(be),G){let Re=Z.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+R,Re.__webglTexture,O)}else if(Se){let Re=R;for(let Xe=0;Xe<M.textures.length;Xe++){let Je=Z.get(M.textures[Xe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,O,Re)}}else if(M!==null&&O!==0){let Re=Z.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Re.__webglTexture,O)}W=-1};function Ze(M){let R=Z.get(M);return(R.__readFormat!==M.format||R.__readType!==M.type)&&(R.__readFormat=M.format,R.__readType=M.type,R.__formatReadable=_.textureFormatReadable(M.format),R.__typeReadable=_.textureTypeReadable(M.type)),R}this.readRenderTargetPixels=function(M,R,O,X,G,Se,Ae,Re=0){if(!(M&&M.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){F.bindFramebuffer(E.FRAMEBUFFER,Xe);try{let Je=M.textures[Re],ut=Je.format,ht=Je.type;M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re);let je=Ze(Je);if(je.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-X&&O>=0&&O<=M.height-G&&E.readPixels(R,O,X,G,Me.convert(ut),Me.convert(ht),Se)}finally{let Je=le!==null?Z.get(le).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(M,R,O,X,G,Se,Ae,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe)if(R>=0&&R<=M.width-X&&O>=0&&O<=M.height-G){F.bindFramebuffer(E.FRAMEBUFFER,Xe);let Je=M.textures[Re],ut=Je.format,ht=Je.type;M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re);let je=Ze(Je);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,St),E.bufferData(E.PIXEL_PACK_BUFFER,Se.byteLength,E.STREAM_READ),E.readPixels(R,O,X,G,Me.convert(ut),Me.convert(ht),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let Ot=le!==null?Z.get(le).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Ot);let ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await GC(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,St),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Se),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(St),E.deleteSync(ct),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,R=null,O=0){let X=Math.pow(2,-O),G=Math.floor(M.image.width*X),Se=Math.floor(M.image.height*X),Ae=R!==null?R.x:0,Re=R!==null?R.y:0;se.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,O,0,0,Ae,Re,G,Se),F.unbindTexture()},this.copyTextureToTexture=function(M,R,O=null,X=null,G=0,Se=0){let Ae,Re,Xe,Je,ut,ht,je,St,Ot,ct=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(O!==null)Ae=O.max.x-O.min.x,Re=O.max.y-O.min.y,Xe=O.isBox3?O.max.z-O.min.z:1,Je=O.min.x,ut=O.min.y,ht=O.isBox3?O.min.z:0;else{let Te=Math.pow(2,-G);Ae=Math.floor(ct.width*Te),Re=Math.floor(ct.height*Te),M.isDataArrayTexture?Xe=ct.depth:M.isData3DTexture?Xe=Math.floor(ct.depth*Te):Xe=1,Je=0,ut=0,ht=0}X!==null?(je=X.x,St=X.y,Ot=X.z):(je=0,St=0,Ot=0);let At=Me.convert(R.format),Xt=Me.convert(R.type),Ve;R.isData3DTexture?(se.setTexture3D(R,0),Ve=E.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(se.setTexture2DArray(R,0),Ve=E.TEXTURE_2D_ARRAY):(se.setTexture2D(R,0),Ve=E.TEXTURE_2D),F.activeTexture(E.TEXTURE0),F.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,R.flipY),F.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),F.pixelStorei(E.UNPACK_ALIGNMENT,R.unpackAlignment);let xa=F.getParameter(E.UNPACK_ROW_LENGTH),dt=F.getParameter(E.UNPACK_IMAGE_HEIGHT),na=F.getParameter(E.UNPACK_SKIP_PIXELS),ga=F.getParameter(E.UNPACK_SKIP_ROWS),Ra=F.getParameter(E.UNPACK_SKIP_IMAGES);F.pixelStorei(E.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(E.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(E.UNPACK_SKIP_ROWS,ut),F.pixelStorei(E.UNPACK_SKIP_IMAGES,ht);let So=M.isDataArrayTexture||M.isData3DTexture,Qe=R.isDataArrayTexture||R.isData3DTexture;if(M.isDepthTexture){let Te=Z.get(M),yt=Z.get(R),lt=Z.get(Te.__renderTarget),ha=Z.get(yt.__renderTarget);F.bindFramebuffer(E.READ_FRAMEBUFFER,lt.__webglFramebuffer),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Na=0;Na<Xe;Na++)So&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,G,ht+Na),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,Se,Ot+Na)),E.blitFramebuffer(Je,ut,Ae,Re,je,St,Ae,Re,E.DEPTH_BUFFER_BIT,E.NEAREST);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Z.has(M)){let Te=Z.get(M),yt=Z.get(R);F.bindFramebuffer(E.READ_FRAMEBUFFER,N),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<Xe;lt++)So?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Te.__webglTexture,G,ht+lt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Te.__webglTexture,G),Qe?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,yt.__webglTexture,Se,Ot+lt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,yt.__webglTexture,Se),G!==0?E.blitFramebuffer(Je,ut,Ae,Re,je,St,Ae,Re,E.COLOR_BUFFER_BIT,E.NEAREST):Qe?E.copyTexSubImage3D(Ve,Se,je,St,Ot+lt,Je,ut,Ae,Re):E.copyTexSubImage2D(Ve,Se,je,St,Je,ut,Ae,Re);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Qe?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(Ve,Se,je,St,Ot,Ae,Re,Xe,At,Xt,ct.data):R.isCompressedArrayTexture?E.compressedTexSubImage3D(Ve,Se,je,St,Ot,Ae,Re,Xe,At,ct.data):E.texSubImage3D(Ve,Se,je,St,Ot,Ae,Re,Xe,At,Xt,ct):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Se,je,St,Ae,Re,At,Xt,ct.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Se,je,St,ct.width,ct.height,At,ct.data):E.texSubImage2D(E.TEXTURE_2D,Se,je,St,Ae,Re,At,Xt,ct);F.pixelStorei(E.UNPACK_ROW_LENGTH,xa),F.pixelStorei(E.UNPACK_IMAGE_HEIGHT,dt),F.pixelStorei(E.UNPACK_SKIP_PIXELS,na),F.pixelStorei(E.UNPACK_SKIP_ROWS,ga),F.pixelStorei(E.UNPACK_SKIP_IMAGES,Ra),Se===0&&R.generateMipmaps&&E.generateMipmap(Ve),F.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&se.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?se.setTextureCube(M,0):M.isData3DTexture?se.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?se.setTexture2DArray(M,0):se.setTexture2D(M,0),F.unbindTexture()},this.resetState=function(){ae=0,J=0,le=null,F.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),a.unpackColorSpace=kt._getUnpackColorSpace()}};var T_={portrait:[1.32,2.25],landscape:[2.25,1.32]},k3={left:.27,center:.5,right:.73},su=.018,Fo=.007,wa=4,A_=1/.05,N3=1/960,O3=2,Er=72,w_=24,Gg=.36,Zg=.095,z3=.0135,jh=.036,nu=.15,E_=1024,R_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},$h=[0,.07,.93,1],H3=[-.95,-.28,.28,.95],V3=9,G3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,q3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,W3=`
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
`,X3=`
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
`,L_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},gi=(t,e,a)=>Math.min(a,Math.max(e,t)),em=(t,e,a)=>t+(e-t)*a,qg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},Y3=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],tm=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,k_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Yg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},am=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=async()=>{try{await r.decode()}catch{}n(r)},r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},om=new Map,Kg=t=>Promise.all(t.map(e=>am(om,e))),D_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:T_[t]||T_.portrait,r=em(.03,Math.min(o,n)*.2,gi(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Zg}},Z3=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new vs;Yg(r,-e/2+Fo,-a/2+Fo,e-Fo*2,a-Fo*2,Math.max(o-Fo,.005));let s=new ui;Yg(s,-n.width/2-Fo,n.y-n.height/2-Fo,n.width+Fo*2,n.height+Fo*2,n.height/2+Fo),r.holes.push(s);let i=new Kl(r,{depth:su,bevelEnabled:!0,bevelThickness:Fo,bevelSize:Fo,bevelSegments:5,curveSegments:24});i.translate(0,0,-su/2);let l=new Hf(r,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let h=0;h<c.count;h++)u.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return u.needsUpdate=!0,{body:i,face:l}},P_=t=>{let e=new vs,a=t*1.16;Yg(e,-a/2+.014,-nu/2+.014,a-.028,nu-.028,.024);let o=new Kl(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},K3=t=>{let e=$h.length,a=new xo;a.setAttribute("position",new ro(new Float32Array(t*e*3),3)),a.setAttribute("normal",new ro(new Float32Array(t*e*3),3)),a.setAttribute("uv",new ro(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},J3=t=>{let e=new Hl;e.background=new bt(.035,.035,.04);let a=new pi(1,1),o=[],n=(i,l,c,u=0)=>{let h=new ci({color:new bt(i,i,i),side:Zo});o.push(h);let f=new Ma(a,h);f.position.set(...l),f.scale.set(c[0],c[1],1),f.lookAt(0,0,0),f.rotateZ(u),e.add(f)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new lc(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},Wg=(t,e)=>{let a=new fi(t);return a.colorSpace=ja,a.anisotropy=e,a},Q3=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new fi(e);let o=k_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let u=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)u+=n[(c+h+128)%128*128+(l+f+128)%128];return u/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),f=Math.hypot(u,h,1),d=(l*128+c)*4;s.data[d]=(u/f*.5+.5)*255,s.data[d+1]=(h/f*.5+.5)*255,s.data[d+2]=(1/f*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new fi(e);return i.wrapS=Kn,i.wrapT=Kn,i.repeat.set(5,7),i},j3=()=>{let a=k_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let u=(l%128+128)%128,h=(c%128+128)%128,f=u/128*8,d=h/128*8,m=Math.floor(f),S=Math.floor(d),I=f-m-.5,p=d-S-.5,g=(m+S)%2===0,y=n(I)*(.55+.45*Math.cos(p*Math.PI*(g?1:.6))),x=n(p)*(.55+.45*Math.cos(I*Math.PI*(g?.6:1)));return(g?Math.max(y,x*.7):Math.max(x,y*.7))+o[h*128+u]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,f=Math.hypot(u,h,1),d=(l*128+c)*4;s[d]=(u/f*.5+.5)*255,s[d+1]=(h/f*.5+.5)*255,s[d+2]=(1/f*.5+.5)*255,s[d+3]=255}let i=new Gl(s,128,128);return i.wrapS=Kn,i.wrapT=Kn,i.magFilter=Ba,i.minFilter=$n,i.generateMipmaps=!0,i.needsUpdate=!0,i},ru=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},$3=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Zg),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},B_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=ru(e,.98,.02),s=ru(e,.05,.02),i=ru(e,.5,.02);if(!r||!s)return;let l=x=>{let C=x.match(/[\d.]+/g);return C?[Number(C[0]),Number(C[1]),Number(C[2])]:[255,255,255]},c=l(s),u=l(r),h=i?l(i):c;if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),m=Math.hypot(u[0]-h[0],u[1]-h[1],u[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&m>40){let x=t.createLinearGradient(0,0,a,0);x.addColorStop(0,s),x.addColorStop(1,r),t.fillStyle=x,t.fillRect(0,0,a,o+2);return}let I=1254/1495,p=.42;try{let x=document.createElement("canvas");x.width=100,x.height=20;let C=x.getContext("2d",{willReadFrequently:!0});if(C){C.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let b=C.getImageData(0,0,100,1).data,T=C.getImageData(0,19,100,1).data,v=b[98*4],A=b[98*4+1],w=b[98*4+2],D=-1,Y=-1;for(let V=98;V>=0;V--){let N=V*4;if(Math.hypot(b[N]-v,b[N+1]-A,b[N+2]-w)>40){D=V+1;break}}for(let V=98;V>=0;V--){let N=V*4;if(Math.hypot(T[N]-v,T[N+1]-A,T[N+2]-w)>40){Y=V+1;break}}if(D>50&&D<98&&(I=D/100,Y>0)){let V=Math.min(e.height*.1,200)*.95,N=(Y-D)/100*e.width;V>0&&(p=Math.max(0,Math.min(1.5,N/V)))}}}catch{}let g=a*I,y=g-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(y,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(g,o+2),t.closePath(),t.fill(),t.restore()}catch{}},eP=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let u=o-l;B_(t,e,a,u,i),t.drawImage(e,0,u,a,l)}else{let c=Math.min(a/e.width,s/e.height),u=e.width*c,h=e.height*c,f=(a-u)/2,d=o-h;B_(t,e,a,d,c),t.drawImage(e,f,d,u,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},U_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?$3(n,t.height,s):0,c=e?ru(e,.05,.02):null;if(i.fillStyle=c||tm(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let u=ru(e,.05,.98);u&&u!==c&&(i.fillStyle=u,i.fillRect(0,t.height-30,t.width,30))}eP(i,e,t.width,t.height,o,l)}},tP=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=tm(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=Y3(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=tm(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=tm(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},aP=()=>{let t=()=>Array.from({length:wa+1},()=>new z);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(wa),impulses:new Float64Array(wa),rest:1,anchor:new z,body:{position:new z,previous:new z,velocity:new z,quaternion:new ho,previousQuaternion:new ho,angular:new z,mass:1,inverseInertia:new z(1,1,1),hang:new z},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Jt={a:new z,b:new z,c:new z,d:new z,e:new z,f:new z,g:new z,pin:new z,q:new ho,r:new ho},Jg=(t,e,a)=>(Jt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(Jt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),N_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},O_=(t,e,a)=>{let o=Jt.c.crossVectors(e,a);return 1/t.mass+o.dot(Jg(t,o,Jt.d))},z_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),N_(t.quaternion,Jg(t,Jt.e.crossVectors(e,a),Jt.f))},oP=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:A_,l=e===wa-1,c=Jt.g,u=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),u=Jt.b.copy(r.position).add(c));let h=Jt.a.subVectors(u,s),f=h.length(),d=f-t.rest;if(d<=0||f<1e-9)return;let m=h.divideScalar(f),S=l?O_(r,c,m):A_,I=(f-t.lengths[e])/a,g=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,I))*a*a-t.impulses[e];if(g<=0)return;let y=Math.min(d/(i+S),g);t.impulses[e]+=y,i&&s.addScaledVector(m,y*i),l?z_(r,c,m.multiplyScalar(-y)):u.addScaledVector(m,-y*S)},nP=(t,e,a)=>{let o=Jt.g.copy(e.local).applyQuaternion(t.quaternion),n=Jt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/O_(t,o,s);z_(t,o,s.multiplyScalar(i))},Xg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=wa;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=Jt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[wa]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=wa;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},rP=(t,e,a)=>{t.rest=a/wa;let{width:o,height:n}=e,r=t.body,s=su+Fo*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},sP=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/N3-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,u=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,f=t.grab,d=Jt.pin,m=Math.exp(-a.nodeDrag*r),S=Math.exp(-a.linearDrag*r),I=Math.exp(-a.angularDrag*r);for(let g=0;g<n;g++){for(let w=1;w<wa;w++){let D=l[w];D.y-=a.gravity*r,D.x+=u*r,D.z+=h*r,i[w].copy(s[w]),s[w].addScaledVector(D,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let y=c.quaternion;if(f){let w=Jt.q.copy(f.rotation).multiply(Jt.r.copy(y).invert());w.w<0&&w.set(-w.x,-w.y,-w.z,-w.w);let D=Jt.a.set(w.x,w.y,w.z).multiplyScalar(2*a.grip);D.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector(Jg(c,D,Jt.b),r)}let x=Jt.a.set(0,1,0).applyQuaternion(y),C=Jt.b.set(-x.x*x.z,-x.y*x.z,1-x.z*x.z);if(C.lengthSq()>.001){let w=Jt.d.set(0,0,1).applyQuaternion(y),D=Math.atan2(Jt.e.crossVectors(C,w).dot(x),C.dot(w)),Y=D-t.twistRaw;Y>Math.PI?Y-=Math.PI*2:Y<-Math.PI&&(Y+=Math.PI*2),t.twist+=Y,t.twistRaw=D}if(!f){let w=c.angular.dot(x);c.angular.addScaledVector(x,(a.twist*(t.turn-t.twist)-a.twistDamping*w)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=u*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),N_(c.quaternion,Jt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),f&&d.lerpVectors(f.from,f.target,(g+1)/n);for(let w=0;w<O3;w++){for(let D=0;D<wa;D++)oP(t,D,r,a);f&&nP(c,f,d)}for(let w=1;w<wa;w++){let D=l[w].subVectors(s[w],i[w]).divideScalar(r).multiplyScalar(m);D.multiplyScalar(1/(1+a.nodeAir*D.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let b=Jt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(b.x,b.y,b.z).multiplyScalar(2/r*(b.w<0?-1:1));let T=Jt.a.set(0,0,1).applyQuaternion(c.quaternion),v=c.velocity.dot(T),A=Jt.b.copy(c.velocity).addScaledVector(T,-v);A.multiplyScalar(1/(1+a.air*A.length()*r)),c.velocity.copy(A).addScaledVector(T,v/(1+a.broadside*Math.abs(v)*r)).multiplyScalar(S),c.angular.multiplyScalar(I/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[wa].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let w=0;w<wa;w++)t.lengths[w]=s[w].distanceTo(s[w+1])}f&&f.from.copy(f.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let g=1;g<wa;g++)p+=l[g].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},iP=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:u="center",strapLength:h=.5,strapImage:f,strapColor:d="#111111",strapWidth:m=.65,metal:S="silver",gravity:I=1,damping:p=.5,elasticity:g=.5,breeze:y=.5,interactive:x=!0,intro:C=!0,className:b="",style:T})=>{let v=(0,Fi.useRef)(null),A=(0,Fi.useRef)(null),w=(0,Fi.useRef)(null);return A.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:u,strapLength:h,strapImage:f,strapColor:d,strapWidth:m,metal:S,gravity:I,damping:p,elasticity:g,breeze:y,interactive:x,intro:C},(0,Fi.useEffect)(()=>{w.current?.()}),(0,Fi.useEffect)(()=>{let D=v.current;if(!D)return;let Y;try{Y=new Kh({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}Y.setClearColor(0,0),Y.outputColorSpace=ja,Y.toneMapping=Xf,Y.toneMappingExposure=1;let V=Y.domElement;V.className="lanyard-canvas",V.setAttribute("aria-hidden","true"),D.appendChild(V);let N=Math.min(8,Y.capabilities.getMaxAnisotropy()),k=new Hl,ae=J3(Y);k.environment=ae.texture;let J=new no(w_,1,.1,200),le=new $l(16777215,1.6);le.position.set(-2.5,4,6);let W=new $l(16777215,.35);W.position.set(3,-1,4),k.add(le,W);let K={front:null,back:null,strap:null},$=document.createElement("canvas"),De=document.createElement("canvas"),be=document.createElement("canvas"),et=Wg($,N),q=Wg(De,N),st=Wg(be,N);st.wrapS=cn,st.wrapT=Kn;let ee=Q3(),te=j3(),Ce={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new z},foilFill:{value:new z},foilTop:{value:new z}},Ye=ce=>{Object.assign(ce.uniforms,Ce),ce.vertexShader=ce.vertexShader.replace("#include <common>",`#include <common>
${G3}`).replace("#include <project_vertex>",`#include <project_vertex>
${q3}`),ce.fragmentShader=ce.fragmentShader.replace("#include <common>",`#include <common>
${W3}`).replace("#include <opaque_fragment>",`${X3}
#include <opaque_fragment>`)},ye=new ys({map:et,normalMap:ee,normalScale:new Ne(.06,.06)}),Ge=new ys({map:q,normalMap:ee,normalScale:new Ne(.06,.06)});ye.onBeforeCompile=Ye,Ge.onBeforeCompile=Ye;let tt=new ys,oe=new Ql({metalness:1}),ue=new ys({map:st,normalMap:te,normalScale:new Ne(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new bt(.32,.32,.34),side:Zo}),xe=new Yn,ie=new Ma(void 0,tt),re=new Ma(void 0,ye),Oe=new Ma(void 0,Ge),qe=new Ma(new Jl(Zg,z3,18,72),oe);qe.rotation.y=Math.PI/2-.7,xe.add(ie,re,Oe,qe),k.add(xe);let He=K3(Er),Be=new Ma(He,ue);Be.frustumCulled=!1,k.add(Be);let E=new Yn,it=new Ma(P_(Gg),oe);it.position.y=jh+nu/2-.004;let at=new Ma(new Jl(jh,.0105,14,40),oe);E.add(it,at),k.add(E);let _=aP(),F=[],P=new z,Z=new z,se=new Yl(F,!1,"centripetal"),ve={width:1,height:1},Ie=D_("portrait",.3),H={},j=Gg,de=2,L=0,Pe=performance.now(),Le=0,fe=!0,ge=!0,_e=!1,B=!1,Fe=null,ne=0,Me=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,we=(ce="both")=>{let Ze=A.current,M=qg(Ze.cardColor,[1,1,1]),R=E_,O=Math.round(E_*Ie.height/Ie.width);($.width!==R||$.height!==O)&&($.width=R,$.height=O,De.width=R,De.height=O,et.dispose(),q.dispose()),ce!=="back"&&(U_($,K.front,M,Ze.imageFit,Ie,Ze.slotClearance,Ze.slotClearanceValue),et.needsUpdate=!0),ce!=="front"&&(U_(De,K.back||K.front,M,Ze.imageFit,Ie,Ze.slotClearance,Ze.slotClearanceValue),q.needsUpdate=!0),ze()},me=()=>{let ce=A.current,Ze=be.width,M=be.height;de=tP(be,K.strap,qg(ce.strapColor,[.07,.07,.07])),te.repeat.set(2,2*de),(be.width!==Ze||be.height!==M)&&st.dispose(),st.needsUpdate=!0,ze()},ke=()=>{let ce=A.current,Ze=ve.width/ve.height,M=gi(ce.size??1,.2,3),R=Ie.height/.72/M,O=Ie.width/.65/M;R*Ze<O&&(R=O/Ze);let X=R*Ze,G=.04*R,Se=((k3[ce.anchor]??.5)-.5)*X,Ae=G+R/2+.15,Re=G+Ie.height/2+(Ie.hangY-Ie.height/2);J.aspect=Ze,J.position.set(0,G,R/2/Math.tan(w_*Math.PI/360)),J.lookAt(0,G,0),J.updateProjectionMatrix(),J.updateMatrixWorld(),Ce.foilKey.value.set(-2.5,4,6).normalize().transformDirection(J.matrixWorldInverse),Ce.foilFill.value.set(3,-1,4).normalize().transformDirection(J.matrixWorldInverse),Ce.foilTop.value.set(.5,4.5,8).normalize().transformDirection(J.matrixWorldInverse),_.anchor.set(Se,Ae,0),rP(_,Ie,Math.max(.4,Ae-Re)),_.nodes[0].copy(_.anchor),_.previous[0].copy(_.anchor)},We=()=>{let ce=A.current,Ze=`${ce.orientation}|${ce.cornerRadius}|${JSON.stringify(ce.cardSize)}`;if(Ze!==H.layoutKey){Ie=D_(ce.orientation,ce.cornerRadius,ce.cardSize);let Ae=Z3(Ie);ie.geometry.dispose(),re.geometry.dispose(),Oe.geometry.dispose(),ie.geometry=Ae.body,re.geometry=Ae.face,Oe.geometry=Ae.face.clone(),re.position.z=su/2+Fo+6e-4,Oe.rotation.y=Math.PI,Oe.position.z=-(su/2+Fo+6e-4),qe.position.set(0,Ie.ringY,0),H.framingKey=""}let M=`${Ze}|${ce.size}|${ce.anchor}|${ce.strapLength}|${ve.width}|${ve.height}`;M!==H.framingKey&&(ke(),_e?Ze!==H.layoutKey&&Xg(_,Ie,!1):(Xg(_,Ie,ce.intro&&!Me),_e=!0));let R=`${ce.frontImage}|${ce.backImage}|${ce.strapImage}`;if(R!==H.imageKey){let Ae=++ne;K.front=K.back=K.strap=null;let Re=!1;am(om,ce.frontImage).then(Xe=>{!ge||Ae!==ne||(K.front=Xe,we("front"),(!ce.backImage||Re)&&we("back"))}),am(om,ce.backImage).then(Xe=>{!ge||Ae!==ne||(K.back=Xe,Re=!Xe,we("back"))}),am(om,ce.strapImage).then(Xe=>{!ge||Ae!==ne||(K.strap=Xe,me())})}let O=`${Ze}|${ce.cardColor}|${ce.imageFit}|${ce.slotClearance}|${ce.slotClearanceValue}`;O!==H.faceKey&&we(),ce.strapColor!==H.strapColor&&me();let X=R_[ce.finish]||R_.glossy,G=qg(ce.cardColor,[1,1,1]);[ye,Ge].forEach(Ae=>{Ae.roughness=X.roughness,Ae.metalness=X.metalness,Ae.clearcoat=X.clearcoat,Ae.clearcoatRoughness=X.clearcoatRoughness,Ae.anisotropy=X.anisotropy}),Ce.foilStrength.value=X.foil,Ce.foilAspect.value=Ie.height/Ie.width,tt.color.setRGB(G[0]*.92,G[1]*.92,G[2]*.92,ja),tt.roughness=Math.min(X.roughness,.35),tt.metalness=X.metalness,tt.clearcoat=1,tt.clearcoatRoughness=.08;let Se=L_[ce.metal]||L_.silver;oe.color.set(Se.color),oe.roughness=Se.roughness,j=Gg*gi(ce.strapWidth,.4,2),j!==H.strapScale&&(it.geometry.dispose(),it.geometry=P_(j)),V.style.touchAction=ce.interactive?"pan-y":"auto",H={layoutKey:Ze,framingKey:M,imageKey:R,faceKey:O,strapColor:ce.strapColor,strapScale:j},ze()},vt=Array.from({length:Er},()=>new z),Ft=Array.from({length:Er},()=>new z),va=H3.map(ce=>[Math.cos(ce),Math.sin(ce)]),Nt={tangent:new z,toCamera:new z,basis:new oa,up:new z,across:new z,facing:new z,end:new z},nr=()=>{let ce=_.nodes[wa],Ze=jh+nu+.05,M=wa-1;for(;M>0&&_.nodes[M].distanceTo(ce)<Ze*1.1;)M--;let R=Nt.up.subVectors(_.nodes[M],ce);R.lengthSq()<1e-8&&R.set(0,1,0).applyQuaternion(_.body.quaternion),R.normalize(),P.copy(ce).addScaledVector(R,Ze),Z.copy(ce).addScaledVector(R,jh+nu*.35),F.length=0;for(let ct=0;ct<=M;ct++)F.push(_.nodes[ct]);F.push(P,Z),se.updateArcLengths();for(let ct=0;ct<Er;ct++)se.getPointAt(ct/(Er-1),vt[ct]);let O=se.getLength(),X=1-P.distanceTo(Z)/Math.max(O,.001),G=He.getAttribute("position"),Se=He.getAttribute("normal"),Ae=He.getAttribute("uv"),Re=$h.length,Xe=_.rest*wa,Je=Xe/(j*de),ut=j/Math.pow(Math.max(1,O/Math.max(Xe,.001)),.35),{tangent:ht,toCamera:je,across:St,facing:Ot}=Nt;for(let ct=0;ct<Er;ct++){ht.subVectors(vt[Math.min(Er-1,ct+1)],vt[Math.max(0,ct-1)]),ht.lengthSq()<1e-12&&ht.set(0,-1,0),ht.normalize(),je.subVectors(J.position,vt[ct]).normalize();let At=Ft[ct].crossVectors(je,ht);At.lengthSq()<1e-10&&At.copy(ct>0?Ft[ct-1]:Jt.a.set(1,0,0)),At.normalize(),ct>0&&At.dot(Ft[ct-1])<0&&At.negate();let Xt=-_.twist*Math.pow(Math.min(1,ct/(Er-1)/X),1.3);Ot.crossVectors(ht,At),St.copy(At).multiplyScalar(Math.cos(Xt)).addScaledVector(Ot,Math.sin(Xt)),Ot.crossVectors(ht,St);let Ve=vt[ct],xa=(1-ct/(Er-1))*Je;for(let dt=0;dt<Re;dt++){let na=ct*Re+dt,ga=($h[dt]-.5)*ut,[Ra,So]=va[dt];G.setXYZ(na,Ve.x+St.x*ga,Ve.y+St.y*ga,Ve.z+St.z*ga),Se.setXYZ(na,Ot.x*Ra+St.x*So,Ot.y*Ra+St.y*So,Ot.z*Ra+St.z*So),Ae.setXY(na,$h[dt],xa)}}Nt.end.copy(St),G.needsUpdate=!0,Se.needsUpdate=!0,Ae.needsUpdate=!0,St.copy(Nt.end).addScaledVector(R,-Nt.end.dot(R)).normalize(),Ot.crossVectors(St,R).normalize(),Nt.basis.makeBasis(St,R,Ot),E.quaternion.setFromRotationMatrix(Nt.basis),E.position.copy(ce)},un=()=>{xe.position.copy(_.body.position),xe.quaternion.copy(_.body.quaternion),nr(),Y.render(k,J)},rr=()=>{let ce=A.current,Ze=40*gi(ce.gravity,0,3),M=Math.max(Ze,20),R=gi(ce.elasticity,0,1),O=gi(ce.damping,0,1);return{gravity:Ze,hold:M*em(2.2,5.5,R),stiffness:M*10*wa,spring:M*em(.1,.4,R)*wa,bandDamping:M*em(.3,.08,R)*wa,linearDrag:.25*Math.pow(16,O),angularDrag:.5*Math.pow(12,O),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Me?0:gi(ce.breeze,0,1)}},dn=ce=>{if(L=0,!ge)return;let Ze=Math.min(1/30,Math.max(1/240,(ce-Pe)/1e3));Pe=ce,Le+=Ze;let M=rr();sP(_,Ze,M,Le);let R=_.body;Number.isFinite(R.position.x+R.position.y+R.position.z+R.quaternion.w)||(_.grab=null,Xg(_,Ie,!1)),un();let O=_.calm>1.2&&!_.grab&&M.breeze===0;fe&&!O&&(L=requestAnimationFrame(dn))},ze=()=>{L||!fe||!ge||(_.calm=0,Pe=performance.now(),L=requestAnimationFrame(dn))},nt=new qf,rt=new Ne,_t=ce=>{let Ze=V.getBoundingClientRect();rt.set((ce.clientX-Ze.left)/Ze.width*2-1,-((ce.clientY-Ze.top)/Ze.height)*2+1),nt.setFromCamera(rt,J)},Lt=()=>(xe.updateMatrixWorld(),nt.intersectObjects([ie,re,Oe],!1)[0]||null),pa=ce=>{V.style.cursor!==ce&&(V.style.cursor=ce)},Ea=ce=>{let Ze=_.body,M=Jt.a.set(0,1,0).applyQuaternion(Ze.quaternion),R=_.turn>0?-1:1;if(_.turn===0){let O=Jt.c.subVectors(ce,J.position).normalize();R=Jt.b.subVectors(ce,Ze.position).cross(O).dot(M)<0?-1:1}_.turn=_.turn===0?Math.PI*R:0,Ze.angular.addScaledVector(M,V3*R)},Dt=ce=>{if(!A.current.interactive||ce.button>0)return;_t(ce);let Ze=Lt();Ze&&(_.grab={local:Ze.point.clone().sub(_.body.position).applyQuaternion(_.body.quaternion.clone().invert()),rotation:_.body.quaternion.clone(),reach:Ze.distance,from:Ze.point.clone(),target:Ze.point.clone()},Fe={x:ce.clientX,y:ce.clientY,time:performance.now(),point:Ze.point.clone()},V.setPointerCapture?.(ce.pointerId),pa("grabbing"),ce.preventDefault(),ze())},U=ce=>{if(A.current.interactive){if(_t(ce),_.grab){Fe&&Math.hypot(ce.clientX-Fe.x,ce.clientY-Fe.y)>6&&(Fe=null),nt.ray.at(_.grab.reach,_.grab.target),ze();return}ce.pointerType!=="touch"&&(B=!!Lt(),pa(B?"grab":""))}},Q=ce=>{_.grab&&(_.grab=null,Fe&&ce.type==="pointerup"&&performance.now()-Fe.time<450&&Ea(Fe.point),Fe=null,V.releasePointerCapture?.(ce.pointerId),pa(B&&ce.pointerType!=="touch"?"grab":""),ze())},pe=ce=>{!A.current.interactive||ce.touches.length!==1||(_t(ce.touches[0]),Lt()&&ce.preventDefault())};V.addEventListener("pointerdown",Dt),V.addEventListener("pointermove",U),V.addEventListener("pointerup",Q),V.addEventListener("pointercancel",Q),V.addEventListener("lostpointercapture",Q),V.addEventListener("touchstart",pe,{passive:!1});let Ee=()=>{ve.width=Math.max(1,D.clientWidth),ve.height=Math.max(1,D.clientHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Y.setSize(ve.width,ve.height,!1),We(),un()},pt=new ResizeObserver(Ee);pt.observe(D);let zt=new IntersectionObserver(([ce])=>{fe=ce.isIntersecting,fe&&ze()});zt.observe(D);let Qt=()=>{document.hidden||ze()};return document.addEventListener("visibilitychange",Qt),w.current=We,Ee(),()=>{ge=!1,cancelAnimationFrame(L),w.current=null,pt.disconnect(),zt.disconnect(),document.removeEventListener("visibilitychange",Qt),V.removeEventListener("pointerdown",Dt),V.removeEventListener("pointermove",U),V.removeEventListener("pointerup",Q),V.removeEventListener("pointercancel",Q),V.removeEventListener("lostpointercapture",Q),V.removeEventListener("touchstart",pe),[ie,re,Oe,qe,it,at,Be].forEach(ce=>ce.geometry?.dispose()),[ye,Ge,tt,oe,ue].forEach(ce=>ce.dispose()),[et,q,st,ee,te].forEach(ce=>ce.dispose()),ae.dispose(),Y.dispose(),V.parentNode&&V.parentNode.removeChild(V)}},[]),Ue.createElement("div",{ref:v,className:`lanyard ${b}`.trim(),style:T})},Qg=iP;mt();var Ko=hn(Ro());var nm=4,H_=2.4,lP=2.2,rm=1.25,cP="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",fP="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",uP={solid:0,dashed:1,dotted:2},dP=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,pP=`#version 300 es
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
}`,hP=`#version 300 es
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
}`,mP=`#version 300 es
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
}`,IP=`#version 300 es
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
}`,io=(t,e,a)=>Math.min(a,Math.max(e,t)),V_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},sm=(t,e)=>{let a=V_(t,t.VERTEX_SHADER,dP),o=V_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},im=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},lm=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},cm=null,xP=()=>window.faceapi?Promise.resolve(window.faceapi):(cm||(cm=new Promise((t,e)=>{let a=document.createElement("script");a.src=cP,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{cm=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),cm),gP={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},FP=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:u=.7,scanDirection:h="forward",scanDuration:f=2.4,scanDelay:d=1.6,scanWidth:m=1,trail:S=.5,glow:I=.6,autoScan:p=!0,interactive:g=!0,clickEffect:y="ping",enableWebcam:x=!1,showPreview:C=!1,modelsPath:b=fP,enableGyro:T=!1,intro:v=!0,lightMode:A=!1,dpr:w,className:D="",style:Y,...V})=>{let N=(0,Ko.useRef)(null),k=(0,Ko.useRef)(null),ae=(0,Ko.useRef)(null),J=(0,Ko.useRef)(null),le=(0,Ko.useRef)(null),[W,K]=(0,Ko.useState)("loading"),$={linesColor:t??(A?"#d4d4d8":"#4d4757"),scanColor:e??(A?"#0284c7":"#7dd3fc"),cells:io(a,2,40),thickness:io(o,.5,4),style:uP[n]??0,depth:io(r,.5,12),depthFade:io(s,0,1),parallax:io(i,0,3),points:l,reflection:io(c,0,1),shading:io(u,0,1),direction:h,duration:io(f,.3,20),delay:io(d,0,30),scanWidth:io(m,.2,5),trail:io(S,0,1),glow:io(I,0,1.5),autoScan:p,interactive:g,clickEffect:y,enableGyro:T,intro:v,lightMode:A,dpr:w},De=(0,Ko.useRef)($);return De.current=$,(0,Ko.useEffect)(()=>{let be=N.current,et=k.current,q=et?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!be||!et||!q)return;let st=sm(q,pP),ee=sm(q,hP),te=sm(q,mP),Ce=sm(q,IP);if(!st||!ee||!te||!Ce)return;let Ye=q.createVertexArray(),ye=im(q),Ge=im(q),tt=im(q),oe=im(q),ue=q.createFramebuffer(),xe=q.createFramebuffer(),ie=q.createFramebuffer(),re=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Oe=new Map,qe=ze=>{let nt=String(ze),rt=Oe.get(nt);if(rt)return rt;let _t=[1,1,1];if(re){re.clearRect(0,0,1,1),re.fillStyle="#000000",re.fillStyle=nt,re.fillRect(0,0,1,1);let[Lt,pa,Ea]=re.getImageData(0,0,1,1).data;_t=[Lt/255,pa/255,Ea/255]}return Oe.set(nt,_t),_t},He=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Be={width:1,height:1,ratio:1},E={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:rm,vf:0,tf:rm},it={x:0,y:0,inside:!1},at={x:0,y:0,held:!1},_={gamma:0,beta:0,ready:!1,asked:!1},F={x:0,y:0,z:0,strength:0,ready:!1},P={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},Z=[],se=new Float32Array(nm*4),ve=new Float32Array(nm),Ie=0,H=De.current.intro&&!He?0:1,j=0,de=0,L=!0,Pe=0,Le=()=>{let ze=De.current,nt=Be.width/Be.height,rt=1/Math.round(ze.cells),_t=nt/Math.max(1,Math.round(nt/rt)),Lt=Math.max(rt,Math.round(ze.depth/rt)*rt);return{aspect:nt,cx:_t,cy:rt,roomDepth:Lt}},fe=(ze,nt)=>{let{aspect:rt,roomDepth:_t}=Le(),Lt=(ze-.5)*rt,pa=nt-.5,Ea=Lt-E.x,Dt=pa-E.y,U=E.f,Q=Ea>0?.5*rt:-.5*rt,pe=Dt>0?.5:-.5,Ee=_t/U;return Math.abs(Ea)>1e-6&&(Ee=Math.min(Ee,(Q-Lt)/Ea)),Math.abs(Dt)>1e-6&&(Ee=Math.min(Ee,(pe-pa)/Dt)),{x:Lt+Ea*Ee,y:pa+Dt*Ee,z:U*Ee}},ge=ze=>{P.dir=ze.direction==="backward"||ze.direction==="pingpong"&&P.sweeps%2===1?-1:1,P.start=Ie,P.waiting=!1,P.sweeps+=1},_e=(ze,nt)=>{if(H<1){let Lt=H;P.dir=1,P.z=Lt*(nt+.4)-.2,P.alpha=Math.min(1,Lt*6)*(1-Math.max(0,Lt-.85)/.15);return}if(P.sweeps===0&&!P.waiting&&(P.waiting=!0,P.start=Ie,P.alpha=0),P.waiting){P.alpha=0,ze.autoScan&&!He&&Ie-P.start>=ze.delay&&ge(ze);return}let rt=(Ie-P.start)/ze.duration;if(rt>=1){P.waiting=!0,P.start=Ie,P.alpha=0;return}let _t=rt*(nt+.3)-.15;P.z=P.dir>0?_t:nt-_t,P.alpha=Math.min(1,rt/.12)*Math.min(1,(1-rt)/.12)},B=ze=>{let nt=Math.max(1,Math.ceil(ze/.008333333333333333)),rt=ze/nt;for(let _t=0;_t<nt;_t++)E.vx+=((E.tx-E.x)*42-E.vx*11)*rt,E.vy+=((E.ty-E.y)*42-E.vy*11)*rt,E.vf+=((E.tf-E.f)*42-E.vf*11)*rt,E.x+=E.vx*rt,E.y+=E.vy*rt,E.f+=E.vf*rt},Fe=(ze,nt,rt)=>{at.x=io(ze,-1,1),at.y=io(nt,-1,1),at.held=rt},ne=ze=>{let nt=Be.width/Be.height,rt=He?0:1,_t=at.held?at.x:(Math.sin(Ie*.21)*.2+Math.sin(Ie*.083+1.3)*.12)*rt,Lt=at.held?at.y:Math.sin(Ie*.17+2.1)*.16*rt;E.tx=_t*ze.parallax*.22*nt,E.ty=Lt*ze.parallax*.22},Me=()=>{let ze=De.current;Be.width=Math.max(1,be.clientWidth),Be.height=Math.max(1,be.clientHeight),Be.ratio=Math.min(ze.dpr||window.devicePixelRatio||1,2),et.width=Math.max(1,Math.round(Be.width*Be.ratio)),et.height=Math.max(1,Math.round(Be.height*Be.ratio)),lm(q,ye,et.width,et.height),lm(q,Ge,et.width,et.height),q.bindFramebuffer(q.FRAMEBUFFER,ue),q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ye.texture,0),q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT1,q.TEXTURE_2D,Ge.texture,0);let nt=Math.max(1,Math.round(et.width/4)),rt=Math.max(1,Math.round(et.height/4));lm(q,tt,nt,rt),lm(q,oe,nt,rt),q.bindFramebuffer(q.FRAMEBUFFER,xe),q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,tt.texture,0),q.bindFramebuffer(q.FRAMEBUFFER,ie),q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,oe.texture,0),q.bindFramebuffer(q.FRAMEBUFFER,null),we(),ke()},we=()=>{let ze=De.current,{aspect:nt,cx:rt,cy:_t,roomDepth:Lt}=Le(),pa=qe(ze.linesColor),Ea=qe(ze.scanColor),Dt=ze.lightMode?Ea:Ea.map(pe=>pe+(1-pe)*.65),U=st.uniforms;q.bindVertexArray(Ye),q.disable(q.BLEND),q.bindFramebuffer(q.FRAMEBUFFER,ue),q.drawBuffers([q.COLOR_ATTACHMENT0,q.COLOR_ATTACHMENT1]),q.viewport(0,0,et.width,et.height),q.useProgram(st.program),q.uniform1f(U.uAspect,nt),q.uniform1f(U.uPixel,1/et.height),q.uniform3f(U.uEye,E.x,E.y,-E.f),q.uniform1f(U.uDepth,Lt),q.uniform3f(U.uCell,rt,_t,_t),q.uniform1f(U.uThick,ze.thickness*Be.ratio*.5),q.uniform1f(U.uDot,1.8*Be.ratio),q.uniform1i(U.uStyle,ze.style),q.uniform3fv(U.uLineColor,pa),q.uniform3fv(U.uScanColor,Ea),q.uniform3fv(U.uCoreColor,Dt),q.uniform1f(U.uFade,ze.depthFade),q.uniform1f(U.uScanZ,P.z),q.uniform1f(U.uScanDir,P.dir),q.uniform1f(U.uScanAlpha,P.alpha),q.uniform1f(U.uScanWidth,.006*ze.scanWidth),q.uniform1f(U.uTrail,.04+ze.trail*1.1),q.uniform1f(U.uReveal,H<1?P.z+.05:1e4),q.uniform1f(U.uPoints,ze.points?1:0),q.uniform1f(U.uReflect,ze.reflection),q.uniform1f(U.uHaze,ze.lightMode?.03:.05),q.uniform1f(U.uShade,ze.shading),q.uniform1f(U.uLight,ze.lightMode?1:0),q.uniform4fv(U.uPing,se),q.uniform1fv(U.uPingAlpha,ve),q.uniform4f(U.uHover,F.x,F.y,F.z,F.strength),q.uniform1f(U.uTime,Ie),q.drawArrays(q.TRIANGLES,0,3);let Q=ze.glow>0;if(Q){q.bindFramebuffer(q.FRAMEBUFFER,xe),q.viewport(0,0,tt.width,tt.height),q.useProgram(ee.program),q.activeTexture(q.TEXTURE0),q.bindTexture(q.TEXTURE_2D,Ge.texture),q.uniform1i(ee.uniforms.uSource,0),q.uniform2f(ee.uniforms.uTexel,1/Ge.width,1/Ge.height),q.drawArrays(q.TRIANGLES,0,3);let pe=2.2*Be.ratio/2;q.useProgram(te.program),q.uniform1i(te.uniforms.uSource,0),q.bindFramebuffer(q.FRAMEBUFFER,ie),q.bindTexture(q.TEXTURE_2D,tt.texture),q.uniform2f(te.uniforms.uStep,pe/tt.width,0),q.drawArrays(q.TRIANGLES,0,3),q.bindFramebuffer(q.FRAMEBUFFER,xe),q.bindTexture(q.TEXTURE_2D,oe.texture),q.uniform2f(te.uniforms.uStep,0,pe/tt.height),q.drawArrays(q.TRIANGLES,0,3)}q.bindFramebuffer(q.FRAMEBUFFER,null),q.viewport(0,0,et.width,et.height),q.useProgram(Ce.program),q.activeTexture(q.TEXTURE0),q.bindTexture(q.TEXTURE_2D,ye.texture),q.uniform1i(Ce.uniforms.uScene,0),q.activeTexture(q.TEXTURE1),q.bindTexture(q.TEXTURE_2D,tt.texture),q.uniform1i(Ce.uniforms.uBloom,1),q.uniform1f(Ce.uniforms.uGlow,Q?ze.glow*(ze.lightMode?.8:1.6):0),q.drawArrays(q.TRIANGLES,0,3),q.activeTexture(q.TEXTURE0)},me=ze=>{if(j=0,!L||document.hidden)return;let nt=De.current,rt=de?io((ze-de)/1e3,.001,.05):1/60;de=ze,Ie+=rt,H<1&&(H=Math.min(1,H+rt/lP));let{roomDepth:_t}=Le();_e(nt,_t),ne(nt),B(rt);let Lt=nt.interactive&&it.inside&&!He?1:0;if(Lt){let Dt=fe(it.x,it.y);F.ready||Object.assign(F,Dt,{ready:!0});let U=1-Math.exp(-rt/.08);F.x+=(Dt.x-F.x)*U,F.y+=(Dt.y-F.y)*U,F.z+=(Dt.z-F.z)*U}F.strength+=(Lt-F.strength)*(1-Math.exp(-rt/.25)),!Lt&&F.strength<.01&&(F.ready=!1);for(let Dt=Z.length-1;Dt>=0;Dt--)Z[Dt].age+=rt,Z[Dt].age>H_&&Z.splice(Dt,1);for(let Dt=0;Dt<nm;Dt++){let U=Z[Dt];if(!U){ve[Dt]=0;continue}let Q=U.age/H_;se.set([U.x,U.y,U.z,U.age*1.15],Dt*4),ve[Dt]=Math.min(1,U.age/.05)*(1-Q)*(1-Q)}we();let pa=Math.abs(E.tx-E.x)+Math.abs(E.ty-E.y)+Math.abs(E.tf-E.f)>1e-4||Math.abs(E.vx)+Math.abs(E.vy)+Math.abs(E.vf)>1e-4;H<1||!He&&nt.autoScan||!P.waiting||Z.length>0||pa||F.strength>.002||!He&&nt.parallax>0&&!at.held||nt.points&&!He&&P.alpha>0?j=requestAnimationFrame(me):de=0};function ke(){!j&&L&&!document.hidden&&(j=requestAnimationFrame(me))}let We=ze=>{let nt=be.getBoundingClientRect(),rt=(ze.clientX-nt.left)/Math.max(1,nt.width),_t=1-(ze.clientY-nt.top)/Math.max(1,nt.height);return{u:rt,v:_t,inside:rt>=0&&rt<=1&&_t>=0&&_t<=1}},vt=ze=>{let nt=De.current,{u:rt,v:_t,inside:Lt}=We(ze);it.x=rt,it.y=_t;let pa=it.inside;it.inside=Lt,Lt?(window.clearTimeout(Pe),Pe=0,!le.current?.active&&nt.interactive&&!He&&Fe(rt*2-1,_t*2-1,!0),ke()):pa&&!Pe&&(Pe=window.setTimeout(()=>{Pe=0,le.current?.active||(at.held=!1),ke()},220),ke())},Ft=ze=>{let nt=De.current,{u:rt,v:_t,inside:Lt}=We(ze);if(!(!Lt||He||nt.clickEffect==="none")){if(nt.clickEffect==="scan")H>=1&&ge(nt);else{let pa=fe(rt,_t);Z.unshift({...pa,age:0}),Z.length>nm&&Z.pop()}ke()}},va=()=>{it.inside=!1,le.current?.active||(at.held=!1),ke()},Nt=ze=>{!De.current.enableGyro||le.current?.active||He||ze.gamma===null||ze.beta===null||(_.ready||Object.assign(_,{gamma:ze.gamma,beta:ze.beta,ready:!0}),Fe((ze.gamma-_.gamma)/25,(ze.beta-_.beta)/-25,!0),ke())},nr=()=>{let ze=De.current,nt=window.DeviceOrientationEvent?.requestPermission;!ze.enableGyro||_.asked||typeof nt!="function"||(_.asked=!0,nt.call(window.DeviceOrientationEvent).catch(()=>{}))},un=()=>{de=0,ke()},rr=new ResizeObserver(Me);rr.observe(be);let dn=new IntersectionObserver(ze=>{L=ze.some(nt=>nt.isIntersecting),L&&(de=0,ke())});return dn.observe(be),window.addEventListener("pointermove",vt,{passive:!0}),window.addEventListener("pointerdown",Ft,{passive:!0}),window.addEventListener("deviceorientation",Nt),window.addEventListener("click",nr),document.documentElement.addEventListener("pointerleave",va),document.addEventListener("visibilitychange",un),le.current={active:!1,move:(ze,nt,rt)=>{He||(Fe(ze*1.3,nt*1.3,!0),E.tf=rm*io(rt,.6,1.6),ke())},release:()=>{E.tf=rm,at.held=!1,ke()}},Me(),J.current=ke,()=>{cancelAnimationFrame(j),window.clearTimeout(Pe),J.current=null,le.current=null,rr.disconnect(),dn.disconnect(),window.removeEventListener("pointermove",vt),window.removeEventListener("pointerdown",Ft),window.removeEventListener("deviceorientation",Nt),window.removeEventListener("click",nr),document.documentElement.removeEventListener("pointerleave",va),document.removeEventListener("visibilitychange",un),[ye,Ge,tt,oe].forEach(ze=>q.deleteTexture(ze.texture)),[ue,xe,ie].forEach(ze=>q.deleteFramebuffer(ze)),q.deleteVertexArray(Ye),[st,ee,te,Ce].forEach(ze=>q.deleteProgram(ze.program)),q.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Ko.useEffect)(()=>{J.current?.()}),(0,Ko.useEffect)(()=>{if(!x)return;let be=ae.current;if(!be)return;let et=!1,q=null,st=0,ee=0,te={x:0,y:0,near:1,ready:!1};return K("loading"),(async()=>{try{let Ye=await xP();if(await Ye.nets.tinyFaceDetector.loadFromUri(b),et)return;if(q=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),et){q.getTracks().forEach(tt=>tt.stop());return}be.srcObject=q,await be.play(),K("searching");let ye=new Ye.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ge=async()=>{if(et)return;let tt=null;try{tt=await Ye.detectSingleFace(be,ye)}catch{tt=null}if(et)return;let oe=le.current;if(tt&&oe){let ue=tt.box,xe=be.videoWidth||1,ie=be.videoHeight||1,re=-((ue.x+ue.width/2)/xe-.5)*2,Oe=-((ue.y+ue.height/2)/ie-.5)*2,qe=.32/Math.max(.08,ue.width/xe),He=te.ready?.45:1;te.x+=(re-te.x)*He,te.y+=(Oe-te.y)*He,te.near+=(qe-te.near)*He,te.ready=!0,ee=0,oe.active=!0,oe.move(te.x,te.y,te.near),K("tracking")}else oe&&++ee>12&&oe.active&&(oe.active=!1,te.ready=!1,oe.release(),K("searching"));st=window.setTimeout(Ge,40)};Ge()}catch{et||K("blocked")}})(),()=>{et=!0,window.clearTimeout(st),q?.getTracks().forEach(ye=>ye.stop()),be.srcObject=null;let Ye=le.current;Ye?.active&&(Ye.active=!1,Ye.release())}},[x,b]),Ue.createElement("div",{ref:N,className:`grid-scan${D?` ${D}`:""}`,style:Y,...V},Ue.createElement("canvas",{ref:k,className:"grid-scan-canvas","aria-hidden":"true"}),x&&Ue.createElement("div",{className:C?"grid-scan-preview":"grid-scan-hidden"},Ue.createElement("video",{ref:ae,className:"grid-scan-video",muted:!0,playsInline:!0}),C&&Ue.createElement("span",{className:"grid-scan-status"},gP[W])))},G_=FP;mt();var ot=hn(Ro());mt();var $t=hn(Ro());mt();mt();var iu=hn(Ro(),1),SP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Es=(0,iu.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:u=!1,...h},f)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,m=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},S={ref:f,...SP,width:e,height:e,color:l||t,className:n,...m,...h},p=[...s&&r?r:i].sort(([,g],[,y])=>{let x=g.opacity!==void 0;return y.opacity!==void 0?1:x?-1:0}).map(([g,y])=>{let x=y.opacity!==void 0,C=x&&!u?y.opacity:void 0,b=c?{...y.stroke!==void 0?{stroke:x?c:l||t}:{fill:x?c:l||t}}:{};return(0,iu.createElement)(g,{...y,...m,...b,opacity:C,key:y.key})});return(0,iu.createElement)("svg",S,p)});Es.displayName="HugeiconsIcon";mt();mt();var ar=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];mt();var Rr=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];mt();var Lr=[["path",{d:"M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]];mt();var lu=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var cu=typeof window>"u"?$t.useEffect:$t.useLayoutEffect,q_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},Y_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",Z_="cubic-bezier(0.22, 1, 0.36, 1)",W_=(t,e,a)=>Math.min(a,Math.max(e,t)),vP=t=>typeof t=="number"?`${t}px`:t,yP=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},X_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?Y_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function MP(){let t=(0,$t.useRef)(null);return cu(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:Z_}))},[]),Ue.createElement("span",{ref:t,className:"stepper__check"},Ue.createElement(Es,{icon:lu,size:16,strokeWidth:2.4}))}function fm({children:t}){return Ue.createElement("div",{className:"stepper__step"},t)}function jg({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:u,showFooter:h=!0,backButtonText:f="Back",nextButtonText:d="Continue",completeButtonText:m="Complete",backButtonProps:S={},nextButtonProps:I={},completedContent:p,theme:g="dark",accentColor:y="#00f5ff",frame:x=!0,radius:C=20,width:b=620,className:T="",stepCircleContainerClassName:v="",stepContainerClassName:A="",contentClassName:w="",footerClassName:D="",style:Y,...V}){let N=$t.Children.toArray(t).filter($t.isValidElement),k=N.length,ae=typeof e=="number",[J,le]=(0,$t.useState)(a),W=W_(Math.round(ae?e:J),1,k+1),K=W>k,$=s==="vertical",De=$?"numbers":r,be=N.some(fe=>fe.props.title),[et,q]=(0,$t.useState)(!1),[st,ee]=(0,$t.useState)(!1),te=$&&!et,[Ce,Ye]=(0,$t.useState)(W);W>Ce&&Ye(W);let[ye,Ge]=(0,$t.useState)({step:W,previous:null,direction:1,id:0});ye.step!==W&&Ge({step:W,previous:ye.step,direction:W>ye.step?1:-1,id:ye.id+1});let tt=(0,$t.useRef)(null),oe=(0,$t.useRef)(null),ue=(0,$t.useRef)(null),xe=(0,$t.useRef)([]),ie=(0,$t.useRef)([]),re=(0,$t.useRef)(null),Oe=(0,$t.useRef)(null),qe=(0,$t.useRef)(null),He=(0,$t.useRef)(0),Be=(0,$t.useRef)([]),E=(0,$t.useRef)(!1);E.current=st;let it=(0,$t.useRef)(!1),at=fe=>{let ge=W_(fe,1,k+1);ge!==W&&(ae||le(ge),ge>k?n():o(ge))},_=fe=>!c&&fe!==W&&(!l||fe<=Math.min(Ce,k));cu(()=>{let fe=tt.current;if(!fe)return;let ge=()=>{let B=$&&fe.clientWidth<520;q(B);let Fe=oe.current;if(!Fe||!be||$&&!B){ee(!1);return}let ne=xe.current.slice(0,k);E.current||ne.forEach((ke,We)=>{let vt=ie.current[We];Be.current[We]=vt&&ke?.contains(vt)?vt.scrollWidth+8:0});let Me=ne.reduce((ke,We)=>ke+(We?.firstElementChild?.getBoundingClientRect().width??22)+20,0),we=Be.current.slice(0,k).reduce((ke,We)=>ke+(We||0),0),me=Fe.clientWidth-8-4*Math.max(0,k-1);ee(Me+we>me+.5)};ge();let _e=new ResizeObserver(ge);return _e.observe(fe),()=>_e.disconnect()},[$,be,x,k,De]),cu(()=>{let fe=re.current;if(!fe)return;He.current=fe.offsetHeight;let ge=new ResizeObserver(()=>{He.current=fe.offsetHeight});return ge.observe(fe),()=>ge.disconnect()},[]),cu(()=>{if(ye.id===0)return;let fe=re.current,ge=Oe.current,_e=qe.current,B=ye.id,Fe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ne=i==="none"?"none":Fe?"fade":i,Me=()=>Ge(Ft=>Ft.id===B?{...Ft,previous:null}:Ft);if(_e&&ge&&_e.contains(document.activeElement)&&ge.focus({preventScroll:!0}),!fe||typeof fe.animate!="function"||ne==="none"){Me();return}for(let Ft of[fe,ge,_e])Ft?.getAnimations().forEach(va=>va.cancel());let we=He.current,me=fe.offsetHeight,ke=X_();Math.abs(we-me)>.5&&fe.animate([{height:`${we}px`},{height:`${me}px`}],{duration:Fe?200:560,easing:Fe?Z_:ke});let We=$?"Y":"X",vt=ne==="slide"?36:0;if(ge&&(vt&&ge.animate([{transform:`translate${We}(${ye.direction*vt}px)`},{transform:"none"}],{duration:560,easing:ke}),ge.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),_e){_e.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let Ft=_e.animate([{transform:"none"},{transform:`translate${We}(${-ye.direction*vt}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});Ft.onfinish=Me}else Me()},[ye.id]),cu(()=>{let fe=oe.current,ge=ue.current;if(!fe||!ge)return;let _e=Fe=>{let ne=xe.current[Math.min(W,k)-1];if(!ne)return;let Me=X_();ge.style.transition=Fe?`transform 560ms ${Me}, width 560ms ${Me}, height 560ms ${Me}, opacity 200ms ease`:"opacity 200ms ease",ge.style.transform=`translate3d(${ne.offsetLeft}px, ${ne.offsetTop}px, 0)`,ge.style.width=`${ne.offsetWidth}px`,ge.style.height=`${ne.offsetHeight}px`,ge.style.opacity=K?"0":"1"};_e(it.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),it.current=!0;let B=new ResizeObserver(()=>_e(!1));return B.observe(fe),()=>B.disconnect()},[W,k,K,De,be,$,et,st]);let F=fe=>fe>k?p??null:N[fe-1],P=y?{"--stepper-solid":y,"--stepper-solid-ink":yP(y)}:{},Z=(fe,ge,_e)=>Ue.createElement("span",{className:"stepper__badge","data-status":_e},_e==="complete"?Ue.createElement(MP,null):fe.props.icon?Ue.createElement("span",{className:"stepper__glyph"},fe.props.icon):ge),se=()=>De==="dots"?Ue.createElement("div",{className:"stepper__dots"},N.map((fe,ge)=>{let _e=ge+1,B=K||_e<W?"complete":_e===W?"active":"upcoming";return Ue.createElement("button",{key:_e,type:"button",className:"stepper__dot","data-status":B,"aria-label":fe.props.title?`Step ${_e}: ${fe.props.title}`:`Step ${_e}`,"aria-current":_e===W?"step":void 0,disabled:!_(_e),onClick:()=>at(_e)},Ue.createElement("span",{className:"stepper__dot-mark","data-status":B}))})):De==="bars"?Ue.createElement("div",{className:"stepper__bars"},N.map((fe,ge)=>{let _e=ge+1,B=K||_e<=W;return Ue.createElement("button",{key:_e,type:"button",className:"stepper__bar","data-status":K||_e<W?"complete":_e===W?"active":"upcoming","aria-label":fe.props.title?`Step ${_e}: ${fe.props.title}`:`Step ${_e}`,"aria-current":_e===W?"step":void 0,disabled:!_(_e),onClick:()=>at(_e)},Ue.createElement("span",{className:"stepper__bar-track"},Ue.createElement("span",{className:"stepper__bar-fill","data-filled":B?"":void 0})))})):Ue.createElement("div",{ref:oe,className:"stepper__track","data-layout":te?"rail":"row"},Ue.createElement("span",{ref:ue,className:"stepper__glider","aria-hidden":"true"}),N.map((fe,ge)=>{let _e=ge+1,B=K||_e<W?"complete":_e===W?"active":"upcoming",Fe=fe.props.title,ne=Fe&&!(st&&!te)&&Ue.createElement("span",{className:"stepper__text"},Ue.createElement("span",{ref:we=>{ie.current[ge]=we},className:"stepper__title","data-status":B},Fe),te&&fe.props.description&&Ue.createElement("span",{className:"stepper__description"},fe.props.description)),Me=we=>{xe.current[ge]=we};return u?Ue.createElement("div",{key:_e,ref:Me,className:"stepper__segment","data-status":B},u({step:_e,currentStep:W,onStepClick:we=>at(we)}),ne):Ue.createElement("button",{key:_e,ref:Me,type:"button",className:"stepper__segment","data-status":B,"aria-label":typeof Fe=="string"?`Step ${_e}: ${Fe}`:`Step ${_e}`,"aria-current":_e===W?"step":void 0,disabled:!_(_e),onClick:()=>at(_e)},Z(fe,_e,B),ne)})),ve=W===k,Ie=ve?m:d,{className:H="",onClick:j,...de}=S,{className:L="",onClick:Pe,...Le}=I;return Ue.createElement("div",{...V,ref:tt,className:`stepper stepper--${te?"vertical":"horizontal"}${x?" stepper--framed":""} ${v} ${T}`.replace(/\s+/g," ").trim(),"data-completed":K?"":void 0,style:{...q_[g]??q_.dark,"--stepper-radius":`${Math.max(0,C)}px`,"--stepper-spring":Y_,"--stepper-width":vP(b),...P,...Y}},Ue.createElement("div",{className:`stepper__header stepper__header--${De} ${A}`.trim()},se()),Ue.createElement("div",{className:"stepper__body"},Ue.createElement("div",{ref:re,className:`stepper__viewport ${w}`.trim(),"aria-live":"polite"},ye.previous!==null&&Ue.createElement("div",{key:ye.id-1,ref:qe,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},F(ye.previous)),Ue.createElement("div",{key:ye.id,ref:Oe,className:"stepper__pane",tabIndex:-1},F(ye.step))),h&&Ue.createElement("div",{className:"stepper__footer-wrap","data-hidden":K?"":void 0,"aria-hidden":K?!0:void 0},Ue.createElement("div",{className:"stepper__footer-clip"},Ue.createElement("div",{className:`stepper__footer ${D}`.trim()},Ue.createElement("button",{type:"button",...de,className:`stepper__button stepper__button--back ${H}`.trim(),"data-hidden":W<=1?"":void 0,tabIndex:K?-1:de.tabIndex,onClick:fe=>{j?.(fe),fe.defaultPrevented||at(W-1)}},Ue.createElement(Es,{icon:ar,size:16,strokeWidth:2}),Ue.createElement("span",null,f)),Ue.createElement("button",{type:"button",...Le,className:`stepper__button stepper__button--next ${L}`.trim(),tabIndex:K?-1:Le.tabIndex,onClick:fe=>{Pe?.(fe),fe.defaultPrevented||at(W+1)}},Ue.createElement("span",null,Ie),Ue.createElement(Es,{icon:ve?lu:Rr,size:16,strokeWidth:2})))))),x&&Ue.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var CP=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function $g(){let[t,e]=(0,ot.useState)(1),[a,o]=(0,ot.useState)(""),[n,r]=(0,ot.useState)("Project Inquiry"),[s,i]=(0,ot.useState)(""),[l,c]=(0,ot.useState)(!1),[u,h]=(0,ot.useState)(""),f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return ot.default.createElement("div",{className:"stepper-quick-message-container"},ot.default.createElement("div",{className:"stepper-qm-header"},ot.default.createElement("div",{className:"stepper-qm-badge"},ot.default.createElement("span",{className:"pulse-dot-cyan"}),ot.default.createElement("span",null,"Send a Quick Message")),ot.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),ot.default.createElement(jg,{step:t,onStepChange:S=>{h(""),e(S)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!f||l},onFinalStepCompleted:async()=>{if(!f){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let S=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(S&&S.success)e(4);else throw new Error(S&&S.error||"Failed to send message. Please retry.")}catch(S){h(S.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:ot.default.createElement("div",{className:"stepper-complete-card"},ot.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),ot.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),ot.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",ot.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),ot.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},ot.default.createElement(fm,{title:"Email"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"Where should I reply?"),ot.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),ot.default.createElement("div",{className:"step-input-box"},ot.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ot.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),ot.default.createElement("polyline",{points:"22,6 12,13 2,6"})),ot.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:S=>{o(S.target.value),u&&h("")},className:"step-text-input"})),!f&&a.length>0&&ot.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),f&&ot.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),ot.default.createElement(fm,{title:"Details"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"What is this regarding?"),ot.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),ot.default.createElement("div",{className:"intent-pills-grid"},CP.map(S=>ot.default.createElement("button",{key:S.id,type:"button",className:`intent-pill ${n===S.id?"active":""}`,onClick:()=>r(S.id)},ot.default.createElement("span",{className:"intent-pill-label"},S.label)))),ot.default.createElement("div",{className:"step-message-box"},ot.default.createElement("label",{className:"step-message-label"},"Your Message ",ot.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),ot.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:S=>i(S.target.value),className:"step-textarea"})))),ot.default.createElement(fm,{title:"Review"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"Ready to transmit"),ot.default.createElement("p",{className:"step-desc"},"Review your message before sending."),ot.default.createElement("div",{className:"review-summary-card"},ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Your Email:"),ot.default.createElement("span",{className:"review-value cyan"},a)),ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Topic:"),ot.default.createElement("span",{className:"review-value"},n)),s?ot.default.createElement("div",{className:"review-row column"},ot.default.createElement("span",{className:"review-label"},"Message:"),ot.default.createElement("p",{className:"review-quote"},'"',s,'"')):ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Message:"),ot.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),u&&ot.default.createElement("div",{className:"step-error-banner"},ot.default.createElement("span",null,"\u26A0 ",u))))))}mt();var or=hn(Ro());var _P={dark:{"--pc-frame":"rgba(38, 35, 46, 0.66)","--pc-frame-edge":"rgba(255, 255, 255, 0.08)","--pc-frame-highlight":"rgba(255, 255, 255, 0.07)","--pc-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--pc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--pc-tile-edge":"rgba(255, 255, 255, 0.07)","--pc-tile-highlight":"rgba(255, 255, 255, 0.12)","--pc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--pc-ink":"#f4f4f5","--pc-muted":"rgba(244, 244, 245, 0.6)","--pc-hover":"brightness(1.12)","--pc-press":"brightness(0.8)","--pc-shade":"rgba(0, 0, 0, 0.4)"},light:{"--pc-frame":"rgba(240, 240, 243, 0.8)","--pc-frame-edge":"rgba(24, 24, 27, 0.07)","--pc-frame-highlight":"rgba(255, 255, 255, 0.95)","--pc-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--pc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--pc-tile-edge":"rgba(24, 24, 27, 0.08)","--pc-tile-highlight":"rgba(255, 255, 255, 1)","--pc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--pc-ink":"#27272a","--pc-muted":"rgba(39, 39, 42, 0.6)","--pc-hover":"brightness(0.97)","--pc-press":"brightness(0.92)","--pc-shade":"rgba(24, 24, 27, 0.14)"}},bP={dark:{"--pc-blend":"color-dodge","--pc-holo-filter":"hue-rotate(0deg)","--pc-sheen":"rgba(255, 255, 255, 0.16)"},light:{"--pc-blend":"multiply","--pc-holo-filter":"invert(1) hue-rotate(180deg)","--pc-sheen":"rgba(255, 255, 255, 0)"}},TP=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`,um=(t,e,a)=>Math.min(a,Math.max(e,t)),AP=t=>{let e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(t).trim());if(!e)return null;let a=e[1].length===3?e[1].replace(/./g,s=>s+s):e[1],[o,n,r]=[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255);return .2126*o+.7152*n+.0722*r<.5},wP=({avatarUrl:t="",iconUrl:e="assets/csharp-pattern.svg",miniAvatarUrl:a,name:o="Javi A. Torres",title:n="Software Engineer",handle:r="javicodes",status:s="Online",statusColor:i="#22c55e",contactText:l="Contact",showUserInfo:c=!0,onContactClick:u,theme:h="dark",backdropColor:f,radius:d=16,holo:m=.8,glare:S=.5,enableTilt:I=!0,tiltStrength:p=12,parallax:g=8,enableMobileTilt:y=!1,mobileTiltSensitivity:x=5,intro:C=!0,className:b=""})=>{let T=(0,or.useRef)(null),v=(0,or.useRef)(null),A={enableTilt:I,tiltStrength:p,parallax:g,mobileTiltSensitivity:x,intro:C},w=(0,or.useRef)(A);w.current=A,(0,or.useEffect)(()=>{let k=T.current;if(!k)return;let ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,J={width:k.offsetWidth,height:k.offsetHeight},le={p:0,v:0,target:0},W={p:0,v:0,target:0},K={p:0,target:0},$=0,De=0,be=0,et=null,q=()=>{let{enableTilt:ie,tiltStrength:re,parallax:Oe}=w.current,qe=ie&&!ae?re:0,He=Math.min(1,Math.hypot(le.p,W.p)),Be=k.style;Be.setProperty("--pc-light-x",`${((le.p+1)*.5*J.width).toFixed(1)}px`),Be.setProperty("--pc-light-y",`${((W.p+1)*.5*J.height).toFixed(1)}px`),Be.setProperty("--pc-pointer-x",`${((le.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-pointer-y",`${((W.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-band-x",`${(50+le.p*15).toFixed(2)}%`),Be.setProperty("--pc-band-y",`${(50+W.p*15).toFixed(2)}%`),Be.setProperty("--pc-rotate-x",`${(W.p*qe).toFixed(3)}deg`),Be.setProperty("--pc-rotate-y",`${(-le.p*qe).toFixed(3)}deg`),Be.setProperty("--pc-shift-x",`${(le.p*(ae?0:Oe)).toFixed(2)}px`),Be.setProperty("--pc-shift-y",`${(W.p*(ae?0:Oe)).toFixed(2)}px`),Be.setProperty("--pc-reach",He.toFixed(4)),Be.setProperty("--pc-tilt",(He*K.p).toFixed(4)),Be.setProperty("--pc-active",K.p.toFixed(4))},st=ie=>{let re=Math.min(.05,(ie-De)/1e3||0);De=ie;let Oe=ie<be,qe=Oe?24:120,He=Oe?9:16,Be=Math.max(1,Math.ceil(re/(1/120))),E=re/Be;for(let _=0;_<Be;_++)for(let F of[le,W])F.v+=(qe*(F.target-F.p)-He*F.v)*E,F.p+=F.v*E;let it=K.target>K.p?.18:Oe?.9:.45;K.p+=(K.target-K.p)*(1-Math.exp(-re/it)),q(),Math.abs(le.target-le.p)>5e-4||Math.abs(W.target-W.p)>5e-4||Math.abs(le.v)>5e-4||Math.abs(W.v)>5e-4||Math.abs(K.target-K.p)>.002?$=requestAnimationFrame(st):(le.p=le.target,W.p=W.target,K.p=K.target,q(),$=0)},ee=()=>{$||(De=performance.now(),$=requestAnimationFrame(st))},te=(ie,re,Oe=!0)=>{le.target=um(ie,-1,1),W.target=um(re,-1,1),K.target=Oe?1:0,be=0,ee()},Ce=ie=>{let re=k.getBoundingClientRect();!re.width||!re.height||te((ie.clientX-re.left)/re.width*2-1,(ie.clientY-re.top)/re.height*2-1)},Ye=()=>te(0,0,!1),ye=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ce(ie)},Ge=ie=>{(ie.pointerType==="mouse"||!ie.pointerType||ie.pointerId===et)&&Ce(ie)},tt=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ye()},oe=ie=>{ie.pointerType!=="mouse"&&(et=ie.pointerId,Ce(ie))},ue=ie=>{ie.pointerId===et&&(et=null,Ye())};k.addEventListener("pointerenter",ye),k.addEventListener("pointermove",Ge),k.addEventListener("pointerleave",tt),k.addEventListener("pointerdown",oe),k.addEventListener("pointerup",ue),k.addEventListener("pointercancel",ue),k.addEventListener("mousemove",Ge),k.addEventListener("mouseleave",Ye);let xe=new ResizeObserver(()=>{J.width=k.offsetWidth,J.height=k.offsetHeight,q()});return xe.observe(k),v.current={aim:te,release:Ye,write:q},w.current.intro&&!ae?(le.p=.62,W.p=-.55,K.p=1,be=performance.now()+1400,q(),ee()):q(),()=>{cancelAnimationFrame($),xe.disconnect(),k.removeEventListener("pointerenter",ye),k.removeEventListener("pointermove",Ge),k.removeEventListener("pointerleave",tt),k.removeEventListener("pointerdown",oe),k.removeEventListener("pointerup",ue),k.removeEventListener("pointercancel",ue),k.removeEventListener("mousemove",Ge),k.removeEventListener("mouseleave",Ye),v.current=null}},[]),(0,or.useEffect)(()=>{v.current?.write()},[I,p,g]),(0,or.useEffect)(()=>{let k=T.current;if(!k||!y)return;let ae=!1,J=K=>{if(K.beta==null||K.gamma==null)return;let $=w.current.mobileTiltSensitivity;v.current?.aim(K.gamma*$/150,(K.beta-20)*$/150)},le=()=>{ae||(ae=!0,window.addEventListener("deviceorientation",J))},W=()=>{let K=window.DeviceOrientationEvent;K&&typeof K.requestPermission=="function"?K.requestPermission().then($=>{$==="granted"&&le()}).catch(()=>{}):le()};return k.addEventListener("click",W),()=>{k.removeEventListener("click",W),window.removeEventListener("deviceorientation",J)}},[y]);let D=h==="light"?"light":"dark",Y=f?AP(f)??D==="dark"?"dark":"light":D,V=f?`linear-gradient(180deg, color-mix(in srgb, ${f}, #ffffff 12%) 0%, color-mix(in srgb, ${f}, #000000 18%) 100%)`:"var(--pc-tile)",N=e?e.startsWith("/")||e.startsWith("http")||e.startsWith("data:")?e:`/${e}`:"/assets/csharp-pattern.svg";return Ue.createElement("div",{ref:T,className:`profile-card ${b}`.trim(),style:{..._P[D],...bP[Y],"--pc-radius":`${Math.max(0,d)}px`,"--pc-backdrop":V,"--pc-holo":um(m,0,1),"--pc-glare":um(S,0,1),"--pc-parallax":`${Math.max(0,g)}px`,"--pc-status":i,"--pc-grain":TP,"--pc-pattern":`url("${N}")`,"--pc-pattern-size":"200px 200px","--pc-holo-gain":1.25,"--pc-holo-detail":Y==="dark"?1:0}},Ue.createElement("div",{className:"profile-card__body"},Ue.createElement("div",{className:"profile-card__tile"},Ue.createElement("span",{className:"profile-card__sheen"}),Ue.createElement("span",{className:"profile-card__holo"},Ue.createElement("span",{className:"profile-card__holo-glow"}),Ue.createElement("span",{className:"profile-card__holo-shift"})),t&&Ue.createElement("img",{className:"profile-card__photo",src:t,alt:o||"",loading:"lazy",draggable:!1}),(o||n)&&Ue.createElement(Ue.Fragment,null,Ue.createElement("span",{className:"profile-card__scrim"}),Ue.createElement("div",{className:"profile-card__info"},o&&Ue.createElement("h3",{className:"profile-card__name"},o),n&&Ue.createElement("p",{className:"profile-card__title"},n))),Ue.createElement("span",{className:"profile-card__tile-rim"})),c&&Ue.createElement("div",{className:"profile-card__footer"},a&&Ue.createElement("span",{className:"profile-card__avatar"},Ue.createElement("img",{src:a,alt:"",loading:"lazy",draggable:!1})),Ue.createElement("div",{className:"profile-card__meta"},r&&Ue.createElement("span",{className:"profile-card__handle"},"@",r),s&&Ue.createElement("span",{className:"profile-card__status"},s)),l&&Ue.createElement("button",{type:"button",className:"profile-card__contact",onClick:u,"aria-label":o?`${l} ${o}`:l},Ue.createElement(Es,{icon:Lr,size:16,strokeWidth:1.8}),l)),Ue.createElement("span",{className:"profile-card__glare"}),Ue.createElement("span",{className:"profile-card__shade"}),Ue.createElement("span",{className:"profile-card__rim"})))},K_=(0,or.memo)(wP);mt();var ft=hn(Ro());mt();var $e=hn(Ro());var fc=Math.PI*2,EP=1/240,RP=6,LP=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],DP=[.5,-1.1,1.5,-.7,1.2,-1.6],PP=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],BP=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],eF=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],ob=[4,-5,3,-6,5,-3],nb=[.03,-.04,.05,-.02,.04,-.05],UP=[-6,4,-3,7,-5,3],kP={open:-180,receive:-24,peek:-13,rest:0},NP={open:-64,receive:-30,peek:-15,rest:0},tF={out:50,drag:80,focus:90},OP=typeof window>"u"?$e.useEffect:$e.useLayoutEffect,ea=(t,e,a)=>Math.min(a,Math.max(e,t)),J_=(()=>{let t=null,e=new Map;return a=>{let o=String(a);if(e.has(o))return e.get(o);let n=[61,139,255];return typeof document<"u"&&(t??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=o,t.fillRect(0,0,1,1),n=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(o,n),n}})(),Rs=(t,e,a)=>t.map((o,n)=>Math.round(o+(e[n]-o)*a)),Dr=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,zP=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,rF=(t,e)=>{let a=new Array(16);for(let o=0;o<4;o++)for(let n=0;n<4;n++)a[o*4+n]=t[n]*e[o*4]+t[4+n]*e[o*4+1]+t[8+n]*e[o*4+2]+t[12+n]*e[o*4+3];return a},uc=(...t)=>t.reduce(rF),En=(t,e,a=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,a,1],dm=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],Q_=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[1,0,0,0,0,a,o,0,0,-o,a,0,0,0,0,1]},aF=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,0,-o,0,0,1,0,0,o,0,a,0,0,0,0,1]},HP=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,o,0,0,-o,a,0,0,0,0,1,0,0,0,0,1]},dc=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,VP=(t,e,a,o,n)=>{let r=(t?180:224)*e,s=(t?232:176)*e,i=20*e,l=12*e,c=i*.75,u=t?i:i+s*.3,h=t?[0,l,l,0]:[l,l,l,l],f=r-h[0]-h[1]-c*2-10*e,d=ea(o?a+14*e+c:r*.34,Math.min(r*.3,f),f),m=n==="left"?h[0]+5*e+c:n==="center"?(r-d)/2:r-h[1]-5*e-c-d,S=t?r*.8:r*.62;return{book:t,scale:e,w:r,h:s,tabH:i,r:l,shoulder:c,corners:h,tabW:d,tabX:m,frontTop:u,frontH:i+s-u,docW:S,docH:S*(t?1.28:1.36)}},rb=t=>{let{w:e,h:a,tabX:o,tabW:n,tabH:r,shoulder:s}=t,[i,l,c,u]=t.corners,h=r,f=r+a;return[`M 0 ${h+i}`,`Q 0 ${h} ${i} ${h}`,`L ${o-s} ${h}`,`C ${o} ${h} ${o} 0 ${o+s} 0`,`L ${o+n-s} 0`,`C ${o+n} 0 ${o+n} ${h} ${o+n+s} ${h}`,`L ${e-l} ${h}`,`Q ${e} ${h} ${e} ${h+l}`,`L ${e} ${f-c}`,`Q ${e} ${f} ${e-c} ${f}`,`L ${u} ${f}`,`Q 0 ${f} 0 ${f-u}`,"Z"].join(" ")},j_=`#version 300 es
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
}`,GP=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,qP=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,WP=`#version 300 es
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
}`,XP=`#version 300 es
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
}`,$_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},oF=(t,e,a,o)=>{let n=$_(t,t.VERTEX_SHADER,e),r=$_(t,t.FRAGMENT_SHADER,a),s=t.createProgram();if(!n||!r||!s)return null;if(t.attachShader(s,n),t.attachShader(s,r),t.linkProgram(s),t.deleteShader(n),t.deleteShader(r),!t.getProgramParameter(s,t.LINK_STATUS))return t.deleteProgram(s),null;let i={};return o.forEach(l=>{i[l]=t.getUniformLocation(s,l)}),{program:s,uniforms:i}},eb=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],YP=t=>{let e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;let a=oF(e,j_,GP,[...eb,"uImage","uAlpha"]),o=oF(e,qP,WP,["uImage","uStep","uSigma"]),n=oF(e,j_,XP,[...eb,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!a||!o||!n)return null;let r=e.createVertexArray(),s=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),l=[i(),i(),i()],c={width:0,height:0},u=new Map,h=(m,S)=>{e.uniform1f(m.uniforms.uDepth,S.depth),e.uniform2f(m.uniforms.uOrigin,S.origin[0],S.origin[1]),e.uniform4f(m.uniforms.uView,S.view.x,S.view.y,S.view.width,S.view.height)},f=(m,S)=>{t.width!==m&&(t.width=m),t.height!==S&&(t.height=S),!(c.width===m&&c.height===S)&&(c.width=m,c.height=S,l.forEach(I=>{e.bindTexture(e.TEXTURE_2D,I.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,S,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,I.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,I.texture,0)}))},d=(m,S,I,p,g)=>{e.bindFramebuffer(e.FRAMEBUFFER,S.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,m.texture),e.uniform2f(o.uniforms.uStep,I,p),e.uniform1f(o.uniforms.uSigma,g),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(m,S){let I=u.get(m);I||(I=e.createTexture(),u.set(m,I)),e.bindTexture(e.TEXTURE_2D,I),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(m){u.forEach((S,I)=>{m.has(I)||(e.deleteTexture(S),u.delete(I))})},render(m){if(e.isContextLost())return;let S=Math.max(1,Math.round(m.view.width*m.dpr)),I=Math.max(1,Math.round(m.view.height*m.dpr));f(S,I);let[p,g,y]=l;e.bindVertexArray(r),e.activeTexture(e.TEXTURE0),e.viewport(0,0,S,I),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,p.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(a.program),h(a,m),e.uniform1i(a.uniforms.uImage,0),e.uniform1f(a.uniforms.uBleed,0),m.layers.forEach(v=>{let A=u.get(v.key);A&&(e.bindTexture(e.TEXTURE_2D,A),e.uniformMatrix4fv(a.uniforms.uModel,!1,v.matrix),e.uniform2f(a.uniforms.uSize,v.width,v.height),e.uniform1f(a.uniforms.uAlpha,v.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});let x=m.glass,C=x.frost*m.dpr,b=p;C>.35&&(e.disable(e.BLEND),e.useProgram(o.program),e.uniform1i(o.uniforms.uImage,0),d(p,g,1/S,0,C),d(g,y,0,1/I,C),e.enable(e.BLEND),b=y),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);let T=n.uniforms;e.useProgram(n.program),h(n,m),e.bindTexture(e.TEXTURE_2D,b.texture),e.uniform1i(T.uBehind,0),e.uniformMatrix4fv(T.uModel,!1,x.matrix),e.uniform2f(T.uSize,x.width,x.height),e.uniform1f(T.uBleed,x.bleed),e.uniform4fv(T.uRadii,x.radii),e.uniform1f(T.uSpine,x.spine),e.uniform1f(T.uLens,x.lens),e.uniform1f(T.uMorph,x.morph),e.uniform3fv(T.uInsideTop,x.insideTop),e.uniform3fv(T.uInsideBottom,x.insideBottom),e.uniform1f(T.uTabRatio,x.tabRatio),e.uniform2fv(T.uGutter,x.gutter),e.uniform1f(T.uBevel,x.bevel),e.uniform1f(T.uStrength,x.strength),e.uniform1f(T.uSplit,x.split),e.uniform4fv(T.uTint,x.tint),e.uniform1f(T.uHaze,x.haze),e.uniform1f(T.uDim,x.dim),e.uniform1f(T.uGlint,x.glint),e.uniform1f(T.uShine,x.shine),e.uniform2fv(T.uLight,x.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){u.forEach(m=>e.deleteTexture(m)),u.clear(),l.forEach(m=>{e.deleteTexture(m.texture),e.deleteFramebuffer(m.frame)}),e.deleteBuffer(s),e.deleteVertexArray(r),e.deleteProgram(a.program),e.deleteProgram(o.program),e.deleteProgram(n.program)}}},tb=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2));t.beginPath(),t.moveTo(e+s,a),t.arcTo(e+o,a,e+o,a+n,s),t.arcTo(e+o,a+n,e,a+n,s),t.arcTo(e,a+n,e,a,s),t.arcTo(e,a+o,e,a,s),t.closePath()},ZP=(t,e)=>{let a=0,o=0,n=t;for(;n&&n!==e;)a+=n.offsetLeft,o+=n.offsetTop,n=n.offsetParent;return n===e?[a,o]:null},KP=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),JP=(t,e,a,o,n,r)=>{let s=Array.from(e.childNodes).filter(S=>S.nodeType===3).map(S=>S.textContent).join("").trim();if(!s)return;let i=parseFloat(r.fontSize)||12,l=parseFloat(r.lineHeight)||i*1.2,c=a+(parseFloat(r.paddingLeft)||0),u=o+(parseFloat(r.paddingTop)||0),h=n-(parseFloat(r.paddingLeft)||0)-(parseFloat(r.paddingRight)||0);t.font=`${r.fontStyle} ${r.fontWeight} ${r.fontSize} ${r.fontFamily}`,t.fillStyle=r.color,t.textBaseline="middle";let f=S=>{if(t.measureText(S).width<=h)return S;let I=S;for(;I.length>1&&t.measureText(`${I}\u2026`).width>h;)I=I.slice(0,-1);return`${I.trimEnd()}\u2026`};if(r.whiteSpace==="nowrap"){t.fillText(f(s),c,u+l/2);return}let d="",m=0;s.split(/\s+/).forEach(S=>{let I=d?`${d} ${S}`:S;d&&t.measureText(I).width>h?(t.fillText(d,c,u+l*(m+.5)),m+=1,d=S):d=I}),d&&t.fillText(d,c,u+l*(m+.5))},ab=(t,e,a)=>{let o=Math.max(1,t.offsetWidth),n=Math.max(1,t.offsetHeight),r=document.createElement("canvas");r.width=Math.max(1,Math.round(o*e)),r.height=Math.max(1,Math.round(n*e));let s=[],i=r.getContext("2d");if(!i)return{canvas:r,pending:s};i.scale(e,e);let l=(c,u,h)=>{let f=getComputedStyle(c);if(f.display==="none"||f.visibility==="hidden")return;let d=c.offsetWidth,m=c.offsetHeight,S=parseFloat(f.borderTopLeftRadius)||0,I=c!==t&&Number.isFinite(parseFloat(f.opacity))?parseFloat(f.opacity):1;if(i.save(),i.globalAlpha*=I,KP(f.backgroundColor)||(i.fillStyle=f.backgroundColor,tb(i,u,h,d,m,S),i.fill()),f.overflow!=="visible"&&(tb(i,u,h,d,m,S),i.clip()),c instanceof HTMLImageElement){if(!c.complete||!c.naturalWidth)s.push(c);else if(!a){let p=Math.max(d/c.naturalWidth,m/c.naturalHeight),g=d/p,y=m/p;i.drawImage(c,(c.naturalWidth-g)/2,(c.naturalHeight-y)/2,g,y,u,h,d,m)}}else JP(i,c,u,h,d,f),Array.from(c.children).forEach(p=>{let g=ZP(p,t);g&&l(p,g[0],g[1])});i.restore()};return l(t,0,0),{canvas:r,pending:s}},QP=(t,e,a,o)=>{let n=document.createElement("canvas");n.width=Math.max(1,Math.round(t.w*o)),n.height=Math.max(1,Math.round((t.tabH+t.h)*o));let r=n.getContext("2d");if(!r)return n;r.scale(o,o);let s=r.createLinearGradient(0,0,0,t.tabH+t.h);return s.addColorStop(0,e),s.addColorStop(1,a),r.fillStyle=s,r.fill(new Path2D(rb(t))),n},nF=({title:t,description:e})=>$e.default.createElement("div",{className:"folder-doc"},t?$e.default.createElement("span",{className:"folder-doc-title"},t):$e.default.createElement("span",{className:"folder-doc-heading"}),e&&$e.default.createElement("span",{className:"folder-doc-text"},e),$e.default.createElement("span",{className:"folder-doc-line",style:{width:"92%"}}),$e.default.createElement("span",{className:"folder-doc-line",style:{width:"84%"}}),$e.default.createElement("span",{className:"folder-doc-line",style:{width:"88%"}}),$e.default.createElement("span",{className:"folder-doc-block"}),$e.default.createElement("span",{className:"folder-doc-line",style:{width:"80%"}}),$e.default.createElement("span",{className:"folder-doc-line",style:{width:"62%"}})),jP=t=>(0,$e.isValidElement)(t)?t:typeof t=="string"||typeof t=="number"?$e.default.createElement(nF,{title:String(t)}):t&&typeof t=="object"?t.image?$e.default.createElement("div",{className:"folder-photo"},$e.default.createElement("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})):t.content?t.content:$e.default.createElement(nF,{title:t.title,description:t.description}):$e.default.createElement(nF,null),$P=(t,e,a,o,n)=>{let r=n.w/2,s=n.frontTop+n.frontH/2;if(a==="open"){if(o==="row"){let f=10*n.scale,d=Math.min(.8,(n.w*1.86-f*(e-1))/(e*n.docW)),m=n.docW*d+f;return{x:n.w/2+(t-(e-1)/2)*m,y:s,z:0,r:0,ry:0,s:d}}if(o==="stack"){let d=Math.min(26*n.scale,n.h*.36/Math.max(1,e-1)),m=n.frontTop+14*n.scale+(e-1)*d;return{x:n.w,y:m+n.docH*.74/2-t*d,z:0,r:0,ry:0,s:.74}}let c=e>4?.58:e>3?.64:.72,u=e===2?n.w:Math.min(n.w*1.3,n.w*.6*(e-1)),h=e>1?u/2-t*u/(e-1):n.w*.5;return{x:n.w/2+h,y:s+nb[t]*n.h,z:0,r:ob[t],ry:0,s:c}}let l=(a==="rest"?PP:BP)[t]??{x:.06,y:0,r:DP[t]??0};return{x:r+l.x*n.w,y:s+l.y*n.h+t*.8*n.scale,z:0,r:l.r,ry:0,s:1}},eB=(t,e,a,o,n,r)=>{let s=eF[t]??eF[eF.length-1],i=n.tabH+n.h-5*n.scale-n.docH/2,l=(e-1)/2;if(a==="open"){let d=n.tabH+n.h*.12;if(o==="stack"){let g=Math.min(30*n.scale,n.h*.62/Math.max(1,e-1)),y=1.04-t*.05;return{x:n.w/2,y:n.tabH+n.h*.1-t*g-n.docH*(1.04-y)/2,z:-t*18*n.scale,r:0,ry:0,s:y}}let m=12*n.scale,S=Math.min(.95,(n.w*2.35-m*(e-1))/(e*n.docW)),I=n.docW*S+m,p=o==="row";return{x:n.w/2+(t-l)*I,y:d+(p?0:nb[t]*n.h*.55),z:0,r:p?0:ob[t]*.5,ry:0,s:S}}let c=a==="receive"?1.7:a==="peek"?1.3:1,u=n.w/2+s.x*n.w*c;if(a==="rest")return{x:u,y:i-s.rise*n.h,z:0,r:s.r,ry:0,s:1};let h=a==="peek"&&r!=null?Math.max(0,1-Math.abs(r-u)/(n.w*.32)):0,f=s.rise+(a==="receive"?.03:.1);return{x:u,y:i-f*n.h-h*h*n.h*.09,z:0,r:s.r*1.6,ry:0,s:1}},tB=({items:t,label:e,mode:a="flap",variant:o="solid",color:n="#3d8bff",paperColor:r="#ffffff",tabPosition:s="right",layout:i="spread",size:l=1,openOn:c="click",open:u,defaultOpen:h=!1,onOpenChange:f,onItemClick:d,onItemDrop:m,draggable:S=!0,zoomOnClick:I=!0,peek:p=!0,intro:g=!0,tilt:y=.5,bounce:x=.4,speed:C=1,frost:b=.25,closeOnOutsideClick:T=!0,theme:v="dark",className:A="",style:w,children:D})=>{let Y=(0,$e.useRef)(null),V=(0,$e.useRef)(null),N=(0,$e.useRef)(null),k=(0,$e.useRef)(null),ae=(0,$e.useRef)(null),J=(0,$e.useRef)(null),le=(0,$e.useRef)(null),W=(0,$e.useRef)([]),K=(0,$e.useRef)(null),$=(0,$e.useRef)(null),De=(0,$e.useRef)(null),[be,et]=(0,$e.useState)(h),[q,st]=(0,$e.useState)(0),[ee,te]=(0,$e.useState)([]),[Ce,Ye]=(0,$e.useState)(!1),ye=u!==void 0,Ge=ye?!!u:be,tt=a==="book",oe=o==="glass",ue=(0,$e.useMemo)(()=>{let H=$e.Children.toArray(D).filter($e.isValidElement);return(H.length?H:t?.length?t:LP).slice(0,RP)},[D,t]),xe=ue.length,ie=Math.max(.3,Number(l)||1),re=VP(tt,ie,q,!!e,s),Oe=re.tabH+re.h,qe=tt?{x:-.75*re.w,y:-.25*Oe,width:2.5*re.w,height:1.5*Oe}:{x:-.25*re.w,y:-.1*Oe,width:1.5*re.w,height:1.3*Oe};OP(()=>{let H=K.current;if(!H)return;let j=!0,de=()=>{j&&st(H.offsetWidth)};return de(),document.fonts?.ready.then(de),()=>{j=!1}},[e,ie]);let He=(0,$e.useCallback)(H=>{let j=typeof H=="function"?H(Ge):H;ye||et(j),j!==Ge&&f?.(j)},[ye,Ge,f]),Be=(0,$e.useRef)(He);Be.current=He;let E=J_(n),it=J_(r),at=Rs(E,[0,0,0],.16),_=Dr(Rs(E,[0,0,0],.08)),F=Dr(at),P=(0,$e.useRef)(null);P.current={open:Ge,layout:i,openOn:c,peek:p,intro:g,draggable:S,zoomOnClick:I,closeOnOutsideClick:T,onItemClick:d,onItemDrop:m,tilt:ea(y,0,1.5),bounce:ea(x,0,1),speed:ea(C,.2,3),frost:ea(b,0,1),count:xe,entries:ue,glass:oe,light:v==="light",tint:E,insideTop:_,insideBottom:F,insideTone:[Rs(E,[0,0,0],.08).map(H=>H/255),at.map(H=>H/255)],content:`${a}|${ie}|${r}|${n}|${re.tabX}|${re.tabW}`,depth:Math.round(Math.max(re.w,re.h)*5),view:qe,g:re},(0,$e.useEffect)(()=>{let H=Y.current;if(!H)return;let j=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,de=U=>({value:U,velocity:0}),L={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:de(0),rx:de(0),ry:de(0),lift:de(0),squash:de(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:de(0),appear:1,content:{key:"",entries:null,renderer:null}},Pe=U=>{for(;L.items.length<U;)L.items.push({x:de(0),y:de(0),z:de(0),r:de(0),ry:de(0),s:de(1),hover:de(0),mx:de(0),my:de(0),alpha:de(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});L.items.length>U&&(L.items.length=U,L.focus>=U&&(L.focus=-1),Le())},Le=()=>{let U=[];L.items.forEach((Q,pe)=>{Q.place==="out"&&U.push(pe)}),te(Q=>Q.length===U.length&&Q.every((pe,Ee)=>pe===U[Ee])?Q:U)},fe=(U,Q,pe,Ee,pt)=>{let zt=pe*pe,Qt=2*Ee*pe,ce=Math.max(1,Math.ceil(pt/EP)),Ze=pt/ce;for(let M=0;M<ce;M++)U.velocity+=(zt*(Q-U.value)-Qt*U.velocity)*Ze,U.value+=U.velocity*Ze;return Math.abs(Q-U.value)>.01||Math.abs(U.velocity)>.01},ge=(U,Q)=>{U.value=Q,U.velocity=0},_e=()=>{let{g:U}=P.current;return U.book?U.w/2*ea(-L.front.value/180,0,1):0},B=(U,Q)=>{let pe=H.getBoundingClientRect(),Ee=H.offsetWidth/(pe.width||1),pt=H.offsetHeight/(pe.height||1);return[(U-pe.left)*Ee,(Q-pe.top)*pt]},Fe=()=>{let U=H.getBoundingClientRect(),Q=0,pe=0,Ee=window.innerWidth,pt=window.innerHeight;for(let ce=H.parentElement;ce&&ce!==document.body;ce=ce.parentElement){let Ze=getComputedStyle(ce);if(/(hidden|clip|auto|scroll)/.test(`${Ze.overflowX} ${Ze.overflowY}`)){let M=ce.getBoundingClientRect();Q=Math.max(Q,M.left),pe=Math.max(pe,M.top),Ee=Math.min(Ee,M.right),pt=Math.min(pt,M.bottom);break}}let zt=H.offsetWidth/(U.width||1),Qt=H.offsetHeight/(U.height||1);return{left:(Q-U.left)*zt,top:(pe-U.top)*Qt,right:(Ee-U.left)*zt,bottom:(pt-U.top)*Qt}},ne=(U,Q)=>{let{g:pe}=P.current,Ee=_e();if(pe.book){let pt=L.front.value<-90?Ee-pe.w:Ee;return U>=pt&&U<=Ee+pe.w&&Q>=pe.tabH*.5&&Q<=pe.tabH+pe.h}return U>=0&&U<=pe.w&&Q>=0&&Q<=pe.tabH+pe.h},Me=U=>{let{g:Q}=P.current,pe=Q.docW*U.s.value/2,Ee=Q.docH*U.s.value/2;if(Q.book){if(L.front.value<-60)return!1;let pt=_e();return U.x.value-pe<pt+Q.w&&U.x.value+pe>pt&&U.y.value+Ee>Q.tabH&&U.y.value-Ee<Q.tabH+Q.h}return L.front.value<-45?!1:U.y.value+Ee>Q.frontTop+4*Q.scale&&U.x.value+pe>0&&U.x.value-pe<Q.w},we=U=>{if(U.length<2)return[0,0];let Q=U[0],pe=U[U.length-1],Ee=Math.max(.016,(pe[0]-Q[0])/1e3);return[(pe[1]-Q[1])/Ee,(pe[2]-Q[2])/Ee]},me=(U,Q)=>U.open?"open":L.receiving||Q<L.receiveUntil?"receive":U.peek&&L.hovered&&!L.drag?.active?"peek":"rest",ke=(U,Q,pe,Ee)=>{if(Ee.g.book)return $P(U,Q,pe,Ee.layout,Ee.g);let pt=L.hovered?(L.pointerX+1)/2*Ee.g.w:null;return eB(U,Q,pe,Ee.layout,Ee.g,pt)},We=(U,Q,pe)=>{let{g:Ee}=pe;return U.insertFrom==="side"?{...Q,x:Math.max(Q.x,Ee.w+Ee.docW*.54*Q.s)}:{...Q,y:Math.min(Q.y,Ee.frontTop-Ee.docH*.5*Q.s-8*Ee.scale)}},vt=U=>{L.raf=0;let Q=P.current,{g:pe}=Q;Pe(Q.count);let Ee=U/1e3,pt=L.last?Math.min(.05,(U-L.last)/1e3):1/60;L.last=U;let zt=j?1:1-.72*Q.bounce,Qt=fc*(pe.book?1.55:2)*Q.speed,ce=fc*2.1*Q.speed,Ze=fc*1.6*Q.speed,M=me(Q,Ee);M!==L.phase&&(L.previous=L.phase,L.phase=M,L.changedAt=U);let R=(U-L.changedAt)/1e3,O=Ee<L.receiveUntil,X=[];L.items.forEach((Te,yt)=>{Te.place==="inside"&&X.push(yt)});let G=X.length;X.forEach((Te,yt)=>{L.items[Te].rank=yt}),L.focus>=0&&M!=="open"&&L.items[L.focus]?.place==="inside"&&(L.focus=-1);let Se=L.intro;L.ready||(Se.opening=Q.open),Se.phase==="run"&&!Se.opening&&(Q.open||L.drag?.active)&&(Se.phase="done");let Ae=Se.phase==="run"?Ee-Se.start:0,Re=Se.phase!=="done"&&!Se.opening,Xe=(.16+G*.085+.3)/Q.speed,Je=Re&&Ae<Xe,ut=Te=>(.16+(G-1-Te)*.085)/Q.speed,ht=(Te,yt)=>pe.book?{...yt,r:yt.r+(Te.rank%2?7:-6),s:yt.s*1.12}:{...yt,y:yt.y-(pe.h*.8+pe.docH*.5),r:yt.r+(Te.rank%2?9:-7)};Se.phase==="run"&&(O=!0,Ae>(Se.opening?1.4:Xe+1)/Q.speed&&(Se.phase="done"));let je=Se.phase==="wait"?0:Se.phase==="run"?ea(Ae/(.34/Q.speed),0,1):1;L.appear=1-(1-je)**3;let Ot=L.previous==="open"&&M!=="open"&&!j?((pe.book?.1:.06)+.035*G)/Q.speed:0,ct=R<Ot?L.previous:M,At=Je?pe.book?-150:-42:(pe.book?kP:NP)[ct];if(!L.ready){L.ready=!0;let Te=Se.phase!=="done"&&Se.opening;Te&&(L.phase="rest",L.previous="rest"),ge(L.front,Te?0:At),ge(L.anchor,Re?1:0),L.items.forEach(yt=>{let lt=ke(yt.rank,G,Te?"rest":M,Q),ha=Re?ht(yt,lt):lt;ge(yt.x,ha.x),ge(yt.y,ha.y),ge(yt.z,ha.z),ge(yt.r,ha.r),ge(yt.ry,ha.ry),ge(yt.s,ha.s),ge(yt.alpha,Re?0:1),ge(yt.hover,Re&&pe.book?3:0),yt.fresh=!1})}if(Se.phase==="wait"){va(),L.last=0;return}O=fe(L.front,At,Qt,zt,pt)||O;let Xt=.2+.35*Q.bounce;pe.book&&L.front.value<-180?(L.front.value=-360-L.front.value,L.front.velocity=-L.front.velocity*Xt):L.front.value>0&&(L.front.value=-L.front.value,L.front.velocity=-L.front.velocity*Xt),R<Ot&&(O=!0),O=fe(L.anchor,Re?1:0,Qt,1,pt)||O;let Ve=L.hovered&&!j;O=fe(L.rx,Ve?-L.pointerY*8*Q.tilt:0,Ze,1,pt)||O,O=fe(L.ry,Ve?L.pointerX*10*Q.tilt:0,Ze,1,pt)||O,O=fe(L.lift,L.hovered&&M!=="open"?1:0,Ze,1,pt)||O,O=fe(L.squash,L.pressed?.975:1,fc*3.2,.6,pt)||O;let xa=M==="open"&&L.previous!=="open",dt=L.drag?.active?L.drag:null,na=L.hoveredItem,ga=!dt&&na>=0&&L.items[na]?L.items[na]:null,Ra=ga&&ga.place==="inside"&&M==="open"?ke(ga.rank,G,"open",Q):null,So=ea((pe.tabH+pe.h)*1.35/pe.docH,1.35,2.3),Qe=pe.book?pe.tabH+pe.h/2:pe.tabH+pe.h*.38;L.items.forEach((Te,yt)=>{if(Te.fresh){let pn=ke(Te.rank,G,"rest",Q);ge(Te.x,pn.x),ge(Te.y,pn.y),ge(Te.r,pn.r),Te.fresh=!1}let lt,ha=ce,Na=zt,Jo=0,lF=1,fu=!1;if(L.focus===yt)lt={x:pe.w/2,y:Qe,z:0,r:0,ry:0,s:So},Jo=2.4,Te.layer="focus";else if(dt&&dt.index===yt){let[pn]=we(dt.samples);lt={x:L.deskX+dt.grabX,y:L.deskY+dt.grabY,z:0,r:ea(pn*.012,-14,14),ry:0,s:dt.scale*1.05},ha=fc*5,Na=.78,Jo=1.4,!Te.elevated&&!Me(Te)&&(Te.elevated=!0),Te.layer=Te.elevated?"drag":"inside"}else if(Te.place==="out")lt={x:Te.outX,y:Te.outY,z:0,r:Te.outR,ry:0,s:Te.outS},Jo=na===yt?1:.15,fu=na===yt,Te.layer="out";else{let pn=xa&&pe.book?G-1-Te.rank:Te.rank,uu=j?0:xa?((pe.book?.16:.05)+pn*(pe.book?.055:.045))/Q.speed:pn*.03/Q.speed,yi=R>=uu?M:L.previous;if(lt=ke(Te.rank,G,yi,Q),R<uu&&(O=!0),Re&&Ae<ut(Te.rank))lt=ht(Te,lt),lF=0,Jo=pe.book?3:0,Te.layer="inside";else if(Te.insertUntil>Ee)O=!0,lt=We(Te,lt,Q),Te.layer="drag",Jo=.6;else if(Te.insertUntil=0,Te.elevated=!1,Te.layer="inside",Ra&&yi==="open")if(na===yt)lt={...lt,y:lt.y-6*pe.scale,r:lt.r*.2,ry:0,s:lt.s*1.05},Jo=1,fu=!0;else{let cF=lt.x-Ra.x;lt={...lt,x:lt.x+Math.sign(cF)*12*pe.scale*Math.max(0,1-Math.abs(cF)/(pe.w*1.1))},Jo=.2}else yi==="open"&&(Jo=.2)}if(O=fe(Te.x,lt.x,ha,Na,pt)||O,O=fe(Te.y,lt.y,ha,Na,pt)||O,!pe.book&&Te.layer==="inside"){let pn=Te.r.value*Math.PI/180,uu=(pe.docW*Math.abs(Math.sin(pn))+pe.docH*Math.abs(Math.cos(pn)))*Te.s.value/2,yi=pe.tabH+pe.h-2*pe.scale-uu;Te.y.value>yi&&(Te.y.value=yi,Te.y.velocity>0&&(Te.y.velocity*=-.25))}O=fe(Te.z,lt.z,ce,zt,pt)||O,O=fe(Te.r,lt.r,ha,Na,pt)||O,O=fe(Te.ry,lt.ry,ce,zt,pt)||O,O=fe(Te.s,lt.s,ce,zt,pt)||O,O=fe(Te.hover,Jo,ce,zt,pt)||O,O=fe(Te.alpha,lF,fc*3*Q.speed,1,pt)||O,O=fe(Te.mx,fu?Te.localX*7*pe.scale:0,Ze,.85,pt)||O,O=fe(Te.my,fu?Te.localY*7*pe.scale:0,Ze,.85,pt)||O}),va(),O||dt?L.raf=requestAnimationFrame(vt):L.last=0},Ft=(U,Q)=>{if(L.content.key===Q.content&&L.content.entries===Q.entries&&L.content.renderer===U)return;L.content={key:Q.content,entries:Q.entries,renderer:U};let pe=Math.min(window.devicePixelRatio||1,2),Ee=new Set(["back"]);U.upload("back",QP(Q.g,Q.insideTop,Q.insideBottom,pe)),W.current.slice(0,Q.count).forEach((pt,zt)=>{if(!pt)return;let Qt=`item-${zt}`;Ee.add(Qt);let ce=ab(pt,pe,!1);try{U.upload(Qt,ce.canvas)}catch{ce=ab(pt,pe,!0),U.upload(Qt,ce.canvas)}ce.pending.forEach(Ze=>Ze.addEventListener("load",un,{once:!0}))}),U.prune(Ee)},va=()=>{let U=P.current,{w:Q,h:pe,tabH:Ee,frontTop:pt,frontH:zt,docW:Qt,docH:ce,scale:Ze,book:M}=U.g,R=Q/2,O=Ee+pe/2,X=L.front.value,G=X*Math.PI/180,Se=M?ea(-X/180,0,1):0,Ae=Q/2*Se*(1-L.anchor.value),Re=(1+L.lift.value*.012)*L.squash.value*(.94+.06*L.appear);H.style.opacity=L.appear<.999?L.appear.toFixed(3):"";let Xe=uc(En(R,O),Q_(L.rx.value),aF(L.ry.value),dm(Re,Re),En(-R,-O)),Je=rF(Xe,En(Ae,0)),ut=M&&X<-90,ht=ut?"3":"40";V.current&&(V.current.style.transform=dc(Je),V.current.style.setProperty("--folder-gutter",Se.toFixed(3)),V.current.style.setProperty("--folder-label",(M?1:1-ea((-X-18)/26,0,1)).toFixed(3)));let je=M?uc(Je,En(0,pt,2*Ze*(1-Se)),aF(X)):uc(Je,En(0,Ee+pe,2*Ze),Q_(X),En(0,-zt)),St=M?Math.sin(G)*-.42+Math.cos(G)*.9:Math.sin(G)*.5+Math.cos(G)*.86,Ot=(ut?-St:St)/(M?.9:.86),ct=ea((Ot-1)*.9,0,.18),At=ea((1-Ot)*(M?.5:.22),0,.5),Xt=N.current;Xt&&(Xt.style.transform=dc(je),Xt.style.zIndex=ht,Xt.dataset.face=ut?"inner":"outer",Xt.style.setProperty("--folder-glint",ct.toFixed(3)),Xt.style.setProperty("--folder-dim",At.toFixed(3)));let Ve=M?Math.max(0,Math.sin(-G)):0;if(k.current&&(k.current.style.transform=dc(rF(Je,En(0,M?Ee:Ee+pe))),k.current.style.opacity=(.75+L.lift.value*.25).toFixed(3)),ae.current&&(ae.current.style.transform=dc(uc(Je,En(Q*Ve*.12,pt+pe*Ve*.04),dm(Math.cos(G),1))),ae.current.style.opacity=(ut?1-Ve*.7:0).toFixed(3)),J.current){let Qe=Q*Math.cos(G)+Q*Ve*.36;J.current.style.transform=dc(uc(Je,En(0,pt+pe*Ve*.03),dm(Qe/Q,1))),J.current.style.zIndex=Qe>0?"39":"2",J.current.style.opacity=(ea(Ve*4,0,1)*(1-Ve*.45)).toFixed(3)}let xa=L.items.map((Qe,Te)=>[Qe,Te]).filter(([Qe])=>Qe.layer==="out").sort((Qe,Te)=>Qe[0].outOrder-Te[0].outOrder).map(([,Qe])=>Qe),dt=[];L.items.forEach((Qe,Te)=>{let yt=W.current[Te],lt=3*Ze+Qe.z.value+Qe.hover.value*26*Ze,ha=uc(Xe,En(Qe.x.value+Qe.mx.value,Qe.y.value+Qe.my.value,lt),aF(Qe.ry.value),HP(Qe.r.value),dm(Qe.s.value,Qe.s.value),En(-Qt/2,-ce/2)),Na=10+U.count-Qe.rank;Qe.layer==="inside"&&L.phase==="open"&&L.hoveredItem===Te&&(Na=30),Qe.layer==="out"&&(Na=tF.out+xa.indexOf(Te)),Qe.layer==="drag"&&(Na=tF.drag),Qe.layer==="focus"&&(Na=tF.focus),dt.push({index:Te,matrix:ha,layer:Na,alpha:ea(Qe.alpha.value,0,1),inside:Qe.layer==="inside"}),yt&&(yt.style.transform=dc(ha),yt.style.zIndex=String(Na),yt.style.setProperty("--folder-lift",ea(Qe.hover.value,0,2.4).toFixed(3)),Qe.layer==="focus"?yt.setAttribute("data-focused","true"):yt.hasAttribute("data-focused")&&yt.removeAttribute("data-focused"),yt.style.opacity=Qe.alpha.value<.995?Math.max(0,Qe.alpha.value).toFixed(3):"")});let na=le.current,ga=De.current;if(!na||!ga||!U.glass)return;na.style.zIndex=ht,Ft(ga,U);let Ra=[];ut||(Ra.push({key:"back",matrix:Je,width:Q,height:Ee+pe,alpha:1}),dt.filter(Qe=>Qe.inside).sort((Qe,Te)=>Qe.layer-Te.layer).forEach(Qe=>Ra.push({key:`item-${Qe.index}`,matrix:Qe.matrix,width:Qt,height:ce,alpha:Qe.alpha})));let So=Math.min(window.devicePixelRatio||1,2);ga.render({dpr:So,depth:U.depth,origin:[R,O],view:U.view,layers:Ra,glass:{matrix:je,width:Q,height:zt,radii:M?[0,U.g.r,U.g.r,0]:[U.g.r,U.g.r,U.g.r,U.g.r],spine:M?Q*2:0,bleed:ut?2:0,morph:M?ea((Se-.55)/.45,0,1)**2:0,insideTop:U.insideTone[0],insideBottom:U.insideTone[1],tabRatio:Ee/(Ee+pe),gutter:[12*Ze,M?.12*Se:0],bevel:12*Ze,strength:14*Ze,split:.26,lens:.02,frost:U.frost*6*Ze,tint:[U.tint[0]/255,U.tint[1]/255,U.tint[2]/255,U.light?.1:.14],haze:.04+U.frost*.1,dim:At*.8,glint:ct,shine:U.light?.72:.85,light:ut?[.55,-.83]:[-.55,-.83]}})},Nt=()=>{L.raf||(L.raf=requestAnimationFrame(vt))},nr=()=>{L.intro.phase==="wait"&&(L.intro.phase="run",L.intro.start=performance.now()/1e3,Nt())},un=()=>{L.content.key="",Nt()},rr=()=>{let U=L.drag,Q=U?L.items[U.index]:null;L.receiving=!!(U?.active&&Q&&(Q.place==="out"||Q.elevated)&&ne(L.deskX,L.deskY))},dn=U=>{let Q=L.items[U.index];Q&&(U.active=!0,U.grabX=Q.x.value-U.downX,U.grabY=Q.y.value-U.downY,U.scale=Q.place==="out"?Q.outS:Q.s.value,U.clip=Fe(),L.suppressClick=!0,L.focus===U.index&&(L.focus=-1),Q.elevated=Q.place==="out"||!Me(Q),H.dataset.dragging="")},ze=(U,Q)=>{let pe=P.current,Ee=L.items[U.index];if(L.receiving=!1,delete H.dataset.dragging,!Ee)return;let pt=performance.now()/1e3,[zt,Qt]=Q?[0,0]:we(U.samples);if(ne(L.deskX,L.deskY)){let Ae=Ee.place==="out"||Ee.elevated;Ee.place="inside",Ae&&!j&&(Ee.insertUntil=pt+.24/pe.speed,Ee.insertFrom=pe.g.book?L.front.value<-90?null:"side":"top",Ee.insertFrom||(Ee.insertUntil=0),L.receiveUntil=Ee.insertUntil?Ee.insertUntil+.14/pe.speed:0),Ee.elevated=!1,Le(),pe.onItemDrop?.(pe.entries[U.index],U.index,!0);return}let ce=U.clip??Fe(),Ze=pe.g.docW*U.scale/2,M=pe.g.docH*U.scale/2,R=L.deskX+U.grabX+ea(zt,-2400,2400)*.09,O=L.deskY+U.grabY+ea(Qt,-2400,2400)*.09;Ee.place="out",Ee.elevated=!0;let X=8*pe.g.scale,G=Ze*1.08+X,Se=M*1.08+X;Ee.outX=ea(R,ce.left+G,Math.max(ce.left+G,ce.right-G)),Ee.outY=ea(O,ce.top+Se,Math.max(ce.top+Se,ce.bottom-Se)),Ee.outR=ea(Ee.r.value*.5+ea(zt,-2400,2400)*.003+UP[U.index%6]*.6,-12,12),Ee.outS=U.scale,L.dropCount+=1,Ee.outOrder=L.dropCount,Le(),pe.onItemDrop?.(pe.entries[U.index],U.index,!1)},nt=U=>{let Q=L.drag;if(Q&&U.pointerId===Q.id){let[zt,Qt]=B(U.clientX,U.clientY);L.deskX=zt,L.deskY=Qt;let ce=performance.now();for(Q.samples.push([ce,zt,Qt]);Q.samples.length>2&&ce-Q.samples[0][0]>100;)Q.samples.shift();if(!Q.active){let Ze=U.pointerType==="touch"?8:4;Math.hypot(U.clientX-Q.clientX,U.clientY-Q.clientY)>Ze&&dn(Q)}Q.active&&rr(),Nt()}if(U.pointerType==="touch")return;let pe=H.getBoundingClientRect();L.pointerX=ea((U.clientX-pe.left)/pe.width*2-1,-1.5,1.5),L.pointerY=ea((U.clientY-pe.top)/pe.height*2-1,-1.5,1.5);let Ee=U.target.closest?.("[data-folder-item]"),pt=Ee&&H.contains(Ee)?Number(Ee.getAttribute("data-folder-item")):-1;if(L.hoveredItem=pt,Ee&&pt>=0&&!L.drag?.active){let zt=Ee.getBoundingClientRect(),Qt=L.items[pt];Qt&&(Qt.localX=ea((U.clientX-zt.left)/zt.width*2-1,-1,1),Qt.localY=ea((U.clientY-zt.top)/zt.height*2-1,-1,1))}L.hovered||(L.hovered=!0,P.current.openOn==="hover"&&Be.current(!0)),Nt()},rt=U=>{U.pointerType==="touch"||L.drag?.active||(L.hovered=!1,L.pressed=!1,L.hoveredItem=-1,P.current.openOn==="hover"&&Be.current(!1),Nt())},_t=U=>{if(U.button>0)return;L.suppressClick=!1;let Q=U.target.closest?.("[data-folder-item]");if(Q&&H.contains(Q)&&P.current.draggable){let[pe,Ee]=B(U.clientX,U.clientY);L.deskX=pe,L.deskY=Ee,L.drag={index:Number(Q.getAttribute("data-folder-item")),id:U.pointerId,clientX:U.clientX,clientY:U.clientY,downX:pe,downY:Ee,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),pe,Ee]]};try{Q.setPointerCapture(U.pointerId)}catch{L.drag.id=U.pointerId}}else L.pressed=!0;Nt()},Lt=U=>{L.pressed=!1;let Q=L.drag;Q&&U.pointerId===Q.id&&(L.drag=null,Q.active&&ze(Q,U.type==="pointercancel")),Nt()},pa=U=>{if(H.contains(U.target))return;let Q=P.current;L.focus>=0&&(L.focus=-1,Nt()),Q.open&&Q.closeOnOutsideClick&&Be.current(!1)},Ea=U=>{if(U.key!=="Escape")return;if(L.focus>=0){L.focus=-1,Nt();return}let Q=P.current;Q.open&&Q.closeOnOutsideClick&&Be.current(!1)};H.addEventListener("pointermove",nt),H.addEventListener("pointerleave",rt),H.addEventListener("pointerdown",_t),window.addEventListener("pointerup",Lt),window.addEventListener("pointercancel",Lt),document.addEventListener("pointerdown",pa),document.addEventListener("keydown",Ea),document.fonts?.ready.then(un);let Dt=null;return P.current.intro&&!j&&(L.intro.phase="wait",H.style.opacity="0",typeof IntersectionObserver>"u"?nr():(Dt=new IntersectionObserver(U=>{U.some(Q=>Q.isIntersecting)&&(Dt?.disconnect(),nr())},{threshold:.2}),Dt.observe(H))),$.current={wake:Nt,invalidate:un,consumeClick:()=>L.suppressClick?(L.suppressClick=!1,!0):!1,interactive:U=>P.current.open||L.items[U]?.place==="out"||L.focus===U,select:U=>{let Q=P.current;Q.zoomOnClick&&(L.focus=L.focus===U?-1:U),Q.onItemClick?.(Q.entries[U],U),Nt()},blur:()=>L.focus<0?!1:(L.focus=-1,Nt(),!0)},Nt(),()=>{cancelAnimationFrame(L.raf),H.removeEventListener("pointermove",nt),H.removeEventListener("pointerleave",rt),H.removeEventListener("pointerdown",_t),window.removeEventListener("pointerup",Lt),window.removeEventListener("pointercancel",Lt),document.removeEventListener("pointerdown",pa),document.removeEventListener("keydown",Ea),Dt?.disconnect(),$.current=null}},[]),(0,$e.useEffect)(()=>{if(!oe)return;let H=le.current;if(!H)return;let j=YP(H);if(!j)return;De.current=j,Ye(!0);let de=L=>{L.preventDefault(),De.current=null,Ye(!1)};return H.addEventListener("webglcontextlost",de),$.current?.invalidate(),()=>{H.removeEventListener("webglcontextlost",de),j.dispose(),De.current===j&&(De.current=null),Ye(!1)}},[oe]),(0,$e.useEffect)(()=>{$.current?.wake()});let Z=()=>{$.current?.blur()||c!=="hover"&&He(!Ge)},se=(H,j)=>{let de=$.current;if(de){if(de.consumeClick()){H.stopPropagation();return}de.interactive(j)&&(H.stopPropagation(),de.select(j))}},ve={"--folder-rgb":E.join(", "),"--folder-base":Dr(E),"--folder-front-top":Dr(Rs(E,[255,255,255],.12)),"--folder-front-bottom":Dr(Rs(E,[0,0,0],.06)),"--folder-inside-top":_,"--folder-inside-bottom":F,"--folder-tab-ink":zP(at)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":Dr(it),"--folder-paper-ink":Dr(Rs(it,[0,0,0],.11)),"--folder-paper-ink-strong":Dr(Rs(it,[0,0,0],.28)),"--folder-paper-text":Dr(Rs(it,[0,0,0],.72)),"--folder-w":`${re.w}px`,"--folder-h":`${re.h}px`,"--folder-tab-h":`${re.tabH}px`,"--folder-front-y":`${re.frontTop}px`,"--folder-front-h":`${re.frontH}px`,"--folder-r":`${re.r}px`,"--folder-front-radius":tt?`0 ${re.r}px ${re.r}px 0`:`${re.r}px`,"--folder-doc-w":`${re.docW}px`,"--folder-doc-h":`${re.docH}px`,"--folder-frost":`${(1.5+ea(b,0,1)*10)*ie}px`,"--folder-depth":`${P.current.depth}px`,"--folder-scale":ie,...w},Ie=rb(re);return $e.default.createElement("div",{ref:Y,className:`folder-root${A?` ${A}`:""}`,"data-mode":tt?"book":"flap","data-variant":o,"data-theme":v==="light"?"light":"dark","data-open":Ge?"":void 0,"data-gl":oe&&Ce?"":void 0,"data-draggable":S?"":void 0,style:ve},$e.default.createElement("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":Ge,"aria-label":e?`${e} folder`:"Folder",onClick:Z,onKeyDown:H=>{H.target===H.currentTarget&&(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),Z())}},$e.default.createElement("span",{ref:k,className:"folder-layer folder-ground","aria-hidden":"true"}),tt&&$e.default.createElement("span",{ref:ae,className:"folder-layer folder-cast","aria-hidden":"true"}),$e.default.createElement("div",{ref:V,className:"folder-layer folder-back","aria-hidden":"true"},$e.default.createElement("div",{className:"folder-back-fill",style:{clipPath:`path('${Ie}')`}},tt&&$e.default.createElement("span",{className:"folder-gutter"})),$e.default.createElement("svg",{className:"folder-back-rim",width:re.w,height:Oe,viewBox:`0 0 ${re.w} ${Oe}`},$e.default.createElement("path",{className:"folder-focus",d:Ie})),e&&$e.default.createElement("span",{className:"folder-tab-text",style:{left:re.tabX,width:re.tabW}},e)),ue.map((H,j)=>{let de=Ge||ee.includes(j);return $e.default.createElement("div",{key:(0,$e.isValidElement)(H)&&H.key!=null?H.key:j,ref:L=>{W.current[j]=L},className:"folder-layer folder-item","data-folder-item":j,role:de?"button":void 0,tabIndex:de?0:-1,onClick:L=>se(L,j),onKeyDown:L=>{!de||L.key!=="Enter"&&L.key!==" "||(L.preventDefault(),L.stopPropagation(),$.current?.select(j))}},jP(H))}),tt&&$e.default.createElement("span",{ref:J,className:"folder-layer folder-shade","aria-hidden":"true"}),$e.default.createElement("div",{ref:N,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true"},$e.default.createElement("div",{className:"folder-face folder-face-outer"}),tt&&$e.default.createElement("div",{className:"folder-face folder-face-inner"},$e.default.createElement("span",{className:"folder-inner-gutter"}))),oe&&$e.default.createElement("canvas",{ref:le,className:"folder-glass","aria-hidden":"true",style:{left:qe.x,top:qe.y,width:qe.width,height:qe.height}})),e&&$e.default.createElement("span",{ref:K,className:"folder-tab-text folder-measure","aria-hidden":"true"},e))},sb=tB;var sF=[{id:"microsoft-mr",logo:"assets/logos/microsoft.png",badge:"Microsoft",badgeClass:"microsoft",title:"Introduction to Mixed Reality",issuer:"Microsoft Learn",date:"Feb 2025",credId:"ID: C2558DD477EF1EBB",skills:["Mixed Reality","Spatial Anchors","HoloLens","Perception APIs"],description:"Foundational concepts in Mixed Reality, perception APIs, spatial mapping, and immersive experiences.",pdfUrl:"assets/certificates/Introduction to mixed reality - Microsoft.pdf",verifyUrl:"https://learn.microsoft.com/api/achievements/share/en-us/SaravanaPrakashR-4947/N29VQVPF?sharingId=C2558DD477EF1EBB",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/2036338817/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-101",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude 101",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: uuy8y6ghve9v",skills:["Anthropic Claude","Prompt Engineering","AI Automation"],description:"Completed the Claude 101 certification, gaining foundational knowledge in working with AI assistants and prompt engineering. Learned how to effectively interact with Claude to generate content, analyze information, and automate tasks using natural language.",pdfUrl:"assets/certificates/certificate-uuy8y6ghve9v-1773051032.pdf",verifyUrl:"http://verify.skilljar.com/c/uuy8y6ghve9v",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1377263598/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-code",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude Code in Action",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: 7bdj5ooecz23",skills:["Anthropic Claude","AI Coding Assistants","Agentic Workflows"],description:"Excited to see how AI coding assistants are transforming software development, automation, and engineering productivity.",pdfUrl:"assets/certificates/Claude Code in Action.pdf",verifyUrl:"http://verify.skilljar.com/c/7bdj5ooecz23",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1119111007/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"chatgpt-how-it-works",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Understanding ChatGPT: How It Works",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: qmp4Jz3om1b",skills:["Generative AI","NLP","Transformers","ChatGPT"],description:"Completed Understanding ChatGPT: How It Works, gaining foundational knowledge of how generative AI models process language, generate responses, and assist in various tasks using natural language processing.",pdfUrl:"assets/certificates/Understanding ChatGPT - How It Works.pdf",verifyUrl:"https://simpli-web.app.link/e/qmp4Jz3om1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1363912282/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"intro-prompt-eng",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Introduction to Prompt Engineering",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: HTn2dmSim1b",skills:["Prompt Engineering","Few-Shot Steering","Instruction Tuning"],description:"Successfully completed the Introduction to Prompt Engineering certification, gaining foundational knowledge in designing effective prompts for AI systems. The program covered prompt structuring, instruction optimization, and techniques for improving AI-generated responses across various use cases.",pdfUrl:"assets/certificates/Introduction to Prompt Engineering certification.pdf",verifyUrl:"https://simpli-web.app.link/e/HTn2dmSim1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1358602910/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"}];function iF(){let[t,e]=(0,ft.useState)(0),[a,o]=(0,ft.useState)(!1),n=sF.map((s,i)=>({title:s.title,content:ft.default.createElement("div",{className:"cert-doc-card"},ft.default.createElement("div",{className:"cert-doc-header"},ft.default.createElement("div",{className:"cert-doc-logo-box"},ft.default.createElement("img",{src:s.logo,alt:s.issuer,className:"cert-doc-logo"})),ft.default.createElement("span",{className:"cert-doc-date"},s.date)),ft.default.createElement("div",{className:"cert-doc-title"},s.title),ft.default.createElement("div",{className:"cert-doc-issuer"},s.issuer),ft.default.createElement("div",{className:"cert-doc-desc"},s.description),ft.default.createElement("div",{className:"cert-doc-id"},s.credId),ft.default.createElement("div",{className:"cert-doc-footer"},ft.default.createElement("a",{href:s.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-doc-link",onClick:l=>l.stopPropagation(),title:"Verify credential online"},ft.default.createElement("span",null,"Verify \u2197")),s.pdfUrl&&ft.default.createElement("a",{href:s.pdfUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-doc-pdf-link",onClick:l=>l.stopPropagation(),title:"View PDF certificate"},ft.default.createElement("span",null,"PDF \u{1F4C4}"))))})),r=sF[t];return ft.default.createElement("div",{className:"cert-interactive-container"},ft.default.createElement("div",{className:"cert-folder-column"},ft.default.createElement("div",{className:"cert-folder-hint"},ft.default.createElement("span",null,a?"Click card to zoom \u2022 Drag to arrange":"Click folder to open \u2022 Drag or click cards")),ft.default.createElement(sb,{label:"Licenses & Certs",items:n,mode:"flap",variant:"glass",color:"#00f5ff",tabPosition:"right",layout:"spread",size:1.15,theme:"dark",zoomOnClick:!0,draggable:!0,peek:!0,onOpenChange:s=>o(s),onItemClick:(s,i)=>e(i)})),ft.default.createElement("div",{className:"cert-details-column glass"},ft.default.createElement("div",{className:"cert-details-header"},ft.default.createElement("div",{className:"cert-details-logo-badge"},ft.default.createElement("img",{src:r.logo,alt:r.issuer,className:"cert-details-logo-img"})),ft.default.createElement("span",{className:"cert-details-date"},r.date)),ft.default.createElement("h3",{className:"cert-details-title"},r.title),ft.default.createElement("p",{className:"cert-details-issuer"},"Issued by ",r.issuer," \u2022 ",ft.default.createElement("span",{className:"cert-details-cred-id"},r.credId)),ft.default.createElement("p",{className:"cert-details-desc"},r.description),ft.default.createElement("div",{className:"cert-details-skills"},r.skills.map((s,i)=>ft.default.createElement("span",{key:i,className:"cert-skill-tag"},"#",s))),ft.default.createElement("div",{className:"cert-details-actions"},ft.default.createElement("a",{href:r.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-verify"},ft.default.createElement("span",null,"Show Credential"),ft.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ft.default.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),ft.default.createElement("polyline",{points:"15 3 21 3 21 9"}),ft.default.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))),r.pdfUrl&&ft.default.createElement("a",{href:r.pdfUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-pdf"},ft.default.createElement("span",null,"View PDF"),ft.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ft.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),ft.default.createElement("polyline",{points:"14 2 14 8 20 8"}),ft.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),ft.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),ft.default.createElement("polyline",{points:"10 9 9 9 8 9"}))),ft.default.createElement("a",{href:r.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-linkedin"},"LinkedIn Record")),ft.default.createElement("div",{className:"cert-quick-selector"},ft.default.createElement("span",{className:"cert-quick-label"},"Browse Certifications:"),ft.default.createElement("div",{className:"cert-quick-pills"},sF.map((s,i)=>ft.default.createElement("button",{key:s.id,className:`cert-pill ${t===i?"active":""} ${s.badgeClass}`,onClick:()=>e(i)},i+1,". ",s.title.length>25?s.title.slice(0,25)+"\u2026":s.title))))))}function Ls(t,e,a="250px"){let o=document.getElementById(t);if(!o)return;if(!("IntersectionObserver"in window)){e();return}let n=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&(n.disconnect(),e())},{rootMargin:a});n.observe(o)}function ib(){console.log("\u{1F680} initReactComponents running..."),Ls("lanyard-container",()=>Kg(["assets/id_card_front.webp","assets/id_card_back.webp","assets/hepl_lanyard.webp"]),"1000px"),Ls("lanyard-container-mmw",()=>Kg(["assets/mmw_id_front.webp","assets/mmw_id_back.webp","assets/mmw_lanyard.webp"]),"1000px"),Ls("lanyard-container",()=>{try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement(Qg,{frontImage:"assets/id_card_front.webp",backImage:"assets/id_card_back.webp",strapImage:"assets/hepl_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}}),Ls("lanyard-container-mmw",()=>{try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement(Qg,{frontImage:"assets/mmw_id_front.webp",backImage:"assets/mmw_id_back.webp",strapImage:"assets/mmw_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}}),Ls("disclaimer-gridscan-mount",()=>{try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement(G_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}}),Ls("contact-stepper-mount",()=>{try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement($g,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}}),Ls("profile-card-mount",()=>{try{let t=document.getElementById("profile-card-mount");t&&!t.dataset.profileCardMounted&&(t.dataset.profileCardMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement(K_,{name:"Saravana Prakash R",title:"Engineer - Immersive Tech",handle:"srvnsp",status:"Online",statusColor:"#00f5ff",contactText:"Contact Me",avatarUrl:"assets/profile_photoroom.png",miniAvatarUrl:"assets/profile_photoroom.png",iconUrl:"/assets/csharp-pattern.svg",holo:.8,glare:.5,tiltStrength:12,parallax:8,radius:20,enableTilt:!0,intro:!0,showUserInfo:!0,theme:"dark",onContactClick:()=>{let a=document.getElementById("contact");if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}})),console.log("\u2705 ProfileCard mounted successfully"))}catch(t){console.error("\u274C Failed mounting ProfileCard:",t)}}),Ls("certifications-folder-mount",()=>{try{let t=document.getElementById("certifications-folder-mount");t&&!t.dataset.folderMounted&&(t.dataset.folderMounted="true",t.innerHTML="",(0,vi.createRoot)(t).render(Si.default.createElement(iF,null)),console.log("\u2705 CertificationsFolder mounted successfully"))}catch(t){console.error("\u274C Failed mounting CertificationsFolder:",t)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ib):ib();
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
