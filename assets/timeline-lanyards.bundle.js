var cb=Object.create;var dF=Object.defineProperty;var ub=Object.getOwnPropertyDescriptor;var fb=Object.getOwnPropertyNames;var db=Object.getPrototypeOf,pb=Object.prototype.hasOwnProperty;var hb=(t,e)=>()=>(t&&(e=t(t=0)),e);var Br=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var mb=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of fb(e))!pb.call(t,n)&&n!==a&&dF(t,n,{get:()=>e[n],enumerable:!(o=ub(e,n))||o.enumerable});return t};var mn=(t,e,a)=>(a=t!=null?cb(db(t)):{},mb(e||!t||!t.__esModule?dF(a,"default",{value:t,enumerable:!0}):a,t));var _F=Br(yt=>{"use strict";ht();var xm=Symbol.for("react.transitional.element"),Ib=Symbol.for("react.portal"),xb=Symbol.for("react.fragment"),gb=Symbol.for("react.strict_mode"),Fb=Symbol.for("react.profiler"),Sb=Symbol.for("react.consumer"),vb=Symbol.for("react.context"),yb=Symbol.for("react.forward_ref"),Mb=Symbol.for("react.suspense"),Cb=Symbol.for("react.memo"),xF=Symbol.for("react.lazy"),_b=Symbol.for("react.activity"),bb=Symbol.for("react.view_transition"),pF=Symbol.iterator;function Tb(t){return t===null||typeof t!="object"?null:(t=pF&&t[pF]||t["@@iterator"],typeof t=="function"?t:null)}var gF={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},FF=Object.assign,SF={};function _i(t,e,a){this.props=t,this.context=e,this.refs=SF,this.updater=a||gF}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vF(){}vF.prototype=_i.prototype;function gm(t,e,a){this.props=t,this.context=e,this.refs=SF,this.updater=a||gF}var Fm=gm.prototype=new vF;Fm.constructor=gm;FF(Fm,_i.prototype);Fm.isPureReactComponent=!0;var hF=Array.isArray;function Im(){}var ra={H:null,A:null,T:null,S:null},yF=Object.prototype.hasOwnProperty;function Sm(t,e,a){var o=a.ref;return{$$typeof:xm,type:t,key:e,ref:o!==void 0?o:null,props:a}}function Ab(t,e){return Sm(t.type,e,t.props)}function vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===xm}function wb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var mF=/\/+/g;function mm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wb(""+t.key):e.toString(36)}function Eb(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Im,Im):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ci(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xm:case Ib:s=!0;break;case xF:return s=t._init,Ci(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+mm(t,0):o,hF(n)?(a="",s!=null&&(a=s.replace(mF,"$&/")+"/"),Ci(n,e,a,"",function(c){return c})):n!=null&&(vm(n)&&(n=Ab(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(mF,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(hF(t))for(var l=0;l<t.length;l++)o=t[l],r=i+mm(o,l),s+=Ci(o,e,a,r,n);else if(l=Tb(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+mm(o,l++),s+=Ci(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return Ci(Eb(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function hf(t,e,a){if(t==null)return t;var o=[],n=0;return Ci(t,o,"","",function(r){return e.call(a,r,n++)}),o}function Rb(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var IF=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function MF(t){var e=ra.T,a={};a.types=e!==null?e.types:null,ra.T=a;try{var o=t(),n=ra.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Im,IF)}catch(r){IF(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),ra.T=e}}function CF(t){var e=ra.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else MF(CF.bind(null,t))}var Db={map:hf,forEach:function(t,e,a){hf(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return hf(t,function(){e++}),e},toArray:function(t){return hf(t,function(e){return e})||[]},only:function(t){if(!vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};yt.Activity=_b;yt.Children=Db;yt.Component=_i;yt.Fragment=xb;yt.Profiler=Fb;yt.PureComponent=gm;yt.StrictMode=gb;yt.Suspense=Mb;yt.ViewTransition=bb;yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ra;yt.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ra.H.useMemoCache(t)}};yt.addTransitionType=CF;yt.cache=function(t){return function(){return t.apply(null,arguments)}};yt.cacheSignal=function(){return null};yt.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=FF({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!yF.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return Sm(t.type,n,o)};yt.createContext=function(t){return t={$$typeof:vb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Sb,_context:t},t};yt.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)yF.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return Sm(t,r,n)};yt.createRef=function(){return{current:null}};yt.forwardRef=function(t){return{$$typeof:yb,render:t}};yt.isValidElement=vm;yt.lazy=function(t){return{$$typeof:xF,_payload:{_status:-1,_result:t},_init:Rb}};yt.memo=function(t,e){return{$$typeof:Cb,type:t,compare:e===void 0?null:e}};yt.startTransition=MF;yt.unstable_useCacheRefresh=function(){return ra.H.useCacheRefresh()};yt.use=function(t){return ra.H.use(t)};yt.useActionState=function(t,e,a){return ra.H.useActionState(t,e,a)};yt.useCallback=function(t,e){return ra.H.useCallback(t,e)};yt.useContext=function(t){return ra.H.useContext(t)};yt.useDebugValue=function(){};yt.useDeferredValue=function(t,e){return ra.H.useDeferredValue(t,e)};yt.useEffect=function(t,e){return ra.H.useEffect(t,e)};yt.useEffectEvent=function(t){return ra.H.useEffectEvent(t)};yt.useId=function(){return ra.H.useId()};yt.useImperativeHandle=function(t,e,a){return ra.H.useImperativeHandle(t,e,a)};yt.useInsertionEffect=function(t,e){return ra.H.useInsertionEffect(t,e)};yt.useLayoutEffect=function(t,e){return ra.H.useLayoutEffect(t,e)};yt.useMemo=function(t,e){return ra.H.useMemo(t,e)};yt.useOptimistic=function(t,e){return ra.H.useOptimistic(t,e)};yt.useReducer=function(t,e,a){return ra.H.useReducer(t,e,a)};yt.useRef=function(t){return ra.H.useRef(t)};yt.useState=function(t){return ra.H.useState(t)};yt.useSyncExternalStore=function(t,e,a){return ra.H.useSyncExternalStore(t,e,a)};yt.useTransition=function(){return ra.H.useTransition()};yt.version="19.3.0"});var Lo=Br((iB,bF)=>{"use strict";ht();bF.exports=_F()});var Ue,ht=hb(()=>{Ue=mn(Lo())});var UF=Br(ha=>{"use strict";ht();function _m(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<mf(n,e))t[o]=e,t[a]=n,a=o;else break e}}function Ln(t){return t.length===0?null:t[0]}function xf(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>mf(i,a))l<n&&0>mf(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>mf(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function mf(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}ha.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(TF=performance,ha.unstable_now=function(){return TF.now()}):(ym=Date,AF=ym.now(),ha.unstable_now=function(){return ym.now()-AF});var TF,ym,AF,ir=[],Ur=[],Lb=1,jo=null,ao=3,bm=!1,hc=!1,mc=!1,Tm=!1,RF=typeof setTimeout=="function"?setTimeout:null,DF=typeof clearTimeout=="function"?clearTimeout:null,wF=typeof setImmediate<"u"?setImmediate:null;function If(t){for(var e=Ln(Ur);e!==null;){if(e.callback===null)xf(Ur);else if(e.startTime<=t)xf(Ur),e.sortIndex=e.expirationTime,_m(ir,e);else break;e=Ln(Ur)}}function Am(t){if(mc=!1,If(t),!hc)if(Ln(ir)!==null)hc=!0,Ti||(Ti=!0,bi());else{var e=Ln(Ur);e!==null&&wm(Am,e.startTime-t)}}var Ti=!1,Ic=-1,LF=5,PF=-1;function BF(){return Tm?!0:!(ha.unstable_now()-PF<LF)}function Mm(){if(Tm=!1,Ti){var t=ha.unstable_now();PF=t;var e=!0;try{e:{hc=!1,mc&&(mc=!1,DF(Ic),Ic=-1),bm=!0;var a=ao;try{t:{for(If(t),jo=Ln(ir);jo!==null&&!(jo.expirationTime>t&&BF());){var o=jo.callback;if(typeof o=="function"){jo.callback=null,ao=jo.priorityLevel;var n=o(jo.expirationTime<=t);if(t=ha.unstable_now(),typeof n=="function"){jo.callback=n,If(t),e=!0;break t}jo===Ln(ir)&&xf(ir),If(t)}else xf(ir);jo=Ln(ir)}if(jo!==null)e=!0;else{var r=Ln(Ur);r!==null&&wm(Am,r.startTime-t),e=!1}}break e}finally{jo=null,ao=a,bm=!1}e=void 0}}finally{e?bi():Ti=!1}}}var bi;typeof wF=="function"?bi=function(){wF(Mm)}:typeof MessageChannel<"u"?(Cm=new MessageChannel,EF=Cm.port2,Cm.port1.onmessage=Mm,bi=function(){EF.postMessage(null)}):bi=function(){RF(Mm,0)};var Cm,EF;function wm(t,e){Ic=RF(function(){t(ha.unstable_now())},e)}ha.unstable_IdlePriority=5;ha.unstable_ImmediatePriority=1;ha.unstable_LowPriority=4;ha.unstable_NormalPriority=3;ha.unstable_Profiling=null;ha.unstable_UserBlockingPriority=2;ha.unstable_cancelCallback=function(t){t.callback=null};ha.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):LF=0<t?Math.floor(1e3/t):5};ha.unstable_getCurrentPriorityLevel=function(){return ao};ha.unstable_next=function(t){switch(ao){case 1:case 2:case 3:var e=3;break;default:e=ao}var a=ao;ao=e;try{return t()}finally{ao=a}};ha.unstable_requestPaint=function(){Tm=!0};ha.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ao;ao=t;try{return e()}finally{ao=a}};ha.unstable_scheduleCallback=function(t,e,a){var o=ha.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Lb++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,_m(Ur,t),Ln(ir)===null&&t===Ln(Ur)&&(mc?(DF(Ic),Ic=-1):mc=!0,wm(Am,a-o))):(t.sortIndex=n,_m(ir,t),hc||bm||(hc=!0,Ti||(Ti=!0,bi()))),t};ha.unstable_shouldYield=BF;ha.unstable_wrapCallback=function(t){var e=ao;return function(){var a=ao;ao=e;try{return t.apply(this,arguments)}finally{ao=a}}}});var NF=Br((dB,kF)=>{"use strict";ht();kF.exports=UF()});var HF=Br(oo=>{"use strict";ht();var Pb=Lo();function zF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kr(){}var fo={d:{f:kr,r:function(){throw Error(zF(522))},D:kr,C:kr,L:kr,m:kr,X:kr,S:kr,M:kr},p:0,findDOMNode:null},Bb=Symbol.for("react.portal"),Ub=Symbol.for("react.recoverable"),OF=Symbol.for("react.optimistic_key");function kb(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bb,key:o==null?null:o===OF?OF:""+o,children:t,containerInfo:e,implementation:a}}var xc=Pb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}oo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fo;oo.browser=function(t){return{$$typeof:Ub,_reason:t}};oo.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(zF(299));return kb(t,e,null,a)};oo.flushSync=function(t){var e=xc.T,a=fo.p;try{if(xc.T=null,fo.p=2,t)return t()}finally{xc.T=e,fo.p=a,fo.d.f()}};oo.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,fo.d.C(t,e))};oo.prefetchDNS=function(t){typeof t=="string"&&fo.d.D(t)};oo.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=gf(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?fo.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&fo.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};oo.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=gf(e.as,e.crossOrigin);fo.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&fo.d.M(t)};oo.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=gf(a,e.crossOrigin);fo.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};oo.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=gf(e.as,e.crossOrigin);fo.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else fo.d.m(t)};oo.requestFormReset=function(t){fo.d.r(t)};oo.unstable_batchedUpdates=function(t,e){return t(e)};oo.useFormState=function(t,e,a){return xc.H.useFormState(t,e,a)};oo.useFormStatus=function(){return xc.H.useHostTransitionStatus()};oo.version="19.3.0"});var qF=Br((IB,GF)=>{"use strict";ht();function VF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VF)}catch(t){console.error(t)}}VF(),GF.exports=HF()});var EM=Br($d=>{"use strict";ht();var ka=NF(),wv=Lo(),Nb=qF();function he(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ev(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function WF(t){if(nu(t)!==t)throw Error(he(188))}function Ob(t){var e=t.alternate;if(!e){if(e=nu(t),e===null)throw Error(he(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return WF(n),t;if(r===o)return WF(n),e;r=r.sibling}throw Error(he(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(he(189))}}if(a.alternate!==o)throw Error(he(190))}if(a.tag!==3)throw Error(he(188));return a.stateNode.current===a?t:e}function Lv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Lv(t),e!==null)return e;t=t.sibling}return null}function Ao(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Ao(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function ei(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function XF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Pv(t){var e=[null,null],a=ei(t);return a===null||Bv(e,t,a.child,{foundSelf:!1}),e}function Bv(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Bv(t,e,a.child,o))return!0;a=a.sibling}return!1}function Ua(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(he(559))}}var Pi=null,iI=null;function zb(t,e,a){return t===a?!0:t===e?(Pi=t,!0):!1}function Hb(t,e,a){return t===a?(iI=t,!1):t===e?(iI!==null&&(Pi=t),!0):!1}function YF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function lI(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var oa=Object.assign,Vb=Symbol.for("react.element"),Ff=Symbol.for("react.transitional.element"),Cc=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),cI=Symbol.for("react.profiler"),kv=Symbol.for("react.consumer"),On=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),uI=Symbol.for("react.suspense"),fI=Symbol.for("react.suspense_list"),F0=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy");Symbol.for("react.scope");var dI=Symbol.for("react.activity"),Gb=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var qb=Symbol.for("react.memo_cache_sentinel"),pI=Symbol.for("react.view_transition"),Wb=Symbol.for("react.recoverable"),ZF=Symbol.iterator;function gc(t){return t===null||typeof t!="object"?null:(t=ZF&&t[ZF]||t["@@iterator"],typeof t=="function"?t:null)}var Xb=Symbol.for("react.client.reference");function hI(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xb?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case cI:return"Profiler";case Uv:return"StrictMode";case uI:return"Suspense";case fI:return"SuspenseList";case dI:return"Activity";case pI:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Cc:return"Portal";case On:return t.displayName||"Context";case kv:return(t._context.displayName||"Context")+".Consumer";case g0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F0:return e=t.displayName||null,e!==null?e:hI(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return hI(t(e))}catch{}}return null}var _c=Array.isArray,Ft=wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=Nb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hs={pending:!1,data:null,method:null,action:null},mI=[],Ui=-1;function Xn(t){return{current:t}}function Qa(t){0>Ui||(t.current=mI[Ui],mI[Ui]=null,Ui--)}function la(t,e){Ui++,mI[Ui]=t.current,t.current=e}var Gn=Xn(null),Vc=Xn(null),Jr=Xn(null),rd=Xn(null);function sd(t,e){switch(la(Jr,e),la(Vc,t),la(Gn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?lv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=lv(e),t=rM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Qa(Gn),la(Gn,t)}function al(){Qa(Gn),Qa(Vc),Qa(Jr)}function II(t){var e=t.memoizedState;e!==null&&(dl._currentValue=e.memoizedState,la(rd,t)),e=Gn.current;var a=rM(e,t.type);e!==a&&(la(Vc,t),la(Gn,a))}function id(t){Vc.current===t&&(Qa(Gn),Qa(Vc)),rd.current===t&&(Qa(rd),dl._currentValue=Hs)}var Em,KF;function Or(t){if(Em===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Em=e&&e[1]||"",KF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Em+t+KF}var Rm=!1;function Dm(t,e){if(!t||Rm)return"";Rm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(m){var u=m}Reflect.construct(t,[],h)}else{try{h.call()}catch(m){u=m}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(m){u=m}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(m){if(m&&u&&typeof m.stack=="string")return[m.stack,u.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var f=`
`+l[o].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=o&&0<=n);break}}}finally{Rm=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Or(a):""}function Yb(t,e){switch(t.tag){case 26:case 27:case 5:return Or(t.type);case 16:return Or("Lazy");case 13:return t.child!==e&&e!==null?Or("Suspense Fallback"):Or("Suspense");case 19:return Or("SuspenseList");case 0:case 15:return Dm(t.type,!1);case 11:return Dm(t.type.render,!1);case 1:return Dm(t.type,!0);case 31:return Or("Activity");case 30:return Or("ViewTransition");default:return""}}function JF(t){try{var e="",a=null;do e+=Yb(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var xI=Object.prototype.hasOwnProperty,S0=ka.unstable_scheduleCallback,Lm=ka.unstable_cancelCallback,Zb=ka.unstable_shouldYield,Kb=ka.unstable_requestPaint,Oo=ka.unstable_now,Jb=ka.unstable_getCurrentPriorityLevel,Nv=ka.unstable_ImmediatePriority,Ov=ka.unstable_UserBlockingPriority,ld=ka.unstable_NormalPriority,Qb=ka.unstable_LowPriority,zv=ka.unstable_IdlePriority,jb=ka.log,$b=ka.unstable_setDisableYieldValue,ru=null,zo=null;function qr(t){if(typeof jb=="function"&&$b(t),zo&&typeof zo.setStrictMode=="function")try{zo.setStrictMode(ru,t)}catch{}}var Ho=Math.clz32?Math.clz32:aT,eT=Math.log,tT=Math.LN2;function aT(t){return t>>>=0,t===0?32:31-(eT(t)/tT|0)|0}var Sf=256,vf=262144,yf=4194304;function Us(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pd(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Us(o):(s&=i,s!==0?n=Us(s):a||(a=i&~t,a!==0&&(n=Us(a))))):(i=o&~r,i!==0?n=Us(i):s!==0?n=Us(s):a||(a=o&~t,a!==0&&(n=Us(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function su(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Hv(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-Ho(a),n=1<<o;e|=t[o],a&=~n}return e}function oT(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(){var t=yf;return yf<<=1,!(yf&62914560)&&(yf=4194304),t}function Pm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function iu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nT(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var f=31-Ho(a),h=1<<f;i[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&Gv(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Gv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Ho(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function qv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-Ho(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function Wv(t,e){var a=e&-e;return a=a&42?1:v0(a),a&(t.suspendedLanes|e)?0:a}function v0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function y0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Xv(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:TM(t.type))}function QF(t,e){var a=qt.p;try{return qt.p=t,e()}finally{qt.p=a}}var Sr=Math.random().toString(36).slice(2),Ka="__reactFiber$"+Sr,wo="__reactProps$"+Sr,ml="__reactContainer$"+Sr,jF="__reactEvents$"+Sr,rT="__reactListeners$"+Sr,sT="__reactHandles$"+Sr,$F="__reactResources$"+Sr,lu="__reactMarker$"+Sr,cd="__reactLoad$"+Sr;function Bd(t){delete t[Ka],delete t[wo],delete t[rT],delete t[sT]}function Os(t){var e;if(e=t[Ka])return e;for(var a=t.parentNode;a;){if(e=a[ml]||a[Ka]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Iv(t);t!==null;){if(a=t[Ka])return a;t=Iv(t)}return e}t=a,a=t.parentNode}return null}function Il(t){if(t=t[Ka]||t[ml]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function bc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(he(33))}function Xi(t){var e=t[$F];return e||(e=t[$F]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ga(t){t[lu]=!0}function Yv(t){t[cd]=void 0}var Zv=new Set,Kv={};function ti(t,e){ol(t,e),ol(t+"Capture",e)}function ol(t,e){for(Kv[t]=e,t=0;t<e.length;t++)Zv.add(e[t])}var iT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eS={},tS={};function lT(t){return xI.call(tS,t)?!0:xI.call(eS,t)?!1:iT.test(t)?tS[t]=!0:(eS[t]=!0,!1)}var Vt=!1;function aS(){var t=Vt;return Vt=!1,t}function zf(t,e,a){if(lT(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Mf(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function lr(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function Bo(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cT(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gI(t){if(!t._valueTracker){var e=Jv(t)?"checked":"value";t._valueTracker=cT(t,e,""+t[e])}}function Qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=Jv(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var uT=/[\n"\\]/g;function on(t){return t.replace(uT,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function FI(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Bo(e)):t.value!==""+Bo(e)&&(t.value=""+Bo(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?Bm(t,Bo(t.value)):Bm(t,Bo(e)):a!=null?Bm(t,Bo(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+Bo(i):t.removeAttribute("name")}function jv(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){gI(t);return}a=a!=null?""+Bo(a):"",e=e!=null?""+Bo(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),gI(t)}function Bm(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Yi(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Bo(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function $v(t,e,a){if(e!=null&&(e=""+Bo(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Bo(a):""}function ey(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(he(92));if(_c(o)){if(1<o.length)throw Error(he(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=Bo(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),gI(t)}function nl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var fT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oS(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||fT.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ty(t,e,a){if(e!=null&&typeof e!="object")throw Error(he(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",Vt=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(oS(t,n,o),Vt=!0)}else for(var r in e)e.hasOwnProperty(r)&&oS(t,r,e[r])}function M0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hf(t){return pT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zn(){}var SI=null;function C0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ki=null,Zi=null;function nS(t){var e=Il(t);if(e&&(t=e.stateNode)){var a=t[wo]||null;e:switch(t=e.stateNode,e.type){case"input":if(FI(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+on(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[wo]||null;if(!n)throw Error(he(90));FI(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&Qv(o)}break e;case"textarea":$v(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Yi(t,!!a.multiple,e,!1)}}}var Um=!1;function ay(t,e,a){if(Um)return t(e,a);Um=!0;try{var o=t(e);return o}finally{if(Um=!1,(ki!==null||Zi!==null)&&(Kd(),ki&&(e=ki,t=Zi,Zi=ki=null,nS(e),t)))for(e=0;e<t.length;e++)nS(t[e])}}function Gc(t,e){var a=t.stateNode;if(a===null)return null;var o=a[wo]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(he(231,e,typeof a));return a}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vI=!1;if(hr)try{Ai={},Object.defineProperty(Ai,"passive",{get:function(){vI=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{vI=!1}var Ai,Wr=null,_0=null,Vf=null;function oy(){if(Vf)return Vf;var t,e=_0,a=e.length,o,n="value"in Wr?Wr.value:Wr.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return Vf=n.slice(t,1<o?1-o:void 0)}function Gf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cf(){return!0}function rS(){return!1}function Io(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Cf:rS,this.isPropagationStopped=rS,this}return oa(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cf)},persist:function(){},isPersistent:Cf}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=Io(fs),cu=oa({},fs,{view:0,detail:0}),hT=Io(cu),km,Nm,Fc,kd=oa({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:b0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fc&&(Fc&&t.type==="mousemove"?(km=t.screenX-Fc.screenX,Nm=t.screenY-Fc.screenY):Nm=km=0,Fc=t),km)},movementY:function(t){return"movementY"in t?t.movementY:Nm}}),sS=Io(kd),mT=oa({},kd,{dataTransfer:0}),IT=Io(mT),xT=oa({},cu,{relatedTarget:0}),Om=Io(xT),gT=oa({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Io(gT),ST=oa({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vT=Io(ST),yT=oa({},fs,{data:0}),iS=Io(yT),MT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function b0(){return bT}var TT=oa({},cu,{key:function(t){if(t.key){var e=MT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:b0,charCode:function(t){return t.type==="keypress"?Gf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AT=Io(TT),wT=oa({},kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lS=Io(wT),ET=oa({},fs,{submitter:0}),RT=Io(ET),DT=oa({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:b0}),LT=Io(DT),PT=oa({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),BT=Io(PT),UT=oa({},kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kT=Io(UT),NT=oa({},fs,{newState:0,oldState:0,source:0}),OT=Io(NT),zT=[9,13,27,32],T0=hr&&"CompositionEvent"in window,wc=null;hr&&"documentMode"in document&&(wc=document.documentMode);var HT=hr&&"TextEvent"in window&&!wc,ny=hr&&(!T0||wc&&8<wc&&11>=wc),cS=" ",uS=!1;function ry(t,e){switch(t){case"keyup":return zT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function VT(t,e){switch(t){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(uS=!0,cS);case"textInput":return t=e.data,t===cS&&uS?null:t;default:return null}}function GT(t,e){if(Ni)return t==="compositionend"||!T0&&ry(t,e)?(t=oy(),Vf=_0=Wr=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var qT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fS(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qT[t.type]:e==="textarea"}function iy(t,e,a,o){ki?Zi?Zi.push(o):Zi=[o]:ki=o,e=Rd(e,"onChange"),0<e.length&&(a=new Ud("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var Ec=null,qc=null;function WT(t){aM(t,0)}function Nd(t){var e=bc(t);if(Qv(e))return t}function dS(t,e){if(t==="change")return e}var ly=!1;hr&&(hr?(bf="oninput"in document,bf||(zm=document.createElement("div"),zm.setAttribute("oninput","return;"),bf=typeof zm.oninput=="function"),_f=bf):_f=!1,ly=_f&&(!document.documentMode||9<document.documentMode));var _f,bf,zm;function pS(){Ec&&(Ec.detachEvent("onpropertychange",cy),qc=Ec=null)}function cy(t){if(t.propertyName==="value"&&Nd(qc)){var e=[];iy(e,qc,t,C0(t)),ay(WT,e)}}function XT(t,e,a){t==="focusin"?(pS(),Ec=e,qc=a,Ec.attachEvent("onpropertychange",cy)):t==="focusout"&&pS()}function YT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nd(qc)}function ZT(t,e){if(t==="click")return Nd(e)}function KT(t,e){if(t==="input"||t==="change")return Nd(e)}function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Go=typeof Object.is=="function"?Object.is:JT;function Wc(t,e){if(Go(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!xI.call(e,n)||!Go(t[n],e[n]))return!1}return!0}function yI(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hS(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mS(t,e){var a=hS(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hS(a)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=yI(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=yI(t.document)}return e}function A0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var QT=hr&&"documentMode"in document&&11>=document.documentMode,Oi=null,MI=null,Rc=null,CI=!1;function IS(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;CI||Oi==null||Oi!==yI(o)||(o=Oi,"selectionStart"in o&&A0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rc&&Wc(Rc,o)||(Rc=o,o=Rd(MI,"onSelect"),0<o.length&&(e=new Ud("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Oi)))}function Ps(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var zi={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Hm={},dy={};hr&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function ai(t){if(Hm[t])return Hm[t];if(!zi[t])return t;var e=zi[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in dy)return Hm[t]=e[a];return t}var py=ai("animationend"),hy=ai("animationiteration"),my=ai("animationstart"),jT=ai("transitionrun"),$T=ai("transitionstart"),eA=ai("transitioncancel"),Iy=ai("transitionend"),xy=new Map,_I="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_I.push("scrollEnd");function vn(t,e){xy.set(t,e),ti(e,[t])}var tA=0;function mr(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Sn.identifierPrefix;var a=tA++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function xS(t){if(t==null||typeof t=="string")return t;var e=null,a=tl;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function vr(t,e){return t=xS(t),e=xS(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var ud=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},en=[],Hi=0,w0=0;function Od(){for(var t=Hi,e=w0=Hi=0;e<t;){var a=en[e];en[e++]=null;var o=en[e];en[e++]=null;var n=en[e];en[e++]=null;var r=en[e];if(en[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&gy(a,n,r)}}function zd(t,e,a,o){en[Hi++]=t,en[Hi++]=e,en[Hi++]=a,en[Hi++]=o,w0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function E0(t,e,a,o){return zd(t,e,a,o),fd(t)}function oi(t,e){return zd(t,null,null,e),fd(t)}function gy(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-Ho(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function fd(t){if(50<Hc)throw Hc=0,$f=null,Error(he(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Vi={};function aA(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bo(t,e,a,o){return new aA(t,e,a,o)}function R0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dr(t,e){var a=t.alternate;return a===null?(a=bo(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fy(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function qf(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")R0(o)&&(s=1);else if(typeof o=="string")s=Aw(t,a,Gn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case dI:return t=bo(31,a,e,n),t.elementType=dI,t.lanes=r,t;case Bi:return Vs(a.children,n,r,e);case Uv:s=8,n|=24;break;case cI:return t=bo(12,a,e,n|2),t.elementType=cI,t.lanes=r,t;case uI:return t=bo(13,a,e,n),t.elementType=uI,t.lanes=r,t;case fI:return t=bo(19,a,e,n),t.elementType=fI,t.lanes=r,t;case Gb:case pI:return t=n|32,t=bo(30,a,e,t),t.elementType=pI,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case On:s=10;break e;case kv:s=9;break e;case g0:s=11;break e;case F0:s=14;break e;case Hr:s=16,o=null;break e}s=29,a=Error(he(130,t===null?"null":typeof t,"")),o=null}return e=bo(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function Vs(t,e,a,o){return t=bo(7,t,o,e),t.lanes=a,t}function Vm(t,e,a){return t=bo(6,t,null,e),t.lanes=a,t}function Sy(t){var e=bo(18,null,null,0);return e.stateNode=t,e}function Gm(t,e,a){return e=bo(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var gS=new WeakMap;function nn(t,e){if(typeof t=="object"&&t!==null){var a=gS.get(t);return a!==void 0?a:(e={value:t,source:e,stack:JF(e)},gS.set(t,e),e)}return{value:t,source:e,stack:JF(e)}}var Gi=[],qi=0,dd=null,Xc=0,tn=[],an=0,ss=null,Hn=1,Vn="";function ur(t,e){Gi[qi++]=Xc,Gi[qi++]=dd,dd=t,Xc=e}function vy(t,e,a){tn[an++]=Hn,tn[an++]=Vn,tn[an++]=ss,ss=t;var o=Hn;t=Vn;var n=32-Ho(o)-1;o&=~(1<<n),a+=1;var r=32-Ho(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Hn=1<<32-Ho(e)+n|a<<n|o,Vn=r+t}else Hn=1<<r|a<<n|o,Vn=t}function Hd(t){t.return!==null&&(ur(t,1),vy(t,1,0))}function D0(t){for(;t===dd;)dd=Gi[--qi],Gi[qi]=null,Xc=Gi[--qi],Gi[qi]=null;for(;t===ss;)ss=tn[--an],tn[an]=null,Vn=tn[--an],tn[an]=null,Hn=tn[--an],tn[an]=null}function yy(t,e){tn[an++]=Hn,tn[an++]=Vn,tn[an++]=ss,Hn=e.id,Vn=e.overflow,ss=t}var qa=null,ia=null,Et=!1,Qr=null,rn=!1,bI=Error(he(519));function is(t){var e=Error(he(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yc(nn(e,t)),bI}function FS(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Ka]=t,e[wo]=o,a){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(a=0;a<Qc.length;a++)Dt(Qc[a],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),jv(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),ey(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||nM(e.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),o.onScroll!=null&&Dt("scroll",e),o.onScrollEnd!=null&&Dt("scrollend",e),o.onClick!=null&&(e.onclick=zn),e=!0):e=!1,e||is(t,!0)}function pd(t){for(qa=t.return;qa;)switch(qa.tag){case 5:case 31:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:qa=qa.return}}function wi(t){if(t!==qa)return!1;if(!Et)return pd(t),Et=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||u0(t.type,t.memoizedProps)),a=!a),a&&ia&&is(t),pd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));ia=mv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));ia=mv(t)}else e===27?(e=ia,ds(t.type)?(t=h0,h0=null,ia=t):ia=e):ia=qa?sn(t.stateNode.nextSibling):null;return!0}function Xs(){ia=qa=null,Et=!1}function qm(){var t=Qr;return t!==null&&(Co===null?Co=t:Co.push.apply(Co,t),Qr=null),t}function Yc(t){Qr===null?Qr=[t]:Qr.push(t)}var TI=Xn(null),ni=null,fr=null;function Xr(t,e,a){la(TI,e._currentValue),e._currentValue=a}function pr(t){t._currentValue=TI.current,Qa(TI)}function Wf(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function AI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Wf(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(he(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Wf(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Wf(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Ys(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(he(387));if(s=s.memoizedProps,s!==null){var i=n.type;Go(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===rd.current){if(s=n.alternate,s===null)throw Error(he(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(dl):t=[dl])}n=n.return}return t!==null&&AI(e,t,a,o),e.flags|=262144,t!==null}function hd(t){for(t=t.firstContext;t!==null;){if(!Go(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){ni=t,fr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ja(t){return My(ni,t)}function Tf(t,e){return ni===null&&Zs(t),My(t,e)}function My(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},fr===null){if(t===null)throw Error(he(308));fr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fr=fr.next=e;return a}var oA=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},nA=ka.unstable_scheduleCallback,rA=ka.unstable_NormalPriority,wa={$$typeof:On,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function L0(){return{controller:new oA,data:new Map,refCount:0}}function uu(t){t.refCount--,t.refCount===0&&nA(rA,function(){t.controller.abort()})}function SS(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var Tc=null;function sA(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Dc=null,wI=0,Ks=0,Ki=null;function iA(t,e){if(Dc===null){var a=Dc=[];wI=0,Ks=ix(),Ki={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wI++,e.then(vS,vS),e}function vS(){if(--wI===0&&(Tc=null,Dc!==null)){Ki!==null&&(Ki.status="fulfilled");var t=Dc;Dc=null,Ks=0,Ki=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function lA(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var yS=Ft.S;Ft.S=function(t,e){if(H1=Oo(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&iA(t,e),Tc!==null)for(var a=cl;a!==null;)SS(a,Tc),a=a.next;if(a=t.types,a!==null){for(var o=cl;o!==null;)SS(o,a),o=o.next;if(Ks!==0){o=Tc,o===null&&(o=Tc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}yS!==null&&yS(t,e)};var Gs=Xn(null);function P0(){var t=Gs.current;return t!==null?t:aa.pooledCache}function Xf(t,e){e===null?la(Gs,Gs.current):la(Gs,e.pool)}function Cy(){var t=P0();return t===null?null:{parent:wa._currentValue,pool:t}}var xl=Error(he(460)),B0=Error(he(474)),Vd=Error(he(542)),md={then:function(){}};function MS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _y(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(zn,zn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_S(t),t===void 0&&!("reason"in e)?Error(he(600)):t;default:if(typeof e.status=="string")e.then(zn,zn);else{if(t=aa,t!==null&&100<t.shellSuspendCounter)throw Error(he(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_S(t),t}throw qs=e,xl}}function ks(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qs=a,xl):a}}var qs=null;function CS(){if(qs===null)throw Error(he(459));var t=qs;return qs=null,t}function _S(t){if(t===xl||t===Vd)throw Error(he(483))}var Ji=null,Zc=0;function Af(t){var e=Zc;return Zc+=1,Ji===null&&(Ji=[]),_y(Ji,t,e)}function Nr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function wf(t,e){throw e.$$typeof===Vb?Error(he(525)):(t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function by(t){function e(p,g){if(t){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function a(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function o(p){for(var g=new Map;p!==null;)p.key===null?g.set(p.index,p):g.set(p.key,p),p=p.sibling;return g}function n(p,g){return p=dr(p,g),p.index=0,p.sibling=null,p}function r(p,g,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=134217730,g)):(p.flags|=1048576,g)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,g,y,x){return g===null||g.tag!==6?(g=Vm(y,p.mode,x),g.return=p,g):(g=n(g,y),g.return=p,g)}function l(p,g,y,x){var C=y.type;return C===Bi?(p=f(p,g,y.props.children,x,y.key),Nr(p,y),p):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hr&&ks(C)===g.type)?(g=n(g,y.props),Nr(g,y),g.return=p,g):(g=qf(y.type,y.key,y.props,null,p.mode,x),Nr(g,y),g.return=p,g)}function c(p,g,y,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Gm(y,p.mode,x),g.return=p,g):(g=n(g,y.children||[]),g.return=p,g)}function f(p,g,y,x,C){return g===null||g.tag!==7?(g=Vs(y,p.mode,x,C),g.return=p,g):(g=n(g,y),g.return=p,g)}function h(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Vm(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ff:return y=qf(g.type,g.key,g.props,null,p.mode,y),Nr(y,g),y.return=p,y;case Cc:return g=Gm(g,p.mode,y),g.return=p,g;case Hr:return g=ks(g),h(p,g,y)}if(_c(g)||gc(g))return g=Vs(g,p.mode,y,null),g.return=p,g;if(typeof g.then=="function")return h(p,Af(g),y);if(g.$$typeof===On)return h(p,Tf(p,g),y);wf(p,g)}return null}function u(p,g,y,x){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:i(p,g,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ff:return y.key===C?l(p,g,y,x):null;case Cc:return y.key===C?c(p,g,y,x):null;case Hr:return y=ks(y),u(p,g,y,x)}if(_c(y)||gc(y))return C!==null?null:f(p,g,y,x,null);if(typeof y.then=="function")return u(p,g,Af(y),x);if(y.$$typeof===On)return u(p,g,Tf(p,y),x);wf(p,y)}return null}function d(p,g,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(y)||null,i(g,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ff:return p=p.get(x.key===null?y:x.key)||null,l(g,p,x,C);case Cc:return p=p.get(x.key===null?y:x.key)||null,c(g,p,x,C);case Hr:return x=ks(x),d(p,g,y,x,C)}if(_c(x)||gc(x))return p=p.get(y)||null,f(g,p,x,C,null);if(typeof x.then=="function")return d(p,g,y,Af(x),C);if(x.$$typeof===On)return d(p,g,y,Tf(g,x),C);wf(g,x)}return null}function m(p,g,y,x){for(var C=null,b=null,T=g,v=g=0,A=null;T!==null&&v<y.length;v++){T.index>v?(A=T,T=null):A=T.sibling;var w=u(p,T,y[v],x);if(w===null){T===null&&(T=A);break}t&&T&&w.alternate===null&&e(p,T),g=r(w,g,v),b===null?C=w:b.sibling=w,b=w,T=A}if(v===y.length)return a(p,T),Et&&ur(p,v),C;if(T===null){for(;v<y.length;v++)T=h(p,y[v],x),T!==null&&(g=r(T,g,v),b===null?C=T:b.sibling=T,b=T);return Et&&ur(p,v),C}for(T=o(T);v<y.length;v++)A=d(T,p,v,y[v],x),A!==null&&(t&&(w=A.alternate,w!==null&&T.delete(w.key===null?v:w.key)),g=r(A,g,v),b===null?C=A:b.sibling=A,b=A);return t&&T.forEach(function(L){return e(p,L)}),Et&&ur(p,v),C}function S(p,g,y,x){if(y==null)throw Error(he(151));for(var C=null,b=null,T=g,v=g=0,A=null,w=y.next();T!==null&&!w.done;v++,w=y.next()){T.index>v?(A=T,T=null):A=T.sibling;var L=u(p,T,w.value,x);if(L===null){T===null&&(T=A);break}t&&T&&L.alternate===null&&e(p,T),g=r(L,g,v),b===null?C=L:b.sibling=L,b=L,T=A}if(w.done)return a(p,T),Et&&ur(p,v),C;if(T===null){for(;!w.done;v++,w=y.next())w=h(p,w.value,x),w!==null&&(g=r(w,g,v),b===null?C=w:b.sibling=w,b=w);return Et&&ur(p,v),C}for(T=o(T);!w.done;v++,w=y.next())w=d(T,p,v,w.value,x),w!==null&&(t&&(A=w.alternate,A!==null&&T.delete(A.key===null?v:A.key)),g=r(w,g,v),b===null?C=w:b.sibling=w,b=w);return t&&T.forEach(function(X){return e(p,X)}),Et&&ur(p,v),C}function I(p,g,y,x){if(typeof y=="object"&&y!==null&&y.type===Bi&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ff:e:{for(var C=y.key;g!==null;){if(g.key===C){if(C=y.type,C===Bi){if(g.tag===7){a(p,g.sibling),x=n(g,y.props.children),Nr(x,y),x.return=p,p=x;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hr&&ks(C)===g.type){a(p,g.sibling),x=n(g,y.props),Nr(x,y),x.return=p,p=x;break e}a(p,g);break}else e(p,g);g=g.sibling}y.type===Bi?(x=Vs(y.props.children,p.mode,x,y.key),Nr(x,y),x.return=p,p=x):(x=qf(y.type,y.key,y.props,null,p.mode,x),Nr(x,y),x.return=p,p=x)}return s(p);case Cc:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){a(p,g.sibling),x=n(g,y.children||[]),x.return=p,p=x;break e}else{a(p,g);break}else e(p,g);g=g.sibling}x=Gm(y,p.mode,x),x.return=p,p=x}return s(p);case Hr:return y=ks(y),I(p,g,y,x)}if(_c(y))return m(p,g,y,x);if(gc(y)){if(C=gc(y),typeof C!="function")throw Error(he(150));return y=C.call(y),S(p,g,y,x)}if(typeof y.then=="function")return I(p,g,Af(y),x);if(y.$$typeof===On)return I(p,g,Tf(p,y),x);wf(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(a(p,g.sibling),x=n(g,y),x.return=p,p=x):(a(p,g),x=Vm(y,p.mode,x),x.return=p,p=x),s(p)):a(p,g)}return function(p,g,y,x){try{Zc=0;var C=I(p,g,y,x);return Ji=null,C}catch(T){if(T===xl||T===Vd)throw T;var b=bo(29,T,null,p.mode);return b.lanes=x,b.return=p,b}finally{}}}var Js=by(!0),Ty=by(!1),Vr=!1;function U0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function EI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function jr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $r(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Gt&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=fd(t),gy(t,null,a),e}return zd(t,o,e,a),fd(t)}function Lc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,qv(t,a)}}function Wm(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var RI=!1;function Pc(){if(RI){var t=Ki;if(t!==null)throw t}}function Bc(t,e,a,o){RI=!1;var n=t.updateQueue;Vr=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==s&&(i===null?f.firstBaseUpdate=c:i.next=c,f.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,f=c=l=null,i=r;do{var u=i.lane&-536870913,d=u!==i.lane;if(d?(Bt&u)===u:(o&u)===u){u!==0&&u===Ks&&(RI=!0),f!==null&&(f=f.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var m=t,S=i;u=e;var I=a;switch(S.tag){case 1:if(m=S.payload,typeof m=="function"){h=m.call(I,h,u);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,u=typeof m=="function"?m.call(I,h,u):m,u==null)break e;h=oa({},h,u);break e;case 2:Vr=!0}}u=i.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[u]:d.push(u))}else d={lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(c=f=d,l=h):f=f.next=d,s|=u;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);f===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=f,r===null&&(n.shared.lanes=0),us|=s,t.lanes=s,t.memoizedState=h}}function Ay(t,e){if(typeof t!="function")throw Error(he(191,t));t.call(e)}function wy(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ay(a[t],e)}var ls=Xn(null),Id=Xn(0);function bS(t,e){t=Fr,la(Id,t),la(ls,e),Fr=t|e.baseLanes}function DI(){la(Id,Fr),la(ls,ls.current)}function k0(){Fr=Id.current,Qa(ls),Qa(Id)}var eo=Xn(null),no=null;function es(t){var e=t.alternate;la(ja,ja.current&1),la(eo,t),no===null&&(e===null||ls.current!==null||e.memoizedState!==null)&&(no=t)}function LI(t){la(ja,ja.current),la(eo,t),no===null&&(no=t)}function Ey(t){t.tag===22?(la(ja,ja.current),la(eo,t),no===null&&(no=t)):ts()}function ts(){la(ja,ja.current),la(eo,eo.current)}function Uo(t){Qa(eo),no===t&&(no=null),Qa(ja)}var ja=Xn(0);function Kc(t,e){la(eo,eo.current),la(ja,e)}function N0(t){Qa(ja),Qa(eo),no===t&&(no=null)}function xd(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||p0(a)||fx(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ir=0,bt=null,$t=null,Aa=null,gd=!1,Qi=!1,Qs=!1,Fd=0,Jc=0,ji=null,cA=0;function Fa(){throw Error(he(321))}function O0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Go(t[a],e[a]))return!1;return!0}function z0(t,e,a,o,n,r){return Ir=r,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ft.H=t===null||t.memoizedState===null?i1:l1,Qs=!1,r=a(o,n),Qs=!1,Qi&&(r=Dy(e,a,o,n)),Ry(t),r}function Ry(t){Ft.H=Sd;var e=$t!==null&&$t.next!==null;if(Ir=0,Aa=$t=bt=null,gd=!1,Jc=0,ji=null,e)throw Error(he(300));t===null||Ea||(t=t.dependencies,t!==null&&hd(t)&&(Ea=!0))}function Dy(t,e,a,o){bt=t;var n=0;do{if(Qi&&(ji=null),Jc=0,Qi=!1,25<=n)throw Error(he(301));if(n+=1,Aa=$t=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ft.H=xA,r=e(a,o)}while(Qi);return r}function uA(){var t=Ft.H,e=t.useState()[0];return e=typeof e.then=="function"?fu(e):e,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(bt.flags|=1024),e}function H0(){var t=Fd!==0;return Fd=0,t}function V0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function G0(t){if(gd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gd=!1}Ir=0,Aa=$t=bt=null,Qi=!1,Jc=Fd=0,ji=null}function mo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Aa===null?bt.memoizedState=Aa=t:Aa=Aa.next=t,Aa}function Ma(){if($t===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=Aa===null?bt.memoizedState:Aa.next;if(e!==null)Aa=e,$t=t;else{if(t===null)throw bt.alternate===null?Error(he(467)):Error(he(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Aa===null?bt.memoizedState=Aa=t:Aa=Aa.next=t}return Aa}function Gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fu(t){var e=Jc;return Jc+=1,ji===null&&(ji=[]),t=_y(ji,t,e),e=bt,(Aa===null?e.memoizedState:Aa.next)===null&&(e=e.alternate,Ft.H=e===null||e.memoizedState===null?i1:l1),t}function qd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fu(t);if(t.$$typeof===Wb)return;if(t.$$typeof===On)return Ja(t)}throw Error(he(438,String(t)))}function q0(t){var e=null,a=bt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Gd(),bt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=qb;return e.index++,a}function xr(t,e){return typeof e=="function"?e(t):e}function Yf(t){var e=Ma();return W0(e,$t,t)}function W0(t,e,a){var o=t.queue;if(o===null)throw Error(he(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,f=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Bt&h)===h:(Ir&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Ks&&(f=!0);else if((Ir&u)===u){c=c.next,u===Ks&&(f=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,bt.lanes|=u,us|=u;h=c.action,Qs&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=u,s=r):l=l.next=u,bt.lanes|=h,us|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!Go(r,t.memoizedState)&&(Ea=!0,f&&(a=Ki,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Xm(t){var e=Ma(),a=e.queue;if(a===null)throw Error(he(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);Go(r,e.memoizedState)||(Ea=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function Ly(t,e,a){var o=bt,n=Ma(),r=Et;if(r){if(a===void 0)throw Error(he(407));a=a()}else a=e();var s=!Go(($t||n).memoizedState,a);if(s&&(n.memoizedState=a,Ea=!0),n=n.queue,X0(Uy.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||Aa!==null&&(Aa.memoizedState.tag&1)!==0,rl(t?9:8,{destroy:void 0},By.bind(null,o,n,a,e),null),t){if(o.flags|=2048,aa===null)throw Error(he(349));r||Ir&127||Py(o,e,a)}return a}function Py(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=bt.updateQueue,e===null?(e=Gd(),bt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function By(t,e,a,o){e.value=a,e.getSnapshot=o,ky(e)&&Ny(t)}function Uy(t,e,a){return a(function(){ky(e)&&Ny(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Go(t,a)}catch{return!0}}function Ny(t){var e=oi(t,2);e!==null&&To(e,t,2)}function PI(t){var e=mo();if(typeof t=="function"){var a=t;if(t=a(),Qs){qr(!0);try{a()}finally{qr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:t},e}function Oy(t,e,a,o){return t.baseState=a,W0(t,$t,typeof o=="function"?o:xr)}function fA(t,e,a,o,n){if(Xd(t))throw Error(he(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ft.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,zy(e,r)):(r.next=a.next,e.pending=a.next=r)}}function zy(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=Ft.T,s={};s.types=r!==null?r.types:null,Ft.T=s;try{var i=a(n,o),l=Ft.S;l!==null&&l(s,i),TS(t,e,i)}catch(c){BI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Ft.T=r}}else try{r=a(n,o),TS(t,e,r)}catch(c){BI(t,e,c)}}function TS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){AS(t,e,o)},function(o){return BI(t,e,o)}):AS(t,e,a)}function AS(t,e,a){e.status="fulfilled",e.value=a,Hy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,zy(t,a)))}function BI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,Hy(e),e=e.next;while(e!==o)}t.action=null}function Hy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Vy(t,e){return e}function wS(t,e){if(Et){var a=aa.formState;if(a!==null){e:{var o=bt;if(Et){if(ia){t:{for(var n=ia,r=rn;n.nodeType!==8;){if(!r){n=null;break t}if(n=sn(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ia=sn(n.nextSibling),o=n.data==="F!";break e}}is(o)}o=!1}o&&(e=a[0])}}return a=mo(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vy,lastRenderedState:e},a.queue=o,a=n1.bind(null,bt,o),o.dispatch=a,o=PI(!1),r=J0.bind(null,bt,!1,o.queue),o=mo(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=fA.bind(null,bt,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function ES(t){var e=Ma();return Gy(e,$t,t)}function Gy(t,e,a){if(e=W0(t,e,Vy)[0],t=Yf(xr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=fu(e)}catch(s){throw s===xl?Vd:s}else o=e;e=Ma();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(bt.flags|=2048,rl(9,{destroy:void 0},dA.bind(null,n,a),null)),[o,r,t]}function dA(t,e){t.action=e}function RS(t){var e=Ma(),a=$t;if(a!==null)return Gy(e,a,t);Ma(),e=e.memoizedState,a=Ma();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function rl(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=bt.updateQueue,e===null&&(e=Gd(),bt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function qy(){return Ma().memoizedState}function Zf(t,e,a,o){var n=mo();bt.flags|=t,n.memoizedState=rl(1|e,{destroy:void 0},a,o===void 0?null:o)}function Wd(t,e,a,o){var n=Ma();o=o===void 0?null:o;var r=n.memoizedState.inst;$t!==null&&o!==null&&O0(o,$t.memoizedState.deps)?n.memoizedState=rl(e,r,a,o):(bt.flags|=t,n.memoizedState=rl(1|e,r,a,o))}function DS(t,e){Zf(8390656,8,t,e)}function X0(t,e){Wd(2048,8,t,e)}function pA(t){bt.flags|=4;var e=bt.updateQueue;if(e===null)e=Gd(),bt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Wy(t){var e=Ma().memoizedState;return pA({ref:e,nextImpl:t}),function(){if(Gt&2)throw Error(he(440));return e.impl.apply(void 0,arguments)}}function Xy(t,e){return Wd(4,2,t,e)}function Yy(t,e){return Wd(4,4,t,e)}function Zy(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ky(t,e,a){a=a!=null?a.concat([t]):null,Wd(4,4,Zy.bind(null,e,t),a)}function Y0(){}function Jy(t,e){var a=Ma();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&O0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function Qy(t,e){var a=Ma();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&O0(e,o[1]))return o[0];if(o=t(),Qs){qr(!0);try{t()}finally{qr(!1)}}return a.memoizedState=[o,e],o}function Z0(t,e,a){return a===void 0||Ir&1073741824&&!(Bt&261930)?t.memoizedState=e:(t.memoizedState=a,t=G1(),bt.lanes|=t,us|=t,a)}function jy(t,e,a,o){return Go(a,e)?a:ls.current!==null?(t=Z0(t,a,o),Go(t,e)||(Ea=!0),t):!(Ir&106)||Ir&1073741824&&!(Bt&261930)?(Ea=!0,t.memoizedState=a):(t=G1(),bt.lanes|=t,us|=t,e)}function $y(t,e,a,o,n){var r=qt.p;qt.p=r!==0&&8>r?r:8;var s=Ft.T,i={};i.types=s!==null?s.types:null,Ft.T=i,J0(t,!1,e,a);try{var l=n(),c=Ft.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=lA(l,o);Uc(t,e,f,Vo(t))}else Uc(t,e,o,Vo(t))}catch(h){Uc(t,e,{then:function(){},status:"rejected",reason:h},Vo())}finally{qt.p=r,s!==null&&i.types!==null&&(s.types=i.types),Ft.T=s}}function hA(){}function UI(t,e,a,o){if(t.tag!==5)throw Error(he(476));var n=e1(t).queue;$y(t,n,e,Hs,a===null?hA:function(){return t1(t),a(o)})}function e1(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Hs,baseState:Hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:Hs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function t1(t){var e=e1(t);e.next===null&&(e=t.alternate.memoizedState),Uc(t,e.next.queue,{},Vo())}function K0(){return Ja(dl)}function a1(){return Ma().memoizedState}function o1(){return Ma().memoizedState}function mA(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Vo();t=jr(a);var o=$r(e,t,a);o!==null&&(To(o,e,a),Lc(o,e,a)),e={cache:L0()},t.payload=e;return}e=e.return}}function IA(t,e,a){var o=Vo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xd(t)?r1(e,a):(a=E0(t,e,a,o),a!==null&&(To(a,t,o),s1(a,e,o)))}function n1(t,e,a){var o=Vo();Uc(t,e,a,o)}function Uc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xd(t))r1(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,Go(i,s))return zd(t,e,n,0),aa===null&&Od(),!1}catch{}finally{}if(a=E0(t,e,n,o),a!==null)return To(a,t,o),s1(a,e,o),!0}return!1}function J0(t,e,a,o){if(o={lane:2,revertLane:ix(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xd(t)){if(e)throw Error(he(479))}else e=E0(t,a,o,2),e!==null&&To(e,t,2)}function Xd(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function r1(t,e){Qi=gd=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function s1(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,qv(t,a)}}var Sd={readContext:Ja,use:qd,useCallback:Fa,useContext:Fa,useEffect:Fa,useImperativeHandle:Fa,useLayoutEffect:Fa,useInsertionEffect:Fa,useMemo:Fa,useReducer:Fa,useRef:Fa,useState:Fa,useDebugValue:Fa,useDeferredValue:Fa,useTransition:Fa,useSyncExternalStore:Fa,useId:Fa,useHostTransitionStatus:Fa,useFormState:Fa,useActionState:Fa,useOptimistic:Fa,useMemoCache:Fa,useCacheRefresh:Fa,useEffectEvent:Fa},i1={readContext:Ja,use:qd,useCallback:function(t,e){return mo().memoizedState=[t,e===void 0?null:e],t},useContext:Ja,useEffect:DS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Zf(4194308,4,Zy.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Zf(4194308,4,t,e)},useInsertionEffect:function(t,e){Zf(4,2,t,e)},useMemo:function(t,e){var a=mo();e=e===void 0?null:e;var o=t();if(Qs){qr(!0);try{t()}finally{qr(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=mo();if(a!==void 0){var n=a(e);if(Qs){qr(!0);try{a(e)}finally{qr(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=IA.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var e=mo();return t={current:t},e.memoizedState=t},useState:function(t){t=PI(t);var e=t.queue,a=n1.bind(null,bt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Y0,useDeferredValue:function(t,e){var a=mo();return Z0(a,t,e)},useTransition:function(){var t=PI(!1);return t=$y.bind(null,bt,t.queue,!0,!1),mo().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=bt,n=mo();if(Et){if(a===void 0)throw Error(he(407));a=a()}else{if(a=e(),aa===null)throw Error(he(349));Bt&127||Py(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,DS(Uy.bind(null,o,r,t),[t]),o.flags|=2048,rl(9,{destroy:void 0},By.bind(null,o,r,a,e),null),a},useId:function(){var t=mo(),e=aa.identifierPrefix;if(Et){var a=Vn,o=Hn;a=(o&~(1<<32-Ho(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Fd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=cA++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:K0,useFormState:wS,useActionState:wS,useOptimistic:function(t){var e=mo();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=J0.bind(null,bt,!0,a),a.dispatch=e,[t,e]},useMemoCache:q0,useCacheRefresh:function(){return mo().memoizedState=mA.bind(null,bt)},useEffectEvent:function(t){var e=mo(),a={impl:t};return e.memoizedState=a,function(){if(Gt&2)throw Error(he(440));return a.impl.apply(void 0,arguments)}}},l1={readContext:Ja,use:qd,useCallback:Jy,useContext:Ja,useEffect:X0,useImperativeHandle:Ky,useInsertionEffect:Xy,useLayoutEffect:Yy,useMemo:Qy,useReducer:Yf,useRef:qy,useState:function(){return Yf(xr)},useDebugValue:Y0,useDeferredValue:function(t,e){var a=Ma();return jy(a,$t.memoizedState,t,e)},useTransition:function(){var t=Yf(xr)[0],e=Ma().memoizedState;return[typeof t=="boolean"?t:fu(t),e]},useSyncExternalStore:Ly,useId:a1,useHostTransitionStatus:K0,useFormState:ES,useActionState:ES,useOptimistic:function(t,e){var a=Ma();return Oy(a,$t,t,e)},useMemoCache:q0,useCacheRefresh:o1,useEffectEvent:Wy},xA={readContext:Ja,use:qd,useCallback:Jy,useContext:Ja,useEffect:X0,useImperativeHandle:Ky,useInsertionEffect:Xy,useLayoutEffect:Yy,useMemo:Qy,useReducer:Xm,useRef:qy,useState:function(){return Xm(xr)},useDebugValue:Y0,useDeferredValue:function(t,e){var a=Ma();return $t===null?Z0(a,t,e):jy(a,$t.memoizedState,t,e)},useTransition:function(){var t=Xm(xr)[0],e=Ma().memoizedState;return[typeof t=="boolean"?t:fu(t),e]},useSyncExternalStore:Ly,useId:a1,useHostTransitionStatus:K0,useFormState:RS,useActionState:RS,useOptimistic:function(t,e){var a=Ma();return $t!==null?Oy(a,$t,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:q0,useCacheRefresh:o1,useEffectEvent:Wy};function Ym(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:oa({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=Vo(),n=jr(o);n.payload=e,a!=null&&(n.callback=a),e=$r(t,n,o),e!==null&&(To(e,t,o),Lc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=Vo(),n=jr(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=$r(t,n,o),e!==null&&(To(e,t,o),Lc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Vo(),o=jr(a);o.tag=2,e!=null&&(o.callback=e),e=$r(t,o,a),e!==null&&(To(e,t,a),Lc(e,t,a))}};function LS(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!Wc(a,o)||!Wc(n,r):!0}function PS(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&kI.enqueueReplaceState(e,e.state,null)}function js(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=oa({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function c1(t){ud(t)}function u1(t){console.error(t)}function f1(t){ud(t)}function vd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function BS(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function NI(t,e,a){return a=jr(a),a.tag=3,a.payload={element:null},a.callback=function(){vd(t,e)},a}function d1(t){return t=jr(t),t.tag=3,t}function p1(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){BS(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){BS(e,a,o),typeof n!="function"&&(as===null?as=new Set([this]):as.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function gA(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Ys(e,a,n,!0),a=eo.current,a!==null){switch(a.tag){case 31:case 13:case 19:return no===null?wd():a.alternate===null&&Sa===0&&(Sa=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===md?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),eI(t,o,n)),!1;case 22:return a.flags|=65536,o===md?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),eI(t,o,n)),!1}throw Error(he(435,a.tag))}return eI(t,o,n),wd(),!1}if(Et)return e=eo.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==bI&&(t=Error(he(422),{cause:o}),Yc(nn(t,a)))):(o!==bI&&(e=Error(he(423),{cause:o}),Yc(nn(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=nn(o,a),n=NI(t.stateNode,o,n),Wm(t,n),Sa!==4&&(Sa=2)),!1;var r=Error(he(520),{cause:o});if(r=nn(r,a),zc===null?zc=[r]:zc.push(r),Sa!==4&&(Sa=2),e===null)return!0;o=nn(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=NI(a.stateNode,o,t),Wm(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(as===null||!as.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=d1(n),p1(n,t,a,o),Wm(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Q0=Error(he(461)),Ea=!1;function Ba(t,e,a,o){e.child=t===null?Ty(e,null,a,o):Js(e,t.child,a,o)}function US(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return Zs(e),o=z0(t,e,a,s,r,n),i=H0(),t!==null&&!Ea?(V0(t,e,n),gr(t,e,n)):(Et&&i&&Hd(e),e.flags|=1,Ba(t,e,o,n),e.child)}function kS(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!R0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,h1(t,e,r,o,n)):(t=qf(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!$0(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Wc,a(s,o)&&t.ref===e.ref)return gr(t,e,n)}return e.flags|=1,t=dr(r,o),t.ref=e.ref,t.return=e,e.child=t}function h1(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(Wc(r,o)&&t.ref===e.ref)if(Ea=!1,e.pendingProps=o=r,$0(t,n))t.flags&131072&&(Ea=!0);else return e.lanes=t.lanes,gr(t,e,n)}return OI(t,e,a,o,n)}function m1(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return NS(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xf(e,r!==null?r.cachePool:null),r!==null?bS(e,r):DI(),Ey(e);else return o=e.lanes=536870912,NS(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Xf(e,r.cachePool),bS(e,r),ts(),e.memoizedState=null):(t!==null&&Xf(e,null),DI(),ts());return Ba(t,e,n,a),e.child}function kc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function NS(t,e,a,o,n){var r=P0();return r=r===null?null:{parent:wa._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&Xf(e,null),DI(),Ey(e),t!==null&&Ys(t,e,o,!0),e.childLanes=n,null}function Kf(t,e){return e=Yd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function OS(t,e,a){return Js(e,t.child,null,a),t=Kf(e,e.pendingProps),t.flags|=2,Uo(e),e.memoizedState=null,t}function FA(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Kf(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},kc(null,t);if(LI(e),(t=ia)?(t=mM(t,rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ss!==null?{id:Hn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=Sy(t),a.return=e,e.child=a,qa=e,ia=null)):t=null,t===null)throw is(e);return e.lanes=536870912,null}return Kf(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(LI(e),n)if(e.flags&256)e.flags&=-257,e=OS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(he(558));else if(Ea||Ys(t,e,a,!1),n=(a&t.childLanes)!==0,Ea||n){if(ls.current===null){if(o=aa,o!==null&&(s=Wv(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,oi(t,s),To(o,t,s),Q0;wd()}e=OS(t,e,a)}else t=r.treeContext,ia=sn(s.nextSibling),qa=e,Et=!0,Qr=null,rn=!1,t!==null&&yy(e,t),e=Kf(e,o),e.flags|=134221824;return e}return t=dr(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ri(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(he(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function OI(t,e,a,o,n){return Zs(e),a=z0(t,e,a,o,void 0,n),o=H0(),t!==null&&!Ea?(V0(t,e,n),gr(t,e,n)):(Et&&o&&Hd(e),e.flags|=1,Ba(t,e,a,n),e.child)}function zS(t,e,a,o,n,r){return Zs(e),e.updateQueue=null,a=Dy(e,o,a,n),Ry(t),o=H0(),t!==null&&!Ea?(V0(t,e,r),gr(t,e,r)):(Et&&o&&Hd(e),e.flags|=1,Ba(t,e,a,r),e.child)}function HS(t,e,a,o,n){if(Zs(e),e.stateNode===null){var r=Vi,s=a.contextType;typeof s=="object"&&s!==null&&(r=Ja(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=kI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},U0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Ja(s):Vi,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ym(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&kI.enqueueReplaceState(r,r.state,null),Bc(e,o,r,n),Pc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=js(a,i);r.props=l;var c=r.context,f=a.contextType;s=Vi,typeof f=="object"&&f!==null&&(s=Ja(f));var h=a.getDerivedStateFromProps;f=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&PS(e,r,o,s),Vr=!1;var u=e.memoizedState;r.state=u,Bc(e,o,r,n),Pc(),c=e.memoizedState,i||u!==c||Vr?(typeof h=="function"&&(Ym(e,a,h,o),c=e.memoizedState),(l=Vr||LS(e,a,l,o,u,c,s))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,EI(t,e),s=e.memoizedProps,f=js(a,s),r.props=f,h=e.pendingProps,u=r.context,c=a.contextType,l=Vi,typeof c=="object"&&c!==null&&(l=Ja(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||u!==l)&&PS(e,r,o,l),Vr=!1,u=e.memoizedState,r.state=u,Bc(e,o,r,n),Pc();var d=e.memoizedState;s!==h||u!==d||Vr||t!==null&&t.dependencies!==null&&hd(t.dependencies)?(typeof i=="function"&&(Ym(e,a,i,o),d=e.memoizedState),(f=Vr||LS(e,a,f,o,u,d,l)||t!==null&&t.dependencies!==null&&hd(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=f):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,Ri(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,n),e.child=Js(e,null,a,n)):Ba(t,e,a,n),e.memoizedState=r.state,t=e.child):t=gr(t,e,n),t}function VS(t,e,a,o){return Xs(),e.flags|=256,Ba(t,e,a,o),e.child}var zI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function HI(t){return{baseLanes:t,cachePool:Cy()}}function VI(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=No),t}function I1(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(ja.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Et){if(n?es(e):ts(),(t=ia)?(t=mM(t,rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ss!==null?{id:Hn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=Sy(t),a.return=e,e.child=a,qa=e,ia=null)):t=null,t===null)throw is(e);return fx(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(ts(),n=e.mode,r=Yd({mode:"hidden",children:r},n),o=Vs(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=HI(a),o.childLanes=VI(t,s,a),e.memoizedState=zI,kc(null,o)):(es(e),j0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return SA(t,e,r,s,o,l,i,a)}return n?(ts(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=dr(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=dr(l,n):(n=Vs(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,kc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=HI(a):(r=n.cachePool,r!==null?(i=wa._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=Cy(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=VI(t,s,a),e.memoizedState=zI,kc(t.child,o)):(es(e),a=t.child,t=a.sibling,a=dr(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function j0(t,e){return e=Yd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Yd(t,e){return t=bo(22,t,null,e),t.lanes=0,t}function Ef(t,e,a){return Js(e,t.child,null,a),t=j0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SA(t,e,a,o,n,r,s,i){if(a)return e.flags&256?(es(e),e.flags&=-257,Ef(t,e,i)):e.memoizedState!==null?(ts(),e.child=t.child,e.flags|=128,null):(ts(),r=n.fallback,s=e.mode,n=Yd({mode:"visible",children:n.children},s),r=Vs(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Js(e,t.child,null,i),n=e.child,n.memoizedState=HI(i),n.childLanes=VI(t,o,i),e.memoizedState=zI,kc(null,n));if(es(e),fx(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(he(419)),n.stack="",n.digest=o,Yc({value:n,source:null,stack:null})),Ef(t,e,i)}if(Ea||Ys(t,e,i,!1),o=(i&t.childLanes)!==0,Ea||o){if(ls.current!==null)return Ef(t,e,i);if(o=aa,o!==null&&(n=Wv(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,oi(t,n),To(o,t,n),Q0;return p0(r)||wd(),Ef(t,e,i)}return p0(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,ia=sn(r.nextSibling),qa=e,Et=!0,Qr=null,rn=!1,t!==null&&yy(e,t),e=j0(e,n.children),e.flags|=134221824,e)}function GS(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Wf(t.return,e,a)}function qS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&xd(a)===null&&(e=t),t=t.sibling}return e}function Rf(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function Zm(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function GI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=ja.current;if(e.flags&128)return Kc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Kc(e,s),n==="backwards"&&t!==null?(Zm(t),Ba(t,e,o,a),Zm(t)):Ba(t,e,o,a),o=Et?Xc:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&GS(t,a,e);else if(t.tag===19)GS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=qS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,Zm(e)),Rf(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&xd(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Rf(e,!0,a,null,r,o);break;case"together":Rf(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=qS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Rf(e,!1,n,a,r,o)}return e.child}function WS(t,e,a){var o=e.pendingProps;return Xr(e,e.type,o.value),Ba(t,e,o.children,a),e.child}function gr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(a&e.childLanes))if(t!==null){if(Ys(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,a=dr(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=dr(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function $0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&hd(t)))}function vA(t,e,a){switch(e.tag){case 3:sd(e,e.stateNode.containerInfo),Xr(e,wa,t.memoizedState.cache),Xs();break;case 27:case 5:II(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:Xr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,LI(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return es(e),e.flags|=128,null;o=Ys(t,e,a,!1);var n=e.child.childLanes;return o||a&n?I1(t,e,a):(es(e),t=gr(t,e,a),t!==null?t.sibling:null)}es(e);break;case 19:if(e.flags&128)return GI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(Ys(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return GI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Kc(e,ja.current),o)break;return null;case 22:return e.lanes=0,m1(t,e,a,e.pendingProps);case 24:Xr(e,wa,t.memoizedState.cache)}return gr(t,e,a)}function x1(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ea=!0;else{if(!$0(t,a)&&!(e.flags&128))return Ea=!1,vA(t,e,a);Ea=!!(t.flags&131072)}else Ea=!1,Et&&e.flags&1048576&&vy(e,Xc,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=ks(e.elementType),e.type=t,typeof t=="function")R0(t)?(o=js(t,o),e.tag=1,e=HS(null,e,t,o,a)):(e.tag=0,e=OI(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===g0){e.tag=11,e=US(null,e,t,o,a);break e}else if(n===F0){e.tag=14,e=kS(null,e,t,o,a);break e}else if(n===On){e.tag=10,e.type=t,e=WS(null,e,a);break e}}throw e=hI(t)||t,Error(he(306,e,""))}}return e;case 0:return OI(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=js(o,e.pendingProps),HS(t,e,o,n,a);case 3:e:{if(sd(e,e.stateNode.containerInfo),t===null)throw Error(he(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,EI(t,e),Bc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Xr(e,wa,o),o!==r.cache&&AI(e,[wa],a,!0),Pc(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=VS(t,e,o,a);break e}else if(o!==n){n=nn(Error(he(424)),e),Yc(n),e=VS(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ia=sn(t.firstChild),qa=e,Et=!0,Qr=null,rn=!0,a=Ty(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Xs(),o===n){e=gr(t,e,a);break e}Ba(t,e,o,a)}e=e.child}return e;case 26:return Ri(t,e),t===null?(a=gv(e.type,null,e.pendingProps,null))?e.memoizedState=a:Et||(e.stateNode=sM(e.type,e.pendingProps,Jr.current,e)):e.memoizedState=gv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return II(e),t===null&&Et&&(o=e.stateNode=IM(e.type,e.pendingProps,Jr.current),qa=e,rn=!0,n=ia,ds(e.type)?(h0=n,ia=sn(o.firstChild)):ia=n),Ba(t,e,e.pendingProps.children,a),Ri(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Et&&((n=o=ia)&&(o=pw(o,e.type,e.pendingProps,rn),o!==null?(e.stateNode=o,qa=e,ia=sn(o.firstChild),rn=!1,n=!0):n=!1),n||is(e)),II(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,u0(n,r)?o=null:s!==null&&u0(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=z0(t,e,uA,null,null,a),dl._currentValue=n),Ri(t,e),Ba(t,e,o,a),e.child;case 6:return t===null&&Et&&((t=a=ia)&&(a=hw(a,e.pendingProps,rn),a!==null?(e.stateNode=a,qa=e,ia=null,t=!0):t=!1),t||is(e)),null;case 13:return I1(t,e,a);case 4:return sd(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Js(e,null,o,a):Ba(t,e,o,a),e.child;case 11:return US(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,Ri(t,e),Ba(t,e,o,a),e.child;case 8:return Ba(t,e,e.pendingProps.children,a),e.child;case 12:return Ba(t,e,e.pendingProps.children,a),e.child;case 10:return WS(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,Zs(e),n=Ja(n),o=o(n),e.flags|=1,Ba(t,e,o,a),e.child;case 14:return kS(t,e,e.type,e.pendingProps,a);case 15:return h1(t,e,e.type,e.pendingProps,a);case 19:return GI(t,e,a);case 31:return FA(t,e,a);case 22:return m1(t,e,a,e.pendingProps);case 24:return Zs(e),o=Ja(wa),t===null?(n=P0(),n===null&&(n=aa,r=L0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},U0(e),Xr(e,wa,n)):(t.lanes&a&&(EI(t,e),Bc(e,null,null,a),Pc()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Xr(e,wa,o)):(o=r.cache,Xr(e,wa,o),o!==n.cache&&AI(e,[wa],a,!0))),Ba(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:Et&&Hd(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:Ri(t,e),Ba(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(he(156,e.tag))}function cr(t){t.flags|=4}function Km(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?vv(e,o):vv(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(X1())t.flags|=8192;else throw qs=md,B0}else t.flags&=-16777217}function XS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!SM(e))if(X1())t.flags|=8192;else throw qs=md,B0}function Df(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vv():536870912,t.lanes|=e,sl|=e)}function Sc(t,e){if(!Et)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function sa(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function yA(t,e,a){var o=e.pendingProps;switch(D0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sa(e),null;case 1:return sa(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),pr(wa),al(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wi(e)?cr(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qm())),sa(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(cr(e),r!==null?(sa(e),XS(e,r)):(sa(e),Km(e,n,null,o,a))):r?r!==t.memoizedState?(cr(e),sa(e),XS(e,r)):(sa(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&cr(e),sa(e),Km(e,n,t,o,a)),null;case 27:if(id(e),a=Jr.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(!o){if(e.stateNode===null)throw Error(he(166));return sa(e),e.subtreeFlags&=-33554433,null}t=Gn.current,wi(e)?FS(e,t):(t=IM(n,o,a),e.stateNode=t,cr(e))}return sa(e),e.subtreeFlags&=-33554433,null;case 5:if(id(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(!o){if(e.stateNode===null)throw Error(he(166));return sa(e),e.subtreeFlags&=-33554433,null}if(r=Gn.current,wi(e))FS(e,r);else{var s=$c(Jr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Ka]=e,r[wo]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch($a(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&cr(e)}}return sa(e),e.subtreeFlags&=-33554433,Km(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&cr(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(he(166));if(t=Jr.current,wi(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=qa,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Ka]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||nM(t.nodeValue,a)),t||is(e,!0)}else t=$c(t).createTextNode(o),t[Ka]=e,e.stateNode=t}return sa(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=wi(e),a!==null){if(t===null){if(!o)throw Error(he(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(557));t[Ka]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),t=!1}else a=qm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Uo(e),e):(Uo(e),null);if(e.flags&128)throw Error(he(558))}return sa(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=wi(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(he(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(he(317));n[Ka]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sa(e),n=!1}else n=qm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Uo(e),e):(Uo(e),null)}return Uo(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Df(e,e.updateQueue),sa(e),null);case 4:return al(),t===null&&lx(e.stateNode.containerInfo),e.flags|=67108864,sa(e),null;case 10:return pr(e.type),sa(e),null;case 19:if(N0(e),o=e.memoizedState,o===null)return sa(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)Sc(o,!1);else{if(Sa!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=xd(t),r!==null){for(e.flags|=128,Sc(o,!1),t=r.updateQueue,e.updateQueue=t,Df(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Fy(a,t),a=a.sibling;return Kc(e,ja.current&1|2),Et&&ur(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&Oo()>Td&&(e.flags|=128,n=!0,Sc(o,!1),e.lanes=4194304)}else{if(!n)if(t=xd(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Df(e,t),Sc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!Et)return sa(e),null}else 2*Oo()-o.renderingStartTime>Td&&a!==536870912&&(e.flags|=128,n=!0,Sc(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oo(),t.sibling=null,r=ja.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Et?Kc(e,r):(a=r,la(eo,e),la(ja,a),no===null&&(no=e)),Et&&ur(e,o.treeForkCount),t}return sa(e),null;case 22:case 23:return Uo(e),k0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(sa(e),e.subtreeFlags&6&&(e.flags|=8192)):sa(e),a=e.updateQueue,a!==null&&Df(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&Qa(Gs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),pr(wa),sa(e),null;case 25:return null;case 30:return e.flags|=33554432,sa(e),null}throw Error(he(156,e.tag))}function MA(t,e){switch(D0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(wa),al(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return id(e),null;case 31:if(e.memoizedState!==null){if(Uo(e),e.alternate===null)throw Error(he(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Uo(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return N0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return al(),null;case 10:return pr(e.type),null;case 22:case 23:return Uo(e),k0(),t!==null&&Qa(Gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pr(wa),null;case 25:return null;default:return null}}function g1(t,e){switch(D0(e),e.tag){case 3:pr(wa),al();break;case 26:case 27:case 5:id(e);break;case 4:al();break;case 31:e.memoizedState!==null&&Uo(e);break;case 13:Uo(e);break;case 19:N0(e);break;case 10:pr(e.type);break;case 22:case 23:Uo(e),k0(),t!==null&&Qa(Gs);break;case 24:pr(wa)}}function du(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Kt(e,e.return,i)}}function cs(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(f){Kt(n,l,f)}}}o=o.next}while(o!==r)}}catch(f){Kt(e,e.return,f)}}function F1(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{wy(e,a)}catch(o){Kt(t,t.return,o)}}}function S1(t,e,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Kt(t,e,o)}}function kn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=mr(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=uM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new qo(t);Ao(t.child,!1,fw,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Kt(t,e,i)}}function Za(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Kt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Kt(t,e,n)}else a.current=null}function yd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)hM(t.stateNode,e[a])}function YS(t){for(var e=t.return;e!==null&&(tx(e)&&hM(t.stateNode,e.stateNode),!ex(e));)e=e.return}function Nc(t){for(var e=t.return;e!==null&&(tx(e)&&dw(t.stateNode,e.stateNode),!ex(e));)e=e.return}function ex(t){return t.tag===5||t.tag===3||t.tag===27}function tx(t){return t&&t.tag===7&&t.stateNode!==null}function qI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Kt(t,t.return,n)}}function Jm(t,e,a){try{var o=t.stateNode;YA(o,t.type,a,e),o[wo]=e}catch(n){Kt(t,t.return,n)}}function v1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ds(t.type)||t.tag===4}function Qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ds(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function WI(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=zn)),yd(t,o),Vt=!0;else if(n!==4&&(n===27&&(yd(t,o),o=null,ds(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(WI(t,e,a,o),t=t.sibling;t!==null;)WI(t,e,a,o),t=t.sibling}function Md(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),yd(t,o),Vt=!0;else if(n!==4&&(n===27&&(yd(t,o),o=null,ds(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Md(t,e,a,o),t=t.sibling;t!==null;)Md(t,e,a,o),t=t.sibling}function y1(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$a(e,o,a),e[Ka]=t,e[wo]=a}catch(r){Kt(t,t.return,r)}}var Cd=!1,ko=null;function ZS(t){(t.tag===30||t.subtreeFlags&33554432)&&(Cd=!0)}var Nn=null;function KS(){var t=Nn;return Nn=null,t}var _o=0;function gl(t,e,a,o,n){return _o=0,M1(t.child,e,a,o,n)}function M1(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=f0(s);o.push(i),i.view&&(r=!0)}else r||f0(s).view&&(r=!0);Cd=!0,iM(s,_o===0?e:e+"_"+_o,a),_o++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||M1(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function Wn(t,e){for(;t!==null;)t.tag===5?lM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Wn(t.child,e)),t=t.sibling}function Jf(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Jf(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(he(544));var a=e.name;e=vr(e.default,e.share),e!=="none"&&(gl(t,a,e,null,!1)||Wn(t.child,!1))}t=t.sibling}}function XI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=mr(o,a),r=vr(o.default,a.paired?o.share:o.enter);r!=="none"?gl(t,n,r,null,!1)?(Jf(t),a.paired||e||il(t,o.onEnter)):Wn(t.child,!1):Jf(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)XI(t,e),t=t.sibling;else Jf(t)}function YI(t){if(ko!==null&&ko.size!==0){var e=ko;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=vr(a.default,a.share);if(r!=="none"&&(gl(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,il(t,a.onShare)):Wn(t.child,!1)),e.delete(o),e.size===0)break}}}YI(t)}t=t.sibling}}}function ZI(t){if(t.tag===30){var e=t.memoizedProps,a=mr(e,t.stateNode),o=ko!==null?ko.get(a):void 0,n=vr(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(gl(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,ko.delete(a),il(t,e.onShare)):il(t,e.onExit):Wn(t.child,!1)),ko!==null&&YI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)ZI(t),t=t.sibling;else ko!==null&&YI(t)}function C1(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=mr(e,t.stateNode);e=vr(e.default,e.update),t.flags&=-5,e!=="none"&&gl(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&C1(t);t=t.sibling}}function KI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Wn(t.child,!1))}KI(t)}t=t.sibling}}function Qf(t){if(t.tag===30)t.stateNode.paired=null,Wn(t.child,!1),KI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Qf(t),t=t.sibling;else KI(t)}function _1(t){for(t=t.child;t!==null;)t.tag===30?Wn(t.child,!1):t.subtreeFlags&33554432&&_1(t),t=t.sibling}function ax(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&_o<r.length){var c=r[_o],f=f0(l);(c.view||f.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(f.clip)h=!0;else{h=c.rect;var u=f.rect;h=h.y!==u.y||h.x!==u.x||h.height!==u.height||h.width!==u.width}h&&(t.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(t.flags|=32)}else t.flags|=32;t.flags&4&&iM(l,_o===0?a:a+"_"+_o,n),i&&t.flags&4||(Nn===null&&(Nn=[]),Nn.push(l,_o===0?o:o+"_"+_o,e.memoizedProps)),_o++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:ax(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function b1(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=mr(a,o),r=vr(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map($A)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;_o=0,n=ax(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||il(t,a.onUpdate))}else t.subtreeFlags&33554432&&b1(t,e);t=t.sibling}}var Ha=!1,Wt=!1,Pn=!1,jm=!1,JS=typeof WeakSet=="function"?WeakSet:Set,Va=null,Bn=!1,Ac=!1,_d=!1,JI=!1;function CA(t,e,a){if(t=t.containerInfo,l0=pl,t=fy(t),A0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,f=0,h=0,u=t,d=null;t:for(;;){for(var m;u!==o||r!==0&&u.nodeType!==3||(l=i+r),u!==s||n!==0&&u.nodeType!==3||(c=i+n),u.nodeType===3&&(i+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===t)break t;if(d===o&&++f===r&&(l=i),d===s&&++h===n&&(c=i),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(c0={focusedElem:t,selectionRange:o},pl=!1,a=(a&335544064)===a,Va=e,e=a?9270:1024;Va!==null;){if(t=Va,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&ZI(o[r]);if(t.alternate===null&&t.flags&2)a&&ZS(t),Lf(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&ZI(o),Lf(a);continue}else if(o!==null&&o.memoizedState!==null){a&&ZS(t),Lf(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,Va=o):(a&&C1(t),Lf(a))}}ko=null}function Lf(t){for(;Va!==null;){var e=Va,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=js(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Kt(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)d0(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":d0(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=mr(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=vr(n.default,n.update),n!=="none"&&gl(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(he(163))}if(o=e.sibling,o!==null){o.return=e.return,Va=o;break}Va=e.return}}function T1(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Un(t,a),o&4&&du(5,a);break;case 1:if(Un(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Kt(a,a.return,s)}else{var n=js(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Kt(a,a.return,s)}}o&64&&F1(a),o&512&&kn(a,a.return);break;case 3:if(Un(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{wy(t,e)}catch(s){Kt(a,a.return,s)}}break;case 27:e===null&&o&4&&y1(a);case 26:case 5:Un(t,a),e===null&&o&4&&qI(a),o&512&&kn(a,a.return);break;case 12:Un(t,a);break;case 31:Un(t,a),o&4&&R1(t,a);break;case 13:Un(t,a),o&4&&D1(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=UA.bind(null,a),mw(t,a))));break;case 22:if(o=a.memoizedState!==null||Ha,!o){var r=e!==null&&e.memoizedState!==null||Wt;e=Ha,n=Wt,Ha=o,(Wt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),xn(t,a,o)):Un(t,a),Ha=e,Wt=n}break;case 30:Un(t,a),o&512&&kn(a,a.return);break;case 7:o&512&&kn(a,a.return);default:Un(t,a)}}function QI(t,e){for(t=t.child;t!==null;)A1(t,e),t=t.sibling}function A1(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Kt(t,t.return,l)}jI(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Vt=!0}catch(l){Kt(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?dv(i,!0):dv(t.stateNode,!1)}catch(l){Kt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&QI(t,e);break;default:QI(t,e)}}function jI(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:A1(a,o);break e;case 22:a.memoizedState===null&&jI(a,o);break e;default:jI(a,o)}}t=t.sibling}}function w1(t){var e=t.alternate;e!==null&&(t.alternate=null,w1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ma=null,Mo=!1;function In(t,e,a){for(a=a.child;a!==null;)E1(t,e,a),a=a.sibling}function E1(t,e,a){if(zo&&typeof zo.onCommitFiberUnmount=="function")try{zo.onCommitFiberUnmount(ru,a)}catch{}switch(a.tag){case 26:Wt||Za(a,e),In(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Wt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Wt||Za(a,e),Nc(a);var o=ma,n=Mo;ds(a.type)&&(ma=a.stateNode,Mo=!1),In(t,e,a),xM(a.stateNode,a.type,a.memoizedProps),ma=o,Mo=n;break;case 5:Wt||Za(a,e),Nc(a);case 6:if(a.tag===6&&Nc(a),o=ma,n=Mo,ma=null,In(t,e,a),ma=o,Mo=n,ma!==null)if(Mo)try{(ma.nodeType===9?ma.body:ma.nodeName==="HTML"?ma.ownerDocument.body:ma).removeChild(a.stateNode),Vt=!0}catch(r){Kt(a,e,r)}else try{ma.removeChild(a.stateNode),Vt=!0}catch(r){Kt(a,e,r)}break;case 18:ma!==null&&(Mo?(t=ma,fv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hl(t)):fv(ma,a.stateNode));break;case 4:o=ma,n=Mo,ma=a.stateNode.containerInfo,Mo=!0,In(t,e,a),ma=o,Mo=n;break;case 0:case 11:case 14:case 15:cs(2,a,e),Wt||cs(4,a,e),In(t,e,a);break;case 1:Wt||(Za(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&S1(a,e,o)),In(t,e,a);break;case 21:In(t,e,a);break;case 22:Wt=(o=Wt)||a.memoizedState!==null,In(t,e,a),Wt=o;break;case 30:Za(a,e),In(t,e,a);break;case 7:Wt||Za(a,e),In(t,e,a);break;default:In(t,e,a)}}function R1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hl(t)}catch(a){Kt(e,e.return,a)}}}function D1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hl(t)}catch(a){Kt(e,e.return,a)}}function _A(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new JS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new JS),e;default:throw Error(he(435,t.tag))}}function Pf(t,e){var a=_A(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=kA.bind(null,t,o);o.then(n,n)}})}function po(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(ds(l.type)){ma=l.stateNode,Mo=!1;break e}break;case 5:ma=l.stateNode,Mo=!1;break e;case 3:case 4:ma=l.stateNode.containerInfo,Mo=!0;break e}l=l.return}if(ma===null)throw Error(he(160));E1(s,i,r),ma=null,Mo=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)L1(e,t,a),e=e.sibling}var gn=null;function L1(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}po(e,t,a),ho(t),n&4&&(cs(3,t,t.return),du(3,t),cs(5,t,t.return));break;case 1:po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),n&64&&Ha&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=gn,po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Ha)t.stateNode=sM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[lu]||o[Ka]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),$a(o,e,a),o[Ka]=t,Ga(o),e=o;break e;case"link":if(r=Sv("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),$a(o,e,a),n.head.appendChild(o);break;case"meta":if(r=Sv("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),$a(o,e,a),n.head.appendChild(o);break;default:throw Error(he(468,e))}o[Ka]=t,Ga(o),e=o}t.stateNode=e}else Ha||m0(r,t.type,t.stateNode);else t.stateNode=Fv(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||Wt||e.parentNode.removeChild(e)):n.count--,a===null?Ha||m0(r,t.type,t.stateNode):Fv(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Jm(t,t.memoizedProps,o.memoizedProps);break;case 27:po(e,t,a),ho(t),n&512&&(Wt||o===null||Za(o,o.return)),o!==null&&n&4&&Jm(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=Pn,Pn=!1,po(e,t,a),Pn=r,ho(t),n&512&&(Wt||o===null||Za(o,o.return)),t.flags&32){e=t.stateNode;try{nl(e,""),Vt=!0}catch(f){Kt(t,t.return,f)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Jm(t,e,o!==null?o.memoizedProps:e)),n&1024&&(jm=!0);break;case 6:if(po(e,t,a),ho(t),n&4){if(t.stateNode===null)throw Error(he(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,Vt=!0}catch(f){Kt(t,t.return,f)}}break;case 3:if(Vt=!1,td=null,r=gn,gn=eu(e.containerInfo),po(e,t,a),gn=r,ho(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{hl(e.containerInfo)}catch(f){Kt(t,t.return,f)}jm&&(jm=!1,P1(t)),Vt=!1;break;case 4:n=Pn,Pn=Ha,o=aS(),r=gn,gn=eu(t.stateNode.containerInfo),po(e,t,a),ho(t),gn=r,Vt&&Ac&&(_d=!0),Vt=o,Pn=n;break;case 12:po(e,t,a),ho(t);break;case 31:po(e,t,a),ho(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 13:po(e,t,a),ho(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Zd=Oo()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Ha,l=Wt,c=Pn;Ha=i||r,Pn=c||r,Wt=l||s,po(e,t,a),Wt=l,Pn=c,Ha=i,ho(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Ha||Wt||(e=s||Wt,a=Ha,o=Wt,Ha=r||Ha,Wt=e,zr(t,2),Ha=a,Wt=o),!r&&Pn||QI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Pf(t,a))));break;case 19:po(e,t,a),ho(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Pf(t,e)));break;case 30:n&512&&(Wt||o===null||Za(o,o.return)),n=aS(),r=Ac,s=(a&335544064)===a,i=t.memoizedProps,Ac=s&&vr(i.default,i.update)!=="none",po(e,t,a),ho(t),s&&o!==null&&Vt&&(t.flags|=4),Ac=r,Vt=n;break;case 21:break;case 7:n&512&&(Wt||o===null||Za(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:po(e,t,a),ho(t)}}function ho(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(v1(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if(tx(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(ex(n))break;n=n.return}var s=o;if(a==null)throw Error(he(160));switch(a.tag){case 27:var i=a.stateNode,l=Qm(t);Md(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(nl(c,""),a.flags&=-33);var f=Qm(t);Md(t,f,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,u=Qm(t);WI(t,u,h,s);break;default:throw Error(he(161))}}catch(d){Kt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;P1(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,pl=!0,e.reset(),pl=!1),t=t.sibling}}function Ei(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)B1(e,t),e=e.sibling;else b1(e,!1)}function B1(t,e){var a=t.alternate;if(a===null)XI(t,!1);else switch(t.tag){case 3:if(JI=Bn=!1,KS(),Ei(e,t),!Bn&&!_d){if(t=Nn,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];lM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),JI=!0}Nn=null;break;case 5:Ei(e,t);break;case 4:o=Bn,Bn=!1,Ei(e,t),Bn&&(_d=!0),Bn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?XI(t,!1):Ei(e,t));break;case 30:o=Bn,n=KS(),Bn=!1,Ei(e,t),Bn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=mr(r,s),s=mr(a.memoizedProps,s);var i=vr(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,_o=0,e=ax(t,a,e,s,i,r,!0),_o!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(il(t,t.memoizedProps.onUpdate),Nn=n):n!==null&&(n.push.apply(n,Nn),Nn=n),Bn=t.flags&32?!0:o;break;default:Ei(e,t)}}function Un(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)T1(t,e.alternate,e),e=e.sibling}function zr(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:cs(4,a,a.return),zr(a,o);break;case 1:Za(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&S1(a,a.return,n),zr(a,o);break;case 27:o&2&&xM(a.stateNode,a.type,a.memoizedProps);case 5:Za(a,a.return),a.tag!==5&&a.tag!==27||Nc(a),zr(a,o);break;case 6:Nc(a);break;case 26:Za(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||Wt||n.parentNode.removeChild(n),zr(a,o);break;case 22:a.memoizedState===null&&zr(a,o);break;case 30:Za(a,a.return),zr(a,o);break;case 7:Za(a,a.return);default:zr(a,o)}t=t.sibling}}function xn(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:xn(n,r,a),du(4,r);break;case 1:if(xn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(f){Kt(o,o.return,f)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Ay(c[n],l)}catch(f){Kt(o,o.return,f)}}i&&s&64&&F1(r),kn(r,r.return);break;case 27:a&2&&y1(r);case 5:r.tag!==5&&r.tag!==27||YS(r),xn(n,r,a),i&&o===null&&s&4&&qI(r),kn(r,r.return);break;case 6:YS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Ha||m0(eu(l.ownerDocument),r.type,l),xn(n,r,a),i&&o===null&&s&4&&qI(r),kn(r,r.return);break;case 12:xn(n,r,a);break;case 31:xn(n,r,a),i&&s&4&&R1(n,r);break;case 13:xn(n,r,a),i&&s&4&&D1(n,r);break;case 22:r.memoizedState===null&&xn(n,r,a),kn(r,r.return);break;case 30:xn(n,r,a),kn(r,r.return);break;case 7:kn(r,r.return);default:xn(n,r,a)}e=e.sibling}}function ox(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uu(a))}function nx(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&uu(t))}function $o(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)U1(t,e,a,o),e=e.sibling;else n&&_1(e)}function U1(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Qf(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:$o(t,e,a,o),r&2048&&du(9,e);break;case 1:$o(t,e,a,o);break;case 3:$o(t,e,a,o),n&&JI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&uu(r)));break;case 12:if(r&2048){$o(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Kt(e,e.return,c)}}else $o(t,e,a,o);break;case 31:$o(t,e,a,o);break;case 13:$o(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&Qf(i),s._visibility&2?$o(t,e,a,o):Oc(t,e)):(n&&i!==null&&i.memoizedState!==null&&Qf(e),s._visibility&2?$o(t,e,a,o):(s._visibility|=2,Di(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&ox(i,e);break;case 24:$o(t,e,a,o),r&2048&&nx(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(Wn(r.child,!0),Wn(e.child,!0))),$o(t,e,a,o);break;default:$o(t,e,a,o)}}function Di(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:Di(r,s,i,l,n),du(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?Di(r,s,i,l,n):Oc(r,s):(f._visibility|=2,Di(r,s,i,l,n)),n&&c&2048&&ox(s.alternate,s);break;case 24:Di(r,s,i,l,n),n&&c&2048&&nx(s.alternate,s);break;default:Di(r,s,i,l,n)}e=e.sibling}}function Oc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:Oc(a,o),n&2048&&ox(o.alternate,o);break;case 24:Oc(a,o),n&2048&&nx(o.alternate,o);break;default:Oc(a,o)}e=e.sibling}}var Ns=8192;function Bs(t,e,a){if(t.subtreeFlags&Ns)for(t=t.child;t!==null;)k1(t,e,a),t=t.sibling}function k1(t,e,a){switch(t.tag){case 26:Bs(t,e,a),t.flags&Ns&&(t.memoizedState!==null?ww(a,gn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&yv(a,t)));break;case 5:Bs(t,e,a),t.flags&Ns&&(t=t.stateNode,(e&335544128)===e&&yv(a,t));break;case 3:case 4:var o=gn;gn=eu(t.stateNode.containerInfo),Bs(t,e,a),gn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ns,Ns=16777216,Bs(t,e,a),Ns=o):Bs(t,e,a));break;case 30:if(t.flags&Ns&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,ko===null&&(ko=new Map),ko.set(o,n)}Bs(t,e,a);break;default:Bs(t,e,a)}}function N1(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Va=o,z1(o,t)}N1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O1(t),t=t.sibling}function O1(t){switch(t.tag){case 0:case 11:case 15:vc(t),t.flags&2048&&cs(9,t,t.return);break;case 3:vc(t);break;case 12:vc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,jf(t)):vc(t);break;default:vc(t)}}function jf(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Va=o,z1(o,t)}N1(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cs(8,e,e.return),jf(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,jf(e));break;default:jf(e)}t=t.sibling}}function z1(t,e){for(;Va!==null;){var a=Va;switch(a.tag){case 0:case 11:case 15:cs(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Va=o;else e:for(a=t;Va!==null;){o=Va;var n=o.sibling,r=o.return;if(w1(o),o===a){Va=null;break e}if(n!==null){n.return=r,Va=n;break e}Va=r}}}var bA={getCacheForType:function(t){var e=Ja(wa),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ja(wa).controller.signal}},TA=typeof WeakMap=="function"?WeakMap:Map,Gt=0,aa=null,Lt=null,Bt=0,Yt=0,Po=null,Yr=!1,Fl=!1,rx=!1,Fr=0,Sa=0,us=0,Ws=0,bd=0,No=0,sl=0,zc=null,Co=null,$I=!1,Zd=0,H1=0,Td=1/0,Ad=null,as=null,xa=0,Sn=null,$s=null,qn=0,e0=0,t0=null,V1=null,$i=null,el=null,tl=null,Hc=0,$f=null;function Vo(){return Gt&2&&Bt!==0?Bt&-Bt:Ft.T!==null?ix():Xv()}function G1(){if(No===0)if(!(Bt&536870912)||Et){var t=vf;vf<<=1,!(vf&3932160)&&(vf=262144),No=t}else No=536870912;return t=eo.current,t!==null&&(t.flags|=32),No}function il(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=uM(mr(t.memoizedProps,a))),el===null&&(el=[]),el.push(e.bind(null,o))}}function To(t,e,a){(t===aa&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(ll(t,0),Zr(t,Bt,No,!1)),iu(t,a),(!(Gt&2)||t!==aa)&&(t===aa&&(!(Gt&2)&&(Ws|=a),Sa===4&&Zr(t,Bt,No,!1)),Yn(t))}function q1(t,e,a){if(Gt&6)throw Error(he(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||su(t,e),n=o?EA(t,e):$m(t,e,!0),r=o;do{if(n===0){Fl&&!o&&Zr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!AA(a)){n=$m(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=zc;var l=i.current.memoizedState.isDehydrated;if(l&&(ll(i,s).flags|=256),s=$m(i,s,!1),s!==2&&s!==6){if(rx&&!l){i.errorRecoveryDisabledLanes|=r,Ws|=r,n=4;break e}r=Co,Co=n,r!==null&&(Co===null?Co=r:Co.push.apply(Co,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){ll(t,0),Zr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(he(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Zr(o,e,No,!Yr);break e;case 2:Co=null;break;case 3:case 5:break;default:throw Error(he(329))}if((e&62914560)===e&&(n=Zd+300-Oo(),10<n)){if(Zr(o,e,No,!Yr),Pd(o,0,!0)!==0)break e;qn=e,o.timeoutHandle=cx(QS.bind(null,o,a,Co,Ad,$I,e,No,Ws,sl,Yr,r,"Throttled",-0,0),n);break e}QS(o,a,Co,Ad,$I,e,No,Ws,sl,Yr,r,null,-0,0)}}break}while(!0);Yn(t)}function QS(t,e,a,o,n,r,s,i,l,c,f,h,u,d){t.timeoutHandle=-1;var m=e.subtreeFlags,S=(r&335544064)===r;if(h=null,(S||m&8192||(m&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},ko=null,k1(e,r,h),S&&(m=h,S=t.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(m.count++,m.waitingForViewTransition=!0,m=tu.bind(m),S.finished.then(m,m))),m=(r&62914560)===r?Zd-Oo():(r&4194048)===r?H1-Oo():0,m=Ew(h,m),m!==null)){qn=r,t.cancelPendingCommit=m($S.bind(null,t,e,r,a,o,n,s,i,l,c,f,h,null,u,d)),Zr(t,r,s,!c);return}$S(t,e,r,a,o,n,s,i,l,c,f,h)}function AA(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Go(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(t,e,a,o){e=Hv(t,e),e&=~bd,e&=~Ws,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-Ho(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&Gv(t,a,e)}function Kd(){return Gt&6?!0:(pu(0,!1),!1)}function sx(){if(Lt!==null){if(Yt===0)var t=Lt.return;else t=Lt,fr=ni=null,G0(t),Ji=null,Zc=0,t=Lt;for(;t!==null;)g1(t.alternate,t),t=t.return;Lt=null}}function ll(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,JA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qn=0,sx(),aa=t,Lt=a=dr(t.current,null),Bt=e,Yt=0,Po=null,Yr=!1,Fl=su(t,e),rx=!1,sl=No=bd=Ws=us=Sa=0,Co=zc=null,$I=!1,Fr=Hv(t,e),Od(),a}function W1(t,e){bt=null,Ft.H=Sd,e===xl||e===Vd?(e=CS(),Yt=3):e===B0?(e=CS(),Yt=4):Yt=e===Q0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Po=e,Lt===null&&(Sa=1,vd(t,nn(e,t.current)))}function X1(){var t=eo.current;return t===null?!0:(Bt&4194048)===Bt?no===null:(Bt&62914560)===Bt||Bt&536870912?t===no:!1}function Y1(){var t=Ft.H;return Ft.H=Sd,t===null?Sd:t}function Z1(){var t=Ft.A;return Ft.A=bA,t}function wd(){Sa=4,Yr||(Bt&4194048)!==Bt&&eo.current!==null||(Fl=!0),!(us&134217727)&&!(Ws&134217727)||aa===null||Zr(aa,Bt,No,!1)}function $m(t,e,a){var o=Gt;Gt|=2;var n=Y1(),r=Z1();(aa!==t||Bt!==e)&&(Ad=null,ll(t,e)),e=!1;var s=Sa;e:do try{if(Yt!==0&&Lt!==null){var i=Lt,l=Po;switch(Yt){case 8:sx(),s=6;break e;case 3:case 2:case 9:case 6:eo.current===null&&(e=!0);var c=Yt;if(Yt=0,Po=null,Wi(t,i,l,c),a&&Fl){s=0;break e}break;default:c=Yt,Yt=0,Po=null,Wi(t,i,l,c)}}wA(),s=Sa;break}catch(f){W1(t,f)}while(!0);return e&&t.shellSuspendCounter++,fr=ni=null,Gt=o,Ft.H=n,Ft.A=r,Lt===null&&(aa=null,Bt=0,Od()),s}function wA(){for(;Lt!==null;)K1(Lt)}function EA(t,e){var a=Gt;Gt|=2;var o=Y1(),n=Z1();aa!==t||Bt!==e?(Ad=null,Td=Oo()+500,ll(t,e)):Fl=su(t,e);e:do try{if(Yt!==0&&Lt!==null){e=Lt;var r=Po;t:switch(Yt){case 1:Yt=0,Po=null,Wi(t,e,r,1);break;case 2:case 9:if(MS(r)){Yt=0,Po=null,jS(e);break}e=function(){Yt!==2&&Yt!==9||aa!==t||(Yt=7),Yn(t)},r.then(e,e);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:MS(r)?(Yt=0,Po=null,jS(e)):(Yt=0,Po=null,Wi(t,e,r,7));break;case 5:var s=null;switch(Lt.tag){case 26:s=Lt.memoizedState;case 5:case 27:var i=Lt;if(s?SM(s):i.stateNode.complete){Yt=0,Po=null;var l=i.sibling;if(l!==null)Lt=l;else{var c=i.return;c!==null?(Lt=c,Jd(c)):Lt=null}break t}}Yt=0,Po=null,Wi(t,e,r,5);break;case 6:Yt=0,Po=null,Wi(t,e,r,6);break;case 8:sx(),Sa=6;break e;default:throw Error(he(462))}}RA();break}catch(f){W1(t,f)}while(!0);return fr=ni=null,Ft.H=o,Ft.A=n,Gt=a,Lt!==null?0:(aa=null,Bt=0,Od(),Sa)}function RA(){for(;Lt!==null&&!Zb();)K1(Lt)}function K1(t){var e=x1(t.alternate,t,Fr);t.memoizedProps=t.pendingProps,e===null?Jd(t):Lt=e}function jS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=zS(a,e,e.pendingProps,e.type,void 0,Bt);break;case 11:e=zS(a,e,e.pendingProps,e.type.render,e.ref,Bt);break;case 5:G0(e);var o=e;o===qa&&(Et?(pd(o),o.tag===5&&o.stateNode!=null&&(ia=o.stateNode)):(pd(o),Et=!0));default:g1(a,e),e=Lt=Fy(e,Fr),e=x1(a,e,Fr)}t.memoizedProps=t.pendingProps,e===null?Jd(t):Lt=e}function Wi(t,e,a,o){fr=ni=null,G0(e),Ji=null,Zc=0;var n=e.return;try{if(gA(t,n,e,a,Bt)){Sa=1,vd(t,nn(a,t.current)),Lt=null;return}}catch(r){if(n!==null)throw Lt=n,r;Sa=1,vd(t,nn(a,t.current)),Lt=null;return}e.flags&32768?(Et||o===1?t=!0:Fl||Bt&536870912?t=!1:(Yr=t=!0,(o===2||o===9||o===3||o===6)&&(o=eo.current,o!==null&&o.tag===13&&(o.flags|=16384))),J1(e,t)):Jd(e)}function Jd(t){var e=t;do{if(e.flags&32768){J1(e,Yr);return}t=e.return;var a=yA(e.alternate,e,Fr);if(a!==null){Lt=a;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Sa===0&&(Sa=5)}function J1(t,e){do{var a=MA(t.alternate,t);if(a!==null){a.flags&=32767,Lt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=a}while(t!==null);Sa=6,Lt=null}function $S(t,e,a,o,n,r,s,i,l,c,f,h){t.cancelPendingCommit=null;do Qd();while(xa!==0);if(Gt&6)throw Error(he(327));if(e!==null){if(e===t.current)throw Error(he(177));t===aa&&(Lt=aa=null,Bt=0),$s=e,Sn=t,qn=a,t0=n,V1=o,DA(t,e,a,s,i,l,h)}}function DA(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(e0=i,i|=w0,nT(t,a,i,o,n,r),el=null,(a&335544064)===a?(tl=sA(t),o=10262):(tl=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,NA(ld,function(){return r0(),null})):(t.callbackNode=null,t.callbackPriority=0),Cd=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=Ft.T,Ft.T=null,n=qt.p,qt.p=2,r=Gt,Gt|=4;try{CA(t,e,a)}finally{Gt=r,qt.p=n,Ft.T=o}}xa=1,Cd?$i=aw(s,t.containerInfo,tl,a0,o0,PA,n0,r0,LA,null,null):(a0(),o0(),n0())}function LA(t){if(xa!==0){var e=Sn.onRecoverableError;e(t,{componentStack:null})}}function PA(){xa===3&&(xa=0,B1($s,Sn),xa=4)}function a0(){if(xa===1){xa=0;var t=Sn,e=$s,a=qn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=Ft.T,Ft.T=null;var n=qt.p;qt.p=2;var r=Gt;Gt|=4;try{Ac=_d=!1,L1(e,t,a),a=c0;var s=fy(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&uy(i.ownerDocument.documentElement,i)){if(l!==null&&A0(i)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(f,i.value.length);else{var h=i.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var d=u.getSelection(),m=i.textContent.length,S=Math.min(l.start,m),I=l.end===void 0?S:Math.min(l.end,m);!d.extend&&S>I&&(s=I,I=S,S=s);var p=mS(i,S),g=mS(i,I);if(p&&g&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var y=h.createRange();y.setStart(p.node,p.offset),d.removeAllRanges(),S>I?(d.addRange(y),d.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),d.addRange(y))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var x=h[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}pl=!!l0,c0=l0=null}finally{Gt=r,qt.p=n,Ft.T=o}}t.current=e,xa=2}}function o0(){if(xa===2){xa=0;var t=Sn,e=$s,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=Ft.T,Ft.T=null;var o=qt.p;qt.p=2;var n=Gt;Gt|=4;try{T1(t,e.alternate,e)}finally{Gt=n,qt.p=o,Ft.T=a}}xa=3}}function n0(){if(xa===4||xa===3){xa=0;var t=$i;$i=null,Kb();var e=Sn,a=$s,o=qn,n=V1,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?xa=5:(xa=0,$s=Sn=null,Q1(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(as=null),y0(o),a=a.stateNode,zo&&typeof zo.onCommitFiberRoot=="function")try{zo.onCommitFiberRoot(ru,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=Ft.T,r=qt.p,qt.p=2,Ft.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{Ft.T=a,qt.p=r}}if(n=el,s=tl,tl=null,n!==null&&(el=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);qn&3&&Qd(),Yn(e),r=e.pendingLanes,o&261930&&r&42?e===$f?Hc++:(Hc=0,$f=e):(Hc=0,$f=null),pu(0,!1)}}function Q1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,uu(e)))}function Qd(){return $i!==null&&($i.skipTransition(),$i=null),a0(),o0(),n0(),r0()}function r0(){if(xa!==5)return!1;var t=Sn,e=e0;e0=0;var a=y0(qn),o=Ft.T,n=qt.p;try{qt.p=32>a?32:a,Ft.T=null,a=t0,t0=null;var r=Sn,s=qn;if(xa=0,$s=Sn=null,qn=0,Gt&6)throw Error(he(331));var i=Gt;if(Gt|=4,O1(r.current),U1(r,r.current,s,a),Gt=i,pu(0,!1),zo&&typeof zo.onPostCommitFiberRoot=="function")try{zo.onPostCommitFiberRoot(ru,r)}catch{}return!0}finally{qt.p=n,Ft.T=o,Q1(t,e)}}function ev(t,e,a){e=nn(a,e),e=NI(t.stateNode,e,2),t=$r(t,e,2),t!==null&&(iu(t,2),Yn(t))}function Kt(t,e,a){if(t.tag===3)ev(t,t,a);else for(;e!==null;){if(e.tag===3){ev(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){t=nn(a,t),a=d1(2),o=$r(e,a,2),o!==null&&(p1(a,o,e,t),iu(o,2),Yn(o));break}}e=e.return}}function eI(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new TA;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(rx=!0,n.add(a),t=BA.bind(null,t,e,a),e.then(t,t))}function BA(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,aa===t&&(Bt&a)===a&&(Sa===4||Sa===3&&(Bt&62914560)===Bt&&300>Oo()-Zd?Gt&2?bd|=a:ll(t,0):bd|=a,sl===Bt&&(sl=0)),Yn(t)}function j1(t,e){e===0&&(e=Vv()),t=oi(t,e),t!==null&&(iu(t,e),Yn(t))}function UA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),j1(t,a)}function kA(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(he(314))}o!==null&&o.delete(e),j1(t,a)}function NA(t,e){return S0(t,e)}var cl=null,Li=null,s0=!1,Ed=!1,tI=!1,Kr=0;function Yn(t){t!==Li&&t.next===null&&(Li===null?cl=Li=t:Li=Li.next=t),Ed=!0,s0||(s0=!0,zA())}function pu(t,e){if(!tI&&Ed){tI=!0;do for(var a=!1,o=cl;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-Ho(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,tv(o,r))}else r=Bt,r=Pd(o,o===aa?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||su(o,r)||(a=!0,tv(o,r));o=o.next}while(a);tI=!1}}function OA(){$1()}function $1(){Ed=s0=!1;var t=0;Kr!==0&&KA()&&(t=Kr);for(var e=Oo(),a=null,o=cl;o!==null;){var n=o.next,r=eM(o,e);r===0?(o.next=null,a===null?cl=n:a.next=n,n===null&&(Li=a)):(a=o,(t!==0||r&3)&&(Ed=!0)),o=n}xa!==0&&xa!==5||pu(t,!1),Kr!==0&&(Kr=0)}function eM(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Ho(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=oT(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=aa,a=Bt,a=Pd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Lm(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||su(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&Lm(o),y0(a)){case 2:case 8:a=Ov;break;case 32:a=ld;break;case 268435456:a=zv;break;default:a=ld}return o=tM.bind(null,t),a=S0(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&Lm(o),t.callbackPriority=2,t.callbackNode=null,2}function tM(t,e){if(xa!==0&&xa!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qd()&&t.callbackNode!==a)return null;var o=Bt;return o=Pd(t,t===aa?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(q1(t,o,e),eM(t,Oo()),t.callbackNode!=null&&t.callbackNode===a?tM.bind(null,t):null)}function tv(t,e){if(Qd())return null;q1(t,e,!0)}function zA(){QA(function(){Gt&6?S0(Nv,OA):$1()})}function ix(){if(Kr===0){var t=Ks;t===0&&(t=Sf,Sf<<=1,!(Sf&261888)&&(Sf=256)),Kr=t}return Kr}function av(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hf(t)}function HA(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=av((n[wo]||null).action),s=o.submitter;s&&(e=(e=s[wo]||null)?av(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new Ud("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Kr!==0){var l=new FormData(n,s);UI(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),UI(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(Bf=0;Bf<_I.length;Bf++)Uf=_I[Bf],ov=Uf.toLowerCase(),nv=Uf[0].toUpperCase()+Uf.slice(1),vn(ov,"on"+nv);var Uf,ov,nv,Bf;vn(py,"onAnimationEnd");vn(hy,"onAnimationIteration");vn(my,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(jT,"onTransitionRun");vn($T,"onTransitionStart");vn(eA,"onTransitionCancel");vn(Iy,"onTransitionEnd");ol("onMouseEnter",["mouseout","mouseover"]);ol("onMouseLeave",["mouseout","mouseover"]);ol("onPointerEnter",["pointerout","pointerover"]);ol("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qc));function aM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(f){ud(f)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(f){ud(f)}n.currentTarget=null,r=l}}}}function Dt(t,e){var a=e[jF];a===void 0&&(a=e[jF]=new Set);var o=t+"__bubble";a.has(o)||(oM(e,t,2,!1),a.add(o))}function aI(t,e,a){var o=0;e&&(o|=4),oM(a,t,o,e)}var kf="_reactListening"+Math.random().toString(36).slice(2);function lx(t){if(!t[kf]){t[kf]=!0,Zv.forEach(function(a){a!=="selectionchange"&&(VA.has(a)||aI(a,!1,t),aI(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kf]||(e[kf]=!0,aI("selectionchange",!1,e))}}function oM(t,e,a,o){switch(TM(e)){case 2:var n=Pw;break;case 8:n=Bw;break;default:n=mx}a=n.bind(null,e,a,t),n=void 0,!vI||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function oI(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Os(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}ay(function(){var c=r,f=C0(a),h=[];e:{var u=xy.get(t);if(u!==void 0){var d=Ud,m=t;switch(t){case"keypress":if(Gf(a)===0)break e;case"keydown":case"keyup":d=AT;break;case"focusin":m="focus",d=Om;break;case"focusout":m="blur",d=Om;break;case"beforeblur":case"afterblur":d=Om;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=sS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=IT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=LT;break;case py:case hy:case my:d=FT;break;case Iy:d=BT;break;case"scroll":case"scrollend":d=hT;break;case"wheel":d=kT;break;case"copy":case"cut":case"paste":d=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=lS;break;case"submit":d=RT;break;case"toggle":case"beforetoggle":d=OT}var S=(e&4)!==0,I=!S&&(t==="scroll"||t==="scrollend"),p=S?u!==null?u+"Capture":null:u;S=[];for(var g=c,y;g!==null;){var x=g;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||p===null||(x=Gc(g,p),x!=null&&S.push(jc(g,x,y))),I)break;g=g.return}0<S.length&&(u=new d(u,m,null,a,f),h.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",d&&a!==SI&&(m=a.relatedTarget||a.fromElement)&&(Os(m)||m[ml]))break e;(u||d)&&(m=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=a.relatedTarget||a.toElement,u=c,d=d?Os(d):null,d!==null&&(I=nu(d),S=d.tag,d!==I||S!==5&&S!==27&&S!==6)&&(d=null)):(u=null,d=c),u!==d&&(S=sS,x="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=lS,x="onPointerLeave",p="onPointerEnter",g="pointer"),I=u==null?m:bc(u),y=d==null?m:bc(d),m=new S(x,g+"leave",u,a,f),m.target=I,m.relatedTarget=y,x=null,Os(f)===c&&(S=new S(p,g+"enter",d,a,f),S.target=y,S.relatedTarget=I,x=S),I=x,S=u&&d?lI(u,d,GA):null,u!==null&&rv(h,m,u,S,!1),d!==null&&I!==null&&rv(h,I,d,S,!0)))}e:{if(u=c?bc(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var C=dS;else if(fS(u))if(ly)C=KT;else{C=YT;var b=XT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&M0(c.elementType)&&(C=dS):C=ZT;if(C&&(C=C(t,c))){iy(h,C,a,f);break e}b&&b(t,u,c)}switch(b=c?bc(c):window,t){case"focusin":(fS(b)||b.contentEditable==="true")&&(Oi=b,MI=c,Rc=null);break;case"focusout":Rc=MI=Oi=null;break;case"mousedown":CI=!0;break;case"contextmenu":case"mouseup":case"dragend":CI=!1,IS(h,a,f);break;case"selectionchange":if(QT)break;case"keydown":case"keyup":IS(h,a,f)}var T;if(T0)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ni?ry(t,a)&&(v="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(v="onCompositionStart");v&&(ny&&a.locale!=="ko"&&(Ni||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ni&&(T=oy()):(Wr=f,_0="value"in Wr?Wr.value:Wr.textContent,Ni=!0)),b=Rd(c,v),0<b.length&&(v=new iS(v,t,null,a,f),h.push({event:v,listeners:b}),T?v.data=T:(T=sy(a),T!==null&&(v.data=T)))),(T=HT?VT(t,a):GT(t,a))&&(v=Rd(c,"onBeforeInput"),0<v.length&&(b=new iS("onBeforeInput","beforeinput",null,a,f),h.push({event:b,listeners:v}),b.data=T)),HA(h,t,c,a,f)}aM(h,e)})}function jc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Rd(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Gc(t,a),n!=null&&o.unshift(jc(t,n,r)),n=Gc(t,e),n!=null&&o.push(jc(t,n,r))),t.tag===3)return o;t=t.return}return[]}function GA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rv(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=Gc(a,r),c!=null&&s.unshift(jc(a,c,l))):n||(c=Gc(a,r),c!=null&&s.push(jc(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var qA=/\r\n?/g,WA=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(qA,`
`).replace(WA,"")}function nM(t,e){return e=sv(e),sv(t)===e}function Zt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||nl(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&nl(t,""+o);else return;break;case"className":Mf(t,"class",o);break;case"tabIndex":Mf(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Mf(t,a,o);break;case"style":ty(t,o,r);return;case"data":if(e!=="object"){Mf(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Hf(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Zt(t,e,"name",n.name,n,null),Zt(t,e,"formEncType",n.formEncType,n,null),Zt(t,e,"formMethod",n.formMethod,n,null),Zt(t,e,"formTarget",n.formTarget,n,null)):(Zt(t,e,"encType",n.encType,n,null),Zt(t,e,"method",n.method,n,null),Zt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Hf(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=zn);return;case"onScroll":o!=null&&Dt("scroll",t);return;case"onScrollEnd":o!=null&&Dt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(he(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(he(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Hf(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),zf(t,"popover",o);break;case"xlinkActuate":lr(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":lr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":lr(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":lr(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":lr(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":lr(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":lr(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":lr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":lr(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zf(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=dT.get(a)||a,zf(t,a,o);else return}Vt=!0}function i0(t,e,a,o,n,r){switch(a){case"style":ty(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(he(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(he(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")nl(t,o);else if(typeof o=="number"||typeof o=="bigint")nl(t,""+o);else return;break;case"onScroll":o!=null&&Dt("scroll",t);return;case"onScrollEnd":o!=null&&Dt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=zn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Kv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[wo]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}Vt=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):zf(t,a,o)}return}Vt=!0}function $a(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(he(137,e));default:Zt(t,e,r,s,a,null)}}n&&Zt(t,e,"srcSet",a.srcSet,a,null),o&&Zt(t,e,"src",a.src,a,null);return;case"input":Dt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"name":n=f;break;case"type":s=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":r=f;break;case"defaultValue":i=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(he(137,e));break;default:Zt(t,e,o,f,a,null)}}jv(t,r,i,l,c,s,n,!1);return;case"select":Dt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Zt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Yi(t,!!o,e,!1):a!=null&&Yi(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(he(91));break;default:Zt(t,e,s,i,a,null)}ey(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,e,l,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<Qc.length;o++)Dt(Qc[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(he(137,e));default:Zt(t,e,c,o,a,null)}return;default:if(M0(e)){for(f in a)a.hasOwnProperty(f)&&(o=a[f],o!==void 0&&i0(t,e,f,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Zt(t,e,i,o,a,null))}var XA={};function YA(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,f=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Zt(t,e,d,null,o,h)}}for(var u in o){var d=o[u];if(h=a[u],o.hasOwnProperty(u)&&(d!=null||h!=null))switch(u){case"type":d!==h&&(Vt=!0),r=d;break;case"name":d!==h&&(Vt=!0),n=d;break;case"checked":d!==h&&(Vt=!0),c=d;break;case"defaultChecked":d!==h&&(Vt=!0),f=d;break;case"value":d!==h&&(Vt=!0),s=d;break;case"defaultValue":d!==h&&(Vt=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(he(137,e));break;default:d!==h&&Zt(t,e,u,d,o,h)}}FI(t,s,i,l,c,f,r,n);return;case"select":d=s=i=u=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Zt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(Vt=!0),u=r;break;case"defaultValue":r!==l&&(Vt=!0),i=r;break;case"multiple":r!==l&&(Vt=!0),s=r;default:r!==l&&Zt(t,e,n,r,o,l)}e=i,a=s,o=d,u!=null?Yi(t,!!a,u,!1):!!o!=!!a&&(e!=null?Yi(t,!!a,e,!0):Yi(t,!!a,a?[]:"",!1));return;case"textarea":d=u=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Zt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(Vt=!0),u=n;break;case"defaultValue":n!==r&&(Vt=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(he(91));break;default:n!==r&&Zt(t,e,s,n,o,r)}$v(t,u,d);return;case"option":for(var m in a)if(u=a[m],a.hasOwnProperty(m)&&u!=null&&!o.hasOwnProperty(m))switch(m){case"selected":t.selected=!1;break;default:Zt(t,e,m,null,o,u)}for(l in o)if(u=o[l],d=a[l],o.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":u!==d&&(Vt=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Zt(t,e,l,u,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)u=a[S],a.hasOwnProperty(S)&&u!=null&&!o.hasOwnProperty(S)&&Zt(t,e,S,null,o,u);for(c in o)if(u=o[c],d=a[c],o.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(he(137,e));break;default:Zt(t,e,c,u,o,d)}return;default:if(M0(e)){for(var I in a)u=a[I],a.hasOwnProperty(I)&&u!==void 0&&!o.hasOwnProperty(I)&&i0(t,e,I,void 0,o,u);for(f in o)u=o[f],d=a[f],!o.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||i0(t,e,f,u,o,d);return}}for(var p in a)u=a[p],a.hasOwnProperty(p)&&u!=null&&!o.hasOwnProperty(p)&&Zt(t,e,p,null,o,u);for(h in o)u=o[h],d=a[h],!o.hasOwnProperty(h)||u===d||u==null&&d==null||Zt(t,e,h,u,o,d)}function iv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&iv(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var f=l.transferSize,h=l.initiatorType;f&&iv(h)&&(l=l.responseEnd,s+=f*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var l0=null,c0=null;function $c(t){return t.nodeType===9?t:t.ownerDocument}function lv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function sM(t,e,a,o){return a=$c(a).createElement(t),a[Ka]=o,a[wo]=e,$a(a,t,e),Ga(a),a}function u0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nI=null;function KA(){var t=window.event;return t&&t.type==="popstate"?t===nI?!1:(nI=t,!0):(nI=null,!1)}var cx=typeof setTimeout=="function"?setTimeout:void 0,JA=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,uv=typeof requestAnimationFrame=="function"?requestAnimationFrame:cx,QA=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(t){return cv.resolve(null).then(t).catch(jA)}:cx;function jA(t){setTimeout(function(){throw t})}function ds(t){return t==="head"}function fv(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),hl(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")sI(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,sI(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[lu]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&sI(t.ownerDocument.body);a=n}while(a);hl(e)}function dv(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function iM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function lM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function cM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function f0(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return cM(e,a,t)}function $A(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return cM(e,a,t)}function ew(t){return t.documentElement.clientHeight}function tw(t){this.addEventListener("load",t),this.addEventListener("error",t)}function aw(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,m=c.fonts.status;o();var S=[];if(m==="loaded"&&(ew(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),m=S.length,t!==null)for(var I=t.suspenseyImages,p=0,g=0;g<I.length;g++){var y=I[g];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(p+=vM(y),p>ad){S.length=m;break}y=new Promise(tw.bind(y)),S.push(y)}}}if(0<S.length)return u=Promise.race([Promise.all(S),new Promise(function(C){return setTimeout(C,500)})]).then(n,n),(d?Promise.allSettled([d.finished,u]):u).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=f;var h=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var m=u[d],S=m.effect,I=S.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){h.push(m),m=S.getKeyframes();for(var p=I=void 0,g=!0,y=0;y<m.length;y++){var x=m[y],C=x.width;if(I===void 0)I=C;else if(I!==C){g=!1;break}if(C=x.height,p===void 0)p=C;else if(p!==C){g=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}g&&I!==void 0&&p!==void 0&&(S.setKeyframes(m),g=getComputedStyle(S.target,S.pseudoElement),g.width!==I||g.height!==p)&&(g=m[0],g.width=I,g.height=p,g=m[m.length-1],g.width=I,g.height=p,S.setKeyframes(m))}}s()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{o(),n(),s()}}),f.finished.finally(function(){for(var u=0;u<h.length;u++)h[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),i()}),f}catch{return o(),n(),s(),null}}function zs(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}zs.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:oa({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};zs.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uM(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function qo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}qo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(fM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=ul(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),Ao(this._fragmentFiber.child,!1,ow,t,i,o)}this._eventListeners=r}};function ow(t,e,a,o){return Ua(t).addEventListener(e,a,o),!1}qo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=fM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=ul(n.optionsOrUseCapture),Ao(this._fragmentFiber.child,!1,nw,t,a,n),o.splice(e,1),r!==null&&r()}};function nw(t,e,a,o){return Ua(t).removeEventListener(e,a,o),!1}function ul(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function pv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function fM(t,e,a,o){if(t.length===0)return-1;o=pv(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&pv(r.optionsOrUseCapture)===o)return n}return-1}qo.prototype.dispatchEvent=function(t){var e=ei(this._fragmentFiber);if(e===null)return!0;e=Ua(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,ul(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,ul(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};qo.prototype.focus=function(t){Ao(this._fragmentFiber.child,!0,dM,t,void 0,void 0)};function dM(t,e){return t.tag===6?!1:(t=Ua(t),Iw(t,e))}qo.prototype.focusLast=function(t){var e=[];Ao(this._fragmentFiber.child,!0,ux,e,void 0,void 0);for(var a=e.length-1;0<=a&&!dM(e[a],t);a--);};function ux(t,e){return e.push(t),!1}qo.prototype.blur=function(){var t=ei(this._fragmentFiber);t!==null&&(t=Ua(t),t=$c(t).activeElement,t!==null&&Ao(this._fragmentFiber.child,!1,rw,t,void 0,void 0))};function rw(t,e){return t.tag===6?!1:(t=Ua(t),t===e||t.contains(e)?(e.blur(),!0):!1)}qo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Ao(this._fragmentFiber.child,!1,sw,t,void 0,void 0)};function sw(t,e){return t.tag===6||(t=Ua(t),e.observe(t)),!1}qo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Ao(this._fragmentFiber.child,!1,iw,t,void 0,void 0);for(var a=e=0;a<Fn.length;a++){var o=Fn[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):Fn[e++]=o}Fn.length=e}};function iw(t,e){return t.tag===6||(t=Ua(t),e.unobserve(t)),!1}var Fn=[],rI=!1;function lw(t,e,a){Fn.push({fragmentInstance:t,observer:e,instance:a}),rI||(rI=!0,xw(function(){rI=!1;var o=Fn;Fn=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}qo.prototype.getClientRects=function(){var t=[];return Ao(this._fragmentFiber.child,!1,cw,t,void 0,void 0),t};function cw(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=Ua(t),e.push.apply(e,t.getClientRects());return!1}qo.prototype.getRootNode=function(t){var e=ei(this._fragmentFiber);return e===null?this:Ua(e).getRootNode(t)};qo.prototype.compareDocumentPosition=function(t){var e=ei(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];Ao(this._fragmentFiber.child,!1,ux,a,void 0,void 0);var o=Ua(e);if(a.length===0){if(a=o,XF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=Pv(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=Ua(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Ua(a[0]),n=Ua(a[a.length-1]);var r=XF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uw(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uw(t,e,a,o,n){var r=Os(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=ei(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=lI(a,r,YF),e===null?e=!1:(Ao(e,!0,zb,r,a),r=Pi,Pi=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=lI(o,r,YF),e===null?e=!1:(Ao(e,!0,Hb,r,o),r=Pi,iI=Pi=null,e=r!==null)),e):!1}function hv(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}qo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(he(566));var e=[];Ao(this._fragmentFiber.child,!1,ux,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=Pv(this._fragmentFiber);if(o=a?o[1]||o[0]||ei(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=Ua(o),hv(t,a);return}if(o=Ua(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=Ua(n),hv(n,a)):Ua(n).scrollIntoView(t),o+=a?-1:1}};function fw(t,e){return t=Ua(t),pM(t,e),!1}function pM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function hM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,ul(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<Fn.length;i++){var l=Fn[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(Fn[s++]=l)}Fn.length=s,r.observe(t)}),pM(t,e))}function dw(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,ul(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?lw(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function d0(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":d0(a),Bd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function pw(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[lu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function hw(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=sn(t.nextSibling),t===null))return null;return t}function mM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=sn(t.nextSibling),t===null))return null;return t}function p0(t){return t.data==="$?"||t.data==="$~"}function fx(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mw(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var h0=null;function mv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return sn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Iw(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function xw(t){uv(function(){uv(function(e){return t(e)})})}function IM(t,e,a){switch(e=$c(a),t){case"html":if(t=e.documentElement,!t)throw Error(he(452));return t;case"head":if(t=e.head,!t)throw Error(he(453));return t;case"body":if(t=e.body,!t)throw Error(he(454));return t;default:throw Error(he(451))}}function xM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Zt(t,e,o,null,XA,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zn&&(t.onclick=null),Bd(t)}function sI(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bd(t)}var ln=new Map,xv=new Set;function eu(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var yr=qt.d;qt.d={f:gw,r:Fw,D:Sw,C:vw,L:yw,m:Mw,X:_w,S:Cw,M:bw};function gw(){var t=yr.f(),e=Kd();return t||e}function Fw(t){var e=Il(t);e!==null&&e.tag===5&&e.type==="form"?t1(e):yr.r(t)}var Sl=typeof document>"u"?null:document;function gM(t,e,a){var o=Sl;if(o&&typeof e=="string"&&e){var n=on(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),xv.has(n)||(xv.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),$a(e,"link",t),Ga(e),o.head.appendChild(e)))}}function Sw(t){yr.D(t),gM("dns-prefetch",t,null)}function vw(t,e){yr.C(t,e),gM("preconnect",t,e)}function yw(t,e,a){yr.L(t,e,a);var o=Sl;if(o&&t&&e){var n='link[rel="preload"][as="'+on(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+on(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+on(a.imageSizes)+'"]')):n+='[href="'+on(t)+'"]';var r=n;switch(e){case"style":r=fl(t);break;case"script":r=vl(t)}if(!(ln.has(r)||(t=oa({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ln.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(hu(r))||e==="script"&&o.querySelector(mu(r))))){var s=o.createElement("link");$a(s,"link",t),e==="style"&&(s[cd]=!0,s.onload=s.onerror=function(){Yv(s)}),Ga(s),o.head.appendChild(s)}}}function Mw(t,e){yr.m(t,e);var a=Sl;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+on(o)+'"][href="'+on(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=vl(t)}if(!ln.has(r)&&(t=oa({rel:"modulepreload",href:t},e),ln.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mu(r)))return}o=a.createElement("link"),$a(o,"link",t),Ga(o),a.head.appendChild(o)}}}function Cw(t,e,a){yr.S(t,e,a);var o=Sl;if(o&&t){var n=Xi(o).hoistableStyles,r=fl(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(hu(r)))i.loading=5;else{t=oa({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ln.get(r))&&dx(t,a);var l=s=o.createElement("link");Ga(l),$a(l,"link",t),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ed(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function _w(t,e){yr.X(t,e);var a=Sl;if(a&&t){var o=Xi(a).hoistableScripts,n=vl(t),r=o.get(n);r||(r=a.querySelector(mu(n)),r||(t=oa({src:t,async:!0},e),(e=ln.get(n))&&px(t,e),r=a.createElement("script"),Ga(r),$a(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function bw(t,e){yr.M(t,e);var a=Sl;if(a&&t){var o=Xi(a).hoistableScripts,n=vl(t),r=o.get(n);r||(r=a.querySelector(mu(n)),r||(t=oa({src:t,async:!0,type:"module"},e),(e=ln.get(n))&&px(t,e),r=a.createElement("script"),Ga(r),$a(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function gv(t,e,a,o){var n=(n=Jr.current)?eu(n):null;if(!n)throw Error(he(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=fl(a.href),e=Xi(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fl(a.href);var r=Xi(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(hu(t)))?r._p||(s.instance=r,s.state.loading=5):(r=ln.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(t,r)),Tw(n,t,r,s.state))),e&&o===null)throw Error(he(528,""));return s}if(e&&o!==null)throw Error(he(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=vl(a),e=Xi(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(he(444,t))}}function fl(t){return'href="'+on(t)+'"'}function hu(t){return'link[rel="stylesheet"]['+t+"]"}function FM(t){return oa({},t,{"data-precedence":t.precedence,precedence:null})}function Tw(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[cd]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[cd]=!0,e.onload=e.onerror=Yv.bind(null,e),$a(e,"link",a),Ga(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function vl(t){return'[src="'+on(t)+'"]'}function mu(t){return"script[async]"+t}function Fv(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+on(a.href)+'"]');if(o)return e.instance=o,Ga(o),o;var n=oa({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ga(o),$a(o,"style",n),ed(o,a.precedence,t),e.instance=o;case"stylesheet":n=fl(a.href);var r=t.querySelector(hu(n));if(r)return e.state.loading|=4,e.instance=r,Ga(r),r;o=FM(a),(n=ln.get(n))&&dx(o,n),r=(t.ownerDocument||t).createElement("link"),Ga(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),$a(r,"link",o),e.state.loading|=4,ed(r,a.precedence,t),e.instance=r;case"script":return r=vl(a.src),(n=t.querySelector(mu(r)))?(e.instance=n,Ga(n),n):(o=a,(n=ln.get(r))&&(o=oa({},a),px(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ga(n),$a(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(he(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,ed(o,a.precedence,t));return e.instance}function ed(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function dx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function px(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var td=null;function Sv(t,e,a){if(td===null){var o=new Map,n=td=new Map;n.set(a,o)}else n=td,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[lu]||r[Ka]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function m0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Aw(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function vv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function SM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function vM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function yv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=vM(e),t.suspenseyImages.push(e)),t=Rw.bind(t),e.decode().then(t,t))}function ww(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=fl(o.href),r=e.querySelector(hu(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=tu.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,Ga(r);return}r=e.ownerDocument||e,o=FM(o),(n=ln.get(n))&&dx(o,n),r=r.createElement("link"),Ga(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),$a(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=tu.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var ad=0;function Ew(t,e){return t.stylesheets&&t.count===0&&od(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&od(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&ad===0&&(ad=62500*ZA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&od(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>ad?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function yM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)od(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function tu(){this.count--,yM(this)}function Rw(){this.imgCount--,yM(this)}var Dd=null;function od(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dd=new Map,e.forEach(Dw,t),Dd=null,tu.call(t))}function Dw(t,e){if(!(e.state.loading&4)){var a=Dd.get(t);if(a)var o=a.get(null);else{a=new Map,Dd.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=tu.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var dl={$$typeof:On,Provider:null,Consumer:null,_currentValue:Hs,_currentValue2:Hs,_threadCount:0};function Lw(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pm(0),this.hiddenUpdates=Pm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function MM(t,e,a,o,n,r,s,i,l,c,f,h){return t=new Lw(t,e,a,s,l,c,f,h,i),e=1,r===!0&&(e|=24),r=bo(3,null,null,e),t.current=r,r.stateNode=t,e=L0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},U0(r),t}function CM(t){return t?(t=Vi,t):Vi}function _M(t,e,a,o,n,r){n=CM(n),o.context===null?o.context=n:o.pendingContext=n,o=jr(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=$r(t,o,e),a!==null&&(To(a,t,e),Lc(a,t,e))}function Mv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function hx(t,e){Mv(t,e),(t=t.alternate)&&Mv(t,e)}function bM(t){if(t.tag===13||t.tag===31){var e=oi(t,67108864);e!==null&&To(e,t,67108864),hx(t,67108864)}}function Cv(t){if(t.tag===13||t.tag===31){var e=Vo();e=v0(e);var a=oi(t,e);a!==null&&To(a,t,e),hx(t,e)}}var pl=!0;function Pw(t,e,a,o){var n=Ft.T;Ft.T=null;var r=qt.p;try{qt.p=2,mx(t,e,a,o)}finally{qt.p=r,Ft.T=n}}function Bw(t,e,a,o){var n=Ft.T;Ft.T=null;var r=qt.p;try{qt.p=8,mx(t,e,a,o)}finally{qt.p=r,Ft.T=n}}function mx(t,e,a,o){if(pl){var n=I0(o);if(n===null)oI(t,e,o,Ld,a),_v(t,o);else if(kw(n,t,e,a,o))o.stopPropagation();else if(_v(t,o),e&4&&-1<Uw.indexOf(t)){for(;n!==null;){var r=Il(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Us(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-Ho(s);i.entanglements[1]|=l,s&=~l}Yn(r),!(Gt&6)&&(Td=Oo()+500,pu(0,!1))}}break;case 31:case 13:i=oi(r,2),i!==null&&To(i,r,2),Kd(),hx(r,2)}if(r=I0(o),r===null&&oI(t,e,o,Ld,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else oI(t,e,o,null,a)}}function I0(t){return t=C0(t),Ix(t)}var Ld=null;function Ix(t){if(Ld=null,t=Os(t),t!==null){var e=nu(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Rv(e),t!==null)return t;t=null}else if(a===31){if(t=Dv(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ld=t,null}function TM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jb()){case Nv:return 2;case Ov:return 8;case ld:case Qb:return 32;case zv:return 268435456;default:return 32}default:return 32}}var x0=!1,os=null,ns=null,rs=null,au=new Map,ou=new Map,Gr=[],Uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(t,e){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":au.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(e.pointerId)}}function yc(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=Il(e),e!==null&&bM(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function kw(t,e,a,o,n){switch(e){case"focusin":return os=yc(os,t,e,a,o,n),!0;case"dragenter":return ns=yc(ns,t,e,a,o,n),!0;case"mouseover":return rs=yc(rs,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return au.set(r,yc(au.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,ou.set(r,yc(ou.get(r)||null,t,e,a,o,n)),!0}return!1}function AM(t){var e=Os(t.target);if(e!==null){var a=nu(e);if(a!==null){if(e=a.tag,e===13){if(e=Rv(a),e!==null){t.blockedOn=e,QF(t.priority,function(){Cv(a)});return}}else if(e===31){if(e=Dv(a),e!==null){t.blockedOn=e,QF(t.priority,function(){Cv(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=I0(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);SI=o,a.target.dispatchEvent(o),SI=null}else return e=Il(a),e!==null&&bM(e),t.blockedOn=a,!1;e.shift()}return!0}function bv(t,e,a){nd(t)&&a.delete(e)}function Nw(){x0=!1,os!==null&&nd(os)&&(os=null),ns!==null&&nd(ns)&&(ns=null),rs!==null&&nd(rs)&&(rs=null),au.forEach(bv),ou.forEach(bv)}function Nf(t,e){t.blockedOn===e&&(t.blockedOn=null,x0||(x0=!0,ka.unstable_scheduleCallback(ka.unstable_NormalPriority,Nw)))}var Of=null;function Tv(t){Of!==t&&(Of=t,ka.unstable_scheduleCallback(ka.unstable_NormalPriority,function(){Of===t&&(Of=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if(Ix(o||a)===null)continue;break}var r=Il(a);r!==null&&(t.splice(e,3),e-=3,UI(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function hl(t){function e(l){return Nf(l,t)}os!==null&&Nf(os,t),ns!==null&&Nf(ns,t),rs!==null&&Nf(rs,t),au.forEach(e),ou.forEach(e);for(var a=0;a<Gr.length;a++){var o=Gr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Gr.length&&(a=Gr[0],a.blockedOn===null);)AM(a),a.blockedOn===null&&Gr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[wo]||null;if(typeof r=="function")s||Tv(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[wo]||null)i=s.formAction;else if(Ix(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),Tv(a)}}}function wM(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function xx(t){this._internalRoot=t}jd.prototype.render=xx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));var a=e.current,o=Vo();_M(a,o,t,e,null,null)};jd.prototype.unmount=xx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_M(t.current,2,null,t,null,null),Kd(),e[ml]=null}};function jd(t){this._internalRoot=t}jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Gr.length&&e!==0&&e<Gr[a].priority;a++);Gr.splice(a,0,t),a===0&&AM(t)}};var Av=wv.version;if(Av!=="19.3.0")throw Error(he(527,Av,"19.3.0"));qt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Ob(e),t=t!==null?Lv(t):null,t=t===null?null:t.stateNode,t};var Ow={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Mc.isDisabled&&Mc.supportsFiber))try{ru=Mc.inject(Ow),zo=Mc}catch{}var Mc;$d.createRoot=function(t,e){if(!Ev(t))throw Error(he(299));var a=!1,o="",n=c1,r=u1,s=f1;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=MM(t,1,!1,null,null,a,o,null,n,r,s,wM),t[ml]=e.current,lx(t),new xx(e)};$d.hydrateRoot=function(t,e,a){if(!Ev(t))throw Error(he(299));var o=!1,n="",r=c1,s=u1,i=f1,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=MM(t,1,!0,e,a??null,o,n,l,r,s,i,wM),e.context=CM(null),a=e.current,o=Vo(),o=v0(o),n=jr(o),n.callback=null,$r(a,n,o),a=o,e.current.lanes=a,iu(e,a),Yn(e),t[ml]=e.current,lx(t),new jd(e)};$d.version="19.3.0"});var LM=Br((SB,DM)=>{"use strict";ht();function RM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RM)}catch(t){console.error(t)}}RM(),DM.exports=EM()});ht();var vi=mn(Lo()),yi=mn(LM());ht();var Si=mn(Lo());ht();ht();var rh="186";var cC=0,ag=1,uC=2;var Wu=1,fC=2,tc=3,Ts=0,vo=1,Jo=2,er=0,ac=1,og=2,ng=3,rg=4,dC=5;var mi=100,pC=101,hC=102,mC=103,IC=104,xC=200,gC=201,FC=202,SC=203,sg=204,ig=205,vC=206,yC=207,MC=208,CC=209,_C=210,bC=211,TC=212,AC=213,wC=214,Mp=0,Cp=1,_p=2,Ul=3,bp=4,Tp=5,Ap=6,wp=7,lg=0,EC=1,RC=2,Tn=0,cg=1,ug=2,fg=3,dg=4,pg=5,hg=6,Xu=7;var mg=300,As=301,Ii=302,sh=303,ih=304,Yu=306,Qn=1e3,un=1001,Ep=1002,Xa=1003,DC=1004;var Zu=1005;var Na=1006,lh=1007;var tr=1008;var Do=1009,Ig=1010,xg=1011,oc=1012,ch=1013,An=1014,wn=1015,En=1016,uh=1017,fh=1018,nc=1020,gg=35902,Fg=35899,Sg=1021,vg=1022,fn=1023,jn=1026,ws=1027,yg=1028,dh=1029,Es=1030,ph=1031;var hh=1033,Ku=33776,Ju=33777,Qu=33778,ju=33779,mh=35840,Ih=35841,xh=35842,gh=35843,Fh=36196,Sh=37492,vh=37496,yh=37488,Mh=37489,$u=37490,Ch=37491,_h=37808,bh=37809,Th=37810,Ah=37811,wh=37812,Eh=37813,Rh=37814,Dh=37815,Lh=37816,Ph=37817,Bh=37818,Uh=37819,kh=37820,Nh=37821,Oh=36492,zh=36494,Hh=36495,Vh=36283,Gh=36284,ef=36285,qh=36286;var Cu=2300,Rp=2301,vp=2302,qx=2303,Wx=2400,Xx=2401,Yx=2402;var LC=3200;var Wh=0,PC=1,Er="",to="srgb",_u="srgb-linear",bu="linear",Xt="srgb";var yp=7680;var BC=519,UC=512,kC=513,NC=514,Xh=515,OC=516,zC=517,Yh=518,HC=519,VC=35044;var Mg="300 es",bn=2e3,kl=2001;function zw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GC(){let t=Tu("canvas");return t.style.display="block",t}var PM={},Nl=null;function Cg(...t){let e="THREE."+t.shift();Nl?Nl("log",e,...t):console.log(e,...t)}function qC(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function It(...t){t=qC(t);let e="THREE."+t.shift();if(Nl)Nl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function mt(...t){t=qC(t);let e="THREE."+t.shift();if(Nl)Nl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function ci(...t){let e=t.join(" ");e in PM||(PM[e]=!0,It(...t))}function WC(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var XC={[Mp]:Cp,[_p]:Ap,[bp]:wp,[Ul]:Tp,[Cp]:Mp,[Ap]:_p,[wp]:bp,[Tp]:Ul},$n=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},ro=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gx=Math.PI/180,Dp=180/Math.PI;function rc(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(ro[t&255]+ro[t>>8&255]+ro[t>>16&255]+ro[t>>24&255]+"-"+ro[e&255]+ro[e>>8&255]+"-"+ro[e>>16&15|64]+ro[e>>24&255]+"-"+ro[a&63|128]+ro[a>>8&255]+"-"+ro[a>>16&255]+ro[a>>24&255]+ro[o&255]+ro[o>>8&255]+ro[o>>16&255]+ro[o>>24&255]).toLowerCase()}function Rt(t,e,a){return Math.max(e,Math.min(a,t))}function Vw(t,e){return(t%e+e)%e}function Fx(t,e,a){return(1-a)*t+a*e}function Iu(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ke=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xo=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],f=o[n+2],h=o[n+3],u=r[s+0],d=r[s+1],m=r[s+2],S=r[s+3];if(h!==S||l!==u||c!==d||f!==m){let I=l*u+c*d+f*m+h*S;I<0&&(u=-u,d=-d,m=-m,S=-S,I=-I);let p=1-i;if(I<.9995){let g=Math.acos(I),y=Math.sin(g);p=Math.sin(p*g)/y,i=Math.sin(i*g)/y,l=l*p+u*i,c=c*p+d*i,f=f*p+m*i,h=h*p+S*i}else{l=l*p+u*i,c=c*p+d*i,f=f*p+m*i,h=h*p+S*i;let g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[a]=l,e[a+1]=c,e[a+2]=f,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],f=o[n+3],h=r[s],u=r[s+1],d=r[s+2],m=r[s+3];return e[a]=i*m+f*h+l*d-c*u,e[a+1]=l*m+f*u+c*h-i*d,e[a+2]=c*m+f*d+i*u-l*h,e[a+3]=f*m-i*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),f=i(n/2),h=i(r/2),u=l(o/2),d=l(n/2),m=l(r/2);switch(s){case"XYZ":this._x=u*f*h+c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h-u*d*m;break;case"YXZ":this._x=u*f*h+c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h+u*d*m;break;case"ZXY":this._x=u*f*h-c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h-u*d*m;break;case"ZYX":this._x=u*f*h-c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h+u*d*m;break;case"YZX":this._x=u*f*h+c*d*m,this._y=c*d*h+u*f*m,this._z=c*f*m-u*d*h,this._w=c*f*h-u*d*m;break;case"XZY":this._x=u*f*h-c*d*m,this._y=c*d*h-u*f*m,this._z=c*f*m+u*d*h,this._w=c*f*h+u*d*m;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],f=a[6],h=a[10],u=o+i+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(f-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,f=a._w;return this._x=o*f+s*i+n*c-r*l,this._y=n*f+s*l+r*i-o*c,this._z=r*f+s*c+o*l-n*i,this._w=s*f-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),f=Math.sin(c);l=Math.sin(l*c)/f,a=Math.sin(a*c)/f,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(BM.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(BM.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),f=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*f,this.y=o+l*f+i*c-r*h,this.z=n+l*h+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Sx.copy(this).projectOnVector(e),this.sub(Sx)}reflect(e){return this.sub(Sx.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(Rt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sx=new O,BM=new xo,Mt=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let f=this.elements;return f[0]=e,f[1]=n,f[2]=i,f[3]=a,f[4]=r,f[5]=l,f[6]=o,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],f=o[4],h=o[7],u=o[2],d=o[5],m=o[8],S=n[0],I=n[3],p=n[6],g=n[1],y=n[4],x=n[7],C=n[2],b=n[5],T=n[8];return r[0]=s*S+i*g+l*C,r[3]=s*I+i*y+l*b,r[6]=s*p+i*x+l*T,r[1]=c*S+f*g+h*C,r[4]=c*I+f*y+h*b,r[7]=c*p+f*x+h*T,r[2]=u*S+d*g+m*C,r[5]=u*I+d*y+m*b,r[8]=u*p+d*x+m*T,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8];return a*s*f-a*i*c-o*r*f+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8],h=f*s-i*c,u=i*l-f*r,d=c*r-s*l,m=a*h+o*u+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return e[0]=h*S,e[1]=(n*c-f*o)*S,e[2]=(i*o-n*s)*S,e[3]=u*S,e[4]=(f*a-n*l)*S,e[5]=(n*r-i*a)*S,e[6]=d*S,e[7]=(o*l-c*a)*S,e[8]=(s*a-o*r)*S,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vx.makeScale(e,a)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vx.makeRotation(-e)),this}translate(e,a){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vx=new Mt,UM=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kM=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gw(){let t={enabled:!0,workingColorSpace:_u,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Xt&&(n.r=Ar(n.r),n.g=Ar(n.g),n.b=Ar(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Xt&&(n.r=Bl(n.r),n.g=Bl(n.g),n.b=Bl(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Er?bu:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[_u]:{primaries:e,whitePoint:o,transfer:bu,toXYZ:UM,fromXYZ:kM,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:to},outputColorSpaceConfig:{drawingBufferColorSpace:to}},[to]:{primaries:e,whitePoint:o,transfer:Xt,toXYZ:UM,fromXYZ:kM,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:to}}}),t}var Ut=Gw();function Ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var yl,Lp=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{yl===void 0&&(yl=Tu("canvas")),yl.width=e.width,yl.height=e.height;let n=yl.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=yl}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=Tu("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Ar(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(Ar(a[o]/255)*255):a[o]=Ar(a[o]);return{data:a,width:e.width,height:e.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qw=0,Ol=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=rc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push(yx(n[s].image)):r.push(yx(n[s]))}else r=yx(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function yx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Lp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Ww=0,Mx=new O,go=class t extends $n{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=un,n=un,r=Na,s=tr,i=fn,l=Do,c=t.DEFAULT_ANISOTROPY,f=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=rc(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mx).x}get height(){return this.source.getSize(Mx).y}get depth(){return this.source.getSize(Mx).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){It(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){It(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};go.DEFAULT_IMAGE=null;go.DEFAULT_MAPPING=mg;go.DEFAULT_ANISOTROPY=1;var Ia=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],m=l[9],S=l[2],I=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(m-I)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(m+I)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(c+1)/2,x=(d+1)/2,C=(p+1)/2,b=(f+u)/4,T=(h+S)/4,v=(m+I)/4;return y>x&&y>C?y<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(y),n=b/o,r=T/o):x>C?x<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),o=b/n,r=v/n):C<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),o=T/r,n=v/r),this.set(o,n,r,a),this}let g=Math.sqrt((I-m)*(I-m)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(I-m)/g,this.y=(h-S)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Rt(this.x,e.x,a.x),this.y=Rt(this.y,e.y,a.y),this.z=Rt(this.z,e.z,a.z),this.w=Rt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Rt(this.x,e,a),this.y=Rt(this.y,e,a),this.z=Rt(this.z,e,a),this.w=Rt(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(Rt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pp=class extends $n{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Na,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new Ia(0,0,e,a),this.scissorTest=!1,this.viewport=new Ia(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new go(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Na,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new Ol(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class extends Pp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},Au=class extends go{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Xa,this.minFilter=Xa,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bp=class extends go{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Xa,this.minFilter=Xa,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var na=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,f,h,u,d,m,S,I){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,f,h,u,d,m,S,I)}set(e,a,o,n,r,s,i,l,c,f,h,u,d,m,S,I){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=m,p[11]=S,p[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/Ml.setFromMatrixColumn(e,0).length(),r=1/Ml.setFromMatrixColumn(e,1).length(),s=1/Ml.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*f,d=s*h,m=i*f,S=i*h;a[0]=l*f,a[4]=-l*h,a[8]=c,a[1]=d+m*c,a[5]=u-S*c,a[9]=-i*l,a[2]=S-u*c,a[6]=m+d*c,a[10]=s*l}else if(e.order==="YXZ"){let u=l*f,d=l*h,m=c*f,S=c*h;a[0]=u+S*i,a[4]=m*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*f,a[9]=-i,a[2]=d*i-m,a[6]=S+u*i,a[10]=s*l}else if(e.order==="ZXY"){let u=l*f,d=l*h,m=c*f,S=c*h;a[0]=u-S*i,a[4]=-s*h,a[8]=m+d*i,a[1]=d+m*i,a[5]=s*f,a[9]=S-u*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let u=s*f,d=s*h,m=i*f,S=i*h;a[0]=l*f,a[4]=m*c-d,a[8]=u*c+S,a[1]=l*h,a[5]=S*c+u,a[9]=d*c-m,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let u=s*l,d=s*c,m=i*l,S=i*c;a[0]=l*f,a[4]=S-u*h,a[8]=m*h+d,a[1]=h,a[5]=s*f,a[9]=-i*f,a[2]=-c*f,a[6]=d*h+m,a[10]=u-S*h}else if(e.order==="XZY"){let u=s*l,d=s*c,m=i*l,S=i*c;a[0]=l*f,a[4]=-h,a[8]=c*f,a[1]=u*h+S,a[5]=s*f,a[9]=d*h-m,a[2]=m*h-d,a[6]=i*f,a[10]=S*h+u}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xw,e,Yw)}lookAt(e,a,o){let n=this.elements;return Wo.subVectors(e,a),Wo.lengthSq()===0&&(Wo.z=1),Wo.normalize(),ps.crossVectors(o,Wo),ps.lengthSq()===0&&(Math.abs(o.z)===1?Wo.x+=1e-4:Wo.z+=1e-4,Wo.normalize(),ps.crossVectors(o,Wo)),ps.normalize(),ep.crossVectors(Wo,ps),n[0]=ps.x,n[4]=ep.x,n[8]=Wo.x,n[1]=ps.y,n[5]=ep.y,n[9]=Wo.y,n[2]=ps.z,n[6]=ep.z,n[10]=Wo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],f=o[1],h=o[5],u=o[9],d=o[13],m=o[2],S=o[6],I=o[10],p=o[14],g=o[3],y=o[7],x=o[11],C=o[15],b=n[0],T=n[4],v=n[8],A=n[12],w=n[1],L=n[5],X=n[9],z=n[13],B=n[2],k=n[6],ae=n[10],J=n[14],se=n[3],G=n[7],K=n[11],oe=n[15];return r[0]=s*b+i*w+l*B+c*se,r[4]=s*T+i*L+l*k+c*G,r[8]=s*v+i*X+l*ae+c*K,r[12]=s*A+i*z+l*J+c*oe,r[1]=f*b+h*w+u*B+d*se,r[5]=f*T+h*L+u*k+d*G,r[9]=f*v+h*X+u*ae+d*K,r[13]=f*A+h*z+u*J+d*oe,r[2]=m*b+S*w+I*B+p*se,r[6]=m*T+S*L+I*k+p*G,r[10]=m*v+S*X+I*ae+p*K,r[14]=m*A+S*z+I*J+p*oe,r[3]=g*b+y*w+x*B+C*se,r[7]=g*T+y*L+x*k+C*G,r[11]=g*v+y*X+x*ae+C*K,r[15]=g*A+y*z+x*J+C*oe,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],m=e[3],S=e[7],I=e[11],p=e[15],g=l*d-c*u,y=i*d-c*h,x=i*u-l*h,C=s*d-c*f,b=s*u-l*f,T=s*h-i*f;return a*(S*g-I*y+p*x)-o*(m*g-I*C+p*b)+n*(m*y-S*C+p*T)-r*(m*x-S*b+I*T)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],f=e[10];return a*(s*f-i*c)-o*(r*f-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],m=e[12],S=e[13],I=e[14],p=e[15],g=a*i-o*s,y=a*l-n*s,x=a*c-r*s,C=o*l-n*i,b=o*c-r*i,T=n*c-r*l,v=f*S-h*m,A=f*I-u*m,w=f*p-d*m,L=h*I-u*S,X=h*p-d*S,z=u*p-d*I,B=g*z-y*X+x*L+C*w-b*A+T*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/B;return e[0]=(i*z-l*X+c*L)*k,e[1]=(n*X-o*z-r*L)*k,e[2]=(S*T-I*b+p*C)*k,e[3]=(u*b-h*T-d*C)*k,e[4]=(l*w-s*z-c*A)*k,e[5]=(a*z-n*w+r*A)*k,e[6]=(I*x-m*T-p*y)*k,e[7]=(f*T-u*x+d*y)*k,e[8]=(s*X-i*w+c*v)*k,e[9]=(o*w-a*X-r*v)*k,e[10]=(m*b-S*x+p*g)*k,e[11]=(h*x-f*b-d*g)*k,e[12]=(i*A-s*L-l*v)*k,e[13]=(a*L-o*A+n*v)*k,e[14]=(S*y-m*C-I*g)*k,e[15]=(f*C-h*y+u*g)*k,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,f=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,f*i+o,f*l-n*s,0,c*l-n*i,f*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,f=s+s,h=i+i,u=r*c,d=r*f,m=r*h,S=s*f,I=s*h,p=i*h,g=l*c,y=l*f,x=l*h,C=o.x,b=o.y,T=o.z;return n[0]=(1-(S+p))*C,n[1]=(d+x)*C,n[2]=(m-y)*C,n[3]=0,n[4]=(d-x)*b,n[5]=(1-(u+p))*b,n[6]=(I+g)*b,n[7]=0,n[8]=(m+y)*T,n[9]=(I-g)*T,n[10]=(1-(u+S))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=Ml.set(n[0],n[1],n[2]).length(),i=Ml.set(n[4],n[5],n[6]).length(),l=Ml.set(n[8],n[9],n[10]).length();r<0&&(s=-s),yn.copy(this);let c=1/s,f=1/i,h=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=f,yn.elements[5]*=f,yn.elements[6]*=f,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,a.setFromRotationMatrix(yn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=bn,l=!1){let c=this.elements,f=2*r/(a-e),h=2*r/(o-n),u=(a+e)/(a-e),d=(o+n)/(o-n),m,S;if(l)m=r/(s-r),S=s*r/(s-r);else if(i===bn)m=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(i===kl)m=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=bn,l=!1){let c=this.elements,f=2/(a-e),h=2/(o-n),u=-(a+e)/(a-e),d=-(o+n)/(o-n),m,S;if(l)m=1/(s-r),S=s/(s-r);else if(i===bn)m=-2/(s-r),S=-(s+r)/(s-r);else if(i===kl)m=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},Ml=new O,yn=new na,Xw=new O(0,0,0),Yw=new O(1,1,1),ps=new O,ep=new O,Wo=new O,NM=new na,OM=new xo,wr=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],f=n[9],h=n[2],u=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(Rt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return NM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(NM,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return OM.setFromEuler(this),this.setFromQuaternion(OM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wr.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zw=0,zM=new O,Cl=new xo,Mr=new na,tp=new O,xu=new O,Kw=new O,Jw=new xo,HM=new O(1,0,0),VM=new O(0,1,0),GM=new O(0,0,1),qM={type:"added"},Qw={type:"removed"},_l={type:"childadded",child:null},Cx={type:"childremoved",child:null},Fo=class t extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=rc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new O,a=new wr,o=new xo,n=new O(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new na},normalMatrix:{value:new Mt}}),this.matrix=new na,this.matrixWorld=new na,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Cl.setFromAxisAngle(e,a),this.quaternion.multiply(Cl),this}rotateOnWorldAxis(e,a){return Cl.setFromAxisAngle(e,a),this.quaternion.premultiply(Cl),this}rotateX(e){return this.rotateOnAxis(HM,e)}rotateY(e){return this.rotateOnAxis(VM,e)}rotateZ(e){return this.rotateOnAxis(GM,e)}translateOnAxis(e,a){return zM.copy(e).applyQuaternion(this.quaternion),this.position.add(zM.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(HM,e)}translateY(e){return this.translateOnAxis(VM,e)}translateZ(e){return this.translateOnAxis(GM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?tp.copy(e):tp.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),xu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(xu,tp,this.up):Mr.lookAt(tp,xu,this.up),this.quaternion.setFromRotationMatrix(Mr),n&&(Mr.extractRotation(n.matrixWorld),Cl.setFromRotationMatrix(Mr),this.quaternion.premultiply(Cl.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qM),_l.child=e,this.dispatchEvent(_l),_l.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(Qw),Cx.child=e,this.dispatchEvent(Cx),Cx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qM),_l.child=e,this.dispatchEvent(_l),_l.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xu,e,Kw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xu,Jw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),u=s(e.skeletons),d=s(e.animations),m=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),f.length>0&&(o.images=f),h.length>0&&(o.shapes=h),u.length>0&&(o.skeletons=u),d.length>0&&(o.animations=d),m.length>0&&(o.nodes=m)}return o.object=n,o;function s(i){let l=[];for(let c in i){let f=i[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fo.DEFAULT_UP=new O(0,1,0);Fo.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=class extends Fo{constructor(){super(),this.isGroup=!0,this.type="Group"}},jw={type:"move"},Hl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let S of e.hand.values()){let I=a.getJointPose(S,o),p=this._getHandJoint(c,S);I!==null&&(p.matrix.fromArray(I.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=I.radius),p.visible=I!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Kn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},YC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},ap={h:0,s:0,l:0};function _x(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var _t=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=to){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=Ut.workingColorSpace){return this.r=e,this.g=a,this.b=o,Ut.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=Ut.workingColorSpace){if(e=Vw(e,1),a=Rt(a,0,1),o=Rt(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=_x(s,r,e+1/3),this.g=_x(s,r,e),this.b=_x(s,r,e-1/3)}return Ut.colorSpaceToWorking(this,n),this}setStyle(e,a=to){function o(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:It("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);It("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=to){let o=YC[e.toLowerCase()];return o!==void 0?this.setHex(o,a):It("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=to){return Ut.workingToColorSpace(so.copy(this),e),Math.round(Rt(so.r*255,0,255))*65536+Math.round(Rt(so.g*255,0,255))*256+Math.round(Rt(so.b*255,0,255))}getHexString(e=to){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ut.workingColorSpace){Ut.workingToColorSpace(so.copy(this),a);let o=so.r,n=so.g,r=so.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,f=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=f<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,a=Ut.workingColorSpace){return Ut.workingToColorSpace(so.copy(this),a),e.r=so.r,e.g=so.g,e.b=so.b,e}getStyle(e=to){Ut.workingToColorSpace(so.copy(this),e);let a=so.r,o=so.g,n=so.b;return e!==to?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+a,hs.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL(hs),e.getHSL(ap);let o=Fx(hs.h,ap.h,a),n=Fx(hs.s,ap.s,a),r=Fx(hs.l,ap.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},so=new _t;_t.NAMES=YC;var Vl=class extends Fo{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Mn=new O,Cr=new O,bx=new O,_r=new O,bl=new O,Tl=new O,WM=new O,Tx=new O,Ax=new O,wx=new O,Ex=new Ia,Rx=new Ia,Dx=new Ia,gs=class t{constructor(e=new O,a=new O,o=new O){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),Mn.subVectors(e,a),n.cross(Mn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){Mn.subVectors(n,a),Cr.subVectors(o,a),bx.subVectors(e,a);let s=Mn.dot(Mn),i=Mn.dot(Cr),l=Mn.dot(bx),c=Cr.dot(Cr),f=Cr.dot(bx),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-i*f)*u,m=(s*f-i*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_r.x),l.addScaledVector(s,_r.y),l.addScaledVector(i,_r.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return Ex.setScalar(0),Rx.setScalar(0),Dx.setScalar(0),Ex.fromBufferAttribute(e,a),Rx.fromBufferAttribute(e,o),Dx.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Ex,r.x),s.addScaledVector(Rx,r.y),s.addScaledVector(Dx,r.z),s}static isFrontFacing(e,a,o,n){return Mn.subVectors(o,a),Cr.subVectors(e,a),Mn.cross(Cr).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Mn.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;bl.subVectors(n,o),Tl.subVectors(r,o),Tx.subVectors(e,o);let l=bl.dot(Tx),c=Tl.dot(Tx);if(l<=0&&c<=0)return a.copy(o);Ax.subVectors(e,n);let f=bl.dot(Ax),h=Tl.dot(Ax);if(f>=0&&h<=f)return a.copy(n);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return s=l/(l-f),a.copy(o).addScaledVector(bl,s);wx.subVectors(e,r);let d=bl.dot(wx),m=Tl.dot(wx);if(m>=0&&d<=m)return a.copy(r);let S=d*c-l*m;if(S<=0&&c>=0&&m<=0)return i=c/(c-m),a.copy(o).addScaledVector(Tl,i);let I=f*m-d*h;if(I<=0&&h-f>=0&&d-m>=0)return WM.subVectors(r,n),i=(h-f)/(h-f+(d-m)),a.copy(n).addScaledVector(WM,i);let p=1/(I+S+u);return s=S*p,i=u*p,a.copy(o).addScaledVector(bl,s).addScaledVector(Tl,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fs=class{constructor(e=new O(1/0,1/0,1/0),a=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(Cn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(Cn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=Cn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,Cn):Cn.fromBufferAttribute(r,s),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),op.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),op.copy(o.boundingBox)),op.applyMatrix4(e.matrixWorld),this.union(op)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gu),np.subVectors(this.max,gu),Al.subVectors(e.a,gu),wl.subVectors(e.b,gu),El.subVectors(e.c,gu),ms.subVectors(wl,Al),Is.subVectors(El,wl),ri.subVectors(Al,El);let a=[0,-ms.z,ms.y,0,-Is.z,Is.y,0,-ri.z,ri.y,ms.z,0,-ms.x,Is.z,0,-Is.x,ri.z,0,-ri.x,-ms.y,ms.x,0,-Is.y,Is.x,0,-ri.y,ri.x,0];return!Lx(a,Al,wl,El,np)||(a=[1,0,0,0,1,0,0,0,1],!Lx(a,Al,wl,El,np))?!1:(rp.crossVectors(ms,Is),a=[rp.x,rp.y,rp.z],Lx(a,Al,wl,El,np))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new O,new O,new O,new O,new O,new O,new O,new O],Cn=new O,op=new Fs,Al=new O,wl=new O,El=new O,ms=new O,Is=new O,ri=new O,gu=new O,np=new O,rp=new O,si=new O;function Lx(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){si.fromArray(t,r);let i=n.x*Math.abs(si.x)+n.y*Math.abs(si.y)+n.z*Math.abs(si.z),l=e.dot(si),c=a.dot(si),f=o.dot(si);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>i)return!1}return!0}var Ra=new O,sp=new ke,$w=0,lo=class extends $n{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$w++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=VC,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)sp.fromBufferAttribute(this,a),sp.applyMatrix3(e),this.setXY(a,sp.x,sp.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyMatrix3(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyMatrix4(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.applyNormalMatrix(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)Ra.fromBufferAttribute(this,a),Ra.transformDirection(e),this.setXYZ(a,Ra.x,Ra.y,Ra.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=Iu(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=Eo(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Iu(a,this.array)),a}setX(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Iu(a,this.array)),a}setY(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Iu(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Iu(a,this.array)),a}setW(e,a){return this.normalized&&(a=Eo(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array),n=Eo(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=Eo(a,this.array),o=Eo(o,this.array),n=Eo(n,this.array),r=Eo(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var wu=class extends lo{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var Eu=class extends lo{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var Da=class extends lo{constructor(e,a,o){super(new Float32Array(e),a,o)}},e2=new Fs,Fu=new O,Px=new O,Gl=class{constructor(e=new O,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):e2.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fu.subVectors(e,this.center);let a=Fu.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(Fu,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Px.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fu.copy(e.center).add(Px)),this.expandByPoint(Fu.copy(e.center).sub(Px))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},t2=0,cn=new na,Bx=new Fo,Rl=new O,Xo=new Fs,Su=new Fs,Wa=new O,So=class t extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=rc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zw(e)?Eu:wu)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new Mt().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,a,o){return cn.makeTranslation(e,a,o),this.applyMatrix4(cn),this}scale(e,a,o){return cn.makeScale(e,a,o),this.applyMatrix4(cn),this}lookAt(e){return Bx.lookAt(e),Bx.updateMatrix(),this.applyMatrix4(Bx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rl).negate(),this.translate(Rl.x,Rl.y,Rl.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Da(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];Xo.setFromBufferAttribute(r),this.morphTargetsRelative?(Wa.addVectors(this.boundingBox.min,Xo.min),this.boundingBox.expandByPoint(Wa),Wa.addVectors(this.boundingBox.max,Xo.max),this.boundingBox.expandByPoint(Wa)):(this.boundingBox.expandByPoint(Xo.min),this.boundingBox.expandByPoint(Xo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let o=this.boundingSphere.center;if(Xo.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];Su.setFromBufferAttribute(i),this.morphTargetsRelative?(Wa.addVectors(Xo.min,Su.min),Xo.expandByPoint(Wa),Wa.addVectors(Xo.max,Su.max),Xo.expandByPoint(Wa)):(Xo.expandByPoint(Su.min),Xo.expandByPoint(Su.max))}Xo.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Wa.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Wa));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,f=i.count;c<f;c++)Wa.fromBufferAttribute(i,c),l&&(Rl.fromBufferAttribute(e,c),Wa.add(Rl)),n=Math.max(n,o.distanceToSquared(Wa))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new lo(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let v=0;v<o.count;v++)i[v]=new O,l[v]=new O;let c=new O,f=new O,h=new O,u=new ke,d=new ke,m=new ke,S=new O,I=new O;function p(v,A,w){c.fromBufferAttribute(o,v),f.fromBufferAttribute(o,A),h.fromBufferAttribute(o,w),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),f.sub(c),h.sub(c),d.sub(u),m.sub(u);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(S.copy(f).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),I.copy(h).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(L),i[v].add(S),i[A].add(S),i[w].add(S),l[v].add(I),l[A].add(I),l[w].add(I))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let v=0,A=g.length;v<A;++v){let w=g[v],L=w.start,X=w.count;for(let z=L,B=L+X;z<B;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new O,x=new O,C=new O,b=new O;function T(v){C.fromBufferAttribute(n,v),b.copy(C);let A=i[v];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(b,A);let L=x.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,L)}for(let v=0,A=g.length;v<A;++v){let w=g[v],L=w.start,X=w.count;for(let z=L,B=L+X;z<B;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new lo(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let u=0,d=o.count;u<d;u++)o.setXYZ(u,0,0,0);let n=new O,r=new O,s=new O,i=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),S=e.getX(u+1),I=e.getX(u+2);n.fromBufferAttribute(a,m),r.fromBufferAttribute(a,S),s.fromBufferAttribute(a,I),f.subVectors(s,r),h.subVectors(n,r),f.cross(h),i.fromBufferAttribute(o,m),l.fromBufferAttribute(o,S),c.fromBufferAttribute(o,I),i.add(f),l.add(f),c.add(f),o.setXYZ(m,i.x,i.y,i.z),o.setXYZ(S,l.x,l.y,l.z),o.setXYZ(I,c.x,c.y,c.z)}else for(let u=0,d=a.count;u<d;u+=3)n.fromBufferAttribute(a,u+0),r.fromBufferAttribute(a,u+1),s.fromBufferAttribute(a,u+2),f.subVectors(s,r),h.subVectors(n,r),f.cross(h),o.setXYZ(u+0,f.x,f.y,f.z),o.setXYZ(u+1,f.x,f.y,f.z),o.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Wa.fromBufferAttribute(e,a),Wa.normalize(),e.setXYZ(a,Wa.x,Wa.y,Wa.z)}toNonIndexed(){function e(i,l){let c=i.array,f=i.itemSize,h=i.normalized,u=new c.constructor(l.length*f),d=0,m=0;for(let S=0,I=l.length;S<I;S++){i.isInterleavedBufferAttribute?d=l[S]*i.data.stride+i.offset:d=l[S]*f;for(let p=0;p<f;p++)u[m++]=c[d++]}return new lo(u,f,h)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=e(u,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(n[l]=f,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let f=n[c];this.setAttribute(c,f.clone(a))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(a));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,f=s.length;c<f;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ux=new O,a2=new O,o2=new Mt,_n=class{constructor(e=new O(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=Ux.subVectors(o,a).cross(a2.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(Ux),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||o2.getNormalMatrix(e),n=this.coplanarPoint(Ux).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},n2=0,Ss=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=rc(),this.name="",this.type="Material",this.blending=ac,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sg,this.blendDst=ig,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yp,this.stencilZFail=yp,this.stencilZPass=yp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){It(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){It(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new _n().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new ke().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tr=new O,kx=new O,ip=new O,lp=new O,Ru=class{constructor(e=new O,a=new O(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Tr.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,a),Tr.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){kx.copy(e).add(a).multiplyScalar(.5),ip.copy(a).sub(e).normalize(),lp.copy(this.origin).sub(kx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(ip),i=lp.dot(this.direction),l=-lp.dot(ip),c=lp.lengthSq(),f=Math.abs(1-s*s),h,u,d,m;if(f>0)if(h=s*l-i,u=s*i-l,m=r*f,h>=0)if(u>=-m)if(u<=m){let S=1/f;h*=S,u*=S,d=h*(h+s*u+2*i)+u*(s*h+u+2*l)+c}else u=r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-s*r+i)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(s*r+i)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=s>0?-r:r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(kx).addScaledVector(ip,u),d}intersectSphere(e,a){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let o=Tr.dot(this.direction),n=Tr.dot(Tr)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(o=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(o=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(i=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,f=i.z,h=e.x-s.x,u=e.y-s.y,d=e.z-s.z,m=a.x-s.x,S=a.y-s.y,I=a.z-s.z,p=o.x-s.x,g=o.y-s.y,y=o.z-s.z,x=Math.abs(l),C=Math.abs(c),b=Math.abs(f),T,v,A,w,L,X,z,B,k,ae,J,se;if(x>=C&&x>=b?(A=l,X=h,k=m,se=p,l>=0?(T=c,v=f,w=u,L=d,z=S,B=I,ae=g,J=y):(T=f,v=c,w=d,L=u,z=I,B=S,ae=y,J=g)):C>=b?(A=c,X=u,k=S,se=g,c>=0?(T=f,v=l,w=d,L=h,z=I,B=m,ae=y,J=p):(T=l,v=f,w=h,L=d,z=m,B=I,ae=p,J=y)):(A=f,X=d,k=I,se=y,f>=0?(T=l,v=c,w=h,L=u,z=m,B=S,ae=p,J=g):(T=c,v=l,w=u,L=h,z=S,B=m,ae=g,J=p)),A===0)return null;let G=T/A,K=v/A,oe=1/A,De=w-G*X,be=L-K*X,$e=z-G*k,H=B-K*k,lt=ae-G*se,ee=J-K*se,te=lt*H-ee*$e,Ee=De*ee-be*lt,Ke=$e*be-H*De;if(n){if(te<0||Ee<0||Ke<0)return null}else if((te<0||Ee<0||Ke<0)&&(te>0||Ee>0||Ke>0))return null;let Me=te+Ee+Ke;if(Me===0)return null;let Ye=oe*(te*X+Ee*k+Ke*se);return(Me>0?Ye<0:Ye>0)?null:this.at(Ye/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},XM=new na,ii=new Ru,cp=new Gl,YM=new O,up=new O,fp=new O,dp=new O,Nx=new O,pp=new O,ZM=new O,hp=new O,Ca=class extends Fo{constructor(e=new So,a=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){pp.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=i[l],h=r[l];f!==0&&(Nx.fromBufferAttribute(h,e),s?pp.addScaledVector(Nx,f):pp.addScaledVector(Nx.sub(a),f))}a.add(pp)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),cp.copy(o.boundingSphere),cp.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(cp.containsPoint(ii.origin)===!1&&(ii.intersectSphere(cp,YM)===null||ii.origin.distanceToSquared(YM)>(e.far-e.near)**2))&&(XM.copy(r).invert(),ii.copy(e.ray).applyMatrix4(XM),!(o.boundingBox!==null&&ii.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,ii)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){let I=u[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(i.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,C=y;x<C;x+=3){let b=i.getX(x),T=i.getX(x+1),v=i.getX(x+2);n=mp(this,p,e,o,c,f,h,b,T,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),S=Math.min(i.count,d.start+d.count);for(let I=m,p=S;I<p;I+=3){let g=i.getX(I),y=i.getX(I+1),x=i.getX(I+2);n=mp(this,s,e,o,c,f,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,S=u.length;m<S;m++){let I=u[m],p=s[I.materialIndex],g=Math.max(I.start,d.start),y=Math.min(l.count,Math.min(I.start+I.count,d.start+d.count));for(let x=g,C=y;x<C;x+=3){let b=x,T=x+1,v=x+2;n=mp(this,p,e,o,c,f,h,b,T,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=I.materialIndex,a.push(n))}}else{let m=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let I=m,p=S;I<p;I+=3){let g=I,y=I+1,x=I+2;n=mp(this,s,e,o,c,f,h,g,y,x),n&&(n.faceIndex=Math.floor(I/3),a.push(n))}}}};function r2(t,e,a,o,n,r,s,i){let l;if(e.side===vo?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===Ts,i),l===null)return null;hp.copy(i),hp.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(hp);return c<a.near||c>a.far?null:{distance:c,point:hp.clone(),object:t}}function mp(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,up),t.getVertexPosition(l,fp),t.getVertexPosition(c,dp);let f=r2(t,e,a,o,up,fp,dp,ZM);if(f){let h=new O;gs.getBarycoord(ZM,up,fp,dp,h),n&&(f.uv=gs.getInterpolatedAttribute(n,i,l,c,h,new ke)),r&&(f.uv1=gs.getInterpolatedAttribute(r,i,l,c,h,new ke)),s&&(f.normal=gs.getInterpolatedAttribute(s,i,l,c,h,new O),f.normal.dot(o.direction)>0&&f.normal.multiplyScalar(-1));let u={a:i,b:l,c,normal:new O,materialIndex:0};gs.getNormal(up,fp,dp,u.normal),f.face=u,f.barycoord=h}return f}var ql=class extends go{constructor(e=null,a=1,o=1,n,r,s,i,l,c=Xa,f=Xa,h,u){super(null,s,i,l,c,f,n,r,h,u),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=new Gl,s2=new ke(.5,.5),Ip=new O,Wl=class{constructor(e=new _n,a=new _n,o=new _n,n=new _n,r=new _n,s=new _n){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=bn,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],m=r[8],S=r[9],I=r[10],p=r[11],g=r[12],y=r[13],x=r[14],C=r[15];if(n[0].setComponents(c-s,d-f,p-m,C-g).normalize(),n[1].setComponents(c+s,d+f,p+m,C+g).normalize(),n[2].setComponents(c+i,d+h,p+S,C+y).normalize(),n[3].setComponents(c-i,d-h,p-S,C-y).normalize(),o)n[4].setComponents(l,u,I,x).normalize(),n[5].setComponents(c-l,d-u,p-I,C-x).normalize();else if(n[4].setComponents(c-l,d-u,p-I,C-x).normalize(),a===bn)n[5].setComponents(c+l,d+u,p+I,C+x).normalize();else if(a===kl)n[5].setComponents(l,u,I,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),li.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let a=s2.distanceTo(e.center);return li.radius=.7071067811865476+a,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if(Ip.x=n.normal.x>0?e.max.x:e.min.x,Ip.y=n.normal.y>0?e.max.y:e.min.y,Ip.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ip)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Du=class extends go{constructor(e=[],a=As,o,n,r,s,i,l,c,f){super(e,a,o,n,r,s,i,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends go{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vs=class extends go{constructor(e,a,o=An,n,r,s,i=Xa,l=Xa,c,f=jn,h=1){if(f!==jn&&f!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:a,depth:h};super(u,n,r,s,i,l,f,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},Up=class extends vs{constructor(e,a=An,o=As,n,r,s=Xa,i=Xa,l,c=jn){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lu=class extends go{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xl=class t extends So{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],f=[],h=[],u=0,d=0;m("z","y","x",-1,-1,o,a,e,s,r,0),m("z","y","x",1,-1,o,a,-e,s,r,1),m("x","z","y",1,1,e,o,a,n,s,2),m("x","z","y",1,-1,e,o,-a,n,s,3),m("x","y","z",1,-1,e,a,o,n,r,4),m("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new Da(c,3)),this.setAttribute("normal",new Da(f,3)),this.setAttribute("uv",new Da(h,2));function m(S,I,p,g,y,x,C,b,T,v,A){let w=x/T,L=C/v,X=x/2,z=C/2,B=b/2,k=T+1,ae=v+1,J=0,se=0,G=new O;for(let K=0;K<ae;K++){let oe=K*L-z;for(let De=0;De<k;De++){let be=De*w-X;G[S]=be*g,G[I]=oe*y,G[p]=B,c.push(G.x,G.y,G.z),G[S]=0,G[I]=0,G[p]=b>0?1:-1,f.push(G.x,G.y,G.z),h.push(De/T),h.push(1-K/v),J+=1}}for(let K=0;K<v;K++)for(let oe=0;oe<T;oe++){let De=u+oe+k*K,be=u+oe+k*(K+1),$e=u+(oe+1)+k*(K+1),H=u+(oe+1)+k*K;l.push(De,be,H),l.push(be,$e,H),se+=6}i.addGroup(d,se,A),d+=se,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Yo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let f=o[n],u=o[n+1]-f,d=(s-f)/u;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new ke:new O);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new O,n=[],r=[],s=[],i=new O,l=new na;for(let d=0;d<=e;d++){let m=d/e;n[d]=this.getTangentAt(m,new O)}r[0]=new O,s[0]=new O;let c=Number.MAX_VALUE,f=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);f<=c&&(c=f,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),u<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let m=Math.acos(Rt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,m))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yl=class extends Yo{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new ke){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kp=class extends Yl{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function _g(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,f,h){let u=(s-r)/c-(i-r)/(c+f)+(i-s)/f,d=(i-s)/f-(l-s)/(f+h)+(l-i)/h;u*=f,d*=f,n(s,i,u,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var KM=new O,JM=new O,Ox=new _g,zx=new _g,Hx=new _g,Zl=class extends Yo{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new O){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,f;this.closed||i>0?c=n[(i-1)%r]:(JM.subVectors(n[0],n[1]).add(n[0]),c=JM);let h=n[i%r],u=n[(i+1)%r];if(this.closed||i+2<r?f=n[(i+2)%r]:(KM.subVectors(n[r-1],n[r-2]).add(n[r-1]),f=KM),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),S=Math.pow(h.distanceToSquared(u),d),I=Math.pow(u.distanceToSquared(f),d);S<1e-4&&(S=1),m<1e-4&&(m=S),I<1e-4&&(I=S),Ox.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,m,S,I),zx.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,m,S,I),Hx.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,m,S,I)}else this.curveType==="catmullrom"&&(Ox.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),zx.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),Hx.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return o.set(Ox.calc(l),zx.calc(l),Hx.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new O().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function QM(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function i2(t,e){let a=1-t;return a*a*e}function l2(t,e){return 2*(1-t)*t*e}function c2(t,e){return t*t*e}function yu(t,e,a,o){return i2(t,e)+l2(t,a)+c2(t,o)}function u2(t,e){let a=1-t;return a*a*a*e}function f2(t,e){let a=1-t;return 3*a*a*t*e}function d2(t,e){return 3*(1-t)*t*t*e}function p2(t,e){return t*t*t*e}function Mu(t,e,a,o,n){return u2(t,e)+f2(t,a)+d2(t,o)+p2(t,n)}var Pu=class extends Yo{constructor(e=new ke,a=new ke,o=new ke,n=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new ke){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(Mu(e,n.x,r.x,s.x,i.x),Mu(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Np=class extends Yo{constructor(e=new O,a=new O,o=new O,n=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new O){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(Mu(e,n.x,r.x,s.x,i.x),Mu(e,n.y,r.y,s.y,i.y),Mu(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bu=class extends Yo{constructor(e=new ke,a=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new ke){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new ke){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Op=class extends Yo{constructor(e=new O,a=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new O){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new O){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uu=class extends Yo{constructor(e=new ke,a=new ke,o=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new ke){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(yu(e,n.x,r.x,s.x),yu(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zp=class extends Yo{constructor(e=new O,a=new O,o=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new O){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(yu(e,n.x,r.x,s.x),yu(e,n.y,r.y,s.y),yu(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ku=class extends Yo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new ke){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],f=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(QM(i,l.x,c.x,f.x,h.x),QM(i,l.y,c.y,f.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new ke().fromArray(n))}return this}},Zx=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:Zl,CubicBezierCurve:Pu,CubicBezierCurve3:Np,EllipseCurve:Yl,LineCurve:Bu,LineCurve3:Op,QuadraticBezierCurve:Uu,QuadraticBezierCurve3:zp,SplineCurve:ku}),Hp=class extends Yo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zx[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let f=l[c];o&&o.equals(f)||(a.push(f),o=f)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new Zx[n.type]().fromJSON(n))}return this}},di=class extends Hp{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new Bu(this.currentPoint.clone(),new ke(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new Uu(this.currentPoint.clone(),new ke(e,a),new ke(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new Pu(this.currentPoint.clone(),new ke(e,a),new ke(o,n),new ke(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new ku(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,a+f,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new Yl(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ys=class extends di{constructor(e){super(e),this.uuid=rc(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new di().fromJSON(n))}return this}};function h2(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=ZC(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=F2(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let f=i,h=l;for(let u=a;u<n;u+=a){let d=t[u],m=t[u+1];d<i&&(i=d),m<l&&(l=m),d>f&&(f=d),m>h&&(h=m)}c=Math.max(f-i,h-l),c=c!==0?32767/c:0}return Nu(r,s,a,i,l,c,0),s}function ZC(t,e,a,o,n){let r;if(n===E2(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=jM(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=jM(s/o|0,t[s],t[s+1],r);return r&&Kl(r,r.next)&&(zu(r),r=r.next),r}function pi(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(Kl(a,a.next)||ga(a.prev,a,a.next)===0)){if(zu(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function Nu(t,e,a,o,n,r,s){if(!t)return;!s&&r&&C2(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?I2(t,o,n,r):m2(t)){e.push(l.i,t.i,c.i),zu(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=x2(pi(t),e),Nu(t,e,a,o,n,r,2)):s===2&&g2(t,e,a,o,n,r):Nu(pi(t),e,a,o,n,r,1);break}}}function m2(t){let e=t.prev,a=t,o=t.next;if(ga(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,f=Math.min(n,r,s),h=Math.min(i,l,c),u=Math.max(n,r,s),d=Math.max(i,l,c),m=o.next;for(;m!==e;){if(m.x>=f&&m.x<=u&&m.y>=h&&m.y<=d&&vu(n,i,r,l,s,c,m.x,m.y)&&ga(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function I2(t,e,a,o){let n=t.prev,r=t,s=t.next;if(ga(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,f=n.y,h=r.y,u=s.y,d=Math.min(i,l,c),m=Math.min(f,h,u),S=Math.max(i,l,c),I=Math.max(f,h,u),p=Kx(d,m,e,a,o),g=Kx(S,I,e,a,o),y=t.prevZ,x=t.nextZ;for(;y&&y.z>=p&&x&&x.z<=g;){if(y.x>=d&&y.x<=S&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&vu(i,f,l,h,c,u,y.x,y.y)&&ga(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=S&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&vu(i,f,l,h,c,u,x.x,x.y)&&ga(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=S&&y.y>=m&&y.y<=I&&y!==n&&y!==s&&vu(i,f,l,h,c,u,y.x,y.y)&&ga(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=g;){if(x.x>=d&&x.x<=S&&x.y>=m&&x.y<=I&&x!==n&&x!==s&&vu(i,f,l,h,c,u,x.x,x.y)&&ga(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function x2(t,e){let a=t;do{let o=a.prev,n=a.next.next;!Kl(o,n)&&JC(o,a,a.next,n)&&Ou(o,n)&&Ou(n,o)&&(e.push(o.i,a.i,n.i),zu(a),zu(a.next),a=t=n),a=a.next}while(a!==t);return pi(a)}function g2(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&T2(s,i)){let l=QC(s,i);s=pi(s,s.next),l=pi(l,l.next),Nu(s,e,a,o,n,r,0),Nu(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function F2(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=ZC(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(b2(c))}n.sort(S2);for(let r=0;r<n.length;r++)a=v2(n[r],a);return a}function S2(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function v2(t,e){let a=y2(t,e);if(!a)return e;let o=QC(a,t);return pi(o,o.next),pi(a,a.next)}function y2(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(Kl(t,a))return a;do{if(Kl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,f=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&KC(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);Ou(a,t)&&(h<f||h===f&&(a.x>s.x||a.x===s.x&&M2(s,a)))&&(s=a,f=h)}a=a.next}while(a!==i);return s}function M2(t,e){return ga(t.prev,t,e.prev)<0&&ga(e.next,t,t.next)<0}function C2(t,e,a,o){let n=t;do n.z===0&&(n.z=Kx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,_2(n)}function _2(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function Kx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function b2(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function KC(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function vu(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&KC(t,e,a,o,n,r,s,i)}function T2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!A2(t,e)&&(Ou(t,e)&&Ou(e,t)&&w2(t,e)&&(ga(t.prev,t,e.prev)||ga(t,e.prev,e))||Kl(t,e)&&ga(t.prev,t,t.next)>0&&ga(e.prev,e,e.next)>0)}function ga(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function Kl(t,e){return t.x===e.x&&t.y===e.y}function JC(t,e,a,o){let n=gp(ga(t,e,a)),r=gp(ga(t,e,o)),s=gp(ga(a,o,t)),i=gp(ga(a,o,e));return!!(n!==r&&s!==i||n===0&&xp(t,a,e)||r===0&&xp(t,o,e)||s===0&&xp(a,t,o)||i===0&&xp(a,e,o))}function xp(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function gp(t){return t>0?1:t<0?-1:0}function A2(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&JC(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function Ou(t,e){return ga(t.prev,t,t.next)<0?ga(t,e,t.next)>=0&&ga(t,t.prev,e)>=0:ga(t,e,t.prev)<0||ga(t,t.next,e)<0}function w2(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function QC(t,e){let a=Jx(t.i,t.x,t.y),o=Jx(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function jM(t,e,a,o){let n=Jx(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function zu(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Jx(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E2(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var Qx=class{static triangulate(e,a,o=2){return h2(e,a,o)}},Jn=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];$M(e),eC(o,e);let s=e.length;a.forEach($M);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,eC(o,a[l]);let i=Qx.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function $M(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function eC(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var Jl=class t extends So{constructor(e=new ys([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new Da(n,3)),this.setAttribute("uv",new Da(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,f=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,u=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,m=a.bevelSize!==void 0?a.bevelSize:d-.1,S=a.bevelOffset!==void 0?a.bevelOffset:0,I=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,g=a.UVGenerator!==void 0?a.UVGenerator:R2,y,x=!1,C,b,T,v;if(p){y=p.getSpacedPoints(f),x=!0,u=!1;let $=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(f,$),b=new O,T=new O,v=new O}u||(I=0,d=0,m=0,S=0);let A=i.extractPoints(c),w=A.shape,L=A.holes;if(!Jn.isClockWise(w)){w=w.reverse();for(let $=0,le=L.length;$<le;$++){let Ie=L[$];Jn.isClockWise(Ie)&&(L[$]=Ie.reverse())}}function z($){let Ie=10000000000000001e-36,ie=$[0];for(let ue=1;ue<=$.length;ue++){let Ce=ue%$.length,Xe=$[Ce],Ne=Xe.x-ie.x,Be=Xe.y-ie.y,R=Ne*Ne+Be*Be,it=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(ie.x),Math.abs(ie.y)),tt=Ie*it*it;if(R<=tt){$.splice(Ce,1),ue--;continue}ie=Xe}}z(w),L.forEach(z);let B=L.length,k=w;for(let $=0;$<B;$++){let le=L[$];w=w.concat(le)}function ae($,le,Ie){return le||mt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(le,Ie)}let J=w.length;function se($,le,Ie){let ie,ue,Ce,Xe=$.x-le.x,Ne=$.y-le.y,Be=Ie.x-$.x,R=Ie.y-$.y,it=Xe*Xe+Ne*Ne,tt=Xe*R-Ne*Be;if(Math.abs(tt)>Number.EPSILON){let _=Math.sqrt(it),F=Math.sqrt(Be*Be+R*R),N=le.x-Ne/_,q=le.y+Xe/_,re=Ie.x-R/F,ye=Ie.y+Be/F,xe=((re-N)*R-(ye-q)*Be)/(Xe*R-Ne*Be);ie=N+Xe*xe-$.x,ue=q+Ne*xe-$.y;let j=ie*ie+ue*ue;if(j<=2)return new ke(ie,ue);Ce=Math.sqrt(j/2)}else{let _=!1;Xe>Number.EPSILON?Be>Number.EPSILON&&(_=!0):Xe<-Number.EPSILON?Be<-Number.EPSILON&&(_=!0):Math.sign(Ne)===Math.sign(R)&&(_=!0),_?(ie=-Ne,ue=Xe,Ce=Math.sqrt(it)):(ie=Xe,ue=Ne,Ce=Math.sqrt(it/2))}return new ke(ie/Ce,ue/Ce)}let G=[];for(let $=0,le=k.length,Ie=le-1,ie=$+1;$<le;$++,Ie++,ie++)Ie===le&&(Ie=0),ie===le&&(ie=0),G[$]=se(k[$],k[Ie],k[ie]);let K=[],oe,De=G.concat();for(let $=0,le=B;$<le;$++){let Ie=L[$];oe=[];for(let ie=0,ue=Ie.length,Ce=ue-1,Xe=ie+1;ie<ue;ie++,Ce++,Xe++)Ce===ue&&(Ce=0),Xe===ue&&(Xe=0),oe[ie]=se(Ie[ie],Ie[Ce],Ie[Xe]);K.push(oe),De=De.concat(oe)}let be;if(I===0)be=Jn.triangulateShape(k,L);else{let $=[],le=[];for(let Ie=0;Ie<I;Ie++){let ie=Ie/I,ue=d*Math.cos(ie*Math.PI/2),Ce=m*Math.sin(ie*Math.PI/2)+S;for(let Xe=0,Ne=k.length;Xe<Ne;Xe++){let Be=ae(k[Xe],G[Xe],Ce);Ee(Be.x,Be.y,-ue),ie===0&&$.push(Be)}for(let Xe=0,Ne=B;Xe<Ne;Xe++){let Be=L[Xe];oe=K[Xe];let R=[];for(let it=0,tt=Be.length;it<tt;it++){let _=ae(Be[it],oe[it],Ce);Ee(_.x,_.y,-ue),ie===0&&R.push(_)}ie===0&&le.push(R)}}be=Jn.triangulateShape($,le)}let $e=be.length,H=m+S;for(let $=0;$<J;$++){let le=u?ae(w[$],De[$],H):w[$];x?(T.copy(C.normals[0]).multiplyScalar(le.x),b.copy(C.binormals[0]).multiplyScalar(le.y),v.copy(y[0]).add(T).add(b),Ee(v.x,v.y,v.z)):Ee(le.x,le.y,0)}for(let $=1;$<=f;$++)for(let le=0;le<J;le++){let Ie=u?ae(w[le],De[le],H):w[le];x?(T.copy(C.normals[$]).multiplyScalar(Ie.x),b.copy(C.binormals[$]).multiplyScalar(Ie.y),v.copy(y[$]).add(T).add(b),Ee(v.x,v.y,v.z)):Ee(Ie.x,Ie.y,h/f*$)}for(let $=I-1;$>=0;$--){let le=$/I,Ie=d*Math.cos(le*Math.PI/2),ie=m*Math.sin(le*Math.PI/2)+S;for(let ue=0,Ce=k.length;ue<Ce;ue++){let Xe=ae(k[ue],G[ue],ie);Ee(Xe.x,Xe.y,h+Ie)}for(let ue=0,Ce=L.length;ue<Ce;ue++){let Xe=L[ue];oe=K[ue];for(let Ne=0,Be=Xe.length;Ne<Be;Ne++){let R=ae(Xe[Ne],oe[Ne],ie);x?Ee(R.x,R.y+y[f-1].y,y[f-1].x+Ie):Ee(R.x,R.y,h+Ie)}}}lt(),ee();function lt(){let $=n.length/3;if(u){let le=0,Ie=J*le;for(let ie=0;ie<$e;ie++){let ue=be[ie];Ke(ue[2]+Ie,ue[1]+Ie,ue[0]+Ie)}le=f+I*2,Ie=J*le;for(let ie=0;ie<$e;ie++){let ue=be[ie];Ke(ue[0]+Ie,ue[1]+Ie,ue[2]+Ie)}}else{for(let le=0;le<$e;le++){let Ie=be[le];Ke(Ie[2],Ie[1],Ie[0])}for(let le=0;le<$e;le++){let Ie=be[le];Ke(Ie[0]+J*f,Ie[1]+J*f,Ie[2]+J*f)}}o.addGroup($,n.length/3-$,0)}function ee(){let $=n.length/3,le=0;te(k,le),le+=k.length;for(let Ie=0,ie=L.length;Ie<ie;Ie++){let ue=L[Ie];te(ue,le),le+=ue.length}o.addGroup($,n.length/3-$,1)}function te($,le){let Ie=$.length;for(;--Ie>=0;){let ie=Ie,ue=Ie-1;ue<0&&(ue=$.length-1);for(let Ce=0,Xe=f+I*2;Ce<Xe;Ce++){let Ne=J*Ce,Be=J*(Ce+1),R=le+ie+Ne,it=le+ue+Ne,tt=le+ue+Be,_=le+ie+Be;Me(R,it,tt,_)}}}function Ee($,le,Ie){l.push($),l.push(le),l.push(Ie)}function Ke($,le,Ie){Ye($),Ye(le),Ye(Ie);let ie=n.length/3,ue=g.generateTopUV(o,n,ie-3,ie-2,ie-1);Qe(ue[0]),Qe(ue[1]),Qe(ue[2])}function Me($,le,Ie,ie){Ye($),Ye(le),Ye(ie),Ye(le),Ye(Ie),Ye(ie);let ue=n.length/3,Ce=g.generateSideWallUV(o,n,ue-6,ue-3,ue-2,ue-1);Qe(Ce[0]),Qe(Ce[1]),Qe(Ce[3]),Qe(Ce[1]),Qe(Ce[2]),Qe(Ce[3])}function Ye($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function Qe($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return D2(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Zx[n.type]().fromJSON(n)),new t(o,e.options)}},R2={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],f=e[n*3+1];return[new ke(r,s),new ke(i,l),new ke(c,f)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],f=e[o*3+1],h=e[o*3+2],u=e[n*3],d=e[n*3+1],m=e[n*3+2],S=e[r*3],I=e[r*3+1],p=e[r*3+2];return Math.abs(i-f)<Math.abs(s-c)?[new ke(s,1-l),new ke(c,1-h),new ke(u,1-m),new ke(S,1-p)]:[new ke(i,1-l),new ke(f,1-h),new ke(d,1-m),new ke(I,1-p)]}};function D2(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var hi=class t extends So{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,f=l+1,h=e/i,u=a/l,d=[],m=[],S=[],I=[];for(let p=0;p<f;p++){let g=p*u-s;for(let y=0;y<c;y++){let x=y*h-r;m.push(x,-g,0),S.push(0,0,1),I.push(y/i),I.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<i;g++){let y=g+c*p,x=g+c*(p+1),C=g+1+c*(p+1),b=g+1+c*p;d.push(y,x,b),d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new Da(m,3)),this.setAttribute("normal",new Da(S,3)),this.setAttribute("uv",new Da(I,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hu=class t extends So{constructor(e=new ys([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(i,l,f),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new Da(n,3)),this.setAttribute("normal",new Da(r,3)),this.setAttribute("uv",new Da(s,2));function c(f){let h=n.length/3,u=f.extractPoints(a),d=u.shape,m=u.holes;Jn.isClockWise(d)===!1&&(d=d.reverse());for(let I=0,p=m.length;I<p;I++){let g=m[I];Jn.isClockWise(g)===!0&&(m[I]=g.reverse())}let S=Jn.triangulateShape(d,m);for(let I=0,p=m.length;I<p;I++){let g=m[I];d=d.concat(g)}for(let I=0,p=d.length;I<p;I++){let g=d[I];n.push(g.x,g.y,0),r.push(0,0,1),s.push(g.x,g.y)}for(let I=0,p=S.length;I<p;I++){let g=S[I],y=g[0]+h,x=g[1]+h,C=g[2]+h;o.push(y,x,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return L2(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function L2(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Ql=class t extends So{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],f=[],h=[],u=new O,d=new O,m=new O;for(let S=0;S<=o;S++){let I=s+S/o*i;for(let p=0;p<=n;p++){let g=p/n*r;d.x=(e+a*Math.cos(I))*Math.cos(g),d.y=(e+a*Math.cos(I))*Math.sin(g),d.z=a*Math.sin(I),c.push(d.x,d.y,d.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),m.subVectors(d,u).normalize(),f.push(m.x,m.y,m.z),h.push(p/n),h.push(S/o)}}for(let S=1;S<=o;S++)for(let I=1;I<=n;I++){let p=(n+1)*S+I-1,g=(n+1)*(S-1)+I-1,y=(n+1)*(S-1)+I,x=(n+1)*S+I;l.push(p,g,x),l.push(g,y,x)}this.setIndex(l),this.setAttribute("position",new Da(c,3)),this.setAttribute("normal",new Da(f,3)),this.setAttribute("uv",new Da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xi(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if(tC(n))n.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if(tC(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function co(t){let e={};for(let a=0;a<t.length;a++){let o=xi(t[a]);for(let n in o)e[n]=o[n]}return e}function tC(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function P2(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function bg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}var jC={clone:xi,merge:co},B2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zo=class extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B2,this.fragmentShader=U2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=P2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new _t().setHex(n.value);break;case"v2":this.uniforms[o].value=new ke().fromArray(n.value);break;case"v3":this.uniforms[o].value=new O().fromArray(n.value);break;case"v4":this.uniforms[o].value=new Ia().fromArray(n.value);break;case"m3":this.uniforms[o].value=new Mt().fromArray(n.value);break;case"m4":this.uniforms[o].value=new na().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vp=class extends Zo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jl=class extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ms=class extends jl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Gp=class extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qp=class extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Vx(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Cs=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wp=class extends Cs{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wx,endingEnd:Wx}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case Xx:r=e,i=2*a-o;break;case Yx:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case Xx:s=e,l=2*o-a;break;case Yx:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,f=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*f,this._offsetNext=s*f}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(o-a)/(n-a),S=m*m,I=S*m,p=-u*I+2*u*S-u*m,g=(1+u)*I+(-1.5-2*u)*S+(-.5+u)*m+1,y=(-1-d)*I+(1.5+d)*S+.5*m,x=d*I-d*S;for(let C=0;C!==i;++C)r[C]=p*s[f+C]+g*s[c+C]+y*s[l+C]+x*s[h+C];return r}},Xp=class extends Cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=(o-a)/(n-a),h=1-f;for(let u=0;u!==i;++u)r[u]=s[c+u]*h+s[l+u]*f;return r}},Yp=class extends Cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Zp=class extends Cs{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=this.inTangents,h=this.outTangents;if(!f||!h){let m=(o-a)/(n-a),S=1-m;for(let I=0;I!==i;++I)r[I]=s[c+I]*S+s[l+I]*m;return r}let u=i*2,d=e-1;for(let m=0;m!==i;++m){let S=s[c+m],I=s[l+m],p=d*u+m*2,g=h[p],y=h[p+1],x=e*u+m*2,C=f[x],b=f[x+1],T=N2(o,a,g,C,n);r[m]=$C(T,S,y,b,I)}return r}};function $C(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function k2(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function N2(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=$C(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=k2(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Ko=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(a,this.TimeBufferType),this.values=Dl(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),Vx(e.settings)&&(o.settings={inTangents:Dl(e.settings.inTangents,Array),outTangents:Dl(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Zp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case Cu:a=this.InterpolantFactoryMethodDiscrete;break;case Rp:a=this.InterpolantFactoryMethodLinear;break;case vp:a=this.InterpolantFactoryMethodSmooth;break;case qx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return It("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cu;case this.InterpolantFactoryMethodLinear:return Rp;case this.InterpolantFactoryMethodSmooth:return vp;case this.InterpolantFactoryMethodBezier:return qx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;Vx(this.settings)&&(aC(this.settings.inTangents,e),aC(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){mt("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&Hw(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===vp,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],f=e[i+1];if(c!==f&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,u=h-o,d=h+o;for(let m=0;m!==o;++m){let S=a[h+m];if(S!==a[u+m]||S!==a[d+m]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,u=s*o;for(let d=0;d!==o;++d)a[u+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,Vx(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function aC(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Ko.prototype.ValueTypeName="";Ko.prototype.TimeBufferType=Float32Array;Ko.prototype.ValueBufferType=Float32Array;Ko.prototype.DefaultInterpolation=Rp;var _s=class extends Ko{constructor(e,a,o){super(e,a,o)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Cu;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Kp=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};Kp.prototype.ValueTypeName="color";var Jp=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};Jp.prototype.ValueTypeName="number";var Qp=class extends Cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let f=c+i;c!==f;c+=4)xo.slerpFlat(r,0,s,c-i,s,c,l);return r}},Vu=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new Qp(this.times,this.values,this.getValueSize(),e)}};Vu.prototype.ValueTypeName="quaternion";Vu.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Ko{constructor(e,a,o){super(e,a,o)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Cu;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var jp=class extends Ko{constructor(e,a,o,n){super(e,a,o,n)}};jp.prototype.ValueTypeName="vector";var $p=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(f){i++,r===!1&&n.onStart!==void 0&&n.onStart(f,s,i),r=!0},this.itemEnd=function(f){s++,n.onProgress!==void 0&&n.onProgress(f,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},e_=new $p,eh=class{constructor(e){this.manager=e!==void 0?e:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var th=class extends Fo{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var Gx=new na,oC=new O,nC=new O,ah=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Do,this.map=null,this.mapPass=null,this.matrix=new na,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ia(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;oC.setFromMatrixPosition(e.matrixWorld),a.position.copy(oC),nC.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(nC),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){Gx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(Gx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===kl||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(Gx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fp=new O,Sp=new xo,Zn=new O,Gu=class extends Fo{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new na,this.projectionMatrix=new na,this.projectionMatrixInverse=new na,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fp,Sp,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fp,Sp,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(Fp,Sp,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fp,Sp,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new O,rC=new ke,sC=new ke,io=class extends Gu{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Dp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gx*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(gx*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,a){return this.getViewBounds(e,rC,sC),a.subVectors(sC,rC)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(gx*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var $l=class extends Gu{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=f*this.view.offsetY,l=i-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},jx=class extends ah{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ec=class extends th{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fo.DEFAULT_UP),this.updateMatrix(),this.target=new Fo,this.shadow=new jx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var Ll=-90,Pl=1,oh=class extends Fo{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new io(Ll,Pl,e,a);n.layers=this.layers,this.add(n);let r=new io(Ll,Pl,e,a);r.layers=this.layers,this.add(r);let s=new io(Ll,Pl,e,a);s.layers=this.layers,this.add(s);let i=new io(Ll,Pl,e,a);i.layers=this.layers,this.add(i);let l=new io(Ll,Pl,e,a);l.layers=this.layers,this.add(l);let c=new io(Ll,Pl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===bn)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let S=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let I=!1;e.isWebGLRenderer===!0?I=e.state.buffers.depth.getReversed():I=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=S,e.setRenderTarget(o,5,n),I&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(h,u,d),e.xr.enabled=m,o.texture.needsPMREMUpdate=!0}},nh=class extends io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Tg="\\[\\]\\.:\\/",O2=new RegExp("["+Tg+"]","g"),Ag="[^"+Tg+"]",z2="[^"+Tg.replace("\\.","")+"]",H2=/((?:WC+[\/:])*)/.source.replace("WC",Ag),V2=/(WCOD+)?/.source.replace("WCOD",z2),G2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ag),q2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ag),W2=new RegExp("^"+H2+V2+G2+q2+"$"),X2=["material","materials","bones","map"],$x=class{constructor(e,a,o){let n=o||fa.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},fa=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O2,"")}static parseTrackName(e){let a=W2.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);X2.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fa.Composite=$x;fa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fa.prototype.GetterByBindingType=[fa.prototype._getValue_direct,fa.prototype._getValue_array,fa.prototype._getValue_arrayElement,fa.prototype._getValue_toArray];fa.prototype.SetterByBindingTypeAndVersioning=[[fa.prototype._setValue_direct,fa.prototype._setValue_direct_setNeedsUpdate,fa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_array,fa.prototype._setValue_array_setNeedsUpdate,fa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_arrayElement,fa.prototype._setValue_arrayElement_setNeedsUpdate,fa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_fromArray,fa.prototype._setValue_fromArray_setNeedsUpdate,fa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yB=new Float32Array(1);var iC=new na,qu=class{constructor(e,a,o=0,n=1/0){this.ray=new Ru(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):mt("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return iC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iC),this}intersectObject(e,a=!0,o=[]){return eg(e,this,o,a),o.sort(lC),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)eg(e[n],this,o,a);return o.sort(lC),o}};function lC(t,e){return t.distance-e.distance}function eg(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)eg(r[s],e,a,!0)}}var tg=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function wg(t,e,a,o){let n=Y2(o);switch(a){case Sg:return t*e;case yg:return t*e/n.components*n.byteLength;case dh:return t*e/n.components*n.byteLength;case Es:return t*e*2/n.components*n.byteLength;case ph:return t*e*2/n.components*n.byteLength;case vg:return t*e*3/n.components*n.byteLength;case fn:return t*e*4/n.components*n.byteLength;case hh:return t*e*4/n.components*n.byteLength;case Ku:case Ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qu:case ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:case gh:return Math.max(t,16)*Math.max(e,8)/4;case mh:case xh:return Math.max(t,8)*Math.max(e,8)/2;case Fh:case Sh:case yh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vh:case $u:case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oh:case zh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Vh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ef:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function Y2(t){switch(t){case Do:case Ig:return{byteLength:1,components:1};case oc:case xg:case En:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case An:case ch:case wn:return{byteLength:4,components:1};case gg:case Fg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function y_(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function Z2(t){let e=new WeakMap;function a(i,l){let c=i.array,f=i.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let f=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,f);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){let m=h[u],S=h[d];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,h[u]=S)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){let S=h[d];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let f=e.get(i);(!f||f.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var K2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J2=`#ifdef USE_ALPHAHASH
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
#endif`,Q2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
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
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,HE=`#ifdef USE_ENVMAP
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
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
#endif`,YE=`uniform sampler2D dfgLUT;
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
}`,ZE=`
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rR=`#if defined( USE_POINTS_UV )
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
#endif`,sR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uR=`#ifdef USE_MORPHNORMALS
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
#endif`,dR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gR=`#ifdef USE_NORMALMAP
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
#endif`,FR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ER=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PR=`float getShadowMask() {
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
}`,BR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UR=`#ifdef USE_SKINNING
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
#endif`,kR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NR=`#ifdef USE_SKINNING
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
#endif`,OR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GR=`#ifdef USE_TRANSMISSION
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
#endif`,qR=`#ifdef USE_TRANSMISSION
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
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JR=`uniform sampler2D t2D;
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
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`#include <common>
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
}`,aD=`#if DEPTH_PACKING == 3200
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
}`,oD=`#define DISTANCE
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
}`,nD=`#define DISTANCE
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
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`uniform float scale;
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
}`,lD=`uniform vec3 diffuse;
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
}`,cD=`#include <common>
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
}`,uD=`uniform vec3 diffuse;
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
}`,fD=`#define LAMBERT
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
}`,dD=`#define LAMBERT
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
}`,pD=`#define MATCAP
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
}`,hD=`#define MATCAP
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
}`,mD=`#define NORMAL
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
}`,ID=`#define NORMAL
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
}`,xD=`#define PHONG
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
}`,gD=`#define PHONG
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
}`,FD=`#define STANDARD
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
}`,SD=`#define STANDARD
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
}`,vD=`#define TOON
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
}`,yD=`#define TOON
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
}`,MD=`uniform float size;
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
}`,CD=`uniform vec3 diffuse;
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
}`,_D=`#include <common>
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
}`,bD=`uniform vec3 color;
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
}`,TD=`uniform float rotation;
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
}`,AD=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:K2,alphahash_pars_fragment:J2,alphamap_fragment:Q2,alphamap_pars_fragment:j2,alphatest_fragment:$2,alphatest_pars_fragment:eE,aomap_fragment:tE,aomap_pars_fragment:aE,batching_pars_vertex:oE,batching_vertex:nE,begin_vertex:rE,beginnormal_vertex:sE,bsdfs:iE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:pE,color_fragment:hE,color_pars_fragment:mE,color_pars_vertex:IE,color_vertex:xE,common:gE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:SE,displacementmap_pars_vertex:vE,displacementmap_vertex:yE,emissivemap_fragment:ME,emissivemap_pars_fragment:CE,colorspace_fragment:_E,colorspace_pars_fragment:bE,envmap_fragment:TE,envmap_common_pars_fragment:AE,envmap_pars_fragment:wE,envmap_pars_vertex:EE,envmap_physical_pars_fragment:HE,envmap_vertex:RE,fog_vertex:DE,fog_pars_vertex:LE,fog_fragment:PE,fog_pars_fragment:BE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:kE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:OE,lights_pars_begin:zE,lights_toon_fragment:VE,lights_toon_pars_fragment:GE,lights_phong_fragment:qE,lights_phong_pars_fragment:WE,lights_physical_fragment:XE,lights_physical_pars_fragment:YE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:JE,lightprobes_pars_fragment:QE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:eR,logdepthbuf_vertex:tR,map_fragment:aR,map_pars_fragment:oR,map_particle_fragment:nR,map_particle_pars_fragment:rR,metalnessmap_fragment:sR,metalnessmap_pars_fragment:iR,morphinstance_vertex:lR,morphcolor_vertex:cR,morphnormal_vertex:uR,morphtarget_pars_vertex:fR,morphtarget_vertex:dR,normal_fragment_begin:pR,normal_fragment_maps:hR,normal_pars_fragment:mR,normal_pars_vertex:IR,normal_vertex:xR,normalmap_pars_fragment:gR,clearcoat_normal_fragment_begin:FR,clearcoat_normal_fragment_maps:SR,clearcoat_pars_fragment:vR,iridescence_pars_fragment:yR,opaque_fragment:MR,packing:CR,premultiplied_alpha_fragment:_R,project_vertex:bR,dithering_fragment:TR,dithering_pars_fragment:AR,roughnessmap_fragment:wR,roughnessmap_pars_fragment:ER,shadowmap_pars_fragment:RR,shadowmap_pars_vertex:DR,shadowmap_vertex:LR,shadowmask_pars_fragment:PR,skinbase_vertex:BR,skinning_pars_vertex:UR,skinning_vertex:kR,skinnormal_vertex:NR,specularmap_fragment:OR,specularmap_pars_fragment:zR,tonemapping_fragment:HR,tonemapping_pars_fragment:VR,transmission_fragment:GR,transmission_pars_fragment:qR,uv_pars_fragment:WR,uv_pars_vertex:XR,uv_vertex:YR,worldpos_vertex:ZR,background_vert:KR,background_frag:JR,backgroundCube_vert:QR,backgroundCube_frag:jR,cube_vert:$R,cube_frag:eD,depth_vert:tD,depth_frag:aD,distance_vert:oD,distance_frag:nD,equirect_vert:rD,equirect_frag:sD,linedashed_vert:iD,linedashed_frag:lD,meshbasic_vert:cD,meshbasic_frag:uD,meshlambert_vert:fD,meshlambert_frag:dD,meshmatcap_vert:pD,meshmatcap_frag:hD,meshnormal_vert:mD,meshnormal_frag:ID,meshphong_vert:xD,meshphong_frag:gD,meshphysical_vert:FD,meshphysical_frag:SD,meshtoon_vert:vD,meshtoon_frag:yD,points_vert:MD,points_frag:CD,shadow_vert:_D,shadow_frag:bD,sprite_vert:TD,sprite_frag:AD},Ze={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},or={basic:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:co([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:co([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:co([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new _t(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:co([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:co([Ze.points,Ze.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:co([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:co([Ze.common,Ze.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:co([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:co([Ze.sprite,Ze.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:co([Ze.common,Ze.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:co([Ze.lights,Ze.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};or.physical={uniforms:co([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Zh={r:0,b:0,g:0},wD=new na,M_=new Mt;M_.set(-1,0,0,0,1,0,0,0,1);function ED(t,e,a,o,n,r){let s=new _t(0),i=n===!0?0:1,l,c,f=null,h=0,u=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){let x=g.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(g){let y=!1,x=d(g);x===null?I(s,i):x&&x.isColor&&(I(x,1),y=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===Yu)?(c===void 0&&(c=new Ca(new Xl(1,1,1),new Zo({name:"BackgroundCubeMaterial",uniforms:xi(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:vo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wD.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M_),c.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Xt,(f!==x||h!==x.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ca(new hi(2,2),new Zo({name:"BackgroundMaterial",uniforms:xi(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function I(g,y){g.getRGB(Zh,bg(t)),a.buffers.color.setClear(Zh.r,Zh.g,Zh.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),i=y,I(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(g){i=g,I(s,i)},render:m,addToRenderList:S,dispose:p}}function RD(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=u(null),r=n,s=!1;function i(L,X,z,B,k){let ae=!1,J=h(L,B,z,X);r!==J&&(r=J,c(r.object)),ae=d(L,B,z,k),ae&&m(L,B,z,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,x(L,X,z,B),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function h(L,X,z,B){let k=B.wireframe===!0,ae=o[X.id];ae===void 0&&(ae={},o[X.id]=ae);let J=L.isInstancedMesh===!0?L.id:0,se=ae[J];se===void 0&&(se={},ae[J]=se);let G=se[z.id];G===void 0&&(G={},se[z.id]=G);let K=G[k];return K===void 0&&(K=u(l()),G[k]=K),K}function u(L){let X=[],z=[],B=[];for(let k=0;k<a;k++)X[k]=0,z[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:B,object:L,attributes:{},index:null}}function d(L,X,z,B){let k=r.attributes,ae=X.attributes,J=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let oe=k[G],De=ae[G];if(De===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(De=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(De=L.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function m(L,X,z,B){let k={},ae=X.attributes,J=0,se=z.getAttributes();for(let G in se)if(se[G].location>=0){let oe=ae[G];oe===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));let De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),k[G]=De,J++}r.attributes=k,r.attributesNum=J,r.index=B}function S(){let L=r.newAttributes;for(let X=0,z=L.length;X<z;X++)L[X]=0}function I(L){p(L,0)}function p(L,X){let z=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;z[L]=1,B[L]===0&&(t.enableVertexAttribArray(L),B[L]=1),k[L]!==X&&(t.vertexAttribDivisor(L,X),k[L]=X)}function g(){let L=r.newAttributes,X=r.enabledAttributes;for(let z=0,B=X.length;z<B;z++)X[z]!==L[z]&&(t.disableVertexAttribArray(z),X[z]=0)}function y(L,X,z,B,k,ae,J){J===!0?t.vertexAttribIPointer(L,X,z,k,ae):t.vertexAttribPointer(L,X,z,B,k,ae)}function x(L,X,z,B){S();let k=B.attributes,ae=z.getAttributes(),J=X.defaultAttributeValues;for(let se in ae){let G=ae[se];if(G.location>=0){let K=k[se];if(K===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let oe=K.normalized,De=K.itemSize,be=e.get(K);if(be===void 0)continue;let $e=be.buffer,H=be.type,lt=be.bytesPerElement,ee=H===t.INT||H===t.UNSIGNED_INT||K.gpuType===ch;if(K.isInterleavedBufferAttribute){let te=K.data,Ee=te.stride,Ke=K.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)p(G.location+Me,te.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<G.locationSize;Me++)I(G.location+Me);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Me=0;Me<G.locationSize;Me++)y(G.location+Me,De/G.locationSize,H,oe,Ee*lt,(Ke+De/G.locationSize*Me)*lt,ee)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,K.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<G.locationSize;te++)I(G.location+te);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let te=0;te<G.locationSize;te++)y(G.location+te,De/G.locationSize,H,oe,De*lt,De/G.locationSize*te*lt,ee)}}else if(J!==void 0){let oe=J[se];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(G.location,oe);break;case 3:t.vertexAttrib3fv(G.location,oe);break;case 4:t.vertexAttrib4fv(G.location,oe);break;default:t.vertexAttrib1fv(G.location,oe)}}}}g()}function C(){A();for(let L in o){let X=o[L];for(let z in X){let B=X[z];for(let k in B){let ae=B[k];for(let J in ae)f(ae[J].object),delete ae[J];delete B[k]}}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let X=o[L.id];for(let z in X){let B=X[z];for(let k in B){let ae=B[k];for(let J in ae)f(ae[J].object),delete ae[J];delete B[k]}}delete o[L.id]}function T(L){for(let X in o){let z=o[X];for(let B in z){let k=z[B];if(k[L.id]===void 0)continue;let ae=k[L.id];for(let J in ae)f(ae[J].object),delete ae[J];delete k[L.id]}}}function v(L){for(let X in o){let z=o[X],B=L.isInstancedMesh===!0?L.id:0,k=z[B];if(k!==void 0){for(let ae in k){let J=k[ae];for(let se in J)f(J[se].object),delete J[se];delete k[ae]}delete z[B],Object.keys(z).length===0&&delete o[X]}}}function A(){w(),s=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:A,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:I,disableUnusedAttributes:g}}function DD(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,f){f!==0&&(t.drawArraysInstanced(o,l,c,f),a.update(c,o,f))}function i(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];a.update(u,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function LD(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==fn&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(T){let v=T===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Do&&T!==wn&&!v&&o.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",f=l(c);f!==c&&(It("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=a.logarithmicDepthBuffer===!0,u=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),I=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:I,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:x,maxSamples:C,samples:b}}function PD(t){let e=this,a=null,o=0,n=!1,r=!1,s=new _n,i=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||o!==0||n;return n=u,o=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){a=f(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,S=h.clipIntersection,I=h.clipShadows,p=t.get(h);if(!n||m===null||m.length===0||r&&!I)r?f(null):c();else{let g=r?0:o,y=g*4,x=p.clippingState||null;l.value=x,x=f(m,u,y,d);for(let C=0;C!==y;++C)x[C]=a[C];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function f(h,u,d,m){let S=h!==null?h.length:0,I=null;if(S!==0){if(I=l.value,m!==!0||I===null){let p=d+S*4,g=u.matrixWorldInverse;i.getNormalMatrix(g),(I===null||I.length<p)&&(I=new Float32Array(p));for(let y=0,x=d;y!==S;++y,x+=4)s.copy(h[y]).applyMatrix4(g,i),s.normal.toArray(I,x),I[x+3]=s.constant}l.value=I,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,I}}var ic=4,BD=6,UD=20,kD=256,tf=new $l,t_=new _t,Eg=null,Rg=0,Dg=0,Lg=!1,ND=new O,gi=new O,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=ND}=r;Eg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Dg=this._renderer.getActiveMipmapLevel(),Lg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eg,Rg,Dg),this._renderer.xr.enabled=Lg,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===As||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Dg=this._renderer.getActiveMipmapLevel(),Lg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Na,minFilter:Na,generateMipmaps:!1,type:En,format:fn,colorSpace:_u,depthBuffer:!1},n=a_(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=OD(r)),this._blurMaterial=HD(r,e,a),this._ggxMaterial=zD(r,e,a)}return n}_compileMaterial(e){let a=new Ca(new So,e);this._renderer.compile(a,tf)}_sceneToCubeUV(e,a,o,n,r){let l=new io(90,1,a,o),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(t_),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ca(new Xl,new ui({name:"PMREM.Background",side:vo,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,I=S.material,p=!1,g=e.background;g?g.isColor&&(I.color.copy(g),e.background=null,p=!0):(I.color.copy(t_),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[y]));let C=this._cubeSize;sc(n,x*C,y>2?C:0,C,C),h.setRenderTarget(n),p&&h.render(S,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===As||e.mapping===Ii;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;sc(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,tf)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),f=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:m}=this,S=this._sizeLods[o],I=3*S*(o>m-ic?o-m+ic:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-a,sc(r,I,p,3*S,2*S),n.setRenderTarget(r),n.render(i,tf),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-o,sc(e,I,p,3*S,2*S),n.setRenderTarget(e),n.render(i,tf)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let f=this._sizeLods[n],h=3*f*(n>this._lodMax-ic?n-this._lodMax+ic:0),u=4*(this._cubeSize-f);sc(a,h,u,3*f,2*f),s.setRenderTarget(a),s.render(l,tf)}};function OD(t){let e=[],a=[],o=t,n=t-ic+1+BD;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,m=new Float32Array(d*u*h),S=new Float32Array(d*u*h);for(let p=0;p<h;p++){let g=p%3*2/3-1,y=p>2?0:-1,x=[g,y,0,g+2/3,y,0,g+2/3,y+1,0,g,y,0,g+2/3,y+1,0,g,y+1,0];m.set(x,d*u*p);for(let C=0;C<u;C++){let b=f[C*2]*2-1,T=f[C*2+1]*2-1;p===0?gi.set(1,T,b):p===1?gi.set(-b,1,-T):p===2?gi.set(-b,T,1):p===3?gi.set(-1,T,-b):p===4?gi.set(-b,-1,T):gi.set(b,T,-1),gi.toArray(S,(p*u+C)*d)}}let I=new So;I.setAttribute("position",new lo(m,d)),I.setAttribute("outputDirection",new lo(S,d)),a.push(new Ca(I,null)),o>ic&&o--}return{lodMeshes:a,sizeLods:e}}function a_(t,e,a){let o=new Ro(t,e,a);return o.texture.mapping=Yu,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function sc(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function zD(t,e,a){return new Zo({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function HD(t,e,a){return new Zo({name:"SphericalGaussianBlur",defines:{SAMPLES:UD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function o_(){return new Zo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function n_(){return new Zo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function jh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jh=class extends Ro{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new Du(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Xl(5,5,5),r=new Zo({name:"CubemapFromEquirect",uniforms:xi(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:vo,blending:er});r.uniforms.tEquirect.value=a;let s=new Ca(n,r),i=a.minFilter;return a.minFilter===tr&&(a.minFilter=Na),new oh(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function VD(t){let e=new WeakMap,a=new WeakMap,o=null;function n(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===sh||d===ih)if(e.has(u)){let m=e.get(u).texture;return i(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let S=new Jh(m.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),i(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,m=d===sh||d===ih,S=d===As||d===Ii;if(m||S){let I=a.get(u),p=I!==void 0?I.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return o===null&&(o=new cc(t)),I=m?o.fromEquirectangular(u,I):o.fromCubemap(u,I),I.texture.pmremVersion=u.pmremVersion,a.set(u,I),I.texture;if(I!==void 0)return I.texture;{let g=u.image;return m&&g&&g.height>0||S&&g&&l(g)?(o===null&&(o=new cc(t)),I=m?o.fromEquirectangular(u):o.fromCubemap(u),I.texture.pmremVersion=u.pmremVersion,a.set(u,I),u.addEventListener("dispose",f),I.texture):null}}}return u}function i(u,d){return d===sh?u.mapping=As:d===ih&&(u.mapping=Ii),u}function l(u){let d=0,m=6;for(let S=0;S<m;S++)u[S]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let m=a.get(d);m!==void 0&&(a.delete(d),m.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function GD(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&ci("WebGLRenderer: "+o+" extension not supported."),n}}}function qD(t,e,a,o){let n={},r=new WeakMap;function s(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete n[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),o.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,a.memory.geometries--}function i(h,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,a.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,m=h.attributes.position,S=0;if(m===void 0)return;if(d!==null){let g=d.array;S=d.version;for(let y=0,x=g.length;y<x;y+=3){let C=g[y+0],b=g[y+1],T=g[y+2];u.push(C,b,b,T,T,C)}}else{let g=m.array;S=m.version;for(let y=0,x=g.length/3-1;y<x;y+=3){let C=y+0,b=y+1,T=y+2;u.push(C,b,b,T,T,C)}}let I=new(m.count>=65535?Eu:wu)(u,1);I.version=S;let p=r.get(h);p&&e.remove(p),r.set(h,I)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:f}}function WD(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,u){t.drawElements(o,u,r,h*s),a.update(u,o,1)}function c(h,u,d){d!==0&&(t.drawElementsInstanced(o,u,r,h*s,d),a.update(u,o,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,u,0,r,h,0,d);let S=0;for(let I=0;I<d;I++)S+=u[I];a.update(S,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function XD(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:mt("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function YD(t,e,a){let o=new WeakMap,n=new Ia;function r(s,i,l){let c=s.morphTargetInfluences,f=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=f!==void 0?f.length:0,u=o.get(i);if(u===void 0||u.count!==h){let A=function(){T.dispose(),o.delete(i),i.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=i.morphAttributes.position!==void 0,m=i.morphAttributes.normal!==void 0,S=i.morphAttributes.color!==void 0,I=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],g=i.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),S===!0&&(y=3);let x=i.attributes.position.count*y,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*C*4*h),T=new Au(b,x,C,h);T.type=wn,T.needsUpdate=!0;let v=y*4;for(let w=0;w<h;w++){let L=I[w],X=p[w],z=g[w],B=x*C*4*w;for(let k=0;k<L.count;k++){let ae=k*v;d===!0&&(n.fromBufferAttribute(L,k),b[B+ae+0]=n.x,b[B+ae+1]=n.y,b[B+ae+2]=n.z,b[B+ae+3]=0),m===!0&&(n.fromBufferAttribute(X,k),b[B+ae+4]=n.x,b[B+ae+5]=n.y,b[B+ae+6]=n.z,b[B+ae+7]=0),S===!0&&(n.fromBufferAttribute(z,k),b[B+ae+8]=n.x,b[B+ae+9]=n.y,b[B+ae+10]=n.z,b[B+ae+11]=z.itemSize===4?n.w:1)}}u={count:h,texture:T,size:new ke(x,C)},o.set(i,u),i.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let m=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function ZD(t,e,a,o,n){let r=new WeakMap;function s(c){let f=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function i(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),o.releaseStatesOfObject(f),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:s,dispose:i}}var KD={[cg]:"LINEAR_TONE_MAPPING",[ug]:"REINHARD_TONE_MAPPING",[fg]:"CINEON_TONE_MAPPING",[dg]:"ACES_FILMIC_TONE_MAPPING",[hg]:"AGX_TONE_MAPPING",[Xu]:"NEUTRAL_TONE_MAPPING",[pg]:"CUSTOM_TONE_MAPPING"};function JD(t,e,a,o,n,r){let s=new Ro(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new So;c.setAttribute("position",new Da([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Da([0,2,0,0,2,0],2));let f=new Vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ca(c,f),u=new $l(-1,1,1,-1,0,1),d=null,m=null,S=!1,I,p=null,g=[],y=!1;this.setSize=function(x,C){s.setSize(x,C),i!==null&&i.setSize(x,C),l!==null&&l.setSize(x,C);for(let b=0;b<g.length;b++){let T=g[b];T.setSize&&T.setSize(x,C)}},this.setEffects=function(x){g=x,y=g.length>0&&g[0].isRenderPass===!0;let C=s.width,b=s.height;g.length>0&&i===null&&(i=new Ro(C,b,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Ro(C,b,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){let v=g[T];v.setSize&&v.setSize(C,b)}},this.begin=function(x,C){if(S||x.toneMapping===Tn&&g.length===0)return!1;if(p=C,C!==null){let b=C.width,T=C.height;(s.width!==b||s.height!==T)&&this.setSize(b,T)}return y===!1&&x.setRenderTarget(s),I=x.toneMapping,x.toneMapping=Tn,!0},this.hasRenderPass=function(){return y},this.end=function(x,C){x.toneMapping=I,S=!0;let b=s,T=i;for(let v=0;v<g.length;v++){let A=g[v];A.enabled!==!1&&(A.render(x,T,b,C),A.needsSwap!==!1&&(b=T,T=T===i?l:i))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,f.defines={},Ut.getTransfer(d)===Xt&&(f.defines.SRGB_TRANSFER="");let v=KD[m];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(h,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var C_=new go,Ug=new vs(1,1),__=new Au,b_=new Bp,T_=new Du,r_=[],s_=[],i_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function uc(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=r_[n];if(r===void 0&&(r=new Float32Array(n),r_[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Oa(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function za(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function $h(t,e){let a=s_[e];a===void 0&&(a=new Int32Array(e),s_[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function QD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function jD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2fv(this.addr,e),za(a,e)}}function $D(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Oa(a,e))return;t.uniform3fv(this.addr,e),za(a,e)}}function eL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4fv(this.addr,e),za(a,e)}}function tL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;c_.set(o),t.uniformMatrix2fv(this.addr,!1,c_),za(a,o)}}function aL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;l_.set(o),t.uniformMatrix3fv(this.addr,!1,l_),za(a,o)}}function oL(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Oa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),za(a,e)}else{if(Oa(a,o))return;i_.set(o),t.uniformMatrix4fv(this.addr,!1,i_),za(a,o)}}function nL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function rL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2iv(this.addr,e),za(a,e)}}function sL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Oa(a,e))return;t.uniform3iv(this.addr,e),za(a,e)}}function iL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4iv(this.addr,e),za(a,e)}}function lL(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function cL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Oa(a,e))return;t.uniform2uiv(this.addr,e),za(a,e)}}function uL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Oa(a,e))return;t.uniform3uiv(this.addr,e),za(a,e)}}function fL(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Oa(a,e))return;t.uniform4uiv(this.addr,e),za(a,e)}}function dL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(Ug.compareFunction=a.isReversedDepthBuffer()?Yh:Xh,r=Ug):r=C_,a.setTexture2D(e||r,n)}function pL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||b_,n)}function hL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||T_,n)}function mL(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||__,n)}function IL(t){switch(t){case 5126:return QD;case 35664:return jD;case 35665:return $D;case 35666:return eL;case 35674:return tL;case 35675:return aL;case 35676:return oL;case 5124:case 35670:return nL;case 35667:case 35671:return rL;case 35668:case 35672:return sL;case 35669:case 35673:return iL;case 5125:return lL;case 36294:return cL;case 36295:return uL;case 36296:return fL;case 35678:case 36198:case 36298:case 36306:case 35682:return dL;case 35679:case 36299:case 36307:return pL;case 35680:case 36300:case 36308:case 36293:return hL;case 36289:case 36303:case 36311:case 36292:return mL}}function xL(t,e){t.uniform1fv(this.addr,e)}function gL(t,e){let a=uc(e,this.size,2);t.uniform2fv(this.addr,a)}function FL(t,e){let a=uc(e,this.size,3);t.uniform3fv(this.addr,a)}function SL(t,e){let a=uc(e,this.size,4);t.uniform4fv(this.addr,a)}function vL(t,e){let a=uc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function yL(t,e){let a=uc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function ML(t,e){let a=uc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function CL(t,e){t.uniform1iv(this.addr,e)}function _L(t,e){t.uniform2iv(this.addr,e)}function bL(t,e){t.uniform3iv(this.addr,e)}function TL(t,e){t.uniform4iv(this.addr,e)}function AL(t,e){t.uniform1uiv(this.addr,e)}function wL(t,e){t.uniform2uiv(this.addr,e)}function EL(t,e){t.uniform3uiv(this.addr,e)}function RL(t,e){t.uniform4uiv(this.addr,e)}function DL(t,e,a){let o=this.cache,n=e.length,r=$h(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Ug:s=C_;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function LL(t,e,a){let o=this.cache,n=e.length,r=$h(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||b_,r[s])}function PL(t,e,a){let o=this.cache,n=e.length,r=$h(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||T_,r[s])}function BL(t,e,a){let o=this.cache,n=e.length,r=$h(a,n);Oa(o,r)||(t.uniform1iv(this.addr,r),za(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||__,r[s])}function UL(t){switch(t){case 5126:return xL;case 35664:return gL;case 35665:return FL;case 35666:return SL;case 35674:return vL;case 35675:return yL;case 35676:return ML;case 5124:case 35670:return CL;case 35667:case 35671:return _L;case 35668:case 35672:return bL;case 35669:case 35673:return TL;case 5125:return AL;case 36294:return wL;case 36295:return EL;case 36296:return RL;case 35678:case 36198:case 36298:case 36306:case 35682:return DL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return PL;case 36289:case 36303:case 36311:case 36292:return BL}}var kg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=IL(a.type)}},Ng=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=UL(a.type)}},Og=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},Pg=/(\w+)(\])?(\[|\.)?/g;function u_(t,e){t.seq.push(e),t.map[e.id]=e}function kL(t,e,a){let o=t.name,n=o.length;for(Pg.lastIndex=0;;){let r=Pg.exec(o),s=Pg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){u_(a,c===void 0?new kg(i,t,e):new Ng(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new Og(i),u_(a,h)),a=h}}}var lc=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);kL(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function f_(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var NL=37297,OL=0;function zL(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var d_=new Mt;function HL(t){Ut._getMatrix(d_,Ut.workingColorSpace,t);let e=`mat3( ${d_.elements.map(a=>a.toFixed(4))} )`;switch(Ut.getTransfer(t)){case bu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function p_(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+zL(t.getShaderSource(e),i)}else return r}function VL(t,e){let a=HL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var GL={[cg]:"Linear",[ug]:"Reinhard",[fg]:"Cineon",[dg]:"ACESFilmic",[hg]:"AgX",[Xu]:"Neutral",[pg]:"Custom"};function qL(t,e){let a=GL[e];return a===void 0?(It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Kh=new O;function WL(){Ut.getLuminanceCoefficients(Kh);let t=Kh.x.toFixed(4),e=Kh.y.toFixed(4),a=Kh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(of).join(`
`)}function YL(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function ZL(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function of(t){return t!==""}function h_(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KL=/^[ \t]*#include +<([\w\d./]+)>/gm;function zg(t){return t.replace(KL,QL)}var JL=new Map;function QL(t,e){let a=At[e];if(a===void 0){let o=JL.get(e);if(o!==void 0)a=At[o],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zg(a)}var jL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(t){return t.replace(jL,$L)}function $L(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function x_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var e3={[Wu]:"SHADOWMAP_TYPE_PCF",[tc]:"SHADOWMAP_TYPE_VSM"};function t3(t){return e3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a3={[As]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function o3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":a3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var n3={[Ii]:"ENVMAP_MODE_REFRACTION"};function r3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":n3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s3={[lg]:"ENVMAP_BLENDING_MULTIPLY",[EC]:"ENVMAP_BLENDING_MIX",[RC]:"ENVMAP_BLENDING_ADD"};function i3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":s3[t.combine]||"ENVMAP_BLENDING_NONE"}function l3(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function c3(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=t3(a),c=o3(a),f=r3(a),h=i3(a),u=l3(a),d=XL(a),m=YL(r),S=n.createProgram(),I,p,g=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(I=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(of).join(`
`),I.length>0&&(I+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m].filter(of).join(`
`),p.length>0&&(p+=`
`)):(I=[x_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(of).join(`
`),p=[x_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,m,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+f:"",a.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Tn?"#define TONE_MAPPING":"",a.toneMapping!==Tn?At.tonemapping_pars_fragment:"",a.toneMapping!==Tn?qL("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,VL("linearToOutputTexel",a.outputColorSpace),WL(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(of).join(`
`)),s=zg(s),s=h_(s,a),s=m_(s,a),i=zg(i),i=h_(i,a),i=m_(i,a),s=I_(s),i=I_(i),a.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,I=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,p=["#define varying in",a.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+I+s,x=g+p+i,C=f_(n,n.VERTEX_SHADER,y),b=f_(n,n.FRAGMENT_SHADER,x);n.attachShader(S,C),n.attachShader(S,b),a.index0AttributeName!==void 0?n.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function T(L){if(t.debug.checkShaderErrors){let X=n.getProgramInfoLog(S)||"",z=n.getShaderInfoLog(C)||"",B=n.getShaderInfoLog(b)||"",k=X.trim(),ae=z.trim(),J=B.trim(),se=!0,G=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,C,b);else{let K=p_(n,C,"vertex"),oe=p_(n,b,"fragment");mt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+K+`
`+oe)}else k!==""?It("WebGLProgram: Program Info Log:",k):(ae===""||J==="")&&(G=!1);G&&(L.diagnostics={runnable:se,programLog:k,vertexShader:{log:ae,prefix:I},fragmentShader:{log:J,prefix:p}})}n.deleteShader(C),n.deleteShader(b),v=new lc(n,S),A=ZL(n,S)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let w=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(S,NL)),w},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=OL++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}var u3=0,Hg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new Vg(e),a.set(e,o)),o}},Vg=class{constructor(e){this.id=u3++,this.code=e,this.usedTimes=0}};function f3(t){return t===Es||t===$u||t===ef}function d3(t,e,a,o,n,r){let s=new zl,i=new Hg,l=new Set,c=[],f=new Map,h=o.logarithmicDepthBuffer,u=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,w,L,X,z){let B=L.fog,k=X.geometry,ae=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||ae,J),G=se&&se.mapping===Yu?se.image.height:null,K=d[v.type];v.precision!==null&&(u=o.getMaxPrecision(v.precision),u!==v.precision&&It("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,De=oe!==void 0?oe.length:0,be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let $e,H,lt,ee;if(K){let St=or[K];$e=St.vertexShader,H=St.fragmentShader}else{$e=v.vertexShader,H=v.fragmentShader;let St=i.getVertexShaderStage(v),xt=i.getFragmentShaderStage(v);i.update(v,St,xt),lt=St.id,ee=xt.id}let te=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Ke=X.isInstancedMesh===!0,Me=X.isBatchedMesh===!0,Ye=!!v.map,Qe=!!v.matcap,$=!!se,le=!!v.aoMap,Ie=!!v.lightMap,ie=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Ce=!!v.displacementMap,Xe=!!v.emissiveMap,Ne=!!v.metalnessMap,Be=!!v.roughnessMap,R=v.anisotropy>0,it=v.clearcoat>0,tt=v.dispersion>0,_=v.retroreflectivity>0,F=v.iridescence>0,N=v.sheen>0,q=v.transmission>0,re=R&&!!v.anisotropyMap,ye=it&&!!v.clearcoatMap,xe=it&&!!v.clearcoatNormalMap,j=it&&!!v.clearcoatRoughnessMap,V=F&&!!v.iridescenceMap,de=F&&!!v.iridescenceThicknessMap,Te=N&&!!v.sheenColorMap,D=N&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,me=!!v.specularColorMap,ge=!!v.specularIntensityMap,Se=q&&!!v.transmissionMap,P=q&&!!v.thicknessMap,ve=!!v.gradientMap,ne=!!v.alphaMap,Ae=v.alphaTest>0,Re=!!v.alphaHash,pe=!!v.extensions,Ve=Tn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=t.toneMapping);let qe={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:H,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Me,batchingColor:Me&&X._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&X.instanceColor!==null,instancingMorph:Ke&&X.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:Qe,envMap:$,envMapMode:$&&se.mapping,envMapCubeUVHeight:G,aoMap:le,lightMap:Ie,bumpMap:ie,normalMap:ue,displacementMap:Ce,emissiveMap:Xe,normalMapObjectSpace:ue&&v.normalMapType===PC,normalMapTangentSpace:ue&&v.normalMapType===Wh,packedNormalMap:ue&&v.normalMapType===Wh&&f3(v.normalMap.format),metalnessMap:Ne,roughnessMap:Be,anisotropy:R,anisotropyMap:re,clearcoat:it,clearcoatMap:ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:j,dispersion:tt,retroreflection:_,iridescence:F,iridescenceMap:V,iridescenceThicknessMap:de,sheen:N,sheenColorMap:Te,sheenRoughnessMap:D,specularMap:Pe,specularColorMap:me,specularIntensityMap:ge,transmission:q,transmissionMap:Se,thicknessMap:P,gradientMap:ve,opaque:v.transparent===!1&&v.blending===ac&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ae,alphaHash:Re,combine:v.combine,mapUv:Ye&&m(v.map.channel),aoMapUv:le&&m(v.aoMap.channel),lightMapUv:Ie&&m(v.lightMap.channel),bumpMapUv:ie&&m(v.bumpMap.channel),normalMapUv:ue&&m(v.normalMap.channel),displacementMapUv:Ce&&m(v.displacementMap.channel),emissiveMapUv:Xe&&m(v.emissiveMap.channel),metalnessMapUv:Ne&&m(v.metalnessMap.channel),roughnessMapUv:Be&&m(v.roughnessMap.channel),anisotropyMapUv:re&&m(v.anisotropyMap.channel),clearcoatMapUv:ye&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:D&&m(v.sheenRoughnessMap.channel),specularMapUv:Pe&&m(v.specularMap.channel),specularColorMapUv:me&&m(v.specularColorMap.channel),specularIntensityMapUv:ge&&m(v.specularIntensityMap.channel),transmissionMapUv:Se&&m(v.transmissionMap.channel),thicknessMapUv:P&&m(v.thicknessMap.channel),alphaMapUv:ne&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ue||R),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!k.attributes.uv&&(Ye||ne),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:be,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&Ut.getTransfer(v.map.colorSpace)===Xt,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(v.emissiveMap.colorSpace)===Xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jo,flipSided:v.side===vo,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||Me)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function I(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)A.push(w),A.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(A,v),g(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function g(v,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function y(v){let A=d[v.type],w;if(A){let L=or[A];w=jC.clone(L.uniforms)}else w=v.uniforms;return w}function x(v,A){let w=f.get(A);return w!==void 0?++w.usedTimes:(w=new c3(t,A,v,n),c.push(w),f.set(A,w)),w}function C(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){i.remove(v)}function T(){i.dispose()}return{getParameters:S,getProgramCacheKey:I,getUniforms:y,acquireProgram:x,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:T}}function p3(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function h3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function g_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function F_(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function i(u,d,m,S,I,p){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:I,group:p},t[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.materialVariant=s(u),g.groupOrder=S,g.renderOrder=u.renderOrder,g.z=I,g.group=p),e++,g}function l(u,d,m,S,I,p,g){g.reversedDepth===!0&&(I=-I);let y=i(u,d,m,S,I,p);m.transmission>0?o.push(y):m.transparent===!0?n.push(y):a.push(y)}function c(u,d,m,S,I,p){let g=i(u,d,m,S,I,p);m.transmission>0?o.unshift(g):m.transparent===!0?n.unshift(g):a.unshift(g)}function f(u,d){a.length>1&&a.sort(u||h3),o.length>1&&o.sort(d||g_),n.length>1&&n.sort(d||g_)}function h(){for(let u=e,d=t.length;u<d;u++){let m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:f}}function m3(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new F_,t.set(o,[s])):n>=r.length?(s=new F_,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function I3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new O,color:new _t};break;case"SpotLight":a={position:new O,direction:new O,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new O,color:new _t,distance:0,decay:0};break;case"HemisphereLight":a={direction:new O,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":a={color:new _t,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=a,a}}}function x3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var g3=0;function F3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function S3(t){let e=new I3,a=x3(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new O);let n=new O,r=new na,s=new na;function i(c){let f=0,h=0,u=0;for(let X=0;X<9;X++)o.probe[X].set(0,0,0);let d=0,m=0,S=0,I=0,p=0,g=0,y=0,x=0,C=0,b=0,T=0,v=0,A=0,w=0;c.sort(F3);for(let X=0,z=c.length;X<z;X++){let B=c[X],k=B.color,ae=B.intensity,J=B.distance,se=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Es?se=B.shadow.map.texture:se=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)f+=k.r*ae,h+=k.g*ae,u+=k.b*ae;else if(B.isLightProbe){for(let G=0;G<9;G++)o.probe[G].addScaledVector(B.sh.coefficients[G],ae);w++}else if(B.isSunLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),o.sunShadow[m]=oe,o.sunShadowMap[m]=se;let De=K.getViewportCount();for(let be=0;be<De;be++)o.sunShadowMatrix[S+be]=K.getMatrix(be),o.sunShadowCascade[S+be]=K._cascadeData[be];S+=De,m++}o.sun[d]=G,d++}else if(B.isDirectionalLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,o.directionalShadow[I]=oe,o.directionalShadowMap[I]=se,o.directionalShadowMatrix[I]=B.shadow.matrix,C++}o.directional[I]=G,I++}else if(B.isSpotLight){let G=e.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(k).multiplyScalar(ae),G.distance=J,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,o.spot[g]=G;let K=B.shadow;if(B.map&&(o.spotLightMap[v]=B.map,v++,K.updateMatrices(B),B.castShadow&&A++),o.spotLightMatrix[g]=K.matrix,B.castShadow){let oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,o.spotShadow[g]=oe,o.spotShadowMap[g]=se,T++}g++}else if(B.isRectAreaLight){let G=e.get(B);G.color.copy(k).multiplyScalar(ae),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),o.rectArea[y]=G,y++}else if(B.isPointLight){let G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){let K=B.shadow,oe=a.get(B);oe.shadowIntensity=K.intensity,oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,oe.shadowCameraNear=K.camera.near,oe.shadowCameraFar=K.camera.far,o.pointShadow[p]=oe,o.pointShadowMap[p]=se,o.pointShadowMatrix[p]=B.shadow.matrix,b++}o.point[p]=G,p++}else if(B.isHemisphereLight){let G=e.get(B);G.skyColor.copy(B.color).multiplyScalar(ae),G.groundColor.copy(B.groundColor).multiplyScalar(ae),o.hemi[x]=G,x++}}y>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ze.LTC_FLOAT_1,o.rectAreaLTC2=Ze.LTC_FLOAT_2):(o.rectAreaLTC1=Ze.LTC_HALF_1,o.rectAreaLTC2=Ze.LTC_HALF_2)),o.ambient[0]=f,o.ambient[1]=h,o.ambient[2]=u;let L=o.hash;(L.sunLength!==d||L.directionalLength!==I||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==y||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==C||L.numPointShadows!==b||L.numSpotShadows!==T||L.numSpotMaps!==v||L.numLightProbes!==w)&&(o.sun.length=d,o.directional.length=I,o.spot.length=g,o.rectArea.length=y,o.point.length=p,o.hemi.length=x,o.sunShadow.length=m,o.sunShadowMap.length=m,o.sunShadowMatrix.length=S,o.sunShadowCascade.length=S,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.directionalShadowMatrix.length=C,o.pointShadow.length=b,o.pointShadowMap.length=b,o.pointShadowMatrix.length=b,o.spotShadow.length=T,o.spotShadowMap.length=T,o.spotLightMatrix.length=T+v-A,o.spotLightMap.length=v,o.numSpotLightShadowsWithMaps=A,o.numLightProbes=w,L.sunLength=d,L.directionalLength=I,L.pointLength=p,L.spotLength=g,L.rectAreaLength=y,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=C,L.numPointShadows=b,L.numSpotShadows=T,L.numSpotMaps=v,L.numLightProbes=w,o.version=g3++)}function l(c,f){let h=0,u=0,d=0,m=0,S=0,I=0,p=f.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let x=c[g];if(x.isSunLight){let C=o.sun[h];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),h++}else if(x.isDirectionalLight){let C=o.directional[u];C.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),u++}else if(x.isSpotLight){let C=o.spot[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let C=o.rectArea[S];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),S++}else if(x.isPointLight){let C=o.point[d];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let C=o.hemi[I];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(p),I++}}}return{setup:i,setupView:l,state:o}}function S_(t){let e=new S3(t),a=[],o=[],n=[];function r(u){h.camera=u,a.length=0,o.length=0,n.length=0}function s(u){a.push(u)}function i(u){o.push(u)}function l(u){n.push(u)}function c(){e.setup(a)}function f(u){e.setupView(a,u)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function v3(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new S_(t),e.set(n,[i])):r>=s.length?(i=new S_(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var y3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M3=`uniform sampler2D shadow_pass;
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
}`,C3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],_3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],v_=new na,af=new O,Bg=new O;function b3(t,e,a){let o=new Wl,n=new ke,r=new ke,s=new Ia,i=new Gp,l=new qp,c={},f=a.maxTextureSize,h={[Ts]:vo,[vo]:Ts,[Jo]:Jo},u=new Zo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:y3,fragmentShader:M3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new So;m.setAttribute("position",new lo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ca(m,u),I=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let p=this.type;this.render=function(b,T,v){if(I.enabled===!1||I.autoUpdate===!1&&I.needsUpdate===!1||b.length===0)return;this.type===fC&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wu);let A=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),X=t.state;X.setBlending(er),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let z=p!==this.type;z&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(k=>k.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,k=b.length;B<k;B++){let ae=b[B],J=ae.shadow;if(J===void 0){It("WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);let se=J.getFrameExtents();n.multiply(se),r.copy(J.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(r.x=Math.floor(f/se.x),n.x=r.x*se.x,J.mapSize.x=r.x),n.y>f&&(r.y=Math.floor(f/se.y),n.y=r.y*se.y,J.mapSize.y=r.y));let G=t.state.buffers.depth.getReversed();if(J.camera._reversedDepth=G,J.map===null||z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===tc){if(ae.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ro(n.x,n.y,{format:Es,type:En,minFilter:Na,magFilter:Na,generateMipmaps:!1}),J.map.texture.name=ae.name+".shadowMap",J.map.depthTexture=new vs(n.x,n.y,wn),J.map.depthTexture.name=ae.name+".shadowMapDepth",J.map.depthTexture.format=jn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Xa,J.map.depthTexture.magFilter=Xa}else ae.isPointLight?(J.map=new Jh(n.x),J.map.depthTexture=new Up(n.x,An)):(J.map=new Ro(n.x,n.y),J.map.depthTexture=new vs(n.x,n.y,An)),J.map.depthTexture.name=ae.name+".shadowMap",J.map.depthTexture.format=jn,this.type===Wu?(J.map.depthTexture.compareFunction=G?Yh:Xh,J.map.depthTexture.minFilter=Na,J.map.depthTexture.magFilter=Na):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Xa,J.map.depthTexture.magFilter=Xa);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==n.x||J.map.height!==n.y)&&J.map.setSize(n.x,n.y);let K=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ae.isPointLight!==!0&&J.updateMatrices(ae,v);for(let oe=0;oe<K;oe++){let De=J.getCamera(oe);if(ae.isPointLight){let be=J.camera,$e=J.matrix,H=ae.distance||be.far;H!==be.far&&(be.far=H,be.updateProjectionMatrix()),af.setFromMatrixPosition(ae.matrixWorld),be.position.copy(af),Bg.copy(be.position),Bg.add(C3[oe]),be.up.copy(_3[oe]),be.lookAt(Bg),be.updateMatrixWorld(),$e.makeTranslation(-af.x,-af.y,-af.z),v_.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),J._frustum.setFromProjectionMatrix(v_,be.coordinateSystem,be.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)t.setRenderTarget(J.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(J.map),t.clear());let be=J.getViewport(oe);s.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),X.viewport(s)}o=J.getFrustum(oe),x(T,v,De,ae,this.type)}J.isPointLightShadow!==!0&&this.type===tc&&g(J,v),J.needsUpdate=!1}p=this.type,I.needsUpdate=!1,t.setRenderTarget(A,w,L)};function g(b,T){let v=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ro(n.x,n.y,{format:Es,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,v,u,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,v,d,S,null)}function y(b,T,v,A){let w=null,L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)w=L;else if(w=v.isPointLight===!0?l:i,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let X=w.uuid,z=T.uuid,B=c[X];B===void 0&&(B={},c[X]=B);let k=B[z];k===void 0&&(k=w.clone(),B[z]=k,T.addEventListener("dispose",C)),w=k}if(w.visible=T.visible,w.wireframe=T.wireframe,A===tc?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=t.properties.get(w);X.light=v}return w}function x(b,T,v,A,w){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===tc)&&(!b.frustumCulled||b.intersectsFrustum(o))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let z=e.update(b),B=b.material;if(Array.isArray(B)){let k=z.groups;for(let ae=0,J=k.length;ae<J;ae++){let se=k[ae],G=B[se.materialIndex];if(G&&G.visible){let K=y(b,G,A,w);b.onBeforeShadow(t,b,T,v,z,K,se),t.renderBufferDirect(v,null,z,K,b,se),b.onAfterShadow(t,b,T,v,z,K,se)}}}else if(B.visible){let k=y(b,B,A,w);b.onBeforeShadow(t,b,T,v,z,k,null),t.renderBufferDirect(v,null,z,k,b,null),b.onAfterShadow(t,b,T,v,z,k,null)}}let X=b.children;for(let z=0,B=X.length;z<B;z++)x(X[z],T,v,A,w)}function C(b){b.target.removeEventListener("dispose",C);for(let v in c){let A=c[v],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function T3(t,e){function a(){let P=!1,ve=new Ia,ne=null,Ae=new Ia(0,0,0,0);return{setMask:function(Re){ne!==Re&&!P&&(t.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){P=Re},setClear:function(Re,pe,Ve,qe,St){St===!0&&(Re*=qe,pe*=qe,Ve*=qe),ve.set(Re,pe,Ve,qe),Ae.equals(ve)===!1&&(t.clearColor(Re,pe,Ve,qe),Ae.copy(ve))},reset:function(){P=!1,ne=null,Ae.set(-1,0,0,0)}}}function o(){let P=!1,ve=!1,ne=null,Ae=null,Re=null;return{setReversed:function(pe){if(ve!==pe){let Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=pe;let qe=Re;Re=null,this.setClear(qe)}},getReversed:function(){return ve},setTest:function(pe){pe?te(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(pe){ne!==pe&&!P&&(t.depthMask(pe),ne=pe)},setFunc:function(pe){if(ve&&(pe=XC[pe]),Ae!==pe){switch(pe){case Mp:t.depthFunc(t.NEVER);break;case Cp:t.depthFunc(t.ALWAYS);break;case _p:t.depthFunc(t.LESS);break;case Ul:t.depthFunc(t.LEQUAL);break;case bp:t.depthFunc(t.EQUAL);break;case Tp:t.depthFunc(t.GEQUAL);break;case Ap:t.depthFunc(t.GREATER);break;case wp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ae=pe}},setLocked:function(pe){P=pe},setClear:function(pe){Re!==pe&&(Re=pe,ve&&(pe=1-pe),t.clearDepth(pe))},reset:function(){P=!1,ne=null,Ae=null,Re=null,ve=!1}}}function n(){let P=!1,ve=null,ne=null,Ae=null,Re=null,pe=null,Ve=null,qe=null,St=null;return{setTest:function(xt){P||(xt?te(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!P&&(t.stencilMask(xt),ve=xt)},setFunc:function(xt,_a,da){(ne!==xt||Ae!==_a||Re!==da)&&(t.stencilFunc(xt,_a,da),ne=xt,Ae=_a,Re=da)},setOp:function(xt,_a,da){(pe!==xt||Ve!==_a||qe!==da)&&(t.stencilOp(xt,_a,da),pe=xt,Ve=_a,qe=da)},setLocked:function(xt){P=xt},setClear:function(xt){St!==xt&&(t.clearStencil(xt),St=xt)},reset:function(){P=!1,ve=null,ne=null,Ae=null,Re=null,pe=null,Ve=null,qe=null,St=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,m=[],S=null,I=!1,p=null,g=null,y=null,x=null,C=null,b=null,T=null,v=new _t(0,0,0),A=0,w=!1,L=null,X=null,z=null,B=null,k=null,ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,se=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=se>=1):G.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=se>=2);let K=null,oe={},De=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),$e=new Ia().fromArray(De),H=new Ia().fromArray(be);function lt(P,ve,ne,Ae){let Re=new Uint8Array(4),pe=t.createTexture();t.bindTexture(P,pe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<ne;Ve++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(ve+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return pe}let ee={};ee[t.TEXTURE_2D]=lt(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=lt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=lt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=lt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),te(t.DEPTH_TEST),s.setFunc(Ul),ie(!1),ue(ag),te(t.CULL_FACE),le(er);function te(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function Ee(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ke(P,ve){return u[P]!==ve?(t.bindFramebuffer(P,ve),u[P]=ve,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ve),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(P,ve){let ne=m,Ae=!1;if(P){ne=d.get(ve),ne===void 0&&(ne=[],d.set(ve,ne));let Re=P.textures;if(ne.length!==Re.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ve=Re.length;pe<Ve;pe++)ne[pe]=t.COLOR_ATTACHMENT0+pe;ne.length=Re.length,Ae=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,Ae=!0);Ae&&t.drawBuffers(ne)}function Ye(P){return S!==P?(t.useProgram(P),S=P,!0):!1}let Qe={[mi]:t.FUNC_ADD,[pC]:t.FUNC_SUBTRACT,[hC]:t.FUNC_REVERSE_SUBTRACT};Qe[mC]=t.MIN,Qe[IC]=t.MAX;let $={[xC]:t.ZERO,[gC]:t.ONE,[FC]:t.SRC_COLOR,[sg]:t.SRC_ALPHA,[_C]:t.SRC_ALPHA_SATURATE,[MC]:t.DST_COLOR,[vC]:t.DST_ALPHA,[SC]:t.ONE_MINUS_SRC_COLOR,[ig]:t.ONE_MINUS_SRC_ALPHA,[CC]:t.ONE_MINUS_DST_COLOR,[yC]:t.ONE_MINUS_DST_ALPHA,[bC]:t.CONSTANT_COLOR,[TC]:t.ONE_MINUS_CONSTANT_COLOR,[AC]:t.CONSTANT_ALPHA,[wC]:t.ONE_MINUS_CONSTANT_ALPHA};function le(P,ve,ne,Ae,Re,pe,Ve,qe,St,xt){if(P===er){I===!0&&(Ee(t.BLEND),I=!1);return}if(I===!1&&(te(t.BLEND),I=!0),P!==dC){if(P!==p||xt!==w){if((g!==mi||C!==mi)&&(t.blendEquation(t.FUNC_ADD),g=mi,C=mi),xt)switch(P){case ac:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case og:t.blendFunc(t.ONE,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:mt("WebGLState: Invalid blending: ",P);break}else switch(P){case ac:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case og:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ng:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rg:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",P);break}y=null,x=null,b=null,T=null,v.set(0,0,0),A=0,p=P,w=xt}return}Re=Re||ve,pe=pe||ne,Ve=Ve||Ae,(ve!==g||Re!==C)&&(t.blendEquationSeparate(Qe[ve],Qe[Re]),g=ve,C=Re),(ne!==y||Ae!==x||pe!==b||Ve!==T)&&(t.blendFuncSeparate($[ne],$[Ae],$[pe],$[Ve]),y=ne,x=Ae,b=pe,T=Ve),(qe.equals(v)===!1||St!==A)&&(t.blendColor(qe.r,qe.g,qe.b,St),v.copy(qe),A=St),p=P,w=!1}function Ie(P,ve){P.side===Jo?Ee(t.CULL_FACE):te(t.CULL_FACE);let ne=P.side===vo;ve&&(ne=!ne),ie(ne),P.blending===ac&&P.transparent===!1?le(er):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);let Ae=P.stencilWrite;i.setTest(Ae),Ae&&(i.setMask(P.stencilWriteMask),i.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),i.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(P){L!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),L=P)}function ue(P){P!==cC?(te(t.CULL_FACE),P!==X&&(P===ag?t.cullFace(t.BACK):P===uC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),X=P}function Ce(P){P!==z&&(J&&t.lineWidth(P),z=P)}function Xe(P,ve,ne){P?(te(t.POLYGON_OFFSET_FILL),(B!==ve||k!==ne)&&(B=ve,k=ne,s.getReversed()&&(ve=-ve),t.polygonOffset(ve,ne))):Ee(t.POLYGON_OFFSET_FILL)}function Ne(P){P?te(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Be(P){P===void 0&&(P=t.TEXTURE0+ae-1),K!==P&&(t.activeTexture(P),K=P)}function R(P,ve,ne){ne===void 0&&(K===null?ne=t.TEXTURE0+ae-1:ne=K);let Ae=oe[ne];Ae===void 0&&(Ae={type:void 0,texture:void 0},oe[ne]=Ae),(Ae.type!==P||Ae.texture!==ve)&&(K!==ne&&(t.activeTexture(ne),K=ne),t.bindTexture(P,ve||ee[P]),Ae.type=P,Ae.texture=ve)}function it(){let P=oe[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function _(){try{t.compressedTexImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function F(){try{t.texSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function N(){try{t.texSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function re(){try{t.compressedTexSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function ye(){try{t.texStorage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function xe(){try{t.texStorage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function j(){try{t.texImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function V(){try{t.texImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function de(P){return h[P]!==void 0?h[P]:t.getParameter(P)}function Te(P,ve){h[P]!==ve&&(t.pixelStorei(P,ve),h[P]=ve)}function D(P){$e.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function Pe(P){H.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),H.copy(P))}function me(P,ve){let ne=c.get(ve);ne===void 0&&(ne=new WeakMap,c.set(ve,ne));let Ae=ne.get(P);Ae===void 0&&(Ae=t.getUniformBlockIndex(ve,P.name),ne.set(P,Ae))}function ge(P,ve){let Ae=c.get(ve).get(P);l.get(ve)!==Ae&&(t.uniformBlockBinding(ve,Ae,P.__bindingPointIndex),l.set(ve,Ae))}function Se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},K=null,oe={},u={},d=new WeakMap,m=[],S=null,I=!1,p=null,g=null,y=null,x=null,C=null,b=null,T=null,v=new _t(0,0,0),A=0,w=!1,L=null,X=null,z=null,B=null,k=null,$e.set(0,0,t.canvas.width,t.canvas.height),H.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:te,disable:Ee,bindFramebuffer:Ke,drawBuffers:Me,useProgram:Ye,setBlending:le,setMaterial:Ie,setFlipSided:ie,setCullFace:ue,setLineWidth:Ce,setPolygonOffset:Xe,setScissorTest:Ne,activeTexture:Be,bindTexture:R,unbindTexture:it,compressedTexImage2D:tt,compressedTexImage3D:_,texImage2D:j,texImage3D:V,pixelStorei:Te,getParameter:de,updateUBOMapping:me,uniformBlockBinding:ge,texStorage2D:ye,texStorage3D:xe,texSubImage2D:F,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:re,scissor:D,viewport:Pe,reset:Se}}function A3(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,f=new WeakMap,h=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,F){return m?new OffscreenCanvas(_,F):Tu("canvas")}function I(_,F,N){let q=1,re=tt(_);if((re.width>N||re.height>N)&&(q=N/Math.max(re.width,re.height)),q<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let ye=Math.floor(q*re.width),xe=Math.floor(q*re.height);u===void 0&&(u=S(ye,xe));let j=F?S(ye,xe):u;return j.width=ye,j.height=xe,j.getContext("2d").drawImage(_,0,0,ye,xe),It("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ye+"x"+xe+")."),j}else return"data"in _&&It("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),_;return _}function p(_){return _.generateMipmaps}function g(_){t.generateMipmap(_)}function y(_){return _.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?t.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(_,F,N,q,re,ye=!1){if(_!==null){if(t[_]!==void 0)return t[_];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=F;if(F===t.RED&&(N===t.FLOAT&&(j=t.R32F),N===t.HALF_FLOAT&&(j=t.R16F),N===t.UNSIGNED_BYTE&&(j=t.R8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.R16_EXT),N===t.SHORT&&xe&&(j=xe.R16_SNORM_EXT)),F===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.R8UI),N===t.UNSIGNED_SHORT&&(j=t.R16UI),N===t.UNSIGNED_INT&&(j=t.R32UI),N===t.BYTE&&(j=t.R8I),N===t.SHORT&&(j=t.R16I),N===t.INT&&(j=t.R32I)),F===t.RG&&(N===t.FLOAT&&(j=t.RG32F),N===t.HALF_FLOAT&&(j=t.RG16F),N===t.UNSIGNED_BYTE&&(j=t.RG8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.RG16_EXT),N===t.SHORT&&xe&&(j=xe.RG16_SNORM_EXT)),F===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RG8UI),N===t.UNSIGNED_SHORT&&(j=t.RG16UI),N===t.UNSIGNED_INT&&(j=t.RG32UI),N===t.BYTE&&(j=t.RG8I),N===t.SHORT&&(j=t.RG16I),N===t.INT&&(j=t.RG32I)),F===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGB8UI),N===t.UNSIGNED_SHORT&&(j=t.RGB16UI),N===t.UNSIGNED_INT&&(j=t.RGB32UI),N===t.BYTE&&(j=t.RGB8I),N===t.SHORT&&(j=t.RGB16I),N===t.INT&&(j=t.RGB32I)),F===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),N===t.UNSIGNED_INT&&(j=t.RGBA32UI),N===t.BYTE&&(j=t.RGBA8I),N===t.SHORT&&(j=t.RGBA16I),N===t.INT&&(j=t.RGBA32I)),F===t.RGB&&(N===t.UNSIGNED_SHORT&&xe&&(j=xe.RGB16_EXT),N===t.SHORT&&xe&&(j=xe.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),F===t.RGBA){let V=ye?bu:Ut.getTransfer(re);N===t.FLOAT&&(j=t.RGBA32F),N===t.HALF_FLOAT&&(j=t.RGBA16F),N===t.UNSIGNED_BYTE&&(j=V===Xt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&xe&&(j=xe.RGBA16_EXT),N===t.SHORT&&xe&&(j=xe.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function C(_,F){let N;return _?F===null||F===An||F===nc?N=t.DEPTH24_STENCIL8:F===wn?N=t.DEPTH32F_STENCIL8:F===oc&&(N=t.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===An||F===nc?N=t.DEPTH_COMPONENT24:F===wn?N=t.DEPTH_COMPONENT32F:F===oc&&(N=t.DEPTH_COMPONENT16),N}function b(_,F){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Xa&&_.minFilter!==Na?Math.log2(Math.max(F.width,F.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?F.mipmaps.length:1}function T(_){let F=_.target;F.removeEventListener("dispose",T),A(F),F.isVideoTexture&&f.delete(F),F.isHTMLTexture&&h.delete(F)}function v(_){let F=_.target;F.removeEventListener("dispose",v),L(F)}function A(_){let F=o.get(_);if(F.__webglInit===void 0)return;let N=_.source,q=d.get(N);if(q){let re=q[F.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(_),Object.keys(q).length===0&&d.delete(N)}o.remove(_)}function w(_){let F=o.get(_);t.deleteTexture(F.__webglTexture);let N=_.source,q=d.get(N);delete q[F.__cacheKey],s.memory.textures--}function L(_){let F=o.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),o.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(F.__webglFramebuffer[q]))for(let re=0;re<F.__webglFramebuffer[q].length;re++)t.deleteFramebuffer(F.__webglFramebuffer[q][re]);else t.deleteFramebuffer(F.__webglFramebuffer[q]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[q])}else{if(Array.isArray(F.__webglFramebuffer))for(let q=0;q<F.__webglFramebuffer.length;q++)t.deleteFramebuffer(F.__webglFramebuffer[q]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let q=0;q<F.__webglColorRenderbuffer.length;q++)F.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[q]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let N=_.textures;for(let q=0,re=N.length;q<re;q++){let ye=o.get(N[q]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),s.memory.textures--),o.remove(N[q])}o.remove(_)}let X=0;function z(){X=0}function B(){return X}function k(_){X=_}function ae(){let _=X;return _>=n.maxTextures&&It("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,_}function J(_){let F=[];return F.push(_.wrapS),F.push(_.wrapT),F.push(_.wrapR||0),F.push(_.magFilter),F.push(_.minFilter),F.push(_.anisotropy),F.push(_.internalFormat),F.push(_.format),F.push(_.type),F.push(_.generateMipmaps),F.push(_.premultiplyAlpha),F.push(_.flipY),F.push(_.unpackAlignment),F.push(_.colorSpace),F.join()}function se(_,F){let N=o.get(_);if(_.isVideoTexture&&R(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&N.__version!==_.version){let q=_.image;if(q===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(N,_,F);return}}else _.isExternalTexture&&(N.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+F)}function G(_,F){let N=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){Ee(N,_,F);return}else _.isExternalTexture&&(N.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+F)}function K(_,F){let N=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){Ee(N,_,F);return}a.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+F)}function oe(_,F){let N=o.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&N.__version!==_.version){Ke(N,_,F);return}a.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+F)}let De={[Qn]:t.REPEAT,[un]:t.CLAMP_TO_EDGE,[Ep]:t.MIRRORED_REPEAT},be={[Xa]:t.NEAREST,[DC]:t.NEAREST_MIPMAP_NEAREST,[Zu]:t.NEAREST_MIPMAP_LINEAR,[Na]:t.LINEAR,[lh]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},$e={[UC]:t.NEVER,[HC]:t.ALWAYS,[kC]:t.LESS,[Xh]:t.LEQUAL,[NC]:t.EQUAL,[Yh]:t.GEQUAL,[OC]:t.GREATER,[zC]:t.NOTEQUAL};function H(_,F){if(F.type===wn&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===Na||F.magFilter===lh||F.magFilter===Zu||F.magFilter===tr||F.minFilter===Na||F.minFilter===lh||F.minFilter===Zu||F.minFilter===tr)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(_,t.TEXTURE_WRAP_S,De[F.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,De[F.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,De[F.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,be[F.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,be[F.minFilter]),F.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,$e[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Xa||F.minFilter!==Zu&&F.minFilter!==tr||F.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||o.get(F).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,n.getMaxAnisotropy())),o.get(F).__currentAnisotropy=F.anisotropy}}}function lt(_,F){let N=!1;_.__webglInit===void 0&&(_.__webglInit=!0,F.addEventListener("dispose",T));let q=F.source,re=d.get(q);re===void 0&&(re={},d.set(q,re));let ye=J(F);if(ye!==_.__cacheKey){re[ye]===void 0&&(re[ye]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),re[ye].usedTimes++;let xe=re[_.__cacheKey];xe!==void 0&&(re[_.__cacheKey].usedTimes--,xe.usedTimes===0&&w(F)),_.__cacheKey=ye,_.__webglTexture=re[ye].texture}return N}function ee(_,F,N){return Math.floor(Math.floor(_/N)/F)}function te(_,F,N,q){let ye=_.updateRanges;if(ye.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,F.width,F.height,N,q,F.data);else{ye.sort((Te,D)=>Te.start-D.start);let xe=0;for(let Te=1;Te<ye.length;Te++){let D=ye[xe],Pe=ye[Te],me=D.start+D.count,ge=ee(Pe.start,F.width,4),Se=ee(D.start,F.width,4);Pe.start<=me+1&&ge===Se&&ee(Pe.start+Pe.count-1,F.width,4)===ge?D.count=Math.max(D.count,Pe.start+Pe.count-D.start):(++xe,ye[xe]=Pe)}ye.length=xe+1;let j=a.getParameter(t.UNPACK_ROW_LENGTH),V=a.getParameter(t.UNPACK_SKIP_PIXELS),de=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,F.width);for(let Te=0,D=ye.length;Te<D;Te++){let Pe=ye[Te],me=Math.floor(Pe.start/4),ge=Math.ceil(Pe.count/4),Se=me%F.width,P=Math.floor(me/F.width),ve=ge,ne=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),a.pixelStorei(t.UNPACK_SKIP_ROWS,P),a.texSubImage2D(t.TEXTURE_2D,0,Se,P,ve,ne,N,q,F.data)}_.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,j),a.pixelStorei(t.UNPACK_SKIP_PIXELS,V),a.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Ee(_,F,N){let q=t.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),F.isData3DTexture&&(q=t.TEXTURE_3D);let re=lt(_,F),ye=F.source;a.bindTexture(q,_.__webglTexture,t.TEXTURE0+N);let xe=o.get(ye);if(ye.version!==xe.__version||re===!0){if(a.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ne=Ut.getPrimaries(Ut.workingColorSpace),Ae=F.colorSpace===Er?null:Ut.getPrimaries(F.colorSpace),Re=F.colorSpace===Er||ne===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment);let V=I(F.image,!1,n.maxTextureSize);V=it(F,V);let de=r.convert(F.format,F.colorSpace),Te=r.convert(F.type),D=x(F.internalFormat,de,Te,F.normalized,F.colorSpace,F.isVideoTexture);H(q,F);let Pe,me=F.mipmaps,ge=F.isVideoTexture!==!0,Se=xe.__version===void 0||re===!0,P=ye.dataReady,ve=b(F,V);if(F.isDepthTexture)D=C(F.format===ws,F.type),Se&&(ge?a.texStorage2D(t.TEXTURE_2D,1,D,V.width,V.height):a.texImage2D(t.TEXTURE_2D,0,D,V.width,V.height,0,de,Te,null));else if(F.isDataTexture)if(me.length>0){ge&&Se&&a.texStorage2D(t.TEXTURE_2D,ve,D,me[0].width,me[0].height);for(let ne=0,Ae=me.length;ne<Ae;ne++)Pe=me[ne],ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,de,Te,Pe.data):a.texImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,de,Te,Pe.data);F.generateMipmaps=!1}else ge?(Se&&a.texStorage2D(t.TEXTURE_2D,ve,D,V.width,V.height),P&&te(F,V,de,Te)):a.texImage2D(t.TEXTURE_2D,0,D,V.width,V.height,0,de,Te,V.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){ge&&Se&&a.texStorage3D(t.TEXTURE_2D_ARRAY,ve,D,me[0].width,me[0].height,V.depth);for(let ne=0,Ae=me.length;ne<Ae;ne++)if(Pe=me[ne],F.format!==fn)if(de!==null)if(ge){if(P)if(F.layerUpdates.size>0){let Re=wg(Pe.width,Pe.height,F.format,F.type);for(let pe of F.layerUpdates){let Ve=Pe.data.subarray(pe*Re/Pe.data.BYTES_PER_ELEMENT,(pe+1)*Re/Pe.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,pe,Pe.width,Pe.height,1,de,Ve)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,V.depth,de,Pe.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,D,Pe.width,Pe.height,V.depth,0,Pe.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?P&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,V.depth,de,Te,Pe.data):a.texImage3D(t.TEXTURE_2D_ARRAY,ne,D,Pe.width,Pe.height,V.depth,0,de,Te,Pe.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{ge&&Se&&a.texStorage2D(t.TEXTURE_2D,ve,D,me[0].width,me[0].height);for(let ne=0,Ae=me.length;ne<Ae;ne++)Pe=me[ne],F.format!==fn?de!==null?ge?P&&a.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,de,Pe.data):a.compressedTexImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,Pe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,de,Te,Pe.data):a.texImage2D(t.TEXTURE_2D,ne,D,Pe.width,Pe.height,0,de,Te,Pe.data)}else if(F.isDataArrayTexture)if(ge){if(Se&&a.texStorage3D(t.TEXTURE_2D_ARRAY,ve,D,V.width,V.height,V.depth),P)if(F.layerUpdates.size>0){let ne=wg(V.width,V.height,F.format,F.type);for(let Ae of F.layerUpdates){let Re=V.data.subarray(Ae*ne/V.data.BYTES_PER_ELEMENT,(Ae+1)*ne/V.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ae,V.width,V.height,1,de,Te,Re)}F.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,de,Te,V.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,D,V.width,V.height,V.depth,0,de,Te,V.data);else if(F.isData3DTexture)ge?(Se&&a.texStorage3D(t.TEXTURE_3D,ve,D,V.width,V.height,V.depth),P&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,de,Te,V.data)):a.texImage3D(t.TEXTURE_3D,0,D,V.width,V.height,V.depth,0,de,Te,V.data);else if(F.isFramebufferTexture){if(Se)if(ge)a.texStorage2D(t.TEXTURE_2D,ve,D,V.width,V.height);else{let ne=V.width,Ae=V.height;for(let Re=0;Re<ve;Re++)a.texImage2D(t.TEXTURE_2D,Re,D,ne,Ae,0,de,Te,null),ne>>=1,Ae>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in t){let ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),V.parentNode!==ne){ne.appendChild(V),h.add(F),ne.onpaint=Ae=>{let Re=Ae.changedElements;for(let pe of h)Re.includes(pe.image)&&(pe.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,V);else{let Re=t.RGBA,pe=t.RGBA,Ve=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Re,pe,Ve,V)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(me.length>0){if(ge&&Se){let ne=tt(me[0]);a.texStorage2D(t.TEXTURE_2D,ve,D,ne.width,ne.height)}for(let ne=0,Ae=me.length;ne<Ae;ne++)Pe=me[ne],ge?P&&a.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,Te,Pe):a.texImage2D(t.TEXTURE_2D,ne,D,de,Te,Pe);F.generateMipmaps=!1}else if(ge){if(Se){let ne=tt(V);a.texStorage2D(t.TEXTURE_2D,ve,D,ne.width,ne.height)}P&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Te,V)}else a.texImage2D(t.TEXTURE_2D,0,D,de,Te,V);p(F)&&g(q),xe.__version=ye.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function Ke(_,F,N){if(F.image.length!==6)return;let q=lt(_,F),re=F.source;a.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+N);let ye=o.get(re);if(re.version!==ye.__version||q===!0){a.activeTexture(t.TEXTURE0+N);let xe=Ut.getPrimaries(Ut.workingColorSpace),j=F.colorSpace===Er?null:Ut.getPrimaries(F.colorSpace),V=F.colorSpace===Er||xe===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let de=F.isCompressedTexture||F.image[0].isCompressedTexture,Te=F.image[0]&&F.image[0].isDataTexture,D=[];for(let pe=0;pe<6;pe++)!de&&!Te?D[pe]=I(F.image[pe],!0,n.maxCubemapSize):D[pe]=Te?F.image[pe].image:F.image[pe],D[pe]=it(F,D[pe]);let Pe=D[0],me=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),Se=x(F.internalFormat,me,ge,F.normalized,F.colorSpace),P=F.isVideoTexture!==!0,ve=ye.__version===void 0||q===!0,ne=re.dataReady,Ae=b(F,Pe);H(t.TEXTURE_CUBE_MAP,F);let Re;if(de){P&&ve&&a.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Se,Pe.width,Pe.height);for(let pe=0;pe<6;pe++){Re=D[pe].mipmaps;for(let Ve=0;Ve<Re.length;Ve++){let qe=Re[Ve];F.format!==fn?me!==null?P?ne&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,qe.width,qe.height,me,qe.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,Se,qe.width,qe.height,0,qe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,qe.width,qe.height,me,ge,qe.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,Se,qe.width,qe.height,0,me,ge,qe.data)}}}else{if(Re=F.mipmaps,P&&ve){Re.length>0&&Ae++;let pe=tt(D[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Se,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,D[pe].width,D[pe].height,me,ge,D[pe].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Se,D[pe].width,D[pe].height,0,me,ge,D[pe].data);for(let Ve=0;Ve<Re.length;Ve++){let St=Re[Ve].image[pe].image;P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,St.width,St.height,me,ge,St.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,Se,St.width,St.height,0,me,ge,St.data)}}else{P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,me,ge,D[pe]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Se,me,ge,D[pe]);for(let Ve=0;Ve<Re.length;Ve++){let qe=Re[Ve];P?ne&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,me,ge,qe.image[pe]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,Se,me,ge,qe.image[pe])}}}p(F)&&g(t.TEXTURE_CUBE_MAP),ye.__version=re.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function Me(_,F,N,q,re,ye){let xe=r.convert(N.format,N.colorSpace),j=r.convert(N.type),V=x(N.internalFormat,xe,j,N.normalized,N.colorSpace),de=o.get(F),Te=o.get(N);if(Te.__renderTarget=F,!de.__hasExternalTextures){let D=Math.max(1,F.width>>ye),Pe=Math.max(1,F.height>>ye);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?a.texImage3D(re,ye,V,D,Pe,F.depth,0,xe,j,null):a.texImage2D(re,ye,V,D,Pe,0,xe,j,null)}a.bindFramebuffer(t.FRAMEBUFFER,_),Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,re,Te.__webglTexture,0,Ne(F)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,re,Te.__webglTexture,ye),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(_,F,N){if(t.bindRenderbuffer(t.RENDERBUFFER,_),F.depthBuffer){let q=F.depthTexture,re=q&&q.isDepthTexture?q.type:null,ye=C(F.stencilBuffer,re),xe=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(F),ye,F.width,F.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(F),ye,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,ye,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,_)}else{let q=F.textures;for(let re=0;re<q.length;re++){let ye=q[re],xe=r.convert(ye.format,ye.colorSpace),j=r.convert(ye.type),V=x(ye.internalFormat,xe,j,ye.normalized,ye.colorSpace);Be(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(F),V,F.width,F.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(F),V,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,V,F.width,F.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(_,F,N){let q=F.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,_),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=o.get(F.depthTexture);if(re.__renderTarget=F,(!re.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),q){if(re.__webglInit===void 0&&(re.__webglInit=!0,F.depthTexture.addEventListener("dispose",T)),re.__webglTexture===void 0){re.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),H(t.TEXTURE_CUBE_MAP,F.depthTexture);let de=r.convert(F.depthTexture.format),Te=r.convert(F.depthTexture.type),D;F.depthTexture.format===jn?D=t.DEPTH_COMPONENT24:F.depthTexture.format===ws&&(D=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,D,F.width,F.height,0,de,Te,null)}}else se(F.depthTexture,0);let ye=re.__webglTexture,xe=Ne(F),j=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,V=F.depthTexture.format===ws?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(F.depthTexture.format===jn)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ye,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ye,0);else if(F.depthTexture.format===ws)Be(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ye,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(_){let F=o.get(_),N=_.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==_.depthTexture){let q=_.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),q){let re=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,q.removeEventListener("dispose",re)};q.addEventListener("dispose",re),F.__depthDisposeCallback=re}F.__boundDepthTexture=q}if(_.depthTexture&&!F.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Qe(F.__webglFramebuffer[q],_,q);else{let q=_.texture.mipmaps;q&&q.length>0?Qe(F.__webglFramebuffer[0],_,0):Qe(F.__webglFramebuffer,_,0)}else if(N){F.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[q]),F.__webglDepthbuffer[q]===void 0)F.__webglDepthbuffer[q]=t.createRenderbuffer(),Ye(F.__webglDepthbuffer[q],_,!1);else{let re=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=F.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ye)}}else{let q=_.texture.mipmaps;if(q&&q.length>0?a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=t.createRenderbuffer(),Ye(F.__webglDepthbuffer,_,!1);else{let re=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=F.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ye)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function le(_,F,N){let q=o.get(_);F!==void 0&&Me(q.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&$(_)}function Ie(_){let F=_.texture,N=o.get(_),q=o.get(F);_.addEventListener("dispose",v);let re=_.textures,ye=_.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=F.version,s.memory.textures++),ye){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(F.mipmaps&&F.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let V=0;V<F.mipmaps.length;V++)N.__webglFramebuffer[j][V]=t.createFramebuffer()}else N.__webglFramebuffer[j]=t.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<F.mipmaps.length;j++)N.__webglFramebuffer[j]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(xe)for(let j=0,V=re.length;j<V;j++){let de=o.get(re[j]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),s.memory.textures++)}if(_.samples>0&&Be(_)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){let V=re[j];N.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[j]);let de=r.convert(V.format,V.colorSpace),Te=r.convert(V.type),D=x(V.internalFormat,de,Te,V.normalized,V.colorSpace,_.isXRRenderTarget===!0),Pe=Ne(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,D,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,N.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(N.__webglDepthRenderbuffer,_,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ye){a.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),H(t.TEXTURE_CUBE_MAP,F);for(let j=0;j<6;j++)if(F.mipmaps&&F.mipmaps.length>0)for(let V=0;V<F.mipmaps.length;V++)Me(N.__webglFramebuffer[j][V],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,V);else Me(N.__webglFramebuffer[j],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(F)&&g(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(xe){for(let j=0,V=re.length;j<V;j++){let de=re[j],Te=o.get(de),D=t.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(D=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(D,Te.__webglTexture),H(D,de),Me(N.__webglFramebuffer,_,de,t.COLOR_ATTACHMENT0+j,D,0),p(de)&&g(D)}a.unbindTexture()}else{let j=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(j=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(j,q.__webglTexture),H(j,F),F.mipmaps&&F.mipmaps.length>0)for(let V=0;V<F.mipmaps.length;V++)Me(N.__webglFramebuffer[V],_,F,t.COLOR_ATTACHMENT0,j,V);else Me(N.__webglFramebuffer,_,F,t.COLOR_ATTACHMENT0,j,0);p(F)&&g(j),a.unbindTexture()}_.depthBuffer&&$(_)}function ie(_){let F=_.textures;for(let N=0,q=F.length;N<q;N++){let re=F[N];if(p(re)){let ye=y(_),xe=o.get(re).__webglTexture;a.bindTexture(ye,xe),g(ye),a.unbindTexture()}}}let ue=[],Ce=[];function Xe(_){if(_.samples>0){if(Be(_)===!1){let F=_.textures,N=_.width,q=_.height,re=t.COLOR_BUFFER_BIT,ye=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=o.get(_),j=F.length>1;if(j)for(let de=0;de<F.length;de++)a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let V=_.texture.mipmaps;V&&V.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<F.length;de++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let Te=o.get(F[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,re,t.NEAREST),l===!0&&(ue.length=0,Ce.length=0,ue.push(t.COLOR_ATTACHMENT0+de),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(ue.push(ye),Ce.push(ye),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<F.length;de++){a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let Te=o.get(F[de]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Te,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){let F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[F])}}}function Ne(_){return Math.min(n.maxSamples,_.samples)}function Be(_){let F=o.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function R(_){let F=s.render.frame;f.get(_)!==F&&(f.set(_,F),_.update())}function it(_,F){let N=_.colorSpace,q=_.format,re=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||N!==_u&&N!==Er&&(Ut.getTransfer(N)===Xt?(q!==fn||re!==Do)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",N)),F}function tt(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=z,this.getTextureUnits=B,this.setTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=le,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function w3(t,e){function a(o,n=Er){let r,s=Ut.getTransfer(n);if(o===Do)return t.UNSIGNED_BYTE;if(o===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(o===fh)return t.UNSIGNED_SHORT_5_5_5_1;if(o===gg)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===Fg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===Ig)return t.BYTE;if(o===xg)return t.SHORT;if(o===oc)return t.UNSIGNED_SHORT;if(o===ch)return t.INT;if(o===An)return t.UNSIGNED_INT;if(o===wn)return t.FLOAT;if(o===En)return t.HALF_FLOAT;if(o===Sg)return t.ALPHA;if(o===vg)return t.RGB;if(o===fn)return t.RGBA;if(o===jn)return t.DEPTH_COMPONENT;if(o===ws)return t.DEPTH_STENCIL;if(o===yg)return t.RED;if(o===dh)return t.RED_INTEGER;if(o===Es)return t.RG;if(o===ph)return t.RG_INTEGER;if(o===hh)return t.RGBA_INTEGER;if(o===Ku||o===Ju||o===Qu||o===ju)if(s===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Ku)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ju)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Qu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ju)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Ku)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ju)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Qu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ju)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===mh||o===Ih||o===xh||o===gh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===gh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Fh||o===Sh||o===vh||o===yh||o===Mh||o===$u||o===Ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===Fh||o===Sh)return s===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===vh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===yh)return r.COMPRESSED_R11_EAC;if(o===Mh)return r.COMPRESSED_SIGNED_R11_EAC;if(o===$u)return r.COMPRESSED_RG11_EAC;if(o===Ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===_h||o===bh||o===Th||o===Ah||o===wh||o===Eh||o===Rh||o===Dh||o===Lh||o===Ph||o===Bh||o===Uh||o===kh||o===Nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===_h)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===bh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Th)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ah)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===wh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Eh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Rh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Dh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Lh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ph)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Bh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Uh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===kh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Nh)return s===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Oh||o===zh||o===Hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===Oh)return s===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Vh||o===Gh||o===ef||o===qh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===Vh)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ef)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===nc?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R3=`
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

}`,Gg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new Lu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Zo({vertexShader:E3,fragmentShader:R3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Ca(new hi(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qg=class extends $n{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,m=null,S=typeof XRWebGLBinding<"u",I=new Gg,p={},g=a.getContextAttributes(),y=null,x=null,C=[],b=[],T=new ke,v=null,A=null,w=new io;w.viewport=new Ia;let L=new io;L.viewport=new Ia;let X=[w,L],z=new nh,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=C[ee];return te===void 0&&(te=new Hl,C[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=C[ee];return te===void 0&&(te=new Hl,C[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=C[ee];return te===void 0&&(te=new Hl,C[ee]=te),te.getHandSpace()};function ae(ee){let te=b.indexOf(ee.inputSource);if(te===-1)return;let Ee=C[te];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||s),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){n.removeEventListener("select",ae),n.removeEventListener("selectstart",ae),n.removeEventListener("selectend",ae),n.removeEventListener("squeeze",ae),n.removeEventListener("squeezestart",ae),n.removeEventListener("squeezeend",ae),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",se);for(let ee=0;ee<C.length;ee++){let te=b[ee];te!==null&&(b[ee]=null,C[ee].disconnect(te))}B=null,k=null,I.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(y),d=null,u=null,h=null,n=null,x=null,lt.stop(),o.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),A!==null){let ee=A.camera;ee.fov=A.fov,ee.zoom=A.zoom,ee.updateProjectionMatrix(),A=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,o.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){i=ee,o.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",ae),n.addEventListener("selectstart",ae),n.addEventListener("selectend",ae),n.addEventListener("squeeze",ae),n.addEventListener("squeezestart",ae),n.addEventListener("squeezeend",ae),n.addEventListener("end",J),n.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await a.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ke=null,Me=null;g.depth&&(Me=g.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Ee=g.stencil?ws:jn,Ke=g.stencil?nc:An);let Ye={colorFormat:a.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ye),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ro(u.textureWidth,u.textureHeight,{format:fn,type:Do,depthTexture:new vs(u.textureWidth,u.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,Ee),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ro(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Do,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),lt.setContext(n),lt.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function se(ee){for(let te=0;te<ee.removed.length;te++){let Ee=ee.removed[te],Ke=b.indexOf(Ee);Ke>=0&&(b[Ke]=null,C[Ke].disconnect(Ee))}for(let te=0;te<ee.added.length;te++){let Ee=ee.added[te],Ke=b.indexOf(Ee);if(Ke===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=b.length){b.push(Ee),Ke=Ye;break}else if(b[Ye]===null){b[Ye]=Ee,Ke=Ye;break}if(Ke===-1)break}let Me=C[Ke];Me&&Me.connect(Ee)}}let G=new O,K=new O;function oe(ee,te,Ee){G.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);let Ke=G.distanceTo(K),Me=te.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),$=Me[14]/(Me[10]+1),le=(Me[9]+1)/Me[5],Ie=(Me[9]-1)/Me[5],ie=(Me[8]-1)/Me[0],ue=(Ye[8]+1)/Ye[0],Ce=Qe*ie,Xe=Qe*ue,Ne=Ke/(-ie+ue),Be=Ne*-ie;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(Ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Me[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let R=Qe+Ne,it=$+Ne,tt=Ce-Be,_=Xe+(Ke-Be),F=le*$/it*R,N=Ie*$/it*R;ee.projectionMatrix.makePerspective(tt,_,F,N,R,it),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let te=ee.near,Ee=ee.far;I.texture!==null&&(I.depthNear>0&&(te=I.depthNear),I.depthFar>0&&(Ee=I.depthFar)),z.near=L.near=w.near=te,z.far=L.far=w.far=Ee,(B!==z.near||k!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,k=z.far),z.layers.mask=ee.layers.mask|6,w.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Ke=ee.parent,Me=z.cameras;De(z,Ke);for(let Ye=0;Ye<Me.length;Ye++)De(Me[Ye],Ke);Me.length===2?oe(z,w,L):z.projectionMatrix.copy(w.projectionMatrix),A===null&&ee.isPerspectiveCamera&&(A={camera:ee,fov:ee.fov,zoom:ee.zoom}),be(ee,z,Ke)};function be(ee,te,Ee){Ee===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Dp*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(z)},this.getCameraTexture=function(ee){return p[ee]};let $e=null;function H(ee,te){if(f=te.getViewerPose(c||s),m=te,f!==null){let Ee=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ke=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,Ke=!0);for(let $=0;$<Ee.length;$++){let le=Ee[$],Ie=null;if(d!==null)Ie=d.getViewport(le);else{let ue=h.getViewSubImage(u,le);Ie=ue.viewport,$===0&&(e.setRenderTargetTextures(x,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(x))}let ie=X[$];ie===void 0&&(ie=new io,ie.layers.enable($),ie.viewport=new Ia,X[$]=ie),ie.matrix.fromArray(le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),$===0&&(z.matrix.copy(ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ke===!0&&z.cameras.push(ie)}let Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){h=o.getBinding();let $=h.getDepthInformation(Ee[0]);$&&$.isValid&&$.texture&&I.init($,n.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),h=o.getBinding();for(let $=0;$<Ee.length;$++){let le=Ee[$].camera;if(le){let Ie=p[le];Ie||(Ie=new Lu,p[le]=Ie);let ie=h.getCameraImage(le);Ie.sourceTexture=ie}}}}for(let Ee=0;Ee<C.length;Ee++){let Ke=b[Ee],Me=C[Ee];Ke!==null&&Me!==void 0&&Me.update(Ke,te,c||s)}$e&&$e(ee,te),te.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:te}),m=null}let lt=new y_;lt.setAnimationLoop(H),this.setAnimationLoop=function(ee){$e=ee},this.dispose=function(){}}},D3=new na,A_=new Mt;A_.set(-1,0,0,0,1,0,0,0,1);function L3(t,e){function a(I,p){I.matrixAutoUpdate===!0&&I.updateMatrix(),p.value.copy(I.matrix)}function o(I,p){p.color.getRGB(I.fogColor.value,bg(t)),p.isFog?(I.fogNear.value=p.near,I.fogFar.value=p.far):p.isFogExp2&&(I.fogDensity.value=p.density)}function n(I,p,g,y,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(I,p):p.isMeshLambertMaterial?(r(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(I,p),h(I,p)):p.isMeshPhongMaterial?(r(I,p),f(I,p),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(I,p),u(I,p),p.isMeshPhysicalMaterial&&d(I,p,x)):p.isMeshMatcapMaterial?(r(I,p),m(I,p)):p.isMeshDepthMaterial?r(I,p):p.isMeshDistanceMaterial?(r(I,p),S(I,p)):p.isMeshNormalMaterial?r(I,p):p.isLineBasicMaterial?(s(I,p),p.isLineDashedMaterial&&i(I,p)):p.isPointsMaterial?l(I,p,g,y):p.isSpriteMaterial?c(I,p):p.isShadowMaterial?(I.color.value.copy(p.color),I.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(I,p){I.opacity.value=p.opacity,p.color&&I.diffuse.value.copy(p.color),p.emissive&&I.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.bumpMap&&(I.bumpMap.value=p.bumpMap,a(p.bumpMap,I.bumpMapTransform),I.bumpScale.value=p.bumpScale,p.side===vo&&(I.bumpScale.value*=-1)),p.normalMap&&(I.normalMap.value=p.normalMap,a(p.normalMap,I.normalMapTransform),I.normalScale.value.copy(p.normalScale),p.side===vo&&I.normalScale.value.negate()),p.displacementMap&&(I.displacementMap.value=p.displacementMap,a(p.displacementMap,I.displacementMapTransform),I.displacementScale.value=p.displacementScale,I.displacementBias.value=p.displacementBias),p.emissiveMap&&(I.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,I.emissiveMapTransform)),p.specularMap&&(I.specularMap.value=p.specularMap,a(p.specularMap,I.specularMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest);let g=e.get(p),y=g.envMap,x=g.envMapRotation;y&&(I.envMap.value=y,I.envMapRotation.value.setFromMatrix4(D3.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&I.envMapRotation.value.premultiply(A_),I.reflectivity.value=p.reflectivity,I.ior.value=p.ior,I.refractionRatio.value=p.refractionRatio),p.lightMap&&(I.lightMap.value=p.lightMap,I.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,I.lightMapTransform)),p.aoMap&&(I.aoMap.value=p.aoMap,I.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,I.aoMapTransform))}function s(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform))}function i(I,p){I.dashSize.value=p.dashSize,I.totalSize.value=p.dashSize+p.gapSize,I.scale.value=p.scale}function l(I,p,g,y){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.size.value=p.size*g,I.scale.value=y*.5,p.map&&(I.map.value=p.map,a(p.map,I.uvTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function c(I,p){I.diffuse.value.copy(p.color),I.opacity.value=p.opacity,I.rotation.value=p.rotation,p.map&&(I.map.value=p.map,a(p.map,I.mapTransform)),p.alphaMap&&(I.alphaMap.value=p.alphaMap,a(p.alphaMap,I.alphaMapTransform)),p.alphaTest>0&&(I.alphaTest.value=p.alphaTest)}function f(I,p){I.specular.value.copy(p.specular),I.shininess.value=Math.max(p.shininess,1e-4)}function h(I,p){p.gradientMap&&(I.gradientMap.value=p.gradientMap)}function u(I,p){I.metalness.value=p.metalness,p.metalnessMap&&(I.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,I.metalnessMapTransform)),I.roughness.value=p.roughness,p.roughnessMap&&(I.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,I.roughnessMapTransform)),p.envMap&&(I.envMapIntensity.value=p.envMapIntensity)}function d(I,p,g){I.ior.value=p.ior,p.sheen>0&&(I.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),I.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(I.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,I.sheenColorMapTransform)),p.sheenRoughnessMap&&(I.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,I.sheenRoughnessMapTransform))),p.clearcoat>0&&(I.clearcoat.value=p.clearcoat,I.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(I.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,I.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(I.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,I.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(I.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,I.clearcoatNormalMapTransform),I.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vo&&I.clearcoatNormalScale.value.negate())),p.dispersion>0&&(I.dispersion.value=p.dispersion),p.retroreflectivity>0&&(I.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(I.iridescence.value=p.iridescence,I.iridescenceIOR.value=p.iridescenceIOR,I.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],I.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(I.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,I.iridescenceMapTransform)),p.iridescenceThicknessMap&&(I.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,I.iridescenceThicknessMapTransform))),p.transmission>0&&(I.transmission.value=p.transmission,I.transmissionSamplerMap.value=g.texture,I.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(I.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,I.transmissionMapTransform)),I.thickness.value=p.thickness,p.thicknessMap&&(I.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,I.thicknessMapTransform)),I.attenuationDistance.value=p.attenuationDistance,I.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(I.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(I.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,I.anisotropyMapTransform))),I.specularIntensity.value=p.specularIntensity,I.specularColor.value.copy(p.specularColor),p.specularColorMap&&(I.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,I.specularColorMapTransform)),p.specularIntensityMap&&(I.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,I.specularIntensityMapTransform))}function m(I,p){p.matcap&&(I.matcap.value=p.matcap)}function S(I,p){let g=e.get(p).light;I.referencePosition.value.setFromMatrixPosition(g.matrixWorld),I.nearDistance.value=g.shadow.camera.near,I.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function P3(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,C){let b=C.program;o.uniformBlockBinding(x,b)}function c(x,C){let b=n[x.id];b===void 0&&(I(x),b=f(x),n[x.id]=b,x.addEventListener("dispose",g));let T=C.program;o.updateUBOMapping(x,T);let v=e.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function f(x){let C=h();x.__bindingPointIndex=C;let b=t.createBuffer(),T=x.__size,v=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,T,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,b),b}function h(){for(let x=0;x<i;x++)if(s.indexOf(x)===-1)return s.push(x),x;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let C=n[x.id],b=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let v=0,A=b.length;v<A;v++){let w=b[v];if(Array.isArray(w))for(let L=0,X=w.length;L<X;L++)d(w[L],v,L,T);else d(w,v,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(x,C,b,T){if(S(x,C,b,T)===!0){let v=x.__offset,A=x.value;if(Array.isArray(A)){let w=0;for(let L=0;L<A.length;L++){let X=A[L],z=p(X);m(X,x.__data,w),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(w+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,x.__data)}}function m(x,C,b){typeof x=="number"||typeof x=="boolean"?C[0]=x:x.isMatrix3?(C[0]=x.elements[0],C[1]=x.elements[1],C[2]=x.elements[2],C[3]=0,C[4]=x.elements[3],C[5]=x.elements[4],C[6]=x.elements[5],C[7]=0,C[8]=x.elements[6],C[9]=x.elements[7],C[10]=x.elements[8],C[11]=0):ArrayBuffer.isView(x)?C.set(new x.constructor(x.buffer,x.byteOffset,C.length)):x.toArray(C,b)}function S(x,C,b,T){let v=x.value,A=C+"_"+b;if(T[A]===void 0)return typeof v=="number"||typeof v=="boolean"?T[A]=v:ArrayBuffer.isView(v)?T[A]=v.slice():T[A]=v.clone(),!0;{let w=T[A];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function I(x){let C=x.uniforms,b=0,T=16;for(let A=0,w=C.length;A<w;A++){let L=Array.isArray(C[A])?C[A]:[C[A]];for(let X=0,z=L.length;X<z;X++){let B=L[X],k=Array.isArray(B.value)?B.value:[B.value];for(let ae=0,J=k.length;ae<J;ae++){let se=k[ae],G=p(se),K=b%T,oe=K%G.boundary,De=K+oe;b+=oe,De!==0&&T-De<G.storage&&(b+=T-De),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=G.storage}}}let v=b%T;return v>0&&(b+=T-v),x.__size=b,x.__cache={},this}function p(x){let C={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(C.boundary=4,C.storage=4):x.isVector2?(C.boundary=8,C.storage=8):x.isVector3||x.isColor?(C.boundary=16,C.storage=12):x.isVector4?(C.boundary=16,C.storage=16):x.isMatrix3?(C.boundary=48,C.storage=48):x.isMatrix4?(C.boundary=64,C.storage=64):x.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(C.boundary=16,C.storage=x.byteLength):It("WebGLRenderer: Unsupported uniform value type.",x),C}function g(x){let C=x.target;C.removeEventListener("dispose",g);let b=s.indexOf(C.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function y(){for(let x in n)t.deleteBuffer(n[x]);s=[],n={},r={}}return{bind:l,update:c,dispose:y}}var B3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ar=null;function U3(){return ar===null&&(ar=new ql(B3,16,16,Es,En),ar.name="DFG_LUT",ar.minFilter=Na,ar.magFilter=Na,ar.wrapS=un,ar.wrapT=un,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}var Qh=class{constructor(e={}){let{canvas:a=GC(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Do}=e;this.isWebGLRenderer=!0;let m;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=o.getContextAttributes().alpha}else m=s;let S=d,I=new Set([hh,ph,dh]),p=new Set([Do,An,oc,nc,uh,fh]),g=new Uint32Array(4),y=new Int32Array(4),x=new O,C=null,b=null,T=[],v=[],A=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,L=!1,X=null,z=null,B=null,k=null;this._outputColorSpace=to;let ae=0,J=0,se=null,G=-1,K=null,oe=new Ia,De=new Ia,be=null,$e=new _t(0),H=0,lt=a.width,ee=a.height,te=1,Ee=null,Ke=null,Me=new Ia(0,0,lt,ee),Ye=new Ia(0,0,lt,ee),Qe=!1,$=new Wl,le=!1,Ie=!1,ie=new na,ue=new O,Ce=new Ia,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Be(){return se===null?te:1}let R=o;function it(M,E){return a.getContext(M,E)}let tt,_,F,N,q,re,ye,xe,j,V,de,Te,D,Pe,me,ge,Se,P,ve,ne,Ae,Re,pe;try{let M={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${rh}`),a.addEventListener("webglcontextlost",St,!1),a.addEventListener("webglcontextrestored",xt,!1),a.addEventListener("webglcontextcreationerror",_a,!1),R===null){let E="webgl2";if(R=it(E,M),R===null)throw it(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(M){throw a.removeEventListener("webglcontextlost",St,!1),a.removeEventListener("webglcontextrestored",xt,!1),a.removeEventListener("webglcontextcreationerror",_a,!1),mt("WebGLRenderer: "+M.message),M}function Ve(){tt=new GD(R),tt.init(),Ae=new w3(R,tt),_=new LD(R,tt,e,Ae),F=new T3(R,tt),_.reversedDepthBuffer&&u&&F.buffers.depth.setReversed(!0),z=R.createFramebuffer(),B=R.createFramebuffer(),k=R.createFramebuffer(),N=new XD(R),q=new p3,re=new A3(R,tt,F,q,_,Ae,N),ye=new VD(w),xe=new Z2(R),Re=new RD(R,xe),j=new qD(R,xe,N,Re),V=new ZD(R,j,xe,Re,N),P=new YD(R,_,re),me=new PD(q),de=new d3(w,ye,tt,_,Re,me),Te=new L3(w,q),D=new m3,Pe=new v3(tt),Se=new ED(w,ye,F,V,m,l),ge=new b3(w,V,_),pe=new P3(R,N,_,F),ve=new DD(R,tt,N),ne=new WD(R,tt,N),N.programs=de.programs,w.capabilities=_,w.extensions=tt,w.properties=q,w.renderLists=D,w.shadowMap=ge,w.state=F,w.info=N}S!==Do&&(A=new JD(S,a.width,a.height,i,n,r));let qe=new qg(w,R);this.xr=qe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(lt,ee,!1))},this.getSize=function(M){return M.set(lt,ee)},this.setSize=function(M,E,Z=!0){if(qe.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,ee=E,a.width=Math.floor(M*te),a.height=Math.floor(E*te),Z===!0&&(a.style.width=M+"px",a.style.height=E+"px"),A!==null&&A.setSize(a.width,a.height),this.setViewport(0,0,M,E)},this.getDrawingBufferSize=function(M){return M.set(lt*te,ee*te).floor()},this.setDrawingBufferSize=function(M,E,Z){lt=M,ee=E,te=Z,a.width=Math.floor(M*Z),a.height=Math.floor(E*Z),this.setViewport(0,0,M,E)},this.setEffects=function(M){if(S===Do){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let E=0;E<M.length;E++)if(M[E].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(oe)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,E,Z,U){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,E,Z,U),F.viewport(oe.copy(Me).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,E,Z,U){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,E,Z,U),F.scissor(De.copy(Ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){F.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Ke=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,E=!0,Z=!0){let U=0;if(M){let Y=!1;if(se!==null){let _e=se.texture.format;Y=I.has(_e)}if(Y){let _e=se.texture.type,Fe=p.has(_e),Le=Se.getClearColor(),He=Se.getClearAlpha(),et=Le.r,dt=Le.g,ct=Le.b;Fe?(g[0]=et,g[1]=dt,g[2]=ct,g[3]=He,R.clearBufferuiv(R.COLOR,0,g)):(y[0]=et,y[1]=dt,y[2]=ct,y[3]=He,R.clearBufferiv(R.COLOR,0,y))}else U|=R.COLOR_BUFFER_BIT}E&&(U|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(U|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&R.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),X=M},this.dispose=function(){a.removeEventListener("webglcontextlost",St,!1),a.removeEventListener("webglcontextrestored",xt,!1),a.removeEventListener("webglcontextcreationerror",_a,!1),Se.dispose(),D.dispose(),Pe.dispose(),q.dispose(),ye.dispose(),V.dispose(),Re.dispose(),pe.dispose(),de.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",rt),qe.removeEventListener("sessionend",nt),Ct.stop()};function St(M){M.preventDefault(),Cg("WebGLRenderer: Context Lost."),L=!0}function xt(){Cg("WebGLRenderer: Context Restored."),L=!1;let M=N.autoReset,E=ge.enabled,Z=ge.autoUpdate,U=ge.needsUpdate,Y=ge.type;Ve(),N.autoReset=M,ge.enabled=E,ge.autoUpdate=Z,ge.needsUpdate=U,ge.type=Y}function _a(M){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function da(M){let E=M.target;E.removeEventListener("dispose",da),ba(E)}function ba(M){Dn(M),q.remove(M)}function Dn(M){let E=q.get(M).programs;E!==void 0&&(E.forEach(function(Z){de.releaseProgram(Z)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,E,Z,U,Y,_e){E===null&&(E=Xe);let Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=pt(M,E,Z,U,Y);F.setMaterial(U,Fe);let He=Z.index,et=1;if(U.wireframe===!0){if(He=j.getWireframeAttribute(Z),He===void 0)return;et=2}let dt=Z.drawRange,ct=Z.attributes.position,Je=dt.start*et,gt=(dt.start+dt.count)*et;_e!==null&&(Je=Math.max(Je,_e.start*et),gt=Math.min(gt,(_e.start+_e.count)*et)),He!==null?(Je=Math.max(Je,0),gt=Math.min(gt,He.count)):ct!=null&&(Je=Math.max(Je,0),gt=Math.min(gt,ct.count));let Ot=gt-Je;if(Ot<0||Ot===1/0)return;Re.setup(Y,U,Le,Z,He);let ut,Tt=ve;if(He!==null&&(ut=xe.get(He),Tt=ne,Tt.setIndex(ut)),Y.isMesh)U.wireframe===!0?(F.setLineWidth(U.wireframeLinewidth*Be()),Tt.setMode(R.LINES)):Tt.setMode(R.TRIANGLES);else if(Y.isLine){let ua=U.linewidth;ua===void 0&&(ua=1),F.setLineWidth(ua*Be()),Y.isLineSegments?Tt.setMode(R.LINES):Y.isLineLoop?Tt.setMode(R.LINE_LOOP):Tt.setMode(R.LINE_STRIP)}else Y.isPoints?Tt.setMode(R.POINTS):Y.isSprite&&Tt.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ua=Y._multiDrawStarts,We=Y._multiDrawCounts,Qt=Y._multiDrawCount,vt=He?xe.get(He).bytesPerElement:1,jt=q.get(U).currentProgram.getUniforms();for(let pa=0;pa<Qt;pa++)jt.setValue(R,"_gl_DrawID",pa),Tt.render(ua[pa]/vt,We[pa])}else if(Y.isInstancedMesh)Tt.renderInstances(Je,Ot,Y.count);else if(Z.isInstancedBufferGeometry){let ua=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,We=Math.min(Z.instanceCount,ua);Tt.renderInstances(Je,Ot,We)}else Tt.render(Je,Ot)};function dn(M,E,Z,U){X!==null&&M.isNodeMaterial&&X.setObject(U,M),le===!0&&me.setState(M,Z,!1),M.transparent===!0&&M.side===Jo&&M.forceSinglePass===!1?(M.side=vo,M.needsUpdate=!0,W(M,E,U),M.side=Ts,M.needsUpdate=!0,W(M,E,U),M.side=Jo):W(M,E,U)}this.compile=function(M,E,Z=null){Z===null&&(Z=M),X!==null&&X.renderStart(M,E,Z),b=Pe.get(Z),b.init(E),v.push(b),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(E.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),M!==Z&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(E.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),X!==null&&X.updateLights(b.state.lightsArray),Ie=this.localClippingEnabled,le=me.init(this.clippingPlanes,Ie),le===!0&&me.setGlobalState(this.clippingPlanes,E),X!==null&&ge.render(b.state.shadowsArray,Z,E);let U=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let _e=Y.material;if(_e)if(Array.isArray(_e))for(let Fe=0;Fe<_e.length;Fe++){let Le=_e[Fe];dn(Le,Z,E,Y),U.add(Le)}else dn(_e,Z,E,Y),U.add(_e)}),b=v.pop(),X!==null&&X.renderEnd(),U},this.compileAsync=function(M,E,Z=null){let U=this.compile(M,E,Z);return new Promise(Y=>{function _e(){if(U.forEach(function(Fe){let He=q.get(Fe).currentProgram;(He===void 0||He.isReady())&&U.delete(Fe)}),U.size===0){Y(M);return}setTimeout(_e,10)}tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let pn=null;function ze(M){pn&&pn(M)}function rt(){Ct.stop()}function nt(){Ct.start()}let Ct=new y_;Ct.setAnimationLoop(ze),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(M){pn=M,qe.setAnimationLoop(M),M===null?Ct.stop():Ct.start()},qe.addEventListener("sessionstart",rt),qe.addEventListener("sessionend",nt),this.render=function(M,E){if(E!==void 0&&E.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;X!==null&&X.renderStart(M,E);let Z=qe.enabled===!0&&qe.isPresenting===!0,U=A!==null&&(se===null||Z)&&A.begin(w,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(E),E=qe.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,E,se),b=Pe.get(M,v.length),b.init(E),b.state.textureUnits=re.getTextureUnits(),v.push(b),ie.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),$.setFromProjectionMatrix(ie,bn,E.reversedDepth),Ie=this.localClippingEnabled,le=me.init(this.clippingPlanes,Ie),C=D.get(M,T.length),C.init(),T.push(C),qe.enabled===!0&&qe.isPresenting===!0){let Fe=w.xr.getDepthSensingMesh();Fe!==null&&kt(Fe,E,-1/0,w.sortObjects)}kt(M,E,0,w.sortObjects),C.finish(),X!==null&&X.updateLights(b.state.lightsArray),w.sortObjects===!0&&C.sort(Ee,Ke),Ne=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ne&&Se.addToRenderList(C,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&me.beginShadows();let Y=b.state.shadowsArray;if(ge.render(Y,M,E),le===!0&&me.endShadows(),(U&&A.hasRenderPass())===!1){let Fe=C.opaque,Le=C.transmissive;if(b.setupLights(),E.isArrayCamera){let He=E.cameras;if(Le.length>0)for(let et=0,dt=He.length;et<dt;et++){let ct=He[et];Pa(Fe,Le,M,ct)}Ne&&Se.render(M);for(let et=0,dt=He.length;et<dt;et++){let ct=He[et];ca(C,M,ct,ct.viewport)}}else Le.length>0&&Pa(Fe,Le,M,E),Ne&&Se.render(M),ca(C,M,E)}se!==null&&J===0&&(re.updateMultisampleRenderTarget(se),re.updateRenderTargetMipmap(se)),U&&A.end(w),M.isScene===!0&&M.onAfterRender(w,M,E),Re.resetDefaultState(),G=-1,K=null,v.pop(),v.length>0?(b=v[v.length-1],re.setTextureUnits(b.state.textureUnits),le===!0&&me.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?C=T[T.length-1]:C=null,X!==null&&X.renderEnd()};function kt(M,E,Z,U){if(M.visible===!1)return;if(M.layers.test(E.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(E);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($)){U&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);let Fe=V.update(M),Le=M.material;Le.visible&&C.push(M,Fe,Le,Z,Ce.z,null,E)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($))){let Fe=V.update(M),Le=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(Le)){let He=Fe.groups;for(let et=0,dt=He.length;et<dt;et++){let ct=He[et],Je=Le[ct.materialIndex];Je&&Je.visible&&C.push(M,Fe,Je,Z,Ce.z,ct,E)}}else Le.visible&&C.push(M,Fe,Le,Z,Ce.z,null,E)}}let _e=M.children;for(let Fe=0,Le=_e.length;Fe<Le;Fe++)kt(_e[Fe],E,Z,U)}function ca(M,E,Z,U){let{opaque:Y,transmissive:_e,transparent:Fe}=M;b.setupLightsView(Z),le===!0&&me.setGlobalState(w.clippingPlanes,Z),U&&F.viewport(oe.copy(U)),Y.length>0&&Nt(Y,E,Z),_e.length>0&&Nt(_e,E,Z),Fe.length>0&&Nt(Fe,E,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Pa(M,E,Z,U){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[U.id]===void 0){let Je=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[U.id]=new Ro(1,1,{generateMipmaps:!0,type:Je?En:Do,minFilter:tr,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let _e=b.state.transmissionRenderTarget[U.id],Fe=U.viewport||oe;_e.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);let Le=w.getRenderTarget(),He=w.getActiveCubeFace(),et=w.getActiveMipmapLevel();w.setRenderTarget(_e),w.getClearColor($e),H=w.getClearAlpha(),H<1&&w.setClearColor(16777215,.5),w.clear(),Ne&&Se.render(Z);let dt=w.toneMapping;w.toneMapping=Tn;let ct=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),b.setupLightsView(U),le===!0&&me.setGlobalState(w.clippingPlanes,U),Nt(M,Z,U),re.updateMultisampleRenderTarget(_e),re.updateRenderTargetMipmap(_e),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let gt=0,Ot=E.length;gt<Ot;gt++){let ut=E[gt],{object:Tt,geometry:ua,material:We,group:Qt}=ut;if(We.side===Jo&&Tt.layers.test(U.layers)){let vt=We.side;We.side=vo,We.needsUpdate=!0,ft(Tt,Z,U,ua,We,Qt),We.side=vt,We.needsUpdate=!0,Je=!0}}Je===!0&&(re.updateMultisampleRenderTarget(_e),re.updateRenderTargetMipmap(_e))}w.setRenderTarget(Le,He,et),w.setClearColor($e,H),ct!==void 0&&(U.viewport=ct),w.toneMapping=dt}function Nt(M,E,Z){let U=E.isScene===!0?E.overrideMaterial:null;for(let Y=0,_e=M.length;Y<_e;Y++){let Fe=M[Y],{object:Le,geometry:He,group:et}=Fe,dt=Fe.material;dt.allowOverride===!0&&U!==null&&(dt=U),Le.layers.test(Z.layers)&&ft(Le,E,Z,He,dt,et)}}function ft(M,E,Z,U,Y,_e){X!==null&&Y.isNodeMaterial&&X.setObject(M,Y),M.onBeforeRender(w,E,Z,U,Y,_e),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(w,E,Z,U,M,_e),Y.transparent===!0&&Y.side===Jo&&Y.forceSinglePass===!1?(Y.side=vo,Y.needsUpdate=!0,w.renderBufferDirect(Z,E,U,Y,M,_e),Y.side=Ts,Y.needsUpdate=!0,w.renderBufferDirect(Z,E,U,Y,M,_e),Y.side=Jo):w.renderBufferDirect(Z,E,U,Y,M,_e),M.onAfterRender(w,E,Z,U,Y,_e)}function W(M,E,Z){E.isScene!==!0&&(E=Xe);let U=q.get(M),Y=b.state.lights,_e=b.state.shadowsArray,Fe=Y.state.version,Le=de.getParameters(M,Y.state,_e,E,Z,b.state.lightProbeGridArray),He=de.getProgramCacheKey(Le),et=U.programs;U.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?E.environment:null,U.fog=E.fog;let dt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;U.envMap=ye.get(M.envMap||U.environment,dt),U.envMapRotation=U.environment!==null&&M.envMap===null?E.environmentRotation:M.envMapRotation,et===void 0&&(M.addEventListener("dispose",da),et=new Map,U.programs=et);let ct=et.get(He);if(ct!==void 0){if(U.currentProgram===ct&&U.lightsStateVersion===Fe)return fe(M,Le),ct}else Le.uniforms=de.getUniforms(M),X!==null&&M.isNodeMaterial&&X.build(M,Z,Le),M.onBeforeCompile(Le,w),ct=de.acquireProgram(Le,He),et.set(He,ct),U.uniforms=Le.uniforms;let Je=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Je.clippingPlanes=me.uniform),fe(M,Le),U.needsLights=ce(M),U.lightsStateVersion=Fe,U.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.sunLights.value=Y.state.sun,Je.sunLightShadows.value=Y.state.sunShadow,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.sunShadowMatrix.value=Y.state.sunShadowMatrix,Je.sunShadowCascade.value=Y.state.sunShadowCascade,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),U.lightProbeGrid=b.state.lightProbeGridArray.length>0,U.currentProgram=ct,U.uniformsList=null,ct}function Q(M){if(M.uniformsList===null){let E=M.currentProgram.getUniforms();M.uniformsList=lc.seqWithValue(E.seq,M.uniforms)}return M.uniformsList}function fe(M,E){let Z=q.get(M);Z.outputColorSpace=E.outputColorSpace,Z.batching=E.batching,Z.batchingColor=E.batchingColor,Z.instancing=E.instancing,Z.instancingColor=E.instancingColor,Z.instancingMorph=E.instancingMorph,Z.skinning=E.skinning,Z.morphTargets=E.morphTargets,Z.morphNormals=E.morphNormals,Z.morphColors=E.morphColors,Z.morphTargetsCount=E.morphTargetsCount,Z.numClippingPlanes=E.numClippingPlanes,Z.numIntersection=E.numClipIntersection,Z.vertexAlphas=E.vertexAlphas,Z.vertexTangents=E.vertexTangents,Z.toneMapping=E.toneMapping}function Oe(M,E){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(E.matrixWorld);for(let Z=0,U=M.length;Z<U;Z++){let Y=M[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function pt(M,E,Z,U,Y){E.isScene!==!0&&(E=Xe),re.resetTextureUnits();let _e=E.fog,Fe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?E.environment:null,Le=se===null?w.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ut.workingColorSpace,He=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,et=ye.get(U.envMap||Fe,He),dt=U.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ct=!!Z.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Je=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color,ut=Tn;U.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=w.toneMapping);let Tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ua=Tt!==void 0?Tt.length:0,We=q.get(U),Qt=b.state.lights;if(le===!0&&(Ie===!0||M!==K)){let we=M===K&&U.id===G;me.setState(U,M,we)}let vt=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Qt.state.version||We.outputColorSpace!==Le||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isBatchedMesh&&We.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&We.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==et||U.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==me.numPlanes||We.numIntersection!==me.numIntersection)||We.vertexAlphas!==dt||We.vertexTangents!==ct||We.morphTargets!==Je||We.morphNormals!==gt||We.morphColors!==Ot||We.toneMapping!==ut||We.morphTargetsCount!==ua||!!We.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,We.__version=U.version);let jt=We.currentProgram;vt===!0&&(jt=W(U,E,Y),X&&U.isNodeMaterial&&X.onUpdateProgram(U,jt,We));let pa=!1,Ta=!1,Ya=!1,zt=jt.getUniforms(),at=We.uniforms;if(F.useProgram(jt.program)&&(pa=!0,Ta=!0,Ya=!0),U.id!==G&&(G=U.id,Ta=!0),We.needsLights){let we=Oe(b.state.lightProbeGridArray,Y);We.lightProbeGrid!==we&&(We.lightProbeGrid=we,Ta=!0)}if(pa||K!==M){F.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),zt.setValue(R,"projectionMatrix",M.projectionMatrix),zt.setValue(R,"viewMatrix",M.matrixWorldInverse);let wt=zt.map.cameraPosition;wt!==void 0&&wt.setValue(R,ue.setFromMatrixPosition(M.matrixWorld)),_.logarithmicDepthBuffer&&zt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&zt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Ta=!0,Ya=!0)}if(We.needsLights&&(Qt.state.sunShadowMap.length>0&&zt.setValue(R,"sunShadowMap",Qt.state.sunShadowMap,re),Qt.state.directionalShadowMap.length>0&&zt.setValue(R,"directionalShadowMap",Qt.state.directionalShadowMap,re),Qt.state.spotShadowMap.length>0&&zt.setValue(R,"spotShadowMap",Qt.state.spotShadowMap,re),Qt.state.pointShadowMap.length>0&&zt.setValue(R,"pointShadowMap",Qt.state.pointShadowMap,re)),Y.isSkinnedMesh){zt.setOptional(R,Y,"bindMatrix"),zt.setOptional(R,Y,"bindMatrixInverse");let we=Y.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),zt.setValue(R,"boneTexture",we.boneTexture,re))}Y.isBatchedMesh&&(zt.setOptional(R,Y,"batchingTexture"),zt.setValue(R,"batchingTexture",Y._matricesTexture,re),zt.setOptional(R,Y,"batchingIdTexture"),zt.setValue(R,"batchingIdTexture",Y._indirectTexture,re),zt.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(R,"batchingColorTexture",Y._colorsTexture,re));let va=Z.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&P.update(Y,Z,jt),(Ta||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,zt.setValue(R,"receiveShadow",Y.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&E.environment!==null&&(at.envMapIntensity.value=E.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=U3()),Ta){if(zt.setValue(R,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&Ht(at,Ya),_e&&U.fog===!0&&Te.refreshFogUniforms(at,_e),Te.refreshMaterialUniforms(at,U,te,ee,b.state.transmissionRenderTarget[M.id]),We.needsLights&&We.lightProbeGrid){let we=We.lightProbeGrid;at.probesSH.value=we.texture,at.probesMin.value.copy(we.boundingBox.min),at.probesMax.value.copy(we.boundingBox.max),at.probesResolution.value.copy(we.resolution)}lc.upload(R,Q(We),at,re)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(lc.upload(R,Q(We),at,re),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&zt.setValue(R,"center",Y.center),zt.setValue(R,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(R,"normalMatrix",Y.normalMatrix),zt.setValue(R,"modelMatrix",Y.matrixWorld),U.uniformsGroups!==void 0){let we=U.uniformsGroups;for(let wt=0,Pt=we.length;wt<Pt;wt++){let ya=we[wt];pe.update(ya,jt),pe.bind(ya,jt)}}return jt}function Ht(M,E){M.ambientLightColor.needsUpdate=E,M.lightProbe.needsUpdate=E,M.sunLights.needsUpdate=E,M.sunLightShadows.needsUpdate=E,M.directionalLights.needsUpdate=E,M.directionalLightShadows.needsUpdate=E,M.pointLights.needsUpdate=E,M.pointLightShadows.needsUpdate=E,M.spotLights.needsUpdate=E,M.spotLightShadows.needsUpdate=E,M.rectAreaLights.needsUpdate=E,M.hemisphereLights.needsUpdate=E}function ce(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,E,Z){let U=q.get(M);U.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=E,q.get(M.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:Z,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,E){let Z=q.get(M);Z.__webglFramebuffer=E,Z.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(M,E=0,Z=0){se=M,ae=E,J=Z;let U=null,Y=!1,_e=!1;if(M){let Le=q.get(M);if(Le.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(R.FRAMEBUFFER,Le.__webglFramebuffer),oe.copy(M.viewport),De.copy(M.scissor),be=M.scissorTest,F.viewport(oe),F.scissor(De),F.setScissorTest(be),G=-1;return}else if(Le.__webglFramebuffer===void 0)re.setupRenderTarget(M);else if(Le.__hasExternalTextures)re.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let dt=M.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&q.has(dt)&&(M.width!==dt.image.width||M.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(M)}}let He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);let et=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(et[E])?U=et[E][Z]:U=et[E],Y=!0):M.samples>0&&re.useMultisampledRTT(M)===!1?U=q.get(M).__webglMultisampledFramebuffer:Array.isArray(et)?U=et[Z]:U=et,oe.copy(M.viewport),De.copy(M.scissor),be=M.scissorTest}else oe.copy(Me).multiplyScalar(te).floor(),De.copy(Ye).multiplyScalar(te).floor(),be=Qe;if(Z!==0&&(U=z),F.bindFramebuffer(R.FRAMEBUFFER,U)&&F.drawBuffers(M,U),F.viewport(oe),F.scissor(De),F.setScissorTest(be),Y){let Le=q.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+E,Le.__webglTexture,Z)}else if(_e){let Le=E;for(let He=0;He<M.textures.length;He++){let et=q.get(M.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,et.__webglTexture,Z,Le)}}else if(M!==null&&Z!==0){let Le=q.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,Z)}G=-1};function Ge(M){let E=q.get(M);return(E.__readFormat!==M.format||E.__readType!==M.type)&&(E.__readFormat=M.format,E.__readType=M.type,E.__formatReadable=_.textureFormatReadable(M.format),E.__typeReadable=_.textureTypeReadable(M.type)),E}this.readRenderTargetPixels=function(M,E,Z,U,Y,_e,Fe,Le=0){if(!(M&&M.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){F.bindFramebuffer(R.FRAMEBUFFER,He);try{let et=M.textures[Le],dt=et.format,ct=et.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let Je=Ge(et);if(Je.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=M.width-U&&Z>=0&&Z<=M.height-Y&&R.readPixels(E,Z,U,Y,Ae.convert(dt),Ae.convert(ct),_e)}finally{let et=se!==null?q.get(se).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(M,E,Z,U,Y,_e,Fe,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(E>=0&&E<=M.width-U&&Z>=0&&Z<=M.height-Y){F.bindFramebuffer(R.FRAMEBUFFER,He);let et=M.textures[Le],dt=et.format,ct=et.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let Je=Ge(et);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,gt),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),R.readPixels(E,Z,U,Y,Ae.convert(dt),Ae.convert(ct),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Ot=se!==null?q.get(se).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,Ot);let ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await WC(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,gt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(gt),R.deleteSync(ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,E=null,Z=0){let U=Math.pow(2,-Z),Y=Math.floor(M.image.width*U),_e=Math.floor(M.image.height*U),Fe=E!==null?E.x:0,Le=E!==null?E.y:0;re.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Fe,Le,Y,_e),F.unbindTexture()},this.copyTextureToTexture=function(M,E,Z=null,U=null,Y=0,_e=0){let Fe,Le,He,et,dt,ct,Je,gt,Ot,ut=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(Z!==null)Fe=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,et=Z.min.x,dt=Z.min.y,ct=Z.isBox3?Z.min.z:0;else{let at=Math.pow(2,-Y);Fe=Math.floor(ut.width*at),Le=Math.floor(ut.height*at),M.isDataArrayTexture?He=ut.depth:M.isData3DTexture?He=Math.floor(ut.depth*at):He=1,et=0,dt=0,ct=0}U!==null?(Je=U.x,gt=U.y,Ot=U.z):(Je=0,gt=0,Ot=0);let Tt=Ae.convert(E.format),ua=Ae.convert(E.type),We;E.isData3DTexture?(re.setTexture3D(E,0),We=R.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(re.setTexture2DArray(E,0),We=R.TEXTURE_2D_ARRAY):(re.setTexture2D(E,0),We=R.TEXTURE_2D),F.activeTexture(R.TEXTURE0),F.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,E.flipY),F.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),F.pixelStorei(R.UNPACK_ALIGNMENT,E.unpackAlignment);let Qt=F.getParameter(R.UNPACK_ROW_LENGTH),vt=F.getParameter(R.UNPACK_IMAGE_HEIGHT),jt=F.getParameter(R.UNPACK_SKIP_PIXELS),pa=F.getParameter(R.UNPACK_SKIP_ROWS),Ta=F.getParameter(R.UNPACK_SKIP_IMAGES);F.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),F.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),F.pixelStorei(R.UNPACK_SKIP_PIXELS,et),F.pixelStorei(R.UNPACK_SKIP_ROWS,dt),F.pixelStorei(R.UNPACK_SKIP_IMAGES,ct);let Ya=M.isDataArrayTexture||M.isData3DTexture,zt=E.isDataArrayTexture||E.isData3DTexture;if(M.isDepthTexture){let at=q.get(M),va=q.get(E),we=q.get(at.__renderTarget),wt=q.get(va.__renderTarget);F.bindFramebuffer(R.READ_FRAMEBUFFER,we.__webglFramebuffer),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Pt=0;Pt<He;Pt++)Ya&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(M).__webglTexture,Y,ct+Pt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(E).__webglTexture,_e,Ot+Pt)),R.blitFramebuffer(et,dt,Fe,Le,Je,gt,Fe,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||q.has(M)){let at=q.get(M),va=q.get(E);F.bindFramebuffer(R.READ_FRAMEBUFFER,B),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,k);for(let we=0;we<He;we++)Ya?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,at.__webglTexture,Y,ct+we):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,at.__webglTexture,Y),zt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,va.__webglTexture,_e,Ot+we):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,va.__webglTexture,_e),Y!==0?R.blitFramebuffer(et,dt,Fe,Le,Je,gt,Fe,Le,R.COLOR_BUFFER_BIT,R.NEAREST):zt?R.copyTexSubImage3D(We,_e,Je,gt,Ot+we,et,dt,Fe,Le):R.copyTexSubImage2D(We,_e,Je,gt,et,dt,Fe,Le);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else zt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,ua,ut.data):E.isCompressedArrayTexture?R.compressedTexSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,ut.data):R.texSubImage3D(We,_e,Je,gt,Ot,Fe,Le,He,Tt,ua,ut):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,Je,gt,Fe,Le,Tt,ua,ut.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,Je,gt,ut.width,ut.height,Tt,ut.data):R.texSubImage2D(R.TEXTURE_2D,_e,Je,gt,Fe,Le,Tt,ua,ut);F.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),F.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt),F.pixelStorei(R.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(R.UNPACK_SKIP_ROWS,pa),F.pixelStorei(R.UNPACK_SKIP_IMAGES,Ta),_e===0&&E.generateMipmaps&&R.generateMipmap(We),F.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&re.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?re.setTextureCube(M,0):M.isData3DTexture?re.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?re.setTexture2DArray(M,0):re.setTexture2D(M,0),F.unbindTexture()},this.resetState=function(){ae=0,J=0,se=null,F.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ut._getUnpackColorSpace()}};var w_={portrait:[1.32,2.25],landscape:[2.25,1.32]},N3={left:.27,center:.5,right:.73},sf=.018,yo=.007,La=4,E_=1/.05,O3=1/960,z3=2,Rr=72,R_=24,Wg=.36,Jg=.095,H3=.0135,em=.036,nf=.15,D_=1024,L_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},tm=[0,.07,.93,1],V3=[-.95,-.28,.28,.95],G3=9,q3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,W3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,X3=`
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
`,Y3=`
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
`,P_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Fi=(t,e,a)=>Math.min(a,Math.max(e,t)),am=(t,e,a)=>t+(e-t)*a,Xg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},Z3=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],om=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,O_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Kg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},nm=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=async()=>{try{await r.decode()}catch{}n(r)},r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},rm=new Map,Qg=t=>Promise.all(t.map(e=>nm(rm,e))),B_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:w_[t]||w_.portrait,r=am(.03,Math.min(o,n)*.2,Fi(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Jg}},K3=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new ys;Kg(r,-e/2+yo,-a/2+yo,e-yo*2,a-yo*2,Math.max(o-yo,.005));let s=new di;Kg(s,-n.width/2-yo,n.y-n.height/2-yo,n.width+yo*2,n.height+yo*2,n.height/2+yo),r.holes.push(s);let i=new Jl(r,{depth:sf,bevelEnabled:!0,bevelThickness:yo,bevelSize:yo,bevelSegments:5,curveSegments:24});i.translate(0,0,-sf/2);let l=new Hu(r,24),c=l.getAttribute("position"),f=l.getAttribute("uv");for(let h=0;h<c.count;h++)f.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return f.needsUpdate=!0,{body:i,face:l}},U_=t=>{let e=new ys,a=t*1.16;Kg(e,-a/2+.014,-nf/2+.014,a-.028,nf-.028,.024);let o=new Jl(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},J3=t=>{let e=tm.length,a=new So;a.setAttribute("position",new lo(new Float32Array(t*e*3),3)),a.setAttribute("normal",new lo(new Float32Array(t*e*3),3)),a.setAttribute("uv",new lo(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},Q3=t=>{let e=new Vl;e.background=new _t(.035,.035,.04);let a=new hi(1,1),o=[],n=(i,l,c,f=0)=>{let h=new ui({color:new _t(i,i,i),side:Jo});o.push(h);let u=new Ca(a,h);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(f),e.add(u)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new cc(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},Yg=(t,e)=>{let a=new fi(t);return a.colorSpace=to,a.anisotropy=e,a},j3=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new fi(e);let o=O_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let f=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++)f+=n[(c+h+128)%128*128+(l+u+128)%128];return f/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),u=Math.hypot(f,h,1),d=(l*128+c)*4;s.data[d]=(f/u*.5+.5)*255,s.data[d+1]=(h/u*.5+.5)*255,s.data[d+2]=(1/u*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new fi(e);return i.wrapS=Qn,i.wrapT=Qn,i.repeat.set(5,7),i},$3=()=>{let a=O_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let f=(l%128+128)%128,h=(c%128+128)%128,u=f/128*8,d=h/128*8,m=Math.floor(u),S=Math.floor(d),I=u-m-.5,p=d-S-.5,g=(m+S)%2===0,y=n(I)*(.55+.45*Math.cos(p*Math.PI*(g?1:.6))),x=n(p)*(.55+.45*Math.cos(I*Math.PI*(g?.6:1)));return(g?Math.max(y,x*.7):Math.max(x,y*.7))+o[h*128+f]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,u=Math.hypot(f,h,1),d=(l*128+c)*4;s[d]=(f/u*.5+.5)*255,s[d+1]=(h/u*.5+.5)*255,s[d+2]=(1/u*.5+.5)*255,s[d+3]=255}let i=new ql(s,128,128);return i.wrapS=Qn,i.wrapT=Qn,i.magFilter=Na,i.minFilter=tr,i.generateMipmaps=!0,i.needsUpdate=!0,i},rf=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},eP=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Jg),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},k_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=rf(e,.98,.02),s=rf(e,.05,.02),i=rf(e,.5,.02);if(!r||!s)return;let l=x=>{let C=x.match(/[\d.]+/g);return C?[Number(C[0]),Number(C[1]),Number(C[2])]:[255,255,255]},c=l(s),f=l(r),h=i?l(i):c;if(Math.hypot(f[0]-c[0],f[1]-c[1],f[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),m=Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&m>40){let x=t.createLinearGradient(0,0,a,0);x.addColorStop(0,s),x.addColorStop(1,r),t.fillStyle=x,t.fillRect(0,0,a,o+2);return}let I=1254/1495,p=.42;try{let x=document.createElement("canvas");x.width=100,x.height=20;let C=x.getContext("2d",{willReadFrequently:!0});if(C){C.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let b=C.getImageData(0,0,100,1).data,T=C.getImageData(0,19,100,1).data,v=b[98*4],A=b[98*4+1],w=b[98*4+2],L=-1,X=-1;for(let z=98;z>=0;z--){let B=z*4;if(Math.hypot(b[B]-v,b[B+1]-A,b[B+2]-w)>40){L=z+1;break}}for(let z=98;z>=0;z--){let B=z*4;if(Math.hypot(T[B]-v,T[B+1]-A,T[B+2]-w)>40){X=z+1;break}}if(L>50&&L<98&&(I=L/100,X>0)){let z=Math.min(e.height*.1,200)*.95,B=(X-L)/100*e.width;z>0&&(p=Math.max(0,Math.min(1.5,B/z)))}}}catch{}let g=a*I,y=g-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(y,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(g,o+2),t.closePath(),t.fill(),t.restore()}catch{}},tP=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let f=o-l;k_(t,e,a,f,i),t.drawImage(e,0,f,a,l)}else{let c=Math.min(a/e.width,s/e.height),f=e.width*c,h=e.height*c,u=(a-f)/2,d=o-h;k_(t,e,a,d,c),t.drawImage(e,u,d,f,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},N_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?eP(n,t.height,s):0,c=e?rf(e,.05,.02):null;if(i.fillStyle=c||om(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let f=rf(e,.05,.98);f&&f!==c&&(i.fillStyle=f,i.fillRect(0,t.height-30,t.width,30))}tP(i,e,t.width,t.height,o,l)}},aP=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=om(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=Z3(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=om(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=om(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},oP=()=>{let t=()=>Array.from({length:La+1},()=>new O);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(La),impulses:new Float64Array(La),rest:1,anchor:new O,body:{position:new O,previous:new O,velocity:new O,quaternion:new xo,previousQuaternion:new xo,angular:new O,mass:1,inverseInertia:new O(1,1,1),hang:new O},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Jt={a:new O,b:new O,c:new O,d:new O,e:new O,f:new O,g:new O,pin:new O,q:new xo,r:new xo},jg=(t,e,a)=>(Jt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(Jt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),z_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},H_=(t,e,a)=>{let o=Jt.c.crossVectors(e,a);return 1/t.mass+o.dot(jg(t,o,Jt.d))},V_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),z_(t.quaternion,jg(t,Jt.e.crossVectors(e,a),Jt.f))},nP=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:E_,l=e===La-1,c=Jt.g,f=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),f=Jt.b.copy(r.position).add(c));let h=Jt.a.subVectors(f,s),u=h.length(),d=u-t.rest;if(d<=0||u<1e-9)return;let m=h.divideScalar(u),S=l?H_(r,c,m):E_,I=(u-t.lengths[e])/a,g=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,I))*a*a-t.impulses[e];if(g<=0)return;let y=Math.min(d/(i+S),g);t.impulses[e]+=y,i&&s.addScaledVector(m,y*i),l?V_(r,c,m.multiplyScalar(-y)):f.addScaledVector(m,-y*S)},rP=(t,e,a)=>{let o=Jt.g.copy(e.local).applyQuaternion(t.quaternion),n=Jt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/H_(t,o,s);V_(t,o,s.multiplyScalar(i))},Zg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=La;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=Jt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[La]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=La;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},sP=(t,e,a)=>{t.rest=a/La;let{width:o,height:n}=e,r=t.body,s=sf+yo*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},iP=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/O3-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,f=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,u=t.grab,d=Jt.pin,m=Math.exp(-a.nodeDrag*r),S=Math.exp(-a.linearDrag*r),I=Math.exp(-a.angularDrag*r);for(let g=0;g<n;g++){for(let w=1;w<La;w++){let L=l[w];L.y-=a.gravity*r,L.x+=f*r,L.z+=h*r,i[w].copy(s[w]),s[w].addScaledVector(L,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let y=c.quaternion;if(u){let w=Jt.q.copy(u.rotation).multiply(Jt.r.copy(y).invert());w.w<0&&w.set(-w.x,-w.y,-w.z,-w.w);let L=Jt.a.set(w.x,w.y,w.z).multiplyScalar(2*a.grip);L.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector(jg(c,L,Jt.b),r)}let x=Jt.a.set(0,1,0).applyQuaternion(y),C=Jt.b.set(-x.x*x.z,-x.y*x.z,1-x.z*x.z);if(C.lengthSq()>.001){let w=Jt.d.set(0,0,1).applyQuaternion(y),L=Math.atan2(Jt.e.crossVectors(C,w).dot(x),C.dot(w)),X=L-t.twistRaw;X>Math.PI?X-=Math.PI*2:X<-Math.PI&&(X+=Math.PI*2),t.twist+=X,t.twistRaw=L}if(!u){let w=c.angular.dot(x);c.angular.addScaledVector(x,(a.twist*(t.turn-t.twist)-a.twistDamping*w)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=f*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),z_(c.quaternion,Jt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),u&&d.lerpVectors(u.from,u.target,(g+1)/n);for(let w=0;w<z3;w++){for(let L=0;L<La;L++)nP(t,L,r,a);u&&rP(c,u,d)}for(let w=1;w<La;w++){let L=l[w].subVectors(s[w],i[w]).divideScalar(r).multiplyScalar(m);L.multiplyScalar(1/(1+a.nodeAir*L.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let b=Jt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(b.x,b.y,b.z).multiplyScalar(2/r*(b.w<0?-1:1));let T=Jt.a.set(0,0,1).applyQuaternion(c.quaternion),v=c.velocity.dot(T),A=Jt.b.copy(c.velocity).addScaledVector(T,-v);A.multiplyScalar(1/(1+a.air*A.length()*r)),c.velocity.copy(A).addScaledVector(T,v/(1+a.broadside*Math.abs(v)*r)).multiplyScalar(S),c.angular.multiplyScalar(I/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[La].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let w=0;w<La;w++)t.lengths[w]=s[w].distanceTo(s[w+1])}u&&u.from.copy(u.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let g=1;g<La;g++)p+=l[g].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},lP=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:f="center",strapLength:h=.5,strapImage:u,strapColor:d="#111111",strapWidth:m=.65,metal:S="silver",gravity:I=1,damping:p=.5,elasticity:g=.5,breeze:y=.5,interactive:x=!0,intro:C=!0,className:b="",style:T})=>{let v=(0,Si.useRef)(null),A=(0,Si.useRef)(null),w=(0,Si.useRef)(null);return A.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:f,strapLength:h,strapImage:u,strapColor:d,strapWidth:m,metal:S,gravity:I,damping:p,elasticity:g,breeze:y,interactive:x,intro:C},(0,Si.useEffect)(()=>{w.current?.()}),(0,Si.useEffect)(()=>{let L=v.current;if(!L)return;let X;try{X=new Qh({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}X.setClearColor(0,0),X.outputColorSpace=to,X.toneMapping=Xu,X.toneMappingExposure=1;let z=X.domElement;z.className="lanyard-canvas",z.setAttribute("aria-hidden","true"),L.appendChild(z);let B=Math.min(8,X.capabilities.getMaxAnisotropy()),k=new Vl,ae=Q3(X);k.environment=ae.texture;let J=new io(R_,1,.1,200),se=new ec(16777215,1.6);se.position.set(-2.5,4,6);let G=new ec(16777215,.35);G.position.set(3,-1,4),k.add(se,G);let K={front:null,back:null,strap:null},oe=document.createElement("canvas"),De=document.createElement("canvas"),be=document.createElement("canvas"),$e=Yg(oe,B),H=Yg(De,B),lt=Yg(be,B);lt.wrapS=un,lt.wrapT=Qn;let ee=j3(),te=$3(),Ee={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new O},foilFill:{value:new O},foilTop:{value:new O}},Ke=ce=>{Object.assign(ce.uniforms,Ee),ce.vertexShader=ce.vertexShader.replace("#include <common>",`#include <common>
${q3}`).replace("#include <project_vertex>",`#include <project_vertex>
${W3}`),ce.fragmentShader=ce.fragmentShader.replace("#include <common>",`#include <common>
${X3}`).replace("#include <opaque_fragment>",`${Y3}
#include <opaque_fragment>`)},Me=new Ms({map:$e,normalMap:ee,normalScale:new ke(.06,.06)}),Ye=new Ms({map:H,normalMap:ee,normalScale:new ke(.06,.06)});Me.onBeforeCompile=Ke,Ye.onBeforeCompile=Ke;let Qe=new Ms,$=new jl({metalness:1}),le=new Ms({map:lt,normalMap:te,normalScale:new ke(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new _t(.32,.32,.34),side:Jo}),Ie=new Kn,ie=new Ca(void 0,Qe),ue=new Ca(void 0,Me),Ce=new Ca(void 0,Ye),Xe=new Ca(new Ql(Jg,H3,18,72),$);Xe.rotation.y=Math.PI/2-.7,Ie.add(ie,ue,Ce,Xe),k.add(Ie);let Ne=J3(Rr),Be=new Ca(Ne,le);Be.frustumCulled=!1,k.add(Be);let R=new Kn,it=new Ca(U_(Wg),$);it.position.y=em+nf/2-.004;let tt=new Ca(new Ql(em,.0105,14,40),$);R.add(it,tt),k.add(R);let _=oP(),F=[],N=new O,q=new O,re=new Zl(F,!1,"centripetal"),ye={width:1,height:1},xe=B_("portrait",.3),j={},V=Wg,de=2,Te=0,D=performance.now(),Pe=0,me=!0,ge=!0,Se=!1,P=!1,ve=null,ne=0,Ae=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Re=(ce="both")=>{let Ge=A.current,M=Xg(Ge.cardColor,[1,1,1]),E=D_,Z=Math.round(D_*xe.height/xe.width);(oe.width!==E||oe.height!==Z)&&(oe.width=E,oe.height=Z,De.width=E,De.height=Z,$e.dispose(),H.dispose()),ce!=="back"&&(N_(oe,K.front,M,Ge.imageFit,xe,Ge.slotClearance,Ge.slotClearanceValue),$e.needsUpdate=!0),ce!=="front"&&(N_(De,K.back||K.front,M,Ge.imageFit,xe,Ge.slotClearance,Ge.slotClearanceValue),H.needsUpdate=!0),ze()},pe=()=>{let ce=A.current,Ge=be.width,M=be.height;de=aP(be,K.strap,Xg(ce.strapColor,[.07,.07,.07])),te.repeat.set(2,2*de),(be.width!==Ge||be.height!==M)&&lt.dispose(),lt.needsUpdate=!0,ze()},Ve=()=>{let ce=A.current,Ge=ye.width/ye.height,M=Fi(ce.size??1,.2,3),E=xe.height/.72/M,Z=xe.width/.65/M;E*Ge<Z&&(E=Z/Ge);let U=E*Ge,Y=.04*E,_e=((N3[ce.anchor]??.5)-.5)*U,Fe=Y+E/2+.15,Le=Y+xe.height/2+(xe.hangY-xe.height/2);J.aspect=Ge,J.position.set(0,Y,E/2/Math.tan(R_*Math.PI/360)),J.lookAt(0,Y,0),J.updateProjectionMatrix(),J.updateMatrixWorld(),Ee.foilKey.value.set(-2.5,4,6).normalize().transformDirection(J.matrixWorldInverse),Ee.foilFill.value.set(3,-1,4).normalize().transformDirection(J.matrixWorldInverse),Ee.foilTop.value.set(.5,4.5,8).normalize().transformDirection(J.matrixWorldInverse),_.anchor.set(_e,Fe,0),sP(_,xe,Math.max(.4,Fe-Le)),_.nodes[0].copy(_.anchor),_.previous[0].copy(_.anchor)},qe=()=>{let ce=A.current,Ge=`${ce.orientation}|${ce.cornerRadius}|${JSON.stringify(ce.cardSize)}`;if(Ge!==j.layoutKey){xe=B_(ce.orientation,ce.cornerRadius,ce.cardSize);let Fe=K3(xe);ie.geometry.dispose(),ue.geometry.dispose(),Ce.geometry.dispose(),ie.geometry=Fe.body,ue.geometry=Fe.face,Ce.geometry=Fe.face.clone(),ue.position.z=sf/2+yo+6e-4,Ce.rotation.y=Math.PI,Ce.position.z=-(sf/2+yo+6e-4),Xe.position.set(0,xe.ringY,0),j.framingKey=""}let M=`${Ge}|${ce.size}|${ce.anchor}|${ce.strapLength}|${ye.width}|${ye.height}`;M!==j.framingKey&&(Ve(),Se?Ge!==j.layoutKey&&Zg(_,xe,!1):(Zg(_,xe,ce.intro&&!Ae),Se=!0));let E=`${ce.frontImage}|${ce.backImage}|${ce.strapImage}`;if(E!==j.imageKey){let Fe=++ne;K.front=K.back=K.strap=null;let Le=!1;nm(rm,ce.frontImage).then(He=>{!ge||Fe!==ne||(K.front=He,Re("front"),(!ce.backImage||Le)&&Re("back"))}),nm(rm,ce.backImage).then(He=>{!ge||Fe!==ne||(K.back=He,Le=!He,Re("back"))}),nm(rm,ce.strapImage).then(He=>{!ge||Fe!==ne||(K.strap=He,pe())})}let Z=`${Ge}|${ce.cardColor}|${ce.imageFit}|${ce.slotClearance}|${ce.slotClearanceValue}`;Z!==j.faceKey&&Re(),ce.strapColor!==j.strapColor&&pe();let U=L_[ce.finish]||L_.glossy,Y=Xg(ce.cardColor,[1,1,1]);[Me,Ye].forEach(Fe=>{Fe.roughness=U.roughness,Fe.metalness=U.metalness,Fe.clearcoat=U.clearcoat,Fe.clearcoatRoughness=U.clearcoatRoughness,Fe.anisotropy=U.anisotropy}),Ee.foilStrength.value=U.foil,Ee.foilAspect.value=xe.height/xe.width,Qe.color.setRGB(Y[0]*.92,Y[1]*.92,Y[2]*.92,to),Qe.roughness=Math.min(U.roughness,.35),Qe.metalness=U.metalness,Qe.clearcoat=1,Qe.clearcoatRoughness=.08;let _e=P_[ce.metal]||P_.silver;$.color.set(_e.color),$.roughness=_e.roughness,V=Wg*Fi(ce.strapWidth,.4,2),V!==j.strapScale&&(it.geometry.dispose(),it.geometry=U_(V)),z.style.touchAction=ce.interactive?"pan-y":"auto",j={layoutKey:Ge,framingKey:M,imageKey:E,faceKey:Z,strapColor:ce.strapColor,strapScale:V},ze()},St=Array.from({length:Rr},()=>new O),xt=Array.from({length:Rr},()=>new O),_a=V3.map(ce=>[Math.cos(ce),Math.sin(ce)]),da={tangent:new O,toCamera:new O,basis:new na,up:new O,across:new O,facing:new O,end:new O},ba=()=>{let ce=_.nodes[La],Ge=em+nf+.05,M=La-1;for(;M>0&&_.nodes[M].distanceTo(ce)<Ge*1.1;)M--;let E=da.up.subVectors(_.nodes[M],ce);E.lengthSq()<1e-8&&E.set(0,1,0).applyQuaternion(_.body.quaternion),E.normalize(),N.copy(ce).addScaledVector(E,Ge),q.copy(ce).addScaledVector(E,em+nf*.35),F.length=0;for(let ut=0;ut<=M;ut++)F.push(_.nodes[ut]);F.push(N,q),re.updateArcLengths();for(let ut=0;ut<Rr;ut++)re.getPointAt(ut/(Rr-1),St[ut]);let Z=re.getLength(),U=1-N.distanceTo(q)/Math.max(Z,.001),Y=Ne.getAttribute("position"),_e=Ne.getAttribute("normal"),Fe=Ne.getAttribute("uv"),Le=tm.length,He=_.rest*La,et=He/(V*de),dt=V/Math.pow(Math.max(1,Z/Math.max(He,.001)),.35),{tangent:ct,toCamera:Je,across:gt,facing:Ot}=da;for(let ut=0;ut<Rr;ut++){ct.subVectors(St[Math.min(Rr-1,ut+1)],St[Math.max(0,ut-1)]),ct.lengthSq()<1e-12&&ct.set(0,-1,0),ct.normalize(),Je.subVectors(J.position,St[ut]).normalize();let Tt=xt[ut].crossVectors(Je,ct);Tt.lengthSq()<1e-10&&Tt.copy(ut>0?xt[ut-1]:Jt.a.set(1,0,0)),Tt.normalize(),ut>0&&Tt.dot(xt[ut-1])<0&&Tt.negate();let ua=-_.twist*Math.pow(Math.min(1,ut/(Rr-1)/U),1.3);Ot.crossVectors(ct,Tt),gt.copy(Tt).multiplyScalar(Math.cos(ua)).addScaledVector(Ot,Math.sin(ua)),Ot.crossVectors(ct,gt);let We=St[ut],Qt=(1-ut/(Rr-1))*et;for(let vt=0;vt<Le;vt++){let jt=ut*Le+vt,pa=(tm[vt]-.5)*dt,[Ta,Ya]=_a[vt];Y.setXYZ(jt,We.x+gt.x*pa,We.y+gt.y*pa,We.z+gt.z*pa),_e.setXYZ(jt,Ot.x*Ta+gt.x*Ya,Ot.y*Ta+gt.y*Ya,Ot.z*Ta+gt.z*Ya),Fe.setXY(jt,tm[vt],Qt)}}da.end.copy(gt),Y.needsUpdate=!0,_e.needsUpdate=!0,Fe.needsUpdate=!0,gt.copy(da.end).addScaledVector(E,-da.end.dot(E)).normalize(),Ot.crossVectors(gt,E).normalize(),da.basis.makeBasis(gt,E,Ot),R.quaternion.setFromRotationMatrix(da.basis),R.position.copy(ce)},Dn=()=>{Ie.position.copy(_.body.position),Ie.quaternion.copy(_.body.quaternion),ba(),X.render(k,J)},dn=()=>{let ce=A.current,Ge=40*Fi(ce.gravity,0,3),M=Math.max(Ge,20),E=Fi(ce.elasticity,0,1),Z=Fi(ce.damping,0,1);return{gravity:Ge,hold:M*am(2.2,5.5,E),stiffness:M*10*La,spring:M*am(.1,.4,E)*La,bandDamping:M*am(.3,.08,E)*La,linearDrag:.25*Math.pow(16,Z),angularDrag:.5*Math.pow(12,Z),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Ae?0:Fi(ce.breeze,0,1)}},pn=ce=>{if(Te=0,!ge)return;let Ge=Math.min(1/30,Math.max(1/240,(ce-D)/1e3));D=ce,Pe+=Ge;let M=dn();iP(_,Ge,M,Pe);let E=_.body;Number.isFinite(E.position.x+E.position.y+E.position.z+E.quaternion.w)||(_.grab=null,Zg(_,xe,!1)),Dn();let Z=_.calm>1.2&&!_.grab&&M.breeze===0;me&&!Z&&(Te=requestAnimationFrame(pn))},ze=()=>{Te||!me||!ge||(_.calm=0,D=performance.now(),Te=requestAnimationFrame(pn))},rt=new qu,nt=new ke,Ct=ce=>{let Ge=z.getBoundingClientRect();nt.set((ce.clientX-Ge.left)/Ge.width*2-1,-((ce.clientY-Ge.top)/Ge.height)*2+1),rt.setFromCamera(nt,J)},kt=()=>(Ie.updateMatrixWorld(),rt.intersectObjects([ie,ue,Ce],!1)[0]||null),ca=ce=>{z.style.cursor!==ce&&(z.style.cursor=ce)},Pa=ce=>{let Ge=_.body,M=Jt.a.set(0,1,0).applyQuaternion(Ge.quaternion),E=_.turn>0?-1:1;if(_.turn===0){let Z=Jt.c.subVectors(ce,J.position).normalize();E=Jt.b.subVectors(ce,Ge.position).cross(Z).dot(M)<0?-1:1}_.turn=_.turn===0?Math.PI*E:0,Ge.angular.addScaledVector(M,G3*E)},Nt=ce=>{if(!A.current.interactive||ce.button>0)return;Ct(ce);let Ge=kt();Ge&&(_.grab={local:Ge.point.clone().sub(_.body.position).applyQuaternion(_.body.quaternion.clone().invert()),rotation:_.body.quaternion.clone(),reach:Ge.distance,from:Ge.point.clone(),target:Ge.point.clone()},ve={x:ce.clientX,y:ce.clientY,time:performance.now(),point:Ge.point.clone()},z.setPointerCapture?.(ce.pointerId),ca("grabbing"),ce.preventDefault(),ze())},ft=ce=>{if(A.current.interactive){if(Ct(ce),_.grab){ve&&Math.hypot(ce.clientX-ve.x,ce.clientY-ve.y)>6&&(ve=null),rt.ray.at(_.grab.reach,_.grab.target),ze();return}ce.pointerType!=="touch"&&(P=!!kt(),ca(P?"grab":""))}},W=ce=>{_.grab&&(_.grab=null,ve&&ce.type==="pointerup"&&performance.now()-ve.time<450&&Pa(ve.point),ve=null,z.releasePointerCapture?.(ce.pointerId),ca(P&&ce.pointerType!=="touch"?"grab":""),ze())},Q=ce=>{!A.current.interactive||ce.touches.length!==1||(Ct(ce.touches[0]),kt()&&ce.preventDefault())};z.addEventListener("pointerdown",Nt),z.addEventListener("pointermove",ft),z.addEventListener("pointerup",W),z.addEventListener("pointercancel",W),z.addEventListener("lostpointercapture",W),z.addEventListener("touchstart",Q,{passive:!1});let fe=()=>{ye.width=Math.max(1,L.clientWidth),ye.height=Math.max(1,L.clientHeight),X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.setSize(ye.width,ye.height,!1),qe(),Dn()},Oe=new ResizeObserver(fe);Oe.observe(L);let pt=new IntersectionObserver(([ce])=>{me=ce.isIntersecting,me&&ze()});pt.observe(L);let Ht=()=>{document.hidden||ze()};return document.addEventListener("visibilitychange",Ht),w.current=qe,fe(),()=>{ge=!1,cancelAnimationFrame(Te),w.current=null,Oe.disconnect(),pt.disconnect(),document.removeEventListener("visibilitychange",Ht),z.removeEventListener("pointerdown",Nt),z.removeEventListener("pointermove",ft),z.removeEventListener("pointerup",W),z.removeEventListener("pointercancel",W),z.removeEventListener("lostpointercapture",W),z.removeEventListener("touchstart",Q),[ie,ue,Ce,Xe,it,tt,Be].forEach(ce=>ce.geometry?.dispose()),[Me,Ye,Qe,$,le].forEach(ce=>ce.dispose()),[$e,H,lt,ee,te].forEach(ce=>ce.dispose()),ae.dispose(),X.dispose(),z.parentNode&&z.parentNode.removeChild(z)}},[]),Ue.createElement("div",{ref:v,className:`lanyard ${b}`.trim(),style:T})},$g=lP;ht();var Qo=mn(Lo());var sm=4,G_=2.4,cP=2.2,im=1.25,uP="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",fP="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",dP={solid:0,dashed:1,dotted:2},pP=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,hP=`#version 300 es
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
}`,mP=`#version 300 es
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
}`,IP=`#version 300 es
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
}`,xP=`#version 300 es
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
}`,uo=(t,e,a)=>Math.min(a,Math.max(e,t)),q_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},lm=(t,e)=>{let a=q_(t,t.VERTEX_SHADER,pP),o=q_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},cm=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},um=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},fm=null,gP=()=>window.faceapi?Promise.resolve(window.faceapi):(fm||(fm=new Promise((t,e)=>{let a=document.createElement("script");a.src=uP,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{fm=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),fm),FP={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},SP=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:f=.7,scanDirection:h="forward",scanDuration:u=2.4,scanDelay:d=1.6,scanWidth:m=1,trail:S=.5,glow:I=.6,autoScan:p=!0,interactive:g=!0,clickEffect:y="ping",enableWebcam:x=!1,showPreview:C=!1,modelsPath:b=fP,enableGyro:T=!1,intro:v=!0,lightMode:A=!1,dpr:w,className:L="",style:X,...z})=>{let B=(0,Qo.useRef)(null),k=(0,Qo.useRef)(null),ae=(0,Qo.useRef)(null),J=(0,Qo.useRef)(null),se=(0,Qo.useRef)(null),[G,K]=(0,Qo.useState)("loading"),oe={linesColor:t??(A?"#d4d4d8":"#4d4757"),scanColor:e??(A?"#0284c7":"#7dd3fc"),cells:uo(a,2,40),thickness:uo(o,.5,4),style:dP[n]??0,depth:uo(r,.5,12),depthFade:uo(s,0,1),parallax:uo(i,0,3),points:l,reflection:uo(c,0,1),shading:uo(f,0,1),direction:h,duration:uo(u,.3,20),delay:uo(d,0,30),scanWidth:uo(m,.2,5),trail:uo(S,0,1),glow:uo(I,0,1.5),autoScan:p,interactive:g,clickEffect:y,enableGyro:T,intro:v,lightMode:A,dpr:w},De=(0,Qo.useRef)(oe);return De.current=oe,(0,Qo.useEffect)(()=>{let be=B.current,$e=k.current,H=$e?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!be||!$e||!H)return;let lt=lm(H,hP),ee=lm(H,mP),te=lm(H,IP),Ee=lm(H,xP);if(!lt||!ee||!te||!Ee)return;let Ke=H.createVertexArray(),Me=cm(H),Ye=cm(H),Qe=cm(H),$=cm(H),le=H.createFramebuffer(),Ie=H.createFramebuffer(),ie=H.createFramebuffer(),ue=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ce=new Map,Xe=ze=>{let rt=String(ze),nt=Ce.get(rt);if(nt)return nt;let Ct=[1,1,1];if(ue){ue.clearRect(0,0,1,1),ue.fillStyle="#000000",ue.fillStyle=rt,ue.fillRect(0,0,1,1);let[kt,ca,Pa]=ue.getImageData(0,0,1,1).data;Ct=[kt/255,ca/255,Pa/255]}return Ce.set(rt,Ct),Ct},Ne=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Be={width:1,height:1,ratio:1},R={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:im,vf:0,tf:im},it={x:0,y:0,inside:!1},tt={x:0,y:0,held:!1},_={gamma:0,beta:0,ready:!1,asked:!1},F={x:0,y:0,z:0,strength:0,ready:!1},N={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},q=[],re=new Float32Array(sm*4),ye=new Float32Array(sm),xe=0,j=De.current.intro&&!Ne?0:1,V=0,de=0,Te=!0,D=0,Pe=()=>{let ze=De.current,rt=Be.width/Be.height,nt=1/Math.round(ze.cells),Ct=rt/Math.max(1,Math.round(rt/nt)),kt=Math.max(nt,Math.round(ze.depth/nt)*nt);return{aspect:rt,cx:Ct,cy:nt,roomDepth:kt}},me=(ze,rt)=>{let{aspect:nt,roomDepth:Ct}=Pe(),kt=(ze-.5)*nt,ca=rt-.5,Pa=kt-R.x,Nt=ca-R.y,ft=R.f,W=Pa>0?.5*nt:-.5*nt,Q=Nt>0?.5:-.5,fe=Ct/ft;return Math.abs(Pa)>1e-6&&(fe=Math.min(fe,(W-kt)/Pa)),Math.abs(Nt)>1e-6&&(fe=Math.min(fe,(Q-ca)/Nt)),{x:kt+Pa*fe,y:ca+Nt*fe,z:ft*fe}},ge=ze=>{N.dir=ze.direction==="backward"||ze.direction==="pingpong"&&N.sweeps%2===1?-1:1,N.start=xe,N.waiting=!1,N.sweeps+=1},Se=(ze,rt)=>{if(j<1){let kt=j;N.dir=1,N.z=kt*(rt+.4)-.2,N.alpha=Math.min(1,kt*6)*(1-Math.max(0,kt-.85)/.15);return}if(N.sweeps===0&&!N.waiting&&(N.waiting=!0,N.start=xe,N.alpha=0),N.waiting){N.alpha=0,ze.autoScan&&!Ne&&xe-N.start>=ze.delay&&ge(ze);return}let nt=(xe-N.start)/ze.duration;if(nt>=1){N.waiting=!0,N.start=xe,N.alpha=0;return}let Ct=nt*(rt+.3)-.15;N.z=N.dir>0?Ct:rt-Ct,N.alpha=Math.min(1,nt/.12)*Math.min(1,(1-nt)/.12)},P=ze=>{let rt=Math.max(1,Math.ceil(ze/.008333333333333333)),nt=ze/rt;for(let Ct=0;Ct<rt;Ct++)R.vx+=((R.tx-R.x)*42-R.vx*11)*nt,R.vy+=((R.ty-R.y)*42-R.vy*11)*nt,R.vf+=((R.tf-R.f)*42-R.vf*11)*nt,R.x+=R.vx*nt,R.y+=R.vy*nt,R.f+=R.vf*nt},ve=(ze,rt,nt)=>{tt.x=uo(ze,-1,1),tt.y=uo(rt,-1,1),tt.held=nt},ne=ze=>{let rt=Be.width/Be.height,nt=Ne?0:1,Ct=tt.held?tt.x:(Math.sin(xe*.21)*.2+Math.sin(xe*.083+1.3)*.12)*nt,kt=tt.held?tt.y:Math.sin(xe*.17+2.1)*.16*nt;R.tx=Ct*ze.parallax*.22*rt,R.ty=kt*ze.parallax*.22},Ae=()=>{let ze=De.current;Be.width=Math.max(1,be.clientWidth),Be.height=Math.max(1,be.clientHeight),Be.ratio=Math.min(ze.dpr||window.devicePixelRatio||1,2),$e.width=Math.max(1,Math.round(Be.width*Be.ratio)),$e.height=Math.max(1,Math.round(Be.height*Be.ratio)),um(H,Me,$e.width,$e.height),um(H,Ye,$e.width,$e.height),H.bindFramebuffer(H.FRAMEBUFFER,le),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Me.texture,0),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT1,H.TEXTURE_2D,Ye.texture,0);let rt=Math.max(1,Math.round($e.width/4)),nt=Math.max(1,Math.round($e.height/4));um(H,Qe,rt,nt),um(H,$,rt,nt),H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.texture,0),H.bindFramebuffer(H.FRAMEBUFFER,ie),H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$.texture,0),H.bindFramebuffer(H.FRAMEBUFFER,null),Re(),Ve()},Re=()=>{let ze=De.current,{aspect:rt,cx:nt,cy:Ct,roomDepth:kt}=Pe(),ca=Xe(ze.linesColor),Pa=Xe(ze.scanColor),Nt=ze.lightMode?Pa:Pa.map(Q=>Q+(1-Q)*.65),ft=lt.uniforms;H.bindVertexArray(Ke),H.disable(H.BLEND),H.bindFramebuffer(H.FRAMEBUFFER,le),H.drawBuffers([H.COLOR_ATTACHMENT0,H.COLOR_ATTACHMENT1]),H.viewport(0,0,$e.width,$e.height),H.useProgram(lt.program),H.uniform1f(ft.uAspect,rt),H.uniform1f(ft.uPixel,1/$e.height),H.uniform3f(ft.uEye,R.x,R.y,-R.f),H.uniform1f(ft.uDepth,kt),H.uniform3f(ft.uCell,nt,Ct,Ct),H.uniform1f(ft.uThick,ze.thickness*Be.ratio*.5),H.uniform1f(ft.uDot,1.8*Be.ratio),H.uniform1i(ft.uStyle,ze.style),H.uniform3fv(ft.uLineColor,ca),H.uniform3fv(ft.uScanColor,Pa),H.uniform3fv(ft.uCoreColor,Nt),H.uniform1f(ft.uFade,ze.depthFade),H.uniform1f(ft.uScanZ,N.z),H.uniform1f(ft.uScanDir,N.dir),H.uniform1f(ft.uScanAlpha,N.alpha),H.uniform1f(ft.uScanWidth,.006*ze.scanWidth),H.uniform1f(ft.uTrail,.04+ze.trail*1.1),H.uniform1f(ft.uReveal,j<1?N.z+.05:1e4),H.uniform1f(ft.uPoints,ze.points?1:0),H.uniform1f(ft.uReflect,ze.reflection),H.uniform1f(ft.uHaze,ze.lightMode?.03:.05),H.uniform1f(ft.uShade,ze.shading),H.uniform1f(ft.uLight,ze.lightMode?1:0),H.uniform4fv(ft.uPing,re),H.uniform1fv(ft.uPingAlpha,ye),H.uniform4f(ft.uHover,F.x,F.y,F.z,F.strength),H.uniform1f(ft.uTime,xe),H.drawArrays(H.TRIANGLES,0,3);let W=ze.glow>0;if(W){H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.viewport(0,0,Qe.width,Qe.height),H.useProgram(ee.program),H.activeTexture(H.TEXTURE0),H.bindTexture(H.TEXTURE_2D,Ye.texture),H.uniform1i(ee.uniforms.uSource,0),H.uniform2f(ee.uniforms.uTexel,1/Ye.width,1/Ye.height),H.drawArrays(H.TRIANGLES,0,3);let Q=2.2*Be.ratio/2;H.useProgram(te.program),H.uniform1i(te.uniforms.uSource,0),H.bindFramebuffer(H.FRAMEBUFFER,ie),H.bindTexture(H.TEXTURE_2D,Qe.texture),H.uniform2f(te.uniforms.uStep,Q/Qe.width,0),H.drawArrays(H.TRIANGLES,0,3),H.bindFramebuffer(H.FRAMEBUFFER,Ie),H.bindTexture(H.TEXTURE_2D,$.texture),H.uniform2f(te.uniforms.uStep,0,Q/Qe.height),H.drawArrays(H.TRIANGLES,0,3)}H.bindFramebuffer(H.FRAMEBUFFER,null),H.viewport(0,0,$e.width,$e.height),H.useProgram(Ee.program),H.activeTexture(H.TEXTURE0),H.bindTexture(H.TEXTURE_2D,Me.texture),H.uniform1i(Ee.uniforms.uScene,0),H.activeTexture(H.TEXTURE1),H.bindTexture(H.TEXTURE_2D,Qe.texture),H.uniform1i(Ee.uniforms.uBloom,1),H.uniform1f(Ee.uniforms.uGlow,W?ze.glow*(ze.lightMode?.8:1.6):0),H.drawArrays(H.TRIANGLES,0,3),H.activeTexture(H.TEXTURE0)},pe=ze=>{if(V=0,!Te||document.hidden)return;let rt=De.current,nt=de?uo((ze-de)/1e3,.001,.05):1/60;de=ze,xe+=nt,j<1&&(j=Math.min(1,j+nt/cP));let{roomDepth:Ct}=Pe();Se(rt,Ct),ne(rt),P(nt);let kt=rt.interactive&&it.inside&&!Ne?1:0;if(kt){let Nt=me(it.x,it.y);F.ready||Object.assign(F,Nt,{ready:!0});let ft=1-Math.exp(-nt/.08);F.x+=(Nt.x-F.x)*ft,F.y+=(Nt.y-F.y)*ft,F.z+=(Nt.z-F.z)*ft}F.strength+=(kt-F.strength)*(1-Math.exp(-nt/.25)),!kt&&F.strength<.01&&(F.ready=!1);for(let Nt=q.length-1;Nt>=0;Nt--)q[Nt].age+=nt,q[Nt].age>G_&&q.splice(Nt,1);for(let Nt=0;Nt<sm;Nt++){let ft=q[Nt];if(!ft){ye[Nt]=0;continue}let W=ft.age/G_;re.set([ft.x,ft.y,ft.z,ft.age*1.15],Nt*4),ye[Nt]=Math.min(1,ft.age/.05)*(1-W)*(1-W)}Re();let ca=Math.abs(R.tx-R.x)+Math.abs(R.ty-R.y)+Math.abs(R.tf-R.f)>1e-4||Math.abs(R.vx)+Math.abs(R.vy)+Math.abs(R.vf)>1e-4;j<1||!Ne&&rt.autoScan||!N.waiting||q.length>0||ca||F.strength>.002||!Ne&&rt.parallax>0&&!tt.held||rt.points&&!Ne&&N.alpha>0?V=requestAnimationFrame(pe):de=0};function Ve(){!V&&Te&&!document.hidden&&(V=requestAnimationFrame(pe))}let qe=ze=>{let rt=be.getBoundingClientRect(),nt=(ze.clientX-rt.left)/Math.max(1,rt.width),Ct=1-(ze.clientY-rt.top)/Math.max(1,rt.height);return{u:nt,v:Ct,inside:nt>=0&&nt<=1&&Ct>=0&&Ct<=1}},St=ze=>{let rt=De.current,{u:nt,v:Ct,inside:kt}=qe(ze);it.x=nt,it.y=Ct;let ca=it.inside;it.inside=kt,kt?(window.clearTimeout(D),D=0,!se.current?.active&&rt.interactive&&!Ne&&ve(nt*2-1,Ct*2-1,!0),Ve()):ca&&!D&&(D=window.setTimeout(()=>{D=0,se.current?.active||(tt.held=!1),Ve()},220),Ve())},xt=ze=>{let rt=De.current,{u:nt,v:Ct,inside:kt}=qe(ze);if(!(!kt||Ne||rt.clickEffect==="none")){if(rt.clickEffect==="scan")j>=1&&ge(rt);else{let ca=me(nt,Ct);q.unshift({...ca,age:0}),q.length>sm&&q.pop()}Ve()}},_a=()=>{it.inside=!1,se.current?.active||(tt.held=!1),Ve()},da=ze=>{!De.current.enableGyro||se.current?.active||Ne||ze.gamma===null||ze.beta===null||(_.ready||Object.assign(_,{gamma:ze.gamma,beta:ze.beta,ready:!0}),ve((ze.gamma-_.gamma)/25,(ze.beta-_.beta)/-25,!0),Ve())},ba=()=>{let ze=De.current,rt=window.DeviceOrientationEvent?.requestPermission;!ze.enableGyro||_.asked||typeof rt!="function"||(_.asked=!0,rt.call(window.DeviceOrientationEvent).catch(()=>{}))},Dn=()=>{de=0,Ve()},dn=new ResizeObserver(Ae);dn.observe(be);let pn=new IntersectionObserver(ze=>{Te=ze.some(rt=>rt.isIntersecting),Te&&(de=0,Ve())});return pn.observe(be),window.addEventListener("pointermove",St,{passive:!0}),window.addEventListener("pointerdown",xt,{passive:!0}),window.addEventListener("deviceorientation",da),window.addEventListener("click",ba),document.documentElement.addEventListener("pointerleave",_a),document.addEventListener("visibilitychange",Dn),se.current={active:!1,move:(ze,rt,nt)=>{Ne||(ve(ze*1.3,rt*1.3,!0),R.tf=im*uo(nt,.6,1.6),Ve())},release:()=>{R.tf=im,tt.held=!1,Ve()}},Ae(),J.current=Ve,()=>{cancelAnimationFrame(V),window.clearTimeout(D),J.current=null,se.current=null,dn.disconnect(),pn.disconnect(),window.removeEventListener("pointermove",St),window.removeEventListener("pointerdown",xt),window.removeEventListener("deviceorientation",da),window.removeEventListener("click",ba),document.documentElement.removeEventListener("pointerleave",_a),document.removeEventListener("visibilitychange",Dn),[Me,Ye,Qe,$].forEach(ze=>H.deleteTexture(ze.texture)),[le,Ie,ie].forEach(ze=>H.deleteFramebuffer(ze)),H.deleteVertexArray(Ke),[lt,ee,te,Ee].forEach(ze=>H.deleteProgram(ze.program)),H.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Qo.useEffect)(()=>{J.current?.()}),(0,Qo.useEffect)(()=>{if(!x)return;let be=ae.current;if(!be)return;let $e=!1,H=null,lt=0,ee=0,te={x:0,y:0,near:1,ready:!1};return K("loading"),(async()=>{try{let Ke=await gP();if(await Ke.nets.tinyFaceDetector.loadFromUri(b),$e)return;if(H=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),$e){H.getTracks().forEach(Qe=>Qe.stop());return}be.srcObject=H,await be.play(),K("searching");let Me=new Ke.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ye=async()=>{if($e)return;let Qe=null;try{Qe=await Ke.detectSingleFace(be,Me)}catch{Qe=null}if($e)return;let $=se.current;if(Qe&&$){let le=Qe.box,Ie=be.videoWidth||1,ie=be.videoHeight||1,ue=-((le.x+le.width/2)/Ie-.5)*2,Ce=-((le.y+le.height/2)/ie-.5)*2,Xe=.32/Math.max(.08,le.width/Ie),Ne=te.ready?.45:1;te.x+=(ue-te.x)*Ne,te.y+=(Ce-te.y)*Ne,te.near+=(Xe-te.near)*Ne,te.ready=!0,ee=0,$.active=!0,$.move(te.x,te.y,te.near),K("tracking")}else $&&++ee>12&&$.active&&($.active=!1,te.ready=!1,$.release(),K("searching"));lt=window.setTimeout(Ye,40)};Ye()}catch{$e||K("blocked")}})(),()=>{$e=!0,window.clearTimeout(lt),H?.getTracks().forEach(Me=>Me.stop()),be.srcObject=null;let Ke=se.current;Ke?.active&&(Ke.active=!1,Ke.release())}},[x,b]),Ue.createElement("div",{ref:B,className:`grid-scan${L?` ${L}`:""}`,style:X,...z},Ue.createElement("canvas",{ref:k,className:"grid-scan-canvas","aria-hidden":"true"}),x&&Ue.createElement("div",{className:C?"grid-scan-preview":"grid-scan-hidden"},Ue.createElement("video",{ref:ae,className:"grid-scan-video",muted:!0,playsInline:!0}),C&&Ue.createElement("span",{className:"grid-scan-status"},FP[G])))},W_=SP;ht();var ot=mn(Lo());ht();var ea=mn(Lo());ht();ht();var lf=mn(Lo(),1),vP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Rs=(0,lf.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:f=!1,...h},u)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,m=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},S={ref:u,...vP,width:e,height:e,color:l||t,className:n,...m,...h},p=[...s&&r?r:i].sort(([,g],[,y])=>{let x=g.opacity!==void 0;return y.opacity!==void 0?1:x?-1:0}).map(([g,y])=>{let x=y.opacity!==void 0,C=x&&!f?y.opacity:void 0,b=c?{...y.stroke!==void 0?{stroke:x?c:l||t}:{fill:x?c:l||t}}:{};return(0,lf.createElement)(g,{...y,...m,...b,opacity:C,key:y.key})});return(0,lf.createElement)("svg",S,p)});Rs.displayName="HugeiconsIcon";ht();ht();var nr=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ht();var Dr=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ht();var Lr=[["path",{d:"M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]];ht();var cf=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var uf=typeof window>"u"?ea.useEffect:ea.useLayoutEffect,X_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},K_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",J_="cubic-bezier(0.22, 1, 0.36, 1)",Y_=(t,e,a)=>Math.min(a,Math.max(e,t)),yP=t=>typeof t=="number"?`${t}px`:t,MP=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},Z_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?K_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function CP(){let t=(0,ea.useRef)(null);return uf(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:J_}))},[]),Ue.createElement("span",{ref:t,className:"stepper__check"},Ue.createElement(Rs,{icon:cf,size:16,strokeWidth:2.4}))}function dm({children:t}){return Ue.createElement("div",{className:"stepper__step"},t)}function eF({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:f,showFooter:h=!0,backButtonText:u="Back",nextButtonText:d="Continue",completeButtonText:m="Complete",backButtonProps:S={},nextButtonProps:I={},completedContent:p,theme:g="dark",accentColor:y="#00f5ff",frame:x=!0,radius:C=20,width:b=620,className:T="",stepCircleContainerClassName:v="",stepContainerClassName:A="",contentClassName:w="",footerClassName:L="",style:X,...z}){let B=ea.Children.toArray(t).filter(ea.isValidElement),k=B.length,ae=typeof e=="number",[J,se]=(0,ea.useState)(a),G=Y_(Math.round(ae?e:J),1,k+1),K=G>k,oe=s==="vertical",De=oe?"numbers":r,be=B.some(me=>me.props.title),[$e,H]=(0,ea.useState)(!1),[lt,ee]=(0,ea.useState)(!1),te=oe&&!$e,[Ee,Ke]=(0,ea.useState)(G);G>Ee&&Ke(G);let[Me,Ye]=(0,ea.useState)({step:G,previous:null,direction:1,id:0});Me.step!==G&&Ye({step:G,previous:Me.step,direction:G>Me.step?1:-1,id:Me.id+1});let Qe=(0,ea.useRef)(null),$=(0,ea.useRef)(null),le=(0,ea.useRef)(null),Ie=(0,ea.useRef)([]),ie=(0,ea.useRef)([]),ue=(0,ea.useRef)(null),Ce=(0,ea.useRef)(null),Xe=(0,ea.useRef)(null),Ne=(0,ea.useRef)(0),Be=(0,ea.useRef)([]),R=(0,ea.useRef)(!1);R.current=lt;let it=(0,ea.useRef)(!1),tt=me=>{let ge=Y_(me,1,k+1);ge!==G&&(ae||se(ge),ge>k?n():o(ge))},_=me=>!c&&me!==G&&(!l||me<=Math.min(Ee,k));uf(()=>{let me=Qe.current;if(!me)return;let ge=()=>{let P=oe&&me.clientWidth<520;H(P);let ve=$.current;if(!ve||!be||oe&&!P){ee(!1);return}let ne=Ie.current.slice(0,k);R.current||ne.forEach((Ve,qe)=>{let St=ie.current[qe];Be.current[qe]=St&&Ve?.contains(St)?St.scrollWidth+8:0});let Ae=ne.reduce((Ve,qe)=>Ve+(qe?.firstElementChild?.getBoundingClientRect().width??22)+20,0),Re=Be.current.slice(0,k).reduce((Ve,qe)=>Ve+(qe||0),0),pe=ve.clientWidth-8-4*Math.max(0,k-1);ee(Ae+Re>pe+.5)};ge();let Se=new ResizeObserver(ge);return Se.observe(me),()=>Se.disconnect()},[oe,be,x,k,De]),uf(()=>{let me=ue.current;if(!me)return;Ne.current=me.offsetHeight;let ge=new ResizeObserver(()=>{Ne.current=me.offsetHeight});return ge.observe(me),()=>ge.disconnect()},[]),uf(()=>{if(Me.id===0)return;let me=ue.current,ge=Ce.current,Se=Xe.current,P=Me.id,ve=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ne=i==="none"?"none":ve?"fade":i,Ae=()=>Ye(xt=>xt.id===P?{...xt,previous:null}:xt);if(Se&&ge&&Se.contains(document.activeElement)&&ge.focus({preventScroll:!0}),!me||typeof me.animate!="function"||ne==="none"){Ae();return}for(let xt of[me,ge,Se])xt?.getAnimations().forEach(_a=>_a.cancel());let Re=Ne.current,pe=me.offsetHeight,Ve=Z_();Math.abs(Re-pe)>.5&&me.animate([{height:`${Re}px`},{height:`${pe}px`}],{duration:ve?200:560,easing:ve?J_:Ve});let qe=oe?"Y":"X",St=ne==="slide"?36:0;if(ge&&(St&&ge.animate([{transform:`translate${qe}(${Me.direction*St}px)`},{transform:"none"}],{duration:560,easing:Ve}),ge.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),Se){Se.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let xt=Se.animate([{transform:"none"},{transform:`translate${qe}(${-Me.direction*St}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});xt.onfinish=Ae}else Ae()},[Me.id]),uf(()=>{let me=$.current,ge=le.current;if(!me||!ge)return;let Se=ve=>{let ne=Ie.current[Math.min(G,k)-1];if(!ne)return;let Ae=Z_();ge.style.transition=ve?`transform 560ms ${Ae}, width 560ms ${Ae}, height 560ms ${Ae}, opacity 200ms ease`:"opacity 200ms ease",ge.style.transform=`translate3d(${ne.offsetLeft}px, ${ne.offsetTop}px, 0)`,ge.style.width=`${ne.offsetWidth}px`,ge.style.height=`${ne.offsetHeight}px`,ge.style.opacity=K?"0":"1"};Se(it.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),it.current=!0;let P=new ResizeObserver(()=>Se(!1));return P.observe(me),()=>P.disconnect()},[G,k,K,De,be,oe,$e,lt]);let F=me=>me>k?p??null:B[me-1],N=y?{"--stepper-solid":y,"--stepper-solid-ink":MP(y)}:{},q=(me,ge,Se)=>Ue.createElement("span",{className:"stepper__badge","data-status":Se},Se==="complete"?Ue.createElement(CP,null):me.props.icon?Ue.createElement("span",{className:"stepper__glyph"},me.props.icon):ge),re=()=>De==="dots"?Ue.createElement("div",{className:"stepper__dots"},B.map((me,ge)=>{let Se=ge+1,P=K||Se<G?"complete":Se===G?"active":"upcoming";return Ue.createElement("button",{key:Se,type:"button",className:"stepper__dot","data-status":P,"aria-label":me.props.title?`Step ${Se}: ${me.props.title}`:`Step ${Se}`,"aria-current":Se===G?"step":void 0,disabled:!_(Se),onClick:()=>tt(Se)},Ue.createElement("span",{className:"stepper__dot-mark","data-status":P}))})):De==="bars"?Ue.createElement("div",{className:"stepper__bars"},B.map((me,ge)=>{let Se=ge+1,P=K||Se<=G;return Ue.createElement("button",{key:Se,type:"button",className:"stepper__bar","data-status":K||Se<G?"complete":Se===G?"active":"upcoming","aria-label":me.props.title?`Step ${Se}: ${me.props.title}`:`Step ${Se}`,"aria-current":Se===G?"step":void 0,disabled:!_(Se),onClick:()=>tt(Se)},Ue.createElement("span",{className:"stepper__bar-track"},Ue.createElement("span",{className:"stepper__bar-fill","data-filled":P?"":void 0})))})):Ue.createElement("div",{ref:$,className:"stepper__track","data-layout":te?"rail":"row"},Ue.createElement("span",{ref:le,className:"stepper__glider","aria-hidden":"true"}),B.map((me,ge)=>{let Se=ge+1,P=K||Se<G?"complete":Se===G?"active":"upcoming",ve=me.props.title,ne=ve&&!(lt&&!te)&&Ue.createElement("span",{className:"stepper__text"},Ue.createElement("span",{ref:Re=>{ie.current[ge]=Re},className:"stepper__title","data-status":P},ve),te&&me.props.description&&Ue.createElement("span",{className:"stepper__description"},me.props.description)),Ae=Re=>{Ie.current[ge]=Re};return f?Ue.createElement("div",{key:Se,ref:Ae,className:"stepper__segment","data-status":P},f({step:Se,currentStep:G,onStepClick:Re=>tt(Re)}),ne):Ue.createElement("button",{key:Se,ref:Ae,type:"button",className:"stepper__segment","data-status":P,"aria-label":typeof ve=="string"?`Step ${Se}: ${ve}`:`Step ${Se}`,"aria-current":Se===G?"step":void 0,disabled:!_(Se),onClick:()=>tt(Se)},q(me,Se,P),ne)})),ye=G===k,xe=ye?m:d,{className:j="",onClick:V,...de}=S,{className:Te="",onClick:D,...Pe}=I;return Ue.createElement("div",{...z,ref:Qe,className:`stepper stepper--${te?"vertical":"horizontal"}${x?" stepper--framed":""} ${v} ${T}`.replace(/\s+/g," ").trim(),"data-completed":K?"":void 0,style:{...X_[g]??X_.dark,"--stepper-radius":`${Math.max(0,C)}px`,"--stepper-spring":K_,"--stepper-width":yP(b),...N,...X}},Ue.createElement("div",{className:`stepper__header stepper__header--${De} ${A}`.trim()},re()),Ue.createElement("div",{className:"stepper__body"},Ue.createElement("div",{ref:ue,className:`stepper__viewport ${w}`.trim(),"aria-live":"polite"},Me.previous!==null&&Ue.createElement("div",{key:Me.id-1,ref:Xe,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},F(Me.previous)),Ue.createElement("div",{key:Me.id,ref:Ce,className:"stepper__pane",tabIndex:-1},F(Me.step))),h&&Ue.createElement("div",{className:"stepper__footer-wrap","data-hidden":K?"":void 0,"aria-hidden":K?!0:void 0},Ue.createElement("div",{className:"stepper__footer-clip"},Ue.createElement("div",{className:`stepper__footer ${L}`.trim()},Ue.createElement("button",{type:"button",...de,className:`stepper__button stepper__button--back ${j}`.trim(),"data-hidden":G<=1?"":void 0,tabIndex:K?-1:de.tabIndex,onClick:me=>{V?.(me),me.defaultPrevented||tt(G-1)}},Ue.createElement(Rs,{icon:nr,size:16,strokeWidth:2}),Ue.createElement("span",null,u)),Ue.createElement("button",{type:"button",...Pe,className:`stepper__button stepper__button--next ${Te}`.trim(),tabIndex:K?-1:Pe.tabIndex,onClick:me=>{D?.(me),me.defaultPrevented||tt(G+1)}},Ue.createElement("span",null,xe),Ue.createElement(Rs,{icon:ye?cf:Dr,size:16,strokeWidth:2})))))),x&&Ue.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var _P=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function tF(){let[t,e]=(0,ot.useState)(1),[a,o]=(0,ot.useState)(""),[n,r]=(0,ot.useState)("Project Inquiry"),[s,i]=(0,ot.useState)(""),[l,c]=(0,ot.useState)(!1),[f,h]=(0,ot.useState)(""),u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return ot.default.createElement("div",{className:"stepper-quick-message-container"},ot.default.createElement("div",{className:"stepper-qm-header"},ot.default.createElement("div",{className:"stepper-qm-badge"},ot.default.createElement("span",{className:"pulse-dot-cyan"}),ot.default.createElement("span",null,"Send a Quick Message")),ot.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),ot.default.createElement(eF,{step:t,onStepChange:S=>{h(""),e(S)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!u||l},onFinalStepCompleted:async()=>{if(!u){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let S=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(S&&S.success)e(4);else throw new Error(S&&S.error||"Failed to send message. Please retry.")}catch(S){h(S.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:ot.default.createElement("div",{className:"stepper-complete-card"},ot.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),ot.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),ot.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",ot.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),ot.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},ot.default.createElement(dm,{title:"Email"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"Where should I reply?"),ot.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),ot.default.createElement("div",{className:"step-input-box"},ot.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ot.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),ot.default.createElement("polyline",{points:"22,6 12,13 2,6"})),ot.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:S=>{o(S.target.value),f&&h("")},className:"step-text-input"})),!u&&a.length>0&&ot.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),u&&ot.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),ot.default.createElement(dm,{title:"Details"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"What is this regarding?"),ot.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),ot.default.createElement("div",{className:"intent-pills-grid"},_P.map(S=>ot.default.createElement("button",{key:S.id,type:"button",className:`intent-pill ${n===S.id?"active":""}`,onClick:()=>r(S.id)},ot.default.createElement("span",{className:"intent-pill-label"},S.label)))),ot.default.createElement("div",{className:"step-message-box"},ot.default.createElement("label",{className:"step-message-label"},"Your Message ",ot.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),ot.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:S=>i(S.target.value),className:"step-textarea"})))),ot.default.createElement(dm,{title:"Review"},ot.default.createElement("div",{className:"step-pane-content"},ot.default.createElement("h3",{className:"step-title"},"Ready to transmit"),ot.default.createElement("p",{className:"step-desc"},"Review your message before sending."),ot.default.createElement("div",{className:"review-summary-card"},ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Your Email:"),ot.default.createElement("span",{className:"review-value cyan"},a)),ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Topic:"),ot.default.createElement("span",{className:"review-value"},n)),s?ot.default.createElement("div",{className:"review-row column"},ot.default.createElement("span",{className:"review-label"},"Message:"),ot.default.createElement("p",{className:"review-quote"},'"',s,'"')):ot.default.createElement("div",{className:"review-row"},ot.default.createElement("span",{className:"review-label"},"Message:"),ot.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),f&&ot.default.createElement("div",{className:"step-error-banner"},ot.default.createElement("span",null,"\u26A0 ",f))))))}ht();var rr=mn(Lo());var bP={dark:{"--pc-frame":"rgba(38, 35, 46, 0.66)","--pc-frame-edge":"rgba(255, 255, 255, 0.08)","--pc-frame-highlight":"rgba(255, 255, 255, 0.07)","--pc-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--pc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--pc-tile-edge":"rgba(255, 255, 255, 0.07)","--pc-tile-highlight":"rgba(255, 255, 255, 0.12)","--pc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--pc-ink":"#f4f4f5","--pc-muted":"rgba(244, 244, 245, 0.6)","--pc-hover":"brightness(1.12)","--pc-press":"brightness(0.8)","--pc-shade":"rgba(0, 0, 0, 0.4)"},light:{"--pc-frame":"rgba(240, 240, 243, 0.8)","--pc-frame-edge":"rgba(24, 24, 27, 0.07)","--pc-frame-highlight":"rgba(255, 255, 255, 0.95)","--pc-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--pc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--pc-tile-edge":"rgba(24, 24, 27, 0.08)","--pc-tile-highlight":"rgba(255, 255, 255, 1)","--pc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--pc-ink":"#27272a","--pc-muted":"rgba(39, 39, 42, 0.6)","--pc-hover":"brightness(0.97)","--pc-press":"brightness(0.92)","--pc-shade":"rgba(24, 24, 27, 0.14)"}},TP={dark:{"--pc-blend":"color-dodge","--pc-holo-filter":"hue-rotate(0deg)","--pc-sheen":"rgba(255, 255, 255, 0.16)"},light:{"--pc-blend":"multiply","--pc-holo-filter":"invert(1) hue-rotate(180deg)","--pc-sheen":"rgba(255, 255, 255, 0)"}},AP=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`,pm=(t,e,a)=>Math.min(a,Math.max(e,t)),wP=t=>{let e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(t).trim());if(!e)return null;let a=e[1].length===3?e[1].replace(/./g,s=>s+s):e[1],[o,n,r]=[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255);return .2126*o+.7152*n+.0722*r<.5},EP=({avatarUrl:t="",iconUrl:e="assets/csharp-pattern.svg",miniAvatarUrl:a,name:o="Javi A. Torres",title:n="Software Engineer",handle:r="javicodes",status:s="Online",statusColor:i="#22c55e",contactText:l="Contact",showUserInfo:c=!0,onContactClick:f,theme:h="dark",backdropColor:u,radius:d=16,holo:m=.8,glare:S=.5,enableTilt:I=!0,tiltStrength:p=12,parallax:g=8,enableMobileTilt:y=!1,mobileTiltSensitivity:x=5,intro:C=!0,className:b=""})=>{let T=(0,rr.useRef)(null),v=(0,rr.useRef)(null),A={enableTilt:I,tiltStrength:p,parallax:g,mobileTiltSensitivity:x,intro:C},w=(0,rr.useRef)(A);w.current=A,(0,rr.useEffect)(()=>{let k=T.current;if(!k)return;let ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,J={width:k.offsetWidth,height:k.offsetHeight},se={p:0,v:0,target:0},G={p:0,v:0,target:0},K={p:0,target:0},oe=0,De=0,be=0,$e=null,H=()=>{let{enableTilt:ie,tiltStrength:ue,parallax:Ce}=w.current,Xe=ie&&!ae?ue:0,Ne=Math.min(1,Math.hypot(se.p,G.p)),Be=k.style;Be.setProperty("--pc-light-x",`${((se.p+1)*.5*J.width).toFixed(1)}px`),Be.setProperty("--pc-light-y",`${((G.p+1)*.5*J.height).toFixed(1)}px`),Be.setProperty("--pc-pointer-x",`${((se.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-pointer-y",`${((G.p+1)*50).toFixed(2)}%`),Be.setProperty("--pc-band-x",`${(50+se.p*15).toFixed(2)}%`),Be.setProperty("--pc-band-y",`${(50+G.p*15).toFixed(2)}%`),Be.setProperty("--pc-rotate-x",`${(G.p*Xe).toFixed(3)}deg`),Be.setProperty("--pc-rotate-y",`${(-se.p*Xe).toFixed(3)}deg`),Be.setProperty("--pc-shift-x",`${(se.p*(ae?0:Ce)).toFixed(2)}px`),Be.setProperty("--pc-shift-y",`${(G.p*(ae?0:Ce)).toFixed(2)}px`),Be.setProperty("--pc-reach",Ne.toFixed(4)),Be.setProperty("--pc-tilt",(Ne*K.p).toFixed(4)),Be.setProperty("--pc-active",K.p.toFixed(4))},lt=ie=>{let ue=Math.min(.05,(ie-De)/1e3||0);De=ie;let Ce=ie<be,Xe=Ce?24:120,Ne=Ce?9:16,Be=Math.max(1,Math.ceil(ue/(1/120))),R=ue/Be;for(let _=0;_<Be;_++)for(let F of[se,G])F.v+=(Xe*(F.target-F.p)-Ne*F.v)*R,F.p+=F.v*R;let it=K.target>K.p?.18:Ce?.9:.45;K.p+=(K.target-K.p)*(1-Math.exp(-ue/it)),H(),Math.abs(se.target-se.p)>5e-4||Math.abs(G.target-G.p)>5e-4||Math.abs(se.v)>5e-4||Math.abs(G.v)>5e-4||Math.abs(K.target-K.p)>.002?oe=requestAnimationFrame(lt):(se.p=se.target,G.p=G.target,K.p=K.target,H(),oe=0)},ee=()=>{oe||(De=performance.now(),oe=requestAnimationFrame(lt))},te=(ie,ue,Ce=!0)=>{se.target=pm(ie,-1,1),G.target=pm(ue,-1,1),K.target=Ce?1:0,be=0,ee()},Ee=ie=>{let ue=k.getBoundingClientRect();!ue.width||!ue.height||te((ie.clientX-ue.left)/ue.width*2-1,(ie.clientY-ue.top)/ue.height*2-1)},Ke=()=>te(0,0,!1),Me=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ee(ie)},Ye=ie=>{(ie.pointerType==="mouse"||!ie.pointerType||ie.pointerId===$e)&&Ee(ie)},Qe=ie=>{(ie.pointerType==="mouse"||!ie.pointerType)&&Ke()},$=ie=>{ie.pointerType!=="mouse"&&($e=ie.pointerId,Ee(ie))},le=ie=>{ie.pointerId===$e&&($e=null,Ke())};k.addEventListener("pointerenter",Me),k.addEventListener("pointermove",Ye),k.addEventListener("pointerleave",Qe),k.addEventListener("pointerdown",$),k.addEventListener("pointerup",le),k.addEventListener("pointercancel",le),k.addEventListener("mousemove",Ye),k.addEventListener("mouseleave",Ke);let Ie=new ResizeObserver(()=>{J.width=k.offsetWidth,J.height=k.offsetHeight,H()});return Ie.observe(k),v.current={aim:te,release:Ke,write:H},w.current.intro&&!ae?(se.p=.62,G.p=-.55,K.p=1,be=performance.now()+1400,H(),ee()):H(),()=>{cancelAnimationFrame(oe),Ie.disconnect(),k.removeEventListener("pointerenter",Me),k.removeEventListener("pointermove",Ye),k.removeEventListener("pointerleave",Qe),k.removeEventListener("pointerdown",$),k.removeEventListener("pointerup",le),k.removeEventListener("pointercancel",le),k.removeEventListener("mousemove",Ye),k.removeEventListener("mouseleave",Ke),v.current=null}},[]),(0,rr.useEffect)(()=>{v.current?.write()},[I,p,g]),(0,rr.useEffect)(()=>{let k=T.current;if(!k||!y)return;let ae=!1,J=K=>{if(K.beta==null||K.gamma==null)return;let oe=w.current.mobileTiltSensitivity;v.current?.aim(K.gamma*oe/150,(K.beta-20)*oe/150)},se=()=>{ae||(ae=!0,window.addEventListener("deviceorientation",J))},G=()=>{let K=window.DeviceOrientationEvent;K&&typeof K.requestPermission=="function"?K.requestPermission().then(oe=>{oe==="granted"&&se()}).catch(()=>{}):se()};return k.addEventListener("click",G),()=>{k.removeEventListener("click",G),window.removeEventListener("deviceorientation",J)}},[y]);let L=h==="light"?"light":"dark",X=u?wP(u)??L==="dark"?"dark":"light":L,z=u?`linear-gradient(180deg, color-mix(in srgb, ${u}, #ffffff 12%) 0%, color-mix(in srgb, ${u}, #000000 18%) 100%)`:"var(--pc-tile)",B=e?e.startsWith("/")||e.startsWith("http")||e.startsWith("data:")?e:`/${e}`:"/assets/csharp-pattern.svg";return Ue.createElement("div",{ref:T,className:`profile-card ${b}`.trim(),style:{...bP[L],...TP[X],"--pc-radius":`${Math.max(0,d)}px`,"--pc-backdrop":z,"--pc-holo":pm(m,0,1),"--pc-glare":pm(S,0,1),"--pc-parallax":`${Math.max(0,g)}px`,"--pc-status":i,"--pc-grain":AP,"--pc-pattern":`url("${B}")`,"--pc-pattern-size":"200px 200px","--pc-holo-gain":1.25,"--pc-holo-detail":X==="dark"?1:0}},Ue.createElement("div",{className:"profile-card__body"},Ue.createElement("div",{className:"profile-card__tile"},Ue.createElement("span",{className:"profile-card__sheen"}),Ue.createElement("span",{className:"profile-card__holo"},Ue.createElement("span",{className:"profile-card__holo-glow"}),Ue.createElement("span",{className:"profile-card__holo-shift"})),t&&Ue.createElement("img",{className:"profile-card__photo",src:t,alt:o||"",loading:"lazy",draggable:!1}),(o||n)&&Ue.createElement(Ue.Fragment,null,Ue.createElement("span",{className:"profile-card__scrim"}),Ue.createElement("div",{className:"profile-card__info"},o&&Ue.createElement("h3",{className:"profile-card__name"},o),n&&Ue.createElement("p",{className:"profile-card__title"},n))),Ue.createElement("span",{className:"profile-card__tile-rim"})),c&&Ue.createElement("div",{className:"profile-card__footer"},a&&Ue.createElement("span",{className:"profile-card__avatar"},Ue.createElement("img",{src:a,alt:"",loading:"lazy",draggable:!1})),Ue.createElement("div",{className:"profile-card__meta"},r&&Ue.createElement("span",{className:"profile-card__handle"},"@",r),s&&Ue.createElement("span",{className:"profile-card__status"},s)),l&&Ue.createElement("button",{type:"button",className:"profile-card__contact",onClick:f,"aria-label":o?`${l} ${o}`:l},Ue.createElement(Rs,{icon:Lr,size:16,strokeWidth:1.8}),l)),Ue.createElement("span",{className:"profile-card__glare"}),Ue.createElement("span",{className:"profile-card__shade"}),Ue.createElement("span",{className:"profile-card__rim"})))},Q_=(0,rr.memo)(EP);ht();var st=mn(Lo());ht();var je=mn(Lo());var fc=Math.PI*2,RP=1/240,DP=6,LP=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],PP=[.5,-1.1,1.5,-.7,1.2,-1.6],BP=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],UP=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],aF=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],kP=[4,-5,3,-6,5,-3],rb=[.03,-.04,.05,-.02,.04,-.05],NP=[-6,4,-3,7,-5,3],OP={open:-180,receive:-24,peek:-13,rest:0},zP={open:-64,receive:-30,peek:-15,rest:0},oF={out:50,drag:80,focus:90},HP=typeof window>"u"?je.useEffect:je.useLayoutEffect,ta=(t,e,a)=>Math.min(a,Math.max(e,t)),j_=(()=>{let t=null,e=new Map;return a=>{let o=String(a);if(e.has(o))return e.get(o);let n=[61,139,255];return typeof document<"u"&&(t??=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=o,t.fillRect(0,0,1,1),n=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(o,n),n}})(),Ds=(t,e,a)=>t.map((o,n)=>Math.round(o+(e[n]-o)*a)),Pr=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,VP=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,iF=(t,e)=>{let a=new Array(16);for(let o=0;o<4;o++)for(let n=0;n<4;n++)a[o*4+n]=t[n]*e[o*4]+t[4+n]*e[o*4+1]+t[8+n]*e[o*4+2]+t[12+n]*e[o*4+3];return a},dc=(...t)=>t.reduce(iF),Rn=(t,e,a=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,a,1],hm=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],$_=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[1,0,0,0,0,a,o,0,0,-o,a,0,0,0,0,1]},nF=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,0,-o,0,0,1,0,0,o,0,a,0,0,0,0,1]},GP=t=>{let e=t*Math.PI/180,a=Math.cos(e),o=Math.sin(e);return[a,o,0,0,-o,a,0,0,0,0,1,0,0,0,0,1]},pc=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,qP=(t,e,a,o,n)=>{let r=(t?180:224)*e,s=(t?232:176)*e,i=20*e,l=12*e,c=i*.75,f=t?i:i+s*.3,h=t?[0,l,l,0]:[l,l,l,l],u=r-h[0]-h[1]-c*2-10*e,d=ta(o?a+14*e+c:r*.34,Math.min(r*.3,u),u),m=n==="left"?h[0]+5*e+c:n==="center"?(r-d)/2:r-h[1]-5*e-c-d,S=t?r*.8:r*.6;return{book:t,scale:e,w:r,h:s,tabH:i,r:l,shoulder:c,corners:h,tabW:d,tabX:m,frontTop:f,frontH:i+s-f,docW:S,docH:S*(t?1.28:1.45)}},sb=t=>{let{w:e,h:a,tabX:o,tabW:n,tabH:r,shoulder:s}=t,[i,l,c,f]=t.corners,h=r,u=r+a;return[`M 0 ${h+i}`,`Q 0 ${h} ${i} ${h}`,`L ${o-s} ${h}`,`C ${o} ${h} ${o} 0 ${o+s} 0`,`L ${o+n-s} 0`,`C ${o+n} 0 ${o+n} ${h} ${o+n+s} ${h}`,`L ${e-l} ${h}`,`Q ${e} ${h} ${e} ${h+l}`,`L ${e} ${u-c}`,`Q ${e} ${u} ${e-c} ${u}`,`L ${f} ${u}`,`Q 0 ${u} 0 ${u-f}`,"Z"].join(" ")},eb=`#version 300 es
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
}`,WP=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,XP=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,YP=`#version 300 es
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
}`,ZP=`#version 300 es
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
}`,tb=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},rF=(t,e,a,o)=>{let n=tb(t,t.VERTEX_SHADER,e),r=tb(t,t.FRAGMENT_SHADER,a),s=t.createProgram();if(!n||!r||!s)return null;if(t.attachShader(s,n),t.attachShader(s,r),t.linkProgram(s),t.deleteShader(n),t.deleteShader(r),!t.getProgramParameter(s,t.LINK_STATUS))return t.deleteProgram(s),null;let i={};return o.forEach(l=>{i[l]=t.getUniformLocation(s,l)}),{program:s,uniforms:i}},ab=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],KP=t=>{let e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;let a=rF(e,eb,WP,[...ab,"uImage","uAlpha"]),o=rF(e,XP,YP,["uImage","uStep","uSigma"]),n=rF(e,eb,ZP,[...ab,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!a||!o||!n)return null;let r=e.createVertexArray(),s=e.createBuffer();e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),l=[i(),i(),i()],c={width:0,height:0},f=new Map,h=(m,S)=>{e.uniform1f(m.uniforms.uDepth,S.depth),e.uniform2f(m.uniforms.uOrigin,S.origin[0],S.origin[1]),e.uniform4f(m.uniforms.uView,S.view.x,S.view.y,S.view.width,S.view.height)},u=(m,S)=>{t.width!==m&&(t.width=m),t.height!==S&&(t.height=S),!(c.width===m&&c.height===S)&&(c.width=m,c.height=S,l.forEach(I=>{e.bindTexture(e.TEXTURE_2D,I.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,S,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,I.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,I.texture,0)}))},d=(m,S,I,p,g)=>{e.bindFramebuffer(e.FRAMEBUFFER,S.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,m.texture),e.uniform2f(o.uniforms.uStep,I,p),e.uniform1f(o.uniforms.uSigma,g),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(m,S){let I=f.get(m);I||(I=e.createTexture(),f.set(m,I)),e.bindTexture(e.TEXTURE_2D,I),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(m){f.forEach((S,I)=>{m.has(I)||(e.deleteTexture(S),f.delete(I))})},render(m){if(e.isContextLost())return;let S=Math.max(1,Math.round(m.view.width*m.dpr)),I=Math.max(1,Math.round(m.view.height*m.dpr));u(S,I);let[p,g,y]=l;e.bindVertexArray(r),e.activeTexture(e.TEXTURE0),e.viewport(0,0,S,I),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,p.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(a.program),h(a,m),e.uniform1i(a.uniforms.uImage,0),e.uniform1f(a.uniforms.uBleed,0),m.layers.forEach(v=>{let A=f.get(v.key);A&&(e.bindTexture(e.TEXTURE_2D,A),e.uniformMatrix4fv(a.uniforms.uModel,!1,v.matrix),e.uniform2f(a.uniforms.uSize,v.width,v.height),e.uniform1f(a.uniforms.uAlpha,v.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});let x=m.glass,C=x.frost*m.dpr,b=p;C>.35&&(e.disable(e.BLEND),e.useProgram(o.program),e.uniform1i(o.uniforms.uImage,0),d(p,g,1/S,0,C),d(g,y,0,1/I,C),e.enable(e.BLEND),b=y),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);let T=n.uniforms;e.useProgram(n.program),h(n,m),e.bindTexture(e.TEXTURE_2D,b.texture),e.uniform1i(T.uBehind,0),e.uniformMatrix4fv(T.uModel,!1,x.matrix),e.uniform2f(T.uSize,x.width,x.height),e.uniform1f(T.uBleed,x.bleed),e.uniform4fv(T.uRadii,x.radii),e.uniform1f(T.uSpine,x.spine),e.uniform1f(T.uLens,x.lens),e.uniform1f(T.uMorph,x.morph),e.uniform3fv(T.uInsideTop,x.insideTop),e.uniform3fv(T.uInsideBottom,x.insideBottom),e.uniform1f(T.uTabRatio,x.tabRatio),e.uniform2fv(T.uGutter,x.gutter),e.uniform1f(T.uBevel,x.bevel),e.uniform1f(T.uStrength,x.strength),e.uniform1f(T.uSplit,x.split),e.uniform4fv(T.uTint,x.tint),e.uniform1f(T.uHaze,x.haze),e.uniform1f(T.uDim,x.dim),e.uniform1f(T.uGlint,x.glint),e.uniform1f(T.uShine,x.shine),e.uniform2fv(T.uLight,x.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){f.forEach(m=>e.deleteTexture(m)),f.clear(),l.forEach(m=>{e.deleteTexture(m.texture),e.deleteFramebuffer(m.frame)}),e.deleteBuffer(s),e.deleteVertexArray(r),e.deleteProgram(a.program),e.deleteProgram(o.program),e.deleteProgram(n.program)}}},ob=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2));t.beginPath(),t.moveTo(e+s,a),t.arcTo(e+o,a,e+o,a+n,s),t.arcTo(e+o,a+n,e,a+n,s),t.arcTo(e,a+n,e,a,s),t.arcTo(e,a+o,e,a,s),t.closePath()},JP=(t,e)=>{let a=0,o=0,n=t;for(;n&&n!==e;)a+=n.offsetLeft,o+=n.offsetTop,n=n.offsetParent;return n===e?[a,o]:null},QP=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),jP=(t,e,a,o,n,r)=>{let s=Array.from(e.childNodes).filter(S=>S.nodeType===3).map(S=>S.textContent).join("").trim();if(!s)return;let i=parseFloat(r.fontSize)||12,l=parseFloat(r.lineHeight)||i*1.2,c=a+(parseFloat(r.paddingLeft)||0),f=o+(parseFloat(r.paddingTop)||0),h=n-(parseFloat(r.paddingLeft)||0)-(parseFloat(r.paddingRight)||0);t.font=`${r.fontStyle} ${r.fontWeight} ${r.fontSize} ${r.fontFamily}`,t.fillStyle=r.color,t.textBaseline="middle";let u=S=>{if(t.measureText(S).width<=h)return S;let I=S;for(;I.length>1&&t.measureText(`${I}\u2026`).width>h;)I=I.slice(0,-1);return`${I.trimEnd()}\u2026`};if(r.whiteSpace==="nowrap"){t.fillText(u(s),c,f+l/2);return}let d="",m=0;s.split(/\s+/).forEach(S=>{let I=d?`${d} ${S}`:S;d&&t.measureText(I).width>h?(t.fillText(d,c,f+l*(m+.5)),m+=1,d=S):d=I}),d&&t.fillText(d,c,f+l*(m+.5))},nb=(t,e,a)=>{let o=Math.max(1,t.offsetWidth),n=Math.max(1,t.offsetHeight),r=document.createElement("canvas");r.width=Math.max(1,Math.round(o*e)),r.height=Math.max(1,Math.round(n*e));let s=[],i=r.getContext("2d");if(!i)return{canvas:r,pending:s};i.scale(e,e);let l=(c,f,h)=>{let u=getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")return;let d=c.offsetWidth,m=c.offsetHeight,S=parseFloat(u.borderTopLeftRadius)||0,I=c!==t&&Number.isFinite(parseFloat(u.opacity))?parseFloat(u.opacity):1;if(i.save(),i.globalAlpha*=I,QP(u.backgroundColor)||(i.fillStyle=u.backgroundColor,ob(i,f,h,d,m,S),i.fill()),u.overflow!=="visible"&&(ob(i,f,h,d,m,S),i.clip()),c instanceof HTMLImageElement){if(!c.complete||!c.naturalWidth)s.push(c);else if(!a){let p=Math.max(d/c.naturalWidth,m/c.naturalHeight),g=d/p,y=m/p;i.drawImage(c,(c.naturalWidth-g)/2,(c.naturalHeight-y)/2,g,y,f,h,d,m)}}else jP(i,c,f,h,d,u),Array.from(c.children).forEach(p=>{let g=JP(p,t);g&&l(p,g[0],g[1])});i.restore()};return l(t,0,0),{canvas:r,pending:s}},$P=(t,e,a,o)=>{let n=document.createElement("canvas");n.width=Math.max(1,Math.round(t.w*o)),n.height=Math.max(1,Math.round((t.tabH+t.h)*o));let r=n.getContext("2d");if(!r)return n;r.scale(o,o);let s=r.createLinearGradient(0,0,0,t.tabH+t.h);return s.addColorStop(0,e),s.addColorStop(1,a),r.fillStyle=s,r.fill(new Path2D(sb(t))),n},sF=({title:t,description:e})=>je.default.createElement("div",{className:"folder-doc"},t?je.default.createElement("span",{className:"folder-doc-title"},t):je.default.createElement("span",{className:"folder-doc-heading"}),e&&je.default.createElement("span",{className:"folder-doc-text"},e),je.default.createElement("span",{className:"folder-doc-line",style:{width:"92%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"84%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"88%"}}),je.default.createElement("span",{className:"folder-doc-block"}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"80%"}}),je.default.createElement("span",{className:"folder-doc-line",style:{width:"62%"}})),eB=t=>(0,je.isValidElement)(t)?t:typeof t=="string"||typeof t=="number"?je.default.createElement(sF,{title:String(t)}):t&&typeof t=="object"?t.image?je.default.createElement("div",{className:"folder-photo"},je.default.createElement("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})):t.content?t.content:je.default.createElement(sF,{title:t.title,description:t.description}):je.default.createElement(sF,null),tB=(t,e,a,o,n)=>{let r=n.w/2,s=n.frontTop+n.frontH/2;if(a==="open"){if(o==="row"){let u=10*n.scale,d=Math.min(.8,(n.w*1.86-u*(e-1))/(e*n.docW)),m=n.docW*d+u;return{x:n.w/2+(t-(e-1)/2)*m,y:s,z:0,r:0,ry:0,s:d}}if(o==="stack"){let d=Math.min(26*n.scale,n.h*.36/Math.max(1,e-1)),m=n.frontTop+14*n.scale+(e-1)*d;return{x:n.w,y:m+n.docH*.74/2-t*d,z:0,r:0,ry:0,s:.74}}let c=e>4?.58:e>3?.64:.72,f=e===2?n.w:Math.min(n.w*1.3,n.w*.6*(e-1)),h=e>1?f/2-t*f/(e-1):n.w*.5;return{x:n.w/2+h,y:s+rb[t]*n.h,z:0,r:kP[t],ry:0,s:c}}let l=(a==="rest"?BP:UP)[t]??{x:.06,y:0,r:PP[t]??0};return{x:r+l.x*n.w,y:s+l.y*n.h+t*.8*n.scale,z:0,r:l.r,ry:0,s:1}},aB=(t,e,a,o,n,r)=>{let s=aF[t]??aF[aF.length-1],i=n.tabH+n.h-5*n.scale-n.docH/2,l=(e-1)/2;if(a==="open"){let d=n.tabH+n.h*.12;if(o==="stack"){let g=Math.min(30*n.scale,n.h*.62/Math.max(1,e-1)),y=1.04-t*.05;return{x:n.w/2,y:n.tabH+n.h*.1-t*g-n.docH*(1.04-y)/2,z:-t*18*n.scale,r:0,ry:0,s:y}}let S=Math.min(270*n.scale,n.w*.98)/Math.max(1,e-1),I=.96,p=o==="row";return{x:n.w/2+(t-l)*S,y:d+(p?0:rb[t]*n.h*.45),z:0,r:p?0:(t-l)*3.6,ry:0,s:I}}let c=a==="receive"?1.7:a==="peek"?1.3:1,f=n.w/2+s.x*n.w*c;if(a==="rest")return{x:f,y:i-s.rise*n.h,z:0,r:s.r,ry:0,s:1};let h=a==="peek"&&r!=null?Math.max(0,1-Math.abs(r-f)/(n.w*.32)):0,u=s.rise+(a==="receive"?.03:.1);return{x:f,y:i-u*n.h-h*h*n.h*.09,z:0,r:s.r*1.6,ry:0,s:1}},oB=({items:t,label:e,mode:a="flap",variant:o="solid",color:n="#3d8bff",paperColor:r="#ffffff",tabPosition:s="right",layout:i="spread",size:l=1,openOn:c="click",open:f,defaultOpen:h=!1,onOpenChange:u,onItemClick:d,onItemDrop:m,draggable:S=!0,zoomOnClick:I=!0,focusScale:p,peek:g=!0,intro:y=!0,tilt:x=.5,bounce:C=.4,speed:b=1,frost:T=.25,closeOnOutsideClick:v=!0,theme:A="dark",className:w="",style:L,children:X})=>{let z=(0,je.useRef)(null),B=(0,je.useRef)(null),k=(0,je.useRef)(null),ae=(0,je.useRef)(null),J=(0,je.useRef)(null),se=(0,je.useRef)(null),G=(0,je.useRef)(null),K=(0,je.useRef)([]),oe=(0,je.useRef)(null),De=(0,je.useRef)(null),be=(0,je.useRef)(null),[$e,H]=(0,je.useState)(h),[lt,ee]=(0,je.useState)(0),[te,Ee]=(0,je.useState)([]),[Ke,Me]=(0,je.useState)(!1),Ye=f!==void 0,Qe=Ye?!!f:$e,$=a==="book",le=o==="glass",Ie=(0,je.useMemo)(()=>{let V=je.Children.toArray(X).filter(je.isValidElement);return(V.length?V:t?.length?t:LP).slice(0,DP)},[X,t]),ie=Ie.length,ue=Math.max(.3,Number(l)||1),Ce=qP($,ue,lt,!!e,s),Xe=Ce.tabH+Ce.h,Ne=$?{x:-.75*Ce.w,y:-.25*Xe,width:2.5*Ce.w,height:1.5*Xe}:{x:-.25*Ce.w,y:-.1*Xe,width:1.5*Ce.w,height:1.3*Xe};HP(()=>{let V=oe.current;if(!V)return;let de=!0,Te=()=>{de&&ee(V.offsetWidth)};return Te(),document.fonts?.ready.then(Te),()=>{de=!1}},[e,ue]);let Be=(0,je.useCallback)(V=>{let de=typeof V=="function"?V(Qe):V;Ye||H(de),de!==Qe&&u?.(de)},[Ye,Qe,u]),R=(0,je.useRef)(Be);R.current=Be;let it=j_(n),tt=j_(r),_=Ds(it,[0,0,0],.16),F=Pr(Ds(it,[0,0,0],.08)),N=Pr(_),q=(0,je.useRef)(null);q.current={open:Qe,layout:i,openOn:c,peek:g,intro:y,draggable:S,zoomOnClick:I,focusScale:p,closeOnOutsideClick:v,onItemClick:d,onItemDrop:m,tilt:ta(x,0,1.5),bounce:ta(C,0,1),speed:ta(b,.2,3),frost:ta(T,0,1),count:ie,entries:Ie,glass:le,light:A==="light",tint:it,insideTop:F,insideBottom:N,insideTone:[Ds(it,[0,0,0],.08).map(V=>V/255),_.map(V=>V/255)],content:`${a}|${ue}|${r}|${n}|${Ce.tabX}|${Ce.tabW}`,depth:Math.round(Math.max(Ce.w,Ce.h)*5),view:Ne,g:Ce},(0,je.useEffect)(()=>{let V=z.current;if(!V)return;let de=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Te=W=>({value:W,velocity:0}),D={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:Te(0),rx:Te(0),ry:Te(0),lift:Te(0),squash:Te(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:Te(0),appear:1,content:{key:"",entries:null,renderer:null}},Pe=W=>{for(;D.items.length<W;)D.items.push({x:Te(0),y:Te(0),z:Te(0),r:Te(0),ry:Te(0),s:Te(1),hover:Te(0),mx:Te(0),my:Te(0),alpha:Te(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});D.items.length>W&&(D.items.length=W,D.focus>=W&&(D.focus=-1),me())},me=()=>{let W=[];D.items.forEach((Q,fe)=>{Q.place==="out"&&W.push(fe)}),Ee(Q=>Q.length===W.length&&Q.every((fe,Oe)=>fe===W[Oe])?Q:W)},ge=(W,Q,fe,Oe,pt)=>{let Ht=fe*fe,ce=2*Oe*fe,Ge=Math.max(1,Math.ceil(pt/RP)),M=pt/Ge;for(let E=0;E<Ge;E++)W.velocity+=(Ht*(Q-W.value)-ce*W.velocity)*M,W.value+=W.velocity*M;return Math.abs(Q-W.value)>.01||Math.abs(W.velocity)>.01},Se=(W,Q)=>{W.value=Q,W.velocity=0},P=()=>{let{g:W}=q.current;return W.book?W.w/2*ta(-D.front.value/180,0,1):0},ve=(W,Q)=>{let fe=V.getBoundingClientRect(),Oe=V.offsetWidth/(fe.width||1),pt=V.offsetHeight/(fe.height||1);return[(W-fe.left)*Oe,(Q-fe.top)*pt]},ne=()=>{let W=V.getBoundingClientRect(),Q=0,fe=0,Oe=window.innerWidth,pt=window.innerHeight;for(let Ge=V.parentElement;Ge&&Ge!==document.body;Ge=Ge.parentElement){let M=getComputedStyle(Ge);if(/(hidden|clip|auto|scroll)/.test(`${M.overflowX} ${M.overflowY}`)){let E=Ge.getBoundingClientRect();Q=Math.max(Q,E.left),fe=Math.max(fe,E.top),Oe=Math.min(Oe,E.right),pt=Math.min(pt,E.bottom);break}}let Ht=V.offsetWidth/(W.width||1),ce=V.offsetHeight/(W.height||1);return{left:(Q-W.left)*Ht,top:(fe-W.top)*ce,right:(Oe-W.left)*Ht,bottom:(pt-W.top)*ce}},Ae=(W,Q)=>{let{g:fe}=q.current,Oe=P();if(fe.book){let pt=D.front.value<-90?Oe-fe.w:Oe;return W>=pt&&W<=Oe+fe.w&&Q>=fe.tabH*.5&&Q<=fe.tabH+fe.h}return W>=0&&W<=fe.w&&Q>=0&&Q<=fe.tabH+fe.h},Re=W=>{let{g:Q}=q.current,fe=Q.docW*W.s.value/2,Oe=Q.docH*W.s.value/2;if(Q.book){if(D.front.value<-60)return!1;let pt=P();return W.x.value-fe<pt+Q.w&&W.x.value+fe>pt&&W.y.value+Oe>Q.tabH&&W.y.value-Oe<Q.tabH+Q.h}return D.front.value<-45?!1:W.y.value+Oe>Q.frontTop+4*Q.scale&&W.x.value+fe>0&&W.x.value-fe<Q.w},pe=W=>{if(W.length<2)return[0,0];let Q=W[0],fe=W[W.length-1],Oe=Math.max(.016,(fe[0]-Q[0])/1e3);return[(fe[1]-Q[1])/Oe,(fe[2]-Q[2])/Oe]},Ve=(W,Q)=>W.open?"open":D.receiving||Q<D.receiveUntil?"receive":W.peek&&D.hovered&&!D.drag?.active?"peek":"rest",qe=(W,Q,fe,Oe)=>{if(Oe.g.book)return tB(W,Q,fe,Oe.layout,Oe.g);let pt=D.hovered?(D.pointerX+1)/2*Oe.g.w:null;return aB(W,Q,fe,Oe.layout,Oe.g,pt)},St=(W,Q,fe)=>{let{g:Oe}=fe;return W.insertFrom==="side"?{...Q,x:Math.max(Q.x,Oe.w+Oe.docW*.54*Q.s)}:{...Q,y:Math.min(Q.y,Oe.frontTop-Oe.docH*.5*Q.s-8*Oe.scale)}},xt=W=>{D.raf=0;let Q=q.current,{g:fe}=Q;Pe(Q.count);let Oe=W/1e3,pt=D.last?Math.min(.05,(W-D.last)/1e3):1/60;D.last=W;let Ht=de?1:1-.72*Q.bounce,ce=fc*(fe.book?1.55:2)*Q.speed,Ge=fc*2.1*Q.speed,M=fc*1.6*Q.speed,E=Ve(Q,Oe);E!==D.phase&&(D.previous=D.phase,D.phase=E,D.changedAt=W);let Z=(W-D.changedAt)/1e3,U=Oe<D.receiveUntil,Y=[];D.items.forEach((we,wt)=>{we.place==="inside"&&Y.push(wt)});let _e=Y.length;Y.forEach((we,wt)=>{D.items[we].rank=wt}),D.focus>=0&&E!=="open"&&D.items[D.focus]?.place==="inside"&&(D.focus=-1);let Fe=D.intro;D.ready||(Fe.opening=Q.open),Fe.phase==="run"&&!Fe.opening&&(Q.open||D.drag?.active)&&(Fe.phase="done");let Le=Fe.phase==="run"?Oe-Fe.start:0,He=Fe.phase!=="done"&&!Fe.opening,et=(.16+_e*.085+.3)/Q.speed,dt=He&&Le<et,ct=we=>(.16+(_e-1-we)*.085)/Q.speed,Je=(we,wt)=>fe.book?{...wt,r:wt.r+(we.rank%2?7:-6),s:wt.s*1.12}:{...wt,y:wt.y-(fe.h*.8+fe.docH*.5),r:wt.r+(we.rank%2?9:-7)};Fe.phase==="run"&&(U=!0,Le>(Fe.opening?1.4:et+1)/Q.speed&&(Fe.phase="done"));let gt=Fe.phase==="wait"?0:Fe.phase==="run"?ta(Le/(.34/Q.speed),0,1):1;D.appear=1-(1-gt)**3;let ut=D.previous==="open"&&E!=="open"&&!de?((fe.book?.1:.06)+.035*_e)/Q.speed:0,Tt=Z<ut?D.previous:E,ua=dt?fe.book?-150:-42:(fe.book?OP:zP)[Tt];if(!D.ready){D.ready=!0;let we=Fe.phase!=="done"&&Fe.opening;we&&(D.phase="rest",D.previous="rest"),Se(D.front,we?0:ua),Se(D.anchor,He?1:0),D.items.forEach(wt=>{let Pt=qe(wt.rank,_e,we?"rest":E,Q),ya=He?Je(wt,Pt):Pt;Se(wt.x,ya.x),Se(wt.y,ya.y),Se(wt.z,ya.z),Se(wt.r,ya.r),Se(wt.ry,ya.ry),Se(wt.s,ya.s),Se(wt.alpha,He?0:1),Se(wt.hover,He&&fe.book?3:0),wt.fresh=!1})}if(Fe.phase==="wait"){da(),D.last=0;return}U=ge(D.front,ua,ce,Ht,pt)||U;let We=.2+.35*Q.bounce;fe.book&&D.front.value<-180?(D.front.value=-360-D.front.value,D.front.velocity=-D.front.velocity*We):D.front.value>0&&(D.front.value=-D.front.value,D.front.velocity=-D.front.velocity*We),Z<ut&&(U=!0),U=ge(D.anchor,He?1:0,ce,1,pt)||U;let Qt=D.hovered&&!de;U=ge(D.rx,Qt?-D.pointerY*8*Q.tilt:0,M,1,pt)||U,U=ge(D.ry,Qt?D.pointerX*10*Q.tilt:0,M,1,pt)||U,U=ge(D.lift,D.hovered&&E!=="open"?1:0,M,1,pt)||U,U=ge(D.squash,D.pressed?.975:1,fc*3.2,.6,pt)||U;let vt=E==="open"&&D.previous!=="open",jt=D.drag?.active?D.drag:null,pa=D.hoveredItem,Ta=!jt&&pa>=0&&D.items[pa]?D.items[pa]:null,Ya=Ta&&Ta.place==="inside"&&E==="open"?qe(Ta.rank,_e,"open",Q):null,zt=Q.focusScale??ta((fe.tabH+fe.h)*2.05/fe.docH,2,2.5),at=typeof window<"u"&&window.innerWidth<480?Math.min(zt,Math.max(1.75,window.innerWidth*.86/fe.docW)):zt,va=fe.book?fe.tabH+fe.h/2:fe.tabH+fe.h*.2;D.items.forEach((we,wt)=>{if(we.fresh){let hn=qe(we.rank,_e,"rest",Q);Se(we.x,hn.x),Se(we.y,hn.y),Se(we.r,hn.r),we.fresh=!1}let Pt,ya=Ge,ff=Ht,sr=0,uF=1,df=!1;if(D.focus===wt)Pt={x:fe.w/2,y:va,z:0,r:0,ry:0,s:at},sr=3.5,we.layer="focus";else if(jt&&jt.index===wt){let[hn]=pe(jt.samples);Pt={x:D.deskX+jt.grabX,y:D.deskY+jt.grabY,z:0,r:ta(hn*.012,-14,14),ry:0,s:jt.scale*1.05},ya=fc*5,ff=.78,sr=1.4,!we.elevated&&!Re(we)&&(we.elevated=!0),we.layer=we.elevated?"drag":"inside"}else if(we.place==="out")Pt={x:we.outX,y:we.outY,z:0,r:we.outR,ry:0,s:we.outS},sr=pa===wt?1:.15,df=pa===wt,we.layer="out";else{let hn=vt&&fe.book?_e-1-we.rank:we.rank,pf=de?0:vt?((fe.book?.16:.05)+hn*(fe.book?.055:.045))/Q.speed:hn*.03/Q.speed,Mi=Z>=pf?E:D.previous;if(Pt=qe(we.rank,_e,Mi,Q),Z<pf&&(U=!0),He&&Le<ct(we.rank))Pt=Je(we,Pt),uF=0,sr=fe.book?3:0,we.layer="inside";else if(we.insertUntil>Oe)U=!0,Pt=St(we,Pt,Q),we.layer="drag",sr=.6;else if(we.insertUntil=0,we.elevated=!1,we.layer="inside",Ya&&Mi==="open")if(pa===wt)Pt={...Pt,y:Pt.y-6*fe.scale,r:Pt.r*.2,ry:0,s:Pt.s*1.05},sr=1,df=!0;else{let fF=Pt.x-Ya.x;Pt={...Pt,x:Pt.x+Math.sign(fF)*12*fe.scale*Math.max(0,1-Math.abs(fF)/(fe.w*1.1))},sr=.2}else Mi==="open"&&(sr=.2)}if(U=ge(we.x,Pt.x,ya,ff,pt)||U,U=ge(we.y,Pt.y,ya,ff,pt)||U,!fe.book&&we.layer==="inside"){let hn=we.r.value*Math.PI/180,pf=(fe.docW*Math.abs(Math.sin(hn))+fe.docH*Math.abs(Math.cos(hn)))*we.s.value/2,Mi=fe.tabH+fe.h-2*fe.scale-pf;we.y.value>Mi&&(we.y.value=Mi,we.y.velocity>0&&(we.y.velocity*=-.25))}U=ge(we.z,Pt.z,Ge,Ht,pt)||U,U=ge(we.r,Pt.r,ya,ff,pt)||U,U=ge(we.ry,Pt.ry,Ge,Ht,pt)||U,U=ge(we.s,Pt.s,Ge,Ht,pt)||U,U=ge(we.hover,sr,Ge,Ht,pt)||U,U=ge(we.alpha,uF,fc*3*Q.speed,1,pt)||U,U=ge(we.mx,df?we.localX*7*fe.scale:0,M,.85,pt)||U,U=ge(we.my,df?we.localY*7*fe.scale:0,M,.85,pt)||U}),da(),U||jt?D.raf=requestAnimationFrame(xt):D.last=0},_a=(W,Q)=>{if(D.content.key===Q.content&&D.content.entries===Q.entries&&D.content.renderer===W)return;D.content={key:Q.content,entries:Q.entries,renderer:W};let fe=Math.min(window.devicePixelRatio||1,2),Oe=new Set(["back"]);W.upload("back",$P(Q.g,Q.insideTop,Q.insideBottom,fe)),K.current.slice(0,Q.count).forEach((pt,Ht)=>{if(!pt)return;let ce=`item-${Ht}`;Oe.add(ce);let Ge=nb(pt,fe,!1);try{W.upload(ce,Ge.canvas)}catch{Ge=nb(pt,fe,!0),W.upload(ce,Ge.canvas)}Ge.pending.forEach(M=>M.addEventListener("load",dn,{once:!0}))}),W.prune(Oe)},da=()=>{let W=q.current,{w:Q,h:fe,tabH:Oe,frontTop:pt,frontH:Ht,docW:ce,docH:Ge,scale:M,book:E}=W.g,Z=Q/2,U=Oe+fe/2,Y=D.front.value,_e=Y*Math.PI/180,Fe=E?ta(-Y/180,0,1):0,Le=Q/2*Fe*(1-D.anchor.value),He=(1+D.lift.value*.012)*D.squash.value*(.94+.06*D.appear);V.style.opacity=D.appear<.999?D.appear.toFixed(3):"";let et=dc(Rn(Z,U),$_(D.rx.value),nF(D.ry.value),hm(He,He),Rn(-Z,-U)),dt=iF(et,Rn(Le,0)),ct=E&&Y<-90,Je=ct?"3":"40";B.current&&(B.current.style.transform=pc(dt),B.current.style.setProperty("--folder-gutter",Fe.toFixed(3)),B.current.style.setProperty("--folder-label",(E?1:1-ta((-Y-18)/26,0,1)).toFixed(3)));let gt=E?dc(dt,Rn(0,pt,2*M*(1-Fe)),nF(Y)):dc(dt,Rn(0,Oe+fe,2*M),$_(Y),Rn(0,-Ht)),Ot=E?Math.sin(_e)*-.42+Math.cos(_e)*.9:Math.sin(_e)*.5+Math.cos(_e)*.86,ut=(ct?-Ot:Ot)/(E?.9:.86),Tt=ta((ut-1)*.9,0,.18),ua=ta((1-ut)*(E?.5:.22),0,.5),We=k.current;We&&(We.style.transform=pc(gt),We.style.zIndex=Je,We.dataset.face=ct?"inner":"outer",We.style.setProperty("--folder-glint",Tt.toFixed(3)),We.style.setProperty("--folder-dim",ua.toFixed(3)));let Qt=E?Math.max(0,Math.sin(-_e)):0;if(ae.current&&(ae.current.style.transform=pc(iF(dt,Rn(0,E?Oe:Oe+fe))),ae.current.style.opacity=(.75+D.lift.value*.25).toFixed(3)),J.current&&(J.current.style.transform=pc(dc(dt,Rn(Q*Qt*.12,pt+fe*Qt*.04),hm(Math.cos(_e),1))),J.current.style.opacity=(ct?1-Qt*.7:0).toFixed(3)),se.current){let at=Q*Math.cos(_e)+Q*Qt*.36;se.current.style.transform=pc(dc(dt,Rn(0,pt+fe*Qt*.03),hm(at/Q,1))),se.current.style.zIndex=at>0?"39":"2",se.current.style.opacity=(ta(Qt*4,0,1)*(1-Qt*.45)).toFixed(3)}let vt=D.items.map((at,va)=>[at,va]).filter(([at])=>at.layer==="out").sort((at,va)=>at[0].outOrder-va[0].outOrder).map(([,at])=>at),jt=[];D.items.forEach((at,va)=>{let we=K.current[va],wt=3*M+at.z.value+at.hover.value*26*M,Pt=dc(et,Rn(at.x.value+at.mx.value,at.y.value+at.my.value,wt),nF(at.ry.value),GP(at.r.value),hm(at.s.value,at.s.value),Rn(-ce/2,-Ge/2)),ya=10+W.count-at.rank;at.layer==="inside"&&D.phase==="open"&&D.hoveredItem===va&&(ya=30),at.layer==="out"&&(ya=oF.out+vt.indexOf(va)),at.layer==="drag"&&(ya=oF.drag),at.layer==="focus"&&(ya=oF.focus),jt.push({index:va,matrix:Pt,layer:ya,alpha:ta(at.alpha.value,0,1),inside:at.layer==="inside"}),we&&(we.style.transform=pc(Pt),we.style.zIndex=String(ya),we.style.setProperty("--folder-lift",ta(at.hover.value,0,2.4).toFixed(3)),at.layer==="focus"?we.setAttribute("data-focused","true"):we.hasAttribute("data-focused")&&we.removeAttribute("data-focused"),we.style.opacity=at.alpha.value<.995?Math.max(0,at.alpha.value).toFixed(3):"")});let pa=G.current,Ta=be.current;if(!pa||!Ta||!W.glass)return;pa.style.zIndex=Je,_a(Ta,W);let Ya=[];ct||(Ya.push({key:"back",matrix:dt,width:Q,height:Oe+fe,alpha:1}),jt.filter(at=>at.inside).sort((at,va)=>at.layer-va.layer).forEach(at=>Ya.push({key:`item-${at.index}`,matrix:at.matrix,width:ce,height:Ge,alpha:at.alpha})));let zt=Math.min(window.devicePixelRatio||1,2);Ta.render({dpr:zt,depth:W.depth,origin:[Z,U],view:W.view,layers:Ya,glass:{matrix:gt,width:Q,height:Ht,radii:E?[0,W.g.r,W.g.r,0]:[W.g.r,W.g.r,W.g.r,W.g.r],spine:E?Q*2:0,bleed:ct?2:0,morph:E?ta((Fe-.55)/.45,0,1)**2:0,insideTop:W.insideTone[0],insideBottom:W.insideTone[1],tabRatio:Oe/(Oe+fe),gutter:[12*M,E?.12*Fe:0],bevel:12*M,strength:14*M,split:.26,lens:.02,frost:W.frost*6*M,tint:[W.tint[0]/255,W.tint[1]/255,W.tint[2]/255,W.light?.1:.14],haze:.04+W.frost*.1,dim:ua*.8,glint:Tt,shine:W.light?.72:.85,light:ct?[.55,-.83]:[-.55,-.83]}})},ba=()=>{D.raf||(D.raf=requestAnimationFrame(xt))},Dn=()=>{D.intro.phase==="wait"&&(D.intro.phase="run",D.intro.start=performance.now()/1e3,ba())},dn=()=>{D.content.key="",ba()},pn=()=>{let W=D.drag,Q=W?D.items[W.index]:null;D.receiving=!!(W?.active&&Q&&(Q.place==="out"||Q.elevated)&&Ae(D.deskX,D.deskY))},ze=W=>{let Q=D.items[W.index];Q&&(W.active=!0,W.grabX=Q.x.value-W.downX,W.grabY=Q.y.value-W.downY,W.scale=Q.place==="out"?Q.outS:Q.s.value,W.clip=ne(),D.suppressClick=!0,D.focus===W.index&&(D.focus=-1),Q.elevated=Q.place==="out"||!Re(Q),V.dataset.dragging="")},rt=(W,Q)=>{let fe=q.current,Oe=D.items[W.index];if(D.receiving=!1,delete V.dataset.dragging,!Oe)return;let pt=performance.now()/1e3,[Ht,ce]=Q?[0,0]:pe(W.samples);if(Ae(D.deskX,D.deskY)){let Le=Oe.place==="out"||Oe.elevated;Oe.place="inside",Le&&!de&&(Oe.insertUntil=pt+.24/fe.speed,Oe.insertFrom=fe.g.book?D.front.value<-90?null:"side":"top",Oe.insertFrom||(Oe.insertUntil=0),D.receiveUntil=Oe.insertUntil?Oe.insertUntil+.14/fe.speed:0),Oe.elevated=!1,me(),fe.onItemDrop?.(fe.entries[W.index],W.index,!0);return}let Ge=W.clip??ne(),M=fe.g.docW*W.scale/2,E=fe.g.docH*W.scale/2,Z=D.deskX+W.grabX+ta(Ht,-2400,2400)*.09,U=D.deskY+W.grabY+ta(ce,-2400,2400)*.09;Oe.place="out",Oe.elevated=!0;let Y=8*fe.g.scale,_e=M*1.08+Y,Fe=E*1.08+Y;Oe.outX=ta(Z,Ge.left+_e,Math.max(Ge.left+_e,Ge.right-_e)),Oe.outY=ta(U,Ge.top+Fe,Math.max(Ge.top+Fe,Ge.bottom-Fe)),Oe.outR=ta(Oe.r.value*.5+ta(Ht,-2400,2400)*.003+NP[W.index%6]*.6,-12,12),Oe.outS=W.scale,D.dropCount+=1,Oe.outOrder=D.dropCount,me(),fe.onItemDrop?.(fe.entries[W.index],W.index,!1)},nt=W=>{let Q=D.drag;if(Q&&W.pointerId===Q.id){let[Ht,ce]=ve(W.clientX,W.clientY);D.deskX=Ht,D.deskY=ce;let Ge=performance.now();for(Q.samples.push([Ge,Ht,ce]);Q.samples.length>2&&Ge-Q.samples[0][0]>100;)Q.samples.shift();if(!Q.active){let M=W.pointerType==="touch"?20:6;Math.hypot(W.clientX-Q.clientX,W.clientY-Q.clientY)>M&&ze(Q)}Q.active&&pn(),ba()}if(W.pointerType==="touch")return;let fe=V.getBoundingClientRect();D.pointerX=ta((W.clientX-fe.left)/fe.width*2-1,-1.5,1.5),D.pointerY=ta((W.clientY-fe.top)/fe.height*2-1,-1.5,1.5);let Oe=W.target.closest?.("[data-folder-item]"),pt=Oe&&V.contains(Oe)?Number(Oe.getAttribute("data-folder-item")):-1;if(D.hoveredItem=pt,Oe&&pt>=0&&!D.drag?.active){let Ht=Oe.getBoundingClientRect(),ce=D.items[pt];ce&&(ce.localX=ta((W.clientX-Ht.left)/Ht.width*2-1,-1,1),ce.localY=ta((W.clientY-Ht.top)/Ht.height*2-1,-1,1))}D.hovered||(D.hovered=!0,q.current.openOn==="hover"&&R.current(!0)),ba()},Ct=W=>{W.pointerType==="touch"||D.drag?.active||(D.hovered=!1,D.pressed=!1,D.hoveredItem=-1,q.current.openOn==="hover"&&R.current(!1),ba())},kt=W=>{if(W.button>0||W.target.closest?.('a, button, [role="button"]:not([data-folder-item])'))return;D.suppressClick=!1;let Q=W.target.closest?.("[data-folder-item]");if(Q&&V.contains(Q)&&q.current.draggable){let[fe,Oe]=ve(W.clientX,W.clientY);D.deskX=fe,D.deskY=Oe,D.drag={index:Number(Q.getAttribute("data-folder-item")),id:W.pointerId,clientX:W.clientX,clientY:W.clientY,downX:fe,downY:Oe,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),fe,Oe]]};try{Q.setPointerCapture(W.pointerId)}catch{D.drag.id=W.pointerId}}else D.pressed=!0;ba()},ca=W=>{D.pressed=!1;let Q=D.drag;Q&&W.pointerId===Q.id&&(D.drag=null,Q.active&&rt(Q,W.type==="pointercancel")),ba()},Pa=W=>{if(V.contains(W.target))return;let Q=q.current;D.focus>=0&&(D.focus=-1,ba()),Q.open&&Q.closeOnOutsideClick&&R.current(!1)},Nt=W=>{if(W.key!=="Escape")return;if(D.focus>=0){D.focus=-1,ba();return}let Q=q.current;Q.open&&Q.closeOnOutsideClick&&R.current(!1)};V.addEventListener("pointermove",nt),V.addEventListener("pointerleave",Ct),V.addEventListener("pointerdown",kt),window.addEventListener("pointerup",ca),window.addEventListener("pointercancel",ca),document.addEventListener("pointerdown",Pa),document.addEventListener("keydown",Nt),document.fonts?.ready.then(dn);let ft=null;return q.current.intro&&!de&&(D.intro.phase="wait",V.style.opacity="0",typeof IntersectionObserver>"u"?Dn():(ft=new IntersectionObserver(W=>{W.some(Q=>Q.isIntersecting)&&(ft?.disconnect(),Dn())},{threshold:.2}),ft.observe(V))),De.current={wake:ba,invalidate:dn,consumeClick:()=>D.suppressClick?(D.suppressClick=!1,!0):!1,interactive:W=>q.current.open||D.items[W]?.place==="out"||D.focus===W,select:W=>{let Q=q.current;Q.zoomOnClick&&(D.focus=D.focus===W?-1:W),Q.onItemClick?.(Q.entries[W],W),ba()},blur:()=>D.focus<0?!1:(D.focus=-1,ba(),!0)},ba(),()=>{cancelAnimationFrame(D.raf),V.removeEventListener("pointermove",nt),V.removeEventListener("pointerleave",Ct),V.removeEventListener("pointerdown",kt),window.removeEventListener("pointerup",ca),window.removeEventListener("pointercancel",ca),document.removeEventListener("pointerdown",Pa),document.removeEventListener("keydown",Nt),ft?.disconnect(),De.current=null}},[]),(0,je.useEffect)(()=>{if(!le)return;let V=G.current;if(!V)return;let de=KP(V);if(!de)return;be.current=de,Me(!0);let Te=D=>{D.preventDefault(),be.current=null,Me(!1)};return V.addEventListener("webglcontextlost",Te),De.current?.invalidate(),()=>{V.removeEventListener("webglcontextlost",Te),de.dispose(),be.current===de&&(be.current=null),Me(!1)}},[le]),(0,je.useEffect)(()=>{De.current?.wake()});let re=()=>{De.current?.blur()||c!=="hover"&&Be(!Qe)},ye=(V,de)=>{if(V.target.closest?.('a, button, [role="button"]:not([data-folder-item])'))return;V.stopPropagation();let Te=De.current;Te&&(Qe||Be(!0),Te.select(de))},xe={"--folder-rgb":it.join(", "),"--folder-base":Pr(it),"--folder-front-top":Pr(Ds(it,[255,255,255],.12)),"--folder-front-bottom":Pr(Ds(it,[0,0,0],.06)),"--folder-inside-top":F,"--folder-inside-bottom":N,"--folder-tab-ink":VP(_)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":Pr(tt),"--folder-paper-ink":Pr(Ds(tt,[0,0,0],.11)),"--folder-paper-ink-strong":Pr(Ds(tt,[0,0,0],.28)),"--folder-paper-text":Pr(Ds(tt,[0,0,0],.72)),"--folder-w":`${Ce.w}px`,"--folder-h":`${Ce.h}px`,"--folder-tab-h":`${Ce.tabH}px`,"--folder-front-y":`${Ce.frontTop}px`,"--folder-front-h":`${Ce.frontH}px`,"--folder-r":`${Ce.r}px`,"--folder-front-radius":$?`0 ${Ce.r}px ${Ce.r}px 0`:`${Ce.r}px`,"--folder-doc-w":`${Ce.docW}px`,"--folder-doc-h":`${Ce.docH}px`,"--folder-frost":`${(1.5+ta(T,0,1)*10)*ue}px`,"--folder-depth":`${q.current.depth}px`,"--folder-scale":ue,...L},j=sb(Ce);return je.default.createElement("div",{ref:z,className:`folder-root${w?` ${w}`:""}`,"data-mode":$?"book":"flap","data-variant":o,"data-theme":A==="light"?"light":"dark","data-open":Qe?"":void 0,"data-gl":le&&Ke?"":void 0,"data-draggable":S?"":void 0,style:xe},je.default.createElement("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":Qe,"aria-label":e?`${e} folder`:"Folder",onClick:re,onKeyDown:V=>{V.target===V.currentTarget&&(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),re())}},je.default.createElement("span",{ref:ae,className:"folder-layer folder-ground","aria-hidden":"true"}),$&&je.default.createElement("span",{ref:J,className:"folder-layer folder-cast","aria-hidden":"true"}),je.default.createElement("div",{ref:B,className:"folder-layer folder-back","aria-hidden":"true"},je.default.createElement("div",{className:"folder-back-fill",style:{clipPath:`path('${j}')`}},$&&je.default.createElement("span",{className:"folder-gutter"})),je.default.createElement("svg",{className:"folder-back-rim",width:Ce.w,height:Xe,viewBox:`0 0 ${Ce.w} ${Xe}`},je.default.createElement("path",{className:"folder-focus",d:j})),e&&je.default.createElement("span",{className:"folder-tab-text",style:{left:Ce.tabX,width:Ce.tabW}},e)),Ie.map((V,de)=>{let Te=Qe||te.includes(de);return je.default.createElement("div",{key:(0,je.isValidElement)(V)&&V.key!=null?V.key:de,ref:D=>{K.current[de]=D},className:"folder-layer folder-item","data-folder-item":de,role:Te?"button":void 0,tabIndex:Te?0:-1,onClick:D=>ye(D,de),onKeyDown:D=>{!Te||D.key!=="Enter"&&D.key!==" "||(D.preventDefault(),D.stopPropagation(),De.current?.select(de))}},eB(V))}),$&&je.default.createElement("span",{ref:se,className:"folder-layer folder-shade","aria-hidden":"true"}),je.default.createElement("div",{ref:k,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true"},je.default.createElement("div",{className:"folder-face folder-face-outer"}),$&&je.default.createElement("div",{className:"folder-face folder-face-inner"},je.default.createElement("span",{className:"folder-inner-gutter"}))),le&&je.default.createElement("canvas",{ref:G,className:"folder-glass","aria-hidden":"true",style:{left:Ne.x,top:Ne.y,width:Ne.width,height:Ne.height}})),e&&je.default.createElement("span",{ref:oe,className:"folder-tab-text folder-measure","aria-hidden":"true"},e))},ib=oB;var lF=[{id:"microsoft-mr",logo:"assets/logos/microsoft.png",badge:"Microsoft",badgeClass:"microsoft",title:"Introduction to Mixed Reality",issuer:"Microsoft Learn",date:"Feb 2025",credId:"ID: C2558DD477EF1EBB",skills:["Mixed Reality","Spatial Anchors","HoloLens","Perception APIs"],shortDesc:"Foundational concepts in Mixed Reality, spatial mapping, perception APIs & immersive experiences.",description:"Foundational concepts in Mixed Reality, perception APIs, spatial mapping, and immersive experiences.",pdfUrl:"assets/certificates/Introduction to mixed reality - Microsoft.pdf",verifyUrl:"https://learn.microsoft.com/api/achievements/share/en-us/SaravanaPrakashR-4947/N29VQVPF?sharingId=C2558DD477EF1EBB",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/2036338817/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-101",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude 101",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: uuy8y6ghve9v",skills:["Anthropic Claude","Prompt Engineering","AI Automation"],shortDesc:"Foundational knowledge in AI assistants, prompt engineering & automating tasks with Claude.",description:"Completed the Claude 101 certification, gaining foundational knowledge in working with AI assistants and prompt engineering. Learned how to effectively interact with Claude to generate content, analyze information, and automate tasks using natural language.",pdfUrl:"assets/certificates/certificate-uuy8y6ghve9v-1773051032.pdf",verifyUrl:"http://verify.skilljar.com/c/uuy8y6ghve9v",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1377263598/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"claude-code",logo:"assets/logos/anthropic.png",badge:"Anthropic",badgeClass:"anthropic",title:"Claude Code in Action",issuer:"Anthropic",date:"Mar 2026",credId:"Cert: 7bdj5ooecz23",skills:["Anthropic Claude","AI Coding Assistants","Agentic Workflows"],shortDesc:"Transforming software engineering productivity with AI coding assistants & agentic workflows.",description:"Excited to see how AI coding assistants are transforming software development, automation, and engineering productivity.",pdfUrl:"assets/certificates/Claude Code in Action.pdf",verifyUrl:"http://verify.skilljar.com/c/7bdj5ooecz23",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1119111007/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"chatgpt-how-it-works",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Understanding ChatGPT: How It Works",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: qmp4Jz3om1b",skills:["Generative AI","NLP","Transformers","ChatGPT"],shortDesc:"Foundational architecture of transformer models, token prediction, NLP & generative AI.",description:"Completed Understanding ChatGPT: How It Works, gaining foundational knowledge of how generative AI models process language, generate responses, and assist in various tasks using natural language processing.",pdfUrl:"assets/certificates/Understanding ChatGPT - How It Works.pdf",verifyUrl:"https://simpli-web.app.link/e/qmp4Jz3om1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1363912282/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"},{id:"intro-prompt-eng",logo:"assets/logos/simplilearn-skillup.png",badge:"Simplilearn",badgeClass:"simplilearn",title:"Introduction to Prompt Engineering",issuer:"Simplilearn",date:"Mar 2026",credId:"Cert: HTn2dmSim1b",skills:["Prompt Engineering","Few-Shot Steering","Instruction Tuning"],shortDesc:"Designing effective prompts, instruction optimization, structuring & response steering.",description:"Successfully completed the Introduction to Prompt Engineering certification, gaining foundational knowledge in designing effective prompts for AI systems. The program covered prompt structuring, instruction optimization, and techniques for improving AI-generated responses across various use cases.",pdfUrl:"assets/certificates/Introduction to Prompt Engineering certification.pdf",verifyUrl:"https://simpli-web.app.link/e/HTn2dmSim1b",linkedinUrl:"https://www.linkedin.com/in/srvnsp/overlay/Certifications/1358602910/treasury/?profileId=ACoAABdO7jQBKvvWP3vs7P6dPJzcnJ19rfJ2d0w"}];function cF(){let[t,e]=(0,st.useState)(0),[a,o]=(0,st.useState)(!1),n=lF.map((s,i)=>({title:s.title,content:st.default.createElement("div",{className:"cert-doc-card"},st.default.createElement("div",{className:"cert-doc-header"},st.default.createElement("div",{className:"cert-doc-logo-box"},st.default.createElement("img",{src:s.logo,alt:s.issuer,className:"cert-doc-logo"})),st.default.createElement("span",{className:"cert-doc-date-badge"},s.date)),st.default.createElement("div",{className:"cert-doc-title"},s.title),st.default.createElement("div",{className:"cert-doc-issuer"},s.issuer),st.default.createElement("div",{className:"cert-doc-desc"},s.shortDesc||s.description),st.default.createElement("div",{className:"cert-doc-id"},s.credId),st.default.createElement("div",{className:"cert-doc-footer"},st.default.createElement("a",{href:s.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-doc-link",onPointerDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),window.open(s.verifyUrl,"_blank","noopener,noreferrer")},title:"Verify credential online"},st.default.createElement("span",null,"Verify \u2197")),s.pdfUrl&&st.default.createElement("a",{href:encodeURI(s.pdfUrl),target:"_blank",rel:"noopener noreferrer",className:"cert-doc-pdf-link",onPointerDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),window.open(encodeURI(s.pdfUrl),"_blank","noopener,noreferrer")},title:"View PDF certificate"},st.default.createElement("span",null,"PDF \u{1F4C4}"))))})),r=lF[t];return st.default.createElement("div",{className:"cert-interactive-container"},st.default.createElement("div",{className:"cert-folder-column"},st.default.createElement("div",{className:"cert-folder-hint"},st.default.createElement("span",null,a?"Click card to zoom \u2022 Drag to arrange":"Click folder to open \u2022 Drag or click cards")),st.default.createElement(ib,{label:"Licenses & Certs",items:n,mode:"flap",variant:"glass",color:"#00f5ff",tabPosition:"right",layout:"spread",size:1.25,theme:"dark",defaultOpen:!0,zoomOnClick:!0,focusScale:2.15,draggable:!0,peek:!0,onOpenChange:s=>o(s),onItemClick:(s,i)=>e(i)})),st.default.createElement("div",{className:"cert-details-column glass"},st.default.createElement("div",{className:"cert-details-header"},st.default.createElement("div",{className:"cert-details-logo-badge"},st.default.createElement("img",{src:r.logo,alt:r.issuer,className:"cert-details-logo-img"})),st.default.createElement("div",{className:"cert-details-date-pill"},st.default.createElement("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},st.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),st.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),st.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),st.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),st.default.createElement("span",null,r.date))),st.default.createElement("h3",{className:"cert-details-title"},r.title),st.default.createElement("p",{className:"cert-details-issuer"},"Issued by ",r.issuer," \u2022 ",st.default.createElement("span",{className:"cert-details-cred-id"},r.credId)),st.default.createElement("p",{className:"cert-details-desc"},r.description),st.default.createElement("div",{className:"cert-details-skills"},r.skills.map((s,i)=>st.default.createElement("span",{key:i,className:"cert-skill-tag"},"#",s))),st.default.createElement("div",{className:"cert-details-actions"},st.default.createElement("a",{href:r.verifyUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-verify"},st.default.createElement("span",null,"Show Credential"),st.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},st.default.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),st.default.createElement("polyline",{points:"15 3 21 3 21 9"}),st.default.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))),r.pdfUrl&&st.default.createElement("a",{href:encodeURI(r.pdfUrl),target:"_blank",rel:"noopener noreferrer",className:"cert-btn-pdf"},st.default.createElement("span",null,"View PDF"),st.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},st.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),st.default.createElement("polyline",{points:"14 2 14 8 20 8"}),st.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),st.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),st.default.createElement("polyline",{points:"10 9 9 9 8 9"}))),st.default.createElement("a",{href:r.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-btn-linkedin"},"LinkedIn Record")),st.default.createElement("div",{className:"cert-quick-selector"},st.default.createElement("span",{className:"cert-quick-label"},"Browse Certifications:"),st.default.createElement("div",{className:"cert-quick-pills"},lF.map((s,i)=>st.default.createElement("button",{key:s.id,className:`cert-pill ${t===i?"active":""} ${s.badgeClass}`,onClick:()=>e(i)},i+1,". ",s.title.length>25?s.title.slice(0,25)+"\u2026":s.title))))))}function Ls(t,e,a="250px"){let o=document.getElementById(t);if(!o)return;if(!("IntersectionObserver"in window)){e();return}let n=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&(n.disconnect(),e())},{rootMargin:a});n.observe(o)}function lb(){console.log("\u{1F680} initReactComponents running..."),Ls("lanyard-container",()=>Qg(["assets/id_card_front.webp","assets/id_card_back.webp","assets/hepl_lanyard.webp"]),"1000px"),Ls("lanyard-container-mmw",()=>Qg(["assets/mmw_id_front.webp","assets/mmw_id_back.webp","assets/mmw_lanyard.webp"]),"1000px"),Ls("lanyard-container",()=>{try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement($g,{frontImage:"assets/id_card_front.webp",backImage:"assets/id_card_back.webp",strapImage:"assets/hepl_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}}),Ls("lanyard-container-mmw",()=>{try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement($g,{frontImage:"assets/mmw_id_front.webp",backImage:"assets/mmw_id_back.webp",strapImage:"assets/mmw_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}}),Ls("disclaimer-gridscan-mount",()=>{try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement(W_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}}),Ls("contact-stepper-mount",()=>{try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement(tF,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}}),Ls("profile-card-mount",()=>{try{let t=document.getElementById("profile-card-mount");t&&!t.dataset.profileCardMounted&&(t.dataset.profileCardMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement(Q_,{name:"Saravana Prakash R",title:"Engineer - Immersive Tech",handle:"srvnsp",status:"Online",statusColor:"#00f5ff",contactText:"Contact Me",avatarUrl:"assets/profile_photoroom.png",miniAvatarUrl:"assets/profile_photoroom.png",iconUrl:"/assets/csharp-pattern.svg",holo:.8,glare:.5,tiltStrength:12,parallax:8,radius:20,enableTilt:!0,intro:!0,showUserInfo:!0,theme:"dark",onContactClick:()=>{let a=document.getElementById("contact");if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}})),console.log("\u2705 ProfileCard mounted successfully"))}catch(t){console.error("\u274C Failed mounting ProfileCard:",t)}}),Ls("certifications-folder-mount",()=>{try{let t=document.getElementById("certifications-folder-mount");t&&!t.dataset.folderMounted&&(t.dataset.folderMounted="true",t.innerHTML="",(0,yi.createRoot)(t).render(vi.default.createElement(cF,null)),console.log("\u2705 CertificationsFolder mounted successfully"))}catch(t){console.error("\u274C Failed mounting CertificationsFolder:",t)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",lb):lb();
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
