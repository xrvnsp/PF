var C_=Object.create;var kg=Object.defineProperty;var __=Object.getOwnPropertyDescriptor;var b_=Object.getOwnPropertyNames;var T_=Object.getPrototypeOf,A_=Object.prototype.hasOwnProperty;var w_=(t,e)=>()=>(t&&(e=t(t=0)),e);var vr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var E_=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of b_(e))!A_.call(t,n)&&n!==a&&kg(t,n,{get:()=>e[n],enumerable:!(o=__(e,n))||o.enumerable});return t};var Gn=(t,e,a)=>(a=t!=null?C_(T_(t)):{},E_(e||!t||!t.__esModule?kg(a,"default",{value:t,enumerable:!0}):a,t));var Jg=vr(it=>{"use strict";st();var Qh=Symbol.for("react.transitional.element"),R_=Symbol.for("react.portal"),D_=Symbol.for("react.fragment"),L_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),B_=Symbol.for("react.consumer"),U_=Symbol.for("react.context"),k_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),O_=Symbol.for("react.memo"),Vg=Symbol.for("react.lazy"),z_=Symbol.for("react.activity"),H_=Symbol.for("react.view_transition"),Ng=Symbol.iterator;function V_(t){return t===null||typeof t!="object"?null:(t=Ng&&t[Ng]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qg=Object.assign,Wg={};function li(t,e,a){this.props=t,this.context=e,this.refs=Wg,this.updater=a||Gg}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=li.prototype;function jh(t,e,a){this.props=t,this.context=e,this.refs=Wg,this.updater=a||Gg}var $h=jh.prototype=new Xg;$h.constructor=jh;qg($h,li.prototype);$h.isPureReactComponent=!0;var Og=Array.isArray;function Jh(){}var qt={H:null,A:null,T:null,S:null},Yg=Object.prototype.hasOwnProperty;function em(t,e,a){var o=a.ref;return{$$typeof:Qh,type:t,key:e,ref:o!==void 0?o:null,props:a}}function G_(t,e){return em(t.type,e,t.props)}function tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qh}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var zg=/\/+/g;function Kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function W_(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Jh,Jh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ii(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Qh:case R_:s=!0;break;case Vg:return s=t._init,ii(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+Kh(t,0):o,Og(n)?(a="",s!=null&&(a=s.replace(zg,"$&/")+"/"),ii(n,e,a,"",function(c){return c})):n!=null&&(tm(n)&&(n=G_(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(zg,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(Og(t))for(var l=0;l<t.length;l++)o=t[l],r=i+Kh(o,l),s+=ii(o,e,a,r,n);else if(l=V_(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+Kh(o,l++),s+=ii(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return ii(W_(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Qf(t,e,a){if(t==null)return t;var o=[],n=0;return ii(t,o,"","",function(r){return e.call(a,r,n++)}),o}function X_(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Hg=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Zg(t){var e=qt.T,a={};a.types=e!==null?e.types:null,qt.T=a;try{var o=t(),n=qt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Jh,Hg)}catch(r){Hg(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),qt.T=e}}function Kg(t){var e=qt.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else Zg(Kg.bind(null,t))}var Y_={map:Qf,forEach:function(t,e,a){Qf(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Qf(t,function(){e++}),e},toArray:function(t){return Qf(t,function(e){return e})||[]},only:function(t){if(!tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Activity=z_;it.Children=Y_;it.Component=li;it.Fragment=D_;it.Profiler=P_;it.PureComponent=jh;it.StrictMode=L_;it.Suspense=N_;it.ViewTransition=H_;it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=qt;it.__COMPILER_RUNTIME={__proto__:null,c:function(t){return qt.H.useMemoCache(t)}};it.addTransitionType=Kg;it.cache=function(t){return function(){return t.apply(null,arguments)}};it.cacheSignal=function(){return null};it.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=qg({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!Yg.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return em(t.type,n,o)};it.createContext=function(t){return t={$$typeof:U_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:B_,_context:t},t};it.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)Yg.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return em(t,r,n)};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:k_,render:t}};it.isValidElement=tm;it.lazy=function(t){return{$$typeof:Vg,_payload:{_status:-1,_result:t},_init:X_}};it.memo=function(t,e){return{$$typeof:O_,type:t,compare:e===void 0?null:e}};it.startTransition=Zg;it.unstable_useCacheRefresh=function(){return qt.H.useCacheRefresh()};it.use=function(t){return qt.H.use(t)};it.useActionState=function(t,e,a){return qt.H.useActionState(t,e,a)};it.useCallback=function(t,e){return qt.H.useCallback(t,e)};it.useContext=function(t){return qt.H.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t,e){return qt.H.useDeferredValue(t,e)};it.useEffect=function(t,e){return qt.H.useEffect(t,e)};it.useEffectEvent=function(t){return qt.H.useEffectEvent(t)};it.useId=function(){return qt.H.useId()};it.useImperativeHandle=function(t,e,a){return qt.H.useImperativeHandle(t,e,a)};it.useInsertionEffect=function(t,e){return qt.H.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return qt.H.useLayoutEffect(t,e)};it.useMemo=function(t,e){return qt.H.useMemo(t,e)};it.useOptimistic=function(t,e){return qt.H.useOptimistic(t,e)};it.useReducer=function(t,e,a){return qt.H.useReducer(t,e,a)};it.useRef=function(t){return qt.H.useRef(t)};it.useState=function(t){return qt.H.useState(t)};it.useSyncExternalStore=function(t,e,a){return qt.H.useSyncExternalStore(t,e,a)};it.useTransition=function(){return qt.H.useTransition()};it.version="19.3.0"});var jo=vr((K3,Qg)=>{"use strict";st();Qg.exports=Jg()});var Te,st=w_(()=>{Te=Gn(jo())});var iF=vr(Jt=>{"use strict";st();function rm(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<jf(n,e))t[o]=e,t[a]=n,a=o;else break e}}function In(t){return t.length===0?null:t[0]}function eu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>jf(i,a))l<n&&0>jf(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>jf(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function jf(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Jt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(jg=performance,Jt.unstable_now=function(){return jg.now()}):(am=Date,$g=am.now(),Jt.unstable_now=function(){return am.now()-$g});var jg,am,$g,qn=[],yr=[],Z_=1,Oo=null,Na=3,sm=!1,Jl=!1,Ql=!1,im=!1,aF=typeof setTimeout=="function"?setTimeout:null,oF=typeof clearTimeout=="function"?clearTimeout:null,eF=typeof setImmediate<"u"?setImmediate:null;function $f(t){for(var e=In(yr);e!==null;){if(e.callback===null)eu(yr);else if(e.startTime<=t)eu(yr),e.sortIndex=e.expirationTime,rm(qn,e);else break;e=In(yr)}}function lm(t){if(Ql=!1,$f(t),!Jl)if(In(qn)!==null)Jl=!0,fi||(fi=!0,ci());else{var e=In(yr);e!==null&&cm(lm,e.startTime-t)}}var fi=!1,jl=-1,nF=5,rF=-1;function sF(){return im?!0:!(Jt.unstable_now()-rF<nF)}function om(){if(im=!1,fi){var t=Jt.unstable_now();rF=t;var e=!0;try{e:{Jl=!1,Ql&&(Ql=!1,oF(jl),jl=-1),sm=!0;var a=Na;try{t:{for($f(t),Oo=In(qn);Oo!==null&&!(Oo.expirationTime>t&&sF());){var o=Oo.callback;if(typeof o=="function"){Oo.callback=null,Na=Oo.priorityLevel;var n=o(Oo.expirationTime<=t);if(t=Jt.unstable_now(),typeof n=="function"){Oo.callback=n,$f(t),e=!0;break t}Oo===In(qn)&&eu(qn),$f(t)}else eu(qn);Oo=In(qn)}if(Oo!==null)e=!0;else{var r=In(yr);r!==null&&cm(lm,r.startTime-t),e=!1}}break e}finally{Oo=null,Na=a,sm=!1}e=void 0}}finally{e?ci():fi=!1}}}var ci;typeof eF=="function"?ci=function(){eF(om)}:typeof MessageChannel<"u"?(nm=new MessageChannel,tF=nm.port2,nm.port1.onmessage=om,ci=function(){tF.postMessage(null)}):ci=function(){aF(om,0)};var nm,tF;function cm(t,e){jl=aF(function(){t(Jt.unstable_now())},e)}Jt.unstable_IdlePriority=5;Jt.unstable_ImmediatePriority=1;Jt.unstable_LowPriority=4;Jt.unstable_NormalPriority=3;Jt.unstable_Profiling=null;Jt.unstable_UserBlockingPriority=2;Jt.unstable_cancelCallback=function(t){t.callback=null};Jt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nF=0<t?Math.floor(1e3/t):5};Jt.unstable_getCurrentPriorityLevel=function(){return Na};Jt.unstable_next=function(t){switch(Na){case 1:case 2:case 3:var e=3;break;default:e=Na}var a=Na;Na=e;try{return t()}finally{Na=a}};Jt.unstable_requestPaint=function(){im=!0};Jt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Na;Na=t;try{return e()}finally{Na=a}};Jt.unstable_scheduleCallback=function(t,e,a){var o=Jt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Z_++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,rm(yr,t),In(qn)===null&&t===In(yr)&&(Ql?(oF(jl),jl=-1):Ql=!0,cm(lm,a-o))):(t.sortIndex=n,rm(qn,t),Jl||sm||(Jl=!0,fi||(fi=!0,ci()))),t};Jt.unstable_shouldYield=sF;Jt.unstable_wrapCallback=function(t){var e=Na;return function(){var a=Na;Na=e;try{return t.apply(this,arguments)}finally{Na=a}}}});var cF=vr((eP,lF)=>{"use strict";st();lF.exports=iF()});var dF=vr(Oa=>{"use strict";st();var K_=jo();function uF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mr(){}var Ka={d:{f:Mr,r:function(){throw Error(uF(522))},D:Mr,C:Mr,L:Mr,m:Mr,X:Mr,S:Mr,M:Mr},p:0,findDOMNode:null},J_=Symbol.for("react.portal"),Q_=Symbol.for("react.recoverable"),fF=Symbol.for("react.optimistic_key");function j_(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J_,key:o==null?null:o===fF?fF:""+o,children:t,containerInfo:e,implementation:a}}var $l=K_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function tu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Oa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ka;Oa.browser=function(t){return{$$typeof:Q_,_reason:t}};Oa.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(uF(299));return j_(t,e,null,a)};Oa.flushSync=function(t){var e=$l.T,a=Ka.p;try{if($l.T=null,Ka.p=2,t)return t()}finally{$l.T=e,Ka.p=a,Ka.d.f()}};Oa.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ka.d.C(t,e))};Oa.prefetchDNS=function(t){typeof t=="string"&&Ka.d.D(t)};Oa.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=tu(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ka.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ka.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Oa.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=tu(e.as,e.crossOrigin);Ka.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Ka.d.M(t)};Oa.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=tu(a,e.crossOrigin);Ka.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Oa.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=tu(e.as,e.crossOrigin);Ka.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Ka.d.m(t)};Oa.requestFormReset=function(t){Ka.d.r(t)};Oa.unstable_batchedUpdates=function(t,e){return t(e)};Oa.useFormState=function(t,e,a){return $l.H.useFormState(t,e,a)};Oa.useFormStatus=function(){return $l.H.useHostTransitionStatus()};Oa.version="19.3.0"});var mF=vr((nP,hF)=>{"use strict";st();function pF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pF)}catch(t){console.error(t)}}pF(),hF.exports=dF()});var tC=vr(Ud=>{"use strict";st();var ga=cF(),ev=jo(),$_=mF();function ie(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ov(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function IF(t){if(zc(t)!==t)throw Error(ie(188))}function eb(t){var e=t.alternate;if(!e){if(e=zc(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return IF(n),t;if(r===o)return IF(n),e;r=r.sibling}throw Error(ie(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(ie(189))}}if(a.alternate!==o)throw Error(ie(190))}if(a.tag!==3)throw Error(ie(188));return a.stateNode.current===a?t:e}function nv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=nv(t),e!==null)return e;t=t.sibling}return null}function po(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&po(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function Ns(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function xF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function rv(t){var e=[null,null],a=Ns(t);return a===null||sv(e,t,a.child,{foundSelf:!1}),e}function sv(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&sv(t,e,a.child,o))return!0;a=a.sibling}return!1}function xa(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ie(559))}}var xi=null,Hm=null;function tb(t,e,a){return t===a?!0:t===e?(xi=t,!0):!1}function ab(t,e,a){return t===a?(Hm=t,!1):t===e?(Hm!==null&&(xi=t),!0):!1}function gF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Vm(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var Ht=Object.assign,ob=Symbol.for("react.element"),au=Symbol.for("react.transitional.element"),sc=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),iv=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),lv=Symbol.for("react.consumer"),yn=Symbol.for("react.context"),jI=Symbol.for("react.forward_ref"),qm=Symbol.for("react.suspense"),Wm=Symbol.for("react.suspense_list"),$I=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy");Symbol.for("react.scope");var Xm=Symbol.for("react.activity"),nb=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var rb=Symbol.for("react.memo_cache_sentinel"),Ym=Symbol.for("react.view_transition"),sb=Symbol.for("react.recoverable"),FF=Symbol.iterator;function ec(t){return t===null||typeof t!="object"?null:(t=FF&&t[FF]||t["@@iterator"],typeof t=="function"?t:null)}var ib=Symbol.for("react.client.reference");function Zm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ib?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case Gm:return"Profiler";case iv:return"StrictMode";case qm:return"Suspense";case Wm:return"SuspenseList";case Xm:return"Activity";case Ym:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case sc:return"Portal";case yn:return t.displayName||"Context";case lv:return(t._context.displayName||"Context")+".Consumer";case jI:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $I:return e=t.displayName||null,e!==null?e:Zm(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return Zm(t(e))}catch{}}return null}var ic=Array.isArray,nt=ev.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=$_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_s={pending:!1,data:null,method:null,action:null},Km=[],Fi=-1;function wn(t){return{current:t}}function La(t){0>Fi||(t.current=Km[Fi],Km[Fi]=null,Fi--)}function Yt(t,e){Fi++,Km[Fi]=t.current,t.current=e}var bn=wn(null),Cc=wn(null),Ur=wn(null),Vu=wn(null);function Gu(t,e){switch(Yt(Ur,e),Yt(Cc,t),Yt(bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?LS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=LS(e),t=EM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}La(bn),Yt(bn,t)}function Oi(){La(bn),La(Cc),La(Ur)}function Jm(t){var e=t.memoizedState;e!==null&&(Ki._currentValue=e.memoizedState,Yt(Vu,t)),e=bn.current;var a=EM(e,t.type);e!==a&&(Yt(Cc,t),Yt(bn,a))}function qu(t){Cc.current===t&&(La(bn),La(Cc)),Vu.current===t&&(La(Vu),Ki._currentValue=_s)}var fm,SF;function _r(t){if(fm===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);fm=e&&e[1]||"",SF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fm+t+SF}var um=!1;function dm(t,e){if(!t||um)return"";um=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(I){var f=I}Reflect.construct(t,[],h)}else{try{h.call()}catch(I){f=I}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(I){f=I}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(I){if(I&&f&&typeof I.stack=="string")return[I.stack,f.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var u=`
`+l[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=n);break}}}finally{um=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_r(a):""}function lb(t,e){switch(t.tag){case 26:case 27:case 5:return _r(t.type);case 16:return _r("Lazy");case 13:return t.child!==e&&e!==null?_r("Suspense Fallback"):_r("Suspense");case 19:return _r("SuspenseList");case 0:case 15:return dm(t.type,!1);case 11:return dm(t.type.render,!1);case 1:return dm(t.type,!0);case 31:return _r("Activity");case 30:return _r("ViewTransition");default:return""}}function vF(t){try{var e="",a=null;do e+=lb(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qm=Object.prototype.hasOwnProperty,e0=ga.unstable_scheduleCallback,pm=ga.unstable_cancelCallback,cb=ga.unstable_shouldYield,fb=ga.unstable_requestPaint,Co=ga.unstable_now,ub=ga.unstable_getCurrentPriorityLevel,cv=ga.unstable_ImmediatePriority,fv=ga.unstable_UserBlockingPriority,Wu=ga.unstable_NormalPriority,db=ga.unstable_LowPriority,uv=ga.unstable_IdlePriority,pb=ga.log,hb=ga.unstable_setDisableYieldValue,Hc=null,_o=null;function Er(t){if(typeof pb=="function"&&hb(t),_o&&typeof _o.setStrictMode=="function")try{_o.setStrictMode(Hc,t)}catch{}}var bo=Math.clz32?Math.clz32:xb,mb=Math.log,Ib=Math.LN2;function xb(t){return t>>>=0,t===0?32:31-(mb(t)/Ib|0)|0}var ou=256,nu=262144,ru=4194304;function Ss(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xd(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Ss(o):(s&=i,s!==0?n=Ss(s):a||(a=i&~t,a!==0&&(n=Ss(a))))):(i=o&~r,i!==0?n=Ss(i):s!==0?n=Ss(s):a||(a=o&~t,a!==0&&(n=Ss(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function Vc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function dv(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-bo(a),n=1<<o;e|=t[o],a&=~n}return e}function gb(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pv(){var t=ru;return ru<<=1,!(ru&62914560)&&(ru=4194304),t}function hm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gc(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fb(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var u=31-bo(a),h=1<<u;i[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var d=f[u];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&hv(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function hv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-bo(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function mv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-bo(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function Iv(t,e){var a=e&-e;return a=a&42?1:t0(a),a&(t.suspendedLanes|e)?0:a}function t0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function a0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function xv(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:jM(t.type))}function yF(t,e){var a=Rt.p;try{return Rt.p=t,e()}finally{Rt.p=a}}var or=Math.random().toString(36).slice(2),Ra="__reactFiber$"+or,ho="__reactProps$"+or,ji="__reactContainer$"+or,MF="__reactEvents$"+or,Sb="__reactListeners$"+or,vb="__reactHandles$"+or,CF="__reactResources$"+or,qc="__reactMarker$"+or,Xu="__reactLoad$"+or;function gd(t){delete t[Ra],delete t[ho],delete t[Sb],delete t[vb]}function Ms(t){var e;if(e=t[Ra])return e;for(var a=t.parentNode;a;){if(e=a[ji]||a[Ra]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=HS(t);t!==null;){if(a=t[Ra])return a;t=HS(t)}return e}t=a,a=t.parentNode}return null}function $i(t){if(t=t[Ra]||t[ji]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function lc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ie(33))}function wi(t){var e=t[CF];return e||(e=t[CF]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function _a(t){t[qc]=!0}function gv(t){t[Xu]=void 0}var Fv=new Set,Sv={};function Os(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(Sv[t]=e,t=0;t<e.length;t++)Fv.add(e[t])}var yb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_F={},bF={};function Mb(t){return Qm.call(bF,t)?!0:Qm.call(_F,t)?!1:yb.test(t)?bF[t]=!0:(_F[t]=!0,!1)}var At=!1;function TF(){var t=At;return At=!1,t}function Mu(t,e,a){if(Mb(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function su(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function Wn(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function So(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cb(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jm(t){if(!t._valueTracker){var e=vv(t)?"checked":"value";t._valueTracker=Cb(t,e,""+t[e])}}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=vv(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var _b=/[\n"\\]/g;function qo(t){return t.replace(_b,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function $m(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+So(e)):t.value!==""+So(e)&&(t.value=""+So(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?mm(t,So(t.value)):mm(t,So(e)):a!=null?mm(t,So(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+So(i):t.removeAttribute("name")}function Mv(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){jm(t);return}a=a!=null?""+So(a):"",e=e!=null?""+So(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),jm(t)}function mm(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ei(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+So(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Cv(t,e,a){if(e!=null&&(e=""+So(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+So(a):""}function _v(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(ie(92));if(ic(o)){if(1<o.length)throw Error(ie(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=So(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),jm(t)}function Hi(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var bb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function AF(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||bb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function bv(t,e,a){if(e!=null&&typeof e!="object")throw Error(ie(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",At=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(AF(t,n,o),At=!0)}else for(var r in e)e.hasOwnProperty(r)&&AF(t,r,e[r])}function o0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ab=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cu(t){return Ab.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Mn(){}var eI=null;function n0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Si=null,Ri=null;function wF(t){var e=$i(t);if(e&&(t=e.stateNode)){var a=t[ho]||null;e:switch(t=e.stateNode,e.type){case"input":if($m(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qo(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[ho]||null;if(!n)throw Error(ie(90));$m(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&yv(o)}break e;case"textarea":Cv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Ei(t,!!a.multiple,e,!1)}}}var Im=!1;function Tv(t,e,a){if(Im)return t(e,a);Im=!0;try{var o=t(e);return o}finally{if(Im=!1,(Si!==null||Ri!==null)&&(Dd(),Si&&(e=Si,t=Ri,Ri=Si=null,wF(e),t)))for(e=0;e<t.length;e++)wF(t[e])}}function _c(t,e){var a=t.stateNode;if(a===null)return null;var o=a[ho]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ie(231,e,typeof a));return a}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tI=!1;if(Qn)try{ui={},Object.defineProperty(ui,"passive",{get:function(){tI=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{tI=!1}var ui,Rr=null,r0=null,_u=null;function Av(){if(_u)return _u;var t,e=r0,a=e.length,o,n="value"in Rr?Rr.value:Rr.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return _u=n.slice(t,1<o?1-o:void 0)}function bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function EF(){return!1}function $a(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?iu:EF,this.isPropagationStopped=EF,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=$a(Qr),Wc=Ht({},Qr,{view:0,detail:0}),wb=$a(Wc),xm,gm,tc,Sd=Ht({},Wc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:s0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tc&&(tc&&t.type==="mousemove"?(xm=t.screenX-tc.screenX,gm=t.screenY-tc.screenY):gm=xm=0,tc=t),xm)},movementY:function(t){return"movementY"in t?t.movementY:gm}}),RF=$a(Sd),Eb=Ht({},Sd,{dataTransfer:0}),Rb=$a(Eb),Db=Ht({},Wc,{relatedTarget:0}),Fm=$a(Db),Lb=Ht({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pb=$a(Lb),Bb=Ht({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ub=$a(Bb),kb=Ht({},Qr,{data:0}),DF=$a(kb),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zb[t])?!!e[t]:!1}function s0(){return Hb}var Vb=Ht({},Wc,{key:function(t){if(t.key){var e=Nb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ob[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:s0,charCode:function(t){return t.type==="keypress"?bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gb=$a(Vb),qb=Ht({},Sd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),LF=$a(qb),Wb=Ht({},Qr,{submitter:0}),Xb=$a(Wb),Yb=Ht({},Wc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:s0}),Zb=$a(Yb),Kb=Ht({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jb=$a(Kb),Qb=Ht({},Sd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=$a(Qb),$b=Ht({},Qr,{newState:0,oldState:0,source:0}),eT=$a($b),tT=[9,13,27,32],i0=Qn&&"CompositionEvent"in window,uc=null;Qn&&"documentMode"in document&&(uc=document.documentMode);var aT=Qn&&"TextEvent"in window&&!uc,wv=Qn&&(!i0||uc&&8<uc&&11>=uc),PF=" ",BF=!1;function Ev(t,e){switch(t){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function oT(t,e){switch(t){case"compositionend":return Rv(e);case"keypress":return e.which!==32?null:(BF=!0,PF);case"textInput":return t=e.data,t===PF&&BF?null:t;default:return null}}function nT(t,e){if(vi)return t==="compositionend"||!i0&&Ev(t,e)?(t=Av(),_u=r0=Rr=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wv&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function UF(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function Dv(t,e,a,o){Si?Ri?Ri.push(o):Ri=[o]:Si=o,e=hd(e,"onChange"),0<e.length&&(a=new Fd("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var dc=null,bc=null;function sT(t){TM(t,0)}function vd(t){var e=lc(t);if(yv(e))return t}function kF(t,e){if(t==="change")return e}var Lv=!1;Qn&&(Qn?(cu="oninput"in document,cu||(Sm=document.createElement("div"),Sm.setAttribute("oninput","return;"),cu=typeof Sm.oninput=="function"),lu=cu):lu=!1,Lv=lu&&(!document.documentMode||9<document.documentMode));var lu,cu,Sm;function NF(){dc&&(dc.detachEvent("onpropertychange",Pv),bc=dc=null)}function Pv(t){if(t.propertyName==="value"&&vd(bc)){var e=[];Dv(e,bc,t,n0(t)),Tv(sT,e)}}function iT(t,e,a){t==="focusin"?(NF(),dc=e,bc=a,dc.attachEvent("onpropertychange",Pv)):t==="focusout"&&NF()}function lT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vd(bc)}function cT(t,e){if(t==="click")return vd(e)}function fT(t,e){if(t==="input"||t==="change")return vd(e)}function uT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ao=typeof Object.is=="function"?Object.is:uT;function Tc(t,e){if(Ao(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Qm.call(e,n)||!Ao(t[n],e[n]))return!1}return!0}function aI(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function OF(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zF(t,e){var a=OF(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=OF(a)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=aI(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=aI(t.document)}return e}function l0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var dT=Qn&&"documentMode"in document&&11>=document.documentMode,yi=null,oI=null,pc=null,nI=!1;function HF(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nI||yi==null||yi!==aI(o)||(o=yi,"selectionStart"in o&&l0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),pc&&Tc(pc,o)||(pc=o,o=hd(oI,"onSelect"),0<o.length&&(e=new Fd("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=yi)))}function gs(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Mi={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},vm={},kv={};Qn&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function zs(t){if(vm[t])return vm[t];if(!Mi[t])return t;var e=Mi[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in kv)return vm[t]=e[a];return t}var Nv=zs("animationend"),Ov=zs("animationiteration"),zv=zs("animationstart"),pT=zs("transitionrun"),hT=zs("transitionstart"),mT=zs("transitioncancel"),Hv=zs("transitionend"),Vv=new Map,rI="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rI.push("scrollEnd");function nn(t,e){Vv.set(t,e),Os(e,[t])}var IT=0;function jn(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=on.identifierPrefix;var a=IT++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function VF(t){if(t==null||typeof t=="string")return t;var e=null,a=Ni;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function nr(t,e){return t=VF(t),e=VF(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ho=[],Ci=0,c0=0;function yd(){for(var t=Ci,e=c0=Ci=0;e<t;){var a=Ho[e];Ho[e++]=null;var o=Ho[e];Ho[e++]=null;var n=Ho[e];Ho[e++]=null;var r=Ho[e];if(Ho[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&Gv(a,n,r)}}function Md(t,e,a,o){Ho[Ci++]=t,Ho[Ci++]=e,Ho[Ci++]=a,Ho[Ci++]=o,c0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function f0(t,e,a,o){return Md(t,e,a,o),Zu(t)}function Hs(t,e){return Md(t,null,null,e),Zu(t)}function Gv(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-bo(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function Zu(t){if(50<Mc)throw Mc=0,Uu=null,Error(ie(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var _i={};function xT(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fo(t,e,a,o){return new xT(t,e,a,o)}function u0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kn(t,e){var a=t.alternate;return a===null?(a=fo(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qv(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Tu(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")u0(o)&&(s=1);else if(typeof o=="string")s=GA(t,a,bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case Xm:return t=fo(31,a,e,n),t.elementType=Xm,t.lanes=r,t;case gi:return bs(a.children,n,r,e);case iv:s=8,n|=24;break;case Gm:return t=fo(12,a,e,n|2),t.elementType=Gm,t.lanes=r,t;case qm:return t=fo(13,a,e,n),t.elementType=qm,t.lanes=r,t;case Wm:return t=fo(19,a,e,n),t.elementType=Wm,t.lanes=r,t;case nb:case Ym:return t=n|32,t=fo(30,a,e,t),t.elementType=Ym,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case yn:s=10;break e;case lv:s=9;break e;case jI:s=11;break e;case $I:s=14;break e;case Tr:s=16,o=null;break e}s=29,a=Error(ie(130,t===null?"null":typeof t,"")),o=null}return e=fo(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function bs(t,e,a,o){return t=fo(7,t,o,e),t.lanes=a,t}function ym(t,e,a){return t=fo(6,t,null,e),t.lanes=a,t}function Wv(t){var e=fo(18,null,null,0);return e.stateNode=t,e}function Mm(t,e,a){return e=fo(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var GF=new WeakMap;function Wo(t,e){if(typeof t=="object"&&t!==null){var a=GF.get(t);return a!==void 0?a:(e={value:t,source:e,stack:vF(e)},GF.set(t,e),e)}return{value:t,source:e,stack:vF(e)}}var bi=[],Ti=0,Ku=null,Ac=0,Vo=[],Go=0,Xr=null,Cn=1,_n="";function Yn(t,e){bi[Ti++]=Ac,bi[Ti++]=Ku,Ku=t,Ac=e}function Xv(t,e,a){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=Xr,Xr=t;var o=Cn;t=_n;var n=32-bo(o)-1;o&=~(1<<n),a+=1;var r=32-bo(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Cn=1<<32-bo(e)+n|a<<n|o,_n=r+t}else Cn=1<<r|a<<n|o,_n=t}function Cd(t){t.return!==null&&(Yn(t,1),Xv(t,1,0))}function d0(t){for(;t===Ku;)Ku=bi[--Ti],bi[Ti]=null,Ac=bi[--Ti],bi[Ti]=null;for(;t===Xr;)Xr=Vo[--Go],Vo[Go]=null,_n=Vo[--Go],Vo[Go]=null,Cn=Vo[--Go],Vo[Go]=null}function Yv(t,e){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=Xr,Cn=e.id,_n=e.overflow,Xr=t}var ba=null,Xt=null,It=!1,kr=null,Xo=!1,sI=Error(ie(519));function Yr(t){var e=Error(ie(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wc(Wo(e,t)),sI}function qF(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Ra]=t,e[ho]=o,a){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(a=0;a<Lc.length;a++)gt(Lc[a],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),Mv(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),_v(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||wM(e.textContent,a)?(o.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),o.onScroll!=null&&gt("scroll",e),o.onScrollEnd!=null&&gt("scrollend",e),o.onClick!=null&&(e.onclick=Mn),e=!0):e=!1,e||Yr(t,!0)}function Ju(t){for(ba=t.return;ba;)switch(ba.tag){case 5:case 31:case 13:Xo=!1;return;case 27:case 3:Xo=!0;return;default:ba=ba.return}}function di(t){if(t!==ba)return!1;if(!It)return Ju(t),It=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qI(t.type,t.memoizedProps)),a=!a),a&&Xt&&Yr(t),Ju(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));Xt=zS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));Xt=zS(t)}else e===27?(e=Xt,jr(t.type)?(t=ZI,ZI=null,Xt=t):Xt=e):Xt=ba?Yo(t.stateNode.nextSibling):null;return!0}function Es(){Xt=ba=null,It=!1}function Cm(){var t=kr;return t!==null&&(lo===null?lo=t:lo.push.apply(lo,t),kr=null),t}function wc(t){kr===null?kr=[t]:kr.push(t)}var iI=wn(null),Vs=null,Zn=null;function Dr(t,e,a){Yt(iI,e._currentValue),e._currentValue=a}function Jn(t){t._currentValue=iI.current,La(iI)}function Au(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function lI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Au(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(ie(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Au(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Au(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Rs(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(ie(387));if(s=s.memoizedProps,s!==null){var i=n.type;Ao(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===Vu.current){if(s=n.alternate,s===null)throw Error(ie(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Ki):t=[Ki])}n=n.return}return t!==null&&lI(e,t,a,o),e.flags|=262144,t!==null}function Qu(t){for(t=t.firstContext;t!==null;){if(!Ao(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Vs=t,Zn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Da(t){return Zv(Vs,t)}function fu(t,e){return Vs===null&&Ds(t),Zv(t,e)}function Zv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Zn===null){if(t===null)throw Error(ie(308));Zn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Zn=Zn.next=e;return a}var gT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},FT=ga.unstable_scheduleCallback,ST=ga.unstable_NormalPriority,ca={$$typeof:yn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function p0(){return{controller:new gT,data:new Map,refCount:0}}function Xc(t){t.refCount--,t.refCount===0&&FT(ST,function(){t.controller.abort()})}function WF(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var cc=null;function vT(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var hc=null,cI=0,Ls=0,Di=null;function yT(t,e){if(hc===null){var a=hc=[];cI=0,Ls=H0(),Di={status:"pending",value:void 0,then:function(o){a.push(o)}}}return cI++,e.then(XF,XF),e}function XF(){if(--cI===0&&(cc=null,hc!==null)){Di!==null&&(Di.status="fulfilled");var t=hc;hc=null,Ls=0,Di=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function MT(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var YF=nt.S;nt.S=function(t,e){if(dM=Co(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&yT(t,e),cc!==null)for(var a=Xi;a!==null;)WF(a,cc),a=a.next;if(a=t.types,a!==null){for(var o=Xi;o!==null;)WF(o,a),o=o.next;if(Ls!==0){o=cc,o===null&&(o=cc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}YF!==null&&YF(t,e)};var Ts=wn(null);function h0(){var t=Ts.current;return t!==null?t:zt.pooledCache}function wu(t,e){e===null?Yt(Ts,Ts.current):Yt(Ts,e.pool)}function Kv(){var t=h0();return t===null?null:{parent:ca._currentValue,pool:t}}var el=Error(ie(460)),m0=Error(ie(474)),_d=Error(ie(542)),ju={then:function(){}};function ZF(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jv(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Mn,Mn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,JF(t),t===void 0&&!("reason"in e)?Error(ie(600)):t;default:if(typeof e.status=="string")e.then(Mn,Mn);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(ie(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,JF(t),t}throw As=e,el}}function vs(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,el):a}}var As=null;function KF(){if(As===null)throw Error(ie(459));var t=As;return As=null,t}function JF(t){if(t===el||t===_d)throw Error(ie(483))}var Li=null,Ec=0;function uu(t){var e=Ec;return Ec+=1,Li===null&&(Li=[]),Jv(Li,t,e)}function Cr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function du(t,e){throw e.$$typeof===ob?Error(ie(525)):(t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qv(t){function e(p,x){if(t){var v=p.deletions;v===null?(p.deletions=[x],p.flags|=16):v.push(x)}}function a(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function o(p){for(var x=new Map;p!==null;)p.key===null?x.set(p.index,p):x.set(p.key,p),p=p.sibling;return x}function n(p,x){return p=Kn(p,x),p.index=0,p.sibling=null,p}function r(p,x,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<x?(p.flags|=2,x):v):(p.flags|=134217730,x)):(p.flags|=1048576,x)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,x,v,F){return x===null||x.tag!==6?(x=ym(v,p.mode,F),x.return=p,x):(x=n(x,v),x.return=p,x)}function l(p,x,v,F){var C=v.type;return C===gi?(p=u(p,x,v.props.children,F,v.key),Cr(p,v),p):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tr&&vs(C)===x.type)?(x=n(x,v.props),Cr(x,v),x.return=p,x):(x=Tu(v.type,v.key,v.props,null,p.mode,F),Cr(x,v),x.return=p,x)}function c(p,x,v,F){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Mm(v,p.mode,F),x.return=p,x):(x=n(x,v.children||[]),x.return=p,x)}function u(p,x,v,F,C){return x===null||x.tag!==7?(x=bs(v,p.mode,F,C),x.return=p,x):(x=n(x,v),x.return=p,x)}function h(p,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ym(""+x,p.mode,v),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case au:return v=Tu(x.type,x.key,x.props,null,p.mode,v),Cr(v,x),v.return=p,v;case sc:return x=Mm(x,p.mode,v),x.return=p,x;case Tr:return x=vs(x),h(p,x,v)}if(ic(x)||ec(x))return x=bs(x,p.mode,v,null),x.return=p,x;if(typeof x.then=="function")return h(p,uu(x),v);if(x.$$typeof===yn)return h(p,fu(p,x),v);du(p,x)}return null}function f(p,x,v,F){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:i(p,x,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return v.key===C?l(p,x,v,F):null;case sc:return v.key===C?c(p,x,v,F):null;case Tr:return v=vs(v),f(p,x,v,F)}if(ic(v)||ec(v))return C!==null?null:u(p,x,v,F,null);if(typeof v.then=="function")return f(p,x,uu(v),F);if(v.$$typeof===yn)return f(p,x,fu(p,v),F);du(p,v)}return null}function d(p,x,v,F,C){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return p=p.get(v)||null,i(x,p,""+F,C);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case au:return p=p.get(F.key===null?v:F.key)||null,l(x,p,F,C);case sc:return p=p.get(F.key===null?v:F.key)||null,c(x,p,F,C);case Tr:return F=vs(F),d(p,x,v,F,C)}if(ic(F)||ec(F))return p=p.get(v)||null,u(x,p,F,C,null);if(typeof F.then=="function")return d(p,x,v,uu(F),C);if(F.$$typeof===yn)return d(p,x,v,fu(x,F),C);du(x,F)}return null}function I(p,x,v,F){for(var C=null,_=null,w=x,S=x=0,T=null;w!==null&&S<v.length;S++){w.index>S?(T=w,w=null):T=w.sibling;var A=f(p,w,v[S],F);if(A===null){w===null&&(w=T);break}t&&w&&A.alternate===null&&e(p,w),x=r(A,x,S),_===null?C=A:_.sibling=A,_=A,w=T}if(S===v.length)return a(p,w),It&&Yn(p,S),C;if(w===null){for(;S<v.length;S++)w=h(p,v[S],F),w!==null&&(x=r(w,x,S),_===null?C=w:_.sibling=w,_=w);return It&&Yn(p,S),C}for(w=o(w);S<v.length;S++)T=d(w,p,S,v[S],F),T!==null&&(t&&(A=T.alternate,A!==null&&w.delete(A.key===null?S:A.key)),x=r(T,x,S),_===null?C=T:_.sibling=T,_=T);return t&&w.forEach(function(D){return e(p,D)}),It&&Yn(p,S),C}function M(p,x,v,F){if(v==null)throw Error(ie(151));for(var C=null,_=null,w=x,S=x=0,T=null,A=v.next();w!==null&&!A.done;S++,A=v.next()){w.index>S?(T=w,w=null):T=w.sibling;var D=f(p,w,A.value,F);if(D===null){w===null&&(w=T);break}t&&w&&D.alternate===null&&e(p,w),x=r(D,x,S),_===null?C=D:_.sibling=D,_=D,w=T}if(A.done)return a(p,w),It&&Yn(p,S),C;if(w===null){for(;!A.done;S++,A=v.next())A=h(p,A.value,F),A!==null&&(x=r(A,x,S),_===null?C=A:_.sibling=A,_=A);return It&&Yn(p,S),C}for(w=o(w);!A.done;S++,A=v.next())A=d(w,p,S,A.value,F),A!==null&&(t&&(T=A.alternate,T!==null&&w.delete(T.key===null?S:T.key)),x=r(A,x,S),_===null?C=A:_.sibling=A,_=A);return t&&w.forEach(function(H){return e(p,H)}),It&&Yn(p,S),C}function m(p,x,v,F){if(typeof v=="object"&&v!==null&&v.type===gi&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case au:e:{for(var C=v.key;x!==null;){if(x.key===C){if(C=v.type,C===gi){if(x.tag===7){a(p,x.sibling),F=n(x,v.props.children),Cr(F,v),F.return=p,p=F;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tr&&vs(C)===x.type){a(p,x.sibling),F=n(x,v.props),Cr(F,v),F.return=p,p=F;break e}a(p,x);break}else e(p,x);x=x.sibling}v.type===gi?(F=bs(v.props.children,p.mode,F,v.key),Cr(F,v),F.return=p,p=F):(F=Tu(v.type,v.key,v.props,null,p.mode,F),Cr(F,v),F.return=p,p=F)}return s(p);case sc:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){a(p,x.sibling),F=n(x,v.children||[]),F.return=p,p=F;break e}else{a(p,x);break}else e(p,x);x=x.sibling}F=Mm(v,p.mode,F),F.return=p,p=F}return s(p);case Tr:return v=vs(v),m(p,x,v,F)}if(ic(v))return I(p,x,v,F);if(ec(v)){if(C=ec(v),typeof C!="function")throw Error(ie(150));return v=C.call(v),M(p,x,v,F)}if(typeof v.then=="function")return m(p,x,uu(v),F);if(v.$$typeof===yn)return m(p,x,fu(p,v),F);du(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,x!==null&&x.tag===6?(a(p,x.sibling),F=n(x,v),F.return=p,p=F):(a(p,x),F=ym(v,p.mode,F),F.return=p,p=F),s(p)):a(p,x)}return function(p,x,v,F){try{Ec=0;var C=m(p,x,v,F);return Li=null,C}catch(w){if(w===el||w===_d)throw w;var _=fo(29,w,null,p.mode);return _.lanes=F,_.return=p,_}finally{}}}var Ps=Qv(!0),jv=Qv(!1),Ar=!1;function I0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Nr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Or(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Et&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=Zu(t),Gv(t,null,a),e}return Md(t,o,e,a),Zu(t)}function mc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,mv(t,a)}}function _m(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var uI=!1;function Ic(){if(uI){var t=Di;if(t!==null)throw t}}function xc(t,e,a,o){uI=!1;var n=t.updateQueue;Ar=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==s&&(i===null?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,u=c=l=null,i=r;do{var f=i.lane&-536870913,d=f!==i.lane;if(d?(St&f)===f:(o&f)===f){f!==0&&f===Ls&&(uI=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var I=t,M=i;f=e;var m=a;switch(M.tag){case 1:if(I=M.payload,typeof I=="function"){h=I.call(m,h,f);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=M.payload,f=typeof I=="function"?I.call(m,h,f):I,f==null)break e;h=Ht({},h,f);break e;case 2:Ar=!0}}f=i.callback,f!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[f]:d.push(f))}else d={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,s|=f;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);u===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=u,r===null&&(n.shared.lanes=0),Jr|=s,t.lanes=s,t.memoizedState=h}}function $v(t,e){if(typeof t!="function")throw Error(ie(191,t));t.call(e)}function ey(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$v(a[t],e)}var Zr=wn(null),$u=wn(0);function QF(t,e){t=ar,Yt($u,t),Yt(Zr,e),ar=t|e.baseLanes}function dI(){Yt($u,ar),Yt(Zr,Zr.current)}function x0(){ar=$u.current,La(Zr),La($u)}var Ua=wn(null),za=null;function zr(t){var e=t.alternate;Yt(Pa,Pa.current&1),Yt(Ua,t),za===null&&(e===null||Zr.current!==null||e.memoizedState!==null)&&(za=t)}function pI(t){Yt(Pa,Pa.current),Yt(Ua,t),za===null&&(za=t)}function ty(t){t.tag===22?(Yt(Pa,Pa.current),Yt(Ua,t),za===null&&(za=t)):Hr()}function Hr(){Yt(Pa,Pa.current),Yt(Ua,Ua.current)}function vo(t){La(Ua),za===t&&(za=null),La(Pa)}var Pa=wn(0);function Rc(t,e){Yt(Ua,Ua.current),Yt(Pa,e)}function g0(t){La(Pa),La(Ua),za===t&&(za=null)}function ed(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||YI(a)||W0(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $n=0,ut=null,Nt=null,la=null,td=!1,Pi=!1,Bs=!1,ad=0,Dc=0,Bi=null,CT=0;function ta(){throw Error(ie(321))}function F0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ao(t[a],e[a]))return!1;return!0}function S0(t,e,a,o,n,r){return $n=r,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nt.H=t===null||t.memoizedState===null?Dy:Ly,Bs=!1,r=a(o,n),Bs=!1,Pi&&(r=oy(e,a,o,n)),ay(t),r}function ay(t){nt.H=od;var e=Nt!==null&&Nt.next!==null;if($n=0,la=Nt=ut=null,td=!1,Dc=0,Bi=null,e)throw Error(ie(300));t===null||fa||(t=t.dependencies,t!==null&&Qu(t)&&(fa=!0))}function oy(t,e,a,o){ut=t;var n=0;do{if(Pi&&(Bi=null),Dc=0,Pi=!1,25<=n)throw Error(ie(301));if(n+=1,la=Nt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}nt.H=DT,r=e(a,o)}while(Pi);return r}function _T(){var t=nt.H,e=t.useState()[0];return e=typeof e.then=="function"?Yc(e):e,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ut.flags|=1024),e}function v0(){var t=ad!==0;return ad=0,t}function y0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function M0(t){if(td){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}td=!1}$n=0,la=Nt=ut=null,Pi=!1,Dc=ad=0,Bi=null}function ja(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return la===null?ut.memoizedState=la=t:la=la.next=t,la}function na(){if(Nt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=la===null?ut.memoizedState:la.next;if(e!==null)la=e,Nt=t;else{if(t===null)throw ut.alternate===null?Error(ie(467)):Error(ie(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},la===null?ut.memoizedState=la=t:la=la.next=t}return la}function bd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yc(t){var e=Dc;return Dc+=1,Bi===null&&(Bi=[]),t=Jv(Bi,t,e),e=ut,(la===null?e.memoizedState:la.next)===null&&(e=e.alternate,nt.H=e===null||e.memoizedState===null?Dy:Ly),t}function Td(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yc(t);if(t.$$typeof===sb)return;if(t.$$typeof===yn)return Da(t)}throw Error(ie(438,String(t)))}function C0(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=bd(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=rb;return e.index++,a}function er(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=na();return _0(e,Nt,t)}function _0(t,e,a){var o=t.queue;if(o===null)throw Error(ie(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(St&h)===h:($n&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Ls&&(u=!0);else if(($n&f)===f){c=c.next,f===Ls&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,ut.lanes|=f,Jr|=f;h=c.action,Bs&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=f,s=r):l=l.next=f,ut.lanes|=h,Jr|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!Ao(r,t.memoizedState)&&(fa=!0,u&&(a=Di,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function bm(t){var e=na(),a=e.queue;if(a===null)throw Error(ie(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);Ao(r,e.memoizedState)||(fa=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function ny(t,e,a){var o=ut,n=na(),r=It;if(r){if(a===void 0)throw Error(ie(407));a=a()}else a=e();var s=!Ao((Nt||n).memoizedState,a);if(s&&(n.memoizedState=a,fa=!0),n=n.queue,b0(iy.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||la!==null&&(la.memoizedState.tag&1)!==0,Vi(t?9:8,{destroy:void 0},sy.bind(null,o,n,a,e),null),t){if(o.flags|=2048,zt===null)throw Error(ie(349));r||$n&127||ry(o,e,a)}return a}function ry(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=bd(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function sy(t,e,a,o){e.value=a,e.getSnapshot=o,ly(e)&&cy(t)}function iy(t,e,a){return a(function(){ly(e)&&cy(t)})}function ly(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ao(t,a)}catch{return!0}}function cy(t){var e=Hs(t,2);e!==null&&uo(e,t,2)}function hI(t){var e=ja();if(typeof t=="function"){var a=t;if(t=a(),Bs){Er(!0);try{a()}finally{Er(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},e}function fy(t,e,a,o){return t.baseState=a,_0(t,Nt,typeof o=="function"?o:er)}function bT(t,e,a,o,n){if(wd(t))throw Error(ie(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};nt.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,uy(e,r)):(r.next=a.next,e.pending=a.next=r)}}function uy(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=nt.T,s={};s.types=r!==null?r.types:null,nt.T=s;try{var i=a(n,o),l=nt.S;l!==null&&l(s,i),jF(t,e,i)}catch(c){mI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),nt.T=r}}else try{r=a(n,o),jF(t,e,r)}catch(c){mI(t,e,c)}}function jF(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$F(t,e,o)},function(o){return mI(t,e,o)}):$F(t,e,a)}function $F(t,e,a){e.status="fulfilled",e.value=a,dy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,uy(t,a)))}function mI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,dy(e),e=e.next;while(e!==o)}t.action=null}function dy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function py(t,e){return e}function eS(t,e){if(It){var a=zt.formState;if(a!==null){e:{var o=ut;if(It){if(Xt){t:{for(var n=Xt,r=Xo;n.nodeType!==8;){if(!r){n=null;break t}if(n=Yo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Xt=Yo(n.nextSibling),o=n.data==="F!";break e}}Yr(o)}o=!1}o&&(e=a[0])}}return a=ja(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:py,lastRenderedState:e},a.queue=o,a=wy.bind(null,ut,o),o.dispatch=a,o=hI(!1),r=E0.bind(null,ut,!1,o.queue),o=ja(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=bT.bind(null,ut,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function tS(t){var e=na();return hy(e,Nt,t)}function hy(t,e,a){if(e=_0(t,e,py)[0],t=Eu(er)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Yc(e)}catch(s){throw s===el?_d:s}else o=e;e=na();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,Vi(9,{destroy:void 0},TT.bind(null,n,a),null)),[o,r,t]}function TT(t,e){t.action=e}function aS(t){var e=na(),a=Nt;if(a!==null)return hy(e,a,t);na(),e=e.memoizedState,a=na();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function Vi(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=ut.updateQueue,e===null&&(e=bd(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function my(){return na().memoizedState}function Ru(t,e,a,o){var n=ja();ut.flags|=t,n.memoizedState=Vi(1|e,{destroy:void 0},a,o===void 0?null:o)}function Ad(t,e,a,o){var n=na();o=o===void 0?null:o;var r=n.memoizedState.inst;Nt!==null&&o!==null&&F0(o,Nt.memoizedState.deps)?n.memoizedState=Vi(e,r,a,o):(ut.flags|=t,n.memoizedState=Vi(1|e,r,a,o))}function oS(t,e){Ru(8390656,8,t,e)}function b0(t,e){Ad(2048,8,t,e)}function AT(t){ut.flags|=4;var e=ut.updateQueue;if(e===null)e=bd(),ut.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Iy(t){var e=na().memoizedState;return AT({ref:e,nextImpl:t}),function(){if(Et&2)throw Error(ie(440));return e.impl.apply(void 0,arguments)}}function xy(t,e){return Ad(4,2,t,e)}function gy(t,e){return Ad(4,4,t,e)}function Fy(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sy(t,e,a){a=a!=null?a.concat([t]):null,Ad(4,4,Fy.bind(null,e,t),a)}function T0(){}function vy(t,e){var a=na();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&F0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function yy(t,e){var a=na();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&F0(e,o[1]))return o[0];if(o=t(),Bs){Er(!0);try{t()}finally{Er(!1)}}return a.memoizedState=[o,e],o}function A0(t,e,a){return a===void 0||$n&1073741824&&!(St&261930)?t.memoizedState=e:(t.memoizedState=a,t=hM(),ut.lanes|=t,Jr|=t,a)}function My(t,e,a,o){return Ao(a,e)?a:Zr.current!==null?(t=A0(t,a,o),Ao(t,e)||(fa=!0),t):!($n&106)||$n&1073741824&&!(St&261930)?(fa=!0,t.memoizedState=a):(t=hM(),ut.lanes|=t,Jr|=t,e)}function Cy(t,e,a,o,n){var r=Rt.p;Rt.p=r!==0&&8>r?r:8;var s=nt.T,i={};i.types=s!==null?s.types:null,nt.T=i,E0(t,!1,e,a);try{var l=n(),c=nt.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=MT(l,o);gc(t,e,u,To(t))}else gc(t,e,o,To(t))}catch(h){gc(t,e,{then:function(){},status:"rejected",reason:h},To())}finally{Rt.p=r,s!==null&&i.types!==null&&(s.types=i.types),nt.T=s}}function wT(){}function II(t,e,a,o){if(t.tag!==5)throw Error(ie(476));var n=_y(t).queue;Cy(t,n,e,_s,a===null?wT:function(){return by(t),a(o)})}function _y(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_s,baseState:_s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:_s},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function by(t){var e=_y(t);e.next===null&&(e=t.alternate.memoizedState),gc(t,e.next.queue,{},To())}function w0(){return Da(Ki)}function Ty(){return na().memoizedState}function Ay(){return na().memoizedState}function ET(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=To();t=Nr(a);var o=Or(e,t,a);o!==null&&(uo(o,e,a),mc(o,e,a)),e={cache:p0()},t.payload=e;return}e=e.return}}function RT(t,e,a){var o=To();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wd(t)?Ey(e,a):(a=f0(t,e,a,o),a!==null&&(uo(a,t,o),Ry(a,e,o)))}function wy(t,e,a){var o=To();gc(t,e,a,o)}function gc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wd(t))Ey(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,Ao(i,s))return Md(t,e,n,0),zt===null&&yd(),!1}catch{}finally{}if(a=f0(t,e,n,o),a!==null)return uo(a,t,o),Ry(a,e,o),!0}return!1}function E0(t,e,a,o){if(o={lane:2,revertLane:H0(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},wd(t)){if(e)throw Error(ie(479))}else e=f0(t,a,o,2),e!==null&&uo(e,t,2)}function wd(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ey(t,e){Pi=td=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ry(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,mv(t,a)}}var od={readContext:Da,use:Td,useCallback:ta,useContext:ta,useEffect:ta,useImperativeHandle:ta,useLayoutEffect:ta,useInsertionEffect:ta,useMemo:ta,useReducer:ta,useRef:ta,useState:ta,useDebugValue:ta,useDeferredValue:ta,useTransition:ta,useSyncExternalStore:ta,useId:ta,useHostTransitionStatus:ta,useFormState:ta,useActionState:ta,useOptimistic:ta,useMemoCache:ta,useCacheRefresh:ta,useEffectEvent:ta},Dy={readContext:Da,use:Td,useCallback:function(t,e){return ja().memoizedState=[t,e===void 0?null:e],t},useContext:Da,useEffect:oS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ru(4194308,4,Fy.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){Ru(4,2,t,e)},useMemo:function(t,e){var a=ja();e=e===void 0?null:e;var o=t();if(Bs){Er(!0);try{t()}finally{Er(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=ja();if(a!==void 0){var n=a(e);if(Bs){Er(!0);try{a(e)}finally{Er(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=RT.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var e=ja();return t={current:t},e.memoizedState=t},useState:function(t){t=hI(t);var e=t.queue,a=wy.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:T0,useDeferredValue:function(t,e){var a=ja();return A0(a,t,e)},useTransition:function(){var t=hI(!1);return t=Cy.bind(null,ut,t.queue,!0,!1),ja().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=ut,n=ja();if(It){if(a===void 0)throw Error(ie(407));a=a()}else{if(a=e(),zt===null)throw Error(ie(349));St&127||ry(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,oS(iy.bind(null,o,r,t),[t]),o.flags|=2048,Vi(9,{destroy:void 0},sy.bind(null,o,r,a,e),null),a},useId:function(){var t=ja(),e=zt.identifierPrefix;if(It){var a=_n,o=Cn;a=(o&~(1<<32-bo(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ad++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=CT++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:w0,useFormState:eS,useActionState:eS,useOptimistic:function(t){var e=ja();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=E0.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:C0,useCacheRefresh:function(){return ja().memoizedState=ET.bind(null,ut)},useEffectEvent:function(t){var e=ja(),a={impl:t};return e.memoizedState=a,function(){if(Et&2)throw Error(ie(440));return a.impl.apply(void 0,arguments)}}},Ly={readContext:Da,use:Td,useCallback:vy,useContext:Da,useEffect:b0,useImperativeHandle:Sy,useInsertionEffect:xy,useLayoutEffect:gy,useMemo:yy,useReducer:Eu,useRef:my,useState:function(){return Eu(er)},useDebugValue:T0,useDeferredValue:function(t,e){var a=na();return My(a,Nt.memoizedState,t,e)},useTransition:function(){var t=Eu(er)[0],e=na().memoizedState;return[typeof t=="boolean"?t:Yc(t),e]},useSyncExternalStore:ny,useId:Ty,useHostTransitionStatus:w0,useFormState:tS,useActionState:tS,useOptimistic:function(t,e){var a=na();return fy(a,Nt,t,e)},useMemoCache:C0,useCacheRefresh:Ay,useEffectEvent:Iy},DT={readContext:Da,use:Td,useCallback:vy,useContext:Da,useEffect:b0,useImperativeHandle:Sy,useInsertionEffect:xy,useLayoutEffect:gy,useMemo:yy,useReducer:bm,useRef:my,useState:function(){return bm(er)},useDebugValue:T0,useDeferredValue:function(t,e){var a=na();return Nt===null?A0(a,t,e):My(a,Nt.memoizedState,t,e)},useTransition:function(){var t=bm(er)[0],e=na().memoizedState;return[typeof t=="boolean"?t:Yc(t),e]},useSyncExternalStore:ny,useId:Ty,useHostTransitionStatus:w0,useFormState:aS,useActionState:aS,useOptimistic:function(t,e){var a=na();return Nt!==null?fy(a,Nt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:C0,useCacheRefresh:Ay,useEffectEvent:Iy};function Tm(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:Ht({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=To(),n=Nr(o);n.payload=e,a!=null&&(n.callback=a),e=Or(t,n,o),e!==null&&(uo(e,t,o),mc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=To(),n=Nr(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Or(t,n,o),e!==null&&(uo(e,t,o),mc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=To(),o=Nr(a);o.tag=2,e!=null&&(o.callback=e),e=Or(t,o,a),e!==null&&(uo(e,t,a),mc(e,t,a))}};function nS(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!Tc(a,o)||!Tc(n,r):!0}function rS(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&xI.enqueueReplaceState(e,e.state,null)}function Us(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=Ht({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Py(t){Yu(t)}function By(t){console.error(t)}function Uy(t){Yu(t)}function nd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function sS(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function gI(t,e,a){return a=Nr(a),a.tag=3,a.payload={element:null},a.callback=function(){nd(t,e)},a}function ky(t){return t=Nr(t),t.tag=3,t}function Ny(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){sS(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){sS(e,a,o),typeof n!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function LT(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Rs(e,a,n,!0),a=Ua.current,a!==null){switch(a.tag){case 31:case 13:case 19:return za===null?dd():a.alternate===null&&aa===0&&(aa=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===ju?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),Pm(t,o,n)),!1;case 22:return a.flags|=65536,o===ju?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),Pm(t,o,n)),!1}throw Error(ie(435,a.tag))}return Pm(t,o,n),dd(),!1}if(It)return e=Ua.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==sI&&(t=Error(ie(422),{cause:o}),wc(Wo(t,a)))):(o!==sI&&(e=Error(ie(423),{cause:o}),wc(Wo(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=Wo(o,a),n=gI(t.stateNode,o,n),_m(t,n),aa!==4&&(aa=2)),!1;var r=Error(ie(520),{cause:o});if(r=Wo(r,a),yc===null?yc=[r]:yc.push(r),aa!==4&&(aa=2),e===null)return!0;o=Wo(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=gI(a.stateNode,o,t),_m(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ky(n),Ny(n,t,a,o),_m(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var R0=Error(ie(461)),fa=!1;function Ia(t,e,a,o){e.child=t===null?jv(e,null,a,o):Ps(e,t.child,a,o)}function iS(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return Ds(e),o=S0(t,e,a,s,r,n),i=v0(),t!==null&&!fa?(y0(t,e,n),tr(t,e,n)):(It&&i&&Cd(e),e.flags|=1,Ia(t,e,o,n),e.child)}function lS(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!u0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,Oy(t,e,r,o,n)):(t=Tu(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!L0(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Tc,a(s,o)&&t.ref===e.ref)return tr(t,e,n)}return e.flags|=1,t=Kn(r,o),t.ref=e.ref,t.return=e,e.child=t}function Oy(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(Tc(r,o)&&t.ref===e.ref)if(fa=!1,e.pendingProps=o=r,L0(t,n))t.flags&131072&&(fa=!0);else return e.lanes=t.lanes,tr(t,e,n)}return FI(t,e,a,o,n)}function zy(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return cS(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wu(e,r!==null?r.cachePool:null),r!==null?QF(e,r):dI(),ty(e);else return o=e.lanes=536870912,cS(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(wu(e,r.cachePool),QF(e,r),Hr(),e.memoizedState=null):(t!==null&&wu(e,null),dI(),Hr());return Ia(t,e,n,a),e.child}function Fc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function cS(t,e,a,o,n){var r=h0();return r=r===null?null:{parent:ca._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&wu(e,null),dI(),ty(e),t!==null&&Rs(t,e,o,!0),e.childLanes=n,null}function Du(t,e){return e=Ed({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function fS(t,e,a){return Ps(e,t.child,null,a),t=Du(e,e.pendingProps),t.flags|=2,vo(e),e.memoizedState=null,t}function PT(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(It){if(o.mode==="hidden")return t=Du(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Fc(null,t);if(pI(e),(t=Xt)?(t=zM(t,Xo),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Wv(t),a.return=e,e.child=a,ba=e,Xt=null)):t=null,t===null)throw Yr(e);return e.lanes=536870912,null}return Du(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(pI(e),n)if(e.flags&256)e.flags&=-257,e=fS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ie(558));else if(fa||Rs(t,e,a,!1),n=(a&t.childLanes)!==0,fa||n){if(Zr.current===null){if(o=zt,o!==null&&(s=Iv(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,Hs(t,s),uo(o,t,s),R0;dd()}e=fS(t,e,a)}else t=r.treeContext,Xt=Yo(s.nextSibling),ba=e,It=!0,kr=null,Xo=!1,t!==null&&Yv(e,t),e=Du(e,o),e.flags|=134221824;return e}return t=Kn(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ie(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function FI(t,e,a,o,n){return Ds(e),a=S0(t,e,a,o,void 0,n),o=v0(),t!==null&&!fa?(y0(t,e,n),tr(t,e,n)):(It&&o&&Cd(e),e.flags|=1,Ia(t,e,a,n),e.child)}function uS(t,e,a,o,n,r){return Ds(e),e.updateQueue=null,a=oy(e,o,a,n),ay(t),o=v0(),t!==null&&!fa?(y0(t,e,r),tr(t,e,r)):(It&&o&&Cd(e),e.flags|=1,Ia(t,e,a,r),e.child)}function dS(t,e,a,o,n){if(Ds(e),e.stateNode===null){var r=_i,s=a.contextType;typeof s=="object"&&s!==null&&(r=Da(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},I0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Da(s):_i,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Tm(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&xI.enqueueReplaceState(r,r.state,null),xc(e,o,r,n),Ic(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=Us(a,i);r.props=l;var c=r.context,u=a.contextType;s=_i,typeof u=="object"&&u!==null&&(s=Da(u));var h=a.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&rS(e,r,o,s),Ar=!1;var f=e.memoizedState;r.state=f,xc(e,o,r,n),Ic(),c=e.memoizedState,i||f!==c||Ar?(typeof h=="function"&&(Tm(e,a,h,o),c=e.memoizedState),(l=Ar||nS(e,a,l,o,f,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,fI(t,e),s=e.memoizedProps,u=Us(a,s),r.props=u,h=e.pendingProps,f=r.context,c=a.contextType,l=_i,typeof c=="object"&&c!==null&&(l=Da(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&rS(e,r,o,l),Ar=!1,f=e.memoizedState,r.state=f,xc(e,o,r,n),Ic();var d=e.memoizedState;s!==h||f!==d||Ar||t!==null&&t.dependencies!==null&&Qu(t.dependencies)?(typeof i=="function"&&(Tm(e,a,i,o),d=e.memoizedState),(u=Ar||nS(e,a,u,o,f,d,l)||t!==null&&t.dependencies!==null&&Qu(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,hi(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,n),e.child=Ps(e,null,a,n)):Ia(t,e,a,n),e.memoizedState=r.state,t=e.child):t=tr(t,e,n),t}function pS(t,e,a,o){return Es(),e.flags|=256,Ia(t,e,a,o),e.child}var SI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vI(t){return{baseLanes:t,cachePool:Kv()}}function yI(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Mo),t}function Hy(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Pa.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(It){if(n?zr(e):Hr(),(t=Xt)?(t=zM(t,Xo),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Wv(t),a.return=e,e.child=a,ba=e,Xt=null)):t=null,t===null)throw Yr(e);return W0(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(Hr(),n=e.mode,r=Ed({mode:"hidden",children:r},n),o=bs(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=vI(a),o.childLanes=yI(t,s,a),e.memoizedState=SI,Fc(null,o)):(zr(e),D0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return BT(t,e,r,s,o,l,i,a)}return n?(Hr(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=Kn(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=Kn(l,n):(n=bs(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,Fc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=vI(a):(r=n.cachePool,r!==null?(i=ca._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=Kv(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=yI(t,s,a),e.memoizedState=SI,Fc(t.child,o)):(zr(e),a=t.child,t=a.sibling,a=Kn(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function D0(t,e){return e=Ed({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ed(t,e){return t=fo(22,t,null,e),t.lanes=0,t}function pu(t,e,a){return Ps(e,t.child,null,a),t=D0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BT(t,e,a,o,n,r,s,i){if(a)return e.flags&256?(zr(e),e.flags&=-257,pu(t,e,i)):e.memoizedState!==null?(Hr(),e.child=t.child,e.flags|=128,null):(Hr(),r=n.fallback,s=e.mode,n=Ed({mode:"visible",children:n.children},s),r=bs(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Ps(e,t.child,null,i),n=e.child,n.memoizedState=vI(i),n.childLanes=yI(t,o,i),e.memoizedState=SI,Fc(null,n));if(zr(e),W0(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(ie(419)),n.stack="",n.digest=o,wc({value:n,source:null,stack:null})),pu(t,e,i)}if(fa||Rs(t,e,i,!1),o=(i&t.childLanes)!==0,fa||o){if(Zr.current!==null)return pu(t,e,i);if(o=zt,o!==null&&(n=Iv(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,Hs(t,n),uo(o,t,n),R0;return YI(r)||dd(),pu(t,e,i)}return YI(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Xt=Yo(r.nextSibling),ba=e,It=!0,kr=null,Xo=!1,t!==null&&Yv(e,t),e=D0(e,n.children),e.flags|=134221824,e)}function hS(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Au(t.return,e,a)}function mS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&ed(a)===null&&(e=t),t=t.sibling}return e}function hu(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function Am(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function MI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=Pa.current;if(e.flags&128)return Rc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Rc(e,s),n==="backwards"&&t!==null?(Am(t),Ia(t,e,o,a),Am(t)):Ia(t,e,o,a),o=It?Ac:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hS(t,a,e);else if(t.tag===19)hS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=mS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,Am(e)),hu(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ed(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}hu(e,!0,a,null,r,o);break;case"together":hu(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=mS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),hu(e,!1,n,a,r,o)}return e.child}function IS(t,e,a){var o=e.pendingProps;return Dr(e,e.type,o.value),Ia(t,e,o.children,a),e.child}function tr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(a&e.childLanes))if(t!==null){if(Rs(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,a=Kn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Kn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function L0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Qu(t)))}function UT(t,e,a){switch(e.tag){case 3:Gu(e,e.stateNode.containerInfo),Dr(e,ca,t.memoizedState.cache),Es();break;case 27:case 5:Jm(e);break;case 4:Gu(e,e.stateNode.containerInfo);break;case 10:Dr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,pI(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return zr(e),e.flags|=128,null;o=Rs(t,e,a,!1);var n=e.child.childLanes;return o||a&n?Hy(t,e,a):(zr(e),t=tr(t,e,a),t!==null?t.sibling:null)}zr(e);break;case 19:if(e.flags&128)return MI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(Rs(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return MI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Rc(e,Pa.current),o)break;return null;case 22:return e.lanes=0,zy(t,e,a,e.pendingProps);case 24:Dr(e,ca,t.memoizedState.cache)}return tr(t,e,a)}function Vy(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)fa=!0;else{if(!L0(t,a)&&!(e.flags&128))return fa=!1,UT(t,e,a);fa=!!(t.flags&131072)}else fa=!1,It&&e.flags&1048576&&Xv(e,Ac,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=vs(e.elementType),e.type=t,typeof t=="function")u0(t)?(o=Us(t,o),e.tag=1,e=dS(null,e,t,o,a)):(e.tag=0,e=FI(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===jI){e.tag=11,e=iS(null,e,t,o,a);break e}else if(n===$I){e.tag=14,e=lS(null,e,t,o,a);break e}else if(n===yn){e.tag=10,e.type=t,e=IS(null,e,a);break e}}throw e=Zm(t)||t,Error(ie(306,e,""))}}return e;case 0:return FI(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=Us(o,e.pendingProps),dS(t,e,o,n,a);case 3:e:{if(Gu(e,e.stateNode.containerInfo),t===null)throw Error(ie(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,fI(t,e),xc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Dr(e,ca,o),o!==r.cache&&lI(e,[ca],a,!0),Ic(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=pS(t,e,o,a);break e}else if(o!==n){n=Wo(Error(ie(424)),e),wc(n),e=pS(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xt=Yo(t.firstChild),ba=e,It=!0,kr=null,Xo=!0,a=jv(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Es(),o===n){e=tr(t,e,a);break e}Ia(t,e,o,a)}e=e.child}return e;case 26:return hi(t,e),t===null?(a=GS(e.type,null,e.pendingProps,null))?e.memoizedState=a:It||(e.stateNode=RM(e.type,e.pendingProps,Ur.current,e)):e.memoizedState=GS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jm(e),t===null&&It&&(o=e.stateNode=HM(e.type,e.pendingProps,Ur.current),ba=e,Xo=!0,n=Xt,jr(e.type)?(ZI=n,Xt=Yo(o.firstChild)):Xt=n),Ia(t,e,e.pendingProps.children,a),hi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&It&&((n=o=Xt)&&(o=AA(o,e.type,e.pendingProps,Xo),o!==null?(e.stateNode=o,ba=e,Xt=Yo(o.firstChild),Xo=!1,n=!0):n=!1),n||Yr(e)),Jm(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,qI(n,r)?o=null:s!==null&&qI(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=S0(t,e,_T,null,null,a),Ki._currentValue=n),hi(t,e),Ia(t,e,o,a),e.child;case 6:return t===null&&It&&((t=a=Xt)&&(a=wA(a,e.pendingProps,Xo),a!==null?(e.stateNode=a,ba=e,Xt=null,t=!0):t=!1),t||Yr(e)),null;case 13:return Hy(t,e,a);case 4:return Gu(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Ps(e,null,o,a):Ia(t,e,o,a),e.child;case 11:return iS(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,hi(t,e),Ia(t,e,o,a),e.child;case 8:return Ia(t,e,e.pendingProps.children,a),e.child;case 12:return Ia(t,e,e.pendingProps.children,a),e.child;case 10:return IS(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,Ds(e),n=Da(n),o=o(n),e.flags|=1,Ia(t,e,o,a),e.child;case 14:return lS(t,e,e.type,e.pendingProps,a);case 15:return Oy(t,e,e.type,e.pendingProps,a);case 19:return MI(t,e,a);case 31:return PT(t,e,a);case 22:return zy(t,e,a,e.pendingProps);case 24:return Ds(e),o=Da(ca),t===null?(n=h0(),n===null&&(n=zt,r=p0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},I0(e),Dr(e,ca,n)):(t.lanes&a&&(fI(t,e),xc(e,null,null,a),Ic()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Dr(e,ca,o)):(o=r.cache,Dr(e,ca,o),o!==n.cache&&lI(e,[ca],a,!0))),Ia(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:It&&Cd(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:hi(t,e),Ia(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(ie(156,e.tag))}function Xn(t){t.flags|=4}function wm(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?XS(e,o):XS(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(xM())t.flags|=8192;else throw As=ju,m0}else t.flags&=-16777217}function xS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!WM(e))if(xM())t.flags|=8192;else throw As=ju,m0}function mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?pv():536870912,t.lanes|=e,Gi|=e)}function ac(t,e){if(!It)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function kT(t,e,a){var o=e.pendingProps;switch(d0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return Wt(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Jn(ca),Oi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(di(e)?Xn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cm())),Wt(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(Xn(e),r!==null?(Wt(e),xS(e,r)):(Wt(e),wm(e,n,null,o,a))):r?r!==t.memoizedState?(Xn(e),Wt(e),xS(e,r)):(Wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&Xn(e),Wt(e),wm(e,n,t,o,a)),null;case 27:if(qu(e),a=Ur.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Xn(e);else{if(!o){if(e.stateNode===null)throw Error(ie(166));return Wt(e),e.subtreeFlags&=-33554433,null}t=bn.current,di(e)?qF(e,t):(t=HM(n,o,a),e.stateNode=t,Xn(e))}return Wt(e),e.subtreeFlags&=-33554433,null;case 5:if(qu(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Xn(e);else{if(!o){if(e.stateNode===null)throw Error(ie(166));return Wt(e),e.subtreeFlags&=-33554433,null}if(r=bn.current,di(e))qF(e,r);else{var s=Bc(Ur.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Ra]=e,r[ho]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Ba(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Xn(e)}}return Wt(e),e.subtreeFlags&=-33554433,wm(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&Xn(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Ur.current,di(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=ba,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Ra]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||wM(t.nodeValue,a)),t||Yr(e,!0)}else t=Bc(t).createTextNode(o),t[Ra]=e,e.stateNode=t}return Wt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=di(e),a!==null){if(t===null){if(!o)throw Error(ie(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(557));t[Ra]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),t=!1}else a=Cm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(vo(e),e):(vo(e),null);if(e.flags&128)throw Error(ie(558))}return Wt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=di(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(ie(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));n[Ra]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),n=!1}else n=Cm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(vo(e),e):(vo(e),null)}return vo(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),mu(e,e.updateQueue),Wt(e),null);case 4:return Oi(),t===null&&V0(e.stateNode.containerInfo),e.flags|=67108864,Wt(e),null;case 10:return Jn(e.type),Wt(e),null;case 19:if(g0(e),o=e.memoizedState,o===null)return Wt(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)ac(o,!1);else{if(aa!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=ed(t),r!==null){for(e.flags|=128,ac(o,!1),t=r.updateQueue,e.updateQueue=t,mu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)qv(a,t),a=a.sibling;return Rc(e,Pa.current&1|2),It&&Yn(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&Co()>fd&&(e.flags|=128,n=!0,ac(o,!1),e.lanes=4194304)}else{if(!n)if(t=ed(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mu(e,t),ac(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!It)return Wt(e),null}else 2*Co()-o.renderingStartTime>fd&&a!==536870912&&(e.flags|=128,n=!0,ac(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Co(),t.sibling=null,r=Pa.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||It?Rc(e,r):(a=r,Yt(Ua,e),Yt(Pa,a),za===null&&(za=e)),It&&Yn(e,o.treeForkCount),t}return Wt(e),null;case 22:case 23:return vo(e),x0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),a=e.updateQueue,a!==null&&mu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&La(Ts),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Jn(ca),Wt(e),null;case 25:return null;case 30:return e.flags|=33554432,Wt(e),null}throw Error(ie(156,e.tag))}function NT(t,e){switch(d0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(ca),Oi(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return qu(e),null;case 31:if(e.memoizedState!==null){if(vo(e),e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(vo(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return g0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Oi(),null;case 10:return Jn(e.type),null;case 22:case 23:return vo(e),x0(),t!==null&&La(Ts),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(ca),null;case 25:return null;default:return null}}function Gy(t,e){switch(d0(e),e.tag){case 3:Jn(ca),Oi();break;case 26:case 27:case 5:qu(e);break;case 4:Oi();break;case 31:e.memoizedState!==null&&vo(e);break;case 13:vo(e);break;case 19:g0(e);break;case 10:Jn(e.type);break;case 22:case 23:vo(e),x0(),t!==null&&La(Ts);break;case 24:Jn(ca)}}function Zc(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Ut(e,e.return,i)}}function Kr(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(u){Ut(n,l,u)}}}o=o.next}while(o!==r)}}catch(u){Ut(e,e.return,u)}}function qy(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ey(e,a)}catch(o){Ut(t,t.return,o)}}}function Wy(t,e,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ut(t,e,o)}}function Sn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=jn(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=BM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new wo(t);po(t.child,!1,bA,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Ut(t,e,i)}}function Ea(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ut(t,e,n)}else a.current=null}function rd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)OM(t.stateNode,e[a])}function gS(t){for(var e=t.return;e!==null&&(B0(e)&&OM(t.stateNode,e.stateNode),!P0(e));)e=e.return}function Sc(t){for(var e=t.return;e!==null&&(B0(e)&&TA(t.stateNode,e.stateNode),!P0(e));)e=e.return}function P0(t){return t.tag===5||t.tag===3||t.tag===27}function B0(t){return t&&t.tag===7&&t.stateNode!==null}function CI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ut(t,t.return,n)}}function Em(t,e,a){try{var o=t.stateNode;lA(o,t.type,a,e),o[ho]=e}catch(n){Ut(t,t.return,n)}}function Xy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jr(t.type)||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _I(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Mn)),rd(t,o),At=!0;else if(n!==4&&(n===27&&(rd(t,o),o=null,jr(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(_I(t,e,a,o),t=t.sibling;t!==null;)_I(t,e,a,o),t=t.sibling}function sd(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),rd(t,o),At=!0;else if(n!==4&&(n===27&&(rd(t,o),o=null,jr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(sd(t,e,a,o),t=t.sibling;t!==null;)sd(t,e,a,o),t=t.sibling}function Yy(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ba(e,o,a),e[Ra]=t,e[ho]=a}catch(r){Ut(t,t.return,r)}}var id=!1,yo=null;function FS(t){(t.tag===30||t.subtreeFlags&33554432)&&(id=!0)}var vn=null;function SS(){var t=vn;return vn=null,t}var co=0;function tl(t,e,a,o,n){return co=0,Zy(t.child,e,a,o,n)}function Zy(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=WI(s);o.push(i),i.view&&(r=!0)}else r||WI(s).view&&(r=!0);id=!0,DM(s,co===0?e:e+"_"+co,a),co++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zy(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function An(t,e){for(;t!==null;)t.tag===5?LM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||An(t.child,e)),t=t.sibling}function Lu(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Lu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ie(544));var a=e.name;e=nr(e.default,e.share),e!=="none"&&(tl(t,a,e,null,!1)||An(t.child,!1))}t=t.sibling}}function bI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=jn(o,a),r=nr(o.default,a.paired?o.share:o.enter);r!=="none"?tl(t,n,r,null,!1)?(Lu(t),a.paired||e||qi(t,o.onEnter)):An(t.child,!1):Lu(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)bI(t,e),t=t.sibling;else Lu(t)}function TI(t){if(yo!==null&&yo.size!==0){var e=yo;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=nr(a.default,a.share);if(r!=="none"&&(tl(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,qi(t,a.onShare)):An(t.child,!1)),e.delete(o),e.size===0)break}}}TI(t)}t=t.sibling}}}function AI(t){if(t.tag===30){var e=t.memoizedProps,a=jn(e,t.stateNode),o=yo!==null?yo.get(a):void 0,n=nr(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(tl(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,yo.delete(a),qi(t,e.onShare)):qi(t,e.onExit):An(t.child,!1)),yo!==null&&TI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)AI(t),t=t.sibling;else yo!==null&&TI(t)}function Ky(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=jn(e,t.stateNode);e=nr(e.default,e.update),t.flags&=-5,e!=="none"&&tl(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&Ky(t);t=t.sibling}}function wI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,An(t.child,!1))}wI(t)}t=t.sibling}}function Pu(t){if(t.tag===30)t.stateNode.paired=null,An(t.child,!1),wI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Pu(t),t=t.sibling;else wI(t)}function Jy(t){for(t=t.child;t!==null;)t.tag===30?An(t.child,!1):t.subtreeFlags&33554432&&Jy(t),t=t.sibling}function U0(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&co<r.length){var c=r[co],u=WI(l);(c.view||u.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(u.clip)h=!0;else{h=c.rect;var f=u.rect;h=h.y!==f.y||h.x!==f.x||h.height!==f.height||h.width!==f.width}h&&(t.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(t.flags|=32)}else t.flags|=32;t.flags&4&&DM(l,co===0?a:a+"_"+co,n),i&&t.flags&4||(vn===null&&(vn=[]),vn.push(l,co===0?o:o+"_"+co,e.memoizedProps)),co++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:U0(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function Qy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=jn(a,o),r=nr(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map(hA)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;co=0,n=U0(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||qi(t,a.onUpdate))}else t.subtreeFlags&33554432&&Qy(t,e);t=t.sibling}}var Ma=!1,Dt=!1,xn=!1,Dm=!1,vS=typeof WeakSet=="function"?WeakSet:Set,Ca=null,gn=!1,fc=!1,ld=!1,EI=!1;function OT(t,e,a){if(t=t.containerInfo,VI=Ji,t=Uv(t),l0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var I;f!==o||r!==0&&f.nodeType!==3||(l=i+r),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(I=f.firstChild)!==null;)d=f,f=I;for(;;){if(f===t)break t;if(d===o&&++u===r&&(l=i),d===s&&++h===n&&(c=i),(I=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=I}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(GI={focusedElem:t,selectionRange:o},Ji=!1,a=(a&335544064)===a,Ca=e,e=a?9270:1024;Ca!==null;){if(t=Ca,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&AI(o[r]);if(t.alternate===null&&t.flags&2)a&&FS(t),Iu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&AI(o),Iu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&FS(t),Iu(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,Ca=o):(a&&Ky(t),Iu(a))}}yo=null}function Iu(t){for(;Ca!==null;){var e=Ca,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=Us(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Ut(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)XI(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":XI(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=jn(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=nr(n.default,n.update),n!=="none"&&tl(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(ie(163))}if(o=e.sibling,o!==null){o.return=e.return,Ca=o;break}Ca=e.return}}function jy(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fn(t,a),o&4&&Zc(5,a);break;case 1:if(Fn(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Ut(a,a.return,s)}else{var n=Us(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ut(a,a.return,s)}}o&64&&qy(a),o&512&&Sn(a,a.return);break;case 3:if(Fn(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ey(t,e)}catch(s){Ut(a,a.return,s)}}break;case 27:e===null&&o&4&&Yy(a);case 26:case 5:Fn(t,a),e===null&&o&4&&CI(a),o&512&&Sn(a,a.return);break;case 12:Fn(t,a);break;case 31:Fn(t,a),o&4&&aM(t,a);break;case 13:Fn(t,a),o&4&&oM(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=QT.bind(null,a),EA(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){var r=e!==null&&e.memoizedState!==null||Dt;e=Ma,n=Dt,Ma=o,(Dt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),en(t,a,o)):Fn(t,a),Ma=e,Dt=n}break;case 30:Fn(t,a),o&512&&Sn(a,a.return);break;case 7:o&512&&Sn(a,a.return);default:Fn(t,a)}}function RI(t,e){for(t=t.child;t!==null;)$y(t,e),t=t.sibling}function $y(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Ut(t,t.return,l)}DI(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,At=!0}catch(l){Ut(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?kS(i,!0):kS(t.stateNode,!1)}catch(l){Ut(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&RI(t,e);break;default:RI(t,e)}}function DI(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:$y(a,o);break e;case 22:a.memoizedState===null&&DI(a,o);break e;default:DI(a,o)}}t=t.sibling}}function eM(t){var e=t.alternate;e!==null&&(t.alternate=null,eM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&gd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,io=!1;function $o(t,e,a){for(a=a.child;a!==null;)tM(t,e,a),a=a.sibling}function tM(t,e,a){if(_o&&typeof _o.onCommitFiberUnmount=="function")try{_o.onCommitFiberUnmount(Hc,a)}catch{}switch(a.tag){case 26:Dt||Ea(a,e),$o(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Dt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Ea(a,e),Sc(a);var o=Qt,n=io;jr(a.type)&&(Qt=a.stateNode,io=!1),$o(t,e,a),VM(a.stateNode,a.type,a.memoizedProps),Qt=o,io=n;break;case 5:Dt||Ea(a,e),Sc(a);case 6:if(a.tag===6&&Sc(a),o=Qt,n=io,Qt=null,$o(t,e,a),Qt=o,io=n,Qt!==null)if(io)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}else try{Qt.removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}break;case 18:Qt!==null&&(io?(t=Qt,US(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Qi(t)):US(Qt,a.stateNode));break;case 4:o=Qt,n=io,Qt=a.stateNode.containerInfo,io=!0,$o(t,e,a),Qt=o,io=n;break;case 0:case 11:case 14:case 15:Kr(2,a,e),Dt||Kr(4,a,e),$o(t,e,a);break;case 1:Dt||(Ea(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Wy(a,e,o)),$o(t,e,a);break;case 21:$o(t,e,a);break;case 22:Dt=(o=Dt)||a.memoizedState!==null,$o(t,e,a),Dt=o;break;case 30:Ea(a,e),$o(t,e,a);break;case 7:Dt||Ea(a,e),$o(t,e,a);break;default:$o(t,e,a)}}function aM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qi(t)}catch(a){Ut(e,e.return,a)}}}function oM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qi(t)}catch(a){Ut(e,e.return,a)}}function zT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new vS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new vS),e;default:throw Error(ie(435,t.tag))}}function xu(t,e){var a=zT(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=jT.bind(null,t,o);o.then(n,n)}})}function Ja(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(jr(l.type)){Qt=l.stateNode,io=!1;break e}break;case 5:Qt=l.stateNode,io=!1;break e;case 3:case 4:Qt=l.stateNode.containerInfo,io=!0;break e}l=l.return}if(Qt===null)throw Error(ie(160));tM(s,i,r),Qt=null,io=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)nM(e,t,a),e=e.sibling}var tn=null;function nM(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}Ja(e,t,a),Qa(t),n&4&&(Kr(3,t,t.return),Zc(3,t),Kr(5,t,t.return));break;case 1:Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),n&64&&Ma&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=tn,Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Ma)t.stateNode=RM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[qc]||o[Ra]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),Ba(o,e,a),o[Ra]=t,_a(o),e=o;break e;case"link":if(r=WS("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;case"meta":if(r=WS("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;default:throw Error(ie(468,e))}o[Ra]=t,_a(o),e=o}t.stateNode=e}else Ma||KI(r,t.type,t.stateNode);else t.stateNode=qS(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||Dt||e.parentNode.removeChild(e)):n.count--,a===null?Ma||KI(r,t.type,t.stateNode):qS(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Em(t,t.memoizedProps,o.memoizedProps);break;case 27:Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),o!==null&&n&4&&Em(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=xn,xn=!1,Ja(e,t,a),xn=r,Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),t.flags&32){e=t.stateNode;try{Hi(e,""),At=!0}catch(u){Ut(t,t.return,u)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Em(t,e,o!==null?o.memoizedProps:e)),n&1024&&(Dm=!0);break;case 6:if(Ja(e,t,a),Qa(t),n&4){if(t.stateNode===null)throw Error(ie(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,At=!0}catch(u){Ut(t,t.return,u)}}break;case 3:if(At=!1,Nu=null,r=tn,tn=Uc(e.containerInfo),Ja(e,t,a),tn=r,Qa(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Qi(e.containerInfo)}catch(u){Ut(t,t.return,u)}Dm&&(Dm=!1,rM(t)),At=!1;break;case 4:n=xn,xn=Ma,o=TF(),r=tn,tn=Uc(t.stateNode.containerInfo),Ja(e,t,a),Qa(t),tn=r,At&&fc&&(ld=!0),At=o,xn=n;break;case 12:Ja(e,t,a),Qa(t);break;case 31:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,xu(t,e)));break;case 13:Ja(e,t,a),Qa(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rd=Co()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,xu(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Ma,l=Dt,c=xn;Ma=i||r,xn=c||r,Dt=l||s,Ja(e,t,a),Dt=l,xn=c,Ma=i,Qa(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Ma||Dt||(e=s||Dt,a=Ma,o=Dt,Ma=r||Ma,Dt=e,br(t,2),Ma=a,Dt=o),!r&&xn||RI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,xu(t,a))));break;case 19:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,xu(t,e)));break;case 30:n&512&&(Dt||o===null||Ea(o,o.return)),n=TF(),r=fc,s=(a&335544064)===a,i=t.memoizedProps,fc=s&&nr(i.default,i.update)!=="none",Ja(e,t,a),Qa(t),s&&o!==null&&At&&(t.flags|=4),fc=r,At=n;break;case 21:break;case 7:n&512&&(Dt||o===null||Ea(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:Ja(e,t,a),Qa(t)}}function Qa(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(Xy(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if(B0(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(P0(n))break;n=n.return}var s=o;if(a==null)throw Error(ie(160));switch(a.tag){case 27:var i=a.stateNode,l=Rm(t);sd(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(Hi(c,""),a.flags&=-33);var u=Rm(t);sd(t,u,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,f=Rm(t);_I(t,f,h,s);break;default:throw Error(ie(161))}}catch(d){Ut(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;rM(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Ji=!0,e.reset(),Ji=!1),t=t.sibling}}function pi(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)sM(e,t),e=e.sibling;else Qy(e,!1)}function sM(t,e){var a=t.alternate;if(a===null)bI(t,!1);else switch(t.tag){case 3:if(EI=gn=!1,SS(),pi(e,t),!gn&&!ld){if(t=vn,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];LM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),EI=!0}vn=null;break;case 5:pi(e,t);break;case 4:o=gn,gn=!1,pi(e,t),gn&&(ld=!0),gn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?bI(t,!1):pi(e,t));break;case 30:o=gn,n=SS(),gn=!1,pi(e,t),gn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=jn(r,s),s=jn(a.memoizedProps,s);var i=nr(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,co=0,e=U0(t,a,e,s,i,r,!0),co!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(qi(t,t.memoizedProps.onUpdate),vn=n):n!==null&&(n.push.apply(n,vn),vn=n),gn=t.flags&32?!0:o;break;default:pi(e,t)}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jy(t,e.alternate,e),e=e.sibling}function br(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:Kr(4,a,a.return),br(a,o);break;case 1:Ea(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Wy(a,a.return,n),br(a,o);break;case 27:o&2&&VM(a.stateNode,a.type,a.memoizedProps);case 5:Ea(a,a.return),a.tag!==5&&a.tag!==27||Sc(a),br(a,o);break;case 6:Sc(a);break;case 26:Ea(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||Dt||n.parentNode.removeChild(n),br(a,o);break;case 22:a.memoizedState===null&&br(a,o);break;case 30:Ea(a,a.return),br(a,o);break;case 7:Ea(a,a.return);default:br(a,o)}t=t.sibling}}function en(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:en(n,r,a),Zc(4,r);break;case 1:if(en(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ut(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)$v(c[n],l)}catch(u){Ut(o,o.return,u)}}i&&s&64&&qy(r),Sn(r,r.return);break;case 27:a&2&&Yy(r);case 5:r.tag!==5&&r.tag!==27||gS(r),en(n,r,a),i&&o===null&&s&4&&CI(r),Sn(r,r.return);break;case 6:gS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Ma||KI(Uc(l.ownerDocument),r.type,l),en(n,r,a),i&&o===null&&s&4&&CI(r),Sn(r,r.return);break;case 12:en(n,r,a);break;case 31:en(n,r,a),i&&s&4&&aM(n,r);break;case 13:en(n,r,a),i&&s&4&&oM(n,r);break;case 22:r.memoizedState===null&&en(n,r,a),Sn(r,r.return);break;case 30:en(n,r,a),Sn(r,r.return);break;case 7:Sn(r,r.return);default:en(n,r,a)}e=e.sibling}}function k0(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xc(a))}function N0(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xc(t))}function zo(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)iM(t,e,a,o),e=e.sibling;else n&&Jy(e)}function iM(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Pu(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:zo(t,e,a,o),r&2048&&Zc(9,e);break;case 1:zo(t,e,a,o);break;case 3:zo(t,e,a,o),n&&EI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Xc(r)));break;case 12:if(r&2048){zo(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Ut(e,e.return,c)}}else zo(t,e,a,o);break;case 31:zo(t,e,a,o);break;case 13:zo(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&Pu(i),s._visibility&2?zo(t,e,a,o):vc(t,e)):(n&&i!==null&&i.memoizedState!==null&&Pu(e),s._visibility&2?zo(t,e,a,o):(s._visibility|=2,mi(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&k0(i,e);break;case 24:zo(t,e,a,o),r&2048&&N0(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(An(r.child,!0),An(e.child,!0))),zo(t,e,a,o);break;default:zo(t,e,a,o)}}function mi(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:mi(r,s,i,l,n),Zc(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?mi(r,s,i,l,n):vc(r,s):(u._visibility|=2,mi(r,s,i,l,n)),n&&c&2048&&k0(s.alternate,s);break;case 24:mi(r,s,i,l,n),n&&c&2048&&N0(s.alternate,s);break;default:mi(r,s,i,l,n)}e=e.sibling}}function vc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:vc(a,o),n&2048&&k0(o.alternate,o);break;case 24:vc(a,o),n&2048&&N0(o.alternate,o);break;default:vc(a,o)}e=e.sibling}}var ys=8192;function Fs(t,e,a){if(t.subtreeFlags&ys)for(t=t.child;t!==null;)lM(t,e,a),t=t.sibling}function lM(t,e,a){switch(t.tag){case 26:Fs(t,e,a),t.flags&ys&&(t.memoizedState!==null?qA(a,tn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&YS(a,t)));break;case 5:Fs(t,e,a),t.flags&ys&&(t=t.stateNode,(e&335544128)===e&&YS(a,t));break;case 3:case 4:var o=tn;tn=Uc(t.stateNode.containerInfo),Fs(t,e,a),tn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=ys,ys=16777216,Fs(t,e,a),ys=o):Fs(t,e,a));break;case 30:if(t.flags&ys&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,yo===null&&(yo=new Map),yo.set(o,n)}Fs(t,e,a);break;default:Fs(t,e,a)}}function cM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function oc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,uM(o,t)}cM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fM(t),t=t.sibling}function fM(t){switch(t.tag){case 0:case 11:case 15:oc(t),t.flags&2048&&Kr(9,t,t.return);break;case 3:oc(t);break;case 12:oc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Bu(t)):oc(t);break;default:oc(t)}}function Bu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,uM(o,t)}cM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Kr(8,e,e.return),Bu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Bu(e));break;default:Bu(e)}t=t.sibling}}function uM(t,e){for(;Ca!==null;){var a=Ca;switch(a.tag){case 0:case 11:case 15:Kr(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xc(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ca=o;else e:for(a=t;Ca!==null;){o=Ca;var n=o.sibling,r=o.return;if(eM(o),o===a){Ca=null;break e}if(n!==null){n.return=r,Ca=n;break e}Ca=r}}}var HT={getCacheForType:function(t){var e=Da(ca),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Da(ca).controller.signal}},VT=typeof WeakMap=="function"?WeakMap:Map,Et=0,zt=null,Ft=null,St=0,Pt=0,Fo=null,Lr=!1,al=!1,O0=!1,ar=0,aa=0,Jr=0,ws=0,cd=0,Mo=0,Gi=0,yc=null,lo=null,LI=!1,Rd=0,dM=0,fd=1/0,ud=null,Vr=null,$t=0,on=null,ks=null,Tn=0,PI=0,BI=null,pM=null,Ui=null,ki=null,Ni=null,Mc=0,Uu=null;function To(){return Et&2&&St!==0?St&-St:nt.T!==null?H0():xv()}function hM(){if(Mo===0)if(!(St&536870912)||It){var t=nu;nu<<=1,!(nu&3932160)&&(nu=262144),Mo=t}else Mo=536870912;return t=Ua.current,t!==null&&(t.flags|=32),Mo}function qi(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=BM(jn(t.memoizedProps,a))),ki===null&&(ki=[]),ki.push(e.bind(null,o))}}function uo(t,e,a){(t===zt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(Wi(t,0),Pr(t,St,Mo,!1)),Gc(t,a),(!(Et&2)||t!==zt)&&(t===zt&&(!(Et&2)&&(ws|=a),aa===4&&Pr(t,St,Mo,!1)),En(t))}function mM(t,e,a){if(Et&6)throw Error(ie(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Vc(t,e),n=o?WT(t,e):Lm(t,e,!0),r=o;do{if(n===0){al&&!o&&Pr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!GT(a)){n=Lm(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=yc;var l=i.current.memoizedState.isDehydrated;if(l&&(Wi(i,s).flags|=256),s=Lm(i,s,!1),s!==2&&s!==6){if(O0&&!l){i.errorRecoveryDisabledLanes|=r,ws|=r,n=4;break e}r=lo,lo=n,r!==null&&(lo===null?lo=r:lo.push.apply(lo,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){Wi(t,0),Pr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(ie(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Pr(o,e,Mo,!Lr);break e;case 2:lo=null;break;case 3:case 5:break;default:throw Error(ie(329))}if((e&62914560)===e&&(n=Rd+300-Co(),10<n)){if(Pr(o,e,Mo,!Lr),xd(o,0,!0)!==0)break e;Tn=e,o.timeoutHandle=G0(yS.bind(null,o,a,lo,ud,LI,e,Mo,ws,Gi,Lr,r,"Throttled",-0,0),n);break e}yS(o,a,lo,ud,LI,e,Mo,ws,Gi,Lr,r,null,-0,0)}}break}while(!0);En(t)}function yS(t,e,a,o,n,r,s,i,l,c,u,h,f,d){t.timeoutHandle=-1;var I=e.subtreeFlags,M=(r&335544064)===r;if(h=null,(M||I&8192||(I&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mn},yo=null,lM(e,r,h),M&&(I=h,M=t.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(I.count++,I.waitingForViewTransition=!0,I=kc.bind(I),M.finished.then(I,I))),I=(r&62914560)===r?Rd-Co():(r&4194048)===r?dM-Co():0,I=WA(h,I),I!==null)){Tn=r,t.cancelPendingCommit=I(CS.bind(null,t,e,r,a,o,n,s,i,l,c,u,h,null,f,d)),Pr(t,r,s,!c);return}CS(t,e,r,a,o,n,s,i,l,c,u,h)}function GT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ao(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e,a,o){e=dv(t,e),e&=~cd,e&=~ws,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-bo(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&hv(t,a,e)}function Dd(){return Et&6?!0:(Kc(0,!1),!1)}function z0(){if(Ft!==null){if(Pt===0)var t=Ft.return;else t=Ft,Zn=Vs=null,M0(t),Li=null,Ec=0,t=Ft;for(;t!==null;)Gy(t.alternate,t),t=t.return;Ft=null}}function Wi(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,uA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tn=0,z0(),zt=t,Ft=a=Kn(t.current,null),St=e,Pt=0,Fo=null,Lr=!1,al=Vc(t,e),O0=!1,Gi=Mo=cd=ws=Jr=aa=0,lo=yc=null,LI=!1,ar=dv(t,e),yd(),a}function IM(t,e){ut=null,nt.H=od,e===el||e===_d?(e=KF(),Pt=3):e===m0?(e=KF(),Pt=4):Pt=e===R0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Fo=e,Ft===null&&(aa=1,nd(t,Wo(e,t.current)))}function xM(){var t=Ua.current;return t===null?!0:(St&4194048)===St?za===null:(St&62914560)===St||St&536870912?t===za:!1}function gM(){var t=nt.H;return nt.H=od,t===null?od:t}function FM(){var t=nt.A;return nt.A=HT,t}function dd(){aa=4,Lr||(St&4194048)!==St&&Ua.current!==null||(al=!0),!(Jr&134217727)&&!(ws&134217727)||zt===null||Pr(zt,St,Mo,!1)}function Lm(t,e,a){var o=Et;Et|=2;var n=gM(),r=FM();(zt!==t||St!==e)&&(ud=null,Wi(t,e)),e=!1;var s=aa;e:do try{if(Pt!==0&&Ft!==null){var i=Ft,l=Fo;switch(Pt){case 8:z0(),s=6;break e;case 3:case 2:case 9:case 6:Ua.current===null&&(e=!0);var c=Pt;if(Pt=0,Fo=null,Ai(t,i,l,c),a&&al){s=0;break e}break;default:c=Pt,Pt=0,Fo=null,Ai(t,i,l,c)}}qT(),s=aa;break}catch(u){IM(t,u)}while(!0);return e&&t.shellSuspendCounter++,Zn=Vs=null,Et=o,nt.H=n,nt.A=r,Ft===null&&(zt=null,St=0,yd()),s}function qT(){for(;Ft!==null;)SM(Ft)}function WT(t,e){var a=Et;Et|=2;var o=gM(),n=FM();zt!==t||St!==e?(ud=null,fd=Co()+500,Wi(t,e)):al=Vc(t,e);e:do try{if(Pt!==0&&Ft!==null){e=Ft;var r=Fo;t:switch(Pt){case 1:Pt=0,Fo=null,Ai(t,e,r,1);break;case 2:case 9:if(ZF(r)){Pt=0,Fo=null,MS(e);break}e=function(){Pt!==2&&Pt!==9||zt!==t||(Pt=7),En(t)},r.then(e,e);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:ZF(r)?(Pt=0,Fo=null,MS(e)):(Pt=0,Fo=null,Ai(t,e,r,7));break;case 5:var s=null;switch(Ft.tag){case 26:s=Ft.memoizedState;case 5:case 27:var i=Ft;if(s?WM(s):i.stateNode.complete){Pt=0,Fo=null;var l=i.sibling;if(l!==null)Ft=l;else{var c=i.return;c!==null?(Ft=c,Ld(c)):Ft=null}break t}}Pt=0,Fo=null,Ai(t,e,r,5);break;case 6:Pt=0,Fo=null,Ai(t,e,r,6);break;case 8:z0(),aa=6;break e;default:throw Error(ie(462))}}XT();break}catch(u){IM(t,u)}while(!0);return Zn=Vs=null,nt.H=o,nt.A=n,Et=a,Ft!==null?0:(zt=null,St=0,yd(),aa)}function XT(){for(;Ft!==null&&!cb();)SM(Ft)}function SM(t){var e=Vy(t.alternate,t,ar);t.memoizedProps=t.pendingProps,e===null?Ld(t):Ft=e}function MS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=uS(a,e,e.pendingProps,e.type,void 0,St);break;case 11:e=uS(a,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:M0(e);var o=e;o===ba&&(It?(Ju(o),o.tag===5&&o.stateNode!=null&&(Xt=o.stateNode)):(Ju(o),It=!0));default:Gy(a,e),e=Ft=qv(e,ar),e=Vy(a,e,ar)}t.memoizedProps=t.pendingProps,e===null?Ld(t):Ft=e}function Ai(t,e,a,o){Zn=Vs=null,M0(e),Li=null,Ec=0;var n=e.return;try{if(LT(t,n,e,a,St)){aa=1,nd(t,Wo(a,t.current)),Ft=null;return}}catch(r){if(n!==null)throw Ft=n,r;aa=1,nd(t,Wo(a,t.current)),Ft=null;return}e.flags&32768?(It||o===1?t=!0:al||St&536870912?t=!1:(Lr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Ua.current,o!==null&&o.tag===13&&(o.flags|=16384))),vM(e,t)):Ld(e)}function Ld(t){var e=t;do{if(e.flags&32768){vM(e,Lr);return}t=e.return;var a=kT(e.alternate,e,ar);if(a!==null){Ft=a;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);aa===0&&(aa=5)}function vM(t,e){do{var a=NT(t.alternate,t);if(a!==null){a.flags&=32767,Ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Ft=t;return}Ft=t=a}while(t!==null);aa=6,Ft=null}function CS(t,e,a,o,n,r,s,i,l,c,u,h){t.cancelPendingCommit=null;do Pd();while($t!==0);if(Et&6)throw Error(ie(327));if(e!==null){if(e===t.current)throw Error(ie(177));t===zt&&(Ft=zt=null,St=0),ks=e,on=t,Tn=a,BI=n,pM=o,YT(t,e,a,s,i,l,h)}}function YT(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(PI=i,i|=c0,Fb(t,a,i,o,n,r),ki=null,(a&335544064)===a?(Ni=vT(t),o=10262):(Ni=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,$T(Wu,function(){return OI(),null})):(t.callbackNode=null,t.callbackPriority=0),id=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=nt.T,nt.T=null,n=Rt.p,Rt.p=2,r=Et,Et|=4;try{OT(t,e,a)}finally{Et=r,Rt.p=n,nt.T=o}}$t=1,id?Ui=xA(s,t.containerInfo,Ni,UI,kI,KT,NI,OI,ZT,null,null):(UI(),kI(),NI())}function ZT(t){if($t!==0){var e=on.onRecoverableError;e(t,{componentStack:null})}}function KT(){$t===3&&($t=0,sM(ks,on),$t=4)}function UI(){if($t===1){$t=0;var t=on,e=ks,a=Tn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=nt.T,nt.T=null;var n=Rt.p;Rt.p=2;var r=Et;Et|=4;try{fc=ld=!1,nM(e,t,a),a=GI;var s=Uv(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&Bv(i.ownerDocument.documentElement,i)){if(l!==null&&l0(i)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(u,i.value.length);else{var h=i.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),I=i.textContent.length,M=Math.min(l.start,I),m=l.end===void 0?M:Math.min(l.end,I);!d.extend&&M>m&&(s=m,m=M,M=s);var p=zF(i,M),x=zF(i,m);if(p&&x&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==x.node||d.focusOffset!==x.offset)){var v=h.createRange();v.setStart(p.node,p.offset),d.removeAllRanges(),M>m?(d.addRange(v),d.extend(x.node,x.offset)):(v.setEnd(x.node,x.offset),d.addRange(v))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var F=h[i];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}Ji=!!VI,GI=VI=null}finally{Et=r,Rt.p=n,nt.T=o}}t.current=e,$t=2}}function kI(){if($t===2){$t=0;var t=on,e=ks,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=nt.T,nt.T=null;var o=Rt.p;Rt.p=2;var n=Et;Et|=4;try{jy(t,e.alternate,e)}finally{Et=n,Rt.p=o,nt.T=a}}$t=3}}function NI(){if($t===4||$t===3){$t=0;var t=Ui;Ui=null,fb();var e=on,a=ks,o=Tn,n=pM,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?$t=5:($t=0,ks=on=null,yM(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(Vr=null),a0(o),a=a.stateNode,_o&&typeof _o.onCommitFiberRoot=="function")try{_o.onCommitFiberRoot(Hc,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=nt.T,r=Rt.p,Rt.p=2,nt.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{nt.T=a,Rt.p=r}}if(n=ki,s=Ni,Ni=null,n!==null&&(ki=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);Tn&3&&Pd(),En(e),r=e.pendingLanes,o&261930&&r&42?e===Uu?Mc++:(Mc=0,Uu=e):(Mc=0,Uu=null),Kc(0,!1)}}function yM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Xc(e)))}function Pd(){return Ui!==null&&(Ui.skipTransition(),Ui=null),UI(),kI(),NI(),OI()}function OI(){if($t!==5)return!1;var t=on,e=PI;PI=0;var a=a0(Tn),o=nt.T,n=Rt.p;try{Rt.p=32>a?32:a,nt.T=null,a=BI,BI=null;var r=on,s=Tn;if($t=0,ks=on=null,Tn=0,Et&6)throw Error(ie(331));var i=Et;if(Et|=4,fM(r.current),iM(r,r.current,s,a),Et=i,Kc(0,!1),_o&&typeof _o.onPostCommitFiberRoot=="function")try{_o.onPostCommitFiberRoot(Hc,r)}catch{}return!0}finally{Rt.p=n,nt.T=o,yM(t,e)}}function _S(t,e,a){e=Wo(a,e),e=gI(t.stateNode,e,2),t=Or(t,e,2),t!==null&&(Gc(t,2),En(t))}function Ut(t,e,a){if(t.tag===3)_S(t,t,a);else for(;e!==null;){if(e.tag===3){_S(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vr===null||!Vr.has(o))){t=Wo(a,t),a=ky(2),o=Or(e,a,2),o!==null&&(Ny(a,o,e,t),Gc(o,2),En(o));break}}e=e.return}}function Pm(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new VT;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(O0=!0,n.add(a),t=JT.bind(null,t,e,a),e.then(t,t))}function JT(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(St&a)===a&&(aa===4||aa===3&&(St&62914560)===St&&300>Co()-Rd?Et&2?cd|=a:Wi(t,0):cd|=a,Gi===St&&(Gi=0)),En(t)}function MM(t,e){e===0&&(e=pv()),t=Hs(t,e),t!==null&&(Gc(t,e),En(t))}function QT(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),MM(t,a)}function jT(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(ie(314))}o!==null&&o.delete(e),MM(t,a)}function $T(t,e){return e0(t,e)}var Xi=null,Ii=null,zI=!1,pd=!1,Bm=!1,Br=0;function En(t){t!==Ii&&t.next===null&&(Ii===null?Xi=Ii=t:Ii=Ii.next=t),pd=!0,zI||(zI=!0,tA())}function Kc(t,e){if(!Bm&&pd){Bm=!0;do for(var a=!1,o=Xi;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-bo(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,bS(o,r))}else r=St,r=xd(o,o===zt?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||Vc(o,r)||(a=!0,bS(o,r));o=o.next}while(a);Bm=!1}}function eA(){CM()}function CM(){pd=zI=!1;var t=0;Br!==0&&fA()&&(t=Br);for(var e=Co(),a=null,o=Xi;o!==null;){var n=o.next,r=_M(o,e);r===0?(o.next=null,a===null?Xi=n:a.next=n,n===null&&(Ii=a)):(a=o,(t!==0||r&3)&&(pd=!0)),o=n}$t!==0&&$t!==5||Kc(t,!1),Br!==0&&(Br=0)}function _M(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-bo(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=gb(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=zt,a=St,a=xd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&pm(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Vc(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&pm(o),a0(a)){case 2:case 8:a=fv;break;case 32:a=Wu;break;case 268435456:a=uv;break;default:a=Wu}return o=bM.bind(null,t),a=e0(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&pm(o),t.callbackPriority=2,t.callbackNode=null,2}function bM(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Pd()&&t.callbackNode!==a)return null;var o=St;return o=xd(t,t===zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(mM(t,o,e),_M(t,Co()),t.callbackNode!=null&&t.callbackNode===a?bM.bind(null,t):null)}function bS(t,e){if(Pd())return null;mM(t,e,!0)}function tA(){dA(function(){Et&6?e0(cv,eA):CM()})}function H0(){if(Br===0){var t=Ls;t===0&&(t=ou,ou<<=1,!(ou&261888)&&(ou=256)),Br=t}return Br}function TS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cu(t)}function aA(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=TS((n[ho]||null).action),s=o.submitter;s&&(e=(e=s[ho]||null)?TS(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new Fd("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Br!==0){var l=new FormData(n,s);II(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),II(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(gu=0;gu<rI.length;gu++)Fu=rI[gu],AS=Fu.toLowerCase(),wS=Fu[0].toUpperCase()+Fu.slice(1),nn(AS,"on"+wS);var Fu,AS,wS,gu;nn(Nv,"onAnimationEnd");nn(Ov,"onAnimationIteration");nn(zv,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(pT,"onTransitionRun");nn(hT,"onTransitionStart");nn(mT,"onTransitionCancel");nn(Hv,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lc));function TM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){Yu(u)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){Yu(u)}n.currentTarget=null,r=l}}}}function gt(t,e){var a=e[MF];a===void 0&&(a=e[MF]=new Set);var o=t+"__bubble";a.has(o)||(AM(e,t,2,!1),a.add(o))}function Um(t,e,a){var o=0;e&&(o|=4),AM(a,t,o,e)}var Su="_reactListening"+Math.random().toString(36).slice(2);function V0(t){if(!t[Su]){t[Su]=!0,Fv.forEach(function(a){a!=="selectionchange"&&(oA.has(a)||Um(a,!1,t),Um(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Su]||(e[Su]=!0,Um("selectionchange",!1,e))}}function AM(t,e,a,o){switch(jM(e)){case 2:var n=KA;break;case 8:n=JA;break;default:n=K0}a=n.bind(null,e,a,t),n=void 0,!tI||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function km(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Ms(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}Tv(function(){var c=r,u=n0(a),h=[];e:{var f=Vv.get(t);if(f!==void 0){var d=Fd,I=t;switch(t){case"keypress":if(bu(a)===0)break e;case"keydown":case"keyup":d=Gb;break;case"focusin":I="focus",d=Fm;break;case"focusout":I="blur",d=Fm;break;case"beforeblur":case"afterblur":d=Fm;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=RF;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Rb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Zb;break;case Nv:case Ov:case zv:d=Pb;break;case Hv:d=Jb;break;case"scroll":case"scrollend":d=wb;break;case"wheel":d=jb;break;case"copy":case"cut":case"paste":d=Ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=LF;break;case"submit":d=Xb;break;case"toggle":case"beforetoggle":d=eT}var M=(e&4)!==0,m=!M&&(t==="scroll"||t==="scrollend"),p=M?f!==null?f+"Capture":null:f;M=[];for(var x=c,v;x!==null;){var F=x;if(v=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||v===null||p===null||(F=_c(x,p),F!=null&&M.push(Pc(x,F,v))),m)break;x=x.return}0<M.length&&(f=new d(f,I,null,a,u),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&a!==eI&&(I=a.relatedTarget||a.fromElement)&&(Ms(I)||I[ji]))break e;(f||d)&&(I=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,f?(d=a.relatedTarget||a.toElement,f=c,d=d?Ms(d):null,d!==null&&(m=zc(d),M=d.tag,d!==m||M!==5&&M!==27&&M!==6)&&(d=null)):(f=null,d=c),f!==d&&(M=RF,F="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=LF,F="onPointerLeave",p="onPointerEnter",x="pointer"),m=f==null?I:lc(f),v=d==null?I:lc(d),I=new M(F,x+"leave",f,a,u),I.target=m,I.relatedTarget=v,F=null,Ms(u)===c&&(M=new M(p,x+"enter",d,a,u),M.target=v,M.relatedTarget=m,F=M),m=F,M=f&&d?Vm(f,d,nA):null,f!==null&&ES(h,I,f,M,!1),d!==null&&m!==null&&ES(h,m,d,M,!0)))}e:{if(f=c?lc(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var C=kF;else if(UF(f))if(Lv)C=fT;else{C=lT;var _=iT}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&o0(c.elementType)&&(C=kF):C=cT;if(C&&(C=C(t,c))){Dv(h,C,a,u);break e}_&&_(t,f,c)}switch(_=c?lc(c):window,t){case"focusin":(UF(_)||_.contentEditable==="true")&&(yi=_,oI=c,pc=null);break;case"focusout":pc=oI=yi=null;break;case"mousedown":nI=!0;break;case"contextmenu":case"mouseup":case"dragend":nI=!1,HF(h,a,u);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":HF(h,a,u)}var w;if(i0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else vi?Ev(t,a)&&(S="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(S="onCompositionStart");S&&(wv&&a.locale!=="ko"&&(vi||S!=="onCompositionStart"?S==="onCompositionEnd"&&vi&&(w=Av()):(Rr=u,r0="value"in Rr?Rr.value:Rr.textContent,vi=!0)),_=hd(c,S),0<_.length&&(S=new DF(S,t,null,a,u),h.push({event:S,listeners:_}),w?S.data=w:(w=Rv(a),w!==null&&(S.data=w)))),(w=aT?oT(t,a):nT(t,a))&&(S=hd(c,"onBeforeInput"),0<S.length&&(_=new DF("onBeforeInput","beforeinput",null,a,u),h.push({event:_,listeners:S}),_.data=w)),aA(h,t,c,a,u)}TM(h,e)})}function Pc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function hd(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=_c(t,a),n!=null&&o.unshift(Pc(t,n,r)),n=_c(t,e),n!=null&&o.push(Pc(t,n,r))),t.tag===3)return o;t=t.return}return[]}function nA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ES(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=_c(a,r),c!=null&&s.unshift(Pc(a,c,l))):n||(c=_c(a,r),c!=null&&s.push(Pc(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var rA=/\r\n?/g,sA=/\u0000|\uFFFD/g;function RS(t){return(typeof t=="string"?t:""+t).replace(rA,`
`).replace(sA,"")}function wM(t,e){return e=RS(e),RS(t)===e}function Bt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||Hi(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&Hi(t,""+o);else return;break;case"className":su(t,"class",o);break;case"tabIndex":su(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":su(t,a,o);break;case"style":bv(t,o,r);return;case"data":if(e!=="object"){su(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cu(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Bt(t,e,"name",n.name,n,null),Bt(t,e,"formEncType",n.formEncType,n,null),Bt(t,e,"formMethod",n.formMethod,n,null),Bt(t,e,"formTarget",n.formTarget,n,null)):(Bt(t,e,"encType",n.encType,n,null),Bt(t,e,"method",n.method,n,null),Bt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cu(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Mn);return;case"onScroll":o!=null&&gt("scroll",t);return;case"onScrollEnd":o!=null&&gt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(ie(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(ie(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Cu(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Mu(t,"popover",o);break;case"xlinkActuate":Wn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Mu(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Tb.get(a)||a,Mu(t,a,o);else return}At=!0}function HI(t,e,a,o,n,r){switch(a){case"style":bv(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(ie(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(ie(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")Hi(t,o);else if(typeof o=="number"||typeof o=="bigint")Hi(t,""+o);else return;break;case"onScroll":o!=null&&gt("scroll",t);return;case"onScrollEnd":o!=null&&gt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Mn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[ho]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}At=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Mu(t,a,o)}return}At=!0}function Ba(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ie(137,e));default:Bt(t,e,r,s,a,null)}}n&&Bt(t,e,"srcSet",a.srcSet,a,null),o&&Bt(t,e,"src",a.src,a,null);return;case"input":gt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"name":n=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ie(137,e));break;default:Bt(t,e,o,u,a,null)}}Mv(t,r,i,l,c,s,n,!1);return;case"select":gt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Bt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Ei(t,!!o,e,!1):a!=null&&Ei(t,!!o,a,!0);return;case"textarea":gt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ie(91));break;default:Bt(t,e,s,i,a,null)}_v(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,e,l,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Lc.length;o++)gt(Lc[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ie(137,e));default:Bt(t,e,c,o,a,null)}return;default:if(o0(e)){for(u in a)a.hasOwnProperty(u)&&(o=a[u],o!==void 0&&HI(t,e,u,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Bt(t,e,i,o,a,null))}var iA={};function lA(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,u=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Bt(t,e,d,null,o,h)}}for(var f in o){var d=o[f];if(h=a[f],o.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":d!==h&&(At=!0),r=d;break;case"name":d!==h&&(At=!0),n=d;break;case"checked":d!==h&&(At=!0),c=d;break;case"defaultChecked":d!==h&&(At=!0),u=d;break;case"value":d!==h&&(At=!0),s=d;break;case"defaultValue":d!==h&&(At=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ie(137,e));break;default:d!==h&&Bt(t,e,f,d,o,h)}}$m(t,s,i,l,c,u,r,n);return;case"select":d=s=i=f=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Bt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(At=!0),f=r;break;case"defaultValue":r!==l&&(At=!0),i=r;break;case"multiple":r!==l&&(At=!0),s=r;default:r!==l&&Bt(t,e,n,r,o,l)}e=i,a=s,o=d,f!=null?Ei(t,!!a,f,!1):!!o!=!!a&&(e!=null?Ei(t,!!a,e,!0):Ei(t,!!a,a?[]:"",!1));return;case"textarea":d=f=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Bt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(At=!0),f=n;break;case"defaultValue":n!==r&&(At=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(ie(91));break;default:n!==r&&Bt(t,e,s,n,o,r)}Cv(t,f,d);return;case"option":for(var I in a)if(f=a[I],a.hasOwnProperty(I)&&f!=null&&!o.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:Bt(t,e,I,null,o,f)}for(l in o)if(f=o[l],d=a[l],o.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":f!==d&&(At=!0),t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Bt(t,e,l,f,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in a)f=a[M],a.hasOwnProperty(M)&&f!=null&&!o.hasOwnProperty(M)&&Bt(t,e,M,null,o,f);for(c in o)if(f=o[c],d=a[c],o.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ie(137,e));break;default:Bt(t,e,c,f,o,d)}return;default:if(o0(e)){for(var m in a)f=a[m],a.hasOwnProperty(m)&&f!==void 0&&!o.hasOwnProperty(m)&&HI(t,e,m,void 0,o,f);for(u in o)f=o[u],d=a[u],!o.hasOwnProperty(u)||f===d||f===void 0&&d===void 0||HI(t,e,u,f,o,d);return}}for(var p in a)f=a[p],a.hasOwnProperty(p)&&f!=null&&!o.hasOwnProperty(p)&&Bt(t,e,p,null,o,f);for(h in o)f=o[h],d=a[h],!o.hasOwnProperty(h)||f===d||f==null&&d==null||Bt(t,e,h,f,o,d)}function DS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&DS(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var u=l.transferSize,h=l.initiatorType;u&&DS(h)&&(l=l.responseEnd,s+=u*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var VI=null,GI=null;function Bc(t){return t.nodeType===9?t:t.ownerDocument}function LS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function EM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function RM(t,e,a,o){return a=Bc(a).createElement(t),a[Ra]=o,a[ho]=e,Ba(a,t,e),_a(a),a}function qI(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nm=null;function fA(){var t=window.event;return t&&t.type==="popstate"?t===Nm?!1:(Nm=t,!0):(Nm=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,uA=typeof clearTimeout=="function"?clearTimeout:void 0,PS=typeof Promise=="function"?Promise:void 0,BS=typeof requestAnimationFrame=="function"?requestAnimationFrame:G0,dA=typeof queueMicrotask=="function"?queueMicrotask:typeof PS<"u"?function(t){return PS.resolve(null).then(t).catch(pA)}:G0;function pA(t){setTimeout(function(){throw t})}function jr(t){return t==="head"}function US(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),Qi(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zm(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,zm(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[qc]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&zm(t.ownerDocument.body);a=n}while(a);Qi(e)}function kS(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function DM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function LM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function PM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function WI(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return PM(e,a,t)}function hA(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return PM(e,a,t)}function mA(t){return t.documentElement.clientHeight}function IA(t){this.addEventListener("load",t),this.addEventListener("error",t)}function xA(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var u=c.startViewTransition({update:function(){var f=c.defaultView,d=f.navigation&&f.navigation.transition,I=c.fonts.status;o();var M=[];if(I==="loaded"&&(mA(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),I=M.length,t!==null)for(var m=t.suspenseyImages,p=0,x=0;x<m.length;x++){var v=m[x];if(!v.complete){var F=v.getBoundingClientRect();if(0<F.bottom&&0<F.right&&F.top<f.innerHeight&&F.left<f.innerWidth){if(p+=XM(v),p>Ou){M.length=I;break}v=new Promise(IA.bind(v)),M.push(v)}}}if(0<M.length)return f=Promise.race([Promise.all(M),new Promise(function(C){return setTimeout(C,500)})]).then(n,n),(d?Promise.allSettled([d.finished,f]):f).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=u;var h=[];return u.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),d=0;d<f.length;d++){var I=f[d],M=I.effect,m=M.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){h.push(I),I=M.getKeyframes();for(var p=m=void 0,x=!0,v=0;v<I.length;v++){var F=I[v],C=F.width;if(m===void 0)m=C;else if(m!==C){x=!1;break}if(C=F.height,p===void 0)p=C;else if(p!==C){x=!1;break}delete F.width,delete F.height,F.transform==="none"&&delete F.transform}x&&m!==void 0&&p!==void 0&&(M.setKeyframes(I),x=getComputedStyle(M.target,M.pseudoElement),x.width!==m||x.height!==p)&&(x=I[0],x.width=m,x.height=p,x=I[I.length-1],x.width=m,x.height=p,M.setKeyframes(I))}}s()},function(f){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{o(),n(),s()}}),u.finished.finally(function(){for(var f=0;f<h.length;f++)h[f].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),i()}),u}catch{return o(),n(),s(),null}}function Cs(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Cs.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Ht({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Cs.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};Cs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function BM(t){return{name:t,group:new Cs("group",t),imagePair:new Cs("image-pair",t),old:new Cs("old",t),new:new Cs("new",t)}}function wo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}wo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(UM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=Yi(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),po(this._fragmentFiber.child,!1,gA,t,i,o)}this._eventListeners=r}};function gA(t,e,a,o){return xa(t).addEventListener(e,a,o),!1}wo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=UM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=Yi(n.optionsOrUseCapture),po(this._fragmentFiber.child,!1,FA,t,a,n),o.splice(e,1),r!==null&&r()}};function FA(t,e,a,o){return xa(t).removeEventListener(e,a,o),!1}function Yi(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function NS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function UM(t,e,a,o){if(t.length===0)return-1;o=NS(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&NS(r.optionsOrUseCapture)===o)return n}return-1}wo.prototype.dispatchEvent=function(t){var e=Ns(this._fragmentFiber);if(e===null)return!0;e=xa(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,Yi(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,Yi(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};wo.prototype.focus=function(t){po(this._fragmentFiber.child,!0,kM,t,void 0,void 0)};function kM(t,e){return t.tag===6?!1:(t=xa(t),RA(t,e))}wo.prototype.focusLast=function(t){var e=[];po(this._fragmentFiber.child,!0,q0,e,void 0,void 0);for(var a=e.length-1;0<=a&&!kM(e[a],t);a--);};function q0(t,e){return e.push(t),!1}wo.prototype.blur=function(){var t=Ns(this._fragmentFiber);t!==null&&(t=xa(t),t=Bc(t).activeElement,t!==null&&po(this._fragmentFiber.child,!1,SA,t,void 0,void 0))};function SA(t,e){return t.tag===6?!1:(t=xa(t),t===e||t.contains(e)?(e.blur(),!0):!1)}wo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),po(this._fragmentFiber.child,!1,vA,t,void 0,void 0)};function vA(t,e){return t.tag===6||(t=xa(t),e.observe(t)),!1}wo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),po(this._fragmentFiber.child,!1,yA,t,void 0,void 0);for(var a=e=0;a<an.length;a++){var o=an[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):an[e++]=o}an.length=e}};function yA(t,e){return t.tag===6||(t=xa(t),e.unobserve(t)),!1}var an=[],Om=!1;function MA(t,e,a){an.push({fragmentInstance:t,observer:e,instance:a}),Om||(Om=!0,DA(function(){Om=!1;var o=an;an=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}wo.prototype.getClientRects=function(){var t=[];return po(this._fragmentFiber.child,!1,CA,t,void 0,void 0),t};function CA(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=xa(t),e.push.apply(e,t.getClientRects());return!1}wo.prototype.getRootNode=function(t){var e=Ns(this._fragmentFiber);return e===null?this:xa(e).getRootNode(t)};wo.prototype.compareDocumentPosition=function(t){var e=Ns(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];po(this._fragmentFiber.child,!1,q0,a,void 0,void 0);var o=xa(e);if(a.length===0){if(a=o,xF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=rv(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=xa(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=xa(a[0]),n=xa(a[a.length-1]);var r=xF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||_A(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function _A(t,e,a,o,n){var r=Ms(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=Ns(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=Vm(a,r,gF),e===null?e=!1:(po(e,!0,tb,r,a),r=xi,xi=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=Vm(o,r,gF),e===null?e=!1:(po(e,!0,ab,r,o),r=xi,Hm=xi=null,e=r!==null)),e):!1}function OS(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}wo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ie(566));var e=[];po(this._fragmentFiber.child,!1,q0,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=rv(this._fragmentFiber);if(o=a?o[1]||o[0]||Ns(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=xa(o),OS(t,a);return}if(o=xa(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=xa(n),OS(n,a)):xa(n).scrollIntoView(t),o+=a?-1:1}};function bA(t,e){return t=xa(t),NM(t,e),!1}function NM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function OM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,Yi(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<an.length;i++){var l=an[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(an[s++]=l)}an.length=s,r.observe(t)}),NM(t,e))}function TA(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,Yi(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?MA(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function XI(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":XI(a),gd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function AA(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[qc])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Yo(t.nextSibling),t===null)break}return null}function wA(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Yo(t.nextSibling),t===null))return null;return t}function zM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Yo(t.nextSibling),t===null))return null;return t}function YI(t){return t.data==="$?"||t.data==="$~"}function W0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function EA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Yo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ZI=null;function zS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Yo(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function HS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function RA(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function DA(t){BS(function(){BS(function(e){return t(e)})})}function HM(t,e,a){switch(e=Bc(a),t){case"html":if(t=e.documentElement,!t)throw Error(ie(452));return t;case"head":if(t=e.head,!t)throw Error(ie(453));return t;case"body":if(t=e.body,!t)throw Error(ie(454));return t;default:throw Error(ie(451))}}function VM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Bt(t,e,o,null,iA,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Mn&&(t.onclick=null),gd(t)}function zm(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);gd(t)}var Zo=new Map,VS=new Set;function Uc(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var rr=Rt.d;Rt.d={f:LA,r:PA,D:BA,C:UA,L:kA,m:NA,X:zA,S:OA,M:HA};function LA(){var t=rr.f(),e=Dd();return t||e}function PA(t){var e=$i(t);e!==null&&e.tag===5&&e.type==="form"?by(e):rr.r(t)}var ol=typeof document>"u"?null:document;function GM(t,e,a){var o=ol;if(o&&typeof e=="string"&&e){var n=qo(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),VS.has(n)||(VS.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),Ba(e,"link",t),_a(e),o.head.appendChild(e)))}}function BA(t){rr.D(t),GM("dns-prefetch",t,null)}function UA(t,e){rr.C(t,e),GM("preconnect",t,e)}function kA(t,e,a){rr.L(t,e,a);var o=ol;if(o&&t&&e){var n='link[rel="preload"][as="'+qo(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qo(a.imageSizes)+'"]')):n+='[href="'+qo(t)+'"]';var r=n;switch(e){case"style":r=Zi(t);break;case"script":r=nl(t)}if(!(Zo.has(r)||(t=Ht({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Zo.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(Jc(r))||e==="script"&&o.querySelector(Qc(r))))){var s=o.createElement("link");Ba(s,"link",t),e==="style"&&(s[Xu]=!0,s.onload=s.onerror=function(){gv(s)}),_a(s),o.head.appendChild(s)}}}function NA(t,e){rr.m(t,e);var a=ol;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+qo(o)+'"][href="'+qo(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=nl(t)}if(!Zo.has(r)&&(t=Ht({rel:"modulepreload",href:t},e),Zo.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qc(r)))return}o=a.createElement("link"),Ba(o,"link",t),_a(o),a.head.appendChild(o)}}}function OA(t,e,a){rr.S(t,e,a);var o=ol;if(o&&t){var n=wi(o).hoistableStyles,r=Zi(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(Jc(r)))i.loading=5;else{t=Ht({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Zo.get(r))&&X0(t,a);var l=s=o.createElement("link");_a(l),Ba(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ku(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function zA(t,e){rr.X(t,e);var a=ol;if(a&&t){var o=wi(a).hoistableScripts,n=nl(t),r=o.get(n);r||(r=a.querySelector(Qc(n)),r||(t=Ht({src:t,async:!0},e),(e=Zo.get(n))&&Y0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function HA(t,e){rr.M(t,e);var a=ol;if(a&&t){var o=wi(a).hoistableScripts,n=nl(t),r=o.get(n);r||(r=a.querySelector(Qc(n)),r||(t=Ht({src:t,async:!0,type:"module"},e),(e=Zo.get(n))&&Y0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function GS(t,e,a,o){var n=(n=Ur.current)?Uc(n):null;if(!n)throw Error(ie(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Zi(a.href),e=wi(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zi(a.href);var r=wi(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(Jc(t)))?r._p||(s.instance=r,s.state.loading=5):(r=Zo.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zo.set(t,r)),VA(n,t,r,s.state))),e&&o===null)throw Error(ie(528,""));return s}if(e&&o!==null)throw Error(ie(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=nl(a),e=wi(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(ie(444,t))}}function Zi(t){return'href="'+qo(t)+'"'}function Jc(t){return'link[rel="stylesheet"]['+t+"]"}function qM(t){return Ht({},t,{"data-precedence":t.precedence,precedence:null})}function VA(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Xu]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[Xu]=!0,e.onload=e.onerror=gv.bind(null,e),Ba(e,"link",a),_a(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function nl(t){return'[src="'+qo(t)+'"]'}function Qc(t){return"script[async]"+t}function qS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+qo(a.href)+'"]');if(o)return e.instance=o,_a(o),o;var n=Ht({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_a(o),Ba(o,"style",n),ku(o,a.precedence,t),e.instance=o;case"stylesheet":n=Zi(a.href);var r=t.querySelector(Jc(n));if(r)return e.state.loading|=4,e.instance=r,_a(r),r;o=qM(a),(n=Zo.get(n))&&X0(o,n),r=(t.ownerDocument||t).createElement("link"),_a(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),e.state.loading|=4,ku(r,a.precedence,t),e.instance=r;case"script":return r=nl(a.src),(n=t.querySelector(Qc(r)))?(e.instance=n,_a(n),n):(o=a,(n=Zo.get(r))&&(o=Ht({},a),Y0(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),_a(n),Ba(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(ie(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,ku(o,a.precedence,t));return e.instance}function ku(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function X0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Y0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nu=null;function WS(t,e,a){if(Nu===null){var o=new Map,n=Nu=new Map;n.set(a,o)}else n=Nu,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[qc]||r[Ra]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function KI(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function GA(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function XS(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function WM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function XM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function YS(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=XM(e),t.suspenseyImages.push(e)),t=XA.bind(t),e.decode().then(t,t))}function qA(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Zi(o.href),r=e.querySelector(Jc(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=kc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,_a(r);return}r=e.ownerDocument||e,o=qM(o),(n=Zo.get(n))&&X0(o,n),r=r.createElement("link"),_a(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=kc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Ou=0;function WA(t,e){return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Ou===0&&(Ou=62500*cA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Ou?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function YM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function kc(){this.count--,YM(this)}function XA(){this.imgCount--,YM(this)}var md=null;function zu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,md=new Map,e.forEach(YA,t),md=null,kc.call(t))}function YA(t,e){if(!(e.state.loading&4)){var a=md.get(t);if(a)var o=a.get(null);else{a=new Map,md.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=kc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Ki={$$typeof:yn,Provider:null,Consumer:null,_currentValue:_s,_currentValue2:_s,_threadCount:0};function ZA(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hm(0),this.hiddenUpdates=hm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function ZM(t,e,a,o,n,r,s,i,l,c,u,h){return t=new ZA(t,e,a,s,l,c,u,h,i),e=1,r===!0&&(e|=24),r=fo(3,null,null,e),t.current=r,r.stateNode=t,e=p0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},I0(r),t}function KM(t){return t?(t=_i,t):_i}function JM(t,e,a,o,n,r){n=KM(n),o.context===null?o.context=n:o.pendingContext=n,o=Nr(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Or(t,o,e),a!==null&&(uo(a,t,e),mc(a,t,e))}function ZS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Z0(t,e){ZS(t,e),(t=t.alternate)&&ZS(t,e)}function QM(t){if(t.tag===13||t.tag===31){var e=Hs(t,67108864);e!==null&&uo(e,t,67108864),Z0(t,67108864)}}function KS(t){if(t.tag===13||t.tag===31){var e=To();e=t0(e);var a=Hs(t,e);a!==null&&uo(a,t,e),Z0(t,e)}}var Ji=!0;function KA(t,e,a,o){var n=nt.T;nt.T=null;var r=Rt.p;try{Rt.p=2,K0(t,e,a,o)}finally{Rt.p=r,nt.T=n}}function JA(t,e,a,o){var n=nt.T;nt.T=null;var r=Rt.p;try{Rt.p=8,K0(t,e,a,o)}finally{Rt.p=r,nt.T=n}}function K0(t,e,a,o){if(Ji){var n=JI(o);if(n===null)km(t,e,o,Id,a),JS(t,o);else if(jA(n,t,e,a,o))o.stopPropagation();else if(JS(t,o),e&4&&-1<QA.indexOf(t)){for(;n!==null;){var r=$i(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ss(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-bo(s);i.entanglements[1]|=l,s&=~l}En(r),!(Et&6)&&(fd=Co()+500,Kc(0,!1))}}break;case 31:case 13:i=Hs(r,2),i!==null&&uo(i,r,2),Dd(),Z0(r,2)}if(r=JI(o),r===null&&km(t,e,o,Id,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else km(t,e,o,null,a)}}function JI(t){return t=n0(t),J0(t)}var Id=null;function J0(t){if(Id=null,t=Ms(t),t!==null){var e=zc(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=av(e),t!==null)return t;t=null}else if(a===31){if(t=ov(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Id=t,null}function jM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ub()){case cv:return 2;case fv:return 8;case Wu:case db:return 32;case uv:return 268435456;default:return 32}default:return 32}}var QI=!1,Gr=null,qr=null,Wr=null,Nc=new Map,Oc=new Map,wr=[],QA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function JS(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Nc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(e.pointerId)}}function nc(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=$i(e),e!==null&&QM(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function jA(t,e,a,o,n){switch(e){case"focusin":return Gr=nc(Gr,t,e,a,o,n),!0;case"dragenter":return qr=nc(qr,t,e,a,o,n),!0;case"mouseover":return Wr=nc(Wr,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return Nc.set(r,nc(Nc.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Oc.set(r,nc(Oc.get(r)||null,t,e,a,o,n)),!0}return!1}function $M(t){var e=Ms(t.target);if(e!==null){var a=zc(e);if(a!==null){if(e=a.tag,e===13){if(e=av(a),e!==null){t.blockedOn=e,yF(t.priority,function(){KS(a)});return}}else if(e===31){if(e=ov(a),e!==null){t.blockedOn=e,yF(t.priority,function(){KS(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=JI(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);eI=o,a.target.dispatchEvent(o),eI=null}else return e=$i(a),e!==null&&QM(e),t.blockedOn=a,!1;e.shift()}return!0}function QS(t,e,a){Hu(t)&&a.delete(e)}function $A(){QI=!1,Gr!==null&&Hu(Gr)&&(Gr=null),qr!==null&&Hu(qr)&&(qr=null),Wr!==null&&Hu(Wr)&&(Wr=null),Nc.forEach(QS),Oc.forEach(QS)}function vu(t,e){t.blockedOn===e&&(t.blockedOn=null,QI||(QI=!0,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,$A)))}var yu=null;function jS(t){yu!==t&&(yu=t,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,function(){yu===t&&(yu=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if(J0(o||a)===null)continue;break}var r=$i(a);r!==null&&(t.splice(e,3),e-=3,II(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Qi(t){function e(l){return vu(l,t)}Gr!==null&&vu(Gr,t),qr!==null&&vu(qr,t),Wr!==null&&vu(Wr,t),Nc.forEach(e),Oc.forEach(e);for(var a=0;a<wr.length;a++){var o=wr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)$M(a),a.blockedOn===null&&wr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[ho]||null;if(typeof r=="function")s||jS(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[ho]||null)i=s.formAction;else if(J0(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),jS(a)}}}function eC(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Q0(t){this._internalRoot=t}Bd.prototype.render=Q0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));var a=e.current,o=To();JM(a,o,t,e,null,null)};Bd.prototype.unmount=Q0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;JM(t.current,2,null,t,null,null),Dd(),e[ji]=null}};function Bd(t){this._internalRoot=t}Bd.prototype.unstable_scheduleHydration=function(t){if(t){var e=xv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<wr.length&&e!==0&&e<wr[a].priority;a++);wr.splice(a,0,t),a===0&&$M(t)}};var $S=ev.version;if($S!=="19.3.0")throw Error(ie(527,$S,"19.3.0"));Rt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=eb(e),t=t!==null?nv(t):null,t=t===null?null:t.stateNode,t};var ew={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:nt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(rc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!rc.isDisabled&&rc.supportsFiber))try{Hc=rc.inject(ew),_o=rc}catch{}var rc;Ud.createRoot=function(t,e){if(!tv(t))throw Error(ie(299));var a=!1,o="",n=Py,r=By,s=Uy;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ZM(t,1,!1,null,null,a,o,null,n,r,s,eC),t[ji]=e.current,V0(t),new Q0(e)};Ud.hydrateRoot=function(t,e,a){if(!tv(t))throw Error(ie(299));var o=!1,n="",r=Py,s=By,i=Uy,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=ZM(t,1,!0,e,a??null,o,n,l,r,s,i,eC),e.context=KM(null),a=e.current,o=To(),o=t0(o),n=Nr(o),n.callback=null,Or(a,n,o),a=o,e.current.lanes=a,Gc(e,a),En(e),t[ji]=e.current,V0(t),new Bd(e)};Ud.version="19.3.0"});var nC=vr((lP,oC)=>{"use strict";st();function aC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aC)}catch(t){console.error(t)}}aC(),oC.exports=tC()});st();var Zl=Gn(jo()),Kl=Gn(nC());st();var ni=Gn(jo());st();st();var Vp="186";var PC=0,Ux=1,BC=2;var Af=1,UC=2,Nl=3,ps=0,no=1,Bo=2,kn=0,Ol=1,kx=2,Nx=3,Ox=4,kC=5;var $s=100,NC=101,OC=102,zC=103,HC=104,VC=200,GC=201,qC=202,WC=203,zx=204,Hx=205,XC=206,YC=207,ZC=208,KC=209,JC=210,QC=211,jC=212,$C=213,e1=214,sp=0,ip=1,lp=2,Fl=3,cp=4,fp=5,up=6,dp=7,Vx=0,t1=1,a1=2,un=0,Gx=1,qx=2,Wx=3,Xx=4,Yx=5,Zx=6,wf=7;var Kx=300,hs=301,ei=302,Gp=303,qp=304,Ef=306,Pn=1e3,Jo=1001,pp=1002,Aa=1003,o1=1004;var Rf=1005;var Fa=1006,Wp=1007;var Nn=1008;var xo=1009,Jx=1010,Qx=1011,zl=1012,Xp=1013,dn=1014,pn=1015,hn=1016,Yp=1017,Zp=1018,Hl=1020,jx=35902,$x=35899,eg=1021,tg=1022,Qo=1023,Bn=1026,ms=1027,ag=1028,Kp=1029,Is=1030,Jp=1031;var Qp=1033,Df=33776,Lf=33777,Pf=33778,Bf=33779,jp=35840,$p=35841,eh=35842,th=35843,ah=36196,oh=37492,nh=37496,rh=37488,sh=37489,Uf=37490,ih=37491,lh=37808,ch=37809,fh=37810,uh=37811,dh=37812,ph=37813,hh=37814,mh=37815,Ih=37816,xh=37817,gh=37818,Fh=37819,Sh=37820,vh=37821,yh=36492,Mh=36494,Ch=36495,_h=36283,bh=36284,kf=36285,Th=36286;var sf=2300,hp=2301,np=2302,Cx=2303,_x=2400,bx=2401,Tx=2402;var n1=3200;var Ah=0,r1=1,pr="",ka="srgb",lf="srgb-linear",cf="linear",Lt="srgb";var rp=7680;var s1=519,i1=512,l1=513,c1=514,wh=515,f1=516,u1=517,Eh=518,d1=519,p1=35044;var og="300 es",fn=2e3,Sl=2001;function tw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function aw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ff(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function h1(){let t=ff("canvas");return t.style.display="block",t}var rC={},vl=null;function ng(...t){let e="THREE."+t.shift();vl?vl("log",e,...t):console.log(e,...t)}function m1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function tt(...t){t=m1(t);let e="THREE."+t.shift();if(vl)vl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function et(...t){t=m1(t);let e="THREE."+t.shift();if(vl)vl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Ys(...t){let e=t.join(" ");e in rC||(rC[e]=!0,tt(...t))}function I1(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var x1={[sp]:ip,[lp]:up,[cp]:dp,[Fl]:fp,[ip]:sp,[up]:lp,[dp]:cp,[fp]:Fl},Un=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ha=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var j0=Math.PI/180,mp=180/Math.PI;function Vl(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Ha[t&255]+Ha[t>>8&255]+Ha[t>>16&255]+Ha[t>>24&255]+"-"+Ha[e&255]+Ha[e>>8&255]+"-"+Ha[e>>16&15|64]+Ha[e>>24&255]+"-"+Ha[a&63|128]+Ha[a>>8&255]+"-"+Ha[a>>16&255]+Ha[a>>24&255]+Ha[o&255]+Ha[o>>8&255]+Ha[o>>16&255]+Ha[o>>24&255]).toLowerCase()}function xt(t,e,a){return Math.max(e,Math.min(a,t))}function ow(t,e){return(t%e+e)%e}function $0(t,e,a){return(1-a)*t+a*e}function jc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},eo=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],u=o[n+2],h=o[n+3],f=r[s+0],d=r[s+1],I=r[s+2],M=r[s+3];if(h!==M||l!==f||c!==d||u!==I){let m=l*f+c*d+u*I+h*M;m<0&&(f=-f,d=-d,I=-I,M=-M,m=-m);let p=1-i;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);p=Math.sin(p*x)/v,i=Math.sin(i*x)/v,l=l*p+f*i,c=c*p+d*i,u=u*p+I*i,h=h*p+M*i}else{l=l*p+f*i,c=c*p+d*i,u=u*p+I*i,h=h*p+M*i;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[a]=l,e[a+1]=c,e[a+2]=u,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],u=o[n+3],h=r[s],f=r[s+1],d=r[s+2],I=r[s+3];return e[a]=i*I+u*h+l*d-c*f,e[a+1]=l*I+u*f+c*h-i*d,e[a+2]=c*I+u*d+i*f-l*h,e[a+3]=u*I-i*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),u=i(n/2),h=i(r/2),f=l(o/2),d=l(n/2),I=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h-f*d*I;break;case"YXZ":this._x=f*u*h+c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h+f*d*I;break;case"ZXY":this._x=f*u*h-c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h-f*d*I;break;case"ZYX":this._x=f*u*h-c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h+f*d*I;break;case"YZX":this._x=f*u*h+c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h-f*d*I;break;case"XZY":this._x=f*u*h-c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h+f*d*I;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],u=a[6],h=a[10],f=o+i+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,u=a._w;return this._x=o*u+s*i+n*c-r*l,this._y=n*u+s*l+r*i-o*c,this._z=r*u+s*c+o*l-n*i,this._w=s*u-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),u=Math.sin(c);l=Math.sin(l*c)/u,a=Math.sin(a*c)/u,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(sC.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(sC.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),u=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*u,this.y=o+l*u+i*c-r*h,this.z=n+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this.z=xt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this.z=xt(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return ex.copy(this).projectOnVector(e),this.sub(ex)}reflect(e){return this.sub(ex.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ex=new U,sC=new eo,lt=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=i,u[3]=a,u[4]=r,u[5]=l,u[6]=o,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],u=o[4],h=o[7],f=o[2],d=o[5],I=o[8],M=n[0],m=n[3],p=n[6],x=n[1],v=n[4],F=n[7],C=n[2],_=n[5],w=n[8];return r[0]=s*M+i*x+l*C,r[3]=s*m+i*v+l*_,r[6]=s*p+i*F+l*w,r[1]=c*M+u*x+h*C,r[4]=c*m+u*v+h*_,r[7]=c*p+u*F+h*w,r[2]=f*M+d*x+I*C,r[5]=f*m+d*v+I*_,r[8]=f*p+d*F+I*w,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return a*s*u-a*i*c-o*r*u+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=u*s-i*c,f=i*l-u*r,d=c*r-s*l,I=a*h+o*f+n*d;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/I;return e[0]=h*M,e[1]=(n*c-u*o)*M,e[2]=(i*o-n*s)*M,e[3]=f*M,e[4]=(u*a-n*l)*M,e[5]=(n*r-i*a)*M,e[6]=d*M,e[7]=(o*l-c*a)*M,e[8]=(s*a-o*r)*M,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tx.makeScale(e,a)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tx.makeRotation(-e)),this}translate(e,a){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tx=new lt,iC=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lC=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nw(){let t={enabled:!0,workingColorSpace:lf,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Lt&&(n.r=ur(n.r),n.g=ur(n.g),n.b=ur(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Lt&&(n.r=gl(n.r),n.g=gl(n.g),n.b=gl(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pr?cf:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[lf]:{primaries:e,whitePoint:o,transfer:cf,toXYZ:iC,fromXYZ:lC,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ka},outputColorSpaceConfig:{drawingBufferColorSpace:ka}},[ka]:{primaries:e,whitePoint:o,transfer:Lt,toXYZ:iC,fromXYZ:lC,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ka}}}),t}var vt=nw();function ur(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var rl,Ip=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{rl===void 0&&(rl=ff("canvas")),rl.width=e.width,rl.height=e.height;let n=rl.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=rl}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=ff("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=ur(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(ur(a[o]/255)*255):a[o]=ur(a[o]);return{data:a,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rw=0,yl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push(ax(n[s].image)):r.push(ax(n[s]))}else r=ax(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function ax(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ip.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var sw=0,ox=new U,to=class t extends Un{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=Jo,n=Jo,r=Fa,s=Nn,i=Qo,l=xo,c=t.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Vl(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ox).x}get height(){return this.source.getSize(ox).y}get depth(){return this.source.getSize(ox).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){tt(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Jo:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Jo:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};to.DEFAULT_IMAGE=null;to.DEFAULT_MAPPING=Kx;to.DEFAULT_ANISOTROPY=1;var jt=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],I=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(I-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(I+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let v=(c+1)/2,F=(d+1)/2,C=(p+1)/2,_=(u+f)/4,w=(h+M)/4,S=(I+m)/4;return v>F&&v>C?v<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(v),n=_/o,r=w/o):F>C?F<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(F),o=_/n,r=S/n):C<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),o=w/r,n=S/r),this.set(o,n,r,a),this}let x=Math.sqrt((m-I)*(m-I)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-I)/x,this.y=(h-M)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this.z=xt(this.z,e.z,a.z),this.w=xt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this.z=xt(this.z,e,a),this.w=xt(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xp=class extends Un{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new jt(0,0,e,a),this.scissorTest=!1,this.viewport=new jt(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new to(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Fa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new yl(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class extends xp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},uf=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gp=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vt=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,u,h,f,d,I,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,u,h,f,d,I,M,m)}set(e,a,o,n,r,s,i,l,c,u,h,f,d,I,M,m){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=I,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/sl.setFromMatrixColumn(e,0).length(),r=1/sl.setFromMatrixColumn(e,1).length(),s=1/sl.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*u,d=s*h,I=i*u,M=i*h;a[0]=l*u,a[4]=-l*h,a[8]=c,a[1]=d+I*c,a[5]=f-M*c,a[9]=-i*l,a[2]=M-f*c,a[6]=I+d*c,a[10]=s*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,I=c*u,M=c*h;a[0]=f+M*i,a[4]=I*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*u,a[9]=-i,a[2]=d*i-I,a[6]=M+f*i,a[10]=s*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,I=c*u,M=c*h;a[0]=f-M*i,a[4]=-s*h,a[8]=I+d*i,a[1]=d+I*i,a[5]=s*u,a[9]=M-f*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let f=s*u,d=s*h,I=i*u,M=i*h;a[0]=l*u,a[4]=I*c-d,a[8]=f*c+M,a[1]=l*h,a[5]=M*c+f,a[9]=d*c-I,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let f=s*l,d=s*c,I=i*l,M=i*c;a[0]=l*u,a[4]=M-f*h,a[8]=I*h+d,a[1]=h,a[5]=s*u,a[9]=-i*u,a[2]=-c*u,a[6]=d*h+I,a[10]=f-M*h}else if(e.order==="XZY"){let f=s*l,d=s*c,I=i*l,M=i*c;a[0]=l*u,a[4]=-h,a[8]=c*u,a[1]=f*h+M,a[5]=s*u,a[9]=d*h-I,a[2]=I*h-d,a[6]=i*u,a[10]=M*h+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iw,e,lw)}lookAt(e,a,o){let n=this.elements;return Eo.subVectors(e,a),Eo.lengthSq()===0&&(Eo.z=1),Eo.normalize(),$r.crossVectors(o,Eo),$r.lengthSq()===0&&(Math.abs(o.z)===1?Eo.x+=1e-4:Eo.z+=1e-4,Eo.normalize(),$r.crossVectors(o,Eo)),$r.normalize(),kd.crossVectors(Eo,$r),n[0]=$r.x,n[4]=kd.x,n[8]=Eo.x,n[1]=$r.y,n[5]=kd.y,n[9]=Eo.y,n[2]=$r.z,n[6]=kd.z,n[10]=Eo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],u=o[1],h=o[5],f=o[9],d=o[13],I=o[2],M=o[6],m=o[10],p=o[14],x=o[3],v=o[7],F=o[11],C=o[15],_=n[0],w=n[4],S=n[8],T=n[12],A=n[1],D=n[5],H=n[9],O=n[13],R=n[2],k=n[6],$=n[10],q=n[14],oe=n[3],N=n[7],K=n[11],te=n[15];return r[0]=s*_+i*A+l*R+c*oe,r[4]=s*w+i*D+l*k+c*N,r[8]=s*S+i*H+l*$+c*K,r[12]=s*T+i*O+l*q+c*te,r[1]=u*_+h*A+f*R+d*oe,r[5]=u*w+h*D+f*k+d*N,r[9]=u*S+h*H+f*$+d*K,r[13]=u*T+h*O+f*q+d*te,r[2]=I*_+M*A+m*R+p*oe,r[6]=I*w+M*D+m*k+p*N,r[10]=I*S+M*H+m*$+p*K,r[14]=I*T+M*O+m*q+p*te,r[3]=x*_+v*A+F*R+C*oe,r[7]=x*w+v*D+F*k+C*N,r[11]=x*S+v*H+F*$+C*K,r[15]=x*T+v*O+F*q+C*te,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],I=e[3],M=e[7],m=e[11],p=e[15],x=l*d-c*f,v=i*d-c*h,F=i*f-l*h,C=s*d-c*u,_=s*f-l*u,w=s*h-i*u;return a*(M*x-m*v+p*F)-o*(I*x-m*C+p*_)+n*(I*v-M*C+p*w)-r*(I*F-M*_+m*w)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],u=e[10];return a*(s*u-i*c)-o*(r*u-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],I=e[12],M=e[13],m=e[14],p=e[15],x=a*i-o*s,v=a*l-n*s,F=a*c-r*s,C=o*l-n*i,_=o*c-r*i,w=n*c-r*l,S=u*M-h*I,T=u*m-f*I,A=u*p-d*I,D=h*m-f*M,H=h*p-d*M,O=f*p-d*m,R=x*O-v*H+F*D+C*A-_*T+w*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return e[0]=(i*O-l*H+c*D)*k,e[1]=(n*H-o*O-r*D)*k,e[2]=(M*w-m*_+p*C)*k,e[3]=(f*_-h*w-d*C)*k,e[4]=(l*A-s*O-c*T)*k,e[5]=(a*O-n*A+r*T)*k,e[6]=(m*F-I*w-p*v)*k,e[7]=(u*w-f*F+d*v)*k,e[8]=(s*H-i*A+c*S)*k,e[9]=(o*A-a*H-r*S)*k,e[10]=(I*_-M*F+p*x)*k,e[11]=(h*F-u*_-d*x)*k,e[12]=(i*T-s*D-l*S)*k,e[13]=(a*D-o*T+n*S)*k,e[14]=(M*v-I*C-m*x)*k,e[15]=(u*C-h*v+f*x)*k,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,u=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,u*i+o,u*l-n*s,0,c*l-n*i,u*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,u=s+s,h=i+i,f=r*c,d=r*u,I=r*h,M=s*u,m=s*h,p=i*h,x=l*c,v=l*u,F=l*h,C=o.x,_=o.y,w=o.z;return n[0]=(1-(M+p))*C,n[1]=(d+F)*C,n[2]=(I-v)*C,n[3]=0,n[4]=(d-F)*_,n[5]=(1-(f+p))*_,n[6]=(m+x)*_,n[7]=0,n[8]=(I+v)*w,n[9]=(m-x)*w,n[10]=(1-(f+M))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=sl.set(n[0],n[1],n[2]).length(),i=sl.set(n[4],n[5],n[6]).length(),l=sl.set(n[8],n[9],n[10]).length();r<0&&(s=-s),rn.copy(this);let c=1/s,u=1/i,h=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,a.setFromRotationMatrix(rn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=fn,l=!1){let c=this.elements,u=2*r/(a-e),h=2*r/(o-n),f=(a+e)/(a-e),d=(o+n)/(o-n),I,M;if(l)I=r/(s-r),M=s*r/(s-r);else if(i===fn)I=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(i===Sl)I=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=I,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=fn,l=!1){let c=this.elements,u=2/(a-e),h=2/(o-n),f=-(a+e)/(a-e),d=-(o+n)/(o-n),I,M;if(l)I=1/(s-r),M=s/(s-r);else if(i===fn)I=-2/(s-r),M=-(s+r)/(s-r);else if(i===Sl)I=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=I,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},sl=new U,rn=new Vt,iw=new U(0,0,0),lw=new U(1,1,1),$r=new U,kd=new U,Eo=new U,cC=new Vt,fC=new eo,dr=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(xt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return cC.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cC,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return fC.setFromEuler(this),this.setFromQuaternion(fC,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dr.DEFAULT_ORDER="XYZ";var Ml=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cw=0,uC=new U,il=new eo,sr=new Vt,Nd=new U,$c=new U,fw=new U,uw=new eo,dC=new U(1,0,0),pC=new U(0,1,0),hC=new U(0,0,1),mC={type:"added"},dw={type:"removed"},ll={type:"childadded",child:null},nx={type:"childremoved",child:null},ao=class t extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new U,a=new dr,o=new eo,n=new U(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Vt},normalMatrix:{value:new lt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return il.setFromAxisAngle(e,a),this.quaternion.multiply(il),this}rotateOnWorldAxis(e,a){return il.setFromAxisAngle(e,a),this.quaternion.premultiply(il),this}rotateX(e){return this.rotateOnAxis(dC,e)}rotateY(e){return this.rotateOnAxis(pC,e)}rotateZ(e){return this.rotateOnAxis(hC,e)}translateOnAxis(e,a){return uC.copy(e).applyQuaternion(this.quaternion),this.position.add(uC.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(dC,e)}translateY(e){return this.translateOnAxis(pC,e)}translateZ(e){return this.translateOnAxis(hC,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?Nd.copy(e):Nd.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),$c.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt($c,Nd,this.up):sr.lookAt(Nd,$c,this.up),this.quaternion.setFromRotationMatrix(sr),n&&(sr.extractRotation(n.matrixWorld),il.setFromRotationMatrix(sr),this.quaternion.premultiply(il.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mC),ll.child=e,this.dispatchEvent(ll),ll.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(dw),nx.child=e,this.dispatchEvent(nx),nx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mC),ll.child=e,this.dispatchEvent(ll),ll.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($c,e,fw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($c,uw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),I=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),f.length>0&&(o.skeletons=f),d.length>0&&(o.animations=d),I.length>0&&(o.nodes=I)}return o.object=n,o;function s(i){let l=[];for(let c in i){let u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ao.DEFAULT_UP=new U(0,1,0);ao.DEFAULT_MATRIX_AUTO_UPDATE=!0;ao.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},pw={type:"move"},Cl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let M of e.hand.values()){let m=a.getJointPose(M,o),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,I=.005;c.inputState.pinching&&f>d+I?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-I&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Dn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},g1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Od={h:0,s:0,l:0};function rx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var ft=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ka){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=vt.workingColorSpace){return this.r=e,this.g=a,this.b=o,vt.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=vt.workingColorSpace){if(e=ow(e,1),a=xt(a,0,1),o=xt(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=rx(s,r,e+1/3),this.g=rx(s,r,e),this.b=rx(s,r,e-1/3)}return vt.colorSpaceToWorking(this,n),this}setStyle(e,a=ka){function o(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:tt("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ka){let o=g1[e.toLowerCase()];return o!==void 0?this.setHex(o,a):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ka){return vt.workingToColorSpace(Va.copy(this),e),Math.round(xt(Va.r*255,0,255))*65536+Math.round(xt(Va.g*255,0,255))*256+Math.round(xt(Va.b*255,0,255))}getHexString(e=ka){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=vt.workingColorSpace){vt.workingToColorSpace(Va.copy(this),a);let o=Va.r,n=Va.g,r=Va.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,u=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=u<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,a=vt.workingColorSpace){return vt.workingToColorSpace(Va.copy(this),a),e.r=Va.r,e.g=Va.g,e.b=Va.b,e}getStyle(e=ka){vt.workingToColorSpace(Va.copy(this),e);let a=Va.r,o=Va.g,n=Va.b;return e!==ka?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL(es),this.setHSL(es.h+e,es.s+a,es.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL(es),e.getHSL(Od);let o=$0(es.h,Od.h,a),n=$0(es.s,Od.s,a),r=$0(es.l,Od.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Va=new ft;ft.NAMES=g1;var _l=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},sn=new U,ir=new U,sx=new U,lr=new U,cl=new U,fl=new U,IC=new U,ix=new U,lx=new U,cx=new U,fx=new jt,ux=new jt,dx=new jt,ns=class t{constructor(e=new U,a=new U,o=new U){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),sn.subVectors(e,a),n.cross(sn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){sn.subVectors(n,a),ir.subVectors(o,a),sx.subVectors(e,a);let s=sn.dot(sn),i=sn.dot(ir),l=sn.dot(sx),c=ir.dot(ir),u=ir.dot(sx),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-i*u)*f,I=(s*u-i*l)*f;return r.set(1-d-I,I,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,lr.x),l.addScaledVector(s,lr.y),l.addScaledVector(i,lr.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return fx.setScalar(0),ux.setScalar(0),dx.setScalar(0),fx.fromBufferAttribute(e,a),ux.fromBufferAttribute(e,o),dx.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(fx,r.x),s.addScaledVector(ux,r.y),s.addScaledVector(dx,r.z),s}static isFrontFacing(e,a,o,n){return sn.subVectors(o,a),ir.subVectors(e,a),sn.cross(ir).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),sn.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;cl.subVectors(n,o),fl.subVectors(r,o),ix.subVectors(e,o);let l=cl.dot(ix),c=fl.dot(ix);if(l<=0&&c<=0)return a.copy(o);lx.subVectors(e,n);let u=cl.dot(lx),h=fl.dot(lx);if(u>=0&&h<=u)return a.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),a.copy(o).addScaledVector(cl,s);cx.subVectors(e,r);let d=cl.dot(cx),I=fl.dot(cx);if(I>=0&&d<=I)return a.copy(r);let M=d*c-l*I;if(M<=0&&c>=0&&I<=0)return i=c/(c-I),a.copy(o).addScaledVector(fl,i);let m=u*I-d*h;if(m<=0&&h-u>=0&&d-I>=0)return IC.subVectors(r,n),i=(h-u)/(h-u+(d-I)),a.copy(n).addScaledVector(IC,i);let p=1/(m+M+f);return s=M*p,i=f*p,a.copy(o).addScaledVector(cl,s).addScaledVector(fl,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rs=class{constructor(e=new U(1/0,1/0,1/0),a=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(ln.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(ln.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=ln.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,ln):ln.fromBufferAttribute(r,s),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zd.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),zd.copy(o.boundingBox)),zd.applyMatrix4(e.matrixWorld),this.union(zd)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ef),Hd.subVectors(this.max,ef),ul.subVectors(e.a,ef),dl.subVectors(e.b,ef),pl.subVectors(e.c,ef),ts.subVectors(dl,ul),as.subVectors(pl,dl),Gs.subVectors(ul,pl);let a=[0,-ts.z,ts.y,0,-as.z,as.y,0,-Gs.z,Gs.y,ts.z,0,-ts.x,as.z,0,-as.x,Gs.z,0,-Gs.x,-ts.y,ts.x,0,-as.y,as.x,0,-Gs.y,Gs.x,0];return!px(a,ul,dl,pl,Hd)||(a=[1,0,0,0,1,0,0,0,1],!px(a,ul,dl,pl,Hd))?!1:(Vd.crossVectors(ts,as),a=[Vd.x,Vd.y,Vd.z],px(a,ul,dl,pl,Hd))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,zd=new rs,ul=new U,dl=new U,pl=new U,ts=new U,as=new U,Gs=new U,ef=new U,Hd=new U,Vd=new U,qs=new U;function px(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){qs.fromArray(t,r);let i=n.x*Math.abs(qs.x)+n.y*Math.abs(qs.y)+n.z*Math.abs(qs.z),l=e.dot(qs),c=a.dot(qs),u=o.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}var ua=new U,Gd=new Ee,hw=0,qa=class extends Un{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hw++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=p1,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)Gd.fromBufferAttribute(this,a),Gd.applyMatrix3(e),this.setXY(a,Gd.x,Gd.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyMatrix3(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyMatrix4(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyNormalMatrix(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.transformDirection(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=jc(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=mo(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=jc(a,this.array)),a}setX(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=jc(a,this.array)),a}setY(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=jc(a,this.array)),a}setZ(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=jc(a,this.array)),a}setW(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array),r=mo(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var df=class extends qa{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var pf=class extends qa{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var da=class extends qa{constructor(e,a,o){super(new Float32Array(e),a,o)}},mw=new rs,tf=new U,hx=new U,bl=class{constructor(e=new U,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):mw.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tf.subVectors(e,this.center);let a=tf.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(tf,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tf.copy(e.center).add(hx)),this.expandByPoint(tf.copy(e.center).sub(hx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Iw=0,Ko=new Vt,mx=new ao,hl=new U,Ro=new rs,af=new rs,Ta=new U,oo=class t extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tw(e)?pf:df)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new lt().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ko.makeRotationFromQuaternion(e),this.applyMatrix4(Ko),this}rotateX(e){return Ko.makeRotationX(e),this.applyMatrix4(Ko),this}rotateY(e){return Ko.makeRotationY(e),this.applyMatrix4(Ko),this}rotateZ(e){return Ko.makeRotationZ(e),this.applyMatrix4(Ko),this}translate(e,a,o){return Ko.makeTranslation(e,a,o),this.applyMatrix4(Ko),this}scale(e,a,o){return Ko.makeScale(e,a,o),this.applyMatrix4(Ko),this}lookAt(e){return mx.lookAt(e),mx.updateMatrix(),this.applyMatrix4(mx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hl).negate(),this.translate(hl.x,hl.y,hl.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new da(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];Ro.setFromBufferAttribute(r),this.morphTargetsRelative?(Ta.addVectors(this.boundingBox.min,Ro.min),this.boundingBox.expandByPoint(Ta),Ta.addVectors(this.boundingBox.max,Ro.max),this.boundingBox.expandByPoint(Ta)):(this.boundingBox.expandByPoint(Ro.min),this.boundingBox.expandByPoint(Ro.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let o=this.boundingSphere.center;if(Ro.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];af.setFromBufferAttribute(i),this.morphTargetsRelative?(Ta.addVectors(Ro.min,af.min),Ro.expandByPoint(Ta),Ta.addVectors(Ro.max,af.max),Ro.expandByPoint(Ta)):(Ro.expandByPoint(af.min),Ro.expandByPoint(af.max))}Ro.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Ta.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Ta));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)Ta.fromBufferAttribute(i,c),l&&(hl.fromBufferAttribute(e,c),Ta.add(hl)),n=Math.max(n,o.distanceToSquared(Ta))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new qa(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let S=0;S<o.count;S++)i[S]=new U,l[S]=new U;let c=new U,u=new U,h=new U,f=new Ee,d=new Ee,I=new Ee,M=new U,m=new U;function p(S,T,A){c.fromBufferAttribute(o,S),u.fromBufferAttribute(o,T),h.fromBufferAttribute(o,A),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),I.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),I.sub(f);let D=1/(d.x*I.y-I.x*d.y);isFinite(D)&&(M.copy(u).multiplyScalar(I.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-I.x).multiplyScalar(D),i[S].add(M),i[T].add(M),i[A].add(M),l[S].add(m),l[T].add(m),l[A].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,T=x.length;S<T;++S){let A=x[S],D=A.start,H=A.count;for(let O=D,R=D+H;O<R;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new U,F=new U,C=new U,_=new U;function w(S){C.fromBufferAttribute(n,S),_.copy(C);let T=i[S];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),F.crossVectors(_,T);let D=F.dot(l[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,D)}for(let S=0,T=x.length;S<T;++S){let A=x[S],D=A.start,H=A.count;for(let O=D,R=D+H;O<R;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new qa(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let f=0,d=o.count;f<d;f++)o.setXYZ(f,0,0,0);let n=new U,r=new U,s=new U,i=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let I=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(a,I),r.fromBufferAttribute(a,M),s.fromBufferAttribute(a,m),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),i.fromBufferAttribute(o,I),l.fromBufferAttribute(o,M),c.fromBufferAttribute(o,m),i.add(u),l.add(u),c.add(u),o.setXYZ(I,i.x,i.y,i.z),o.setXYZ(M,l.x,l.y,l.z),o.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=a.count;f<d;f+=3)n.fromBufferAttribute(a,f+0),r.fromBufferAttribute(a,f+1),s.fromBufferAttribute(a,f+2),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Ta.fromBufferAttribute(e,a),Ta.normalize(),e.setXYZ(a,Ta.x,Ta.y,Ta.z)}toNonIndexed(){function e(i,l){let c=i.array,u=i.itemSize,h=i.normalized,f=new c.constructor(l.length*u),d=0,I=0;for(let M=0,m=l.length;M<m;M++){i.isInterleavedBufferAttribute?d=l[M]*i.data.stride+i.offset:d=l[M]*u;for(let p=0;p<u;p++)f[I++]=c[d++]}return new qa(f,u,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(a))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(a));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ix=new U,xw=new U,gw=new lt,cn=class{constructor(e=new U(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=Ix.subVectors(o,a).cross(xw.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(Ix),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||gw.getNormalMatrix(e),n=this.coplanarPoint(Ix).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fw=0,ss=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=Ol,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zx,this.blendDst=Hx,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rp,this.stencilZFail=rp,this.stencilZPass=rp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){tt(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new cn().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new Ee().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fr=new U,xx=new U,qd=new U,Wd=new U,hf=class{constructor(e=new U,a=new U(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=fr.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,a),fr.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){xx.copy(e).add(a).multiplyScalar(.5),qd.copy(a).sub(e).normalize(),Wd.copy(this.origin).sub(xx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(qd),i=Wd.dot(this.direction),l=-Wd.dot(qd),c=Wd.lengthSq(),u=Math.abs(1-s*s),h,f,d,I;if(u>0)if(h=s*l-i,f=s*i-l,I=r*u,h>=0)if(f>=-I)if(f<=I){let M=1/u;h*=M,f*=M,d=h*(h+s*f+2*i)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f<=-I?(h=Math.max(0,-(-s*r+i)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=I?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+i)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(xx).addScaledVector(qd,f),d}intersectSphere(e,a){if(e.radius<0)return null;fr.subVectors(e.center,this.origin);let o=fr.dot(this.direction),n=fr.dot(fr)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(o=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(o=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(i=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,u=i.z,h=e.x-s.x,f=e.y-s.y,d=e.z-s.z,I=a.x-s.x,M=a.y-s.y,m=a.z-s.z,p=o.x-s.x,x=o.y-s.y,v=o.z-s.z,F=Math.abs(l),C=Math.abs(c),_=Math.abs(u),w,S,T,A,D,H,O,R,k,$,q,oe;if(F>=C&&F>=_?(T=l,H=h,k=I,oe=p,l>=0?(w=c,S=u,A=f,D=d,O=M,R=m,$=x,q=v):(w=u,S=c,A=d,D=f,O=m,R=M,$=v,q=x)):C>=_?(T=c,H=f,k=M,oe=x,c>=0?(w=u,S=l,A=d,D=h,O=m,R=I,$=v,q=p):(w=l,S=u,A=h,D=d,O=I,R=m,$=p,q=v)):(T=u,H=d,k=m,oe=v,u>=0?(w=l,S=c,A=h,D=f,O=I,R=M,$=p,q=x):(w=c,S=l,A=f,D=h,O=M,R=I,$=x,q=p)),T===0)return null;let N=w/T,K=S/T,te=1/T,Ae=A-N*H,Se=D-K*H,We=O-N*k,z=R-K*k,je=$-N*oe,Z=q-K*oe,J=je*z-Z*We,ve=Ae*Z-Se*je,ke=We*Se-z*Ae;if(n){if(J<0||ve<0||ke<0)return null}else if((J<0||ve<0||ke<0)&&(J>0||ve>0||ke>0))return null;let he=J+ve+ke;if(he===0)return null;let Ve=te*(J*H+ve*k+ke*oe);return(he>0?Ve<0:Ve>0)?null:this.at(Ve/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zs=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=Vx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xC=new Vt,Ws=new hf,Xd=new bl,gC=new U,Yd=new U,Zd=new U,Kd=new U,gx=new U,Jd=new U,FC=new U,Qd=new U,ra=class extends ao{constructor(e=new oo,a=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){Jd.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=i[l],h=r[l];u!==0&&(gx.fromBufferAttribute(h,e),s?Jd.addScaledVector(gx,u):Jd.addScaledVector(gx.sub(a),u))}a.add(Jd)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Xd.copy(o.boundingSphere),Xd.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(Xd.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Xd,gC)===null||Ws.origin.distanceToSquared(gC)>(e.far-e.near)**2))&&(xC.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(xC),!(o.boundingBox!==null&&Ws.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,Ws)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let I=0,M=f.length;I<M;I++){let m=f[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(i.count,Math.min(m.start+m.count,d.start+d.count));for(let F=x,C=v;F<C;F+=3){let _=i.getX(F),w=i.getX(F+1),S=i.getX(F+2);n=jd(this,p,e,o,c,u,h,_,w,S),n&&(n.faceIndex=Math.floor(F/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),M=Math.min(i.count,d.start+d.count);for(let m=I,p=M;m<p;m+=3){let x=i.getX(m),v=i.getX(m+1),F=i.getX(m+2);n=jd(this,s,e,o,c,u,h,x,v,F),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let I=0,M=f.length;I<M;I++){let m=f[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let F=x,C=v;F<C;F+=3){let _=F,w=F+1,S=F+2;n=jd(this,p,e,o,c,u,h,_,w,S),n&&(n.faceIndex=Math.floor(F/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=I,p=M;m<p;m+=3){let x=m,v=m+1,F=m+2;n=jd(this,s,e,o,c,u,h,x,v,F),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}}};function Sw(t,e,a,o,n,r,s,i){let l;if(e.side===no?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===ps,i),l===null)return null;Qd.copy(i),Qd.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(Qd);return c<a.near||c>a.far?null:{distance:c,point:Qd.clone(),object:t}}function jd(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,Yd),t.getVertexPosition(l,Zd),t.getVertexPosition(c,Kd);let u=Sw(t,e,a,o,Yd,Zd,Kd,FC);if(u){let h=new U;ns.getBarycoord(FC,Yd,Zd,Kd,h),n&&(u.uv=ns.getInterpolatedAttribute(n,i,l,c,h,new Ee)),r&&(u.uv1=ns.getInterpolatedAttribute(r,i,l,c,h,new Ee)),s&&(u.normal=ns.getInterpolatedAttribute(s,i,l,c,h,new U),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let f={a:i,b:l,c,normal:new U,materialIndex:0};ns.getNormal(Yd,Zd,Kd,f.normal),u.face=f,u.barycoord=h}return u}var Tl=class extends to{constructor(e=null,a=1,o=1,n,r,s,i,l,c=Aa,u=Aa,h,f){super(null,s,i,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=new bl,vw=new Ee(.5,.5),$d=new U,Al=class{constructor(e=new cn,a=new cn,o=new cn,n=new cn,r=new cn,s=new cn){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=fn,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],I=r[8],M=r[9],m=r[10],p=r[11],x=r[12],v=r[13],F=r[14],C=r[15];if(n[0].setComponents(c-s,d-u,p-I,C-x).normalize(),n[1].setComponents(c+s,d+u,p+I,C+x).normalize(),n[2].setComponents(c+i,d+h,p+M,C+v).normalize(),n[3].setComponents(c-i,d-h,p-M,C-v).normalize(),o)n[4].setComponents(l,f,m,F).normalize(),n[5].setComponents(c-l,d-f,p-m,C-F).normalize();else if(n[4].setComponents(c-l,d-f,p-m,C-F).normalize(),a===fn)n[5].setComponents(c+l,d+f,p+m,C+F).normalize();else if(a===Sl)n[5].setComponents(l,f,m,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Xs.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let a=vw.distanceTo(e.center);return Xs.radius=.7071067811865476+a,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if($d.x=n.normal.x>0?e.max.x:e.min.x,$d.y=n.normal.y>0?e.max.y:e.min.y,$d.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($d)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mf=class extends to{constructor(e=[],a=hs,o,n,r,s,i,l,c,u){super(e,a,o,n,r,s,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ks=class extends to{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends to{constructor(e,a,o=dn,n,r,s,i=Aa,l=Aa,c,u=Bn,h=1){if(u!==Bn&&u!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:h};super(f,n,r,s,i,l,u,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},Fp=class extends is{constructor(e,a=dn,o=hs,n,r,s=Aa,i=Aa,l,c=Bn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},If=class extends to{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wl=class t extends oo{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=0,d=0;I("z","y","x",-1,-1,o,a,e,s,r,0),I("z","y","x",1,-1,o,a,-e,s,r,1),I("x","z","y",1,1,e,o,a,n,s,2),I("x","z","y",1,-1,e,o,-a,n,s,3),I("x","y","z",1,-1,e,a,o,n,r,4),I("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(u,3)),this.setAttribute("uv",new da(h,2));function I(M,m,p,x,v,F,C,_,w,S,T){let A=F/w,D=C/S,H=F/2,O=C/2,R=_/2,k=w+1,$=S+1,q=0,oe=0,N=new U;for(let K=0;K<$;K++){let te=K*D-O;for(let Ae=0;Ae<k;Ae++){let Se=Ae*A-H;N[M]=Se*x,N[m]=te*v,N[p]=R,c.push(N.x,N.y,N.z),N[M]=0,N[m]=0,N[p]=_>0?1:-1,u.push(N.x,N.y,N.z),h.push(Ae/w),h.push(1-K/S),q+=1}}for(let K=0;K<S;K++)for(let te=0;te<w;te++){let Ae=f+te+k*K,Se=f+te+k*(K+1),We=f+(te+1)+k*(K+1),z=f+(te+1)+k*K;l.push(Ae,Se,z),l.push(Se,We,z),oe+=6}i.addGroup(d,oe,T),d+=oe,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Do=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let u=o[n],f=o[n+1]-u,d=(s-u)/f;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new Ee:new U);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new U,n=[],r=[],s=[],i=new U,l=new Vt;for(let d=0;d<=e;d++){let I=d/e;n[d]=this.getTangentAt(I,new U)}r[0]=new U,s[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),f<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let I=Math.acos(xt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,I))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(xt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let I=1;I<=e;I++)r[I].applyMatrix4(l.makeRotationAxis(n[I],d*I)),s[I].crossVectors(n[I],r[I])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},El=class extends Do{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new Ee){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sp=class extends El{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function rg(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,u,h){let f=(s-r)/c-(i-r)/(c+u)+(i-s)/u,d=(i-s)/u-(l-s)/(u+h)+(l-i)/h;f*=u,d*=u,n(s,i,f,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var SC=new U,vC=new U,Fx=new rg,Sx=new rg,vx=new rg,Rl=class extends Do{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new U){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,u;this.closed||i>0?c=n[(i-1)%r]:(vC.subVectors(n[0],n[1]).add(n[0]),c=vC);let h=n[i%r],f=n[(i+1)%r];if(this.closed||i+2<r?u=n[(i+2)%r]:(SC.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=SC),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,I=Math.pow(c.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);M<1e-4&&(M=1),I<1e-4&&(I=M),m<1e-4&&(m=M),Fx.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,I,M,m),Sx.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,I,M,m),vx.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,I,M,m)}else this.curveType==="catmullrom"&&(Fx.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Sx.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),vx.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return o.set(Fx.calc(l),Sx.calc(l),vx.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yC(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function yw(t,e){let a=1-t;return a*a*e}function Mw(t,e){return 2*(1-t)*t*e}function Cw(t,e){return t*t*e}function nf(t,e,a,o){return yw(t,e)+Mw(t,a)+Cw(t,o)}function _w(t,e){let a=1-t;return a*a*a*e}function bw(t,e){let a=1-t;return 3*a*a*t*e}function Tw(t,e){return 3*(1-t)*t*t*e}function Aw(t,e){return t*t*t*e}function rf(t,e,a,o,n){return _w(t,e)+bw(t,a)+Tw(t,o)+Aw(t,n)}var xf=class extends Do{constructor(e=new Ee,a=new Ee,o=new Ee,n=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new Ee){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(rf(e,n.x,r.x,s.x,i.x),rf(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vp=class extends Do{constructor(e=new U,a=new U,o=new U,n=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new U){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(rf(e,n.x,r.x,s.x,i.x),rf(e,n.y,r.y,s.y,i.y),rf(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gf=class extends Do{constructor(e=new Ee,a=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Ee){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Ee){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yp=class extends Do{constructor(e=new U,a=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new U){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new U){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ff=class extends Do{constructor(e=new Ee,a=new Ee,o=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new Ee){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(nf(e,n.x,r.x,s.x),nf(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mp=class extends Do{constructor(e=new U,a=new U,o=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new U){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(nf(e,n.x,r.x,s.x),nf(e,n.y,r.y,s.y),nf(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sf=class extends Do{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Ee){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(yC(i,l.x,c.x,u.x,h.x),yC(i,l.y,c.y,u.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new Ee().fromArray(n))}return this}},Ax=Object.freeze({__proto__:null,ArcCurve:Sp,CatmullRomCurve3:Rl,CubicBezierCurve:xf,CubicBezierCurve3:vp,EllipseCurve:El,LineCurve:gf,LineCurve3:yp,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:Mp,SplineCurve:Sf}),Cp=class extends Do{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ax[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let u=l[c];o&&o.equals(u)||(a.push(u),o=u)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new Ax[n.type]().fromJSON(n))}return this}},Js=class extends Cp{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new gf(this.currentPoint.clone(),new Ee(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new Ff(this.currentPoint.clone(),new Ee(e,a),new Ee(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new xf(this.currentPoint.clone(),new Ee(e,a),new Ee(o,n),new Ee(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new Sf(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,a+u,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new El(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ls=class extends Js{constructor(e){super(e),this.uuid=Vl(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new Js().fromJSON(n))}return this}};function ww(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=F1(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=Pw(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let u=i,h=l;for(let f=a;f<n;f+=a){let d=t[f],I=t[f+1];d<i&&(i=d),I<l&&(l=I),d>u&&(u=d),I>h&&(h=I)}c=Math.max(u-i,h-l),c=c!==0?32767/c:0}return vf(r,s,a,i,l,c,0),s}function F1(t,e,a,o,n){let r;if(n===Ww(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=MC(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=MC(s/o|0,t[s],t[s+1],r);return r&&Dl(r,r.next)&&(Mf(r),r=r.next),r}function Qs(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(Dl(a,a.next)||ea(a.prev,a,a.next)===0)){if(Mf(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function vf(t,e,a,o,n,r,s){if(!t)return;!s&&r&&Ow(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?Rw(t,o,n,r):Ew(t)){e.push(l.i,t.i,c.i),Mf(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=Dw(Qs(t),e),vf(t,e,a,o,n,r,2)):s===2&&Lw(t,e,a,o,n,r):vf(Qs(t),e,a,o,n,r,1);break}}}function Ew(t){let e=t.prev,a=t,o=t.next;if(ea(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,u=Math.min(n,r,s),h=Math.min(i,l,c),f=Math.max(n,r,s),d=Math.max(i,l,c),I=o.next;for(;I!==e;){if(I.x>=u&&I.x<=f&&I.y>=h&&I.y<=d&&of(n,i,r,l,s,c,I.x,I.y)&&ea(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function Rw(t,e,a,o){let n=t.prev,r=t,s=t.next;if(ea(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,u=n.y,h=r.y,f=s.y,d=Math.min(i,l,c),I=Math.min(u,h,f),M=Math.max(i,l,c),m=Math.max(u,h,f),p=wx(d,I,e,a,o),x=wx(M,m,e,a,o),v=t.prevZ,F=t.nextZ;for(;v&&v.z>=p&&F&&F.z<=x;){if(v.x>=d&&v.x<=M&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&of(i,u,l,h,c,f,v.x,v.y)&&ea(v.prev,v,v.next)>=0||(v=v.prevZ,F.x>=d&&F.x<=M&&F.y>=I&&F.y<=m&&F!==n&&F!==s&&of(i,u,l,h,c,f,F.x,F.y)&&ea(F.prev,F,F.next)>=0))return!1;F=F.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=M&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&of(i,u,l,h,c,f,v.x,v.y)&&ea(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;F&&F.z<=x;){if(F.x>=d&&F.x<=M&&F.y>=I&&F.y<=m&&F!==n&&F!==s&&of(i,u,l,h,c,f,F.x,F.y)&&ea(F.prev,F,F.next)>=0)return!1;F=F.nextZ}return!0}function Dw(t,e){let a=t;do{let o=a.prev,n=a.next.next;!Dl(o,n)&&v1(o,a,a.next,n)&&yf(o,n)&&yf(n,o)&&(e.push(o.i,a.i,n.i),Mf(a),Mf(a.next),a=t=n),a=a.next}while(a!==t);return Qs(a)}function Lw(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&Vw(s,i)){let l=y1(s,i);s=Qs(s,s.next),l=Qs(l,l.next),vf(s,e,a,o,n,r,0),vf(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function Pw(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=F1(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(Hw(c))}n.sort(Bw);for(let r=0;r<n.length;r++)a=Uw(n[r],a);return a}function Bw(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function Uw(t,e){let a=kw(t,e);if(!a)return e;let o=y1(a,t);return Qs(o,o.next),Qs(a,a.next)}function kw(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(Dl(t,a))return a;do{if(Dl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,u=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&S1(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);yf(a,t)&&(h<u||h===u&&(a.x>s.x||a.x===s.x&&Nw(s,a)))&&(s=a,u=h)}a=a.next}while(a!==i);return s}function Nw(t,e){return ea(t.prev,t,e.prev)<0&&ea(e.next,t,t.next)<0}function Ow(t,e,a,o){let n=t;do n.z===0&&(n.z=wx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,zw(n)}function zw(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function wx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Hw(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function S1(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function of(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&S1(t,e,a,o,n,r,s,i)}function Vw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Gw(t,e)&&(yf(t,e)&&yf(e,t)&&qw(t,e)&&(ea(t.prev,t,e.prev)||ea(t,e.prev,e))||Dl(t,e)&&ea(t.prev,t,t.next)>0&&ea(e.prev,e,e.next)>0)}function ea(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function Dl(t,e){return t.x===e.x&&t.y===e.y}function v1(t,e,a,o){let n=tp(ea(t,e,a)),r=tp(ea(t,e,o)),s=tp(ea(a,o,t)),i=tp(ea(a,o,e));return!!(n!==r&&s!==i||n===0&&ep(t,a,e)||r===0&&ep(t,o,e)||s===0&&ep(a,t,o)||i===0&&ep(a,e,o))}function ep(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function tp(t){return t>0?1:t<0?-1:0}function Gw(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&v1(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function yf(t,e){return ea(t.prev,t,t.next)<0?ea(t,e,t.next)>=0&&ea(t,t.prev,e)>=0:ea(t,e,t.prev)<0||ea(t,t.next,e)<0}function qw(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function y1(t,e){let a=Ex(t.i,t.x,t.y),o=Ex(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function MC(t,e,a,o){let n=Ex(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function Mf(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ex(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ww(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var Rx=class{static triangulate(e,a,o=2){return ww(e,a,o)}},Ln=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];CC(e),_C(o,e);let s=e.length;a.forEach(CC);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,_C(o,a[l]);let i=Rx.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function CC(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function _C(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var Ll=class t extends oo{constructor(e=new ls([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new da(n,3)),this.setAttribute("uv",new da(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,u=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,f=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,I=a.bevelSize!==void 0?a.bevelSize:d-.1,M=a.bevelOffset!==void 0?a.bevelOffset:0,m=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,x=a.UVGenerator!==void 0?a.UVGenerator:Xw,v,F=!1,C,_,w,S;if(p){v=p.getSpacedPoints(u),F=!0,f=!1;let j=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,j),_=new U,w=new U,S=new U}f||(m=0,d=0,I=0,M=0);let T=i.extractPoints(c),A=T.shape,D=T.holes;if(!Ln.isClockWise(A)){A=A.reverse();for(let j=0,re=D.length;j<re;j++){let ne=D[j];Ln.isClockWise(ne)&&(D[j]=ne.reverse())}}function O(j){let ne=10000000000000001e-36,se=j[0];for(let fe=1;fe<=j.length;fe++){let Ne=fe%j.length,De=j[Ne],Me=De.x-se.x,Oe=De.y-se.y,E=Me*Me+Oe*Oe,at=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(se.x),Math.abs(se.y)),Xe=ne*at*at;if(E<=Xe){j.splice(Ne,1),fe--;continue}se=De}}O(A),D.forEach(O);let R=D.length,k=A;for(let j=0;j<R;j++){let re=D[j];A=A.concat(re)}function $(j,re,ne){return re||et("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(re,ne)}let q=A.length;function oe(j,re,ne){let se,fe,Ne,De=j.x-re.x,Me=j.y-re.y,Oe=ne.x-j.x,E=ne.y-j.y,at=De*De+Me*Me,Xe=De*E-Me*Oe;if(Math.abs(Xe)>Number.EPSILON){let b=Math.sqrt(at),g=Math.sqrt(Oe*Oe+E*E),B=re.x-Me/b,X=re.y+De/b,ee=ne.x-E/g,me=ne.y+Oe/g,de=((ee-B)*E-(me-X)*Oe)/(De*E-Me*Oe);se=B+De*de-j.x,fe=X+Me*de-j.y;let Y=se*se+fe*fe;if(Y<=2)return new Ee(se,fe);Ne=Math.sqrt(Y/2)}else{let b=!1;De>Number.EPSILON?Oe>Number.EPSILON&&(b=!0):De<-Number.EPSILON?Oe<-Number.EPSILON&&(b=!0):Math.sign(Me)===Math.sign(E)&&(b=!0),b?(se=-Me,fe=De,Ne=Math.sqrt(at)):(se=De,fe=Me,Ne=Math.sqrt(at/2))}return new Ee(se/Ne,fe/Ne)}let N=[];for(let j=0,re=k.length,ne=re-1,se=j+1;j<re;j++,ne++,se++)ne===re&&(ne=0),se===re&&(se=0),N[j]=oe(k[j],k[ne],k[se]);let K=[],te,Ae=N.concat();for(let j=0,re=R;j<re;j++){let ne=D[j];te=[];for(let se=0,fe=ne.length,Ne=fe-1,De=se+1;se<fe;se++,Ne++,De++)Ne===fe&&(Ne=0),De===fe&&(De=0),te[se]=oe(ne[se],ne[Ne],ne[De]);K.push(te),Ae=Ae.concat(te)}let Se;if(m===0)Se=Ln.triangulateShape(k,D);else{let j=[],re=[];for(let ne=0;ne<m;ne++){let se=ne/m,fe=d*Math.cos(se*Math.PI/2),Ne=I*Math.sin(se*Math.PI/2)+M;for(let De=0,Me=k.length;De<Me;De++){let Oe=$(k[De],N[De],Ne);ve(Oe.x,Oe.y,-fe),se===0&&j.push(Oe)}for(let De=0,Me=R;De<Me;De++){let Oe=D[De];te=K[De];let E=[];for(let at=0,Xe=Oe.length;at<Xe;at++){let b=$(Oe[at],te[at],Ne);ve(b.x,b.y,-fe),se===0&&E.push(b)}se===0&&re.push(E)}}Se=Ln.triangulateShape(j,re)}let We=Se.length,z=I+M;for(let j=0;j<q;j++){let re=f?$(A[j],Ae[j],z):A[j];F?(w.copy(C.normals[0]).multiplyScalar(re.x),_.copy(C.binormals[0]).multiplyScalar(re.y),S.copy(v[0]).add(w).add(_),ve(S.x,S.y,S.z)):ve(re.x,re.y,0)}for(let j=1;j<=u;j++)for(let re=0;re<q;re++){let ne=f?$(A[re],Ae[re],z):A[re];F?(w.copy(C.normals[j]).multiplyScalar(ne.x),_.copy(C.binormals[j]).multiplyScalar(ne.y),S.copy(v[j]).add(w).add(_),ve(S.x,S.y,S.z)):ve(ne.x,ne.y,h/u*j)}for(let j=m-1;j>=0;j--){let re=j/m,ne=d*Math.cos(re*Math.PI/2),se=I*Math.sin(re*Math.PI/2)+M;for(let fe=0,Ne=k.length;fe<Ne;fe++){let De=$(k[fe],N[fe],se);ve(De.x,De.y,h+ne)}for(let fe=0,Ne=D.length;fe<Ne;fe++){let De=D[fe];te=K[fe];for(let Me=0,Oe=De.length;Me<Oe;Me++){let E=$(De[Me],te[Me],se);F?ve(E.x,E.y+v[u-1].y,v[u-1].x+ne):ve(E.x,E.y,h+ne)}}}je(),Z();function je(){let j=n.length/3;if(f){let re=0,ne=q*re;for(let se=0;se<We;se++){let fe=Se[se];ke(fe[2]+ne,fe[1]+ne,fe[0]+ne)}re=u+m*2,ne=q*re;for(let se=0;se<We;se++){let fe=Se[se];ke(fe[0]+ne,fe[1]+ne,fe[2]+ne)}}else{for(let re=0;re<We;re++){let ne=Se[re];ke(ne[2],ne[1],ne[0])}for(let re=0;re<We;re++){let ne=Se[re];ke(ne[0]+q*u,ne[1]+q*u,ne[2]+q*u)}}o.addGroup(j,n.length/3-j,0)}function Z(){let j=n.length/3,re=0;J(k,re),re+=k.length;for(let ne=0,se=D.length;ne<se;ne++){let fe=D[ne];J(fe,re),re+=fe.length}o.addGroup(j,n.length/3-j,1)}function J(j,re){let ne=j.length;for(;--ne>=0;){let se=ne,fe=ne-1;fe<0&&(fe=j.length-1);for(let Ne=0,De=u+m*2;Ne<De;Ne++){let Me=q*Ne,Oe=q*(Ne+1),E=re+se+Me,at=re+fe+Me,Xe=re+fe+Oe,b=re+se+Oe;he(E,at,Xe,b)}}}function ve(j,re,ne){l.push(j),l.push(re),l.push(ne)}function ke(j,re,ne){Ve(j),Ve(re),Ve(ne);let se=n.length/3,fe=x.generateTopUV(o,n,se-3,se-2,se-1);Qe(fe[0]),Qe(fe[1]),Qe(fe[2])}function he(j,re,ne,se){Ve(j),Ve(re),Ve(se),Ve(re),Ve(ne),Ve(se);let fe=n.length/3,Ne=x.generateSideWallUV(o,n,fe-6,fe-3,fe-2,fe-1);Qe(Ne[0]),Qe(Ne[1]),Qe(Ne[3]),Qe(Ne[1]),Qe(Ne[2]),Qe(Ne[3])}function Ve(j){n.push(l[j*3+0]),n.push(l[j*3+1]),n.push(l[j*3+2])}function Qe(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return Yw(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ax[n.type]().fromJSON(n)),new t(o,e.options)}},Xw={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],u=e[n*3+1];return[new Ee(r,s),new Ee(i,l),new Ee(c,u)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],u=e[o*3+1],h=e[o*3+2],f=e[n*3],d=e[n*3+1],I=e[n*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(i-u)<Math.abs(s-c)?[new Ee(s,1-l),new Ee(c,1-h),new Ee(f,1-I),new Ee(M,1-p)]:[new Ee(i,1-l),new Ee(u,1-h),new Ee(d,1-I),new Ee(m,1-p)]}};function Yw(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var js=class t extends oo{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,u=l+1,h=e/i,f=a/l,d=[],I=[],M=[],m=[];for(let p=0;p<u;p++){let x=p*f-s;for(let v=0;v<c;v++){let F=v*h-r;I.push(F,-x,0),M.push(0,0,1),m.push(v/i),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<i;x++){let v=x+c*p,F=x+c*(p+1),C=x+1+c*(p+1),_=x+1+c*p;d.push(v,F,_),d.push(F,C,_)}this.setIndex(d),this.setAttribute("position",new da(I,3)),this.setAttribute("normal",new da(M,3)),this.setAttribute("uv",new da(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Cf=class t extends oo{constructor(e=new ls([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(i,l,u),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new da(n,3)),this.setAttribute("normal",new da(r,3)),this.setAttribute("uv",new da(s,2));function c(u){let h=n.length/3,f=u.extractPoints(a),d=f.shape,I=f.holes;Ln.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=I.length;m<p;m++){let x=I[m];Ln.isClockWise(x)===!0&&(I[m]=x.reverse())}let M=Ln.triangulateShape(d,I);for(let m=0,p=I.length;m<p;m++){let x=I[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];n.push(x.x,x.y,0),r.push(0,0,1),s.push(x.x,x.y)}for(let m=0,p=M.length;m<p;m++){let x=M[m],v=x[0]+h,F=x[1]+h,C=x[2]+h;o.push(v,F,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return Zw(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function Zw(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Pl=class t extends oo{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new U,d=new U,I=new U;for(let M=0;M<=o;M++){let m=s+M/o*i;for(let p=0;p<=n;p++){let x=p/n*r;d.x=(e+a*Math.cos(m))*Math.cos(x),d.y=(e+a*Math.cos(m))*Math.sin(x),d.z=a*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),I.subVectors(d,f).normalize(),u.push(I.x,I.y,I.z),h.push(p/n),h.push(M/o)}}for(let M=1;M<=o;M++)for(let m=1;m<=n;m++){let p=(n+1)*M+m-1,x=(n+1)*(M-1)+m-1,v=(n+1)*(M-1)+m,F=(n+1)*M+m;l.push(p,x,F),l.push(x,v,F)}this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(u,3)),this.setAttribute("uv",new da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ti(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if(bC(n))n.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if(bC(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function Wa(t){let e={};for(let a=0;a<t.length;a++){let o=ti(t[a]);for(let n in o)e[n]=o[n]}return e}function bC(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Kw(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function sg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var M1={clone:ti,merge:Wa},Jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lo=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jw,this.fragmentShader=Qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=Kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new ft().setHex(n.value);break;case"v2":this.uniforms[o].value=new Ee().fromArray(n.value);break;case"v3":this.uniforms[o].value=new U().fromArray(n.value);break;case"v4":this.uniforms[o].value=new jt().fromArray(n.value);break;case"m3":this.uniforms[o].value=new lt().fromArray(n.value);break;case"m4":this.uniforms[o].value=new Vt().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_p=class extends Lo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bl=class extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cs=class extends Bl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bp=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tp=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ml(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function yx(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var fs=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ap=class extends fs{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_x,endingEnd:_x}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case bx:r=e,i=2*a-o;break;case Tx:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case bx:s=e,l=2*o-a;break;case Tx:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,u=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,I=(o-a)/(n-a),M=I*I,m=M*I,p=-f*m+2*f*M-f*I,x=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*I+1,v=(-1-d)*m+(1.5+d)*M+.5*I,F=d*m-d*M;for(let C=0;C!==i;++C)r[C]=p*s[u+C]+x*s[c+C]+v*s[l+C]+F*s[h+C];return r}},wp=class extends fs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(o-a)/(n-a),h=1-u;for(let f=0;f!==i;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}},Ep=class extends fs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Rp=class extends fs{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this.inTangents,h=this.outTangents;if(!u||!h){let I=(o-a)/(n-a),M=1-I;for(let m=0;m!==i;++m)r[m]=s[c+m]*M+s[l+m]*I;return r}let f=i*2,d=e-1;for(let I=0;I!==i;++I){let M=s[c+I],m=s[l+I],p=d*f+I*2,x=h[p],v=h[p+1],F=e*f+I*2,C=u[F],_=u[F+1],w=$w(o,a,x,C,n);r[I]=C1(w,M,v,_,m)}return r}};function C1(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function jw(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function $w(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=C1(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=jw(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Po=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(a,this.TimeBufferType),this.values=ml(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),yx(e.settings)&&(o.settings={inTangents:ml(e.settings.inTangents,Array),outTangents:ml(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Rp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case sf:a=this.InterpolantFactoryMethodDiscrete;break;case hp:a=this.InterpolantFactoryMethodLinear;break;case np:a=this.InterpolantFactoryMethodSmooth;break;case Cx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return tt("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sf;case this.InterpolantFactoryMethodLinear:return hp;case this.InterpolantFactoryMethodSmooth:return np;case this.InterpolantFactoryMethodBezier:return Cx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;yx(this.settings)&&(TC(this.settings.inTangents,e),TC(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&aw(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===np,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,f=h-o,d=h+o;for(let I=0;I!==o;++I){let M=a[h+I];if(M!==a[f+I]||M!==a[d+I]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,f=s*o;for(let d=0;d!==o;++d)a[f+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,yx(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function TC(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Po.prototype.ValueTypeName="";Po.prototype.TimeBufferType=Float32Array;Po.prototype.ValueBufferType=Float32Array;Po.prototype.DefaultInterpolation=hp;var us=class extends Po{constructor(e,a,o){super(e,a,o)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=sf;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Dp=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Dp.prototype.ValueTypeName="color";var Lp=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Lp.prototype.ValueTypeName="number";var Pp=class extends fs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let u=c+i;c!==u;c+=4)eo.slerpFlat(r,0,s,c-i,s,c,l);return r}},_f=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}};_f.prototype.ValueTypeName="quaternion";_f.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Po{constructor(e,a,o){super(e,a,o)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=sf;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Bp=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Bp.prototype.ValueTypeName="vector";var Up=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(u){i++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,i),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],I=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return I}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_1=new Up,kp=class{constructor(e){this.manager=e!==void 0?e:_1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};kp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Np=class extends ao{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var Mx=new Vt,AC=new U,wC=new U,Op=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=xo,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;AC.setFromMatrixPosition(e.matrixWorld),a.position.copy(AC),wC.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(wC),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){Mx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(Mx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Sl||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(Mx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ap=new U,op=new eo,Rn=new U,bf=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ap,op,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ap,op,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(ap,op,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ap,op,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new U,EC=new Ee,RC=new Ee,Ga=class extends bf{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=mp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(j0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mp*2*Math.atan(Math.tan(j0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,a){return this.getViewBounds(e,EC,RC),a.subVectors(RC,EC)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(j0*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Ul=class extends bf{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Dx=class extends Op{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kl=class extends Np{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ao.DEFAULT_UP),this.updateMatrix(),this.target=new ao,this.shadow=new Dx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var Il=-90,xl=1,zp=class extends ao{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ga(Il,xl,e,a);n.layers=this.layers,this.add(n);let r=new Ga(Il,xl,e,a);r.layers=this.layers,this.add(r);let s=new Ga(Il,xl,e,a);s.layers=this.layers,this.add(s);let i=new Ga(Il,xl,e,a);i.layers=this.layers,this.add(i);let l=new Ga(Il,xl,e,a);l.layers=this.layers,this.add(l);let c=new Ga(Il,xl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===fn)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),I=e.xr.enabled;e.xr.enabled=!1;let M=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=M,e.setRenderTarget(o,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),e.setRenderTarget(h,f,d),e.xr.enabled=I,o.texture.needsPMREMUpdate=!0}},Hp=class extends Ga{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ig="\\[\\]\\.:\\/",e2=new RegExp("["+ig+"]","g"),lg="[^"+ig+"]",t2="[^"+ig.replace("\\.","")+"]",a2=/((?:WC+[\/:])*)/.source.replace("WC",lg),o2=/(WCOD+)?/.source.replace("WCOD",t2),n2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lg),r2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lg),s2=new RegExp("^"+a2+o2+n2+r2+"$"),i2=["material","materials","bones","map"],Lx=class{constructor(e,a,o){let n=o||Zt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},Zt=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e2,"")}static parseTrackName(e){let a=s2.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);i2.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Lx;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fP=new Float32Array(1);var DC=new Vt,Tf=class{constructor(e,a,o=0,n=1/0){this.ray=new hf(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):et("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return DC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(DC),this}intersectObject(e,a=!0,o=[]){return Px(e,this,o,a),o.sort(LC),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)Px(e[n],this,o,a);return o.sort(LC),o}};function LC(t,e){return t.distance-e.distance}function Px(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)Px(r[s],e,a,!0)}}var Bx=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function cg(t,e,a,o){let n=l2(o);switch(a){case eg:return t*e;case ag:return t*e/n.components*n.byteLength;case Kp:return t*e/n.components*n.byteLength;case Is:return t*e*2/n.components*n.byteLength;case Jp:return t*e*2/n.components*n.byteLength;case tg:return t*e*3/n.components*n.byteLength;case Qo:return t*e*4/n.components*n.byteLength;case Qp:return t*e*4/n.components*n.byteLength;case Df:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $p:case th:return Math.max(t,16)*Math.max(e,8)/4;case jp:case eh:return Math.max(t,8)*Math.max(e,8)/2;case ah:case oh:case rh:case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nh:case Uf:case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yh:case Mh:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _h:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kf:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function l2(t){switch(t){case xo:case Jx:return{byteLength:1,components:1};case zl:case Qx:case hn:return{byteLength:2,components:1};case Yp:case Zp:return{byteLength:2,components:4};case dn:case Xp:case pn:return{byteLength:4,components:1};case jx:case $x:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);function Y1(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function c2(t){let e=new WeakMap;function a(i,l){let c=i.array,u=i.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,I)=>d.start-I.start);let f=0;for(let d=1;d<h.length;d++){let I=h[f],M=h[d];M.start<=I.start+I.count+1?I.count=Math.max(I.count,M.start+M.count-I.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,I=h.length;d<I;d++){let M=h[d];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let u=e.get(i);(!u||u.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var f2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u2=`#ifdef USE_ALPHAHASH
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
#endif`,d2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I2=`#ifdef USE_AOMAP
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
#endif`,x2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g2=`#ifdef USE_BATCHING
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
#endif`,F2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M2=`#ifdef USE_IRIDESCENCE
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
#endif`,C2=`#ifdef USE_BUMPMAP
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
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L2=`#define PI 3.141592653589793
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
} // validated`,P2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B2=`vec3 transformedNormal = objectNormal;
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
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z2="gl_FragColor = linearToOutputTexel( gl_FragColor );",H2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V2=`#ifdef USE_ENVMAP
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
#endif`,G2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,W2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q2=`#ifdef USE_GRADIENTMAP
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
}`,j2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aE=`#ifdef USE_ENVMAP
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
#endif`,oE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,lE=`uniform sampler2D dfgLUT;
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
}`,cE=`
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SE=`#if defined( USE_POINTS_UV )
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
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KE=`float getShadowMask() {
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,eR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nR=`#ifdef USE_TRANSMISSION
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
#endif`,rR=`#ifdef USE_TRANSMISSION
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
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uR=`uniform sampler2D t2D;
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
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`#include <common>
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
}`,xR=`#if DEPTH_PACKING == 3200
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
}`,gR=`#define DISTANCE
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
}`,FR=`#define DISTANCE
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
}`,SR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`uniform float scale;
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
}`,MR=`uniform vec3 diffuse;
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
}`,CR=`#include <common>
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
}`,_R=`uniform vec3 diffuse;
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
}`,bR=`#define LAMBERT
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
}`,TR=`#define LAMBERT
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
}`,AR=`#define MATCAP
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
}`,wR=`#define MATCAP
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
}`,ER=`#define NORMAL
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
}`,RR=`#define NORMAL
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
}`,DR=`#define PHONG
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
}`,LR=`#define PHONG
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
}`,PR=`#define STANDARD
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
}`,BR=`#define STANDARD
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
}`,UR=`#define TOON
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
}`,kR=`#define TOON
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
}`,NR=`uniform float size;
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
}`,OR=`uniform vec3 diffuse;
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
}`,zR=`#include <common>
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
}`,HR=`uniform vec3 color;
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
}`,VR=`uniform float rotation;
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
}`,GR=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:f2,alphahash_pars_fragment:u2,alphamap_fragment:d2,alphamap_pars_fragment:p2,alphatest_fragment:h2,alphatest_pars_fragment:m2,aomap_fragment:I2,aomap_pars_fragment:x2,batching_pars_vertex:g2,batching_vertex:F2,begin_vertex:S2,beginnormal_vertex:v2,bsdfs:y2,iridescence_fragment:M2,bumpmap_pars_fragment:C2,clipping_planes_fragment:_2,clipping_planes_pars_fragment:b2,clipping_planes_pars_vertex:T2,clipping_planes_vertex:A2,color_fragment:w2,color_pars_fragment:E2,color_pars_vertex:R2,color_vertex:D2,common:L2,cube_uv_reflection_fragment:P2,defaultnormal_vertex:B2,displacementmap_pars_vertex:U2,displacementmap_vertex:k2,emissivemap_fragment:N2,emissivemap_pars_fragment:O2,colorspace_fragment:z2,colorspace_pars_fragment:H2,envmap_fragment:V2,envmap_common_pars_fragment:G2,envmap_pars_fragment:q2,envmap_pars_vertex:W2,envmap_physical_pars_fragment:aE,envmap_vertex:X2,fog_vertex:Y2,fog_pars_vertex:Z2,fog_fragment:K2,fog_pars_fragment:J2,gradientmap_pars_fragment:Q2,lightmap_pars_fragment:j2,lights_lambert_fragment:$2,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:oE,lights_toon_pars_fragment:nE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:iE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:fE,lights_fragment_end:uE,lightprobes_pars_fragment:dE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:IE,map_fragment:xE,map_pars_fragment:gE,map_particle_fragment:FE,map_particle_pars_fragment:SE,metalnessmap_fragment:vE,metalnessmap_pars_fragment:yE,morphinstance_vertex:ME,morphcolor_vertex:CE,morphnormal_vertex:_E,morphtarget_pars_vertex:bE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:wE,normal_pars_fragment:EE,normal_pars_vertex:RE,normal_vertex:DE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:kE,opaque_fragment:NE,packing:OE,premultiplied_alpha_fragment:zE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:YE,shadowmap_vertex:ZE,shadowmask_pars_fragment:KE,skinbase_vertex:JE,skinning_pars_vertex:QE,skinning_vertex:jE,skinnormal_vertex:$E,specularmap_fragment:eR,specularmap_pars_fragment:tR,tonemapping_fragment:aR,tonemapping_pars_fragment:oR,transmission_fragment:nR,transmission_pars_fragment:rR,uv_pars_fragment:sR,uv_pars_vertex:iR,uv_vertex:lR,worldpos_vertex:cR,background_vert:fR,background_frag:uR,backgroundCube_vert:dR,backgroundCube_frag:pR,cube_vert:hR,cube_frag:mR,depth_vert:IR,depth_frag:xR,distance_vert:gR,distance_frag:FR,equirect_vert:SR,equirect_frag:vR,linedashed_vert:yR,linedashed_frag:MR,meshbasic_vert:CR,meshbasic_frag:_R,meshlambert_vert:bR,meshlambert_frag:TR,meshmatcap_vert:AR,meshmatcap_frag:wR,meshnormal_vert:ER,meshnormal_frag:RR,meshphong_vert:DR,meshphong_frag:LR,meshphysical_vert:PR,meshphysical_frag:BR,meshtoon_vert:UR,meshtoon_frag:kR,points_vert:NR,points_frag:OR,shadow_vert:zR,shadow_frag:HR,sprite_vert:VR,sprite_frag:GR},Be={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},zn={basic:{uniforms:Wa([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Wa([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Wa([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Wa([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Wa([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ft(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Wa([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Wa([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Wa([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Wa([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Wa([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Wa([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Wa([Be.common,Be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Wa([Be.lights,Be.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zn.physical={uniforms:Wa([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Rh={r:0,b:0,g:0},qR=new Vt,Z1=new lt;Z1.set(-1,0,0,0,1,0,0,0,1);function WR(t,e,a,o,n,r){let s=new ft(0),i=n===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let F=x.backgroundBlurriness>0;v=e.get(v,F)}return v}function I(x){let v=!1,F=d(x);F===null?m(s,i):F&&F.isColor&&(m(F,1),v=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,v){let F=d(v);F&&(F.isCubeTexture||F.mapping===Ef)?(c===void 0&&(c=new ra(new wl(1,1,1),new Lo({name:"BackgroundCubeMaterial",uniforms:ti(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:no,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=F,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qR.makeRotationFromEuler(v.backgroundRotation)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z1),c.material.toneMapped=vt.getTransfer(F.colorSpace)!==Lt,(u!==F||h!==F.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=F,h=F.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new ra(new js(2,2),new Lo({name:"BackgroundMaterial",uniforms:ti(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=vt.getTransfer(F.colorSpace)!==Lt,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(u!==F||h!==F.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=F,h=F.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(Rh,sg(t)),a.buffers.color.setClear(Rh.r,Rh.g,Rh.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),i=v,m(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(x){i=x,m(s,i)},render:I,addToRenderList:M,dispose:p}}function XR(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=f(null),r=n,s=!1;function i(D,H,O,R,k){let $=!1,q=h(D,R,O,H);r!==q&&(r=q,c(r.object)),$=d(D,R,O,k),$&&I(D,R,O,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,F(D,H,O,R),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function h(D,H,O,R){let k=R.wireframe===!0,$=o[H.id];$===void 0&&($={},o[H.id]=$);let q=D.isInstancedMesh===!0?D.id:0,oe=$[q];oe===void 0&&(oe={},$[q]=oe);let N=oe[O.id];N===void 0&&(N={},oe[O.id]=N);let K=N[k];return K===void 0&&(K=f(l()),N[k]=K),K}function f(D){let H=[],O=[],R=[];for(let k=0;k<a;k++)H[k]=0,O[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:R,object:D,attributes:{},index:null}}function d(D,H,O,R){let k=r.attributes,$=H.attributes,q=0,oe=O.getAttributes();for(let N in oe)if(oe[N].location>=0){let te=k[N],Ae=$[N];if(Ae===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;q++}return r.attributesNum!==q||r.index!==R}function I(D,H,O,R){let k={},$=H.attributes,q=0,oe=O.getAttributes();for(let N in oe)if(oe[N].location>=0){let te=$[N];te===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),k[N]=Ae,q++}r.attributes=k,r.attributesNum=q,r.index=R}function M(){let D=r.newAttributes;for(let H=0,O=D.length;H<O;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let O=r.newAttributes,R=r.enabledAttributes,k=r.attributeDivisors;O[D]=1,R[D]===0&&(t.enableVertexAttribArray(D),R[D]=1),k[D]!==H&&(t.vertexAttribDivisor(D,H),k[D]=H)}function x(){let D=r.newAttributes,H=r.enabledAttributes;for(let O=0,R=H.length;O<R;O++)H[O]!==D[O]&&(t.disableVertexAttribArray(O),H[O]=0)}function v(D,H,O,R,k,$,q){q===!0?t.vertexAttribIPointer(D,H,O,k,$):t.vertexAttribPointer(D,H,O,R,k,$)}function F(D,H,O,R){M();let k=R.attributes,$=O.getAttributes(),q=H.defaultAttributeValues;for(let oe in $){let N=$[oe];if(N.location>=0){let K=k[oe];if(K===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let te=K.normalized,Ae=K.itemSize,Se=e.get(K);if(Se===void 0)continue;let We=Se.buffer,z=Se.type,je=Se.bytesPerElement,Z=z===t.INT||z===t.UNSIGNED_INT||K.gpuType===Xp;if(K.isInterleavedBufferAttribute){let J=K.data,ve=J.stride,ke=K.offset;if(J.isInstancedInterleavedBuffer){for(let he=0;he<N.locationSize;he++)p(N.location+he,J.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<N.locationSize;he++)m(N.location+he);t.bindBuffer(t.ARRAY_BUFFER,We);for(let he=0;he<N.locationSize;he++)v(N.location+he,Ae/N.locationSize,z,te,ve*je,(ke+Ae/N.locationSize*he)*je,Z)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)p(N.location+J,K.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<N.locationSize;J++)m(N.location+J);t.bindBuffer(t.ARRAY_BUFFER,We);for(let J=0;J<N.locationSize;J++)v(N.location+J,Ae/N.locationSize,z,te,Ae*je,Ae/N.locationSize*J*je,Z)}}else if(q!==void 0){let te=q[oe];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(N.location,te);break;case 3:t.vertexAttrib3fv(N.location,te);break;case 4:t.vertexAttrib4fv(N.location,te);break;default:t.vertexAttrib1fv(N.location,te)}}}}x()}function C(){T();for(let D in o){let H=o[D];for(let O in H){let R=H[O];for(let k in R){let $=R[k];for(let q in $)u($[q].object),delete $[q];delete R[k]}}delete o[D]}}function _(D){if(o[D.id]===void 0)return;let H=o[D.id];for(let O in H){let R=H[O];for(let k in R){let $=R[k];for(let q in $)u($[q].object),delete $[q];delete R[k]}}delete o[D.id]}function w(D){for(let H in o){let O=o[H];for(let R in O){let k=O[R];if(k[D.id]===void 0)continue;let $=k[D.id];for(let q in $)u($[q].object),delete $[q];delete k[D.id]}}}function S(D){for(let H in o){let O=o[H],R=D.isInstancedMesh===!0?D.id:0,k=O[R];if(k!==void 0){for(let $ in k){let q=k[$];for(let oe in q)u(q[oe].object),delete q[oe];delete k[$]}delete O[R],Object.keys(O).length===0&&delete o[H]}}}function T(){A(),s=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:T,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:_,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function YR(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,u){u!==0&&(t.drawArraysInstanced(o,l,c,u),a.update(c,o,u))}function i(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];a.update(f,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function ZR(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==Qo&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(w){let S=w===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xo&&w!==pn&&!S&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=a.logarithmicDepthBuffer===!0,f=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&f===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),I=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),F=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),_=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:I,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:F,maxSamples:C,samples:_}}function KR(t){let e=this,a=null,o=0,n=!1,r=!1,s=new cn,i=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||o!==0||n;return n=f,o=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){a=u(h,f,0)},this.setState=function(h,f,d){let I=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!n||I===null||I.length===0||r&&!m)r?u(null):c();else{let x=r?0:o,v=x*4,F=p.clippingState||null;l.value=F,F=u(I,f,v,d);for(let C=0;C!==v;++C)F[C]=a[C];p.clippingState=F,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(h,f,d,I){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=l.value,I!==!0||m===null){let p=d+M*4,x=f.matrixWorldInverse;i.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,F=d;v!==M;++v,F+=4)s.copy(h[v]).applyMatrix4(x,i),s.normal.toArray(m,F),m[F+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var ql=4,JR=6,QR=20,jR=256,Nf=new Ul,b1=new ft,fg=null,ug=0,dg=0,pg=!1,$R=new U,ai=new U,Xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=$R}=r;fg=this._renderer.getRenderTarget(),ug=this._renderer.getActiveCubeFace(),dg=this._renderer.getActiveMipmapLevel(),pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fg,ug,dg),this._renderer.xr.enabled=pg,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===hs||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fg=this._renderer.getRenderTarget(),ug=this._renderer.getActiveCubeFace(),dg=this._renderer.getActiveMipmapLevel(),pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Fa,minFilter:Fa,generateMipmaps:!1,type:hn,format:Qo,colorSpace:lf,depthBuffer:!1},n=T1(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T1(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eD(r)),this._blurMaterial=aD(r,e,a),this._ggxMaterial=tD(r,e,a)}return n}_compileMaterial(e){let a=new ra(new oo,e);this._renderer.compile(a,Nf)}_sceneToCubeUV(e,a,o,n,r){let l=new Ga(90,1,a,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(b1),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ra(new wl,new Zs({name:"PMREM.Background",side:no,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(b1),p=!0);for(let v=0;v<6;v++){let F=v%3;F===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):F===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let C=this._cubeSize;Gl(n,F*C,v>2?C:0,C,C),h.setRenderTarget(n),p&&h.render(M,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===hs||e.mapping===ei;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=w1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A1());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;Gl(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,Nf)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),u=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:I}=this,M=this._sizeLods[o],m=3*M*(o>I-ql?o-I+ql:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=I-a,Gl(r,m,p,3*M,2*M),n.setRenderTarget(r),n.render(i,Nf),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=I-o,Gl(e,m,p,3*M,2*M),n.setRenderTarget(e),n.render(i,Nf)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-ql?n-this._lodMax+ql:0),f=4*(this._cubeSize-u);Gl(a,h,f,3*u,2*u),s.setRenderTarget(a),s.render(l,Nf)}};function eD(t){let e=[],a=[],o=t,n=t-ql+1+JR;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,I=new Float32Array(d*f*h),M=new Float32Array(d*f*h);for(let p=0;p<h;p++){let x=p%3*2/3-1,v=p>2?0:-1,F=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];I.set(F,d*f*p);for(let C=0;C<f;C++){let _=u[C*2]*2-1,w=u[C*2+1]*2-1;p===0?ai.set(1,w,_):p===1?ai.set(-_,1,-w):p===2?ai.set(-_,w,1):p===3?ai.set(-1,w,-_):p===4?ai.set(-_,-1,w):ai.set(_,w,-1),ai.toArray(M,(p*f+C)*d)}}let m=new oo;m.setAttribute("position",new qa(I,d)),m.setAttribute("outputDirection",new qa(M,d)),a.push(new ra(m,null)),o>ql&&o--}return{lodMeshes:a,sizeLods:e}}function T1(t,e,a){let o=new Io(t,e,a);return o.texture.mapping=Ef,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Gl(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function tD(t,e,a){return new Lo({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function aD(t,e,a){return new Lo({name:"SphericalGaussianBlur",defines:{SAMPLES:QR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function A1(){return new Lo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function w1(){return new Lo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lh=class extends Io{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new mf(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new wl(5,5,5),r=new Lo({name:"CubemapFromEquirect",uniforms:ti(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:no,blending:kn});r.uniforms.tEquirect.value=a;let s=new ra(n,r),i=a.minFilter;return a.minFilter===Nn&&(a.minFilter=Fa),new zp(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function oD(t){let e=new WeakMap,a=new WeakMap,o=null;function n(f,d=!1){return f==null?null:d?s(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Gp||d===qp)if(e.has(f)){let I=e.get(f).texture;return i(I,f.mapping)}else{let I=f.image;if(I&&I.height>0){let M=new Lh(I.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),i(M.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,I=d===Gp||d===qp,M=d===hs||d===ei;if(I||M){let m=a.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return o===null&&(o=new Xl(t)),m=I?o.fromEquirectangular(f,m):o.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,a.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return I&&x&&x.height>0||M&&x&&l(x)?(o===null&&(o=new Xl(t)),m=I?o.fromEquirectangular(f):o.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,a.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function i(f,d){return d===Gp?f.mapping=hs:d===qp&&(f.mapping=ei),f}function l(f){let d=0,I=6;for(let M=0;M<I;M++)f[M]!==void 0&&d++;return d===I}function c(f){let d=f.target;d.removeEventListener("dispose",c);let I=e.get(d);I!==void 0&&(e.delete(d),I.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let I=a.get(d);I!==void 0&&(a.delete(d),I.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function nD(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&Ys("WebGLRenderer: "+o+" extension not supported."),n}}}function rD(t,e,a,o){let n={},r=new WeakMap;function s(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let I in f.attributes)e.remove(f.attributes[I]);f.removeEventListener("dispose",s),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,a.memory.geometries--}function i(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,a.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,I=h.attributes.position,M=0;if(I===void 0)return;if(d!==null){let x=d.array;M=d.version;for(let v=0,F=x.length;v<F;v+=3){let C=x[v+0],_=x[v+1],w=x[v+2];f.push(C,_,_,w,w,C)}}else{let x=I.array;M=I.version;for(let v=0,F=x.length/3-1;v<F;v+=3){let C=v+0,_=v+1,w=v+2;f.push(C,_,_,w,w,C)}}let m=new(I.count>=65535?pf:df)(f,1);m.version=M;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:u}}function sD(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,f){t.drawElements(o,f,r,h*s),a.update(f,o,1)}function c(h,f,d){d!==0&&(t.drawElementsInstanced(o,f,r,h*s,d),a.update(f,o,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,f,0,r,h,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];a.update(M,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function iD(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function lD(t,e,a){let o=new WeakMap,n=new jt;function r(s,i,l){let c=s.morphTargetInfluences,u=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=u!==void 0?u.length:0,f=o.get(i);if(f===void 0||f.count!==h){let T=function(){w.dispose(),o.delete(i),i.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=i.morphAttributes.position!==void 0,I=i.morphAttributes.normal!==void 0,M=i.morphAttributes.color!==void 0,m=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],x=i.morphAttributes.color||[],v=0;d===!0&&(v=1),I===!0&&(v=2),M===!0&&(v=3);let F=i.attributes.position.count*v,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let _=new Float32Array(F*C*4*h),w=new uf(_,F,C,h);w.type=pn,w.needsUpdate=!0;let S=v*4;for(let A=0;A<h;A++){let D=m[A],H=p[A],O=x[A],R=F*C*4*A;for(let k=0;k<D.count;k++){let $=k*S;d===!0&&(n.fromBufferAttribute(D,k),_[R+$+0]=n.x,_[R+$+1]=n.y,_[R+$+2]=n.z,_[R+$+3]=0),I===!0&&(n.fromBufferAttribute(H,k),_[R+$+4]=n.x,_[R+$+5]=n.y,_[R+$+6]=n.z,_[R+$+7]=0),M===!0&&(n.fromBufferAttribute(O,k),_[R+$+8]=n.x,_[R+$+9]=n.y,_[R+$+10]=n.z,_[R+$+11]=O.itemSize===4?n.w:1)}}f={count:h,texture:w,size:new Ee(F,C)},o.set(i,f),i.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let I=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",I),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function cD(t,e,a,o,n){let r=new WeakMap;function s(c){let u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function i(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),o.releaseStatesOfObject(u),a.remove(u.instanceMatrix),u.instanceColor!==null&&a.remove(u.instanceColor)}return{update:s,dispose:i}}var fD={[Gx]:"LINEAR_TONE_MAPPING",[qx]:"REINHARD_TONE_MAPPING",[Wx]:"CINEON_TONE_MAPPING",[Xx]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[wf]:"NEUTRAL_TONE_MAPPING",[Yx]:"CUSTOM_TONE_MAPPING"};function uD(t,e,a,o,n,r){let s=new Io(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new oo;c.setAttribute("position",new da([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new da([0,2,0,0,2,0],2));let u=new _p({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ra(c,u),f=new Ul(-1,1,1,-1,0,1),d=null,I=null,M=!1,m,p=null,x=[],v=!1;this.setSize=function(F,C){s.setSize(F,C),i!==null&&i.setSize(F,C),l!==null&&l.setSize(F,C);for(let _=0;_<x.length;_++){let w=x[_];w.setSize&&w.setSize(F,C)}},this.setEffects=function(F){x=F,v=x.length>0&&x[0].isRenderPass===!0;let C=s.width,_=s.height;x.length>0&&i===null&&(i=new Io(C,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Io(C,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let S=x[w];S.setSize&&S.setSize(C,_)}},this.begin=function(F,C){if(M||F.toneMapping===un&&x.length===0)return!1;if(p=C,C!==null){let _=C.width,w=C.height;(s.width!==_||s.height!==w)&&this.setSize(_,w)}return v===!1&&F.setRenderTarget(s),m=F.toneMapping,F.toneMapping=un,!0},this.hasRenderPass=function(){return v},this.end=function(F,C){F.toneMapping=m,M=!0;let _=s,w=i;for(let S=0;S<x.length;S++){let T=x[S];T.enabled!==!1&&(T.render(F,w,_,C),T.needsSwap!==!1&&(_=w,w=w===i?l:i))}if(d!==F.outputColorSpace||I!==F.toneMapping){d=F.outputColorSpace,I=F.toneMapping,u.defines={},vt.getTransfer(d)===Lt&&(u.defines.SRGB_TRANSFER="");let S=fD[I];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,F.setRenderTarget(p),F.render(h,f),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var K1=new to,Ig=new is(1,1),J1=new uf,Q1=new gp,j1=new mf,E1=[],R1=[],D1=new Float32Array(16),L1=new Float32Array(9),P1=new Float32Array(4);function Yl(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=E1[n];if(r===void 0&&(r=new Float32Array(n),E1[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Sa(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function va(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function Uh(t,e){let a=R1[e];a===void 0&&(a=new Int32Array(e),R1[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function dD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function pD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2fv(this.addr,e),va(a,e)}}function hD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Sa(a,e))return;t.uniform3fv(this.addr,e),va(a,e)}}function mD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4fv(this.addr,e),va(a,e)}}function ID(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;P1.set(o),t.uniformMatrix2fv(this.addr,!1,P1),va(a,o)}}function xD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;L1.set(o),t.uniformMatrix3fv(this.addr,!1,L1),va(a,o)}}function gD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;D1.set(o),t.uniformMatrix4fv(this.addr,!1,D1),va(a,o)}}function FD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function SD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2iv(this.addr,e),va(a,e)}}function vD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3iv(this.addr,e),va(a,e)}}function yD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4iv(this.addr,e),va(a,e)}}function MD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function CD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2uiv(this.addr,e),va(a,e)}}function _D(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3uiv(this.addr,e),va(a,e)}}function bD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4uiv(this.addr,e),va(a,e)}}function TD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(Ig.compareFunction=a.isReversedDepthBuffer()?Eh:wh,r=Ig):r=K1,a.setTexture2D(e||r,n)}function AD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||Q1,n)}function wD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||j1,n)}function ED(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||J1,n)}function RD(t){switch(t){case 5126:return dD;case 35664:return pD;case 35665:return hD;case 35666:return mD;case 35674:return ID;case 35675:return xD;case 35676:return gD;case 5124:case 35670:return FD;case 35667:case 35671:return SD;case 35668:case 35672:return vD;case 35669:case 35673:return yD;case 5125:return MD;case 36294:return CD;case 36295:return _D;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return TD;case 35679:case 36299:case 36307:return AD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return ED}}function DD(t,e){t.uniform1fv(this.addr,e)}function LD(t,e){let a=Yl(e,this.size,2);t.uniform2fv(this.addr,a)}function PD(t,e){let a=Yl(e,this.size,3);t.uniform3fv(this.addr,a)}function BD(t,e){let a=Yl(e,this.size,4);t.uniform4fv(this.addr,a)}function UD(t,e){let a=Yl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function kD(t,e){let a=Yl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function ND(t,e){let a=Yl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function OD(t,e){t.uniform1iv(this.addr,e)}function zD(t,e){t.uniform2iv(this.addr,e)}function HD(t,e){t.uniform3iv(this.addr,e)}function VD(t,e){t.uniform4iv(this.addr,e)}function GD(t,e){t.uniform1uiv(this.addr,e)}function qD(t,e){t.uniform2uiv(this.addr,e)}function WD(t,e){t.uniform3uiv(this.addr,e)}function XD(t,e){t.uniform4uiv(this.addr,e)}function YD(t,e,a){let o=this.cache,n=e.length,r=Uh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Ig:s=K1;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function ZD(t,e,a){let o=this.cache,n=e.length,r=Uh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||Q1,r[s])}function KD(t,e,a){let o=this.cache,n=e.length,r=Uh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||j1,r[s])}function JD(t,e,a){let o=this.cache,n=e.length,r=Uh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||J1,r[s])}function QD(t){switch(t){case 5126:return DD;case 35664:return LD;case 35665:return PD;case 35666:return BD;case 35674:return UD;case 35675:return kD;case 35676:return ND;case 5124:case 35670:return OD;case 35667:case 35671:return zD;case 35668:case 35672:return HD;case 35669:case 35673:return VD;case 5125:return GD;case 36294:return qD;case 36295:return WD;case 36296:return XD;case 35678:case 36198:case 36298:case 36306:case 35682:return YD;case 35679:case 36299:case 36307:return ZD;case 35680:case 36300:case 36308:case 36293:return KD;case 36289:case 36303:case 36311:case 36292:return JD}}var xg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=RD(a.type)}},gg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=QD(a.type)}},Fg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},hg=/(\w+)(\])?(\[|\.)?/g;function B1(t,e){t.seq.push(e),t.map[e.id]=e}function jD(t,e,a){let o=t.name,n=o.length;for(hg.lastIndex=0;;){let r=hg.exec(o),s=hg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){B1(a,c===void 0?new xg(i,t,e):new gg(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new Fg(i),B1(a,h)),a=h}}}var Wl=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);jD(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function U1(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var $D=37297,eL=0;function tL(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var k1=new lt;function aL(t){vt._getMatrix(k1,vt.workingColorSpace,t);let e=`mat3( ${k1.elements.map(a=>a.toFixed(4))} )`;switch(vt.getTransfer(t)){case cf:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function N1(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+tL(t.getShaderSource(e),i)}else return r}function oL(t,e){let a=aL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var nL={[Gx]:"Linear",[qx]:"Reinhard",[Wx]:"Cineon",[Xx]:"ACESFilmic",[Zx]:"AgX",[wf]:"Neutral",[Yx]:"Custom"};function rL(t,e){let a=nL[e];return a===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Dh=new U;function sL(){vt.getLuminanceCoefficients(Dh);let t=Dh.x.toFixed(4),e=Dh.y.toFixed(4),a=Dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zf).join(`
`)}function lL(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function cL(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function zf(t){return t!==""}function O1(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sg(t){return t.replace(fL,dL)}var uL=new Map;function dL(t,e){let a=ht[e];if(a===void 0){let o=uL.get(e);if(o!==void 0)a=ht[o],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sg(a)}var pL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H1(t){return t.replace(pL,hL)}function hL(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function V1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var mL={[Af]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function IL(t){return mL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xL={[hs]:"ENVMAP_TYPE_CUBE",[ei]:"ENVMAP_TYPE_CUBE",[Ef]:"ENVMAP_TYPE_CUBE_UV"};function gL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":xL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var FL={[ei]:"ENVMAP_MODE_REFRACTION"};function SL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":FL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vL={[Vx]:"ENVMAP_BLENDING_MULTIPLY",[t1]:"ENVMAP_BLENDING_MIX",[a1]:"ENVMAP_BLENDING_ADD"};function yL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vL[t.combine]||"ENVMAP_BLENDING_NONE"}function ML(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function CL(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=IL(a),c=gL(a),u=SL(a),h=yL(a),f=ML(a),d=iL(a),I=lL(r),M=n.createProgram(),m,p,x=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(m=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(zf).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(zf).join(`
`),p.length>0&&(p+=`
`)):(m=[V1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zf).join(`
`),p=[V1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+u:"",a.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==un?"#define TONE_MAPPING":"",a.toneMapping!==un?ht.tonemapping_pars_fragment:"",a.toneMapping!==un?rL("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,oL("linearToOutputTexel",a.outputColorSpace),sL(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(zf).join(`
`)),s=Sg(s),s=O1(s,a),s=z1(s,a),i=Sg(i),i=O1(i,a),i=z1(i,a),s=H1(s),i=H1(i),a.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",a.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+s,F=x+p+i,C=U1(n,n.VERTEX_SHADER,v),_=U1(n,n.FRAGMENT_SHADER,F);n.attachShader(M,C),n.attachShader(M,_),a.index0AttributeName!==void 0?n.bindAttribLocation(M,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(M,0,"position"),n.linkProgram(M);function w(D){if(t.debug.checkShaderErrors){let H=n.getProgramInfoLog(M)||"",O=n.getShaderInfoLog(C)||"",R=n.getShaderInfoLog(_)||"",k=H.trim(),$=O.trim(),q=R.trim(),oe=!0,N=!0;if(n.getProgramParameter(M,n.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,M,C,_);else{let K=N1(n,C,"vertex"),te=N1(n,_,"fragment");et("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(M,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+K+`
`+te)}else k!==""?tt("WebGLProgram: Program Info Log:",k):($===""||q==="")&&(N=!1);N&&(D.diagnostics={runnable:oe,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:q,prefix:p}})}n.deleteShader(C),n.deleteShader(_),S=new Wl(n,M),T=cL(n,M)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(M,$D)),A},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(M),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=eL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=_,this}var _L=0,vg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new yg(e),a.set(e,o)),o}},yg=class{constructor(e){this.id=_L++,this.code=e,this.usedTimes=0}};function bL(t){return t===Is||t===Uf||t===kf}function TL(t,e,a,o,n,r){let s=new Ml,i=new vg,l=new Set,c=[],u=new Map,h=o.logarithmicDepthBuffer,f=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,T,A,D,H,O){let R=D.fog,k=H.geometry,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,oe=e.get(S.envMap||$,q),N=oe&&oe.mapping===Ef?oe.image.height:null,K=d[S.type];S.precision!==null&&(f=o.getMaxPrecision(S.precision),f!==S.precision&&tt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ae=te!==void 0?te.length:0,Se=0;k.morphAttributes.position!==void 0&&(Se=1),k.morphAttributes.normal!==void 0&&(Se=2),k.morphAttributes.color!==void 0&&(Se=3);let We,z,je,Z;if(K){let dt=zn[K];We=dt.vertexShader,z=dt.fragmentShader}else{We=S.vertexShader,z=S.fragmentShader;let dt=i.getVertexShaderStage(S),rt=i.getFragmentShaderStage(S);i.update(S,dt,rt),je=dt.id,Z=rt.id}let J=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),ke=H.isInstancedMesh===!0,he=H.isBatchedMesh===!0,Ve=!!S.map,Qe=!!S.matcap,j=!!oe,re=!!S.aoMap,ne=!!S.lightMap,se=!!S.bumpMap&&S.wireframe===!1,fe=!!S.normalMap,Ne=!!S.displacementMap,De=!!S.emissiveMap,Me=!!S.metalnessMap,Oe=!!S.roughnessMap,E=S.anisotropy>0,at=S.clearcoat>0,Xe=S.dispersion>0,b=S.retroreflectivity>0,g=S.iridescence>0,B=S.sheen>0,X=S.transmission>0,ee=E&&!!S.anisotropyMap,me=at&&!!S.clearcoatMap,de=at&&!!S.clearcoatNormalMap,Y=at&&!!S.clearcoatRoughnessMap,ae=g&&!!S.iridescenceMap,ge=g&&!!S.iridescenceThicknessMap,qe=B&&!!S.sheenColorMap,Ce=B&&!!S.sheenRoughnessMap,_e=!!S.specularMap,ce=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Ie=X&&!!S.transmissionMap,P=X&&!!S.thicknessMap,pe=!!S.gradientMap,Q=!!S.alphaMap,xe=S.alphaTest>0,be=!!S.alphaHash,le=!!S.extensions,Re=un;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Re=t.toneMapping);let Le={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:z,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&H._colorsTexture!==null,instancing:ke,instancingColor:ke&&H.instanceColor!==null,instancingMorph:ke&&H.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Qe,envMap:j,envMapMode:j&&oe.mapping,envMapCubeUVHeight:N,aoMap:re,lightMap:ne,bumpMap:se,normalMap:fe,displacementMap:Ne,emissiveMap:De,normalMapObjectSpace:fe&&S.normalMapType===r1,normalMapTangentSpace:fe&&S.normalMapType===Ah,packedNormalMap:fe&&S.normalMapType===Ah&&bL(S.normalMap.format),metalnessMap:Me,roughnessMap:Oe,anisotropy:E,anisotropyMap:ee,clearcoat:at,clearcoatMap:me,clearcoatNormalMap:de,clearcoatRoughnessMap:Y,dispersion:Xe,retroreflection:b,iridescence:g,iridescenceMap:ae,iridescenceThicknessMap:ge,sheen:B,sheenColorMap:qe,sheenRoughnessMap:Ce,specularMap:_e,specularColorMap:ce,specularIntensityMap:Fe,transmission:X,transmissionMap:Ie,thicknessMap:P,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Ol&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:xe,alphaHash:be,combine:S.combine,mapUv:Ve&&I(S.map.channel),aoMapUv:re&&I(S.aoMap.channel),lightMapUv:ne&&I(S.lightMap.channel),bumpMapUv:se&&I(S.bumpMap.channel),normalMapUv:fe&&I(S.normalMap.channel),displacementMapUv:Ne&&I(S.displacementMap.channel),emissiveMapUv:De&&I(S.emissiveMap.channel),metalnessMapUv:Me&&I(S.metalnessMap.channel),roughnessMapUv:Oe&&I(S.roughnessMap.channel),anisotropyMapUv:ee&&I(S.anisotropyMap.channel),clearcoatMapUv:me&&I(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&I(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&I(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&I(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&I(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&I(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&I(S.sheenRoughnessMap.channel),specularMapUv:_e&&I(S.specularMap.channel),specularColorMapUv:ce&&I(S.specularColorMap.channel),specularIntensityMapUv:Fe&&I(S.specularIntensityMap.channel),transmissionMapUv:Ie&&I(S.transmissionMap.channel),thicknessMapUv:P&&I(S.thicknessMap.channel),alphaMapUv:Q&&I(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||E),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(Ve||Q),fog:!!R,useFog:S.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&fe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:De&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bo,flipSided:S.side===no,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:le&&S.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&S.extensions.multiDraw===!0||he)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)T.push(A),T.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(p(T,S),x(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function v(S){let T=d[S.type],A;if(T){let D=zn[T];A=M1.clone(D.uniforms)}else A=S.uniforms;return A}function F(S,T){let A=u.get(T);return A!==void 0?++A.usedTimes:(A=new CL(t,T,S,n),c.push(A),u.set(T,A)),A}function C(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function _(S){i.remove(S)}function w(){i.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:v,acquireProgram:F,releaseProgram:C,releaseShaderCache:_,programs:c,dispose:w}}function AL(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function wL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function G1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function q1(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function i(f,d,I,M,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:I,materialVariant:s(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=I,x.materialVariant=s(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,d,I,M,m,p,x){x.reversedDepth===!0&&(m=-m);let v=i(f,d,I,M,m,p);I.transmission>0?o.push(v):I.transparent===!0?n.push(v):a.push(v)}function c(f,d,I,M,m,p){let x=i(f,d,I,M,m,p);I.transmission>0?o.unshift(x):I.transparent===!0?n.unshift(x):a.unshift(x)}function u(f,d){a.length>1&&a.sort(f||wL),o.length>1&&o.sort(d||G1),n.length>1&&n.sort(d||G1)}function h(){for(let f=e,d=t.length;f<d;f++){let I=t[f];if(I.id===null)break;I.id=null,I.object=null,I.geometry=null,I.material=null,I.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:u}}function EL(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new q1,t.set(o,[s])):n>=r.length?(s=new q1,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function RL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new U,color:new ft};break;case"SpotLight":a={position:new U,direction:new U,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new U,color:new ft,distance:0,decay:0};break;case"HemisphereLight":a={direction:new U,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":a={color:new ft,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=a,a}}}function DL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var LL=0;function PL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BL(t){let e=new RL,a=DL(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new U);let n=new U,r=new Vt,s=new Vt;function i(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)o.probe[H].set(0,0,0);let d=0,I=0,M=0,m=0,p=0,x=0,v=0,F=0,C=0,_=0,w=0,S=0,T=0,A=0;c.sort(PL);for(let H=0,O=c.length;H<O;H++){let R=c[H],k=R.color,$=R.intensity,q=R.distance,oe=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Is?oe=R.shadow.map.texture:oe=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=k.r*$,h+=k.g*$,f+=k.b*$;else if(R.isLightProbe){for(let N=0;N<9;N++)o.probe[N].addScaledVector(R.sh.coefficients[N],$);A++}else if(R.isSunLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,te=a.get(R);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),o.sunShadow[I]=te,o.sunShadowMap[I]=oe;let Ae=K.getViewportCount();for(let Se=0;Se<Ae;Se++)o.sunShadowMatrix[M+Se]=K.getMatrix(Se),o.sunShadowCascade[M+Se]=K._cascadeData[Se];M+=Ae,I++}o.sun[d]=N,d++}else if(R.isDirectionalLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,te=a.get(R);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,o.directionalShadow[m]=te,o.directionalShadowMap[m]=oe,o.directionalShadowMatrix[m]=R.shadow.matrix,C++}o.directional[m]=N,m++}else if(R.isSpotLight){let N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(k).multiplyScalar($),N.distance=q,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,o.spot[x]=N;let K=R.shadow;if(R.map&&(o.spotLightMap[S]=R.map,S++,K.updateMatrices(R),R.castShadow&&T++),o.spotLightMatrix[x]=K.matrix,R.castShadow){let te=a.get(R);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,o.spotShadow[x]=te,o.spotShadowMap[x]=oe,w++}x++}else if(R.isRectAreaLight){let N=e.get(R);N.color.copy(k).multiplyScalar($),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),o.rectArea[v]=N,v++}else if(R.isPointLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let K=R.shadow,te=a.get(R);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,o.pointShadow[p]=te,o.pointShadowMap[p]=oe,o.pointShadowMatrix[p]=R.shadow.matrix,_++}o.point[p]=N,p++}else if(R.isHemisphereLight){let N=e.get(R);N.skyColor.copy(R.color).multiplyScalar($),N.groundColor.copy(R.groundColor).multiplyScalar($),o.hemi[F]=N,F++}}v>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Be.LTC_FLOAT_1,o.rectAreaLTC2=Be.LTC_FLOAT_2):(o.rectAreaLTC1=Be.LTC_HALF_1,o.rectAreaLTC2=Be.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=f;let D=o.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==v||D.hemiLength!==F||D.numSunShadows!==I||D.numDirectionalShadows!==C||D.numPointShadows!==_||D.numSpotShadows!==w||D.numSpotMaps!==S||D.numLightProbes!==A)&&(o.sun.length=d,o.directional.length=m,o.spot.length=x,o.rectArea.length=v,o.point.length=p,o.hemi.length=F,o.sunShadow.length=I,o.sunShadowMap.length=I,o.sunShadowMatrix.length=M,o.sunShadowCascade.length=M,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.directionalShadowMatrix.length=C,o.pointShadow.length=_,o.pointShadowMap.length=_,o.pointShadowMatrix.length=_,o.spotShadow.length=w,o.spotShadowMap.length=w,o.spotLightMatrix.length=w+S-T,o.spotLightMap.length=S,o.numSpotLightShadowsWithMaps=T,o.numLightProbes=A,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=x,D.rectAreaLength=v,D.hemiLength=F,D.numSunShadows=I,D.numDirectionalShadows=C,D.numPointShadows=_,D.numSpotShadows=w,D.numSpotMaps=S,D.numLightProbes=A,o.version=LL++)}function l(c,u){let h=0,f=0,d=0,I=0,M=0,m=0,p=u.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let F=c[x];if(F.isSunLight){let C=o.sun[h];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(p),h++}else if(F.isDirectionalLight){let C=o.directional[f];C.direction.setFromMatrixPosition(F.matrixWorld),n.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),f++}else if(F.isSpotLight){let C=o.spot[I];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(F.matrixWorld),n.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),I++}else if(F.isRectAreaLight){let C=o.rectArea[M];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(F.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(F.width*.5,0,0),C.halfHeight.set(0,F.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),M++}else if(F.isPointLight){let C=o.point[d];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),d++}else if(F.isHemisphereLight){let C=o.hemi[m];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:i,setupView:l,state:o}}function W1(t){let e=new BL(t),a=[],o=[],n=[];function r(f){h.camera=f,a.length=0,o.length=0,n.length=0}function s(f){a.push(f)}function i(f){o.push(f)}function l(f){n.push(f)}function c(){e.setup(a)}function u(f){e.setupView(a,f)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function UL(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new W1(t),e.set(n,[i])):r>=s.length?(i=new W1(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var kL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NL=`uniform sampler2D shadow_pass;
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
}`,OL=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],zL=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],X1=new Vt,Of=new U,mg=new U;function HL(t,e,a){let o=new Al,n=new Ee,r=new Ee,s=new jt,i=new bp,l=new Tp,c={},u=a.maxTextureSize,h={[ps]:no,[no]:ps,[Bo]:Bo},f=new Lo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:kL,fragmentShader:NL}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let I=new oo;I.setAttribute("position",new qa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ra(I,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let p=this.type;this.render=function(_,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===UC&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Af);let T=t.getRenderTarget(),A=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),H=t.state;H.setBlending(kn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=p!==this.type;O&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=_.length;R<k;R++){let $=_[R],q=$.shadow;if(q===void 0){tt("WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let oe=q.getFrameExtents();n.multiply(oe),r.copy(q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/oe.x),n.x=r.x*oe.x,q.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/oe.y),n.y=r.y*oe.y,q.mapSize.y=r.y));let N=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=N,q.map===null||O===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Nl){if($.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Io(n.x,n.y,{format:Is,type:hn,minFilter:Fa,magFilter:Fa,generateMipmaps:!1}),q.map.texture.name=$.name+".shadowMap",q.map.depthTexture=new is(n.x,n.y,pn),q.map.depthTexture.name=$.name+".shadowMapDepth",q.map.depthTexture.format=Bn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Aa,q.map.depthTexture.magFilter=Aa}else $.isPointLight?(q.map=new Lh(n.x),q.map.depthTexture=new Fp(n.x,dn)):(q.map=new Io(n.x,n.y),q.map.depthTexture=new is(n.x,n.y,dn)),q.map.depthTexture.name=$.name+".shadowMap",q.map.depthTexture.format=Bn,this.type===Af?(q.map.depthTexture.compareFunction=N?Eh:wh,q.map.depthTexture.minFilter=Fa,q.map.depthTexture.magFilter=Fa):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Aa,q.map.depthTexture.magFilter=Aa);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==n.x||q.map.height!==n.y)&&q.map.setSize(n.x,n.y);let K=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();$.isPointLight!==!0&&q.updateMatrices($,S);for(let te=0;te<K;te++){let Ae=q.getCamera(te);if($.isPointLight){let Se=q.camera,We=q.matrix,z=$.distance||Se.far;z!==Se.far&&(Se.far=z,Se.updateProjectionMatrix()),Of.setFromMatrixPosition($.matrixWorld),Se.position.copy(Of),mg.copy(Se.position),mg.add(OL[te]),Se.up.copy(zL[te]),Se.lookAt(mg),Se.updateMatrixWorld(),We.makeTranslation(-Of.x,-Of.y,-Of.z),X1.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),q._frustum.setFromProjectionMatrix(X1,Se.coordinateSystem,Se.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,te),t.clear();else{te===0&&(t.setRenderTarget(q.map),t.clear());let Se=q.getViewport(te);s.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),H.viewport(s)}o=q.getFrustum(te),F(w,S,Ae,$,this.type)}q.isPointLightShadow!==!0&&this.type===Nl&&x(q,S),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,A,D)};function x(_,w){let S=e.update(M);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null?_.mapPass=new Io(n.x,n.y,{format:Is,type:hn}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),f.uniforms.shadow_pass.value=_.map.depthTexture,f.uniforms.resolution.value.set(_.map.width,_.map.height),f.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(w,null,S,f,M,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value.set(_.map.width,_.map.height),d.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(w,null,S,d,M,null)}function v(_,w,S,T){let A=null,D=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:i,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=A.uuid,O=w.uuid,R=c[H];R===void 0&&(R={},c[H]=R);let k=R[O];k===void 0&&(k=A.clone(),R[O]=k,w.addEventListener("dispose",C)),A=k}if(A.visible=w.visible,A.wireframe=w.wireframe,T===Nl?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=t.properties.get(A);H.light=S}return A}function F(_,w,S,T,A){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&A===Nl)&&(!_.frustumCulled||_.intersectsFrustum(o))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);let O=e.update(_),R=_.material;if(Array.isArray(R)){let k=O.groups;for(let $=0,q=k.length;$<q;$++){let oe=k[$],N=R[oe.materialIndex];if(N&&N.visible){let K=v(_,N,T,A);_.onBeforeShadow(t,_,w,S,O,K,oe),t.renderBufferDirect(S,null,O,K,_,oe),_.onAfterShadow(t,_,w,S,O,K,oe)}}}else if(R.visible){let k=v(_,R,T,A);_.onBeforeShadow(t,_,w,S,O,k,null),t.renderBufferDirect(S,null,O,k,_,null),_.onAfterShadow(t,_,w,S,O,k,null)}}let H=_.children;for(let O=0,R=H.length;O<R;O++)F(H[O],w,S,T,A)}function C(_){_.target.removeEventListener("dispose",C);for(let S in c){let T=c[S],A=_.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function VL(t,e){function a(){let P=!1,pe=new jt,Q=null,xe=new jt(0,0,0,0);return{setMask:function(be){Q!==be&&!P&&(t.colorMask(be,be,be,be),Q=be)},setLocked:function(be){P=be},setClear:function(be,le,Re,Le,dt){dt===!0&&(be*=Le,le*=Le,Re*=Le),pe.set(be,le,Re,Le),xe.equals(pe)===!1&&(t.clearColor(be,le,Re,Le),xe.copy(pe))},reset:function(){P=!1,Q=null,xe.set(-1,0,0,0)}}}function o(){let P=!1,pe=!1,Q=null,xe=null,be=null;return{setReversed:function(le){if(pe!==le){let Re=e.get("EXT_clip_control");le?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),pe=le;let Le=be;be=null,this.setClear(Le)}},getReversed:function(){return pe},setTest:function(le){le?J(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(le){Q!==le&&!P&&(t.depthMask(le),Q=le)},setFunc:function(le){if(pe&&(le=x1[le]),xe!==le){switch(le){case sp:t.depthFunc(t.NEVER);break;case ip:t.depthFunc(t.ALWAYS);break;case lp:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case cp:t.depthFunc(t.EQUAL);break;case fp:t.depthFunc(t.GEQUAL);break;case up:t.depthFunc(t.GREATER);break;case dp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=le}},setLocked:function(le){P=le},setClear:function(le){be!==le&&(be=le,pe&&(le=1-le),t.clearDepth(le))},reset:function(){P=!1,Q=null,xe=null,be=null,pe=!1}}}function n(){let P=!1,pe=null,Q=null,xe=null,be=null,le=null,Re=null,Le=null,dt=null;return{setTest:function(rt){P||(rt?J(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!P&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,sa,Ya){(Q!==rt||xe!==sa||be!==Ya)&&(t.stencilFunc(rt,sa,Ya),Q=rt,xe=sa,be=Ya)},setOp:function(rt,sa,Ya){(le!==rt||Re!==sa||Le!==Ya)&&(t.stencilOp(rt,sa,Ya),le=rt,Re=sa,Le=Ya)},setLocked:function(rt){P=rt},setClear:function(rt){dt!==rt&&(t.clearStencil(rt),dt=rt)},reset:function(){P=!1,pe=null,Q=null,xe=null,be=null,le=null,Re=null,Le=null,dt=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,I=[],M=null,m=!1,p=null,x=null,v=null,F=null,C=null,_=null,w=null,S=new ft(0,0,0),T=0,A=!1,D=null,H=null,O=null,R=null,k=null,$=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=oe>=1):N.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=oe>=2);let K=null,te={},Ae=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),We=new jt().fromArray(Ae),z=new jt().fromArray(Se);function je(P,pe,Q,xe){let be=new Uint8Array(4),le=t.createTexture();t.bindTexture(P,le),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Q;Re++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(pe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return le}let Z={};Z[t.TEXTURE_2D]=je(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),J(t.DEPTH_TEST),s.setFunc(Fl),se(!1),fe(Ux),J(t.CULL_FACE),re(kn);function J(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function ve(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function ke(P,pe){return f[P]!==pe?(t.bindFramebuffer(P,pe),f[P]=pe,P===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),P===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function he(P,pe){let Q=I,xe=!1;if(P){Q=d.get(pe),Q===void 0&&(Q=[],d.set(pe,Q));let be=P.textures;if(Q.length!==be.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Re=be.length;le<Re;le++)Q[le]=t.COLOR_ATTACHMENT0+le;Q.length=be.length,xe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,xe=!0);xe&&t.drawBuffers(Q)}function Ve(P){return M!==P?(t.useProgram(P),M=P,!0):!1}let Qe={[$s]:t.FUNC_ADD,[NC]:t.FUNC_SUBTRACT,[OC]:t.FUNC_REVERSE_SUBTRACT};Qe[zC]=t.MIN,Qe[HC]=t.MAX;let j={[VC]:t.ZERO,[GC]:t.ONE,[qC]:t.SRC_COLOR,[zx]:t.SRC_ALPHA,[JC]:t.SRC_ALPHA_SATURATE,[ZC]:t.DST_COLOR,[XC]:t.DST_ALPHA,[WC]:t.ONE_MINUS_SRC_COLOR,[Hx]:t.ONE_MINUS_SRC_ALPHA,[KC]:t.ONE_MINUS_DST_COLOR,[YC]:t.ONE_MINUS_DST_ALPHA,[QC]:t.CONSTANT_COLOR,[jC]:t.ONE_MINUS_CONSTANT_COLOR,[$C]:t.CONSTANT_ALPHA,[e1]:t.ONE_MINUS_CONSTANT_ALPHA};function re(P,pe,Q,xe,be,le,Re,Le,dt,rt){if(P===kn){m===!0&&(ve(t.BLEND),m=!1);return}if(m===!1&&(J(t.BLEND),m=!0),P!==kC){if(P!==p||rt!==A){if((x!==$s||C!==$s)&&(t.blendEquation(t.FUNC_ADD),x=$s,C=$s),rt)switch(P){case Ol:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kx:t.blendFunc(t.ONE,t.ONE);break;case Nx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ox:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",P);break}else switch(P){case Ol:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nx:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ox:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",P);break}v=null,F=null,_=null,w=null,S.set(0,0,0),T=0,p=P,A=rt}return}be=be||pe,le=le||Q,Re=Re||xe,(pe!==x||be!==C)&&(t.blendEquationSeparate(Qe[pe],Qe[be]),x=pe,C=be),(Q!==v||xe!==F||le!==_||Re!==w)&&(t.blendFuncSeparate(j[Q],j[xe],j[le],j[Re]),v=Q,F=xe,_=le,w=Re),(Le.equals(S)===!1||dt!==T)&&(t.blendColor(Le.r,Le.g,Le.b,dt),S.copy(Le),T=dt),p=P,A=!1}function ne(P,pe){P.side===Bo?ve(t.CULL_FACE):J(t.CULL_FACE);let Q=P.side===no;pe&&(Q=!Q),se(Q),P.blending===Ol&&P.transparent===!1?re(kn):re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);let xe=P.stencilWrite;i.setTest(xe),xe&&(i.setMask(P.stencilWriteMask),i.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),i.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(P){D!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),D=P)}function fe(P){P!==PC?(J(t.CULL_FACE),P!==H&&(P===Ux?t.cullFace(t.BACK):P===BC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),H=P}function Ne(P){P!==O&&(q&&t.lineWidth(P),O=P)}function De(P,pe,Q){P?(J(t.POLYGON_OFFSET_FILL),(R!==pe||k!==Q)&&(R=pe,k=Q,s.getReversed()&&(pe=-pe),t.polygonOffset(pe,Q))):ve(t.POLYGON_OFFSET_FILL)}function Me(P){P?J(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Oe(P){P===void 0&&(P=t.TEXTURE0+$-1),K!==P&&(t.activeTexture(P),K=P)}function E(P,pe,Q){Q===void 0&&(K===null?Q=t.TEXTURE0+$-1:Q=K);let xe=te[Q];xe===void 0&&(xe={type:void 0,texture:void 0},te[Q]=xe),(xe.type!==P||xe.texture!==pe)&&(K!==Q&&(t.activeTexture(Q),K=Q),t.bindTexture(P,pe||Z[P]),xe.type=P,xe.texture=pe)}function at(){let P=te[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Xe(){try{t.compressedTexImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function g(){try{t.texSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function B(){try{t.texSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function me(){try{t.texStorage2D(...arguments)}catch(P){et("WebGLState:",P)}}function de(){try{t.texStorage3D(...arguments)}catch(P){et("WebGLState:",P)}}function Y(){try{t.texImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function ae(){try{t.texImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function ge(P){return h[P]!==void 0?h[P]:t.getParameter(P)}function qe(P,pe){h[P]!==pe&&(t.pixelStorei(P,pe),h[P]=pe)}function Ce(P){We.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),We.copy(P))}function _e(P){z.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),z.copy(P))}function ce(P,pe){let Q=c.get(pe);Q===void 0&&(Q=new WeakMap,c.set(pe,Q));let xe=Q.get(P);xe===void 0&&(xe=t.getUniformBlockIndex(pe,P.name),Q.set(P,xe))}function Fe(P,pe){let xe=c.get(pe).get(P);l.get(pe)!==xe&&(t.uniformBlockBinding(pe,xe,P.__bindingPointIndex),l.set(pe,xe))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,te={},f={},d=new WeakMap,I=[],M=null,m=!1,p=null,x=null,v=null,F=null,C=null,_=null,w=null,S=new ft(0,0,0),T=0,A=!1,D=null,H=null,O=null,R=null,k=null,We.set(0,0,t.canvas.width,t.canvas.height),z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:J,disable:ve,bindFramebuffer:ke,drawBuffers:he,useProgram:Ve,setBlending:re,setMaterial:ne,setFlipSided:se,setCullFace:fe,setLineWidth:Ne,setPolygonOffset:De,setScissorTest:Me,activeTexture:Oe,bindTexture:E,unbindTexture:at,compressedTexImage2D:Xe,compressedTexImage3D:b,texImage2D:Y,texImage3D:ae,pixelStorei:qe,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:Fe,texStorage2D:me,texStorage3D:de,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:Ce,viewport:_e,reset:Ie}}function GL(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,h=new Set,f,d=new WeakMap,I=!1;try{I=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,g){return I?new OffscreenCanvas(b,g):ff("canvas")}function m(b,g,B){let X=1,ee=Xe(b);if((ee.width>B||ee.height>B)&&(X=B/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let me=Math.floor(X*ee.width),de=Math.floor(X*ee.height);f===void 0&&(f=M(me,de));let Y=g?M(me,de):f;return Y.width=me,Y.height=de,Y.getContext("2d").drawImage(b,0,0,me,de),tt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+me+"x"+de+")."),Y}else return"data"in b&&tt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function p(b){return b.generateMipmaps}function x(b){t.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function F(b,g,B,X,ee,me=!1){if(b!==null){if(t[b]!==void 0)return t[b];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;X&&(de=e.get("EXT_texture_norm16"),de||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8),B===t.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),B===t.SHORT&&de&&(Y=de.R16_SNORM_EXT)),g===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),g===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8),B===t.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),B===t.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),g===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),g===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),g===t.RGB&&(B===t.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),B===t.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),g===t.RGBA){let ae=me?cf:vt.getTransfer(ee);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=ae===Lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),B===t.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(b,g){let B;return b?g===null||g===dn||g===Hl?B=t.DEPTH24_STENCIL8:g===pn?B=t.DEPTH32F_STENCIL8:g===zl&&(B=t.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===dn||g===Hl?B=t.DEPTH_COMPONENT24:g===pn?B=t.DEPTH_COMPONENT32F:g===zl&&(B=t.DEPTH_COMPONENT16),B}function _(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Aa&&b.minFilter!==Fa?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function w(b){let g=b.target;g.removeEventListener("dispose",w),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&h.delete(g)}function S(b){let g=b.target;g.removeEventListener("dispose",S),D(g)}function T(b){let g=o.get(b);if(g.__webglInit===void 0)return;let B=b.source,X=d.get(B);if(X){let ee=X[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(b),Object.keys(X).length===0&&d.delete(B)}o.remove(b)}function A(b){let g=o.get(b);t.deleteTexture(g.__webglTexture);let B=b.source,X=d.get(B);delete X[g.__cacheKey],s.memory.textures--}function D(b){let g=o.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),o.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let ee=0;ee<g.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(g.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)t.deleteFramebuffer(g.__webglFramebuffer[X]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=b.textures;for(let X=0,ee=B.length;X<ee;X++){let me=o.get(B[X]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),s.memory.textures--),o.remove(B[X])}o.remove(b)}let H=0;function O(){H=0}function R(){return H}function k(b){H=b}function $(){let b=H;return b>=n.maxTextures&&tt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+n.maxTextures),H+=1,b}function q(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function oe(b,g){let B=o.get(b);if(b.isVideoTexture&&E(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){let X=b.image;if(X===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,b,g);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+g)}function N(b,g){let B=o.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ve(B,b,g);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+g)}function K(b,g){let B=o.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ve(B,b,g);return}a.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+g)}function te(b,g){let B=o.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){ke(B,b,g);return}a.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+g)}let Ae={[Pn]:t.REPEAT,[Jo]:t.CLAMP_TO_EDGE,[pp]:t.MIRRORED_REPEAT},Se={[Aa]:t.NEAREST,[o1]:t.NEAREST_MIPMAP_NEAREST,[Rf]:t.NEAREST_MIPMAP_LINEAR,[Fa]:t.LINEAR,[Wp]:t.LINEAR_MIPMAP_NEAREST,[Nn]:t.LINEAR_MIPMAP_LINEAR},We={[i1]:t.NEVER,[d1]:t.ALWAYS,[l1]:t.LESS,[wh]:t.LEQUAL,[c1]:t.EQUAL,[Eh]:t.GEQUAL,[f1]:t.GREATER,[u1]:t.NOTEQUAL};function z(b,g){if(g.type===pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Fa||g.magFilter===Wp||g.magFilter===Rf||g.magFilter===Nn||g.minFilter===Fa||g.minFilter===Wp||g.minFilter===Rf||g.minFilter===Nn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Ae[g.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Ae[g.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Ae[g.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,We[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Aa||g.minFilter!==Rf&&g.minFilter!==Nn||g.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||o.get(g).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),o.get(g).__currentAnisotropy=g.anisotropy}}}function je(b,g){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",w));let X=g.source,ee=d.get(X);ee===void 0&&(ee={},d.set(X,ee));let me=q(g);if(me!==b.__cacheKey){ee[me]===void 0&&(ee[me]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ee[me].usedTimes++;let de=ee[b.__cacheKey];de!==void 0&&(ee[b.__cacheKey].usedTimes--,de.usedTimes===0&&A(g)),b.__cacheKey=me,b.__webglTexture=ee[me].texture}return B}function Z(b,g,B){return Math.floor(Math.floor(b/B)/g)}function J(b,g,B,X){let me=b.updateRanges;if(me.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,B,X,g.data);else{me.sort((qe,Ce)=>qe.start-Ce.start);let de=0;for(let qe=1;qe<me.length;qe++){let Ce=me[de],_e=me[qe],ce=Ce.start+Ce.count,Fe=Z(_e.start,g.width,4),Ie=Z(Ce.start,g.width,4);_e.start<=ce+1&&Fe===Ie&&Z(_e.start+_e.count-1,g.width,4)===Fe?Ce.count=Math.max(Ce.count,_e.start+_e.count-Ce.start):(++de,me[de]=_e)}me.length=de+1;let Y=a.getParameter(t.UNPACK_ROW_LENGTH),ae=a.getParameter(t.UNPACK_SKIP_PIXELS),ge=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let qe=0,Ce=me.length;qe<Ce;qe++){let _e=me[qe],ce=Math.floor(_e.start/4),Fe=Math.ceil(_e.count/4),Ie=ce%g.width,P=Math.floor(ce/g.width),pe=Fe,Q=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),a.pixelStorei(t.UNPACK_SKIP_ROWS,P),a.texSubImage2D(t.TEXTURE_2D,0,Ie,P,pe,Q,B,X,g.data)}b.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Y),a.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),a.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ve(b,g,B){let X=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=t.TEXTURE_3D);let ee=je(b,g),me=g.source;a.bindTexture(X,b.__webglTexture,t.TEXTURE0+B);let de=o.get(me);if(me.version!==de.__version||ee===!0){if(a.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Q=vt.getPrimaries(vt.workingColorSpace),xe=g.colorSpace===pr?null:vt.getPrimaries(g.colorSpace),be=g.colorSpace===pr||Q===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}a.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let ae=m(g.image,!1,n.maxTextureSize);ae=at(g,ae);let ge=r.convert(g.format,g.colorSpace),qe=r.convert(g.type),Ce=F(g.internalFormat,ge,qe,g.normalized,g.colorSpace,g.isVideoTexture);z(X,g);let _e,ce=g.mipmaps,Fe=g.isVideoTexture!==!0,Ie=de.__version===void 0||ee===!0,P=me.dataReady,pe=_(g,ae);if(g.isDepthTexture)Ce=C(g.format===ms,g.type),Ie&&(Fe?a.texStorage2D(t.TEXTURE_2D,1,Ce,ae.width,ae.height):a.texImage2D(t.TEXTURE_2D,0,Ce,ae.width,ae.height,0,ge,qe,null));else if(g.isDataTexture)if(ce.length>0){Fe&&Ie&&a.texStorage2D(t.TEXTURE_2D,pe,Ce,ce[0].width,ce[0].height);for(let Q=0,xe=ce.length;Q<xe;Q++)_e=ce[Q],Fe?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,qe,_e.data):a.texImage2D(t.TEXTURE_2D,Q,Ce,_e.width,_e.height,0,ge,qe,_e.data);g.generateMipmaps=!1}else Fe?(Ie&&a.texStorage2D(t.TEXTURE_2D,pe,Ce,ae.width,ae.height),P&&J(g,ae,ge,qe)):a.texImage2D(t.TEXTURE_2D,0,Ce,ae.width,ae.height,0,ge,qe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&Ie&&a.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ce,ce[0].width,ce[0].height,ae.depth);for(let Q=0,xe=ce.length;Q<xe;Q++)if(_e=ce[Q],g.format!==Qo)if(ge!==null)if(Fe){if(P)if(g.layerUpdates.size>0){let be=cg(_e.width,_e.height,g.format,g.type);for(let le of g.layerUpdates){let Re=_e.data.subarray(le*be/_e.data.BYTES_PER_ELEMENT,(le+1)*be/_e.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,le,_e.width,_e.height,1,ge,Re)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ae.depth,ge,_e.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Ce,_e.width,_e.height,ae.depth,0,_e.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ae.depth,ge,qe,_e.data):a.texImage3D(t.TEXTURE_2D_ARRAY,Q,Ce,_e.width,_e.height,ae.depth,0,ge,qe,_e.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Fe&&Ie&&a.texStorage2D(t.TEXTURE_2D,pe,Ce,ce[0].width,ce[0].height);for(let Q=0,xe=ce.length;Q<xe;Q++)_e=ce[Q],g.format!==Qo?ge!==null?Fe?P&&a.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,_e.data):a.compressedTexImage2D(t.TEXTURE_2D,Q,Ce,_e.width,_e.height,0,_e.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,qe,_e.data):a.texImage2D(t.TEXTURE_2D,Q,Ce,_e.width,_e.height,0,ge,qe,_e.data)}else if(g.isDataArrayTexture)if(Fe){if(Ie&&a.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ce,ae.width,ae.height,ae.depth),P)if(g.layerUpdates.size>0){let Q=cg(ae.width,ae.height,g.format,g.type);for(let xe of g.layerUpdates){let be=ae.data.subarray(xe*Q/ae.data.BYTES_PER_ELEMENT,(xe+1)*Q/ae.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,ae.width,ae.height,1,ge,qe,be)}g.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,qe,ae.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ae.width,ae.height,ae.depth,0,ge,qe,ae.data);else if(g.isData3DTexture)Fe?(Ie&&a.texStorage3D(t.TEXTURE_3D,pe,Ce,ae.width,ae.height,ae.depth),P&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,qe,ae.data)):a.texImage3D(t.TEXTURE_3D,0,Ce,ae.width,ae.height,ae.depth,0,ge,qe,ae.data);else if(g.isFramebufferTexture){if(Ie)if(Fe)a.texStorage2D(t.TEXTURE_2D,pe,Ce,ae.width,ae.height);else{let Q=ae.width,xe=ae.height;for(let be=0;be<pe;be++)a.texImage2D(t.TEXTURE_2D,be,Ce,Q,xe,0,ge,qe,null),Q>>=1,xe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){let Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ae.parentNode!==Q){Q.appendChild(ae),h.add(g),Q.onpaint=xe=>{let be=xe.changedElements;for(let le of h)be.includes(le.image)&&(le.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ae);else{let be=t.RGBA,le=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,le,Re,ae)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Fe&&Ie){let Q=Xe(ce[0]);a.texStorage2D(t.TEXTURE_2D,pe,Ce,Q.width,Q.height)}for(let Q=0,xe=ce.length;Q<xe;Q++)_e=ce[Q],Fe?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge,qe,_e):a.texImage2D(t.TEXTURE_2D,Q,Ce,ge,qe,_e);g.generateMipmaps=!1}else if(Fe){if(Ie){let Q=Xe(ae);a.texStorage2D(t.TEXTURE_2D,pe,Ce,Q.width,Q.height)}P&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,qe,ae)}else a.texImage2D(t.TEXTURE_2D,0,Ce,ge,qe,ae);p(g)&&x(X),de.__version=me.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ke(b,g,B){if(g.image.length!==6)return;let X=je(b,g),ee=g.source;a.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);let me=o.get(ee);if(ee.version!==me.__version||X===!0){a.activeTexture(t.TEXTURE0+B);let de=vt.getPrimaries(vt.workingColorSpace),Y=g.colorSpace===pr?null:vt.getPrimaries(g.colorSpace),ae=g.colorSpace===pr||de===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ge=g.isCompressedTexture||g.image[0].isCompressedTexture,qe=g.image[0]&&g.image[0].isDataTexture,Ce=[];for(let le=0;le<6;le++)!ge&&!qe?Ce[le]=m(g.image[le],!0,n.maxCubemapSize):Ce[le]=qe?g.image[le].image:g.image[le],Ce[le]=at(g,Ce[le]);let _e=Ce[0],ce=r.convert(g.format,g.colorSpace),Fe=r.convert(g.type),Ie=F(g.internalFormat,ce,Fe,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,pe=me.__version===void 0||X===!0,Q=ee.dataReady,xe=_(g,_e);z(t.TEXTURE_CUBE_MAP,g);let be;if(ge){P&&pe&&a.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ie,_e.width,_e.height);for(let le=0;le<6;le++){be=Ce[le].mipmaps;for(let Re=0;Re<be.length;Re++){let Le=be[Re];g.format!==Qo?ce!==null?P?Q&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re,0,0,Le.width,Le.height,ce,Le.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re,Ie,Le.width,Le.height,0,Le.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re,0,0,Le.width,Le.height,ce,Fe,Le.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re,Ie,Le.width,Le.height,0,ce,Fe,Le.data)}}}else{if(be=g.mipmaps,P&&pe){be.length>0&&xe++;let le=Xe(Ce[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ie,le.width,le.height)}for(let le=0;le<6;le++)if(qe){P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce[le].width,Ce[le].height,ce,Fe,Ce[le].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ie,Ce[le].width,Ce[le].height,0,ce,Fe,Ce[le].data);for(let Re=0;Re<be.length;Re++){let dt=be[Re].image[le].image;P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re+1,0,0,dt.width,dt.height,ce,Fe,dt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re+1,Ie,dt.width,dt.height,0,ce,Fe,dt.data)}}else{P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ce,Fe,Ce[le]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ie,ce,Fe,Ce[le]);for(let Re=0;Re<be.length;Re++){let Le=be[Re];P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re+1,0,0,ce,Fe,Le.image[le]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re+1,Ie,ce,Fe,Le.image[le])}}}p(g)&&x(t.TEXTURE_CUBE_MAP),me.__version=ee.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function he(b,g,B,X,ee,me){let de=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),ae=F(B.internalFormat,de,Y,B.normalized,B.colorSpace),ge=o.get(g),qe=o.get(B);if(qe.__renderTarget=g,!ge.__hasExternalTextures){let Ce=Math.max(1,g.width>>me),_e=Math.max(1,g.height>>me);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?a.texImage3D(ee,me,ae,Ce,_e,g.depth,0,de,Y,null):a.texImage2D(ee,me,ae,Ce,_e,0,de,Y,null)}a.bindFramebuffer(t.FRAMEBUFFER,b),Oe(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,qe.__webglTexture,0,Me(g)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,qe.__webglTexture,me),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(b,g,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),g.depthBuffer){let X=g.depthTexture,ee=X&&X.isDepthTexture?X.type:null,me=C(g.stencilBuffer,ee),de=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Oe(g)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me(g),me,g.width,g.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me(g),me,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,me,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,b)}else{let X=g.textures;for(let ee=0;ee<X.length;ee++){let me=X[ee],de=r.convert(me.format,me.colorSpace),Y=r.convert(me.type),ae=F(me.internalFormat,de,Y,me.normalized,me.colorSpace);Oe(g)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me(g),ae,g.width,g.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me(g),ae,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ae,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(b,g,B){let X=g.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=o.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),z(t.TEXTURE_CUBE_MAP,g.depthTexture);let ge=r.convert(g.depthTexture.format),qe=r.convert(g.depthTexture.type),Ce;g.depthTexture.format===Bn?Ce=t.DEPTH_COMPONENT24:g.depthTexture.format===ms&&(Ce=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,g.width,g.height,0,ge,qe,null)}}else oe(g.depthTexture,0);let me=ee.__webglTexture,de=Me(g),Y=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ae=g.depthTexture.format===ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Bn)Oe(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,Y,me,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ae,Y,me,0);else if(g.depthTexture.format===ms)Oe(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,Y,me,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ae,Y,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(b){let g=o.get(b),B=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let X=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){let ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=X}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Qe(g.__webglFramebuffer[X],b,X);else{let X=b.texture.mipmaps;X&&X.length>0?Qe(g.__webglFramebuffer[0],b,0):Qe(g.__webglFramebuffer,b,0)}else if(B){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=t.createRenderbuffer(),Ve(g.__webglDepthbuffer[X],b,!1);else{let ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,me)}}else{let X=b.texture.mipmaps;if(X&&X.length>0?a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ve(g.__webglDepthbuffer,b,!1);else{let ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,me)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function re(b,g,B){let X=o.get(b);g!==void 0&&he(X.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&j(b)}function ne(b){let g=b.texture,B=o.get(b),X=o.get(g);b.addEventListener("dispose",S);let ee=b.textures,me=b.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=g.version,s.memory.textures++),me){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let ae=0;ae<g.mipmaps.length;ae++)B.__webglFramebuffer[Y][ae]=t.createFramebuffer()}else B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(de)for(let Y=0,ae=ee.length;Y<ae;Y++){let ge=o.get(ee[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Oe(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){let ae=ee[Y];B.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let ge=r.convert(ae.format,ae.colorSpace),qe=r.convert(ae.type),Ce=F(ae.internalFormat,ge,qe,ae.normalized,ae.colorSpace,b.isXRRenderTarget===!0),_e=Me(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Ce,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(B.__webglDepthRenderbuffer,b,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){a.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),z(t.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)he(B.__webglFramebuffer[Y][ae],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae);else he(B.__webglFramebuffer[Y],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(g)&&x(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(de){for(let Y=0,ae=ee.length;Y<ae;Y++){let ge=ee[Y],qe=o.get(ge),Ce=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Ce,qe.__webglTexture),z(Ce,ge),he(B.__webglFramebuffer,b,ge,t.COLOR_ATTACHMENT0+Y,Ce,0),p(ge)&&x(Ce)}a.unbindTexture()}else{let Y=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Y,X.__webglTexture),z(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)he(B.__webglFramebuffer[ae],b,g,t.COLOR_ATTACHMENT0,Y,ae);else he(B.__webglFramebuffer,b,g,t.COLOR_ATTACHMENT0,Y,0);p(g)&&x(Y),a.unbindTexture()}b.depthBuffer&&j(b)}function se(b){let g=b.textures;for(let B=0,X=g.length;B<X;B++){let ee=g[B];if(p(ee)){let me=v(b),de=o.get(ee).__webglTexture;a.bindTexture(me,de),x(me),a.unbindTexture()}}}let fe=[],Ne=[];function De(b){if(b.samples>0){if(Oe(b)===!1){let g=b.textures,B=b.width,X=b.height,ee=t.COLOR_BUFFER_BIT,me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=o.get(b),Y=g.length>1;if(Y)for(let ge=0;ge<g.length;ge++)a.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ae=b.texture.mipmaps;ae&&ae.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let qe=o.get(g[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,ee,t.NEAREST),l===!0&&(fe.length=0,Ne.length=0,fe.push(t.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(fe.push(me),Ne.push(me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ne)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ge=0;ge<g.length;ge++){a.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let qe=o.get(g[ge]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,qe,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let g=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Me(b){return Math.min(n.maxSamples,b.samples)}function Oe(b){let g=o.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function E(b){let g=s.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function at(b,g){let B=b.colorSpace,X=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==lf&&B!==pr&&(vt.getTransfer(B)===Lt?(X!==Qo||ee!==xo)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",B)),g}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=R,this.setTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=re,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function qL(t,e){function a(o,n=pr){let r,s=vt.getTransfer(n);if(o===xo)return t.UNSIGNED_BYTE;if(o===Yp)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Zp)return t.UNSIGNED_SHORT_5_5_5_1;if(o===jx)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===$x)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===Jx)return t.BYTE;if(o===Qx)return t.SHORT;if(o===zl)return t.UNSIGNED_SHORT;if(o===Xp)return t.INT;if(o===dn)return t.UNSIGNED_INT;if(o===pn)return t.FLOAT;if(o===hn)return t.HALF_FLOAT;if(o===eg)return t.ALPHA;if(o===tg)return t.RGB;if(o===Qo)return t.RGBA;if(o===Bn)return t.DEPTH_COMPONENT;if(o===ms)return t.DEPTH_STENCIL;if(o===ag)return t.RED;if(o===Kp)return t.RED_INTEGER;if(o===Is)return t.RG;if(o===Jp)return t.RG_INTEGER;if(o===Qp)return t.RGBA_INTEGER;if(o===Df||o===Lf||o===Pf||o===Bf)if(s===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Df)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Lf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Pf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Bf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Df)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Lf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Pf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Bf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===jp||o===$p||o===eh||o===th)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===jp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===$p)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===ah||o===oh||o===nh||o===rh||o===sh||o===Uf||o===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===ah||o===oh)return s===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===nh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===rh)return r.COMPRESSED_R11_EAC;if(o===sh)return r.COMPRESSED_SIGNED_R11_EAC;if(o===Uf)return r.COMPRESSED_RG11_EAC;if(o===ih)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===lh||o===ch||o===fh||o===uh||o===dh||o===ph||o===hh||o===mh||o===Ih||o===xh||o===gh||o===Fh||o===Sh||o===vh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===lh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ch)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===uh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===dh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ph)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===hh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===mh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ih)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===gh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Fh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Sh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===vh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===yh||o===Mh||o===Ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===yh)return s===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===_h||o===bh||o===kf||o===Th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(o===bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===kf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Hl?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var WL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XL=`
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

}`,Mg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new If(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Lo({vertexShader:WL,fragmentShader:XL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ra(new js(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cg=class extends Un{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,I=null,M=typeof XRWebGLBinding<"u",m=new Mg,p={},x=a.getContextAttributes(),v=null,F=null,C=[],_=[],w=new Ee,S=null,T=null,A=new Ga;A.viewport=new jt;let D=new Ga;D.viewport=new jt;let H=[A,D],O=new Hp,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=C[Z];return J===void 0&&(J=new Cl,C[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=C[Z];return J===void 0&&(J=new Cl,C[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=C[Z];return J===void 0&&(J=new Cl,C[Z]=J),J.getHandSpace()};function $(Z){let J=_.indexOf(Z.inputSource);if(J===-1)return;let ve=C[J];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||s),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",oe);for(let Z=0;Z<C.length;Z++){let J=_[Z];J!==null&&(_[Z]=null,C[Z].disconnect(J))}R=null,k=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(v),d=null,f=null,h=null,n=null,F=null,je.stop(),o.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,o.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){i=Z,o.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return I},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",q),n.addEventListener("inputsourceschange",oe),x.xrCompatible!==!0&&await a.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ke=null,he=null;x.depth&&(he=x.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ve=x.stencil?ms:Bn,ke=x.stencil?Hl:dn);let Ve={colorFormat:a.RGBA8,depthFormat:he,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ve),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),F=new Io(f.textureWidth,f.textureHeight,{format:Qo,type:xo,depthTexture:new is(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,ve),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),F=new Io(d.framebufferWidth,d.framebufferHeight,{format:Qo,type:xo,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),je.setContext(n),je.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Z){for(let J=0;J<Z.removed.length;J++){let ve=Z.removed[J],ke=_.indexOf(ve);ke>=0&&(_[ke]=null,C[ke].disconnect(ve))}for(let J=0;J<Z.added.length;J++){let ve=Z.added[J],ke=_.indexOf(ve);if(ke===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=_.length){_.push(ve),ke=Ve;break}else if(_[Ve]===null){_[Ve]=ve,ke=Ve;break}if(ke===-1)break}let he=C[ke];he&&he.connect(ve)}}let N=new U,K=new U;function te(Z,J,ve){N.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let ke=N.distanceTo(K),he=J.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,Qe=he[14]/(he[10]-1),j=he[14]/(he[10]+1),re=(he[9]+1)/he[5],ne=(he[9]-1)/he[5],se=(he[8]-1)/he[0],fe=(Ve[8]+1)/Ve[0],Ne=Qe*se,De=Qe*fe,Me=ke/(-se+fe),Oe=Me*-se;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Oe),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),he[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let E=Qe+Me,at=j+Me,Xe=Ne-Oe,b=De+(ke-Oe),g=re*j/at*E,B=ne*j/at*E;Z.projectionMatrix.makePerspective(Xe,b,g,B,E,at),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ae(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let J=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=D.near=A.near=J,O.far=D.far=A.far=ve,(R!==O.near||k!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),R=O.near,k=O.far),O.layers.mask=Z.layers.mask|6,A.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let ke=Z.parent,he=O.cameras;Ae(O,ke);for(let Ve=0;Ve<he.length;Ve++)Ae(he[Ve],ke);he.length===2?te(O,A,D):O.projectionMatrix.copy(A.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Se(Z,O,ke)};function Se(Z,J,ve){ve===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let We=null;function z(Z,J){if(u=J.getViewerPose(c||s),I=J,u!==null){let ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(F,d.framebuffer),e.setRenderTarget(F));let ke=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,ke=!0);for(let j=0;j<ve.length;j++){let re=ve[j],ne=null;if(d!==null)ne=d.getViewport(re);else{let fe=h.getViewSubImage(f,re);ne=fe.viewport,j===0&&(e.setRenderTargetTextures(F,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(F))}let se=H[j];se===void 0&&(se=new Ga,se.layers.enable(j),se.viewport=new jt,H[j]=se),se.matrix.fromArray(re.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(re.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ne.x,ne.y,ne.width,ne.height),j===0&&(O.matrix.copy(se.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ke===!0&&O.cameras.push(se)}let he=n.enabledFeatures;if(he&&he.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&M){h=o.getBinding();let j=h.getDepthInformation(ve[0]);j&&j.isValid&&j.texture&&m.init(j,n.renderState)}if(he&&he.includes("camera-access")&&M){e.state.unbindTexture(),h=o.getBinding();for(let j=0;j<ve.length;j++){let re=ve[j].camera;if(re){let ne=p[re];ne||(ne=new If,p[re]=ne);let se=h.getCameraImage(re);ne.sourceTexture=se}}}}for(let ve=0;ve<C.length;ve++){let ke=_[ve],he=C[ve];ke!==null&&he!==void 0&&he.update(ke,J,c||s)}We&&We(Z,J),J.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:J}),I=null}let je=new Y1;je.setAnimationLoop(z),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},YL=new Vt,$1=new lt;$1.set(-1,0,0,0,1,0,0,0,1);function ZL(t,e){function a(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function o(m,p){p.color.getRGB(m.fogColor.value,sg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,v,F){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,F)):p.isMeshMatcapMaterial?(r(m,p),I(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&i(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,a(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===no&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,a(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===no&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,a(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,a(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,F=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(YL.makeRotationFromEuler(F)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($1),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform))}function i(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,a(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===no&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,m.specularIntensityMapTransform))}function I(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function KL(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(F,C){let _=C.program;o.uniformBlockBinding(F,_)}function c(F,C){let _=n[F.id];_===void 0&&(m(F),_=u(F),n[F.id]=_,F.addEventListener("dispose",x));let w=C.program;o.updateUBOMapping(F,w);let S=e.render.frame;r[F.id]!==S&&(f(F),r[F.id]=S)}function u(F){let C=h();F.__bindingPointIndex=C;let _=t.createBuffer(),w=F.__size,S=F.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,w,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,_),_}function h(){for(let F=0;F<i;F++)if(s.indexOf(F)===-1)return s.push(F),F;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(F){let C=n[F.id],_=F.uniforms,w=F.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let S=0,T=_.length;S<T;S++){let A=_[S];if(Array.isArray(A))for(let D=0,H=A.length;D<H;D++)d(A[D],S,D,w);else d(A,S,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(F,C,_,w){if(M(F,C,_,w)===!0){let S=F.__offset,T=F.value;if(Array.isArray(T)){let A=0;for(let D=0;D<T.length;D++){let H=T[D],O=p(H);I(H,F.__data,A),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else I(T,F.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,F.__data)}}function I(F,C,_){typeof F=="number"||typeof F=="boolean"?C[0]=F:F.isMatrix3?(C[0]=F.elements[0],C[1]=F.elements[1],C[2]=F.elements[2],C[3]=0,C[4]=F.elements[3],C[5]=F.elements[4],C[6]=F.elements[5],C[7]=0,C[8]=F.elements[6],C[9]=F.elements[7],C[10]=F.elements[8],C[11]=0):ArrayBuffer.isView(F)?C.set(new F.constructor(F.buffer,F.byteOffset,C.length)):F.toArray(C,_)}function M(F,C,_,w){let S=F.value,T=C+"_"+_;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:ArrayBuffer.isView(S)?w[T]=S.slice():w[T]=S.clone(),!0;{let A=w[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function m(F){let C=F.uniforms,_=0,w=16;for(let T=0,A=C.length;T<A;T++){let D=Array.isArray(C[T])?C[T]:[C[T]];for(let H=0,O=D.length;H<O;H++){let R=D[H],k=Array.isArray(R.value)?R.value:[R.value];for(let $=0,q=k.length;$<q;$++){let oe=k[$],N=p(oe),K=_%w,te=K%N.boundary,Ae=K+te;_+=te,Ae!==0&&w-Ae<N.storage&&(_+=w-Ae),R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=N.storage}}}let S=_%w;return S>0&&(_+=w-S),F.__size=_,F.__cache={},this}function p(F){let C={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(C.boundary=4,C.storage=4):F.isVector2?(C.boundary=8,C.storage=8):F.isVector3||F.isColor?(C.boundary=16,C.storage=12):F.isVector4?(C.boundary=16,C.storage=16):F.isMatrix3?(C.boundary=48,C.storage=48):F.isMatrix4?(C.boundary=64,C.storage=64):F.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(F)?(C.boundary=16,C.storage=F.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",F),C}function x(F){let C=F.target;C.removeEventListener("dispose",x);let _=s.indexOf(C.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function v(){for(let F in n)t.deleteBuffer(n[F]);s=[],n={},r={}}return{bind:l,update:c,dispose:v}}var JL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function QL(){return On===null&&(On=new Tl(JL,16,16,Is,hn),On.name="DFG_LUT",On.minFilter=Fa,On.magFilter=Fa,On.wrapS=Jo,On.wrapT=Jo,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Ph=class{constructor(e={}){let{canvas:a=h1(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xo}=e;this.isWebGLRenderer=!0;let I;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");I=o.getContextAttributes().alpha}else I=s;let M=d,m=new Set([Qp,Jp,Kp]),p=new Set([xo,dn,zl,Hl,Yp,Zp]),x=new Uint32Array(4),v=new Int32Array(4),F=new U,C=null,_=null,w=[],S=[],T=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,H=null,O=null,R=null,k=null;this._outputColorSpace=ka;let $=0,q=0,oe=null,N=-1,K=null,te=new jt,Ae=new jt,Se=null,We=new ft(0),z=0,je=a.width,Z=a.height,J=1,ve=null,ke=null,he=new jt(0,0,je,Z),Ve=new jt(0,0,je,Z),Qe=!1,j=new Al,re=!1,ne=!1,se=new Vt,fe=new U,Ne=new jt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Oe(){return oe===null?J:1}let E=o;function at(y,L){return a.getContext(y,L)}let Xe,b,g,B,X,ee,me,de,Y,ae,ge,qe,Ce,_e,ce,Fe,Ie,P,pe,Q,xe,be,le;try{let y={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Vp}`),a.addEventListener("webglcontextlost",dt,!1),a.addEventListener("webglcontextrestored",rt,!1),a.addEventListener("webglcontextcreationerror",sa,!1),E===null){let L="webgl2";if(E=at(L,y),E===null)throw at(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(y){throw a.removeEventListener("webglcontextlost",dt,!1),a.removeEventListener("webglcontextrestored",rt,!1),a.removeEventListener("webglcontextcreationerror",sa,!1),et("WebGLRenderer: "+y.message),y}function Re(){Xe=new nD(E),Xe.init(),xe=new qL(E,Xe),b=new ZR(E,Xe,e,xe),g=new VL(E,Xe),b.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),O=E.createFramebuffer(),R=E.createFramebuffer(),k=E.createFramebuffer(),B=new iD(E),X=new AL,ee=new GL(E,Xe,g,X,b,xe,B),me=new oD(A),de=new c2(E),be=new XR(E,de),Y=new rD(E,de,B,be),ae=new cD(E,Y,de,be,B),P=new lD(E,b,ee),ce=new KR(X),ge=new TL(A,me,Xe,b,be,ce),qe=new ZL(A,X),Ce=new EL,_e=new UL(Xe),Ie=new WR(A,me,g,ae,I,l),Fe=new HL(A,ae,b),le=new KL(E,B,b,g),pe=new YR(E,Xe,B),Q=new sD(E,Xe,B),B.programs=ge.programs,A.capabilities=b,A.extensions=Xe,A.properties=X,A.renderLists=Ce,A.shadowMap=Fe,A.state=g,A.info=B}M!==xo&&(T=new uD(M,a.width,a.height,i,n,r));let Le=new Cg(A,E);this.xr=Le,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(je,Z,!1))},this.getSize=function(y){return y.set(je,Z)},this.setSize=function(y,L,V=!0){if(Le.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}je=y,Z=L,a.width=Math.floor(y*J),a.height=Math.floor(L*J),V===!0&&(a.style.width=y+"px",a.style.height=L+"px"),T!==null&&T.setSize(a.width,a.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(je*J,Z*J).floor()},this.setDrawingBufferSize=function(y,L,V){je=y,Z=L,J=V,a.width=Math.floor(y*V),a.height=Math.floor(L*V),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(M===xo){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(he)},this.setViewport=function(y,L,V,G){y.isVector4?he.set(y.x,y.y,y.z,y.w):he.set(y,L,V,G),g.viewport(te.copy(he).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,L,V,G){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,L,V,G),g.scissor(Ae.copy(Ve).multiplyScalar(J).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(y){g.setScissorTest(Qe=y)},this.setOpaqueSort=function(y){ve=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,V=!0){let G=0;if(y){let W=!1;if(oe!==null){let we=oe.texture.format;W=m.has(we)}if(W){let we=oe.texture.type,Ue=p.has(we),ye=Ie.getClearColor(),Ge=Ie.getClearAlpha(),Ye=ye.r,ct=ye.g,mt=ye.b;Ue?(x[0]=Ye,x[1]=ct,x[2]=mt,x[3]=Ge,E.clearBufferuiv(E.COLOR,0,x)):(v[0]=Ye,v[1]=ct,v[2]=mt,v[3]=Ge,E.clearBufferiv(E.COLOR,0,v))}else G|=E.COLOR_BUFFER_BIT}L&&(G|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(G|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&E.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),H=y},this.dispose=function(){a.removeEventListener("webglcontextlost",dt,!1),a.removeEventListener("webglcontextrestored",rt,!1),a.removeEventListener("webglcontextcreationerror",sa,!1),Ie.dispose(),Ce.dispose(),_e.dispose(),X.dispose(),me.dispose(),ae.dispose(),be.dispose(),le.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Ze),Le.removeEventListener("sessionend",Je),pt.stop()};function dt(y){y.preventDefault(),ng("WebGLRenderer: Context Lost."),D=!0}function rt(){ng("WebGLRenderer: Context Restored."),D=!1;let y=B.autoReset,L=Fe.enabled,V=Fe.autoUpdate,G=Fe.needsUpdate,W=Fe.type;Re(),B.autoReset=y,Fe.enabled=L,Fe.autoUpdate=V,Fe.needsUpdate=G,Fe.type=W}function sa(y){et("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ya(y){let L=y.target;L.removeEventListener("dispose",Ya),ko(L)}function ko(y){ri(y),X.remove(y)}function ri(y){let L=X.get(y).programs;L!==void 0&&(L.forEach(function(V){ge.releaseProgram(V)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,V,G,W,we){L===null&&(L=De);let Ue=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=Zf(y,L,V,G,W);g.setMaterial(G,Ue);let Ge=V.index,Ye=1;if(G.wireframe===!0){if(Ge=Y.getWireframeAttribute(V),Ge===void 0)return;Ye=2}let ct=V.drawRange,mt=V.attributes.position,ze=ct.start*Ye,Ct=(ct.start+ct.count)*Ye;we!==null&&(ze=Math.max(ze,we.start*Ye),Ct=Math.min(Ct,(we.start+we.count)*Ye)),Ge!==null?(ze=Math.max(ze,0),Ct=Math.min(Ct,Ge.count)):mt!=null&&(ze=Math.max(ze,0),Ct=Math.min(Ct,mt.count));let _t=Ct-ze;if(_t<0||_t===1/0)return;be.setup(W,G,ye,V,Ge);let Mt,$e=pe;if(Ge!==null&&(Mt=de.get(Ge),$e=Q,$e.setIndex(Mt)),W.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*Oe()),$e.setMode(E.LINES)):$e.setMode(E.TRIANGLES);else if(W.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),g.setLineWidth(Kt*Oe()),W.isLineSegments?$e.setMode(E.LINES):W.isLineLoop?$e.setMode(E.LINE_LOOP):$e.setMode(E.LINE_STRIP)}else W.isPoints?$e.setMode(E.POINTS):W.isSprite&&$e.setMode(E.TRIANGLES);if(W.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))$e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Kt=W._multiDrawStarts,He=W._multiDrawCounts,ha=W._multiDrawCount,yt=Ge?de.get(Ge).bytesPerElement:1,ma=X.get(G).currentProgram.getUniforms();for(let so=0;so<ha;so++)ma.setValue(E,"_gl_DrawID",so),$e.render(Kt[so]/yt,He[so])}else if(W.isInstancedMesh)$e.renderInstances(ze,_t,W.count);else if(V.isInstancedBufferGeometry){let Kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,He=Math.min(V.instanceCount,Kt);$e.renderInstances(ze,_t,He)}else $e.render(ze,_t)};function xr(y,L,V,G){H!==null&&y.isNodeMaterial&&H.setObject(G,y),re===!0&&ce.setState(y,V,!1),y.transparent===!0&&y.side===Bo&&y.forceSinglePass===!1?(y.side=no,y.needsUpdate=!0,Za(y,L,G),y.side=ps,y.needsUpdate=!0,Za(y,L,G),y.side=Bo):Za(y,L,G)}this.compile=function(y,L,V=null){V===null&&(V=y),H!==null&&H.renderStart(y,L,V),_=_e.get(V),_.init(L),S.push(_),V.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),y!==V&&y.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights(),H!==null&&H.updateLights(_.state.lightsArray),ne=this.localClippingEnabled,re=ce.init(this.clippingPlanes,ne),re===!0&&ce.setGlobalState(this.clippingPlanes,L),H!==null&&Fe.render(_.state.shadowsArray,V,L);let G=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){let ye=we[Ue];xr(ye,V,L,W),G.add(ye)}else xr(we,V,L,W),G.add(we)}),_=S.pop(),H!==null&&H.renderEnd(),G},this.compileAsync=function(y,L,V=null){let G=this.compile(y,L,V);return new Promise(W=>{function we(){if(G.forEach(function(Ue){let Ge=X.get(Ue).currentProgram;(Ge===void 0||Ge.isReady())&&G.delete(Ue)}),G.size===0){W(y);return}setTimeout(we,10)}Xe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gr=null;function Pe(y){gr&&gr(y)}function Ze(){pt.stop()}function Je(){pt.start()}let pt=new Y1;pt.setAnimationLoop(Pe),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(y){gr=y,Le.setAnimationLoop(y),y===null?pt.stop():pt.start()},Le.addEventListener("sessionstart",Ze),Le.addEventListener("sessionend",Je),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(y,L);let V=Le.enabled===!0&&Le.isPresenting===!0,G=T!==null&&(oe===null||V)&&T.begin(A,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(L),L=Le.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,L,oe),_=_e.get(y,S.length),_.init(L),_.state.textureUnits=ee.getTextureUnits(),S.push(_),se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(se,fn,L.reversedDepth),ne=this.localClippingEnabled,re=ce.init(this.clippingPlanes,ne),C=Ce.get(y,w.length),C.init(),w.push(C),Le.enabled===!0&&Le.isPresenting===!0){let Ue=A.xr.getDepthSensingMesh();Ue!==null&&bt(Ue,L,-1/0,A.sortObjects)}bt(y,L,0,A.sortObjects),C.finish(),H!==null&&H.updateLights(_.state.lightsArray),A.sortObjects===!0&&C.sort(ve,ke),Me=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Me&&Ie.addToRenderList(C,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&ce.beginShadows();let W=_.state.shadowsArray;if(Fe.render(W,y,L),re===!0&&ce.endShadows(),(G&&T.hasRenderPass())===!1){let Ue=C.opaque,ye=C.transmissive;if(_.setupLights(),L.isArrayCamera){let Ge=L.cameras;if(ye.length>0)for(let Ye=0,ct=Ge.length;Ye<ct;Ye++){let mt=Ge[Ye];ya(Ue,ye,y,mt)}Me&&Ie.render(y);for(let Ye=0,ct=Ge.length;Ye<ct;Ye++){let mt=Ge[Ye];ia(C,y,mt,mt.viewport)}}else ye.length>0&&ya(Ue,ye,y,L),Me&&Ie.render(y),ia(C,y,L)}oe!==null&&q===0&&(ee.updateMultisampleRenderTarget(oe),ee.updateRenderTargetMipmap(oe)),G&&T.end(A),y.isScene===!0&&y.onAfterRender(A,y,L),be.resetDefaultState(),N=-1,K=null,S.pop(),S.length>0?(_=S[S.length-1],ee.setTextureUnits(_.state.textureUnits),re===!0&&ce.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?C=w[w.length-1]:C=null,H!==null&&H.renderEnd()};function bt(y,L,V,G){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLightProbeGrid)_.pushLightProbeGrid(y);else if(y.isLight)_.pushLight(y),y.castShadow&&_.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(j)){G&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);let Ue=ae.update(y),ye=y.material;ye.visible&&C.push(y,Ue,ye,V,Ne.z,null,L)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(j))){let Ue=ae.update(y),ye=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ne.copy(Ue.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(ye)){let Ge=Ue.groups;for(let Ye=0,ct=Ge.length;Ye<ct;Ye++){let mt=Ge[Ye],ze=ye[mt.materialIndex];ze&&ze.visible&&C.push(y,Ue,ze,V,Ne.z,mt,L)}}else ye.visible&&C.push(y,Ue,ye,V,Ne.z,null,L)}}let we=y.children;for(let Ue=0,ye=we.length;Ue<ye;Ue++)bt(we[Ue],L,V,G)}function ia(y,L,V,G){let{opaque:W,transmissive:we,transparent:Ue}=y;_.setupLightsView(V),re===!0&&ce.setGlobalState(A.clippingPlanes,V),G&&g.viewport(te.copy(G)),W.length>0&&wt(W,L,V),we.length>0&&wt(we,L,V),Ue.length>0&&wt(Ue,L,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ya(y,L,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[G.id]===void 0){let ze=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[G.id]=new Io(1,1,{generateMipmaps:!0,type:ze?hn:xo,minFilter:Nn,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let we=_.state.transmissionRenderTarget[G.id],Ue=G.viewport||te;we.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(We),z=A.getClearAlpha(),z<1&&A.setClearColor(16777215,.5),A.clear(),Me&&Ie.render(V);let ct=A.toneMapping;A.toneMapping=un;let mt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),_.setupLightsView(G),re===!0&&ce.setGlobalState(A.clippingPlanes,G),wt(y,V,G),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ct=0,_t=L.length;Ct<_t;Ct++){let Mt=L[Ct],{object:$e,geometry:Kt,material:He,group:ha}=Mt;if(He.side===Bo&&$e.layers.test(G.layers)){let yt=He.side;He.side=no,He.needsUpdate=!0,ot($e,V,G,Kt,He,ha),He.side=yt,He.needsUpdate=!0,ze=!0}}ze===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we))}A.setRenderTarget(ye,Ge,Ye),A.setClearColor(We,z),mt!==void 0&&(G.viewport=mt),A.toneMapping=ct}function wt(y,L,V){let G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,we=y.length;W<we;W++){let Ue=y[W],{object:ye,geometry:Ge,group:Ye}=Ue,ct=Ue.material;ct.allowOverride===!0&&G!==null&&(ct=G),ye.layers.test(V.layers)&&ot(ye,L,V,Ge,ct,Ye)}}function ot(y,L,V,G,W,we){H!==null&&W.isNodeMaterial&&H.setObject(y,W),y.onBeforeRender(A,L,V,G,W,we),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(A,L,V,G,y,we),W.transparent===!0&&W.side===Bo&&W.forceSinglePass===!1?(W.side=no,W.needsUpdate=!0,A.renderBufferDirect(V,L,G,W,y,we),W.side=ps,W.needsUpdate=!0,A.renderBufferDirect(V,L,G,W,y,we),W.side=Bo):A.renderBufferDirect(V,L,G,W,y,we),y.onAfterRender(A,L,V,G,W,we)}function Za(y,L,V){L.isScene!==!0&&(L=De);let G=X.get(y),W=_.state.lights,we=_.state.shadowsArray,Ue=W.state.version,ye=ge.getParameters(y,W.state,we,L,V,_.state.lightProbeGridArray),Ge=ge.getProgramCacheKey(ye),Ye=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let ct=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=me.get(y.envMap||G.environment,ct),G.envMapRotation=G.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ye===void 0&&(y.addEventListener("dispose",Ya),Ye=new Map,G.programs=Ye);let mt=Ye.get(Ge);if(mt!==void 0){if(G.currentProgram===mt&&G.lightsStateVersion===Ue)return go(y,ye),mt}else ye.uniforms=ge.getUniforms(y),H!==null&&y.isNodeMaterial&&H.build(y,V,ye),y.onBeforeCompile(ye,A),mt=ge.acquireProgram(ye,Ge),Ye.set(Ge,mt),G.uniforms=ye.uniforms;let ze=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=ce.uniform),go(y,ye),G.needsLights=Jf(y),G.lightsStateVersion=Ue,G.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.sunLights.value=W.state.sun,ze.sunLightShadows.value=W.state.sunShadow,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.sunShadowMatrix.value=W.state.sunShadowMatrix,ze.sunShadowCascade.value=W.state.sunShadowCascade,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=_.state.lightProbeGridArray.length>0,G.currentProgram=mt,G.uniformsList=null,mt}function wa(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Wl.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function go(y,L){let V=X.get(y);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Yf(y,L){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;F.setFromMatrixPosition(L.matrixWorld);for(let V=0,G=y.length;V<G;V++){let W=y[V];if(W.texture!==null&&W.boundingBox.containsPoint(F))return W}return null}function Zf(y,L,V,G,W){L.isScene!==!0&&(L=De),ee.resetTextureUnits();let we=L.fog,Ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,ye=oe===null?A.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:vt.workingColorSpace,Ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ye=me.get(G.envMap||Ue,Ge),ct=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,mt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ze=!!V.morphAttributes.position,Ct=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color,Mt=un;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Mt=A.toneMapping);let $e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Kt=$e!==void 0?$e.length:0,He=X.get(G),ha=_.state.lights;if(re===!0&&(ne===!0||y!==K)){let Gt=y===K&&G.id===N;ce.setState(G,y,Gt)}let yt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ha.state.version||He.outputColorSpace!==ye||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ye||G.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ce.numPlanes||He.numIntersection!==ce.numIntersection)||He.vertexAlphas!==ct||He.vertexTangents!==mt||He.morphTargets!==ze||He.morphNormals!==Ct||He.morphColors!==_t||He.toneMapping!==Mt||He.morphTargetsCount!==Kt||!!He.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,He.__version=G.version);let ma=He.currentProgram;yt===!0&&(ma=Za(G,L,W),H&&G.isNodeMaterial&&H.onUpdateProgram(G,ma,He));let so=!1,No=!1,mn=!1,Tt=ma.getUniforms(),oa=He.uniforms;if(g.useProgram(ma.program)&&(so=!0,No=!0,mn=!0),G.id!==N&&(N=G.id,No=!0),He.needsLights){let Gt=Yf(_.state.lightProbeGridArray,W);He.lightProbeGrid!==Gt&&(He.lightProbeGrid=Gt,No=!0)}if(so||K!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Tt.setValue(E,"projectionMatrix",y.projectionMatrix),Tt.setValue(E,"viewMatrix",y.matrixWorldInverse);let Sr=Tt.map.cameraPosition;Sr!==void 0&&Sr.setValue(E,fe.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&Tt.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,No=!0,mn=!0)}if(He.needsLights&&(ha.state.sunShadowMap.length>0&&Tt.setValue(E,"sunShadowMap",ha.state.sunShadowMap,ee),ha.state.directionalShadowMap.length>0&&Tt.setValue(E,"directionalShadowMap",ha.state.directionalShadowMap,ee),ha.state.spotShadowMap.length>0&&Tt.setValue(E,"spotShadowMap",ha.state.spotShadowMap,ee),ha.state.pointShadowMap.length>0&&Tt.setValue(E,"pointShadowMap",ha.state.pointShadowMap,ee)),W.isSkinnedMesh){Tt.setOptional(E,W,"bindMatrix"),Tt.setOptional(E,W,"bindMatrixInverse");let Gt=W.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Tt.setValue(E,"boneTexture",Gt.boneTexture,ee))}W.isBatchedMesh&&(Tt.setOptional(E,W,"batchingTexture"),Tt.setValue(E,"batchingTexture",W._matricesTexture,ee),Tt.setOptional(E,W,"batchingIdTexture"),Tt.setValue(E,"batchingIdTexture",W._indirectTexture,ee),Tt.setOptional(E,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(E,"batchingColorTexture",W._colorsTexture,ee));let Fr=V.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&P.update(W,V,ma),(No||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Tt.setValue(E,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(oa.envMapIntensity.value=L.environmentIntensity),oa.dfgLUT!==void 0&&(oa.dfgLUT.value=QL()),No){if(Tt.setValue(E,"toneMappingExposure",A.toneMappingExposure),He.needsLights&&Kf(oa,mn),we&&G.fog===!0&&qe.refreshFogUniforms(oa,we),qe.refreshMaterialUniforms(oa,G,J,Z,_.state.transmissionRenderTarget[y.id]),He.needsLights&&He.lightProbeGrid){let Gt=He.lightProbeGrid;oa.probesSH.value=Gt.texture,oa.probesMin.value.copy(Gt.boundingBox.min),oa.probesMax.value.copy(Gt.boundingBox.max),oa.probesResolution.value.copy(Gt.resolution)}Wl.upload(E,wa(He),oa,ee)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wl.upload(E,wa(He),oa,ee),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(E,"center",W.center),Tt.setValue(E,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(E,"normalMatrix",W.normalMatrix),Tt.setValue(E,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Gt=G.uniformsGroups;for(let Sr=0,si=Gt.length;Sr<si;Sr++){let Ug=Gt[Sr];le.update(Ug,ma),le.bind(Ug,ma)}}return ma}function Kf(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Jf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,L,V){let G=X.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=L,X.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let V=X.get(y);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,V=0){oe=y,$=L,q=V;let G=null,W=!1,we=!1;if(y){let ye=X.get(y);if(ye.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(E.FRAMEBUFFER,ye.__webglFramebuffer),te.copy(y.viewport),Ae.copy(y.scissor),Se=y.scissorTest,g.viewport(te),g.scissor(Ae),g.setScissorTest(Se),N=-1;return}else if(ye.__webglFramebuffer===void 0)ee.setupRenderTarget(y);else if(ye.__hasExternalTextures)ee.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ct=y.depthTexture;if(ye.__boundDepthTexture!==ct){if(ct!==null&&X.has(ct)&&(y.width!==ct.image.width||y.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(y)}}let Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);let Ye=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ye[L])?G=Ye[L][V]:G=Ye[L],W=!0):y.samples>0&&ee.useMultisampledRTT(y)===!1?G=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[V]:G=Ye,te.copy(y.viewport),Ae.copy(y.scissor),Se=y.scissorTest}else te.copy(he).multiplyScalar(J).floor(),Ae.copy(Ve).multiplyScalar(J).floor(),Se=Qe;if(V!==0&&(G=O),g.bindFramebuffer(E.FRAMEBUFFER,G)&&g.drawBuffers(y,G),g.viewport(te),g.scissor(Ae),g.setScissorTest(Se),W){let ye=X.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,V)}else if(we){let ye=L;for(let Ge=0;Ge<y.textures.length;Ge++){let Ye=X.get(y.textures[Ge]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,V,ye)}}else if(y!==null&&V!==0){let ye=X.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ye.__webglTexture,V)}N=-1};function ue(y){let L=X.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=b.textureFormatReadable(y.format),L.__typeReadable=b.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,V,G,W,we,Ue,ye=0){if(!(y&&y.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){g.bindFramebuffer(E.FRAMEBUFFER,Ge);try{let Ye=y.textures[ye],ct=Ye.format,mt=Ye.type;y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ye);let ze=ue(Ye);if(ze.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-G&&V>=0&&V<=y.height-W&&E.readPixels(L,V,G,W,xe.convert(ct),xe.convert(mt),we)}finally{let Ye=oe!==null?X.get(oe).__webglFramebuffer:null;g.bindFramebuffer(E.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(y,L,V,G,W,we,Ue,ye=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge)if(L>=0&&L<=y.width-G&&V>=0&&V<=y.height-W){g.bindFramebuffer(E.FRAMEBUFFER,Ge);let Ye=y.textures[ye],ct=Ye.format,mt=Ye.type;y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ye);let ze=ue(Ye);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.bufferData(E.PIXEL_PACK_BUFFER,we.byteLength,E.STREAM_READ),E.readPixels(L,V,G,W,xe.convert(ct),xe.convert(mt),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let _t=oe!==null?X.get(oe).__webglFramebuffer:null;g.bindFramebuffer(E.FRAMEBUFFER,_t);let Mt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await I1(E,Mt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,we),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(Ct),E.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,V=0){let G=Math.pow(2,-V),W=Math.floor(y.image.width*G),we=Math.floor(y.image.height*G),Ue=L!==null?L.x:0,ye=L!==null?L.y:0;ee.setTexture2D(y,0),E.copyTexSubImage2D(E.TEXTURE_2D,V,0,0,Ue,ye,W,we),g.unbindTexture()},this.copyTextureToTexture=function(y,L,V=null,G=null,W=0,we=0){let Ue,ye,Ge,Ye,ct,mt,ze,Ct,_t,Mt=y.isCompressedTexture?y.mipmaps[we]:y.image;if(V!==null)Ue=V.max.x-V.min.x,ye=V.max.y-V.min.y,Ge=V.isBox3?V.max.z-V.min.z:1,Ye=V.min.x,ct=V.min.y,mt=V.isBox3?V.min.z:0;else{let oa=Math.pow(2,-W);Ue=Math.floor(Mt.width*oa),ye=Math.floor(Mt.height*oa),y.isDataArrayTexture?Ge=Mt.depth:y.isData3DTexture?Ge=Math.floor(Mt.depth*oa):Ge=1,Ye=0,ct=0,mt=0}G!==null?(ze=G.x,Ct=G.y,_t=G.z):(ze=0,Ct=0,_t=0);let $e=xe.convert(L.format),Kt=xe.convert(L.type),He;L.isData3DTexture?(ee.setTexture3D(L,0),He=E.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ee.setTexture2DArray(L,0),He=E.TEXTURE_2D_ARRAY):(ee.setTexture2D(L,0),He=E.TEXTURE_2D),g.activeTexture(E.TEXTURE0),g.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(E.UNPACK_ALIGNMENT,L.unpackAlignment);let ha=g.getParameter(E.UNPACK_ROW_LENGTH),yt=g.getParameter(E.UNPACK_IMAGE_HEIGHT),ma=g.getParameter(E.UNPACK_SKIP_PIXELS),so=g.getParameter(E.UNPACK_SKIP_ROWS),No=g.getParameter(E.UNPACK_SKIP_IMAGES);g.pixelStorei(E.UNPACK_ROW_LENGTH,Mt.width),g.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt.height),g.pixelStorei(E.UNPACK_SKIP_PIXELS,Ye),g.pixelStorei(E.UNPACK_SKIP_ROWS,ct),g.pixelStorei(E.UNPACK_SKIP_IMAGES,mt);let mn=y.isDataArrayTexture||y.isData3DTexture,Tt=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let oa=X.get(y),Fr=X.get(L),Gt=X.get(oa.__renderTarget),Sr=X.get(Fr.__renderTarget);g.bindFramebuffer(E.READ_FRAMEBUFFER,Gt.__webglFramebuffer),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let si=0;si<Ge;si++)mn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,X.get(y).__webglTexture,W,mt+si),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,X.get(L).__webglTexture,we,_t+si)),E.blitFramebuffer(Ye,ct,Ue,ye,ze,Ct,Ue,ye,E.DEPTH_BUFFER_BIT,E.NEAREST);g.bindFramebuffer(E.READ_FRAMEBUFFER,null),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||X.has(y)){let oa=X.get(y),Fr=X.get(L);g.bindFramebuffer(E.READ_FRAMEBUFFER,R),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,k);for(let Gt=0;Gt<Ge;Gt++)mn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,oa.__webglTexture,W,mt+Gt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,oa.__webglTexture,W),Tt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Fr.__webglTexture,we,_t+Gt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Fr.__webglTexture,we),W!==0?E.blitFramebuffer(Ye,ct,Ue,ye,ze,Ct,Ue,ye,E.COLOR_BUFFER_BIT,E.NEAREST):Tt?E.copyTexSubImage3D(He,we,ze,Ct,_t+Gt,Ye,ct,Ue,ye):E.copyTexSubImage2D(He,we,ze,Ct,Ye,ct,Ue,ye);g.bindFramebuffer(E.READ_FRAMEBUFFER,null),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Tt?y.isDataTexture||y.isData3DTexture?E.texSubImage3D(He,we,ze,Ct,_t,Ue,ye,Ge,$e,Kt,Mt.data):L.isCompressedArrayTexture?E.compressedTexSubImage3D(He,we,ze,Ct,_t,Ue,ye,Ge,$e,Mt.data):E.texSubImage3D(He,we,ze,Ct,_t,Ue,ye,Ge,$e,Kt,Mt):y.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,we,ze,Ct,Ue,ye,$e,Kt,Mt.data):y.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,we,ze,Ct,Mt.width,Mt.height,$e,Mt.data):E.texSubImage2D(E.TEXTURE_2D,we,ze,Ct,Ue,ye,$e,Kt,Mt);g.pixelStorei(E.UNPACK_ROW_LENGTH,ha),g.pixelStorei(E.UNPACK_IMAGE_HEIGHT,yt),g.pixelStorei(E.UNPACK_SKIP_PIXELS,ma),g.pixelStorei(E.UNPACK_SKIP_ROWS,so),g.pixelStorei(E.UNPACK_SKIP_IMAGES,No),we===0&&L.generateMipmaps&&E.generateMipmap(He),g.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&ee.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ee.setTextureCube(y,0):y.isData3DTexture?ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ee.setTexture2DArray(y,0):ee.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){$=0,q=0,oe=null,g.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),a.unpackColorSpace=vt._getUnpackColorSpace()}};var e_={portrait:[1.32,2.25],landscape:[2.25,1.32]},$L={left:.27,center:.5,right:.73},Gf=.018,ro=.007,pa=4,t_=1/.05,e3=1/960,t3=2,hr=72,a_=24,_g=.36,Rg=.095,a3=.0135,kh=.036,Hf=.15,o_=1024,n_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Nh=[0,.07,.93,1],o3=[-.95,-.28,.28,.95],n3=9,r3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,s3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,i3=`
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
`,l3=`
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
`,r_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},oi=(t,e,a)=>Math.min(a,Math.max(e,t)),Oh=(t,e,a)=>t+(e-t)*a,bg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},c3=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],zh=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,f_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Eg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},Tg=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>n(r),r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},s_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:e_[t]||e_.portrait,r=Oh(.03,Math.min(o,n)*.2,oi(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Rg}},f3=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new ls;Eg(r,-e/2+ro,-a/2+ro,e-ro*2,a-ro*2,Math.max(o-ro,.005));let s=new Js;Eg(s,-n.width/2-ro,n.y-n.height/2-ro,n.width+ro*2,n.height+ro*2,n.height/2+ro),r.holes.push(s);let i=new Ll(r,{depth:Gf,bevelEnabled:!0,bevelThickness:ro,bevelSize:ro,bevelSegments:5,curveSegments:24});i.translate(0,0,-Gf/2);let l=new Cf(r,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let h=0;h<c.count;h++)u.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return u.needsUpdate=!0,{body:i,face:l}},i_=t=>{let e=new ls,a=t*1.16;Eg(e,-a/2+.014,-Hf/2+.014,a-.028,Hf-.028,.024);let o=new Ll(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},u3=t=>{let e=Nh.length,a=new oo;a.setAttribute("position",new qa(new Float32Array(t*e*3),3)),a.setAttribute("normal",new qa(new Float32Array(t*e*3),3)),a.setAttribute("uv",new qa(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},d3=t=>{let e=new _l;e.background=new ft(.035,.035,.04);let a=new js(1,1),o=[],n=(i,l,c,u=0)=>{let h=new Zs({color:new ft(i,i,i),side:Bo});o.push(h);let f=new ra(a,h);f.position.set(...l),f.scale.set(c[0],c[1],1),f.lookAt(0,0,0),f.rotateZ(u),e.add(f)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new Xl(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},Ag=(t,e)=>{let a=new Ks(t);return a.colorSpace=ka,a.anisotropy=e,a},p3=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new Ks(e);let o=f_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let u=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)u+=n[(c+h+128)%128*128+(l+f+128)%128];return u/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),f=Math.hypot(u,h,1),d=(l*128+c)*4;s.data[d]=(u/f*.5+.5)*255,s.data[d+1]=(h/f*.5+.5)*255,s.data[d+2]=(1/f*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new Ks(e);return i.wrapS=Pn,i.wrapT=Pn,i.repeat.set(5,7),i},h3=()=>{let a=f_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let u=(l%128+128)%128,h=(c%128+128)%128,f=u/128*8,d=h/128*8,I=Math.floor(f),M=Math.floor(d),m=f-I-.5,p=d-M-.5,x=(I+M)%2===0,v=n(m)*(.55+.45*Math.cos(p*Math.PI*(x?1:.6))),F=n(p)*(.55+.45*Math.cos(m*Math.PI*(x?.6:1)));return(x?Math.max(v,F*.7):Math.max(F,v*.7))+o[h*128+u]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,f=Math.hypot(u,h,1),d=(l*128+c)*4;s[d]=(u/f*.5+.5)*255,s[d+1]=(h/f*.5+.5)*255,s[d+2]=(1/f*.5+.5)*255,s[d+3]=255}let i=new Tl(s,128,128);return i.wrapS=Pn,i.wrapT=Pn,i.magFilter=Fa,i.minFilter=Nn,i.generateMipmaps=!0,i.needsUpdate=!0,i},Vf=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},m3=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Rg),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},l_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=Vf(e,.98,.02),s=Vf(e,.05,.02),i=Vf(e,.5,.02);if(!r||!s)return;let l=F=>{let C=F.match(/[\d.]+/g);return C?[Number(C[0]),Number(C[1]),Number(C[2])]:[255,255,255]},c=l(s),u=l(r),h=i?l(i):c;if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),I=Math.hypot(u[0]-h[0],u[1]-h[1],u[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&I>40){let F=t.createLinearGradient(0,0,a,0);F.addColorStop(0,s),F.addColorStop(1,r),t.fillStyle=F,t.fillRect(0,0,a,o+2);return}let m=1254/1495,p=.42;try{let F=document.createElement("canvas");F.width=100,F.height=20;let C=F.getContext("2d",{willReadFrequently:!0});if(C){C.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let _=C.getImageData(0,0,100,1).data,w=C.getImageData(0,19,100,1).data,S=_[98*4],T=_[98*4+1],A=_[98*4+2],D=-1,H=-1;for(let O=98;O>=0;O--){let R=O*4;if(Math.hypot(_[R]-S,_[R+1]-T,_[R+2]-A)>40){D=O+1;break}}for(let O=98;O>=0;O--){let R=O*4;if(Math.hypot(w[R]-S,w[R+1]-T,w[R+2]-A)>40){H=O+1;break}}if(D>50&&D<98&&(m=D/100,H>0)){let O=Math.min(e.height*.1,200)*.95,R=(H-D)/100*e.width;O>0&&(p=Math.max(0,Math.min(1.5,R/O)))}}}catch{}let x=a*m,v=x-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(v,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(x,o+2),t.closePath(),t.fill(),t.restore()}catch{}},I3=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let u=o-l;l_(t,e,a,u,i),t.drawImage(e,0,u,a,l)}else{let c=Math.min(a/e.width,s/e.height),u=e.width*c,h=e.height*c,f=(a-u)/2,d=o-h;l_(t,e,a,d,c),t.drawImage(e,f,d,u,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},c_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?m3(n,t.height,s):0,c=e?Vf(e,.05,.02):null;if(i.fillStyle=c||zh(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let u=Vf(e,.05,.98);u&&u!==c&&(i.fillStyle=u,i.fillRect(0,t.height-30,t.width,30))}I3(i,e,t.width,t.height,o,l)}},x3=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=zh(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=c3(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=zh(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=zh(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},g3=()=>{let t=()=>Array.from({length:pa+1},()=>new U);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(pa),impulses:new Float64Array(pa),rest:1,anchor:new U,body:{position:new U,previous:new U,velocity:new U,quaternion:new eo,previousQuaternion:new eo,angular:new U,mass:1,inverseInertia:new U(1,1,1),hang:new U},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},kt={a:new U,b:new U,c:new U,d:new U,e:new U,f:new U,g:new U,pin:new U,q:new eo,r:new eo},Dg=(t,e,a)=>(kt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(kt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),u_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},d_=(t,e,a)=>{let o=kt.c.crossVectors(e,a);return 1/t.mass+o.dot(Dg(t,o,kt.d))},p_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),u_(t.quaternion,Dg(t,kt.e.crossVectors(e,a),kt.f))},F3=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:t_,l=e===pa-1,c=kt.g,u=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),u=kt.b.copy(r.position).add(c));let h=kt.a.subVectors(u,s),f=h.length(),d=f-t.rest;if(d<=0||f<1e-9)return;let I=h.divideScalar(f),M=l?d_(r,c,I):t_,m=(f-t.lengths[e])/a,x=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,m))*a*a-t.impulses[e];if(x<=0)return;let v=Math.min(d/(i+M),x);t.impulses[e]+=v,i&&s.addScaledVector(I,v*i),l?p_(r,c,I.multiplyScalar(-v)):u.addScaledVector(I,-v*M)},S3=(t,e,a)=>{let o=kt.g.copy(e.local).applyQuaternion(t.quaternion),n=kt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/d_(t,o,s);p_(t,o,s.multiplyScalar(i))},wg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=pa;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=kt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[pa]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=pa;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},v3=(t,e,a)=>{t.rest=a/pa;let{width:o,height:n}=e,r=t.body,s=Gf+ro*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},y3=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/e3-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,u=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,f=t.grab,d=kt.pin,I=Math.exp(-a.nodeDrag*r),M=Math.exp(-a.linearDrag*r),m=Math.exp(-a.angularDrag*r);for(let x=0;x<n;x++){for(let A=1;A<pa;A++){let D=l[A];D.y-=a.gravity*r,D.x+=u*r,D.z+=h*r,i[A].copy(s[A]),s[A].addScaledVector(D,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let v=c.quaternion;if(f){let A=kt.q.copy(f.rotation).multiply(kt.r.copy(v).invert());A.w<0&&A.set(-A.x,-A.y,-A.z,-A.w);let D=kt.a.set(A.x,A.y,A.z).multiplyScalar(2*a.grip);D.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector(Dg(c,D,kt.b),r)}let F=kt.a.set(0,1,0).applyQuaternion(v),C=kt.b.set(-F.x*F.z,-F.y*F.z,1-F.z*F.z);if(C.lengthSq()>.001){let A=kt.d.set(0,0,1).applyQuaternion(v),D=Math.atan2(kt.e.crossVectors(C,A).dot(F),C.dot(A)),H=D-t.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),t.twist+=H,t.twistRaw=D}if(!f){let A=c.angular.dot(F);c.angular.addScaledVector(F,(a.twist*(t.turn-t.twist)-a.twistDamping*A)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=u*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),u_(c.quaternion,kt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),f&&d.lerpVectors(f.from,f.target,(x+1)/n);for(let A=0;A<t3;A++){for(let D=0;D<pa;D++)F3(t,D,r,a);f&&S3(c,f,d)}for(let A=1;A<pa;A++){let D=l[A].subVectors(s[A],i[A]).divideScalar(r).multiplyScalar(I);D.multiplyScalar(1/(1+a.nodeAir*D.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let _=kt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(_.x,_.y,_.z).multiplyScalar(2/r*(_.w<0?-1:1));let w=kt.a.set(0,0,1).applyQuaternion(c.quaternion),S=c.velocity.dot(w),T=kt.b.copy(c.velocity).addScaledVector(w,-S);T.multiplyScalar(1/(1+a.air*T.length()*r)),c.velocity.copy(T).addScaledVector(w,S/(1+a.broadside*Math.abs(S)*r)).multiplyScalar(M),c.angular.multiplyScalar(m/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[pa].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let A=0;A<pa;A++)t.lengths[A]=s[A].distanceTo(s[A+1])}f&&f.from.copy(f.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let x=1;x<pa;x++)p+=l[x].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},M3=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:u="center",strapLength:h=.5,strapImage:f,strapColor:d="#111111",strapWidth:I=.65,metal:M="silver",gravity:m=1,damping:p=.5,elasticity:x=.5,breeze:v=.5,interactive:F=!0,intro:C=!0,className:_="",style:w})=>{let S=(0,ni.useRef)(null),T=(0,ni.useRef)(null),A=(0,ni.useRef)(null);return T.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:u,strapLength:h,strapImage:f,strapColor:d,strapWidth:I,metal:M,gravity:m,damping:p,elasticity:x,breeze:v,interactive:F,intro:C},(0,ni.useEffect)(()=>{A.current?.()}),(0,ni.useEffect)(()=>{let D=S.current;if(!D)return;let H;try{H=new Ph({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}H.setClearColor(0,0),H.outputColorSpace=ka,H.toneMapping=wf,H.toneMappingExposure=1;let O=H.domElement;O.className="lanyard-canvas",O.setAttribute("aria-hidden","true"),D.appendChild(O);let R=Math.min(8,H.capabilities.getMaxAnisotropy()),k=new _l,$=d3(H);k.environment=$.texture;let q=new Ga(a_,1,.1,200),oe=new kl(16777215,1.6);oe.position.set(-2.5,4,6);let N=new kl(16777215,.35);N.position.set(3,-1,4),k.add(oe,N);let K=new Map,te={front:null,back:null,strap:null},Ae=document.createElement("canvas"),Se=document.createElement("canvas"),We=document.createElement("canvas"),z=Ag(Ae,R),je=Ag(Se,R),Z=Ag(We,R);Z.wrapS=Jo,Z.wrapT=Pn;let J=p3(),ve=h3(),ke={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new U},foilFill:{value:new U},foilTop:{value:new U}},he=ue=>{Object.assign(ue.uniforms,ke),ue.vertexShader=ue.vertexShader.replace("#include <common>",`#include <common>
${r3}`).replace("#include <project_vertex>",`#include <project_vertex>
${s3}`),ue.fragmentShader=ue.fragmentShader.replace("#include <common>",`#include <common>
${i3}`).replace("#include <opaque_fragment>",`${l3}
#include <opaque_fragment>`)},Ve=new cs({map:z,normalMap:J,normalScale:new Ee(.06,.06)}),Qe=new cs({map:je,normalMap:J,normalScale:new Ee(.06,.06)});Ve.onBeforeCompile=he,Qe.onBeforeCompile=he;let j=new cs,re=new Bl({metalness:1}),ne=new cs({map:Z,normalMap:ve,normalScale:new Ee(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new ft(.32,.32,.34),side:Bo}),se=new Dn,fe=new ra(void 0,j),Ne=new ra(void 0,Ve),De=new ra(void 0,Qe),Me=new ra(new Pl(Rg,a3,18,72),re);Me.rotation.y=Math.PI/2-.7,se.add(fe,Ne,De,Me),k.add(se);let Oe=u3(hr),E=new ra(Oe,ne);E.frustumCulled=!1,k.add(E);let at=new Dn,Xe=new ra(i_(_g),re);Xe.position.y=kh+Hf/2-.004;let b=new ra(new Pl(kh,.0105,14,40),re);at.add(Xe,b),k.add(at);let g=g3(),B=[],X=new U,ee=new U,me=new Rl(B,!1,"centripetal"),de={width:1,height:1},Y=s_("portrait",.3),ae={},ge=_g,qe=2,Ce=0,_e=performance.now(),ce=0,Fe=!0,Ie=!0,P=!1,pe=!1,Q=null,xe=0,be=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,le=()=>{let ue=T.current,y=bg(ue.cardColor,[1,1,1]),L=o_,V=Math.round(o_*Y.height/Y.width);(Ae.width!==L||Ae.height!==V)&&(Ae.width=L,Ae.height=V,Se.width=L,Se.height=V,z.dispose(),je.dispose()),c_(Ae,te.front,y,ue.imageFit,Y,ue.slotClearance,ue.slotClearanceValue),c_(Se,te.back||te.front,y,ue.imageFit,Y,ue.slotClearance,ue.slotClearanceValue),z.needsUpdate=!0,je.needsUpdate=!0,Ze()},Re=()=>{let ue=T.current;qe=x3(We,te.strap,bg(ue.strapColor,[.07,.07,.07])),ve.repeat.set(2,2*qe),Z.dispose(),Z.needsUpdate=!0,Ze()},Le=()=>{let ue=T.current,y=de.width/de.height,L=oi(ue.size??1,.2,3),V=Y.height/.72/L,G=Y.width/.65/L;V*y<G&&(V=G/y);let W=V*y,we=.04*V,Ue=(($L[ue.anchor]??.5)-.5)*W,ye=we+V/2+.15,Ge=we+Y.height/2+(Y.hangY-Y.height/2);q.aspect=y,q.position.set(0,we,V/2/Math.tan(a_*Math.PI/360)),q.lookAt(0,we,0),q.updateProjectionMatrix(),q.updateMatrixWorld(),ke.foilKey.value.set(-2.5,4,6).normalize().transformDirection(q.matrixWorldInverse),ke.foilFill.value.set(3,-1,4).normalize().transformDirection(q.matrixWorldInverse),ke.foilTop.value.set(.5,4.5,8).normalize().transformDirection(q.matrixWorldInverse),g.anchor.set(Ue,ye,0),v3(g,Y,Math.max(.4,ye-Ge)),g.nodes[0].copy(g.anchor),g.previous[0].copy(g.anchor)},dt=()=>{let ue=T.current,y=`${ue.orientation}|${ue.cornerRadius}|${JSON.stringify(ue.cardSize)}`;if(y!==ae.layoutKey){Y=s_(ue.orientation,ue.cornerRadius,ue.cardSize);let ye=f3(Y);fe.geometry.dispose(),Ne.geometry.dispose(),De.geometry.dispose(),fe.geometry=ye.body,Ne.geometry=ye.face,De.geometry=ye.face.clone(),Ne.position.z=Gf/2+ro+6e-4,De.rotation.y=Math.PI,De.position.z=-(Gf/2+ro+6e-4),Me.position.set(0,Y.ringY,0),ae.framingKey=""}let L=`${y}|${ue.size}|${ue.anchor}|${ue.strapLength}|${de.width}|${de.height}`;L!==ae.framingKey&&(Le(),P?y!==ae.layoutKey&&wg(g,Y,!1):(wg(g,Y,ue.intro&&!be),P=!0));let V=`${ue.frontImage}|${ue.backImage}|${ue.strapImage}`;if(V!==ae.imageKey){let ye=++xe;Promise.all([Tg(K,ue.frontImage),Tg(K,ue.backImage),Tg(K,ue.strapImage)]).then(([Ge,Ye,ct])=>{!Ie||ye!==xe||(te.front=Ge,te.back=Ye,te.strap=ct,le(),Re())})}let G=`${y}|${ue.cardColor}|${ue.imageFit}|${ue.slotClearance}|${ue.slotClearanceValue}`;G!==ae.faceKey&&le(),ue.strapColor!==ae.strapColor&&Re();let W=n_[ue.finish]||n_.glossy,we=bg(ue.cardColor,[1,1,1]);[Ve,Qe].forEach(ye=>{ye.roughness=W.roughness,ye.metalness=W.metalness,ye.clearcoat=W.clearcoat,ye.clearcoatRoughness=W.clearcoatRoughness,ye.anisotropy=W.anisotropy}),ke.foilStrength.value=W.foil,ke.foilAspect.value=Y.height/Y.width,j.color.setRGB(we[0]*.92,we[1]*.92,we[2]*.92,ka),j.roughness=Math.min(W.roughness,.35),j.metalness=W.metalness,j.clearcoat=1,j.clearcoatRoughness=.08;let Ue=r_[ue.metal]||r_.silver;re.color.set(Ue.color),re.roughness=Ue.roughness,ge=_g*oi(ue.strapWidth,.4,2),ge!==ae.strapScale&&(Xe.geometry.dispose(),Xe.geometry=i_(ge)),O.style.touchAction=ue.interactive?"pan-y":"auto",ae={layoutKey:y,framingKey:L,imageKey:V,faceKey:G,strapColor:ue.strapColor,strapScale:ge},Ze()},rt=Array.from({length:hr},()=>new U),sa=Array.from({length:hr},()=>new U),Ya=o3.map(ue=>[Math.cos(ue),Math.sin(ue)]),ko={tangent:new U,toCamera:new U,basis:new Vt,up:new U,across:new U,facing:new U,end:new U},ri=()=>{let ue=g.nodes[pa],y=kh+Hf+.05,L=pa-1;for(;L>0&&g.nodes[L].distanceTo(ue)<y*1.1;)L--;let V=ko.up.subVectors(g.nodes[L],ue);V.lengthSq()<1e-8&&V.set(0,1,0).applyQuaternion(g.body.quaternion),V.normalize(),X.copy(ue).addScaledVector(V,y),ee.copy(ue).addScaledVector(V,kh+Hf*.35),B.length=0;for(let $e=0;$e<=L;$e++)B.push(g.nodes[$e]);B.push(X,ee),me.updateArcLengths();for(let $e=0;$e<hr;$e++)me.getPointAt($e/(hr-1),rt[$e]);let G=me.getLength(),W=1-X.distanceTo(ee)/Math.max(G,.001),we=Oe.getAttribute("position"),Ue=Oe.getAttribute("normal"),ye=Oe.getAttribute("uv"),Ge=Nh.length,Ye=g.rest*pa,ct=Ye/(ge*qe),mt=ge/Math.pow(Math.max(1,G/Math.max(Ye,.001)),.35),{tangent:ze,toCamera:Ct,across:_t,facing:Mt}=ko;for(let $e=0;$e<hr;$e++){ze.subVectors(rt[Math.min(hr-1,$e+1)],rt[Math.max(0,$e-1)]),ze.lengthSq()<1e-12&&ze.set(0,-1,0),ze.normalize(),Ct.subVectors(q.position,rt[$e]).normalize();let Kt=sa[$e].crossVectors(Ct,ze);Kt.lengthSq()<1e-10&&Kt.copy($e>0?sa[$e-1]:kt.a.set(1,0,0)),Kt.normalize(),$e>0&&Kt.dot(sa[$e-1])<0&&Kt.negate();let He=-g.twist*Math.pow(Math.min(1,$e/(hr-1)/W),1.3);Mt.crossVectors(ze,Kt),_t.copy(Kt).multiplyScalar(Math.cos(He)).addScaledVector(Mt,Math.sin(He)),Mt.crossVectors(ze,_t);let ha=rt[$e],yt=(1-$e/(hr-1))*ct;for(let ma=0;ma<Ge;ma++){let so=$e*Ge+ma,No=(Nh[ma]-.5)*mt,[mn,Tt]=Ya[ma];we.setXYZ(so,ha.x+_t.x*No,ha.y+_t.y*No,ha.z+_t.z*No),Ue.setXYZ(so,Mt.x*mn+_t.x*Tt,Mt.y*mn+_t.y*Tt,Mt.z*mn+_t.z*Tt),ye.setXY(so,Nh[ma],yt)}}ko.end.copy(_t),we.needsUpdate=!0,Ue.needsUpdate=!0,ye.needsUpdate=!0,_t.copy(ko.end).addScaledVector(V,-ko.end.dot(V)).normalize(),Mt.crossVectors(_t,V).normalize(),ko.basis.makeBasis(_t,V,Mt),at.quaternion.setFromRotationMatrix(ko.basis),at.position.copy(ue)},xr=()=>{se.position.copy(g.body.position),se.quaternion.copy(g.body.quaternion),ri(),H.render(k,q)},gr=()=>{let ue=T.current,y=40*oi(ue.gravity,0,3),L=Math.max(y,20),V=oi(ue.elasticity,0,1),G=oi(ue.damping,0,1);return{gravity:y,hold:L*Oh(2.2,5.5,V),stiffness:L*10*pa,spring:L*Oh(.1,.4,V)*pa,bandDamping:L*Oh(.3,.08,V)*pa,linearDrag:.25*Math.pow(16,G),angularDrag:.5*Math.pow(12,G),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:be?0:oi(ue.breeze,0,1)}},Pe=ue=>{if(Ce=0,!Ie)return;let y=Math.min(1/30,Math.max(1/240,(ue-_e)/1e3));_e=ue,ce+=y;let L=gr();y3(g,y,L,ce);let V=g.body;Number.isFinite(V.position.x+V.position.y+V.position.z+V.quaternion.w)||(g.grab=null,wg(g,Y,!1)),xr();let G=g.calm>1.2&&!g.grab&&L.breeze===0;Fe&&!G&&(Ce=requestAnimationFrame(Pe))},Ze=()=>{Ce||!Fe||!Ie||(g.calm=0,_e=performance.now(),Ce=requestAnimationFrame(Pe))},Je=new Tf,pt=new Ee,bt=ue=>{let y=O.getBoundingClientRect();pt.set((ue.clientX-y.left)/y.width*2-1,-((ue.clientY-y.top)/y.height)*2+1),Je.setFromCamera(pt,q)},ia=()=>(se.updateMatrixWorld(),Je.intersectObjects([fe,Ne,De],!1)[0]||null),ya=ue=>{O.style.cursor!==ue&&(O.style.cursor=ue)},wt=ue=>{let y=g.body,L=kt.a.set(0,1,0).applyQuaternion(y.quaternion),V=g.turn>0?-1:1;if(g.turn===0){let G=kt.c.subVectors(ue,q.position).normalize();V=kt.b.subVectors(ue,y.position).cross(G).dot(L)<0?-1:1}g.turn=g.turn===0?Math.PI*V:0,y.angular.addScaledVector(L,n3*V)},ot=ue=>{if(!T.current.interactive||ue.button>0)return;bt(ue);let y=ia();y&&(g.grab={local:y.point.clone().sub(g.body.position).applyQuaternion(g.body.quaternion.clone().invert()),rotation:g.body.quaternion.clone(),reach:y.distance,from:y.point.clone(),target:y.point.clone()},Q={x:ue.clientX,y:ue.clientY,time:performance.now(),point:y.point.clone()},O.setPointerCapture?.(ue.pointerId),ya("grabbing"),ue.preventDefault(),Ze())},Za=ue=>{if(T.current.interactive){if(bt(ue),g.grab){Q&&Math.hypot(ue.clientX-Q.x,ue.clientY-Q.y)>6&&(Q=null),Je.ray.at(g.grab.reach,g.grab.target),Ze();return}ue.pointerType!=="touch"&&(pe=!!ia(),ya(pe?"grab":""))}},wa=ue=>{g.grab&&(g.grab=null,Q&&ue.type==="pointerup"&&performance.now()-Q.time<450&&wt(Q.point),Q=null,O.releasePointerCapture?.(ue.pointerId),ya(pe&&ue.pointerType!=="touch"?"grab":""),Ze())},go=ue=>{!T.current.interactive||ue.touches.length!==1||(bt(ue.touches[0]),ia()&&ue.preventDefault())};O.addEventListener("pointerdown",ot),O.addEventListener("pointermove",Za),O.addEventListener("pointerup",wa),O.addEventListener("pointercancel",wa),O.addEventListener("lostpointercapture",wa),O.addEventListener("touchstart",go,{passive:!1});let Yf=()=>{de.width=Math.max(1,D.clientWidth),de.height=Math.max(1,D.clientHeight),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setSize(de.width,de.height,!1),dt(),xr()},Zf=new ResizeObserver(Yf);Zf.observe(D);let Kf=new IntersectionObserver(([ue])=>{Fe=ue.isIntersecting,Fe&&Ze()});Kf.observe(D);let Jf=()=>{document.hidden||Ze()};return document.addEventListener("visibilitychange",Jf),A.current=dt,Yf(),()=>{Ie=!1,cancelAnimationFrame(Ce),A.current=null,Zf.disconnect(),Kf.disconnect(),document.removeEventListener("visibilitychange",Jf),O.removeEventListener("pointerdown",ot),O.removeEventListener("pointermove",Za),O.removeEventListener("pointerup",wa),O.removeEventListener("pointercancel",wa),O.removeEventListener("lostpointercapture",wa),O.removeEventListener("touchstart",go),[fe,Ne,De,Me,Xe,b,E].forEach(ue=>ue.geometry?.dispose()),[Ve,Qe,j,re,ne].forEach(ue=>ue.dispose()),[z,je,Z,J,ve].forEach(ue=>ue.dispose()),$.dispose(),H.dispose(),O.parentNode&&O.parentNode.removeChild(O)}},[]),Te.createElement("div",{ref:S,className:`lanyard ${_}`.trim(),style:w})},Lg=M3;st();var Uo=Gn(jo());var Hh=4,h_=2.4,C3=2.2,Vh=1.25,_3="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",b3="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",T3={solid:0,dashed:1,dotted:2},A3=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,w3=`#version 300 es
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
}`,E3=`#version 300 es
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
}`,R3=`#version 300 es
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
}`,D3=`#version 300 es
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
}`,Xa=(t,e,a)=>Math.min(a,Math.max(e,t)),m_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},Gh=(t,e)=>{let a=m_(t,t.VERTEX_SHADER,A3),o=m_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},qh=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},Wh=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},Xh=null,L3=()=>window.faceapi?Promise.resolve(window.faceapi):(Xh||(Xh=new Promise((t,e)=>{let a=document.createElement("script");a.src=_3,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{Xh=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),Xh),P3={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},B3=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:u=.7,scanDirection:h="forward",scanDuration:f=2.4,scanDelay:d=1.6,scanWidth:I=1,trail:M=.5,glow:m=.6,autoScan:p=!0,interactive:x=!0,clickEffect:v="ping",enableWebcam:F=!1,showPreview:C=!1,modelsPath:_=b3,enableGyro:w=!1,intro:S=!0,lightMode:T=!1,dpr:A,className:D="",style:H,...O})=>{let R=(0,Uo.useRef)(null),k=(0,Uo.useRef)(null),$=(0,Uo.useRef)(null),q=(0,Uo.useRef)(null),oe=(0,Uo.useRef)(null),[N,K]=(0,Uo.useState)("loading"),te={linesColor:t??(T?"#d4d4d8":"#4d4757"),scanColor:e??(T?"#0284c7":"#7dd3fc"),cells:Xa(a,2,40),thickness:Xa(o,.5,4),style:T3[n]??0,depth:Xa(r,.5,12),depthFade:Xa(s,0,1),parallax:Xa(i,0,3),points:l,reflection:Xa(c,0,1),shading:Xa(u,0,1),direction:h,duration:Xa(f,.3,20),delay:Xa(d,0,30),scanWidth:Xa(I,.2,5),trail:Xa(M,0,1),glow:Xa(m,0,1.5),autoScan:p,interactive:x,clickEffect:v,enableGyro:w,intro:S,lightMode:T,dpr:A},Ae=(0,Uo.useRef)(te);return Ae.current=te,(0,Uo.useEffect)(()=>{let Se=R.current,We=k.current,z=We?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!Se||!We||!z)return;let je=Gh(z,w3),Z=Gh(z,E3),J=Gh(z,R3),ve=Gh(z,D3);if(!je||!Z||!J||!ve)return;let ke=z.createVertexArray(),he=qh(z),Ve=qh(z),Qe=qh(z),j=qh(z),re=z.createFramebuffer(),ne=z.createFramebuffer(),se=z.createFramebuffer(),fe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ne=new Map,De=Pe=>{let Ze=String(Pe),Je=Ne.get(Ze);if(Je)return Je;let pt=[1,1,1];if(fe){fe.clearRect(0,0,1,1),fe.fillStyle="#000000",fe.fillStyle=Ze,fe.fillRect(0,0,1,1);let[bt,ia,ya]=fe.getImageData(0,0,1,1).data;pt=[bt/255,ia/255,ya/255]}return Ne.set(Ze,pt),pt},Me=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Oe={width:1,height:1,ratio:1},E={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:Vh,vf:0,tf:Vh},at={x:0,y:0,inside:!1},Xe={x:0,y:0,held:!1},b={gamma:0,beta:0,ready:!1,asked:!1},g={x:0,y:0,z:0,strength:0,ready:!1},B={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},X=[],ee=new Float32Array(Hh*4),me=new Float32Array(Hh),de=0,Y=Ae.current.intro&&!Me?0:1,ae=0,ge=0,qe=!0,Ce=0,_e=()=>{let Pe=Ae.current,Ze=Oe.width/Oe.height,Je=1/Math.round(Pe.cells),pt=Ze/Math.max(1,Math.round(Ze/Je)),bt=Math.max(Je,Math.round(Pe.depth/Je)*Je);return{aspect:Ze,cx:pt,cy:Je,roomDepth:bt}},ce=(Pe,Ze)=>{let{aspect:Je,roomDepth:pt}=_e(),bt=(Pe-.5)*Je,ia=Ze-.5,ya=bt-E.x,wt=ia-E.y,ot=E.f,Za=ya>0?.5*Je:-.5*Je,wa=wt>0?.5:-.5,go=pt/ot;return Math.abs(ya)>1e-6&&(go=Math.min(go,(Za-bt)/ya)),Math.abs(wt)>1e-6&&(go=Math.min(go,(wa-ia)/wt)),{x:bt+ya*go,y:ia+wt*go,z:ot*go}},Fe=Pe=>{B.dir=Pe.direction==="backward"||Pe.direction==="pingpong"&&B.sweeps%2===1?-1:1,B.start=de,B.waiting=!1,B.sweeps+=1},Ie=(Pe,Ze)=>{if(Y<1){let bt=Y;B.dir=1,B.z=bt*(Ze+.4)-.2,B.alpha=Math.min(1,bt*6)*(1-Math.max(0,bt-.85)/.15);return}if(B.sweeps===0&&!B.waiting&&(B.waiting=!0,B.start=de,B.alpha=0),B.waiting){B.alpha=0,Pe.autoScan&&!Me&&de-B.start>=Pe.delay&&Fe(Pe);return}let Je=(de-B.start)/Pe.duration;if(Je>=1){B.waiting=!0,B.start=de,B.alpha=0;return}let pt=Je*(Ze+.3)-.15;B.z=B.dir>0?pt:Ze-pt,B.alpha=Math.min(1,Je/.12)*Math.min(1,(1-Je)/.12)},P=Pe=>{let Ze=Math.max(1,Math.ceil(Pe/.008333333333333333)),Je=Pe/Ze;for(let pt=0;pt<Ze;pt++)E.vx+=((E.tx-E.x)*42-E.vx*11)*Je,E.vy+=((E.ty-E.y)*42-E.vy*11)*Je,E.vf+=((E.tf-E.f)*42-E.vf*11)*Je,E.x+=E.vx*Je,E.y+=E.vy*Je,E.f+=E.vf*Je},pe=(Pe,Ze,Je)=>{Xe.x=Xa(Pe,-1,1),Xe.y=Xa(Ze,-1,1),Xe.held=Je},Q=Pe=>{let Ze=Oe.width/Oe.height,Je=Me?0:1,pt=Xe.held?Xe.x:(Math.sin(de*.21)*.2+Math.sin(de*.083+1.3)*.12)*Je,bt=Xe.held?Xe.y:Math.sin(de*.17+2.1)*.16*Je;E.tx=pt*Pe.parallax*.22*Ze,E.ty=bt*Pe.parallax*.22},xe=()=>{let Pe=Ae.current;Oe.width=Math.max(1,Se.clientWidth),Oe.height=Math.max(1,Se.clientHeight),Oe.ratio=Math.min(Pe.dpr||window.devicePixelRatio||1,2),We.width=Math.max(1,Math.round(Oe.width*Oe.ratio)),We.height=Math.max(1,Math.round(Oe.height*Oe.ratio)),Wh(z,he,We.width,We.height),Wh(z,Ve,We.width,We.height),z.bindFramebuffer(z.FRAMEBUFFER,re),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.texture,0),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT1,z.TEXTURE_2D,Ve.texture,0);let Ze=Math.max(1,Math.round(We.width/4)),Je=Math.max(1,Math.round(We.height/4));Wh(z,Qe,Ze,Je),Wh(z,j,Ze,Je),z.bindFramebuffer(z.FRAMEBUFFER,ne),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qe.texture,0),z.bindFramebuffer(z.FRAMEBUFFER,se),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,j.texture,0),z.bindFramebuffer(z.FRAMEBUFFER,null),be(),Re()},be=()=>{let Pe=Ae.current,{aspect:Ze,cx:Je,cy:pt,roomDepth:bt}=_e(),ia=De(Pe.linesColor),ya=De(Pe.scanColor),wt=Pe.lightMode?ya:ya.map(wa=>wa+(1-wa)*.65),ot=je.uniforms;z.bindVertexArray(ke),z.disable(z.BLEND),z.bindFramebuffer(z.FRAMEBUFFER,re),z.drawBuffers([z.COLOR_ATTACHMENT0,z.COLOR_ATTACHMENT1]),z.viewport(0,0,We.width,We.height),z.useProgram(je.program),z.uniform1f(ot.uAspect,Ze),z.uniform1f(ot.uPixel,1/We.height),z.uniform3f(ot.uEye,E.x,E.y,-E.f),z.uniform1f(ot.uDepth,bt),z.uniform3f(ot.uCell,Je,pt,pt),z.uniform1f(ot.uThick,Pe.thickness*Oe.ratio*.5),z.uniform1f(ot.uDot,1.8*Oe.ratio),z.uniform1i(ot.uStyle,Pe.style),z.uniform3fv(ot.uLineColor,ia),z.uniform3fv(ot.uScanColor,ya),z.uniform3fv(ot.uCoreColor,wt),z.uniform1f(ot.uFade,Pe.depthFade),z.uniform1f(ot.uScanZ,B.z),z.uniform1f(ot.uScanDir,B.dir),z.uniform1f(ot.uScanAlpha,B.alpha),z.uniform1f(ot.uScanWidth,.006*Pe.scanWidth),z.uniform1f(ot.uTrail,.04+Pe.trail*1.1),z.uniform1f(ot.uReveal,Y<1?B.z+.05:1e4),z.uniform1f(ot.uPoints,Pe.points?1:0),z.uniform1f(ot.uReflect,Pe.reflection),z.uniform1f(ot.uHaze,Pe.lightMode?.03:.05),z.uniform1f(ot.uShade,Pe.shading),z.uniform1f(ot.uLight,Pe.lightMode?1:0),z.uniform4fv(ot.uPing,ee),z.uniform1fv(ot.uPingAlpha,me),z.uniform4f(ot.uHover,g.x,g.y,g.z,g.strength),z.uniform1f(ot.uTime,de),z.drawArrays(z.TRIANGLES,0,3);let Za=Pe.glow>0;if(Za){z.bindFramebuffer(z.FRAMEBUFFER,ne),z.viewport(0,0,Qe.width,Qe.height),z.useProgram(Z.program),z.activeTexture(z.TEXTURE0),z.bindTexture(z.TEXTURE_2D,Ve.texture),z.uniform1i(Z.uniforms.uSource,0),z.uniform2f(Z.uniforms.uTexel,1/Ve.width,1/Ve.height),z.drawArrays(z.TRIANGLES,0,3);let wa=2.2*Oe.ratio/2;z.useProgram(J.program),z.uniform1i(J.uniforms.uSource,0),z.bindFramebuffer(z.FRAMEBUFFER,se),z.bindTexture(z.TEXTURE_2D,Qe.texture),z.uniform2f(J.uniforms.uStep,wa/Qe.width,0),z.drawArrays(z.TRIANGLES,0,3),z.bindFramebuffer(z.FRAMEBUFFER,ne),z.bindTexture(z.TEXTURE_2D,j.texture),z.uniform2f(J.uniforms.uStep,0,wa/Qe.height),z.drawArrays(z.TRIANGLES,0,3)}z.bindFramebuffer(z.FRAMEBUFFER,null),z.viewport(0,0,We.width,We.height),z.useProgram(ve.program),z.activeTexture(z.TEXTURE0),z.bindTexture(z.TEXTURE_2D,he.texture),z.uniform1i(ve.uniforms.uScene,0),z.activeTexture(z.TEXTURE1),z.bindTexture(z.TEXTURE_2D,Qe.texture),z.uniform1i(ve.uniforms.uBloom,1),z.uniform1f(ve.uniforms.uGlow,Za?Pe.glow*(Pe.lightMode?.8:1.6):0),z.drawArrays(z.TRIANGLES,0,3),z.activeTexture(z.TEXTURE0)},le=Pe=>{if(ae=0,!qe||document.hidden)return;let Ze=Ae.current,Je=ge?Xa((Pe-ge)/1e3,.001,.05):1/60;ge=Pe,de+=Je,Y<1&&(Y=Math.min(1,Y+Je/C3));let{roomDepth:pt}=_e();Ie(Ze,pt),Q(Ze),P(Je);let bt=Ze.interactive&&at.inside&&!Me?1:0;if(bt){let wt=ce(at.x,at.y);g.ready||Object.assign(g,wt,{ready:!0});let ot=1-Math.exp(-Je/.08);g.x+=(wt.x-g.x)*ot,g.y+=(wt.y-g.y)*ot,g.z+=(wt.z-g.z)*ot}g.strength+=(bt-g.strength)*(1-Math.exp(-Je/.25)),!bt&&g.strength<.01&&(g.ready=!1);for(let wt=X.length-1;wt>=0;wt--)X[wt].age+=Je,X[wt].age>h_&&X.splice(wt,1);for(let wt=0;wt<Hh;wt++){let ot=X[wt];if(!ot){me[wt]=0;continue}let Za=ot.age/h_;ee.set([ot.x,ot.y,ot.z,ot.age*1.15],wt*4),me[wt]=Math.min(1,ot.age/.05)*(1-Za)*(1-Za)}be();let ia=Math.abs(E.tx-E.x)+Math.abs(E.ty-E.y)+Math.abs(E.tf-E.f)>1e-4||Math.abs(E.vx)+Math.abs(E.vy)+Math.abs(E.vf)>1e-4;Y<1||!Me&&Ze.autoScan||!B.waiting||X.length>0||ia||g.strength>.002||!Me&&Ze.parallax>0&&!Xe.held||Ze.points&&!Me&&B.alpha>0?ae=requestAnimationFrame(le):ge=0};function Re(){!ae&&qe&&!document.hidden&&(ae=requestAnimationFrame(le))}let Le=Pe=>{let Ze=Se.getBoundingClientRect(),Je=(Pe.clientX-Ze.left)/Math.max(1,Ze.width),pt=1-(Pe.clientY-Ze.top)/Math.max(1,Ze.height);return{u:Je,v:pt,inside:Je>=0&&Je<=1&&pt>=0&&pt<=1}},dt=Pe=>{let Ze=Ae.current,{u:Je,v:pt,inside:bt}=Le(Pe);at.x=Je,at.y=pt;let ia=at.inside;at.inside=bt,bt?(window.clearTimeout(Ce),Ce=0,!oe.current?.active&&Ze.interactive&&!Me&&pe(Je*2-1,pt*2-1,!0),Re()):ia&&!Ce&&(Ce=window.setTimeout(()=>{Ce=0,oe.current?.active||(Xe.held=!1),Re()},220),Re())},rt=Pe=>{let Ze=Ae.current,{u:Je,v:pt,inside:bt}=Le(Pe);if(!(!bt||Me||Ze.clickEffect==="none")){if(Ze.clickEffect==="scan")Y>=1&&Fe(Ze);else{let ia=ce(Je,pt);X.unshift({...ia,age:0}),X.length>Hh&&X.pop()}Re()}},sa=()=>{at.inside=!1,oe.current?.active||(Xe.held=!1),Re()},Ya=Pe=>{!Ae.current.enableGyro||oe.current?.active||Me||Pe.gamma===null||Pe.beta===null||(b.ready||Object.assign(b,{gamma:Pe.gamma,beta:Pe.beta,ready:!0}),pe((Pe.gamma-b.gamma)/25,(Pe.beta-b.beta)/-25,!0),Re())},ko=()=>{let Pe=Ae.current,Ze=window.DeviceOrientationEvent?.requestPermission;!Pe.enableGyro||b.asked||typeof Ze!="function"||(b.asked=!0,Ze.call(window.DeviceOrientationEvent).catch(()=>{}))},ri=()=>{ge=0,Re()},xr=new ResizeObserver(xe);xr.observe(Se);let gr=new IntersectionObserver(Pe=>{qe=Pe.some(Ze=>Ze.isIntersecting),qe&&(ge=0,Re())});return gr.observe(Se),window.addEventListener("pointermove",dt,{passive:!0}),window.addEventListener("pointerdown",rt,{passive:!0}),window.addEventListener("deviceorientation",Ya),window.addEventListener("click",ko),document.documentElement.addEventListener("pointerleave",sa),document.addEventListener("visibilitychange",ri),oe.current={active:!1,move:(Pe,Ze,Je)=>{Me||(pe(Pe*1.3,Ze*1.3,!0),E.tf=Vh*Xa(Je,.6,1.6),Re())},release:()=>{E.tf=Vh,Xe.held=!1,Re()}},xe(),q.current=Re,()=>{cancelAnimationFrame(ae),window.clearTimeout(Ce),q.current=null,oe.current=null,xr.disconnect(),gr.disconnect(),window.removeEventListener("pointermove",dt),window.removeEventListener("pointerdown",rt),window.removeEventListener("deviceorientation",Ya),window.removeEventListener("click",ko),document.documentElement.removeEventListener("pointerleave",sa),document.removeEventListener("visibilitychange",ri),[he,Ve,Qe,j].forEach(Pe=>z.deleteTexture(Pe.texture)),[re,ne,se].forEach(Pe=>z.deleteFramebuffer(Pe)),z.deleteVertexArray(ke),[je,Z,J,ve].forEach(Pe=>z.deleteProgram(Pe.program)),z.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Uo.useEffect)(()=>{q.current?.()}),(0,Uo.useEffect)(()=>{if(!F)return;let Se=$.current;if(!Se)return;let We=!1,z=null,je=0,Z=0,J={x:0,y:0,near:1,ready:!1};return K("loading"),(async()=>{try{let ke=await L3();if(await ke.nets.tinyFaceDetector.loadFromUri(_),We)return;if(z=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),We){z.getTracks().forEach(Qe=>Qe.stop());return}Se.srcObject=z,await Se.play(),K("searching");let he=new ke.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ve=async()=>{if(We)return;let Qe=null;try{Qe=await ke.detectSingleFace(Se,he)}catch{Qe=null}if(We)return;let j=oe.current;if(Qe&&j){let re=Qe.box,ne=Se.videoWidth||1,se=Se.videoHeight||1,fe=-((re.x+re.width/2)/ne-.5)*2,Ne=-((re.y+re.height/2)/se-.5)*2,De=.32/Math.max(.08,re.width/ne),Me=J.ready?.45:1;J.x+=(fe-J.x)*Me,J.y+=(Ne-J.y)*Me,J.near+=(De-J.near)*Me,J.ready=!0,Z=0,j.active=!0,j.move(J.x,J.y,J.near),K("tracking")}else j&&++Z>12&&j.active&&(j.active=!1,J.ready=!1,j.release(),K("searching"));je=window.setTimeout(Ve,40)};Ve()}catch{We||K("blocked")}})(),()=>{We=!0,window.clearTimeout(je),z?.getTracks().forEach(he=>he.stop()),Se.srcObject=null;let ke=oe.current;ke?.active&&(ke.active=!1,ke.release())}},[F,_]),Te.createElement("div",{ref:R,className:`grid-scan${D?` ${D}`:""}`,style:H,...O},Te.createElement("canvas",{ref:k,className:"grid-scan-canvas","aria-hidden":"true"}),F&&Te.createElement("div",{className:C?"grid-scan-preview":"grid-scan-hidden"},Te.createElement("video",{ref:$,className:"grid-scan-video",muted:!0,playsInline:!0}),C&&Te.createElement("span",{className:"grid-scan-status"},P3[N])))},I_=B3;st();var Ke=Gn(jo());st();var Ot=Gn(jo());st();st();var qf=Gn(jo(),1),U3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},xs=(0,qf.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:u=!1,...h},f)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,I=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},M={ref:f,...U3,width:e,height:e,color:l||t,className:n,...I,...h},p=[...s&&r?r:i].sort(([,x],[,v])=>{let F=x.opacity!==void 0;return v.opacity!==void 0?1:F?-1:0}).map(([x,v])=>{let F=v.opacity!==void 0,C=F&&!u?v.opacity:void 0,_=c?{...v.stroke!==void 0?{stroke:F?c:l||t}:{fill:F?c:l||t}}:{};return(0,qf.createElement)(x,{...v,...I,..._,opacity:C,key:v.key})});return(0,qf.createElement)("svg",M,p)});xs.displayName="HugeiconsIcon";st();st();var Hn=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];st();var mr=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];st();var Ir=[["path",{d:"M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]];st();var Wf=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var Xf=typeof window>"u"?Ot.useEffect:Ot.useLayoutEffect,x_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},S_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",v_="cubic-bezier(0.22, 1, 0.36, 1)",g_=(t,e,a)=>Math.min(a,Math.max(e,t)),k3=t=>typeof t=="number"?`${t}px`:t,N3=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},F_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?S_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function O3(){let t=(0,Ot.useRef)(null);return Xf(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:v_}))},[]),Te.createElement("span",{ref:t,className:"stepper__check"},Te.createElement(xs,{icon:Wf,size:16,strokeWidth:2.4}))}function Yh({children:t}){return Te.createElement("div",{className:"stepper__step"},t)}function Pg({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:u,showFooter:h=!0,backButtonText:f="Back",nextButtonText:d="Continue",completeButtonText:I="Complete",backButtonProps:M={},nextButtonProps:m={},completedContent:p,theme:x="dark",accentColor:v="#00f5ff",frame:F=!0,radius:C=20,width:_=620,className:w="",stepCircleContainerClassName:S="",stepContainerClassName:T="",contentClassName:A="",footerClassName:D="",style:H,...O}){let R=Ot.Children.toArray(t).filter(Ot.isValidElement),k=R.length,$=typeof e=="number",[q,oe]=(0,Ot.useState)(a),N=g_(Math.round($?e:q),1,k+1),K=N>k,te=s==="vertical",Ae=te?"numbers":r,Se=R.some(ce=>ce.props.title),[We,z]=(0,Ot.useState)(!1),[je,Z]=(0,Ot.useState)(!1),J=te&&!We,[ve,ke]=(0,Ot.useState)(N);N>ve&&ke(N);let[he,Ve]=(0,Ot.useState)({step:N,previous:null,direction:1,id:0});he.step!==N&&Ve({step:N,previous:he.step,direction:N>he.step?1:-1,id:he.id+1});let Qe=(0,Ot.useRef)(null),j=(0,Ot.useRef)(null),re=(0,Ot.useRef)(null),ne=(0,Ot.useRef)([]),se=(0,Ot.useRef)([]),fe=(0,Ot.useRef)(null),Ne=(0,Ot.useRef)(null),De=(0,Ot.useRef)(null),Me=(0,Ot.useRef)(0),Oe=(0,Ot.useRef)([]),E=(0,Ot.useRef)(!1);E.current=je;let at=(0,Ot.useRef)(!1),Xe=ce=>{let Fe=g_(ce,1,k+1);Fe!==N&&($||oe(Fe),Fe>k?n():o(Fe))},b=ce=>!c&&ce!==N&&(!l||ce<=Math.min(ve,k));Xf(()=>{let ce=Qe.current;if(!ce)return;let Fe=()=>{let P=te&&ce.clientWidth<520;z(P);let pe=j.current;if(!pe||!Se||te&&!P){Z(!1);return}let Q=ne.current.slice(0,k);E.current||Q.forEach((Re,Le)=>{let dt=se.current[Le];Oe.current[Le]=dt&&Re?.contains(dt)?dt.scrollWidth+8:0});let xe=Q.reduce((Re,Le)=>Re+(Le?.firstElementChild?.getBoundingClientRect().width??22)+20,0),be=Oe.current.slice(0,k).reduce((Re,Le)=>Re+(Le||0),0),le=pe.clientWidth-8-4*Math.max(0,k-1);Z(xe+be>le+.5)};Fe();let Ie=new ResizeObserver(Fe);return Ie.observe(ce),()=>Ie.disconnect()},[te,Se,F,k,Ae]),Xf(()=>{let ce=fe.current;if(!ce)return;Me.current=ce.offsetHeight;let Fe=new ResizeObserver(()=>{Me.current=ce.offsetHeight});return Fe.observe(ce),()=>Fe.disconnect()},[]),Xf(()=>{if(he.id===0)return;let ce=fe.current,Fe=Ne.current,Ie=De.current,P=he.id,pe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Q=i==="none"?"none":pe?"fade":i,xe=()=>Ve(rt=>rt.id===P?{...rt,previous:null}:rt);if(Ie&&Fe&&Ie.contains(document.activeElement)&&Fe.focus({preventScroll:!0}),!ce||typeof ce.animate!="function"||Q==="none"){xe();return}for(let rt of[ce,Fe,Ie])rt?.getAnimations().forEach(sa=>sa.cancel());let be=Me.current,le=ce.offsetHeight,Re=F_();Math.abs(be-le)>.5&&ce.animate([{height:`${be}px`},{height:`${le}px`}],{duration:pe?200:560,easing:pe?v_:Re});let Le=te?"Y":"X",dt=Q==="slide"?36:0;if(Fe&&(dt&&Fe.animate([{transform:`translate${Le}(${he.direction*dt}px)`},{transform:"none"}],{duration:560,easing:Re}),Fe.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),Ie){Ie.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let rt=Ie.animate([{transform:"none"},{transform:`translate${Le}(${-he.direction*dt}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});rt.onfinish=xe}else xe()},[he.id]),Xf(()=>{let ce=j.current,Fe=re.current;if(!ce||!Fe)return;let Ie=pe=>{let Q=ne.current[Math.min(N,k)-1];if(!Q)return;let xe=F_();Fe.style.transition=pe?`transform 560ms ${xe}, width 560ms ${xe}, height 560ms ${xe}, opacity 200ms ease`:"opacity 200ms ease",Fe.style.transform=`translate3d(${Q.offsetLeft}px, ${Q.offsetTop}px, 0)`,Fe.style.width=`${Q.offsetWidth}px`,Fe.style.height=`${Q.offsetHeight}px`,Fe.style.opacity=K?"0":"1"};Ie(at.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),at.current=!0;let P=new ResizeObserver(()=>Ie(!1));return P.observe(ce),()=>P.disconnect()},[N,k,K,Ae,Se,te,We,je]);let g=ce=>ce>k?p??null:R[ce-1],B=v?{"--stepper-solid":v,"--stepper-solid-ink":N3(v)}:{},X=(ce,Fe,Ie)=>Te.createElement("span",{className:"stepper__badge","data-status":Ie},Ie==="complete"?Te.createElement(O3,null):ce.props.icon?Te.createElement("span",{className:"stepper__glyph"},ce.props.icon):Fe),ee=()=>Ae==="dots"?Te.createElement("div",{className:"stepper__dots"},R.map((ce,Fe)=>{let Ie=Fe+1,P=K||Ie<N?"complete":Ie===N?"active":"upcoming";return Te.createElement("button",{key:Ie,type:"button",className:"stepper__dot","data-status":P,"aria-label":ce.props.title?`Step ${Ie}: ${ce.props.title}`:`Step ${Ie}`,"aria-current":Ie===N?"step":void 0,disabled:!b(Ie),onClick:()=>Xe(Ie)},Te.createElement("span",{className:"stepper__dot-mark","data-status":P}))})):Ae==="bars"?Te.createElement("div",{className:"stepper__bars"},R.map((ce,Fe)=>{let Ie=Fe+1,P=K||Ie<=N;return Te.createElement("button",{key:Ie,type:"button",className:"stepper__bar","data-status":K||Ie<N?"complete":Ie===N?"active":"upcoming","aria-label":ce.props.title?`Step ${Ie}: ${ce.props.title}`:`Step ${Ie}`,"aria-current":Ie===N?"step":void 0,disabled:!b(Ie),onClick:()=>Xe(Ie)},Te.createElement("span",{className:"stepper__bar-track"},Te.createElement("span",{className:"stepper__bar-fill","data-filled":P?"":void 0})))})):Te.createElement("div",{ref:j,className:"stepper__track","data-layout":J?"rail":"row"},Te.createElement("span",{ref:re,className:"stepper__glider","aria-hidden":"true"}),R.map((ce,Fe)=>{let Ie=Fe+1,P=K||Ie<N?"complete":Ie===N?"active":"upcoming",pe=ce.props.title,Q=pe&&!(je&&!J)&&Te.createElement("span",{className:"stepper__text"},Te.createElement("span",{ref:be=>{se.current[Fe]=be},className:"stepper__title","data-status":P},pe),J&&ce.props.description&&Te.createElement("span",{className:"stepper__description"},ce.props.description)),xe=be=>{ne.current[Fe]=be};return u?Te.createElement("div",{key:Ie,ref:xe,className:"stepper__segment","data-status":P},u({step:Ie,currentStep:N,onStepClick:be=>Xe(be)}),Q):Te.createElement("button",{key:Ie,ref:xe,type:"button",className:"stepper__segment","data-status":P,"aria-label":typeof pe=="string"?`Step ${Ie}: ${pe}`:`Step ${Ie}`,"aria-current":Ie===N?"step":void 0,disabled:!b(Ie),onClick:()=>Xe(Ie)},X(ce,Ie,P),Q)})),me=N===k,de=me?I:d,{className:Y="",onClick:ae,...ge}=M,{className:qe="",onClick:Ce,..._e}=m;return Te.createElement("div",{...O,ref:Qe,className:`stepper stepper--${J?"vertical":"horizontal"}${F?" stepper--framed":""} ${S} ${w}`.replace(/\s+/g," ").trim(),"data-completed":K?"":void 0,style:{...x_[x]??x_.dark,"--stepper-radius":`${Math.max(0,C)}px`,"--stepper-spring":S_,"--stepper-width":k3(_),...B,...H}},Te.createElement("div",{className:`stepper__header stepper__header--${Ae} ${T}`.trim()},ee()),Te.createElement("div",{className:"stepper__body"},Te.createElement("div",{ref:fe,className:`stepper__viewport ${A}`.trim(),"aria-live":"polite"},he.previous!==null&&Te.createElement("div",{key:he.id-1,ref:De,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},g(he.previous)),Te.createElement("div",{key:he.id,ref:Ne,className:"stepper__pane",tabIndex:-1},g(he.step))),h&&Te.createElement("div",{className:"stepper__footer-wrap","data-hidden":K?"":void 0,"aria-hidden":K?!0:void 0},Te.createElement("div",{className:"stepper__footer-clip"},Te.createElement("div",{className:`stepper__footer ${D}`.trim()},Te.createElement("button",{type:"button",...ge,className:`stepper__button stepper__button--back ${Y}`.trim(),"data-hidden":N<=1?"":void 0,tabIndex:K?-1:ge.tabIndex,onClick:ce=>{ae?.(ce),ce.defaultPrevented||Xe(N-1)}},Te.createElement(xs,{icon:Hn,size:16,strokeWidth:2}),Te.createElement("span",null,f)),Te.createElement("button",{type:"button",..._e,className:`stepper__button stepper__button--next ${qe}`.trim(),tabIndex:K?-1:_e.tabIndex,onClick:ce=>{Ce?.(ce),ce.defaultPrevented||Xe(N+1)}},Te.createElement("span",null,de),Te.createElement(xs,{icon:me?Wf:mr,size:16,strokeWidth:2})))))),F&&Te.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var z3=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function Bg(){let[t,e]=(0,Ke.useState)(1),[a,o]=(0,Ke.useState)(""),[n,r]=(0,Ke.useState)("Project Inquiry"),[s,i]=(0,Ke.useState)(""),[l,c]=(0,Ke.useState)(!1),[u,h]=(0,Ke.useState)(""),f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return Ke.default.createElement("div",{className:"stepper-quick-message-container"},Ke.default.createElement("div",{className:"stepper-qm-header"},Ke.default.createElement("div",{className:"stepper-qm-badge"},Ke.default.createElement("span",{className:"pulse-dot-cyan"}),Ke.default.createElement("span",null,"Send a Quick Message")),Ke.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),Ke.default.createElement(Pg,{step:t,onStepChange:M=>{h(""),e(M)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!f||l},onFinalStepCompleted:async()=>{if(!f){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let M=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(M&&M.success)e(4);else throw new Error(M&&M.error||"Failed to send message. Please retry.")}catch(M){h(M.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:Ke.default.createElement("div",{className:"stepper-complete-card"},Ke.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),Ke.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),Ke.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",Ke.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),Ke.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},Ke.default.createElement(Yh,{title:"Email"},Ke.default.createElement("div",{className:"step-pane-content"},Ke.default.createElement("h3",{className:"step-title"},"Where should I reply?"),Ke.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),Ke.default.createElement("div",{className:"step-input-box"},Ke.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},Ke.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Ke.default.createElement("polyline",{points:"22,6 12,13 2,6"})),Ke.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:M=>{o(M.target.value),u&&h("")},className:"step-text-input"})),!f&&a.length>0&&Ke.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),f&&Ke.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),Ke.default.createElement(Yh,{title:"Details"},Ke.default.createElement("div",{className:"step-pane-content"},Ke.default.createElement("h3",{className:"step-title"},"What is this regarding?"),Ke.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),Ke.default.createElement("div",{className:"intent-pills-grid"},z3.map(M=>Ke.default.createElement("button",{key:M.id,type:"button",className:`intent-pill ${n===M.id?"active":""}`,onClick:()=>r(M.id)},Ke.default.createElement("span",{className:"intent-pill-label"},M.label)))),Ke.default.createElement("div",{className:"step-message-box"},Ke.default.createElement("label",{className:"step-message-label"},"Your Message ",Ke.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),Ke.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:M=>i(M.target.value),className:"step-textarea"})))),Ke.default.createElement(Yh,{title:"Review"},Ke.default.createElement("div",{className:"step-pane-content"},Ke.default.createElement("h3",{className:"step-title"},"Ready to transmit"),Ke.default.createElement("p",{className:"step-desc"},"Review your message before sending."),Ke.default.createElement("div",{className:"review-summary-card"},Ke.default.createElement("div",{className:"review-row"},Ke.default.createElement("span",{className:"review-label"},"Your Email:"),Ke.default.createElement("span",{className:"review-value cyan"},a)),Ke.default.createElement("div",{className:"review-row"},Ke.default.createElement("span",{className:"review-label"},"Topic:"),Ke.default.createElement("span",{className:"review-value"},n)),s?Ke.default.createElement("div",{className:"review-row column"},Ke.default.createElement("span",{className:"review-label"},"Message:"),Ke.default.createElement("p",{className:"review-quote"},'"',s,'"')):Ke.default.createElement("div",{className:"review-row"},Ke.default.createElement("span",{className:"review-label"},"Message:"),Ke.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),u&&Ke.default.createElement("div",{className:"step-error-banner"},Ke.default.createElement("span",null,"\u26A0 ",u))))))}st();var Vn=Gn(jo());var H3={dark:{"--pc-frame":"rgba(38, 35, 46, 0.66)","--pc-frame-edge":"rgba(255, 255, 255, 0.08)","--pc-frame-highlight":"rgba(255, 255, 255, 0.07)","--pc-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--pc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--pc-tile-edge":"rgba(255, 255, 255, 0.07)","--pc-tile-highlight":"rgba(255, 255, 255, 0.12)","--pc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--pc-ink":"#f4f4f5","--pc-muted":"rgba(244, 244, 245, 0.6)","--pc-hover":"brightness(1.12)","--pc-press":"brightness(0.8)","--pc-shade":"rgba(0, 0, 0, 0.4)"},light:{"--pc-frame":"rgba(240, 240, 243, 0.8)","--pc-frame-edge":"rgba(24, 24, 27, 0.07)","--pc-frame-highlight":"rgba(255, 255, 255, 0.95)","--pc-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--pc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--pc-tile-edge":"rgba(24, 24, 27, 0.08)","--pc-tile-highlight":"rgba(255, 255, 255, 1)","--pc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--pc-ink":"#27272a","--pc-muted":"rgba(39, 39, 42, 0.6)","--pc-hover":"brightness(0.97)","--pc-press":"brightness(0.92)","--pc-shade":"rgba(24, 24, 27, 0.14)"}},V3={dark:{"--pc-blend":"color-dodge","--pc-holo-filter":"hue-rotate(0deg)","--pc-sheen":"rgba(255, 255, 255, 0.16)"},light:{"--pc-blend":"multiply","--pc-holo-filter":"invert(1) hue-rotate(180deg)","--pc-sheen":"rgba(255, 255, 255, 0)"}},G3=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`,Zh=(t,e,a)=>Math.min(a,Math.max(e,t)),q3=t=>{let e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(t).trim());if(!e)return null;let a=e[1].length===3?e[1].replace(/./g,s=>s+s):e[1],[o,n,r]=[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255);return .2126*o+.7152*n+.0722*r<.5},W3=({avatarUrl:t="",iconUrl:e,miniAvatarUrl:a,name:o="Javi A. Torres",title:n="Software Engineer",handle:r="javicodes",status:s="Online",statusColor:i="#22c55e",contactText:l="Contact",showUserInfo:c=!0,onContactClick:u,theme:h="dark",backdropColor:f,radius:d=16,holo:I=.8,glare:M=.5,enableTilt:m=!0,tiltStrength:p=12,parallax:x=8,enableMobileTilt:v=!1,mobileTiltSensitivity:F=5,intro:C=!0,className:_=""})=>{let w=(0,Vn.useRef)(null),S=(0,Vn.useRef)(null),T={enableTilt:m,tiltStrength:p,parallax:x,mobileTiltSensitivity:F,intro:C},A=(0,Vn.useRef)(T);A.current=T,(0,Vn.useEffect)(()=>{let R=w.current;if(!R)return;let k=window.matchMedia("(prefers-reduced-motion: reduce)").matches,$={width:R.offsetWidth,height:R.offsetHeight},q={p:0,v:0,target:0},oe={p:0,v:0,target:0},N={p:0,target:0},K=0,te=0,Ae=0,Se=null,We=()=>{let{enableTilt:ne,tiltStrength:se,parallax:fe}=A.current,Ne=ne&&!k?se:0,De=Math.min(1,Math.hypot(q.p,oe.p)),Me=R.style;Me.setProperty("--pc-light-x",`${((q.p+1)*.5*$.width).toFixed(1)}px`),Me.setProperty("--pc-light-y",`${((oe.p+1)*.5*$.height).toFixed(1)}px`),Me.setProperty("--pc-pointer-x",`${((q.p+1)*50).toFixed(2)}%`),Me.setProperty("--pc-pointer-y",`${((oe.p+1)*50).toFixed(2)}%`),Me.setProperty("--pc-band-x",`${(50+q.p*15).toFixed(2)}%`),Me.setProperty("--pc-band-y",`${(50+oe.p*15).toFixed(2)}%`),Me.setProperty("--pc-rotate-x",`${(oe.p*Ne).toFixed(3)}deg`),Me.setProperty("--pc-rotate-y",`${(-q.p*Ne).toFixed(3)}deg`),Me.setProperty("--pc-shift-x",`${(q.p*(k?0:fe)).toFixed(2)}px`),Me.setProperty("--pc-shift-y",`${(oe.p*(k?0:fe)).toFixed(2)}px`),Me.setProperty("--pc-reach",De.toFixed(4)),Me.setProperty("--pc-tilt",(De*N.p).toFixed(4)),Me.setProperty("--pc-active",N.p.toFixed(4))},z=ne=>{let se=Math.min(.05,(ne-te)/1e3||0);te=ne;let fe=ne<Ae,Ne=fe?24:120,De=fe?9:16,Me=Math.max(1,Math.ceil(se/(1/120))),Oe=se/Me;for(let Xe=0;Xe<Me;Xe++)for(let b of[q,oe])b.v+=(Ne*(b.target-b.p)-De*b.v)*Oe,b.p+=b.v*Oe;let E=N.target>N.p?.18:fe?.9:.45;N.p+=(N.target-N.p)*(1-Math.exp(-se/E)),We(),Math.abs(q.target-q.p)>5e-4||Math.abs(oe.target-oe.p)>5e-4||Math.abs(q.v)>5e-4||Math.abs(oe.v)>5e-4||Math.abs(N.target-N.p)>.002?K=requestAnimationFrame(z):(q.p=q.target,oe.p=oe.target,N.p=N.target,We(),K=0)},je=()=>{K||(te=performance.now(),K=requestAnimationFrame(z))},Z=(ne,se,fe=!0)=>{q.target=Zh(ne,-1,1),oe.target=Zh(se,-1,1),N.target=fe?1:0,Ae=0,je()},J=ne=>{let se=R.getBoundingClientRect();!se.width||!se.height||Z((ne.clientX-se.left)/se.width*2-1,(ne.clientY-se.top)/se.height*2-1)},ve=()=>Z(0,0,!1),ke=ne=>{ne.pointerType==="mouse"&&J(ne)},he=ne=>{(ne.pointerType==="mouse"||ne.pointerId===Se)&&J(ne)},Ve=ne=>{ne.pointerType==="mouse"&&ve()},Qe=ne=>{ne.pointerType!=="mouse"&&(Se=ne.pointerId,J(ne))},j=ne=>{ne.pointerId===Se&&(Se=null,ve())};R.addEventListener("pointerenter",ke),R.addEventListener("pointermove",he),R.addEventListener("pointerleave",Ve),R.addEventListener("pointerdown",Qe),R.addEventListener("pointerup",j),R.addEventListener("pointercancel",j);let re=new ResizeObserver(()=>{$.width=R.offsetWidth,$.height=R.offsetHeight,We()});return re.observe(R),S.current={aim:Z,release:ve,write:We},A.current.intro&&!k?(q.p=.62,oe.p=-.55,N.p=1,Ae=performance.now()+1400,We(),je()):We(),()=>{cancelAnimationFrame(K),re.disconnect(),R.removeEventListener("pointerenter",ke),R.removeEventListener("pointermove",he),R.removeEventListener("pointerleave",Ve),R.removeEventListener("pointerdown",Qe),R.removeEventListener("pointerup",j),R.removeEventListener("pointercancel",j),S.current=null}},[]),(0,Vn.useEffect)(()=>{S.current?.write()},[m,p,x]),(0,Vn.useEffect)(()=>{let R=w.current;if(!R||!v)return;let k=!1,$=N=>{if(N.beta==null||N.gamma==null)return;let K=A.current.mobileTiltSensitivity;S.current?.aim(N.gamma*K/150,(N.beta-20)*K/150)},q=()=>{k||(k=!0,window.addEventListener("deviceorientation",$))},oe=()=>{let N=window.DeviceOrientationEvent;N&&typeof N.requestPermission=="function"?N.requestPermission().then(K=>{K==="granted"&&q()}).catch(()=>{}):q()};return R.addEventListener("click",oe),()=>{R.removeEventListener("click",oe),window.removeEventListener("deviceorientation",$)}},[v]);let D=h==="light"?"light":"dark",H=f?q3(f)??D==="dark"?"dark":"light":D,O=f?`linear-gradient(180deg, color-mix(in srgb, ${f}, #ffffff 12%) 0%, color-mix(in srgb, ${f}, #000000 18%) 100%)`:"var(--pc-tile)";return Te.createElement("div",{ref:w,className:`profile-card ${_}`.trim(),style:{...H3[D],...V3[H],"--pc-radius":`${Math.max(0,d)}px`,"--pc-backdrop":O,"--pc-holo":Zh(I,0,1),"--pc-glare":Zh(M,0,1),"--pc-parallax":`${Math.max(0,x)}px`,"--pc-status":i,"--pc-grain":G3,"--pc-pattern":e?`url("${e}")`:"linear-gradient(#000, #000)","--pc-pattern-size":e?"180% auto":"100% 100%","--pc-holo-gain":e?1.25:.75,"--pc-holo-detail":e&&H==="dark"?1:0}},Te.createElement("div",{className:"profile-card__body"},Te.createElement("div",{className:"profile-card__tile"},Te.createElement("span",{className:"profile-card__sheen"}),Te.createElement("span",{className:"profile-card__holo"},Te.createElement("span",{className:"profile-card__holo-glow"}),Te.createElement("span",{className:"profile-card__holo-shift"})),t&&Te.createElement("img",{className:"profile-card__photo",src:t,alt:o||"",loading:"lazy",draggable:!1}),(o||n)&&Te.createElement(Te.Fragment,null,Te.createElement("span",{className:"profile-card__scrim"}),Te.createElement("div",{className:"profile-card__info"},o&&Te.createElement("h3",{className:"profile-card__name"},o),n&&Te.createElement("p",{className:"profile-card__title"},n))),Te.createElement("span",{className:"profile-card__tile-rim"})),c&&Te.createElement("div",{className:"profile-card__footer"},a&&Te.createElement("span",{className:"profile-card__avatar"},Te.createElement("img",{src:a,alt:"",loading:"lazy",draggable:!1})),Te.createElement("div",{className:"profile-card__meta"},r&&Te.createElement("span",{className:"profile-card__handle"},"@",r),s&&Te.createElement("span",{className:"profile-card__status"},s)),l&&Te.createElement("button",{type:"button",className:"profile-card__contact",onClick:u,"aria-label":o?`${l} ${o}`:l},Te.createElement(xs,{icon:Ir,size:16,strokeWidth:1.8}),l)),Te.createElement("span",{className:"profile-card__glare"}),Te.createElement("span",{className:"profile-card__shade"}),Te.createElement("span",{className:"profile-card__rim"})))},y_=(0,Vn.memo)(W3);function M_(){console.log("\u{1F680} initReactComponents running...");try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Kl.createRoot)(t).render(Zl.default.createElement(Lg,{frontImage:"assets/id_card_front.png",backImage:"assets/id_card_back.png",strapImage:"assets/hepl_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Kl.createRoot)(t).render(Zl.default.createElement(Lg,{frontImage:"assets/mmw_id_front.png",backImage:"assets/mmw_id_back.png",strapImage:"assets/mmw_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,Kl.createRoot)(t).render(Zl.default.createElement(I_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,Kl.createRoot)(t).render(Zl.default.createElement(Bg,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}try{let t=document.getElementById("profile-card-mount");t&&!t.dataset.profileCardMounted&&(t.dataset.profileCardMounted="true",t.innerHTML="",(0,Kl.createRoot)(t).render(Zl.default.createElement(y_,{name:"Saravana Prakash R",title:"Engineer - Immersive Tech",handle:"srvnsp",status:"Online",statusColor:"#00f5ff",contactText:"Contact Me",avatarUrl:"assets/profile_authentic.webp",miniAvatarUrl:"assets/profile_authentic.webp",iconUrl:"assets/csharp-pattern.svg",holo:.8,glare:.5,tiltStrength:12,parallax:8,radius:20,enableTilt:!0,intro:!0,showUserInfo:!0,theme:"dark",onContactClick:()=>{let a=document.getElementById("contact");if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}})),console.log("\u2705 ProfileCard mounted successfully"))}catch(t){console.error("\u274C Failed mounting ProfileCard:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M_):M_();
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
