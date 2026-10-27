var T_=Object.create;var zg=Object.defineProperty;var A_=Object.getOwnPropertyDescriptor;var w_=Object.getOwnPropertyNames;var E_=Object.getPrototypeOf,R_=Object.prototype.hasOwnProperty;var D_=(t,e)=>()=>(t&&(e=t(t=0)),e);var Sr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var L_=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of w_(e))!R_.call(t,n)&&n!==a&&zg(t,n,{get:()=>e[n],enumerable:!(o=A_(e,n))||o.enumerable});return t};var qn=(t,e,a)=>(a=t!=null?T_(E_(t)):{},L_(e||!t||!t.__esModule?zg(a,"default",{value:t,enumerable:!0}):a,t));var $g=Sr(ct=>{"use strict";st();var em=Symbol.for("react.transitional.element"),P_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),U_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),N_=Symbol.for("react.consumer"),O_=Symbol.for("react.context"),z_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),V_=Symbol.for("react.memo"),Wg=Symbol.for("react.lazy"),G_=Symbol.for("react.activity"),q_=Symbol.for("react.view_transition"),Hg=Symbol.iterator;function W_(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var Xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,Zg={};function fi(t,e,a){this.props=t,this.context=e,this.refs=Zg,this.updater=a||Xg}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kg(){}Kg.prototype=fi.prototype;function tm(t,e,a){this.props=t,this.context=e,this.refs=Zg,this.updater=a||Xg}var am=tm.prototype=new Kg;am.constructor=tm;Yg(am,fi.prototype);am.isPureReactComponent=!0;var Vg=Array.isArray;function $h(){}var Wt={H:null,A:null,T:null,S:null},Jg=Object.prototype.hasOwnProperty;function om(t,e,a){var o=a.ref;return{$$typeof:em,type:t,key:e,ref:o!==void 0?o:null,props:a}}function X_(t,e){return om(t.type,e,t.props)}function nm(t){return typeof t=="object"&&t!==null&&t.$$typeof===em}function Y_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Gg=/\/+/g;function jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y_(""+t.key):e.toString(36)}function Z_(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then($h,$h):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ci(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case em:case P_:s=!0;break;case Wg:return s=t._init,ci(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+jh(t,0):o,Vg(n)?(a="",s!=null&&(a=s.replace(Gg,"$&/")+"/"),ci(n,e,a,"",function(c){return c})):n!=null&&(nm(n)&&(n=X_(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(Gg,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(Vg(t))for(var l=0;l<t.length;l++)o=t[l],r=i+jh(o,l),s+=ci(o,e,a,r,n);else if(l=W_(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+jh(o,l++),s+=ci(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return ci(Z_(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function jf(t,e,a){if(t==null)return t;var o=[],n=0;return ci(t,o,"","",function(r){return e.call(a,r,n++)}),o}function K_(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var qg=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qg(t){var e=Wt.T,a={};a.types=e!==null?e.types:null,Wt.T=a;try{var o=t(),n=Wt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then($h,qg)}catch(r){qg(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),Wt.T=e}}function jg(t){var e=Wt.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else Qg(jg.bind(null,t))}var J_={map:jf,forEach:function(t,e,a){jf(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return jf(t,function(){e++}),e},toArray:function(t){return jf(t,function(e){return e})||[]},only:function(t){if(!nm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Activity=G_;ct.Children=J_;ct.Component=fi;ct.Fragment=B_;ct.Profiler=k_;ct.PureComponent=tm;ct.StrictMode=U_;ct.Suspense=H_;ct.ViewTransition=q_;ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Wt;ct.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Wt.H.useMemoCache(t)}};ct.addTransitionType=jg;ct.cache=function(t){return function(){return t.apply(null,arguments)}};ct.cacheSignal=function(){return null};ct.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=Yg({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!Jg.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return om(t.type,n,o)};ct.createContext=function(t){return t={$$typeof:O_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:N_,_context:t},t};ct.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)Jg.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return om(t,r,n)};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:z_,render:t}};ct.isValidElement=nm;ct.lazy=function(t){return{$$typeof:Wg,_payload:{_status:-1,_result:t},_init:K_}};ct.memo=function(t,e){return{$$typeof:V_,type:t,compare:e===void 0?null:e}};ct.startTransition=Qg;ct.unstable_useCacheRefresh=function(){return Wt.H.useCacheRefresh()};ct.use=function(t){return Wt.H.use(t)};ct.useActionState=function(t,e,a){return Wt.H.useActionState(t,e,a)};ct.useCallback=function(t,e){return Wt.H.useCallback(t,e)};ct.useContext=function(t){return Wt.H.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t,e){return Wt.H.useDeferredValue(t,e)};ct.useEffect=function(t,e){return Wt.H.useEffect(t,e)};ct.useEffectEvent=function(t){return Wt.H.useEffectEvent(t)};ct.useId=function(){return Wt.H.useId()};ct.useImperativeHandle=function(t,e,a){return Wt.H.useImperativeHandle(t,e,a)};ct.useInsertionEffect=function(t,e){return Wt.H.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return Wt.H.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return Wt.H.useMemo(t,e)};ct.useOptimistic=function(t,e){return Wt.H.useOptimistic(t,e)};ct.useReducer=function(t,e,a){return Wt.H.useReducer(t,e,a)};ct.useRef=function(t){return Wt.H.useRef(t)};ct.useState=function(t){return Wt.H.useState(t)};ct.useSyncExternalStore=function(t,e,a){return Wt.H.useSyncExternalStore(t,e,a)};ct.useTransition=function(){return Wt.H.useTransition()};ct.version="19.3.0"});var jo=Sr((j3,eF)=>{"use strict";st();eF.exports=$g()});var _e,st=D_(()=>{_e=qn(jo())});var fF=Sr(Jt=>{"use strict";st();function lm(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<$f(n,e))t[o]=e,t[a]=n,a=o;else break e}}function In(t){return t.length===0?null:t[0]}function tu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>$f(i,a))l<n&&0>$f(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>$f(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function $f(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Jt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(tF=performance,Jt.unstable_now=function(){return tF.now()}):(rm=Date,aF=rm.now(),Jt.unstable_now=function(){return rm.now()-aF});var tF,rm,aF,Wn=[],vr=[],Q_=1,Oo=null,za=3,cm=!1,jl=!1,$l=!1,fm=!1,rF=typeof setTimeout=="function"?setTimeout:null,sF=typeof clearTimeout=="function"?clearTimeout:null,oF=typeof setImmediate<"u"?setImmediate:null;function eu(t){for(var e=In(vr);e!==null;){if(e.callback===null)tu(vr);else if(e.startTime<=t)tu(vr),e.sortIndex=e.expirationTime,lm(Wn,e);else break;e=In(vr)}}function um(t){if($l=!1,eu(t),!jl)if(In(Wn)!==null)jl=!0,di||(di=!0,ui());else{var e=In(vr);e!==null&&dm(um,e.startTime-t)}}var di=!1,ec=-1,iF=5,lF=-1;function cF(){return fm?!0:!(Jt.unstable_now()-lF<iF)}function sm(){if(fm=!1,di){var t=Jt.unstable_now();lF=t;var e=!0;try{e:{jl=!1,$l&&($l=!1,sF(ec),ec=-1),cm=!0;var a=za;try{t:{for(eu(t),Oo=In(Wn);Oo!==null&&!(Oo.expirationTime>t&&cF());){var o=Oo.callback;if(typeof o=="function"){Oo.callback=null,za=Oo.priorityLevel;var n=o(Oo.expirationTime<=t);if(t=Jt.unstable_now(),typeof n=="function"){Oo.callback=n,eu(t),e=!0;break t}Oo===In(Wn)&&tu(Wn),eu(t)}else tu(Wn);Oo=In(Wn)}if(Oo!==null)e=!0;else{var r=In(vr);r!==null&&dm(um,r.startTime-t),e=!1}}break e}finally{Oo=null,za=a,cm=!1}e=void 0}}finally{e?ui():di=!1}}}var ui;typeof oF=="function"?ui=function(){oF(sm)}:typeof MessageChannel<"u"?(im=new MessageChannel,nF=im.port2,im.port1.onmessage=sm,ui=function(){nF.postMessage(null)}):ui=function(){rF(sm,0)};var im,nF;function dm(t,e){ec=rF(function(){t(Jt.unstable_now())},e)}Jt.unstable_IdlePriority=5;Jt.unstable_ImmediatePriority=1;Jt.unstable_LowPriority=4;Jt.unstable_NormalPriority=3;Jt.unstable_Profiling=null;Jt.unstable_UserBlockingPriority=2;Jt.unstable_cancelCallback=function(t){t.callback=null};Jt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):iF=0<t?Math.floor(1e3/t):5};Jt.unstable_getCurrentPriorityLevel=function(){return za};Jt.unstable_next=function(t){switch(za){case 1:case 2:case 3:var e=3;break;default:e=za}var a=za;za=e;try{return t()}finally{za=a}};Jt.unstable_requestPaint=function(){fm=!0};Jt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=za;za=t;try{return e()}finally{za=a}};Jt.unstable_scheduleCallback=function(t,e,a){var o=Jt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Q_++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,lm(vr,t),In(Wn)===null&&t===In(vr)&&($l?(sF(ec),ec=-1):$l=!0,dm(um,a-o))):(t.sortIndex=n,lm(Wn,t),jl||cm||(jl=!0,di||(di=!0,ui()))),t};Jt.unstable_shouldYield=cF;Jt.unstable_wrapCallback=function(t){var e=za;return function(){var a=za;za=e;try{return t.apply(this,arguments)}finally{za=a}}}});var dF=Sr((oP,uF)=>{"use strict";st();uF.exports=fF()});var mF=Sr(Ha=>{"use strict";st();var j_=jo();function hF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yr(){}var Ka={d:{f:yr,r:function(){throw Error(hF(522))},D:yr,C:yr,L:yr,m:yr,X:yr,S:yr,M:yr},p:0,findDOMNode:null},$_=Symbol.for("react.portal"),eb=Symbol.for("react.recoverable"),pF=Symbol.for("react.optimistic_key");function tb(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$_,key:o==null?null:o===pF?pF:""+o,children:t,containerInfo:e,implementation:a}}var tc=j_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function au(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ha.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ka;Ha.browser=function(t){return{$$typeof:eb,_reason:t}};Ha.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(hF(299));return tb(t,e,null,a)};Ha.flushSync=function(t){var e=tc.T,a=Ka.p;try{if(tc.T=null,Ka.p=2,t)return t()}finally{tc.T=e,Ka.p=a,Ka.d.f()}};Ha.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ka.d.C(t,e))};Ha.prefetchDNS=function(t){typeof t=="string"&&Ka.d.D(t)};Ha.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=au(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ka.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ka.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ha.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=au(e.as,e.crossOrigin);Ka.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Ka.d.M(t)};Ha.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=au(a,e.crossOrigin);Ka.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ha.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=au(e.as,e.crossOrigin);Ka.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Ka.d.m(t)};Ha.requestFormReset=function(t){Ka.d.r(t)};Ha.unstable_batchedUpdates=function(t,e){return t(e)};Ha.useFormState=function(t,e,a){return tc.H.useFormState(t,e,a)};Ha.useFormStatus=function(){return tc.H.useHostTransitionStatus()};Ha.version="19.3.0"});var gF=Sr((iP,xF)=>{"use strict";st();function IF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IF)}catch(t){console.error(t)}}IF(),xF.exports=mF()});var nC=Sr(kd=>{"use strict";st();var ga=dF(),ov=jo(),ab=gF();function se(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function nv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function FF(t){if(Vc(t)!==t)throw Error(se(188))}function ob(t){var e=t.alternate;if(!e){if(e=Vc(t),e===null)throw Error(se(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return FF(n),t;if(r===o)return FF(n),e;r=r.sibling}throw Error(se(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(se(189))}}if(a.alternate!==o)throw Error(se(190))}if(a.tag!==3)throw Error(se(188));return a.stateNode.current===a?t:e}function iv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=iv(t),e!==null)return e;t=t.sibling}return null}function po(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&po(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function Os(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function SF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function lv(t){var e=[null,null],a=Os(t);return a===null||cv(e,t,a.child,{foundSelf:!1}),e}function cv(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&cv(t,e,a.child,o))return!0;a=a.sibling}return!1}function xa(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(se(559))}}var Fi=null,qm=null;function nb(t,e,a){return t===a?!0:t===e?(Fi=t,!0):!1}function rb(t,e,a){return t===a?(qm=t,!1):t===e?(qm!==null&&(Fi=t),!0):!1}function vF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Wm(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var Vt=Object.assign,sb=Symbol.for("react.element"),ou=Symbol.for("react.transitional.element"),lc=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),Xm=Symbol.for("react.profiler"),uv=Symbol.for("react.consumer"),yn=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Ym=Symbol.for("react.suspense"),Zm=Symbol.for("react.suspense_list"),a0=Symbol.for("react.memo"),br=Symbol.for("react.lazy");Symbol.for("react.scope");var Km=Symbol.for("react.activity"),ib=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var lb=Symbol.for("react.memo_cache_sentinel"),Jm=Symbol.for("react.view_transition"),cb=Symbol.for("react.recoverable"),yF=Symbol.iterator;function ac(t){return t===null||typeof t!="object"?null:(t=yF&&t[yF]||t["@@iterator"],typeof t=="function"?t:null)}var fb=Symbol.for("react.client.reference");function Qm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fb?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Xm:return"Profiler";case fv:return"StrictMode";case Ym:return"Suspense";case Zm:return"SuspenseList";case Km:return"Activity";case Jm:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case lc:return"Portal";case yn:return t.displayName||"Context";case uv:return(t._context.displayName||"Context")+".Consumer";case t0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case a0:return e=t.displayName||null,e!==null?e:Qm(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return Qm(t(e))}catch{}}return null}var cc=Array.isArray,rt=ov.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Et=ab.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bs={pending:!1,data:null,method:null,action:null},jm=[],vi=-1;function wn(t){return{current:t}}function La(t){0>vi||(t.current=jm[vi],jm[vi]=null,vi--)}function Zt(t,e){vi++,jm[vi]=t.current,t.current=e}var bn=wn(null),bc=wn(null),Br=wn(null),Gu=wn(null);function qu(t,e){switch(Zt(Br,e),Zt(bc,t),Zt(bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?US(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=US(e),t=LM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}La(bn),Zt(bn,t)}function Hi(){La(bn),La(bc),La(Br)}function $m(t){var e=t.memoizedState;e!==null&&(Qi._currentValue=e.memoizedState,Zt(Gu,t)),e=bn.current;var a=LM(e,t.type);e!==a&&(Zt(bc,t),Zt(bn,a))}function Wu(t){bc.current===t&&(La(bn),La(bc)),Gu.current===t&&(La(Gu),Qi._currentValue=bs)}var pm,MF;function Cr(t){if(pm===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);pm=e&&e[1]||"",MF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pm+t+MF}var hm=!1;function mm(t,e){if(!t||hm)return"";hm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(I){var f=I}Reflect.construct(t,[],h)}else{try{h.call()}catch(I){f=I}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(I){f=I}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(I){if(I&&f&&typeof I.stack=="string")return[I.stack,f.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var u=`
`+l[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=n);break}}}finally{hm=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Cr(a):""}function ub(t,e){switch(t.tag){case 26:case 27:case 5:return Cr(t.type);case 16:return Cr("Lazy");case 13:return t.child!==e&&e!==null?Cr("Suspense Fallback"):Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 15:return mm(t.type,!1);case 11:return mm(t.type.render,!1);case 1:return mm(t.type,!0);case 31:return Cr("Activity");case 30:return Cr("ViewTransition");default:return""}}function CF(t){try{var e="",a=null;do e+=ub(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var eI=Object.prototype.hasOwnProperty,o0=ga.unstable_scheduleCallback,Im=ga.unstable_cancelCallback,db=ga.unstable_shouldYield,pb=ga.unstable_requestPaint,_o=ga.unstable_now,hb=ga.unstable_getCurrentPriorityLevel,dv=ga.unstable_ImmediatePriority,pv=ga.unstable_UserBlockingPriority,Xu=ga.unstable_NormalPriority,mb=ga.unstable_LowPriority,hv=ga.unstable_IdlePriority,Ib=ga.log,xb=ga.unstable_setDisableYieldValue,Gc=null,bo=null;function wr(t){if(typeof Ib=="function"&&xb(t),bo&&typeof bo.setStrictMode=="function")try{bo.setStrictMode(Gc,t)}catch{}}var To=Math.clz32?Math.clz32:Sb,gb=Math.log,Fb=Math.LN2;function Sb(t){return t>>>=0,t===0?32:31-(gb(t)/Fb|0)|0}var nu=256,ru=262144,su=4194304;function vs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gd(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=vs(o):(s&=i,s!==0?n=vs(s):a||(a=i&~t,a!==0&&(n=vs(a))))):(i=o&~r,i!==0?n=vs(i):s!==0?n=vs(s):a||(a=o&~t,a!==0&&(n=vs(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function qc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function mv(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-To(a),n=1<<o;e|=t[o],a&=~n}return e}function vb(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(){var t=su;return su<<=1,!(su&62914560)&&(su=4194304),t}function xm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Wc(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yb(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var u=31-To(a),h=1<<u;i[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var d=f[u];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&xv(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function xv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-To(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function gv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-To(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function Fv(t,e){var a=e&-e;return a=a&42?1:n0(a),a&(t.suspendedLanes|e)?0:a}function n0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function r0(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Sv(){var t=Et.p;return t!==0?t:(t=window.event,t===void 0?32:tC(t.type))}function _F(t,e){var a=Et.p;try{return Et.p=t,e()}finally{Et.p=a}}var nr=Math.random().toString(36).slice(2),Ra="__reactFiber$"+nr,ho="__reactProps$"+nr,el="__reactContainer$"+nr,bF="__reactEvents$"+nr,Mb="__reactListeners$"+nr,Cb="__reactHandles$"+nr,TF="__reactResources$"+nr,Xc="__reactMarker$"+nr,Yu="__reactLoad$"+nr;function Fd(t){delete t[Ra],delete t[ho],delete t[Mb],delete t[Cb]}function Cs(t){var e;if(e=t[Ra])return e;for(var a=t.parentNode;a;){if(e=a[el]||a[Ra]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=qS(t);t!==null;){if(a=t[Ra])return a;t=qS(t)}return e}t=a,a=t.parentNode}return null}function tl(t){if(t=t[Ra]||t[el]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function fc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(se(33))}function Ri(t){var e=t[TF];return e||(e=t[TF]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function _a(t){t[Xc]=!0}function vv(t){t[Yu]=void 0}var yv=new Set,Mv={};function zs(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(Mv[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var _b=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),AF={},wF={};function bb(t){return eI.call(wF,t)?!0:eI.call(AF,t)?!1:_b.test(t)?wF[t]=!0:(AF[t]=!0,!1)}var At=!1;function EF(){var t=At;return At=!1,t}function Cu(t,e,a){if(bb(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function iu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function Xn(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function vo(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tb(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tI(t){if(!t._valueTracker){var e=Cv(t)?"checked":"value";t._valueTracker=Tb(t,e,""+t[e])}}function _v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=Cv(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var Ab=/[\n"\\]/g;function qo(t){return t.replace(Ab,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function aI(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+vo(e)):t.value!==""+vo(e)&&(t.value=""+vo(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?gm(t,vo(t.value)):gm(t,vo(e)):a!=null?gm(t,vo(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+vo(i):t.removeAttribute("name")}function bv(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){tI(t);return}a=a!=null?""+vo(a):"",e=e!=null?""+vo(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),tI(t)}function gm(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Di(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vo(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Tv(t,e,a){if(e!=null&&(e=""+vo(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+vo(a):""}function Av(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(se(92));if(cc(o)){if(1<o.length)throw Error(se(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=vo(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),tI(t)}function Gi(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var wb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function RF(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||wb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function wv(t,e,a){if(e!=null&&typeof e!="object")throw Error(se(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",At=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(RF(t,n,o),At=!0)}else for(var r in e)e.hasOwnProperty(r)&&RF(t,r,e[r])}function s0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(t){return Rb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Mn(){}var oI=null;function i0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yi=null,Li=null;function DF(t){var e=tl(t);if(e&&(t=e.stateNode)){var a=t[ho]||null;e:switch(t=e.stateNode,e.type){case"input":if(aI(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qo(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[ho]||null;if(!n)throw Error(se(90));aI(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&_v(o)}break e;case"textarea":Tv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Di(t,!!a.multiple,e,!1)}}}var Fm=!1;function Ev(t,e,a){if(Fm)return t(e,a);Fm=!0;try{var o=t(e);return o}finally{if(Fm=!1,(yi!==null||Li!==null)&&(Ld(),yi&&(e=yi,t=Li,Li=yi=null,DF(e),t)))for(e=0;e<t.length;e++)DF(t[e])}}function Tc(t,e){var a=t.stateNode;if(a===null)return null;var o=a[ho]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(se(231,e,typeof a));return a}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nI=!1;if(jn)try{pi={},Object.defineProperty(pi,"passive",{get:function(){nI=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{nI=!1}var pi,Er=null,l0=null,bu=null;function Rv(){if(bu)return bu;var t,e=l0,a=e.length,o,n="value"in Er?Er.value:Er.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return bu=n.slice(t,1<o?1-o:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function LF(){return!1}function $a(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lu:LF,this.isPropagationStopped=LF,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=$a(Jr),Yc=Vt({},Jr,{view:0,detail:0}),Db=$a(Yc),Sm,vm,oc,vd=Vt({},Yc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oc&&(oc&&t.type==="mousemove"?(Sm=t.screenX-oc.screenX,vm=t.screenY-oc.screenY):vm=Sm=0,oc=t),Sm)},movementY:function(t){return"movementY"in t?t.movementY:vm}}),PF=$a(vd),Lb=Vt({},vd,{dataTransfer:0}),Pb=$a(Lb),Bb=Vt({},Yc,{relatedTarget:0}),ym=$a(Bb),Ub=Vt({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),kb=$a(Ub),Nb=Vt({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ob=$a(Nb),zb=Vt({},Jr,{data:0}),BF=$a(zb),Hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gb[t])?!!e[t]:!1}function c0(){return qb}var Wb=Vt({},Yc,{key:function(t){if(t.key){var e=Hb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xb=$a(Wb),Yb=Vt({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),UF=$a(Yb),Zb=Vt({},Jr,{submitter:0}),Kb=$a(Zb),Jb=Vt({},Yc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),Qb=$a(Jb),jb=Vt({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$b=$a(jb),eT=Vt({},vd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=$a(eT),aT=Vt({},Jr,{newState:0,oldState:0,source:0}),oT=$a(aT),nT=[9,13,27,32],f0=jn&&"CompositionEvent"in window,pc=null;jn&&"documentMode"in document&&(pc=document.documentMode);var rT=jn&&"TextEvent"in window&&!pc,Dv=jn&&(!f0||pc&&8<pc&&11>=pc),kF=" ",NF=!1;function Lv(t,e){switch(t){case"keyup":return nT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function sT(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(NF=!0,kF);case"textInput":return t=e.data,t===kF&&NF?null:t;default:return null}}function iT(t,e){if(Mi)return t==="compositionend"||!f0&&Lv(t,e)?(t=Rv(),bu=l0=Er=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dv&&e.locale!=="ko"?null:e.data;default:return null}}var lT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function OF(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lT[t.type]:e==="textarea"}function Bv(t,e,a,o){yi?Li?Li.push(o):Li=[o]:yi=o,e=md(e,"onChange"),0<e.length&&(a=new Sd("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var hc=null,Ac=null;function cT(t){EM(t,0)}function yd(t){var e=fc(t);if(_v(e))return t}function zF(t,e){if(t==="change")return e}var Uv=!1;jn&&(jn?(fu="oninput"in document,fu||(Mm=document.createElement("div"),Mm.setAttribute("oninput","return;"),fu=typeof Mm.oninput=="function"),cu=fu):cu=!1,Uv=cu&&(!document.documentMode||9<document.documentMode));var cu,fu,Mm;function HF(){hc&&(hc.detachEvent("onpropertychange",kv),Ac=hc=null)}function kv(t){if(t.propertyName==="value"&&yd(Ac)){var e=[];Bv(e,Ac,t,i0(t)),Ev(cT,e)}}function fT(t,e,a){t==="focusin"?(HF(),hc=e,Ac=a,hc.attachEvent("onpropertychange",kv)):t==="focusout"&&HF()}function uT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yd(Ac)}function dT(t,e){if(t==="click")return yd(e)}function pT(t,e){if(t==="input"||t==="change")return yd(e)}function hT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wo=typeof Object.is=="function"?Object.is:hT;function wc(t,e){if(wo(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!eI.call(e,n)||!wo(t[n],e[n]))return!1}return!0}function rI(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function VF(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function GF(t,e){var a=VF(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=VF(a)}}function Nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rI(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=rI(t.document)}return e}function u0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var mT=jn&&"documentMode"in document&&11>=document.documentMode,Ci=null,sI=null,mc=null,iI=!1;function qF(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iI||Ci==null||Ci!==rI(o)||(o=Ci,"selectionStart"in o&&u0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mc&&wc(mc,o)||(mc=o,o=md(sI,"onSelect"),0<o.length&&(e=new Sd("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Ci)))}function Fs(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var _i={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},Cm={},zv={};jn&&(zv=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Hs(t){if(Cm[t])return Cm[t];if(!_i[t])return t;var e=_i[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in zv)return Cm[t]=e[a];return t}var Hv=Hs("animationend"),Vv=Hs("animationiteration"),Gv=Hs("animationstart"),IT=Hs("transitionrun"),xT=Hs("transitionstart"),gT=Hs("transitioncancel"),qv=Hs("transitionend"),Wv=new Map,lI="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lI.push("scrollEnd");function nn(t,e){Wv.set(t,e),zs(e,[t])}var FT=0;function $n(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=on.identifierPrefix;var a=FT++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function WF(t){if(t==null||typeof t=="string")return t;var e=null,a=zi;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function rr(t,e){return t=WF(t),e=WF(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ho=[],bi=0,d0=0;function Md(){for(var t=bi,e=d0=bi=0;e<t;){var a=Ho[e];Ho[e++]=null;var o=Ho[e];Ho[e++]=null;var n=Ho[e];Ho[e++]=null;var r=Ho[e];if(Ho[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&Xv(a,n,r)}}function Cd(t,e,a,o){Ho[bi++]=t,Ho[bi++]=e,Ho[bi++]=a,Ho[bi++]=o,d0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function p0(t,e,a,o){return Cd(t,e,a,o),Ku(t)}function Vs(t,e){return Cd(t,null,null,e),Ku(t)}function Xv(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-To(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function Ku(t){if(50<_c)throw _c=0,ku=null,Error(se(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ti={};function ST(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fo(t,e,a,o){return new ST(t,e,a,o)}function h0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jn(t,e){var a=t.alternate;return a===null?(a=fo(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yv(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Au(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")h0(o)&&(s=1);else if(typeof o=="string")s=XA(t,a,bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case Km:return t=fo(31,a,e,n),t.elementType=Km,t.lanes=r,t;case Si:return Ts(a.children,n,r,e);case fv:s=8,n|=24;break;case Xm:return t=fo(12,a,e,n|2),t.elementType=Xm,t.lanes=r,t;case Ym:return t=fo(13,a,e,n),t.elementType=Ym,t.lanes=r,t;case Zm:return t=fo(19,a,e,n),t.elementType=Zm,t.lanes=r,t;case ib:case Jm:return t=n|32,t=fo(30,a,e,t),t.elementType=Jm,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case yn:s=10;break e;case uv:s=9;break e;case t0:s=11;break e;case a0:s=14;break e;case br:s=16,o=null;break e}s=29,a=Error(se(130,t===null?"null":typeof t,"")),o=null}return e=fo(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function Ts(t,e,a,o){return t=fo(7,t,o,e),t.lanes=a,t}function _m(t,e,a){return t=fo(6,t,null,e),t.lanes=a,t}function Zv(t){var e=fo(18,null,null,0);return e.stateNode=t,e}function bm(t,e,a){return e=fo(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var XF=new WeakMap;function Wo(t,e){if(typeof t=="object"&&t!==null){var a=XF.get(t);return a!==void 0?a:(e={value:t,source:e,stack:CF(e)},XF.set(t,e),e)}return{value:t,source:e,stack:CF(e)}}var Ai=[],wi=0,Ju=null,Ec=0,Vo=[],Go=0,Wr=null,Cn=1,_n="";function Zn(t,e){Ai[wi++]=Ec,Ai[wi++]=Ju,Ju=t,Ec=e}function Kv(t,e,a){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=Wr,Wr=t;var o=Cn;t=_n;var n=32-To(o)-1;o&=~(1<<n),a+=1;var r=32-To(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Cn=1<<32-To(e)+n|a<<n|o,_n=r+t}else Cn=1<<r|a<<n|o,_n=t}function _d(t){t.return!==null&&(Zn(t,1),Kv(t,1,0))}function m0(t){for(;t===Ju;)Ju=Ai[--wi],Ai[wi]=null,Ec=Ai[--wi],Ai[wi]=null;for(;t===Wr;)Wr=Vo[--Go],Vo[Go]=null,_n=Vo[--Go],Vo[Go]=null,Cn=Vo[--Go],Vo[Go]=null}function Jv(t,e){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=Wr,Cn=e.id,_n=e.overflow,Wr=t}var ba=null,Yt=null,Ft=!1,Ur=null,Xo=!1,cI=Error(se(519));function Xr(t){var e=Error(se(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rc(Wo(e,t)),cI}function YF(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Ra]=t,e[ho]=o,a){case"dialog":vt("cancel",e),vt("close",e);break;case"iframe":case"object":case"embed":vt("load",e);break;case"video":case"audio":for(a=0;a<Bc.length;a++)vt(Bc[a],e);break;case"source":vt("error",e);break;case"img":case"image":case"link":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"input":vt("invalid",e),bv(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",e);break;case"textarea":vt("invalid",e),Av(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||DM(e.textContent,a)?(o.popover!=null&&(vt("beforetoggle",e),vt("toggle",e)),o.onScroll!=null&&vt("scroll",e),o.onScrollEnd!=null&&vt("scrollend",e),o.onClick!=null&&(e.onclick=Mn),e=!0):e=!1,e||Xr(t,!0)}function Qu(t){for(ba=t.return;ba;)switch(ba.tag){case 5:case 31:case 13:Xo=!1;return;case 27:case 3:Xo=!0;return;default:ba=ba.return}}function hi(t){if(t!==ba)return!1;if(!Ft)return Qu(t),Ft=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||YI(t.type,t.memoizedProps)),a=!a),a&&Yt&&Xr(t),Qu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));Yt=GS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));Yt=GS(t)}else e===27?(e=Yt,Qr(t.type)?(t=QI,QI=null,Yt=t):Yt=e):Yt=ba?Yo(t.stateNode.nextSibling):null;return!0}function Rs(){Yt=ba=null,Ft=!1}function Tm(){var t=Ur;return t!==null&&(lo===null?lo=t:lo.push.apply(lo,t),Ur=null),t}function Rc(t){Ur===null?Ur=[t]:Ur.push(t)}var fI=wn(null),Gs=null,Kn=null;function Rr(t,e,a){Zt(fI,e._currentValue),e._currentValue=a}function Qn(t){t._currentValue=fI.current,La(fI)}function wu(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function uI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),wu(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(se(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),wu(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),wu(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Ds(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(se(387));if(s=s.memoizedProps,s!==null){var i=n.type;wo(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===Gu.current){if(s=n.alternate,s===null)throw Error(se(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Qi):t=[Qi])}n=n.return}return t!==null&&uI(e,t,a,o),e.flags|=262144,t!==null}function ju(t){for(t=t.firstContext;t!==null;){if(!wo(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Gs=t,Kn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Da(t){return Qv(Gs,t)}function uu(t,e){return Gs===null&&Ls(t),Qv(t,e)}function Qv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Kn===null){if(t===null)throw Error(se(308));Kn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Kn=Kn.next=e;return a}var vT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},yT=ga.unstable_scheduleCallback,MT=ga.unstable_NormalPriority,ca={$$typeof:yn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function I0(){return{controller:new vT,data:new Map,refCount:0}}function Zc(t){t.refCount--,t.refCount===0&&yT(MT,function(){t.controller.abort()})}function ZF(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var uc=null;function CT(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Ic=null,dI=0,Ps=0,Pi=null;function _T(t,e){if(Ic===null){var a=Ic=[];dI=0,Ps=q0(),Pi={status:"pending",value:void 0,then:function(o){a.push(o)}}}return dI++,e.then(KF,KF),e}function KF(){if(--dI===0&&(uc=null,Ic!==null)){Pi!==null&&(Pi.status="fulfilled");var t=Ic;Ic=null,Ps=0,Pi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function bT(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var JF=rt.S;rt.S=function(t,e){if(mM=_o(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&_T(t,e),uc!==null)for(var a=Zi;a!==null;)ZF(a,uc),a=a.next;if(a=t.types,a!==null){for(var o=Zi;o!==null;)ZF(o,a),o=o.next;if(Ps!==0){o=uc,o===null&&(o=uc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}JF!==null&&JF(t,e)};var As=wn(null);function x0(){var t=As.current;return t!==null?t:Ht.pooledCache}function Eu(t,e){e===null?Zt(As,As.current):Zt(As,e.pool)}function jv(){var t=x0();return t===null?null:{parent:ca._currentValue,pool:t}}var al=Error(se(460)),g0=Error(se(474)),bd=Error(se(542)),$u={then:function(){}};function QF(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $v(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Mn,Mn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$F(t),t===void 0&&!("reason"in e)?Error(se(600)):t;default:if(typeof e.status=="string")e.then(Mn,Mn);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(se(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$F(t),t}throw ws=e,al}}function ys(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,al):a}}var ws=null;function jF(){if(ws===null)throw Error(se(459));var t=ws;return ws=null,t}function $F(t){if(t===al||t===bd)throw Error(se(483))}var Bi=null,Dc=0;function du(t){var e=Dc;return Dc+=1,Bi===null&&(Bi=[]),$v(Bi,t,e)}function Mr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pu(t,e){throw e.$$typeof===sb?Error(se(525)):(t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ey(t){function e(p,x){if(t){var v=p.deletions;v===null?(p.deletions=[x],p.flags|=16):v.push(x)}}function a(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function o(p){for(var x=new Map;p!==null;)p.key===null?x.set(p.index,p):x.set(p.key,p),p=p.sibling;return x}function n(p,x){return p=Jn(p,x),p.index=0,p.sibling=null,p}function r(p,x,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<x?(p.flags|=2,x):v):(p.flags|=134217730,x)):(p.flags|=1048576,x)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,x,v,g){return x===null||x.tag!==6?(x=_m(v,p.mode,g),x.return=p,x):(x=n(x,v),x.return=p,x)}function l(p,x,v,g){var C=v.type;return C===Si?(p=u(p,x,v.props.children,g,v.key),Mr(p,v),p):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&ys(C)===x.type)?(x=n(x,v.props),Mr(x,v),x.return=p,x):(x=Au(v.type,v.key,v.props,null,p.mode,g),Mr(x,v),x.return=p,x)}function c(p,x,v,g){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=bm(v,p.mode,g),x.return=p,x):(x=n(x,v.children||[]),x.return=p,x)}function u(p,x,v,g,C){return x===null||x.tag!==7?(x=Ts(v,p.mode,g,C),x.return=p,x):(x=n(x,v),x.return=p,x)}function h(p,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=_m(""+x,p.mode,v),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ou:return v=Au(x.type,x.key,x.props,null,p.mode,v),Mr(v,x),v.return=p,v;case lc:return x=bm(x,p.mode,v),x.return=p,x;case br:return x=ys(x),h(p,x,v)}if(cc(x)||ac(x))return x=Ts(x,p.mode,v,null),x.return=p,x;if(typeof x.then=="function")return h(p,du(x),v);if(x.$$typeof===yn)return h(p,uu(p,x),v);pu(p,x)}return null}function f(p,x,v,g){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:i(p,x,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ou:return v.key===C?l(p,x,v,g):null;case lc:return v.key===C?c(p,x,v,g):null;case br:return v=ys(v),f(p,x,v,g)}if(cc(v)||ac(v))return C!==null?null:u(p,x,v,g,null);if(typeof v.then=="function")return f(p,x,du(v),g);if(v.$$typeof===yn)return f(p,x,uu(p,v),g);pu(p,v)}return null}function d(p,x,v,g,C){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return p=p.get(v)||null,i(x,p,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ou:return p=p.get(g.key===null?v:g.key)||null,l(x,p,g,C);case lc:return p=p.get(g.key===null?v:g.key)||null,c(x,p,g,C);case br:return g=ys(g),d(p,x,v,g,C)}if(cc(g)||ac(g))return p=p.get(v)||null,u(x,p,g,C,null);if(typeof g.then=="function")return d(p,x,v,du(g),C);if(g.$$typeof===yn)return d(p,x,v,uu(x,g),C);pu(x,g)}return null}function I(p,x,v,g){for(var C=null,b=null,w=x,S=x=0,T=null;w!==null&&S<v.length;S++){w.index>S?(T=w,w=null):T=w.sibling;var A=f(p,w,v[S],g);if(A===null){w===null&&(w=T);break}t&&w&&A.alternate===null&&e(p,w),x=r(A,x,S),b===null?C=A:b.sibling=A,b=A,w=T}if(S===v.length)return a(p,w),Ft&&Zn(p,S),C;if(w===null){for(;S<v.length;S++)w=h(p,v[S],g),w!==null&&(x=r(w,x,S),b===null?C=w:b.sibling=w,b=w);return Ft&&Zn(p,S),C}for(w=o(w);S<v.length;S++)T=d(w,p,S,v[S],g),T!==null&&(t&&(A=T.alternate,A!==null&&w.delete(A.key===null?S:A.key)),x=r(T,x,S),b===null?C=T:b.sibling=T,b=T);return t&&w.forEach(function(D){return e(p,D)}),Ft&&Zn(p,S),C}function y(p,x,v,g){if(v==null)throw Error(se(151));for(var C=null,b=null,w=x,S=x=0,T=null,A=v.next();w!==null&&!A.done;S++,A=v.next()){w.index>S?(T=w,w=null):T=w.sibling;var D=f(p,w,A.value,g);if(D===null){w===null&&(w=T);break}t&&w&&D.alternate===null&&e(p,w),x=r(D,x,S),b===null?C=D:b.sibling=D,b=D,w=T}if(A.done)return a(p,w),Ft&&Zn(p,S),C;if(w===null){for(;!A.done;S++,A=v.next())A=h(p,A.value,g),A!==null&&(x=r(A,x,S),b===null?C=A:b.sibling=A,b=A);return Ft&&Zn(p,S),C}for(w=o(w);!A.done;S++,A=v.next())A=d(w,p,S,A.value,g),A!==null&&(t&&(T=A.alternate,T!==null&&w.delete(T.key===null?S:T.key)),x=r(A,x,S),b===null?C=A:b.sibling=A,b=A);return t&&w.forEach(function(H){return e(p,H)}),Ft&&Zn(p,S),C}function m(p,x,v,g){if(typeof v=="object"&&v!==null&&v.type===Si&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ou:e:{for(var C=v.key;x!==null;){if(x.key===C){if(C=v.type,C===Si){if(x.tag===7){a(p,x.sibling),g=n(x,v.props.children),Mr(g,v),g.return=p,p=g;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&ys(C)===x.type){a(p,x.sibling),g=n(x,v.props),Mr(g,v),g.return=p,p=g;break e}a(p,x);break}else e(p,x);x=x.sibling}v.type===Si?(g=Ts(v.props.children,p.mode,g,v.key),Mr(g,v),g.return=p,p=g):(g=Au(v.type,v.key,v.props,null,p.mode,g),Mr(g,v),g.return=p,p=g)}return s(p);case lc:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){a(p,x.sibling),g=n(x,v.children||[]),g.return=p,p=g;break e}else{a(p,x);break}else e(p,x);x=x.sibling}g=bm(v,p.mode,g),g.return=p,p=g}return s(p);case br:return v=ys(v),m(p,x,v,g)}if(cc(v))return I(p,x,v,g);if(ac(v)){if(C=ac(v),typeof C!="function")throw Error(se(150));return v=C.call(v),y(p,x,v,g)}if(typeof v.then=="function")return m(p,x,du(v),g);if(v.$$typeof===yn)return m(p,x,uu(p,v),g);pu(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,x!==null&&x.tag===6?(a(p,x.sibling),g=n(x,v),g.return=p,p=g):(a(p,x),g=_m(v,p.mode,g),g.return=p,p=g),s(p)):a(p,x)}return function(p,x,v,g){try{Dc=0;var C=m(p,x,v,g);return Bi=null,C}catch(w){if(w===al||w===bd)throw w;var b=fo(29,w,null,p.mode);return b.lanes=g,b.return=p,b}finally{}}}var Bs=ey(!0),ty=ey(!1),Tr=!1;function F0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,wt&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=Ku(t),Xv(t,null,a),e}return Cd(t,o,e,a),Ku(t)}function xc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,gv(t,a)}}function Am(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var hI=!1;function gc(){if(hI){var t=Pi;if(t!==null)throw t}}function Fc(t,e,a,o){hI=!1;var n=t.updateQueue;Tr=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==s&&(i===null?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,u=c=l=null,i=r;do{var f=i.lane&-536870913,d=f!==i.lane;if(d?(Mt&f)===f:(o&f)===f){f!==0&&f===Ps&&(hI=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var I=t,y=i;f=e;var m=a;switch(y.tag){case 1:if(I=y.payload,typeof I=="function"){h=I.call(m,h,f);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=y.payload,f=typeof I=="function"?I.call(m,h,f):I,f==null)break e;h=Vt({},h,f);break e;case 2:Tr=!0}}f=i.callback,f!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[f]:d.push(f))}else d={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,s|=f;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);u===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=u,r===null&&(n.shared.lanes=0),Kr|=s,t.lanes=s,t.memoizedState=h}}function ay(t,e){if(typeof t!="function")throw Error(se(191,t));t.call(e)}function oy(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ay(a[t],e)}var Yr=wn(null),ed=wn(0);function eS(t,e){t=or,Zt(ed,t),Zt(Yr,e),or=t|e.baseLanes}function mI(){Zt(ed,or),Zt(Yr,Yr.current)}function S0(){or=ed.current,La(Yr),La(ed)}var Ua=wn(null),Va=null;function Or(t){var e=t.alternate;Zt(Pa,Pa.current&1),Zt(Ua,t),Va===null&&(e===null||Yr.current!==null||e.memoizedState!==null)&&(Va=t)}function II(t){Zt(Pa,Pa.current),Zt(Ua,t),Va===null&&(Va=t)}function ny(t){t.tag===22?(Zt(Pa,Pa.current),Zt(Ua,t),Va===null&&(Va=t)):zr()}function zr(){Zt(Pa,Pa.current),Zt(Ua,Ua.current)}function yo(t){La(Ua),Va===t&&(Va=null),La(Pa)}var Pa=wn(0);function Lc(t,e){Zt(Ua,Ua.current),Zt(Pa,e)}function v0(t){La(Pa),La(Ua),Va===t&&(Va=null)}function td(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||JI(a)||Z0(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var er=0,mt=null,Ot=null,la=null,ad=!1,Ui=!1,Us=!1,od=0,Pc=0,ki=null,TT=0;function ta(){throw Error(se(321))}function y0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!wo(t[a],e[a]))return!1;return!0}function M0(t,e,a,o,n,r){return er=r,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rt.H=t===null||t.memoizedState===null?By:Uy,Us=!1,r=a(o,n),Us=!1,Ui&&(r=sy(e,a,o,n)),ry(t),r}function ry(t){rt.H=nd;var e=Ot!==null&&Ot.next!==null;if(er=0,la=Ot=mt=null,ad=!1,Pc=0,ki=null,e)throw Error(se(300));t===null||fa||(t=t.dependencies,t!==null&&ju(t)&&(fa=!0))}function sy(t,e,a,o){mt=t;var n=0;do{if(Ui&&(ki=null),Pc=0,Ui=!1,25<=n)throw Error(se(301));if(n+=1,la=Ot=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}rt.H=BT,r=e(a,o)}while(Ui);return r}function AT(){var t=rt.H,e=t.useState()[0];return e=typeof e.then=="function"?Kc(e):e,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(mt.flags|=1024),e}function C0(){var t=od!==0;return od=0,t}function _0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function b0(t){if(ad){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ad=!1}er=0,la=Ot=mt=null,Ui=!1,Pc=od=0,ki=null}function ja(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return la===null?mt.memoizedState=la=t:la=la.next=t,la}function ra(){if(Ot===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=la===null?mt.memoizedState:la.next;if(e!==null)la=e,Ot=t;else{if(t===null)throw mt.alternate===null?Error(se(467)):Error(se(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},la===null?mt.memoizedState=la=t:la=la.next=t}return la}function Td(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kc(t){var e=Pc;return Pc+=1,ki===null&&(ki=[]),t=$v(ki,t,e),e=mt,(la===null?e.memoizedState:la.next)===null&&(e=e.alternate,rt.H=e===null||e.memoizedState===null?By:Uy),t}function Ad(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Kc(t);if(t.$$typeof===cb)return;if(t.$$typeof===yn)return Da(t)}throw Error(se(438,String(t)))}function T0(t){var e=null,a=mt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Td(),mt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=lb;return e.index++,a}function tr(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=ra();return A0(e,Ot,t)}function A0(t,e,a){var o=t.queue;if(o===null)throw Error(se(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Mt&h)===h:(er&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Ps&&(u=!0);else if((er&f)===f){c=c.next,f===Ps&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,mt.lanes|=f,Kr|=f;h=c.action,Us&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=f,s=r):l=l.next=f,mt.lanes|=h,Kr|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!wo(r,t.memoizedState)&&(fa=!0,u&&(a=Pi,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wm(t){var e=ra(),a=e.queue;if(a===null)throw Error(se(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);wo(r,e.memoizedState)||(fa=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function iy(t,e,a){var o=mt,n=ra(),r=Ft;if(r){if(a===void 0)throw Error(se(407));a=a()}else a=e();var s=!wo((Ot||n).memoizedState,a);if(s&&(n.memoizedState=a,fa=!0),n=n.queue,w0(fy.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||la!==null&&(la.memoizedState.tag&1)!==0,qi(t?9:8,{destroy:void 0},cy.bind(null,o,n,a,e),null),t){if(o.flags|=2048,Ht===null)throw Error(se(349));r||er&127||ly(o,e,a)}return a}function ly(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=mt.updateQueue,e===null?(e=Td(),mt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function cy(t,e,a,o){e.value=a,e.getSnapshot=o,uy(e)&&dy(t)}function fy(t,e,a){return a(function(){uy(e)&&dy(t)})}function uy(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!wo(t,a)}catch{return!0}}function dy(t){var e=Vs(t,2);e!==null&&uo(e,t,2)}function xI(t){var e=ja();if(typeof t=="function"){var a=t;if(t=a(),Us){wr(!0);try{a()}finally{wr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:t},e}function py(t,e,a,o){return t.baseState=a,A0(t,Ot,typeof o=="function"?o:tr)}function wT(t,e,a,o,n){if(Ed(t))throw Error(se(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};rt.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,hy(e,r)):(r.next=a.next,e.pending=a.next=r)}}function hy(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=rt.T,s={};s.types=r!==null?r.types:null,rt.T=s;try{var i=a(n,o),l=rt.S;l!==null&&l(s,i),tS(t,e,i)}catch(c){gI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),rt.T=r}}else try{r=a(n,o),tS(t,e,r)}catch(c){gI(t,e,c)}}function tS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){aS(t,e,o)},function(o){return gI(t,e,o)}):aS(t,e,a)}function aS(t,e,a){e.status="fulfilled",e.value=a,my(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,hy(t,a)))}function gI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,my(e),e=e.next;while(e!==o)}t.action=null}function my(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Iy(t,e){return e}function oS(t,e){if(Ft){var a=Ht.formState;if(a!==null){e:{var o=mt;if(Ft){if(Yt){t:{for(var n=Yt,r=Xo;n.nodeType!==8;){if(!r){n=null;break t}if(n=Yo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Yt=Yo(n.nextSibling),o=n.data==="F!";break e}}Xr(o)}o=!1}o&&(e=a[0])}}return a=ja(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iy,lastRenderedState:e},a.queue=o,a=Dy.bind(null,mt,o),o.dispatch=a,o=xI(!1),r=L0.bind(null,mt,!1,o.queue),o=ja(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=wT.bind(null,mt,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function nS(t){var e=ra();return xy(e,Ot,t)}function xy(t,e,a){if(e=A0(t,e,Iy)[0],t=Ru(tr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Kc(e)}catch(s){throw s===al?bd:s}else o=e;e=ra();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(mt.flags|=2048,qi(9,{destroy:void 0},ET.bind(null,n,a),null)),[o,r,t]}function ET(t,e){t.action=e}function rS(t){var e=ra(),a=Ot;if(a!==null)return xy(e,a,t);ra(),e=e.memoizedState,a=ra();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function qi(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=mt.updateQueue,e===null&&(e=Td(),mt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function gy(){return ra().memoizedState}function Du(t,e,a,o){var n=ja();mt.flags|=t,n.memoizedState=qi(1|e,{destroy:void 0},a,o===void 0?null:o)}function wd(t,e,a,o){var n=ra();o=o===void 0?null:o;var r=n.memoizedState.inst;Ot!==null&&o!==null&&y0(o,Ot.memoizedState.deps)?n.memoizedState=qi(e,r,a,o):(mt.flags|=t,n.memoizedState=qi(1|e,r,a,o))}function sS(t,e){Du(8390656,8,t,e)}function w0(t,e){wd(2048,8,t,e)}function RT(t){mt.flags|=4;var e=mt.updateQueue;if(e===null)e=Td(),mt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Fy(t){var e=ra().memoizedState;return RT({ref:e,nextImpl:t}),function(){if(wt&2)throw Error(se(440));return e.impl.apply(void 0,arguments)}}function Sy(t,e){return wd(4,2,t,e)}function vy(t,e){return wd(4,4,t,e)}function yy(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function My(t,e,a){a=a!=null?a.concat([t]):null,wd(4,4,yy.bind(null,e,t),a)}function E0(){}function Cy(t,e){var a=ra();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&y0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function _y(t,e){var a=ra();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&y0(e,o[1]))return o[0];if(o=t(),Us){wr(!0);try{t()}finally{wr(!1)}}return a.memoizedState=[o,e],o}function R0(t,e,a){return a===void 0||er&1073741824&&!(Mt&261930)?t.memoizedState=e:(t.memoizedState=a,t=xM(),mt.lanes|=t,Kr|=t,a)}function by(t,e,a,o){return wo(a,e)?a:Yr.current!==null?(t=R0(t,a,o),wo(t,e)||(fa=!0),t):!(er&106)||er&1073741824&&!(Mt&261930)?(fa=!0,t.memoizedState=a):(t=xM(),mt.lanes|=t,Kr|=t,e)}function Ty(t,e,a,o,n){var r=Et.p;Et.p=r!==0&&8>r?r:8;var s=rt.T,i={};i.types=s!==null?s.types:null,rt.T=i,L0(t,!1,e,a);try{var l=n(),c=rt.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=bT(l,o);Sc(t,e,u,Ao(t))}else Sc(t,e,o,Ao(t))}catch(h){Sc(t,e,{then:function(){},status:"rejected",reason:h},Ao())}finally{Et.p=r,s!==null&&i.types!==null&&(s.types=i.types),rt.T=s}}function DT(){}function FI(t,e,a,o){if(t.tag!==5)throw Error(se(476));var n=Ay(t).queue;Ty(t,n,e,bs,a===null?DT:function(){return wy(t),a(o)})}function Ay(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:bs,baseState:bs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:bs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function wy(t){var e=Ay(t);e.next===null&&(e=t.alternate.memoizedState),Sc(t,e.next.queue,{},Ao())}function D0(){return Da(Qi)}function Ey(){return ra().memoizedState}function Ry(){return ra().memoizedState}function LT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ao();t=kr(a);var o=Nr(e,t,a);o!==null&&(uo(o,e,a),xc(o,e,a)),e={cache:I0()},t.payload=e;return}e=e.return}}function PT(t,e,a){var o=Ao();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ed(t)?Ly(e,a):(a=p0(t,e,a,o),a!==null&&(uo(a,t,o),Py(a,e,o)))}function Dy(t,e,a){var o=Ao();Sc(t,e,a,o)}function Sc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ed(t))Ly(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,wo(i,s))return Cd(t,e,n,0),Ht===null&&Md(),!1}catch{}finally{}if(a=p0(t,e,n,o),a!==null)return uo(a,t,o),Py(a,e,o),!0}return!1}function L0(t,e,a,o){if(o={lane:2,revertLane:q0(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ed(t)){if(e)throw Error(se(479))}else e=p0(t,a,o,2),e!==null&&uo(e,t,2)}function Ed(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Ly(t,e){Ui=ad=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Py(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,gv(t,a)}}var nd={readContext:Da,use:Ad,useCallback:ta,useContext:ta,useEffect:ta,useImperativeHandle:ta,useLayoutEffect:ta,useInsertionEffect:ta,useMemo:ta,useReducer:ta,useRef:ta,useState:ta,useDebugValue:ta,useDeferredValue:ta,useTransition:ta,useSyncExternalStore:ta,useId:ta,useHostTransitionStatus:ta,useFormState:ta,useActionState:ta,useOptimistic:ta,useMemoCache:ta,useCacheRefresh:ta,useEffectEvent:ta},By={readContext:Da,use:Ad,useCallback:function(t,e){return ja().memoizedState=[t,e===void 0?null:e],t},useContext:Da,useEffect:sS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Du(4194308,4,yy.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Du(4194308,4,t,e)},useInsertionEffect:function(t,e){Du(4,2,t,e)},useMemo:function(t,e){var a=ja();e=e===void 0?null:e;var o=t();if(Us){wr(!0);try{t()}finally{wr(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=ja();if(a!==void 0){var n=a(e);if(Us){wr(!0);try{a(e)}finally{wr(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=PT.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var e=ja();return t={current:t},e.memoizedState=t},useState:function(t){t=xI(t);var e=t.queue,a=Dy.bind(null,mt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:E0,useDeferredValue:function(t,e){var a=ja();return R0(a,t,e)},useTransition:function(){var t=xI(!1);return t=Ty.bind(null,mt,t.queue,!0,!1),ja().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=mt,n=ja();if(Ft){if(a===void 0)throw Error(se(407));a=a()}else{if(a=e(),Ht===null)throw Error(se(349));Mt&127||ly(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,sS(fy.bind(null,o,r,t),[t]),o.flags|=2048,qi(9,{destroy:void 0},cy.bind(null,o,r,a,e),null),a},useId:function(){var t=ja(),e=Ht.identifierPrefix;if(Ft){var a=_n,o=Cn;a=(o&~(1<<32-To(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=od++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=TT++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:D0,useFormState:oS,useActionState:oS,useOptimistic:function(t){var e=ja();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=L0.bind(null,mt,!0,a),a.dispatch=e,[t,e]},useMemoCache:T0,useCacheRefresh:function(){return ja().memoizedState=LT.bind(null,mt)},useEffectEvent:function(t){var e=ja(),a={impl:t};return e.memoizedState=a,function(){if(wt&2)throw Error(se(440));return a.impl.apply(void 0,arguments)}}},Uy={readContext:Da,use:Ad,useCallback:Cy,useContext:Da,useEffect:w0,useImperativeHandle:My,useInsertionEffect:Sy,useLayoutEffect:vy,useMemo:_y,useReducer:Ru,useRef:gy,useState:function(){return Ru(tr)},useDebugValue:E0,useDeferredValue:function(t,e){var a=ra();return by(a,Ot.memoizedState,t,e)},useTransition:function(){var t=Ru(tr)[0],e=ra().memoizedState;return[typeof t=="boolean"?t:Kc(t),e]},useSyncExternalStore:iy,useId:Ey,useHostTransitionStatus:D0,useFormState:nS,useActionState:nS,useOptimistic:function(t,e){var a=ra();return py(a,Ot,t,e)},useMemoCache:T0,useCacheRefresh:Ry,useEffectEvent:Fy},BT={readContext:Da,use:Ad,useCallback:Cy,useContext:Da,useEffect:w0,useImperativeHandle:My,useInsertionEffect:Sy,useLayoutEffect:vy,useMemo:_y,useReducer:wm,useRef:gy,useState:function(){return wm(tr)},useDebugValue:E0,useDeferredValue:function(t,e){var a=ra();return Ot===null?R0(a,t,e):by(a,Ot.memoizedState,t,e)},useTransition:function(){var t=wm(tr)[0],e=ra().memoizedState;return[typeof t=="boolean"?t:Kc(t),e]},useSyncExternalStore:iy,useId:Ey,useHostTransitionStatus:D0,useFormState:rS,useActionState:rS,useOptimistic:function(t,e){var a=ra();return Ot!==null?py(a,Ot,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:T0,useCacheRefresh:Ry,useEffectEvent:Fy};function Em(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:Vt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var SI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=Ao(),n=kr(o);n.payload=e,a!=null&&(n.callback=a),e=Nr(t,n,o),e!==null&&(uo(e,t,o),xc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=Ao(),n=kr(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Nr(t,n,o),e!==null&&(uo(e,t,o),xc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ao(),o=kr(a);o.tag=2,e!=null&&(o.callback=e),e=Nr(t,o,a),e!==null&&(uo(e,t,a),xc(e,t,a))}};function iS(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!wc(a,o)||!wc(n,r):!0}function lS(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&SI.enqueueReplaceState(e,e.state,null)}function ks(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=Vt({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function ky(t){Zu(t)}function Ny(t){console.error(t)}function Oy(t){Zu(t)}function rd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function cS(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function vI(t,e,a){return a=kr(a),a.tag=3,a.payload={element:null},a.callback=function(){rd(t,e)},a}function zy(t){return t=kr(t),t.tag=3,t}function Hy(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){cS(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){cS(e,a,o),typeof n!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function UT(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Ds(e,a,n,!0),a=Ua.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Va===null?pd():a.alternate===null&&aa===0&&(aa=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===$u?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),km(t,o,n)),!1;case 22:return a.flags|=65536,o===$u?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),km(t,o,n)),!1}throw Error(se(435,a.tag))}return km(t,o,n),pd(),!1}if(Ft)return e=Ua.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==cI&&(t=Error(se(422),{cause:o}),Rc(Wo(t,a)))):(o!==cI&&(e=Error(se(423),{cause:o}),Rc(Wo(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=Wo(o,a),n=vI(t.stateNode,o,n),Am(t,n),aa!==4&&(aa=2)),!1;var r=Error(se(520),{cause:o});if(r=Wo(r,a),Cc===null?Cc=[r]:Cc.push(r),aa!==4&&(aa=2),e===null)return!0;o=Wo(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=vI(a.stateNode,o,t),Am(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=zy(n),Hy(n,t,a,o),Am(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var P0=Error(se(461)),fa=!1;function Ia(t,e,a,o){e.child=t===null?ty(e,null,a,o):Bs(e,t.child,a,o)}function fS(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return Ls(e),o=M0(t,e,a,s,r,n),i=C0(),t!==null&&!fa?(_0(t,e,n),ar(t,e,n)):(Ft&&i&&_d(e),e.flags|=1,Ia(t,e,o,n),e.child)}function uS(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!h0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,Vy(t,e,r,o,n)):(t=Au(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!U0(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:wc,a(s,o)&&t.ref===e.ref)return ar(t,e,n)}return e.flags|=1,t=Jn(r,o),t.ref=e.ref,t.return=e,e.child=t}function Vy(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(wc(r,o)&&t.ref===e.ref)if(fa=!1,e.pendingProps=o=r,U0(t,n))t.flags&131072&&(fa=!0);else return e.lanes=t.lanes,ar(t,e,n)}return yI(t,e,a,o,n)}function Gy(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return dS(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Eu(e,r!==null?r.cachePool:null),r!==null?eS(e,r):mI(),ny(e);else return o=e.lanes=536870912,dS(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Eu(e,r.cachePool),eS(e,r),zr(),e.memoizedState=null):(t!==null&&Eu(e,null),mI(),zr());return Ia(t,e,n,a),e.child}function vc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function dS(t,e,a,o,n){var r=x0();return r=r===null?null:{parent:ca._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&Eu(e,null),mI(),ny(e),t!==null&&Ds(t,e,o,!0),e.childLanes=n,null}function Lu(t,e){return e=Rd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function pS(t,e,a){return Bs(e,t.child,null,a),t=Lu(e,e.pendingProps),t.flags|=2,yo(e),e.memoizedState=null,t}function kT(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ft){if(o.mode==="hidden")return t=Lu(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},vc(null,t);if(II(e),(t=Yt)?(t=GM(t,Xo),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Wr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Zv(t),a.return=e,e.child=a,ba=e,Yt=null)):t=null,t===null)throw Xr(e);return e.lanes=536870912,null}return Lu(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(II(e),n)if(e.flags&256)e.flags&=-257,e=pS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(se(558));else if(fa||Ds(t,e,a,!1),n=(a&t.childLanes)!==0,fa||n){if(Yr.current===null){if(o=Ht,o!==null&&(s=Fv(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,Vs(t,s),uo(o,t,s),P0;pd()}e=pS(t,e,a)}else t=r.treeContext,Yt=Yo(s.nextSibling),ba=e,Ft=!0,Ur=null,Xo=!1,t!==null&&Jv(e,t),e=Lu(e,o),e.flags|=134221824;return e}return t=Jn(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ii(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(se(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function yI(t,e,a,o,n){return Ls(e),a=M0(t,e,a,o,void 0,n),o=C0(),t!==null&&!fa?(_0(t,e,n),ar(t,e,n)):(Ft&&o&&_d(e),e.flags|=1,Ia(t,e,a,n),e.child)}function hS(t,e,a,o,n,r){return Ls(e),e.updateQueue=null,a=sy(e,o,a,n),ry(t),o=C0(),t!==null&&!fa?(_0(t,e,r),ar(t,e,r)):(Ft&&o&&_d(e),e.flags|=1,Ia(t,e,a,r),e.child)}function mS(t,e,a,o,n){if(Ls(e),e.stateNode===null){var r=Ti,s=a.contextType;typeof s=="object"&&s!==null&&(r=Da(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=SI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},F0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Da(s):Ti,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Em(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&SI.enqueueReplaceState(r,r.state,null),Fc(e,o,r,n),gc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=ks(a,i);r.props=l;var c=r.context,u=a.contextType;s=Ti,typeof u=="object"&&u!==null&&(s=Da(u));var h=a.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&lS(e,r,o,s),Tr=!1;var f=e.memoizedState;r.state=f,Fc(e,o,r,n),gc(),c=e.memoizedState,i||f!==c||Tr?(typeof h=="function"&&(Em(e,a,h,o),c=e.memoizedState),(l=Tr||iS(e,a,l,o,f,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,pI(t,e),s=e.memoizedProps,u=ks(a,s),r.props=u,h=e.pendingProps,f=r.context,c=a.contextType,l=Ti,typeof c=="object"&&c!==null&&(l=Da(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&lS(e,r,o,l),Tr=!1,f=e.memoizedState,r.state=f,Fc(e,o,r,n),gc();var d=e.memoizedState;s!==h||f!==d||Tr||t!==null&&t.dependencies!==null&&ju(t.dependencies)?(typeof i=="function"&&(Em(e,a,i,o),d=e.memoizedState),(u=Tr||iS(e,a,u,o,f,d,l)||t!==null&&t.dependencies!==null&&ju(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,Ii(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,n),e.child=Bs(e,null,a,n)):Ia(t,e,a,n),e.memoizedState=r.state,t=e.child):t=ar(t,e,n),t}function IS(t,e,a,o){return Rs(),e.flags|=256,Ia(t,e,a,o),e.child}var MI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function CI(t){return{baseLanes:t,cachePool:jv()}}function _I(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Co),t}function qy(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Pa.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ft){if(n?Or(e):zr(),(t=Yt)?(t=GM(t,Xo),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Wr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Zv(t),a.return=e,e.child=a,ba=e,Yt=null)):t=null,t===null)throw Xr(e);return Z0(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(zr(),n=e.mode,r=Rd({mode:"hidden",children:r},n),o=Ts(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=CI(a),o.childLanes=_I(t,s,a),e.memoizedState=MI,vc(null,o)):(Or(e),B0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return NT(t,e,r,s,o,l,i,a)}return n?(zr(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=Jn(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=Jn(l,n):(n=Ts(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,vc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=CI(a):(r=n.cachePool,r!==null?(i=ca._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=jv(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=_I(t,s,a),e.memoizedState=MI,vc(t.child,o)):(Or(e),a=t.child,t=a.sibling,a=Jn(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function B0(t,e){return e=Rd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Rd(t,e){return t=fo(22,t,null,e),t.lanes=0,t}function hu(t,e,a){return Bs(e,t.child,null,a),t=B0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NT(t,e,a,o,n,r,s,i){if(a)return e.flags&256?(Or(e),e.flags&=-257,hu(t,e,i)):e.memoizedState!==null?(zr(),e.child=t.child,e.flags|=128,null):(zr(),r=n.fallback,s=e.mode,n=Rd({mode:"visible",children:n.children},s),r=Ts(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Bs(e,t.child,null,i),n=e.child,n.memoizedState=CI(i),n.childLanes=_I(t,o,i),e.memoizedState=MI,vc(null,n));if(Or(e),Z0(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(se(419)),n.stack="",n.digest=o,Rc({value:n,source:null,stack:null})),hu(t,e,i)}if(fa||Ds(t,e,i,!1),o=(i&t.childLanes)!==0,fa||o){if(Yr.current!==null)return hu(t,e,i);if(o=Ht,o!==null&&(n=Fv(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,Vs(t,n),uo(o,t,n),P0;return JI(r)||pd(),hu(t,e,i)}return JI(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Yt=Yo(r.nextSibling),ba=e,Ft=!0,Ur=null,Xo=!1,t!==null&&Jv(e,t),e=B0(e,n.children),e.flags|=134221824,e)}function xS(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),wu(t.return,e,a)}function gS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&td(a)===null&&(e=t),t=t.sibling}return e}function mu(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function Rm(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function bI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=Pa.current;if(e.flags&128)return Lc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Lc(e,s),n==="backwards"&&t!==null?(Rm(t),Ia(t,e,o,a),Rm(t)):Ia(t,e,o,a),o=Ft?Ec:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xS(t,a,e);else if(t.tag===19)xS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=gS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,Rm(e)),mu(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&td(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}mu(e,!0,a,null,r,o);break;case"together":mu(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=gS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),mu(e,!1,n,a,r,o)}return e.child}function FS(t,e,a){var o=e.pendingProps;return Rr(e,e.type,o.value),Ia(t,e,o.children,a),e.child}function ar(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(a&e.childLanes))if(t!==null){if(Ds(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,a=Jn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Jn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function U0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&ju(t)))}function OT(t,e,a){switch(e.tag){case 3:qu(e,e.stateNode.containerInfo),Rr(e,ca,t.memoizedState.cache),Rs();break;case 27:case 5:$m(e);break;case 4:qu(e,e.stateNode.containerInfo);break;case 10:Rr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,II(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return Or(e),e.flags|=128,null;o=Ds(t,e,a,!1);var n=e.child.childLanes;return o||a&n?qy(t,e,a):(Or(e),t=ar(t,e,a),t!==null?t.sibling:null)}Or(e);break;case 19:if(e.flags&128)return bI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(Ds(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return bI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Lc(e,Pa.current),o)break;return null;case 22:return e.lanes=0,Gy(t,e,a,e.pendingProps);case 24:Rr(e,ca,t.memoizedState.cache)}return ar(t,e,a)}function Wy(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)fa=!0;else{if(!U0(t,a)&&!(e.flags&128))return fa=!1,OT(t,e,a);fa=!!(t.flags&131072)}else fa=!1,Ft&&e.flags&1048576&&Kv(e,Ec,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=ys(e.elementType),e.type=t,typeof t=="function")h0(t)?(o=ks(t,o),e.tag=1,e=mS(null,e,t,o,a)):(e.tag=0,e=yI(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===t0){e.tag=11,e=fS(null,e,t,o,a);break e}else if(n===a0){e.tag=14,e=uS(null,e,t,o,a);break e}else if(n===yn){e.tag=10,e.type=t,e=FS(null,e,a);break e}}throw e=Qm(t)||t,Error(se(306,e,""))}}return e;case 0:return yI(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=ks(o,e.pendingProps),mS(t,e,o,n,a);case 3:e:{if(qu(e,e.stateNode.containerInfo),t===null)throw Error(se(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,pI(t,e),Fc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Rr(e,ca,o),o!==r.cache&&uI(e,[ca],a,!0),gc(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=IS(t,e,o,a);break e}else if(o!==n){n=Wo(Error(se(424)),e),Rc(n),e=IS(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=Yo(t.firstChild),ba=e,Ft=!0,Ur=null,Xo=!0,a=ty(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),o===n){e=ar(t,e,a);break e}Ia(t,e,o,a)}e=e.child}return e;case 26:return Ii(t,e),t===null?(a=XS(e.type,null,e.pendingProps,null))?e.memoizedState=a:Ft||(e.stateNode=PM(e.type,e.pendingProps,Br.current,e)):e.memoizedState=XS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $m(e),t===null&&Ft&&(o=e.stateNode=qM(e.type,e.pendingProps,Br.current),ba=e,Xo=!0,n=Yt,Qr(e.type)?(QI=n,Yt=Yo(o.firstChild)):Yt=n),Ia(t,e,e.pendingProps.children,a),Ii(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ft&&((n=o=Yt)&&(o=RA(o,e.type,e.pendingProps,Xo),o!==null?(e.stateNode=o,ba=e,Yt=Yo(o.firstChild),Xo=!1,n=!0):n=!1),n||Xr(e)),$m(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,YI(n,r)?o=null:s!==null&&YI(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=M0(t,e,AT,null,null,a),Qi._currentValue=n),Ii(t,e),Ia(t,e,o,a),e.child;case 6:return t===null&&Ft&&((t=a=Yt)&&(a=DA(a,e.pendingProps,Xo),a!==null?(e.stateNode=a,ba=e,Yt=null,t=!0):t=!1),t||Xr(e)),null;case 13:return qy(t,e,a);case 4:return qu(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Bs(e,null,o,a):Ia(t,e,o,a),e.child;case 11:return fS(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,Ii(t,e),Ia(t,e,o,a),e.child;case 8:return Ia(t,e,e.pendingProps.children,a),e.child;case 12:return Ia(t,e,e.pendingProps.children,a),e.child;case 10:return FS(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,Ls(e),n=Da(n),o=o(n),e.flags|=1,Ia(t,e,o,a),e.child;case 14:return uS(t,e,e.type,e.pendingProps,a);case 15:return Vy(t,e,e.type,e.pendingProps,a);case 19:return bI(t,e,a);case 31:return kT(t,e,a);case 22:return Gy(t,e,a,e.pendingProps);case 24:return Ls(e),o=Da(ca),t===null?(n=x0(),n===null&&(n=Ht,r=I0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},F0(e),Rr(e,ca,n)):(t.lanes&a&&(pI(t,e),Fc(e,null,null,a),gc()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Rr(e,ca,o)):(o=r.cache,Rr(e,ca,o),o!==n.cache&&uI(e,[ca],a,!0))),Ia(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:Ft&&_d(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:Ii(t,e),Ia(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(se(156,e.tag))}function Yn(t){t.flags|=4}function Dm(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?KS(e,o):KS(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(SM())t.flags|=8192;else throw ws=$u,g0}else t.flags&=-16777217}function SS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ZM(e))if(SM())t.flags|=8192;else throw ws=$u,g0}function Iu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Iv():536870912,t.lanes|=e,Wi|=e)}function nc(t,e){if(!Ft)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function zT(t,e,a){var o=e.pendingProps;switch(m0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return Xt(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Qn(ca),Hi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hi(e)?Yn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tm())),Xt(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(Yn(e),r!==null?(Xt(e),SS(e,r)):(Xt(e),Dm(e,n,null,o,a))):r?r!==t.memoizedState?(Yn(e),Xt(e),SS(e,r)):(Xt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&Yn(e),Xt(e),Dm(e,n,t,o,a)),null;case 27:if(Wu(e),a=Br.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Yn(e);else{if(!o){if(e.stateNode===null)throw Error(se(166));return Xt(e),e.subtreeFlags&=-33554433,null}t=bn.current,hi(e)?YF(e,t):(t=qM(n,o,a),e.stateNode=t,Yn(e))}return Xt(e),e.subtreeFlags&=-33554433,null;case 5:if(Wu(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Yn(e);else{if(!o){if(e.stateNode===null)throw Error(se(166));return Xt(e),e.subtreeFlags&=-33554433,null}if(r=bn.current,hi(e))YF(e,r);else{var s=kc(Br.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Ra]=e,r[ho]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Ba(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Yn(e)}}return Xt(e),e.subtreeFlags&=-33554433,Dm(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&Yn(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(se(166));if(t=Br.current,hi(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=ba,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Ra]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||DM(t.nodeValue,a)),t||Xr(e,!0)}else t=kc(t).createTextNode(o),t[Ra]=e,e.stateNode=t}return Xt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=hi(e),a!==null){if(t===null){if(!o)throw Error(se(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(557));t[Ra]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),t=!1}else a=Tm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(yo(e),e):(yo(e),null);if(e.flags&128)throw Error(se(558))}return Xt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=hi(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(se(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));n[Ra]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),n=!1}else n=Tm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(yo(e),e):(yo(e),null)}return yo(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Iu(e,e.updateQueue),Xt(e),null);case 4:return Hi(),t===null&&W0(e.stateNode.containerInfo),e.flags|=67108864,Xt(e),null;case 10:return Qn(e.type),Xt(e),null;case 19:if(v0(e),o=e.memoizedState,o===null)return Xt(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)nc(o,!1);else{if(aa!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=td(t),r!==null){for(e.flags|=128,nc(o,!1),t=r.updateQueue,e.updateQueue=t,Iu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Yv(a,t),a=a.sibling;return Lc(e,Pa.current&1|2),Ft&&Zn(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&_o()>ud&&(e.flags|=128,n=!0,nc(o,!1),e.lanes=4194304)}else{if(!n)if(t=td(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Iu(e,t),nc(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!Ft)return Xt(e),null}else 2*_o()-o.renderingStartTime>ud&&a!==536870912&&(e.flags|=128,n=!0,nc(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_o(),t.sibling=null,r=Pa.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Ft?Lc(e,r):(a=r,Zt(Ua,e),Zt(Pa,a),Va===null&&(Va=e)),Ft&&Zn(e,o.treeForkCount),t}return Xt(e),null;case 22:case 23:return yo(e),S0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),a=e.updateQueue,a!==null&&Iu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&La(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Qn(ca),Xt(e),null;case 25:return null;case 30:return e.flags|=33554432,Xt(e),null}throw Error(se(156,e.tag))}function HT(t,e){switch(m0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qn(ca),Hi(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Wu(e),null;case 31:if(e.memoizedState!==null){if(yo(e),e.alternate===null)throw Error(se(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(yo(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return v0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Hi(),null;case 10:return Qn(e.type),null;case 22:case 23:return yo(e),S0(),t!==null&&La(As),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qn(ca),null;case 25:return null;default:return null}}function Xy(t,e){switch(m0(e),e.tag){case 3:Qn(ca),Hi();break;case 26:case 27:case 5:Wu(e);break;case 4:Hi();break;case 31:e.memoizedState!==null&&yo(e);break;case 13:yo(e);break;case 19:v0(e);break;case 10:Qn(e.type);break;case 22:case 23:yo(e),S0(),t!==null&&La(As);break;case 24:Qn(ca)}}function Jc(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Ut(e,e.return,i)}}function Zr(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(u){Ut(n,l,u)}}}o=o.next}while(o!==r)}}catch(u){Ut(e,e.return,u)}}function Yy(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{oy(e,a)}catch(o){Ut(t,t.return,o)}}}function Zy(t,e,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ut(t,e,o)}}function Sn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=$n(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=NM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new Eo(t);po(t.child,!1,wA,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Ut(t,e,i)}}function Ea(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ut(t,e,n)}else a.current=null}function sd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)VM(t.stateNode,e[a])}function vS(t){for(var e=t.return;e!==null&&(N0(e)&&VM(t.stateNode,e.stateNode),!k0(e));)e=e.return}function yc(t){for(var e=t.return;e!==null&&(N0(e)&&EA(t.stateNode,e.stateNode),!k0(e));)e=e.return}function k0(t){return t.tag===5||t.tag===3||t.tag===27}function N0(t){return t&&t.tag===7&&t.stateNode!==null}function TI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ut(t,t.return,n)}}function Lm(t,e,a){try{var o=t.stateNode;uA(o,t.type,a,e),o[ho]=e}catch(n){Ut(t,t.return,n)}}function Ky(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qr(t.type)||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ky(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function AI(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Mn)),sd(t,o),At=!0;else if(n!==4&&(n===27&&(sd(t,o),o=null,Qr(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(AI(t,e,a,o),t=t.sibling;t!==null;)AI(t,e,a,o),t=t.sibling}function id(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),sd(t,o),At=!0;else if(n!==4&&(n===27&&(sd(t,o),o=null,Qr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(id(t,e,a,o),t=t.sibling;t!==null;)id(t,e,a,o),t=t.sibling}function Jy(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ba(e,o,a),e[Ra]=t,e[ho]=a}catch(r){Ut(t,t.return,r)}}var ld=!1,Mo=null;function yS(t){(t.tag===30||t.subtreeFlags&33554432)&&(ld=!0)}var vn=null;function MS(){var t=vn;return vn=null,t}var co=0;function ol(t,e,a,o,n){return co=0,Qy(t.child,e,a,o,n)}function Qy(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=ZI(s);o.push(i),i.view&&(r=!0)}else r||ZI(s).view&&(r=!0);ld=!0,BM(s,co===0?e:e+"_"+co,a),co++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qy(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function An(t,e){for(;t!==null;)t.tag===5?UM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||An(t.child,e)),t=t.sibling}function Pu(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(se(544));var a=e.name;e=rr(e.default,e.share),e!=="none"&&(ol(t,a,e,null,!1)||An(t.child,!1))}t=t.sibling}}function wI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=$n(o,a),r=rr(o.default,a.paired?o.share:o.enter);r!=="none"?ol(t,n,r,null,!1)?(Pu(t),a.paired||e||Xi(t,o.onEnter)):An(t.child,!1):Pu(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)wI(t,e),t=t.sibling;else Pu(t)}function EI(t){if(Mo!==null&&Mo.size!==0){var e=Mo;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=rr(a.default,a.share);if(r!=="none"&&(ol(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,Xi(t,a.onShare)):An(t.child,!1)),e.delete(o),e.size===0)break}}}EI(t)}t=t.sibling}}}function RI(t){if(t.tag===30){var e=t.memoizedProps,a=$n(e,t.stateNode),o=Mo!==null?Mo.get(a):void 0,n=rr(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(ol(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,Mo.delete(a),Xi(t,e.onShare)):Xi(t,e.onExit):An(t.child,!1)),Mo!==null&&EI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)RI(t),t=t.sibling;else Mo!==null&&EI(t)}function jy(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=$n(e,t.stateNode);e=rr(e.default,e.update),t.flags&=-5,e!=="none"&&ol(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&jy(t);t=t.sibling}}function DI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,An(t.child,!1))}DI(t)}t=t.sibling}}function Bu(t){if(t.tag===30)t.stateNode.paired=null,An(t.child,!1),DI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Bu(t),t=t.sibling;else DI(t)}function $y(t){for(t=t.child;t!==null;)t.tag===30?An(t.child,!1):t.subtreeFlags&33554432&&$y(t),t=t.sibling}function O0(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&co<r.length){var c=r[co],u=ZI(l);(c.view||u.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(u.clip)h=!0;else{h=c.rect;var f=u.rect;h=h.y!==f.y||h.x!==f.x||h.height!==f.height||h.width!==f.width}h&&(t.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(t.flags|=32)}else t.flags|=32;t.flags&4&&BM(l,co===0?a:a+"_"+co,n),i&&t.flags&4||(vn===null&&(vn=[]),vn.push(l,co===0?o:o+"_"+co,e.memoizedProps)),co++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:O0(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function eM(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=$n(a,o),r=rr(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map(xA)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;co=0,n=O0(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||Xi(t,a.onUpdate))}else t.subtreeFlags&33554432&&eM(t,e);t=t.sibling}}var Ma=!1,Rt=!1,xn=!1,Bm=!1,CS=typeof WeakSet=="function"?WeakSet:Set,Ca=null,gn=!1,dc=!1,cd=!1,LI=!1;function VT(t,e,a){if(t=t.containerInfo,WI=ji,t=Ov(t),u0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,u=0,h=0,f=t,d=null;t:for(;;){for(var I;f!==o||r!==0&&f.nodeType!==3||(l=i+r),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(I=f.firstChild)!==null;)d=f,f=I;for(;;){if(f===t)break t;if(d===o&&++u===r&&(l=i),d===s&&++h===n&&(c=i),(I=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=I}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(XI={focusedElem:t,selectionRange:o},ji=!1,a=(a&335544064)===a,Ca=e,e=a?9270:1024;Ca!==null;){if(t=Ca,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&RI(o[r]);if(t.alternate===null&&t.flags&2)a&&yS(t),xu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&RI(o),xu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&yS(t),xu(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,Ca=o):(a&&jy(t),xu(a))}}Mo=null}function xu(t){for(;Ca!==null;){var e=Ca,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=ks(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Ut(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)KI(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":KI(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=$n(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=rr(n.default,n.update),n!=="none"&&ol(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(se(163))}if(o=e.sibling,o!==null){o.return=e.return,Ca=o;break}Ca=e.return}}function tM(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fn(t,a),o&4&&Jc(5,a);break;case 1:if(Fn(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Ut(a,a.return,s)}else{var n=ks(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ut(a,a.return,s)}}o&64&&Yy(a),o&512&&Sn(a,a.return);break;case 3:if(Fn(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{oy(t,e)}catch(s){Ut(a,a.return,s)}}break;case 27:e===null&&o&4&&Jy(a);case 26:case 5:Fn(t,a),e===null&&o&4&&TI(a),o&512&&Sn(a,a.return);break;case 12:Fn(t,a);break;case 31:Fn(t,a),o&4&&rM(t,a);break;case 13:Fn(t,a),o&4&&sM(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eA.bind(null,a),LA(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){var r=e!==null&&e.memoizedState!==null||Rt;e=Ma,n=Rt,Ma=o,(Rt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),en(t,a,o)):Fn(t,a),Ma=e,Rt=n}break;case 30:Fn(t,a),o&512&&Sn(a,a.return);break;case 7:o&512&&Sn(a,a.return);default:Fn(t,a)}}function PI(t,e){for(t=t.child;t!==null;)aM(t,e),t=t.sibling}function aM(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Ut(t,t.return,l)}BI(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,At=!0}catch(l){Ut(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?zS(i,!0):zS(t.stateNode,!1)}catch(l){Ut(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&PI(t,e);break;default:PI(t,e)}}function BI(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:aM(a,o);break e;case 22:a.memoizedState===null&&BI(a,o);break e;default:BI(a,o)}}t=t.sibling}}function oM(t){var e=t.alternate;e!==null&&(t.alternate=null,oM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Fd(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,io=!1;function $o(t,e,a){for(a=a.child;a!==null;)nM(t,e,a),a=a.sibling}function nM(t,e,a){if(bo&&typeof bo.onCommitFiberUnmount=="function")try{bo.onCommitFiberUnmount(Gc,a)}catch{}switch(a.tag){case 26:Rt||Ea(a,e),$o(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Rt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Rt||Ea(a,e),yc(a);var o=Qt,n=io;Qr(a.type)&&(Qt=a.stateNode,io=!1),$o(t,e,a),WM(a.stateNode,a.type,a.memoizedProps),Qt=o,io=n;break;case 5:Rt||Ea(a,e),yc(a);case 6:if(a.tag===6&&yc(a),o=Qt,n=io,Qt=null,$o(t,e,a),Qt=o,io=n,Qt!==null)if(io)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}else try{Qt.removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}break;case 18:Qt!==null&&(io?(t=Qt,OS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),$i(t)):OS(Qt,a.stateNode));break;case 4:o=Qt,n=io,Qt=a.stateNode.containerInfo,io=!0,$o(t,e,a),Qt=o,io=n;break;case 0:case 11:case 14:case 15:Zr(2,a,e),Rt||Zr(4,a,e),$o(t,e,a);break;case 1:Rt||(Ea(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zy(a,e,o)),$o(t,e,a);break;case 21:$o(t,e,a);break;case 22:Rt=(o=Rt)||a.memoizedState!==null,$o(t,e,a),Rt=o;break;case 30:Ea(a,e),$o(t,e,a);break;case 7:Rt||Ea(a,e),$o(t,e,a);break;default:$o(t,e,a)}}function rM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$i(t)}catch(a){Ut(e,e.return,a)}}}function sM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$i(t)}catch(a){Ut(e,e.return,a)}}function GT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new CS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new CS),e;default:throw Error(se(435,t.tag))}}function gu(t,e){var a=GT(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=tA.bind(null,t,o);o.then(n,n)}})}function Ja(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Qr(l.type)){Qt=l.stateNode,io=!1;break e}break;case 5:Qt=l.stateNode,io=!1;break e;case 3:case 4:Qt=l.stateNode.containerInfo,io=!0;break e}l=l.return}if(Qt===null)throw Error(se(160));nM(s,i,r),Qt=null,io=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)iM(e,t,a),e=e.sibling}var tn=null;function iM(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}Ja(e,t,a),Qa(t),n&4&&(Zr(3,t,t.return),Jc(3,t),Zr(5,t,t.return));break;case 1:Ja(e,t,a),Qa(t),n&512&&(Rt||o===null||Ea(o,o.return)),n&64&&Ma&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=tn,Ja(e,t,a),Qa(t),n&512&&(Rt||o===null||Ea(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Ma)t.stateNode=PM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[Xc]||o[Ra]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),Ba(o,e,a),o[Ra]=t,_a(o),e=o;break e;case"link":if(r=ZS("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;case"meta":if(r=ZS("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;default:throw Error(se(468,e))}o[Ra]=t,_a(o),e=o}t.stateNode=e}else Ma||jI(r,t.type,t.stateNode);else t.stateNode=YS(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||Rt||e.parentNode.removeChild(e)):n.count--,a===null?Ma||jI(r,t.type,t.stateNode):YS(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Lm(t,t.memoizedProps,o.memoizedProps);break;case 27:Ja(e,t,a),Qa(t),n&512&&(Rt||o===null||Ea(o,o.return)),o!==null&&n&4&&Lm(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=xn,xn=!1,Ja(e,t,a),xn=r,Qa(t),n&512&&(Rt||o===null||Ea(o,o.return)),t.flags&32){e=t.stateNode;try{Gi(e,""),At=!0}catch(u){Ut(t,t.return,u)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Lm(t,e,o!==null?o.memoizedProps:e)),n&1024&&(Bm=!0);break;case 6:if(Ja(e,t,a),Qa(t),n&4){if(t.stateNode===null)throw Error(se(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,At=!0}catch(u){Ut(t,t.return,u)}}break;case 3:if(At=!1,Ou=null,r=tn,tn=Nc(e.containerInfo),Ja(e,t,a),tn=r,Qa(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(e.containerInfo)}catch(u){Ut(t,t.return,u)}Bm&&(Bm=!1,lM(t)),At=!1;break;case 4:n=xn,xn=Ma,o=EF(),r=tn,tn=Nc(t.stateNode.containerInfo),Ja(e,t,a),Qa(t),tn=r,At&&dc&&(cd=!0),At=o,xn=n;break;case 12:Ja(e,t,a),Qa(t);break;case 31:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 13:Ja(e,t,a),Qa(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Dd=_o()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Ma,l=Rt,c=xn;Ma=i||r,xn=c||r,Rt=l||s,Ja(e,t,a),Rt=l,xn=c,Ma=i,Qa(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Ma||Rt||(e=s||Rt,a=Ma,o=Rt,Ma=r||Ma,Rt=e,_r(t,2),Ma=a,Rt=o),!r&&xn||PI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,gu(t,a))));break;case 19:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 30:n&512&&(Rt||o===null||Ea(o,o.return)),n=EF(),r=dc,s=(a&335544064)===a,i=t.memoizedProps,dc=s&&rr(i.default,i.update)!=="none",Ja(e,t,a),Qa(t),s&&o!==null&&At&&(t.flags|=4),dc=r,At=n;break;case 21:break;case 7:n&512&&(Rt||o===null||Ea(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:Ja(e,t,a),Qa(t)}}function Qa(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(Ky(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if(N0(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(k0(n))break;n=n.return}var s=o;if(a==null)throw Error(se(160));switch(a.tag){case 27:var i=a.stateNode,l=Pm(t);id(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(Gi(c,""),a.flags&=-33);var u=Pm(t);id(t,u,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,f=Pm(t);AI(t,f,h,s);break;default:throw Error(se(161))}}catch(d){Ut(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lM(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,ji=!0,e.reset(),ji=!1),t=t.sibling}}function mi(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)cM(e,t),e=e.sibling;else eM(e,!1)}function cM(t,e){var a=t.alternate;if(a===null)wI(t,!1);else switch(t.tag){case 3:if(LI=gn=!1,MS(),mi(e,t),!gn&&!cd){if(t=vn,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];UM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),LI=!0}vn=null;break;case 5:mi(e,t);break;case 4:o=gn,gn=!1,mi(e,t),gn&&(cd=!0),gn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?wI(t,!1):mi(e,t));break;case 30:o=gn,n=MS(),gn=!1,mi(e,t),gn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=$n(r,s),s=$n(a.memoizedProps,s);var i=rr(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,co=0,e=O0(t,a,e,s,i,r,!0),co!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(Xi(t,t.memoizedProps.onUpdate),vn=n):n!==null&&(n.push.apply(n,vn),vn=n),gn=t.flags&32?!0:o;break;default:mi(e,t)}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tM(t,e.alternate,e),e=e.sibling}function _r(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:Zr(4,a,a.return),_r(a,o);break;case 1:Ea(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Zy(a,a.return,n),_r(a,o);break;case 27:o&2&&WM(a.stateNode,a.type,a.memoizedProps);case 5:Ea(a,a.return),a.tag!==5&&a.tag!==27||yc(a),_r(a,o);break;case 6:yc(a);break;case 26:Ea(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||Rt||n.parentNode.removeChild(n),_r(a,o);break;case 22:a.memoizedState===null&&_r(a,o);break;case 30:Ea(a,a.return),_r(a,o);break;case 7:Ea(a,a.return);default:_r(a,o)}t=t.sibling}}function en(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:en(n,r,a),Jc(4,r);break;case 1:if(en(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ut(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)ay(c[n],l)}catch(u){Ut(o,o.return,u)}}i&&s&64&&Yy(r),Sn(r,r.return);break;case 27:a&2&&Jy(r);case 5:r.tag!==5&&r.tag!==27||vS(r),en(n,r,a),i&&o===null&&s&4&&TI(r),Sn(r,r.return);break;case 6:vS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Ma||jI(Nc(l.ownerDocument),r.type,l),en(n,r,a),i&&o===null&&s&4&&TI(r),Sn(r,r.return);break;case 12:en(n,r,a);break;case 31:en(n,r,a),i&&s&4&&rM(n,r);break;case 13:en(n,r,a),i&&s&4&&sM(n,r);break;case 22:r.memoizedState===null&&en(n,r,a),Sn(r,r.return);break;case 30:en(n,r,a),Sn(r,r.return);break;case 7:Sn(r,r.return);default:en(n,r,a)}e=e.sibling}}function z0(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zc(a))}function H0(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zc(t))}function zo(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)fM(t,e,a,o),e=e.sibling;else n&&$y(e)}function fM(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Bu(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:zo(t,e,a,o),r&2048&&Jc(9,e);break;case 1:zo(t,e,a,o);break;case 3:zo(t,e,a,o),n&&LI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Zc(r)));break;case 12:if(r&2048){zo(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Ut(e,e.return,c)}}else zo(t,e,a,o);break;case 31:zo(t,e,a,o);break;case 13:zo(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&Bu(i),s._visibility&2?zo(t,e,a,o):Mc(t,e)):(n&&i!==null&&i.memoizedState!==null&&Bu(e),s._visibility&2?zo(t,e,a,o):(s._visibility|=2,xi(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&z0(i,e);break;case 24:zo(t,e,a,o),r&2048&&H0(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(An(r.child,!0),An(e.child,!0))),zo(t,e,a,o);break;default:zo(t,e,a,o)}}function xi(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:xi(r,s,i,l,n),Jc(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?xi(r,s,i,l,n):Mc(r,s):(u._visibility|=2,xi(r,s,i,l,n)),n&&c&2048&&z0(s.alternate,s);break;case 24:xi(r,s,i,l,n),n&&c&2048&&H0(s.alternate,s);break;default:xi(r,s,i,l,n)}e=e.sibling}}function Mc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:Mc(a,o),n&2048&&z0(o.alternate,o);break;case 24:Mc(a,o),n&2048&&H0(o.alternate,o);break;default:Mc(a,o)}e=e.sibling}}var Ms=8192;function Ss(t,e,a){if(t.subtreeFlags&Ms)for(t=t.child;t!==null;)uM(t,e,a),t=t.sibling}function uM(t,e,a){switch(t.tag){case 26:Ss(t,e,a),t.flags&Ms&&(t.memoizedState!==null?YA(a,tn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&JS(a,t)));break;case 5:Ss(t,e,a),t.flags&Ms&&(t=t.stateNode,(e&335544128)===e&&JS(a,t));break;case 3:case 4:var o=tn;tn=Nc(t.stateNode.containerInfo),Ss(t,e,a),tn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ms,Ms=16777216,Ss(t,e,a),Ms=o):Ss(t,e,a));break;case 30:if(t.flags&Ms&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,Mo===null&&(Mo=new Map),Mo.set(o,n)}Ss(t,e,a);break;default:Ss(t,e,a)}}function dM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,hM(o,t)}dM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pM(t),t=t.sibling}function pM(t){switch(t.tag){case 0:case 11:case 15:rc(t),t.flags&2048&&Zr(9,t,t.return);break;case 3:rc(t);break;case 12:rc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Uu(t)):rc(t);break;default:rc(t)}}function Uu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,hM(o,t)}dM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Zr(8,e,e.return),Uu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Uu(e));break;default:Uu(e)}t=t.sibling}}function hM(t,e){for(;Ca!==null;){var a=Ca;switch(a.tag){case 0:case 11:case 15:Zr(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zc(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ca=o;else e:for(a=t;Ca!==null;){o=Ca;var n=o.sibling,r=o.return;if(oM(o),o===a){Ca=null;break e}if(n!==null){n.return=r,Ca=n;break e}Ca=r}}}var qT={getCacheForType:function(t){var e=Da(ca),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Da(ca).controller.signal}},WT=typeof WeakMap=="function"?WeakMap:Map,wt=0,Ht=null,yt=null,Mt=0,Pt=0,So=null,Dr=!1,nl=!1,V0=!1,or=0,aa=0,Kr=0,Es=0,fd=0,Co=0,Wi=0,Cc=null,lo=null,UI=!1,Dd=0,mM=0,ud=1/0,dd=null,Hr=null,$t=0,on=null,Ns=null,Tn=0,kI=0,NI=null,IM=null,Ni=null,Oi=null,zi=null,_c=0,ku=null;function Ao(){return wt&2&&Mt!==0?Mt&-Mt:rt.T!==null?q0():Sv()}function xM(){if(Co===0)if(!(Mt&536870912)||Ft){var t=ru;ru<<=1,!(ru&3932160)&&(ru=262144),Co=t}else Co=536870912;return t=Ua.current,t!==null&&(t.flags|=32),Co}function Xi(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=NM($n(t.memoizedProps,a))),Oi===null&&(Oi=[]),Oi.push(e.bind(null,o))}}function uo(t,e,a){(t===Ht&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(Yi(t,0),Lr(t,Mt,Co,!1)),Wc(t,a),(!(wt&2)||t!==Ht)&&(t===Ht&&(!(wt&2)&&(Es|=a),aa===4&&Lr(t,Mt,Co,!1)),En(t))}function gM(t,e,a){if(wt&6)throw Error(se(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||qc(t,e),n=o?ZT(t,e):Um(t,e,!0),r=o;do{if(n===0){nl&&!o&&Lr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!XT(a)){n=Um(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=Cc;var l=i.current.memoizedState.isDehydrated;if(l&&(Yi(i,s).flags|=256),s=Um(i,s,!1),s!==2&&s!==6){if(V0&&!l){i.errorRecoveryDisabledLanes|=r,Es|=r,n=4;break e}r=lo,lo=n,r!==null&&(lo===null?lo=r:lo.push.apply(lo,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){Yi(t,0),Lr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(se(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Lr(o,e,Co,!Dr);break e;case 2:lo=null;break;case 3:case 5:break;default:throw Error(se(329))}if((e&62914560)===e&&(n=Dd+300-_o(),10<n)){if(Lr(o,e,Co,!Dr),gd(o,0,!0)!==0)break e;Tn=e,o.timeoutHandle=X0(_S.bind(null,o,a,lo,dd,UI,e,Co,Es,Wi,Dr,r,"Throttled",-0,0),n);break e}_S(o,a,lo,dd,UI,e,Co,Es,Wi,Dr,r,null,-0,0)}}break}while(!0);En(t)}function _S(t,e,a,o,n,r,s,i,l,c,u,h,f,d){t.timeoutHandle=-1;var I=e.subtreeFlags,y=(r&335544064)===r;if(h=null,(y||I&8192||(I&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mn},Mo=null,uM(e,r,h),y&&(I=h,y=t.containerInfo,y=(y.nodeType===9?y:y.ownerDocument).__reactViewTransition,y!=null&&(I.count++,I.waitingForViewTransition=!0,I=Oc.bind(I),y.finished.then(I,I))),I=(r&62914560)===r?Dd-_o():(r&4194048)===r?mM-_o():0,I=ZA(h,I),I!==null)){Tn=r,t.cancelPendingCommit=I(TS.bind(null,t,e,r,a,o,n,s,i,l,c,u,h,null,f,d)),Lr(t,r,s,!c);return}TS(t,e,r,a,o,n,s,i,l,c,u,h)}function XT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!wo(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e,a,o){e=mv(t,e),e&=~fd,e&=~Es,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-To(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&xv(t,a,e)}function Ld(){return wt&6?!0:(Qc(0,!1),!1)}function G0(){if(yt!==null){if(Pt===0)var t=yt.return;else t=yt,Kn=Gs=null,b0(t),Bi=null,Dc=0,t=yt;for(;t!==null;)Xy(t.alternate,t),t=t.return;yt=null}}function Yi(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,hA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tn=0,G0(),Ht=t,yt=a=Jn(t.current,null),Mt=e,Pt=0,So=null,Dr=!1,nl=qc(t,e),V0=!1,Wi=Co=fd=Es=Kr=aa=0,lo=Cc=null,UI=!1,or=mv(t,e),Md(),a}function FM(t,e){mt=null,rt.H=nd,e===al||e===bd?(e=jF(),Pt=3):e===g0?(e=jF(),Pt=4):Pt=e===P0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,So=e,yt===null&&(aa=1,rd(t,Wo(e,t.current)))}function SM(){var t=Ua.current;return t===null?!0:(Mt&4194048)===Mt?Va===null:(Mt&62914560)===Mt||Mt&536870912?t===Va:!1}function vM(){var t=rt.H;return rt.H=nd,t===null?nd:t}function yM(){var t=rt.A;return rt.A=qT,t}function pd(){aa=4,Dr||(Mt&4194048)!==Mt&&Ua.current!==null||(nl=!0),!(Kr&134217727)&&!(Es&134217727)||Ht===null||Lr(Ht,Mt,Co,!1)}function Um(t,e,a){var o=wt;wt|=2;var n=vM(),r=yM();(Ht!==t||Mt!==e)&&(dd=null,Yi(t,e)),e=!1;var s=aa;e:do try{if(Pt!==0&&yt!==null){var i=yt,l=So;switch(Pt){case 8:G0(),s=6;break e;case 3:case 2:case 9:case 6:Ua.current===null&&(e=!0);var c=Pt;if(Pt=0,So=null,Ei(t,i,l,c),a&&nl){s=0;break e}break;default:c=Pt,Pt=0,So=null,Ei(t,i,l,c)}}YT(),s=aa;break}catch(u){FM(t,u)}while(!0);return e&&t.shellSuspendCounter++,Kn=Gs=null,wt=o,rt.H=n,rt.A=r,yt===null&&(Ht=null,Mt=0,Md()),s}function YT(){for(;yt!==null;)MM(yt)}function ZT(t,e){var a=wt;wt|=2;var o=vM(),n=yM();Ht!==t||Mt!==e?(dd=null,ud=_o()+500,Yi(t,e)):nl=qc(t,e);e:do try{if(Pt!==0&&yt!==null){e=yt;var r=So;t:switch(Pt){case 1:Pt=0,So=null,Ei(t,e,r,1);break;case 2:case 9:if(QF(r)){Pt=0,So=null,bS(e);break}e=function(){Pt!==2&&Pt!==9||Ht!==t||(Pt=7),En(t)},r.then(e,e);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:QF(r)?(Pt=0,So=null,bS(e)):(Pt=0,So=null,Ei(t,e,r,7));break;case 5:var s=null;switch(yt.tag){case 26:s=yt.memoizedState;case 5:case 27:var i=yt;if(s?ZM(s):i.stateNode.complete){Pt=0,So=null;var l=i.sibling;if(l!==null)yt=l;else{var c=i.return;c!==null?(yt=c,Pd(c)):yt=null}break t}}Pt=0,So=null,Ei(t,e,r,5);break;case 6:Pt=0,So=null,Ei(t,e,r,6);break;case 8:G0(),aa=6;break e;default:throw Error(se(462))}}KT();break}catch(u){FM(t,u)}while(!0);return Kn=Gs=null,rt.H=o,rt.A=n,wt=a,yt!==null?0:(Ht=null,Mt=0,Md(),aa)}function KT(){for(;yt!==null&&!db();)MM(yt)}function MM(t){var e=Wy(t.alternate,t,or);t.memoizedProps=t.pendingProps,e===null?Pd(t):yt=e}function bS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=hS(a,e,e.pendingProps,e.type,void 0,Mt);break;case 11:e=hS(a,e,e.pendingProps,e.type.render,e.ref,Mt);break;case 5:b0(e);var o=e;o===ba&&(Ft?(Qu(o),o.tag===5&&o.stateNode!=null&&(Yt=o.stateNode)):(Qu(o),Ft=!0));default:Xy(a,e),e=yt=Yv(e,or),e=Wy(a,e,or)}t.memoizedProps=t.pendingProps,e===null?Pd(t):yt=e}function Ei(t,e,a,o){Kn=Gs=null,b0(e),Bi=null,Dc=0;var n=e.return;try{if(UT(t,n,e,a,Mt)){aa=1,rd(t,Wo(a,t.current)),yt=null;return}}catch(r){if(n!==null)throw yt=n,r;aa=1,rd(t,Wo(a,t.current)),yt=null;return}e.flags&32768?(Ft||o===1?t=!0:nl||Mt&536870912?t=!1:(Dr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Ua.current,o!==null&&o.tag===13&&(o.flags|=16384))),CM(e,t)):Pd(e)}function Pd(t){var e=t;do{if(e.flags&32768){CM(e,Dr);return}t=e.return;var a=zT(e.alternate,e,or);if(a!==null){yt=a;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);aa===0&&(aa=5)}function CM(t,e){do{var a=HT(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);aa=6,yt=null}function TS(t,e,a,o,n,r,s,i,l,c,u,h){t.cancelPendingCommit=null;do Bd();while($t!==0);if(wt&6)throw Error(se(327));if(e!==null){if(e===t.current)throw Error(se(177));t===Ht&&(yt=Ht=null,Mt=0),Ns=e,on=t,Tn=a,NI=n,IM=o,JT(t,e,a,s,i,l,h)}}function JT(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(kI=i,i|=d0,yb(t,a,i,o,n,r),Oi=null,(a&335544064)===a?(zi=CT(t),o=10262):(zi=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,aA(Xu,function(){return VI(),null})):(t.callbackNode=null,t.callbackPriority=0),ld=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=rt.T,rt.T=null,n=Et.p,Et.p=2,r=wt,wt|=4;try{VT(t,e,a)}finally{wt=r,Et.p=n,rt.T=o}}$t=1,ld?Ni=SA(s,t.containerInfo,zi,OI,zI,jT,HI,VI,QT,null,null):(OI(),zI(),HI())}function QT(t){if($t!==0){var e=on.onRecoverableError;e(t,{componentStack:null})}}function jT(){$t===3&&($t=0,cM(Ns,on),$t=4)}function OI(){if($t===1){$t=0;var t=on,e=Ns,a=Tn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=rt.T,rt.T=null;var n=Et.p;Et.p=2;var r=wt;wt|=4;try{dc=cd=!1,iM(e,t,a),a=XI;var s=Ov(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&Nv(i.ownerDocument.documentElement,i)){if(l!==null&&u0(i)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(u,i.value.length);else{var h=i.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),I=i.textContent.length,y=Math.min(l.start,I),m=l.end===void 0?y:Math.min(l.end,I);!d.extend&&y>m&&(s=m,m=y,y=s);var p=GF(i,y),x=GF(i,m);if(p&&x&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==x.node||d.focusOffset!==x.offset)){var v=h.createRange();v.setStart(p.node,p.offset),d.removeAllRanges(),y>m?(d.addRange(v),d.extend(x.node,x.offset)):(v.setEnd(x.node,x.offset),d.addRange(v))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var g=h[i];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}ji=!!WI,XI=WI=null}finally{wt=r,Et.p=n,rt.T=o}}t.current=e,$t=2}}function zI(){if($t===2){$t=0;var t=on,e=Ns,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=rt.T,rt.T=null;var o=Et.p;Et.p=2;var n=wt;wt|=4;try{tM(t,e.alternate,e)}finally{wt=n,Et.p=o,rt.T=a}}$t=3}}function HI(){if($t===4||$t===3){$t=0;var t=Ni;Ni=null,pb();var e=on,a=Ns,o=Tn,n=IM,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?$t=5:($t=0,Ns=on=null,_M(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(Hr=null),r0(o),a=a.stateNode,bo&&typeof bo.onCommitFiberRoot=="function")try{bo.onCommitFiberRoot(Gc,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=rt.T,r=Et.p,Et.p=2,rt.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{rt.T=a,Et.p=r}}if(n=Oi,s=zi,zi=null,n!==null&&(Oi=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);Tn&3&&Bd(),En(e),r=e.pendingLanes,o&261930&&r&42?e===ku?_c++:(_c=0,ku=e):(_c=0,ku=null),Qc(0,!1)}}function _M(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zc(e)))}function Bd(){return Ni!==null&&(Ni.skipTransition(),Ni=null),OI(),zI(),HI(),VI()}function VI(){if($t!==5)return!1;var t=on,e=kI;kI=0;var a=r0(Tn),o=rt.T,n=Et.p;try{Et.p=32>a?32:a,rt.T=null,a=NI,NI=null;var r=on,s=Tn;if($t=0,Ns=on=null,Tn=0,wt&6)throw Error(se(331));var i=wt;if(wt|=4,pM(r.current),fM(r,r.current,s,a),wt=i,Qc(0,!1),bo&&typeof bo.onPostCommitFiberRoot=="function")try{bo.onPostCommitFiberRoot(Gc,r)}catch{}return!0}finally{Et.p=n,rt.T=o,_M(t,e)}}function AS(t,e,a){e=Wo(a,e),e=vI(t.stateNode,e,2),t=Nr(t,e,2),t!==null&&(Wc(t,2),En(t))}function Ut(t,e,a){if(t.tag===3)AS(t,t,a);else for(;e!==null;){if(e.tag===3){AS(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Hr===null||!Hr.has(o))){t=Wo(a,t),a=zy(2),o=Nr(e,a,2),o!==null&&(Hy(a,o,e,t),Wc(o,2),En(o));break}}e=e.return}}function km(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new WT;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(V0=!0,n.add(a),t=$T.bind(null,t,e,a),e.then(t,t))}function $T(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ht===t&&(Mt&a)===a&&(aa===4||aa===3&&(Mt&62914560)===Mt&&300>_o()-Dd?wt&2?fd|=a:Yi(t,0):fd|=a,Wi===Mt&&(Wi=0)),En(t)}function bM(t,e){e===0&&(e=Iv()),t=Vs(t,e),t!==null&&(Wc(t,e),En(t))}function eA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),bM(t,a)}function tA(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(se(314))}o!==null&&o.delete(e),bM(t,a)}function aA(t,e){return o0(t,e)}var Zi=null,gi=null,GI=!1,hd=!1,Nm=!1,Pr=0;function En(t){t!==gi&&t.next===null&&(gi===null?Zi=gi=t:gi=gi.next=t),hd=!0,GI||(GI=!0,nA())}function Qc(t,e){if(!Nm&&hd){Nm=!0;do for(var a=!1,o=Zi;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-To(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,wS(o,r))}else r=Mt,r=gd(o,o===Ht?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||qc(o,r)||(a=!0,wS(o,r));o=o.next}while(a);Nm=!1}}function oA(){TM()}function TM(){hd=GI=!1;var t=0;Pr!==0&&pA()&&(t=Pr);for(var e=_o(),a=null,o=Zi;o!==null;){var n=o.next,r=AM(o,e);r===0?(o.next=null,a===null?Zi=n:a.next=n,n===null&&(gi=a)):(a=o,(t!==0||r&3)&&(hd=!0)),o=n}$t!==0&&$t!==5||Qc(t,!1),Pr!==0&&(Pr=0)}function AM(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-To(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=vb(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=Ht,a=Mt,a=gd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Im(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||qc(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&Im(o),r0(a)){case 2:case 8:a=pv;break;case 32:a=Xu;break;case 268435456:a=hv;break;default:a=Xu}return o=wM.bind(null,t),a=o0(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&Im(o),t.callbackPriority=2,t.callbackNode=null,2}function wM(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bd()&&t.callbackNode!==a)return null;var o=Mt;return o=gd(t,t===Ht?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(gM(t,o,e),AM(t,_o()),t.callbackNode!=null&&t.callbackNode===a?wM.bind(null,t):null)}function wS(t,e){if(Bd())return null;gM(t,e,!0)}function nA(){mA(function(){wt&6?o0(dv,oA):TM()})}function q0(){if(Pr===0){var t=Ps;t===0&&(t=nu,nu<<=1,!(nu&261888)&&(nu=256)),Pr=t}return Pr}function ES(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_u(t)}function rA(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=ES((n[ho]||null).action),s=o.submitter;s&&(e=(e=s[ho]||null)?ES(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new Sd("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pr!==0){var l=new FormData(n,s);FI(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),FI(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(Fu=0;Fu<lI.length;Fu++)Su=lI[Fu],RS=Su.toLowerCase(),DS=Su[0].toUpperCase()+Su.slice(1),nn(RS,"on"+DS);var Su,RS,DS,Fu;nn(Hv,"onAnimationEnd");nn(Vv,"onAnimationIteration");nn(Gv,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(IT,"onTransitionRun");nn(xT,"onTransitionStart");nn(gT,"onTransitionCancel");nn(qv,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bc));function EM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){Zu(u)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(u){Zu(u)}n.currentTarget=null,r=l}}}}function vt(t,e){var a=e[bF];a===void 0&&(a=e[bF]=new Set);var o=t+"__bubble";a.has(o)||(RM(e,t,2,!1),a.add(o))}function Om(t,e,a){var o=0;e&&(o|=4),RM(a,t,o,e)}var vu="_reactListening"+Math.random().toString(36).slice(2);function W0(t){if(!t[vu]){t[vu]=!0,yv.forEach(function(a){a!=="selectionchange"&&(sA.has(a)||Om(a,!1,t),Om(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vu]||(e[vu]=!0,Om("selectionchange",!1,e))}}function RM(t,e,a,o){switch(tC(e)){case 2:var n=jA;break;case 8:n=$A;break;default:n=j0}a=n.bind(null,e,a,t),n=void 0,!nI||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function zm(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Cs(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}Ev(function(){var c=r,u=i0(a),h=[];e:{var f=Wv.get(t);if(f!==void 0){var d=Sd,I=t;switch(t){case"keypress":if(Tu(a)===0)break e;case"keydown":case"keyup":d=Xb;break;case"focusin":I="focus",d=ym;break;case"focusout":I="blur",d=ym;break;case"beforeblur":case"afterblur":d=ym;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=PF;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Qb;break;case Hv:case Vv:case Gv:d=kb;break;case qv:d=$b;break;case"scroll":case"scrollend":d=Db;break;case"wheel":d=tT;break;case"copy":case"cut":case"paste":d=Ob;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=UF;break;case"submit":d=Kb;break;case"toggle":case"beforetoggle":d=oT}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),p=y?f!==null?f+"Capture":null:f;y=[];for(var x=c,v;x!==null;){var g=x;if(v=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||v===null||p===null||(g=Tc(x,p),g!=null&&y.push(Uc(x,g,v))),m)break;x=x.return}0<y.length&&(f=new d(f,I,null,a,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&a!==oI&&(I=a.relatedTarget||a.fromElement)&&(Cs(I)||I[el]))break e;(f||d)&&(I=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,f?(d=a.relatedTarget||a.toElement,f=c,d=d?Cs(d):null,d!==null&&(m=Vc(d),y=d.tag,d!==m||y!==5&&y!==27&&y!==6)&&(d=null)):(f=null,d=c),f!==d&&(y=PF,g="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=UF,g="onPointerLeave",p="onPointerEnter",x="pointer"),m=f==null?I:fc(f),v=d==null?I:fc(d),I=new y(g,x+"leave",f,a,u),I.target=m,I.relatedTarget=v,g=null,Cs(u)===c&&(y=new y(p,x+"enter",d,a,u),y.target=v,y.relatedTarget=m,g=y),m=g,y=f&&d?Wm(f,d,iA):null,f!==null&&LS(h,I,f,y,!1),d!==null&&m!==null&&LS(h,m,d,y,!0)))}e:{if(f=c?fc(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var C=zF;else if(OF(f))if(Uv)C=pT;else{C=uT;var b=fT}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&s0(c.elementType)&&(C=zF):C=dT;if(C&&(C=C(t,c))){Bv(h,C,a,u);break e}b&&b(t,f,c)}switch(b=c?fc(c):window,t){case"focusin":(OF(b)||b.contentEditable==="true")&&(Ci=b,sI=c,mc=null);break;case"focusout":mc=sI=Ci=null;break;case"mousedown":iI=!0;break;case"contextmenu":case"mouseup":case"dragend":iI=!1,qF(h,a,u);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":qF(h,a,u)}var w;if(f0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Mi?Lv(t,a)&&(S="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(S="onCompositionStart");S&&(Dv&&a.locale!=="ko"&&(Mi||S!=="onCompositionStart"?S==="onCompositionEnd"&&Mi&&(w=Rv()):(Er=u,l0="value"in Er?Er.value:Er.textContent,Mi=!0)),b=md(c,S),0<b.length&&(S=new BF(S,t,null,a,u),h.push({event:S,listeners:b}),w?S.data=w:(w=Pv(a),w!==null&&(S.data=w)))),(w=rT?sT(t,a):iT(t,a))&&(S=md(c,"onBeforeInput"),0<S.length&&(b=new BF("onBeforeInput","beforeinput",null,a,u),h.push({event:b,listeners:S}),b.data=w)),rA(h,t,c,a,u)}EM(h,e)})}function Uc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function md(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Tc(t,a),n!=null&&o.unshift(Uc(t,n,r)),n=Tc(t,e),n!=null&&o.push(Uc(t,n,r))),t.tag===3)return o;t=t.return}return[]}function iA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function LS(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=Tc(a,r),c!=null&&s.unshift(Uc(a,c,l))):n||(c=Tc(a,r),c!=null&&s.push(Uc(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var lA=/\r\n?/g,cA=/\u0000|\uFFFD/g;function PS(t){return(typeof t=="string"?t:""+t).replace(lA,`
`).replace(cA,"")}function DM(t,e){return e=PS(e),PS(t)===e}function Bt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||Gi(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&Gi(t,""+o);else return;break;case"className":iu(t,"class",o);break;case"tabIndex":iu(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":iu(t,a,o);break;case"style":wv(t,o,r);return;case"data":if(e!=="object"){iu(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_u(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Bt(t,e,"name",n.name,n,null),Bt(t,e,"formEncType",n.formEncType,n,null),Bt(t,e,"formMethod",n.formMethod,n,null),Bt(t,e,"formTarget",n.formTarget,n,null)):(Bt(t,e,"encType",n.encType,n,null),Bt(t,e,"method",n.method,n,null),Bt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_u(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Mn);return;case"onScroll":o!=null&&vt("scroll",t);return;case"onScrollEnd":o!=null&&vt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(se(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(se(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=_u(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Cu(t,"popover",o);break;case"xlinkActuate":Xn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Cu(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Eb.get(a)||a,Cu(t,a,o);else return}At=!0}function qI(t,e,a,o,n,r){switch(a){case"style":wv(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(se(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(se(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")Gi(t,o);else if(typeof o=="number"||typeof o=="bigint")Gi(t,""+o);else return;break;case"onScroll":o!=null&&vt("scroll",t);return;case"onScrollEnd":o!=null&&vt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Mn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[ho]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}At=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Cu(t,a,o)}return}At=!0}function Ba(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(se(137,e));default:Bt(t,e,r,s,a,null)}}n&&Bt(t,e,"srcSet",a.srcSet,a,null),o&&Bt(t,e,"src",a.src,a,null);return;case"input":vt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"name":n=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(se(137,e));break;default:Bt(t,e,o,u,a,null)}}bv(t,r,i,l,c,s,n,!1);return;case"select":vt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Bt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Di(t,!!o,e,!1):a!=null&&Di(t,!!o,a,!0);return;case"textarea":vt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(se(91));break;default:Bt(t,e,s,i,a,null)}Av(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,e,l,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Bc.length;o++)vt(Bc[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(se(137,e));default:Bt(t,e,c,o,a,null)}return;default:if(s0(e)){for(u in a)a.hasOwnProperty(u)&&(o=a[u],o!==void 0&&qI(t,e,u,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Bt(t,e,i,o,a,null))}var fA={};function uA(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,u=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Bt(t,e,d,null,o,h)}}for(var f in o){var d=o[f];if(h=a[f],o.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":d!==h&&(At=!0),r=d;break;case"name":d!==h&&(At=!0),n=d;break;case"checked":d!==h&&(At=!0),c=d;break;case"defaultChecked":d!==h&&(At=!0),u=d;break;case"value":d!==h&&(At=!0),s=d;break;case"defaultValue":d!==h&&(At=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(se(137,e));break;default:d!==h&&Bt(t,e,f,d,o,h)}}aI(t,s,i,l,c,u,r,n);return;case"select":d=s=i=f=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Bt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(At=!0),f=r;break;case"defaultValue":r!==l&&(At=!0),i=r;break;case"multiple":r!==l&&(At=!0),s=r;default:r!==l&&Bt(t,e,n,r,o,l)}e=i,a=s,o=d,f!=null?Di(t,!!a,f,!1):!!o!=!!a&&(e!=null?Di(t,!!a,e,!0):Di(t,!!a,a?[]:"",!1));return;case"textarea":d=f=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Bt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(At=!0),f=n;break;case"defaultValue":n!==r&&(At=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(se(91));break;default:n!==r&&Bt(t,e,s,n,o,r)}Tv(t,f,d);return;case"option":for(var I in a)if(f=a[I],a.hasOwnProperty(I)&&f!=null&&!o.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:Bt(t,e,I,null,o,f)}for(l in o)if(f=o[l],d=a[l],o.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":f!==d&&(At=!0),t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Bt(t,e,l,f,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)f=a[y],a.hasOwnProperty(y)&&f!=null&&!o.hasOwnProperty(y)&&Bt(t,e,y,null,o,f);for(c in o)if(f=o[c],d=a[c],o.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(se(137,e));break;default:Bt(t,e,c,f,o,d)}return;default:if(s0(e)){for(var m in a)f=a[m],a.hasOwnProperty(m)&&f!==void 0&&!o.hasOwnProperty(m)&&qI(t,e,m,void 0,o,f);for(u in o)f=o[u],d=a[u],!o.hasOwnProperty(u)||f===d||f===void 0&&d===void 0||qI(t,e,u,f,o,d);return}}for(var p in a)f=a[p],a.hasOwnProperty(p)&&f!=null&&!o.hasOwnProperty(p)&&Bt(t,e,p,null,o,f);for(h in o)f=o[h],d=a[h],!o.hasOwnProperty(h)||f===d||f==null&&d==null||Bt(t,e,h,f,o,d)}function BS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&BS(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var u=l.transferSize,h=l.initiatorType;u&&BS(h)&&(l=l.responseEnd,s+=u*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var WI=null,XI=null;function kc(t){return t.nodeType===9?t:t.ownerDocument}function US(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function LM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function PM(t,e,a,o){return a=kc(a).createElement(t),a[Ra]=o,a[ho]=e,Ba(a,t,e),_a(a),a}function YI(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hm=null;function pA(){var t=window.event;return t&&t.type==="popstate"?t===Hm?!1:(Hm=t,!0):(Hm=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,kS=typeof Promise=="function"?Promise:void 0,NS=typeof requestAnimationFrame=="function"?requestAnimationFrame:X0,mA=typeof queueMicrotask=="function"?queueMicrotask:typeof kS<"u"?function(t){return kS.resolve(null).then(t).catch(IA)}:X0;function IA(t){setTimeout(function(){throw t})}function Qr(t){return t==="head"}function OS(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),$i(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Gm(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Gm(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[Xc]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&Gm(t.ownerDocument.body);a=n}while(a);$i(e)}function zS(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function BM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function UM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function kM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function ZI(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return kM(e,a,t)}function xA(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return kM(e,a,t)}function gA(t){return t.documentElement.clientHeight}function FA(t){this.addEventListener("load",t),this.addEventListener("error",t)}function SA(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var u=c.startViewTransition({update:function(){var f=c.defaultView,d=f.navigation&&f.navigation.transition,I=c.fonts.status;o();var y=[];if(I==="loaded"&&(gA(c),c.fonts.status==="loading"&&y.push(c.fonts.ready)),I=y.length,t!==null)for(var m=t.suspenseyImages,p=0,x=0;x<m.length;x++){var v=m[x];if(!v.complete){var g=v.getBoundingClientRect();if(0<g.bottom&&0<g.right&&g.top<f.innerHeight&&g.left<f.innerWidth){if(p+=KM(v),p>zu){y.length=I;break}v=new Promise(FA.bind(v)),y.push(v)}}}if(0<y.length)return f=Promise.race([Promise.all(y),new Promise(function(C){return setTimeout(C,500)})]).then(n,n),(d?Promise.allSettled([d.finished,f]):f).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=u;var h=[];return u.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),d=0;d<f.length;d++){var I=f[d],y=I.effect,m=y.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){h.push(I),I=y.getKeyframes();for(var p=m=void 0,x=!0,v=0;v<I.length;v++){var g=I[v],C=g.width;if(m===void 0)m=C;else if(m!==C){x=!1;break}if(C=g.height,p===void 0)p=C;else if(p!==C){x=!1;break}delete g.width,delete g.height,g.transform==="none"&&delete g.transform}x&&m!==void 0&&p!==void 0&&(y.setKeyframes(I),x=getComputedStyle(y.target,y.pseudoElement),x.width!==m||x.height!==p)&&(x=I[0],x.width=m,x.height=p,x=I[I.length-1],x.width=m,x.height=p,y.setKeyframes(I))}}s()},function(f){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{o(),n(),s()}}),u.finished.finally(function(){for(var f=0;f<h.length;f++)h[f].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),i()}),u}catch{return o(),n(),s(),null}}function _s(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}_s.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Vt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};_s.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};_s.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function NM(t){return{name:t,group:new _s("group",t),imagePair:new _s("image-pair",t),old:new _s("old",t),new:new _s("new",t)}}function Eo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Eo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(OM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=Ki(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),po(this._fragmentFiber.child,!1,vA,t,i,o)}this._eventListeners=r}};function vA(t,e,a,o){return xa(t).addEventListener(e,a,o),!1}Eo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=OM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=Ki(n.optionsOrUseCapture),po(this._fragmentFiber.child,!1,yA,t,a,n),o.splice(e,1),r!==null&&r()}};function yA(t,e,a,o){return xa(t).removeEventListener(e,a,o),!1}function Ki(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function HS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function OM(t,e,a,o){if(t.length===0)return-1;o=HS(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&HS(r.optionsOrUseCapture)===o)return n}return-1}Eo.prototype.dispatchEvent=function(t){var e=Os(this._fragmentFiber);if(e===null)return!0;e=xa(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,Ki(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,Ki(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};Eo.prototype.focus=function(t){po(this._fragmentFiber.child,!0,zM,t,void 0,void 0)};function zM(t,e){return t.tag===6?!1:(t=xa(t),PA(t,e))}Eo.prototype.focusLast=function(t){var e=[];po(this._fragmentFiber.child,!0,Y0,e,void 0,void 0);for(var a=e.length-1;0<=a&&!zM(e[a],t);a--);};function Y0(t,e){return e.push(t),!1}Eo.prototype.blur=function(){var t=Os(this._fragmentFiber);t!==null&&(t=xa(t),t=kc(t).activeElement,t!==null&&po(this._fragmentFiber.child,!1,MA,t,void 0,void 0))};function MA(t,e){return t.tag===6?!1:(t=xa(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Eo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),po(this._fragmentFiber.child,!1,CA,t,void 0,void 0)};function CA(t,e){return t.tag===6||(t=xa(t),e.observe(t)),!1}Eo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),po(this._fragmentFiber.child,!1,_A,t,void 0,void 0);for(var a=e=0;a<an.length;a++){var o=an[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):an[e++]=o}an.length=e}};function _A(t,e){return t.tag===6||(t=xa(t),e.unobserve(t)),!1}var an=[],Vm=!1;function bA(t,e,a){an.push({fragmentInstance:t,observer:e,instance:a}),Vm||(Vm=!0,BA(function(){Vm=!1;var o=an;an=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}Eo.prototype.getClientRects=function(){var t=[];return po(this._fragmentFiber.child,!1,TA,t,void 0,void 0),t};function TA(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=xa(t),e.push.apply(e,t.getClientRects());return!1}Eo.prototype.getRootNode=function(t){var e=Os(this._fragmentFiber);return e===null?this:xa(e).getRootNode(t)};Eo.prototype.compareDocumentPosition=function(t){var e=Os(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];po(this._fragmentFiber.child,!1,Y0,a,void 0,void 0);var o=xa(e);if(a.length===0){if(a=o,SF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=lv(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=xa(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=xa(a[0]),n=xa(a[a.length-1]);var r=SF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||AA(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function AA(t,e,a,o,n){var r=Cs(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=Os(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=Wm(a,r,vF),e===null?e=!1:(po(e,!0,nb,r,a),r=Fi,Fi=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=Wm(o,r,vF),e===null?e=!1:(po(e,!0,rb,r,o),r=Fi,qm=Fi=null,e=r!==null)),e):!1}function VS(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Eo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(se(566));var e=[];po(this._fragmentFiber.child,!1,Y0,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=lv(this._fragmentFiber);if(o=a?o[1]||o[0]||Os(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=xa(o),VS(t,a);return}if(o=xa(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=xa(n),VS(n,a)):xa(n).scrollIntoView(t),o+=a?-1:1}};function wA(t,e){return t=xa(t),HM(t,e),!1}function HM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function VM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,Ki(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<an.length;i++){var l=an[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(an[s++]=l)}an.length=s,r.observe(t)}),HM(t,e))}function EA(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,Ki(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?bA(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function KI(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":KI(a),Fd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function RA(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Xc])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Yo(t.nextSibling),t===null)break}return null}function DA(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Yo(t.nextSibling),t===null))return null;return t}function GM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Yo(t.nextSibling),t===null))return null;return t}function JI(t){return t.data==="$?"||t.data==="$~"}function Z0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function LA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Yo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var QI=null;function GS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Yo(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function qS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function PA(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function BA(t){NS(function(){NS(function(e){return t(e)})})}function qM(t,e,a){switch(e=kc(a),t){case"html":if(t=e.documentElement,!t)throw Error(se(452));return t;case"head":if(t=e.head,!t)throw Error(se(453));return t;case"body":if(t=e.body,!t)throw Error(se(454));return t;default:throw Error(se(451))}}function WM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Bt(t,e,o,null,fA,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Mn&&(t.onclick=null),Fd(t)}function Gm(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Fd(t)}var Zo=new Map,WS=new Set;function Nc(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var sr=Et.d;Et.d={f:UA,r:kA,D:NA,C:OA,L:zA,m:HA,X:GA,S:VA,M:qA};function UA(){var t=sr.f(),e=Ld();return t||e}function kA(t){var e=tl(t);e!==null&&e.tag===5&&e.type==="form"?wy(e):sr.r(t)}var rl=typeof document>"u"?null:document;function XM(t,e,a){var o=rl;if(o&&typeof e=="string"&&e){var n=qo(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),WS.has(n)||(WS.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),Ba(e,"link",t),_a(e),o.head.appendChild(e)))}}function NA(t){sr.D(t),XM("dns-prefetch",t,null)}function OA(t,e){sr.C(t,e),XM("preconnect",t,e)}function zA(t,e,a){sr.L(t,e,a);var o=rl;if(o&&t&&e){var n='link[rel="preload"][as="'+qo(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qo(a.imageSizes)+'"]')):n+='[href="'+qo(t)+'"]';var r=n;switch(e){case"style":r=Ji(t);break;case"script":r=sl(t)}if(!(Zo.has(r)||(t=Vt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Zo.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(jc(r))||e==="script"&&o.querySelector($c(r))))){var s=o.createElement("link");Ba(s,"link",t),e==="style"&&(s[Yu]=!0,s.onload=s.onerror=function(){vv(s)}),_a(s),o.head.appendChild(s)}}}function HA(t,e){sr.m(t,e);var a=rl;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+qo(o)+'"][href="'+qo(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=sl(t)}if(!Zo.has(r)&&(t=Vt({rel:"modulepreload",href:t},e),Zo.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($c(r)))return}o=a.createElement("link"),Ba(o,"link",t),_a(o),a.head.appendChild(o)}}}function VA(t,e,a){sr.S(t,e,a);var o=rl;if(o&&t){var n=Ri(o).hoistableStyles,r=Ji(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(jc(r)))i.loading=5;else{t=Vt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Zo.get(r))&&K0(t,a);var l=s=o.createElement("link");_a(l),Ba(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Nu(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function GA(t,e){sr.X(t,e);var a=rl;if(a&&t){var o=Ri(a).hoistableScripts,n=sl(t),r=o.get(n);r||(r=a.querySelector($c(n)),r||(t=Vt({src:t,async:!0},e),(e=Zo.get(n))&&J0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function qA(t,e){sr.M(t,e);var a=rl;if(a&&t){var o=Ri(a).hoistableScripts,n=sl(t),r=o.get(n);r||(r=a.querySelector($c(n)),r||(t=Vt({src:t,async:!0,type:"module"},e),(e=Zo.get(n))&&J0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function XS(t,e,a,o){var n=(n=Br.current)?Nc(n):null;if(!n)throw Error(se(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ji(a.href),e=Ri(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ji(a.href);var r=Ri(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(jc(t)))?r._p||(s.instance=r,s.state.loading=5):(r=Zo.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zo.set(t,r)),WA(n,t,r,s.state))),e&&o===null)throw Error(se(528,""));return s}if(e&&o!==null)throw Error(se(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=sl(a),e=Ri(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(se(444,t))}}function Ji(t){return'href="'+qo(t)+'"'}function jc(t){return'link[rel="stylesheet"]['+t+"]"}function YM(t){return Vt({},t,{"data-precedence":t.precedence,precedence:null})}function WA(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Yu]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[Yu]=!0,e.onload=e.onerror=vv.bind(null,e),Ba(e,"link",a),_a(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function sl(t){return'[src="'+qo(t)+'"]'}function $c(t){return"script[async]"+t}function YS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+qo(a.href)+'"]');if(o)return e.instance=o,_a(o),o;var n=Vt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_a(o),Ba(o,"style",n),Nu(o,a.precedence,t),e.instance=o;case"stylesheet":n=Ji(a.href);var r=t.querySelector(jc(n));if(r)return e.state.loading|=4,e.instance=r,_a(r),r;o=YM(a),(n=Zo.get(n))&&K0(o,n),r=(t.ownerDocument||t).createElement("link"),_a(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),e.state.loading|=4,Nu(r,a.precedence,t),e.instance=r;case"script":return r=sl(a.src),(n=t.querySelector($c(r)))?(e.instance=n,_a(n),n):(o=a,(n=Zo.get(r))&&(o=Vt({},a),J0(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),_a(n),Ba(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(se(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,Nu(o,a.precedence,t));return e.instance}function Nu(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function K0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function J0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ou=null;function ZS(t,e,a){if(Ou===null){var o=new Map,n=Ou=new Map;n.set(a,o)}else n=Ou,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[Xc]||r[Ra]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function jI(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function XA(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function KS(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function ZM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function KM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function JS(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=KM(e),t.suspenseyImages.push(e)),t=KA.bind(t),e.decode().then(t,t))}function YA(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Ji(o.href),r=e.querySelector(jc(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Oc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,_a(r);return}r=e.ownerDocument||e,o=YM(o),(n=Zo.get(n))&&K0(o,n),r=r.createElement("link"),_a(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=Oc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var zu=0;function ZA(t,e){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&zu===0&&(zu=62500*dA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>zu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function JM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Oc(){this.count--,JM(this)}function KA(){this.imgCount--,JM(this)}var Id=null;function Hu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Id=new Map,e.forEach(JA,t),Id=null,Oc.call(t))}function JA(t,e){if(!(e.state.loading&4)){var a=Id.get(t);if(a)var o=a.get(null);else{a=new Map,Id.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=Oc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Qi={$$typeof:yn,Provider:null,Consumer:null,_currentValue:bs,_currentValue2:bs,_threadCount:0};function QA(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xm(0),this.hiddenUpdates=xm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function QM(t,e,a,o,n,r,s,i,l,c,u,h){return t=new QA(t,e,a,s,l,c,u,h,i),e=1,r===!0&&(e|=24),r=fo(3,null,null,e),t.current=r,r.stateNode=t,e=I0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},F0(r),t}function jM(t){return t?(t=Ti,t):Ti}function $M(t,e,a,o,n,r){n=jM(n),o.context===null?o.context=n:o.pendingContext=n,o=kr(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Nr(t,o,e),a!==null&&(uo(a,t,e),xc(a,t,e))}function QS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Q0(t,e){QS(t,e),(t=t.alternate)&&QS(t,e)}function eC(t){if(t.tag===13||t.tag===31){var e=Vs(t,67108864);e!==null&&uo(e,t,67108864),Q0(t,67108864)}}function jS(t){if(t.tag===13||t.tag===31){var e=Ao();e=n0(e);var a=Vs(t,e);a!==null&&uo(a,t,e),Q0(t,e)}}var ji=!0;function jA(t,e,a,o){var n=rt.T;rt.T=null;var r=Et.p;try{Et.p=2,j0(t,e,a,o)}finally{Et.p=r,rt.T=n}}function $A(t,e,a,o){var n=rt.T;rt.T=null;var r=Et.p;try{Et.p=8,j0(t,e,a,o)}finally{Et.p=r,rt.T=n}}function j0(t,e,a,o){if(ji){var n=$I(o);if(n===null)zm(t,e,o,xd,a),$S(t,o);else if(tw(n,t,e,a,o))o.stopPropagation();else if($S(t,o),e&4&&-1<ew.indexOf(t)){for(;n!==null;){var r=tl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=vs(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-To(s);i.entanglements[1]|=l,s&=~l}En(r),!(wt&6)&&(ud=_o()+500,Qc(0,!1))}}break;case 31:case 13:i=Vs(r,2),i!==null&&uo(i,r,2),Ld(),Q0(r,2)}if(r=$I(o),r===null&&zm(t,e,o,xd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else zm(t,e,o,null,a)}}function $I(t){return t=i0(t),$0(t)}var xd=null;function $0(t){if(xd=null,t=Cs(t),t!==null){var e=Vc(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=rv(e),t!==null)return t;t=null}else if(a===31){if(t=sv(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return xd=t,null}function tC(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hb()){case dv:return 2;case pv:return 8;case Xu:case mb:return 32;case hv:return 268435456;default:return 32}default:return 32}}var e0=!1,Vr=null,Gr=null,qr=null,zc=new Map,Hc=new Map,Ar=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $S(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":zc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hc.delete(e.pointerId)}}function sc(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=tl(e),e!==null&&eC(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function tw(t,e,a,o,n){switch(e){case"focusin":return Vr=sc(Vr,t,e,a,o,n),!0;case"dragenter":return Gr=sc(Gr,t,e,a,o,n),!0;case"mouseover":return qr=sc(qr,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return zc.set(r,sc(zc.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Hc.set(r,sc(Hc.get(r)||null,t,e,a,o,n)),!0}return!1}function aC(t){var e=Cs(t.target);if(e!==null){var a=Vc(e);if(a!==null){if(e=a.tag,e===13){if(e=rv(a),e!==null){t.blockedOn=e,_F(t.priority,function(){jS(a)});return}}else if(e===31){if(e=sv(a),e!==null){t.blockedOn=e,_F(t.priority,function(){jS(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=$I(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);oI=o,a.target.dispatchEvent(o),oI=null}else return e=tl(a),e!==null&&eC(e),t.blockedOn=a,!1;e.shift()}return!0}function ev(t,e,a){Vu(t)&&a.delete(e)}function aw(){e0=!1,Vr!==null&&Vu(Vr)&&(Vr=null),Gr!==null&&Vu(Gr)&&(Gr=null),qr!==null&&Vu(qr)&&(qr=null),zc.forEach(ev),Hc.forEach(ev)}function yu(t,e){t.blockedOn===e&&(t.blockedOn=null,e0||(e0=!0,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,aw)))}var Mu=null;function tv(t){Mu!==t&&(Mu=t,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,function(){Mu===t&&(Mu=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if($0(o||a)===null)continue;break}var r=tl(a);r!==null&&(t.splice(e,3),e-=3,FI(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function $i(t){function e(l){return yu(l,t)}Vr!==null&&yu(Vr,t),Gr!==null&&yu(Gr,t),qr!==null&&yu(qr,t),zc.forEach(e),Hc.forEach(e);for(var a=0;a<Ar.length;a++){var o=Ar[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)aC(a),a.blockedOn===null&&Ar.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[ho]||null;if(typeof r=="function")s||tv(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[ho]||null)i=s.formAction;else if($0(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),tv(a)}}}function oC(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function ex(t){this._internalRoot=t}Ud.prototype.render=ex.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));var a=e.current,o=Ao();$M(a,o,t,e,null,null)};Ud.prototype.unmount=ex.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$M(t.current,2,null,t,null,null),Ld(),e[el]=null}};function Ud(t){this._internalRoot=t}Ud.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ar.length&&e!==0&&e<Ar[a].priority;a++);Ar.splice(a,0,t),a===0&&aC(t)}};var av=ov.version;if(av!=="19.3.0")throw Error(se(527,av,"19.3.0"));Et.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=ob(e),t=t!==null?iv(t):null,t=t===null?null:t.stateNode,t};var ow={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:rt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ic=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ic.isDisabled&&ic.supportsFiber))try{Gc=ic.inject(ow),bo=ic}catch{}var ic;kd.createRoot=function(t,e){if(!nv(t))throw Error(se(299));var a=!1,o="",n=ky,r=Ny,s=Oy;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=QM(t,1,!1,null,null,a,o,null,n,r,s,oC),t[el]=e.current,W0(t),new ex(e)};kd.hydrateRoot=function(t,e,a){if(!nv(t))throw Error(se(299));var o=!1,n="",r=ky,s=Ny,i=Oy,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=QM(t,1,!0,e,a??null,o,n,l,r,s,i,oC),e.context=jM(null),a=e.current,o=Ao(),o=n0(o),n=kr(o),n.callback=null,Nr(a,n,o),a=o,e.current.lanes=a,Wc(e,a),En(e),t[el]=e.current,W0(t),new Ud(e)};kd.version="19.3.0"});var iC=Sr((uP,sC)=>{"use strict";st();function rC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rC)}catch(t){console.error(t)}}rC(),sC.exports=nC()});st();var Jl=qn(jo()),Ql=qn(iC());st();var ri=qn(jo());st();st();var Gp="186";var kC=0,Ox=1,NC=2;var Ef=1,OC=2,zl=3,ds=0,no=1,Uo=2,kn=0,Hl=1,zx=2,Hx=3,Vx=4,zC=5;var ei=100,HC=101,VC=102,GC=103,qC=104,WC=200,XC=201,YC=202,ZC=203,Gx=204,qx=205,KC=206,JC=207,QC=208,jC=209,$C=210,e1=211,t1=212,a1=213,o1=214,ip=0,lp=1,cp=2,vl=3,fp=4,up=5,dp=6,pp=7,Wx=0,n1=1,r1=2,un=0,Xx=1,Yx=2,Zx=3,Kx=4,Jx=5,Qx=6,Rf=7;var jx=300,ps=301,ti=302,qp=303,Wp=304,Df=306,Pn=1e3,Jo=1001,hp=1002,Aa=1003,s1=1004;var Lf=1005;var Fa=1006,Xp=1007;var Nn=1008;var xo=1009,$x=1010,eg=1011,Vl=1012,Yp=1013,dn=1014,pn=1015,hn=1016,Zp=1017,Kp=1018,Gl=1020,tg=35902,ag=35899,og=1021,ng=1022,Qo=1023,Bn=1026,hs=1027,rg=1028,Jp=1029,ms=1030,Qp=1031;var jp=1033,Pf=33776,Bf=33777,Uf=33778,kf=33779,$p=35840,eh=35841,th=35842,ah=35843,oh=36196,nh=37492,rh=37496,sh=37488,ih=37489,Nf=37490,lh=37491,ch=37808,fh=37809,uh=37810,dh=37811,ph=37812,hh=37813,mh=37814,Ih=37815,xh=37816,gh=37817,Fh=37818,Sh=37819,vh=37820,yh=37821,Mh=36492,Ch=36494,_h=36495,bh=36283,Th=36284,Of=36285,Ah=36286;var cf=2300,mp=2301,rp=2302,Tx=2303,Ax=2400,wx=2401,Ex=2402;var i1=3200;var wh=0,l1=1,hr="",ka="srgb",ff="srgb-linear",uf="linear",Dt="srgb";var sp=7680;var c1=519,f1=512,u1=513,d1=514,Eh=515,p1=516,h1=517,Rh=518,m1=519,I1=35044;var sg="300 es",fn=2e3,yl=2001;function nw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function df(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function x1(){let t=df("canvas");return t.style.display="block",t}var lC={},Ml=null;function ig(...t){let e="THREE."+t.shift();Ml?Ml("log",e,...t):console.log(e,...t)}function g1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function tt(...t){t=g1(t);let e="THREE."+t.shift();if(Ml)Ml("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function et(...t){t=g1(t);let e="THREE."+t.shift();if(Ml)Ml("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Zs(...t){let e=t.join(" ");e in lC||(lC[e]=!0,tt(...t))}function F1(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var S1={[ip]:lp,[cp]:dp,[fp]:pp,[vl]:up,[lp]:ip,[dp]:cp,[pp]:fp,[up]:vl},Un=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ga=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var tx=Math.PI/180,Ip=180/Math.PI;function ql(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Ga[t&255]+Ga[t>>8&255]+Ga[t>>16&255]+Ga[t>>24&255]+"-"+Ga[e&255]+Ga[e>>8&255]+"-"+Ga[e>>16&15|64]+Ga[e>>24&255]+"-"+Ga[a&63|128]+Ga[a>>8&255]+"-"+Ga[a>>16&255]+Ga[a>>24&255]+Ga[o&255]+Ga[o>>8&255]+Ga[o>>16&255]+Ga[o>>24&255]).toLowerCase()}function St(t,e,a){return Math.max(e,Math.min(a,t))}function sw(t,e){return(t%e+e)%e}function ax(t,e,a){return(1-a)*t+a*e}function ef(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Te=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=St(this.x,e.x,a.x),this.y=St(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=St(this.x,e,a),this.y=St(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(St(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(St(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},eo=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],u=o[n+2],h=o[n+3],f=r[s+0],d=r[s+1],I=r[s+2],y=r[s+3];if(h!==y||l!==f||c!==d||u!==I){let m=l*f+c*d+u*I+h*y;m<0&&(f=-f,d=-d,I=-I,y=-y,m=-m);let p=1-i;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);p=Math.sin(p*x)/v,i=Math.sin(i*x)/v,l=l*p+f*i,c=c*p+d*i,u=u*p+I*i,h=h*p+y*i}else{l=l*p+f*i,c=c*p+d*i,u=u*p+I*i,h=h*p+y*i;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[a]=l,e[a+1]=c,e[a+2]=u,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],u=o[n+3],h=r[s],f=r[s+1],d=r[s+2],I=r[s+3];return e[a]=i*I+u*h+l*d-c*f,e[a+1]=l*I+u*f+c*h-i*d,e[a+2]=c*I+u*d+i*f-l*h,e[a+3]=u*I-i*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),u=i(n/2),h=i(r/2),f=l(o/2),d=l(n/2),I=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h-f*d*I;break;case"YXZ":this._x=f*u*h+c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h+f*d*I;break;case"ZXY":this._x=f*u*h-c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h-f*d*I;break;case"ZYX":this._x=f*u*h-c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h+f*d*I;break;case"YZX":this._x=f*u*h+c*d*I,this._y=c*d*h+f*u*I,this._z=c*u*I-f*d*h,this._w=c*u*h-f*d*I;break;case"XZY":this._x=f*u*h-c*d*I,this._y=c*d*h-f*u*I,this._z=c*u*I+f*d*h,this._w=c*u*h+f*d*I;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],u=a[6],h=a[10],f=o+i+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,u=a._w;return this._x=o*u+s*i+n*c-r*l,this._y=n*u+s*l+r*i-o*c,this._z=r*u+s*c+o*l-n*i,this._w=s*u-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),u=Math.sin(c);l=Math.sin(l*c)/u,a=Math.sin(a*c)/u,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(cC.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(cC.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),u=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*u,this.y=o+l*u+i*c-r*h,this.z=n+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=St(this.x,e.x,a.x),this.y=St(this.y,e.y,a.y),this.z=St(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=St(this.x,e,a),this.y=St(this.y,e,a),this.z=St(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(St(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return ox.copy(this).projectOnVector(e),this.sub(ox)}reflect(e){return this.sub(ox.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(St(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ox=new k,cC=new eo,ft=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=i,u[3]=a,u[4]=r,u[5]=l,u[6]=o,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],u=o[4],h=o[7],f=o[2],d=o[5],I=o[8],y=n[0],m=n[3],p=n[6],x=n[1],v=n[4],g=n[7],C=n[2],b=n[5],w=n[8];return r[0]=s*y+i*x+l*C,r[3]=s*m+i*v+l*b,r[6]=s*p+i*g+l*w,r[1]=c*y+u*x+h*C,r[4]=c*m+u*v+h*b,r[7]=c*p+u*g+h*w,r[2]=f*y+d*x+I*C,r[5]=f*m+d*v+I*b,r[8]=f*p+d*g+I*w,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return a*s*u-a*i*c-o*r*u+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=u*s-i*c,f=i*l-u*r,d=c*r-s*l,I=a*h+o*f+n*d;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/I;return e[0]=h*y,e[1]=(n*c-u*o)*y,e[2]=(i*o-n*s)*y,e[3]=f*y,e[4]=(u*a-n*l)*y,e[5]=(n*r-i*a)*y,e[6]=d*y,e[7]=(o*l-c*a)*y,e[8]=(s*a-o*r)*y,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nx.makeScale(e,a)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nx.makeRotation(-e)),this}translate(e,a){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nx=new ft,fC=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uC=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iw(){let t={enabled:!0,workingColorSpace:ff,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Dt&&(n.r=dr(n.r),n.g=dr(n.g),n.b=dr(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Dt&&(n.r=Sl(n.r),n.g=Sl(n.g),n.b=Sl(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hr?uf:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[ff]:{primaries:e,whitePoint:o,transfer:uf,toXYZ:fC,fromXYZ:uC,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ka},outputColorSpaceConfig:{drawingBufferColorSpace:ka}},[ka]:{primaries:e,whitePoint:o,transfer:Dt,toXYZ:fC,fromXYZ:uC,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ka}}}),t}var Ct=iw();function dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var il,xp=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{il===void 0&&(il=df("canvas")),il.width=e.width,il.height=e.height;let n=il.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=il}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=df("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=dr(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(dr(a[o]/255)*255):a[o]=dr(a[o]);return{data:a,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lw=0,Cl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push(rx(n[s].image)):r.push(rx(n[s]))}else r=rx(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function rx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var cw=0,sx=new k,to=class t extends Un{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=Jo,n=Jo,r=Fa,s=Nn,i=Qo,l=xo,c=t.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=ql(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sx).x}get height(){return this.source.getSize(sx).y}get depth(){return this.source.getSize(sx).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){tt(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Jo:e.x=e.x<0?0:1;break;case hp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Jo:e.y=e.y<0?0:1;break;case hp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};to.DEFAULT_IMAGE=null;to.DEFAULT_MAPPING=jx;to.DEFAULT_ANISOTROPY=1;var jt=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],I=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(I-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(I+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let v=(c+1)/2,g=(d+1)/2,C=(p+1)/2,b=(u+f)/4,w=(h+y)/4,S=(I+m)/4;return v>g&&v>C?v<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(v),n=b/o,r=w/o):g>C?g<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(g),o=b/n,r=S/n):C<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),o=w/r,n=S/r),this.set(o,n,r,a),this}let x=Math.sqrt((m-I)*(m-I)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-I)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=St(this.x,e.x,a.x),this.y=St(this.y,e.y,a.y),this.z=St(this.z,e.z,a.z),this.w=St(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=St(this.x,e,a),this.y=St(this.y,e,a),this.z=St(this.z,e,a),this.w=St(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(St(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gp=class extends Un{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new jt(0,0,e,a),this.scissorTest=!1,this.viewport=new jt(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new to(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Fa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new Cl(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class extends gp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},pf=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fp=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gt=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,u,h,f,d,I,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,u,h,f,d,I,y,m)}set(e,a,o,n,r,s,i,l,c,u,h,f,d,I,y,m){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=I,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/ll.setFromMatrixColumn(e,0).length(),r=1/ll.setFromMatrixColumn(e,1).length(),s=1/ll.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*u,d=s*h,I=i*u,y=i*h;a[0]=l*u,a[4]=-l*h,a[8]=c,a[1]=d+I*c,a[5]=f-y*c,a[9]=-i*l,a[2]=y-f*c,a[6]=I+d*c,a[10]=s*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,I=c*u,y=c*h;a[0]=f+y*i,a[4]=I*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*u,a[9]=-i,a[2]=d*i-I,a[6]=y+f*i,a[10]=s*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,I=c*u,y=c*h;a[0]=f-y*i,a[4]=-s*h,a[8]=I+d*i,a[1]=d+I*i,a[5]=s*u,a[9]=y-f*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let f=s*u,d=s*h,I=i*u,y=i*h;a[0]=l*u,a[4]=I*c-d,a[8]=f*c+y,a[1]=l*h,a[5]=y*c+f,a[9]=d*c-I,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let f=s*l,d=s*c,I=i*l,y=i*c;a[0]=l*u,a[4]=y-f*h,a[8]=I*h+d,a[1]=h,a[5]=s*u,a[9]=-i*u,a[2]=-c*u,a[6]=d*h+I,a[10]=f-y*h}else if(e.order==="XZY"){let f=s*l,d=s*c,I=i*l,y=i*c;a[0]=l*u,a[4]=-h,a[8]=c*u,a[1]=f*h+y,a[5]=s*u,a[9]=d*h-I,a[2]=I*h-d,a[6]=i*u,a[10]=y*h+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fw,e,uw)}lookAt(e,a,o){let n=this.elements;return Ro.subVectors(e,a),Ro.lengthSq()===0&&(Ro.z=1),Ro.normalize(),jr.crossVectors(o,Ro),jr.lengthSq()===0&&(Math.abs(o.z)===1?Ro.x+=1e-4:Ro.z+=1e-4,Ro.normalize(),jr.crossVectors(o,Ro)),jr.normalize(),Nd.crossVectors(Ro,jr),n[0]=jr.x,n[4]=Nd.x,n[8]=Ro.x,n[1]=jr.y,n[5]=Nd.y,n[9]=Ro.y,n[2]=jr.z,n[6]=Nd.z,n[10]=Ro.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],u=o[1],h=o[5],f=o[9],d=o[13],I=o[2],y=o[6],m=o[10],p=o[14],x=o[3],v=o[7],g=o[11],C=o[15],b=n[0],w=n[4],S=n[8],T=n[12],A=n[1],D=n[5],H=n[9],O=n[13],P=n[2],B=n[6],Q=n[10],Y=n[14],ae=n[3],z=n[7],W=n[11],j=n[15];return r[0]=s*b+i*A+l*P+c*ae,r[4]=s*w+i*D+l*B+c*z,r[8]=s*S+i*H+l*Q+c*W,r[12]=s*T+i*O+l*Y+c*j,r[1]=u*b+h*A+f*P+d*ae,r[5]=u*w+h*D+f*B+d*z,r[9]=u*S+h*H+f*Q+d*W,r[13]=u*T+h*O+f*Y+d*j,r[2]=I*b+y*A+m*P+p*ae,r[6]=I*w+y*D+m*B+p*z,r[10]=I*S+y*H+m*Q+p*W,r[14]=I*T+y*O+m*Y+p*j,r[3]=x*b+v*A+g*P+C*ae,r[7]=x*w+v*D+g*B+C*z,r[11]=x*S+v*H+g*Q+C*W,r[15]=x*T+v*O+g*Y+C*j,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],I=e[3],y=e[7],m=e[11],p=e[15],x=l*d-c*f,v=i*d-c*h,g=i*f-l*h,C=s*d-c*u,b=s*f-l*u,w=s*h-i*u;return a*(y*x-m*v+p*g)-o*(I*x-m*C+p*b)+n*(I*v-y*C+p*w)-r*(I*g-y*b+m*w)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],u=e[10];return a*(s*u-i*c)-o*(r*u-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],I=e[12],y=e[13],m=e[14],p=e[15],x=a*i-o*s,v=a*l-n*s,g=a*c-r*s,C=o*l-n*i,b=o*c-r*i,w=n*c-r*l,S=u*y-h*I,T=u*m-f*I,A=u*p-d*I,D=h*m-f*y,H=h*p-d*y,O=f*p-d*m,P=x*O-v*H+g*D+C*A-b*T+w*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return e[0]=(i*O-l*H+c*D)*B,e[1]=(n*H-o*O-r*D)*B,e[2]=(y*w-m*b+p*C)*B,e[3]=(f*b-h*w-d*C)*B,e[4]=(l*A-s*O-c*T)*B,e[5]=(a*O-n*A+r*T)*B,e[6]=(m*g-I*w-p*v)*B,e[7]=(u*w-f*g+d*v)*B,e[8]=(s*H-i*A+c*S)*B,e[9]=(o*A-a*H-r*S)*B,e[10]=(I*b-y*g+p*x)*B,e[11]=(h*g-u*b-d*x)*B,e[12]=(i*T-s*D-l*S)*B,e[13]=(a*D-o*T+n*S)*B,e[14]=(y*v-I*C-m*x)*B,e[15]=(u*C-h*v+f*x)*B,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,u=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,u*i+o,u*l-n*s,0,c*l-n*i,u*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,u=s+s,h=i+i,f=r*c,d=r*u,I=r*h,y=s*u,m=s*h,p=i*h,x=l*c,v=l*u,g=l*h,C=o.x,b=o.y,w=o.z;return n[0]=(1-(y+p))*C,n[1]=(d+g)*C,n[2]=(I-v)*C,n[3]=0,n[4]=(d-g)*b,n[5]=(1-(f+p))*b,n[6]=(m+x)*b,n[7]=0,n[8]=(I+v)*w,n[9]=(m-x)*w,n[10]=(1-(f+y))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=ll.set(n[0],n[1],n[2]).length(),i=ll.set(n[4],n[5],n[6]).length(),l=ll.set(n[8],n[9],n[10]).length();r<0&&(s=-s),rn.copy(this);let c=1/s,u=1/i,h=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,a.setFromRotationMatrix(rn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=fn,l=!1){let c=this.elements,u=2*r/(a-e),h=2*r/(o-n),f=(a+e)/(a-e),d=(o+n)/(o-n),I,y;if(l)I=r/(s-r),y=s*r/(s-r);else if(i===fn)I=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(i===yl)I=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=I,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=fn,l=!1){let c=this.elements,u=2/(a-e),h=2/(o-n),f=-(a+e)/(a-e),d=-(o+n)/(o-n),I,y;if(l)I=1/(s-r),y=s/(s-r);else if(i===fn)I=-2/(s-r),y=-(s+r)/(s-r);else if(i===yl)I=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=I,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},ll=new k,rn=new Gt,fw=new k(0,0,0),uw=new k(1,1,1),jr=new k,Nd=new k,Ro=new k,dC=new Gt,pC=new eo,pr=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(St(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return dC.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dC,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return pC.setFromEuler(this),this.setFromQuaternion(pC,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var _l=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dw=0,hC=new k,cl=new eo,ir=new Gt,Od=new k,tf=new k,pw=new k,hw=new eo,mC=new k(1,0,0),IC=new k(0,1,0),xC=new k(0,0,1),gC={type:"added"},mw={type:"removed"},fl={type:"childadded",child:null},ix={type:"childremoved",child:null},ao=class t extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new k,a=new pr,o=new eo,n=new k(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return cl.setFromAxisAngle(e,a),this.quaternion.multiply(cl),this}rotateOnWorldAxis(e,a){return cl.setFromAxisAngle(e,a),this.quaternion.premultiply(cl),this}rotateX(e){return this.rotateOnAxis(mC,e)}rotateY(e){return this.rotateOnAxis(IC,e)}rotateZ(e){return this.rotateOnAxis(xC,e)}translateOnAxis(e,a){return hC.copy(e).applyQuaternion(this.quaternion),this.position.add(hC.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(mC,e)}translateY(e){return this.translateOnAxis(IC,e)}translateZ(e){return this.translateOnAxis(xC,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?Od.copy(e):Od.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),tf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(tf,Od,this.up):ir.lookAt(Od,tf,this.up),this.quaternion.setFromRotationMatrix(ir),n&&(ir.extractRotation(n.matrixWorld),cl.setFromRotationMatrix(ir),this.quaternion.premultiply(cl.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gC),fl.child=e,this.dispatchEvent(fl),fl.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(mw),ix.child=e,this.dispatchEvent(ix),ix.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gC),fl.child=e,this.dispatchEvent(fl),fl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tf,e,pw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tf,hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),I=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),f.length>0&&(o.skeletons=f),d.length>0&&(o.animations=d),I.length>0&&(o.nodes=I)}return o.object=n,o;function s(i){let l=[];for(let c in i){let u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ao.DEFAULT_UP=new k(0,1,0);ao.DEFAULT_MATRIX_AUTO_UPDATE=!0;ao.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iw={type:"move"},bl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let y of e.hand.values()){let m=a.getJointPose(y,o),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,I=.005;c.inputState.pinching&&f>d+I?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-I&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Iw)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Dn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},v1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},zd={h:0,s:0,l:0};function lx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var pt=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ka){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=Ct.workingColorSpace){return this.r=e,this.g=a,this.b=o,Ct.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=Ct.workingColorSpace){if(e=sw(e,1),a=St(a,0,1),o=St(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=lx(s,r,e+1/3),this.g=lx(s,r,e),this.b=lx(s,r,e-1/3)}return Ct.colorSpaceToWorking(this,n),this}setStyle(e,a=ka){function o(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:tt("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ka){let o=v1[e.toLowerCase()];return o!==void 0?this.setHex(o,a):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Sl(e.r),this.g=Sl(e.g),this.b=Sl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ka){return Ct.workingToColorSpace(qa.copy(this),e),Math.round(St(qa.r*255,0,255))*65536+Math.round(St(qa.g*255,0,255))*256+Math.round(St(qa.b*255,0,255))}getHexString(e=ka){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ct.workingColorSpace){Ct.workingToColorSpace(qa.copy(this),a);let o=qa.r,n=qa.g,r=qa.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,u=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=u<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,a=Ct.workingColorSpace){return Ct.workingToColorSpace(qa.copy(this),a),e.r=qa.r,e.g=qa.g,e.b=qa.b,e}getStyle(e=ka){Ct.workingToColorSpace(qa.copy(this),e);let a=qa.r,o=qa.g,n=qa.b;return e!==ka?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL($r),this.setHSL($r.h+e,$r.s+a,$r.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL($r),e.getHSL(zd);let o=ax($r.h,zd.h,a),n=ax($r.s,zd.s,a),r=ax($r.l,zd.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qa=new pt;pt.NAMES=v1;var Tl=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},sn=new k,lr=new k,cx=new k,cr=new k,ul=new k,dl=new k,FC=new k,fx=new k,ux=new k,dx=new k,px=new jt,hx=new jt,mx=new jt,os=class t{constructor(e=new k,a=new k,o=new k){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),sn.subVectors(e,a),n.cross(sn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){sn.subVectors(n,a),lr.subVectors(o,a),cx.subVectors(e,a);let s=sn.dot(sn),i=sn.dot(lr),l=sn.dot(cx),c=lr.dot(lr),u=lr.dot(cx),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-i*u)*f,I=(s*u-i*l)*f;return r.set(1-d-I,I,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cr.x),l.addScaledVector(s,cr.y),l.addScaledVector(i,cr.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return px.setScalar(0),hx.setScalar(0),mx.setScalar(0),px.fromBufferAttribute(e,a),hx.fromBufferAttribute(e,o),mx.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(px,r.x),s.addScaledVector(hx,r.y),s.addScaledVector(mx,r.z),s}static isFrontFacing(e,a,o,n){return sn.subVectors(o,a),lr.subVectors(e,a),sn.cross(lr).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),sn.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;ul.subVectors(n,o),dl.subVectors(r,o),fx.subVectors(e,o);let l=ul.dot(fx),c=dl.dot(fx);if(l<=0&&c<=0)return a.copy(o);ux.subVectors(e,n);let u=ul.dot(ux),h=dl.dot(ux);if(u>=0&&h<=u)return a.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),a.copy(o).addScaledVector(ul,s);dx.subVectors(e,r);let d=ul.dot(dx),I=dl.dot(dx);if(I>=0&&d<=I)return a.copy(r);let y=d*c-l*I;if(y<=0&&c>=0&&I<=0)return i=c/(c-I),a.copy(o).addScaledVector(dl,i);let m=u*I-d*h;if(m<=0&&h-u>=0&&d-I>=0)return FC.subVectors(r,n),i=(h-u)/(h-u+(d-I)),a.copy(n).addScaledVector(FC,i);let p=1/(m+y+f);return s=y*p,i=f*p,a.copy(o).addScaledVector(ul,s).addScaledVector(dl,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ns=class{constructor(e=new k(1/0,1/0,1/0),a=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(ln.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(ln.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=ln.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,ln):ln.fromBufferAttribute(r,s),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hd.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Hd.copy(o.boundingBox)),Hd.applyMatrix4(e.matrixWorld),this.union(Hd)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(af),Vd.subVectors(this.max,af),pl.subVectors(e.a,af),hl.subVectors(e.b,af),ml.subVectors(e.c,af),es.subVectors(hl,pl),ts.subVectors(ml,hl),qs.subVectors(pl,ml);let a=[0,-es.z,es.y,0,-ts.z,ts.y,0,-qs.z,qs.y,es.z,0,-es.x,ts.z,0,-ts.x,qs.z,0,-qs.x,-es.y,es.x,0,-ts.y,ts.x,0,-qs.y,qs.x,0];return!Ix(a,pl,hl,ml,Vd)||(a=[1,0,0,0,1,0,0,0,1],!Ix(a,pl,hl,ml,Vd))?!1:(Gd.crossVectors(es,ts),a=[Gd.x,Gd.y,Gd.z],Ix(a,pl,hl,ml,Vd))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fr=[new k,new k,new k,new k,new k,new k,new k,new k],ln=new k,Hd=new ns,pl=new k,hl=new k,ml=new k,es=new k,ts=new k,qs=new k,af=new k,Vd=new k,Gd=new k,Ws=new k;function Ix(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){Ws.fromArray(t,r);let i=n.x*Math.abs(Ws.x)+n.y*Math.abs(Ws.y)+n.z*Math.abs(Ws.z),l=e.dot(Ws),c=a.dot(Ws),u=o.dot(Ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}var ua=new k,qd=new Te,xw=0,Xa=class extends Un{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xw++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=I1,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)qd.fromBufferAttribute(this,a),qd.applyMatrix3(e),this.setXY(a,qd.x,qd.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyMatrix3(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyMatrix4(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.applyNormalMatrix(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)ua.fromBufferAttribute(this,a),ua.transformDirection(e),this.setXYZ(a,ua.x,ua.y,ua.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=ef(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=mo(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=ef(a,this.array)),a}setX(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=ef(a,this.array)),a}setY(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=ef(a,this.array)),a}setZ(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=ef(a,this.array)),a}setW(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array),r=mo(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var hf=class extends Xa{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var mf=class extends Xa{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var da=class extends Xa{constructor(e,a,o){super(new Float32Array(e),a,o)}},gw=new ns,of=new k,xx=new k,Al=class{constructor(e=new k,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):gw.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;of.subVectors(e,this.center);let a=of.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(of,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(of.copy(e.center).add(xx)),this.expandByPoint(of.copy(e.center).sub(xx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fw=0,Ko=new Gt,gx=new ao,Il=new k,Do=new ns,nf=new ns,Ta=new k,oo=class t extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nw(e)?mf:hf)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new ft().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ko.makeRotationFromQuaternion(e),this.applyMatrix4(Ko),this}rotateX(e){return Ko.makeRotationX(e),this.applyMatrix4(Ko),this}rotateY(e){return Ko.makeRotationY(e),this.applyMatrix4(Ko),this}rotateZ(e){return Ko.makeRotationZ(e),this.applyMatrix4(Ko),this}translate(e,a,o){return Ko.makeTranslation(e,a,o),this.applyMatrix4(Ko),this}scale(e,a,o){return Ko.makeScale(e,a,o),this.applyMatrix4(Ko),this}lookAt(e){return gx.lookAt(e),gx.updateMatrix(),this.applyMatrix4(gx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Il).negate(),this.translate(Il.x,Il.y,Il.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new da(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];Do.setFromBufferAttribute(r),this.morphTargetsRelative?(Ta.addVectors(this.boundingBox.min,Do.min),this.boundingBox.expandByPoint(Ta),Ta.addVectors(this.boundingBox.max,Do.max),this.boundingBox.expandByPoint(Ta)):(this.boundingBox.expandByPoint(Do.min),this.boundingBox.expandByPoint(Do.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let o=this.boundingSphere.center;if(Do.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];nf.setFromBufferAttribute(i),this.morphTargetsRelative?(Ta.addVectors(Do.min,nf.min),Do.expandByPoint(Ta),Ta.addVectors(Do.max,nf.max),Do.expandByPoint(Ta)):(Do.expandByPoint(nf.min),Do.expandByPoint(nf.max))}Do.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Ta.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Ta));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)Ta.fromBufferAttribute(i,c),l&&(Il.fromBufferAttribute(e,c),Ta.add(Il)),n=Math.max(n,o.distanceToSquared(Ta))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new Xa(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let S=0;S<o.count;S++)i[S]=new k,l[S]=new k;let c=new k,u=new k,h=new k,f=new Te,d=new Te,I=new Te,y=new k,m=new k;function p(S,T,A){c.fromBufferAttribute(o,S),u.fromBufferAttribute(o,T),h.fromBufferAttribute(o,A),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),I.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),I.sub(f);let D=1/(d.x*I.y-I.x*d.y);isFinite(D)&&(y.copy(u).multiplyScalar(I.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-I.x).multiplyScalar(D),i[S].add(y),i[T].add(y),i[A].add(y),l[S].add(m),l[T].add(m),l[A].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,T=x.length;S<T;++S){let A=x[S],D=A.start,H=A.count;for(let O=D,P=D+H;O<P;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new k,g=new k,C=new k,b=new k;function w(S){C.fromBufferAttribute(n,S),b.copy(C);let T=i[S];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),g.crossVectors(b,T);let D=g.dot(l[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,D)}for(let S=0,T=x.length;S<T;++S){let A=x[S],D=A.start,H=A.count;for(let O=D,P=D+H;O<P;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new Xa(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let f=0,d=o.count;f<d;f++)o.setXYZ(f,0,0,0);let n=new k,r=new k,s=new k,i=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let I=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(a,I),r.fromBufferAttribute(a,y),s.fromBufferAttribute(a,m),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),i.fromBufferAttribute(o,I),l.fromBufferAttribute(o,y),c.fromBufferAttribute(o,m),i.add(u),l.add(u),c.add(u),o.setXYZ(I,i.x,i.y,i.z),o.setXYZ(y,l.x,l.y,l.z),o.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=a.count;f<d;f+=3)n.fromBufferAttribute(a,f+0),r.fromBufferAttribute(a,f+1),s.fromBufferAttribute(a,f+2),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Ta.fromBufferAttribute(e,a),Ta.normalize(),e.setXYZ(a,Ta.x,Ta.y,Ta.z)}toNonIndexed(){function e(i,l){let c=i.array,u=i.itemSize,h=i.normalized,f=new c.constructor(l.length*u),d=0,I=0;for(let y=0,m=l.length;y<m;y++){i.isInterleavedBufferAttribute?d=l[y]*i.data.stride+i.offset:d=l[y]*u;for(let p=0;p<u;p++)f[I++]=c[d++]}return new Xa(f,u,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(a))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(a));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fx=new k,Sw=new k,vw=new ft,cn=class{constructor(e=new k(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=Fx.subVectors(o,a).cross(Sw.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(Fx),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||vw.getNormalMatrix(e),n=this.coplanarPoint(Fx).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yw=0,rs=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=ql(),this.name="",this.type="Material",this.blending=Hl,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gx,this.blendDst=qx,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sp,this.stencilZFail=sp,this.stencilZPass=sp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){tt(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new cn().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new Te().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ur=new k,Sx=new k,Wd=new k,Xd=new k,If=class{constructor(e=new k,a=new k(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=ur.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,a),ur.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){Sx.copy(e).add(a).multiplyScalar(.5),Wd.copy(a).sub(e).normalize(),Xd.copy(this.origin).sub(Sx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(Wd),i=Xd.dot(this.direction),l=-Xd.dot(Wd),c=Xd.lengthSq(),u=Math.abs(1-s*s),h,f,d,I;if(u>0)if(h=s*l-i,f=s*i-l,I=r*u,h>=0)if(f>=-I)if(f<=I){let y=1/u;h*=y,f*=y,d=h*(h+s*f+2*i)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;else f<=-I?(h=Math.max(0,-(-s*r+i)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=I?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+i)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+i)),d=-h*h+f*(f+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Sx).addScaledVector(Wd,f),d}intersectSphere(e,a){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);let o=ur.dot(this.direction),n=ur.dot(ur)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(o=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(o=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(i=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,u=i.z,h=e.x-s.x,f=e.y-s.y,d=e.z-s.z,I=a.x-s.x,y=a.y-s.y,m=a.z-s.z,p=o.x-s.x,x=o.y-s.y,v=o.z-s.z,g=Math.abs(l),C=Math.abs(c),b=Math.abs(u),w,S,T,A,D,H,O,P,B,Q,Y,ae;if(g>=C&&g>=b?(T=l,H=h,B=I,ae=p,l>=0?(w=c,S=u,A=f,D=d,O=y,P=m,Q=x,Y=v):(w=u,S=c,A=d,D=f,O=m,P=y,Q=v,Y=x)):C>=b?(T=c,H=f,B=y,ae=x,c>=0?(w=u,S=l,A=d,D=h,O=m,P=I,Q=v,Y=p):(w=l,S=u,A=h,D=d,O=I,P=m,Q=p,Y=v)):(T=u,H=d,B=m,ae=v,u>=0?(w=l,S=c,A=h,D=f,O=I,P=y,Q=p,Y=x):(w=c,S=l,A=f,D=h,O=y,P=I,Q=x,Y=p)),T===0)return null;let z=w/T,W=S/T,j=1/T,Ae=A-z*H,Fe=D-W*H,qe=O-z*B,N=P-W*B,je=Q-z*ae,K=Y-W*ae,J=je*N-K*qe,Ie=Ae*K-Fe*je,ze=qe*Fe-N*Ae;if(n){if(J<0||Ie<0||ze<0)return null}else if((J<0||Ie<0||ze<0)&&(J>0||Ie>0||ze>0))return null;let he=J+Ie+ze;if(he===0)return null;let He=j*(J*H+Ie*B+ze*ae);return(he>0?He<0:He>0)?null:this.at(He/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ks=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},SC=new Gt,Xs=new If,Yd=new Al,vC=new k,Zd=new k,Kd=new k,Jd=new k,vx=new k,Qd=new k,yC=new k,jd=new k,sa=class extends ao{constructor(e=new oo,a=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){Qd.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=i[l],h=r[l];u!==0&&(vx.fromBufferAttribute(h,e),s?Qd.addScaledVector(vx,u):Qd.addScaledVector(vx.sub(a),u))}a.add(Qd)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Yd.copy(o.boundingSphere),Yd.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Yd.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Yd,vC)===null||Xs.origin.distanceToSquared(vC)>(e.far-e.near)**2))&&(SC.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(SC),!(o.boundingBox!==null&&Xs.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,Xs)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let I=0,y=f.length;I<y;I++){let m=f[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(i.count,Math.min(m.start+m.count,d.start+d.count));for(let g=x,C=v;g<C;g+=3){let b=i.getX(g),w=i.getX(g+1),S=i.getX(g+2);n=$d(this,p,e,o,c,u,h,b,w,S),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),y=Math.min(i.count,d.start+d.count);for(let m=I,p=y;m<p;m+=3){let x=i.getX(m),v=i.getX(m+1),g=i.getX(m+2);n=$d(this,s,e,o,c,u,h,x,v,g),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let I=0,y=f.length;I<y;I++){let m=f[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=x,C=v;g<C;g+=3){let b=g,w=g+1,S=g+2;n=$d(this,p,e,o,c,u,h,b,w,S),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=I,p=y;m<p;m+=3){let x=m,v=m+1,g=m+2;n=$d(this,s,e,o,c,u,h,x,v,g),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}}};function Mw(t,e,a,o,n,r,s,i){let l;if(e.side===no?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===ds,i),l===null)return null;jd.copy(i),jd.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(jd);return c<a.near||c>a.far?null:{distance:c,point:jd.clone(),object:t}}function $d(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,Zd),t.getVertexPosition(l,Kd),t.getVertexPosition(c,Jd);let u=Mw(t,e,a,o,Zd,Kd,Jd,yC);if(u){let h=new k;os.getBarycoord(yC,Zd,Kd,Jd,h),n&&(u.uv=os.getInterpolatedAttribute(n,i,l,c,h,new Te)),r&&(u.uv1=os.getInterpolatedAttribute(r,i,l,c,h,new Te)),s&&(u.normal=os.getInterpolatedAttribute(s,i,l,c,h,new k),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let f={a:i,b:l,c,normal:new k,materialIndex:0};os.getNormal(Zd,Kd,Jd,f.normal),u.face=f,u.barycoord=h}return u}var wl=class extends to{constructor(e=null,a=1,o=1,n,r,s,i,l,c=Aa,u=Aa,h,f){super(null,s,i,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=new Al,Cw=new Te(.5,.5),ep=new k,El=class{constructor(e=new cn,a=new cn,o=new cn,n=new cn,r=new cn,s=new cn){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=fn,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],I=r[8],y=r[9],m=r[10],p=r[11],x=r[12],v=r[13],g=r[14],C=r[15];if(n[0].setComponents(c-s,d-u,p-I,C-x).normalize(),n[1].setComponents(c+s,d+u,p+I,C+x).normalize(),n[2].setComponents(c+i,d+h,p+y,C+v).normalize(),n[3].setComponents(c-i,d-h,p-y,C-v).normalize(),o)n[4].setComponents(l,f,m,g).normalize(),n[5].setComponents(c-l,d-f,p-m,C-g).normalize();else if(n[4].setComponents(c-l,d-f,p-m,C-g).normalize(),a===fn)n[5].setComponents(c+l,d+f,p+m,C+g).normalize();else if(a===yl)n[5].setComponents(l,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Ys.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let a=Cw.distanceTo(e.center);return Ys.radius=.7071067811865476+a,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if(ep.x=n.normal.x>0?e.max.x:e.min.x,ep.y=n.normal.y>0?e.max.y:e.min.y,ep.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ep)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xf=class extends to{constructor(e=[],a=ps,o,n,r,s,i,l,c,u){super(e,a,o,n,r,s,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Js=class extends to{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class extends to{constructor(e,a,o=dn,n,r,s,i=Aa,l=Aa,c,u=Bn,h=1){if(u!==Bn&&u!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:h};super(f,n,r,s,i,l,u,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},Sp=class extends ss{constructor(e,a=dn,o=ps,n,r,s=Aa,i=Aa,l,c=Bn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gf=class extends to{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rl=class t extends oo{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=0,d=0;I("z","y","x",-1,-1,o,a,e,s,r,0),I("z","y","x",1,-1,o,a,-e,s,r,1),I("x","z","y",1,1,e,o,a,n,s,2),I("x","z","y",1,-1,e,o,-a,n,s,3),I("x","y","z",1,-1,e,a,o,n,r,4),I("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(u,3)),this.setAttribute("uv",new da(h,2));function I(y,m,p,x,v,g,C,b,w,S,T){let A=g/w,D=C/S,H=g/2,O=C/2,P=b/2,B=w+1,Q=S+1,Y=0,ae=0,z=new k;for(let W=0;W<Q;W++){let j=W*D-O;for(let Ae=0;Ae<B;Ae++){let Fe=Ae*A-H;z[y]=Fe*x,z[m]=j*v,z[p]=P,c.push(z.x,z.y,z.z),z[y]=0,z[m]=0,z[p]=b>0?1:-1,u.push(z.x,z.y,z.z),h.push(Ae/w),h.push(1-W/S),Y+=1}}for(let W=0;W<S;W++)for(let j=0;j<w;j++){let Ae=f+j+B*W,Fe=f+j+B*(W+1),qe=f+(j+1)+B*(W+1),N=f+(j+1)+B*W;l.push(Ae,Fe,N),l.push(Fe,qe,N),ae+=6}i.addGroup(d,ae,T),d+=ae,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Lo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let u=o[n],f=o[n+1]-u,d=(s-u)/f;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new Te:new k);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new k,n=[],r=[],s=[],i=new k,l=new Gt;for(let d=0;d<=e;d++){let I=d/e;n[d]=this.getTangentAt(I,new k)}r[0]=new k,s[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),f<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let I=Math.acos(St(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,I))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(St(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let I=1;I<=e;I++)r[I].applyMatrix4(l.makeRotationAxis(n[I],d*I)),s[I].crossVectors(n[I],r[I])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Dl=class extends Lo{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new Te){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vp=class extends Dl{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function lg(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,u,h){let f=(s-r)/c-(i-r)/(c+u)+(i-s)/u,d=(i-s)/u-(l-s)/(u+h)+(l-i)/h;f*=u,d*=u,n(s,i,f,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var MC=new k,CC=new k,yx=new lg,Mx=new lg,Cx=new lg,Ll=class extends Lo{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new k){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,u;this.closed||i>0?c=n[(i-1)%r]:(CC.subVectors(n[0],n[1]).add(n[0]),c=CC);let h=n[i%r],f=n[(i+1)%r];if(this.closed||i+2<r?u=n[(i+2)%r]:(MC.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=MC),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,I=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),I<1e-4&&(I=y),m<1e-4&&(m=y),yx.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,I,y,m),Mx.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,I,y,m),Cx.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,I,y,m)}else this.curveType==="catmullrom"&&(yx.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Mx.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Cx.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return o.set(yx.calc(l),Mx.calc(l),Cx.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new k().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _C(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function _w(t,e){let a=1-t;return a*a*e}function bw(t,e){return 2*(1-t)*t*e}function Tw(t,e){return t*t*e}function sf(t,e,a,o){return _w(t,e)+bw(t,a)+Tw(t,o)}function Aw(t,e){let a=1-t;return a*a*a*e}function ww(t,e){let a=1-t;return 3*a*a*t*e}function Ew(t,e){return 3*(1-t)*t*t*e}function Rw(t,e){return t*t*t*e}function lf(t,e,a,o,n){return Aw(t,e)+ww(t,a)+Ew(t,o)+Rw(t,n)}var Ff=class extends Lo{constructor(e=new Te,a=new Te,o=new Te,n=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new Te){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(lf(e,n.x,r.x,s.x,i.x),lf(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yp=class extends Lo{constructor(e=new k,a=new k,o=new k,n=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new k){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(lf(e,n.x,r.x,s.x,i.x),lf(e,n.y,r.y,s.y,i.y),lf(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sf=class extends Lo{constructor(e=new Te,a=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Te){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Te){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mp=class extends Lo{constructor(e=new k,a=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new k){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new k){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vf=class extends Lo{constructor(e=new Te,a=new Te,o=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new Te){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(sf(e,n.x,r.x,s.x),sf(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cp=class extends Lo{constructor(e=new k,a=new k,o=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new k){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(sf(e,n.x,r.x,s.x),sf(e,n.y,r.y,s.y),sf(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yf=class extends Lo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Te){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(_C(i,l.x,c.x,u.x,h.x),_C(i,l.y,c.y,u.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new Te().fromArray(n))}return this}},Rx=Object.freeze({__proto__:null,ArcCurve:vp,CatmullRomCurve3:Ll,CubicBezierCurve:Ff,CubicBezierCurve3:yp,EllipseCurve:Dl,LineCurve:Sf,LineCurve3:Mp,QuadraticBezierCurve:vf,QuadraticBezierCurve3:Cp,SplineCurve:yf}),_p=class extends Lo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rx[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let u=l[c];o&&o.equals(u)||(a.push(u),o=u)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new Rx[n.type]().fromJSON(n))}return this}},Qs=class extends _p{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new Sf(this.currentPoint.clone(),new Te(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new vf(this.currentPoint.clone(),new Te(e,a),new Te(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new Ff(this.currentPoint.clone(),new Te(e,a),new Te(o,n),new Te(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new yf(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,a+u,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new Dl(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class extends Qs{constructor(e){super(e),this.uuid=ql(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new Qs().fromJSON(n))}return this}};function Dw(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=y1(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=kw(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let u=i,h=l;for(let f=a;f<n;f+=a){let d=t[f],I=t[f+1];d<i&&(i=d),I<l&&(l=I),d>u&&(u=d),I>h&&(h=I)}c=Math.max(u-i,h-l),c=c!==0?32767/c:0}return Mf(r,s,a,i,l,c,0),s}function y1(t,e,a,o,n){let r;if(n===Zw(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=bC(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=bC(s/o|0,t[s],t[s+1],r);return r&&Pl(r,r.next)&&(_f(r),r=r.next),r}function js(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(Pl(a,a.next)||ea(a.prev,a,a.next)===0)){if(_f(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function Mf(t,e,a,o,n,r,s){if(!t)return;!s&&r&&Vw(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?Pw(t,o,n,r):Lw(t)){e.push(l.i,t.i,c.i),_f(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=Bw(js(t),e),Mf(t,e,a,o,n,r,2)):s===2&&Uw(t,e,a,o,n,r):Mf(js(t),e,a,o,n,r,1);break}}}function Lw(t){let e=t.prev,a=t,o=t.next;if(ea(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,u=Math.min(n,r,s),h=Math.min(i,l,c),f=Math.max(n,r,s),d=Math.max(i,l,c),I=o.next;for(;I!==e;){if(I.x>=u&&I.x<=f&&I.y>=h&&I.y<=d&&rf(n,i,r,l,s,c,I.x,I.y)&&ea(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function Pw(t,e,a,o){let n=t.prev,r=t,s=t.next;if(ea(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,u=n.y,h=r.y,f=s.y,d=Math.min(i,l,c),I=Math.min(u,h,f),y=Math.max(i,l,c),m=Math.max(u,h,f),p=Dx(d,I,e,a,o),x=Dx(y,m,e,a,o),v=t.prevZ,g=t.nextZ;for(;v&&v.z>=p&&g&&g.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&rf(i,u,l,h,c,f,v.x,v.y)&&ea(v.prev,v,v.next)>=0||(v=v.prevZ,g.x>=d&&g.x<=y&&g.y>=I&&g.y<=m&&g!==n&&g!==s&&rf(i,u,l,h,c,f,g.x,g.y)&&ea(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&rf(i,u,l,h,c,f,v.x,v.y)&&ea(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;g&&g.z<=x;){if(g.x>=d&&g.x<=y&&g.y>=I&&g.y<=m&&g!==n&&g!==s&&rf(i,u,l,h,c,f,g.x,g.y)&&ea(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Bw(t,e){let a=t;do{let o=a.prev,n=a.next.next;!Pl(o,n)&&C1(o,a,a.next,n)&&Cf(o,n)&&Cf(n,o)&&(e.push(o.i,a.i,n.i),_f(a),_f(a.next),a=t=n),a=a.next}while(a!==t);return js(a)}function Uw(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&Ww(s,i)){let l=_1(s,i);s=js(s,s.next),l=js(l,l.next),Mf(s,e,a,o,n,r,0),Mf(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function kw(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=y1(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(qw(c))}n.sort(Nw);for(let r=0;r<n.length;r++)a=Ow(n[r],a);return a}function Nw(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function Ow(t,e){let a=zw(t,e);if(!a)return e;let o=_1(a,t);return js(o,o.next),js(a,a.next)}function zw(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(Pl(t,a))return a;do{if(Pl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,u=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&M1(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);Cf(a,t)&&(h<u||h===u&&(a.x>s.x||a.x===s.x&&Hw(s,a)))&&(s=a,u=h)}a=a.next}while(a!==i);return s}function Hw(t,e){return ea(t.prev,t,e.prev)<0&&ea(e.next,t,t.next)<0}function Vw(t,e,a,o){let n=t;do n.z===0&&(n.z=Dx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,Gw(n)}function Gw(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function Dx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function qw(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function M1(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function rf(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&M1(t,e,a,o,n,r,s,i)}function Ww(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Xw(t,e)&&(Cf(t,e)&&Cf(e,t)&&Yw(t,e)&&(ea(t.prev,t,e.prev)||ea(t,e.prev,e))||Pl(t,e)&&ea(t.prev,t,t.next)>0&&ea(e.prev,e,e.next)>0)}function ea(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function Pl(t,e){return t.x===e.x&&t.y===e.y}function C1(t,e,a,o){let n=ap(ea(t,e,a)),r=ap(ea(t,e,o)),s=ap(ea(a,o,t)),i=ap(ea(a,o,e));return!!(n!==r&&s!==i||n===0&&tp(t,a,e)||r===0&&tp(t,o,e)||s===0&&tp(a,t,o)||i===0&&tp(a,e,o))}function tp(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function ap(t){return t>0?1:t<0?-1:0}function Xw(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&C1(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function Cf(t,e){return ea(t.prev,t,t.next)<0?ea(t,e,t.next)>=0&&ea(t,t.prev,e)>=0:ea(t,e,t.prev)<0||ea(t,t.next,e)<0}function Yw(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function _1(t,e){let a=Lx(t.i,t.x,t.y),o=Lx(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function bC(t,e,a,o){let n=Lx(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function _f(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Lx(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zw(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var Px=class{static triangulate(e,a,o=2){return Dw(e,a,o)}},Ln=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];TC(e),AC(o,e);let s=e.length;a.forEach(TC);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,AC(o,a[l]);let i=Px.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function TC(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function AC(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var Bl=class t extends oo{constructor(e=new is([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new da(n,3)),this.setAttribute("uv",new da(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,u=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,f=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,I=a.bevelSize!==void 0?a.bevelSize:d-.1,y=a.bevelOffset!==void 0?a.bevelOffset:0,m=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,x=a.UVGenerator!==void 0?a.UVGenerator:Kw,v,g=!1,C,b,w,S;if(p){v=p.getSpacedPoints(u),g=!0,f=!1;let $=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,$),b=new k,w=new k,S=new k}f||(m=0,d=0,I=0,y=0);let T=i.extractPoints(c),A=T.shape,D=T.holes;if(!Ln.isClockWise(A)){A=A.reverse();for(let $=0,re=D.length;$<re;$++){let ue=D[$];Ln.isClockWise(ue)&&(D[$]=ue.reverse())}}function O($){let ue=10000000000000001e-36,oe=$[0];for(let le=1;le<=$.length;le++){let Be=le%$.length,Ne=$[Be],Pe=Ne.x-oe.x,we=Ne.y-oe.y,E=Pe*Pe+we*we,$e=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(oe.x),Math.abs(oe.y)),Ke=ue*$e*$e;if(E<=Ke){$.splice(Be,1),le--;continue}oe=Ne}}O(A),D.forEach(O);let P=D.length,B=A;for(let $=0;$<P;$++){let re=D[$];A=A.concat(re)}function Q($,re,ue){return re||et("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(re,ue)}let Y=A.length;function ae($,re,ue){let oe,le,Be,Ne=$.x-re.x,Pe=$.y-re.y,we=ue.x-$.x,E=ue.y-$.y,$e=Ne*Ne+Pe*Pe,Ke=Ne*E-Pe*we;if(Math.abs(Ke)>Number.EPSILON){let _=Math.sqrt($e),F=Math.sqrt(we*we+E*E),U=re.x-Pe/_,q=re.y+Ne/_,te=ue.x-E/F,pe=ue.y+we/F,ce=((te-U)*E-(pe-q)*we)/(Ne*E-Pe*we);oe=U+Ne*ce-$.x,le=q+Pe*ce-$.y;let Z=oe*oe+le*le;if(Z<=2)return new Te(oe,le);Be=Math.sqrt(Z/2)}else{let _=!1;Ne>Number.EPSILON?we>Number.EPSILON&&(_=!0):Ne<-Number.EPSILON?we<-Number.EPSILON&&(_=!0):Math.sign(Pe)===Math.sign(E)&&(_=!0),_?(oe=-Pe,le=Ne,Be=Math.sqrt($e)):(oe=Ne,le=Pe,Be=Math.sqrt($e/2))}return new Te(oe/Be,le/Be)}let z=[];for(let $=0,re=B.length,ue=re-1,oe=$+1;$<re;$++,ue++,oe++)ue===re&&(ue=0),oe===re&&(oe=0),z[$]=ae(B[$],B[ue],B[oe]);let W=[],j,Ae=z.concat();for(let $=0,re=P;$<re;$++){let ue=D[$];j=[];for(let oe=0,le=ue.length,Be=le-1,Ne=oe+1;oe<le;oe++,Be++,Ne++)Be===le&&(Be=0),Ne===le&&(Ne=0),j[oe]=ae(ue[oe],ue[Be],ue[Ne]);W.push(j),Ae=Ae.concat(j)}let Fe;if(m===0)Fe=Ln.triangulateShape(B,D);else{let $=[],re=[];for(let ue=0;ue<m;ue++){let oe=ue/m,le=d*Math.cos(oe*Math.PI/2),Be=I*Math.sin(oe*Math.PI/2)+y;for(let Ne=0,Pe=B.length;Ne<Pe;Ne++){let we=Q(B[Ne],z[Ne],Be);Ie(we.x,we.y,-le),oe===0&&$.push(we)}for(let Ne=0,Pe=P;Ne<Pe;Ne++){let we=D[Ne];j=W[Ne];let E=[];for(let $e=0,Ke=we.length;$e<Ke;$e++){let _=Q(we[$e],j[$e],Be);Ie(_.x,_.y,-le),oe===0&&E.push(_)}oe===0&&re.push(E)}}Fe=Ln.triangulateShape($,re)}let qe=Fe.length,N=I+y;for(let $=0;$<Y;$++){let re=f?Q(A[$],Ae[$],N):A[$];g?(w.copy(C.normals[0]).multiplyScalar(re.x),b.copy(C.binormals[0]).multiplyScalar(re.y),S.copy(v[0]).add(w).add(b),Ie(S.x,S.y,S.z)):Ie(re.x,re.y,0)}for(let $=1;$<=u;$++)for(let re=0;re<Y;re++){let ue=f?Q(A[re],Ae[re],N):A[re];g?(w.copy(C.normals[$]).multiplyScalar(ue.x),b.copy(C.binormals[$]).multiplyScalar(ue.y),S.copy(v[$]).add(w).add(b),Ie(S.x,S.y,S.z)):Ie(ue.x,ue.y,h/u*$)}for(let $=m-1;$>=0;$--){let re=$/m,ue=d*Math.cos(re*Math.PI/2),oe=I*Math.sin(re*Math.PI/2)+y;for(let le=0,Be=B.length;le<Be;le++){let Ne=Q(B[le],z[le],oe);Ie(Ne.x,Ne.y,h+ue)}for(let le=0,Be=D.length;le<Be;le++){let Ne=D[le];j=W[le];for(let Pe=0,we=Ne.length;Pe<we;Pe++){let E=Q(Ne[Pe],j[Pe],oe);g?Ie(E.x,E.y+v[u-1].y,v[u-1].x+ue):Ie(E.x,E.y,h+ue)}}}je(),K();function je(){let $=n.length/3;if(f){let re=0,ue=Y*re;for(let oe=0;oe<qe;oe++){let le=Fe[oe];ze(le[2]+ue,le[1]+ue,le[0]+ue)}re=u+m*2,ue=Y*re;for(let oe=0;oe<qe;oe++){let le=Fe[oe];ze(le[0]+ue,le[1]+ue,le[2]+ue)}}else{for(let re=0;re<qe;re++){let ue=Fe[re];ze(ue[2],ue[1],ue[0])}for(let re=0;re<qe;re++){let ue=Fe[re];ze(ue[0]+Y*u,ue[1]+Y*u,ue[2]+Y*u)}}o.addGroup($,n.length/3-$,0)}function K(){let $=n.length/3,re=0;J(B,re),re+=B.length;for(let ue=0,oe=D.length;ue<oe;ue++){let le=D[ue];J(le,re),re+=le.length}o.addGroup($,n.length/3-$,1)}function J($,re){let ue=$.length;for(;--ue>=0;){let oe=ue,le=ue-1;le<0&&(le=$.length-1);for(let Be=0,Ne=u+m*2;Be<Ne;Be++){let Pe=Y*Be,we=Y*(Be+1),E=re+oe+Pe,$e=re+le+Pe,Ke=re+le+we,_=re+oe+we;he(E,$e,Ke,_)}}}function Ie($,re,ue){l.push($),l.push(re),l.push(ue)}function ze($,re,ue){He($),He(re),He(ue);let oe=n.length/3,le=x.generateTopUV(o,n,oe-3,oe-2,oe-1);Ze(le[0]),Ze(le[1]),Ze(le[2])}function he($,re,ue,oe){He($),He(re),He(oe),He(re),He(ue),He(oe);let le=n.length/3,Be=x.generateSideWallUV(o,n,le-6,le-3,le-2,le-1);Ze(Be[0]),Ze(Be[1]),Ze(Be[3]),Ze(Be[1]),Ze(Be[2]),Ze(Be[3])}function He($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function Ze($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return Jw(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Rx[n.type]().fromJSON(n)),new t(o,e.options)}},Kw={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],u=e[n*3+1];return[new Te(r,s),new Te(i,l),new Te(c,u)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],u=e[o*3+1],h=e[o*3+2],f=e[n*3],d=e[n*3+1],I=e[n*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(i-u)<Math.abs(s-c)?[new Te(s,1-l),new Te(c,1-h),new Te(f,1-I),new Te(y,1-p)]:[new Te(i,1-l),new Te(u,1-h),new Te(d,1-I),new Te(m,1-p)]}};function Jw(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var $s=class t extends oo{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,u=l+1,h=e/i,f=a/l,d=[],I=[],y=[],m=[];for(let p=0;p<u;p++){let x=p*f-s;for(let v=0;v<c;v++){let g=v*h-r;I.push(g,-x,0),y.push(0,0,1),m.push(v/i),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<i;x++){let v=x+c*p,g=x+c*(p+1),C=x+1+c*(p+1),b=x+1+c*p;d.push(v,g,b),d.push(g,C,b)}this.setIndex(d),this.setAttribute("position",new da(I,3)),this.setAttribute("normal",new da(y,3)),this.setAttribute("uv",new da(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var bf=class t extends oo{constructor(e=new is([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(i,l,u),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new da(n,3)),this.setAttribute("normal",new da(r,3)),this.setAttribute("uv",new da(s,2));function c(u){let h=n.length/3,f=u.extractPoints(a),d=f.shape,I=f.holes;Ln.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=I.length;m<p;m++){let x=I[m];Ln.isClockWise(x)===!0&&(I[m]=x.reverse())}let y=Ln.triangulateShape(d,I);for(let m=0,p=I.length;m<p;m++){let x=I[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];n.push(x.x,x.y,0),r.push(0,0,1),s.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){let x=y[m],v=x[0]+h,g=x[1]+h,C=x[2]+h;o.push(v,g,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return Qw(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function Qw(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Ul=class t extends oo{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new k,d=new k,I=new k;for(let y=0;y<=o;y++){let m=s+y/o*i;for(let p=0;p<=n;p++){let x=p/n*r;d.x=(e+a*Math.cos(m))*Math.cos(x),d.y=(e+a*Math.cos(m))*Math.sin(x),d.z=a*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),I.subVectors(d,f).normalize(),u.push(I.x,I.y,I.z),h.push(p/n),h.push(y/o)}}for(let y=1;y<=o;y++)for(let m=1;m<=n;m++){let p=(n+1)*y+m-1,x=(n+1)*(y-1)+m-1,v=(n+1)*(y-1)+m,g=(n+1)*y+m;l.push(p,x,g),l.push(x,v,g)}this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(u,3)),this.setAttribute("uv",new da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ai(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if(wC(n))n.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if(wC(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function Ya(t){let e={};for(let a=0;a<t.length;a++){let o=ai(t[a]);for(let n in o)e[n]=o[n]}return e}function wC(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function jw(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function cg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var b1={clone:ai,merge:Ya},$w=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Po=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$w,this.fragmentShader=e2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=jw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new pt().setHex(n.value);break;case"v2":this.uniforms[o].value=new Te().fromArray(n.value);break;case"v3":this.uniforms[o].value=new k().fromArray(n.value);break;case"v4":this.uniforms[o].value=new jt().fromArray(n.value);break;case"m3":this.uniforms[o].value=new ft().fromArray(n.value);break;case"m4":this.uniforms[o].value=new Gt().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bp=class extends Po{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kl=class extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ls=class extends kl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tp=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ap=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function _x(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var cs=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wp=class extends cs{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ax,endingEnd:Ax}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case wx:r=e,i=2*a-o;break;case Ex:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case wx:s=e,l=2*o-a;break;case Ex:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,u=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,I=(o-a)/(n-a),y=I*I,m=y*I,p=-f*m+2*f*y-f*I,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*I+1,v=(-1-d)*m+(1.5+d)*y+.5*I,g=d*m-d*y;for(let C=0;C!==i;++C)r[C]=p*s[u+C]+x*s[c+C]+v*s[l+C]+g*s[h+C];return r}},Ep=class extends cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(o-a)/(n-a),h=1-u;for(let f=0;f!==i;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}},Rp=class extends cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Dp=class extends cs{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this.inTangents,h=this.outTangents;if(!u||!h){let I=(o-a)/(n-a),y=1-I;for(let m=0;m!==i;++m)r[m]=s[c+m]*y+s[l+m]*I;return r}let f=i*2,d=e-1;for(let I=0;I!==i;++I){let y=s[c+I],m=s[l+I],p=d*f+I*2,x=h[p],v=h[p+1],g=e*f+I*2,C=u[g],b=u[g+1],w=a2(o,a,x,C,n);r[I]=T1(w,y,v,b,m)}return r}};function T1(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function t2(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function a2(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=T1(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=t2(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Bo=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xl(a,this.TimeBufferType),this.values=xl(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:xl(e.times,Array),values:xl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),_x(e.settings)&&(o.settings={inTangents:xl(e.settings.inTangents,Array),outTangents:xl(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Dp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case cf:a=this.InterpolantFactoryMethodDiscrete;break;case mp:a=this.InterpolantFactoryMethodLinear;break;case rp:a=this.InterpolantFactoryMethodSmooth;break;case Tx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return tt("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cf;case this.InterpolantFactoryMethodLinear:return mp;case this.InterpolantFactoryMethodSmooth:return rp;case this.InterpolantFactoryMethodBezier:return Tx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;_x(this.settings)&&(EC(this.settings.inTangents,e),EC(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&rw(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===rp,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,f=h-o,d=h+o;for(let I=0;I!==o;++I){let y=a[h+I];if(y!==a[f+I]||y!==a[d+I]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,f=s*o;for(let d=0;d!==o;++d)a[f+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,_x(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function EC(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Bo.prototype.ValueTypeName="";Bo.prototype.TimeBufferType=Float32Array;Bo.prototype.ValueBufferType=Float32Array;Bo.prototype.DefaultInterpolation=mp;var fs=class extends Bo{constructor(e,a,o){super(e,a,o)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=cf;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lp=class extends Bo{constructor(e,a,o,n){super(e,a,o,n)}};Lp.prototype.ValueTypeName="color";var Pp=class extends Bo{constructor(e,a,o,n){super(e,a,o,n)}};Pp.prototype.ValueTypeName="number";var Bp=class extends cs{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let u=c+i;c!==u;c+=4)eo.slerpFlat(r,0,s,c-i,s,c,l);return r}},Tf=class extends Bo{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}};Tf.prototype.ValueTypeName="quaternion";Tf.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Bo{constructor(e,a,o){super(e,a,o)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=cf;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Up=class extends Bo{constructor(e,a,o,n){super(e,a,o,n)}};Up.prototype.ValueTypeName="vector";var kp=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(u){i++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,i),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],I=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return I}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A1=new kp,Np=class{constructor(e){this.manager=e!==void 0?e:A1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Np.DEFAULT_MATERIAL_NAME="__DEFAULT";var Op=class extends ao{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var bx=new Gt,RC=new k,DC=new k,zp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=xo,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;RC.setFromMatrixPosition(e.matrixWorld),a.position.copy(RC),DC.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(DC),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){bx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(bx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===yl||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(bx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},op=new k,np=new eo,Rn=new k,Af=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(op,np,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(op,np,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(op,np,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(op,np,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new k,LC=new Te,PC=new Te,Wa=class extends Af{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Ip*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tx*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ip*2*Math.atan(Math.tan(tx*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,a){return this.getViewBounds(e,LC,PC),a.subVectors(PC,LC)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(tx*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Nl=class extends Af{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Bx=class extends zp{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ol=class extends Op{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ao.DEFAULT_UP),this.updateMatrix(),this.target=new ao,this.shadow=new Bx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var gl=-90,Fl=1,Hp=class extends ao{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Wa(gl,Fl,e,a);n.layers=this.layers,this.add(n);let r=new Wa(gl,Fl,e,a);r.layers=this.layers,this.add(r);let s=new Wa(gl,Fl,e,a);s.layers=this.layers,this.add(s);let i=new Wa(gl,Fl,e,a);i.layers=this.layers,this.add(i);let l=new Wa(gl,Fl,e,a);l.layers=this.layers,this.add(l);let c=new Wa(gl,Fl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===fn)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),I=e.xr.enabled;e.xr.enabled=!1;let y=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=y,e.setRenderTarget(o,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),e.setRenderTarget(h,f,d),e.xr.enabled=I,o.texture.needsPMREMUpdate=!0}},Vp=class extends Wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var fg="\\[\\]\\.:\\/",o2=new RegExp("["+fg+"]","g"),ug="[^"+fg+"]",n2="[^"+fg.replace("\\.","")+"]",r2=/((?:WC+[\/:])*)/.source.replace("WC",ug),s2=/(WCOD+)?/.source.replace("WCOD",n2),i2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ug),l2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ug),c2=new RegExp("^"+r2+s2+i2+l2+"$"),f2=["material","materials","bones","map"],Ux=class{constructor(e,a,o){let n=o||Kt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},Kt=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o2,"")}static parseTrackName(e){let a=c2.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);f2.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=Ux;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pP=new Float32Array(1);var BC=new Gt,wf=class{constructor(e,a,o=0,n=1/0){this.ray=new If(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):et("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return BC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(BC),this}intersectObject(e,a=!0,o=[]){return kx(e,this,o,a),o.sort(UC),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)kx(e[n],this,o,a);return o.sort(UC),o}};function UC(t,e){return t.distance-e.distance}function kx(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)kx(r[s],e,a,!0)}}var Nx=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function dg(t,e,a,o){let n=u2(o);switch(a){case og:return t*e;case rg:return t*e/n.components*n.byteLength;case Jp:return t*e/n.components*n.byteLength;case ms:return t*e*2/n.components*n.byteLength;case Qp:return t*e*2/n.components*n.byteLength;case ng:return t*e*3/n.components*n.byteLength;case Qo:return t*e*4/n.components*n.byteLength;case jp:return t*e*4/n.components*n.byteLength;case Pf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uf:case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case $p:case th:return Math.max(t,8)*Math.max(e,8)/2;case oh:case nh:case sh:case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rh:case Nf:case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mh:case Ch:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bh:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Of:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function u2(t){switch(t){case xo:case $x:return{byteLength:1,components:1};case Vl:case eg:case hn:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case dn:case Yp:case pn:return{byteLength:4,components:1};case tg:case ag:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);function J1(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function d2(t){let e=new WeakMap;function a(i,l){let c=i.array,u=i.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,I)=>d.start-I.start);let f=0;for(let d=1;d<h.length;d++){let I=h[f],y=h[d];y.start<=I.start+I.count+1?I.count=Math.max(I.count,y.start+y.count-I.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,I=h.length;d<I;d++){let y=h[d];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let u=e.get(i);(!u||u.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var p2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h2=`#ifdef USE_ALPHAHASH
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
#endif`,m2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F2=`#ifdef USE_AOMAP
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
#endif`,S2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v2=`#ifdef USE_BATCHING
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
#endif`,y2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b2=`#ifdef USE_IRIDESCENCE
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
#endif`,T2=`#ifdef USE_BUMPMAP
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
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U2=`#define PI 3.141592653589793
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
} // validated`,k2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N2=`vec3 transformedNormal = objectNormal;
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
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G2="gl_FragColor = linearToOutputTexel( gl_FragColor );",q2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W2=`#ifdef USE_ENVMAP
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
#endif`,X2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,Z2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eE=`#ifdef USE_GRADIENTMAP
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
}`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rE=`#ifdef USE_ENVMAP
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
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
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
#endif`,uE=`uniform sampler2D dfgLUT;
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
}`,dE=`
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eR=`#ifdef USE_SKINNING
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
#endif`,tR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aR=`#ifdef USE_SKINNING
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
#endif`,oR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iR=`#ifdef USE_TRANSMISSION
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
#endif`,lR=`#ifdef USE_TRANSMISSION
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
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hR=`uniform sampler2D t2D;
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
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FR=`#include <common>
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
}`,SR=`#if DEPTH_PACKING == 3200
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
}`,vR=`#define DISTANCE
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
}`,yR=`#define DISTANCE
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
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`uniform float scale;
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
}`,bR=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,AR=`uniform vec3 diffuse;
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
}`,wR=`#define LAMBERT
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
}`,ER=`#define LAMBERT
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
}`,RR=`#define MATCAP
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
}`,DR=`#define MATCAP
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
}`,LR=`#define NORMAL
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
}`,PR=`#define NORMAL
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
}`,BR=`#define PHONG
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
}`,UR=`#define PHONG
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
}`,kR=`#define STANDARD
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
}`,NR=`#define STANDARD
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
}`,OR=`#define TOON
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
}`,zR=`#define TOON
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
}`,HR=`uniform float size;
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
}`,VR=`uniform vec3 diffuse;
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
}`,GR=`#include <common>
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
}`,qR=`uniform vec3 color;
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
}`,WR=`uniform float rotation;
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
}`,XR=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:p2,alphahash_pars_fragment:h2,alphamap_fragment:m2,alphamap_pars_fragment:I2,alphatest_fragment:x2,alphatest_pars_fragment:g2,aomap_fragment:F2,aomap_pars_fragment:S2,batching_pars_vertex:v2,batching_vertex:y2,begin_vertex:M2,beginnormal_vertex:C2,bsdfs:_2,iridescence_fragment:b2,bumpmap_pars_fragment:T2,clipping_planes_fragment:A2,clipping_planes_pars_fragment:w2,clipping_planes_pars_vertex:E2,clipping_planes_vertex:R2,color_fragment:D2,color_pars_fragment:L2,color_pars_vertex:P2,color_vertex:B2,common:U2,cube_uv_reflection_fragment:k2,defaultnormal_vertex:N2,displacementmap_pars_vertex:O2,displacementmap_vertex:z2,emissivemap_fragment:H2,emissivemap_pars_fragment:V2,colorspace_fragment:G2,colorspace_pars_fragment:q2,envmap_fragment:W2,envmap_common_pars_fragment:X2,envmap_pars_fragment:Y2,envmap_pars_vertex:Z2,envmap_physical_pars_fragment:rE,envmap_vertex:K2,fog_vertex:J2,fog_pars_vertex:Q2,fog_fragment:j2,fog_pars_fragment:$2,gradientmap_pars_fragment:eE,lightmap_pars_fragment:tE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:oE,lights_pars_begin:nE,lights_toon_fragment:sE,lights_toon_pars_fragment:iE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:fE,lights_physical_pars_fragment:uE,lights_fragment_begin:dE,lights_fragment_maps:pE,lights_fragment_end:hE,lightprobes_pars_fragment:mE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:FE,map_fragment:SE,map_pars_fragment:vE,map_particle_fragment:yE,map_particle_pars_fragment:ME,metalnessmap_fragment:CE,metalnessmap_pars_fragment:_E,morphinstance_vertex:bE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:wE,morphtarget_vertex:EE,normal_fragment_begin:RE,normal_fragment_maps:DE,normal_pars_fragment:LE,normal_pars_vertex:PE,normal_vertex:BE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:zE,opaque_fragment:HE,packing:VE,premultiplied_alpha_fragment:GE,project_vertex:qE,dithering_fragment:WE,dithering_pars_fragment:XE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:JE,shadowmap_vertex:QE,shadowmask_pars_fragment:jE,skinbase_vertex:$E,skinning_pars_vertex:eR,skinning_vertex:tR,skinnormal_vertex:aR,specularmap_fragment:oR,specularmap_pars_fragment:nR,tonemapping_fragment:rR,tonemapping_pars_fragment:sR,transmission_fragment:iR,transmission_pars_fragment:lR,uv_pars_fragment:cR,uv_pars_vertex:fR,uv_vertex:uR,worldpos_vertex:dR,background_vert:pR,background_frag:hR,backgroundCube_vert:mR,backgroundCube_frag:IR,cube_vert:xR,cube_frag:gR,depth_vert:FR,depth_frag:SR,distance_vert:vR,distance_frag:yR,equirect_vert:MR,equirect_frag:CR,linedashed_vert:_R,linedashed_frag:bR,meshbasic_vert:TR,meshbasic_frag:AR,meshlambert_vert:wR,meshlambert_frag:ER,meshmatcap_vert:RR,meshmatcap_frag:DR,meshnormal_vert:LR,meshnormal_frag:PR,meshphong_vert:BR,meshphong_frag:UR,meshphysical_vert:kR,meshphysical_frag:NR,meshtoon_vert:OR,meshtoon_frag:zR,points_vert:HR,points_frag:VR,shadow_vert:GR,shadow_frag:qR,sprite_vert:WR,sprite_frag:XR},ke={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zn={basic:{uniforms:Ya([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Ya([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Ya([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Ya([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Ya([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Ya([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Ya([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Ya([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Ya([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Ya([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Ya([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Ya([ke.common,ke.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Ya([ke.lights,ke.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};zn.physical={uniforms:Ya([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Dh={r:0,b:0,g:0},YR=new Gt,Q1=new ft;Q1.set(-1,0,0,0,1,0,0,0,1);function ZR(t,e,a,o,n,r){let s=new pt(0),i=n===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let g=x.backgroundBlurriness>0;v=e.get(v,g)}return v}function I(x){let v=!1,g=d(x);g===null?m(s,i):g&&g.isColor&&(m(g,1),v=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,v){let g=d(v);g&&(g.isCubeTexture||g.mapping===Df)?(c===void 0&&(c=new sa(new Rl(1,1,1),new Po({name:"BackgroundCubeMaterial",uniforms:ai(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:no,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YR.makeRotationFromEuler(v.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Q1),c.material.toneMapped=Ct.getTransfer(g.colorSpace)!==Dt,(u!==g||h!==g.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=g,h=g.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new sa(new $s(2,2),new Po({name:"BackgroundMaterial",uniforms:ai(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(g.colorSpace)!==Dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||h!==g.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=g,h=g.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(Dh,cg(t)),a.buffers.color.setClear(Dh.r,Dh.g,Dh.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),i=v,m(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(x){i=x,m(s,i)},render:I,addToRenderList:y,dispose:p}}function KR(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=f(null),r=n,s=!1;function i(D,H,O,P,B){let Q=!1,Y=h(D,P,O,H);r!==Y&&(r=Y,c(r.object)),Q=d(D,P,O,B),Q&&I(D,P,O,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,g(D,H,O,P),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function h(D,H,O,P){let B=P.wireframe===!0,Q=o[H.id];Q===void 0&&(Q={},o[H.id]=Q);let Y=D.isInstancedMesh===!0?D.id:0,ae=Q[Y];ae===void 0&&(ae={},Q[Y]=ae);let z=ae[O.id];z===void 0&&(z={},ae[O.id]=z);let W=z[B];return W===void 0&&(W=f(l()),z[B]=W),W}function f(D){let H=[],O=[],P=[];for(let B=0;B<a;B++)H[B]=0,O[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,H,O,P){let B=r.attributes,Q=H.attributes,Y=0,ae=O.getAttributes();for(let z in ae)if(ae[z].location>=0){let j=B[z],Ae=Q[z];if(Ae===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),j===void 0||j.attribute!==Ae||Ae&&j.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function I(D,H,O,P){let B={},Q=H.attributes,Y=0,ae=O.getAttributes();for(let z in ae)if(ae[z].location>=0){let j=Q[z];j===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let Ae={};Ae.attribute=j,j&&j.data&&(Ae.data=j.data),B[z]=Ae,Y++}r.attributes=B,r.attributesNum=Y,r.index=P}function y(){let D=r.newAttributes;for(let H=0,O=D.length;H<O;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let O=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;O[D]=1,P[D]===0&&(t.enableVertexAttribArray(D),P[D]=1),B[D]!==H&&(t.vertexAttribDivisor(D,H),B[D]=H)}function x(){let D=r.newAttributes,H=r.enabledAttributes;for(let O=0,P=H.length;O<P;O++)H[O]!==D[O]&&(t.disableVertexAttribArray(O),H[O]=0)}function v(D,H,O,P,B,Q,Y){Y===!0?t.vertexAttribIPointer(D,H,O,B,Q):t.vertexAttribPointer(D,H,O,P,B,Q)}function g(D,H,O,P){y();let B=P.attributes,Q=O.getAttributes(),Y=H.defaultAttributeValues;for(let ae in Q){let z=Q[ae];if(z.location>=0){let W=B[ae];if(W===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let j=W.normalized,Ae=W.itemSize,Fe=e.get(W);if(Fe===void 0)continue;let qe=Fe.buffer,N=Fe.type,je=Fe.bytesPerElement,K=N===t.INT||N===t.UNSIGNED_INT||W.gpuType===Yp;if(W.isInterleavedBufferAttribute){let J=W.data,Ie=J.stride,ze=W.offset;if(J.isInstancedInterleavedBuffer){for(let he=0;he<z.locationSize;he++)p(z.location+he,J.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<z.locationSize;he++)m(z.location+he);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let he=0;he<z.locationSize;he++)v(z.location+he,Ae/z.locationSize,N,j,Ie*je,(ze+Ae/z.locationSize*he)*je,K)}else{if(W.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)p(z.location+J,W.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let J=0;J<z.locationSize;J++)v(z.location+J,Ae/z.locationSize,N,j,Ae*je,Ae/z.locationSize*J*je,K)}}else if(Y!==void 0){let j=Y[ae];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(z.location,j);break;case 3:t.vertexAttrib3fv(z.location,j);break;case 4:t.vertexAttrib4fv(z.location,j);break;default:t.vertexAttrib1fv(z.location,j)}}}}x()}function C(){T();for(let D in o){let H=o[D];for(let O in H){let P=H[O];for(let B in P){let Q=P[B];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete P[B]}}delete o[D]}}function b(D){if(o[D.id]===void 0)return;let H=o[D.id];for(let O in H){let P=H[O];for(let B in P){let Q=P[B];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete P[B]}}delete o[D.id]}function w(D){for(let H in o){let O=o[H];for(let P in O){let B=O[P];if(B[D.id]===void 0)continue;let Q=B[D.id];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete B[D.id]}}}function S(D){for(let H in o){let O=o[H],P=D.isInstancedMesh===!0?D.id:0,B=O[P];if(B!==void 0){for(let Q in B){let Y=B[Q];for(let ae in Y)u(Y[ae].object),delete Y[ae];delete B[Q]}delete O[P],Object.keys(O).length===0&&delete o[H]}}}function T(){A(),s=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:T,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function JR(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,u){u!==0&&(t.drawArraysInstanced(o,l,c,u),a.update(c,o,u))}function i(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];a.update(f,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function QR(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==Qo&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(w){let S=w===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xo&&w!==pn&&!S&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=a.logarithmicDepthBuffer===!0,f=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&f===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),I=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:I,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:g,maxSamples:C,samples:b}}function jR(t){let e=this,a=null,o=0,n=!1,r=!1,s=new cn,i=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||o!==0||n;return n=f,o=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){a=u(h,f,0)},this.setState=function(h,f,d){let I=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!n||I===null||I.length===0||r&&!m)r?u(null):c();else{let x=r?0:o,v=x*4,g=p.clippingState||null;l.value=g,g=u(I,f,v,d);for(let C=0;C!==v;++C)g[C]=a[C];p.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(h,f,d,I){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,I!==!0||m===null){let p=d+y*4,x=f.matrixWorldInverse;i.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,g=d;v!==y;++v,g+=4)s.copy(h[v]).applyMatrix4(x,i),s.normal.toArray(m,g),m[g+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Xl=4,$R=6,eD=20,tD=256,zf=new Nl,w1=new pt,pg=null,hg=0,mg=0,Ig=!1,aD=new k,oi=new k,Zl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=aD}=r;pg=this._renderer.getRenderTarget(),hg=this._renderer.getActiveCubeFace(),mg=this._renderer.getActiveMipmapLevel(),Ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pg,hg,mg),this._renderer.xr.enabled=Ig,e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===ps||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pg=this._renderer.getRenderTarget(),hg=this._renderer.getActiveCubeFace(),mg=this._renderer.getActiveMipmapLevel(),Ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Fa,minFilter:Fa,generateMipmaps:!1,type:hn,format:Qo,colorSpace:ff,depthBuffer:!1},n=E1(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E1(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oD(r)),this._blurMaterial=rD(r,e,a),this._ggxMaterial=nD(r,e,a)}return n}_compileMaterial(e){let a=new sa(new oo,e);this._renderer.compile(a,zf)}_sceneToCubeUV(e,a,o,n,r){let l=new Wa(90,1,a,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(w1),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Rl,new Ks({name:"PMREM.Background",side:no,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(w1),p=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):g===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let C=this._cubeSize;Wl(n,g*C,v>2?C:0,C,C),h.setRenderTarget(n),p&&h.render(y,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===ps||e.mapping===ti;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=D1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R1());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;Wl(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,zf)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),u=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:I}=this,y=this._sizeLods[o],m=3*y*(o>I-Xl?o-I+Xl:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=I-a,Wl(r,m,p,3*y,2*y),n.setRenderTarget(r),n.render(i,zf),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=I-o,Wl(e,m,p,3*y,2*y),n.setRenderTarget(e),n.render(i,zf)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-Xl?n-this._lodMax+Xl:0),f=4*(this._cubeSize-u);Wl(a,h,f,3*u,2*u),s.setRenderTarget(a),s.render(l,zf)}};function oD(t){let e=[],a=[],o=t,n=t-Xl+1+$R;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,I=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let p=0;p<h;p++){let x=p%3*2/3-1,v=p>2?0:-1,g=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];I.set(g,d*f*p);for(let C=0;C<f;C++){let b=u[C*2]*2-1,w=u[C*2+1]*2-1;p===0?oi.set(1,w,b):p===1?oi.set(-b,1,-w):p===2?oi.set(-b,w,1):p===3?oi.set(-1,w,-b):p===4?oi.set(-b,-1,w):oi.set(b,w,-1),oi.toArray(y,(p*f+C)*d)}}let m=new oo;m.setAttribute("position",new Xa(I,d)),m.setAttribute("outputDirection",new Xa(y,d)),a.push(new sa(m,null)),o>Xl&&o--}return{lodMeshes:a,sizeLods:e}}function E1(t,e,a){let o=new Io(t,e,a);return o.texture.mapping=Df,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Wl(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function nD(t,e,a){return new Po({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rD(t,e,a){return new Po({name:"SphericalGaussianBlur",defines:{SAMPLES:eD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function R1(){return new Po({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function D1(){return new Po({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Uh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ph=class extends Io{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new xf(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Rl(5,5,5),r=new Po({name:"CubemapFromEquirect",uniforms:ai(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:no,blending:kn});r.uniforms.tEquirect.value=a;let s=new sa(n,r),i=a.minFilter;return a.minFilter===Nn&&(a.minFilter=Fa),new Hp(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function sD(t){let e=new WeakMap,a=new WeakMap,o=null;function n(f,d=!1){return f==null?null:d?s(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===qp||d===Wp)if(e.has(f)){let I=e.get(f).texture;return i(I,f.mapping)}else{let I=f.image;if(I&&I.height>0){let y=new Ph(I.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),i(y.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,I=d===qp||d===Wp,y=d===ps||d===ti;if(I||y){let m=a.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return o===null&&(o=new Zl(t)),m=I?o.fromEquirectangular(f,m):o.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,a.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return I&&x&&x.height>0||y&&x&&l(x)?(o===null&&(o=new Zl(t)),m=I?o.fromEquirectangular(f):o.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,a.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function i(f,d){return d===qp?f.mapping=ps:d===Wp&&(f.mapping=ti),f}function l(f){let d=0,I=6;for(let y=0;y<I;y++)f[y]!==void 0&&d++;return d===I}function c(f){let d=f.target;d.removeEventListener("dispose",c);let I=e.get(d);I!==void 0&&(e.delete(d),I.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let I=a.get(d);I!==void 0&&(a.delete(d),I.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function iD(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&Zs("WebGLRenderer: "+o+" extension not supported."),n}}}function lD(t,e,a,o){let n={},r=new WeakMap;function s(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let I in f.attributes)e.remove(f.attributes[I]);f.removeEventListener("dispose",s),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,a.memory.geometries--}function i(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,a.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,I=h.attributes.position,y=0;if(I===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let v=0,g=x.length;v<g;v+=3){let C=x[v+0],b=x[v+1],w=x[v+2];f.push(C,b,b,w,w,C)}}else{let x=I.array;y=I.version;for(let v=0,g=x.length/3-1;v<g;v+=3){let C=v+0,b=v+1,w=v+2;f.push(C,b,b,w,w,C)}}let m=new(I.count>=65535?mf:hf)(f,1);m.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:u}}function cD(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,f){t.drawElements(o,f,r,h*s),a.update(f,o,1)}function c(h,f,d){d!==0&&(t.drawElementsInstanced(o,f,r,h*s,d),a.update(f,o,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,f,0,r,h,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];a.update(y,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function fD(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function uD(t,e,a){let o=new WeakMap,n=new jt;function r(s,i,l){let c=s.morphTargetInfluences,u=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=u!==void 0?u.length:0,f=o.get(i);if(f===void 0||f.count!==h){let T=function(){w.dispose(),o.delete(i),i.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=i.morphAttributes.position!==void 0,I=i.morphAttributes.normal!==void 0,y=i.morphAttributes.color!==void 0,m=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],x=i.morphAttributes.color||[],v=0;d===!0&&(v=1),I===!0&&(v=2),y===!0&&(v=3);let g=i.attributes.position.count*v,C=1;g>e.maxTextureSize&&(C=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let b=new Float32Array(g*C*4*h),w=new pf(b,g,C,h);w.type=pn,w.needsUpdate=!0;let S=v*4;for(let A=0;A<h;A++){let D=m[A],H=p[A],O=x[A],P=g*C*4*A;for(let B=0;B<D.count;B++){let Q=B*S;d===!0&&(n.fromBufferAttribute(D,B),b[P+Q+0]=n.x,b[P+Q+1]=n.y,b[P+Q+2]=n.z,b[P+Q+3]=0),I===!0&&(n.fromBufferAttribute(H,B),b[P+Q+4]=n.x,b[P+Q+5]=n.y,b[P+Q+6]=n.z,b[P+Q+7]=0),y===!0&&(n.fromBufferAttribute(O,B),b[P+Q+8]=n.x,b[P+Q+9]=n.y,b[P+Q+10]=n.z,b[P+Q+11]=O.itemSize===4?n.w:1)}}f={count:h,texture:w,size:new Te(g,C)},o.set(i,f),i.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let I=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",I),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function dD(t,e,a,o,n){let r=new WeakMap;function s(c){let u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function i(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),o.releaseStatesOfObject(u),a.remove(u.instanceMatrix),u.instanceColor!==null&&a.remove(u.instanceColor)}return{update:s,dispose:i}}var pD={[Xx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[Zx]:"CINEON_TONE_MAPPING",[Kx]:"ACES_FILMIC_TONE_MAPPING",[Qx]:"AGX_TONE_MAPPING",[Rf]:"NEUTRAL_TONE_MAPPING",[Jx]:"CUSTOM_TONE_MAPPING"};function hD(t,e,a,o,n,r){let s=new Io(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new oo;c.setAttribute("position",new da([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new da([0,2,0,0,2,0],2));let u=new bp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new sa(c,u),f=new Nl(-1,1,1,-1,0,1),d=null,I=null,y=!1,m,p=null,x=[],v=!1;this.setSize=function(g,C){s.setSize(g,C),i!==null&&i.setSize(g,C),l!==null&&l.setSize(g,C);for(let b=0;b<x.length;b++){let w=x[b];w.setSize&&w.setSize(g,C)}},this.setEffects=function(g){x=g,v=x.length>0&&x[0].isRenderPass===!0;let C=s.width,b=s.height;x.length>0&&i===null&&(i=new Io(C,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Io(C,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let S=x[w];S.setSize&&S.setSize(C,b)}},this.begin=function(g,C){if(y||g.toneMapping===un&&x.length===0)return!1;if(p=C,C!==null){let b=C.width,w=C.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return v===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=un,!0},this.hasRenderPass=function(){return v},this.end=function(g,C){g.toneMapping=m,y=!0;let b=s,w=i;for(let S=0;S<x.length;S++){let T=x[S];T.enabled!==!1&&(T.render(g,w,b,C),T.needsSwap!==!1&&(b=w,w=w===i?l:i))}if(d!==g.outputColorSpace||I!==g.toneMapping){d=g.outputColorSpace,I=g.toneMapping,u.defines={},Ct.getTransfer(d)===Dt&&(u.defines.SRGB_TRANSFER="");let S=pD[I];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,g.setRenderTarget(p),g.render(h,f),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var j1=new to,Fg=new ss(1,1),$1=new pf,e_=new Fp,t_=new xf,L1=[],P1=[],B1=new Float32Array(16),U1=new Float32Array(9),k1=new Float32Array(4);function Kl(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=L1[n];if(r===void 0&&(r=new Float32Array(n),L1[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Sa(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function va(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function kh(t,e){let a=P1[e];a===void 0&&(a=new Int32Array(e),P1[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function mD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function ID(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2fv(this.addr,e),va(a,e)}}function xD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Sa(a,e))return;t.uniform3fv(this.addr,e),va(a,e)}}function gD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4fv(this.addr,e),va(a,e)}}function FD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;k1.set(o),t.uniformMatrix2fv(this.addr,!1,k1),va(a,o)}}function SD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;U1.set(o),t.uniformMatrix3fv(this.addr,!1,U1),va(a,o)}}function vD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;B1.set(o),t.uniformMatrix4fv(this.addr,!1,B1),va(a,o)}}function yD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function MD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2iv(this.addr,e),va(a,e)}}function CD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3iv(this.addr,e),va(a,e)}}function _D(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4iv(this.addr,e),va(a,e)}}function bD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function TD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2uiv(this.addr,e),va(a,e)}}function AD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3uiv(this.addr,e),va(a,e)}}function wD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4uiv(this.addr,e),va(a,e)}}function ED(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(Fg.compareFunction=a.isReversedDepthBuffer()?Rh:Eh,r=Fg):r=j1,a.setTexture2D(e||r,n)}function RD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||e_,n)}function DD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||t_,n)}function LD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||$1,n)}function PD(t){switch(t){case 5126:return mD;case 35664:return ID;case 35665:return xD;case 35666:return gD;case 35674:return FD;case 35675:return SD;case 35676:return vD;case 5124:case 35670:return yD;case 35667:case 35671:return MD;case 35668:case 35672:return CD;case 35669:case 35673:return _D;case 5125:return bD;case 36294:return TD;case 36295:return AD;case 36296:return wD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return RD;case 35680:case 36300:case 36308:case 36293:return DD;case 36289:case 36303:case 36311:case 36292:return LD}}function BD(t,e){t.uniform1fv(this.addr,e)}function UD(t,e){let a=Kl(e,this.size,2);t.uniform2fv(this.addr,a)}function kD(t,e){let a=Kl(e,this.size,3);t.uniform3fv(this.addr,a)}function ND(t,e){let a=Kl(e,this.size,4);t.uniform4fv(this.addr,a)}function OD(t,e){let a=Kl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function zD(t,e){let a=Kl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function HD(t,e){let a=Kl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function VD(t,e){t.uniform1iv(this.addr,e)}function GD(t,e){t.uniform2iv(this.addr,e)}function qD(t,e){t.uniform3iv(this.addr,e)}function WD(t,e){t.uniform4iv(this.addr,e)}function XD(t,e){t.uniform1uiv(this.addr,e)}function YD(t,e){t.uniform2uiv(this.addr,e)}function ZD(t,e){t.uniform3uiv(this.addr,e)}function KD(t,e){t.uniform4uiv(this.addr,e)}function JD(t,e,a){let o=this.cache,n=e.length,r=kh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Fg:s=j1;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function QD(t,e,a){let o=this.cache,n=e.length,r=kh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||e_,r[s])}function jD(t,e,a){let o=this.cache,n=e.length,r=kh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||t_,r[s])}function $D(t,e,a){let o=this.cache,n=e.length,r=kh(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||$1,r[s])}function eL(t){switch(t){case 5126:return BD;case 35664:return UD;case 35665:return kD;case 35666:return ND;case 35674:return OD;case 35675:return zD;case 35676:return HD;case 5124:case 35670:return VD;case 35667:case 35671:return GD;case 35668:case 35672:return qD;case 35669:case 35673:return WD;case 5125:return XD;case 36294:return YD;case 36295:return ZD;case 36296:return KD;case 35678:case 36198:case 36298:case 36306:case 35682:return JD;case 35679:case 36299:case 36307:return QD;case 35680:case 36300:case 36308:case 36293:return jD;case 36289:case 36303:case 36311:case 36292:return $D}}var Sg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=PD(a.type)}},vg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=eL(a.type)}},yg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},xg=/(\w+)(\])?(\[|\.)?/g;function N1(t,e){t.seq.push(e),t.map[e.id]=e}function tL(t,e,a){let o=t.name,n=o.length;for(xg.lastIndex=0;;){let r=xg.exec(o),s=xg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){N1(a,c===void 0?new Sg(i,t,e):new vg(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new yg(i),N1(a,h)),a=h}}}var Yl=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);tL(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function O1(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var aL=37297,oL=0;function nL(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var z1=new ft;function rL(t){Ct._getMatrix(z1,Ct.workingColorSpace,t);let e=`mat3( ${z1.elements.map(a=>a.toFixed(4))} )`;switch(Ct.getTransfer(t)){case uf:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function H1(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+nL(t.getShaderSource(e),i)}else return r}function sL(t,e){let a=rL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var iL={[Xx]:"Linear",[Yx]:"Reinhard",[Zx]:"Cineon",[Kx]:"ACESFilmic",[Qx]:"AgX",[Rf]:"Neutral",[Jx]:"Custom"};function lL(t,e){let a=iL[e];return a===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Lh=new k;function cL(){Ct.getLuminanceCoefficients(Lh);let t=Lh.x.toFixed(4),e=Lh.y.toFixed(4),a=Lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vf).join(`
`)}function uL(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function dL(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function Vf(t){return t!==""}function V1(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mg(t){return t.replace(pL,mL)}var hL=new Map;function mL(t,e){let a=gt[e];if(a===void 0){let o=hL.get(e);if(o!==void 0)a=gt[o],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mg(a)}var IL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q1(t){return t.replace(IL,xL)}function xL(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function W1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var gL={[Ef]:"SHADOWMAP_TYPE_PCF",[zl]:"SHADOWMAP_TYPE_VSM"};function FL(t){return gL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SL={[ps]:"ENVMAP_TYPE_CUBE",[ti]:"ENVMAP_TYPE_CUBE",[Df]:"ENVMAP_TYPE_CUBE_UV"};function vL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":SL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var yL={[ti]:"ENVMAP_MODE_REFRACTION"};function ML(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":yL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var CL={[Wx]:"ENVMAP_BLENDING_MULTIPLY",[n1]:"ENVMAP_BLENDING_MIX",[r1]:"ENVMAP_BLENDING_ADD"};function _L(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":CL[t.combine]||"ENVMAP_BLENDING_NONE"}function bL(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function TL(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=FL(a),c=vL(a),u=ML(a),h=_L(a),f=bL(a),d=fL(a),I=uL(r),y=n.createProgram(),m,p,x=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(m=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(Vf).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(Vf).join(`
`),p.length>0&&(p+=`
`)):(m=[W1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vf).join(`
`),p=[W1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+u:"",a.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==un?"#define TONE_MAPPING":"",a.toneMapping!==un?gt.tonemapping_pars_fragment:"",a.toneMapping!==un?lL("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,sL("linearToOutputTexel",a.outputColorSpace),cL(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Vf).join(`
`)),s=Mg(s),s=V1(s,a),s=G1(s,a),i=Mg(i),i=V1(i,a),i=G1(i,a),s=q1(s),i=q1(i),a.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",a.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+s,g=x+p+i,C=O1(n,n.VERTEX_SHADER,v),b=O1(n,n.FRAGMENT_SHADER,g);n.attachShader(y,C),n.attachShader(y,b),a.index0AttributeName!==void 0?n.bindAttribLocation(y,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function w(D){if(t.debug.checkShaderErrors){let H=n.getProgramInfoLog(y)||"",O=n.getShaderInfoLog(C)||"",P=n.getShaderInfoLog(b)||"",B=H.trim(),Q=O.trim(),Y=P.trim(),ae=!0,z=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,y,C,b);else{let W=H1(n,C,"vertex"),j=H1(n,b,"fragment");et("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+W+`
`+j)}else B!==""?tt("WebGLProgram: Program Info Log:",B):(Q===""||Y==="")&&(z=!1);z&&(D.diagnostics={runnable:ae,programLog:B,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(C),n.deleteShader(b),S=new Yl(n,y),T=dL(n,y)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(y,aL)),A},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=oL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}var AL=0,Cg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new _g(e),a.set(e,o)),o}},_g=class{constructor(e){this.id=AL++,this.code=e,this.usedTimes=0}};function wL(t){return t===ms||t===Nf||t===Of}function EL(t,e,a,o,n,r){let s=new _l,i=new Cg,l=new Set,c=[],u=new Map,h=o.logarithmicDepthBuffer,f=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,T,A,D,H,O){let P=D.fog,B=H.geometry,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ae=e.get(S.envMap||Q,Y),z=ae&&ae.mapping===Df?ae.image.height:null,W=d[S.type];S.precision!==null&&(f=o.getMaxPrecision(S.precision),f!==S.precision&&tt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ae=j!==void 0?j.length:0,Fe=0;B.morphAttributes.position!==void 0&&(Fe=1),B.morphAttributes.normal!==void 0&&(Fe=2),B.morphAttributes.color!==void 0&&(Fe=3);let qe,N,je,K;if(W){let ut=zn[W];qe=ut.vertexShader,N=ut.fragmentShader}else{qe=S.vertexShader,N=S.fragmentShader;let ut=i.getVertexShaderStage(S),it=i.getFragmentShaderStage(S);i.update(S,ut,it),je=ut.id,K=it.id}let J=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),ze=H.isInstancedMesh===!0,he=H.isBatchedMesh===!0,He=!!S.map,Ze=!!S.matcap,$=!!ae,re=!!S.aoMap,ue=!!S.lightMap,oe=!!S.bumpMap&&S.wireframe===!1,le=!!S.normalMap,Be=!!S.displacementMap,Ne=!!S.emissiveMap,Pe=!!S.metalnessMap,we=!!S.roughnessMap,E=S.anisotropy>0,$e=S.clearcoat>0,Ke=S.dispersion>0,_=S.retroreflectivity>0,F=S.iridescence>0,U=S.sheen>0,q=S.transmission>0,te=E&&!!S.anisotropyMap,pe=$e&&!!S.clearcoatMap,ce=$e&&!!S.clearcoatNormalMap,Z=$e&&!!S.clearcoatRoughnessMap,ne=F&&!!S.iridescenceMap,ve=F&&!!S.iridescenceThicknessMap,Ge=U&&!!S.sheenColorMap,Me=U&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,fe=!!S.specularColorMap,xe=!!S.specularIntensityMap,Se=q&&!!S.transmissionMap,L=q&&!!S.thicknessMap,de=!!S.gradientMap,ee=!!S.alphaMap,ge=S.alphaTest>0,ye=!!S.alphaHash,ie=!!S.extensions,Le=un;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Le=t.toneMapping);let Ue={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:N,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&H._colorsTexture!==null,instancing:ze,instancingColor:ze&&H.instanceColor!==null,instancingMorph:ze&&H.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:Ze,envMap:$,envMapMode:$&&ae.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:ue,bumpMap:oe,normalMap:le,displacementMap:Be,emissiveMap:Ne,normalMapObjectSpace:le&&S.normalMapType===l1,normalMapTangentSpace:le&&S.normalMapType===wh,packedNormalMap:le&&S.normalMapType===wh&&wL(S.normalMap.format),metalnessMap:Pe,roughnessMap:we,anisotropy:E,anisotropyMap:te,clearcoat:$e,clearcoatMap:pe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Z,dispersion:Ke,retroreflection:_,iridescence:F,iridescenceMap:ne,iridescenceThicknessMap:ve,sheen:U,sheenColorMap:Ge,sheenRoughnessMap:Me,specularMap:Ce,specularColorMap:fe,specularIntensityMap:xe,transmission:q,transmissionMap:Se,thicknessMap:L,gradientMap:de,opaque:S.transparent===!1&&S.blending===Hl&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:ye,combine:S.combine,mapUv:He&&I(S.map.channel),aoMapUv:re&&I(S.aoMap.channel),lightMapUv:ue&&I(S.lightMap.channel),bumpMapUv:oe&&I(S.bumpMap.channel),normalMapUv:le&&I(S.normalMap.channel),displacementMapUv:Be&&I(S.displacementMap.channel),emissiveMapUv:Ne&&I(S.emissiveMap.channel),metalnessMapUv:Pe&&I(S.metalnessMap.channel),roughnessMapUv:we&&I(S.roughnessMap.channel),anisotropyMapUv:te&&I(S.anisotropyMap.channel),clearcoatMapUv:pe&&I(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&I(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&I(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&I(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&I(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&I(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&I(S.sheenRoughnessMap.channel),specularMapUv:Ce&&I(S.specularMap.channel),specularColorMapUv:fe&&I(S.specularColorMap.channel),specularIntensityMapUv:xe&&I(S.specularIntensityMap.channel),transmissionMapUv:Se&&I(S.transmissionMap.channel),thicknessMapUv:L&&I(S.thicknessMap.channel),alphaMapUv:ee&&I(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(le||E),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(He||ee),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&le===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Fe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ct.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Uo,flipSided:S.side===no,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&S.extensions.multiDraw===!0||he)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)T.push(A),T.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(p(T,S),x(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function v(S){let T=d[S.type],A;if(T){let D=zn[T];A=b1.clone(D.uniforms)}else A=S.uniforms;return A}function g(S,T){let A=u.get(T);return A!==void 0?++A.usedTimes:(A=new TL(t,T,S,n),c.push(A),u.set(T,A)),A}function C(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){i.remove(S)}function w(){i.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:g,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:w}}function RL(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function DL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function X1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Y1(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function i(f,d,I,y,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:I,materialVariant:s(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=I,x.materialVariant=s(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,d,I,y,m,p,x){x.reversedDepth===!0&&(m=-m);let v=i(f,d,I,y,m,p);I.transmission>0?o.push(v):I.transparent===!0?n.push(v):a.push(v)}function c(f,d,I,y,m,p){let x=i(f,d,I,y,m,p);I.transmission>0?o.unshift(x):I.transparent===!0?n.unshift(x):a.unshift(x)}function u(f,d){a.length>1&&a.sort(f||DL),o.length>1&&o.sort(d||X1),n.length>1&&n.sort(d||X1)}function h(){for(let f=e,d=t.length;f<d;f++){let I=t[f];if(I.id===null)break;I.id=null,I.object=null,I.geometry=null,I.material=null,I.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:u}}function LL(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new Y1,t.set(o,[s])):n>=r.length?(s=new Y1,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function PL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new k,color:new pt};break;case"SpotLight":a={position:new k,direction:new k,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new k,color:new pt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new k,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":a={color:new pt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=a,a}}}function BL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var UL=0;function kL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NL(t){let e=new PL,a=BL(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new k);let n=new k,r=new Gt,s=new Gt;function i(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)o.probe[H].set(0,0,0);let d=0,I=0,y=0,m=0,p=0,x=0,v=0,g=0,C=0,b=0,w=0,S=0,T=0,A=0;c.sort(kL);for(let H=0,O=c.length;H<O;H++){let P=c[H],B=P.color,Q=P.intensity,Y=P.distance,ae=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ms?ae=P.shadow.map.texture:ae=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=B.r*Q,h+=B.g*Q,f+=B.b*Q;else if(P.isLightProbe){for(let z=0;z<9;z++)o.probe[z].addScaledVector(P.sh.coefficients[z],Q);A++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,j=a.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),o.sunShadow[I]=j,o.sunShadowMap[I]=ae;let Ae=W.getViewportCount();for(let Fe=0;Fe<Ae;Fe++)o.sunShadowMatrix[y+Fe]=W.getMatrix(Fe),o.sunShadowCascade[y+Fe]=W._cascadeData[Fe];y+=Ae,I++}o.sun[d]=z,d++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,j=a.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,o.directionalShadow[m]=j,o.directionalShadowMap[m]=ae,o.directionalShadowMatrix[m]=P.shadow.matrix,C++}o.directional[m]=z,m++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(Q),z.distance=Y,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,o.spot[x]=z;let W=P.shadow;if(P.map&&(o.spotLightMap[S]=P.map,S++,W.updateMatrices(P),P.castShadow&&T++),o.spotLightMatrix[x]=W.matrix,P.castShadow){let j=a.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,o.spotShadow[x]=j,o.spotShadowMap[x]=ae,w++}x++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(B).multiplyScalar(Q),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),o.rectArea[v]=z,v++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let W=P.shadow,j=a.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,o.pointShadow[p]=j,o.pointShadowMap[p]=ae,o.pointShadowMatrix[p]=P.shadow.matrix,b++}o.point[p]=z,p++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(Q),z.groundColor.copy(P.groundColor).multiplyScalar(Q),o.hemi[g]=z,g++}}v>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ke.LTC_FLOAT_1,o.rectAreaLTC2=ke.LTC_FLOAT_2):(o.rectAreaLTC1=ke.LTC_HALF_1,o.rectAreaLTC2=ke.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=f;let D=o.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==v||D.hemiLength!==g||D.numSunShadows!==I||D.numDirectionalShadows!==C||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==S||D.numLightProbes!==A)&&(o.sun.length=d,o.directional.length=m,o.spot.length=x,o.rectArea.length=v,o.point.length=p,o.hemi.length=g,o.sunShadow.length=I,o.sunShadowMap.length=I,o.sunShadowMatrix.length=y,o.sunShadowCascade.length=y,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.directionalShadowMatrix.length=C,o.pointShadow.length=b,o.pointShadowMap.length=b,o.pointShadowMatrix.length=b,o.spotShadow.length=w,o.spotShadowMap.length=w,o.spotLightMatrix.length=w+S-T,o.spotLightMap.length=S,o.numSpotLightShadowsWithMaps=T,o.numLightProbes=A,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=x,D.rectAreaLength=v,D.hemiLength=g,D.numSunShadows=I,D.numDirectionalShadows=C,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=S,D.numLightProbes=A,o.version=UL++)}function l(c,u){let h=0,f=0,d=0,I=0,y=0,m=0,p=u.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let g=c[x];if(g.isSunLight){let C=o.sun[h];C.direction.setFromMatrixPosition(g.matrixWorld),C.direction.transformDirection(p),h++}else if(g.isDirectionalLight){let C=o.directional[f];C.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),f++}else if(g.isSpotLight){let C=o.spot[I];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),I++}else if(g.isRectAreaLight){let C=o.rectArea[y];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(g.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(g.width*.5,0,0),C.halfHeight.set(0,g.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),y++}else if(g.isPointLight){let C=o.point[d];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){let C=o.hemi[m];C.direction.setFromMatrixPosition(g.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:i,setupView:l,state:o}}function Z1(t){let e=new NL(t),a=[],o=[],n=[];function r(f){h.camera=f,a.length=0,o.length=0,n.length=0}function s(f){a.push(f)}function i(f){o.push(f)}function l(f){n.push(f)}function c(){e.setup(a)}function u(f){e.setupView(a,f)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function OL(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new Z1(t),e.set(n,[i])):r>=s.length?(i=new Z1(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var zL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HL=`uniform sampler2D shadow_pass;
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
}`,VL=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],GL=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],K1=new Gt,Hf=new k,gg=new k;function qL(t,e,a){let o=new El,n=new Te,r=new Te,s=new jt,i=new Tp,l=new Ap,c={},u=a.maxTextureSize,h={[ds]:no,[no]:ds,[Uo]:Uo},f=new Po({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:zL,fragmentShader:HL}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let I=new oo;I.setAttribute("position",new Xa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new sa(I,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(b,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===OC&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ef);let T=t.getRenderTarget(),A=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),H=t.state;H.setBlending(kn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=p!==this.type;O&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=b.length;P<B;P++){let Q=b[P],Y=Q.shadow;if(Y===void 0){tt("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let ae=Y.getFrameExtents();n.multiply(ae),r.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/ae.x),n.x=r.x*ae.x,Y.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/ae.y),n.y=r.y*ae.y,Y.mapSize.y=r.y));let z=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=z,Y.map===null||O===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===zl){if(Q.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Io(n.x,n.y,{format:ms,type:hn,minFilter:Fa,magFilter:Fa,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new ss(n.x,n.y,pn),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Bn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Aa,Y.map.depthTexture.magFilter=Aa}else Q.isPointLight?(Y.map=new Ph(n.x),Y.map.depthTexture=new Sp(n.x,dn)):(Y.map=new Io(n.x,n.y),Y.map.depthTexture=new ss(n.x,n.y,dn)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Bn,this.type===Ef?(Y.map.depthTexture.compareFunction=z?Rh:Eh,Y.map.depthTexture.minFilter=Fa,Y.map.depthTexture.magFilter=Fa):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Aa,Y.map.depthTexture.magFilter=Aa);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==n.x||Y.map.height!==n.y)&&Y.map.setSize(n.x,n.y);let W=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,S);for(let j=0;j<W;j++){let Ae=Y.getCamera(j);if(Q.isPointLight){let Fe=Y.camera,qe=Y.matrix,N=Q.distance||Fe.far;N!==Fe.far&&(Fe.far=N,Fe.updateProjectionMatrix()),Hf.setFromMatrixPosition(Q.matrixWorld),Fe.position.copy(Hf),gg.copy(Fe.position),gg.add(VL[j]),Fe.up.copy(GL[j]),Fe.lookAt(gg),Fe.updateMatrixWorld(),qe.makeTranslation(-Hf.x,-Hf.y,-Hf.z),K1.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(K1,Fe.coordinateSystem,Fe.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,j),t.clear();else{j===0&&(t.setRenderTarget(Y.map),t.clear());let Fe=Y.getViewport(j);s.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),H.viewport(s)}o=Y.getFrustum(j),g(w,S,Ae,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===zl&&x(Y,S),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,A,D)};function x(b,w){let S=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Io(n.x,n.y,{format:ms,type:hn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,S,f,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,S,d,y,null)}function v(b,w,S,T){let A=null,D=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:i,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=A.uuid,O=w.uuid,P=c[H];P===void 0&&(P={},c[H]=P);let B=P[O];B===void 0&&(B=A.clone(),P[O]=B,w.addEventListener("dispose",C)),A=B}if(A.visible=w.visible,A.wireframe=w.wireframe,T===zl?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=t.properties.get(A);H.light=S}return A}function g(b,w,S,T,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===zl)&&(!b.frustumCulled||b.intersectsFrustum(o))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let O=e.update(b),P=b.material;if(Array.isArray(P)){let B=O.groups;for(let Q=0,Y=B.length;Q<Y;Q++){let ae=B[Q],z=P[ae.materialIndex];if(z&&z.visible){let W=v(b,z,T,A);b.onBeforeShadow(t,b,w,S,O,W,ae),t.renderBufferDirect(S,null,O,W,b,ae),b.onAfterShadow(t,b,w,S,O,W,ae)}}}else if(P.visible){let B=v(b,P,T,A);b.onBeforeShadow(t,b,w,S,O,B,null),t.renderBufferDirect(S,null,O,B,b,null),b.onAfterShadow(t,b,w,S,O,B,null)}}let H=b.children;for(let O=0,P=H.length;O<P;O++)g(H[O],w,S,T,A)}function C(b){b.target.removeEventListener("dispose",C);for(let S in c){let T=c[S],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function WL(t,e){function a(){let L=!1,de=new jt,ee=null,ge=new jt(0,0,0,0);return{setMask:function(ye){ee!==ye&&!L&&(t.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){L=ye},setClear:function(ye,ie,Le,Ue,ut){ut===!0&&(ye*=Ue,ie*=Ue,Le*=Ue),de.set(ye,ie,Le,Ue),ge.equals(de)===!1&&(t.clearColor(ye,ie,Le,Ue),ge.copy(de))},reset:function(){L=!1,ee=null,ge.set(-1,0,0,0)}}}function o(){let L=!1,de=!1,ee=null,ge=null,ye=null;return{setReversed:function(ie){if(de!==ie){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Ue=ye;ye=null,this.setClear(Ue)}},getReversed:function(){return de},setTest:function(ie){ie?J(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!L&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(de&&(ie=S1[ie]),ge!==ie){switch(ie){case ip:t.depthFunc(t.NEVER);break;case lp:t.depthFunc(t.ALWAYS);break;case cp:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case fp:t.depthFunc(t.EQUAL);break;case up:t.depthFunc(t.GEQUAL);break;case dp:t.depthFunc(t.GREATER);break;case pp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ie}},setLocked:function(ie){L=ie},setClear:function(ie){ye!==ie&&(ye=ie,de&&(ie=1-ie),t.clearDepth(ie))},reset:function(){L=!1,ee=null,ge=null,ye=null,de=!1}}}function n(){let L=!1,de=null,ee=null,ge=null,ye=null,ie=null,Le=null,Ue=null,ut=null;return{setTest:function(it){L||(it?J(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(it){de!==it&&!L&&(t.stencilMask(it),de=it)},setFunc:function(it,ya,oa){(ee!==it||ge!==ya||ye!==oa)&&(t.stencilFunc(it,ya,oa),ee=it,ge=ya,ye=oa)},setOp:function(it,ya,oa){(ie!==it||Le!==ya||Ue!==oa)&&(t.stencilOp(it,ya,oa),ie=it,Le=ya,Ue=oa)},setLocked:function(it){L=it},setClear:function(it){ut!==it&&(t.clearStencil(it),ut=it)},reset:function(){L=!1,de=null,ee=null,ge=null,ye=null,ie=null,Le=null,Ue=null,ut=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,I=[],y=null,m=!1,p=null,x=null,v=null,g=null,C=null,b=null,w=null,S=new pt(0,0,0),T=0,A=!1,D=null,H=null,O=null,P=null,B=null,Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ae=0,z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=ae>=1):z.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=ae>=2);let W=null,j={},Ae=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),qe=new jt().fromArray(Ae),N=new jt().fromArray(Fe);function je(L,de,ee,ge){let ye=new Uint8Array(4),ie=t.createTexture();t.bindTexture(L,ie),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<ee;Le++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(de+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ie}let K={};K[t.TEXTURE_2D]=je(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),J(t.DEPTH_TEST),s.setFunc(vl),oe(!1),le(Ox),J(t.CULL_FACE),re(kn);function J(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Ie(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function ze(L,de){return f[L]!==de?(t.bindFramebuffer(L,de),f[L]=de,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function he(L,de){let ee=I,ge=!1;if(L){ee=d.get(de),ee===void 0&&(ee=[],d.set(de,ee));let ye=L.textures;if(ee.length!==ye.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Le=ye.length;ie<Le;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ye.length,ge=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ee)}function He(L){return y!==L?(t.useProgram(L),y=L,!0):!1}let Ze={[ei]:t.FUNC_ADD,[HC]:t.FUNC_SUBTRACT,[VC]:t.FUNC_REVERSE_SUBTRACT};Ze[GC]=t.MIN,Ze[qC]=t.MAX;let $={[WC]:t.ZERO,[XC]:t.ONE,[YC]:t.SRC_COLOR,[Gx]:t.SRC_ALPHA,[$C]:t.SRC_ALPHA_SATURATE,[QC]:t.DST_COLOR,[KC]:t.DST_ALPHA,[ZC]:t.ONE_MINUS_SRC_COLOR,[qx]:t.ONE_MINUS_SRC_ALPHA,[jC]:t.ONE_MINUS_DST_COLOR,[JC]:t.ONE_MINUS_DST_ALPHA,[e1]:t.CONSTANT_COLOR,[t1]:t.ONE_MINUS_CONSTANT_COLOR,[a1]:t.CONSTANT_ALPHA,[o1]:t.ONE_MINUS_CONSTANT_ALPHA};function re(L,de,ee,ge,ye,ie,Le,Ue,ut,it){if(L===kn){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(J(t.BLEND),m=!0),L!==zC){if(L!==p||it!==A){if((x!==ei||C!==ei)&&(t.blendEquation(t.FUNC_ADD),x=ei,C=ei),it)switch(L){case Hl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zx:t.blendFunc(t.ONE,t.ONE);break;case Hx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Hl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hx:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vx:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}v=null,g=null,b=null,w=null,S.set(0,0,0),T=0,p=L,A=it}return}ye=ye||de,ie=ie||ee,Le=Le||ge,(de!==x||ye!==C)&&(t.blendEquationSeparate(Ze[de],Ze[ye]),x=de,C=ye),(ee!==v||ge!==g||ie!==b||Le!==w)&&(t.blendFuncSeparate($[ee],$[ge],$[ie],$[Le]),v=ee,g=ge,b=ie,w=Le),(Ue.equals(S)===!1||ut!==T)&&(t.blendColor(Ue.r,Ue.g,Ue.b,ut),S.copy(Ue),T=ut),p=L,A=!1}function ue(L,de){L.side===Uo?Ie(t.CULL_FACE):J(t.CULL_FACE);let ee=L.side===no;de&&(ee=!ee),oe(ee),L.blending===Hl&&L.transparent===!1?re(kn):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);let ge=L.stencilWrite;i.setTest(ge),ge&&(i.setMask(L.stencilWriteMask),i.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),i.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function le(L){L!==kC?(J(t.CULL_FACE),L!==H&&(L===Ox?t.cullFace(t.BACK):L===NC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),H=L}function Be(L){L!==O&&(Y&&t.lineWidth(L),O=L)}function Ne(L,de,ee){L?(J(t.POLYGON_OFFSET_FILL),(P!==de||B!==ee)&&(P=de,B=ee,s.getReversed()&&(de=-de),t.polygonOffset(de,ee))):Ie(t.POLYGON_OFFSET_FILL)}function Pe(L){L?J(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function we(L){L===void 0&&(L=t.TEXTURE0+Q-1),W!==L&&(t.activeTexture(L),W=L)}function E(L,de,ee){ee===void 0&&(W===null?ee=t.TEXTURE0+Q-1:ee=W);let ge=j[ee];ge===void 0&&(ge={type:void 0,texture:void 0},j[ee]=ge),(ge.type!==L||ge.texture!==de)&&(W!==ee&&(t.activeTexture(ee),W=ee),t.bindTexture(L,de||K[L]),ge.type=L,ge.texture=de)}function $e(){let L=j[W];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ke(){try{t.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function _(){try{t.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function F(){try{t.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function U(){try{t.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function pe(){try{t.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ce(){try{t.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function Z(){try{t.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ne(){try{t.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ve(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function Ge(L,de){h[L]!==de&&(t.pixelStorei(L,de),h[L]=de)}function Me(L){qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function Ce(L){N.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),N.copy(L))}function fe(L,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let ge=ee.get(L);ge===void 0&&(ge=t.getUniformBlockIndex(de,L.name),ee.set(L,ge))}function xe(L,de){let ge=c.get(de).get(L);l.get(de)!==ge&&(t.uniformBlockBinding(de,ge,L.__bindingPointIndex),l.set(de,ge))}function Se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},W=null,j={},f={},d=new WeakMap,I=[],y=null,m=!1,p=null,x=null,v=null,g=null,C=null,b=null,w=null,S=new pt(0,0,0),T=0,A=!1,D=null,H=null,O=null,P=null,B=null,qe.set(0,0,t.canvas.width,t.canvas.height),N.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:J,disable:Ie,bindFramebuffer:ze,drawBuffers:he,useProgram:He,setBlending:re,setMaterial:ue,setFlipSided:oe,setCullFace:le,setLineWidth:Be,setPolygonOffset:Ne,setScissorTest:Pe,activeTexture:we,bindTexture:E,unbindTexture:$e,compressedTexImage2D:Ke,compressedTexImage3D:_,texImage2D:Z,texImage3D:ne,pixelStorei:Ge,getParameter:ve,updateUBOMapping:fe,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:ce,texSubImage2D:F,texSubImage3D:U,compressedTexSubImage2D:q,compressedTexSubImage3D:te,scissor:Me,viewport:Ce,reset:Se}}function XL(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,h=new Set,f,d=new WeakMap,I=!1;try{I=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(_,F){return I?new OffscreenCanvas(_,F):df("canvas")}function m(_,F,U){let q=1,te=Ke(_);if((te.width>U||te.height>U)&&(q=U/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let pe=Math.floor(q*te.width),ce=Math.floor(q*te.height);f===void 0&&(f=y(pe,ce));let Z=F?y(pe,ce):f;return Z.width=pe,Z.height=ce,Z.getContext("2d").drawImage(_,0,0,pe,ce),tt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+ce+")."),Z}else return"data"in _&&tt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),_;return _}function p(_){return _.generateMipmaps}function x(_){t.generateMipmap(_)}function v(_){return _.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?t.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(_,F,U,q,te,pe=!1){if(_!==null){if(t[_]!==void 0)return t[_];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=F;if(F===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8),U===t.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),U===t.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),F===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),F===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8),U===t.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),U===t.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),F===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),F===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),F===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),F===t.RGB&&(U===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),U===t.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),F===t.RGBA){let ne=pe?uf:Ct.getTransfer(te);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=ne===Dt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),U===t.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(_,F){let U;return _?F===null||F===dn||F===Gl?U=t.DEPTH24_STENCIL8:F===pn?U=t.DEPTH32F_STENCIL8:F===Vl&&(U=t.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===dn||F===Gl?U=t.DEPTH_COMPONENT24:F===pn?U=t.DEPTH_COMPONENT32F:F===Vl&&(U=t.DEPTH_COMPONENT16),U}function b(_,F){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Aa&&_.minFilter!==Fa?Math.log2(Math.max(F.width,F.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?F.mipmaps.length:1}function w(_){let F=_.target;F.removeEventListener("dispose",w),T(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function S(_){let F=_.target;F.removeEventListener("dispose",S),D(F)}function T(_){let F=o.get(_);if(F.__webglInit===void 0)return;let U=_.source,q=d.get(U);if(q){let te=q[F.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(_),Object.keys(q).length===0&&d.delete(U)}o.remove(_)}function A(_){let F=o.get(_);t.deleteTexture(F.__webglTexture);let U=_.source,q=d.get(U);delete q[F.__cacheKey],s.memory.textures--}function D(_){let F=o.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),o.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(F.__webglFramebuffer[q]))for(let te=0;te<F.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(F.__webglFramebuffer[q][te]);else t.deleteFramebuffer(F.__webglFramebuffer[q]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[q])}else{if(Array.isArray(F.__webglFramebuffer))for(let q=0;q<F.__webglFramebuffer.length;q++)t.deleteFramebuffer(F.__webglFramebuffer[q]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let q=0;q<F.__webglColorRenderbuffer.length;q++)F.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[q]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let U=_.textures;for(let q=0,te=U.length;q<te;q++){let pe=o.get(U[q]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),s.memory.textures--),o.remove(U[q])}o.remove(_)}let H=0;function O(){H=0}function P(){return H}function B(_){H=_}function Q(){let _=H;return _>=n.maxTextures&&tt("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+n.maxTextures),H+=1,_}function Y(_){let F=[];return F.push(_.wrapS),F.push(_.wrapT),F.push(_.wrapR||0),F.push(_.magFilter),F.push(_.minFilter),F.push(_.anisotropy),F.push(_.internalFormat),F.push(_.format),F.push(_.type),F.push(_.generateMipmaps),F.push(_.premultiplyAlpha),F.push(_.flipY),F.push(_.unpackAlignment),F.push(_.colorSpace),F.join()}function ae(_,F){let U=o.get(_);if(_.isVideoTexture&&E(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&U.__version!==_.version){let q=_.image;if(q===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(U,_,F);return}}else _.isExternalTexture&&(U.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+F)}function z(_,F){let U=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){Ie(U,_,F);return}else _.isExternalTexture&&(U.__webglTexture=_.sourceTexture?_.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+F)}function W(_,F){let U=o.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){Ie(U,_,F);return}a.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+F)}function j(_,F){let U=o.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&U.__version!==_.version){ze(U,_,F);return}a.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+F)}let Ae={[Pn]:t.REPEAT,[Jo]:t.CLAMP_TO_EDGE,[hp]:t.MIRRORED_REPEAT},Fe={[Aa]:t.NEAREST,[s1]:t.NEAREST_MIPMAP_NEAREST,[Lf]:t.NEAREST_MIPMAP_LINEAR,[Fa]:t.LINEAR,[Xp]:t.LINEAR_MIPMAP_NEAREST,[Nn]:t.LINEAR_MIPMAP_LINEAR},qe={[f1]:t.NEVER,[m1]:t.ALWAYS,[u1]:t.LESS,[Eh]:t.LEQUAL,[d1]:t.EQUAL,[Rh]:t.GEQUAL,[p1]:t.GREATER,[h1]:t.NOTEQUAL};function N(_,F){if(F.type===pn&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===Fa||F.magFilter===Xp||F.magFilter===Lf||F.magFilter===Nn||F.minFilter===Fa||F.minFilter===Xp||F.minFilter===Lf||F.minFilter===Nn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(_,t.TEXTURE_WRAP_S,Ae[F.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,Ae[F.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,Ae[F.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,Fe[F.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,Fe[F.minFilter]),F.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,qe[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Aa||F.minFilter!==Lf&&F.minFilter!==Nn||F.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||o.get(F).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,n.getMaxAnisotropy())),o.get(F).__currentAnisotropy=F.anisotropy}}}function je(_,F){let U=!1;_.__webglInit===void 0&&(_.__webglInit=!0,F.addEventListener("dispose",w));let q=F.source,te=d.get(q);te===void 0&&(te={},d.set(q,te));let pe=Y(F);if(pe!==_.__cacheKey){te[pe]===void 0&&(te[pe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,U=!0),te[pe].usedTimes++;let ce=te[_.__cacheKey];ce!==void 0&&(te[_.__cacheKey].usedTimes--,ce.usedTimes===0&&A(F)),_.__cacheKey=pe,_.__webglTexture=te[pe].texture}return U}function K(_,F,U){return Math.floor(Math.floor(_/U)/F)}function J(_,F,U,q){let pe=_.updateRanges;if(pe.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,F.width,F.height,U,q,F.data);else{pe.sort((Ge,Me)=>Ge.start-Me.start);let ce=0;for(let Ge=1;Ge<pe.length;Ge++){let Me=pe[ce],Ce=pe[Ge],fe=Me.start+Me.count,xe=K(Ce.start,F.width,4),Se=K(Me.start,F.width,4);Ce.start<=fe+1&&xe===Se&&K(Ce.start+Ce.count-1,F.width,4)===xe?Me.count=Math.max(Me.count,Ce.start+Ce.count-Me.start):(++ce,pe[ce]=Ce)}pe.length=ce+1;let Z=a.getParameter(t.UNPACK_ROW_LENGTH),ne=a.getParameter(t.UNPACK_SKIP_PIXELS),ve=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,F.width);for(let Ge=0,Me=pe.length;Ge<Me;Ge++){let Ce=pe[Ge],fe=Math.floor(Ce.start/4),xe=Math.ceil(Ce.count/4),Se=fe%F.width,L=Math.floor(fe/F.width),de=xe,ee=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),a.pixelStorei(t.UNPACK_SKIP_ROWS,L),a.texSubImage2D(t.TEXTURE_2D,0,Se,L,de,ee,U,q,F.data)}_.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Z),a.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),a.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Ie(_,F,U){let q=t.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),F.isData3DTexture&&(q=t.TEXTURE_3D);let te=je(_,F),pe=F.source;a.bindTexture(q,_.__webglTexture,t.TEXTURE0+U);let ce=o.get(pe);if(pe.version!==ce.__version||te===!0){if(a.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ee=Ct.getPrimaries(Ct.workingColorSpace),ge=F.colorSpace===hr?null:Ct.getPrimaries(F.colorSpace),ye=F.colorSpace===hr||ee===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment);let ne=m(F.image,!1,n.maxTextureSize);ne=$e(F,ne);let ve=r.convert(F.format,F.colorSpace),Ge=r.convert(F.type),Me=g(F.internalFormat,ve,Ge,F.normalized,F.colorSpace,F.isVideoTexture);N(q,F);let Ce,fe=F.mipmaps,xe=F.isVideoTexture!==!0,Se=ce.__version===void 0||te===!0,L=pe.dataReady,de=b(F,ne);if(F.isDepthTexture)Me=C(F.format===hs,F.type),Se&&(xe?a.texStorage2D(t.TEXTURE_2D,1,Me,ne.width,ne.height):a.texImage2D(t.TEXTURE_2D,0,Me,ne.width,ne.height,0,ve,Ge,null));else if(F.isDataTexture)if(fe.length>0){xe&&Se&&a.texStorage2D(t.TEXTURE_2D,de,Me,fe[0].width,fe[0].height);for(let ee=0,ge=fe.length;ee<ge;ee++)Ce=fe[ee],xe?L&&a.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,ve,Ge,Ce.data):a.texImage2D(t.TEXTURE_2D,ee,Me,Ce.width,Ce.height,0,ve,Ge,Ce.data);F.generateMipmaps=!1}else xe?(Se&&a.texStorage2D(t.TEXTURE_2D,de,Me,ne.width,ne.height),L&&J(F,ne,ve,Ge)):a.texImage2D(t.TEXTURE_2D,0,Me,ne.width,ne.height,0,ve,Ge,ne.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){xe&&Se&&a.texStorage3D(t.TEXTURE_2D_ARRAY,de,Me,fe[0].width,fe[0].height,ne.depth);for(let ee=0,ge=fe.length;ee<ge;ee++)if(Ce=fe[ee],F.format!==Qo)if(ve!==null)if(xe){if(L)if(F.layerUpdates.size>0){let ye=dg(Ce.width,Ce.height,F.format,F.type);for(let ie of F.layerUpdates){let Le=Ce.data.subarray(ie*ye/Ce.data.BYTES_PER_ELEMENT,(ie+1)*ye/Ce.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,Ce.width,Ce.height,1,ve,Le)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Ce.width,Ce.height,ne.depth,ve,Ce.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Me,Ce.width,Ce.height,ne.depth,0,Ce.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?L&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Ce.width,Ce.height,ne.depth,ve,Ge,Ce.data):a.texImage3D(t.TEXTURE_2D_ARRAY,ee,Me,Ce.width,Ce.height,ne.depth,0,ve,Ge,Ce.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{xe&&Se&&a.texStorage2D(t.TEXTURE_2D,de,Me,fe[0].width,fe[0].height);for(let ee=0,ge=fe.length;ee<ge;ee++)Ce=fe[ee],F.format!==Qo?ve!==null?xe?L&&a.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,ve,Ce.data):a.compressedTexImage2D(t.TEXTURE_2D,ee,Me,Ce.width,Ce.height,0,Ce.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?L&&a.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,ve,Ge,Ce.data):a.texImage2D(t.TEXTURE_2D,ee,Me,Ce.width,Ce.height,0,ve,Ge,Ce.data)}else if(F.isDataArrayTexture)if(xe){if(Se&&a.texStorage3D(t.TEXTURE_2D_ARRAY,de,Me,ne.width,ne.height,ne.depth),L)if(F.layerUpdates.size>0){let ee=dg(ne.width,ne.height,F.format,F.type);for(let ge of F.layerUpdates){let ye=ne.data.subarray(ge*ee/ne.data.BYTES_PER_ELEMENT,(ge+1)*ee/ne.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,ve,Ge,ye)}F.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ge,ne.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,ve,Ge,ne.data);else if(F.isData3DTexture)xe?(Se&&a.texStorage3D(t.TEXTURE_3D,de,Me,ne.width,ne.height,ne.depth),L&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ge,ne.data)):a.texImage3D(t.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,ve,Ge,ne.data);else if(F.isFramebufferTexture){if(Se)if(xe)a.texStorage2D(t.TEXTURE_2D,de,Me,ne.width,ne.height);else{let ee=ne.width,ge=ne.height;for(let ye=0;ye<de;ye++)a.texImage2D(t.TEXTURE_2D,ye,Me,ee,ge,0,ve,Ge,null),ee>>=1,ge>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in t){let ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),h.add(F),ee.onpaint=ge=>{let ye=ge.changedElements;for(let ie of h)ye.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{let ye=t.RGBA,ie=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ie,Le,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(xe&&Se){let ee=Ke(fe[0]);a.texStorage2D(t.TEXTURE_2D,de,Me,ee.width,ee.height)}for(let ee=0,ge=fe.length;ee<ge;ee++)Ce=fe[ee],xe?L&&a.texSubImage2D(t.TEXTURE_2D,ee,0,0,ve,Ge,Ce):a.texImage2D(t.TEXTURE_2D,ee,Me,ve,Ge,Ce);F.generateMipmaps=!1}else if(xe){if(Se){let ee=Ke(ne);a.texStorage2D(t.TEXTURE_2D,de,Me,ee.width,ee.height)}L&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Ge,ne)}else a.texImage2D(t.TEXTURE_2D,0,Me,ve,Ge,ne);p(F)&&x(q),ce.__version=pe.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function ze(_,F,U){if(F.image.length!==6)return;let q=je(_,F),te=F.source;a.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+U);let pe=o.get(te);if(te.version!==pe.__version||q===!0){a.activeTexture(t.TEXTURE0+U);let ce=Ct.getPrimaries(Ct.workingColorSpace),Z=F.colorSpace===hr?null:Ct.getPrimaries(F.colorSpace),ne=F.colorSpace===hr||ce===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ve=F.isCompressedTexture||F.image[0].isCompressedTexture,Ge=F.image[0]&&F.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!ve&&!Ge?Me[ie]=m(F.image[ie],!0,n.maxCubemapSize):Me[ie]=Ge?F.image[ie].image:F.image[ie],Me[ie]=$e(F,Me[ie]);let Ce=Me[0],fe=r.convert(F.format,F.colorSpace),xe=r.convert(F.type),Se=g(F.internalFormat,fe,xe,F.normalized,F.colorSpace),L=F.isVideoTexture!==!0,de=pe.__version===void 0||q===!0,ee=te.dataReady,ge=b(F,Ce);N(t.TEXTURE_CUBE_MAP,F);let ye;if(ve){L&&de&&a.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Se,Ce.width,Ce.height);for(let ie=0;ie<6;ie++){ye=Me[ie].mipmaps;for(let Le=0;Le<ye.length;Le++){let Ue=ye[Le];F.format!==Qo?fe!==null?L?ee&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ue.width,Ue.height,fe,Ue.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Se,Ue.width,Ue.height,0,Ue.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ue.width,Ue.height,fe,xe,Ue.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Se,Ue.width,Ue.height,0,fe,xe,Ue.data)}}}else{if(ye=F.mipmaps,L&&de){ye.length>0&&ge++;let ie=Ke(Me[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Se,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ge){L?ee&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,fe,xe,Me[ie].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,Me[ie].width,Me[ie].height,0,fe,xe,Me[ie].data);for(let Le=0;Le<ye.length;Le++){let ut=ye[Le].image[ie].image;L?ee&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,ut.width,ut.height,fe,xe,ut.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Se,ut.width,ut.height,0,fe,xe,ut.data)}}else{L?ee&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe,xe,Me[ie]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,fe,xe,Me[ie]);for(let Le=0;Le<ye.length;Le++){let Ue=ye[Le];L?ee&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,fe,xe,Ue.image[ie]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Se,fe,xe,Ue.image[ie])}}}p(F)&&x(t.TEXTURE_CUBE_MAP),pe.__version=te.version,F.onUpdate&&F.onUpdate(F)}_.__version=F.version}function he(_,F,U,q,te,pe){let ce=r.convert(U.format,U.colorSpace),Z=r.convert(U.type),ne=g(U.internalFormat,ce,Z,U.normalized,U.colorSpace),ve=o.get(F),Ge=o.get(U);if(Ge.__renderTarget=F,!ve.__hasExternalTextures){let Me=Math.max(1,F.width>>pe),Ce=Math.max(1,F.height>>pe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?a.texImage3D(te,pe,ne,Me,Ce,F.depth,0,ce,Z,null):a.texImage2D(te,pe,ne,Me,Ce,0,ce,Z,null)}a.bindFramebuffer(t.FRAMEBUFFER,_),we(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,Ge.__webglTexture,0,Pe(F)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,Ge.__webglTexture,pe),a.bindFramebuffer(t.FRAMEBUFFER,null)}function He(_,F,U){if(t.bindRenderbuffer(t.RENDERBUFFER,_),F.depthBuffer){let q=F.depthTexture,te=q&&q.isDepthTexture?q.type:null,pe=C(F.stencilBuffer,te),ce=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;we(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(F),pe,F.width,F.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(F),pe,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,pe,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,_)}else{let q=F.textures;for(let te=0;te<q.length;te++){let pe=q[te],ce=r.convert(pe.format,pe.colorSpace),Z=r.convert(pe.type),ne=g(pe.internalFormat,ce,Z,pe.normalized,pe.colorSpace);we(F)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(F),ne,F.width,F.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(F),ne,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,ne,F.width,F.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ze(_,F,U){let q=F.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,_),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=o.get(F.depthTexture);if(te.__renderTarget=F,(!te.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,F.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),N(t.TEXTURE_CUBE_MAP,F.depthTexture);let ve=r.convert(F.depthTexture.format),Ge=r.convert(F.depthTexture.type),Me;F.depthTexture.format===Bn?Me=t.DEPTH_COMPONENT24:F.depthTexture.format===hs&&(Me=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Me,F.width,F.height,0,ve,Ge,null)}}else ae(F.depthTexture,0);let pe=te.__webglTexture,ce=Pe(F),Z=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,ne=F.depthTexture.format===hs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(F.depthTexture.format===Bn)we(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Z,pe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Z,pe,0);else if(F.depthTexture.format===hs)we(F)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Z,pe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Z,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(_){let F=o.get(_),U=_.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==_.depthTexture){let q=_.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),q){let te=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),F.__depthDisposeCallback=te}F.__boundDepthTexture=q}if(_.depthTexture&&!F.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)Ze(F.__webglFramebuffer[q],_,q);else{let q=_.texture.mipmaps;q&&q.length>0?Ze(F.__webglFramebuffer[0],_,0):Ze(F.__webglFramebuffer,_,0)}else if(U){F.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[q]),F.__webglDepthbuffer[q]===void 0)F.__webglDepthbuffer[q]=t.createRenderbuffer(),He(F.__webglDepthbuffer[q],_,!1);else{let te=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=F.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,pe)}}else{let q=_.texture.mipmaps;if(q&&q.length>0?a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=t.createRenderbuffer(),He(F.__webglDepthbuffer,_,!1);else{let te=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=F.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,pe)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function re(_,F,U){let q=o.get(_);F!==void 0&&he(q.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&$(_)}function ue(_){let F=_.texture,U=o.get(_),q=o.get(F);_.addEventListener("dispose",S);let te=_.textures,pe=_.isWebGLCubeRenderTarget===!0,ce=te.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=F.version,s.memory.textures++),pe){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(F.mipmaps&&F.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let ne=0;ne<F.mipmaps.length;ne++)U.__webglFramebuffer[Z][ne]=t.createFramebuffer()}else U.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<F.mipmaps.length;Z++)U.__webglFramebuffer[Z]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Z=0,ne=te.length;Z<ne;Z++){let ve=o.get(te[Z]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),s.memory.textures++)}if(_.samples>0&&we(_)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<te.length;Z++){let ne=te[Z];U.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);let ve=r.convert(ne.format,ne.colorSpace),Ge=r.convert(ne.type),Me=g(ne.internalFormat,ve,Ge,ne.normalized,ne.colorSpace,_.isXRRenderTarget===!0),Ce=Pe(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Me,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),He(U.__webglDepthRenderbuffer,_,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){a.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),N(t.TEXTURE_CUBE_MAP,F);for(let Z=0;Z<6;Z++)if(F.mipmaps&&F.mipmaps.length>0)for(let ne=0;ne<F.mipmaps.length;ne++)he(U.__webglFramebuffer[Z][ne],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne);else he(U.__webglFramebuffer[Z],_,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(F)&&x(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(ce){for(let Z=0,ne=te.length;Z<ne;Z++){let ve=te[Z],Ge=o.get(ve),Me=t.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Me=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Me,Ge.__webglTexture),N(Me,ve),he(U.__webglFramebuffer,_,ve,t.COLOR_ATTACHMENT0+Z,Me,0),p(ve)&&x(Me)}a.unbindTexture()}else{let Z=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Z=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Z,q.__webglTexture),N(Z,F),F.mipmaps&&F.mipmaps.length>0)for(let ne=0;ne<F.mipmaps.length;ne++)he(U.__webglFramebuffer[ne],_,F,t.COLOR_ATTACHMENT0,Z,ne);else he(U.__webglFramebuffer,_,F,t.COLOR_ATTACHMENT0,Z,0);p(F)&&x(Z),a.unbindTexture()}_.depthBuffer&&$(_)}function oe(_){let F=_.textures;for(let U=0,q=F.length;U<q;U++){let te=F[U];if(p(te)){let pe=v(_),ce=o.get(te).__webglTexture;a.bindTexture(pe,ce),x(pe),a.unbindTexture()}}}let le=[],Be=[];function Ne(_){if(_.samples>0){if(we(_)===!1){let F=_.textures,U=_.width,q=_.height,te=t.COLOR_BUFFER_BIT,pe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=o.get(_),Z=F.length>1;if(Z)for(let ve=0;ve<F.length;ve++)a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ne=_.texture.mipmaps;ne&&ne.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<F.length;ve++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);let Ge=o.get(F[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,U,q,0,0,U,q,te,t.NEAREST),l===!0&&(le.length=0,Be.length=0,le.push(t.COLOR_ATTACHMENT0+ve),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(le.push(pe),Be.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ve=0;ve<F.length;ve++){a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);let Ge=o.get(F[ve]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ge,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){let F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[F])}}}function Pe(_){return Math.min(n.maxSamples,_.samples)}function we(_){let F=o.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function E(_){let F=s.render.frame;u.get(_)!==F&&(u.set(_,F),_.update())}function $e(_,F){let U=_.colorSpace,q=_.format,te=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||U!==ff&&U!==hr&&(Ct.getTransfer(U)===Dt?(q!==Qo||te!==xo)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",U)),F}function Ke(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=ae,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=he,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function YL(t,e){function a(o,n=hr){let r,s=Ct.getTransfer(n);if(o===xo)return t.UNSIGNED_BYTE;if(o===Zp)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Kp)return t.UNSIGNED_SHORT_5_5_5_1;if(o===tg)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===ag)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===$x)return t.BYTE;if(o===eg)return t.SHORT;if(o===Vl)return t.UNSIGNED_SHORT;if(o===Yp)return t.INT;if(o===dn)return t.UNSIGNED_INT;if(o===pn)return t.FLOAT;if(o===hn)return t.HALF_FLOAT;if(o===og)return t.ALPHA;if(o===ng)return t.RGB;if(o===Qo)return t.RGBA;if(o===Bn)return t.DEPTH_COMPONENT;if(o===hs)return t.DEPTH_STENCIL;if(o===rg)return t.RED;if(o===Jp)return t.RED_INTEGER;if(o===ms)return t.RG;if(o===Qp)return t.RG_INTEGER;if(o===jp)return t.RGBA_INTEGER;if(o===Pf||o===Bf||o===Uf||o===kf)if(s===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Pf)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Bf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Uf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===kf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Pf)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Bf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Uf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===kf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$p||o===eh||o===th||o===ah)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===$p)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===oh||o===nh||o===rh||o===sh||o===ih||o===Nf||o===lh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===oh||o===nh)return s===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===rh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===sh)return r.COMPRESSED_R11_EAC;if(o===ih)return r.COMPRESSED_SIGNED_R11_EAC;if(o===Nf)return r.COMPRESSED_RG11_EAC;if(o===lh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===ch||o===fh||o===uh||o===dh||o===ph||o===hh||o===mh||o===Ih||o===xh||o===gh||o===Fh||o===Sh||o===vh||o===yh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===ch)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===fh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===uh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===dh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ph)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===hh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===mh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ih)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===xh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===gh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Fh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===vh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===yh)return s===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Mh||o===Ch||o===_h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===Mh)return s===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===bh||o===Th||o===Of||o===Ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===bh)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Of)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Gl?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var ZL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KL=`
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

}`,bg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new gf(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Po({vertexShader:ZL,fragmentShader:KL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new sa(new $s(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tg=class extends Un{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,I=null,y=typeof XRWebGLBinding<"u",m=new bg,p={},x=a.getContextAttributes(),v=null,g=null,C=[],b=[],w=new Te,S=null,T=null,A=new Wa;A.viewport=new jt;let D=new Wa;D.viewport=new jt;let H=[A,D],O=new Vp,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=C[K];return J===void 0&&(J=new bl,C[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=C[K];return J===void 0&&(J=new bl,C[K]=J),J.getGripSpace()},this.getHand=function(K){let J=C[K];return J===void 0&&(J=new bl,C[K]=J),J.getHandSpace()};function Q(K){let J=b.indexOf(K.inputSource);if(J===-1)return;let Ie=C[J];Ie!==void 0&&(Ie.update(K.inputSource,K.frame,c||s),Ie.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",ae);for(let K=0;K<C.length;K++){let J=b[K];J!==null&&(b[K]=null,C[K].disconnect(J))}P=null,B=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(v),d=null,f=null,h=null,n=null,g=null,je.stop(),o.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,o.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){i=K,o.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return I},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await a.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ze=null,he=null;x.depth&&(he=x.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Ie=x.stencil?hs:Bn,ze=x.stencil?Gl:dn);let He={colorFormat:a.RGBA8,depthFormat:he,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(He),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Io(f.textureWidth,f.textureHeight,{format:Qo,type:xo,depthTexture:new ss(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,Ie),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Io(d.framebufferWidth,d.framebufferHeight,{format:Qo,type:xo,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),je.setContext(n),je.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(K){for(let J=0;J<K.removed.length;J++){let Ie=K.removed[J],ze=b.indexOf(Ie);ze>=0&&(b[ze]=null,C[ze].disconnect(Ie))}for(let J=0;J<K.added.length;J++){let Ie=K.added[J],ze=b.indexOf(Ie);if(ze===-1){for(let He=0;He<C.length;He++)if(He>=b.length){b.push(Ie),ze=He;break}else if(b[He]===null){b[He]=Ie,ze=He;break}if(ze===-1)break}let he=C[ze];he&&he.connect(Ie)}}let z=new k,W=new k;function j(K,J,Ie){z.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(Ie.matrixWorld);let ze=z.distanceTo(W),he=J.projectionMatrix.elements,He=Ie.projectionMatrix.elements,Ze=he[14]/(he[10]-1),$=he[14]/(he[10]+1),re=(he[9]+1)/he[5],ue=(he[9]-1)/he[5],oe=(he[8]-1)/he[0],le=(He[8]+1)/He[0],Be=Ze*oe,Ne=Ze*le,Pe=ze/(-oe+le),we=Pe*-oe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),he[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let E=Ze+Pe,$e=$+Pe,Ke=Be-we,_=Ne+(ze-we),F=re*$/$e*E,U=ue*$/$e*E;K.projectionMatrix.makePerspective(Ke,_,F,U,E,$e),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let J=K.near,Ie=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),O.near=D.near=A.near=J,O.far=D.far=A.far=Ie,(P!==O.near||B!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,B=O.far),O.layers.mask=K.layers.mask|6,A.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let ze=K.parent,he=O.cameras;Ae(O,ze);for(let He=0;He<he.length;He++)Ae(he[He],ze);he.length===2?j(O,A,D):O.projectionMatrix.copy(A.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Fe(K,O,ze)};function Fe(K,J,Ie){Ie===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(Ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ip*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let qe=null;function N(K,J){if(u=J.getViewerPose(c||s),I=J,u!==null){let Ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let ze=!1;Ie.length!==O.cameras.length&&(O.cameras.length=0,ze=!0);for(let $=0;$<Ie.length;$++){let re=Ie[$],ue=null;if(d!==null)ue=d.getViewport(re);else{let le=h.getViewSubImage(f,re);ue=le.viewport,$===0&&(e.setRenderTargetTextures(g,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(g))}let oe=H[$];oe===void 0&&(oe=new Wa,oe.layers.enable($),oe.viewport=new jt,H[$]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ue.x,ue.y,ue.width,ue.height),$===0&&(O.matrix.copy(oe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ze===!0&&O.cameras.push(oe)}let he=n.enabledFeatures;if(he&&he.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){h=o.getBinding();let $=h.getDepthInformation(Ie[0]);$&&$.isValid&&$.texture&&m.init($,n.renderState)}if(he&&he.includes("camera-access")&&y){e.state.unbindTexture(),h=o.getBinding();for(let $=0;$<Ie.length;$++){let re=Ie[$].camera;if(re){let ue=p[re];ue||(ue=new gf,p[re]=ue);let oe=h.getCameraImage(re);ue.sourceTexture=oe}}}}for(let Ie=0;Ie<C.length;Ie++){let ze=b[Ie],he=C[Ie];ze!==null&&he!==void 0&&he.update(ze,J,c||s)}qe&&qe(K,J),J.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:J}),I=null}let je=new J1;je.setAnimationLoop(N),this.setAnimationLoop=function(K){qe=K},this.dispose=function(){}}},JL=new Gt,a_=new ft;a_.set(-1,0,0,0,1,0,0,0,1);function QL(t,e){function a(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function o(m,p){p.color.getRGB(m.fogColor.value,cg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,v,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),I(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&i(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,a(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===no&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,a(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===no&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,a(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,a(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,g=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(JL.makeRotationFromEuler(g)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(a_),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform))}function i(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,a(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===no&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,m.specularIntensityMapTransform))}function I(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function jL(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,C){let b=C.program;o.uniformBlockBinding(g,b)}function c(g,C){let b=n[g.id];b===void 0&&(m(g),b=u(g),n[g.id]=b,g.addEventListener("dispose",x));let w=C.program;o.updateUBOMapping(g,w);let S=e.render.frame;r[g.id]!==S&&(f(g),r[g.id]=S)}function u(g){let C=h();g.__bindingPointIndex=C;let b=t.createBuffer(),w=g.__size,S=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,b),b}function h(){for(let g=0;g<i;g++)if(s.indexOf(g)===-1)return s.push(g),g;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let C=n[g.id],b=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let S=0,T=b.length;S<T;S++){let A=b[S];if(Array.isArray(A))for(let D=0,H=A.length;D<H;D++)d(A[D],S,D,w);else d(A,S,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(g,C,b,w){if(y(g,C,b,w)===!0){let S=g.__offset,T=g.value;if(Array.isArray(T)){let A=0;for(let D=0;D<T.length;D++){let H=T[D],O=p(H);I(H,g.__data,A),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else I(T,g.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,g.__data)}}function I(g,C,b){typeof g=="number"||typeof g=="boolean"?C[0]=g:g.isMatrix3?(C[0]=g.elements[0],C[1]=g.elements[1],C[2]=g.elements[2],C[3]=0,C[4]=g.elements[3],C[5]=g.elements[4],C[6]=g.elements[5],C[7]=0,C[8]=g.elements[6],C[9]=g.elements[7],C[10]=g.elements[8],C[11]=0):ArrayBuffer.isView(g)?C.set(new g.constructor(g.buffer,g.byteOffset,C.length)):g.toArray(C,b)}function y(g,C,b,w){let S=g.value,T=C+"_"+b;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:ArrayBuffer.isView(S)?w[T]=S.slice():w[T]=S.clone(),!0;{let A=w[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function m(g){let C=g.uniforms,b=0,w=16;for(let T=0,A=C.length;T<A;T++){let D=Array.isArray(C[T])?C[T]:[C[T]];for(let H=0,O=D.length;H<O;H++){let P=D[H],B=Array.isArray(P.value)?P.value:[P.value];for(let Q=0,Y=B.length;Q<Y;Q++){let ae=B[Q],z=p(ae),W=b%w,j=W%z.boundary,Ae=W+j;b+=j,Ae!==0&&w-Ae<z.storage&&(b+=w-Ae),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=z.storage}}}let S=b%w;return S>0&&(b+=w-S),g.__size=b,g.__cache={},this}function p(g){let C={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(C.boundary=4,C.storage=4):g.isVector2?(C.boundary=8,C.storage=8):g.isVector3||g.isColor?(C.boundary=16,C.storage=12):g.isVector4?(C.boundary=16,C.storage=16):g.isMatrix3?(C.boundary=48,C.storage=48):g.isMatrix4?(C.boundary=64,C.storage=64):g.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(C.boundary=16,C.storage=g.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",g),C}function x(g){let C=g.target;C.removeEventListener("dispose",x);let b=s.indexOf(C.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function v(){for(let g in n)t.deleteBuffer(n[g]);s=[],n={},r={}}return{bind:l,update:c,dispose:v}}var $L=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function e3(){return On===null&&(On=new wl($L,16,16,ms,hn),On.name="DFG_LUT",On.minFilter=Fa,On.magFilter=Fa,On.wrapS=Jo,On.wrapT=Jo,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Bh=class{constructor(e={}){let{canvas:a=x1(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xo}=e;this.isWebGLRenderer=!0;let I;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");I=o.getContextAttributes().alpha}else I=s;let y=d,m=new Set([jp,Qp,Jp]),p=new Set([xo,dn,Vl,Gl,Zp,Kp]),x=new Uint32Array(4),v=new Int32Array(4),g=new k,C=null,b=null,w=[],S=[],T=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,H=null,O=null,P=null,B=null;this._outputColorSpace=ka;let Q=0,Y=0,ae=null,z=-1,W=null,j=new jt,Ae=new jt,Fe=null,qe=new pt(0),N=0,je=a.width,K=a.height,J=1,Ie=null,ze=null,he=new jt(0,0,je,K),He=new jt(0,0,je,K),Ze=!1,$=new El,re=!1,ue=!1,oe=new Gt,le=new k,Be=new jt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function we(){return ae===null?J:1}let E=o;function $e(M,R){return a.getContext(M,R)}let Ke,_,F,U,q,te,pe,ce,Z,ne,ve,Ge,Me,Ce,fe,xe,Se,L,de,ee,ge,ye,ie;try{let M={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Gp}`),a.addEventListener("webglcontextlost",ut,!1),a.addEventListener("webglcontextrestored",it,!1),a.addEventListener("webglcontextcreationerror",ya,!1),E===null){let R="webgl2";if(E=$e(R,M),E===null)throw $e(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(M){throw a.removeEventListener("webglcontextlost",ut,!1),a.removeEventListener("webglcontextrestored",it,!1),a.removeEventListener("webglcontextcreationerror",ya,!1),et("WebGLRenderer: "+M.message),M}function Le(){Ke=new iD(E),Ke.init(),ge=new YL(E,Ke),_=new QR(E,Ke,e,ge),F=new WL(E,Ke),_.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),O=E.createFramebuffer(),P=E.createFramebuffer(),B=E.createFramebuffer(),U=new fD(E),q=new RL,te=new XL(E,Ke,F,q,_,ge,U),pe=new sD(A),ce=new d2(E),ye=new KR(E,ce),Z=new lD(E,ce,U,ye),ne=new dD(E,Z,ce,ye,U),L=new uD(E,_,te),fe=new jR(q),ve=new EL(A,pe,Ke,_,ye,fe),Ge=new QL(A,q),Me=new LL,Ce=new OL(Ke),Se=new ZR(A,pe,F,ne,I,l),xe=new qL(A,ne,_),ie=new jL(E,U,_,F),de=new JR(E,Ke,U),ee=new cD(E,Ke,U),U.programs=ve.programs,A.capabilities=_,A.extensions=Ke,A.properties=q,A.renderLists=Me,A.shadowMap=xe,A.state=F,A.info=U}y!==xo&&(T=new hD(y,a.width,a.height,i,n,r));let Ue=new Tg(A,E);this.xr=Ue,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(je,K,!1))},this.getSize=function(M){return M.set(je,K)},this.setSize=function(M,R,X=!0){if(Ue.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}je=M,K=R,a.width=Math.floor(M*J),a.height=Math.floor(R*J),X===!0&&(a.style.width=M+"px",a.style.height=R+"px"),T!==null&&T.setSize(a.width,a.height),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(je*J,K*J).floor()},this.setDrawingBufferSize=function(M,R,X){je=M,K=R,J=X,a.width=Math.floor(M*X),a.height=Math.floor(R*X),this.setViewport(0,0,M,R)},this.setEffects=function(M){if(y===xo){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let R=0;R<M.length;R++)if(M[R].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(he)},this.setViewport=function(M,R,X,V){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,R,X,V),F.viewport(j.copy(he).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,R,X,V){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,R,X,V),F.scissor(Ae.copy(He).multiplyScalar(J).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){F.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){Ie=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,R=!0,X=!0){let V=0;if(M){let G=!1;if(ae!==null){let De=ae.texture.format;G=m.has(De)}if(G){let De=ae.texture.type,be=p.has(De),Ee=Se.getClearColor(),Oe=Se.getClearAlpha(),Ye=Ee.r,ht=Ee.g,lt=Ee.b;be?(x[0]=Ye,x[1]=ht,x[2]=lt,x[3]=Oe,E.clearBufferuiv(E.COLOR,0,x)):(v[0]=Ye,v[1]=ht,v[2]=lt,v[3]=Oe,E.clearBufferiv(E.COLOR,0,v))}else V|=E.COLOR_BUFFER_BIT}R&&(V|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&E.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){a.removeEventListener("webglcontextlost",ut,!1),a.removeEventListener("webglcontextrestored",it,!1),a.removeEventListener("webglcontextcreationerror",ya,!1),Se.dispose(),Me.dispose(),Ce.dispose(),q.dispose(),pe.dispose(),ne.dispose(),ye.dispose(),ie.dispose(),ve.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Je),Ue.removeEventListener("sessionend",Qe),It.stop()};function ut(M){M.preventDefault(),ig("WebGLRenderer: Context Lost."),D=!0}function it(){ig("WebGLRenderer: Context Restored."),D=!1;let M=U.autoReset,R=xe.enabled,X=xe.autoUpdate,V=xe.needsUpdate,G=xe.type;Le(),U.autoReset=M,xe.enabled=R,xe.autoUpdate=X,xe.needsUpdate=V,xe.type=G}function ya(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oa(M){let R=M.target;R.removeEventListener("dispose",oa),ii(R)}function ii(M){xs(M),q.remove(M)}function xs(M){let R=q.get(M).programs;R!==void 0&&(R.forEach(function(X){ve.releaseProgram(X)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,X,V,G,De){R===null&&(R=Ne);let be=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ee=Jf(M,R,X,V,G);F.setMaterial(V,be);let Oe=X.index,Ye=1;if(V.wireframe===!0){if(Oe=Z.getWireframeAttribute(X),Oe===void 0)return;Ye=2}let ht=X.drawRange,lt=X.attributes.position,We=ht.start*Ye,dt=(ht.start+ht.count)*Ye;De!==null&&(We=Math.max(We,De.start*Ye),dt=Math.min(dt,(De.start+De.count)*Ye)),Oe!==null?(We=Math.max(We,0),dt=Math.min(dt,Oe.count)):lt!=null&&(We=Math.max(We,0),dt=Math.min(dt,lt.count));let Lt=dt-We;if(Lt<0||Lt===1/0)return;ye.setup(G,V,Ee,X,Oe);let at,_t=de;if(Oe!==null&&(at=ce.get(Oe),_t=ee,_t.setIndex(at)),G.isMesh)V.wireframe===!0?(F.setLineWidth(V.wireframeLinewidth*we()),_t.setMode(E.LINES)):_t.setMode(E.TRIANGLES);else if(G.isLine){let ma=V.linewidth;ma===void 0&&(ma=1),F.setLineWidth(ma*we()),G.isLineSegments?_t.setMode(E.LINES):G.isLineLoop?_t.setMode(E.LINE_LOOP):_t.setMode(E.LINE_STRIP)}else G.isPoints?_t.setMode(E.POINTS):G.isSprite&&_t.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ma=G._multiDrawStarts,Ve=G._multiDrawCounts,wa=G._multiDrawCount,xt=Oe?ce.get(Oe).bytesPerElement:1,Oa=q.get(V).currentProgram.getUniforms();for(let so=0;so<wa;so++)Oa.setValue(E,"_gl_DrawID",so),_t.render(ma[so]/xt,Ve[so])}else if(G.isInstancedMesh)_t.renderInstances(We,Lt,G.count);else if(X.isInstancedBufferGeometry){let ma=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ve=Math.min(X.instanceCount,ma);_t.renderInstances(We,Lt,Ve)}else _t.render(We,Lt)};function gs(M,R,X,V){H!==null&&M.isNodeMaterial&&H.setObject(V,M),re===!0&&fe.setState(M,X,!1),M.transparent===!0&&M.side===Uo&&M.forceSinglePass===!1?(M.side=no,M.needsUpdate=!0,ha(M,R,V),M.side=ds,M.needsUpdate=!0,ha(M,R,V),M.side=Uo):ha(M,R,V)}this.compile=function(M,R,X=null){X===null&&(X=M),H!==null&&H.renderStart(M,R,X),b=Ce.get(X),b.init(R),S.push(b),X.traverseVisible(function(G){G.isLight&&G.layers.test(R.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),M!==X&&M.traverseVisible(function(G){G.isLight&&G.layers.test(R.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),H!==null&&H.updateLights(b.state.lightsArray),ue=this.localClippingEnabled,re=fe.init(this.clippingPlanes,ue),re===!0&&fe.setGlobalState(this.clippingPlanes,R),H!==null&&xe.render(b.state.shadowsArray,X,R);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let De=G.material;if(De)if(Array.isArray(De))for(let be=0;be<De.length;be++){let Ee=De[be];gs(Ee,X,R,G),V.add(Ee)}else gs(De,X,R,G),V.add(De)}),b=S.pop(),H!==null&&H.renderEnd(),V},this.compileAsync=function(M,R,X=null){let V=this.compile(M,R,X);return new Promise(G=>{function De(){if(V.forEach(function(be){let Oe=q.get(be).currentProgram;(Oe===void 0||Oe.isReady())&&V.delete(be)}),V.size===0){G(M);return}setTimeout(De,10)}Ke.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Gn=null;function Re(M){Gn&&Gn(M)}function Je(){It.stop()}function Qe(){It.start()}let It=new J1;It.setAnimationLoop(Re),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(M){Gn=M,Ue.setAnimationLoop(M),M===null?It.stop():It.start()},Ue.addEventListener("sessionstart",Je),Ue.addEventListener("sessionend",Qe),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(M,R);let X=Ue.enabled===!0&&Ue.isPresenting===!0,V=T!==null&&(ae===null||X)&&T.begin(A,ae);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(R),R=Ue.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,R,ae),b=Ce.get(M,S.length),b.init(R),b.state.textureUnits=te.getTextureUnits(),S.push(b),oe.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),$.setFromProjectionMatrix(oe,fn,R.reversedDepth),ue=this.localClippingEnabled,re=fe.init(this.clippingPlanes,ue),C=Me.get(M,w.length),C.init(),w.push(C),Ue.enabled===!0&&Ue.isPresenting===!0){let be=A.xr.getDepthSensingMesh();be!==null&&bt(be,R,-1/0,A.sortObjects)}bt(M,R,0,A.sortObjects),C.finish(),H!==null&&H.updateLights(b.state.lightsArray),A.sortObjects===!0&&C.sort(Ie,ze),Pe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Pe&&Se.addToRenderList(C,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&fe.beginShadows();let G=b.state.shadowsArray;if(xe.render(G,M,R),re===!0&&fe.endShadows(),(V&&T.hasRenderPass())===!1){let be=C.opaque,Ee=C.transmissive;if(b.setupLights(),R.isArrayCamera){let Oe=R.cameras;if(Ee.length>0)for(let Ye=0,ht=Oe.length;Ye<ht;Ye++){let lt=Oe[Ye];Na(be,Ee,M,lt)}Pe&&Se.render(M);for(let Ye=0,ht=Oe.length;Ye<ht;Ye++){let lt=Oe[Ye];ia(C,M,lt,lt.viewport)}}else Ee.length>0&&Na(be,Ee,M,R),Pe&&Se.render(M),ia(C,M,R)}ae!==null&&Y===0&&(te.updateMultisampleRenderTarget(ae),te.updateRenderTargetMipmap(ae)),V&&T.end(A),M.isScene===!0&&M.onAfterRender(A,M,R),ye.resetDefaultState(),z=-1,W=null,S.pop(),S.length>0?(b=S[S.length-1],te.setTextureUnits(b.state.textureUnits),re===!0&&fe.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?C=w[w.length-1]:C=null,H!==null&&H.renderEnd()};function bt(M,R,X,V){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($)){V&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);let be=ne.update(M),Ee=M.material;Ee.visible&&C.push(M,be,Ee,X,Be.z,null,R)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($))){let be=ne.update(M),Ee=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Be.copy(be.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Ee)){let Oe=be.groups;for(let Ye=0,ht=Oe.length;Ye<ht;Ye++){let lt=Oe[Ye],We=Ee[lt.materialIndex];We&&We.visible&&C.push(M,be,We,X,Be.z,lt,R)}}else Ee.visible&&C.push(M,be,Ee,X,Be.z,null,R)}}let De=M.children;for(let be=0,Ee=De.length;be<Ee;be++)bt(De[be],R,X,V)}function ia(M,R,X,V){let{opaque:G,transmissive:De,transparent:be}=M;b.setupLightsView(X),re===!0&&fe.setGlobalState(A.clippingPlanes,X),V&&F.viewport(j.copy(V)),G.length>0&&Tt(G,R,X),De.length>0&&Tt(De,R,X),be.length>0&&Tt(be,R,X),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Na(M,R,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let We=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Io(1,1,{generateMipmaps:!0,type:We?hn:xo,minFilter:Nn,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let De=b.state.transmissionRenderTarget[V.id],be=V.viewport||j;De.setSize(be.z*A.transmissionResolutionScale,be.w*A.transmissionResolutionScale);let Ee=A.getRenderTarget(),Oe=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(qe),N=A.getClearAlpha(),N<1&&A.setClearColor(16777215,.5),A.clear(),Pe&&Se.render(X);let ht=A.toneMapping;A.toneMapping=un;let lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),re===!0&&fe.setGlobalState(A.clippingPlanes,V),Tt(M,X,V),te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let dt=0,Lt=R.length;dt<Lt;dt++){let at=R[dt],{object:_t,geometry:ma,material:Ve,group:wa}=at;if(Ve.side===Uo&&_t.layers.test(V.layers)){let xt=Ve.side;Ve.side=no,Ve.needsUpdate=!0,ot(_t,X,V,ma,Ve,wa),Ve.side=xt,Ve.needsUpdate=!0,We=!0}}We===!0&&(te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De))}A.setRenderTarget(Ee,Oe,Ye),A.setClearColor(qe,N),lt!==void 0&&(V.viewport=lt),A.toneMapping=ht}function Tt(M,R,X){let V=R.isScene===!0?R.overrideMaterial:null;for(let G=0,De=M.length;G<De;G++){let be=M[G],{object:Ee,geometry:Oe,group:Ye}=be,ht=be.material;ht.allowOverride===!0&&V!==null&&(ht=V),Ee.layers.test(X.layers)&&ot(Ee,R,X,Oe,ht,Ye)}}function ot(M,R,X,V,G,De){H!==null&&G.isNodeMaterial&&H.setObject(M,G),M.onBeforeRender(A,R,X,V,G,De),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(A,R,X,V,M,De),G.transparent===!0&&G.side===Uo&&G.forceSinglePass===!1?(G.side=no,G.needsUpdate=!0,A.renderBufferDirect(X,R,V,G,M,De),G.side=ds,G.needsUpdate=!0,A.renderBufferDirect(X,R,V,G,M,De),G.side=Uo):A.renderBufferDirect(X,R,V,G,M,De),M.onAfterRender(A,R,X,V,G,De)}function ha(M,R,X){R.isScene!==!0&&(R=Ne);let V=q.get(M),G=b.state.lights,De=b.state.shadowsArray,be=G.state.version,Ee=ve.getParameters(M,G.state,De,R,X,b.state.lightProbeGridArray),Oe=ve.getProgramCacheKey(Ee),Ye=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,V.fog=R.fog;let ht=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=pe.get(M.envMap||V.environment,ht),V.envMapRotation=V.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,Ye===void 0&&(M.addEventListener("dispose",oa),Ye=new Map,V.programs=Ye);let lt=Ye.get(Oe);if(lt!==void 0){if(V.currentProgram===lt&&V.lightsStateVersion===be)return Fo(M,Ee),lt}else Ee.uniforms=ve.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,X,Ee),M.onBeforeCompile(Ee,A),lt=ve.acquireProgram(Ee,Oe),Ye.set(Oe,lt),V.uniforms=Ee.uniforms;let We=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=fe.uniform),Fo(M,Ee),V.needsLights=me(M),V.lightsStateVersion=be,V.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.sunLights.value=G.state.sun,We.sunLightShadows.value=G.state.sunShadow,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.sunShadowMatrix.value=G.state.sunShadowMatrix,We.sunShadowCascade.value=G.state.sunShadowCascade,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=lt,V.uniformsList=null,lt}function go(M){if(M.uniformsList===null){let R=M.currentProgram.getUniforms();M.uniformsList=Yl.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function Fo(M,R){let X=q.get(M);X.outputColorSpace=R.outputColorSpace,X.batching=R.batching,X.batchingColor=R.batchingColor,X.instancing=R.instancing,X.instancingColor=R.instancingColor,X.instancingMorph=R.instancingMorph,X.skinning=R.skinning,X.morphTargets=R.morphTargets,X.morphNormals=R.morphNormals,X.morphColors=R.morphColors,X.morphTargetsCount=R.morphTargetsCount,X.numClippingPlanes=R.numClippingPlanes,X.numIntersection=R.numClipIntersection,X.vertexAlphas=R.vertexAlphas,X.vertexTangents=R.vertexTangents,X.toneMapping=R.toneMapping}function Kf(M,R){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;g.setFromMatrixPosition(R.matrixWorld);for(let X=0,V=M.length;X<V;X++){let G=M[X];if(G.texture!==null&&G.boundingBox.containsPoint(g))return G}return null}function Jf(M,R,X,V,G){R.isScene!==!0&&(R=Ne),te.resetTextureUnits();let De=R.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?R.environment:null,Ee=ae===null?A.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ct.workingColorSpace,Oe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ye=pe.get(V.envMap||be,Oe),ht=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,lt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),We=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Lt=!!X.morphAttributes.color,at=un;V.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(at=A.toneMapping);let _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ma=_t!==void 0?_t.length:0,Ve=q.get(V),wa=b.state.lights;if(re===!0&&(ue===!0||M!==W)){let qt=M===W&&V.id===z;fe.setState(V,M,qt)}let xt=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==wa.state.version||Ve.outputColorSpace!==Ee||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Ye||V.fog===!0&&Ve.fog!==De||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==lt||Ve.morphTargets!==We||Ve.morphNormals!==dt||Ve.morphColors!==Lt||Ve.toneMapping!==at||Ve.morphTargetsCount!==ma||!!Ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=V.version);let Oa=Ve.currentProgram;xt===!0&&(Oa=ha(V,R,G),H&&V.isNodeMaterial&&H.onUpdateProgram(V,Oa,Ve));let so=!1,No=!1,mn=!1,Nt=Oa.getUniforms(),na=Ve.uniforms;if(F.useProgram(Oa.program)&&(so=!0,No=!0,mn=!0),V.id!==z&&(z=V.id,No=!0),Ve.needsLights){let qt=Kf(b.state.lightProbeGridArray,G);Ve.lightProbeGrid!==qt&&(Ve.lightProbeGrid=qt,No=!0)}if(so||W!==M){F.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Nt.setValue(E,"projectionMatrix",M.projectionMatrix),Nt.setValue(E,"viewMatrix",M.matrixWorldInverse);let Fr=Nt.map.cameraPosition;Fr!==void 0&&Fr.setValue(E,le.setFromMatrixPosition(M.matrixWorld)),_.logarithmicDepthBuffer&&Nt.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,No=!0,mn=!0)}if(Ve.needsLights&&(wa.state.sunShadowMap.length>0&&Nt.setValue(E,"sunShadowMap",wa.state.sunShadowMap,te),wa.state.directionalShadowMap.length>0&&Nt.setValue(E,"directionalShadowMap",wa.state.directionalShadowMap,te),wa.state.spotShadowMap.length>0&&Nt.setValue(E,"spotShadowMap",wa.state.spotShadowMap,te),wa.state.pointShadowMap.length>0&&Nt.setValue(E,"pointShadowMap",wa.state.pointShadowMap,te)),G.isSkinnedMesh){Nt.setOptional(E,G,"bindMatrix"),Nt.setOptional(E,G,"bindMatrixInverse");let qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(E,"boneTexture",qt.boneTexture,te))}G.isBatchedMesh&&(Nt.setOptional(E,G,"batchingTexture"),Nt.setValue(E,"batchingTexture",G._matricesTexture,te),Nt.setOptional(E,G,"batchingIdTexture"),Nt.setValue(E,"batchingIdTexture",G._indirectTexture,te),Nt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(E,"batchingColorTexture",G._colorsTexture,te));let gr=X.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&L.update(G,X,Oa),(No||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,Nt.setValue(E,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&R.environment!==null&&(na.envMapIntensity.value=R.environmentIntensity),na.dfgLUT!==void 0&&(na.dfgLUT.value=e3()),No){if(Nt.setValue(E,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Qf(na,mn),De&&V.fog===!0&&Ge.refreshFogUniforms(na,De),Ge.refreshMaterialUniforms(na,V,J,K,b.state.transmissionRenderTarget[M.id]),Ve.needsLights&&Ve.lightProbeGrid){let qt=Ve.lightProbeGrid;na.probesSH.value=qt.texture,na.probesMin.value.copy(qt.boundingBox.min),na.probesMax.value.copy(qt.boundingBox.max),na.probesResolution.value.copy(qt.resolution)}Yl.upload(E,go(Ve),na,te)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yl.upload(E,go(Ve),na,te),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(E,"center",G.center),Nt.setValue(E,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(E,"normalMatrix",G.normalMatrix),Nt.setValue(E,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let qt=V.uniformsGroups;for(let Fr=0,li=qt.length;Fr<li;Fr++){let Og=qt[Fr];ie.update(Og,Oa),ie.bind(Og,Oa)}}return Oa}function Qf(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.sunLights.needsUpdate=R,M.sunLightShadows.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function me(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(M,R,X){let V=q.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=R,q.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,R){let X=q.get(M);X.__webglFramebuffer=R,X.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,X=0){ae=M,Q=R,Y=X;let V=null,G=!1,De=!1;if(M){let Ee=q.get(M);if(Ee.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(E.FRAMEBUFFER,Ee.__webglFramebuffer),j.copy(M.viewport),Ae.copy(M.scissor),Fe=M.scissorTest,F.viewport(j),F.scissor(Ae),F.setScissorTest(Fe),z=-1;return}else if(Ee.__webglFramebuffer===void 0)te.setupRenderTarget(M);else if(Ee.__hasExternalTextures)te.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ht=M.depthTexture;if(Ee.__boundDepthTexture!==ht){if(ht!==null&&q.has(ht)&&(M.width!==ht.image.width||M.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(M)}}let Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(De=!0);let Ye=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[R])?V=Ye[R][X]:V=Ye[R],G=!0):M.samples>0&&te.useMultisampledRTT(M)===!1?V=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[X]:V=Ye,j.copy(M.viewport),Ae.copy(M.scissor),Fe=M.scissorTest}else j.copy(he).multiplyScalar(J).floor(),Ae.copy(He).multiplyScalar(J).floor(),Fe=Ze;if(X!==0&&(V=O),F.bindFramebuffer(E.FRAMEBUFFER,V)&&F.drawBuffers(M,V),F.viewport(j),F.scissor(Ae),F.setScissorTest(Fe),G){let Ee=q.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ee.__webglTexture,X)}else if(De){let Ee=R;for(let Oe=0;Oe<M.textures.length;Oe++){let Ye=q.get(M.textures[Oe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Oe,Ye.__webglTexture,X,Ee)}}else if(M!==null&&X!==0){let Ee=q.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ee.__webglTexture,X)}z=-1};function nt(M){let R=q.get(M);return(R.__readFormat!==M.format||R.__readType!==M.type)&&(R.__readFormat=M.format,R.__readType=M.type,R.__formatReadable=_.textureFormatReadable(M.format),R.__typeReadable=_.textureTypeReadable(M.type)),R}this.readRenderTargetPixels=function(M,R,X,V,G,De,be,Ee=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){F.bindFramebuffer(E.FRAMEBUFFER,Oe);try{let Ye=M.textures[Ee],ht=Ye.format,lt=Ye.type;M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ee);let We=nt(Ye);if(We.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-V&&X>=0&&X<=M.height-G&&E.readPixels(R,X,V,G,ge.convert(ht),ge.convert(lt),De)}finally{let Ye=ae!==null?q.get(ae).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(M,R,X,V,G,De,be,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe)if(R>=0&&R<=M.width-V&&X>=0&&X<=M.height-G){F.bindFramebuffer(E.FRAMEBUFFER,Oe);let Ye=M.textures[Ee],ht=Ye.format,lt=Ye.type;M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ee);let We=nt(Ye);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,dt),E.bufferData(E.PIXEL_PACK_BUFFER,De.byteLength,E.STREAM_READ),E.readPixels(R,X,V,G,ge.convert(ht),ge.convert(lt),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let Lt=ae!==null?q.get(ae).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Lt);let at=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await F1(E,at,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,dt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,De),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(dt),E.deleteSync(at),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,R=null,X=0){let V=Math.pow(2,-X),G=Math.floor(M.image.width*V),De=Math.floor(M.image.height*V),be=R!==null?R.x:0,Ee=R!==null?R.y:0;te.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,X,0,0,be,Ee,G,De),F.unbindTexture()},this.copyTextureToTexture=function(M,R,X=null,V=null,G=0,De=0){let be,Ee,Oe,Ye,ht,lt,We,dt,Lt,at=M.isCompressedTexture?M.mipmaps[De]:M.image;if(X!==null)be=X.max.x-X.min.x,Ee=X.max.y-X.min.y,Oe=X.isBox3?X.max.z-X.min.z:1,Ye=X.min.x,ht=X.min.y,lt=X.isBox3?X.min.z:0;else{let na=Math.pow(2,-G);be=Math.floor(at.width*na),Ee=Math.floor(at.height*na),M.isDataArrayTexture?Oe=at.depth:M.isData3DTexture?Oe=Math.floor(at.depth*na):Oe=1,Ye=0,ht=0,lt=0}V!==null?(We=V.x,dt=V.y,Lt=V.z):(We=0,dt=0,Lt=0);let _t=ge.convert(R.format),ma=ge.convert(R.type),Ve;R.isData3DTexture?(te.setTexture3D(R,0),Ve=E.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(te.setTexture2DArray(R,0),Ve=E.TEXTURE_2D_ARRAY):(te.setTexture2D(R,0),Ve=E.TEXTURE_2D),F.activeTexture(E.TEXTURE0),F.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,R.flipY),F.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),F.pixelStorei(E.UNPACK_ALIGNMENT,R.unpackAlignment);let wa=F.getParameter(E.UNPACK_ROW_LENGTH),xt=F.getParameter(E.UNPACK_IMAGE_HEIGHT),Oa=F.getParameter(E.UNPACK_SKIP_PIXELS),so=F.getParameter(E.UNPACK_SKIP_ROWS),No=F.getParameter(E.UNPACK_SKIP_IMAGES);F.pixelStorei(E.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(E.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(E.UNPACK_SKIP_PIXELS,Ye),F.pixelStorei(E.UNPACK_SKIP_ROWS,ht),F.pixelStorei(E.UNPACK_SKIP_IMAGES,lt);let mn=M.isDataArrayTexture||M.isData3DTexture,Nt=R.isDataArrayTexture||R.isData3DTexture;if(M.isDepthTexture){let na=q.get(M),gr=q.get(R),qt=q.get(na.__renderTarget),Fr=q.get(gr.__renderTarget);F.bindFramebuffer(E.READ_FRAMEBUFFER,qt.__webglFramebuffer),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let li=0;li<Oe;li++)mn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,q.get(M).__webglTexture,G,lt+li),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,q.get(R).__webglTexture,De,Lt+li)),E.blitFramebuffer(Ye,ht,be,Ee,We,dt,be,Ee,E.DEPTH_BUFFER_BIT,E.NEAREST);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||q.has(M)){let na=q.get(M),gr=q.get(R);F.bindFramebuffer(E.READ_FRAMEBUFFER,P),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,B);for(let qt=0;qt<Oe;qt++)mn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,na.__webglTexture,G,lt+qt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,na.__webglTexture,G),Nt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,gr.__webglTexture,De,Lt+qt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,gr.__webglTexture,De),G!==0?E.blitFramebuffer(Ye,ht,be,Ee,We,dt,be,Ee,E.COLOR_BUFFER_BIT,E.NEAREST):Nt?E.copyTexSubImage3D(Ve,De,We,dt,Lt+qt,Ye,ht,be,Ee):E.copyTexSubImage2D(Ve,De,We,dt,Ye,ht,be,Ee);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Nt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(Ve,De,We,dt,Lt,be,Ee,Oe,_t,ma,at.data):R.isCompressedArrayTexture?E.compressedTexSubImage3D(Ve,De,We,dt,Lt,be,Ee,Oe,_t,at.data):E.texSubImage3D(Ve,De,We,dt,Lt,be,Ee,Oe,_t,ma,at):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,De,We,dt,be,Ee,_t,ma,at.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,De,We,dt,at.width,at.height,_t,at.data):E.texSubImage2D(E.TEXTURE_2D,De,We,dt,be,Ee,_t,ma,at);F.pixelStorei(E.UNPACK_ROW_LENGTH,wa),F.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(E.UNPACK_SKIP_PIXELS,Oa),F.pixelStorei(E.UNPACK_SKIP_ROWS,so),F.pixelStorei(E.UNPACK_SKIP_IMAGES,No),De===0&&R.generateMipmaps&&E.generateMipmap(Ve),F.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?te.setTextureCube(M,0):M.isData3DTexture?te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?te.setTexture2DArray(M,0):te.setTexture2D(M,0),F.unbindTexture()},this.resetState=function(){Q=0,Y=0,ae=null,F.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ct._getUnpackColorSpace()}};var o_={portrait:[1.32,2.25],landscape:[2.25,1.32]},a3={left:.27,center:.5,right:.73},Wf=.018,ro=.007,pa=4,n_=1/.05,o3=1/960,n3=2,mr=72,r_=24,Ag=.36,Lg=.095,r3=.0135,Nh=.036,Gf=.15,s_=1024,i_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Oh=[0,.07,.93,1],s3=[-.95,-.28,.28,.95],i3=9,l3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,c3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,f3=`
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
`,u3=`
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
`,l_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},ni=(t,e,a)=>Math.min(a,Math.max(e,t)),zh=(t,e,a)=>t+(e-t)*a,wg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},d3=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],Hh=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,p_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Dg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},Vh=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=async()=>{try{await r.decode()}catch{}n(r)},r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},Gh=new Map,Pg=t=>Promise.all(t.map(e=>Vh(Gh,e))),c_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:o_[t]||o_.portrait,r=zh(.03,Math.min(o,n)*.2,ni(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Lg}},p3=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new is;Dg(r,-e/2+ro,-a/2+ro,e-ro*2,a-ro*2,Math.max(o-ro,.005));let s=new Qs;Dg(s,-n.width/2-ro,n.y-n.height/2-ro,n.width+ro*2,n.height+ro*2,n.height/2+ro),r.holes.push(s);let i=new Bl(r,{depth:Wf,bevelEnabled:!0,bevelThickness:ro,bevelSize:ro,bevelSegments:5,curveSegments:24});i.translate(0,0,-Wf/2);let l=new bf(r,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let h=0;h<c.count;h++)u.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return u.needsUpdate=!0,{body:i,face:l}},f_=t=>{let e=new is,a=t*1.16;Dg(e,-a/2+.014,-Gf/2+.014,a-.028,Gf-.028,.024);let o=new Bl(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},h3=t=>{let e=Oh.length,a=new oo;a.setAttribute("position",new Xa(new Float32Array(t*e*3),3)),a.setAttribute("normal",new Xa(new Float32Array(t*e*3),3)),a.setAttribute("uv",new Xa(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},m3=t=>{let e=new Tl;e.background=new pt(.035,.035,.04);let a=new $s(1,1),o=[],n=(i,l,c,u=0)=>{let h=new Ks({color:new pt(i,i,i),side:Uo});o.push(h);let f=new sa(a,h);f.position.set(...l),f.scale.set(c[0],c[1],1),f.lookAt(0,0,0),f.rotateZ(u),e.add(f)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new Zl(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},Eg=(t,e)=>{let a=new Js(t);return a.colorSpace=ka,a.anisotropy=e,a},I3=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new Js(e);let o=p_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let u=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)u+=n[(c+h+128)%128*128+(l+f+128)%128];return u/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),f=Math.hypot(u,h,1),d=(l*128+c)*4;s.data[d]=(u/f*.5+.5)*255,s.data[d+1]=(h/f*.5+.5)*255,s.data[d+2]=(1/f*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new Js(e);return i.wrapS=Pn,i.wrapT=Pn,i.repeat.set(5,7),i},x3=()=>{let a=p_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let u=(l%128+128)%128,h=(c%128+128)%128,f=u/128*8,d=h/128*8,I=Math.floor(f),y=Math.floor(d),m=f-I-.5,p=d-y-.5,x=(I+y)%2===0,v=n(m)*(.55+.45*Math.cos(p*Math.PI*(x?1:.6))),g=n(p)*(.55+.45*Math.cos(m*Math.PI*(x?.6:1)));return(x?Math.max(v,g*.7):Math.max(g,v*.7))+o[h*128+u]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,f=Math.hypot(u,h,1),d=(l*128+c)*4;s[d]=(u/f*.5+.5)*255,s[d+1]=(h/f*.5+.5)*255,s[d+2]=(1/f*.5+.5)*255,s[d+3]=255}let i=new wl(s,128,128);return i.wrapS=Pn,i.wrapT=Pn,i.magFilter=Fa,i.minFilter=Nn,i.generateMipmaps=!0,i.needsUpdate=!0,i},qf=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},g3=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Lg),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},u_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=qf(e,.98,.02),s=qf(e,.05,.02),i=qf(e,.5,.02);if(!r||!s)return;let l=g=>{let C=g.match(/[\d.]+/g);return C?[Number(C[0]),Number(C[1]),Number(C[2])]:[255,255,255]},c=l(s),u=l(r),h=i?l(i):c;if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),I=Math.hypot(u[0]-h[0],u[1]-h[1],u[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&I>40){let g=t.createLinearGradient(0,0,a,0);g.addColorStop(0,s),g.addColorStop(1,r),t.fillStyle=g,t.fillRect(0,0,a,o+2);return}let m=1254/1495,p=.42;try{let g=document.createElement("canvas");g.width=100,g.height=20;let C=g.getContext("2d",{willReadFrequently:!0});if(C){C.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let b=C.getImageData(0,0,100,1).data,w=C.getImageData(0,19,100,1).data,S=b[98*4],T=b[98*4+1],A=b[98*4+2],D=-1,H=-1;for(let O=98;O>=0;O--){let P=O*4;if(Math.hypot(b[P]-S,b[P+1]-T,b[P+2]-A)>40){D=O+1;break}}for(let O=98;O>=0;O--){let P=O*4;if(Math.hypot(w[P]-S,w[P+1]-T,w[P+2]-A)>40){H=O+1;break}}if(D>50&&D<98&&(m=D/100,H>0)){let O=Math.min(e.height*.1,200)*.95,P=(H-D)/100*e.width;O>0&&(p=Math.max(0,Math.min(1.5,P/O)))}}}catch{}let x=a*m,v=x-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(v,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(x,o+2),t.closePath(),t.fill(),t.restore()}catch{}},F3=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let u=o-l;u_(t,e,a,u,i),t.drawImage(e,0,u,a,l)}else{let c=Math.min(a/e.width,s/e.height),u=e.width*c,h=e.height*c,f=(a-u)/2,d=o-h;u_(t,e,a,d,c),t.drawImage(e,f,d,u,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},d_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?g3(n,t.height,s):0,c=e?qf(e,.05,.02):null;if(i.fillStyle=c||Hh(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let u=qf(e,.05,.98);u&&u!==c&&(i.fillStyle=u,i.fillRect(0,t.height-30,t.width,30))}F3(i,e,t.width,t.height,o,l)}},S3=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=Hh(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=d3(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=Hh(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=Hh(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},v3=()=>{let t=()=>Array.from({length:pa+1},()=>new k);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(pa),impulses:new Float64Array(pa),rest:1,anchor:new k,body:{position:new k,previous:new k,velocity:new k,quaternion:new eo,previousQuaternion:new eo,angular:new k,mass:1,inverseInertia:new k(1,1,1),hang:new k},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},kt={a:new k,b:new k,c:new k,d:new k,e:new k,f:new k,g:new k,pin:new k,q:new eo,r:new eo},Bg=(t,e,a)=>(kt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(kt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),h_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},m_=(t,e,a)=>{let o=kt.c.crossVectors(e,a);return 1/t.mass+o.dot(Bg(t,o,kt.d))},I_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),h_(t.quaternion,Bg(t,kt.e.crossVectors(e,a),kt.f))},y3=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:n_,l=e===pa-1,c=kt.g,u=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),u=kt.b.copy(r.position).add(c));let h=kt.a.subVectors(u,s),f=h.length(),d=f-t.rest;if(d<=0||f<1e-9)return;let I=h.divideScalar(f),y=l?m_(r,c,I):n_,m=(f-t.lengths[e])/a,x=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,m))*a*a-t.impulses[e];if(x<=0)return;let v=Math.min(d/(i+y),x);t.impulses[e]+=v,i&&s.addScaledVector(I,v*i),l?I_(r,c,I.multiplyScalar(-v)):u.addScaledVector(I,-v*y)},M3=(t,e,a)=>{let o=kt.g.copy(e.local).applyQuaternion(t.quaternion),n=kt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/m_(t,o,s);I_(t,o,s.multiplyScalar(i))},Rg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=pa;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=kt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[pa]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=pa;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},C3=(t,e,a)=>{t.rest=a/pa;let{width:o,height:n}=e,r=t.body,s=Wf+ro*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},_3=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/o3-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,u=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,f=t.grab,d=kt.pin,I=Math.exp(-a.nodeDrag*r),y=Math.exp(-a.linearDrag*r),m=Math.exp(-a.angularDrag*r);for(let x=0;x<n;x++){for(let A=1;A<pa;A++){let D=l[A];D.y-=a.gravity*r,D.x+=u*r,D.z+=h*r,i[A].copy(s[A]),s[A].addScaledVector(D,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let v=c.quaternion;if(f){let A=kt.q.copy(f.rotation).multiply(kt.r.copy(v).invert());A.w<0&&A.set(-A.x,-A.y,-A.z,-A.w);let D=kt.a.set(A.x,A.y,A.z).multiplyScalar(2*a.grip);D.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector(Bg(c,D,kt.b),r)}let g=kt.a.set(0,1,0).applyQuaternion(v),C=kt.b.set(-g.x*g.z,-g.y*g.z,1-g.z*g.z);if(C.lengthSq()>.001){let A=kt.d.set(0,0,1).applyQuaternion(v),D=Math.atan2(kt.e.crossVectors(C,A).dot(g),C.dot(A)),H=D-t.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),t.twist+=H,t.twistRaw=D}if(!f){let A=c.angular.dot(g);c.angular.addScaledVector(g,(a.twist*(t.turn-t.twist)-a.twistDamping*A)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=u*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),h_(c.quaternion,kt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),f&&d.lerpVectors(f.from,f.target,(x+1)/n);for(let A=0;A<n3;A++){for(let D=0;D<pa;D++)y3(t,D,r,a);f&&M3(c,f,d)}for(let A=1;A<pa;A++){let D=l[A].subVectors(s[A],i[A]).divideScalar(r).multiplyScalar(I);D.multiplyScalar(1/(1+a.nodeAir*D.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let b=kt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(b.x,b.y,b.z).multiplyScalar(2/r*(b.w<0?-1:1));let w=kt.a.set(0,0,1).applyQuaternion(c.quaternion),S=c.velocity.dot(w),T=kt.b.copy(c.velocity).addScaledVector(w,-S);T.multiplyScalar(1/(1+a.air*T.length()*r)),c.velocity.copy(T).addScaledVector(w,S/(1+a.broadside*Math.abs(S)*r)).multiplyScalar(y),c.angular.multiplyScalar(m/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[pa].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let A=0;A<pa;A++)t.lengths[A]=s[A].distanceTo(s[A+1])}f&&f.from.copy(f.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let x=1;x<pa;x++)p+=l[x].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},b3=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:u="center",strapLength:h=.5,strapImage:f,strapColor:d="#111111",strapWidth:I=.65,metal:y="silver",gravity:m=1,damping:p=.5,elasticity:x=.5,breeze:v=.5,interactive:g=!0,intro:C=!0,className:b="",style:w})=>{let S=(0,ri.useRef)(null),T=(0,ri.useRef)(null),A=(0,ri.useRef)(null);return T.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:u,strapLength:h,strapImage:f,strapColor:d,strapWidth:I,metal:y,gravity:m,damping:p,elasticity:x,breeze:v,interactive:g,intro:C},(0,ri.useEffect)(()=>{A.current?.()}),(0,ri.useEffect)(()=>{let D=S.current;if(!D)return;let H;try{H=new Bh({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}H.setClearColor(0,0),H.outputColorSpace=ka,H.toneMapping=Rf,H.toneMappingExposure=1;let O=H.domElement;O.className="lanyard-canvas",O.setAttribute("aria-hidden","true"),D.appendChild(O);let P=Math.min(8,H.capabilities.getMaxAnisotropy()),B=new Tl,Q=m3(H);B.environment=Q.texture;let Y=new Wa(r_,1,.1,200),ae=new Ol(16777215,1.6);ae.position.set(-2.5,4,6);let z=new Ol(16777215,.35);z.position.set(3,-1,4),B.add(ae,z);let W={front:null,back:null,strap:null},j=document.createElement("canvas"),Ae=document.createElement("canvas"),Fe=document.createElement("canvas"),qe=Eg(j,P),N=Eg(Ae,P),je=Eg(Fe,P);je.wrapS=Jo,je.wrapT=Pn;let K=I3(),J=x3(),Ie={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new k},foilFill:{value:new k},foilTop:{value:new k}},ze=me=>{Object.assign(me.uniforms,Ie),me.vertexShader=me.vertexShader.replace("#include <common>",`#include <common>
${l3}`).replace("#include <project_vertex>",`#include <project_vertex>
${c3}`),me.fragmentShader=me.fragmentShader.replace("#include <common>",`#include <common>
${f3}`).replace("#include <opaque_fragment>",`${u3}
#include <opaque_fragment>`)},he=new ls({map:qe,normalMap:K,normalScale:new Te(.06,.06)}),He=new ls({map:N,normalMap:K,normalScale:new Te(.06,.06)});he.onBeforeCompile=ze,He.onBeforeCompile=ze;let Ze=new ls,$=new kl({metalness:1}),re=new ls({map:je,normalMap:J,normalScale:new Te(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new pt(.32,.32,.34),side:Uo}),ue=new Dn,oe=new sa(void 0,Ze),le=new sa(void 0,he),Be=new sa(void 0,He),Ne=new sa(new Ul(Lg,r3,18,72),$);Ne.rotation.y=Math.PI/2-.7,ue.add(oe,le,Be,Ne),B.add(ue);let Pe=h3(mr),we=new sa(Pe,re);we.frustumCulled=!1,B.add(we);let E=new Dn,$e=new sa(f_(Ag),$);$e.position.y=Nh+Gf/2-.004;let Ke=new sa(new Ul(Nh,.0105,14,40),$);E.add($e,Ke),B.add(E);let _=v3(),F=[],U=new k,q=new k,te=new Ll(F,!1,"centripetal"),pe={width:1,height:1},ce=c_("portrait",.3),Z={},ne=Ag,ve=2,Ge=0,Me=performance.now(),Ce=0,fe=!0,xe=!0,Se=!1,L=!1,de=null,ee=0,ge=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,ye=(me="both")=>{let nt=T.current,M=wg(nt.cardColor,[1,1,1]),R=s_,X=Math.round(s_*ce.height/ce.width);(j.width!==R||j.height!==X)&&(j.width=R,j.height=X,Ae.width=R,Ae.height=X,qe.dispose(),N.dispose()),me!=="back"&&(d_(j,W.front,M,nt.imageFit,ce,nt.slotClearance,nt.slotClearanceValue),qe.needsUpdate=!0),me!=="front"&&(d_(Ae,W.back||W.front,M,nt.imageFit,ce,nt.slotClearance,nt.slotClearanceValue),N.needsUpdate=!0),Re()},ie=()=>{let me=T.current,nt=Fe.width,M=Fe.height;ve=S3(Fe,W.strap,wg(me.strapColor,[.07,.07,.07])),J.repeat.set(2,2*ve),(Fe.width!==nt||Fe.height!==M)&&je.dispose(),je.needsUpdate=!0,Re()},Le=()=>{let me=T.current,nt=pe.width/pe.height,M=ni(me.size??1,.2,3),R=ce.height/.72/M,X=ce.width/.65/M;R*nt<X&&(R=X/nt);let V=R*nt,G=.04*R,De=((a3[me.anchor]??.5)-.5)*V,be=G+R/2+.15,Ee=G+ce.height/2+(ce.hangY-ce.height/2);Y.aspect=nt,Y.position.set(0,G,R/2/Math.tan(r_*Math.PI/360)),Y.lookAt(0,G,0),Y.updateProjectionMatrix(),Y.updateMatrixWorld(),Ie.foilKey.value.set(-2.5,4,6).normalize().transformDirection(Y.matrixWorldInverse),Ie.foilFill.value.set(3,-1,4).normalize().transformDirection(Y.matrixWorldInverse),Ie.foilTop.value.set(.5,4.5,8).normalize().transformDirection(Y.matrixWorldInverse),_.anchor.set(De,be,0),C3(_,ce,Math.max(.4,be-Ee)),_.nodes[0].copy(_.anchor),_.previous[0].copy(_.anchor)},Ue=()=>{let me=T.current,nt=`${me.orientation}|${me.cornerRadius}|${JSON.stringify(me.cardSize)}`;if(nt!==Z.layoutKey){ce=c_(me.orientation,me.cornerRadius,me.cardSize);let be=p3(ce);oe.geometry.dispose(),le.geometry.dispose(),Be.geometry.dispose(),oe.geometry=be.body,le.geometry=be.face,Be.geometry=be.face.clone(),le.position.z=Wf/2+ro+6e-4,Be.rotation.y=Math.PI,Be.position.z=-(Wf/2+ro+6e-4),Ne.position.set(0,ce.ringY,0),Z.framingKey=""}let M=`${nt}|${me.size}|${me.anchor}|${me.strapLength}|${pe.width}|${pe.height}`;M!==Z.framingKey&&(Le(),Se?nt!==Z.layoutKey&&Rg(_,ce,!1):(Rg(_,ce,me.intro&&!ge),Se=!0));let R=`${me.frontImage}|${me.backImage}|${me.strapImage}`;if(R!==Z.imageKey){let be=++ee;W.front=W.back=W.strap=null;let Ee=!1;Vh(Gh,me.frontImage).then(Oe=>{!xe||be!==ee||(W.front=Oe,ye("front"),(!me.backImage||Ee)&&ye("back"))}),Vh(Gh,me.backImage).then(Oe=>{!xe||be!==ee||(W.back=Oe,Ee=!Oe,ye("back"))}),Vh(Gh,me.strapImage).then(Oe=>{!xe||be!==ee||(W.strap=Oe,ie())})}let X=`${nt}|${me.cardColor}|${me.imageFit}|${me.slotClearance}|${me.slotClearanceValue}`;X!==Z.faceKey&&ye(),me.strapColor!==Z.strapColor&&ie();let V=i_[me.finish]||i_.glossy,G=wg(me.cardColor,[1,1,1]);[he,He].forEach(be=>{be.roughness=V.roughness,be.metalness=V.metalness,be.clearcoat=V.clearcoat,be.clearcoatRoughness=V.clearcoatRoughness,be.anisotropy=V.anisotropy}),Ie.foilStrength.value=V.foil,Ie.foilAspect.value=ce.height/ce.width,Ze.color.setRGB(G[0]*.92,G[1]*.92,G[2]*.92,ka),Ze.roughness=Math.min(V.roughness,.35),Ze.metalness=V.metalness,Ze.clearcoat=1,Ze.clearcoatRoughness=.08;let De=l_[me.metal]||l_.silver;$.color.set(De.color),$.roughness=De.roughness,ne=Ag*ni(me.strapWidth,.4,2),ne!==Z.strapScale&&($e.geometry.dispose(),$e.geometry=f_(ne)),O.style.touchAction=me.interactive?"pan-y":"auto",Z={layoutKey:nt,framingKey:M,imageKey:R,faceKey:X,strapColor:me.strapColor,strapScale:ne},Re()},ut=Array.from({length:mr},()=>new k),it=Array.from({length:mr},()=>new k),ya=s3.map(me=>[Math.cos(me),Math.sin(me)]),oa={tangent:new k,toCamera:new k,basis:new Gt,up:new k,across:new k,facing:new k,end:new k},ii=()=>{let me=_.nodes[pa],nt=Nh+Gf+.05,M=pa-1;for(;M>0&&_.nodes[M].distanceTo(me)<nt*1.1;)M--;let R=oa.up.subVectors(_.nodes[M],me);R.lengthSq()<1e-8&&R.set(0,1,0).applyQuaternion(_.body.quaternion),R.normalize(),U.copy(me).addScaledVector(R,nt),q.copy(me).addScaledVector(R,Nh+Gf*.35),F.length=0;for(let at=0;at<=M;at++)F.push(_.nodes[at]);F.push(U,q),te.updateArcLengths();for(let at=0;at<mr;at++)te.getPointAt(at/(mr-1),ut[at]);let X=te.getLength(),V=1-U.distanceTo(q)/Math.max(X,.001),G=Pe.getAttribute("position"),De=Pe.getAttribute("normal"),be=Pe.getAttribute("uv"),Ee=Oh.length,Oe=_.rest*pa,Ye=Oe/(ne*ve),ht=ne/Math.pow(Math.max(1,X/Math.max(Oe,.001)),.35),{tangent:lt,toCamera:We,across:dt,facing:Lt}=oa;for(let at=0;at<mr;at++){lt.subVectors(ut[Math.min(mr-1,at+1)],ut[Math.max(0,at-1)]),lt.lengthSq()<1e-12&&lt.set(0,-1,0),lt.normalize(),We.subVectors(Y.position,ut[at]).normalize();let _t=it[at].crossVectors(We,lt);_t.lengthSq()<1e-10&&_t.copy(at>0?it[at-1]:kt.a.set(1,0,0)),_t.normalize(),at>0&&_t.dot(it[at-1])<0&&_t.negate();let ma=-_.twist*Math.pow(Math.min(1,at/(mr-1)/V),1.3);Lt.crossVectors(lt,_t),dt.copy(_t).multiplyScalar(Math.cos(ma)).addScaledVector(Lt,Math.sin(ma)),Lt.crossVectors(lt,dt);let Ve=ut[at],wa=(1-at/(mr-1))*Ye;for(let xt=0;xt<Ee;xt++){let Oa=at*Ee+xt,so=(Oh[xt]-.5)*ht,[No,mn]=ya[xt];G.setXYZ(Oa,Ve.x+dt.x*so,Ve.y+dt.y*so,Ve.z+dt.z*so),De.setXYZ(Oa,Lt.x*No+dt.x*mn,Lt.y*No+dt.y*mn,Lt.z*No+dt.z*mn),be.setXY(Oa,Oh[xt],wa)}}oa.end.copy(dt),G.needsUpdate=!0,De.needsUpdate=!0,be.needsUpdate=!0,dt.copy(oa.end).addScaledVector(R,-oa.end.dot(R)).normalize(),Lt.crossVectors(dt,R).normalize(),oa.basis.makeBasis(dt,R,Lt),E.quaternion.setFromRotationMatrix(oa.basis),E.position.copy(me)},xs=()=>{ue.position.copy(_.body.position),ue.quaternion.copy(_.body.quaternion),ii(),H.render(B,Y)},gs=()=>{let me=T.current,nt=40*ni(me.gravity,0,3),M=Math.max(nt,20),R=ni(me.elasticity,0,1),X=ni(me.damping,0,1);return{gravity:nt,hold:M*zh(2.2,5.5,R),stiffness:M*10*pa,spring:M*zh(.1,.4,R)*pa,bandDamping:M*zh(.3,.08,R)*pa,linearDrag:.25*Math.pow(16,X),angularDrag:.5*Math.pow(12,X),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ge?0:ni(me.breeze,0,1)}},Gn=me=>{if(Ge=0,!xe)return;let nt=Math.min(1/30,Math.max(1/240,(me-Me)/1e3));Me=me,Ce+=nt;let M=gs();_3(_,nt,M,Ce);let R=_.body;Number.isFinite(R.position.x+R.position.y+R.position.z+R.quaternion.w)||(_.grab=null,Rg(_,ce,!1)),xs();let X=_.calm>1.2&&!_.grab&&M.breeze===0;fe&&!X&&(Ge=requestAnimationFrame(Gn))},Re=()=>{Ge||!fe||!xe||(_.calm=0,Me=performance.now(),Ge=requestAnimationFrame(Gn))},Je=new wf,Qe=new Te,It=me=>{let nt=O.getBoundingClientRect();Qe.set((me.clientX-nt.left)/nt.width*2-1,-((me.clientY-nt.top)/nt.height)*2+1),Je.setFromCamera(Qe,Y)},bt=()=>(ue.updateMatrixWorld(),Je.intersectObjects([oe,le,Be],!1)[0]||null),ia=me=>{O.style.cursor!==me&&(O.style.cursor=me)},Na=me=>{let nt=_.body,M=kt.a.set(0,1,0).applyQuaternion(nt.quaternion),R=_.turn>0?-1:1;if(_.turn===0){let X=kt.c.subVectors(me,Y.position).normalize();R=kt.b.subVectors(me,nt.position).cross(X).dot(M)<0?-1:1}_.turn=_.turn===0?Math.PI*R:0,nt.angular.addScaledVector(M,i3*R)},Tt=me=>{if(!T.current.interactive||me.button>0)return;It(me);let nt=bt();nt&&(_.grab={local:nt.point.clone().sub(_.body.position).applyQuaternion(_.body.quaternion.clone().invert()),rotation:_.body.quaternion.clone(),reach:nt.distance,from:nt.point.clone(),target:nt.point.clone()},de={x:me.clientX,y:me.clientY,time:performance.now(),point:nt.point.clone()},O.setPointerCapture?.(me.pointerId),ia("grabbing"),me.preventDefault(),Re())},ot=me=>{if(T.current.interactive){if(It(me),_.grab){de&&Math.hypot(me.clientX-de.x,me.clientY-de.y)>6&&(de=null),Je.ray.at(_.grab.reach,_.grab.target),Re();return}me.pointerType!=="touch"&&(L=!!bt(),ia(L?"grab":""))}},ha=me=>{_.grab&&(_.grab=null,de&&me.type==="pointerup"&&performance.now()-de.time<450&&Na(de.point),de=null,O.releasePointerCapture?.(me.pointerId),ia(L&&me.pointerType!=="touch"?"grab":""),Re())},go=me=>{!T.current.interactive||me.touches.length!==1||(It(me.touches[0]),bt()&&me.preventDefault())};O.addEventListener("pointerdown",Tt),O.addEventListener("pointermove",ot),O.addEventListener("pointerup",ha),O.addEventListener("pointercancel",ha),O.addEventListener("lostpointercapture",ha),O.addEventListener("touchstart",go,{passive:!1});let Fo=()=>{pe.width=Math.max(1,D.clientWidth),pe.height=Math.max(1,D.clientHeight),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setSize(pe.width,pe.height,!1),Ue(),xs()},Kf=new ResizeObserver(Fo);Kf.observe(D);let Jf=new IntersectionObserver(([me])=>{fe=me.isIntersecting,fe&&Re()});Jf.observe(D);let Qf=()=>{document.hidden||Re()};return document.addEventListener("visibilitychange",Qf),A.current=Ue,Fo(),()=>{xe=!1,cancelAnimationFrame(Ge),A.current=null,Kf.disconnect(),Jf.disconnect(),document.removeEventListener("visibilitychange",Qf),O.removeEventListener("pointerdown",Tt),O.removeEventListener("pointermove",ot),O.removeEventListener("pointerup",ha),O.removeEventListener("pointercancel",ha),O.removeEventListener("lostpointercapture",ha),O.removeEventListener("touchstart",go),[oe,le,Be,Ne,$e,Ke,we].forEach(me=>me.geometry?.dispose()),[he,He,Ze,$,re].forEach(me=>me.dispose()),[qe,N,je,K,J].forEach(me=>me.dispose()),Q.dispose(),H.dispose(),O.parentNode&&O.parentNode.removeChild(O)}},[]),_e.createElement("div",{ref:S,className:`lanyard ${b}`.trim(),style:w})},Ug=b3;st();var ko=qn(jo());var qh=4,x_=2.4,T3=2.2,Wh=1.25,A3="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",w3="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",E3={solid:0,dashed:1,dotted:2},R3=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,D3=`#version 300 es
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
}`,L3=`#version 300 es
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
}`,P3=`#version 300 es
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
}`,B3=`#version 300 es
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
}`,Za=(t,e,a)=>Math.min(a,Math.max(e,t)),g_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},Xh=(t,e)=>{let a=g_(t,t.VERTEX_SHADER,R3),o=g_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},Yh=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},Zh=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},Kh=null,U3=()=>window.faceapi?Promise.resolve(window.faceapi):(Kh||(Kh=new Promise((t,e)=>{let a=document.createElement("script");a.src=A3,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{Kh=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),Kh),k3={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},N3=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:u=.7,scanDirection:h="forward",scanDuration:f=2.4,scanDelay:d=1.6,scanWidth:I=1,trail:y=.5,glow:m=.6,autoScan:p=!0,interactive:x=!0,clickEffect:v="ping",enableWebcam:g=!1,showPreview:C=!1,modelsPath:b=w3,enableGyro:w=!1,intro:S=!0,lightMode:T=!1,dpr:A,className:D="",style:H,...O})=>{let P=(0,ko.useRef)(null),B=(0,ko.useRef)(null),Q=(0,ko.useRef)(null),Y=(0,ko.useRef)(null),ae=(0,ko.useRef)(null),[z,W]=(0,ko.useState)("loading"),j={linesColor:t??(T?"#d4d4d8":"#4d4757"),scanColor:e??(T?"#0284c7":"#7dd3fc"),cells:Za(a,2,40),thickness:Za(o,.5,4),style:E3[n]??0,depth:Za(r,.5,12),depthFade:Za(s,0,1),parallax:Za(i,0,3),points:l,reflection:Za(c,0,1),shading:Za(u,0,1),direction:h,duration:Za(f,.3,20),delay:Za(d,0,30),scanWidth:Za(I,.2,5),trail:Za(y,0,1),glow:Za(m,0,1.5),autoScan:p,interactive:x,clickEffect:v,enableGyro:w,intro:S,lightMode:T,dpr:A},Ae=(0,ko.useRef)(j);return Ae.current=j,(0,ko.useEffect)(()=>{let Fe=P.current,qe=B.current,N=qe?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!Fe||!qe||!N)return;let je=Xh(N,D3),K=Xh(N,L3),J=Xh(N,P3),Ie=Xh(N,B3);if(!je||!K||!J||!Ie)return;let ze=N.createVertexArray(),he=Yh(N),He=Yh(N),Ze=Yh(N),$=Yh(N),re=N.createFramebuffer(),ue=N.createFramebuffer(),oe=N.createFramebuffer(),le=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Be=new Map,Ne=Re=>{let Je=String(Re),Qe=Be.get(Je);if(Qe)return Qe;let It=[1,1,1];if(le){le.clearRect(0,0,1,1),le.fillStyle="#000000",le.fillStyle=Je,le.fillRect(0,0,1,1);let[bt,ia,Na]=le.getImageData(0,0,1,1).data;It=[bt/255,ia/255,Na/255]}return Be.set(Je,It),It},Pe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,we={width:1,height:1,ratio:1},E={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:Wh,vf:0,tf:Wh},$e={x:0,y:0,inside:!1},Ke={x:0,y:0,held:!1},_={gamma:0,beta:0,ready:!1,asked:!1},F={x:0,y:0,z:0,strength:0,ready:!1},U={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},q=[],te=new Float32Array(qh*4),pe=new Float32Array(qh),ce=0,Z=Ae.current.intro&&!Pe?0:1,ne=0,ve=0,Ge=!0,Me=0,Ce=()=>{let Re=Ae.current,Je=we.width/we.height,Qe=1/Math.round(Re.cells),It=Je/Math.max(1,Math.round(Je/Qe)),bt=Math.max(Qe,Math.round(Re.depth/Qe)*Qe);return{aspect:Je,cx:It,cy:Qe,roomDepth:bt}},fe=(Re,Je)=>{let{aspect:Qe,roomDepth:It}=Ce(),bt=(Re-.5)*Qe,ia=Je-.5,Na=bt-E.x,Tt=ia-E.y,ot=E.f,ha=Na>0?.5*Qe:-.5*Qe,go=Tt>0?.5:-.5,Fo=It/ot;return Math.abs(Na)>1e-6&&(Fo=Math.min(Fo,(ha-bt)/Na)),Math.abs(Tt)>1e-6&&(Fo=Math.min(Fo,(go-ia)/Tt)),{x:bt+Na*Fo,y:ia+Tt*Fo,z:ot*Fo}},xe=Re=>{U.dir=Re.direction==="backward"||Re.direction==="pingpong"&&U.sweeps%2===1?-1:1,U.start=ce,U.waiting=!1,U.sweeps+=1},Se=(Re,Je)=>{if(Z<1){let bt=Z;U.dir=1,U.z=bt*(Je+.4)-.2,U.alpha=Math.min(1,bt*6)*(1-Math.max(0,bt-.85)/.15);return}if(U.sweeps===0&&!U.waiting&&(U.waiting=!0,U.start=ce,U.alpha=0),U.waiting){U.alpha=0,Re.autoScan&&!Pe&&ce-U.start>=Re.delay&&xe(Re);return}let Qe=(ce-U.start)/Re.duration;if(Qe>=1){U.waiting=!0,U.start=ce,U.alpha=0;return}let It=Qe*(Je+.3)-.15;U.z=U.dir>0?It:Je-It,U.alpha=Math.min(1,Qe/.12)*Math.min(1,(1-Qe)/.12)},L=Re=>{let Je=Math.max(1,Math.ceil(Re/.008333333333333333)),Qe=Re/Je;for(let It=0;It<Je;It++)E.vx+=((E.tx-E.x)*42-E.vx*11)*Qe,E.vy+=((E.ty-E.y)*42-E.vy*11)*Qe,E.vf+=((E.tf-E.f)*42-E.vf*11)*Qe,E.x+=E.vx*Qe,E.y+=E.vy*Qe,E.f+=E.vf*Qe},de=(Re,Je,Qe)=>{Ke.x=Za(Re,-1,1),Ke.y=Za(Je,-1,1),Ke.held=Qe},ee=Re=>{let Je=we.width/we.height,Qe=Pe?0:1,It=Ke.held?Ke.x:(Math.sin(ce*.21)*.2+Math.sin(ce*.083+1.3)*.12)*Qe,bt=Ke.held?Ke.y:Math.sin(ce*.17+2.1)*.16*Qe;E.tx=It*Re.parallax*.22*Je,E.ty=bt*Re.parallax*.22},ge=()=>{let Re=Ae.current;we.width=Math.max(1,Fe.clientWidth),we.height=Math.max(1,Fe.clientHeight),we.ratio=Math.min(Re.dpr||window.devicePixelRatio||1,2),qe.width=Math.max(1,Math.round(we.width*we.ratio)),qe.height=Math.max(1,Math.round(we.height*we.ratio)),Zh(N,he,qe.width,qe.height),Zh(N,He,qe.width,qe.height),N.bindFramebuffer(N.FRAMEBUFFER,re),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.texture,0),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT1,N.TEXTURE_2D,He.texture,0);let Je=Math.max(1,Math.round(qe.width/4)),Qe=Math.max(1,Math.round(qe.height/4));Zh(N,Ze,Je,Qe),Zh(N,$,Je,Qe),N.bindFramebuffer(N.FRAMEBUFFER,ue),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.texture,0),N.bindFramebuffer(N.FRAMEBUFFER,oe),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$.texture,0),N.bindFramebuffer(N.FRAMEBUFFER,null),ye(),Le()},ye=()=>{let Re=Ae.current,{aspect:Je,cx:Qe,cy:It,roomDepth:bt}=Ce(),ia=Ne(Re.linesColor),Na=Ne(Re.scanColor),Tt=Re.lightMode?Na:Na.map(go=>go+(1-go)*.65),ot=je.uniforms;N.bindVertexArray(ze),N.disable(N.BLEND),N.bindFramebuffer(N.FRAMEBUFFER,re),N.drawBuffers([N.COLOR_ATTACHMENT0,N.COLOR_ATTACHMENT1]),N.viewport(0,0,qe.width,qe.height),N.useProgram(je.program),N.uniform1f(ot.uAspect,Je),N.uniform1f(ot.uPixel,1/qe.height),N.uniform3f(ot.uEye,E.x,E.y,-E.f),N.uniform1f(ot.uDepth,bt),N.uniform3f(ot.uCell,Qe,It,It),N.uniform1f(ot.uThick,Re.thickness*we.ratio*.5),N.uniform1f(ot.uDot,1.8*we.ratio),N.uniform1i(ot.uStyle,Re.style),N.uniform3fv(ot.uLineColor,ia),N.uniform3fv(ot.uScanColor,Na),N.uniform3fv(ot.uCoreColor,Tt),N.uniform1f(ot.uFade,Re.depthFade),N.uniform1f(ot.uScanZ,U.z),N.uniform1f(ot.uScanDir,U.dir),N.uniform1f(ot.uScanAlpha,U.alpha),N.uniform1f(ot.uScanWidth,.006*Re.scanWidth),N.uniform1f(ot.uTrail,.04+Re.trail*1.1),N.uniform1f(ot.uReveal,Z<1?U.z+.05:1e4),N.uniform1f(ot.uPoints,Re.points?1:0),N.uniform1f(ot.uReflect,Re.reflection),N.uniform1f(ot.uHaze,Re.lightMode?.03:.05),N.uniform1f(ot.uShade,Re.shading),N.uniform1f(ot.uLight,Re.lightMode?1:0),N.uniform4fv(ot.uPing,te),N.uniform1fv(ot.uPingAlpha,pe),N.uniform4f(ot.uHover,F.x,F.y,F.z,F.strength),N.uniform1f(ot.uTime,ce),N.drawArrays(N.TRIANGLES,0,3);let ha=Re.glow>0;if(ha){N.bindFramebuffer(N.FRAMEBUFFER,ue),N.viewport(0,0,Ze.width,Ze.height),N.useProgram(K.program),N.activeTexture(N.TEXTURE0),N.bindTexture(N.TEXTURE_2D,He.texture),N.uniform1i(K.uniforms.uSource,0),N.uniform2f(K.uniforms.uTexel,1/He.width,1/He.height),N.drawArrays(N.TRIANGLES,0,3);let go=2.2*we.ratio/2;N.useProgram(J.program),N.uniform1i(J.uniforms.uSource,0),N.bindFramebuffer(N.FRAMEBUFFER,oe),N.bindTexture(N.TEXTURE_2D,Ze.texture),N.uniform2f(J.uniforms.uStep,go/Ze.width,0),N.drawArrays(N.TRIANGLES,0,3),N.bindFramebuffer(N.FRAMEBUFFER,ue),N.bindTexture(N.TEXTURE_2D,$.texture),N.uniform2f(J.uniforms.uStep,0,go/Ze.height),N.drawArrays(N.TRIANGLES,0,3)}N.bindFramebuffer(N.FRAMEBUFFER,null),N.viewport(0,0,qe.width,qe.height),N.useProgram(Ie.program),N.activeTexture(N.TEXTURE0),N.bindTexture(N.TEXTURE_2D,he.texture),N.uniform1i(Ie.uniforms.uScene,0),N.activeTexture(N.TEXTURE1),N.bindTexture(N.TEXTURE_2D,Ze.texture),N.uniform1i(Ie.uniforms.uBloom,1),N.uniform1f(Ie.uniforms.uGlow,ha?Re.glow*(Re.lightMode?.8:1.6):0),N.drawArrays(N.TRIANGLES,0,3),N.activeTexture(N.TEXTURE0)},ie=Re=>{if(ne=0,!Ge||document.hidden)return;let Je=Ae.current,Qe=ve?Za((Re-ve)/1e3,.001,.05):1/60;ve=Re,ce+=Qe,Z<1&&(Z=Math.min(1,Z+Qe/T3));let{roomDepth:It}=Ce();Se(Je,It),ee(Je),L(Qe);let bt=Je.interactive&&$e.inside&&!Pe?1:0;if(bt){let Tt=fe($e.x,$e.y);F.ready||Object.assign(F,Tt,{ready:!0});let ot=1-Math.exp(-Qe/.08);F.x+=(Tt.x-F.x)*ot,F.y+=(Tt.y-F.y)*ot,F.z+=(Tt.z-F.z)*ot}F.strength+=(bt-F.strength)*(1-Math.exp(-Qe/.25)),!bt&&F.strength<.01&&(F.ready=!1);for(let Tt=q.length-1;Tt>=0;Tt--)q[Tt].age+=Qe,q[Tt].age>x_&&q.splice(Tt,1);for(let Tt=0;Tt<qh;Tt++){let ot=q[Tt];if(!ot){pe[Tt]=0;continue}let ha=ot.age/x_;te.set([ot.x,ot.y,ot.z,ot.age*1.15],Tt*4),pe[Tt]=Math.min(1,ot.age/.05)*(1-ha)*(1-ha)}ye();let ia=Math.abs(E.tx-E.x)+Math.abs(E.ty-E.y)+Math.abs(E.tf-E.f)>1e-4||Math.abs(E.vx)+Math.abs(E.vy)+Math.abs(E.vf)>1e-4;Z<1||!Pe&&Je.autoScan||!U.waiting||q.length>0||ia||F.strength>.002||!Pe&&Je.parallax>0&&!Ke.held||Je.points&&!Pe&&U.alpha>0?ne=requestAnimationFrame(ie):ve=0};function Le(){!ne&&Ge&&!document.hidden&&(ne=requestAnimationFrame(ie))}let Ue=Re=>{let Je=Fe.getBoundingClientRect(),Qe=(Re.clientX-Je.left)/Math.max(1,Je.width),It=1-(Re.clientY-Je.top)/Math.max(1,Je.height);return{u:Qe,v:It,inside:Qe>=0&&Qe<=1&&It>=0&&It<=1}},ut=Re=>{let Je=Ae.current,{u:Qe,v:It,inside:bt}=Ue(Re);$e.x=Qe,$e.y=It;let ia=$e.inside;$e.inside=bt,bt?(window.clearTimeout(Me),Me=0,!ae.current?.active&&Je.interactive&&!Pe&&de(Qe*2-1,It*2-1,!0),Le()):ia&&!Me&&(Me=window.setTimeout(()=>{Me=0,ae.current?.active||(Ke.held=!1),Le()},220),Le())},it=Re=>{let Je=Ae.current,{u:Qe,v:It,inside:bt}=Ue(Re);if(!(!bt||Pe||Je.clickEffect==="none")){if(Je.clickEffect==="scan")Z>=1&&xe(Je);else{let ia=fe(Qe,It);q.unshift({...ia,age:0}),q.length>qh&&q.pop()}Le()}},ya=()=>{$e.inside=!1,ae.current?.active||(Ke.held=!1),Le()},oa=Re=>{!Ae.current.enableGyro||ae.current?.active||Pe||Re.gamma===null||Re.beta===null||(_.ready||Object.assign(_,{gamma:Re.gamma,beta:Re.beta,ready:!0}),de((Re.gamma-_.gamma)/25,(Re.beta-_.beta)/-25,!0),Le())},ii=()=>{let Re=Ae.current,Je=window.DeviceOrientationEvent?.requestPermission;!Re.enableGyro||_.asked||typeof Je!="function"||(_.asked=!0,Je.call(window.DeviceOrientationEvent).catch(()=>{}))},xs=()=>{ve=0,Le()},gs=new ResizeObserver(ge);gs.observe(Fe);let Gn=new IntersectionObserver(Re=>{Ge=Re.some(Je=>Je.isIntersecting),Ge&&(ve=0,Le())});return Gn.observe(Fe),window.addEventListener("pointermove",ut,{passive:!0}),window.addEventListener("pointerdown",it,{passive:!0}),window.addEventListener("deviceorientation",oa),window.addEventListener("click",ii),document.documentElement.addEventListener("pointerleave",ya),document.addEventListener("visibilitychange",xs),ae.current={active:!1,move:(Re,Je,Qe)=>{Pe||(de(Re*1.3,Je*1.3,!0),E.tf=Wh*Za(Qe,.6,1.6),Le())},release:()=>{E.tf=Wh,Ke.held=!1,Le()}},ge(),Y.current=Le,()=>{cancelAnimationFrame(ne),window.clearTimeout(Me),Y.current=null,ae.current=null,gs.disconnect(),Gn.disconnect(),window.removeEventListener("pointermove",ut),window.removeEventListener("pointerdown",it),window.removeEventListener("deviceorientation",oa),window.removeEventListener("click",ii),document.documentElement.removeEventListener("pointerleave",ya),document.removeEventListener("visibilitychange",xs),[he,He,Ze,$].forEach(Re=>N.deleteTexture(Re.texture)),[re,ue,oe].forEach(Re=>N.deleteFramebuffer(Re)),N.deleteVertexArray(ze),[je,K,J,Ie].forEach(Re=>N.deleteProgram(Re.program)),N.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,ko.useEffect)(()=>{Y.current?.()}),(0,ko.useEffect)(()=>{if(!g)return;let Fe=Q.current;if(!Fe)return;let qe=!1,N=null,je=0,K=0,J={x:0,y:0,near:1,ready:!1};return W("loading"),(async()=>{try{let ze=await U3();if(await ze.nets.tinyFaceDetector.loadFromUri(b),qe)return;if(N=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),qe){N.getTracks().forEach(Ze=>Ze.stop());return}Fe.srcObject=N,await Fe.play(),W("searching");let he=new ze.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),He=async()=>{if(qe)return;let Ze=null;try{Ze=await ze.detectSingleFace(Fe,he)}catch{Ze=null}if(qe)return;let $=ae.current;if(Ze&&$){let re=Ze.box,ue=Fe.videoWidth||1,oe=Fe.videoHeight||1,le=-((re.x+re.width/2)/ue-.5)*2,Be=-((re.y+re.height/2)/oe-.5)*2,Ne=.32/Math.max(.08,re.width/ue),Pe=J.ready?.45:1;J.x+=(le-J.x)*Pe,J.y+=(Be-J.y)*Pe,J.near+=(Ne-J.near)*Pe,J.ready=!0,K=0,$.active=!0,$.move(J.x,J.y,J.near),W("tracking")}else $&&++K>12&&$.active&&($.active=!1,J.ready=!1,$.release(),W("searching"));je=window.setTimeout(He,40)};He()}catch{qe||W("blocked")}})(),()=>{qe=!0,window.clearTimeout(je),N?.getTracks().forEach(he=>he.stop()),Fe.srcObject=null;let ze=ae.current;ze?.active&&(ze.active=!1,ze.release())}},[g,b]),_e.createElement("div",{ref:P,className:`grid-scan${D?` ${D}`:""}`,style:H,...O},_e.createElement("canvas",{ref:B,className:"grid-scan-canvas","aria-hidden":"true"}),g&&_e.createElement("div",{className:C?"grid-scan-preview":"grid-scan-hidden"},_e.createElement("video",{ref:Q,className:"grid-scan-video",muted:!0,playsInline:!0}),C&&_e.createElement("span",{className:"grid-scan-status"},k3[z])))},F_=N3;st();var Xe=qn(jo());st();var zt=qn(jo());st();st();var Xf=qn(jo(),1),O3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Is=(0,Xf.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:u=!1,...h},f)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,I=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},y={ref:f,...O3,width:e,height:e,color:l||t,className:n,...I,...h},p=[...s&&r?r:i].sort(([,x],[,v])=>{let g=x.opacity!==void 0;return v.opacity!==void 0?1:g?-1:0}).map(([x,v])=>{let g=v.opacity!==void 0,C=g&&!u?v.opacity:void 0,b=c?{...v.stroke!==void 0?{stroke:g?c:l||t}:{fill:g?c:l||t}}:{};return(0,Xf.createElement)(x,{...v,...I,...b,opacity:C,key:v.key})});return(0,Xf.createElement)("svg",y,p)});Is.displayName="HugeiconsIcon";st();st();var Hn=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];st();var Ir=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];st();var xr=[["path",{d:"M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]];st();var Yf=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var Zf=typeof window>"u"?zt.useEffect:zt.useLayoutEffect,S_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},M_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",C_="cubic-bezier(0.22, 1, 0.36, 1)",v_=(t,e,a)=>Math.min(a,Math.max(e,t)),z3=t=>typeof t=="number"?`${t}px`:t,H3=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},y_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?M_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function V3(){let t=(0,zt.useRef)(null);return Zf(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:C_}))},[]),_e.createElement("span",{ref:t,className:"stepper__check"},_e.createElement(Is,{icon:Yf,size:16,strokeWidth:2.4}))}function Jh({children:t}){return _e.createElement("div",{className:"stepper__step"},t)}function kg({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:u,showFooter:h=!0,backButtonText:f="Back",nextButtonText:d="Continue",completeButtonText:I="Complete",backButtonProps:y={},nextButtonProps:m={},completedContent:p,theme:x="dark",accentColor:v="#00f5ff",frame:g=!0,radius:C=20,width:b=620,className:w="",stepCircleContainerClassName:S="",stepContainerClassName:T="",contentClassName:A="",footerClassName:D="",style:H,...O}){let P=zt.Children.toArray(t).filter(zt.isValidElement),B=P.length,Q=typeof e=="number",[Y,ae]=(0,zt.useState)(a),z=v_(Math.round(Q?e:Y),1,B+1),W=z>B,j=s==="vertical",Ae=j?"numbers":r,Fe=P.some(fe=>fe.props.title),[qe,N]=(0,zt.useState)(!1),[je,K]=(0,zt.useState)(!1),J=j&&!qe,[Ie,ze]=(0,zt.useState)(z);z>Ie&&ze(z);let[he,He]=(0,zt.useState)({step:z,previous:null,direction:1,id:0});he.step!==z&&He({step:z,previous:he.step,direction:z>he.step?1:-1,id:he.id+1});let Ze=(0,zt.useRef)(null),$=(0,zt.useRef)(null),re=(0,zt.useRef)(null),ue=(0,zt.useRef)([]),oe=(0,zt.useRef)([]),le=(0,zt.useRef)(null),Be=(0,zt.useRef)(null),Ne=(0,zt.useRef)(null),Pe=(0,zt.useRef)(0),we=(0,zt.useRef)([]),E=(0,zt.useRef)(!1);E.current=je;let $e=(0,zt.useRef)(!1),Ke=fe=>{let xe=v_(fe,1,B+1);xe!==z&&(Q||ae(xe),xe>B?n():o(xe))},_=fe=>!c&&fe!==z&&(!l||fe<=Math.min(Ie,B));Zf(()=>{let fe=Ze.current;if(!fe)return;let xe=()=>{let L=j&&fe.clientWidth<520;N(L);let de=$.current;if(!de||!Fe||j&&!L){K(!1);return}let ee=ue.current.slice(0,B);E.current||ee.forEach((Le,Ue)=>{let ut=oe.current[Ue];we.current[Ue]=ut&&Le?.contains(ut)?ut.scrollWidth+8:0});let ge=ee.reduce((Le,Ue)=>Le+(Ue?.firstElementChild?.getBoundingClientRect().width??22)+20,0),ye=we.current.slice(0,B).reduce((Le,Ue)=>Le+(Ue||0),0),ie=de.clientWidth-8-4*Math.max(0,B-1);K(ge+ye>ie+.5)};xe();let Se=new ResizeObserver(xe);return Se.observe(fe),()=>Se.disconnect()},[j,Fe,g,B,Ae]),Zf(()=>{let fe=le.current;if(!fe)return;Pe.current=fe.offsetHeight;let xe=new ResizeObserver(()=>{Pe.current=fe.offsetHeight});return xe.observe(fe),()=>xe.disconnect()},[]),Zf(()=>{if(he.id===0)return;let fe=le.current,xe=Be.current,Se=Ne.current,L=he.id,de=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ee=i==="none"?"none":de?"fade":i,ge=()=>He(it=>it.id===L?{...it,previous:null}:it);if(Se&&xe&&Se.contains(document.activeElement)&&xe.focus({preventScroll:!0}),!fe||typeof fe.animate!="function"||ee==="none"){ge();return}for(let it of[fe,xe,Se])it?.getAnimations().forEach(ya=>ya.cancel());let ye=Pe.current,ie=fe.offsetHeight,Le=y_();Math.abs(ye-ie)>.5&&fe.animate([{height:`${ye}px`},{height:`${ie}px`}],{duration:de?200:560,easing:de?C_:Le});let Ue=j?"Y":"X",ut=ee==="slide"?36:0;if(xe&&(ut&&xe.animate([{transform:`translate${Ue}(${he.direction*ut}px)`},{transform:"none"}],{duration:560,easing:Le}),xe.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),Se){Se.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let it=Se.animate([{transform:"none"},{transform:`translate${Ue}(${-he.direction*ut}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});it.onfinish=ge}else ge()},[he.id]),Zf(()=>{let fe=$.current,xe=re.current;if(!fe||!xe)return;let Se=de=>{let ee=ue.current[Math.min(z,B)-1];if(!ee)return;let ge=y_();xe.style.transition=de?`transform 560ms ${ge}, width 560ms ${ge}, height 560ms ${ge}, opacity 200ms ease`:"opacity 200ms ease",xe.style.transform=`translate3d(${ee.offsetLeft}px, ${ee.offsetTop}px, 0)`,xe.style.width=`${ee.offsetWidth}px`,xe.style.height=`${ee.offsetHeight}px`,xe.style.opacity=W?"0":"1"};Se($e.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),$e.current=!0;let L=new ResizeObserver(()=>Se(!1));return L.observe(fe),()=>L.disconnect()},[z,B,W,Ae,Fe,j,qe,je]);let F=fe=>fe>B?p??null:P[fe-1],U=v?{"--stepper-solid":v,"--stepper-solid-ink":H3(v)}:{},q=(fe,xe,Se)=>_e.createElement("span",{className:"stepper__badge","data-status":Se},Se==="complete"?_e.createElement(V3,null):fe.props.icon?_e.createElement("span",{className:"stepper__glyph"},fe.props.icon):xe),te=()=>Ae==="dots"?_e.createElement("div",{className:"stepper__dots"},P.map((fe,xe)=>{let Se=xe+1,L=W||Se<z?"complete":Se===z?"active":"upcoming";return _e.createElement("button",{key:Se,type:"button",className:"stepper__dot","data-status":L,"aria-label":fe.props.title?`Step ${Se}: ${fe.props.title}`:`Step ${Se}`,"aria-current":Se===z?"step":void 0,disabled:!_(Se),onClick:()=>Ke(Se)},_e.createElement("span",{className:"stepper__dot-mark","data-status":L}))})):Ae==="bars"?_e.createElement("div",{className:"stepper__bars"},P.map((fe,xe)=>{let Se=xe+1,L=W||Se<=z;return _e.createElement("button",{key:Se,type:"button",className:"stepper__bar","data-status":W||Se<z?"complete":Se===z?"active":"upcoming","aria-label":fe.props.title?`Step ${Se}: ${fe.props.title}`:`Step ${Se}`,"aria-current":Se===z?"step":void 0,disabled:!_(Se),onClick:()=>Ke(Se)},_e.createElement("span",{className:"stepper__bar-track"},_e.createElement("span",{className:"stepper__bar-fill","data-filled":L?"":void 0})))})):_e.createElement("div",{ref:$,className:"stepper__track","data-layout":J?"rail":"row"},_e.createElement("span",{ref:re,className:"stepper__glider","aria-hidden":"true"}),P.map((fe,xe)=>{let Se=xe+1,L=W||Se<z?"complete":Se===z?"active":"upcoming",de=fe.props.title,ee=de&&!(je&&!J)&&_e.createElement("span",{className:"stepper__text"},_e.createElement("span",{ref:ye=>{oe.current[xe]=ye},className:"stepper__title","data-status":L},de),J&&fe.props.description&&_e.createElement("span",{className:"stepper__description"},fe.props.description)),ge=ye=>{ue.current[xe]=ye};return u?_e.createElement("div",{key:Se,ref:ge,className:"stepper__segment","data-status":L},u({step:Se,currentStep:z,onStepClick:ye=>Ke(ye)}),ee):_e.createElement("button",{key:Se,ref:ge,type:"button",className:"stepper__segment","data-status":L,"aria-label":typeof de=="string"?`Step ${Se}: ${de}`:`Step ${Se}`,"aria-current":Se===z?"step":void 0,disabled:!_(Se),onClick:()=>Ke(Se)},q(fe,Se,L),ee)})),pe=z===B,ce=pe?I:d,{className:Z="",onClick:ne,...ve}=y,{className:Ge="",onClick:Me,...Ce}=m;return _e.createElement("div",{...O,ref:Ze,className:`stepper stepper--${J?"vertical":"horizontal"}${g?" stepper--framed":""} ${S} ${w}`.replace(/\s+/g," ").trim(),"data-completed":W?"":void 0,style:{...S_[x]??S_.dark,"--stepper-radius":`${Math.max(0,C)}px`,"--stepper-spring":M_,"--stepper-width":z3(b),...U,...H}},_e.createElement("div",{className:`stepper__header stepper__header--${Ae} ${T}`.trim()},te()),_e.createElement("div",{className:"stepper__body"},_e.createElement("div",{ref:le,className:`stepper__viewport ${A}`.trim(),"aria-live":"polite"},he.previous!==null&&_e.createElement("div",{key:he.id-1,ref:Ne,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},F(he.previous)),_e.createElement("div",{key:he.id,ref:Be,className:"stepper__pane",tabIndex:-1},F(he.step))),h&&_e.createElement("div",{className:"stepper__footer-wrap","data-hidden":W?"":void 0,"aria-hidden":W?!0:void 0},_e.createElement("div",{className:"stepper__footer-clip"},_e.createElement("div",{className:`stepper__footer ${D}`.trim()},_e.createElement("button",{type:"button",...ve,className:`stepper__button stepper__button--back ${Z}`.trim(),"data-hidden":z<=1?"":void 0,tabIndex:W?-1:ve.tabIndex,onClick:fe=>{ne?.(fe),fe.defaultPrevented||Ke(z-1)}},_e.createElement(Is,{icon:Hn,size:16,strokeWidth:2}),_e.createElement("span",null,f)),_e.createElement("button",{type:"button",...Ce,className:`stepper__button stepper__button--next ${Ge}`.trim(),tabIndex:W?-1:Ce.tabIndex,onClick:fe=>{Me?.(fe),fe.defaultPrevented||Ke(z+1)}},_e.createElement("span",null,ce),_e.createElement(Is,{icon:pe?Yf:Ir,size:16,strokeWidth:2})))))),g&&_e.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var G3=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function Ng(){let[t,e]=(0,Xe.useState)(1),[a,o]=(0,Xe.useState)(""),[n,r]=(0,Xe.useState)("Project Inquiry"),[s,i]=(0,Xe.useState)(""),[l,c]=(0,Xe.useState)(!1),[u,h]=(0,Xe.useState)(""),f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return Xe.default.createElement("div",{className:"stepper-quick-message-container"},Xe.default.createElement("div",{className:"stepper-qm-header"},Xe.default.createElement("div",{className:"stepper-qm-badge"},Xe.default.createElement("span",{className:"pulse-dot-cyan"}),Xe.default.createElement("span",null,"Send a Quick Message")),Xe.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),Xe.default.createElement(kg,{step:t,onStepChange:y=>{h(""),e(y)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!f||l},onFinalStepCompleted:async()=>{if(!f){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let y=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(y&&y.success)e(4);else throw new Error(y&&y.error||"Failed to send message. Please retry.")}catch(y){h(y.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:Xe.default.createElement("div",{className:"stepper-complete-card"},Xe.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),Xe.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),Xe.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",Xe.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),Xe.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},Xe.default.createElement(Jh,{title:"Email"},Xe.default.createElement("div",{className:"step-pane-content"},Xe.default.createElement("h3",{className:"step-title"},"Where should I reply?"),Xe.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),Xe.default.createElement("div",{className:"step-input-box"},Xe.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},Xe.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Xe.default.createElement("polyline",{points:"22,6 12,13 2,6"})),Xe.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:y=>{o(y.target.value),u&&h("")},className:"step-text-input"})),!f&&a.length>0&&Xe.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),f&&Xe.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),Xe.default.createElement(Jh,{title:"Details"},Xe.default.createElement("div",{className:"step-pane-content"},Xe.default.createElement("h3",{className:"step-title"},"What is this regarding?"),Xe.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),Xe.default.createElement("div",{className:"intent-pills-grid"},G3.map(y=>Xe.default.createElement("button",{key:y.id,type:"button",className:`intent-pill ${n===y.id?"active":""}`,onClick:()=>r(y.id)},Xe.default.createElement("span",{className:"intent-pill-label"},y.label)))),Xe.default.createElement("div",{className:"step-message-box"},Xe.default.createElement("label",{className:"step-message-label"},"Your Message ",Xe.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),Xe.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:y=>i(y.target.value),className:"step-textarea"})))),Xe.default.createElement(Jh,{title:"Review"},Xe.default.createElement("div",{className:"step-pane-content"},Xe.default.createElement("h3",{className:"step-title"},"Ready to transmit"),Xe.default.createElement("p",{className:"step-desc"},"Review your message before sending."),Xe.default.createElement("div",{className:"review-summary-card"},Xe.default.createElement("div",{className:"review-row"},Xe.default.createElement("span",{className:"review-label"},"Your Email:"),Xe.default.createElement("span",{className:"review-value cyan"},a)),Xe.default.createElement("div",{className:"review-row"},Xe.default.createElement("span",{className:"review-label"},"Topic:"),Xe.default.createElement("span",{className:"review-value"},n)),s?Xe.default.createElement("div",{className:"review-row column"},Xe.default.createElement("span",{className:"review-label"},"Message:"),Xe.default.createElement("p",{className:"review-quote"},'"',s,'"')):Xe.default.createElement("div",{className:"review-row"},Xe.default.createElement("span",{className:"review-label"},"Message:"),Xe.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),u&&Xe.default.createElement("div",{className:"step-error-banner"},Xe.default.createElement("span",null,"\u26A0 ",u))))))}st();var Vn=qn(jo());var q3={dark:{"--pc-frame":"rgba(38, 35, 46, 0.66)","--pc-frame-edge":"rgba(255, 255, 255, 0.08)","--pc-frame-highlight":"rgba(255, 255, 255, 0.07)","--pc-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--pc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--pc-tile-edge":"rgba(255, 255, 255, 0.07)","--pc-tile-highlight":"rgba(255, 255, 255, 0.12)","--pc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--pc-ink":"#f4f4f5","--pc-muted":"rgba(244, 244, 245, 0.6)","--pc-hover":"brightness(1.12)","--pc-press":"brightness(0.8)","--pc-shade":"rgba(0, 0, 0, 0.4)"},light:{"--pc-frame":"rgba(240, 240, 243, 0.8)","--pc-frame-edge":"rgba(24, 24, 27, 0.07)","--pc-frame-highlight":"rgba(255, 255, 255, 0.95)","--pc-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--pc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--pc-tile-edge":"rgba(24, 24, 27, 0.08)","--pc-tile-highlight":"rgba(255, 255, 255, 1)","--pc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--pc-ink":"#27272a","--pc-muted":"rgba(39, 39, 42, 0.6)","--pc-hover":"brightness(0.97)","--pc-press":"brightness(0.92)","--pc-shade":"rgba(24, 24, 27, 0.14)"}},W3={dark:{"--pc-blend":"color-dodge","--pc-holo-filter":"hue-rotate(0deg)","--pc-sheen":"rgba(255, 255, 255, 0.16)"},light:{"--pc-blend":"multiply","--pc-holo-filter":"invert(1) hue-rotate(180deg)","--pc-sheen":"rgba(255, 255, 255, 0)"}},X3=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`,Qh=(t,e,a)=>Math.min(a,Math.max(e,t)),Y3=t=>{let e=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(t).trim());if(!e)return null;let a=e[1].length===3?e[1].replace(/./g,s=>s+s):e[1],[o,n,r]=[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255);return .2126*o+.7152*n+.0722*r<.5},Z3=({avatarUrl:t="",iconUrl:e="assets/csharp-pattern.svg",miniAvatarUrl:a,name:o="Javi A. Torres",title:n="Software Engineer",handle:r="javicodes",status:s="Online",statusColor:i="#22c55e",contactText:l="Contact",showUserInfo:c=!0,onContactClick:u,theme:h="dark",backdropColor:f,radius:d=16,holo:I=.8,glare:y=.5,enableTilt:m=!0,tiltStrength:p=12,parallax:x=8,enableMobileTilt:v=!1,mobileTiltSensitivity:g=5,intro:C=!0,className:b=""})=>{let w=(0,Vn.useRef)(null),S=(0,Vn.useRef)(null),T={enableTilt:m,tiltStrength:p,parallax:x,mobileTiltSensitivity:g,intro:C},A=(0,Vn.useRef)(T);A.current=T,(0,Vn.useEffect)(()=>{let B=w.current;if(!B)return;let Q=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Y={width:B.offsetWidth,height:B.offsetHeight},ae={p:0,v:0,target:0},z={p:0,v:0,target:0},W={p:0,target:0},j=0,Ae=0,Fe=0,qe=null,N=()=>{let{enableTilt:oe,tiltStrength:le,parallax:Be}=A.current,Ne=oe&&!Q?le:0,Pe=Math.min(1,Math.hypot(ae.p,z.p)),we=B.style;we.setProperty("--pc-light-x",`${((ae.p+1)*.5*Y.width).toFixed(1)}px`),we.setProperty("--pc-light-y",`${((z.p+1)*.5*Y.height).toFixed(1)}px`),we.setProperty("--pc-pointer-x",`${((ae.p+1)*50).toFixed(2)}%`),we.setProperty("--pc-pointer-y",`${((z.p+1)*50).toFixed(2)}%`),we.setProperty("--pc-band-x",`${(50+ae.p*15).toFixed(2)}%`),we.setProperty("--pc-band-y",`${(50+z.p*15).toFixed(2)}%`),we.setProperty("--pc-rotate-x",`${(z.p*Ne).toFixed(3)}deg`),we.setProperty("--pc-rotate-y",`${(-ae.p*Ne).toFixed(3)}deg`),we.setProperty("--pc-shift-x",`${(ae.p*(Q?0:Be)).toFixed(2)}px`),we.setProperty("--pc-shift-y",`${(z.p*(Q?0:Be)).toFixed(2)}px`),we.setProperty("--pc-reach",Pe.toFixed(4)),we.setProperty("--pc-tilt",(Pe*W.p).toFixed(4)),we.setProperty("--pc-active",W.p.toFixed(4))},je=oe=>{let le=Math.min(.05,(oe-Ae)/1e3||0);Ae=oe;let Be=oe<Fe,Ne=Be?24:120,Pe=Be?9:16,we=Math.max(1,Math.ceil(le/(1/120))),E=le/we;for(let _=0;_<we;_++)for(let F of[ae,z])F.v+=(Ne*(F.target-F.p)-Pe*F.v)*E,F.p+=F.v*E;let $e=W.target>W.p?.18:Be?.9:.45;W.p+=(W.target-W.p)*(1-Math.exp(-le/$e)),N(),Math.abs(ae.target-ae.p)>5e-4||Math.abs(z.target-z.p)>5e-4||Math.abs(ae.v)>5e-4||Math.abs(z.v)>5e-4||Math.abs(W.target-W.p)>.002?j=requestAnimationFrame(je):(ae.p=ae.target,z.p=z.target,W.p=W.target,N(),j=0)},K=()=>{j||(Ae=performance.now(),j=requestAnimationFrame(je))},J=(oe,le,Be=!0)=>{ae.target=Qh(oe,-1,1),z.target=Qh(le,-1,1),W.target=Be?1:0,Fe=0,K()},Ie=oe=>{let le=B.getBoundingClientRect();!le.width||!le.height||J((oe.clientX-le.left)/le.width*2-1,(oe.clientY-le.top)/le.height*2-1)},ze=()=>J(0,0,!1),he=oe=>{(oe.pointerType==="mouse"||!oe.pointerType)&&Ie(oe)},He=oe=>{(oe.pointerType==="mouse"||!oe.pointerType||oe.pointerId===qe)&&Ie(oe)},Ze=oe=>{(oe.pointerType==="mouse"||!oe.pointerType)&&ze()},$=oe=>{oe.pointerType!=="mouse"&&(qe=oe.pointerId,Ie(oe))},re=oe=>{oe.pointerId===qe&&(qe=null,ze())};B.addEventListener("pointerenter",he),B.addEventListener("pointermove",He),B.addEventListener("pointerleave",Ze),B.addEventListener("pointerdown",$),B.addEventListener("pointerup",re),B.addEventListener("pointercancel",re),B.addEventListener("mousemove",He),B.addEventListener("mouseleave",ze);let ue=new ResizeObserver(()=>{Y.width=B.offsetWidth,Y.height=B.offsetHeight,N()});return ue.observe(B),S.current={aim:J,release:ze,write:N},A.current.intro&&!Q?(ae.p=.62,z.p=-.55,W.p=1,Fe=performance.now()+1400,N(),K()):N(),()=>{cancelAnimationFrame(j),ue.disconnect(),B.removeEventListener("pointerenter",he),B.removeEventListener("pointermove",He),B.removeEventListener("pointerleave",Ze),B.removeEventListener("pointerdown",$),B.removeEventListener("pointerup",re),B.removeEventListener("pointercancel",re),B.removeEventListener("mousemove",He),B.removeEventListener("mouseleave",ze),S.current=null}},[]),(0,Vn.useEffect)(()=>{S.current?.write()},[m,p,x]),(0,Vn.useEffect)(()=>{let B=w.current;if(!B||!v)return;let Q=!1,Y=W=>{if(W.beta==null||W.gamma==null)return;let j=A.current.mobileTiltSensitivity;S.current?.aim(W.gamma*j/150,(W.beta-20)*j/150)},ae=()=>{Q||(Q=!0,window.addEventListener("deviceorientation",Y))},z=()=>{let W=window.DeviceOrientationEvent;W&&typeof W.requestPermission=="function"?W.requestPermission().then(j=>{j==="granted"&&ae()}).catch(()=>{}):ae()};return B.addEventListener("click",z),()=>{B.removeEventListener("click",z),window.removeEventListener("deviceorientation",Y)}},[v]);let D=h==="light"?"light":"dark",H=f?Y3(f)??D==="dark"?"dark":"light":D,O=f?`linear-gradient(180deg, color-mix(in srgb, ${f}, #ffffff 12%) 0%, color-mix(in srgb, ${f}, #000000 18%) 100%)`:"var(--pc-tile)",P=e?e.startsWith("/")||e.startsWith("http")||e.startsWith("data:")?e:`/${e}`:"/assets/csharp-pattern.svg";return _e.createElement("div",{ref:w,className:`profile-card ${b}`.trim(),style:{...q3[D],...W3[H],"--pc-radius":`${Math.max(0,d)}px`,"--pc-backdrop":O,"--pc-holo":Qh(I,0,1),"--pc-glare":Qh(y,0,1),"--pc-parallax":`${Math.max(0,x)}px`,"--pc-status":i,"--pc-grain":X3,"--pc-pattern":`url("${P}")`,"--pc-pattern-size":"200px 200px","--pc-holo-gain":1.25,"--pc-holo-detail":H==="dark"?1:0}},_e.createElement("div",{className:"profile-card__body"},_e.createElement("div",{className:"profile-card__tile"},_e.createElement("span",{className:"profile-card__sheen"}),_e.createElement("span",{className:"profile-card__holo"},_e.createElement("span",{className:"profile-card__holo-glow"}),_e.createElement("span",{className:"profile-card__holo-shift"})),t&&_e.createElement("img",{className:"profile-card__photo",src:t,alt:o||"",loading:"lazy",draggable:!1}),(o||n)&&_e.createElement(_e.Fragment,null,_e.createElement("span",{className:"profile-card__scrim"}),_e.createElement("div",{className:"profile-card__info"},o&&_e.createElement("h3",{className:"profile-card__name"},o),n&&_e.createElement("p",{className:"profile-card__title"},n))),_e.createElement("span",{className:"profile-card__tile-rim"})),c&&_e.createElement("div",{className:"profile-card__footer"},a&&_e.createElement("span",{className:"profile-card__avatar"},_e.createElement("img",{src:a,alt:"",loading:"lazy",draggable:!1})),_e.createElement("div",{className:"profile-card__meta"},r&&_e.createElement("span",{className:"profile-card__handle"},"@",r),s&&_e.createElement("span",{className:"profile-card__status"},s)),l&&_e.createElement("button",{type:"button",className:"profile-card__contact",onClick:u,"aria-label":o?`${l} ${o}`:l},_e.createElement(Is,{icon:xr,size:16,strokeWidth:1.8}),l)),_e.createElement("span",{className:"profile-card__glare"}),_e.createElement("span",{className:"profile-card__shade"}),_e.createElement("span",{className:"profile-card__rim"})))},__=(0,Vn.memo)(Z3);function si(t,e,a="250px"){let o=document.getElementById(t);if(!o)return;if(!("IntersectionObserver"in window)){e();return}let n=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&(n.disconnect(),e())},{rootMargin:a});n.observe(o)}function b_(){console.log("\u{1F680} initReactComponents running..."),si("lanyard-container",()=>Pg(["assets/id_card_front.webp","assets/id_card_back.webp","assets/hepl_lanyard.webp"]),"1000px"),si("lanyard-container-mmw",()=>Pg(["assets/mmw_id_front.webp","assets/mmw_id_back.webp","assets/mmw_lanyard.webp"]),"1000px"),si("lanyard-container",()=>{try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Ql.createRoot)(t).render(Jl.default.createElement(Ug,{frontImage:"assets/id_card_front.webp",backImage:"assets/id_card_back.webp",strapImage:"assets/hepl_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}}),si("lanyard-container-mmw",()=>{try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Ql.createRoot)(t).render(Jl.default.createElement(Ug,{frontImage:"assets/mmw_id_front.webp",backImage:"assets/mmw_id_back.webp",strapImage:"assets/mmw_lanyard.webp",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}}),si("disclaimer-gridscan-mount",()=>{try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,Ql.createRoot)(t).render(Jl.default.createElement(F_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}}),si("contact-stepper-mount",()=>{try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,Ql.createRoot)(t).render(Jl.default.createElement(Ng,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}}),si("profile-card-mount",()=>{try{let t=document.getElementById("profile-card-mount");t&&!t.dataset.profileCardMounted&&(t.dataset.profileCardMounted="true",t.innerHTML="",(0,Ql.createRoot)(t).render(Jl.default.createElement(__,{name:"Saravana Prakash R",title:"Engineer - Immersive Tech",handle:"srvnsp",status:"Online",statusColor:"#00f5ff",contactText:"Contact Me",avatarUrl:"assets/profile_photoroom.png",miniAvatarUrl:"assets/profile_photoroom.png",iconUrl:"/assets/csharp-pattern.svg",holo:.8,glare:.5,tiltStrength:12,parallax:8,radius:20,enableTilt:!0,intro:!0,showUserInfo:!0,theme:"dark",onContactClick:()=>{let a=document.getElementById("contact");if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"})}}})),console.log("\u2705 ProfileCard mounted successfully"))}catch(t){console.error("\u274C Failed mounting ProfileCard:",t)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b_):b_();
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
