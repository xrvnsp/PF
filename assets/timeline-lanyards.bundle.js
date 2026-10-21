var S_=Object.create;var Pg=Object.defineProperty;var v_=Object.getOwnPropertyDescriptor;var y_=Object.getOwnPropertyNames;var M_=Object.getPrototypeOf,C_=Object.prototype.hasOwnProperty;var __=(t,e)=>()=>(t&&(e=t(t=0)),e);var gr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var b_=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of y_(e))!C_.call(t,n)&&n!==a&&Pg(t,n,{get:()=>e[n],enumerable:!(o=v_(e,n))||o.enumerable});return t};var Fr=(t,e,a)=>(a=t!=null?S_(M_(t)):{},b_(e||!t||!t.__esModule?Pg(a,"default",{value:t,enumerable:!0}):a,t));var Yg=gr(st=>{"use strict";ct();var Zh=Symbol.for("react.transitional.element"),T_=Symbol.for("react.portal"),A_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),R_=Symbol.for("react.consumer"),D_=Symbol.for("react.context"),L_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),B_=Symbol.for("react.memo"),Og=Symbol.for("react.lazy"),U_=Symbol.for("react.activity"),k_=Symbol.for("react.view_transition"),Bg=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Vg={};function ri(t,e,a){this.props=t,this.context=e,this.refs=Vg,this.updater=a||zg}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=ri.prototype;function Kh(t,e,a){this.props=t,this.context=e,this.refs=Vg,this.updater=a||zg}var Jh=Kh.prototype=new Gg;Jh.constructor=Kh;Hg(Jh,ri.prototype);Jh.isPureReactComponent=!0;var Ug=Array.isArray;function Yh(){}var qt={H:null,A:null,T:null,S:null},qg=Object.prototype.hasOwnProperty;function Qh(t,e,a){var o=a.ref;return{$$typeof:Zh,type:t,key:e,ref:o!==void 0?o:null,props:a}}function O_(t,e){return Qh(t.type,e,t.props)}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zh}function z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var kg=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z_(""+t.key):e.toString(36)}function H_(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Yh,Yh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ni(t,e,a,o,n){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Zh:case T_:s=!0;break;case Og:return s=t._init,ni(s(t._payload),e,a,o,n)}}if(s)return n=n(t),s=o===""?"."+Xh(t,0):o,Ug(n)?(a="",s!=null&&(a=s.replace(kg,"$&/")+"/"),ni(n,e,a,"",function(c){return c})):n!=null&&(jh(n)&&(n=O_(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(kg,"$&/")+"/")+s)),e.push(n)),1;s=0;var i=o===""?".":o+":";if(Ug(t))for(var l=0;l<t.length;l++)o=t[l],r=i+Xh(o,l),s+=ni(o,e,a,r,n);else if(l=N_(t),typeof l=="function")for(t=l.call(t),l=0;!(o=t.next()).done;)o=o.value,r=i+Xh(o,l++),s+=ni(o,e,a,r,n);else if(r==="object"){if(typeof t.then=="function")return ni(H_(t),e,a,o,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Zu(t,e,a){if(t==null)return t;var o=[],n=0;return ni(t,o,"","",function(r){return e.call(a,r,n++)}),o}function V_(t){if(t._status===-1){var e=t._result,a=e();a.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o,a.status===void 0&&(a.status="fulfilled",a.value=o))},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o,a.status===void 0&&(a.status="rejected",a.reason=o))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Ng=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Wg(t){var e=qt.T,a={};a.types=e!==null?e.types:null,qt.T=a;try{var o=t(),n=qt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Yh,Ng)}catch(r){Ng(r)}finally{e!==null&&a.types!==null&&(e.types=a.types),qt.T=e}}function Xg(t){var e=qt.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else Wg(Xg.bind(null,t))}var G_={map:Zu,forEach:function(t,e,a){Zu(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Zu(t,function(){e++}),e},toArray:function(t){return Zu(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};st.Activity=U_;st.Children=G_;st.Component=ri;st.Fragment=A_;st.Profiler=E_;st.PureComponent=Kh;st.StrictMode=w_;st.Suspense=P_;st.ViewTransition=k_;st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=qt;st.__COMPILER_RUNTIME={__proto__:null,c:function(t){return qt.H.useMemoCache(t)}};st.addTransitionType=Xg;st.cache=function(t){return function(){return t.apply(null,arguments)}};st.cacheSignal=function(){return null};st.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var o=Hg({},t.props),n=t.key;if(e!=null)for(r in e.key!==void 0&&(n=""+e.key),e)!qg.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(o[r]=e[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var s=Array(r),i=0;i<r;i++)s[i]=arguments[i+2];o.children=s}return Qh(t.type,n,o)};st.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:R_,_context:t},t};st.createElement=function(t,e,a){var o,n={},r=null;if(e!=null)for(o in e.key!==void 0&&(r=""+e.key),e)qg.call(e,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=e[o]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];n.children=i}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return Qh(t,r,n)};st.createRef=function(){return{current:null}};st.forwardRef=function(t){return{$$typeof:L_,render:t}};st.isValidElement=jh;st.lazy=function(t){return{$$typeof:Og,_payload:{_status:-1,_result:t},_init:V_}};st.memo=function(t,e){return{$$typeof:B_,type:t,compare:e===void 0?null:e}};st.startTransition=Wg;st.unstable_useCacheRefresh=function(){return qt.H.useCacheRefresh()};st.use=function(t){return qt.H.use(t)};st.useActionState=function(t,e,a){return qt.H.useActionState(t,e,a)};st.useCallback=function(t,e){return qt.H.useCallback(t,e)};st.useContext=function(t){return qt.H.useContext(t)};st.useDebugValue=function(){};st.useDeferredValue=function(t,e){return qt.H.useDeferredValue(t,e)};st.useEffect=function(t,e){return qt.H.useEffect(t,e)};st.useEffectEvent=function(t){return qt.H.useEffectEvent(t)};st.useId=function(){return qt.H.useId()};st.useImperativeHandle=function(t,e,a){return qt.H.useImperativeHandle(t,e,a)};st.useInsertionEffect=function(t,e){return qt.H.useInsertionEffect(t,e)};st.useLayoutEffect=function(t,e){return qt.H.useLayoutEffect(t,e)};st.useMemo=function(t,e){return qt.H.useMemo(t,e)};st.useOptimistic=function(t,e){return qt.H.useOptimistic(t,e)};st.useReducer=function(t,e,a){return qt.H.useReducer(t,e,a)};st.useRef=function(t){return qt.H.useRef(t)};st.useState=function(t){return qt.H.useState(t)};st.useSyncExternalStore=function(t,e,a){return qt.H.useSyncExternalStore(t,e,a)};st.useTransition=function(){return qt.H.useTransition()};st.version="19.3.0"});var mn=gr((z3,Zg)=>{"use strict";ct();Zg.exports=Yg()});var Je,ct=__(()=>{Je=Fr(mn())});var nF=gr(Jt=>{"use strict";ct();function am(t,e){var a=t.length;t.push(e);e:for(;0<a;){var o=a-1>>>1,n=t[o];if(0<Ku(n,e))t[o]=e,t[a]=n,a=o;else break e}}function In(t){return t.length===0?null:t[0]}function Qu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var o=0,n=t.length,r=n>>>1;o<r;){var s=2*(o+1)-1,i=t[s],l=s+1,c=t[l];if(0>Ku(i,a))l<n&&0>Ku(c,i)?(t[o]=c,t[l]=a,o=l):(t[o]=i,t[s]=a,o=s);else if(l<n&&0>Ku(c,a))t[o]=c,t[l]=a,o=l;else break e}}return e}function Ku(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Jt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Kg=performance,Jt.unstable_now=function(){return Kg.now()}):($h=Date,Jg=$h.now(),Jt.unstable_now=function(){return $h.now()-Jg});var Kg,$h,Jg,Vn=[],Sr=[],q_=1,Oo=null,Na=3,om=!1,Xl=!1,Yl=!1,nm=!1,$g=typeof setTimeout=="function"?setTimeout:null,eF=typeof clearTimeout=="function"?clearTimeout:null,Qg=typeof setImmediate<"u"?setImmediate:null;function Ju(t){for(var e=In(Sr);e!==null;){if(e.callback===null)Qu(Sr);else if(e.startTime<=t)Qu(Sr),e.sortIndex=e.expirationTime,am(Vn,e);else break;e=In(Sr)}}function rm(t){if(Yl=!1,Ju(t),!Xl)if(In(Vn)!==null)Xl=!0,ii||(ii=!0,si());else{var e=In(Sr);e!==null&&sm(rm,e.startTime-t)}}var ii=!1,Zl=-1,tF=5,aF=-1;function oF(){return nm?!0:!(Jt.unstable_now()-aF<tF)}function em(){if(nm=!1,ii){var t=Jt.unstable_now();aF=t;var e=!0;try{e:{Xl=!1,Yl&&(Yl=!1,eF(Zl),Zl=-1),om=!0;var a=Na;try{t:{for(Ju(t),Oo=In(Vn);Oo!==null&&!(Oo.expirationTime>t&&oF());){var o=Oo.callback;if(typeof o=="function"){Oo.callback=null,Na=Oo.priorityLevel;var n=o(Oo.expirationTime<=t);if(t=Jt.unstable_now(),typeof n=="function"){Oo.callback=n,Ju(t),e=!0;break t}Oo===In(Vn)&&Qu(Vn),Ju(t)}else Qu(Vn);Oo=In(Vn)}if(Oo!==null)e=!0;else{var r=In(Sr);r!==null&&sm(rm,r.startTime-t),e=!1}}break e}finally{Oo=null,Na=a,om=!1}e=void 0}}finally{e?si():ii=!1}}}var si;typeof Qg=="function"?si=function(){Qg(em)}:typeof MessageChannel<"u"?(tm=new MessageChannel,jg=tm.port2,tm.port1.onmessage=em,si=function(){jg.postMessage(null)}):si=function(){$g(em,0)};var tm,jg;function sm(t,e){Zl=$g(function(){t(Jt.unstable_now())},e)}Jt.unstable_IdlePriority=5;Jt.unstable_ImmediatePriority=1;Jt.unstable_LowPriority=4;Jt.unstable_NormalPriority=3;Jt.unstable_Profiling=null;Jt.unstable_UserBlockingPriority=2;Jt.unstable_cancelCallback=function(t){t.callback=null};Jt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tF=0<t?Math.floor(1e3/t):5};Jt.unstable_getCurrentPriorityLevel=function(){return Na};Jt.unstable_next=function(t){switch(Na){case 1:case 2:case 3:var e=3;break;default:e=Na}var a=Na;Na=e;try{return t()}finally{Na=a}};Jt.unstable_requestPaint=function(){nm=!0};Jt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Na;Na=t;try{return e()}finally{Na=a}};Jt.unstable_scheduleCallback=function(t,e,a){var o=Jt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:q_++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>o?(t.sortIndex=a,am(Sr,t),In(Vn)===null&&t===In(Sr)&&(Yl?(eF(Zl),Zl=-1):Yl=!0,sm(rm,a-o))):(t.sortIndex=n,am(Vn,t),Xl||om||(Xl=!0,ii||(ii=!0,si()))),t};Jt.unstable_shouldYield=oF;Jt.unstable_wrapCallback=function(t){var e=Na;return function(){var a=Na;Na=e;try{return t.apply(this,arguments)}finally{Na=a}}}});var sF=gr((W3,rF)=>{"use strict";ct();rF.exports=nF()});var cF=gr(Oa=>{"use strict";ct();var W_=mn();function lF(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function vr(){}var Ka={d:{f:vr,r:function(){throw Error(lF(522))},D:vr,C:vr,L:vr,m:vr,X:vr,S:vr,M:vr},p:0,findDOMNode:null},X_=Symbol.for("react.portal"),Y_=Symbol.for("react.recoverable"),iF=Symbol.for("react.optimistic_key");function Z_(t,e,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X_,key:o==null?null:o===iF?iF:""+o,children:t,containerInfo:e,implementation:a}}var Kl=W_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ju(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Oa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ka;Oa.browser=function(t){return{$$typeof:Y_,_reason:t}};Oa.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(lF(299));return Z_(t,e,null,a)};Oa.flushSync=function(t){var e=Kl.T,a=Ka.p;try{if(Kl.T=null,Ka.p=2,t)return t()}finally{Kl.T=e,Ka.p=a,Ka.d.f()}};Oa.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ka.d.C(t,e))};Oa.prefetchDNS=function(t){typeof t=="string"&&Ka.d.D(t)};Oa.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,o=ju(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ka.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ka.d.X(t,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Oa.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=ju(e.as,e.crossOrigin);Ka.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Ka.d.M(t)};Oa.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,o=ju(a,e.crossOrigin);Ka.d.L(t,a,{crossOrigin:o,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Oa.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=ju(e.as,e.crossOrigin);Ka.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Ka.d.m(t)};Oa.requestFormReset=function(t){Ka.d.r(t)};Oa.unstable_batchedUpdates=function(t,e){return t(e)};Oa.useFormState=function(t,e,a){return Kl.H.useFormState(t,e,a)};Oa.useFormStatus=function(){return Kl.H.useHostTransitionStatus()};Oa.version="19.3.0"});var dF=gr((K3,fF)=>{"use strict";ct();function uF(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uF)}catch(t){console.error(t)}}uF(),fF.exports=cF()});var jM=gr(Pd=>{"use strict";ct();var ga=sF(),QS=mn(),K_=dF();function oe(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jS(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){for(var e=t,a=e;a&&!a.alternate;)e=a,e.flags&4098&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function $S(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ev(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pF(t){if(Uc(t)!==t)throw Error(oe(188))}function J_(t){var e=t.alternate;if(!e){if(e=Uc(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var a=t,o=e;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return pF(n),t;if(r===o)return pF(n),e;r=r.sibling}throw Error(oe(188))}if(a.return!==o.return)a=n,o=r;else{for(var s=!1,i=n.child;i;){if(i===a){s=!0,a=n,o=r;break}if(i===o){s=!0,o=n,a=r;break}i=i.sibling}if(!s){for(i=r.child;i;){if(i===a){s=!0,a=r,o=n;break}if(i===o){s=!0,o=r,a=n;break}i=i.sibling}if(!s)throw Error(oe(189))}}if(a.alternate!==o)throw Error(oe(190))}if(a.tag!==3)throw Error(oe(188));return a.stateNode.current===a?t:e}function tv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=tv(t),e!==null)return e;t=t.sibling}return null}function po(t,e,a,o,n,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,n,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&po(t.child,e,a,o,n,r))return!0;t=t.sibling}return!1}function Bs(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function hF(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function av(t){var e=[null,null],a=Bs(t);return a===null||ov(e,t,a.child,{foundSelf:!1}),e}function ov(t,e,a,o){for(;a!==null;){if(a===e)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&ov(t,e,a.child,o))return!0;a=a.sibling}return!1}function xa(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(oe(559))}}var hi=null,Nm=null;function Q_(t,e,a){return t===a?!0:t===e?(hi=t,!0):!1}function j_(t,e,a){return t===a?(Nm=t,!1):t===e?(Nm!==null&&(hi=t),!0):!1}function mF(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Om(t,e,a){for(var o=0,n=t;n;n=a(n))o++;n=0;for(var r=e;r;r=a(r))n++;for(;0<o-n;)t=a(t),o--;for(;0<n-o;)e=a(e),n--;for(;o--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var Ht=Object.assign,$_=Symbol.for("react.element"),$u=Symbol.for("react.transitional.element"),ac=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),zm=Symbol.for("react.profiler"),rv=Symbol.for("react.consumer"),yn=Symbol.for("react.context"),KI=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),Vm=Symbol.for("react.suspense_list"),JI=Symbol.for("react.memo"),_r=Symbol.for("react.lazy");Symbol.for("react.scope");var Gm=Symbol.for("react.activity"),eb=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var tb=Symbol.for("react.memo_cache_sentinel"),qm=Symbol.for("react.view_transition"),ab=Symbol.for("react.recoverable"),IF=Symbol.iterator;function Jl(t){return t===null||typeof t!="object"?null:(t=IF&&t[IF]||t["@@iterator"],typeof t=="function"?t:null)}var ob=Symbol.for("react.client.reference");function Wm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ob?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case zm:return"Profiler";case nv:return"StrictMode";case Hm:return"Suspense";case Vm:return"SuspenseList";case Gm:return"Activity";case qm:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case ac:return"Portal";case yn:return t.displayName||"Context";case rv:return(t._context.displayName||"Context")+".Consumer";case KI:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case JI:return e=t.displayName||null,e!==null?e:Wm(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Wm(t(e))}catch{}}return null}var oc=Array.isArray,ot=QS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=K_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ys={pending:!1,data:null,method:null,action:null},Xm=[],Ii=-1;function wn(t){return{current:t}}function La(t){0>Ii||(t.current=Xm[Ii],Xm[Ii]=null,Ii--)}function Yt(t,e){Ii++,Xm[Ii]=t.current,t.current=e}var bn=wn(null),Sc=wn(null),Pr=wn(null),zf=wn(null);function Hf(t,e){switch(Yt(Pr,e),Yt(Sc,t),Yt(bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ES(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ES(e),t=TM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}La(bn),Yt(bn,t)}function Ui(){La(bn),La(Sc),La(Pr)}function Ym(t){var e=t.memoizedState;e!==null&&(Xi._currentValue=e.memoizedState,Yt(zf,t)),e=bn.current;var a=TM(e,t.type);e!==a&&(Yt(Sc,t),Yt(bn,a))}function Vf(t){Sc.current===t&&(La(bn),La(Sc)),zf.current===t&&(La(zf),Xi._currentValue=ys)}var im,xF;function Mr(t){if(im===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);im=e&&e[1]||"",xF=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+im+t+xF}var lm=!1;function cm(t,e){if(!t||lm)return"";lm=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(I){var u=I}Reflect.construct(t,[],h)}else{try{h.call()}catch(I){u=I}h=!1;try{var d=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new t}finally{h&&(d!==void 0?Object.defineProperty(t.prototype,"props",d):delete t.prototype.props)}}}else{try{throw Error()}catch(I){u=I}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(I){if(I&&u&&typeof I.stack=="string")return[I.stack,u.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],i=r[1];if(s&&i){var l=s.split(`
`),c=i.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===c.length)for(o=l.length-1,n=c.length-1;1<=o&&0<=n&&l[o]!==c[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==c[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==c[n]){var f=`
`+l[o].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=o&&0<=n);break}}}finally{lm=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Mr(a):""}function nb(t,e){switch(t.tag){case 26:case 27:case 5:return Mr(t.type);case 16:return Mr("Lazy");case 13:return t.child!==e&&e!==null?Mr("Suspense Fallback"):Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 15:return cm(t.type,!1);case 11:return cm(t.type.render,!1);case 1:return cm(t.type,!0);case 31:return Mr("Activity");case 30:return Mr("ViewTransition");default:return""}}function gF(t){try{var e="",a=null;do e+=nb(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zm=Object.prototype.hasOwnProperty,QI=ga.unstable_scheduleCallback,um=ga.unstable_cancelCallback,rb=ga.unstable_shouldYield,sb=ga.unstable_requestPaint,Co=ga.unstable_now,ib=ga.unstable_getCurrentPriorityLevel,sv=ga.unstable_ImmediatePriority,iv=ga.unstable_UserBlockingPriority,Gf=ga.unstable_NormalPriority,lb=ga.unstable_LowPriority,lv=ga.unstable_IdlePriority,cb=ga.log,ub=ga.unstable_setDisableYieldValue,kc=null,_o=null;function Ar(t){if(typeof cb=="function"&&ub(t),_o&&typeof _o.setStrictMode=="function")try{_o.setStrictMode(kc,t)}catch{}}var bo=Math.clz32?Math.clz32:pb,fb=Math.log,db=Math.LN2;function pb(t){return t>>>=0,t===0?32:31-(fb(t)/db|0)|0}var ef=256,tf=262144,af=4194304;function xs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function md(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=xs(o):(s&=i,s!==0?n=xs(s):a||(a=i&~t,a!==0&&(n=xs(a))))):(i=o&~r,i!==0?n=xs(i):s!==0?n=xs(s):a||(a=o&~t,a!==0&&(n=xs(a)))),n===0?0:e!==0&&e!==n&&!(e&r)&&(r=n&-n,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:n}function Nc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function cv(t,e){e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-bo(a),n=1<<o;e|=t[o],a&=~n}return e}function hb(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uv(){var t=af;return af<<=1,!(af&62914560)&&(af=4194304),t}function fm(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Oc(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function mb(t,e,a,o,n,r){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var i=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(a=s&~a;0<a;){var f=31-bo(a),h=1<<f;i[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}a&=~h}o!==0&&fv(t,o,0),r!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function fv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-bo(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function dv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-bo(a),n=1<<o;n&e|t[o]&e&&(t[o]|=e),a&=~n}}function pv(t,e){var a=e&-e;return a=a&42?1:jI(a),a&(t.suspendedLanes|e)?0:a}function jI(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $I(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function hv(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:KM(t.type))}function FF(t,e){var a=Rt.p;try{return Rt.p=t,e()}finally{Rt.p=a}}var tr=Math.random().toString(36).slice(2),Ra="__reactFiber$"+tr,ho="__reactProps$"+tr,Ki="__reactContainer$"+tr,SF="__reactEvents$"+tr,Ib="__reactListeners$"+tr,xb="__reactHandles$"+tr,vF="__reactResources$"+tr,zc="__reactMarker$"+tr,qf="__reactLoad$"+tr;function Id(t){delete t[Ra],delete t[ho],delete t[Ib],delete t[xb]}function Ss(t){var e;if(e=t[Ra])return e;for(var a=t.parentNode;a;){if(e=a[Ki]||a[Ra]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=NS(t);t!==null;){if(a=t[Ra])return a;t=NS(t)}return e}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[Ra]||t[Ki]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function nc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(oe(33))}function bi(t){var e=t[vF];return e||(e=t[vF]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function _a(t){t[zc]=!0}function mv(t){t[qf]=void 0}var Iv=new Set,xv={};function Us(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(xv[t]=e,t=0;t<e.length;t++)Iv.add(e[t])}var gb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yF={},MF={};function Fb(t){return Zm.call(MF,t)?!0:Zm.call(yF,t)?!1:gb.test(t)?MF[t]=!0:(yF[t]=!0,!1)}var At=!1;function CF(){var t=At;return At=!1,t}function vf(t,e,a){if(Fb(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function of(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function Gn(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,o)}}function So(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sb(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Km(t){if(!t._valueTracker){var e=gv(t)?"checked":"value";t._valueTracker=Sb(t,e,""+t[e])}}function Fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=gv(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}var vb=/[\n"\\]/g;function qo(t){return t.replace(vb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Jm(t,e,a,o,n,r,s,i){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+So(e)):t.value!==""+So(e)&&(t.value=""+So(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?dm(t,So(t.value)):dm(t,So(e)):a!=null?dm(t,So(a)):o!=null&&t.removeAttribute("value"),n==null&&r!=null&&(t.defaultChecked=!!r),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.name=""+So(i):t.removeAttribute("name")}function Sv(t,e,a,o,n,r,s,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Km(t);return}a=a!=null?""+So(a):"",e=e!=null?""+So(e):a,i||e===t.value||(t.value=e),t.defaultValue=e}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=i?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),Km(t)}function dm(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ti(t,e,a,o){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&o&&(t[a].defaultSelected=!0)}else{for(a=""+So(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,o&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function vv(t,e,a){if(e!=null&&(e=""+So(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+So(a):""}function yv(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(oe(92));if(oc(o)){if(1<o.length)throw Error(oe(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=So(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Km(t)}function Ni(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var yb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _F(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||yb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Mv(t,e,a){if(e!=null&&typeof e!="object")throw Error(oe(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",At=!0);for(var n in e)o=e[n],e.hasOwnProperty(n)&&a[n]!==o&&(_F(t,n,o),At=!0)}else for(var r in e)e.hasOwnProperty(r)&&_F(t,r,e[r])}function e0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yf(t){return Cb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Mn(){}var Qm=null;function t0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xi=null,Ai=null;function bF(t){var e=Ji(t);if(e&&(t=e.stateNode)){var a=t[ho]||null;e:switch(t=e.stateNode,e.type){case"input":if(Jm(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qo(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var n=o[ho]||null;if(!n)throw Error(oe(90));Jm(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&Fv(o)}break e;case"textarea":vv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Ti(t,!!a.multiple,e,!1)}}}var pm=!1;function Cv(t,e,a){if(pm)return t(e,a);pm=!0;try{var o=t(e);return o}finally{if(pm=!1,(xi!==null||Ai!==null)&&(Ed(),xi&&(e=xi,t=Ai,Ai=xi=null,bF(e),t)))for(e=0;e<t.length;e++)bF(t[e])}}function vc(t,e){var a=t.stateNode;if(a===null)return null;var o=a[ho]||null;if(o===null)return null;a=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(oe(231,e,typeof a));return a}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jm=!1;if(Kn)try{li={},Object.defineProperty(li,"passive",{get:function(){jm=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{jm=!1}var li,wr=null,a0=null,Mf=null;function _v(){if(Mf)return Mf;var t,e=a0,a=e.length,o,n="value"in wr?wr.value:wr.textContent,r=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(o=1;o<=s&&e[a-o]===n[r-o];o++);return Mf=n.slice(t,1<o?1-o:void 0)}function Cf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nf(){return!0}function TF(){return!1}function $a(t){function e(a,o,n,r,s){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(a=t[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?nf:TF,this.isPropagationStopped=TF,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nf)},persist:function(){},isPersistent:nf}),e}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=$a(Kr),Hc=Ht({},Kr,{view:0,detail:0}),_b=$a(Hc),hm,mm,Ql,gd=Ht({},Hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:o0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ql&&(Ql&&t.type==="mousemove"?(hm=t.screenX-Ql.screenX,mm=t.screenY-Ql.screenY):mm=hm=0,Ql=t),hm)},movementY:function(t){return"movementY"in t?t.movementY:mm}}),AF=$a(gd),bb=Ht({},gd,{dataTransfer:0}),Tb=$a(bb),Ab=Ht({},Hc,{relatedTarget:0}),Im=$a(Ab),wb=Ht({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Eb=$a(wb),Rb=Ht({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Db=$a(Rb),Lb=Ht({},Kr,{data:0}),wF=$a(Lb),Pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ub[t])?!!e[t]:!1}function o0(){return kb}var Nb=Ht({},Hc,{key:function(t){if(t.key){var e=Pb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:o0,charCode:function(t){return t.type==="keypress"?Cf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ob=$a(Nb),zb=Ht({},gd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),EF=$a(zb),Hb=Ht({},Kr,{submitter:0}),Vb=$a(Hb),Gb=Ht({},Hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:o0}),qb=$a(Gb),Wb=Ht({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xb=$a(Wb),Yb=Ht({},gd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zb=$a(Yb),Kb=Ht({},Kr,{newState:0,oldState:0,source:0}),Jb=$a(Kb),Qb=[9,13,27,32],n0=Kn&&"CompositionEvent"in window,ic=null;Kn&&"documentMode"in document&&(ic=document.documentMode);var jb=Kn&&"TextEvent"in window&&!ic,bv=Kn&&(!n0||ic&&8<ic&&11>=ic),RF=" ",DF=!1;function Tv(t,e){switch(t){case"keyup":return Qb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function $b(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(DF=!0,RF);case"textInput":return t=e.data,t===RF&&DF?null:t;default:return null}}function eT(t,e){if(gi)return t==="compositionend"||!n0&&Tv(t,e)?(t=_v(),Mf=a0=wr=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bv&&e.locale!=="ko"?null:e.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function LF(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tT[t.type]:e==="textarea"}function wv(t,e,a,o){xi?Ai?Ai.push(o):Ai=[o]:xi=o,e=dd(e,"onChange"),0<e.length&&(a=new xd("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var lc=null,yc=null;function aT(t){CM(t,0)}function Fd(t){var e=nc(t);if(Fv(e))return t}function PF(t,e){if(t==="change")return e}var Ev=!1;Kn&&(Kn?(sf="oninput"in document,sf||(xm=document.createElement("div"),xm.setAttribute("oninput","return;"),sf=typeof xm.oninput=="function"),rf=sf):rf=!1,Ev=rf&&(!document.documentMode||9<document.documentMode));var rf,sf,xm;function BF(){lc&&(lc.detachEvent("onpropertychange",Rv),yc=lc=null)}function Rv(t){if(t.propertyName==="value"&&Fd(yc)){var e=[];wv(e,yc,t,t0(t)),Cv(aT,e)}}function oT(t,e,a){t==="focusin"?(BF(),lc=e,yc=a,lc.attachEvent("onpropertychange",Rv)):t==="focusout"&&BF()}function nT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fd(yc)}function rT(t,e){if(t==="click")return Fd(e)}function sT(t,e){if(t==="input"||t==="change")return Fd(e)}function iT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ao=typeof Object.is=="function"?Object.is:iT;function Mc(t,e){if(Ao(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Zm.call(e,n)||!Ao(t[n],e[n]))return!1}return!0}function $m(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function UF(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kF(t,e){var a=UF(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=UF(a)}}function Dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$m(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=$m(t.document)}return e}function r0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var lT=Kn&&"documentMode"in document&&11>=document.documentMode,Fi=null,eI=null,cc=null,tI=!1;function NF(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tI||Fi==null||Fi!==$m(o)||(o=Fi,"selectionStart"in o&&r0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),cc&&Mc(cc,o)||(cc=o,o=dd(eI,"onSelect"),0<o.length&&(e=new xd("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Fi)))}function ms(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Si={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},gm={},Pv={};Kn&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function ks(t){if(gm[t])return gm[t];if(!Si[t])return t;var e=Si[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Pv)return gm[t]=e[a];return t}var Bv=ks("animationend"),Uv=ks("animationiteration"),kv=ks("animationstart"),cT=ks("transitionrun"),uT=ks("transitionstart"),fT=ks("transitioncancel"),Nv=ks("transitionend"),Ov=new Map,aI="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");aI.push("scrollEnd");function on(t,e){Ov.set(t,e),Us(e,[t])}var dT=0;function Jn(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=an.identifierPrefix;var a=dT++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function OF(t){if(t==null||typeof t=="string")return t;var e=null,a=Bi;if(a!==null)for(var o=0;o<a.length;o++){var n=t[a[o]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function ar(t,e){return t=OF(t),e=OF(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Wf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ho=[],vi=0,s0=0;function Sd(){for(var t=vi,e=s0=vi=0;e<t;){var a=Ho[e];Ho[e++]=null;var o=Ho[e];Ho[e++]=null;var n=Ho[e];Ho[e++]=null;var r=Ho[e];if(Ho[e++]=null,o!==null&&n!==null){var s=o.pending;s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n}r!==0&&zv(a,n,r)}}function vd(t,e,a,o){Ho[vi++]=t,Ho[vi++]=e,Ho[vi++]=a,Ho[vi++]=o,s0|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function i0(t,e,a,o){return vd(t,e,a,o),Xf(t)}function Ns(t,e){return vd(t,null,null,e),Xf(t)}function zv(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=t.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(n=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,n&&e!==null&&(n=31-bo(a),t=r.hiddenUpdates,o=t[n],o===null?t[n]=[e]:o.push(e),e.lane=a|536870912),r):null}function Xf(t){if(50<Fc)throw Fc=0,Pf=null,Error(oe(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var yi={};function pT(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function uo(t,e,a,o){return new pT(t,e,a,o)}function l0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yn(t,e){var a=t.alternate;return a===null?(a=uo(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hv(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function _f(t,e,a,o,n,r){var s=0;if(o=t,typeof o=="function")l0(o)&&(s=1);else if(typeof o=="string")s=OA(t,a,bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(o){case Gm:return t=uo(31,a,e,n),t.elementType=Gm,t.lanes=r,t;case mi:return Ms(a.children,n,r,e);case nv:s=8,n|=24;break;case zm:return t=uo(12,a,e,n|2),t.elementType=zm,t.lanes=r,t;case Hm:return t=uo(13,a,e,n),t.elementType=Hm,t.lanes=r,t;case Vm:return t=uo(19,a,e,n),t.elementType=Vm,t.lanes=r,t;case eb:case qm:return t=n|32,t=uo(30,a,e,t),t.elementType=qm,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case yn:s=10;break e;case rv:s=9;break e;case KI:s=11;break e;case JI:s=14;break e;case _r:s=16,o=null;break e}s=29,a=Error(oe(130,t===null?"null":typeof t,"")),o=null}return e=uo(s,a,e,n),e.elementType=t,e.type=o,e.lanes=r,e}function Ms(t,e,a,o){return t=uo(7,t,o,e),t.lanes=a,t}function Fm(t,e,a){return t=uo(6,t,null,e),t.lanes=a,t}function Vv(t){var e=uo(18,null,null,0);return e.stateNode=t,e}function Sm(t,e,a){return e=uo(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zF=new WeakMap;function Wo(t,e){if(typeof t=="object"&&t!==null){var a=zF.get(t);return a!==void 0?a:(e={value:t,source:e,stack:gF(e)},zF.set(t,e),e)}return{value:t,source:e,stack:gF(e)}}var Mi=[],Ci=0,Yf=null,Cc=0,Vo=[],Go=0,qr=null,Cn=1,_n="";function Wn(t,e){Mi[Ci++]=Cc,Mi[Ci++]=Yf,Yf=t,Cc=e}function Gv(t,e,a){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=qr,qr=t;var o=Cn;t=_n;var n=32-bo(o)-1;o&=~(1<<n),a+=1;var r=32-bo(e)+n;if(30<r){var s=n-n%5;r=(o&(1<<s)-1).toString(32),o>>=s,n-=s,Cn=1<<32-bo(e)+n|a<<n|o,_n=r+t}else Cn=1<<r|a<<n|o,_n=t}function yd(t){t.return!==null&&(Wn(t,1),Gv(t,1,0))}function c0(t){for(;t===Yf;)Yf=Mi[--Ci],Mi[Ci]=null,Cc=Mi[--Ci],Mi[Ci]=null;for(;t===qr;)qr=Vo[--Go],Vo[Go]=null,_n=Vo[--Go],Vo[Go]=null,Cn=Vo[--Go],Vo[Go]=null}function qv(t,e){Vo[Go++]=Cn,Vo[Go++]=_n,Vo[Go++]=qr,Cn=e.id,_n=e.overflow,qr=t}var ba=null,Xt=null,It=!1,Br=null,Xo=!1,oI=Error(oe(519));function Wr(t){var e=Error(oe(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _c(Wo(e,t)),oI}function HF(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Ra]=t,e[ho]=o,a){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(a=0;a<wc.length;a++)gt(wc[a],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),Sv(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),yv(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||bM(e.textContent,a)?(o.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),o.onScroll!=null&&gt("scroll",e),o.onScrollEnd!=null&&gt("scrollend",e),o.onClick!=null&&(e.onclick=Mn),e=!0):e=!1,e||Wr(t,!0)}function Zf(t){for(ba=t.return;ba;)switch(ba.tag){case 5:case 31:case 13:Xo=!1;return;case 27:case 3:Xo=!0;return;default:ba=ba.return}}function ci(t){if(t!==ba)return!1;if(!It)return Zf(t),It=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||HI(t.type,t.memoizedProps)),a=!a),a&&Xt&&Wr(t),Zf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));Xt=kS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));Xt=kS(t)}else e===27?(e=Xt,Jr(t.type)?(t=WI,WI=null,Xt=t):Xt=e):Xt=ba?Yo(t.stateNode.nextSibling):null;return!0}function Ts(){Xt=ba=null,It=!1}function vm(){var t=Br;return t!==null&&(lo===null?lo=t:lo.push.apply(lo,t),Br=null),t}function _c(t){Br===null?Br=[t]:Br.push(t)}var nI=wn(null),Os=null,Xn=null;function Er(t,e,a){Yt(nI,e._currentValue),e._currentValue=a}function Zn(t){t._currentValue=nI.current,La(nI)}function bf(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function rI(t,e,a,o){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var r=n.dependencies;if(r!==null){var s=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var l=0;l<e.length;l++)if(i.context===e[l]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),bf(r.return,a,t),o||(s=null);break e}r=i.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(oe(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),bf(s,a,t),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),bf(n.return,a,t),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function As(t,e,a,o){t=null;for(var n=e,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(oe(387));if(s=s.memoizedProps,s!==null){var i=n.type;Ao(n.pendingProps.value,s.value)||(t!==null?t.push(i):t=[i])}}else if(n===zf.current){if(s=n.alternate,s===null)throw Error(oe(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Xi):t=[Xi])}n=n.return}return t!==null&&rI(e,t,a,o),e.flags|=262144,t!==null}function Kf(t){for(t=t.firstContext;t!==null;){if(!Ao(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){Os=t,Xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Da(t){return Wv(Os,t)}function lf(t,e){return Os===null&&ws(t),Wv(t,e)}function Wv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Xn===null){if(t===null)throw Error(oe(308));Xn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xn=Xn.next=e;return a}var hT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},mT=ga.unstable_scheduleCallback,IT=ga.unstable_NormalPriority,ca={$$typeof:yn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function u0(){return{controller:new hT,data:new Map,refCount:0}}function Vc(t){t.refCount--,t.refCount===0&&mT(IT,function(){t.controller.abort()})}function VF(t,e){if(t.pendingLanes&4194048){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var o=e[t];a.indexOf(o)===-1&&a.push(o)}}}var rc=null;function xT(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var uc=null,sI=0,Es=0,wi=null;function gT(t,e){if(uc===null){var a=uc=[];sI=0,Es=N0(),wi={status:"pending",value:void 0,then:function(o){a.push(o)}}}return sI++,e.then(GF,GF),e}function GF(){if(--sI===0&&(rc=null,uc!==null)){wi!==null&&(wi.status="fulfilled");var t=uc;uc=null,Es=0,wi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function FT(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var qF=ot.S;ot.S=function(t,e){if(cM=Co(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&gT(t,e),rc!==null)for(var a=Gi;a!==null;)VF(a,rc),a=a.next;if(a=t.types,a!==null){for(var o=Gi;o!==null;)VF(o,a),o=o.next;if(Es!==0){o=rc,o===null&&(o=rc=[]);for(var n=0;n<a.length;n++){var r=a[n];o.indexOf(r)===-1&&o.push(r)}}}qF!==null&&qF(t,e)};var Cs=wn(null);function f0(){var t=Cs.current;return t!==null?t:zt.pooledCache}function Tf(t,e){e===null?Yt(Cs,Cs.current):Yt(Cs,e.pool)}function Xv(){var t=f0();return t===null?null:{parent:ca._currentValue,pool:t}}var Qi=Error(oe(460)),d0=Error(oe(474)),Md=Error(oe(542)),Jf={then:function(){}};function WF(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yv(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Mn,Mn),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,YF(t),t===void 0&&!("reason"in e)?Error(oe(600)):t;default:if(typeof e.status=="string")e.then(Mn,Mn);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(oe(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=o}},function(o){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,YF(t),t}throw _s=e,Qi}}function gs(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,Qi):a}}var _s=null;function XF(){if(_s===null)throw Error(oe(459));var t=_s;return _s=null,t}function YF(t){if(t===Qi||t===Md)throw Error(oe(483))}var Ei=null,bc=0;function cf(t){var e=bc;return bc+=1,Ei===null&&(Ei=[]),Yv(Ei,t,e)}function yr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function uf(t,e){throw e.$$typeof===$_?Error(oe(525)):(t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Zv(t){function e(p,x){if(t){var v=p.deletions;v===null?(p.deletions=[x],p.flags|=16):v.push(x)}}function a(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function o(p){for(var x=new Map;p!==null;)p.key===null?x.set(p.index,p):x.set(p.key,p),p=p.sibling;return x}function n(p,x){return p=Yn(p,x),p.index=0,p.sibling=null,p}function r(p,x,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<x?(p.flags|=2,x):v):(p.flags|=134217730,x)):(p.flags|=1048576,x)}function s(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function i(p,x,v,F){return x===null||x.tag!==6?(x=Fm(v,p.mode,F),x.return=p,x):(x=n(x,v),x.return=p,x)}function l(p,x,v,F){var C=v.type;return C===mi?(p=f(p,x,v.props.children,F,v.key),yr(p,v),p):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&gs(C)===x.type)?(x=n(x,v.props),yr(x,v),x.return=p,x):(x=_f(v.type,v.key,v.props,null,p.mode,F),yr(x,v),x.return=p,x)}function c(p,x,v,F){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Sm(v,p.mode,F),x.return=p,x):(x=n(x,v.children||[]),x.return=p,x)}function f(p,x,v,F,C){return x===null||x.tag!==7?(x=Ms(v,p.mode,F,C),x.return=p,x):(x=n(x,v),x.return=p,x)}function h(p,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Fm(""+x,p.mode,v),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $u:return v=_f(x.type,x.key,x.props,null,p.mode,v),yr(v,x),v.return=p,v;case ac:return x=Sm(x,p.mode,v),x.return=p,x;case _r:return x=gs(x),h(p,x,v)}if(oc(x)||Jl(x))return x=Ms(x,p.mode,v,null),x.return=p,x;if(typeof x.then=="function")return h(p,cf(x),v);if(x.$$typeof===yn)return h(p,lf(p,x),v);uf(p,x)}return null}function u(p,x,v,F){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:i(p,x,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $u:return v.key===C?l(p,x,v,F):null;case ac:return v.key===C?c(p,x,v,F):null;case _r:return v=gs(v),u(p,x,v,F)}if(oc(v)||Jl(v))return C!==null?null:f(p,x,v,F,null);if(typeof v.then=="function")return u(p,x,cf(v),F);if(v.$$typeof===yn)return u(p,x,lf(p,v),F);uf(p,v)}return null}function d(p,x,v,F,C){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return p=p.get(v)||null,i(x,p,""+F,C);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case $u:return p=p.get(F.key===null?v:F.key)||null,l(x,p,F,C);case ac:return p=p.get(F.key===null?v:F.key)||null,c(x,p,F,C);case _r:return F=gs(F),d(p,x,v,F,C)}if(oc(F)||Jl(F))return p=p.get(v)||null,f(x,p,F,C,null);if(typeof F.then=="function")return d(p,x,v,cf(F),C);if(F.$$typeof===yn)return d(p,x,v,lf(x,F),C);uf(x,F)}return null}function I(p,x,v,F){for(var C=null,_=null,w=x,S=x=0,T=null;w!==null&&S<v.length;S++){w.index>S?(T=w,w=null):T=w.sibling;var A=u(p,w,v[S],F);if(A===null){w===null&&(w=T);break}t&&w&&A.alternate===null&&e(p,w),x=r(A,x,S),_===null?C=A:_.sibling=A,_=A,w=T}if(S===v.length)return a(p,w),It&&Wn(p,S),C;if(w===null){for(;S<v.length;S++)w=h(p,v[S],F),w!==null&&(x=r(w,x,S),_===null?C=w:_.sibling=w,_=w);return It&&Wn(p,S),C}for(w=o(w);S<v.length;S++)T=d(w,p,S,v[S],F),T!==null&&(t&&(A=T.alternate,A!==null&&w.delete(A.key===null?S:A.key)),x=r(T,x,S),_===null?C=T:_.sibling=T,_=T);return t&&w.forEach(function(R){return e(p,R)}),It&&Wn(p,S),C}function M(p,x,v,F){if(v==null)throw Error(oe(151));for(var C=null,_=null,w=x,S=x=0,T=null,A=v.next();w!==null&&!A.done;S++,A=v.next()){w.index>S?(T=w,w=null):T=w.sibling;var R=u(p,w,A.value,F);if(R===null){w===null&&(w=T);break}t&&w&&R.alternate===null&&e(p,w),x=r(R,x,S),_===null?C=R:_.sibling=R,_=R,w=T}if(A.done)return a(p,w),It&&Wn(p,S),C;if(w===null){for(;!A.done;S++,A=v.next())A=h(p,A.value,F),A!==null&&(x=r(A,x,S),_===null?C=A:_.sibling=A,_=A);return It&&Wn(p,S),C}for(w=o(w);!A.done;S++,A=v.next())A=d(w,p,S,A.value,F),A!==null&&(t&&(T=A.alternate,T!==null&&w.delete(T.key===null?S:T.key)),x=r(A,x,S),_===null?C=A:_.sibling=A,_=A);return t&&w.forEach(function(H){return e(p,H)}),It&&Wn(p,S),C}function m(p,x,v,F){if(typeof v=="object"&&v!==null&&v.type===mi&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $u:e:{for(var C=v.key;x!==null;){if(x.key===C){if(C=v.type,C===mi){if(x.tag===7){a(p,x.sibling),F=n(x,v.props.children),yr(F,v),F.return=p,p=F;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&gs(C)===x.type){a(p,x.sibling),F=n(x,v.props),yr(F,v),F.return=p,p=F;break e}a(p,x);break}else e(p,x);x=x.sibling}v.type===mi?(F=Ms(v.props.children,p.mode,F,v.key),yr(F,v),F.return=p,p=F):(F=_f(v.type,v.key,v.props,null,p.mode,F),yr(F,v),F.return=p,p=F)}return s(p);case ac:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){a(p,x.sibling),F=n(x,v.children||[]),F.return=p,p=F;break e}else{a(p,x);break}else e(p,x);x=x.sibling}F=Sm(v,p.mode,F),F.return=p,p=F}return s(p);case _r:return v=gs(v),m(p,x,v,F)}if(oc(v))return I(p,x,v,F);if(Jl(v)){if(C=Jl(v),typeof C!="function")throw Error(oe(150));return v=C.call(v),M(p,x,v,F)}if(typeof v.then=="function")return m(p,x,cf(v),F);if(v.$$typeof===yn)return m(p,x,lf(p,v),F);uf(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,x!==null&&x.tag===6?(a(p,x.sibling),F=n(x,v),F.return=p,p=F):(a(p,x),F=Fm(v,p.mode,F),F.return=p,p=F),s(p)):a(p,x)}return function(p,x,v,F){try{bc=0;var C=m(p,x,v,F);return Ei=null,C}catch(w){if(w===Qi||w===Md)throw w;var _=uo(29,w,null,p.mode);return _.lanes=F,_.return=p,_}finally{}}}var Rs=Zv(!0),Kv=Zv(!1),br=!1;function p0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function iI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ur(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function kr(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Et&2){var n=o.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),o.pending=e,e=Xf(t),zv(t,null,a),e}return vd(t,o,e,a),Xf(t)}function fc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,dv(t,a)}}function ym(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?n=r=e:r=r.next=e}else n=r=e;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var lI=!1;function dc(){if(lI){var t=wi;if(t!==null)throw t}}function pc(t,e,a,o){lI=!1;var n=t.updateQueue;br=!1;var r=n.firstBaseUpdate,s=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==s&&(i===null?f.firstBaseUpdate=c:i.next=c,f.lastBaseUpdate=l))}if(r!==null){var h=n.baseState;s=0,f=c=l=null,i=r;do{var u=i.lane&-536870913,d=u!==i.lane;if(d?(St&u)===u:(o&u)===u){u!==0&&u===Es&&(lI=!0),f!==null&&(f=f.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var I=t,M=i;u=e;var m=a;switch(M.tag){case 1:if(I=M.payload,typeof I=="function"){h=I.call(m,h,u);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=M.payload,u=typeof I=="function"?I.call(m,h,u):I,u==null)break e;h=Ht({},h,u);break e;case 2:br=!0}}u=i.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[u]:d.push(u))}else d={lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(c=f=d,l=h):f=f.next=d,s|=u;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;d=i,i=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);f===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=f,r===null&&(n.shared.lanes=0),Zr|=s,t.lanes=s,t.memoizedState=h}}function Jv(t,e){if(typeof t!="function")throw Error(oe(191,t));t.call(e)}function Qv(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jv(a[t],e)}var Xr=wn(null),Qf=wn(0);function ZF(t,e){t=er,Yt(Qf,t),Yt(Xr,e),er=t|e.baseLanes}function cI(){Yt(Qf,er),Yt(Xr,Xr.current)}function h0(){er=Qf.current,La(Xr),La(Qf)}var Ua=wn(null),za=null;function Nr(t){var e=t.alternate;Yt(Pa,Pa.current&1),Yt(Ua,t),za===null&&(e===null||Xr.current!==null||e.memoizedState!==null)&&(za=t)}function uI(t){Yt(Pa,Pa.current),Yt(Ua,t),za===null&&(za=t)}function jv(t){t.tag===22?(Yt(Pa,Pa.current),Yt(Ua,t),za===null&&(za=t)):Or()}function Or(){Yt(Pa,Pa.current),Yt(Ua,Ua.current)}function vo(t){La(Ua),za===t&&(za=null),La(Pa)}var Pa=wn(0);function Tc(t,e){Yt(Ua,Ua.current),Yt(Pa,e)}function m0(t){La(Pa),La(Ua),za===t&&(za=null)}function jf(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qI(a)||V0(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qn=0,ft=null,Nt=null,la=null,$f=!1,Ri=!1,Ds=!1,ed=0,Ac=0,Di=null,ST=0;function ta(){throw Error(oe(321))}function I0(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ao(t[a],e[a]))return!1;return!0}function x0(t,e,a,o,n,r){return Qn=r,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ot.H=t===null||t.memoizedState===null?wy:Ey,Ds=!1,r=a(o,n),Ds=!1,Ri&&(r=ey(e,a,o,n)),$v(t),r}function $v(t){ot.H=td;var e=Nt!==null&&Nt.next!==null;if(Qn=0,la=Nt=ft=null,$f=!1,Ac=0,Di=null,e)throw Error(oe(300));t===null||ua||(t=t.dependencies,t!==null&&Kf(t)&&(ua=!0))}function ey(t,e,a,o){ft=t;var n=0;do{if(Ri&&(Di=null),Ac=0,Ri=!1,25<=n)throw Error(oe(301));if(n+=1,la=Nt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}ot.H=AT,r=e(a,o)}while(Ri);return r}function vT(){var t=ot.H,e=t.useState()[0];return e=typeof e.then=="function"?Gc(e):e,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ft.flags|=1024),e}function g0(){var t=ed!==0;return ed=0,t}function F0(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function S0(t){if($f){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$f=!1}Qn=0,la=Nt=ft=null,Ri=!1,Ac=ed=0,Di=null}function ja(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return la===null?ft.memoizedState=la=t:la=la.next=t,la}function na(){if(Nt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=la===null?ft.memoizedState:la.next;if(e!==null)la=e,Nt=t;else{if(t===null)throw ft.alternate===null?Error(oe(467)):Error(oe(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},la===null?ft.memoizedState=la=t:la=la.next=t}return la}function Cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gc(t){var e=Ac;return Ac+=1,Di===null&&(Di=[]),t=Yv(Di,t,e),e=ft,(la===null?e.memoizedState:la.next)===null&&(e=e.alternate,ot.H=e===null||e.memoizedState===null?wy:Ey),t}function _d(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Gc(t);if(t.$$typeof===ab)return;if(t.$$typeof===yn)return Da(t)}throw Error(oe(438,String(t)))}function v0(t){var e=null,a=ft.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Cd(),ft.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=tb;return e.index++,a}function jn(t,e){return typeof e=="function"?e(t):e}function Af(t){var e=na();return y0(e,Nt,t)}function y0(t,e,a){var o=t.queue;if(o===null)throw Error(oe(311));o.lastRenderedReducer=a;var n=t.baseQueue,r=o.pending;if(r!==null){if(n!==null){var s=n.next;n.next=r.next,r.next=s}e.baseQueue=n=r,o.pending=null}if(r=t.baseState,n===null)t.memoizedState=r;else{e=n.next;var i=s=null,l=null,c=e,f=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(St&h)===h:(Qn&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Es&&(f=!0);else if((Qn&u)===u){c=c.next,u===Es&&(f=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=h,s=r):l=l.next=h,ft.lanes|=u,Zr|=u;h=c.action,Ds&&a(r,h),r=c.hasEagerState?c.eagerState:a(r,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(i=l=u,s=r):l=l.next=u,ft.lanes|=h,Zr|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=i,!Ao(r,t.memoizedState)&&(ua=!0,f&&(a=wi,a!==null)))throw a;t.memoizedState=r,t.baseState=s,t.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Mm(t){var e=na(),a=e.queue;if(a===null)throw Error(oe(311));a.lastRenderedReducer=t;var o=a.dispatch,n=a.pending,r=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do r=t(r,s.action),s=s.next;while(s!==n);Ao(r,e.memoizedState)||(ua=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,o]}function ty(t,e,a){var o=ft,n=na(),r=It;if(r){if(a===void 0)throw Error(oe(407));a=a()}else a=e();var s=!Ao((Nt||n).memoizedState,a);if(s&&(n.memoizedState=a,ua=!0),n=n.queue,M0(ny.bind(null,o,n,t),[t]),t=n.getSnapshot!==e||s||la!==null&&(la.memoizedState.tag&1)!==0,Oi(t?9:8,{destroy:void 0},oy.bind(null,o,n,a,e),null),t){if(o.flags|=2048,zt===null)throw Error(oe(349));r||Qn&127||ay(o,e,a)}return a}function ay(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ft.updateQueue,e===null?(e=Cd(),ft.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function oy(t,e,a,o){e.value=a,e.getSnapshot=o,ry(e)&&sy(t)}function ny(t,e,a){return a(function(){ry(e)&&sy(t)})}function ry(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ao(t,a)}catch{return!0}}function sy(t){var e=Ns(t,2);e!==null&&fo(e,t,2)}function fI(t){var e=ja();if(typeof t=="function"){var a=t;if(t=a(),Ds){Ar(!0);try{a()}finally{Ar(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:t},e}function iy(t,e,a,o){return t.baseState=a,y0(t,Nt,typeof o=="function"?o:jn)}function yT(t,e,a,o,n){if(Td(t))throw Error(oe(485));if(t=e.action,t!==null){var r={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};ot.T!==null?a(!0):r.isTransition=!1,o(r),a=e.pending,a===null?(r.next=e.pending=r,ly(e,r)):(r.next=a.next,e.pending=a.next=r)}}function ly(t,e){var a=e.action,o=e.payload,n=t.state;if(e.isTransition){var r=ot.T,s={};s.types=r!==null?r.types:null,ot.T=s;try{var i=a(n,o),l=ot.S;l!==null&&l(s,i),KF(t,e,i)}catch(c){dI(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),ot.T=r}}else try{r=a(n,o),KF(t,e,r)}catch(c){dI(t,e,c)}}function KF(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){JF(t,e,o)},function(o){return dI(t,e,o)}):JF(t,e,a)}function JF(t,e,a){e.status="fulfilled",e.value=a,cy(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,ly(t,a)))}function dI(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,cy(e),e=e.next;while(e!==o)}t.action=null}function cy(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function uy(t,e){return e}function QF(t,e){if(It){var a=zt.formState;if(a!==null){e:{var o=ft;if(It){if(Xt){t:{for(var n=Xt,r=Xo;n.nodeType!==8;){if(!r){n=null;break t}if(n=Yo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Xt=Yo(n.nextSibling),o=n.data==="F!";break e}}Wr(o)}o=!1}o&&(e=a[0])}}return a=ja(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uy,lastRenderedState:e},a.queue=o,a=by.bind(null,ft,o),o.dispatch=a,o=fI(!1),r=T0.bind(null,ft,!1,o.queue),o=ja(),n={state:e,dispatch:null,action:t,pending:null},o.queue=n,a=yT.bind(null,ft,n,r,a),n.dispatch=a,o.memoizedState=t,[e,a,!1]}function jF(t){var e=na();return fy(e,Nt,t)}function fy(t,e,a){if(e=y0(t,e,uy)[0],t=Af(jn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Gc(e)}catch(s){throw s===Qi?Md:s}else o=e;e=na();var n=e.queue,r=n.dispatch;return a!==e.memoizedState&&(ft.flags|=2048,Oi(9,{destroy:void 0},MT.bind(null,n,a),null)),[o,r,t]}function MT(t,e){t.action=e}function $F(t){var e=na(),a=Nt;if(a!==null)return fy(e,a,t);na(),e=e.memoizedState,a=na();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function Oi(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Cd(),ft.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function dy(){return na().memoizedState}function wf(t,e,a,o){var n=ja();ft.flags|=t,n.memoizedState=Oi(1|e,{destroy:void 0},a,o===void 0?null:o)}function bd(t,e,a,o){var n=na();o=o===void 0?null:o;var r=n.memoizedState.inst;Nt!==null&&o!==null&&I0(o,Nt.memoizedState.deps)?n.memoizedState=Oi(e,r,a,o):(ft.flags|=t,n.memoizedState=Oi(1|e,r,a,o))}function eS(t,e){wf(8390656,8,t,e)}function M0(t,e){bd(2048,8,t,e)}function CT(t){ft.flags|=4;var e=ft.updateQueue;if(e===null)e=Cd(),ft.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function py(t){var e=na().memoizedState;return CT({ref:e,nextImpl:t}),function(){if(Et&2)throw Error(oe(440));return e.impl.apply(void 0,arguments)}}function hy(t,e){return bd(4,2,t,e)}function my(t,e){return bd(4,4,t,e)}function Iy(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xy(t,e,a){a=a!=null?a.concat([t]):null,bd(4,4,Iy.bind(null,e,t),a)}function C0(){}function gy(t,e){var a=na();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&I0(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function Fy(t,e){var a=na();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&I0(e,o[1]))return o[0];if(o=t(),Ds){Ar(!0);try{t()}finally{Ar(!1)}}return a.memoizedState=[o,e],o}function _0(t,e,a){return a===void 0||Qn&1073741824&&!(St&261930)?t.memoizedState=e:(t.memoizedState=a,t=fM(),ft.lanes|=t,Zr|=t,a)}function Sy(t,e,a,o){return Ao(a,e)?a:Xr.current!==null?(t=_0(t,a,o),Ao(t,e)||(ua=!0),t):!(Qn&106)||Qn&1073741824&&!(St&261930)?(ua=!0,t.memoizedState=a):(t=fM(),ft.lanes|=t,Zr|=t,e)}function vy(t,e,a,o,n){var r=Rt.p;Rt.p=r!==0&&8>r?r:8;var s=ot.T,i={};i.types=s!==null?s.types:null,ot.T=i,T0(t,!1,e,a);try{var l=n(),c=ot.S;if(c!==null&&c(i,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=FT(l,o);hc(t,e,f,To(t))}else hc(t,e,o,To(t))}catch(h){hc(t,e,{then:function(){},status:"rejected",reason:h},To())}finally{Rt.p=r,s!==null&&i.types!==null&&(s.types=i.types),ot.T=s}}function _T(){}function pI(t,e,a,o){if(t.tag!==5)throw Error(oe(476));var n=yy(t).queue;vy(t,n,e,ys,a===null?_T:function(){return My(t),a(o)})}function yy(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ys,baseState:ys,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:ys},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function My(t){var e=yy(t);e.next===null&&(e=t.alternate.memoizedState),hc(t,e.next.queue,{},To())}function b0(){return Da(Xi)}function Cy(){return na().memoizedState}function _y(){return na().memoizedState}function bT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=To();t=Ur(a);var o=kr(e,t,a);o!==null&&(fo(o,e,a),fc(o,e,a)),e={cache:u0()},t.payload=e;return}e=e.return}}function TT(t,e,a){var o=To();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Td(t)?Ty(e,a):(a=i0(t,e,a,o),a!==null&&(fo(a,t,o),Ay(a,e,o)))}function by(t,e,a){var o=To();hc(t,e,a,o)}function hc(t,e,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Td(t))Ty(e,n);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,i=r(s,a);if(n.hasEagerState=!0,n.eagerState=i,Ao(i,s))return vd(t,e,n,0),zt===null&&Sd(),!1}catch{}finally{}if(a=i0(t,e,n,o),a!==null)return fo(a,t,o),Ay(a,e,o),!0}return!1}function T0(t,e,a,o){if(o={lane:2,revertLane:N0(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Td(t)){if(e)throw Error(oe(479))}else e=i0(t,a,o,2),e!==null&&fo(e,t,2)}function Td(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Ty(t,e){Ri=$f=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ay(t,e,a){if(a&4194048){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,dv(t,a)}}var td={readContext:Da,use:_d,useCallback:ta,useContext:ta,useEffect:ta,useImperativeHandle:ta,useLayoutEffect:ta,useInsertionEffect:ta,useMemo:ta,useReducer:ta,useRef:ta,useState:ta,useDebugValue:ta,useDeferredValue:ta,useTransition:ta,useSyncExternalStore:ta,useId:ta,useHostTransitionStatus:ta,useFormState:ta,useActionState:ta,useOptimistic:ta,useMemoCache:ta,useCacheRefresh:ta,useEffectEvent:ta},wy={readContext:Da,use:_d,useCallback:function(t,e){return ja().memoizedState=[t,e===void 0?null:e],t},useContext:Da,useEffect:eS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,wf(4194308,4,Iy.bind(null,e,t),a)},useLayoutEffect:function(t,e){return wf(4194308,4,t,e)},useInsertionEffect:function(t,e){wf(4,2,t,e)},useMemo:function(t,e){var a=ja();e=e===void 0?null:e;var o=t();if(Ds){Ar(!0);try{t()}finally{Ar(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=ja();if(a!==void 0){var n=a(e);if(Ds){Ar(!0);try{a(e)}finally{Ar(!1)}}}else n=e;return o.memoizedState=o.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=TT.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var e=ja();return t={current:t},e.memoizedState=t},useState:function(t){t=fI(t);var e=t.queue,a=by.bind(null,ft,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:C0,useDeferredValue:function(t,e){var a=ja();return _0(a,t,e)},useTransition:function(){var t=fI(!1);return t=vy.bind(null,ft,t.queue,!0,!1),ja().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=ft,n=ja();if(It){if(a===void 0)throw Error(oe(407));a=a()}else{if(a=e(),zt===null)throw Error(oe(349));St&127||ay(o,e,a)}n.memoizedState=a;var r={value:a,getSnapshot:e};return n.queue=r,eS(ny.bind(null,o,r,t),[t]),o.flags|=2048,Oi(9,{destroy:void 0},oy.bind(null,o,r,a,e),null),a},useId:function(){var t=ja(),e=zt.identifierPrefix;if(It){var a=_n,o=Cn;a=(o&~(1<<32-bo(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ed++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=ST++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:b0,useFormState:QF,useActionState:QF,useOptimistic:function(t){var e=ja();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=T0.bind(null,ft,!0,a),a.dispatch=e,[t,e]},useMemoCache:v0,useCacheRefresh:function(){return ja().memoizedState=bT.bind(null,ft)},useEffectEvent:function(t){var e=ja(),a={impl:t};return e.memoizedState=a,function(){if(Et&2)throw Error(oe(440));return a.impl.apply(void 0,arguments)}}},Ey={readContext:Da,use:_d,useCallback:gy,useContext:Da,useEffect:M0,useImperativeHandle:xy,useInsertionEffect:hy,useLayoutEffect:my,useMemo:Fy,useReducer:Af,useRef:dy,useState:function(){return Af(jn)},useDebugValue:C0,useDeferredValue:function(t,e){var a=na();return Sy(a,Nt.memoizedState,t,e)},useTransition:function(){var t=Af(jn)[0],e=na().memoizedState;return[typeof t=="boolean"?t:Gc(t),e]},useSyncExternalStore:ty,useId:Cy,useHostTransitionStatus:b0,useFormState:jF,useActionState:jF,useOptimistic:function(t,e){var a=na();return iy(a,Nt,t,e)},useMemoCache:v0,useCacheRefresh:_y,useEffectEvent:py},AT={readContext:Da,use:_d,useCallback:gy,useContext:Da,useEffect:M0,useImperativeHandle:xy,useInsertionEffect:hy,useLayoutEffect:my,useMemo:Fy,useReducer:Mm,useRef:dy,useState:function(){return Mm(jn)},useDebugValue:C0,useDeferredValue:function(t,e){var a=na();return Nt===null?_0(a,t,e):Sy(a,Nt.memoizedState,t,e)},useTransition:function(){var t=Mm(jn)[0],e=na().memoizedState;return[typeof t=="boolean"?t:Gc(t),e]},useSyncExternalStore:ty,useId:Cy,useHostTransitionStatus:b0,useFormState:$F,useActionState:$F,useOptimistic:function(t,e){var a=na();return Nt!==null?iy(a,Nt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:v0,useCacheRefresh:_y,useEffectEvent:py};function Cm(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:Ht({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hI={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=To(),n=Ur(o);n.payload=e,a!=null&&(n.callback=a),e=kr(t,n,o),e!==null&&(fo(e,t,o),fc(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=To(),n=Ur(o);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=kr(t,n,o),e!==null&&(fo(e,t,o),fc(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=To(),o=Ur(a);o.tag=2,e!=null&&(o.callback=e),e=kr(t,o,a),e!==null&&(fo(e,t,a),fc(e,t,a))}};function tS(t,e,a,o,n,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,r,s):e.prototype&&e.prototype.isPureReactComponent?!Mc(a,o)||!Mc(n,r):!0}function aS(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&hI.enqueueReplaceState(e,e.state,null)}function Ls(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=Ht({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Ry(t){Wf(t)}function Dy(t){console.error(t)}function Ly(t){Wf(t)}function ad(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function oS(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mI(t,e,a){return a=Ur(a),a.tag=3,a.payload={element:null},a.callback=function(){ad(t,e)},a}function Py(t){return t=Ur(t),t.tag=3,t}function By(t,e,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;t.payload=function(){return n(r)},t.callback=function(){oS(e,a,o)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){oS(e,a,o),typeof n!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function wT(t,e,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&As(e,a,n,!0),a=Ua.current,a!==null){switch(a.tag){case 31:case 13:case 19:return za===null?ud():a.alternate===null&&aa===0&&(aa=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Jf?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),Rm(t,o,n)),!1;case 22:return a.flags|=65536,o===Jf?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),Rm(t,o,n)),!1}throw Error(oe(435,a.tag))}return Rm(t,o,n),ud(),!1}if(It)return e=Ua.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,o!==oI&&(t=Error(oe(422),{cause:o}),_c(Wo(t,a)))):(o!==oI&&(e=Error(oe(423),{cause:o}),_c(Wo(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,o=Wo(o,a),n=mI(t.stateNode,o,n),ym(t,n),aa!==4&&(aa=2)),!1;var r=Error(oe(520),{cause:o});if(r=Wo(r,a),gc===null?gc=[r]:gc.push(r),aa!==4&&(aa=2),e===null)return!0;o=Wo(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=mI(a.stateNode,o,t),ym(a,t),!1;case 1:if(e=a.type,r=a.stateNode,!(a.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Py(n),By(n,t,a,o),ym(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var A0=Error(oe(461)),ua=!1;function Ia(t,e,a,o){e.child=t===null?Kv(e,null,a,o):Rs(e,t.child,a,o)}function nS(t,e,a,o,n){a=a.render;var r=e.ref;if("ref"in o){var s={};for(var i in o)i!=="ref"&&(s[i]=o[i])}else s=o;return ws(e),o=x0(t,e,a,s,r,n),i=g0(),t!==null&&!ua?(F0(t,e,n),$n(t,e,n)):(It&&i&&yd(e),e.flags|=1,Ia(t,e,o,n),e.child)}function rS(t,e,a,o,n){if(t===null){var r=a.type;return typeof r=="function"&&!l0(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,Uy(t,e,r,o,n)):(t=_f(a.type,null,o,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!E0(t,n)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Mc,a(s,o)&&t.ref===e.ref)return $n(t,e,n)}return e.flags|=1,t=Yn(r,o),t.ref=e.ref,t.return=e,e.child=t}function Uy(t,e,a,o,n){if(t!==null){var r=t.memoizedProps;if(Mc(r,o)&&t.ref===e.ref)if(ua=!1,e.pendingProps=o=r,E0(t,n))t.flags&131072&&(ua=!0);else return e.lanes=t.lanes,$n(t,e,n)}return II(t,e,a,o,n)}function ky(t,e,a,o){var n=o.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|a:a,t!==null){for(o=e.child=t.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,e.child=null;return sS(t,e,r,a,o)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tf(e,r!==null?r.cachePool:null),r!==null?ZF(e,r):cI(),jv(e);else return o=e.lanes=536870912,sS(t,e,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Tf(e,r.cachePool),ZF(e,r),Or(),e.memoizedState=null):(t!==null&&Tf(e,null),cI(),Or());return Ia(t,e,n,a),e.child}function mc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function sS(t,e,a,o,n){var r=f0();return r=r===null?null:{parent:ca._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&Tf(e,null),cI(),jv(e),t!==null&&As(t,e,o,!0),e.childLanes=n,null}function Ef(t,e){return e=Ad({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function iS(t,e,a){return Rs(e,t.child,null,a),t=Ef(e,e.pendingProps),t.flags|=2,vo(e),e.memoizedState=null,t}function ET(t,e,a){var o=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(It){if(o.mode==="hidden")return t=Ef(e,o),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},mc(null,t);if(uI(e),(t=Xt)?(t=kM(t,Xo),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Vv(t),a.return=e,e.child=a,ba=e,Xt=null)):t=null,t===null)throw Wr(e);return e.lanes=536870912,null}return Ef(e,o)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(uI(e),n)if(e.flags&256)e.flags&=-257,e=iS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(oe(558));else if(ua||As(t,e,a,!1),n=(a&t.childLanes)!==0,ua||n){if(Xr.current===null){if(o=zt,o!==null&&(s=pv(o,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,Ns(t,s),fo(o,t,s),A0;ud()}e=iS(t,e,a)}else t=r.treeContext,Xt=Yo(s.nextSibling),ba=e,It=!0,Br=null,Xo=!1,t!==null&&qv(e,t),e=Ef(e,o),e.flags|=134221824;return e}return t=Yn(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function fi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(oe(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function II(t,e,a,o,n){return ws(e),a=x0(t,e,a,o,void 0,n),o=g0(),t!==null&&!ua?(F0(t,e,n),$n(t,e,n)):(It&&o&&yd(e),e.flags|=1,Ia(t,e,a,n),e.child)}function lS(t,e,a,o,n,r){return ws(e),e.updateQueue=null,a=ey(e,o,a,n),$v(t),o=g0(),t!==null&&!ua?(F0(t,e,r),$n(t,e,r)):(It&&o&&yd(e),e.flags|=1,Ia(t,e,a,r),e.child)}function cS(t,e,a,o,n){if(ws(e),e.stateNode===null){var r=yi,s=a.contextType;typeof s=="object"&&s!==null&&(r=Da(s)),r=new a(o,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hI,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=o,r.state=e.memoizedState,r.refs={},p0(e),s=a.contextType,r.context=typeof s=="object"&&s!==null?Da(s):yi,r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Cm(e,a,s,o),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&hI.enqueueReplaceState(r,r.state,null),pc(e,o,r,n),dc(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){r=e.stateNode;var i=e.memoizedProps,l=Ls(a,i);r.props=l;var c=r.context,f=a.contextType;s=yi,typeof f=="object"&&f!==null&&(s=Da(f));var h=a.getDerivedStateFromProps;f=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=e.pendingProps!==i,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||c!==s)&&aS(e,r,o,s),br=!1;var u=e.memoizedState;r.state=u,pc(e,o,r,n),dc(),c=e.memoizedState,i||u!==c||br?(typeof h=="function"&&(Cm(e,a,h,o),c=e.memoizedState),(l=br||tS(e,a,l,o,u,c,s))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=c),r.props=o,r.state=c,r.context=s,o=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{r=e.stateNode,iI(t,e),s=e.memoizedProps,f=Ls(a,s),r.props=f,h=e.pendingProps,u=r.context,c=a.contextType,l=yi,typeof c=="object"&&c!==null&&(l=Da(c)),i=a.getDerivedStateFromProps,(c=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||u!==l)&&aS(e,r,o,l),br=!1,u=e.memoizedState,r.state=u,pc(e,o,r,n),dc();var d=e.memoizedState;s!==h||u!==d||br||t!==null&&t.dependencies!==null&&Kf(t.dependencies)?(typeof i=="function"&&(Cm(e,a,i,o),d=e.memoizedState),(f=br||tS(e,a,f,o,u,d,l)||t!==null&&t.dependencies!==null&&Kf(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=d),r.props=o,r.state=d,r.context=l,o=f):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),o=!1)}return r=o,fi(t,e),o=(e.flags&128)!==0,r||o?(r=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,n),e.child=Rs(e,null,a,n)):Ia(t,e,a,n),e.memoizedState=r.state,t=e.child):t=$n(t,e,n),t}function uS(t,e,a,o){return Ts(),e.flags|=256,Ia(t,e,a,o),e.child}var xI={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gI(t){return{baseLanes:t,cachePool:Xv()}}function FI(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Mo),t}function Ny(t,e,a){var o=e.pendingProps,n=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Pa.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(It){if(n?Nr(e):Or(),(t=Xt)?(t=kM(t,Xo),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qr!==null?{id:Cn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},a=Vv(t),a.return=e,e.child=a,ba=e,Xt=null)):t=null,t===null)throw Wr(e);return V0(t)?e.lanes=32:e.lanes=536870912,null}return r=o.children,o=o.fallback,n?(Or(),n=e.mode,r=Ad({mode:"hidden",children:r},n),o=Ms(o,n,a,null),r.return=e,o.return=e,r.sibling=o,e.child=r,o=e.child,o.memoizedState=gI(a),o.childLanes=FI(t,s,a),e.memoizedState=xI,mc(null,o)):(Nr(e),w0(e,r))}var i=t.memoizedState;if(i!==null){var l=i.dehydrated;if(l!==null)return RT(t,e,r,s,o,l,i,a)}return n?(Or(),n=o.fallback,r=e.mode,i=t.child,l=i.sibling,o=Yn(i,{mode:"hidden",children:o.children}),o.subtreeFlags=i.subtreeFlags&1206910976,l!==null?n=Yn(l,n):(n=Ms(n,r,a,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,mc(null,o),o=e.child,n=t.child.memoizedState,n===null?n=gI(a):(r=n.cachePool,r!==null?(i=ca._currentValue,r=r.parent!==i?{parent:i,pool:i}:r):r=Xv(),n={baseLanes:n.baseLanes|a,cachePool:r}),o.memoizedState=n,o.childLanes=FI(t,s,a),e.memoizedState=xI,mc(t.child,o)):(Nr(e),a=t.child,t=a.sibling,a=Yn(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function w0(t,e){return e=Ad({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ad(t,e){return t=uo(22,t,null,e),t.lanes=0,t}function ff(t,e,a){return Rs(e,t.child,null,a),t=w0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,a,o,n,r,s,i){if(a)return e.flags&256?(Nr(e),e.flags&=-257,ff(t,e,i)):e.memoizedState!==null?(Or(),e.child=t.child,e.flags|=128,null):(Or(),r=n.fallback,s=e.mode,n=Ad({mode:"visible",children:n.children},s),r=Ms(r,s,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Rs(e,t.child,null,i),n=e.child,n.memoizedState=gI(i),n.childLanes=FI(t,o,i),e.memoizedState=xI,mc(null,n));if(Nr(e),V0(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,o!==""&&(n=Error(oe(419)),n.stack="",n.digest=o,_c({value:n,source:null,stack:null})),ff(t,e,i)}if(ua||As(t,e,i,!1),o=(i&t.childLanes)!==0,ua||o){if(Xr.current!==null)return ff(t,e,i);if(o=zt,o!==null&&(n=pv(o,i),n!==0&&n!==s.retryLane))throw s.retryLane=n,Ns(t,n),fo(o,t,n),A0;return qI(r)||ud(),ff(t,e,i)}return qI(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Xt=Yo(r.nextSibling),ba=e,It=!0,Br=null,Xo=!1,t!==null&&qv(e,t),e=w0(e,n.children),e.flags|=134221824,e)}function fS(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),bf(t.return,e,a)}function dS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&jf(a)===null&&(e=t),t=t.sibling}return e}function df(t,e,a,o,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=a,s.tailMode=n,s.treeForkCount=r)}function _m(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function SI(t,e,a){var o=e.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var s=Pa.current;if(e.flags&128)return Tc(e,s),null;var i=(s&2)!==0;if(i?(s=s&1|2,e.flags|=128):s&=1,Tc(e,s),n==="backwards"&&t!==null?(_m(t),Ia(t,e,o,a),_m(t)):Ia(t,e,o,a),o=It?Cc:0,!i&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fS(t,a,e);else if(t.tag===19)fS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=dS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,_m(e)),df(e,!0,n,null,r,o);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&jf(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}df(e,!0,a,null,r,o);break;case"together":df(e,!1,null,null,void 0,o);break;case"independent":e.memoizedState=null;break;default:a=dS(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),df(e,!1,n,a,r,o)}return e.child}function pS(t,e,a){var o=e.pendingProps;return Er(e,e.type,o.value),Ia(t,e,o.children,a),e.child}function $n(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(a&e.childLanes))if(t!==null){if(As(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,a=Yn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Yn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function E0(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Kf(t)))}function DT(t,e,a){switch(e.tag){case 3:Hf(e,e.stateNode.containerInfo),Er(e,ca,t.memoizedState.cache),Ts();break;case 27:case 5:Ym(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:Er(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,uI(e),null;break;case 13:var o=e.memoizedState;if(o!==null){if(o.dehydrated!==null)return Nr(e),e.flags|=128,null;o=As(t,e,a,!1);var n=e.child.childLanes;return o||a&n?Ny(t,e,a):(Nr(e),t=$n(t,e,a),t!==null?t.sibling:null)}Nr(e);break;case 19:if(e.flags&128)return SI(t,e,a);if(n=(t.flags&128)!==0,o=(a&e.childLanes)!==0,o||(As(t,e,a,!1),o=(a&e.childLanes)!==0),n){if(o)return SI(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Tc(e,Pa.current),o)break;return null;case 22:return e.lanes=0,ky(t,e,a,e.pendingProps);case 24:Er(e,ca,t.memoizedState.cache)}return $n(t,e,a)}function Oy(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ua=!0;else{if(!E0(t,a)&&!(e.flags&128))return ua=!1,DT(t,e,a);ua=!!(t.flags&131072)}else ua=!1,It&&e.flags&1048576&&Gv(e,Cc,e.index);switch(e.lanes=0,e.tag){case 16:e:{var o=e.pendingProps;if(t=gs(e.elementType),e.type=t,typeof t=="function")l0(t)?(o=Ls(t,o),e.tag=1,e=cS(null,e,t,o,a)):(e.tag=0,e=II(null,e,t,o,a));else{if(t!=null){var n=t.$$typeof;if(n===KI){e.tag=11,e=nS(null,e,t,o,a);break e}else if(n===JI){e.tag=14,e=rS(null,e,t,o,a);break e}else if(n===yn){e.tag=10,e.type=t,e=pS(null,e,a);break e}}throw e=Wm(t)||t,Error(oe(306,e,""))}}return e;case 0:return II(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,n=Ls(o,e.pendingProps),cS(t,e,o,n,a);case 3:e:{if(Hf(e,e.stateNode.containerInfo),t===null)throw Error(oe(387));o=e.pendingProps;var r=e.memoizedState;n=r.element,iI(t,e),pc(e,o,null,a);var s=e.memoizedState;if(o=s.cache,Er(e,ca,o),o!==r.cache&&rI(e,[ca],a,!0),dc(),o=s.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=uS(t,e,o,a);break e}else if(o!==n){n=Wo(Error(oe(424)),e),_c(n),e=uS(t,e,o,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xt=Yo(t.firstChild),ba=e,It=!0,Br=null,Xo=!0,a=Kv(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ts(),o===n){e=$n(t,e,a);break e}Ia(t,e,o,a)}e=e.child}return e;case 26:return fi(t,e),t===null?(a=zS(e.type,null,e.pendingProps,null))?e.memoizedState=a:It||(e.stateNode=AM(e.type,e.pendingProps,Pr.current,e)):e.memoizedState=zS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ym(e),t===null&&It&&(o=e.stateNode=NM(e.type,e.pendingProps,Pr.current),ba=e,Xo=!0,n=Xt,Jr(e.type)?(WI=n,Xt=Yo(o.firstChild)):Xt=n),Ia(t,e,e.pendingProps.children,a),fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&It&&((n=o=Xt)&&(o=CA(o,e.type,e.pendingProps,Xo),o!==null?(e.stateNode=o,ba=e,Xt=Yo(o.firstChild),Xo=!1,n=!0):n=!1),n||Wr(e)),Ym(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,HI(n,r)?o=null:s!==null&&HI(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=x0(t,e,vT,null,null,a),Xi._currentValue=n),fi(t,e),Ia(t,e,o,a),e.child;case 6:return t===null&&It&&((t=a=Xt)&&(a=_A(a,e.pendingProps,Xo),a!==null?(e.stateNode=a,ba=e,Xt=null,t=!0):t=!1),t||Wr(e)),null;case 13:return Ny(t,e,a);case 4:return Hf(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Rs(e,null,o,a):Ia(t,e,o,a),e.child;case 11:return nS(t,e,e.type,e.pendingProps,a);case 7:return o=e.pendingProps,fi(t,e),Ia(t,e,o,a),e.child;case 8:return Ia(t,e,e.pendingProps.children,a),e.child;case 12:return Ia(t,e,e.pendingProps.children,a),e.child;case 10:return pS(t,e,a);case 9:return n=e.type._context,o=e.pendingProps.children,ws(e),n=Da(n),o=o(n),e.flags|=1,Ia(t,e,o,a),e.child;case 14:return rS(t,e,e.type,e.pendingProps,a);case 15:return Uy(t,e,e.type,e.pendingProps,a);case 19:return SI(t,e,a);case 31:return ET(t,e,a);case 22:return ky(t,e,a,e.pendingProps);case 24:return ws(e),o=Da(ca),t===null?(n=f0(),n===null&&(n=zt,r=u0(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),e.memoizedState={parent:o,cache:n},p0(e),Er(e,ca,n)):(t.lanes&a&&(iI(t,e),pc(e,null,null,a),dc()),n=t.memoizedState,r=e.memoizedState,n.parent!==o?(n={parent:o,cache:o},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Er(e,ca,o)):(o=r.cache,Er(e,ca,o),o!==n.cache&&rI(e,[ca],a,!0))),Ia(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=e.pendingProps,o.name!=null&&o.name!=="auto"?e.flags|=t===null?18882560:18874368:It&&yd(e),t!==null&&t.memoizedProps.name!==o.name?e.flags|=4194816:fi(t,e),Ia(t,e,o.children,a),e.child;case 29:throw e.pendingProps}throw Error(oe(156,e.tag))}function qn(t){t.flags|=4}function bm(t,e,a,o,n){var r;if((r=(t.mode&32)!==0)&&(r=a===null?GS(e,o):GS(e,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),r){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(hM())t.flags|=8192;else throw _s=Jf,d0}else t.flags&=-16777217}function hS(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!VM(e))if(hM())t.flags|=8192;else throw _s=Jf,d0}function pf(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?uv():536870912,t.lanes|=e,zi|=e)}function jl(t,e){if(!It)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&1206910976,o|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function LT(t,e,a){var o=e.pendingProps;switch(c0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return Wt(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Zn(ca),Ui(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ci(e)?qn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vm())),Wt(e),null;case 26:var n=e.type,r=e.memoizedState;return t===null?(qn(e),r!==null?(Wt(e),hS(e,r)):(Wt(e),bm(e,n,null,o,a))):r?r!==t.memoizedState?(qn(e),Wt(e),hS(e,r)):(Wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&qn(e),Wt(e),bm(e,n,t,o,a)),null;case 27:if(Vf(e),a=Pr.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&qn(e);else{if(!o){if(e.stateNode===null)throw Error(oe(166));return Wt(e),e.subtreeFlags&=-33554433,null}t=bn.current,ci(e)?HF(e,t):(t=NM(n,o,a),e.stateNode=t,qn(e))}return Wt(e),e.subtreeFlags&=-33554433,null;case 5:if(Vf(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&qn(e);else{if(!o){if(e.stateNode===null)throw Error(oe(166));return Wt(e),e.subtreeFlags&=-33554433,null}if(r=bn.current,ci(e))HF(e,r);else{var s=Rc(Pr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}r[Ra]=e,r[ho]=o;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(Ba(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&qn(e)}}return Wt(e),e.subtreeFlags&=-33554433,bm(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&qn(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(oe(166));if(t=Pr.current,ci(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,n=ba,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}t[Ra]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bM(t.nodeValue,a)),t||Wr(e,!0)}else t=Rc(t).createTextNode(o),t[Ra]=e,e.stateNode=t}return Wt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=ci(e),a!==null){if(t===null){if(!o)throw Error(oe(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(557));t[Ra]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),t=!1}else a=vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(vo(e),e):(vo(e),null);if(e.flags&128)throw Error(oe(558))}return Wt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ci(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(oe(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));n[Ra]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),n=!1}else n=vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(vo(e),e):(vo(e),null)}return vo(e),e.flags&128?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),pf(e,e.updateQueue),Wt(e),null);case 4:return Ui(),t===null&&O0(e.stateNode.containerInfo),e.flags|=67108864,Wt(e),null;case 10:return Zn(e.type),Wt(e),null;case 19:if(m0(e),o=e.memoizedState,o===null)return Wt(e),null;if(n=(e.flags&128)!==0,r=o.rendering,r===null)if(n)jl(o,!1);else{if(aa!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=jf(t),r!==null){for(e.flags|=128,jl(o,!1),t=r.updateQueue,e.updateQueue=t,pf(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Hv(a,t),a=a.sibling;return Tc(e,Pa.current&1|2),It&&Wn(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&Co()>ld&&(e.flags|=128,n=!0,jl(o,!1),e.lanes=4194304)}else{if(!n)if(t=jf(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,pf(e,t),jl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!r.alternate&&!It)return Wt(e),null}else 2*Co()-o.renderingStartTime>ld&&a!==536870912&&(e.flags|=128,n=!0,jl(o,!1),e.lanes=4194304);o.isBackwards?(r.sibling=e.child,e.child=r):(t=o.last,t!==null?t.sibling=r:e.child=r,o.last=r)}if(o.tail!==null){t=o.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Co(),t.sibling=null,r=Pa.current,r=n?r&1|2:r&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||It?Tc(e,r):(a=r,Yt(Ua,e),Yt(Pa,a),za===null&&(za=e)),It&&Wn(e,o.treeForkCount),t}return Wt(e),null;case 22:case 23:return vo(e),h0(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?a&536870912&&!(e.flags&128)&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),a=e.updateQueue,a!==null&&pf(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&La(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Zn(ca),Wt(e),null;case 25:return null;case 30:return e.flags|=33554432,Wt(e),null}throw Error(oe(156,e.tag))}function PT(t,e){switch(c0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zn(ca),Ui(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Vf(e),null;case 31:if(e.memoizedState!==null){if(vo(e),e.alternate===null)throw Error(oe(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(vo(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return m0(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Ui(),null;case 10:return Zn(e.type),null;case 22:case 23:return vo(e),h0(),t!==null&&La(Cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Zn(ca),null;case 25:return null;default:return null}}function zy(t,e){switch(c0(e),e.tag){case 3:Zn(ca),Ui();break;case 26:case 27:case 5:Vf(e);break;case 4:Ui();break;case 31:e.memoizedState!==null&&vo(e);break;case 13:vo(e);break;case 19:m0(e);break;case 10:Zn(e.type);break;case 22:case 23:vo(e),h0(),t!==null&&La(Cs);break;case 24:Zn(ca)}}function qc(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&t)===t){o=void 0;var r=a.create,s=a.inst;o=r(),s.destroy=o}a=a.next}while(a!==n)}}catch(i){Ut(e,e.return,i)}}function Yr(t,e,a){try{var o=e.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&t)===t){var s=o.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,n=e;var l=a,c=i;try{c()}catch(f){Ut(n,l,f)}}}o=o.next}while(o!==r)}}catch(f){Ut(e,e.return,f)}}function Hy(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Qv(e,a)}catch(o){Ut(t,t.return,o)}}}function Vy(t,e,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ut(t,e,o)}}function Sn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var n=t.stateNode,r=Jn(t.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=DM(r)),o=n.ref;break;case 7:if(t.stateNode===null){var s=new wo(t);po(t.child,!1,yA,s,void 0,void 0),t.stateNode=s}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(i){Ut(t,e,i)}}function Ea(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ut(t,e,n)}else a.current=null}function od(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)UM(t.stateNode,e[a])}function mS(t){for(var e=t.return;e!==null&&(D0(e)&&UM(t.stateNode,e.stateNode),!R0(e));)e=e.return}function Ic(t){for(var e=t.return;e!==null&&(D0(e)&&MA(t.stateNode,e.stateNode),!R0(e));)e=e.return}function R0(t){return t.tag===5||t.tag===3||t.tag===27}function D0(t){return t&&t.tag===7&&t.stateNode!==null}function vI(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ut(t,t.return,n)}}function Tm(t,e,a){try{var o=t.stateNode;nA(o,t.type,a,e),o[ho]=e}catch(n){Ut(t,t.return,n)}}function Gy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Jr(t.type)||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Jr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yI(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Mn)),od(t,o),At=!0;else if(n!==4&&(n===27&&(od(t,o),o=null,Jr(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(yI(t,e,a,o),t=t.sibling;t!==null;)yI(t,e,a,o),t=t.sibling}function nd(t,e,a,o){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),od(t,o),At=!0;else if(n!==4&&(n===27&&(od(t,o),o=null,Jr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(nd(t,e,a,o),t=t.sibling;t!==null;)nd(t,e,a,o),t=t.sibling}function qy(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ba(e,o,a),e[Ra]=t,e[ho]=a}catch(r){Ut(t,t.return,r)}}var rd=!1,yo=null;function IS(t){(t.tag===30||t.subtreeFlags&33554432)&&(rd=!0)}var vn=null;function xS(){var t=vn;return vn=null,t}var co=0;function ji(t,e,a,o,n){return co=0,Wy(t.child,e,a,o,n)}function Wy(t,e,a,o,n){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(o!==null){var i=VI(s);o.push(i),i.view&&(r=!0)}else r||VI(s).view&&(r=!0);rd=!0,wM(s,co===0?e:e+"_"+co,a),co++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Wy(t.child,e,a,o,n)&&(r=!0));t=t.sibling}return r}function An(t,e){for(;t!==null;)t.tag===5?EM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||An(t.child,e)),t=t.sibling}function Rf(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Rf(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(oe(544));var a=e.name;e=ar(e.default,e.share),e!=="none"&&(ji(t,a,e,null,!1)||An(t.child,!1))}t=t.sibling}}function MI(t,e){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,n=Jn(o,a),r=ar(o.default,a.paired?o.share:o.enter);r!=="none"?ji(t,n,r,null,!1)?(Rf(t),a.paired||e||Hi(t,o.onEnter)):An(t.child,!1):Rf(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)MI(t,e),t=t.sibling;else Rf(t)}function CI(t){if(yo!==null&&yo.size!==0){var e=yo;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var n=e.get(o);if(n!==void 0){var r=ar(a.default,a.share);if(r!=="none"&&(ji(t,o,r,null,!1)?(r=t.stateNode,n.paired=r,r.paired=n,Hi(t,a.onShare)):An(t.child,!1)),e.delete(o),e.size===0)break}}}CI(t)}t=t.sibling}}}function _I(t){if(t.tag===30){var e=t.memoizedProps,a=Jn(e,t.stateNode),o=yo!==null?yo.get(a):void 0,n=ar(e.default,o!==void 0?e.share:e.exit);n!=="none"&&(ji(t,a,n,null,!1)?o!==void 0?(n=t.stateNode,o.paired=n,n.paired=o,yo.delete(a),Hi(t,e.onShare)):Hi(t,e.onExit):An(t.child,!1)),yo!==null&&CI(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)_I(t),t=t.sibling;else yo!==null&&CI(t)}function Xy(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=Jn(e,t.stateNode);e=ar(e.default,e.update),t.flags&=-5,e!=="none"&&ji(t,a,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&Xy(t);t=t.sibling}}function bI(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,An(t.child,!1))}bI(t)}t=t.sibling}}function Df(t){if(t.tag===30)t.stateNode.paired=null,An(t.child,!1),bI(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Df(t),t=t.sibling;else bI(t)}function Yy(t){for(t=t.child;t!==null;)t.tag===30?An(t.child,!1):t.subtreeFlags&33554432&&Yy(t),t=t.sibling}function L0(t,e,a,o,n,r,s){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&co<r.length){var c=r[co],f=VI(l);(c.view||f.view)&&(i=!0);var h;if(h=(t.flags&4)===0)if(f.clip)h=!0;else{h=c.rect;var u=f.rect;h=h.y!==u.y||h.x!==u.x||h.height!==u.height||h.width!==u.width}h&&(t.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(t.flags|=32)}else t.flags|=32;t.flags&4&&wM(l,co===0?a:a+"_"+co,n),i&&t.flags&4||(vn===null&&(vn=[]),vn.push(l,co===0?o:o+"_"+co,e.memoizedProps)),co++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:L0(t,e.child,a,o,n,r,s)&&(i=!0));e=e.sibling}return i}function Zy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,n=Jn(a,o),r=ar(a.default,a.update);if(e){o=o.clones;var s=o===null?null:o.map(uA)}else s=t.memoizedState,t.memoizedState=null;o=t;var i=t.child;co=0,n=L0(o,i,n,n,r,s,!1),t.flags&4&&n&&(e||Hi(t,a.onUpdate))}else t.subtreeFlags&33554432&&Zy(t,e);t=t.sibling}}var Ma=!1,Dt=!1,xn=!1,wm=!1,gS=typeof WeakSet=="function"?WeakSet:Set,Ca=null,gn=!1,sc=!1,sd=!1,TI=!1;function BT(t,e,a){if(t=t.containerInfo,OI=Yi,t=Lv(t),r0(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var i=0,l=-1,c=-1,f=0,h=0,u=t,d=null;t:for(;;){for(var I;u!==o||r!==0&&u.nodeType!==3||(l=i+r),u!==s||n!==0&&u.nodeType!==3||(c=i+n),u.nodeType===3&&(i+=u.nodeValue.length),(I=u.firstChild)!==null;)d=u,u=I;for(;;){if(u===t)break t;if(d===o&&++f===r&&(l=i),d===s&&++h===n&&(c=i),(I=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=I}o=l===-1||c===-1?null:{start:l,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(zI={focusedElem:t,selectionRange:o},Yi=!1,a=(a&335544064)===a,Ca=e,e=a?9270:1024;Ca!==null;){if(t=Ca,a&&(o=t.deletions,o!==null))for(r=0;r<o.length;r++)a&&_I(o[r]);if(t.alternate===null&&t.flags&2)a&&IS(t),hf(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&_I(o),hf(a);continue}else if(o!==null&&o.memoizedState!==null){a&&IS(t),hf(a);continue}}o=t.child,t.subtreeFlags&e&&o!==null?(o.return=t,Ca=o):(a&&Xy(t),hf(a))}}yo=null}function hf(t){for(;Ca!==null;){var e=Ca,a=t,o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(n&1024&&o!==null){a=void 0,n=o.memoizedProps,o=o.memoizedState;var r=e.stateNode;try{var s=Ls(e.type,n);a=r.getSnapshotBeforeUpdate(s,o),r.__reactInternalSnapshotBeforeUpdate=a}catch(i){Ut(e,e.return,i)}}break;case 3:if(n&1024){if(o=e.stateNode.containerInfo,a=o.nodeType,a===9)GI(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":GI(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=Jn(o.memoizedProps,o.stateNode),n=e.memoizedProps,n=ar(n.default,n.update),n!=="none"&&ji(o,a,n,o.memoizedState=[],!0));break;default:if(n&1024)throw Error(oe(163))}if(o=e.sibling,o!==null){o.return=e.return,Ca=o;break}Ca=e.return}}function Ky(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fn(t,a),o&4&&qc(5,a);break;case 1:if(Fn(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Ut(a,a.return,s)}else{var n=Ls(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ut(a,a.return,s)}}o&64&&Hy(a),o&512&&Sn(a,a.return);break;case 3:if(Fn(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Qv(t,e)}catch(s){Ut(a,a.return,s)}}break;case 27:e===null&&o&4&&qy(a);case 26:case 5:Fn(t,a),e===null&&o&4&&vI(a),o&512&&Sn(a,a.return);break;case 12:Fn(t,a);break;case 31:Fn(t,a),o&4&&$y(t,a);break;case 13:Fn(t,a),o&4&&eM(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=YT.bind(null,a),bA(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){var r=e!==null&&e.memoizedState!==null||Dt;e=Ma,n=Dt,Ma=o,(Dt=r)&&!n?(o=2,a.subtreeFlags&8772&&(o|=1),$o(t,a,o)):Fn(t,a),Ma=e,Dt=n}break;case 30:Fn(t,a),o&512&&Sn(a,a.return);break;case 7:o&512&&Sn(a,a.return);default:Fn(t,a)}}function AI(t,e){for(t=t.child;t!==null;)Jy(t,e),t=t.sibling}function Jy(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var n=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Ut(t,t.return,l)}wI(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,At=!0}catch(l){Ut(t,t.return,l)}break;case 18:try{var i=t.stateNode;e?PS(i,!0):PS(t.stateNode,!1)}catch(l){Ut(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&AI(t,e);break;default:AI(t,e)}}function wI(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,o=e;switch(a.tag){case 4:Jy(a,o);break e;case 22:a.memoizedState===null&&wI(a,o);break e;default:wI(a,o)}}t=t.sibling}}function Qy(t){var e=t.alternate;e!==null&&(t.alternate=null,Qy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Id(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,io=!1;function jo(t,e,a){for(a=a.child;a!==null;)jy(t,e,a),a=a.sibling}function jy(t,e,a){if(_o&&typeof _o.onCommitFiberUnmount=="function")try{_o.onCommitFiberUnmount(kc,a)}catch{}switch(a.tag){case 26:Dt||Ea(a,e),jo(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Dt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Ea(a,e),Ic(a);var o=Qt,n=io;Jr(a.type)&&(Qt=a.stateNode,io=!1),jo(t,e,a),OM(a.stateNode,a.type,a.memoizedProps),Qt=o,io=n;break;case 5:Dt||Ea(a,e),Ic(a);case 6:if(a.tag===6&&Ic(a),o=Qt,n=io,Qt=null,jo(t,e,a),Qt=o,io=n,Qt!==null)if(io)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}else try{Qt.removeChild(a.stateNode),At=!0}catch(r){Ut(a,e,r)}break;case 18:Qt!==null&&(io?(t=Qt,LS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Zi(t)):LS(Qt,a.stateNode));break;case 4:o=Qt,n=io,Qt=a.stateNode.containerInfo,io=!0,jo(t,e,a),Qt=o,io=n;break;case 0:case 11:case 14:case 15:Yr(2,a,e),Dt||Yr(4,a,e),jo(t,e,a);break;case 1:Dt||(Ea(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Vy(a,e,o)),jo(t,e,a);break;case 21:jo(t,e,a);break;case 22:Dt=(o=Dt)||a.memoizedState!==null,jo(t,e,a),Dt=o;break;case 30:Ea(a,e),jo(t,e,a);break;case 7:Dt||Ea(a,e),jo(t,e,a);break;default:jo(t,e,a)}}function $y(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zi(t)}catch(a){Ut(e,e.return,a)}}}function eM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zi(t)}catch(a){Ut(e,e.return,a)}}function UT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gS),e;default:throw Error(oe(435,t.tag))}}function mf(t,e){var a=UT(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var n=ZT.bind(null,t,o);o.then(n,n)}})}function Ja(t,e,a){var o=e.deletions;if(o!==null)for(var n=0;n<o.length;n++){var r=o[n],s=t,i=e,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Jr(l.type)){Qt=l.stateNode,io=!1;break e}break;case 5:Qt=l.stateNode,io=!1;break e;case 3:case 4:Qt=l.stateNode.containerInfo,io=!0;break e}l=l.return}if(Qt===null)throw Error(oe(160));jy(s,i,r),Qt=null,io=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)tM(e,t,a),e=e.sibling}var en=null;function tM(t,e,a){var o=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var r=0;r<o.length;r++){var s=o[r];s.ref.impl=s.nextImpl}Ja(e,t,a),Qa(t),n&4&&(Yr(3,t,t.return),qc(3,t),Yr(5,t,t.return));break;case 1:Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),n&64&&Ma&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(r=en,Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),n&4)if(n=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(Ma)t.stateNode=AM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,n=r.ownerDocument||r;t:switch(e){case"title":o=n.getElementsByTagName("title")[0],(!o||o[zc]||o[Ra]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=n.createElement(e),n.head.insertBefore(o,n.querySelector("head > title"))),Ba(o,e,a),o[Ra]=t,_a(o),e=o;break e;case"link":if(r=VS("link","href",n).get(e+(a.href||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;case"meta":if(r=VS("meta","content",n).get(e+(a.content||""))){for(s=0;s<r.length;s++)if(o=r[s],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}o=n.createElement(e),Ba(o,e,a),n.head.appendChild(o);break;default:throw Error(oe(468,e))}o[Ra]=t,_a(o),e=o}t.stateNode=e}else Ma||XI(r,t.type,t.stateNode);else t.stateNode=HS(r,a,t.memoizedProps);else n!==a?(n===null?(e=o.stateNode,e===null||Dt||e.parentNode.removeChild(e)):n.count--,a===null?Ma||XI(r,t.type,t.stateNode):HS(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Tm(t,t.memoizedProps,o.memoizedProps);break;case 27:Ja(e,t,a),Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),o!==null&&n&4&&Tm(t,t.memoizedProps,o.memoizedProps);break;case 5:if(r=xn,xn=!1,Ja(e,t,a),xn=r,Qa(t),n&512&&(Dt||o===null||Ea(o,o.return)),t.flags&32){e=t.stateNode;try{Ni(e,""),At=!0}catch(f){Ut(t,t.return,f)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Tm(t,e,o!==null?o.memoizedProps:e)),n&1024&&(wm=!0);break;case 6:if(Ja(e,t,a),Qa(t),n&4){if(t.stateNode===null)throw Error(oe(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,At=!0}catch(f){Ut(t,t.return,f)}}break;case 3:if(At=!1,Uf=null,r=en,en=Dc(e.containerInfo),Ja(e,t,a),en=r,Qa(t),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(f){Ut(t,t.return,f)}wm&&(wm=!1,aM(t)),At=!1;break;case 4:n=xn,xn=Ma,o=CF(),r=en,en=Dc(t.stateNode.containerInfo),Ja(e,t,a),Qa(t),en=r,At&&sc&&(sd=!0),At=o,xn=n;break;case 12:Ja(e,t,a),Qa(t);break;case 31:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mf(t,e)));break;case 13:Ja(e,t,a),Qa(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wd=Co()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mf(t,e)));break;case 22:r=t.memoizedState!==null,s=o!==null&&o.memoizedState!==null;var i=Ma,l=Dt,c=xn;Ma=i||r,xn=c||r,Dt=l||s,Ja(e,t,a),Dt=l,xn=c,Ma=i,Qa(t),n&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||o===null||s||Ma||Dt||(e=s||Dt,a=Ma,o=Dt,Ma=r||Ma,Dt=e,Cr(t,2),Ma=a,Dt=o),!r&&xn||AI(t,r)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,mf(t,a))));break;case 19:Ja(e,t,a),Qa(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mf(t,e)));break;case 30:n&512&&(Dt||o===null||Ea(o,o.return)),n=CF(),r=sc,s=(a&335544064)===a,i=t.memoizedProps,sc=s&&ar(i.default,i.update)!=="none",Ja(e,t,a),Qa(t),s&&o!==null&&At&&(t.flags|=4),sc=r,At=n;break;case 21:break;case 7:n&512&&(Dt||o===null||Ea(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:Ja(e,t,a),Qa(t)}}function Qa(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(Gy(o)){a=o;break}o=o.return}o=null;for(var n=t.return;n!==null;){if(D0(n)){var r=n.stateNode;o===null?o=[r]:o.push(r)}if(R0(n))break;n=n.return}var s=o;if(a==null)throw Error(oe(160));switch(a.tag){case 27:var i=a.stateNode,l=Am(t);nd(t,l,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(Ni(c,""),a.flags&=-33);var f=Am(t);nd(t,f,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,u=Am(t);yI(t,u,h,s);break;default:throw Error(oe(161))}}catch(d){Ut(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;aM(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Yi=!0,e.reset(),Yi=!1),t=t.sibling}}function ui(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)oM(e,t),e=e.sibling;else Zy(e,!1)}function oM(t,e){var a=t.alternate;if(a===null)MI(t,!1);else switch(t.tag){case 3:if(TI=gn=!1,xS(),ui(e,t),!gn&&!sd){if(t=vn,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var n=t[o+1];EM(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),TI=!0}vn=null;break;case 5:ui(e,t);break;case 4:o=gn,gn=!1,ui(e,t),gn&&(sd=!0),gn=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?MI(t,!1):ui(e,t));break;case 30:o=gn,n=xS(),gn=!1,ui(e,t),gn&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=Jn(r,s),s=Jn(a.memoizedProps,s);var i=ar(r.default,r.update);i==="none"?e=!1:(r=a.memoizedState,a.memoizedState=null,a=t.child,co=0,e=L0(t,a,e,s,i,r,!0),co!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(Hi(t,t.memoizedProps.onUpdate),vn=n):n!==null&&(n.push.apply(n,vn),vn=n),gn=t.flags&32?!0:o;break;default:ui(e,t)}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ky(t,e.alternate,e),e=e.sibling}function Cr(t,e){for(t=t.child;t!==null;){var a=t,o=e;switch(a.tag){case 0:case 11:case 14:case 15:Yr(4,a,a.return),Cr(a,o);break;case 1:Ea(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Vy(a,a.return,n),Cr(a,o);break;case 27:o&2&&OM(a.stateNode,a.type,a.memoizedProps);case 5:Ea(a,a.return),a.tag!==5&&a.tag!==27||Ic(a),Cr(a,o);break;case 6:Ic(a);break;case 26:Ea(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||Dt||n.parentNode.removeChild(n),Cr(a,o);break;case 22:a.memoizedState===null&&Cr(a,o);break;case 30:Ea(a,a.return),Cr(a,o);break;case 7:Ea(a,a.return);default:Cr(a,o)}t=t.sibling}}function $o(t,e,a){for(a=e.subtreeFlags&8772?a:a&-2,e=e.child;e!==null;){var o=e.alternate,n=t,r=e,s=r.flags,i=(a&1)!==0;switch(r.tag){case 0:case 11:case 15:$o(n,r,a),qc(4,r);break;case 1:if($o(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(f){Ut(o,o.return,f)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Jv(c[n],l)}catch(f){Ut(o,o.return,f)}}i&&s&64&&Hy(r),Sn(r,r.return);break;case 27:a&2&&qy(r);case 5:r.tag!==5&&r.tag!==27||mS(r),$o(n,r,a),i&&o===null&&s&4&&vI(r),Sn(r,r.return);break;case 6:mS(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||Ma||XI(Dc(l.ownerDocument),r.type,l),$o(n,r,a),i&&o===null&&s&4&&vI(r),Sn(r,r.return);break;case 12:$o(n,r,a);break;case 31:$o(n,r,a),i&&s&4&&$y(n,r);break;case 13:$o(n,r,a),i&&s&4&&eM(n,r);break;case 22:r.memoizedState===null&&$o(n,r,a),Sn(r,r.return);break;case 30:$o(n,r,a),Sn(r,r.return);break;case 7:Sn(r,r.return);default:$o(n,r,a)}e=e.sibling}}function P0(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vc(a))}function B0(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vc(t))}function zo(t,e,a,o){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)nM(t,e,a,o),e=e.sibling;else n&&Yy(e)}function nM(t,e,a,o){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Df(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:zo(t,e,a,o),r&2048&&qc(9,e);break;case 1:zo(t,e,a,o);break;case 3:zo(t,e,a,o),n&&TI&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Vc(r)));break;case 12:if(r&2048){zo(t,e,a,o),r=e.stateNode;try{var s=e.memoizedProps,i=s.id,l=s.onPostCommit;typeof l=="function"&&l(i,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Ut(e,e.return,c)}}else zo(t,e,a,o);break;case 31:zo(t,e,a,o);break;case 13:zo(t,e,a,o);break;case 23:break;case 22:s=e.stateNode,i=e.alternate,e.memoizedState!==null?(n&&i!==null&&i.memoizedState===null&&Df(i),s._visibility&2?zo(t,e,a,o):xc(t,e)):(n&&i!==null&&i.memoizedState!==null&&Df(e),s._visibility&2?zo(t,e,a,o):(s._visibility|=2,di(t,e,a,o,(e.subtreeFlags&10256)!==0||!1))),r&2048&&P0(i,e);break;case 24:zo(t,e,a,o),r&2048&&B0(e.alternate,e);break;case 30:n&&(r=e.alternate,r!==null&&(An(r.child,!0),An(e.child,!0))),zo(t,e,a,o);break;default:zo(t,e,a,o)}}function di(t,e,a,o,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,i=a,l=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:di(r,s,i,l,n),qc(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?di(r,s,i,l,n):xc(r,s):(f._visibility|=2,di(r,s,i,l,n)),n&&c&2048&&P0(s.alternate,s);break;case 24:di(r,s,i,l,n),n&&c&2048&&B0(s.alternate,s);break;default:di(r,s,i,l,n)}e=e.sibling}}function xc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,n=o.flags;switch(o.tag){case 22:xc(a,o),n&2048&&P0(o.alternate,o);break;case 24:xc(a,o),n&2048&&B0(o.alternate,o);break;default:xc(a,o)}e=e.sibling}}var Fs=8192;function Is(t,e,a){if(t.subtreeFlags&Fs)for(t=t.child;t!==null;)rM(t,e,a),t=t.sibling}function rM(t,e,a){switch(t.tag){case 26:Is(t,e,a),t.flags&Fs&&(t.memoizedState!==null?zA(a,en,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&qS(a,t)));break;case 5:Is(t,e,a),t.flags&Fs&&(t=t.stateNode,(e&335544128)===e&&qS(a,t));break;case 3:case 4:var o=en;en=Dc(t.stateNode.containerInfo),Is(t,e,a),en=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Fs,Fs=16777216,Is(t,e,a),Fs=o):Is(t,e,a));break;case 30:if(t.flags&Fs&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var n=t.stateNode;n.paired=null,yo===null&&(yo=new Map),yo.set(o,n)}Is(t,e,a);break;default:Is(t,e,a)}}function sM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function $l(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,lM(o,t)}sM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iM(t),t=t.sibling}function iM(t){switch(t.tag){case 0:case 11:case 15:$l(t),t.flags&2048&&Yr(9,t,t.return);break;case 3:$l(t);break;case 12:$l(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Lf(t)):$l(t);break;default:$l(t)}}function Lf(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];Ca=o,lM(o,t)}sM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yr(8,e,e.return),Lf(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Lf(e));break;default:Lf(e)}t=t.sibling}}function lM(t,e){for(;Ca!==null;){var a=Ca;switch(a.tag){case 0:case 11:case 15:Yr(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Vc(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ca=o;else e:for(a=t;Ca!==null;){o=Ca;var n=o.sibling,r=o.return;if(Qy(o),o===a){Ca=null;break e}if(n!==null){n.return=r,Ca=n;break e}Ca=r}}}var kT={getCacheForType:function(t){var e=Da(ca),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Da(ca).controller.signal}},NT=typeof WeakMap=="function"?WeakMap:Map,Et=0,zt=null,Ft=null,St=0,Pt=0,Fo=null,Rr=!1,$i=!1,U0=!1,er=0,aa=0,Zr=0,bs=0,id=0,Mo=0,zi=0,gc=null,lo=null,EI=!1,wd=0,cM=0,ld=1/0,cd=null,zr=null,$t=0,an=null,Ps=null,Tn=0,RI=0,DI=null,uM=null,Li=null,Pi=null,Bi=null,Fc=0,Pf=null;function To(){return Et&2&&St!==0?St&-St:ot.T!==null?N0():hv()}function fM(){if(Mo===0)if(!(St&536870912)||It){var t=tf;tf<<=1,!(tf&3932160)&&(tf=262144),Mo=t}else Mo=536870912;return t=Ua.current,t!==null&&(t.flags|=32),Mo}function Hi(t,e){if(e!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=DM(Jn(t.memoizedProps,a))),Pi===null&&(Pi=[]),Pi.push(e.bind(null,o))}}function fo(t,e,a){(t===zt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(Vi(t,0),Dr(t,St,Mo,!1)),Oc(t,a),(!(Et&2)||t!==zt)&&(t===zt&&(!(Et&2)&&(bs|=a),aa===4&&Dr(t,St,Mo,!1)),En(t))}function dM(t,e,a){if(Et&6)throw Error(oe(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Nc(t,e),n=o?HT(t,e):Em(t,e,!0),r=o;do{if(n===0){$i&&!o&&Dr(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!OT(a)){n=Em(t,e,!1),r=!1;continue}if(n===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var i=t;n=gc;var l=i.current.memoizedState.isDehydrated;if(l&&(Vi(i,s).flags|=256),s=Em(i,s,!1),s!==2&&s!==6){if(U0&&!l){i.errorRecoveryDisabledLanes|=r,bs|=r,n=4;break e}r=lo,lo=n,r!==null&&(lo===null?lo=r:lo.push.apply(lo,r))}n=s}if(r=!1,n!==2)continue}}if(n===1){Vi(t,0),Dr(t,e,0,!0);break}e:{switch(o=t,r=n,r){case 0:case 1:throw Error(oe(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Dr(o,e,Mo,!Rr);break e;case 2:lo=null;break;case 3:case 5:break;default:throw Error(oe(329))}if((e&62914560)===e&&(n=wd+300-Co(),10<n)){if(Dr(o,e,Mo,!Rr),md(o,0,!0)!==0)break e;Tn=e,o.timeoutHandle=z0(FS.bind(null,o,a,lo,cd,EI,e,Mo,bs,zi,Rr,r,"Throttled",-0,0),n);break e}FS(o,a,lo,cd,EI,e,Mo,bs,zi,Rr,r,null,-0,0)}}break}while(!0);En(t)}function FS(t,e,a,o,n,r,s,i,l,c,f,h,u,d){t.timeoutHandle=-1;var I=e.subtreeFlags,M=(r&335544064)===r;if(h=null,(M||I&8192||(I&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mn},yo=null,rM(e,r,h),M&&(I=h,M=t.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(I.count++,I.waitingForViewTransition=!0,I=Lc.bind(I),M.finished.then(I,I))),I=(r&62914560)===r?wd-Co():(r&4194048)===r?cM-Co():0,I=HA(h,I),I!==null)){Tn=r,t.cancelPendingCommit=I(vS.bind(null,t,e,r,a,o,n,s,i,l,c,f,h,null,u,d)),Dr(t,r,s,!c);return}vS(t,e,r,a,o,n,s,i,l,c,f,h)}function OT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ao(r(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e,a,o){e=cv(t,e),e&=~id,e&=~bs,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var n=e;0<n;){var r=31-bo(n),s=1<<r;o[r]=-1,n&=~s}a!==0&&fv(t,a,e)}function Ed(){return Et&6?!0:(Wc(0,!1),!1)}function k0(){if(Ft!==null){if(Pt===0)var t=Ft.return;else t=Ft,Xn=Os=null,S0(t),Ei=null,bc=0,t=Ft;for(;t!==null;)zy(t.alternate,t),t=t.return;Ft=null}}function Vi(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,iA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tn=0,k0(),zt=t,Ft=a=Yn(t.current,null),St=e,Pt=0,Fo=null,Rr=!1,$i=Nc(t,e),U0=!1,zi=Mo=id=bs=Zr=aa=0,lo=gc=null,EI=!1,er=cv(t,e),Sd(),a}function pM(t,e){ft=null,ot.H=td,e===Qi||e===Md?(e=XF(),Pt=3):e===d0?(e=XF(),Pt=4):Pt=e===A0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Fo=e,Ft===null&&(aa=1,ad(t,Wo(e,t.current)))}function hM(){var t=Ua.current;return t===null?!0:(St&4194048)===St?za===null:(St&62914560)===St||St&536870912?t===za:!1}function mM(){var t=ot.H;return ot.H=td,t===null?td:t}function IM(){var t=ot.A;return ot.A=kT,t}function ud(){aa=4,Rr||(St&4194048)!==St&&Ua.current!==null||($i=!0),!(Zr&134217727)&&!(bs&134217727)||zt===null||Dr(zt,St,Mo,!1)}function Em(t,e,a){var o=Et;Et|=2;var n=mM(),r=IM();(zt!==t||St!==e)&&(cd=null,Vi(t,e)),e=!1;var s=aa;e:do try{if(Pt!==0&&Ft!==null){var i=Ft,l=Fo;switch(Pt){case 8:k0(),s=6;break e;case 3:case 2:case 9:case 6:Ua.current===null&&(e=!0);var c=Pt;if(Pt=0,Fo=null,_i(t,i,l,c),a&&$i){s=0;break e}break;default:c=Pt,Pt=0,Fo=null,_i(t,i,l,c)}}zT(),s=aa;break}catch(f){pM(t,f)}while(!0);return e&&t.shellSuspendCounter++,Xn=Os=null,Et=o,ot.H=n,ot.A=r,Ft===null&&(zt=null,St=0,Sd()),s}function zT(){for(;Ft!==null;)xM(Ft)}function HT(t,e){var a=Et;Et|=2;var o=mM(),n=IM();zt!==t||St!==e?(cd=null,ld=Co()+500,Vi(t,e)):$i=Nc(t,e);e:do try{if(Pt!==0&&Ft!==null){e=Ft;var r=Fo;t:switch(Pt){case 1:Pt=0,Fo=null,_i(t,e,r,1);break;case 2:case 9:if(WF(r)){Pt=0,Fo=null,SS(e);break}e=function(){Pt!==2&&Pt!==9||zt!==t||(Pt=7),En(t)},r.then(e,e);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:WF(r)?(Pt=0,Fo=null,SS(e)):(Pt=0,Fo=null,_i(t,e,r,7));break;case 5:var s=null;switch(Ft.tag){case 26:s=Ft.memoizedState;case 5:case 27:var i=Ft;if(s?VM(s):i.stateNode.complete){Pt=0,Fo=null;var l=i.sibling;if(l!==null)Ft=l;else{var c=i.return;c!==null?(Ft=c,Rd(c)):Ft=null}break t}}Pt=0,Fo=null,_i(t,e,r,5);break;case 6:Pt=0,Fo=null,_i(t,e,r,6);break;case 8:k0(),aa=6;break e;default:throw Error(oe(462))}}VT();break}catch(f){pM(t,f)}while(!0);return Xn=Os=null,ot.H=o,ot.A=n,Et=a,Ft!==null?0:(zt=null,St=0,Sd(),aa)}function VT(){for(;Ft!==null&&!rb();)xM(Ft)}function xM(t){var e=Oy(t.alternate,t,er);t.memoizedProps=t.pendingProps,e===null?Rd(t):Ft=e}function SS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=lS(a,e,e.pendingProps,e.type,void 0,St);break;case 11:e=lS(a,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:S0(e);var o=e;o===ba&&(It?(Zf(o),o.tag===5&&o.stateNode!=null&&(Xt=o.stateNode)):(Zf(o),It=!0));default:zy(a,e),e=Ft=Hv(e,er),e=Oy(a,e,er)}t.memoizedProps=t.pendingProps,e===null?Rd(t):Ft=e}function _i(t,e,a,o){Xn=Os=null,S0(e),Ei=null,bc=0;var n=e.return;try{if(wT(t,n,e,a,St)){aa=1,ad(t,Wo(a,t.current)),Ft=null;return}}catch(r){if(n!==null)throw Ft=n,r;aa=1,ad(t,Wo(a,t.current)),Ft=null;return}e.flags&32768?(It||o===1?t=!0:$i||St&536870912?t=!1:(Rr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Ua.current,o!==null&&o.tag===13&&(o.flags|=16384))),gM(e,t)):Rd(e)}function Rd(t){var e=t;do{if(e.flags&32768){gM(e,Rr);return}t=e.return;var a=LT(e.alternate,e,er);if(a!==null){Ft=a;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);aa===0&&(aa=5)}function gM(t,e){do{var a=PT(t.alternate,t);if(a!==null){a.flags&=32767,Ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Ft=t;return}Ft=t=a}while(t!==null);aa=6,Ft=null}function vS(t,e,a,o,n,r,s,i,l,c,f,h){t.cancelPendingCommit=null;do Dd();while($t!==0);if(Et&6)throw Error(oe(327));if(e!==null){if(e===t.current)throw Error(oe(177));t===zt&&(Ft=zt=null,St=0),Ps=e,an=t,Tn=a,DI=n,uM=o,GT(t,e,a,s,i,l,h)}}function GT(t,e,a,o,n,r,s){var i=e.lanes|e.childLanes;if(RI=i,i|=s0,mb(t,a,i,o,n,r),Pi=null,(a&335544064)===a?(Bi=xT(t),o=10262):(Bi=null,o=10256),e.subtreeFlags&o||e.flags&o?(t.callbackNode=null,t.callbackPriority=0,KT(Gf,function(){return UI(),null})):(t.callbackNode=null,t.callbackPriority=0),rd=!1,o=(e.flags&13878)!==0,e.subtreeFlags&13878||o){o=ot.T,ot.T=null,n=Rt.p,Rt.p=2,r=Et,Et|=4;try{BT(t,e,a)}finally{Et=r,Rt.p=n,ot.T=o}}$t=1,rd?Li=pA(s,t.containerInfo,Bi,LI,PI,WT,BI,UI,qT,null,null):(LI(),PI(),BI())}function qT(t){if($t!==0){var e=an.onRecoverableError;e(t,{componentStack:null})}}function WT(){$t===3&&($t=0,oM(Ps,an),$t=4)}function LI(){if($t===1){$t=0;var t=an,e=Ps,a=Tn,o=(e.flags&13878)!==0;if(e.subtreeFlags&13878||o){o=ot.T,ot.T=null;var n=Rt.p;Rt.p=2;var r=Et;Et|=4;try{sc=sd=!1,tM(e,t,a),a=zI;var s=Lv(t.containerInfo),i=a.focusedElem,l=a.selectionRange;if(s!==i&&i&&i.ownerDocument&&Dv(i.ownerDocument.documentElement,i)){if(l!==null&&r0(i)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(f,i.value.length);else{var h=i.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var d=u.getSelection(),I=i.textContent.length,M=Math.min(l.start,I),m=l.end===void 0?M:Math.min(l.end,I);!d.extend&&M>m&&(s=m,m=M,M=s);var p=kF(i,M),x=kF(i,m);if(p&&x&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==x.node||d.focusOffset!==x.offset)){var v=h.createRange();v.setStart(p.node,p.offset),d.removeAllRanges(),M>m?(d.addRange(v),d.extend(x.node,x.offset)):(v.setEnd(x.node,x.offset),d.addRange(v))}}}}for(h=[],d=i;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var F=h[i];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}Yi=!!OI,zI=OI=null}finally{Et=r,Rt.p=n,ot.T=o}}t.current=e,$t=2}}function PI(){if($t===2){$t=0;var t=an,e=Ps,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=ot.T,ot.T=null;var o=Rt.p;Rt.p=2;var n=Et;Et|=4;try{Ky(t,e.alternate,e)}finally{Et=n,Rt.p=o,ot.T=a}}$t=3}}function BI(){if($t===4||$t===3){$t=0;var t=Li;Li=null,sb();var e=an,a=Ps,o=Tn,n=uM,r=(o&335544064)===o?10262:10256;if(a.subtreeFlags&r||a.flags&r?$t=5:($t=0,Ps=an=null,FM(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(zr=null),$I(o),a=a.stateNode,_o&&typeof _o.onCommitFiberRoot=="function")try{_o.onCommitFiberRoot(kc,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=ot.T,r=Rt.p,Rt.p=2,ot.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];s(l.value,{componentStack:l.stack})}}finally{ot.T=a,Rt.p=r}}if(n=Pi,s=Bi,Bi=null,n!==null&&(Pi=null,s===null&&(s=[]),t!==null))for(l=0;l<n.length;l++)a=(0,n[l])(s),a!==void 0&&t.finished.finally(a);Tn&3&&Dd(),En(e),r=e.pendingLanes,o&261930&&r&42?e===Pf?Fc++:(Fc=0,Pf=e):(Fc=0,Pf=null),Wc(0,!1)}}function FM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Vc(e)))}function Dd(){return Li!==null&&(Li.skipTransition(),Li=null),LI(),PI(),BI(),UI()}function UI(){if($t!==5)return!1;var t=an,e=RI;RI=0;var a=$I(Tn),o=ot.T,n=Rt.p;try{Rt.p=32>a?32:a,ot.T=null,a=DI,DI=null;var r=an,s=Tn;if($t=0,Ps=an=null,Tn=0,Et&6)throw Error(oe(331));var i=Et;if(Et|=4,iM(r.current),nM(r,r.current,s,a),Et=i,Wc(0,!1),_o&&typeof _o.onPostCommitFiberRoot=="function")try{_o.onPostCommitFiberRoot(kc,r)}catch{}return!0}finally{Rt.p=n,ot.T=o,FM(t,e)}}function yS(t,e,a){e=Wo(a,e),e=mI(t.stateNode,e,2),t=kr(t,e,2),t!==null&&(Oc(t,2),En(t))}function Ut(t,e,a){if(t.tag===3)yS(t,t,a);else for(;e!==null;){if(e.tag===3){yS(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(zr===null||!zr.has(o))){t=Wo(a,t),a=Py(2),o=kr(e,a,2),o!==null&&(By(a,o,e,t),Oc(o,2),En(o));break}}e=e.return}}function Rm(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new NT;var n=new Set;o.set(e,n)}else n=o.get(e),n===void 0&&(n=new Set,o.set(e,n));n.has(a)||(U0=!0,n.add(a),t=XT.bind(null,t,e,a),e.then(t,t))}function XT(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(St&a)===a&&(aa===4||aa===3&&(St&62914560)===St&&300>Co()-wd?Et&2?id|=a:Vi(t,0):id|=a,zi===St&&(zi=0)),En(t)}function SM(t,e){e===0&&(e=uv()),t=Ns(t,e),t!==null&&(Oc(t,e),En(t))}function YT(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),SM(t,a)}function ZT(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(oe(314))}o!==null&&o.delete(e),SM(t,a)}function KT(t,e){return QI(t,e)}var Gi=null,pi=null,kI=!1,fd=!1,Dm=!1,Lr=0;function En(t){t!==pi&&t.next===null&&(pi===null?Gi=pi=t:pi=pi.next=t),fd=!0,kI||(kI=!0,QT())}function Wc(t,e){if(!Dm&&fd){Dm=!0;do for(var a=!1,o=Gi;o!==null;){if(!e)if(t!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var s=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-bo(42|t)+1)-1,r&=n&~(s&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,MS(o,r))}else r=St,r=md(o,o===zt?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),!(r&3)||Nc(o,r)||(a=!0,MS(o,r));o=o.next}while(a);Dm=!1}}function JT(){vM()}function vM(){fd=kI=!1;var t=0;Lr!==0&&sA()&&(t=Lr);for(var e=Co(),a=null,o=Gi;o!==null;){var n=o.next,r=yM(o,e);r===0?(o.next=null,a===null?Gi=n:a.next=n,n===null&&(pi=a)):(a=o,(t!==0||r&3)&&(fd=!0)),o=n}$t!==0&&$t!==5||Wc(t,!1),Lr!==0&&(Lr=0)}function yM(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,n=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-bo(r),i=1<<s,l=n[s];l===-1?(!(i&a)||i&o)&&(n[s]=hb(i,e)):l<=e&&(t.expiredLanes|=i),r&=~i}if(e=zt,a=St,a=md(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&um(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Nc(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&um(o),$I(a)){case 2:case 8:a=iv;break;case 32:a=Gf;break;case 268435456:a=lv;break;default:a=Gf}return o=MM.bind(null,t),a=QI(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&um(o),t.callbackPriority=2,t.callbackNode=null,2}function MM(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dd()&&t.callbackNode!==a)return null;var o=St;return o=md(t,t===zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(dM(t,o,e),yM(t,Co()),t.callbackNode!=null&&t.callbackNode===a?MM.bind(null,t):null)}function MS(t,e){if(Dd())return null;dM(t,e,!0)}function QT(){lA(function(){Et&6?QI(sv,JT):vM()})}function N0(){if(Lr===0){var t=Es;t===0&&(t=ef,ef<<=1,!(ef&261888)&&(ef=256)),Lr=t}return Lr}function CS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yf(t)}function jT(t,e,a,o,n){if(e==="submit"&&a&&a.stateNode===n){var r=CS((n[ho]||null).action),s=o.submitter;s&&(e=(e=s[ho]||null)?CS(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var i=new xd("action","action",null,o,n);t.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Lr!==0){var l=new FormData(n,s);pI(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(i.preventDefault(),l=new FormData(n,s),pI(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(If=0;If<aI.length;If++)xf=aI[If],_S=xf.toLowerCase(),bS=xf[0].toUpperCase()+xf.slice(1),on(_S,"on"+bS);var xf,_S,bS,If;on(Bv,"onAnimationEnd");on(Uv,"onAnimationIteration");on(kv,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(cT,"onTransitionRun");on(uT,"onTransitionStart");on(fT,"onTransitionCancel");on(Nv,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wc));function CM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],n=o.event;o=o.listeners;e:{var r=void 0;if(e)for(var s=o.length-1;0<=s;s--){var i=o[s],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(f){Wf(f)}n.currentTarget=null,r=l}else for(s=0;s<o.length;s++){if(i=o[s],l=i.instance,c=i.currentTarget,i=i.listener,l!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=c;try{r(n)}catch(f){Wf(f)}n.currentTarget=null,r=l}}}}function gt(t,e){var a=e[SF];a===void 0&&(a=e[SF]=new Set);var o=t+"__bubble";a.has(o)||(_M(e,t,2,!1),a.add(o))}function Lm(t,e,a){var o=0;e&&(o|=4),_M(a,t,o,e)}var gf="_reactListening"+Math.random().toString(36).slice(2);function O0(t){if(!t[gf]){t[gf]=!0,Iv.forEach(function(a){a!=="selectionchange"&&($T.has(a)||Lm(a,!1,t),Lm(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gf]||(e[gf]=!0,Lm("selectionchange",!1,e))}}function _M(t,e,a,o){switch(KM(e)){case 2:var n=WA;break;case 8:n=XA;break;default:n=X0}a=n.bind(null,e,a,t),n=void 0,!jm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),o?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Pm(t,e,a,o,n){var r=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===n)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;i!==null;){if(s=Ss(i),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){o=r=s;continue e}i=i.parentNode}}o=o.return}Cv(function(){var c=r,f=t0(a),h=[];e:{var u=Ov.get(t);if(u!==void 0){var d=xd,I=t;switch(t){case"keypress":if(Cf(a)===0)break e;case"keydown":case"keyup":d=Ob;break;case"focusin":I="focus",d=Im;break;case"focusout":I="blur",d=Im;break;case"beforeblur":case"afterblur":d=Im;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=AF;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=qb;break;case Bv:case Uv:case kv:d=Eb;break;case Nv:d=Xb;break;case"scroll":case"scrollend":d=_b;break;case"wheel":d=Zb;break;case"copy":case"cut":case"paste":d=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=EF;break;case"submit":d=Vb;break;case"toggle":case"beforetoggle":d=Jb}var M=(e&4)!==0,m=!M&&(t==="scroll"||t==="scrollend"),p=M?u!==null?u+"Capture":null:u;M=[];for(var x=c,v;x!==null;){var F=x;if(v=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||v===null||p===null||(F=vc(x,p),F!=null&&M.push(Ec(x,F,v))),m)break;x=x.return}0<M.length&&(u=new d(u,I,null,a,f),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",d&&a!==Qm&&(I=a.relatedTarget||a.fromElement)&&(Ss(I)||I[Ki]))break e;(u||d)&&(I=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=a.relatedTarget||a.toElement,u=c,d=d?Ss(d):null,d!==null&&(m=Uc(d),M=d.tag,d!==m||M!==5&&M!==27&&M!==6)&&(d=null)):(u=null,d=c),u!==d&&(M=AF,F="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=EF,F="onPointerLeave",p="onPointerEnter",x="pointer"),m=u==null?I:nc(u),v=d==null?I:nc(d),I=new M(F,x+"leave",u,a,f),I.target=m,I.relatedTarget=v,F=null,Ss(f)===c&&(M=new M(p,x+"enter",d,a,f),M.target=v,M.relatedTarget=m,F=M),m=F,M=u&&d?Om(u,d,eA):null,u!==null&&TS(h,I,u,M,!1),d!==null&&m!==null&&TS(h,m,d,M,!0)))}e:{if(u=c?nc(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var C=PF;else if(LF(u))if(Ev)C=sT;else{C=nT;var _=oT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&e0(c.elementType)&&(C=PF):C=rT;if(C&&(C=C(t,c))){wv(h,C,a,f);break e}_&&_(t,u,c)}switch(_=c?nc(c):window,t){case"focusin":(LF(_)||_.contentEditable==="true")&&(Fi=_,eI=c,cc=null);break;case"focusout":cc=eI=Fi=null;break;case"mousedown":tI=!0;break;case"contextmenu":case"mouseup":case"dragend":tI=!1,NF(h,a,f);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":NF(h,a,f)}var w;if(n0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else gi?Tv(t,a)&&(S="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(S="onCompositionStart");S&&(bv&&a.locale!=="ko"&&(gi||S!=="onCompositionStart"?S==="onCompositionEnd"&&gi&&(w=_v()):(wr=f,a0="value"in wr?wr.value:wr.textContent,gi=!0)),_=dd(c,S),0<_.length&&(S=new wF(S,t,null,a,f),h.push({event:S,listeners:_}),w?S.data=w:(w=Av(a),w!==null&&(S.data=w)))),(w=jb?$b(t,a):eT(t,a))&&(S=dd(c,"onBeforeInput"),0<S.length&&(_=new wF("onBeforeInput","beforeinput",null,a,f),h.push({event:_,listeners:S}),_.data=w)),jT(h,t,c,a,f)}CM(h,e)})}function Ec(t,e,a){return{instance:t,listener:e,currentTarget:a}}function dd(t,e){for(var a=e+"Capture",o=[];t!==null;){var n=t,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=vc(t,a),n!=null&&o.unshift(Ec(t,n,r)),n=vc(t,e),n!=null&&o.push(Ec(t,n,r))),t.tag===3)return o;t=t.return}return[]}function eA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function TS(t,e,a,o,n){for(var r=e._reactName,s=[];a!==null&&a!==o;){var i=a,l=i.alternate,c=i.stateNode;if(i=i.tag,l!==null&&l===o)break;i!==5&&i!==26&&i!==27||c===null||(l=c,n?(c=vc(a,r),c!=null&&s.unshift(Ec(a,c,l))):n||(c=vc(a,r),c!=null&&s.push(Ec(a,c,l)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var tA=/\r\n?/g,aA=/\u0000|\uFFFD/g;function AS(t){return(typeof t=="string"?t:""+t).replace(tA,`
`).replace(aA,"")}function bM(t,e){return e=AS(e),AS(t)===e}function Bt(t,e,a,o,n,r){switch(a){case"children":if(typeof o=="string")e==="body"||e==="textarea"&&o===""||Ni(t,o);else if(typeof o=="number"||typeof o=="bigint")e!=="body"&&Ni(t,""+o);else return;break;case"className":of(t,"class",o);break;case"tabIndex":of(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":of(t,a,o);break;case"style":Mv(t,o,r);return;case"data":if(e!=="object"){of(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yf(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Bt(t,e,"name",n.name,n,null),Bt(t,e,"formEncType",n.formEncType,n,null),Bt(t,e,"formMethod",n.formMethod,n,null),Bt(t,e,"formTarget",n.formTarget,n,null)):(Bt(t,e,"encType",n.encType,n,null),Bt(t,e,"method",n.method,n,null),Bt(t,e,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yf(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Mn);return;case"onScroll":o!=null&&gt("scroll",t);return;case"onScrollEnd":o!=null&&gt("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(oe(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(oe(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=yf(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),vf(t,"popover",o);break;case"xlinkActuate":Gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":vf(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Mb.get(a)||a,vf(t,a,o);else return}At=!0}function NI(t,e,a,o,n,r){switch(a){case"style":Mv(t,o,r);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(oe(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(oe(60));r?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")Ni(t,o);else if(typeof o=="number"||typeof o=="bigint")Ni(t,""+o);else return;break;case"onScroll":o!=null&&gt("scroll",t);return;case"onScrollEnd":o!=null&&gt("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Mn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!xv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),r=a.slice(2,n?a.length-7:void 0),e=t[ho]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(r,e,n),typeof o=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,o,n);break e}At=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):vf(t,a,o)}return}At=!0}function Ba(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(oe(137,e));default:Bt(t,e,r,s,a,null)}}n&&Bt(t,e,"srcSet",a.srcSet,a,null),o&&Bt(t,e,"src",a.src,a,null);return;case"input":gt("invalid",t);var i=r=s=n=null,l=null,c=null;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"name":n=f;break;case"type":s=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":r=f;break;case"defaultValue":i=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(oe(137,e));break;default:Bt(t,e,o,f,a,null)}}Sv(t,r,i,l,c,s,n,!1);return;case"select":gt("invalid",t),o=s=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:Bt(t,e,n,i,a,null)}e=r,a=s,t.multiple=!!o,e!=null?Ti(t,!!o,e,!1):a!=null&&Ti(t,!!o,a,!0);return;case"textarea":gt("invalid",t),r=n=o=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(oe(91));break;default:Bt(t,e,s,i,a,null)}yv(t,o,n,r);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,e,l,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<wc.length;o++)gt(wc[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(oe(137,e));default:Bt(t,e,c,o,a,null)}return;default:if(e0(e)){for(f in a)a.hasOwnProperty(f)&&(o=a[f],o!==void 0&&NI(t,e,f,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Bt(t,e,i,o,a,null))}var oA={};function nA(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,s=null,i=null,l=null,c=null,f=null;for(d in a){var h=a[d];if(a.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:o.hasOwnProperty(d)||Bt(t,e,d,null,o,h)}}for(var u in o){var d=o[u];if(h=a[u],o.hasOwnProperty(u)&&(d!=null||h!=null))switch(u){case"type":d!==h&&(At=!0),r=d;break;case"name":d!==h&&(At=!0),n=d;break;case"checked":d!==h&&(At=!0),c=d;break;case"defaultChecked":d!==h&&(At=!0),f=d;break;case"value":d!==h&&(At=!0),s=d;break;case"defaultValue":d!==h&&(At=!0),i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(oe(137,e));break;default:d!==h&&Bt(t,e,u,d,o,h)}}Jm(t,s,i,l,c,f,r,n);return;case"select":d=s=i=u=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:o.hasOwnProperty(r)||Bt(t,e,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":r!==l&&(At=!0),u=r;break;case"defaultValue":r!==l&&(At=!0),i=r;break;case"multiple":r!==l&&(At=!0),s=r;default:r!==l&&Bt(t,e,n,r,o,l)}e=i,a=s,o=d,u!=null?Ti(t,!!a,u,!1):!!o!=!!a&&(e!=null?Ti(t,!!a,e,!0):Ti(t,!!a,a?[]:"",!1));return;case"textarea":d=u=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Bt(t,e,i,null,o,n)}for(s in o)if(n=o[s],r=a[s],o.hasOwnProperty(s)&&(n!=null||r!=null))switch(s){case"value":n!==r&&(At=!0),u=n;break;case"defaultValue":n!==r&&(At=!0),d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(oe(91));break;default:n!==r&&Bt(t,e,s,n,o,r)}vv(t,u,d);return;case"option":for(var I in a)if(u=a[I],a.hasOwnProperty(I)&&u!=null&&!o.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:Bt(t,e,I,null,o,u)}for(l in o)if(u=o[l],d=a[l],o.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":u!==d&&(At=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Bt(t,e,l,u,o,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in a)u=a[M],a.hasOwnProperty(M)&&u!=null&&!o.hasOwnProperty(M)&&Bt(t,e,M,null,o,u);for(c in o)if(u=o[c],d=a[c],o.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(oe(137,e));break;default:Bt(t,e,c,u,o,d)}return;default:if(e0(e)){for(var m in a)u=a[m],a.hasOwnProperty(m)&&u!==void 0&&!o.hasOwnProperty(m)&&NI(t,e,m,void 0,o,u);for(f in o)u=o[f],d=a[f],!o.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||NI(t,e,f,u,o,d);return}}for(var p in a)u=a[p],a.hasOwnProperty(p)&&u!=null&&!o.hasOwnProperty(p)&&Bt(t,e,p,null,o,u);for(h in o)u=o[h],d=a[h],!o.hasOwnProperty(h)||u===d||u==null&&d==null||Bt(t,e,h,u,o,d)}function wS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,s=n.initiatorType,i=n.duration;if(r&&i&&wS(s)){for(s=0,i=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],c=l.startTime;if(c>i)break;var f=l.transferSize,h=l.initiatorType;f&&wS(h)&&(l=l.responseEnd,s+=f*(l<i?1:(i-c)/(l-c)))}if(--o,e+=8*(r+s)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var OI=null,zI=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function ES(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function AM(t,e,a,o){return a=Rc(a).createElement(t),a[Ra]=o,a[ho]=e,Ba(a,t,e),_a(a),a}function HI(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bm=null;function sA(){var t=window.event;return t&&t.type==="popstate"?t===Bm?!1:(Bm=t,!0):(Bm=null,!1)}var z0=typeof setTimeout=="function"?setTimeout:void 0,iA=typeof clearTimeout=="function"?clearTimeout:void 0,RS=typeof Promise=="function"?Promise:void 0,DS=typeof requestAnimationFrame=="function"?requestAnimationFrame:z0,lA=typeof queueMicrotask=="function"?queueMicrotask:typeof RS<"u"?function(t){return RS.resolve(null).then(t).catch(cA)}:z0;function cA(t){setTimeout(function(){throw t})}function Jr(t){return t==="head"}function LS(t,e){var a=e,o=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(n),Zi(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")km(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,km(a);for(var r=a.firstChild;r;){var s=r.nextSibling,i=r.nodeName;r[zc]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&km(t.ownerDocument.body);a=n}while(a);Zi(e)}function PS(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function wM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var o=1;else for(var n=o=0;n<e.length;n++){var r=e[n];0<r.width&&0<r.height&&o++}o===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function EM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function RM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function VI(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return RM(e,a,t)}function uA(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return RM(e,a,t)}function fA(t){return t.documentElement.clientHeight}function dA(t){this.addEventListener("load",t),this.addEventListener("error",t)}function pA(t,e,a,o,n,r,s,i,l){var c=e.nodeType===9?e:e.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,I=c.fonts.status;o();var M=[];if(I==="loaded"&&(fA(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),I=M.length,t!==null)for(var m=t.suspenseyImages,p=0,x=0;x<m.length;x++){var v=m[x];if(!v.complete){var F=v.getBoundingClientRect();if(0<F.bottom&&0<F.right&&F.top<u.innerHeight&&F.left<u.innerWidth){if(p+=GM(v),p>kf){M.length=I;break}v=new Promise(dA.bind(v)),M.push(v)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(C){return setTimeout(C,500)})]).then(n,n),(d?Promise.allSettled([d.finished,u]):u).then(r,r);if(n(),d)return d.finished.then(r,r);r()},types:a});c.__reactViewTransition=f;var h=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var I=u[d],M=I.effect,m=M.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){h.push(I),I=M.getKeyframes();for(var p=m=void 0,x=!0,v=0;v<I.length;v++){var F=I[v],C=F.width;if(m===void 0)m=C;else if(m!==C){x=!1;break}if(C=F.height,p===void 0)p=C;else if(p!==C){x=!1;break}delete F.width,delete F.height,F.transform==="none"&&delete F.transform}x&&m!==void 0&&p!==void 0&&(M.setKeyframes(I),x=getComputedStyle(M.target,M.pseudoElement),x.width!==m||x.height!==p)&&(x=I[0],x.width=m,x.height=p,x=I[I.length-1],x.width=m,x.height=p,M.setKeyframes(I))}}s()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{o(),n(),s()}}),f.finished.finally(function(){for(var u=0;u<h.length;u++)h[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),i()}),f}catch{return o(),n(),s(),null}}function vs(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}vs.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Ht({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};vs.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),o=[],n=0;n<a.length;n++){var r=a[n].effect;r!==null&&r.target===t&&r.pseudoElement===e&&o.push(a[n])}return o};vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function DM(t){return{name:t,group:new vs("group",t),imagePair:new vs("image-pair",t),old:new vs("old",t),new:new vs("new",t)}}function wo(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}wo.prototype.addEventListener=function(t,e,a){var o=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(LM(r,t,e,a)===-1){var s=this,i=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(i=function(l){s.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),o!==null&&(n=s.removeEventListener.bind(s,t,e,a),o.addEventListener("abort",n,{once:!0}),n=o.removeEventListener.bind(o,"abort",n)),o=qi(a),r.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:i,cleanup:n}),po(this._fragmentFiber.child,!1,hA,t,i,o)}this._eventListeners=r}};function hA(t,e,a,o){return xa(t).addEventListener(e,a,o),!1}wo.prototype.removeEventListener=function(t,e,a){var o=this._eventListeners;if(o!==null&&(e=LM(o,t,e,a),e!==-1)){var n=o[e];a=n.attachedListener;var r=n.cleanup;n=qi(n.optionsOrUseCapture),po(this._fragmentFiber.child,!1,mA,t,a,n),o.splice(e,1),r!==null&&r()}};function mA(t,e,a,o){return xa(t).removeEventListener(e,a,o),!1}function qi(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function BS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function LM(t,e,a,o){if(t.length===0)return-1;o=BS(o);for(var n=0;n<t.length;n++){var r=t[n];if(r.type===e&&r.listener===a&&BS(r.optionsOrUseCapture)===o)return n}return-1}wo.prototype.dispatchEvent=function(t){var e=Bs(this._fragmentFiber);if(e===null)return!0;e=xa(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var r=a[n];o.addEventListener(r.type,r.attachedListener,qi(r.optionsOrUseCapture))}if(e.appendChild(o),t=o.dispatchEvent(t),a)for(n=0;n<a.length;n++)r=a[n],o.removeEventListener(r.type,r.attachedListener,qi(r.optionsOrUseCapture));return e.removeChild(o),t}return e.dispatchEvent(t)};wo.prototype.focus=function(t){po(this._fragmentFiber.child,!0,PM,t,void 0,void 0)};function PM(t,e){return t.tag===6?!1:(t=xa(t),TA(t,e))}wo.prototype.focusLast=function(t){var e=[];po(this._fragmentFiber.child,!0,H0,e,void 0,void 0);for(var a=e.length-1;0<=a&&!PM(e[a],t);a--);};function H0(t,e){return e.push(t),!1}wo.prototype.blur=function(){var t=Bs(this._fragmentFiber);t!==null&&(t=xa(t),t=Rc(t).activeElement,t!==null&&po(this._fragmentFiber.child,!1,IA,t,void 0,void 0))};function IA(t,e){return t.tag===6?!1:(t=xa(t),t===e||t.contains(e)?(e.blur(),!0):!1)}wo.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),po(this._fragmentFiber.child,!1,xA,t,void 0,void 0)};function xA(t,e){return t.tag===6||(t=xa(t),e.observe(t)),!1}wo.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),po(this._fragmentFiber.child,!1,gA,t,void 0,void 0);for(var a=e=0;a<tn.length;a++){var o=tn[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):tn[e++]=o}tn.length=e}};function gA(t,e){return t.tag===6||(t=xa(t),e.unobserve(t)),!1}var tn=[],Um=!1;function FA(t,e,a){tn.push({fragmentInstance:t,observer:e,instance:a}),Um||(Um=!0,AA(function(){Um=!1;var o=tn;tn=[];for(var n=0;n<o.length;n++){var r=o[n];r.observer.unobserve(r.instance)}}))}wo.prototype.getClientRects=function(){var t=[];return po(this._fragmentFiber.child,!1,SA,t,void 0,void 0),t};function SA(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=xa(t),e.push.apply(e,t.getClientRects());return!1}wo.prototype.getRootNode=function(t){var e=Bs(this._fragmentFiber);return e===null?this:xa(e).getRootNode(t)};wo.prototype.compareDocumentPosition=function(t){var e=Bs(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];po(this._fragmentFiber.child,!1,H0,a,void 0,void 0);var o=xa(e);if(a.length===0){if(a=o,hF(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=o=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=av(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=xa(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=xa(a[0]),n=xa(a[a.length-1]);var r=hF(this._fragmentFiber)?e.parentElement:o;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),i=n.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,e=o&&e===t||r&&n===t||l||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&e===t||!r&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vA(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vA(t,e,a,o,n){var r=Ss(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){a=!0;break e}r=r.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=n.ownerDocument,n===r||n===r.documentElement||n===r.body;e:{for(r=e,e=Bs(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===a)&&(e=Om(a,r,mF),e===null?e=!1:(po(e,!0,Q_,r,a),r=hi,hi=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===o)&&(e=Om(o,r,mF),e===null?e=!1:(po(e,!0,j_,r,o),r=hi,Nm=hi=null,e=r!==null)),e):!1}function US(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}wo.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(oe(566));var e=[];po(this._fragmentFiber.child,!1,H0,e,void 0,void 0);var a=t!==!1;if(e.length===0){var o=av(this._fragmentFiber);if(o=a?o[1]||o[0]||Bs(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=xa(o),US(t,a);return}if(o=xa(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?e.length-1:0;o!==(a?-1:e.length);){var n=e[o];n.tag===6?(n=xa(n),US(n,a)):xa(n).scrollIntoView(t),o+=a?-1:1}};function yA(t,e){return t=xa(t),BM(t,e),!1}function BM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function UM(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.addEventListener(n.type,n.attachedListener,qi(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){for(var s=0,i=0;i<tn.length;i++){var l=tn[i];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(tn[s++]=l)}tn.length=s,r.observe(t)}),BM(t,e))}function MA(t,e){var a=e._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o];t.removeEventListener(n.type,n.attachedListener,qi(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(r){typeof r.rootMargin=="string"?FA(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function GI(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":GI(a),Id(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CA(t,e,a,o){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[zc])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Yo(t.nextSibling),t===null)break}return null}function _A(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Yo(t.nextSibling),t===null))return null;return t}function kM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Yo(t.nextSibling),t===null))return null;return t}function qI(t){return t.data==="$?"||t.data==="$~"}function V0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Yo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var WI=null;function kS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Yo(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function NS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function TA(t,e){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function AA(t){DS(function(){DS(function(e){return t(e)})})}function NM(t,e,a){switch(e=Rc(a),t){case"html":if(t=e.documentElement,!t)throw Error(oe(452));return t;case"head":if(t=e.head,!t)throw Error(oe(453));return t;case"body":if(t=e.body,!t)throw Error(oe(454));return t;default:throw Error(oe(451))}}function OM(t,e,a){for(var o in a){var n=a[o];a.hasOwnProperty(o)&&n!=null&&Bt(t,e,o,null,oA,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Mn&&(t.onclick=null),Id(t)}function km(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Id(t)}var Zo=new Map,OS=new Set;function Dc(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var or=Rt.d;Rt.d={f:wA,r:EA,D:RA,C:DA,L:LA,m:PA,X:UA,S:BA,M:kA};function wA(){var t=or.f(),e=Ed();return t||e}function EA(t){var e=Ji(t);e!==null&&e.tag===5&&e.type==="form"?My(e):or.r(t)}var el=typeof document>"u"?null:document;function zM(t,e,a){var o=el;if(o&&typeof e=="string"&&e){var n=qo(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),OS.has(n)||(OS.add(n),t={rel:t,crossOrigin:a,href:e},o.querySelector(n)===null&&(e=o.createElement("link"),Ba(e,"link",t),_a(e),o.head.appendChild(e)))}}function RA(t){or.D(t),zM("dns-prefetch",t,null)}function DA(t,e){or.C(t,e),zM("preconnect",t,e)}function LA(t,e,a){or.L(t,e,a);var o=el;if(o&&t&&e){var n='link[rel="preload"][as="'+qo(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qo(a.imageSizes)+'"]')):n+='[href="'+qo(t)+'"]';var r=n;switch(e){case"style":r=Wi(t);break;case"script":r=tl(t)}if(!(Zo.has(r)||(t=Ht({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Zo.set(r,t),o.querySelector(n)!==null||e==="style"&&o.querySelector(Xc(r))||e==="script"&&o.querySelector(Yc(r))))){var s=o.createElement("link");Ba(s,"link",t),e==="style"&&(s[qf]=!0,s.onload=s.onerror=function(){mv(s)}),_a(s),o.head.appendChild(s)}}}function PA(t,e){or.m(t,e);var a=el;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+qo(o)+'"][href="'+qo(t)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=tl(t)}if(!Zo.has(r)&&(t=Ht({rel:"modulepreload",href:t},e),Zo.set(r,t),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yc(r)))return}o=a.createElement("link"),Ba(o,"link",t),_a(o),a.head.appendChild(o)}}}function BA(t,e,a){or.S(t,e,a);var o=el;if(o&&t){var n=bi(o).hoistableStyles,r=Wi(t);e=e||"default";var s=n.get(r);if(!s){var i={loading:0,preload:null};if(s=o.querySelector(Xc(r)))i.loading=5;else{t=Ht({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Zo.get(r))&&G0(t,a);var l=s=o.createElement("link");_a(l),Ba(l,"link",t),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){i.loading|=1}),l.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Bf(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:i},n.set(r,s)}}}function UA(t,e){or.X(t,e);var a=el;if(a&&t){var o=bi(a).hoistableScripts,n=tl(t),r=o.get(n);r||(r=a.querySelector(Yc(n)),r||(t=Ht({src:t,async:!0},e),(e=Zo.get(n))&&q0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function kA(t,e){or.M(t,e);var a=el;if(a&&t){var o=bi(a).hoistableScripts,n=tl(t),r=o.get(n);r||(r=a.querySelector(Yc(n)),r||(t=Ht({src:t,async:!0,type:"module"},e),(e=Zo.get(n))&&q0(t,e),r=a.createElement("script"),_a(r),Ba(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function zS(t,e,a,o){var n=(n=Pr.current)?Dc(n):null;if(!n)throw Error(oe(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Wi(a.href),e=bi(n).hoistableStyles,o=e.get(a),o||(o={type:"style",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wi(a.href);var r=bi(n).hoistableStyles,s=r.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=n.querySelector(Xc(t)))?r._p||(s.instance=r,s.state.loading=5):(r=Zo.get(t),r||(r={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zo.set(t,r)),NA(n,t,r,s.state))),e&&o===null)throw Error(oe(528,""));return s}if(e&&o!==null)throw Error(oe(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=tl(a),e=bi(n).hoistableScripts,o=e.get(a),o||(o={type:"script",instance:null,count:0,state:null},e.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(oe(444,t))}}function Wi(t){return'href="'+qo(t)+'"'}function Xc(t){return'link[rel="stylesheet"]['+t+"]"}function HM(t){return Ht({},t,{"data-precedence":t.precedence,precedence:null})}function NA(t,e,a,o){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[qf]!==!0){o.loading=1;return}}else e=t.createElement("link"),e[qf]=!0,e.onload=e.onerror=mv.bind(null,e),Ba(e,"link",a),_a(e),t.head.appendChild(e);o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2})}function tl(t){return'[src="'+qo(t)+'"]'}function Yc(t){return"script[async]"+t}function HS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+qo(a.href)+'"]');if(o)return e.instance=o,_a(o),o;var n=Ht({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_a(o),Ba(o,"style",n),Bf(o,a.precedence,t),e.instance=o;case"stylesheet":n=Wi(a.href);var r=t.querySelector(Xc(n));if(r)return e.state.loading|=4,e.instance=r,_a(r),r;o=HM(a),(n=Zo.get(n))&&G0(o,n),r=(t.ownerDocument||t).createElement("link"),_a(r);var s=r;return s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),e.state.loading|=4,Bf(r,a.precedence,t),e.instance=r;case"script":return r=tl(a.src),(n=t.querySelector(Yc(r)))?(e.instance=n,_a(n),n):(o=a,(n=Zo.get(r))&&(o=Ht({},a),q0(o,n)),t=t.ownerDocument||t,n=t.createElement("script"),_a(n),Ba(n,"link",o),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(oe(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(o=e.instance,e.state.loading|=4,Bf(o,a.precedence,t));return e.instance}function Bf(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,s=0;s<o.length;s++){var i=o[s];if(i.dataset.precedence===e)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function G0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function q0(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uf=null;function VS(t,e,a){if(Uf===null){var o=new Map,n=Uf=new Map;n.set(a,o)}else n=Uf,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var r=a[n];if(!(r[zc]||r[Ra]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var i=o.get(s);i?i.push(r):o.set(s,[r])}}return o}function XI(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function OA(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function GS(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function VM(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function GM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qS(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=GM(e),t.suspenseyImages.push(e)),t=VA.bind(t),e.decode().then(t,t))}function zA(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Wi(o.href),r=e.querySelector(Xc(n));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Lc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,_a(r);return}r=e.ownerDocument||e,o=HM(o),(n=Zo.get(n))&&G0(o,n),r=r.createElement("link"),_a(r);var s=r;s._p=new Promise(function(i,l){s.onload=i,s.onerror=l}),Ba(r,"link",o),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=Lc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var kf=0;function HA(t,e){return t.stylesheets&&t.count===0&&Nf(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Nf(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&kf===0&&(kf=62500*rA());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nf(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>kf?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function qM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Nf(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Lc(){this.count--,qM(this)}function VA(){this.imgCount--,qM(this)}var pd=null;function Nf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pd=new Map,e.forEach(GA,t),pd=null,Lc.call(t))}function GA(t,e){if(!(e.state.loading&4)){var a=pd.get(t);if(a)var o=a.get(null);else{a=new Map,pd.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var s=n[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),o=s)}o&&a.set(null,o)}n=e.instance,s=n.getAttribute("data-precedence"),r=a.get(s)||o,r===o&&a.set(null,n),a.set(s,n),this.count++,o=Lc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Xi={$$typeof:yn,Provider:null,Consumer:null,_currentValue:ys,_currentValue2:ys,_threadCount:0};function qA(t,e,a,o,n,r,s,i,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fm(0),this.hiddenUpdates=fm(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function WM(t,e,a,o,n,r,s,i,l,c,f,h){return t=new qA(t,e,a,s,l,c,f,h,i),e=1,r===!0&&(e|=24),r=uo(3,null,null,e),t.current=r,r.stateNode=t,e=u0(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:e},p0(r),t}function XM(t){return t?(t=yi,t):yi}function YM(t,e,a,o,n,r){n=XM(n),o.context===null?o.context=n:o.pendingContext=n,o=Ur(e),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=kr(t,o,e),a!==null&&(fo(a,t,e),fc(a,t,e))}function WS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function W0(t,e){WS(t,e),(t=t.alternate)&&WS(t,e)}function ZM(t){if(t.tag===13||t.tag===31){var e=Ns(t,67108864);e!==null&&fo(e,t,67108864),W0(t,67108864)}}function XS(t){if(t.tag===13||t.tag===31){var e=To();e=jI(e);var a=Ns(t,e);a!==null&&fo(a,t,e),W0(t,e)}}var Yi=!0;function WA(t,e,a,o){var n=ot.T;ot.T=null;var r=Rt.p;try{Rt.p=2,X0(t,e,a,o)}finally{Rt.p=r,ot.T=n}}function XA(t,e,a,o){var n=ot.T;ot.T=null;var r=Rt.p;try{Rt.p=8,X0(t,e,a,o)}finally{Rt.p=r,ot.T=n}}function X0(t,e,a,o){if(Yi){var n=YI(o);if(n===null)Pm(t,e,o,hd,a),YS(t,o);else if(ZA(n,t,e,a,o))o.stopPropagation();else if(YS(t,o),e&4&&-1<YA.indexOf(t)){for(;n!==null;){var r=Ji(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=xs(r.pendingLanes);if(s!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var l=1<<31-bo(s);i.entanglements[1]|=l,s&=~l}En(r),!(Et&6)&&(ld=Co()+500,Wc(0,!1))}}break;case 31:case 13:i=Ns(r,2),i!==null&&fo(i,r,2),Ed(),W0(r,2)}if(r=YI(o),r===null&&Pm(t,e,o,hd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Pm(t,e,o,null,a)}}function YI(t){return t=t0(t),Y0(t)}var hd=null;function Y0(t){if(hd=null,t=Ss(t),t!==null){var e=Uc(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=$S(e),t!==null)return t;t=null}else if(a===31){if(t=ev(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return hd=t,null}function KM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ib()){case sv:return 2;case iv:return 8;case Gf:case lb:return 32;case lv:return 268435456;default:return 32}default:return 32}}var ZI=!1,Hr=null,Vr=null,Gr=null,Pc=new Map,Bc=new Map,Tr=[],YA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function YS(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Pc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bc.delete(e.pointerId)}}function ec(t,e,a,o,n,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},e!==null&&(e=Ji(e),e!==null&&ZM(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ZA(t,e,a,o,n){switch(e){case"focusin":return Hr=ec(Hr,t,e,a,o,n),!0;case"dragenter":return Vr=ec(Vr,t,e,a,o,n),!0;case"mouseover":return Gr=ec(Gr,t,e,a,o,n),!0;case"pointerover":var r=n.pointerId;return Pc.set(r,ec(Pc.get(r)||null,t,e,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Bc.set(r,ec(Bc.get(r)||null,t,e,a,o,n)),!0}return!1}function JM(t){var e=Ss(t.target);if(e!==null){var a=Uc(e);if(a!==null){if(e=a.tag,e===13){if(e=$S(a),e!==null){t.blockedOn=e,FF(t.priority,function(){XS(a)});return}}else if(e===31){if(e=ev(a),e!==null){t.blockedOn=e,FF(t.priority,function(){XS(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Of(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=YI(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qm=o,a.target.dispatchEvent(o),Qm=null}else return e=Ji(a),e!==null&&ZM(e),t.blockedOn=a,!1;e.shift()}return!0}function ZS(t,e,a){Of(t)&&a.delete(e)}function KA(){ZI=!1,Hr!==null&&Of(Hr)&&(Hr=null),Vr!==null&&Of(Vr)&&(Vr=null),Gr!==null&&Of(Gr)&&(Gr=null),Pc.forEach(ZS),Bc.forEach(ZS)}function Ff(t,e){t.blockedOn===e&&(t.blockedOn=null,ZI||(ZI=!0,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,KA)))}var Sf=null;function KS(t){Sf!==t&&(Sf=t,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,function(){Sf===t&&(Sf=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],n=t[e+2];if(typeof o!="function"){if(Y0(o||a)===null)continue;break}var r=Ji(a);r!==null&&(t.splice(e,3),e-=3,pI(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Zi(t){function e(l){return Ff(l,t)}Hr!==null&&Ff(Hr,t),Vr!==null&&Ff(Vr,t),Gr!==null&&Ff(Gr,t),Pc.forEach(e),Bc.forEach(e);for(var a=0;a<Tr.length;a++){var o=Tr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)JM(a),a.blockedOn===null&&Tr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],s=n[ho]||null;if(typeof r=="function")s||KS(a);else if(s){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,s=r[ho]||null)i=s.formAction;else if(Y0(n)!==null)continue}else i=s.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),KS(a)}}}function QM(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Z0(t){this._internalRoot=t}Ld.prototype.render=Z0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));var a=e.current,o=To();YM(a,o,t,e,null,null)};Ld.prototype.unmount=Z0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;YM(t.current,2,null,t,null,null),Ed(),e[Ki]=null}};function Ld(t){this._internalRoot=t}Ld.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Tr.length&&e!==0&&e<Tr[a].priority;a++);Tr.splice(a,0,t),a===0&&JM(t)}};var JS=QS.version;if(JS!=="19.3.0")throw Error(oe(527,JS,"19.3.0"));Rt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=J_(e),t=t!==null?tv(t):null,t=t===null?null:t.stateNode,t};var JA={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ot,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(tc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!tc.isDisabled&&tc.supportsFiber))try{kc=tc.inject(JA),_o=tc}catch{}var tc;Pd.createRoot=function(t,e){if(!jS(t))throw Error(oe(299));var a=!1,o="",n=Ry,r=Dy,s=Ly;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=WM(t,1,!1,null,null,a,o,null,n,r,s,QM),t[Ki]=e.current,O0(t),new Z0(e)};Pd.hydrateRoot=function(t,e,a){if(!jS(t))throw Error(oe(299));var o=!1,n="",r=Ry,s=Dy,i=Ly,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=WM(t,1,!0,e,a??null,o,n,l,r,s,i,QM),e.context=XM(null),a=e.current,o=To(),o=jI(o),n=Ur(o),n.callback=null,kr(a,n,o),a=o,e.current.lanes=a,Oc(e,a),En(e),t[Ki]=e.current,O0(t),new Ld(e)};Pd.version="19.3.0"});var tC=gr(($3,eC)=>{"use strict";ct();function $M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($M)}catch(t){console.error(t)}}$M(),eC.exports=jM()});ct();var Vu=Fr(mn()),Gu=Fr(tC());ct();var ti=Fr(mn());ct();ct();var zp="186";var RC=0,Lx=1,DC=2;var Mu=1,LC=2,Bl=3,fs=0,no=1,Bo=2,kn=0,Ul=1,Px=2,Bx=3,Ux=4,PC=5;var Js=100,BC=101,UC=102,kC=103,NC=104,OC=200,zC=201,HC=202,VC=203,kx=204,Nx=205,GC=206,qC=207,WC=208,XC=209,YC=210,ZC=211,KC=212,JC=213,QC=214,np=0,rp=1,sp=2,Il=3,ip=4,lp=5,cp=6,up=7,Ox=0,jC=1,$C=2,un=0,zx=1,Hx=2,Vx=3,Gx=4,qx=5,Wx=6,Cu=7;var Xx=300,ds=301,Qs=302,Hp=303,Vp=304,_u=306,Pn=1e3,Jo=1001,fp=1002,Aa=1003,e1=1004;var bu=1005;var Fa=1006,Gp=1007;var Nn=1008;var xo=1009,Yx=1010,Zx=1011,kl=1012,qp=1013,fn=1014,dn=1015,pn=1016,Wp=1017,Xp=1018,Nl=1020,Kx=35902,Jx=35899,Qx=1021,jx=1022,Qo=1023,Bn=1026,ps=1027,$x=1028,Yp=1029,hs=1030,Zp=1031;var Kp=1033,Tu=33776,Au=33777,wu=33778,Eu=33779,Jp=35840,Qp=35841,jp=35842,$p=35843,eh=36196,th=37492,ah=37496,oh=37488,nh=37489,Ru=37490,rh=37491,sh=37808,ih=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,ph=37815,hh=37816,mh=37817,Ih=37818,xh=37819,gh=37820,Fh=37821,Sh=36492,vh=36494,yh=36495,Mh=36283,Ch=36284,Du=36285,_h=36286;var au=2300,dp=2301,ap=2302,vx=2303,yx=2400,Mx=2401,Cx=2402;var t1=3200;var bh=0,a1=1,fr="",ka="srgb",ou="srgb-linear",nu="linear",Lt="srgb";var op=7680;var o1=519,n1=512,r1=513,s1=514,Th=515,i1=516,l1=517,Ah=518,c1=519,u1=35044;var eg="300 es",cn=2e3,xl=2001;function QA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jA(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ru(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){let t=ru("canvas");return t.style.display="block",t}var aC={},gl=null;function tg(...t){let e="THREE."+t.shift();gl?gl("log",e,...t):console.log(e,...t)}function d1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function tt(...t){t=d1(t);let e="THREE."+t.shift();if(gl)gl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function et(...t){t=d1(t);let e="THREE."+t.shift();if(gl)gl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function qs(...t){let e=t.join(" ");e in aC||(aC[e]=!0,tt(...t))}function p1(t,e,a){return new Promise(function(o,n){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(r,a);break;default:o()}}setTimeout(r,a)})}var h1={[np]:rp,[sp]:cp,[ip]:up,[Il]:lp,[rp]:np,[cp]:sp,[up]:ip,[lp]:Il},Un=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(a)===-1&&o[e].push(a)}hasEventListener(e,a){let o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(a)!==-1}removeEventListener(e,a){let o=this._listeners;if(o===void 0)return;let n=o[e];if(n!==void 0){let r=n.indexOf(a);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let o=a[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ha=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var K0=Math.PI/180,pp=180/Math.PI;function Ol(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Ha[t&255]+Ha[t>>8&255]+Ha[t>>16&255]+Ha[t>>24&255]+"-"+Ha[e&255]+Ha[e>>8&255]+"-"+Ha[e>>16&15|64]+Ha[e>>24&255]+"-"+Ha[a&63|128]+Ha[a>>8&255]+"-"+Ha[a>>16&255]+Ha[a>>24&255]+Ha[o&255]+Ha[o>>8&255]+Ha[o>>16&255]+Ha[o>>24&255]).toLowerCase()}function xt(t,e,a){return Math.max(e,Math.min(a,t))}function $A(t,e){return(t%e+e)%e}function J0(t,e,a){return(1-a)*t+a*e}function Zc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Te=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,o=this.y,n=e.elements;return this.x=n[0]*a+n[3]*o+n[6],this.y=n[1]*a+n[4]*o+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y;return a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let o=Math.cos(a),n=Math.sin(a),r=this.x-e.x,s=this.y-e.y;return this.x=r*o-s*n+e.x,this.y=r*n+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},eo=class{constructor(e=0,a=0,o=0,n=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=o,this._w=n}static slerpFlat(e,a,o,n,r,s,i){let l=o[n+0],c=o[n+1],f=o[n+2],h=o[n+3],u=r[s+0],d=r[s+1],I=r[s+2],M=r[s+3];if(h!==M||l!==u||c!==d||f!==I){let m=l*u+c*d+f*I+h*M;m<0&&(u=-u,d=-d,I=-I,M=-M,m=-m);let p=1-i;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);p=Math.sin(p*x)/v,i=Math.sin(i*x)/v,l=l*p+u*i,c=c*p+d*i,f=f*p+I*i,h=h*p+M*i}else{l=l*p+u*i,c=c*p+d*i,f=f*p+I*i,h=h*p+M*i;let x=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=x,c*=x,f*=x,h*=x}}e[a]=l,e[a+1]=c,e[a+2]=f,e[a+3]=h}static multiplyQuaternionsFlat(e,a,o,n,r,s){let i=o[n],l=o[n+1],c=o[n+2],f=o[n+3],h=r[s],u=r[s+1],d=r[s+2],I=r[s+3];return e[a]=i*I+f*h+l*d-c*u,e[a+1]=l*I+f*u+c*h-i*d,e[a+2]=c*I+f*d+i*u-l*h,e[a+3]=f*I-i*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,o,n){return this._x=e,this._y=a,this._z=o,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let o=e._x,n=e._y,r=e._z,s=e._order,i=Math.cos,l=Math.sin,c=i(o/2),f=i(n/2),h=i(r/2),u=l(o/2),d=l(n/2),I=l(r/2);switch(s){case"XYZ":this._x=u*f*h+c*d*I,this._y=c*d*h-u*f*I,this._z=c*f*I+u*d*h,this._w=c*f*h-u*d*I;break;case"YXZ":this._x=u*f*h+c*d*I,this._y=c*d*h-u*f*I,this._z=c*f*I-u*d*h,this._w=c*f*h+u*d*I;break;case"ZXY":this._x=u*f*h-c*d*I,this._y=c*d*h+u*f*I,this._z=c*f*I+u*d*h,this._w=c*f*h-u*d*I;break;case"ZYX":this._x=u*f*h-c*d*I,this._y=c*d*h+u*f*I,this._z=c*f*I-u*d*h,this._w=c*f*h+u*d*I;break;case"YZX":this._x=u*f*h+c*d*I,this._y=c*d*h+u*f*I,this._z=c*f*I-u*d*h,this._w=c*f*h-u*d*I;break;case"XZY":this._x=u*f*h-c*d*I,this._y=c*d*h-u*f*I,this._z=c*f*I+u*d*h,this._w=c*f*h+u*d*I;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let o=a/2,n=Math.sin(o);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,o=a[0],n=a[4],r=a[8],s=a[1],i=a[5],l=a[9],c=a[2],f=a[6],h=a[10],u=o+i+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(o>i&&o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(f-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-o-i);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let o=e.dot(a)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,a){let o=this.angleTo(e);if(o===0)return this;let n=Math.min(1,a/o);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=a._x,l=a._y,c=a._z,f=a._w;return this._x=o*f+s*i+n*c-r*l,this._y=n*f+s*l+r*i-o*c,this._z=r*f+s*c+o*l-n*i,this._w=s*f-o*i-n*l-r*c,this._onChangeCallback(),this}slerp(e,a){let o=e._x,n=e._y,r=e._z,s=e._w,i=this.dot(e);i<0&&(o=-o,n=-n,r=-r,s=-s,i=-i);let l=1-a;if(i<.9995){let c=Math.acos(i),f=Math.sin(c);l=Math.sin(l*c)/f,a=Math.sin(a*c)/f,this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this._onChangeCallback()}else this._x=this._x*l+o*a,this._y=this._y*l+n*a,this._z=this._z*l+r*a,this._w=this._w*l+s*a,this.normalize();return this}slerpQuaternions(e,a,o){return this.copy(e).slerp(a,o)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),o=Math.random(),n=Math.sqrt(1-o),r=Math.sqrt(o);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(a),r*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,o=0){this.x=e,this.y=a,this.z=o}set(e,a,o){return o===void 0&&(o=this.z),this.x=e,this.y=a,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(oC.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(oC.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[3]*o+r[6]*n,this.y=r[1]*a+r[4]*o+r[7]*n,this.z=r[2]*a+r[5]*o+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=e.elements,s=1/(r[3]*a+r[7]*o+r[11]*n+r[15]);return this.x=(r[0]*a+r[4]*o+r[8]*n+r[12])*s,this.y=(r[1]*a+r[5]*o+r[9]*n+r[13])*s,this.z=(r[2]*a+r[6]*o+r[10]*n+r[14])*s,this}applyQuaternion(e){let a=this.x,o=this.y,n=this.z,r=e.x,s=e.y,i=e.z,l=e.w,c=2*(s*n-i*o),f=2*(i*a-r*n),h=2*(r*o-s*a);return this.x=a+l*c+s*h-i*f,this.y=o+l*f+i*c-r*h,this.z=n+l*h+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,o=this.y,n=this.z,r=e.elements;return this.x=r[0]*a+r[4]*o+r[8]*n,this.y=r[1]*a+r[5]*o+r[9]*n,this.z=r[2]*a+r[6]*o+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this.z=xt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this.z=xt(this.z,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let o=e.x,n=e.y,r=e.z,s=a.x,i=a.y,l=a.z;return this.x=n*l-r*i,this.y=r*s-o*l,this.z=o*i-n*s,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let o=e.dot(this)/a;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Q0.copy(this).projectOnVector(e),this.sub(Q0)}reflect(e){return this.sub(Q0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let o=this.dot(e)/a;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,o=this.y-e.y,n=this.z-e.z;return a*a+o*o+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,o){let n=Math.sin(a)*e;return this.x=n*Math.sin(o),this.y=Math.cos(a)*e,this.z=n*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,o){return this.x=e*Math.sin(a),this.y=o,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=o,this.z=n,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,o=Math.sqrt(1-a*a);return this.x=o*Math.cos(e),this.y=a,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Q0=new U,oC=new eo,it=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,o,n,r,s,i,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c)}set(e,a,o,n,r,s,i,l,c){let f=this.elements;return f[0]=e,f[1]=n,f[2]=i,f[3]=a,f[4]=r,f[5]=l,f[6]=o,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],this}extractBasis(e,a,o){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[3],l=o[6],c=o[1],f=o[4],h=o[7],u=o[2],d=o[5],I=o[8],M=n[0],m=n[3],p=n[6],x=n[1],v=n[4],F=n[7],C=n[2],_=n[5],w=n[8];return r[0]=s*M+i*x+l*C,r[3]=s*m+i*v+l*_,r[6]=s*p+i*F+l*w,r[1]=c*M+f*x+h*C,r[4]=c*m+f*v+h*_,r[7]=c*p+f*F+h*w,r[2]=u*M+d*x+I*C,r[5]=u*m+d*v+I*_,r[8]=u*p+d*F+I*w,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8];return a*s*f-a*i*c-o*r*f+o*i*l+n*r*c-n*s*l}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8],h=f*s-i*c,u=i*l-f*r,d=c*r-s*l,I=a*h+o*u+n*d;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/I;return e[0]=h*M,e[1]=(n*c-f*o)*M,e[2]=(i*o-n*s)*M,e[3]=u*M,e[4]=(f*a-n*l)*M,e[5]=(n*r-i*a)*M,e[6]=d*M,e[7]=(o*l-c*a)*M,e[8]=(s*a-o*r)*M,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,o,n,r,s,i){let l=Math.cos(r),c=Math.sin(r);return this.set(o*l,o*c,-o*(l*s+c*i)+s+e,-n*c,n*l,-n*(-c*s+l*i)+i+a,0,0,1),this}scale(e,a){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(j0.makeScale(e,a)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(j0.makeRotation(-e)),this}translate(e,a){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(j0.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,o,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<9;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<9;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}},j0=new it,nC=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rC=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ew(){let t={enabled:!0,workingColorSpace:ou,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Lt&&(n.r=cr(n.r),n.g=cr(n.g),n.b=cr(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Lt&&(n.r=ml(n.r),n.g=ml(n.g),n.b=ml(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fr?nu:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],o=[.3127,.329];return t.define({[ou]:{primaries:e,whitePoint:o,transfer:nu,toXYZ:nC,fromXYZ:rC,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ka},outputColorSpaceConfig:{drawingBufferColorSpace:ka}},[ka]:{primaries:e,whitePoint:o,transfer:Lt,toXYZ:nC,fromXYZ:rC,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ka}}}),t}var vt=ew();function cr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ml(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var al,hp=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{al===void 0&&(al=ru("canvas")),al.width=e.width,al.height=e.height;let n=al.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),o=al}return o.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=ru("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0,e.width,e.height);let n=o.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=cr(r[s]/255)*255;return o.putImageData(n,0,0),a}else if(e.data){let a=e.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(cr(a[o]/255)*255):a[o]=cr(a[o]);return{data:a,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tw=0,Fl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=Ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let o={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,i=n.length;s<i;s++)n[s].isDataTexture?r.push($0(n[s].image)):r.push($0(n[s]))}else r=$0(n);o.url=r}return a||(e.images[this.uuid]=o),o}};function $0(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var aw=0,ex=new U,to=class t extends Un{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,o=Jo,n=Jo,r=Fa,s=Nn,i=Qo,l=xo,c=t.DEFAULT_ANISOTROPY,f=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=Ol(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=o,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ex).x}get height(){return this.source.getSize(ex).y}get depth(){return this.source.getSize(ex).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let o=e[a];if(o===void 0){tt(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Texture.setValues(): property '${a}' does not exist.`);continue}n&&o&&n.isVector2&&o.isVector2||n&&o&&n.isVector3&&o.isVector3||n&&o&&n.isMatrix3&&o.isMatrix3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),a||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Jo:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Jo:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};to.DEFAULT_IMAGE=null;to.DEFAULT_MAPPING=Xx;to.DEFAULT_ANISOTROPY=1;var jt=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,o=0,n=1){this.x=e,this.y=a,this.z=o,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,o,n){return this.x=e,this.y=a,this.z=o,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,o=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*a+s[4]*o+s[8]*n+s[12]*r,this.y=s[1]*a+s[5]*o+s[9]*n+s[13]*r,this.z=s[2]*a+s[6]*o+s[10]*n+s[14]*r,this.w=s[3]*a+s[7]*o+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,o,n,r,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],I=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-M)<.01&&Math.abs(I-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+M)<.1&&Math.abs(I+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let v=(c+1)/2,F=(d+1)/2,C=(p+1)/2,_=(f+u)/4,w=(h+M)/4,S=(I+m)/4;return v>F&&v>C?v<.01?(o=0,n=.707106781,r=.707106781):(o=Math.sqrt(v),n=_/o,r=w/o):F>C?F<.01?(o=.707106781,n=0,r=.707106781):(n=Math.sqrt(F),o=_/n,r=S/n):C<.01?(o=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),o=w/r,n=S/r),this.set(o,n,r,a),this}let x=Math.sqrt((m-I)*(m-I)+(h-M)*(h-M)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(m-I)/x,this.y=(h-M)/x,this.z=(u-f)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=xt(this.x,e.x,a.x),this.y=xt(this.y,e.y,a.y),this.z=xt(this.z,e.z,a.z),this.w=xt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=xt(this.x,e,a),this.y=xt(this.y,e,a),this.z=xt(this.z,e,a),this.w=xt(this.w,e,a),this}clampLength(e,a){let o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,o){return this.x=e.x+(a.x-e.x)*o,this.y=e.y+(a.y-e.y)*o,this.z=e.z+(a.z-e.z)*o,this.w=e.w+(a.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mp=class extends Un{constructor(e=1,a=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=o.depth,this.scissor=new jt(0,0,e,a),this.scissorTest=!1,this.viewport=new jt(0,0,e,a),this.textures=[];let n={width:e,height:a,depth:o.depth},r=new to(n),s=o.count;for(let i=0;i<s;i++)this.textures[i]=r.clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Fa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,o=1){if(this.width!==e||this.height!==a||this.depth!==o){this.width=e,this.height=a,this.depth=o;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=a,this.textures[n].image.depth=o,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,o=e.textures.length;a<o;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let n=Object.assign({},e.textures[a].image);this.textures[a].source=new Fl(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class extends mp{constructor(e=1,a=1,o={}){super(e,a,o),this.isWebGLRenderTarget=!0}},su=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ip=class extends to{constructor(e=null,a=1,o=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:o,depth:n},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vt=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,o,n,r,s,i,l,c,f,h,u,d,I,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,o,n,r,s,i,l,c,f,h,u,d,I,M,m)}set(e,a,o,n,r,s,i,l,c,f,h,u,d,I,M,m){let p=this.elements;return p[0]=e,p[4]=a,p[8]=o,p[12]=n,p[1]=r,p[5]=s,p[9]=i,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=I,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,o=e.elements;return a[0]=o[0],a[1]=o[1],a[2]=o[2],a[3]=o[3],a[4]=o[4],a[5]=o[5],a[6]=o[6],a[7]=o[7],a[8]=o[8],a[9]=o[9],a[10]=o[10],a[11]=o[11],a[12]=o[12],a[13]=o[13],a[14]=o[14],a[15]=o[15],this}copyPosition(e){let a=this.elements,o=e.elements;return a[12]=o[12],a[13]=o[13],a[14]=o[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,o){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),o.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(e,a,o){return this.set(e.x,a.x,o.x,0,e.y,a.y,o.y,0,e.z,a.z,o.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,o=e.elements,n=1/ol.setFromMatrixColumn(e,0).length(),r=1/ol.setFromMatrixColumn(e,1).length(),s=1/ol.setFromMatrixColumn(e,2).length();return a[0]=o[0]*n,a[1]=o[1]*n,a[2]=o[2]*n,a[3]=0,a[4]=o[4]*r,a[5]=o[5]*r,a[6]=o[6]*r,a[7]=0,a[8]=o[8]*s,a[9]=o[9]*s,a[10]=o[10]*s,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,o=e.x,n=e.y,r=e.z,s=Math.cos(o),i=Math.sin(o),l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*f,d=s*h,I=i*f,M=i*h;a[0]=l*f,a[4]=-l*h,a[8]=c,a[1]=d+I*c,a[5]=u-M*c,a[9]=-i*l,a[2]=M-u*c,a[6]=I+d*c,a[10]=s*l}else if(e.order==="YXZ"){let u=l*f,d=l*h,I=c*f,M=c*h;a[0]=u+M*i,a[4]=I*i-d,a[8]=s*c,a[1]=s*h,a[5]=s*f,a[9]=-i,a[2]=d*i-I,a[6]=M+u*i,a[10]=s*l}else if(e.order==="ZXY"){let u=l*f,d=l*h,I=c*f,M=c*h;a[0]=u-M*i,a[4]=-s*h,a[8]=I+d*i,a[1]=d+I*i,a[5]=s*f,a[9]=M-u*i,a[2]=-s*c,a[6]=i,a[10]=s*l}else if(e.order==="ZYX"){let u=s*f,d=s*h,I=i*f,M=i*h;a[0]=l*f,a[4]=I*c-d,a[8]=u*c+M,a[1]=l*h,a[5]=M*c+u,a[9]=d*c-I,a[2]=-c,a[6]=i*l,a[10]=s*l}else if(e.order==="YZX"){let u=s*l,d=s*c,I=i*l,M=i*c;a[0]=l*f,a[4]=M-u*h,a[8]=I*h+d,a[1]=h,a[5]=s*f,a[9]=-i*f,a[2]=-c*f,a[6]=d*h+I,a[10]=u-M*h}else if(e.order==="XZY"){let u=s*l,d=s*c,I=i*l,M=i*c;a[0]=l*f,a[4]=-h,a[8]=c*f,a[1]=u*h+M,a[5]=s*f,a[9]=d*h-I,a[2]=I*h-d,a[6]=i*f,a[10]=M*h+u}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ow,e,nw)}lookAt(e,a,o){let n=this.elements;return Eo.subVectors(e,a),Eo.lengthSq()===0&&(Eo.z=1),Eo.normalize(),Qr.crossVectors(o,Eo),Qr.lengthSq()===0&&(Math.abs(o.z)===1?Eo.x+=1e-4:Eo.z+=1e-4,Eo.normalize(),Qr.crossVectors(o,Eo)),Qr.normalize(),Bd.crossVectors(Eo,Qr),n[0]=Qr.x,n[4]=Bd.x,n[8]=Eo.x,n[1]=Qr.y,n[5]=Bd.y,n[9]=Eo.y,n[2]=Qr.z,n[6]=Bd.z,n[10]=Eo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let o=e.elements,n=a.elements,r=this.elements,s=o[0],i=o[4],l=o[8],c=o[12],f=o[1],h=o[5],u=o[9],d=o[13],I=o[2],M=o[6],m=o[10],p=o[14],x=o[3],v=o[7],F=o[11],C=o[15],_=n[0],w=n[4],S=n[8],T=n[12],A=n[1],R=n[5],H=n[9],k=n[13],B=n[2],z=n[6],ee=n[10],Y=n[14],re=n[3],W=n[7],$=n[11],ae=n[15];return r[0]=s*_+i*A+l*B+c*re,r[4]=s*w+i*R+l*z+c*W,r[8]=s*S+i*H+l*ee+c*$,r[12]=s*T+i*k+l*Y+c*ae,r[1]=f*_+h*A+u*B+d*re,r[5]=f*w+h*R+u*z+d*W,r[9]=f*S+h*H+u*ee+d*$,r[13]=f*T+h*k+u*Y+d*ae,r[2]=I*_+M*A+m*B+p*re,r[6]=I*w+M*R+m*z+p*W,r[10]=I*S+M*H+m*ee+p*$,r[14]=I*T+M*k+m*Y+p*ae,r[3]=x*_+v*A+F*B+C*re,r[7]=x*w+v*R+F*z+C*W,r[11]=x*S+v*H+F*ee+C*$,r[15]=x*T+v*k+F*Y+C*ae,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[12],s=e[1],i=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],I=e[3],M=e[7],m=e[11],p=e[15],x=l*d-c*u,v=i*d-c*h,F=i*u-l*h,C=s*d-c*f,_=s*u-l*f,w=s*h-i*f;return a*(M*x-m*v+p*F)-o*(I*x-m*C+p*_)+n*(I*v-M*C+p*w)-r*(I*F-M*_+m*w)}determinantAffine(){let e=this.elements,a=e[0],o=e[4],n=e[8],r=e[1],s=e[5],i=e[9],l=e[2],c=e[6],f=e[10];return a*(s*f-i*c)-o*(r*f-i*l)+n*(r*c-s*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,o){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=a,n[14]=o),this}invert(){let e=this.elements,a=e[0],o=e[1],n=e[2],r=e[3],s=e[4],i=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],I=e[12],M=e[13],m=e[14],p=e[15],x=a*i-o*s,v=a*l-n*s,F=a*c-r*s,C=o*l-n*i,_=o*c-r*i,w=n*c-r*l,S=f*M-h*I,T=f*m-u*I,A=f*p-d*I,R=h*m-u*M,H=h*p-d*M,k=u*p-d*m,B=x*k-v*H+F*R+C*A-_*T+w*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/B;return e[0]=(i*k-l*H+c*R)*z,e[1]=(n*H-o*k-r*R)*z,e[2]=(M*w-m*_+p*C)*z,e[3]=(u*_-h*w-d*C)*z,e[4]=(l*A-s*k-c*T)*z,e[5]=(a*k-n*A+r*T)*z,e[6]=(m*F-I*w-p*v)*z,e[7]=(f*w-u*F+d*v)*z,e[8]=(s*H-i*A+c*S)*z,e[9]=(o*A-a*H-r*S)*z,e[10]=(I*_-M*F+p*x)*z,e[11]=(h*F-f*_-d*x)*z,e[12]=(i*T-s*R-l*S)*z,e[13]=(a*R-o*T+n*S)*z,e[14]=(M*v-I*C-m*x)*z,e[15]=(f*C-h*v+u*x)*z,this}scale(e){let a=this.elements,o=e.x,n=e.y,r=e.z;return a[0]*=o,a[4]*=n,a[8]*=r,a[1]*=o,a[5]*=n,a[9]*=r,a[2]*=o,a[6]*=n,a[10]*=r,a[3]*=o,a[7]*=n,a[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,o,n))}makeTranslation(e,a,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,o,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,a,-o,0,0,o,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,0,o,0,0,1,0,0,-o,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),o=Math.sin(e);return this.set(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let o=Math.cos(a),n=Math.sin(a),r=1-o,s=e.x,i=e.y,l=e.z,c=r*s,f=r*i;return this.set(c*s+o,c*i-n*l,c*l+n*i,0,c*i+n*l,f*i+o,f*l-n*s,0,c*l-n*i,f*l+n*s,r*l*l+o,0,0,0,0,1),this}makeScale(e,a,o){return this.set(e,0,0,0,0,a,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,a,o,n,r,s){return this.set(1,o,r,0,e,1,s,0,a,n,1,0,0,0,0,1),this}compose(e,a,o){let n=this.elements,r=a._x,s=a._y,i=a._z,l=a._w,c=r+r,f=s+s,h=i+i,u=r*c,d=r*f,I=r*h,M=s*f,m=s*h,p=i*h,x=l*c,v=l*f,F=l*h,C=o.x,_=o.y,w=o.z;return n[0]=(1-(M+p))*C,n[1]=(d+F)*C,n[2]=(I-v)*C,n[3]=0,n[4]=(d-F)*_,n[5]=(1-(u+p))*_,n[6]=(m+x)*_,n[7]=0,n[8]=(I+v)*w,n[9]=(m-x)*w,n[10]=(1-(u+M))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,a,o){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return o.set(1,1,1),a.identity(),this;let s=ol.set(n[0],n[1],n[2]).length(),i=ol.set(n[4],n[5],n[6]).length(),l=ol.set(n[8],n[9],n[10]).length();r<0&&(s=-s),nn.copy(this);let c=1/s,f=1/i,h=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=f,nn.elements[5]*=f,nn.elements[6]*=f,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,a.setFromRotationMatrix(nn),o.x=s,o.y=i,o.z=l,this}makePerspective(e,a,o,n,r,s,i=cn,l=!1){let c=this.elements,f=2*r/(a-e),h=2*r/(o-n),u=(a+e)/(a-e),d=(o+n)/(o-n),I,M;if(l)I=r/(s-r),M=s*r/(s-r);else if(i===cn)I=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(i===xl)I=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=I,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,o,n,r,s,i=cn,l=!1){let c=this.elements,f=2/(a-e),h=2/(o-n),u=-(a+e)/(a-e),d=-(o+n)/(o-n),I,M;if(l)I=1/(s-r),M=s/(s-r);else if(i===cn)I=-2/(s-r),M=-(s+r)/(s-r);else if(i===xl)I=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=I,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,o=e.elements;for(let n=0;n<16;n++)if(a[n]!==o[n])return!1;return!0}fromArray(e,a=0){for(let o=0;o<16;o++)this.elements[o]=e[o+a];return this}toArray(e=[],a=0){let o=this.elements;return e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3],e[a+4]=o[4],e[a+5]=o[5],e[a+6]=o[6],e[a+7]=o[7],e[a+8]=o[8],e[a+9]=o[9],e[a+10]=o[10],e[a+11]=o[11],e[a+12]=o[12],e[a+13]=o[13],e[a+14]=o[14],e[a+15]=o[15],e}},ol=new U,nn=new Vt,ow=new U(0,0,0),nw=new U(1,1,1),Qr=new U,Bd=new U,Eo=new U,sC=new Vt,iC=new eo,ur=class t{constructor(e=0,a=0,o=0,n=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=o,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,o,n=this._order){return this._x=e,this._y=a,this._z=o,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,o=!0){let n=e.elements,r=n[0],s=n[4],i=n[8],l=n[1],c=n[5],f=n[9],h=n[2],u=n[6],d=n[10];switch(a){case"XYZ":this._y=Math.asin(xt(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(i,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(i,d));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(i,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,o){return sC.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sC,a,o)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return iC.setFromEuler(this),this.setFromQuaternion(iC,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ur.DEFAULT_ORDER="XYZ";var Sl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rw=0,lC=new U,nl=new eo,nr=new Vt,Ud=new U,Kc=new U,sw=new U,iw=new eo,cC=new U(1,0,0),uC=new U(0,1,0),fC=new U(0,0,1),dC={type:"added"},lw={type:"removed"},rl={type:"childadded",child:null},tx={type:"childremoved",child:null},ao=class t extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new U,a=new ur,o=new eo,n=new U(1,1,1);function r(){o.setFromEuler(a,!1)}function s(){a.setFromQuaternion(o,void 0,!1)}a._onChange(r),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Vt},normalMatrix:{value:new it}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return nl.setFromAxisAngle(e,a),this.quaternion.multiply(nl),this}rotateOnWorldAxis(e,a){return nl.setFromAxisAngle(e,a),this.quaternion.premultiply(nl),this}rotateX(e){return this.rotateOnAxis(cC,e)}rotateY(e){return this.rotateOnAxis(uC,e)}rotateZ(e){return this.rotateOnAxis(fC,e)}translateOnAxis(e,a){return lC.copy(e).applyQuaternion(this.quaternion),this.position.add(lC.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(cC,e)}translateY(e){return this.translateOnAxis(uC,e)}translateZ(e){return this.translateOnAxis(fC,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,a,o){e.isVector3?Ud.copy(e):Ud.set(e,a,o);let n=this.parent;this.updateWorldMatrix(!0,!1),Kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Kc,Ud,this.up):nr.lookAt(Ud,Kc,this.up),this.quaternion.setFromRotationMatrix(nr),n&&(nr.extractRotation(n.matrixWorld),nl.setFromRotationMatrix(nr),this.quaternion.premultiply(nl.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dC),rl.child=e,this.dispatchEvent(rl),rl.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(lw),tx.child=e,this.dispatchEvent(tx),tx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dC),rl.child=e,this.dispatchEvent(rl),rl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let o=0,n=this.children.length;o<n;o++){let s=this.children[o].getObjectByProperty(e,a);if(s!==void 0)return s}}getObjectsByProperty(e,a,o=[]){this[e]===a&&o.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,a,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,e,sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,iw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,o=e.y,n=e.z,r=this.matrix.elements;r[12]+=a-r[0]*a-r[4]*o-r[8]*n,r[13]+=o-r[1]*a-r[5]*o-r[9]*n,r[14]+=n-r[2]*a-r[6]*o-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let o=0,n=a.length;o<n;o++)a[o].updateMatrixWorld(e)}updateWorldMatrix(e,a,o=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),a===!0){let r=this.children;for(let s=0,i=r.length;s<i;s++)r[s].updateWorldMatrix(!1,!0,o)}}toJSON(e){let a=e===void 0||typeof e=="string",o={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(i=>({...i,boundingBox:i.boundingBox?i.boundingBox.toJSON():void 0,boundingSphere:i.boundingSphere?i.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(i=>({...i})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){let l=i.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(r(e.materials,this.material[l]));n.material=i}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let i=0;i<this.children.length;i++)n.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let i=0;i<this.animations.length;i++){let l=this.animations[i];n.animations.push(r(e.animations,l))}}if(a){let i=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),u=s(e.skeletons),d=s(e.animations),I=s(e.nodes);i.length>0&&(o.geometries=i),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),f.length>0&&(o.images=f),h.length>0&&(o.shapes=h),u.length>0&&(o.skeletons=u),d.length>0&&(o.animations=d),I.length>0&&(o.nodes=I)}return o.object=n,o;function s(i){let l=[];for(let c in i){let f=i[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let o=0;o<e.children.length;o++){let n=e.children[o];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ao.DEFAULT_UP=new U(0,1,0);ao.DEFAULT_MATRIX_AUTO_UPDATE=!0;ao.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},cw={type:"move"},vl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let o of e.hand.values())this._getHandJoint(a,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,o){let n=null,r=null,s=null,i=this._targetRay,l=this._grip,c=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let M of e.hand.values()){let m=a.getJointPose(M,o),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,I=.005;c.inputState.pinching&&u>d+I?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-I&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=a.getPose(e.gripSpace,o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));i!==null&&(n=a.getPose(e.targetRaySpace,o),n===null&&r!==null&&(n=r),n!==null&&(i.matrix.fromArray(n.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,n.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(n.linearVelocity)):i.hasLinearVelocity=!1,n.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(n.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return i!==null&&(i.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let o=new Dn;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[a.jointName]=o,e.add(o)}return e.joints[a.jointName]}},m1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},kd={h:0,s:0,l:0};function ax(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var ut=class{constructor(e,a,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,o)}set(e,a,o){if(a===void 0&&o===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,a,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ka){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,a),this}setRGB(e,a,o,n=vt.workingColorSpace){return this.r=e,this.g=a,this.b=o,vt.colorSpaceToWorking(this,n),this}setHSL(e,a,o,n=vt.workingColorSpace){if(e=$A(e,1),a=xt(a,0,1),o=xt(o,0,1),a===0)this.r=this.g=this.b=o;else{let r=o<=.5?o*(1+a):o+a-o*a,s=2*o-r;this.r=ax(s,r,e+1/3),this.g=ax(s,r,e),this.b=ax(s,r,e-1/3)}return vt.colorSpaceToWorking(this,n),this}setStyle(e,a=ka){function o(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],i=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,a);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,a);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return o(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,a);break;default:tt("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,a);if(s===6)return this.setHex(parseInt(r,16),a);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ka){let o=m1[e.toLowerCase()];return o!==void 0?this.setHex(o,a):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ka){return vt.workingToColorSpace(Va.copy(this),e),Math.round(xt(Va.r*255,0,255))*65536+Math.round(xt(Va.g*255,0,255))*256+Math.round(xt(Va.b*255,0,255))}getHexString(e=ka){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=vt.workingColorSpace){vt.workingToColorSpace(Va.copy(this),a);let o=Va.r,n=Va.g,r=Va.b,s=Math.max(o,n,r),i=Math.min(o,n,r),l,c,f=(i+s)/2;if(i===s)l=0,c=0;else{let h=s-i;switch(c=f<=.5?h/(s+i):h/(2-s-i),s){case o:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-o)/h+2;break;case r:l=(o-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,a=vt.workingColorSpace){return vt.workingToColorSpace(Va.copy(this),a),e.r=Va.r,e.g=Va.g,e.b=Va.b,e}getStyle(e=ka){vt.workingToColorSpace(Va.copy(this),e);let a=Va.r,o=Va.g,n=Va.b;return e!==ka?`color(${e} ${a.toFixed(3)} ${o.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(n*255)})`}offsetHSL(e,a,o){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+a,jr.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,o){return this.r=e.r+(a.r-e.r)*o,this.g=e.g+(a.g-e.g)*o,this.b=e.b+(a.b-e.b)*o,this}lerpHSL(e,a){this.getHSL(jr),e.getHSL(kd);let o=J0(jr.h,kd.h,a),n=J0(jr.s,kd.s,a),r=J0(jr.l,kd.l,a);return this.setHSL(o,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,o=this.g,n=this.b,r=e.elements;return this.r=r[0]*a+r[3]*o+r[6]*n,this.g=r[1]*a+r[4]*o+r[7]*n,this.b=r[2]*a+r[5]*o+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Va=new ut;ut.NAMES=m1;var yl=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},rn=new U,rr=new U,ox=new U,sr=new U,sl=new U,il=new U,pC=new U,nx=new U,rx=new U,sx=new U,ix=new jt,lx=new jt,cx=new jt,as=class t{constructor(e=new U,a=new U,o=new U){this.a=e,this.b=a,this.c=o}static getNormal(e,a,o,n){n.subVectors(o,a),rn.subVectors(e,a),n.cross(rn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,a,o,n,r){rn.subVectors(n,a),rr.subVectors(o,a),ox.subVectors(e,a);let s=rn.dot(rn),i=rn.dot(rr),l=rn.dot(ox),c=rr.dot(rr),f=rr.dot(ox),h=s*c-i*i;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-i*f)*u,I=(s*f-i*l)*u;return r.set(1-d-I,I,d)}static containsPoint(e,a,o,n){return this.getBarycoord(e,a,o,n,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,a,o,n,r,s,i,l){return this.getBarycoord(e,a,o,n,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sr.x),l.addScaledVector(s,sr.y),l.addScaledVector(i,sr.z),l)}static getInterpolatedAttribute(e,a,o,n,r,s){return ix.setScalar(0),lx.setScalar(0),cx.setScalar(0),ix.fromBufferAttribute(e,a),lx.fromBufferAttribute(e,o),cx.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ix,r.x),s.addScaledVector(lx,r.y),s.addScaledVector(cx,r.z),s}static isFrontFacing(e,a,o,n){return rn.subVectors(o,a),rr.subVectors(e,a),rn.cross(rr).dot(n)<0}set(e,a,o){return this.a.copy(e),this.b.copy(a),this.c.copy(o),this}setFromPointsAndIndices(e,a,o,n){return this.a.copy(e[a]),this.b.copy(e[o]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,a,o,n){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),rn.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,o,n,r){return t.getInterpolation(e,this.a,this.b,this.c,a,o,n,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let o=this.a,n=this.b,r=this.c,s,i;sl.subVectors(n,o),il.subVectors(r,o),nx.subVectors(e,o);let l=sl.dot(nx),c=il.dot(nx);if(l<=0&&c<=0)return a.copy(o);rx.subVectors(e,n);let f=sl.dot(rx),h=il.dot(rx);if(f>=0&&h<=f)return a.copy(n);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return s=l/(l-f),a.copy(o).addScaledVector(sl,s);sx.subVectors(e,r);let d=sl.dot(sx),I=il.dot(sx);if(I>=0&&d<=I)return a.copy(r);let M=d*c-l*I;if(M<=0&&c>=0&&I<=0)return i=c/(c-I),a.copy(o).addScaledVector(il,i);let m=f*I-d*h;if(m<=0&&h-f>=0&&d-I>=0)return pC.subVectors(r,n),i=(h-f)/(h-f+(d-I)),a.copy(n).addScaledVector(pC,i);let p=1/(m+M+u);return s=M*p,i=u*p,a.copy(o).addScaledVector(sl,s).addScaledVector(il,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},os=class{constructor(e=new U(1/0,1/0,1/0),a=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a+=3)this.expandByPoint(sn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,o=e.count;a<o;a++)this.expandByPoint(sn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,o=e.length;a<o;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let o=sn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let o=e.geometry;if(o!==void 0){let r=o.getAttribute("position");if(a===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,i=r.count;s<i;s++)e.isMesh===!0?e.getVertexPosition(s,sn):sn.fromBufferAttribute(r,s),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nd.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Nd.copy(o.boundingBox)),Nd.applyMatrix4(e.matrixWorld),this.union(Nd)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,o;return e.normal.x>0?(a=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),a<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jc),Od.subVectors(this.max,Jc),ll.subVectors(e.a,Jc),cl.subVectors(e.b,Jc),ul.subVectors(e.c,Jc),$r.subVectors(cl,ll),es.subVectors(ul,cl),zs.subVectors(ll,ul);let a=[0,-$r.z,$r.y,0,-es.z,es.y,0,-zs.z,zs.y,$r.z,0,-$r.x,es.z,0,-es.x,zs.z,0,-zs.x,-$r.y,$r.x,0,-es.y,es.x,0,-zs.y,zs.x,0];return!ux(a,ll,cl,ul,Od)||(a=[1,0,0,0,1,0,0,0,1],!ux(a,ll,cl,ul,Od))?!1:(zd.crossVectors($r,es),a=[zd.x,zd.y,zd.z],ux(a,ll,cl,ul,Od))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new U,new U,new U,new U,new U,new U,new U,new U],sn=new U,Nd=new os,ll=new U,cl=new U,ul=new U,$r=new U,es=new U,zs=new U,Jc=new U,Od=new U,zd=new U,Hs=new U;function ux(t,e,a,o,n){for(let r=0,s=t.length-3;r<=s;r+=3){Hs.fromArray(t,r);let i=n.x*Math.abs(Hs.x)+n.y*Math.abs(Hs.y)+n.z*Math.abs(Hs.z),l=e.dot(Hs),c=a.dot(Hs),f=o.dot(Hs);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>i)return!1}return!0}var fa=new U,Hd=new Te,uw=0,qa=class extends Un{constructor(e,a,o=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uw++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=o,this.usage=u1,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,o){e*=this.itemSize,o*=a.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=a.array[o+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,o=this.count;a<o;a++)Hd.fromBufferAttribute(this,a),Hd.applyMatrix3(e),this.setXY(a,Hd.x,Hd.y);else if(this.itemSize===3)for(let a=0,o=this.count;a<o;a++)fa.fromBufferAttribute(this,a),fa.applyMatrix3(e),this.setXYZ(a,fa.x,fa.y,fa.z);return this}applyMatrix4(e){for(let a=0,o=this.count;a<o;a++)fa.fromBufferAttribute(this,a),fa.applyMatrix4(e),this.setXYZ(a,fa.x,fa.y,fa.z);return this}applyNormalMatrix(e){for(let a=0,o=this.count;a<o;a++)fa.fromBufferAttribute(this,a),fa.applyNormalMatrix(e),this.setXYZ(a,fa.x,fa.y,fa.z);return this}transformDirection(e){for(let a=0,o=this.count;a<o;a++)fa.fromBufferAttribute(this,a),fa.transformDirection(e),this.setXYZ(a,fa.x,fa.y,fa.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let o=this.array[e*this.itemSize+a];return this.normalized&&(o=Zc(o,this.array)),o}setComponent(e,a,o){return this.normalized&&(o=mo(o,this.array)),this.array[e*this.itemSize+a]=o,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Zc(a,this.array)),a}setX(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Zc(a,this.array)),a}setY(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Zc(a,this.array)),a}setZ(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Zc(a,this.array)),a}setW(e,a){return this.normalized&&(a=mo(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,o){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array)),this.array[e+0]=a,this.array[e+1]=o,this}setXYZ(e,a,o,n){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this}setXYZW(e,a,o,n,r){return e*=this.itemSize,this.normalized&&(a=mo(a,this.array),o=mo(o,this.array),n=mo(n,this.array),r=mo(r,this.array)),this.array[e+0]=a,this.array[e+1]=o,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var iu=class extends qa{constructor(e,a,o){super(new Uint16Array(e),a,o)}};var lu=class extends qa{constructor(e,a,o){super(new Uint32Array(e),a,o)}};var da=class extends qa{constructor(e,a,o){super(new Float32Array(e),a,o)}},fw=new os,Qc=new U,fx=new U,Ml=class{constructor(e=new U,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let o=this.center;a!==void 0?o.copy(a):fw.setFromPoints(e).getCenter(o);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,o.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let o=this.center.distanceToSquared(e);return a.copy(e),o>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qc.subVectors(e,this.center);let a=Qc.lengthSq();if(a>this.radius*this.radius){let o=Math.sqrt(a),n=(o-this.radius)*.5;this.center.addScaledVector(Qc,n/o),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qc.copy(e.center).add(fx)),this.expandByPoint(Qc.copy(e.center).sub(fx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dw=0,Ko=new Vt,dx=new ao,fl=new U,Ro=new os,jc=new os,Ta=new U,oo=class t extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QA(e)?lu:iu)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,o=0){this.groups.push({start:e,count:a,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let r=new it().getNormalMatrix(e);o.applyNormalMatrix(r),o.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ko.makeRotationFromQuaternion(e),this.applyMatrix4(Ko),this}rotateX(e){return Ko.makeRotationX(e),this.applyMatrix4(Ko),this}rotateY(e){return Ko.makeRotationY(e),this.applyMatrix4(Ko),this}rotateZ(e){return Ko.makeRotationZ(e),this.applyMatrix4(Ko),this}translate(e,a,o){return Ko.makeTranslation(e,a,o),this.applyMatrix4(Ko),this}scale(e,a,o){return Ko.makeScale(e,a,o),this.applyMatrix4(Ko),this}lookAt(e){return dx.lookAt(e),dx.updateMatrix(),this.applyMatrix4(dx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fl).negate(),this.translate(fl.x,fl.y,fl.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let o=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];o.push(s.x,s.y,s.z||0)}this.setAttribute("position",new da(o,3))}else{let o=Math.min(e.length,a.count);for(let n=0;n<o;n++){let r=e[n];a.setXYZ(n,r.x,r.y,r.z||0)}e.length>a.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let o=0,n=a.length;o<n;o++){let r=a[o];Ro.setFromBufferAttribute(r),this.morphTargetsRelative?(Ta.addVectors(this.boundingBox.min,Ro.min),this.boundingBox.expandByPoint(Ta),Ta.addVectors(this.boundingBox.max,Ro.max),this.boundingBox.expandByPoint(Ta)):(this.boundingBox.expandByPoint(Ro.min),this.boundingBox.expandByPoint(Ro.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let o=this.boundingSphere.center;if(Ro.setFromBufferAttribute(e),a)for(let r=0,s=a.length;r<s;r++){let i=a[r];jc.setFromBufferAttribute(i),this.morphTargetsRelative?(Ta.addVectors(Ro.min,jc.min),Ro.expandByPoint(Ta),Ta.addVectors(Ro.max,jc.max),Ro.expandByPoint(Ta)):(Ro.expandByPoint(jc.min),Ro.expandByPoint(jc.max))}Ro.getCenter(o);let n=0;for(let r=0,s=e.count;r<s;r++)Ta.fromBufferAttribute(e,r),n=Math.max(n,o.distanceToSquared(Ta));if(a)for(let r=0,s=a.length;r<s;r++){let i=a[r],l=this.morphTargetsRelative;for(let c=0,f=i.count;c<f;c++)Ta.fromBufferAttribute(i,c),l&&(fl.fromBufferAttribute(e,c),Ta.add(fl)),n=Math.max(n,o.distanceToSquared(Ta))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=a.position,n=a.normal,r=a.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==o.count)&&(s=new qa(new Float32Array(4*o.count),4),this.setAttribute("tangent",s));let i=[],l=[];for(let S=0;S<o.count;S++)i[S]=new U,l[S]=new U;let c=new U,f=new U,h=new U,u=new Te,d=new Te,I=new Te,M=new U,m=new U;function p(S,T,A){c.fromBufferAttribute(o,S),f.fromBufferAttribute(o,T),h.fromBufferAttribute(o,A),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),I.fromBufferAttribute(r,A),f.sub(c),h.sub(c),d.sub(u),I.sub(u);let R=1/(d.x*I.y-I.x*d.y);isFinite(R)&&(M.copy(f).multiplyScalar(I.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-I.x).multiplyScalar(R),i[S].add(M),i[T].add(M),i[A].add(M),l[S].add(m),l[T].add(m),l[A].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,T=x.length;S<T;++S){let A=x[S],R=A.start,H=A.count;for(let k=R,B=R+H;k<B;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new U,F=new U,C=new U,_=new U;function w(S){C.fromBufferAttribute(n,S),_.copy(C);let T=i[S];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),F.crossVectors(_,T);let R=F.dot(l[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,R)}for(let S=0,T=x.length;S<T;++S){let A=x[S],R=A.start,H=A.count;for(let k=R,B=R+H;k<B;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==a.count)o=new qa(new Float32Array(a.count*3),3),this.setAttribute("normal",o);else for(let u=0,d=o.count;u<d;u++)o.setXYZ(u,0,0,0);let n=new U,r=new U,s=new U,i=new U,l=new U,c=new U,f=new U,h=new U;if(e)for(let u=0,d=e.count;u<d;u+=3){let I=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(a,I),r.fromBufferAttribute(a,M),s.fromBufferAttribute(a,m),f.subVectors(s,r),h.subVectors(n,r),f.cross(h),i.fromBufferAttribute(o,I),l.fromBufferAttribute(o,M),c.fromBufferAttribute(o,m),i.add(f),l.add(f),c.add(f),o.setXYZ(I,i.x,i.y,i.z),o.setXYZ(M,l.x,l.y,l.z),o.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=a.count;u<d;u+=3)n.fromBufferAttribute(a,u+0),r.fromBufferAttribute(a,u+1),s.fromBufferAttribute(a,u+2),f.subVectors(s,r),h.subVectors(n,r),f.cross(h),o.setXYZ(u+0,f.x,f.y,f.z),o.setXYZ(u+1,f.x,f.y,f.z),o.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,o=e.count;a<o;a++)Ta.fromBufferAttribute(e,a),Ta.normalize(),e.setXYZ(a,Ta.x,Ta.y,Ta.z)}toNonIndexed(){function e(i,l){let c=i.array,f=i.itemSize,h=i.normalized,u=new c.constructor(l.length*f),d=0,I=0;for(let M=0,m=l.length;M<m;M++){i.isInterleavedBufferAttribute?d=l[M]*i.data.stride+i.offset:d=l[M]*f;for(let p=0;p<f;p++)u[I++]=c[d++]}return new qa(u,f,h)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,o=this.index.array,n=this.attributes;for(let i in n){let l=n[i],c=e(l,o);a.setAttribute(i,c)}let r=this.morphAttributes;for(let i in r){let l=[],c=r[i];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=e(u,o);l.push(d)}a.morphAttributes[i]=l}a.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let i=0,l=s.length;i<l;i++){let c=s[i];a.addGroup(c.start,c.count,c.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let o=this.attributes;for(let l in o){let c=o[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(n[l]=f,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let i=this.boundingSphere;return i!==null&&(e.data.boundingSphere=i.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let o=e.index;o!==null&&this.setIndex(o.clone());let n=e.attributes;for(let c in n){let f=n[c];this.setAttribute(c,f.clone(a))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(a));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,f=s.length;c<f;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var px=new U,pw=new U,hw=new it,ln=class{constructor(e=new U(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,o,n){return this.normal.set(e,a,o),this.constant=n,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,o){let n=px.subVectors(o,a).cross(pw.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,o=!0){let n=e.delta(px),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return o===!0&&(s<0||s>1)?null:a.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let a=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return a<0&&o>0||o<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let o=a||hw.getNormalMatrix(e),n=this.coplanarPoint(px).applyMatrix4(e),r=this.normal.applyMatrix3(o).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mw=0,ns=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=Ul,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kx,this.blendDst=Nx,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=op,this.stencilZFail=op,this.stencilZPass=op,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let o=e[a];if(o===void 0){tt(`Material: parameter '${a}' has value of undefined.`);continue}let n=this[a];if(n===void 0){tt(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(o):n&&n.isVector2&&o&&o.isVector2||n&&n.isEuler&&o&&o.isEuler||n&&n.isVector3&&o&&o.isVector3?n.copy(o):this[a]=o}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function n(r){let s=[];for(let i in r){let l=r[i];delete l.metadata,s.push(l)}return s}if(a){let r=n(e.textures),s=n(e.images);r.length>0&&(o.textures=r),s.length>0&&(o.images=s)}return o}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(o=>new ln().fromJSON(o))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new Te().fromArray(o)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,o=null;if(a!==null){let n=a.length;o=new Array(n);for(let r=0;r!==n;++r)o[r]=a[r].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var lr=new U,hx=new U,Vd=new U,Gd=new U,cu=class{constructor(e=new U,a=new U(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let o=a.dot(this.direction);return o<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=lr.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,a),lr.distanceToSquared(e))}distanceSqToSegment(e,a,o,n){hx.copy(e).add(a).multiplyScalar(.5),Vd.copy(a).sub(e).normalize(),Gd.copy(this.origin).sub(hx);let r=e.distanceTo(a)*.5,s=-this.direction.dot(Vd),i=Gd.dot(this.direction),l=-Gd.dot(Vd),c=Gd.lengthSq(),f=Math.abs(1-s*s),h,u,d,I;if(f>0)if(h=s*l-i,u=s*i-l,I=r*f,h>=0)if(u>=-I)if(u<=I){let M=1/f;h*=M,u*=M,d=h*(h+s*u+2*i)+u*(s*h+u+2*l)+c}else u=r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;else u<=-I?(h=Math.max(0,-(-s*r+i)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=I?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(s*r+i)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=s>0?-r:r,h=Math.max(0,-(s*u+i)),d=-h*h+u*(u+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(hx).addScaledVector(Vd,u),d}intersectSphere(e,a){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);let o=lr.dot(this.direction),n=lr.dot(lr)-o*o,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),i=o-s,l=o+s;return l<0?null:i<0?this.at(l,a):this.at(i,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(e.normal)+e.constant)/a;return o>=0?o:null}intersectPlane(e,a){let o=this.distanceToPlane(e);return o===null?null:this.at(o,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let o,n,r,s,i,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(o=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(o=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),o>s||r>n||((r>o||isNaN(o))&&(o=r),(s<n||isNaN(n))&&(n=s),h>=0?(i=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(i=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),o>l||i>n)||((i>o||o!==o)&&(o=i),(l<n||n!==n)&&(n=l),n<0)?null:this.at(o>=0?o:n,a)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,a,o,n,r){let s=this.origin,i=this.direction,l=i.x,c=i.y,f=i.z,h=e.x-s.x,u=e.y-s.y,d=e.z-s.z,I=a.x-s.x,M=a.y-s.y,m=a.z-s.z,p=o.x-s.x,x=o.y-s.y,v=o.z-s.z,F=Math.abs(l),C=Math.abs(c),_=Math.abs(f),w,S,T,A,R,H,k,B,z,ee,Y,re;if(F>=C&&F>=_?(T=l,H=h,z=I,re=p,l>=0?(w=c,S=f,A=u,R=d,k=M,B=m,ee=x,Y=v):(w=f,S=c,A=d,R=u,k=m,B=M,ee=v,Y=x)):C>=_?(T=c,H=u,z=M,re=x,c>=0?(w=f,S=l,A=d,R=h,k=m,B=I,ee=v,Y=p):(w=l,S=f,A=h,R=d,k=I,B=m,ee=p,Y=v)):(T=f,H=d,z=m,re=v,f>=0?(w=l,S=c,A=h,R=u,k=I,B=M,ee=p,Y=x):(w=c,S=l,A=u,R=h,k=M,B=I,ee=x,Y=p)),T===0)return null;let W=w/T,$=S/T,ae=1/T,Ae=A-W*H,Me=R-$*H,Ze=k-W*z,N=B-$*z,$e=ee-W*re,Z=Y-$*re,J=$e*N-Z*Ze,ye=Ae*Z-Me*$e,Ne=Ze*Me-N*Ae;if(n){if(J<0||ye<0||Ne<0)return null}else if((J<0||ye<0||Ne<0)&&(J>0||ye>0||Ne>0))return null;let xe=J+ye+Ne;if(xe===0)return null;let Ve=ae*(J*H+ye*z+Ne*re);return(xe>0?Ve<0:Ve>0)?null:this.at(Ve/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ws=class extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hC=new Vt,Vs=new cu,qd=new Ml,mC=new U,Wd=new U,Xd=new U,Yd=new U,mx=new U,Zd=new U,IC=new U,Kd=new U,ra=class extends ao{constructor(e=new oo,a=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,o=Object.keys(a);if(o.length>0){let n=a[o[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let i=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=r}}}}getVertexPosition(e,a){let o=this.geometry,n=o.attributes.position,r=o.morphAttributes.position,s=o.morphTargetsRelative;a.fromBufferAttribute(n,e);let i=this.morphTargetInfluences;if(r&&i){Zd.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=i[l],h=r[l];f!==0&&(mx.fromBufferAttribute(h,e),s?Zd.addScaledVector(mx,f):Zd.addScaledVector(mx.sub(a),f))}a.add(Zd)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let o=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),qd.copy(o.boundingSphere),qd.applyMatrix4(r),Vs.copy(e.ray).recast(e.near),!(qd.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(qd,mC)===null||Vs.origin.distanceToSquared(mC)>(e.far-e.near)**2))&&(hC.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(hC),!(o.boundingBox!==null&&Vs.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,a,Vs)))}_computeIntersections(e,a,o){let n,r=this.geometry,s=this.material,i=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(i!==null)if(Array.isArray(s))for(let I=0,M=u.length;I<M;I++){let m=u[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(i.count,Math.min(m.start+m.count,d.start+d.count));for(let F=x,C=v;F<C;F+=3){let _=i.getX(F),w=i.getX(F+1),S=i.getX(F+2);n=Jd(this,p,e,o,c,f,h,_,w,S),n&&(n.faceIndex=Math.floor(F/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),M=Math.min(i.count,d.start+d.count);for(let m=I,p=M;m<p;m+=3){let x=i.getX(m),v=i.getX(m+1),F=i.getX(m+2);n=Jd(this,s,e,o,c,f,h,x,v,F),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let I=0,M=u.length;I<M;I++){let m=u[I],p=s[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let F=x,C=v;F<C;F+=3){let _=F,w=F+1,S=F+2;n=Jd(this,p,e,o,c,f,h,_,w,S),n&&(n.faceIndex=Math.floor(F/3),n.face.materialIndex=m.materialIndex,a.push(n))}}else{let I=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=I,p=M;m<p;m+=3){let x=m,v=m+1,F=m+2;n=Jd(this,s,e,o,c,f,h,x,v,F),n&&(n.faceIndex=Math.floor(m/3),a.push(n))}}}};function Iw(t,e,a,o,n,r,s,i){let l;if(e.side===no?l=o.intersectTriangle(s,r,n,!0,i):l=o.intersectTriangle(n,r,s,e.side===fs,i),l===null)return null;Kd.copy(i),Kd.applyMatrix4(t.matrixWorld);let c=a.ray.origin.distanceTo(Kd);return c<a.near||c>a.far?null:{distance:c,point:Kd.clone(),object:t}}function Jd(t,e,a,o,n,r,s,i,l,c){t.getVertexPosition(i,Wd),t.getVertexPosition(l,Xd),t.getVertexPosition(c,Yd);let f=Iw(t,e,a,o,Wd,Xd,Yd,IC);if(f){let h=new U;as.getBarycoord(IC,Wd,Xd,Yd,h),n&&(f.uv=as.getInterpolatedAttribute(n,i,l,c,h,new Te)),r&&(f.uv1=as.getInterpolatedAttribute(r,i,l,c,h,new Te)),s&&(f.normal=as.getInterpolatedAttribute(s,i,l,c,h,new U),f.normal.dot(o.direction)>0&&f.normal.multiplyScalar(-1));let u={a:i,b:l,c,normal:new U,materialIndex:0};as.getNormal(Wd,Xd,Yd,u.normal),f.face=u,f.barycoord=h}return f}var Cl=class extends to{constructor(e=null,a=1,o=1,n,r,s,i,l,c=Aa,f=Aa,h,u){super(null,s,i,l,c,f,n,r,h,u),this.isDataTexture=!0,this.image={data:e,width:a,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=new Ml,xw=new Te(.5,.5),Qd=new U,_l=class{constructor(e=new ln,a=new ln,o=new ln,n=new ln,r=new ln,s=new ln){this.planes=[e,a,o,n,r,s]}set(e,a,o,n,r,s){let i=this.planes;return i[0].copy(e),i[1].copy(a),i[2].copy(o),i[3].copy(n),i[4].copy(r),i[5].copy(s),this}copy(e){let a=this.planes;for(let o=0;o<6;o++)a[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,a=cn,o=!1){let n=this.planes,r=e.elements,s=r[0],i=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],I=r[8],M=r[9],m=r[10],p=r[11],x=r[12],v=r[13],F=r[14],C=r[15];if(n[0].setComponents(c-s,d-f,p-I,C-x).normalize(),n[1].setComponents(c+s,d+f,p+I,C+x).normalize(),n[2].setComponents(c+i,d+h,p+M,C+v).normalize(),n[3].setComponents(c-i,d-h,p-M,C-v).normalize(),o)n[4].setComponents(l,u,m,F).normalize(),n[5].setComponents(c-l,d-u,p-m,C-F).normalize();else if(n[4].setComponents(c-l,d-u,p-m,C-F).normalize(),a===cn)n[5].setComponents(c+l,d+u,p+m,C+F).normalize();else if(a===xl)n[5].setComponents(l,u,m,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Gs.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let a=xw.distanceTo(e.center);return Gs.radius=.7071067811865476+a,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let a=this.planes,o=e.center,n=-e.radius;for(let r=0;r<6;r++)if(a[r].distanceToPoint(o)<n)return!1;return!0}intersectsBox(e){let a=this.planes;for(let o=0;o<6;o++){let n=a[o];if(Qd.x=n.normal.x>0?e.max.x:e.min.x,Qd.y=n.normal.y>0?e.max.y:e.min.y,Qd.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Qd)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let o=0;o<6;o++)if(a[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var uu=class extends to{constructor(e=[],a=ds,o,n,r,s,i,l,c,f){super(e,a,o,n,r,s,i,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xs=class extends to{constructor(e,a,o,n,r,s,i,l,c){super(e,a,o,n,r,s,i,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends to{constructor(e,a,o=fn,n,r,s,i=Aa,l=Aa,c,f=Bn,h=1){if(f!==Bn&&f!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:a,depth:h};super(u,n,r,s,i,l,f,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},xp=class extends rs{constructor(e,a=fn,o=ds,n,r,s=Aa,i=Aa,l,c=Bn){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,a,o,n,r,s,i,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fu=class extends to{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bl=class t extends oo{constructor(e=1,a=1,o=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:o,widthSegments:n,heightSegments:r,depthSegments:s};let i=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],f=[],h=[],u=0,d=0;I("z","y","x",-1,-1,o,a,e,s,r,0),I("z","y","x",1,-1,o,a,-e,s,r,1),I("x","z","y",1,1,e,o,a,n,s,2),I("x","z","y",1,-1,e,o,-a,n,s,3),I("x","y","z",1,-1,e,a,o,n,r,4),I("x","y","z",-1,-1,e,a,-o,n,r,5),this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(f,3)),this.setAttribute("uv",new da(h,2));function I(M,m,p,x,v,F,C,_,w,S,T){let A=F/w,R=C/S,H=F/2,k=C/2,B=_/2,z=w+1,ee=S+1,Y=0,re=0,W=new U;for(let $=0;$<ee;$++){let ae=$*R-k;for(let Ae=0;Ae<z;Ae++){let Me=Ae*A-H;W[M]=Me*x,W[m]=ae*v,W[p]=B,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[p]=_>0?1:-1,f.push(W.x,W.y,W.z),h.push(Ae/w),h.push(1-$/S),Y+=1}}for(let $=0;$<S;$++)for(let ae=0;ae<w;ae++){let Ae=u+ae+z*$,Me=u+ae+z*($+1),Ze=u+(ae+1)+z*($+1),N=u+(ae+1)+z*$;l.push(Ae,Me,N),l.push(Me,Ze,N),re+=6}i.addGroup(d,re,T),d+=re,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Do=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,a){let o=this.getUtoTmapping(e);return this.getPoint(o,a)}getPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return a}getSpacedPoints(e=5){let a=[];for(let o=0;o<=e;o++)a.push(this.getPointAt(o/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],o,n=this.getPoint(0),r=0;a.push(0);for(let s=1;s<=e;s++)o=this.getPoint(s/e),r+=o.distanceTo(n),a.push(r),n=o;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let o=this.getLengths(),n=0,r=o.length,s;a?s=a:s=e*o[r-1];let i=0,l=r-1,c;for(;i<=l;)if(n=Math.floor(i+(l-i)/2),c=o[n]-s,c<0)i=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,o[n]===s)return n/(r-1);let f=o[n],u=o[n+1]-f,d=(s-f)/u;return(n+d)/(r-1)}getTangent(e,a){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),i=this.getPoint(r),l=a||(s.isVector2?new Te:new U);return l.copy(i).sub(s).normalize(),l}getTangentAt(e,a){let o=this.getUtoTmapping(e);return this.getTangent(o,a)}computeFrenetFrames(e,a=!1){let o=new U,n=[],r=[],s=[],i=new U,l=new Vt;for(let d=0;d<=e;d++){let I=d/e;n[d]=this.getTangentAt(I,new U)}r[0]=new U,s[0]=new U;let c=Number.MAX_VALUE,f=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);f<=c&&(c=f,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),u<=c&&o.set(0,0,1),i.crossVectors(n[0],o).normalize(),r[0].crossVectors(n[0],i),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),i.crossVectors(n[d-1],n[d]),i.length()>Number.EPSILON){i.normalize();let I=Math.acos(xt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(i,I))}s[d].crossVectors(n[d],r[d])}if(a===!0){let d=Math.acos(xt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(i.crossVectors(r[0],r[e]))>0&&(d=-d);for(let I=1;I<=e;I++)r[I].applyMatrix4(l.makeRotationAxis(n[I],d*I)),s[I].crossVectors(n[I],r[I])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Tl=class extends Do{constructor(e=0,a=0,o=1,n=1,r=0,s=Math.PI*2,i=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=o,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=i,this.aRotation=l}getPoint(e,a=new Te){let o=a,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let i=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(i),c=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return o.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gp=class extends Tl{constructor(e,a,o,n,r,s){super(e,a,o,o,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function ag(){let t=0,e=0,a=0,o=0;function n(r,s,i,l){t=r,e=i,a=-3*r+3*s-2*i-l,o=2*r-2*s+i+l}return{initCatmullRom:function(r,s,i,l,c){n(s,i,c*(i-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,i,l,c,f,h){let u=(s-r)/c-(i-r)/(c+f)+(i-s)/f,d=(i-s)/f-(l-s)/(f+h)+(l-i)/h;u*=f,d*=f,n(s,i,u,d)},calc:function(r){let s=r*r,i=s*r;return t+e*r+a*s+o*i}}}var xC=new U,gC=new U,Ix=new ag,xx=new ag,gx=new ag,Al=class extends Do{constructor(e=[],a=!1,o="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=o,this.tension=n}getPoint(e,a=new U){let o=a,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,i=Math.floor(s),l=s-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/r)+1)*r:l===0&&i===r-1&&(i=r-2,l=1);let c,f;this.closed||i>0?c=n[(i-1)%r]:(gC.subVectors(n[0],n[1]).add(n[0]),c=gC);let h=n[i%r],u=n[(i+1)%r];if(this.closed||i+2<r?f=n[(i+2)%r]:(xC.subVectors(n[r-1],n[r-2]).add(n[r-1]),f=xC),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,I=Math.pow(c.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);M<1e-4&&(M=1),I<1e-4&&(I=M),m<1e-4&&(m=M),Ix.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,I,M,m),xx.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,I,M,m),gx.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,I,M,m)}else this.curveType==="catmullrom"&&(Ix.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),xx.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),gx.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return o.set(Ix.calc(l),xx.calc(l),gx.calc(l)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function FC(t,e,a,o,n){let r=(o-e)*.5,s=(n-a)*.5,i=t*t,l=t*i;return(2*a-2*o+r+s)*l+(-3*a+3*o-2*r-s)*i+r*t+a}function gw(t,e){let a=1-t;return a*a*e}function Fw(t,e){return 2*(1-t)*t*e}function Sw(t,e){return t*t*e}function eu(t,e,a,o){return gw(t,e)+Fw(t,a)+Sw(t,o)}function vw(t,e){let a=1-t;return a*a*a*e}function yw(t,e){let a=1-t;return 3*a*a*t*e}function Mw(t,e){return 3*(1-t)*t*t*e}function Cw(t,e){return t*t*t*e}function tu(t,e,a,o,n){return vw(t,e)+yw(t,a)+Mw(t,o)+Cw(t,n)}var du=class extends Do{constructor(e=new Te,a=new Te,o=new Te,n=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new Te){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(tu(e,n.x,r.x,s.x,i.x),tu(e,n.y,r.y,s.y,i.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fp=class extends Do{constructor(e=new U,a=new U,o=new U,n=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=o,this.v3=n}getPoint(e,a=new U){let o=a,n=this.v0,r=this.v1,s=this.v2,i=this.v3;return o.set(tu(e,n.x,r.x,s.x,i.x),tu(e,n.y,r.y,s.y,i.y),tu(e,n.z,r.z,s.z,i.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pu=class extends Do{constructor(e=new Te,a=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Te){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Te){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sp=class extends Do{constructor(e=new U,a=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new U){let o=a;return e===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(e).add(this.v1)),o}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new U){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hu=class extends Do{constructor(e=new Te,a=new Te,o=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new Te){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(eu(e,n.x,r.x,s.x),eu(e,n.y,r.y,s.y)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vp=class extends Do{constructor(e=new U,a=new U,o=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=o}getPoint(e,a=new U){let o=a,n=this.v0,r=this.v1,s=this.v2;return o.set(eu(e,n.x,r.x,s.x),eu(e,n.y,r.y,s.y),eu(e,n.z,r.z,s.z)),o}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends Do{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Te){let o=a,n=this.points,r=(n.length-1)*e,s=Math.floor(r),i=r-s,l=n[s===0?s:s-1],c=n[s],f=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return o.set(FC(i,l.x,c.x,f.x,h.x),FC(i,l.y,c.y,f.y,h.y)),o}copy(e){super.copy(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,o=this.points.length;a<o;a++){let n=this.points[a];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,o=e.points.length;a<o;a++){let n=e.points[a];this.points.push(new Te().fromArray(n))}return this}},_x=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:Al,CubicBezierCurve:du,CubicBezierCurve3:Fp,EllipseCurve:Tl,LineCurve:pu,LineCurve3:Sp,QuadraticBezierCurve:hu,QuadraticBezierCurve3:vp,SplineCurve:mu}),yp=class extends Do{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),a=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(a)){let o=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _x[o](a,e))}return this}getPoint(e,a){let o=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=o){let s=n[r]-o,i=this.curves[r],l=i.getLength(),c=l===0?0:1-s/l;return i.getPointAt(c,a)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],a=0;for(let o=0,n=this.curves.length;o<n;o++)a+=this.curves[o].getLength(),e.push(a);return this.cacheLengths=e,e}getSpacedPoints(e=40){let a=[];for(let o=0;o<=e;o++)a.push(this.getPoint(o/e));return this.autoClose&&a.push(a[0]),a}getPoints(e=12){let a=[],o;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],i=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(i);for(let c=0;c<l.length;c++){let f=l[c];o&&o.equals(f)||(a.push(f),o=f)}}return this.autoClose&&a.length>1&&!a[a.length-1].equals(a[0])&&a.push(a[0]),a}copy(e){super.copy(e),this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let a=0,o=this.curves.length;a<o;a++){let n=this.curves[a];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let a=0,o=e.curves.length;a<o;a++){let n=e.curves[a];this.curves.push(new _x[n.type]().fromJSON(n))}return this}},Ys=class extends yp{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let a=1,o=e.length;a<o;a++)this.lineTo(e[a].x,e[a].y);return this}moveTo(e,a){return this.currentPoint.set(e,a),this}lineTo(e,a){let o=new pu(this.currentPoint.clone(),new Te(e,a));return this.curves.push(o),this.currentPoint.set(e,a),this}quadraticCurveTo(e,a,o,n){let r=new hu(this.currentPoint.clone(),new Te(e,a),new Te(o,n));return this.curves.push(r),this.currentPoint.set(o,n),this}bezierCurveTo(e,a,o,n,r,s){let i=new du(this.currentPoint.clone(),new Te(e,a),new Te(o,n),new Te(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}splineThru(e){let a=[this.currentPoint.clone()].concat(e),o=new mu(a);return this.curves.push(o),this.currentPoint.copy(e[e.length-1]),this}arc(e,a,o,n,r,s){let i=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+i,a+l,o,n,r,s),this}absarc(e,a,o,n,r,s){return this.absellipse(e,a,o,o,n,r,s),this}ellipse(e,a,o,n,r,s,i,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,a+f,o,n,r,s,i,l),this}absellipse(e,a,o,n,r,s,i,l){let c=new Tl(e,a,o,n,r,s,i,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ss=class extends Ys{constructor(e){super(e),this.uuid=Ol(),this.type="Shape",this.holes=[]}getPointsHoles(e){let a=[];for(let o=0,n=this.holes.length;o<n;o++)a[o]=this.holes[o].getPoints(e);return a}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let a=0,o=this.holes.length;a<o;a++){let n=this.holes[a];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let a=0,o=e.holes.length;a<o;a++){let n=e.holes[a];this.holes.push(new Ys().fromJSON(n))}return this}};function _w(t,e,a=2){let o=e&&e.length,n=o?e[0]*a:t.length,r=I1(t,0,n,a,!0),s=[];if(!r||r.next===r.prev)return s;let i,l,c;if(o&&(r=Ew(t,e,r,a)),t.length>80*a){i=t[0],l=t[1];let f=i,h=l;for(let u=a;u<n;u+=a){let d=t[u],I=t[u+1];d<i&&(i=d),I<l&&(l=I),d>f&&(f=d),I>h&&(h=I)}c=Math.max(f-i,h-l),c=c!==0?32767/c:0}return Iu(r,s,a,i,l,c,0),s}function I1(t,e,a,o,n){let r;if(n===Hw(t,e,a,o)>0)for(let s=e;s<a;s+=o)r=SC(s/o|0,t[s],t[s+1],r);else for(let s=a-o;s>=e;s-=o)r=SC(s/o|0,t[s],t[s+1],r);return r&&wl(r,r.next)&&(gu(r),r=r.next),r}function Zs(t,e){if(!t)return t;e||(e=t);let a=t,o;do if(o=!1,!a.steiner&&(wl(a,a.next)||ea(a.prev,a,a.next)===0)){if(gu(a),a=e=a.prev,a===a.next)break;o=!0}else a=a.next;while(o||a!==e);return e}function Iu(t,e,a,o,n,r,s){if(!t)return;!s&&r&&Bw(t,o,n,r);let i=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?Tw(t,o,n,r):bw(t)){e.push(l.i,t.i,c.i),gu(t),t=c.next,i=c.next;continue}if(t=c,t===i){s?s===1?(t=Aw(Zs(t),e),Iu(t,e,a,o,n,r,2)):s===2&&ww(t,e,a,o,n,r):Iu(Zs(t),e,a,o,n,r,1);break}}}function bw(t){let e=t.prev,a=t,o=t.next;if(ea(e,a,o)>=0)return!1;let n=e.x,r=a.x,s=o.x,i=e.y,l=a.y,c=o.y,f=Math.min(n,r,s),h=Math.min(i,l,c),u=Math.max(n,r,s),d=Math.max(i,l,c),I=o.next;for(;I!==e;){if(I.x>=f&&I.x<=u&&I.y>=h&&I.y<=d&&$c(n,i,r,l,s,c,I.x,I.y)&&ea(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function Tw(t,e,a,o){let n=t.prev,r=t,s=t.next;if(ea(n,r,s)>=0)return!1;let i=n.x,l=r.x,c=s.x,f=n.y,h=r.y,u=s.y,d=Math.min(i,l,c),I=Math.min(f,h,u),M=Math.max(i,l,c),m=Math.max(f,h,u),p=bx(d,I,e,a,o),x=bx(M,m,e,a,o),v=t.prevZ,F=t.nextZ;for(;v&&v.z>=p&&F&&F.z<=x;){if(v.x>=d&&v.x<=M&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&$c(i,f,l,h,c,u,v.x,v.y)&&ea(v.prev,v,v.next)>=0||(v=v.prevZ,F.x>=d&&F.x<=M&&F.y>=I&&F.y<=m&&F!==n&&F!==s&&$c(i,f,l,h,c,u,F.x,F.y)&&ea(F.prev,F,F.next)>=0))return!1;F=F.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=M&&v.y>=I&&v.y<=m&&v!==n&&v!==s&&$c(i,f,l,h,c,u,v.x,v.y)&&ea(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;F&&F.z<=x;){if(F.x>=d&&F.x<=M&&F.y>=I&&F.y<=m&&F!==n&&F!==s&&$c(i,f,l,h,c,u,F.x,F.y)&&ea(F.prev,F,F.next)>=0)return!1;F=F.nextZ}return!0}function Aw(t,e){let a=t;do{let o=a.prev,n=a.next.next;!wl(o,n)&&g1(o,a,a.next,n)&&xu(o,n)&&xu(n,o)&&(e.push(o.i,a.i,n.i),gu(a),gu(a.next),a=t=n),a=a.next}while(a!==t);return Zs(a)}function ww(t,e,a,o,n,r){let s=t;do{let i=s.next.next;for(;i!==s.prev;){if(s.i!==i.i&&Nw(s,i)){let l=F1(s,i);s=Zs(s,s.next),l=Zs(l,l.next),Iu(s,e,a,o,n,r,0),Iu(l,e,a,o,n,r,0);return}i=i.next}s=s.next}while(s!==t)}function Ew(t,e,a,o){let n=[];for(let r=0,s=e.length;r<s;r++){let i=e[r]*o,l=r<s-1?e[r+1]*o:t.length,c=I1(t,i,l,o,!1);c===c.next&&(c.steiner=!0),n.push(kw(c))}n.sort(Rw);for(let r=0;r<n.length;r++)a=Dw(n[r],a);return a}function Rw(t,e){let a=t.x-e.x;if(a===0&&(a=t.y-e.y,a===0)){let o=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);a=o-n}return a}function Dw(t,e){let a=Lw(t,e);if(!a)return e;let o=F1(a,t);return Zs(o,o.next),Zs(a,a.next)}function Lw(t,e){let a=e,o=t.x,n=t.y,r=-1/0,s;if(wl(t,a))return a;do{if(wl(t,a.next))return a.next;if(n<=a.y&&n>=a.next.y&&a.next.y!==a.y){let h=a.x+(n-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(h<=o&&h>r&&(r=h,s=a.x<a.next.x?a:a.next,h===o))return s}a=a.next}while(a!==e);if(!s)return null;let i=s,l=s.x,c=s.y,f=1/0;a=s;do{if(o>=a.x&&a.x>=l&&o!==a.x&&x1(n<c?o:r,n,l,c,n<c?r:o,n,a.x,a.y)){let h=Math.abs(n-a.y)/(o-a.x);xu(a,t)&&(h<f||h===f&&(a.x>s.x||a.x===s.x&&Pw(s,a)))&&(s=a,f=h)}a=a.next}while(a!==i);return s}function Pw(t,e){return ea(t.prev,t,e.prev)<0&&ea(e.next,t,t.next)<0}function Bw(t,e,a,o){let n=t;do n.z===0&&(n.z=bx(n.x,n.y,e,a,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,Uw(n)}function Uw(t){let e,a=1;do{let o=t,n;t=null;let r=null;for(e=0;o;){e++;let s=o,i=0;for(let c=0;c<a&&(i++,s=s.nextZ,!!s);c++);let l=a;for(;i>0||l>0&&s;)i!==0&&(l===0||!s||o.z<=s.z)?(n=o,o=o.nextZ,i--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:t=n,n.prevZ=r,r=n;o=s}r.nextZ=null,a*=2}while(e>1);return t}function bx(t,e,a,o,n){return t=(t-a)*n|0,e=(e-o)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function kw(t){let e=t,a=t;do(e.x<a.x||e.x===a.x&&e.y<a.y)&&(a=e),e=e.next;while(e!==t);return a}function x1(t,e,a,o,n,r,s,i){return(n-s)*(e-i)>=(t-s)*(r-i)&&(t-s)*(o-i)>=(a-s)*(e-i)&&(a-s)*(r-i)>=(n-s)*(o-i)}function $c(t,e,a,o,n,r,s,i){return!(t===s&&e===i)&&x1(t,e,a,o,n,r,s,i)}function Nw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ow(t,e)&&(xu(t,e)&&xu(e,t)&&zw(t,e)&&(ea(t.prev,t,e.prev)||ea(t,e.prev,e))||wl(t,e)&&ea(t.prev,t,t.next)>0&&ea(e.prev,e,e.next)>0)}function ea(t,e,a){return(e.y-t.y)*(a.x-e.x)-(e.x-t.x)*(a.y-e.y)}function wl(t,e){return t.x===e.x&&t.y===e.y}function g1(t,e,a,o){let n=$d(ea(t,e,a)),r=$d(ea(t,e,o)),s=$d(ea(a,o,t)),i=$d(ea(a,o,e));return!!(n!==r&&s!==i||n===0&&jd(t,a,e)||r===0&&jd(t,o,e)||s===0&&jd(a,t,o)||i===0&&jd(a,e,o))}function jd(t,e,a){return e.x<=Math.max(t.x,a.x)&&e.x>=Math.min(t.x,a.x)&&e.y<=Math.max(t.y,a.y)&&e.y>=Math.min(t.y,a.y)}function $d(t){return t>0?1:t<0?-1:0}function Ow(t,e){let a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==e.i&&a.next.i!==e.i&&g1(a,a.next,t,e))return!0;a=a.next}while(a!==t);return!1}function xu(t,e){return ea(t.prev,t,t.next)<0?ea(t,e,t.next)>=0&&ea(t,t.prev,e)>=0:ea(t,e,t.prev)<0||ea(t,t.next,e)<0}function zw(t,e){let a=t,o=!1,n=(t.x+e.x)/2,r=(t.y+e.y)/2;do a.y>r!=a.next.y>r&&a.next.y!==a.y&&n<(a.next.x-a.x)*(r-a.y)/(a.next.y-a.y)+a.x&&(o=!o),a=a.next;while(a!==t);return o}function F1(t,e){let a=Tx(t.i,t.x,t.y),o=Tx(e.i,e.x,e.y),n=t.next,r=e.prev;return t.next=e,e.prev=t,a.next=n,n.prev=a,o.next=a,a.prev=o,r.next=o,o.prev=r,o}function SC(t,e,a,o){let n=Tx(t,e,a);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function gu(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Tx(t,e,a){return{i:t,x:e,y:a,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hw(t,e,a,o){let n=0;for(let r=e,s=a-o;r<a;r+=o)n+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return n}var Ax=class{static triangulate(e,a,o=2){return _w(e,a,o)}},Ln=class t{static area(e){let a=e.length,o=0;for(let n=a-1,r=0;r<a;n=r++)o+=e[n].x*e[r].y-e[r].x*e[n].y;return o*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,a){let o=[],n=[],r=[];vC(e),yC(o,e);let s=e.length;a.forEach(vC);for(let l=0;l<a.length;l++)n.push(s),s+=a[l].length,yC(o,a[l]);let i=Ax.triangulate(o,n);for(let l=0;l<i.length;l+=3)r.push(i.slice(l,l+3));return r}};function vC(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function yC(t,e){for(let a=0;a<e.length;a++)t.push(e[a].x),t.push(e[a].y)}var El=class t extends oo{constructor(e=new ss([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),a={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:a},e=Array.isArray(e)?e:[e];let o=this,n=[],r=[];for(let i=0,l=e.length;i<l;i++){let c=e[i];s(c)}this.setAttribute("position",new da(n,3)),this.setAttribute("uv",new da(r,2)),this.computeVertexNormals();function s(i){let l=[],c=a.curveSegments!==void 0?a.curveSegments:12,f=a.steps!==void 0?a.steps:1,h=a.depth!==void 0?a.depth:1,u=a.bevelEnabled!==void 0?a.bevelEnabled:!0,d=a.bevelThickness!==void 0?a.bevelThickness:.2,I=a.bevelSize!==void 0?a.bevelSize:d-.1,M=a.bevelOffset!==void 0?a.bevelOffset:0,m=a.bevelSegments!==void 0?a.bevelSegments:3,p=a.extrudePath,x=a.UVGenerator!==void 0?a.UVGenerator:Vw,v,F=!1,C,_,w,S;if(p){v=p.getSpacedPoints(f),F=!0,u=!1;let j=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(f,j),_=new U,w=new U,S=new U}u||(m=0,d=0,I=0,M=0);let T=i.extractPoints(c),A=T.shape,R=T.holes;if(!Ln.isClockWise(A)){A=A.reverse();for(let j=0,ne=R.length;j<ne;j++){let le=R[j];Ln.isClockWise(le)&&(R[j]=le.reverse())}}function k(j){let le=10000000000000001e-36,ce=j[0];for(let de=1;de<=j.length;de++){let Ge=de%j.length,Be=j[Ge],Pe=Be.x-ce.x,He=Be.y-ce.y,E=Pe*Pe+He*He,nt=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),Xe=le*nt*nt;if(E<=Xe){j.splice(Ge,1),de--;continue}ce=Be}}k(A),R.forEach(k);let B=R.length,z=A;for(let j=0;j<B;j++){let ne=R[j];A=A.concat(ne)}function ee(j,ne,le){return ne||et("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ne,le)}let Y=A.length;function re(j,ne,le){let ce,de,Ge,Be=j.x-ne.x,Pe=j.y-ne.y,He=le.x-j.x,E=le.y-j.y,nt=Be*Be+Pe*Pe,Xe=Be*E-Pe*He;if(Math.abs(Xe)>Number.EPSILON){let b=Math.sqrt(nt),g=Math.sqrt(He*He+E*E),P=ne.x-Pe/b,q=ne.y+Be/b,Q=le.x-E/g,he=le.y+He/g,fe=((Q-P)*E-(he-q)*He)/(Be*E-Pe*He);ce=P+Be*fe-j.x,de=q+Pe*fe-j.y;let X=ce*ce+de*de;if(X<=2)return new Te(ce,de);Ge=Math.sqrt(X/2)}else{let b=!1;Be>Number.EPSILON?He>Number.EPSILON&&(b=!0):Be<-Number.EPSILON?He<-Number.EPSILON&&(b=!0):Math.sign(Pe)===Math.sign(E)&&(b=!0),b?(ce=-Pe,de=Be,Ge=Math.sqrt(nt)):(ce=Be,de=Pe,Ge=Math.sqrt(nt/2))}return new Te(ce/Ge,de/Ge)}let W=[];for(let j=0,ne=z.length,le=ne-1,ce=j+1;j<ne;j++,le++,ce++)le===ne&&(le=0),ce===ne&&(ce=0),W[j]=re(z[j],z[le],z[ce]);let $=[],ae,Ae=W.concat();for(let j=0,ne=B;j<ne;j++){let le=R[j];ae=[];for(let ce=0,de=le.length,Ge=de-1,Be=ce+1;ce<de;ce++,Ge++,Be++)Ge===de&&(Ge=0),Be===de&&(Be=0),ae[ce]=re(le[ce],le[Ge],le[Be]);$.push(ae),Ae=Ae.concat(ae)}let Me;if(m===0)Me=Ln.triangulateShape(z,R);else{let j=[],ne=[];for(let le=0;le<m;le++){let ce=le/m,de=d*Math.cos(ce*Math.PI/2),Ge=I*Math.sin(ce*Math.PI/2)+M;for(let Be=0,Pe=z.length;Be<Pe;Be++){let He=ee(z[Be],W[Be],Ge);ye(He.x,He.y,-de),ce===0&&j.push(He)}for(let Be=0,Pe=B;Be<Pe;Be++){let He=R[Be];ae=$[Be];let E=[];for(let nt=0,Xe=He.length;nt<Xe;nt++){let b=ee(He[nt],ae[nt],Ge);ye(b.x,b.y,-de),ce===0&&E.push(b)}ce===0&&ne.push(E)}}Me=Ln.triangulateShape(j,ne)}let Ze=Me.length,N=I+M;for(let j=0;j<Y;j++){let ne=u?ee(A[j],Ae[j],N):A[j];F?(w.copy(C.normals[0]).multiplyScalar(ne.x),_.copy(C.binormals[0]).multiplyScalar(ne.y),S.copy(v[0]).add(w).add(_),ye(S.x,S.y,S.z)):ye(ne.x,ne.y,0)}for(let j=1;j<=f;j++)for(let ne=0;ne<Y;ne++){let le=u?ee(A[ne],Ae[ne],N):A[ne];F?(w.copy(C.normals[j]).multiplyScalar(le.x),_.copy(C.binormals[j]).multiplyScalar(le.y),S.copy(v[j]).add(w).add(_),ye(S.x,S.y,S.z)):ye(le.x,le.y,h/f*j)}for(let j=m-1;j>=0;j--){let ne=j/m,le=d*Math.cos(ne*Math.PI/2),ce=I*Math.sin(ne*Math.PI/2)+M;for(let de=0,Ge=z.length;de<Ge;de++){let Be=ee(z[de],W[de],ce);ye(Be.x,Be.y,h+le)}for(let de=0,Ge=R.length;de<Ge;de++){let Be=R[de];ae=$[de];for(let Pe=0,He=Be.length;Pe<He;Pe++){let E=ee(Be[Pe],ae[Pe],ce);F?ye(E.x,E.y+v[f-1].y,v[f-1].x+le):ye(E.x,E.y,h+le)}}}$e(),Z();function $e(){let j=n.length/3;if(u){let ne=0,le=Y*ne;for(let ce=0;ce<Ze;ce++){let de=Me[ce];Ne(de[2]+le,de[1]+le,de[0]+le)}ne=f+m*2,le=Y*ne;for(let ce=0;ce<Ze;ce++){let de=Me[ce];Ne(de[0]+le,de[1]+le,de[2]+le)}}else{for(let ne=0;ne<Ze;ne++){let le=Me[ne];Ne(le[2],le[1],le[0])}for(let ne=0;ne<Ze;ne++){let le=Me[ne];Ne(le[0]+Y*f,le[1]+Y*f,le[2]+Y*f)}}o.addGroup(j,n.length/3-j,0)}function Z(){let j=n.length/3,ne=0;J(z,ne),ne+=z.length;for(let le=0,ce=R.length;le<ce;le++){let de=R[le];J(de,ne),ne+=de.length}o.addGroup(j,n.length/3-j,1)}function J(j,ne){let le=j.length;for(;--le>=0;){let ce=le,de=le-1;de<0&&(de=j.length-1);for(let Ge=0,Be=f+m*2;Ge<Be;Ge++){let Pe=Y*Ge,He=Y*(Ge+1),E=ne+ce+Pe,nt=ne+de+Pe,Xe=ne+de+He,b=ne+ce+He;xe(E,nt,Xe,b)}}}function ye(j,ne,le){l.push(j),l.push(ne),l.push(le)}function Ne(j,ne,le){Ve(j),Ve(ne),Ve(le);let ce=n.length/3,de=x.generateTopUV(o,n,ce-3,ce-2,ce-1);Qe(de[0]),Qe(de[1]),Qe(de[2])}function xe(j,ne,le,ce){Ve(j),Ve(ne),Ve(ce),Ve(ne),Ve(le),Ve(ce);let de=n.length/3,Ge=x.generateSideWallUV(o,n,de-6,de-3,de-2,de-1);Qe(Ge[0]),Qe(Ge[1]),Qe(Ge[3]),Qe(Ge[1]),Qe(Ge[2]),Qe(Ge[3])}function Ve(j){n.push(l[j*3+0]),n.push(l[j*3+1]),n.push(l[j*3+2])}function Qe(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes,o=this.parameters.options;return Gw(a,o,e)}static fromJSON(e,a){let o=[];for(let r=0,s=e.shapes.length;r<s;r++){let i=a[e.shapes[r]];o.push(i)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new _x[n.type]().fromJSON(n)),new t(o,e.options)}},Vw={generateTopUV:function(t,e,a,o,n){let r=e[a*3],s=e[a*3+1],i=e[o*3],l=e[o*3+1],c=e[n*3],f=e[n*3+1];return[new Te(r,s),new Te(i,l),new Te(c,f)]},generateSideWallUV:function(t,e,a,o,n,r){let s=e[a*3],i=e[a*3+1],l=e[a*3+2],c=e[o*3],f=e[o*3+1],h=e[o*3+2],u=e[n*3],d=e[n*3+1],I=e[n*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(i-f)<Math.abs(s-c)?[new Te(s,1-l),new Te(c,1-h),new Te(u,1-I),new Te(M,1-p)]:[new Te(i,1-l),new Te(f,1-h),new Te(d,1-I),new Te(m,1-p)]}};function Gw(t,e,a){if(a.shapes=[],Array.isArray(t))for(let o=0,n=t.length;o<n;o++){let r=t[o];a.shapes.push(r.uuid)}else a.shapes.push(t.uuid);return a.options=Object.assign({},e),e.extrudePath!==void 0&&(a.options.extrudePath=e.extrudePath.toJSON()),a}var Ks=class t extends oo{constructor(e=1,a=1,o=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:o,heightSegments:n};let r=e/2,s=a/2,i=Math.floor(o),l=Math.floor(n),c=i+1,f=l+1,h=e/i,u=a/l,d=[],I=[],M=[],m=[];for(let p=0;p<f;p++){let x=p*u-s;for(let v=0;v<c;v++){let F=v*h-r;I.push(F,-x,0),M.push(0,0,1),m.push(v/i),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<i;x++){let v=x+c*p,F=x+c*(p+1),C=x+1+c*(p+1),_=x+1+c*p;d.push(v,F,_),d.push(F,C,_)}this.setIndex(d),this.setAttribute("position",new da(I,3)),this.setAttribute("normal",new da(M,3)),this.setAttribute("uv",new da(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fu=class t extends oo{constructor(e=new ss([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),a=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:a};let o=[],n=[],r=[],s=[],i=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(i,l,f),i+=l,l=0;this.setIndex(o),this.setAttribute("position",new da(n,3)),this.setAttribute("normal",new da(r,3)),this.setAttribute("uv",new da(s,2));function c(f){let h=n.length/3,u=f.extractPoints(a),d=u.shape,I=u.holes;Ln.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=I.length;m<p;m++){let x=I[m];Ln.isClockWise(x)===!0&&(I[m]=x.reverse())}let M=Ln.triangulateShape(d,I);for(let m=0,p=I.length;m<p;m++){let x=I[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];n.push(x.x,x.y,0),r.push(0,0,1),s.push(x.x,x.y)}for(let m=0,p=M.length;m<p;m++){let x=M[m],v=x[0]+h,F=x[1]+h,C=x[2]+h;o.push(v,F,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),a=this.parameters.shapes;return qw(a,e)}static fromJSON(e,a){let o=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=a[e.shapes[n]];o.push(s)}return new t(o,e.curveSegments)}};function qw(t,e){if(e.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let n=t[a];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Rl=class t extends oo{constructor(e=1,a=.4,o=12,n=48,r=Math.PI*2,s=0,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:o,tubularSegments:n,arc:r,thetaStart:s,thetaLength:i},o=Math.floor(o),n=Math.floor(n);let l=[],c=[],f=[],h=[],u=new U,d=new U,I=new U;for(let M=0;M<=o;M++){let m=s+M/o*i;for(let p=0;p<=n;p++){let x=p/n*r;d.x=(e+a*Math.cos(m))*Math.cos(x),d.y=(e+a*Math.cos(m))*Math.sin(x),d.z=a*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),I.subVectors(d,u).normalize(),f.push(I.x,I.y,I.z),h.push(p/n),h.push(M/o)}}for(let M=1;M<=o;M++)for(let m=1;m<=n;m++){let p=(n+1)*M+m-1,x=(n+1)*(M-1)+m-1,v=(n+1)*(M-1)+m,F=(n+1)*M+m;l.push(p,x,F),l.push(x,v,F)}this.setIndex(l),this.setAttribute("position",new da(c,3)),this.setAttribute("normal",new da(f,3)),this.setAttribute("uv",new da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function js(t){let e={};for(let a in t){e[a]={};for(let o in t[a]){let n=t[a][o];if(MC(n))n.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][o]=null):e[a][o]=n.clone();else if(Array.isArray(n))if(MC(n[0])){let r=[];for(let s=0,i=n.length;s<i;s++)r[s]=n[s].clone();e[a][o]=r}else e[a][o]=n.slice();else e[a][o]=n}}return e}function Wa(t){let e={};for(let a=0;a<t.length;a++){let o=js(t[a]);for(let n in o)e[n]=o[n]}return e}function MC(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ww(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function og(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var S1={clone:js,merge:Wa},Xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lo=class extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xw,this.fragmentShader=Yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?a.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?a.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?a.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?a.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?a.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?a.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?a.uniforms[n]={type:"m4",value:s.toArray()}:a.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let o={};for(let n in this.extensions)this.extensions[n]===!0&&(o[n]=!0);return Object.keys(o).length>0&&(a.extensions=o),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(this.uniforms[o]={},n.type){case"t":this.uniforms[o].value=a[n.value]||null;break;case"c":this.uniforms[o].value=new ut().setHex(n.value);break;case"v2":this.uniforms[o].value=new Te().fromArray(n.value);break;case"v3":this.uniforms[o].value=new U().fromArray(n.value);break;case"v4":this.uniforms[o].value=new jt().fromArray(n.value);break;case"m3":this.uniforms[o].value=new it().fromArray(n.value);break;case"m4":this.uniforms[o].value=new Vt().fromArray(n.value);break;default:this.uniforms[o].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let o in e.extensions)this.extensions[o]=e.extensions[o];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mp=class extends Lo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dl=class extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},is=class extends Dl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Cp=class extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_p=class extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Fx(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var ls=class{constructor(e,a,o,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new a.constructor(o),this.sampleValues=a,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,o=this._cachedIndex,n=a[o],r=a[o-1];e:{t:{let s;a:{o:if(!(e<n)){for(let i=o+2;;){if(n===void 0){if(e<r)break o;return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===i)break;if(r=n,n=a[++o],e<n)break t}s=a.length;break a}if(!(e>=r)){let i=a[1];e<i&&(o=2,r=i);for(let l=o-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(n=r,r=a[--o-1],e>=r)break t}s=o,o=0;break a}break e}for(;o<s;){let i=o+s>>>1;e<a[i]?s=i:o=i+1}if(n=a[o],r=a[o-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return o=a.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,r,n)}return this.interpolate_(o,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,o=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)a[s]=o[r+s];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bp=class extends ls{constructor(e,a,o,n){super(e,a,o,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yx,endingEnd:yx}}intervalChanged_(e,a,o){let n=this.parameterPositions,r=e-2,s=e+1,i=n[r],l=n[s];if(i===void 0)switch(this.getSettings_().endingStart){case Mx:r=e,i=2*a-o;break;case Cx:r=n.length-2,i=a+n[r]-n[r+1];break;default:r=e,i=o}if(l===void 0)switch(this.getSettings_().endingEnd){case Mx:s=e,l=2*o-a;break;case Cx:s=1,l=o+n[1]-n[0];break;default:s=e-1,l=a}let c=(o-a)*.5,f=this.valueSize;this._weightPrev=c/(a-i),this._weightNext=c/(l-o),this._offsetPrev=r*f,this._offsetNext=s*f}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,I=(o-a)/(n-a),M=I*I,m=M*I,p=-u*m+2*u*M-u*I,x=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*I+1,v=(-1-d)*m+(1.5+d)*M+.5*I,F=d*m-d*M;for(let C=0;C!==i;++C)r[C]=p*s[f+C]+x*s[c+C]+v*s[l+C]+F*s[h+C];return r}},Tp=class extends ls{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=(o-a)/(n-a),h=1-f;for(let u=0;u!==i;++u)r[u]=s[c+u]*h+s[l+u]*f;return r}},Ap=class extends ls{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e){return this.copySampleValue_(e-1)}},wp=class extends ls{interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,f=this.inTangents,h=this.outTangents;if(!f||!h){let I=(o-a)/(n-a),M=1-I;for(let m=0;m!==i;++m)r[m]=s[c+m]*M+s[l+m]*I;return r}let u=i*2,d=e-1;for(let I=0;I!==i;++I){let M=s[c+I],m=s[l+I],p=d*u+I*2,x=h[p],v=h[p+1],F=e*u+I*2,C=f[F],_=f[F+1],w=Kw(o,a,x,C,n);r[I]=v1(w,M,v,_,m)}return r}};function v1(t,e,a,o,n){let r=1-t;return r*r*r*e+3*r*r*t*a+3*r*t*t*o+t*t*t*n}function Zw(t,e,a,o,n){let r=1-t;return 3*r*r*(a-e)+6*r*t*(o-a)+3*t*t*(n-o)}function Kw(t,e,a,o,n){let r=(t-e)/(n-e);for(let s=0;s<8;s++){let i=v1(r,e,a,o,n)-t;if(Math.abs(i)<1e-10)break;let l=Zw(r,e,a,o,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-i/l))}return r}var Po=class{constructor(e,a,o,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(a,this.TimeBufferType),this.values=dl(o,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,o;if(a.toJSON!==this.toJSON)o=a.toJSON(e);else{o={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(o.interpolation=n),Fx(e.settings)&&(o.settings={inTangents:dl(e.settings.inTangents,Array),outTangents:dl(e.settings.outTangents,Array)})}return o.type=e.ValueTypeName,o}InterpolantFactoryMethodDiscrete(e){return new Ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new wp(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case au:a=this.InterpolantFactoryMethodDiscrete;break;case dp:a=this.InterpolantFactoryMethodLinear;break;case ap:a=this.InterpolantFactoryMethodSmooth;break;case vx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return tt("KeyframeTrack:",o),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return au;case this.InterpolantFactoryMethodLinear:return dp;case this.InterpolantFactoryMethodSmooth:return ap;case this.InterpolantFactoryMethodBezier:return vx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let o=0,n=a.length;o!==n;++o)a[o]*=e;Fx(this.settings)&&(CC(this.settings.inTangents,e),CC(this.settings.outTangents,e))}return this}trim(e,a){let o=this.times,n=o.length,r=0,s=n-1;for(;r!==n&&o[r]<e;)++r;for(;s!==-1&&o[s]>a;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let i=this.getValueSize();this.times=o.slice(r,s),this.values=this.values.slice(r*i,s*i)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let o=this.times,n=this.values,r=o.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let i=0;i!==r;i++){let l=o[i];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,i,l,s),e=!1;break}s=l}if(n!==void 0&&jA(n))for(let i=0,l=n.length;i!==l;++i){let c=n[i];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),o=this.getValueSize(),n=this.getInterpolation()===ap,r=e.length-1,s=1;for(let i=1;i<r;++i){let l=!1,c=e[i],f=e[i+1];if(c!==f&&(i!==1||c!==e[0]))if(n)l=!0;else{let h=i*o,u=h-o,d=h+o;for(let I=0;I!==o;++I){let M=a[h+I];if(M!==a[u+I]||M!==a[d+I]){l=!0;break}}}if(l){if(i!==s){e[s]=e[i];let h=i*o,u=s*o;for(let d=0;d!==o;++d)a[u+d]=a[h+d]}++s}}if(r>0){e[s]=e[r];for(let i=r*o,l=s*o,c=0;c!==o;++c)a[l+c]=a[i+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=a.slice(0,s*o)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),o=this.constructor,n=new o(this.name,e,a);return n.createInterpolant=this.createInterpolant,Fx(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function CC(t,e){for(let a=0,o=t.length;a!==o;a+=2)t[a]*=e}Po.prototype.ValueTypeName="";Po.prototype.TimeBufferType=Float32Array;Po.prototype.ValueBufferType=Float32Array;Po.prototype.DefaultInterpolation=dp;var cs=class extends Po{constructor(e,a,o){super(e,a,o)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=au;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ep=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Ep.prototype.ValueTypeName="color";var Rp=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Rp.prototype.ValueTypeName="number";var Dp=class extends ls{constructor(e,a,o,n){super(e,a,o,n)}interpolate_(e,a,o,n){let r=this.resultBuffer,s=this.sampleValues,i=this.valueSize,l=(o-a)/(n-a),c=e*i;for(let f=c+i;c!==f;c+=4)eo.slerpFlat(r,0,s,c-i,s,c,l);return r}},Su=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}InterpolantFactoryMethodLinear(e){return new Dp(this.times,this.values,this.getValueSize(),e)}};Su.prototype.ValueTypeName="quaternion";Su.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Po{constructor(e,a,o){super(e,a,o)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=au;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Lp=class extends Po{constructor(e,a,o,n){super(e,a,o,n)}};Lp.prototype.ValueTypeName="vector";var Pp=class{constructor(e,a,o){let n=this,r=!1,s=0,i=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=o,this._abortController=null,this.itemStart=function(f){i++,r===!1&&n.onStart!==void 0&&n.onStart(f,s,i),r=!0},this.itemEnd=function(f){s++,n.onProgress!==void 0&&n.onProgress(f,s,i),s===i&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],I=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return I}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},y1=new Pp,Bp=class{constructor(e){this.manager=e!==void 0?e:y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let o=this;return new Promise(function(n,r){o.load(e,n,a,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Up=class extends ao{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var Sx=new Vt,_C=new U,bC=new U,kp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=xo,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;_C.setFromMatrixPosition(e.matrixWorld),a.position.copy(_C),bC.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(bC),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,o,n){Sx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(Sx,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,i=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===xl||e.reversedDepth?a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,1,0,0,0,0,1):a.set(.5*s,0,0,.5*s+l,0,.5*i,0,.5*i+c,0,0,.5,.5,0,0,0,1),a.multiply(Sx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ep=new U,tp=new eo,Rn=new U,vu=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ep,tp,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ep,tp,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,a,o=!1){super.updateWorldMatrix(e,a,o),this.matrixWorld.decompose(ep,tp,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ep,tp,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new U,TC=new Te,AC=new Te,Ga=class extends vu{constructor(e=50,a=1,o=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=n,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=pp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(K0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(K0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,o){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,a){return this.getViewBounds(e,TC,AC),a.subVectors(AC,TC)}setViewOffset(e,a,o,n,r,s){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(K0*.5*this.fov)/this.zoom,o=2*a,n=this.aspect*o,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,a-=s.offsetY*o/c,n*=s.width/l,o*=s.height/c}let i=this.filmOffset;i!==0&&(r+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,a,a-o,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Ll=class extends vu{constructor(e=-1,a=1,o=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=o,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,o,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=o,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=o-e,s=o+e,i=n+a,l=n-a;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,i-=f*this.view.offsetY,l=i-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,i,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},wx=class extends kp{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pl=class extends Up{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ao.DEFAULT_UP),this.updateMatrix(),this.target=new ao,this.shadow=new wx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var pl=-90,hl=1,Np=class extends ao{constructor(e,a,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ga(pl,hl,e,a);n.layers=this.layers,this.add(n);let r=new Ga(pl,hl,e,a);r.layers=this.layers,this.add(r);let s=new Ga(pl,hl,e,a);s.layers=this.layers,this.add(s);let i=new Ga(pl,hl,e,a);i.layers=this.layers,this.add(i);let l=new Ga(pl,hl,e,a);l.layers=this.layers,this.add(l);let c=new Ga(pl,hl,e,a);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[o,n,r,s,i,l]=a;for(let c of a)this.remove(c);if(e===cn)o.up.set(0,1,0),o.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xl)o.up.set(0,-1,0),o.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of a)this.add(c),c.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,i,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),I=e.xr.enabled;e.xr.enabled=!1;let M=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(o,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(o,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(o,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,i),e.setRenderTarget(o,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(o,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,c),o.texture.generateMipmaps=M,e.setRenderTarget(o,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(h,u,d),e.xr.enabled=I,o.texture.needsPMREMUpdate=!0}},Op=class extends Ga{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ng="\\[\\]\\.:\\/",Jw=new RegExp("["+ng+"]","g"),rg="[^"+ng+"]",Qw="[^"+ng.replace("\\.","")+"]",jw=/((?:WC+[\/:])*)/.source.replace("WC",rg),$w=/(WCOD+)?/.source.replace("WCOD",Qw),eE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rg),tE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rg),aE=new RegExp("^"+jw+$w+eE+tE+"$"),oE=["material","materials","bones","map"],Ex=class{constructor(e,a,o){let n=o||Zt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,n)}getValue(e,a){this.bind();let o=this._targetGroup.nCachedObjects_,n=this._bindings[o];n!==void 0&&n.getValue(e,a)}setValue(e,a){let o=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=o.length;n!==r;++n)o[n].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=e.length;a!==o;++a)e[a].unbind()}},Zt=class t{constructor(e,a,o){this.path=a,this.parsedPath=o||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,o){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,o):new t(e,a,o)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jw,"")}static parseTrackName(e){let a=aE.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let o={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},n=o.nodeName&&o.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=o.nodeName.substring(n+1);oE.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,n),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return o}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let o=e.skeleton.getBoneByName(a);if(o!==void 0)return o}if(e.children){let o=function(r){for(let s=0;s<r.length;s++){let i=r[s];if(i.name===a||i.uuid===a)return i;let l=o(i.children);if(l)return l}return null},n=o(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)e[a++]=o[n]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let o=this.resolvedProperty;for(let n=0,r=o.length;n!==r;++n)o[n]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,o=a.objectName,n=a.propertyName,r=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=a.objectIndex;switch(o){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[o]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[o]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[n];if(s===void 0){let c=a.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?i=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Ex;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tP=new Float32Array(1);var wC=new Vt,yu=class{constructor(e,a,o=0,n=1/0){this.ray=new cu(e,a),this.near=o,this.far=n,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):et("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return wC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wC),this}intersectObject(e,a=!0,o=[]){return Rx(e,this,o,a),o.sort(EC),o}intersectObjects(e,a=!0,o=[]){for(let n=0,r=e.length;n<r;n++)Rx(e[n],this,o,a);return o.sort(EC),o}};function EC(t,e){return t.distance-e.distance}function Rx(t,e,a,o){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(n=!1),n===!0&&o===!0){let r=t.children;for(let s=0,i=r.length;s<i;s++)Rx(r[s],e,a,!0)}}var Dx=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,o,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,o,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let o=0;o<4;o++)this.elements[o]=e[o+a];return this}set(e,a,o,n){let r=this.elements;return r[0]=e,r[2]=a,r[1]=o,r[3]=n,this}};function sg(t,e,a,o){let n=nE(o);switch(a){case Qx:return t*e;case $x:return t*e/n.components*n.byteLength;case Yp:return t*e/n.components*n.byteLength;case hs:return t*e*2/n.components*n.byteLength;case Zp:return t*e*2/n.components*n.byteLength;case jx:return t*e*3/n.components*n.byteLength;case Qo:return t*e*4/n.components*n.byteLength;case Kp:return t*e*4/n.components*n.byteLength;case Tu:case Au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wu:case Eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qp:case $p:return Math.max(t,16)*Math.max(e,8)/4;case Jp:case jp:return Math.max(t,8)*Math.max(e,8)/2;case eh:case th:case oh:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ah:case Ru:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sh:case vh:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mh:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Du:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function nE(t){switch(t){case xo:case Yx:return{byteLength:1,components:1};case kl:case Zx:case pn:return{byteLength:2,components:1};case Wp:case Xp:return{byteLength:2,components:4};case fn:case qp:case dn:return{byteLength:4,components:1};case Kx:case Jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function q1(){let t=null,e=!1,a=null,o=null;function n(r,s){o=t.requestAnimationFrame(n),a(r,s)}return{start:function(){e!==!0&&a!==null&&t!==null&&(o=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(r){a=r},setContext:function(r){t=r}}}function rE(t){let e=new WeakMap;function a(i,l){let c=i.array,f=i.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),i.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)i.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:i.version,size:h}}function o(i,l,c){let f=l.array,h=l.updateRanges;if(t.bindBuffer(c,i),h.length===0)t.bufferSubData(c,0,f);else{h.sort((d,I)=>d.start-I.start);let u=0;for(let d=1;d<h.length;d++){let I=h[u],M=h[d];M.start<=I.start+I.count+1?I.count=Math.max(I.count,M.start+M.count-I.start):(++u,h[u]=M)}h.length=u+1;for(let d=0,I=h.length;d<I;d++){let M=h[d];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(i){return i.isInterleavedBufferAttribute&&(i=i.data),e.get(i)}function r(i){i.isInterleavedBufferAttribute&&(i=i.data);let l=e.get(i);l&&(t.deleteBuffer(l.buffer),e.delete(i))}function s(i,l){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let f=e.get(i);(!f||f.version<i.version)&&e.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let c=e.get(i);if(c===void 0)e.set(i,a(i,l));else if(c.version<i.version){if(c.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,i,l),c.version=i.version}}return{get:n,remove:r,update:s}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
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
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FE=`#ifdef USE_IRIDESCENCE
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
#endif`,SE=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",kE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
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
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jE=`#ifdef USE_ENVMAP
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
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
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
#endif`,n2=`uniform sampler2D dfgLUT;
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
}`,r2=`
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
#endif`,s2=`#if defined( RE_IndirectDiffuse )
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
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I2=`#if defined( USE_POINTS_UV )
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
#endif`,x2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`#ifdef USE_MORPHTARGETS
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
#endif`,M2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w2=`#ifdef USE_NORMALMAP
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
#endif`,E2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W2=`float getShadowMask() {
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
}`,X2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y2=`#ifdef USE_SKINNING
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
#endif`,Z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K2=`#ifdef USE_SKINNING
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
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,tR=`#ifdef USE_TRANSMISSION
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
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iR=`uniform sampler2D t2D;
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
}`,lR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`#include <common>
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
}`,pR=`#if DEPTH_PACKING == 3200
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
}`,hR=`#define DISTANCE
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
}`,mR=`#define DISTANCE
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
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gR=`uniform float scale;
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
}`,FR=`uniform vec3 diffuse;
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
}`,SR=`#include <common>
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
}`,vR=`uniform vec3 diffuse;
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
}`,yR=`#define LAMBERT
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
}`,MR=`#define LAMBERT
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
}`,CR=`#define MATCAP
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
}`,_R=`#define MATCAP
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
}`,bR=`#define NORMAL
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
}`,TR=`#define NORMAL
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
}`,AR=`#define PHONG
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
}`,wR=`#define PHONG
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
}`,ER=`#define STANDARD
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
}`,RR=`#define STANDARD
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
}`,DR=`#define TOON
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
}`,LR=`#define TOON
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
}`,PR=`uniform float size;
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
}`,BR=`uniform vec3 diffuse;
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
}`,UR=`#include <common>
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
}`,kR=`uniform vec3 color;
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
}`,NR=`uniform float rotation;
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
}`,OR=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:sE,alphahash_pars_fragment:iE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:dE,aomap_pars_fragment:pE,batching_pars_vertex:hE,batching_vertex:mE,begin_vertex:IE,beginnormal_vertex:xE,bsdfs:gE,iridescence_fragment:FE,bumpmap_pars_fragment:SE,clipping_planes_fragment:vE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:CE,color_fragment:_E,color_pars_fragment:bE,color_pars_vertex:TE,color_vertex:AE,common:wE,cube_uv_reflection_fragment:EE,defaultnormal_vertex:RE,displacementmap_pars_vertex:DE,displacementmap_vertex:LE,emissivemap_fragment:PE,emissivemap_pars_fragment:BE,colorspace_fragment:UE,colorspace_pars_fragment:kE,envmap_fragment:NE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:HE,envmap_physical_pars_fragment:jE,envmap_vertex:VE,fog_vertex:GE,fog_pars_vertex:qE,fog_fragment:WE,fog_pars_fragment:XE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:ZE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:JE,lights_pars_begin:QE,lights_toon_fragment:$E,lights_toon_pars_fragment:e2,lights_phong_fragment:t2,lights_phong_pars_fragment:a2,lights_physical_fragment:o2,lights_physical_pars_fragment:n2,lights_fragment_begin:r2,lights_fragment_maps:s2,lights_fragment_end:i2,lightprobes_pars_fragment:l2,logdepthbuf_fragment:c2,logdepthbuf_pars_fragment:u2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:d2,map_fragment:p2,map_pars_fragment:h2,map_particle_fragment:m2,map_particle_pars_fragment:I2,metalnessmap_fragment:x2,metalnessmap_pars_fragment:g2,morphinstance_vertex:F2,morphcolor_vertex:S2,morphnormal_vertex:v2,morphtarget_pars_vertex:y2,morphtarget_vertex:M2,normal_fragment_begin:C2,normal_fragment_maps:_2,normal_pars_fragment:b2,normal_pars_vertex:T2,normal_vertex:A2,normalmap_pars_fragment:w2,clearcoat_normal_fragment_begin:E2,clearcoat_normal_fragment_maps:R2,clearcoat_pars_fragment:D2,iridescence_pars_fragment:L2,opaque_fragment:P2,packing:B2,premultiplied_alpha_fragment:U2,project_vertex:k2,dithering_fragment:N2,dithering_pars_fragment:O2,roughnessmap_fragment:z2,roughnessmap_pars_fragment:H2,shadowmap_pars_fragment:V2,shadowmap_pars_vertex:G2,shadowmap_vertex:q2,shadowmask_pars_fragment:W2,skinbase_vertex:X2,skinning_pars_vertex:Y2,skinning_vertex:Z2,skinnormal_vertex:K2,specularmap_fragment:J2,specularmap_pars_fragment:Q2,tonemapping_fragment:j2,tonemapping_pars_fragment:$2,transmission_fragment:eR,transmission_pars_fragment:tR,uv_pars_fragment:aR,uv_pars_vertex:oR,uv_vertex:nR,worldpos_vertex:rR,background_vert:sR,background_frag:iR,backgroundCube_vert:lR,backgroundCube_frag:cR,cube_vert:uR,cube_frag:fR,depth_vert:dR,depth_frag:pR,distance_vert:hR,distance_frag:mR,equirect_vert:IR,equirect_frag:xR,linedashed_vert:gR,linedashed_frag:FR,meshbasic_vert:SR,meshbasic_frag:vR,meshlambert_vert:yR,meshlambert_frag:MR,meshmatcap_vert:CR,meshmatcap_frag:_R,meshnormal_vert:bR,meshnormal_frag:TR,meshphong_vert:AR,meshphong_frag:wR,meshphysical_vert:ER,meshphysical_frag:RR,meshtoon_vert:DR,meshtoon_frag:LR,points_vert:PR,points_frag:BR,shadow_vert:UR,shadow_frag:kR,sprite_vert:NR,sprite_frag:OR},De={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},zn={basic:{uniforms:Wa([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Wa([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Wa([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Wa([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Wa([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Wa([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Wa([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Wa([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Wa([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Wa([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Wa([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Wa([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Wa([De.lights,De.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zn.physical={uniforms:Wa([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var wh={r:0,b:0,g:0},zR=new Vt,W1=new it;W1.set(-1,0,0,0,1,0,0,0,1);function HR(t,e,a,o,n,r){let s=new ut(0),i=n===!0?0:1,l,c,f=null,h=0,u=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let F=x.backgroundBlurriness>0;v=e.get(v,F)}return v}function I(x){let v=!1,F=d(x);F===null?m(s,i):F&&F.isColor&&(m(F,1),v=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(t.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,v){let F=d(v);F&&(F.isCubeTexture||F.mapping===_u)?(c===void 0&&(c=new ra(new bl(1,1,1),new Lo({name:"BackgroundCubeMaterial",uniforms:js(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:no,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=F,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zR.makeRotationFromEuler(v.backgroundRotation)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W1),c.material.toneMapped=vt.getTransfer(F.colorSpace)!==Lt,(f!==F||h!==F.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=F,h=F.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new ra(new Ks(2,2),new Lo({name:"BackgroundMaterial",uniforms:js(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=vt.getTransfer(F.colorSpace)!==Lt,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(f!==F||h!==F.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=F,h=F.version,u=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(wh,og(t)),a.buffers.color.setClear(wh.r,wh.g,wh.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),i=v,m(s,i)},getClearAlpha:function(){return i},setClearAlpha:function(x){i=x,m(s,i)},render:I,addToRenderList:M,dispose:p}}function VR(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),o={},n=u(null),r=n,s=!1;function i(R,H,k,B,z){let ee=!1,Y=h(R,B,k,H);r!==Y&&(r=Y,c(r.object)),ee=d(R,B,k,z),ee&&I(R,B,k,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(ee||s)&&(s=!1,F(R,H,k,B),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function f(R){return t.deleteVertexArray(R)}function h(R,H,k,B){let z=B.wireframe===!0,ee=o[H.id];ee===void 0&&(ee={},o[H.id]=ee);let Y=R.isInstancedMesh===!0?R.id:0,re=ee[Y];re===void 0&&(re={},ee[Y]=re);let W=re[k.id];W===void 0&&(W={},re[k.id]=W);let $=W[z];return $===void 0&&($=u(l()),W[z]=$),$}function u(R){let H=[],k=[],B=[];for(let z=0;z<a;z++)H[z]=0,k[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:B,object:R,attributes:{},index:null}}function d(R,H,k,B){let z=r.attributes,ee=H.attributes,Y=0,re=k.getAttributes();for(let W in re)if(re[W].location>=0){let ae=z[W],Ae=ee[W];if(Ae===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),ae===void 0||ae.attribute!==Ae||Ae&&ae.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function I(R,H,k,B){let z={},ee=H.attributes,Y=0,re=k.getAttributes();for(let W in re)if(re[W].location>=0){let ae=ee[W];ae===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));let Ae={};Ae.attribute=ae,ae&&ae.data&&(Ae.data=ae.data),z[W]=Ae,Y++}r.attributes=z,r.attributesNum=Y,r.index=B}function M(){let R=r.newAttributes;for(let H=0,k=R.length;H<k;H++)R[H]=0}function m(R){p(R,0)}function p(R,H){let k=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;k[R]=1,B[R]===0&&(t.enableVertexAttribArray(R),B[R]=1),z[R]!==H&&(t.vertexAttribDivisor(R,H),z[R]=H)}function x(){let R=r.newAttributes,H=r.enabledAttributes;for(let k=0,B=H.length;k<B;k++)H[k]!==R[k]&&(t.disableVertexAttribArray(k),H[k]=0)}function v(R,H,k,B,z,ee,Y){Y===!0?t.vertexAttribIPointer(R,H,k,z,ee):t.vertexAttribPointer(R,H,k,B,z,ee)}function F(R,H,k,B){M();let z=B.attributes,ee=k.getAttributes(),Y=H.defaultAttributeValues;for(let re in ee){let W=ee[re];if(W.location>=0){let $=z[re];if($===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){let ae=$.normalized,Ae=$.itemSize,Me=e.get($);if(Me===void 0)continue;let Ze=Me.buffer,N=Me.type,$e=Me.bytesPerElement,Z=N===t.INT||N===t.UNSIGNED_INT||$.gpuType===qp;if($.isInterleavedBufferAttribute){let J=$.data,ye=J.stride,Ne=$.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe,J.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let xe=0;xe<W.locationSize;xe++)v(W.location+xe,Ae/W.locationSize,N,ae,ye*$e,(Ne+Ae/W.locationSize*xe)*$e,Z)}else{if($.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,$.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let J=0;J<W.locationSize;J++)v(W.location+J,Ae/W.locationSize,N,ae,Ae*$e,Ae/W.locationSize*J*$e,Z)}}else if(Y!==void 0){let ae=Y[re];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}x()}function C(){T();for(let R in o){let H=o[R];for(let k in H){let B=H[k];for(let z in B){let ee=B[z];for(let Y in ee)f(ee[Y].object),delete ee[Y];delete B[z]}}delete o[R]}}function _(R){if(o[R.id]===void 0)return;let H=o[R.id];for(let k in H){let B=H[k];for(let z in B){let ee=B[z];for(let Y in ee)f(ee[Y].object),delete ee[Y];delete B[z]}}delete o[R.id]}function w(R){for(let H in o){let k=o[H];for(let B in k){let z=k[B];if(z[R.id]===void 0)continue;let ee=z[R.id];for(let Y in ee)f(ee[Y].object),delete ee[Y];delete z[R.id]}}}function S(R){for(let H in o){let k=o[H],B=R.isInstancedMesh===!0?R.id:0,z=k[B];if(z!==void 0){for(let ee in z){let Y=z[ee];for(let re in Y)f(Y[re].object),delete Y[re];delete z[ee]}delete k[B],Object.keys(k).length===0&&delete o[H]}}}function T(){A(),s=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:i,reset:T,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:_,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function GR(t,e,a){let o;function n(l){o=l}function r(l,c){t.drawArrays(o,l,c),a.update(c,o,1)}function s(l,c,f){f!==0&&(t.drawArraysInstanced(o,l,c,f),a.update(c,o,f))}function i(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];a.update(u,o,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=i}function qR(t,e,a,o){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==Qo&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(w){let S=w===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xo&&w!==dn&&!S&&o.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=a.precision!==void 0?a.precision:"highp",f=l(c);f!==c&&(tt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=a.logarithmicDepthBuffer===!0,u=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&u===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),I=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),F=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),_=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:i,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:I,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:F,maxSamples:C,samples:_}}function WR(t){let e=this,a=null,o=0,n=!1,r=!1,s=new ln,i=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||o!==0||n;return n=u,o=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){a=f(h,u,0)},this.setState=function(h,u,d){let I=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!n||I===null||I.length===0||r&&!m)r?f(null):c();else{let x=r?0:o,v=x*4,F=p.clippingState||null;l.value=F,F=f(I,u,v,d);for(let C=0;C!==v;++C)F[C]=a[C];p.clippingState=F,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==a&&(l.value=a,l.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function f(h,u,d,I){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=l.value,I!==!0||m===null){let p=d+M*4,x=u.matrixWorldInverse;i.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,F=d;v!==M;++v,F+=4)s.copy(h[v]).applyMatrix4(x,i),s.normal.toArray(m,F),m[F+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Hl=4,XR=6,YR=20,ZR=256,Lu=new Ll,M1=new ut,ig=null,lg=0,cg=0,ug=!1,KR=new U,$s=new U,Gl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,o=.1,n=100,r={}){let{size:s=256,position:i=KR}=r;ig=this._renderer.getRenderTarget(),lg=this._renderer.getActiveCubeFace(),cg=this._renderer.getActiveMipmapLevel(),ug=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,o,n,l,i),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ig,lg,cg),this._renderer.xr.enabled=ug,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===ds||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ig=this._renderer.getRenderTarget(),lg=this._renderer.getActiveCubeFace(),cg=this._renderer.getActiveMipmapLevel(),ug=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=a||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,o={magFilter:Fa,minFilter:Fa,generateMipmaps:!1,type:pn,format:Qo,colorSpace:ou,depthBuffer:!1},n=C1(e,a,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C1(e,a,o);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JR(r)),this._blurMaterial=jR(r,e,a),this._ggxMaterial=QR(r,e,a)}return n}_compileMaterial(e){let a=new ra(new oo,e);this._renderer.compile(a,Lu)}_sceneToCubeUV(e,a,o,n,r){let l=new Ga(90,1,a,o),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(M1),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ra(new bl,new Ws({name:"PMREM.Background",side:no,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(M1),p=!0);for(let v=0;v<6;v++){let F=v%3;F===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[v],r.y,r.z)):F===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[v]));let C=this._cubeSize;zl(n,F*C,v>2?C:0,C,C),h.setRenderTarget(n),p&&h.render(M,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=x}_textureToCubeUV(e,a){let o=this._renderer,n=e.mapping===ds||e.mapping===Qs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=b1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_1());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let i=r.uniforms;i.envMap.value=e;let l=this._cubeSize;zl(a,0,0,3*l,2*l),o.setRenderTarget(a),o.render(s,Lu)}_applyPMREM(e){let a=this._renderer,o=a.autoClear;a.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);a.autoClear=o}_applyGGXFilter(e,a,o){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,i=this._lodMeshes[o];i.material=s;let l=s.uniforms,c=o/(this._lodMeshes.length-1),f=a/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:I}=this,M=this._sizeLods[o],m=3*M*(o>I-Hl?o-I+Hl:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=I-a,zl(r,m,p,3*M,2*M),n.setRenderTarget(r),n.render(i,Lu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=I-o,zl(e,m,p,3*M,2*M),n.setRenderTarget(e),n.render(i,Lu)}_blur(e,a,o,n){let r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,a,o,s),this._blurPass(r,e,o,o,s)}_blurPass(e,a,o,n,r){let s=this._renderer,i=this._blurMaterial,l=this._lodMeshes[n];l.material=i;let c=i.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-o;let f=this._sizeLods[n],h=3*f*(n>this._lodMax-Hl?n-this._lodMax+Hl:0),u=4*(this._cubeSize-f);zl(a,h,u,3*f,2*f),s.setRenderTarget(a),s.render(l,Lu)}};function JR(t){let e=[],a=[],o=t,n=t-Hl+1+XR;for(let r=0;r<n;r++){let s=Math.pow(2,o);e.push(s);let i=1/(s-2),l=-i,c=1+i,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,I=new Float32Array(d*u*h),M=new Float32Array(d*u*h);for(let p=0;p<h;p++){let x=p%3*2/3-1,v=p>2?0:-1,F=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];I.set(F,d*u*p);for(let C=0;C<u;C++){let _=f[C*2]*2-1,w=f[C*2+1]*2-1;p===0?$s.set(1,w,_):p===1?$s.set(-_,1,-w):p===2?$s.set(-_,w,1):p===3?$s.set(-1,w,-_):p===4?$s.set(-_,-1,w):$s.set(_,w,-1),$s.toArray(M,(p*u+C)*d)}}let m=new oo;m.setAttribute("position",new qa(I,d)),m.setAttribute("outputDirection",new qa(M,d)),a.push(new ra(m,null)),o>Hl&&o--}return{lodMeshes:a,sizeLods:e}}function C1(t,e,a){let o=new Io(t,e,a);return o.texture.mapping=_u,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function zl(t,e,a,o,n){t.viewport.set(e,a,o,n),t.scissor.set(e,a,o,n)}function QR(t,e,a){return new Lo({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function jR(t,e,a){return new Lo({name:"SphericalGaussianBlur",defines:{SAMPLES:YR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _1(){return new Lo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function b1(){return new Lo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rh=class extends Io{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let o={width:e,height:e,depth:1},n=[o,o,o,o,o,o];this.texture=new uu(n),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new bl(5,5,5),r=new Lo({name:"CubemapFromEquirect",uniforms:js(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:no,blending:kn});r.uniforms.tEquirect.value=a;let s=new ra(n,r),i=a.minFilter;return a.minFilter===Nn&&(a.minFilter=Fa),new Np(1,10,this).update(e,s),a.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,a=!0,o=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(a,o,n);e.setRenderTarget(r)}};function $R(t){let e=new WeakMap,a=new WeakMap,o=null;function n(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Hp||d===Vp)if(e.has(u)){let I=e.get(u).texture;return i(I,u.mapping)}else{let I=u.image;if(I&&I.height>0){let M=new Rh(I.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),i(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,I=d===Hp||d===Vp,M=d===ds||d===Qs;if(I||M){let m=a.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return o===null&&(o=new Gl(t)),m=I?o.fromEquirectangular(u,m):o.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,a.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return I&&x&&x.height>0||M&&x&&l(x)?(o===null&&(o=new Gl(t)),m=I?o.fromEquirectangular(u):o.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,a.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function i(u,d){return d===Hp?u.mapping=ds:d===Vp&&(u.mapping=Qs),u}function l(u){let d=0,I=6;for(let M=0;M<I;M++)u[M]!==void 0&&d++;return d===I}function c(u){let d=u.target;d.removeEventListener("dispose",c);let I=e.get(d);I!==void 0&&(e.delete(d),I.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let I=a.get(d);I!==void 0&&(a.delete(d),I.dispose())}function h(){e=new WeakMap,a=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:n,dispose:h}}function eD(t){let e={};function a(o){if(e[o]!==void 0)return e[o];let n=t.getExtension(o);return e[o]=n,n}return{has:function(o){return a(o)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(o){let n=a(o);return n===null&&qs("WebGLRenderer: "+o+" extension not supported."),n}}}function tD(t,e,a,o){let n={},r=new WeakMap;function s(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let I in u.attributes)e.remove(u.attributes[I]);u.removeEventListener("dispose",s),delete n[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),o.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,a.memory.geometries--}function i(h,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,a.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,I=h.attributes.position,M=0;if(I===void 0)return;if(d!==null){let x=d.array;M=d.version;for(let v=0,F=x.length;v<F;v+=3){let C=x[v+0],_=x[v+1],w=x[v+2];u.push(C,_,_,w,w,C)}}else{let x=I.array;M=I.version;for(let v=0,F=x.length/3-1;v<F;v+=3){let C=v+0,_=v+1,w=v+2;u.push(C,_,_,w,w,C)}}let m=new(I.count>=65535?lu:iu)(u,1);m.version=M;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:i,update:l,getWireframeAttribute:f}}function aD(t,e,a){let o;function n(h){o=h}let r,s;function i(h){r=h.type,s=h.bytesPerElement}function l(h,u){t.drawElements(o,u,r,h*s),a.update(u,o,1)}function c(h,u,d){d!==0&&(t.drawElementsInstanced(o,u,r,h*s,d),a.update(u,o,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,u,0,r,h,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];a.update(M,o,1)}this.setMode=n,this.setIndex=i,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function oD(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function o(r,s,i){switch(a.calls++,s){case t.TRIANGLES:a.triangles+=i*(r/3);break;case t.LINES:a.lines+=i*(r/2);break;case t.LINE_STRIP:a.lines+=i*(r-1);break;case t.LINE_LOOP:a.lines+=i*r;break;case t.POINTS:a.points+=i*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function n(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:n,update:o}}function nD(t,e,a){let o=new WeakMap,n=new jt;function r(s,i,l){let c=s.morphTargetInfluences,f=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,h=f!==void 0?f.length:0,u=o.get(i);if(u===void 0||u.count!==h){let T=function(){w.dispose(),o.delete(i),i.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=i.morphAttributes.position!==void 0,I=i.morphAttributes.normal!==void 0,M=i.morphAttributes.color!==void 0,m=i.morphAttributes.position||[],p=i.morphAttributes.normal||[],x=i.morphAttributes.color||[],v=0;d===!0&&(v=1),I===!0&&(v=2),M===!0&&(v=3);let F=i.attributes.position.count*v,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let _=new Float32Array(F*C*4*h),w=new su(_,F,C,h);w.type=dn,w.needsUpdate=!0;let S=v*4;for(let A=0;A<h;A++){let R=m[A],H=p[A],k=x[A],B=F*C*4*A;for(let z=0;z<R.count;z++){let ee=z*S;d===!0&&(n.fromBufferAttribute(R,z),_[B+ee+0]=n.x,_[B+ee+1]=n.y,_[B+ee+2]=n.z,_[B+ee+3]=0),I===!0&&(n.fromBufferAttribute(H,z),_[B+ee+4]=n.x,_[B+ee+5]=n.y,_[B+ee+6]=n.z,_[B+ee+7]=0),M===!0&&(n.fromBufferAttribute(k,z),_[B+ee+8]=n.x,_[B+ee+9]=n.y,_[B+ee+10]=n.z,_[B+ee+11]=k.itemSize===4?n.w:1)}}u={count:h,texture:w,size:new Te(F,C)},o.set(i,u),i.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,a);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let I=i.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",I),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function rD(t,e,a,o,n){let r=new WeakMap;function s(c){let f=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(a.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&a.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function i(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),o.releaseStatesOfObject(f),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:s,dispose:i}}var sD={[zx]:"LINEAR_TONE_MAPPING",[Hx]:"REINHARD_TONE_MAPPING",[Vx]:"CINEON_TONE_MAPPING",[Gx]:"ACES_FILMIC_TONE_MAPPING",[Wx]:"AGX_TONE_MAPPING",[Cu]:"NEUTRAL_TONE_MAPPING",[qx]:"CUSTOM_TONE_MAPPING"};function iD(t,e,a,o,n,r){let s=new Io(e,a,{type:t,depthBuffer:n,stencilBuffer:r,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),i=null,l=null,c=new oo;c.setAttribute("position",new da([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new da([0,2,0,0,2,0],2));let f=new Mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ra(c,f),u=new Ll(-1,1,1,-1,0,1),d=null,I=null,M=!1,m,p=null,x=[],v=!1;this.setSize=function(F,C){s.setSize(F,C),i!==null&&i.setSize(F,C),l!==null&&l.setSize(F,C);for(let _=0;_<x.length;_++){let w=x[_];w.setSize&&w.setSize(F,C)}},this.setEffects=function(F){x=F,v=x.length>0&&x[0].isRenderPass===!0;let C=s.width,_=s.height;x.length>0&&i===null&&(i=new Io(C,_,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new Io(C,_,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let S=x[w];S.setSize&&S.setSize(C,_)}},this.begin=function(F,C){if(M||F.toneMapping===un&&x.length===0)return!1;if(p=C,C!==null){let _=C.width,w=C.height;(s.width!==_||s.height!==w)&&this.setSize(_,w)}return v===!1&&F.setRenderTarget(s),m=F.toneMapping,F.toneMapping=un,!0},this.hasRenderPass=function(){return v},this.end=function(F,C){F.toneMapping=m,M=!0;let _=s,w=i;for(let S=0;S<x.length;S++){let T=x[S];T.enabled!==!1&&(T.render(F,w,_,C),T.needsSwap!==!1&&(_=w,w=w===i?l:i))}if(d!==F.outputColorSpace||I!==F.toneMapping){d=F.outputColorSpace,I=F.toneMapping,f.defines={},vt.getTransfer(d)===Lt&&(f.defines.SRGB_TRANSFER="");let S=sD[I];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,F.setRenderTarget(p),F.render(h,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){s.dispose(),i!==null&&i.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var X1=new to,pg=new rs(1,1),Y1=new su,Z1=new Ip,K1=new uu,T1=[],A1=[],w1=new Float32Array(16),E1=new Float32Array(9),R1=new Float32Array(4);function ql(t,e,a){let o=t[0];if(o<=0||o>0)return t;let n=e*a,r=T1[n];if(r===void 0&&(r=new Float32Array(n),T1[n]=r),e!==0){o.toArray(r,0);for(let s=1,i=0;s!==e;++s)i+=a,t[s].toArray(r,i)}return r}function Sa(t,e){if(t.length!==e.length)return!1;for(let a=0,o=t.length;a<o;a++)if(t[a]!==e[a])return!1;return!0}function va(t,e){for(let a=0,o=e.length;a<o;a++)t[a]=e[a]}function Ph(t,e){let a=A1[e];a===void 0&&(a=new Int32Array(e),A1[e]=a);for(let o=0;o!==e;++o)a[o]=t.allocateTextureUnit();return a}function lD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function cD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2fv(this.addr,e),va(a,e)}}function uD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Sa(a,e))return;t.uniform3fv(this.addr,e),va(a,e)}}function fD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4fv(this.addr,e),va(a,e)}}function dD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;R1.set(o),t.uniformMatrix2fv(this.addr,!1,R1),va(a,o)}}function pD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;E1.set(o),t.uniformMatrix3fv(this.addr,!1,E1),va(a,o)}}function hD(t,e){let a=this.cache,o=e.elements;if(o===void 0){if(Sa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),va(a,e)}else{if(Sa(a,o))return;w1.set(o),t.uniformMatrix4fv(this.addr,!1,w1),va(a,o)}}function mD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function ID(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2iv(this.addr,e),va(a,e)}}function xD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3iv(this.addr,e),va(a,e)}}function gD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4iv(this.addr,e),va(a,e)}}function FD(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function SD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Sa(a,e))return;t.uniform2uiv(this.addr,e),va(a,e)}}function vD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Sa(a,e))return;t.uniform3uiv(this.addr,e),va(a,e)}}function yD(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Sa(a,e))return;t.uniform4uiv(this.addr,e),va(a,e)}}function MD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n);let r;this.type===t.SAMPLER_2D_SHADOW?(pg.compareFunction=a.isReversedDepthBuffer()?Ah:Th,r=pg):r=X1,a.setTexture2D(e||r,n)}function CD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture3D(e||Z1,n)}function _D(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTextureCube(e||K1,n)}function bD(t,e,a){let o=this.cache,n=a.allocateTextureUnit();o[0]!==n&&(t.uniform1i(this.addr,n),o[0]=n),a.setTexture2DArray(e||Y1,n)}function TD(t){switch(t){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return fD;case 35674:return dD;case 35675:return pD;case 35676:return hD;case 5124:case 35670:return mD;case 35667:case 35671:return ID;case 35668:case 35672:return xD;case 35669:case 35673:return gD;case 5125:return FD;case 36294:return SD;case 36295:return vD;case 36296:return yD;case 35678:case 36198:case 36298:case 36306:case 35682:return MD;case 35679:case 36299:case 36307:return CD;case 35680:case 36300:case 36308:case 36293:return _D;case 36289:case 36303:case 36311:case 36292:return bD}}function AD(t,e){t.uniform1fv(this.addr,e)}function wD(t,e){let a=ql(e,this.size,2);t.uniform2fv(this.addr,a)}function ED(t,e){let a=ql(e,this.size,3);t.uniform3fv(this.addr,a)}function RD(t,e){let a=ql(e,this.size,4);t.uniform4fv(this.addr,a)}function DD(t,e){let a=ql(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function LD(t,e){let a=ql(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function PD(t,e){let a=ql(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function BD(t,e){t.uniform1iv(this.addr,e)}function UD(t,e){t.uniform2iv(this.addr,e)}function kD(t,e){t.uniform3iv(this.addr,e)}function ND(t,e){t.uniform4iv(this.addr,e)}function OD(t,e){t.uniform1uiv(this.addr,e)}function zD(t,e){t.uniform2uiv(this.addr,e)}function HD(t,e){t.uniform3uiv(this.addr,e)}function VD(t,e){t.uniform4uiv(this.addr,e)}function GD(t,e,a){let o=this.cache,n=e.length,r=Ph(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=pg:s=X1;for(let i=0;i!==n;++i)a.setTexture2D(e[i]||s,r[i])}function qD(t,e,a){let o=this.cache,n=e.length,r=Ph(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture3D(e[s]||Z1,r[s])}function WD(t,e,a){let o=this.cache,n=e.length,r=Ph(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTextureCube(e[s]||K1,r[s])}function XD(t,e,a){let o=this.cache,n=e.length,r=Ph(a,n);Sa(o,r)||(t.uniform1iv(this.addr,r),va(o,r));for(let s=0;s!==n;++s)a.setTexture2DArray(e[s]||Y1,r[s])}function YD(t){switch(t){case 5126:return AD;case 35664:return wD;case 35665:return ED;case 35666:return RD;case 35674:return DD;case 35675:return LD;case 35676:return PD;case 5124:case 35670:return BD;case 35667:case 35671:return UD;case 35668:case 35672:return kD;case 35669:case 35673:return ND;case 5125:return OD;case 36294:return zD;case 36295:return HD;case 36296:return VD;case 35678:case 36198:case 36298:case 36306:case 35682:return GD;case 35679:case 36299:case 36307:return qD;case 35680:case 36300:case 36308:case 36293:return WD;case 36289:case 36303:case 36311:case 36292:return XD}}var hg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.setValue=TD(a.type)}},mg=class{constructor(e,a,o){this.id=e,this.addr=o,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=YD(a.type)}},Ig=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,o){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let i=n[r];i.setValue(e,a[i.id],o)}}},fg=/(\w+)(\])?(\[|\.)?/g;function D1(t,e){t.seq.push(e),t.map[e.id]=e}function ZD(t,e,a){let o=t.name,n=o.length;for(fg.lastIndex=0;;){let r=fg.exec(o),s=fg.lastIndex,i=r[1],l=r[2]==="]",c=r[3];if(l&&(i=i|0),c===void 0||c==="["&&s+2===n){D1(a,c===void 0?new hg(i,t,e):new mg(i,t,e));break}else{let h=a.map[i];h===void 0&&(h=new Ig(i),D1(a,h)),a=h}}}var Vl=class{constructor(e,a){this.seq=[],this.map={};let o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<o;++s){let i=e.getActiveUniform(a,s),l=e.getUniformLocation(a,i.name);ZD(i,l,this)}let n=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,a,o,n){let r=this.map[a];r!==void 0&&r.setValue(e,o,n)}setOptional(e,a,o){let n=a[o];n!==void 0&&this.setValue(e,o,n)}static upload(e,a,o,n){for(let r=0,s=a.length;r!==s;++r){let i=a[r],l=o[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,n)}}static seqWithValue(e,a){let o=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in a&&o.push(s)}return o}};function L1(t,e,a){let o=t.createShader(e);return t.shaderSource(o,a),t.compileShader(o),o}var KD=37297,JD=0;function QD(t,e){let a=t.split(`
`),o=[],n=Math.max(e-6,0),r=Math.min(e+6,a.length);for(let s=n;s<r;s++){let i=s+1;o.push(`${i===e?">":" "} ${i}: ${a[s]}`)}return o.join(`
`)}var P1=new it;function jD(t){vt._getMatrix(P1,vt.workingColorSpace,t);let e=`mat3( ${P1.elements.map(a=>a.toFixed(4))} )`;switch(vt.getTransfer(t)){case nu:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function B1(t,e,a){let o=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(o&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let i=parseInt(s[1]);return a.toUpperCase()+`

`+r+`

`+QD(t.getShaderSource(e),i)}else return r}function $D(t,e){let a=jD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var eL={[zx]:"Linear",[Hx]:"Reinhard",[Vx]:"Cineon",[Gx]:"ACESFilmic",[Wx]:"AgX",[Cu]:"Neutral",[qx]:"Custom"};function tL(t,e){let a=eL[e];return a===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Eh=new U;function aL(){vt.getLuminanceCoefficients(Eh);let t=Eh.x.toFixed(4),e=Eh.y.toFixed(4),a=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bu).join(`
`)}function nL(t){let e=[];for(let a in t){let o=t[a];o!==!1&&e.push("#define "+a+" "+o)}return e.join(`
`)}function rL(t,e){let a={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<o;n++){let r=t.getActiveAttrib(e,n),s=r.name,i=1;r.type===t.FLOAT_MAT2&&(i=2),r.type===t.FLOAT_MAT3&&(i=3),r.type===t.FLOAT_MAT4&&(i=4),a[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:i}}return a}function Bu(t){return t!==""}function U1(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sL=/^[ \t]*#include +<([\w\d./]+)>/gm;function xg(t){return t.replace(sL,lL)}var iL=new Map;function lL(t,e){let a=ht[e];if(a===void 0){let o=iL.get(e);if(o!==void 0)a=ht[o],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xg(a)}var cL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N1(t){return t.replace(cL,uL)}function uL(t,e,a,o){let n="";for(let r=parseInt(e);r<parseInt(a);r++)n+=o.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function O1(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var fL={[Mu]:"SHADOWMAP_TYPE_PCF",[Bl]:"SHADOWMAP_TYPE_VSM"};function dL(t){return fL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pL={[ds]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[_u]:"ENVMAP_TYPE_CUBE_UV"};function hL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":pL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var mL={[Qs]:"ENVMAP_MODE_REFRACTION"};function IL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":mL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xL={[Ox]:"ENVMAP_BLENDING_MULTIPLY",[jC]:"ENVMAP_BLENDING_MIX",[$C]:"ENVMAP_BLENDING_ADD"};function gL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":xL[t.combine]||"ENVMAP_BLENDING_NONE"}function FL(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),7*16)),texelHeight:o,maxMip:a}}function SL(t,e,a,o){let n=t.getContext(),r=a.defines,s=a.vertexShader,i=a.fragmentShader,l=dL(a),c=hL(a),f=IL(a),h=gL(a),u=FL(a),d=oL(a),I=nL(r),M=n.createProgram(),m,p,x=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(m=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(Bu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I].filter(Bu).join(`
`),p.length>0&&(p+=`
`)):(m=[O1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bu).join(`
`),p=[O1(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,I,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+c:"",a.envMap?"#define "+f:"",a.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==un?"#define TONE_MAPPING":"",a.toneMapping!==un?ht.tonemapping_pars_fragment:"",a.toneMapping!==un?tL("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,$D("linearToOutputTexel",a.outputColorSpace),aL(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Bu).join(`
`)),s=xg(s),s=U1(s,a),s=k1(s,a),i=xg(i),i=U1(i,a),i=k1(i,a),s=N1(s),i=N1(i),a.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",a.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+s,F=x+p+i,C=L1(n,n.VERTEX_SHADER,v),_=L1(n,n.FRAGMENT_SHADER,F);n.attachShader(M,C),n.attachShader(M,_),a.index0AttributeName!==void 0?n.bindAttribLocation(M,0,a.index0AttributeName):a.hasPositionAttribute===!0&&n.bindAttribLocation(M,0,"position"),n.linkProgram(M);function w(R){if(t.debug.checkShaderErrors){let H=n.getProgramInfoLog(M)||"",k=n.getShaderInfoLog(C)||"",B=n.getShaderInfoLog(_)||"",z=H.trim(),ee=k.trim(),Y=B.trim(),re=!0,W=!0;if(n.getProgramParameter(M,n.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,M,C,_);else{let $=B1(n,C,"vertex"),ae=B1(n,_,"fragment");et("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(M,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+$+`
`+ae)}else z!==""?tt("WebGLProgram: Program Info Log:",z):(ee===""||Y==="")&&(W=!1);W&&(R.diagnostics={runnable:re,programLog:z,vertexShader:{log:ee,prefix:m},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(C),n.deleteShader(_),S=new Vl(n,M),T=rL(n,M)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(M,KD)),A},this.destroy=function(){o.releaseStatesOfProgram(this),n.deleteProgram(M),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=JD++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=_,this}var vL=0,gg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,o){let n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(o)===!1&&(n.add(o),o.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let o of a)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,o=a.get(e);return o===void 0&&(o=new Set,a.set(e,o)),o}_getShaderStage(e){let a=this.shaderCache,o=a.get(e);return o===void 0&&(o=new Fg(e),a.set(e,o)),o}},Fg=class{constructor(e){this.id=vL++,this.code=e,this.usedTimes=0}};function yL(t){return t===hs||t===Ru||t===Du}function ML(t,e,a,o,n,r){let s=new Sl,i=new gg,l=new Set,c=[],f=new Map,h=o.logarithmicDepthBuffer,u=o.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,T,A,R,H,k){let B=R.fog,z=H.geometry,ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?R.environment:null,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,re=e.get(S.envMap||ee,Y),W=re&&re.mapping===_u?re.image.height:null,$=d[S.type];S.precision!==null&&(u=o.getMaxPrecision(S.precision),u!==S.precision&&tt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=ae!==void 0?ae.length:0,Me=0;z.morphAttributes.position!==void 0&&(Me=1),z.morphAttributes.normal!==void 0&&(Me=2),z.morphAttributes.color!==void 0&&(Me=3);let Ze,N,$e,Z;if($){let dt=zn[$];Ze=dt.vertexShader,N=dt.fragmentShader}else{Ze=S.vertexShader,N=S.fragmentShader;let dt=i.getVertexShaderStage(S),rt=i.getFragmentShaderStage(S);i.update(S,dt,rt),$e=dt.id,Z=rt.id}let J=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,xe=H.isBatchedMesh===!0,Ve=!!S.map,Qe=!!S.matcap,j=!!re,ne=!!S.aoMap,le=!!S.lightMap,ce=!!S.bumpMap&&S.wireframe===!1,de=!!S.normalMap,Ge=!!S.displacementMap,Be=!!S.emissiveMap,Pe=!!S.metalnessMap,He=!!S.roughnessMap,E=S.anisotropy>0,nt=S.clearcoat>0,Xe=S.dispersion>0,b=S.retroreflectivity>0,g=S.iridescence>0,P=S.sheen>0,q=S.transmission>0,Q=E&&!!S.anisotropyMap,he=nt&&!!S.clearcoatMap,fe=nt&&!!S.clearcoatNormalMap,X=nt&&!!S.clearcoatRoughnessMap,te=g&&!!S.iridescenceMap,ge=g&&!!S.iridescenceThicknessMap,ze=P&&!!S.sheenColorMap,ve=P&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ie=!!S.specularColorMap,Fe=!!S.specularIntensityMap,me=q&&!!S.transmissionMap,L=q&&!!S.thicknessMap,pe=!!S.gradientMap,K=!!S.alphaMap,Ie=S.alphaTest>0,_e=!!S.alphaHash,se=!!S.extensions,we=un;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(we=t.toneMapping);let Ee={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:N,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:xe,batchingColor:xe&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Qe,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:W,aoMap:ne,lightMap:le,bumpMap:ce,normalMap:de,displacementMap:Ge,emissiveMap:Be,normalMapObjectSpace:de&&S.normalMapType===a1,normalMapTangentSpace:de&&S.normalMapType===bh,packedNormalMap:de&&S.normalMapType===bh&&yL(S.normalMap.format),metalnessMap:Pe,roughnessMap:He,anisotropy:E,anisotropyMap:Q,clearcoat:nt,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:X,dispersion:Xe,retroreflection:b,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:ge,sheen:P,sheenColorMap:ze,sheenRoughnessMap:ve,specularMap:Ce,specularColorMap:ie,specularIntensityMap:Fe,transmission:q,transmissionMap:me,thicknessMap:L,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Ul&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:Ie,alphaHash:_e,combine:S.combine,mapUv:Ve&&I(S.map.channel),aoMapUv:ne&&I(S.aoMap.channel),lightMapUv:le&&I(S.lightMap.channel),bumpMapUv:ce&&I(S.bumpMap.channel),normalMapUv:de&&I(S.normalMap.channel),displacementMapUv:Ge&&I(S.displacementMap.channel),emissiveMapUv:Be&&I(S.emissiveMap.channel),metalnessMapUv:Pe&&I(S.metalnessMap.channel),roughnessMapUv:He&&I(S.roughnessMap.channel),anisotropyMapUv:Q&&I(S.anisotropyMap.channel),clearcoatMapUv:he&&I(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&I(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&I(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&I(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&I(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&I(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&I(S.sheenRoughnessMap.channel),specularMapUv:Ce&&I(S.specularMap.channel),specularColorMapUv:ie&&I(S.specularColorMap.channel),specularIntensityMapUv:Fe&&I(S.specularIntensityMap.channel),transmissionMapUv:me&&I(S.transmissionMap.channel),thicknessMapUv:L&&I(S.thicknessMap.channel),alphaMapUv:K&&I(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(de||E),vertexNormals:!!z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(Ve||K),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||z.attributes.normal===void 0&&de===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:Be&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bo,flipSided:S.side===no,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&S.extensions.multiDraw===!0||xe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)T.push(A),T.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(p(T,S),x(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function v(S){let T=d[S.type],A;if(T){let R=zn[T];A=S1.clone(R.uniforms)}else A=S.uniforms;return A}function F(S,T){let A=f.get(T);return A!==void 0?++A.usedTimes:(A=new SL(t,T,S,n),c.push(A),f.set(T,A)),A}function C(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function _(S){i.remove(S)}function w(){i.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:v,acquireProgram:F,releaseProgram:C,releaseShaderCache:_,programs:c,dispose:w}}function CL(){let t=new WeakMap;function e(s){return t.has(s)}function a(s){let i=t.get(s);return i===void 0&&(i={},t.set(s,i)),i}function o(s){t.delete(s)}function n(s,i,l){t.get(s)[i]=l}function r(){t=new WeakMap}return{has:e,get:a,remove:o,update:n,dispose:r}}function _L(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function z1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function H1(){let t=[],e=0,a=[],o=[],n=[];function r(){e=0,a.length=0,o.length=0,n.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function i(u,d,I,M,m,p){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:I,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},t[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=I,x.materialVariant=s(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=m,x.group=p),e++,x}function l(u,d,I,M,m,p,x){x.reversedDepth===!0&&(m=-m);let v=i(u,d,I,M,m,p);I.transmission>0?o.push(v):I.transparent===!0?n.push(v):a.push(v)}function c(u,d,I,M,m,p){let x=i(u,d,I,M,m,p);I.transmission>0?o.unshift(x):I.transparent===!0?n.unshift(x):a.unshift(x)}function f(u,d){a.length>1&&a.sort(u||_L),o.length>1&&o.sort(d||z1),n.length>1&&n.sort(d||z1)}function h(){for(let u=e,d=t.length;u<d;u++){let I=t[u];if(I.id===null)break;I.id=null,I.object=null,I.geometry=null,I.material=null,I.group=null}}return{opaque:a,transmissive:o,transparent:n,init:r,push:l,unshift:c,finish:h,sort:f}}function bL(){let t=new WeakMap;function e(o,n){let r=t.get(o),s;return r===void 0?(s=new H1,t.set(o,[s])):n>=r.length?(s=new H1,r.push(s)):s=r[n],s}function a(){t=new WeakMap}return{get:e,dispose:a}}function TL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new U,color:new ut};break;case"SpotLight":a={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":a={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":a={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=a,a}}}function AL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var wL=0;function EL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RL(t){let e=new TL,a=AL(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new U);let n=new U,r=new Vt,s=new Vt;function i(c){let f=0,h=0,u=0;for(let H=0;H<9;H++)o.probe[H].set(0,0,0);let d=0,I=0,M=0,m=0,p=0,x=0,v=0,F=0,C=0,_=0,w=0,S=0,T=0,A=0;c.sort(EL);for(let H=0,k=c.length;H<k;H++){let B=c[H],z=B.color,ee=B.intensity,Y=B.distance,re=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===hs?re=B.shadow.map.texture:re=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)f+=z.r*ee,h+=z.g*ee,u+=z.b*ee;else if(B.isLightProbe){for(let W=0;W<9;W++)o.probe[W].addScaledVector(B.sh.coefficients[W],ee);A++}else if(B.isSunLight){let W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let $=B.shadow,ae=a.get(B);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),o.sunShadow[I]=ae,o.sunShadowMap[I]=re;let Ae=$.getViewportCount();for(let Me=0;Me<Ae;Me++)o.sunShadowMatrix[M+Me]=$.getMatrix(Me),o.sunShadowCascade[M+Me]=$._cascadeData[Me];M+=Ae,I++}o.sun[d]=W,d++}else if(B.isDirectionalLight){let W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let $=B.shadow,ae=a.get(B);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,o.directionalShadow[m]=ae,o.directionalShadowMap[m]=re,o.directionalShadowMatrix[m]=B.shadow.matrix,C++}o.directional[m]=W,m++}else if(B.isSpotLight){let W=e.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(z).multiplyScalar(ee),W.distance=Y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,o.spot[x]=W;let $=B.shadow;if(B.map&&(o.spotLightMap[S]=B.map,S++,$.updateMatrices(B),B.castShadow&&T++),o.spotLightMatrix[x]=$.matrix,B.castShadow){let ae=a.get(B);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,o.spotShadow[x]=ae,o.spotShadowMap[x]=re,w++}x++}else if(B.isRectAreaLight){let W=e.get(B);W.color.copy(z).multiplyScalar(ee),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),o.rectArea[v]=W,v++}else if(B.isPointLight){let W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){let $=B.shadow,ae=a.get(B);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,ae.shadowCameraNear=$.camera.near,ae.shadowCameraFar=$.camera.far,o.pointShadow[p]=ae,o.pointShadowMap[p]=re,o.pointShadowMatrix[p]=B.shadow.matrix,_++}o.point[p]=W,p++}else if(B.isHemisphereLight){let W=e.get(B);W.skyColor.copy(B.color).multiplyScalar(ee),W.groundColor.copy(B.groundColor).multiplyScalar(ee),o.hemi[F]=W,F++}}v>0&&(t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=De.LTC_FLOAT_1,o.rectAreaLTC2=De.LTC_FLOAT_2):(o.rectAreaLTC1=De.LTC_HALF_1,o.rectAreaLTC2=De.LTC_HALF_2)),o.ambient[0]=f,o.ambient[1]=h,o.ambient[2]=u;let R=o.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==v||R.hemiLength!==F||R.numSunShadows!==I||R.numDirectionalShadows!==C||R.numPointShadows!==_||R.numSpotShadows!==w||R.numSpotMaps!==S||R.numLightProbes!==A)&&(o.sun.length=d,o.directional.length=m,o.spot.length=x,o.rectArea.length=v,o.point.length=p,o.hemi.length=F,o.sunShadow.length=I,o.sunShadowMap.length=I,o.sunShadowMatrix.length=M,o.sunShadowCascade.length=M,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.directionalShadowMatrix.length=C,o.pointShadow.length=_,o.pointShadowMap.length=_,o.pointShadowMatrix.length=_,o.spotShadow.length=w,o.spotShadowMap.length=w,o.spotLightMatrix.length=w+S-T,o.spotLightMap.length=S,o.numSpotLightShadowsWithMaps=T,o.numLightProbes=A,R.sunLength=d,R.directionalLength=m,R.pointLength=p,R.spotLength=x,R.rectAreaLength=v,R.hemiLength=F,R.numSunShadows=I,R.numDirectionalShadows=C,R.numPointShadows=_,R.numSpotShadows=w,R.numSpotMaps=S,R.numLightProbes=A,o.version=wL++)}function l(c,f){let h=0,u=0,d=0,I=0,M=0,m=0,p=f.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let F=c[x];if(F.isSunLight){let C=o.sun[h];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(p),h++}else if(F.isDirectionalLight){let C=o.directional[u];C.direction.setFromMatrixPosition(F.matrixWorld),n.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),u++}else if(F.isSpotLight){let C=o.spot[I];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(F.matrixWorld),n.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(p),I++}else if(F.isRectAreaLight){let C=o.rectArea[M];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),s.identity(),r.copy(F.matrixWorld),r.premultiply(p),s.extractRotation(r),C.halfWidth.set(F.width*.5,0,0),C.halfHeight.set(0,F.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),M++}else if(F.isPointLight){let C=o.point[d];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(p),d++}else if(F.isHemisphereLight){let C=o.hemi[m];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:i,setupView:l,state:o}}function V1(t){let e=new RL(t),a=[],o=[],n=[];function r(u){h.camera=u,a.length=0,o.length=0,n.length=0}function s(u){a.push(u)}function i(u){o.push(u)}function l(u){n.push(u)}function c(){e.setup(a)}function f(u){e.setupView(a,u)}let h={lightsArray:a,shadowsArray:o,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:i,pushLightProbeGrid:l}}function DL(t){let e=new WeakMap;function a(n,r=0){let s=e.get(n),i;return s===void 0?(i=new V1(t),e.set(n,[i])):r>=s.length?(i=new V1(t),s.push(i)):i=s[r],i}function o(){e=new WeakMap}return{get:a,dispose:o}}var LL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PL=`uniform sampler2D shadow_pass;
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
}`,BL=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],UL=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],G1=new Vt,Pu=new U,dg=new U;function kL(t,e,a){let o=new _l,n=new Te,r=new Te,s=new jt,i=new Cp,l=new _p,c={},f=a.maxTextureSize,h={[fs]:no,[no]:fs,[Bo]:Bo},u=new Lo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:LL,fragmentShader:PL}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let I=new oo;I.setAttribute("position",new qa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ra(I,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let p=this.type;this.render=function(_,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===LC&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mu);let T=t.getRenderTarget(),A=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),H=t.state;H.setBlending(kn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==this.type;k&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(z=>z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,z=_.length;B<z;B++){let ee=_[B],Y=ee.shadow;if(Y===void 0){tt("WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let re=Y.getFrameExtents();n.multiply(re),r.copy(Y.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(r.x=Math.floor(f/re.x),n.x=r.x*re.x,Y.mapSize.x=r.x),n.y>f&&(r.y=Math.floor(f/re.y),n.y=r.y*re.y,Y.mapSize.y=r.y));let W=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=W,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Bl){if(ee.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Io(n.x,n.y,{format:hs,type:pn,minFilter:Fa,magFilter:Fa,generateMipmaps:!1}),Y.map.texture.name=ee.name+".shadowMap",Y.map.depthTexture=new rs(n.x,n.y,dn),Y.map.depthTexture.name=ee.name+".shadowMapDepth",Y.map.depthTexture.format=Bn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Aa,Y.map.depthTexture.magFilter=Aa}else ee.isPointLight?(Y.map=new Rh(n.x),Y.map.depthTexture=new xp(n.x,fn)):(Y.map=new Io(n.x,n.y),Y.map.depthTexture=new rs(n.x,n.y,fn)),Y.map.depthTexture.name=ee.name+".shadowMap",Y.map.depthTexture.format=Bn,this.type===Mu?(Y.map.depthTexture.compareFunction=W?Ah:Th,Y.map.depthTexture.minFilter=Fa,Y.map.depthTexture.magFilter=Fa):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Aa,Y.map.depthTexture.magFilter=Aa);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==n.x||Y.map.height!==n.y)&&Y.map.setSize(n.x,n.y);let $=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();ee.isPointLight!==!0&&Y.updateMatrices(ee,S);for(let ae=0;ae<$;ae++){let Ae=Y.getCamera(ae);if(ee.isPointLight){let Me=Y.camera,Ze=Y.matrix,N=ee.distance||Me.far;N!==Me.far&&(Me.far=N,Me.updateProjectionMatrix()),Pu.setFromMatrixPosition(ee.matrixWorld),Me.position.copy(Pu),dg.copy(Me.position),dg.add(BL[ae]),Me.up.copy(UL[ae]),Me.lookAt(dg),Me.updateMatrixWorld(),Ze.makeTranslation(-Pu.x,-Pu.y,-Pu.z),G1.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(G1,Me.coordinateSystem,Me.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(Y.map),t.clear());let Me=Y.getViewport(ae);s.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),H.viewport(s)}o=Y.getFrustum(ae),F(w,S,Ae,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===Bl&&x(Y,S),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,A,R)};function x(_,w){let S=e.update(M);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null?_.mapPass=new Io(n.x,n.y,{format:hs,type:pn}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),u.uniforms.shadow_pass.value=_.map.depthTexture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(w,null,S,u,M,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value.set(_.map.width,_.map.height),d.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(w,null,S,d,M,null)}function v(_,w,S,T){let A=null,R=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(R!==void 0)A=R;else if(A=S.isPointLight===!0?l:i,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=A.uuid,k=w.uuid,B=c[H];B===void 0&&(B={},c[H]=B);let z=B[k];z===void 0&&(z=A.clone(),B[k]=z,w.addEventListener("dispose",C)),A=z}if(A.visible=w.visible,A.wireframe=w.wireframe,T===Bl?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=t.properties.get(A);H.light=S}return A}function F(_,w,S,T,A){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&A===Bl)&&(!_.frustumCulled||_.intersectsFrustum(o))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);let k=e.update(_),B=_.material;if(Array.isArray(B)){let z=k.groups;for(let ee=0,Y=z.length;ee<Y;ee++){let re=z[ee],W=B[re.materialIndex];if(W&&W.visible){let $=v(_,W,T,A);_.onBeforeShadow(t,_,w,S,k,$,re),t.renderBufferDirect(S,null,k,$,_,re),_.onAfterShadow(t,_,w,S,k,$,re)}}}else if(B.visible){let z=v(_,B,T,A);_.onBeforeShadow(t,_,w,S,k,z,null),t.renderBufferDirect(S,null,k,z,_,null),_.onAfterShadow(t,_,w,S,k,z,null)}}let H=_.children;for(let k=0,B=H.length;k<B;k++)F(H[k],w,S,T,A)}function C(_){_.target.removeEventListener("dispose",C);for(let S in c){let T=c[S],A=_.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function NL(t,e){function a(){let L=!1,pe=new jt,K=null,Ie=new jt(0,0,0,0);return{setMask:function(_e){K!==_e&&!L&&(t.colorMask(_e,_e,_e,_e),K=_e)},setLocked:function(_e){L=_e},setClear:function(_e,se,we,Ee,dt){dt===!0&&(_e*=Ee,se*=Ee,we*=Ee),pe.set(_e,se,we,Ee),Ie.equals(pe)===!1&&(t.clearColor(_e,se,we,Ee),Ie.copy(pe))},reset:function(){L=!1,K=null,Ie.set(-1,0,0,0)}}}function o(){let L=!1,pe=!1,K=null,Ie=null,_e=null;return{setReversed:function(se){if(pe!==se){let we=e.get("EXT_clip_control");se?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),pe=se;let Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return pe},setTest:function(se){se?J(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(se){K!==se&&!L&&(t.depthMask(se),K=se)},setFunc:function(se){if(pe&&(se=h1[se]),Ie!==se){switch(se){case np:t.depthFunc(t.NEVER);break;case rp:t.depthFunc(t.ALWAYS);break;case sp:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case ip:t.depthFunc(t.EQUAL);break;case lp:t.depthFunc(t.GEQUAL);break;case cp:t.depthFunc(t.GREATER);break;case up:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=se}},setLocked:function(se){L=se},setClear:function(se){_e!==se&&(_e=se,pe&&(se=1-se),t.clearDepth(se))},reset:function(){L=!1,K=null,Ie=null,_e=null,pe=!1}}}function n(){let L=!1,pe=null,K=null,Ie=null,_e=null,se=null,we=null,Ee=null,dt=null;return{setTest:function(rt){L||(rt?J(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!L&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,sa,Ya){(K!==rt||Ie!==sa||_e!==Ya)&&(t.stencilFunc(rt,sa,Ya),K=rt,Ie=sa,_e=Ya)},setOp:function(rt,sa,Ya){(se!==rt||we!==sa||Ee!==Ya)&&(t.stencilOp(rt,sa,Ya),se=rt,we=sa,Ee=Ya)},setLocked:function(rt){L=rt},setClear:function(rt){dt!==rt&&(t.clearStencil(rt),dt=rt)},reset:function(){L=!1,pe=null,K=null,Ie=null,_e=null,se=null,we=null,Ee=null,dt=null}}}let r=new a,s=new o,i=new n,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,I=[],M=null,m=!1,p=null,x=null,v=null,F=null,C=null,_=null,w=null,S=new ut(0,0,0),T=0,A=!1,R=null,H=null,k=null,B=null,z=null,ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,re=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=re>=2);let $=null,ae={},Ae=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Ze=new jt().fromArray(Ae),N=new jt().fromArray(Me);function $e(L,pe,K,Ie){let _e=new Uint8Array(4),se=t.createTexture();t.bindTexture(L,se),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<K;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(pe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return se}let Z={};Z[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),i.setClear(0),J(t.DEPTH_TEST),s.setFunc(Il),ce(!1),de(Lx),J(t.CULL_FACE),ne(kn);function J(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function ye(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Ne(L,pe){return u[L]!==pe?(t.bindFramebuffer(L,pe),u[L]=pe,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function xe(L,pe){let K=I,Ie=!1;if(L){K=d.get(pe),K===void 0&&(K=[],d.set(pe,K));let _e=L.textures;if(K.length!==_e.length||K[0]!==t.COLOR_ATTACHMENT0){for(let se=0,we=_e.length;se<we;se++)K[se]=t.COLOR_ATTACHMENT0+se;K.length=_e.length,Ie=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(K)}function Ve(L){return M!==L?(t.useProgram(L),M=L,!0):!1}let Qe={[Js]:t.FUNC_ADD,[BC]:t.FUNC_SUBTRACT,[UC]:t.FUNC_REVERSE_SUBTRACT};Qe[kC]=t.MIN,Qe[NC]=t.MAX;let j={[OC]:t.ZERO,[zC]:t.ONE,[HC]:t.SRC_COLOR,[kx]:t.SRC_ALPHA,[YC]:t.SRC_ALPHA_SATURATE,[WC]:t.DST_COLOR,[GC]:t.DST_ALPHA,[VC]:t.ONE_MINUS_SRC_COLOR,[Nx]:t.ONE_MINUS_SRC_ALPHA,[XC]:t.ONE_MINUS_DST_COLOR,[qC]:t.ONE_MINUS_DST_ALPHA,[ZC]:t.CONSTANT_COLOR,[KC]:t.ONE_MINUS_CONSTANT_COLOR,[JC]:t.CONSTANT_ALPHA,[QC]:t.ONE_MINUS_CONSTANT_ALPHA};function ne(L,pe,K,Ie,_e,se,we,Ee,dt,rt){if(L===kn){m===!0&&(ye(t.BLEND),m=!1);return}if(m===!1&&(J(t.BLEND),m=!0),L!==PC){if(L!==p||rt!==A){if((x!==Js||C!==Js)&&(t.blendEquation(t.FUNC_ADD),x=Js,C=Js),rt)switch(L){case Ul:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Px:t.blendFunc(t.ONE,t.ONE);break;case Bx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ux:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Ul:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Px:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bx:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ux:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}v=null,F=null,_=null,w=null,S.set(0,0,0),T=0,p=L,A=rt}return}_e=_e||pe,se=se||K,we=we||Ie,(pe!==x||_e!==C)&&(t.blendEquationSeparate(Qe[pe],Qe[_e]),x=pe,C=_e),(K!==v||Ie!==F||se!==_||we!==w)&&(t.blendFuncSeparate(j[K],j[Ie],j[se],j[we]),v=K,F=Ie,_=se,w=we),(Ee.equals(S)===!1||dt!==T)&&(t.blendColor(Ee.r,Ee.g,Ee.b,dt),S.copy(Ee),T=dt),p=L,A=!1}function le(L,pe){L.side===Bo?ye(t.CULL_FACE):J(t.CULL_FACE);let K=L.side===no;pe&&(K=!K),ce(K),L.blending===Ul&&L.transparent===!1?ne(kn):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ie=L.stencilWrite;i.setTest(Ie),Ie&&(i.setMask(L.stencilWriteMask),i.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),i.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){R!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),R=L)}function de(L){L!==RC?(J(t.CULL_FACE),L!==H&&(L===Lx?t.cullFace(t.BACK):L===DC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),H=L}function Ge(L){L!==k&&(Y&&t.lineWidth(L),k=L)}function Be(L,pe,K){L?(J(t.POLYGON_OFFSET_FILL),(B!==pe||z!==K)&&(B=pe,z=K,s.getReversed()&&(pe=-pe),t.polygonOffset(pe,K))):ye(t.POLYGON_OFFSET_FILL)}function Pe(L){L?J(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function He(L){L===void 0&&(L=t.TEXTURE0+ee-1),$!==L&&(t.activeTexture(L),$=L)}function E(L,pe,K){K===void 0&&($===null?K=t.TEXTURE0+ee-1:K=$);let Ie=ae[K];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[K]=Ie),(Ie.type!==L||Ie.texture!==pe)&&($!==K&&(t.activeTexture(K),$=K),t.bindTexture(L,pe||Z[L]),Ie.type=L,Ie.texture=pe)}function nt(){let L=ae[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Xe(){try{t.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function g(){try{t.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function P(){try{t.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function he(){try{t.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function X(){try{t.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ge(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function ze(L,pe){h[L]!==pe&&(t.pixelStorei(L,pe),h[L]=pe)}function ve(L){Ze.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Ce(L){N.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),N.copy(L))}function ie(L,pe){let K=c.get(pe);K===void 0&&(K=new WeakMap,c.set(pe,K));let Ie=K.get(L);Ie===void 0&&(Ie=t.getUniformBlockIndex(pe,L.name),K.set(L,Ie))}function Fe(L,pe){let Ie=c.get(pe).get(L);l.get(pe)!==Ie&&(t.uniformBlockBinding(pe,Ie,L.__bindingPointIndex),l.set(pe,Ie))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},$=null,ae={},u={},d=new WeakMap,I=[],M=null,m=!1,p=null,x=null,v=null,F=null,C=null,_=null,w=null,S=new ut(0,0,0),T=0,A=!1,R=null,H=null,k=null,B=null,z=null,Ze.set(0,0,t.canvas.width,t.canvas.height),N.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),i.reset()}return{buffers:{color:r,depth:s,stencil:i},enable:J,disable:ye,bindFramebuffer:Ne,drawBuffers:xe,useProgram:Ve,setBlending:ne,setMaterial:le,setFlipSided:ce,setCullFace:de,setLineWidth:Ge,setPolygonOffset:Be,setScissorTest:Pe,activeTexture:He,bindTexture:E,unbindTexture:nt,compressedTexImage2D:Xe,compressedTexImage3D:b,texImage2D:X,texImage3D:te,pixelStorei:ze,getParameter:ge,updateUBOMapping:ie,uniformBlockBinding:Fe,texStorage2D:he,texStorage3D:fe,texSubImage2D:g,texSubImage3D:P,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ve,viewport:Ce,reset:me}}function OL(t,e,a,o,n,r,s){let i=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,f=new WeakMap,h=new Set,u,d=new WeakMap,I=!1;try{I=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,g){return I?new OffscreenCanvas(b,g):ru("canvas")}function m(b,g,P){let q=1,Q=Xe(b);if((Q.width>P||Q.height>P)&&(q=P/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let he=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);u===void 0&&(u=M(he,fe));let X=g?M(he,fe):u;return X.width=he,X.height=fe,X.getContext("2d").drawImage(b,0,0,he,fe),tt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+fe+")."),X}else return"data"in b&&tt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function p(b){return b.generateMipmaps}function x(b){t.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function F(b,g,P,q,Q,he=!1){if(b!==null){if(t[b]!==void 0)return t[b];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===t.RED&&(P===t.FLOAT&&(X=t.R32F),P===t.HALF_FLOAT&&(X=t.R16F),P===t.UNSIGNED_BYTE&&(X=t.R8),P===t.UNSIGNED_SHORT&&fe&&(X=fe.R16_EXT),P===t.SHORT&&fe&&(X=fe.R16_SNORM_EXT)),g===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(X=t.R8UI),P===t.UNSIGNED_SHORT&&(X=t.R16UI),P===t.UNSIGNED_INT&&(X=t.R32UI),P===t.BYTE&&(X=t.R8I),P===t.SHORT&&(X=t.R16I),P===t.INT&&(X=t.R32I)),g===t.RG&&(P===t.FLOAT&&(X=t.RG32F),P===t.HALF_FLOAT&&(X=t.RG16F),P===t.UNSIGNED_BYTE&&(X=t.RG8),P===t.UNSIGNED_SHORT&&fe&&(X=fe.RG16_EXT),P===t.SHORT&&fe&&(X=fe.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(X=t.RG8UI),P===t.UNSIGNED_SHORT&&(X=t.RG16UI),P===t.UNSIGNED_INT&&(X=t.RG32UI),P===t.BYTE&&(X=t.RG8I),P===t.SHORT&&(X=t.RG16I),P===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(X=t.RGB8UI),P===t.UNSIGNED_SHORT&&(X=t.RGB16UI),P===t.UNSIGNED_INT&&(X=t.RGB32UI),P===t.BYTE&&(X=t.RGB8I),P===t.SHORT&&(X=t.RGB16I),P===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),P===t.UNSIGNED_INT&&(X=t.RGBA32UI),P===t.BYTE&&(X=t.RGBA8I),P===t.SHORT&&(X=t.RGBA16I),P===t.INT&&(X=t.RGBA32I)),g===t.RGB&&(P===t.UNSIGNED_SHORT&&fe&&(X=fe.RGB16_EXT),P===t.SHORT&&fe&&(X=fe.RGB16_SNORM_EXT),P===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),g===t.RGBA){let te=he?nu:vt.getTransfer(Q);P===t.FLOAT&&(X=t.RGBA32F),P===t.HALF_FLOAT&&(X=t.RGBA16F),P===t.UNSIGNED_BYTE&&(X=te===Lt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT&&fe&&(X=fe.RGBA16_EXT),P===t.SHORT&&fe&&(X=fe.RGBA16_SNORM_EXT),P===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(b,g){let P;return b?g===null||g===fn||g===Nl?P=t.DEPTH24_STENCIL8:g===dn?P=t.DEPTH32F_STENCIL8:g===kl&&(P=t.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fn||g===Nl?P=t.DEPTH_COMPONENT24:g===dn?P=t.DEPTH_COMPONENT32F:g===kl&&(P=t.DEPTH_COMPONENT16),P}function _(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Aa&&b.minFilter!==Fa?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function w(b){let g=b.target;g.removeEventListener("dispose",w),T(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&h.delete(g)}function S(b){let g=b.target;g.removeEventListener("dispose",S),R(g)}function T(b){let g=o.get(b);if(g.__webglInit===void 0)return;let P=b.source,q=d.get(P);if(q){let Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(b),Object.keys(q).length===0&&d.delete(P)}o.remove(b)}function A(b){let g=o.get(b);t.deleteTexture(g.__webglTexture);let P=b.source,q=d.get(P);delete q[g.__cacheKey],s.memory.textures--}function R(b){let g=o.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),o.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)t.deleteFramebuffer(g.__webglFramebuffer[q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let P=b.textures;for(let q=0,Q=P.length;q<Q;q++){let he=o.get(P[q]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),s.memory.textures--),o.remove(P[q])}o.remove(b)}let H=0;function k(){H=0}function B(){return H}function z(b){H=b}function ee(){let b=H;return b>=n.maxTextures&&tt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+n.maxTextures),H+=1,b}function Y(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function re(b,g){let P=o.get(b);if(b.isVideoTexture&&E(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&P.__version!==b.version){let q=b.image;if(q===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(P,b,g);return}}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+g)}function W(b,g){let P=o.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){ye(P,b,g);return}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+g)}function $(b,g){let P=o.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){ye(P,b,g);return}a.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+g)}function ae(b,g){let P=o.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&P.__version!==b.version){Ne(P,b,g);return}a.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+g)}let Ae={[Pn]:t.REPEAT,[Jo]:t.CLAMP_TO_EDGE,[fp]:t.MIRRORED_REPEAT},Me={[Aa]:t.NEAREST,[e1]:t.NEAREST_MIPMAP_NEAREST,[bu]:t.NEAREST_MIPMAP_LINEAR,[Fa]:t.LINEAR,[Gp]:t.LINEAR_MIPMAP_NEAREST,[Nn]:t.LINEAR_MIPMAP_LINEAR},Ze={[n1]:t.NEVER,[c1]:t.ALWAYS,[r1]:t.LESS,[Th]:t.LEQUAL,[s1]:t.EQUAL,[Ah]:t.GEQUAL,[i1]:t.GREATER,[l1]:t.NOTEQUAL};function N(b,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Fa||g.magFilter===Gp||g.magFilter===bu||g.magFilter===Nn||g.minFilter===Fa||g.minFilter===Gp||g.minFilter===bu||g.minFilter===Nn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Ae[g.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Ae[g.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Ae[g.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Me[g.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ze[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Aa||g.minFilter!==bu&&g.minFilter!==Nn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||o.get(g).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),o.get(g).__currentAnisotropy=g.anisotropy}}}function $e(b,g){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",w));let q=g.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let he=Y(g);if(he!==b.__cacheKey){Q[he]===void 0&&(Q[he]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,P=!0),Q[he].usedTimes++;let fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&A(g)),b.__cacheKey=he,b.__webglTexture=Q[he].texture}return P}function Z(b,g,P){return Math.floor(Math.floor(b/P)/g)}function J(b,g,P,q){let he=b.updateRanges;if(he.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,P,q,g.data);else{he.sort((ze,ve)=>ze.start-ve.start);let fe=0;for(let ze=1;ze<he.length;ze++){let ve=he[fe],Ce=he[ze],ie=ve.start+ve.count,Fe=Z(Ce.start,g.width,4),me=Z(ve.start,g.width,4);Ce.start<=ie+1&&Fe===me&&Z(Ce.start+Ce.count-1,g.width,4)===Fe?ve.count=Math.max(ve.count,Ce.start+Ce.count-ve.start):(++fe,he[fe]=Ce)}he.length=fe+1;let X=a.getParameter(t.UNPACK_ROW_LENGTH),te=a.getParameter(t.UNPACK_SKIP_PIXELS),ge=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ze=0,ve=he.length;ze<ve;ze++){let Ce=he[ze],ie=Math.floor(Ce.start/4),Fe=Math.ceil(Ce.count/4),me=ie%g.width,L=Math.floor(ie/g.width),pe=Fe,K=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,me),a.pixelStorei(t.UNPACK_SKIP_ROWS,L),a.texSubImage2D(t.TEXTURE_2D,0,me,L,pe,K,P,q,g.data)}b.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,X),a.pixelStorei(t.UNPACK_SKIP_PIXELS,te),a.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ye(b,g,P){let q=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=t.TEXTURE_3D);let Q=$e(b,g),he=g.source;a.bindTexture(q,b.__webglTexture,t.TEXTURE0+P);let fe=o.get(he);if(he.version!==fe.__version||Q===!0){if(a.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let K=vt.getPrimaries(vt.workingColorSpace),Ie=g.colorSpace===fr?null:vt.getPrimaries(g.colorSpace),_e=g.colorSpace===fr||K===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}a.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let te=m(g.image,!1,n.maxTextureSize);te=nt(g,te);let ge=r.convert(g.format,g.colorSpace),ze=r.convert(g.type),ve=F(g.internalFormat,ge,ze,g.normalized,g.colorSpace,g.isVideoTexture);N(q,g);let Ce,ie=g.mipmaps,Fe=g.isVideoTexture!==!0,me=fe.__version===void 0||Q===!0,L=he.dataReady,pe=_(g,te);if(g.isDepthTexture)ve=C(g.format===ps,g.type),me&&(Fe?a.texStorage2D(t.TEXTURE_2D,1,ve,te.width,te.height):a.texImage2D(t.TEXTURE_2D,0,ve,te.width,te.height,0,ge,ze,null));else if(g.isDataTexture)if(ie.length>0){Fe&&me&&a.texStorage2D(t.TEXTURE_2D,pe,ve,ie[0].width,ie[0].height);for(let K=0,Ie=ie.length;K<Ie;K++)Ce=ie[K],Fe?L&&a.texSubImage2D(t.TEXTURE_2D,K,0,0,Ce.width,Ce.height,ge,ze,Ce.data):a.texImage2D(t.TEXTURE_2D,K,ve,Ce.width,Ce.height,0,ge,ze,Ce.data);g.generateMipmaps=!1}else Fe?(me&&a.texStorage2D(t.TEXTURE_2D,pe,ve,te.width,te.height),L&&J(g,te,ge,ze)):a.texImage2D(t.TEXTURE_2D,0,ve,te.width,te.height,0,ge,ze,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&me&&a.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ve,ie[0].width,ie[0].height,te.depth);for(let K=0,Ie=ie.length;K<Ie;K++)if(Ce=ie[K],g.format!==Qo)if(ge!==null)if(Fe){if(L)if(g.layerUpdates.size>0){let _e=sg(Ce.width,Ce.height,g.format,g.type);for(let se of g.layerUpdates){let we=Ce.data.subarray(se*_e/Ce.data.BYTES_PER_ELEMENT,(se+1)*_e/Ce.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,se,Ce.width,Ce.height,1,ge,we)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,te.depth,ge,Ce.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ve,Ce.width,Ce.height,te.depth,0,Ce.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,te.depth,ge,ze,Ce.data):a.texImage3D(t.TEXTURE_2D_ARRAY,K,ve,Ce.width,Ce.height,te.depth,0,ge,ze,Ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Fe&&me&&a.texStorage2D(t.TEXTURE_2D,pe,ve,ie[0].width,ie[0].height);for(let K=0,Ie=ie.length;K<Ie;K++)Ce=ie[K],g.format!==Qo?ge!==null?Fe?L&&a.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ce.width,Ce.height,ge,Ce.data):a.compressedTexImage2D(t.TEXTURE_2D,K,ve,Ce.width,Ce.height,0,Ce.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&a.texSubImage2D(t.TEXTURE_2D,K,0,0,Ce.width,Ce.height,ge,ze,Ce.data):a.texImage2D(t.TEXTURE_2D,K,ve,Ce.width,Ce.height,0,ge,ze,Ce.data)}else if(g.isDataArrayTexture)if(Fe){if(me&&a.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ve,te.width,te.height,te.depth),L)if(g.layerUpdates.size>0){let K=sg(te.width,te.height,g.format,g.type);for(let Ie of g.layerUpdates){let _e=te.data.subarray(Ie*K/te.data.BYTES_PER_ELEMENT,(Ie+1)*K/te.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ie,te.width,te.height,1,ge,ze,_e)}g.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,ze,te.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,ge,ze,te.data);else if(g.isData3DTexture)Fe?(me&&a.texStorage3D(t.TEXTURE_3D,pe,ve,te.width,te.height,te.depth),L&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,ze,te.data)):a.texImage3D(t.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,ge,ze,te.data);else if(g.isFramebufferTexture){if(me)if(Fe)a.texStorage2D(t.TEXTURE_2D,pe,ve,te.width,te.height);else{let K=te.width,Ie=te.height;for(let _e=0;_e<pe;_e++)a.texImage2D(t.TEXTURE_2D,_e,ve,K,Ie,0,ge,ze,null),K>>=1,Ie>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){let K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),te.parentNode!==K){K.appendChild(te),h.add(g),K.onpaint=Ie=>{let _e=Ie.changedElements;for(let se of h)_e.includes(se.image)&&(se.needsUpdate=!0)},K.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{let _e=t.RGBA,se=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,se,we,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ie.length>0){if(Fe&&me){let K=Xe(ie[0]);a.texStorage2D(t.TEXTURE_2D,pe,ve,K.width,K.height)}for(let K=0,Ie=ie.length;K<Ie;K++)Ce=ie[K],Fe?L&&a.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,ze,Ce):a.texImage2D(t.TEXTURE_2D,K,ve,ge,ze,Ce);g.generateMipmaps=!1}else if(Fe){if(me){let K=Xe(te);a.texStorage2D(t.TEXTURE_2D,pe,ve,K.width,K.height)}L&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,ze,te)}else a.texImage2D(t.TEXTURE_2D,0,ve,ge,ze,te);p(g)&&x(q),fe.__version=he.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Ne(b,g,P){if(g.image.length!==6)return;let q=$e(b,g),Q=g.source;a.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+P);let he=o.get(Q);if(Q.version!==he.__version||q===!0){a.activeTexture(t.TEXTURE0+P);let fe=vt.getPrimaries(vt.workingColorSpace),X=g.colorSpace===fr?null:vt.getPrimaries(g.colorSpace),te=g.colorSpace===fr||fe===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ge=g.isCompressedTexture||g.image[0].isCompressedTexture,ze=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!ge&&!ze?ve[se]=m(g.image[se],!0,n.maxCubemapSize):ve[se]=ze?g.image[se].image:g.image[se],ve[se]=nt(g,ve[se]);let Ce=ve[0],ie=r.convert(g.format,g.colorSpace),Fe=r.convert(g.type),me=F(g.internalFormat,ie,Fe,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,pe=he.__version===void 0||q===!0,K=Q.dataReady,Ie=_(g,Ce);N(t.TEXTURE_CUBE_MAP,g);let _e;if(ge){L&&pe&&a.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,me,Ce.width,Ce.height);for(let se=0;se<6;se++){_e=ve[se].mipmaps;for(let we=0;we<_e.length;we++){let Ee=_e[we];g.format!==Qo?ie!==null?L?K&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,ie,Ee.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,me,Ee.width,Ee.height,0,Ee.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,ie,Fe,Ee.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,me,Ee.width,Ee.height,0,ie,Fe,Ee.data)}}}else{if(_e=g.mipmaps,L&&pe){_e.length>0&&Ie++;let se=Xe(ve[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,me,se.width,se.height)}for(let se=0;se<6;se++)if(ze){L?K&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,ie,Fe,ve[se].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,ve[se].width,ve[se].height,0,ie,Fe,ve[se].data);for(let we=0;we<_e.length;we++){let dt=_e[we].image[se].image;L?K&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,dt.width,dt.height,ie,Fe,dt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,me,dt.width,dt.height,0,ie,Fe,dt.data)}}else{L?K&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ie,Fe,ve[se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,ie,Fe,ve[se]);for(let we=0;we<_e.length;we++){let Ee=_e[we];L?K&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,ie,Fe,Ee.image[se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,me,ie,Fe,Ee.image[se])}}}p(g)&&x(t.TEXTURE_CUBE_MAP),he.__version=Q.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function xe(b,g,P,q,Q,he){let fe=r.convert(P.format,P.colorSpace),X=r.convert(P.type),te=F(P.internalFormat,fe,X,P.normalized,P.colorSpace),ge=o.get(g),ze=o.get(P);if(ze.__renderTarget=g,!ge.__hasExternalTextures){let ve=Math.max(1,g.width>>he),Ce=Math.max(1,g.height>>he);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?a.texImage3D(Q,he,te,ve,Ce,g.depth,0,fe,X,null):a.texImage2D(Q,he,te,ve,Ce,0,fe,X,null)}a.bindFramebuffer(t.FRAMEBUFFER,b),He(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,ze.__webglTexture,0,Pe(g)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,ze.__webglTexture,he),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(b,g,P){if(t.bindRenderbuffer(t.RENDERBUFFER,b),g.depthBuffer){let q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,he=C(g.stencilBuffer,Q),fe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;He(g)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(g),he,g.width,g.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(g),he,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,he,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,b)}else{let q=g.textures;for(let Q=0;Q<q.length;Q++){let he=q[Q],fe=r.convert(he.format,he.colorSpace),X=r.convert(he.type),te=F(he.internalFormat,fe,X,he.normalized,he.colorSpace);He(g)?i.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe(g),te,g.width,g.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe(g),te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(b,g,P){let q=g.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=o.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),N(t.TEXTURE_CUBE_MAP,g.depthTexture);let ge=r.convert(g.depthTexture.format),ze=r.convert(g.depthTexture.type),ve;g.depthTexture.format===Bn?ve=t.DEPTH_COMPONENT24:g.depthTexture.format===ps&&(ve=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ve,g.width,g.height,0,ge,ze,null)}}else re(g.depthTexture,0);let he=Q.__webglTexture,fe=Pe(g),X=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,te=g.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Bn)He(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,X,he,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,te,X,he,0);else if(g.depthTexture.format===ps)He(g)?i.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,X,he,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,te,X,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(b){let g=o.get(b),P=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let q=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(P)for(let q=0;q<6;q++)Qe(g.__webglFramebuffer[q],b,q);else{let q=b.texture.mipmaps;q&&q.length>0?Qe(g.__webglFramebuffer[0],b,0):Qe(g.__webglFramebuffer,b,0)}else if(P){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=t.createRenderbuffer(),Ve(g.__webglDepthbuffer[q],b,!1);else{let Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=g.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,he)}}else{let q=b.texture.mipmaps;if(q&&q.length>0?a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ve(g.__webglDepthbuffer,b,!1);else{let Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,he)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(b,g,P){let q=o.get(b);g!==void 0&&xe(q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&j(b)}function le(b){let g=b.texture,P=o.get(b),q=o.get(g);b.addEventListener("dispose",S);let Q=b.textures,he=b.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=g.version,s.memory.textures++),he){P.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[X]=[];for(let te=0;te<g.mipmaps.length;te++)P.__webglFramebuffer[X][te]=t.createFramebuffer()}else P.__webglFramebuffer[X]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)P.__webglFramebuffer[X]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(fe)for(let X=0,te=Q.length;X<te;X++){let ge=o.get(Q[X]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&He(b)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let te=Q[X];P.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[X]);let ge=r.convert(te.format,te.colorSpace),ze=r.convert(te.type),ve=F(te.internalFormat,ge,ze,te.normalized,te.colorSpace,b.isXRRenderTarget===!0),Ce=Pe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ve,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,P.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(P.__webglDepthRenderbuffer,b,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(he){a.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),N(t.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)xe(P.__webglFramebuffer[X][te],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te);else xe(P.__webglFramebuffer[X],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&x(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(fe){for(let X=0,te=Q.length;X<te;X++){let ge=Q[X],ze=o.get(ge),ve=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(ve,ze.__webglTexture),N(ve,ge),xe(P.__webglFramebuffer,b,ge,t.COLOR_ATTACHMENT0+X,ve,0),p(ge)&&x(ve)}a.unbindTexture()}else{let X=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(X=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(X,q.__webglTexture),N(X,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)xe(P.__webglFramebuffer[te],b,g,t.COLOR_ATTACHMENT0,X,te);else xe(P.__webglFramebuffer,b,g,t.COLOR_ATTACHMENT0,X,0);p(g)&&x(X),a.unbindTexture()}b.depthBuffer&&j(b)}function ce(b){let g=b.textures;for(let P=0,q=g.length;P<q;P++){let Q=g[P];if(p(Q)){let he=v(b),fe=o.get(Q).__webglTexture;a.bindTexture(he,fe),x(he),a.unbindTexture()}}}let de=[],Ge=[];function Be(b){if(b.samples>0){if(He(b)===!1){let g=b.textures,P=b.width,q=b.height,Q=t.COLOR_BUFFER_BIT,he=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=o.get(b),X=g.length>1;if(X)for(let ge=0;ge<g.length;ge++)a.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let te=b.texture.mipmaps;te&&te.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let ze=o.get(g[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,P,q,0,0,P,q,Q,t.NEAREST),l===!0&&(de.length=0,Ge.length=0,de.push(t.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(de.push(he),Ge.push(he),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,de))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ge=0;ge<g.length;ge++){a.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let ze=o.get(g[ge]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ze,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let g=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Pe(b){return Math.min(n.maxSamples,b.samples)}function He(b){let g=o.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function E(b){let g=s.render.frame;f.get(b)!==g&&(f.set(b,g),b.update())}function nt(b,g){let P=b.colorSpace,q=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==ou&&P!==fr&&(vt.getTransfer(P)===Lt?(q!==Qo||Q!==xo)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",P)),g}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=B,this.setTextureUnits=z,this.setTexture2D=re,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=ae,this.rebindTextures=ne,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function zL(t,e){function a(o,n=fr){let r,s=vt.getTransfer(n);if(o===xo)return t.UNSIGNED_BYTE;if(o===Wp)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Xp)return t.UNSIGNED_SHORT_5_5_5_1;if(o===Kx)return t.UNSIGNED_INT_5_9_9_9_REV;if(o===Jx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(o===Yx)return t.BYTE;if(o===Zx)return t.SHORT;if(o===kl)return t.UNSIGNED_SHORT;if(o===qp)return t.INT;if(o===fn)return t.UNSIGNED_INT;if(o===dn)return t.FLOAT;if(o===pn)return t.HALF_FLOAT;if(o===Qx)return t.ALPHA;if(o===jx)return t.RGB;if(o===Qo)return t.RGBA;if(o===Bn)return t.DEPTH_COMPONENT;if(o===ps)return t.DEPTH_STENCIL;if(o===$x)return t.RED;if(o===Yp)return t.RED_INTEGER;if(o===hs)return t.RG;if(o===Zp)return t.RG_INTEGER;if(o===Kp)return t.RGBA_INTEGER;if(o===Tu||o===Au||o===wu||o===Eu)if(s===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Tu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Au)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===wu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Eu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Tu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Au)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===wu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Eu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Jp||o===Qp||o===jp||o===$p)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===Jp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Qp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===$p)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===eh||o===th||o===ah||o===oh||o===nh||o===Ru||o===rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===eh||o===th)return s===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===ah)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(o===oh)return r.COMPRESSED_R11_EAC;if(o===nh)return r.COMPRESSED_SIGNED_R11_EAC;if(o===Ru)return r.COMPRESSED_RG11_EAC;if(o===rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===sh||o===ih||o===lh||o===ch||o===uh||o===fh||o===dh||o===ph||o===hh||o===mh||o===Ih||o===xh||o===gh||o===Fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===sh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ih)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===lh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ch)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===uh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===fh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===dh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ph)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===hh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===mh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ih)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===xh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===gh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Fh)return s===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Sh||o===vh||o===yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===Sh)return s===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Mh||o===Ch||o===Du||o===_h)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===Mh)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Du)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Nl?t.UNSIGNED_INT_24_8:t[o]!==void 0?t[o]:null}return{convert:a}}var HL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VL=`
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

}`,Sg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let o=new fu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,o=new Lo({vertexShader:HL,fragmentShader:VL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ra(new Ks(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vg=class extends Un{constructor(e,a){super();let o=this,n=null,r=1,s=null,i="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,I=null,M=typeof XRWebGLBinding<"u",m=new Sg,p={},x=a.getContextAttributes(),v=null,F=null,C=[],_=[],w=new Te,S=null,T=null,A=new Ga;A.viewport=new jt;let R=new Ga;R.viewport=new jt;let H=[A,R],k=new Op,B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=C[Z];return J===void 0&&(J=new vl,C[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=C[Z];return J===void 0&&(J=new vl,C[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=C[Z];return J===void 0&&(J=new vl,C[Z]=J),J.getHandSpace()};function ee(Z){let J=_.indexOf(Z.inputSource);if(J===-1)return;let ye=C[J];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||s),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){n.removeEventListener("select",ee),n.removeEventListener("selectstart",ee),n.removeEventListener("selectend",ee),n.removeEventListener("squeeze",ee),n.removeEventListener("squeezestart",ee),n.removeEventListener("squeezeend",ee),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",re);for(let Z=0;Z<C.length;Z++){let J=_[Z];J!==null&&(_[Z]=null,C[Z].disconnect(J))}B=null,z=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(v),d=null,u=null,h=null,n=null,F=null,$e.stop(),o.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,o.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){i=Z,o.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(n,a)),h},this.getFrame=function(){return I},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",ee),n.addEventListener("selectstart",ee),n.addEventListener("selectend",ee),n.addEventListener("squeeze",ee),n.addEventListener("squeezestart",ee),n.addEventListener("squeezeend",ee),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",re),x.xrCompatible!==!0&&await a.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,xe=null;x.depth&&(xe=x.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ye=x.stencil?ps:Bn,Ne=x.stencil?Nl:fn);let Ve={colorFormat:a.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ve),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),F=new Io(u.textureWidth,u.textureHeight,{format:Qo,type:xo,depthTexture:new rs(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,a,ye),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),F=new Io(d.framebufferWidth,d.framebufferHeight,{format:Qo,type:xo,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(i),$e.setContext(n),$e.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Z){for(let J=0;J<Z.removed.length;J++){let ye=Z.removed[J],Ne=_.indexOf(ye);Ne>=0&&(_[Ne]=null,C[Ne].disconnect(ye))}for(let J=0;J<Z.added.length;J++){let ye=Z.added[J],Ne=_.indexOf(ye);if(Ne===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=_.length){_.push(ye),Ne=Ve;break}else if(_[Ve]===null){_[Ve]=ye,Ne=Ve;break}if(Ne===-1)break}let xe=C[Ne];xe&&xe.connect(ye)}}let W=new U,$=new U;function ae(Z,J,ye){W.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(ye.matrixWorld);let Ne=W.distanceTo($),xe=J.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Qe=xe[14]/(xe[10]-1),j=xe[14]/(xe[10]+1),ne=(xe[9]+1)/xe[5],le=(xe[9]-1)/xe[5],ce=(xe[8]-1)/xe[0],de=(Ve[8]+1)/Ve[0],Ge=Qe*ce,Be=Qe*de,Pe=Ne/(-ce+de),He=Pe*-ce;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let E=Qe+Pe,nt=j+Pe,Xe=Ge-He,b=Be+(Ne-He),g=ne*j/nt*E,P=le*j/nt*E;Z.projectionMatrix.makePerspective(Xe,b,g,P,E,nt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ae(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let J=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=R.near=A.near=J,k.far=R.far=A.far=ye,(B!==k.near||z!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,z=k.far),k.layers.mask=Z.layers.mask|6,A.layers.mask=k.layers.mask&-5,R.layers.mask=k.layers.mask&-3;let Ne=Z.parent,xe=k.cameras;Ae(k,Ne);for(let Ve=0;Ve<xe.length;Ve++)Ae(xe[Ve],Ne);xe.length===2?ae(k,A,R):k.projectionMatrix.copy(A.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,k,Ne)};function Me(Z,J,ye){ye===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let Ze=null;function N(Z,J){if(f=J.getViewerPose(c||s),I=J,f!==null){let ye=f.views;d!==null&&(e.setRenderTargetFramebuffer(F,d.framebuffer),e.setRenderTarget(F));let Ne=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let j=0;j<ye.length;j++){let ne=ye[j],le=null;if(d!==null)le=d.getViewport(ne);else{let de=h.getViewSubImage(u,ne);le=de.viewport,j===0&&(e.setRenderTargetTextures(F,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(F))}let ce=H[j];ce===void 0&&(ce=new Ga,ce.layers.enable(j),ce.viewport=new jt,H[j]=ce),ce.matrix.fromArray(ne.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ne.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),j===0&&(k.matrix.copy(ce.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(ce)}let xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&M){h=o.getBinding();let j=h.getDepthInformation(ye[0]);j&&j.isValid&&j.texture&&m.init(j,n.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),h=o.getBinding();for(let j=0;j<ye.length;j++){let ne=ye[j].camera;if(ne){let le=p[ne];le||(le=new fu,p[ne]=le);let ce=h.getCameraImage(ne);le.sourceTexture=ce}}}}for(let ye=0;ye<C.length;ye++){let Ne=_[ye],xe=C[ye];Ne!==null&&xe!==void 0&&xe.update(Ne,J,c||s)}Ze&&Ze(Z,J),J.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:J}),I=null}let $e=new q1;$e.setAnimationLoop(N),this.setAnimationLoop=function(Z){Ze=Z},this.dispose=function(){}}},GL=new Vt,J1=new it;J1.set(-1,0,0,0,1,0,0,0,1);function qL(t,e){function a(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function o(m,p){p.color.getRGB(m.fogColor.value,og(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,v,F){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,F)):p.isMeshMatcapMaterial?(r(m,p),I(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&i(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,a(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===no&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,a(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===no&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,a(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,a(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,a(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,F=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(GL.makeRotationFromEuler(F)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(J1),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,a(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,a(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform))}function i(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,a(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,a(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,a(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,a(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,a(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,a(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,a(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,a(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,a(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,a(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===no&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,a(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,a(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,a(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,a(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,a(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,a(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,a(p.specularIntensityMap,m.specularIntensityMapTransform))}function I(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:n}}function WL(t,e,a,o){let n={},r={},s=[],i=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(F,C){let _=C.program;o.uniformBlockBinding(F,_)}function c(F,C){let _=n[F.id];_===void 0&&(m(F),_=f(F),n[F.id]=_,F.addEventListener("dispose",x));let w=C.program;o.updateUBOMapping(F,w);let S=e.render.frame;r[F.id]!==S&&(u(F),r[F.id]=S)}function f(F){let C=h();F.__bindingPointIndex=C;let _=t.createBuffer(),w=F.__size,S=F.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,w,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,_),_}function h(){for(let F=0;F<i;F++)if(s.indexOf(F)===-1)return s.push(F),F;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(F){let C=n[F.id],_=F.uniforms,w=F.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let S=0,T=_.length;S<T;S++){let A=_[S];if(Array.isArray(A))for(let R=0,H=A.length;R<H;R++)d(A[R],S,R,w);else d(A,S,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(F,C,_,w){if(M(F,C,_,w)===!0){let S=F.__offset,T=F.value;if(Array.isArray(T)){let A=0;for(let R=0;R<T.length;R++){let H=T[R],k=p(H);I(H,F.__data,A),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else I(T,F.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,F.__data)}}function I(F,C,_){typeof F=="number"||typeof F=="boolean"?C[0]=F:F.isMatrix3?(C[0]=F.elements[0],C[1]=F.elements[1],C[2]=F.elements[2],C[3]=0,C[4]=F.elements[3],C[5]=F.elements[4],C[6]=F.elements[5],C[7]=0,C[8]=F.elements[6],C[9]=F.elements[7],C[10]=F.elements[8],C[11]=0):ArrayBuffer.isView(F)?C.set(new F.constructor(F.buffer,F.byteOffset,C.length)):F.toArray(C,_)}function M(F,C,_,w){let S=F.value,T=C+"_"+_;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:ArrayBuffer.isView(S)?w[T]=S.slice():w[T]=S.clone(),!0;{let A=w[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function m(F){let C=F.uniforms,_=0,w=16;for(let T=0,A=C.length;T<A;T++){let R=Array.isArray(C[T])?C[T]:[C[T]];for(let H=0,k=R.length;H<k;H++){let B=R[H],z=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,Y=z.length;ee<Y;ee++){let re=z[ee],W=p(re),$=_%w,ae=$%W.boundary,Ae=$+ae;_+=ae,Ae!==0&&w-Ae<W.storage&&(_+=w-Ae),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=W.storage}}}let S=_%w;return S>0&&(_+=w-S),F.__size=_,F.__cache={},this}function p(F){let C={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(C.boundary=4,C.storage=4):F.isVector2?(C.boundary=8,C.storage=8):F.isVector3||F.isColor?(C.boundary=16,C.storage=12):F.isVector4?(C.boundary=16,C.storage=16):F.isMatrix3?(C.boundary=48,C.storage=48):F.isMatrix4?(C.boundary=64,C.storage=64):F.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(F)?(C.boundary=16,C.storage=F.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",F),C}function x(F){let C=F.target;C.removeEventListener("dispose",x);let _=s.indexOf(C.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function v(){for(let F in n)t.deleteBuffer(n[F]);s=[],n={},r={}}return{bind:l,update:c,dispose:v}}var XL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function YL(){return On===null&&(On=new Cl(XL,16,16,hs,pn),On.name="DFG_LUT",On.minFilter=Fa,On.magFilter=Fa,On.wrapS=Jo,On.wrapT=Jo,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Dh=class{constructor(e={}){let{canvas:a=f1(),context:o=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:i=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=xo}=e;this.isWebGLRenderer=!0;let I;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");I=o.getContextAttributes().alpha}else I=s;let M=d,m=new Set([Kp,Zp,Yp]),p=new Set([xo,fn,kl,Nl,Wp,Xp]),x=new Uint32Array(4),v=new Int32Array(4),F=new U,C=null,_=null,w=[],S=[],T=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,H=null,k=null,B=null,z=null;this._outputColorSpace=ka;let ee=0,Y=0,re=null,W=-1,$=null,ae=new jt,Ae=new jt,Me=null,Ze=new ut(0),N=0,$e=a.width,Z=a.height,J=1,ye=null,Ne=null,xe=new jt(0,0,$e,Z),Ve=new jt(0,0,$e,Z),Qe=!1,j=new _l,ne=!1,le=!1,ce=new Vt,de=new U,Ge=new jt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function He(){return re===null?J:1}let E=o;function nt(y,D){return a.getContext(y,D)}let Xe,b,g,P,q,Q,he,fe,X,te,ge,ze,ve,Ce,ie,Fe,me,L,pe,K,Ie,_e,se;try{let y={alpha:!0,depth:n,stencil:r,antialias:i,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${zp}`),a.addEventListener("webglcontextlost",dt,!1),a.addEventListener("webglcontextrestored",rt,!1),a.addEventListener("webglcontextcreationerror",sa,!1),E===null){let D="webgl2";if(E=nt(D,y),E===null)throw nt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(y){throw a.removeEventListener("webglcontextlost",dt,!1),a.removeEventListener("webglcontextrestored",rt,!1),a.removeEventListener("webglcontextcreationerror",sa,!1),et("WebGLRenderer: "+y.message),y}function we(){Xe=new eD(E),Xe.init(),Ie=new zL(E,Xe),b=new qR(E,Xe,e,Ie),g=new NL(E,Xe),b.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),k=E.createFramebuffer(),B=E.createFramebuffer(),z=E.createFramebuffer(),P=new oD(E),q=new CL,Q=new OL(E,Xe,g,q,b,Ie,P),he=new $R(A),fe=new rE(E),_e=new VR(E,fe),X=new tD(E,fe,P,_e),te=new rD(E,X,fe,_e,P),L=new nD(E,b,Q),ie=new WR(q),ge=new ML(A,he,Xe,b,_e,ie),ze=new qL(A,q),ve=new bL,Ce=new DL(Xe),me=new HR(A,he,g,te,I,l),Fe=new kL(A,te,b),se=new WL(E,P,b,g),pe=new GR(E,Xe,P),K=new aD(E,Xe,P),P.programs=ge.programs,A.capabilities=b,A.extensions=Xe,A.properties=q,A.renderLists=ve,A.shadowMap=Fe,A.state=g,A.info=P}M!==xo&&(T=new iD(M,a.width,a.height,i,n,r));let Ee=new vg(A,E);this.xr=Ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize($e,Z,!1))},this.getSize=function(y){return y.set($e,Z)},this.setSize=function(y,D,O=!0){if(Ee.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=y,Z=D,a.width=Math.floor(y*J),a.height=Math.floor(D*J),O===!0&&(a.style.width=y+"px",a.style.height=D+"px"),T!==null&&T.setSize(a.width,a.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set($e*J,Z*J).floor()},this.setDrawingBufferSize=function(y,D,O){$e=y,Z=D,J=O,a.width=Math.floor(y*O),a.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(M===xo){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ae)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,D,O,V){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,D,O,V),g.viewport(ae.copy(xe).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,D,O,V){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,D,O,V),g.scissor(Ae.copy(Ve).multiplyScalar(J).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(y){g.setScissorTest(Qe=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,O=!0){let V=0;if(y){let G=!1;if(re!==null){let be=re.texture.format;G=m.has(be)}if(G){let be=re.texture.type,Le=p.has(be),Se=me.getClearColor(),Oe=me.getClearAlpha(),qe=Se.r,lt=Se.g,mt=Se.b;Le?(x[0]=qe,x[1]=lt,x[2]=mt,x[3]=Oe,E.clearBufferuiv(E.COLOR,0,x)):(v[0]=qe,v[1]=lt,v[2]=mt,v[3]=Oe,E.clearBufferiv(E.COLOR,0,v))}else V|=E.COLOR_BUFFER_BIT}D&&(V|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),O&&(V|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&E.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),H=y},this.dispose=function(){a.removeEventListener("webglcontextlost",dt,!1),a.removeEventListener("webglcontextrestored",rt,!1),a.removeEventListener("webglcontextcreationerror",sa,!1),me.dispose(),ve.dispose(),Ce.dispose(),q.dispose(),he.dispose(),te.dispose(),_e.dispose(),se.dispose(),ge.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",We),Ee.removeEventListener("sessionend",Ke),pt.stop()};function dt(y){y.preventDefault(),tg("WebGLRenderer: Context Lost."),R=!0}function rt(){tg("WebGLRenderer: Context Restored."),R=!1;let y=P.autoReset,D=Fe.enabled,O=Fe.autoUpdate,V=Fe.needsUpdate,G=Fe.type;we(),P.autoReset=y,Fe.enabled=D,Fe.autoUpdate=O,Fe.needsUpdate=V,Fe.type=G}function sa(y){et("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ya(y){let D=y.target;D.removeEventListener("dispose",Ya),ko(D)}function ko(y){ai(y),q.remove(y)}function ai(y){let D=q.get(y).programs;D!==void 0&&(D.forEach(function(O){ge.releaseProgram(O)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,V,G,be){D===null&&(D=Be);let Le=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=Wu(y,D,O,V,G);g.setMaterial(V,Le);let Oe=O.index,qe=1;if(V.wireframe===!0){if(Oe=X.getWireframeAttribute(O),Oe===void 0)return;qe=2}let lt=O.drawRange,mt=O.attributes.position,Ue=lt.start*qe,Ct=(lt.start+lt.count)*qe;be!==null&&(Ue=Math.max(Ue,be.start*qe),Ct=Math.min(Ct,(be.start+be.count)*qe)),Oe!==null?(Ue=Math.max(Ue,0),Ct=Math.min(Ct,Oe.count)):mt!=null&&(Ue=Math.max(Ue,0),Ct=Math.min(Ct,mt.count));let _t=Ct-Ue;if(_t<0||_t===1/0)return;_e.setup(G,V,Se,O,Oe);let Mt,je=pe;if(Oe!==null&&(Mt=fe.get(Oe),je=K,je.setIndex(Mt)),G.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*He()),je.setMode(E.LINES)):je.setMode(E.TRIANGLES);else if(G.isLine){let Kt=V.linewidth;Kt===void 0&&(Kt=1),g.setLineWidth(Kt*He()),G.isLineSegments?je.setMode(E.LINES):G.isLineLoop?je.setMode(E.LINE_LOOP):je.setMode(E.LINE_STRIP)}else G.isPoints?je.setMode(E.POINTS):G.isSprite&&je.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Kt=G._multiDrawStarts,ke=G._multiDrawCounts,ha=G._multiDrawCount,yt=Oe?fe.get(Oe).bytesPerElement:1,ma=q.get(V).currentProgram.getUniforms();for(let so=0;so<ha;so++)ma.setValue(E,"_gl_DrawID",so),je.render(Kt[so]/yt,ke[so])}else if(G.isInstancedMesh)je.renderInstances(Ue,_t,G.count);else if(O.isInstancedBufferGeometry){let Kt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ke=Math.min(O.instanceCount,Kt);je.renderInstances(Ue,_t,ke)}else je.render(Ue,_t)};function hr(y,D,O,V){H!==null&&y.isNodeMaterial&&H.setObject(V,y),ne===!0&&ie.setState(y,O,!1),y.transparent===!0&&y.side===Bo&&y.forceSinglePass===!1?(y.side=no,y.needsUpdate=!0,Za(y,D,V),y.side=fs,y.needsUpdate=!0,Za(y,D,V),y.side=Bo):Za(y,D,V)}this.compile=function(y,D,O=null){O===null&&(O=y),H!==null&&H.renderStart(y,D,O),_=Ce.get(O),_.init(D),S.push(_),O.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),y!==O&&y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(),H!==null&&H.updateLights(_.state.lightsArray),le=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,le),ne===!0&&ie.setGlobalState(this.clippingPlanes,D),H!==null&&Fe.render(_.state.shadowsArray,O,D);let V=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let be=G.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let Se=be[Le];hr(Se,O,D,G),V.add(Se)}else hr(be,O,D,G),V.add(be)}),_=S.pop(),H!==null&&H.renderEnd(),V},this.compileAsync=function(y,D,O=null){let V=this.compile(y,D,O);return new Promise(G=>{function be(){if(V.forEach(function(Le){let Oe=q.get(Le).currentProgram;(Oe===void 0||Oe.isReady())&&V.delete(Le)}),V.size===0){G(y);return}setTimeout(be,10)}Xe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let mr=null;function Re(y){mr&&mr(y)}function We(){pt.stop()}function Ke(){pt.start()}let pt=new q1;pt.setAnimationLoop(Re),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(y){mr=y,Ee.setAnimationLoop(y),y===null?pt.stop():pt.start()},Ee.addEventListener("sessionstart",We),Ee.addEventListener("sessionend",Ke),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;H!==null&&H.renderStart(y,D);let O=Ee.enabled===!0&&Ee.isPresenting===!0,V=T!==null&&(re===null||O)&&T.begin(A,re);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,D,re),_=Ce.get(y,S.length),_.init(D),_.state.textureUnits=Q.getTextureUnits(),S.push(_),ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(ce,cn,D.reversedDepth),le=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,le),C=ve.get(y,w.length),C.init(),w.push(C),Ee.enabled===!0&&Ee.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&bt(Le,D,-1/0,A.sortObjects)}bt(y,D,0,A.sortObjects),C.finish(),H!==null&&H.updateLights(_.state.lightsArray),A.sortObjects===!0&&C.sort(ye,Ne),Pe=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Pe&&me.addToRenderList(C,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&ie.beginShadows();let G=_.state.shadowsArray;if(Fe.render(G,y,D),ne===!0&&ie.endShadows(),(V&&T.hasRenderPass())===!1){let Le=C.opaque,Se=C.transmissive;if(_.setupLights(),D.isArrayCamera){let Oe=D.cameras;if(Se.length>0)for(let qe=0,lt=Oe.length;qe<lt;qe++){let mt=Oe[qe];ya(Le,Se,y,mt)}Pe&&me.render(y);for(let qe=0,lt=Oe.length;qe<lt;qe++){let mt=Oe[qe];ia(C,y,mt,mt.viewport)}}else Se.length>0&&ya(Le,Se,y,D),Pe&&me.render(y),ia(C,y,D)}re!==null&&Y===0&&(Q.updateMultisampleRenderTarget(re),Q.updateRenderTargetMipmap(re)),V&&T.end(A),y.isScene===!0&&y.onAfterRender(A,y,D),_e.resetDefaultState(),W=-1,$=null,S.pop(),S.length>0?(_=S[S.length-1],Q.setTextureUnits(_.state.textureUnits),ne===!0&&ie.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?C=w[w.length-1]:C=null,H!==null&&H.renderEnd()};function bt(y,D,O,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)_.pushLightProbeGrid(y);else if(y.isLight)_.pushLight(y),y.castShadow&&_.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(j)){V&&Ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);let Le=te.update(y),Se=y.material;Se.visible&&C.push(y,Le,Se,O,Ge.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(j))){let Le=te.update(y),Se=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ge.copy(y.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ge.copy(Le.boundingSphere.center)),Ge.applyMatrix4(y.matrixWorld).applyMatrix4(ce)),Array.isArray(Se)){let Oe=Le.groups;for(let qe=0,lt=Oe.length;qe<lt;qe++){let mt=Oe[qe],Ue=Se[mt.materialIndex];Ue&&Ue.visible&&C.push(y,Le,Ue,O,Ge.z,mt,D)}}else Se.visible&&C.push(y,Le,Se,O,Ge.z,null,D)}}let be=y.children;for(let Le=0,Se=be.length;Le<Se;Le++)bt(be[Le],D,O,V)}function ia(y,D,O,V){let{opaque:G,transmissive:be,transparent:Le}=y;_.setupLightsView(O),ne===!0&&ie.setGlobalState(A.clippingPlanes,O),V&&g.viewport(ae.copy(V)),G.length>0&&wt(G,D,O),be.length>0&&wt(be,D,O),Le.length>0&&wt(Le,D,O),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ya(y,D,O,V){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[V.id]===void 0){let Ue=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[V.id]=new Io(1,1,{generateMipmaps:!0,type:Ue?pn:xo,minFilter:Nn,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let be=_.state.transmissionRenderTarget[V.id],Le=V.viewport||ae;be.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let Se=A.getRenderTarget(),Oe=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(Ze),N=A.getClearAlpha(),N<1&&A.setClearColor(16777215,.5),A.clear(),Pe&&me.render(O);let lt=A.toneMapping;A.toneMapping=un;let mt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),ne===!0&&ie.setGlobalState(A.clippingPlanes,V),wt(y,O,V),Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ct=0,_t=D.length;Ct<_t;Ct++){let Mt=D[Ct],{object:je,geometry:Kt,material:ke,group:ha}=Mt;if(ke.side===Bo&&je.layers.test(V.layers)){let yt=ke.side;ke.side=no,ke.needsUpdate=!0,at(je,O,V,Kt,ke,ha),ke.side=yt,ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be))}A.setRenderTarget(Se,Oe,qe),A.setClearColor(Ze,N),mt!==void 0&&(V.viewport=mt),A.toneMapping=lt}function wt(y,D,O){let V=D.isScene===!0?D.overrideMaterial:null;for(let G=0,be=y.length;G<be;G++){let Le=y[G],{object:Se,geometry:Oe,group:qe}=Le,lt=Le.material;lt.allowOverride===!0&&V!==null&&(lt=V),Se.layers.test(O.layers)&&at(Se,D,O,Oe,lt,qe)}}function at(y,D,O,V,G,be){H!==null&&G.isNodeMaterial&&H.setObject(y,G),y.onBeforeRender(A,D,O,V,G,be),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(A,D,O,V,y,be),G.transparent===!0&&G.side===Bo&&G.forceSinglePass===!1?(G.side=no,G.needsUpdate=!0,A.renderBufferDirect(O,D,V,G,y,be),G.side=fs,G.needsUpdate=!0,A.renderBufferDirect(O,D,V,G,y,be),G.side=Bo):A.renderBufferDirect(O,D,V,G,y,be),y.onAfterRender(A,D,O,V,G,be)}function Za(y,D,O){D.isScene!==!0&&(D=Be);let V=q.get(y),G=_.state.lights,be=_.state.shadowsArray,Le=G.state.version,Se=ge.getParameters(y,G.state,be,D,O,_.state.lightProbeGridArray),Oe=ge.getProgramCacheKey(Se),qe=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let lt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=he.get(y.envMap||V.environment,lt),V.envMapRotation=V.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,qe===void 0&&(y.addEventListener("dispose",Ya),qe=new Map,V.programs=qe);let mt=qe.get(Oe);if(mt!==void 0){if(V.currentProgram===mt&&V.lightsStateVersion===Le)return go(y,Se),mt}else Se.uniforms=ge.getUniforms(y),H!==null&&y.isNodeMaterial&&H.build(y,O,Se),y.onBeforeCompile(Se,A),mt=ge.acquireProgram(Se,Oe),qe.set(Oe,mt),V.uniforms=Se.uniforms;let Ue=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=ie.uniform),go(y,Se),V.needsLights=Yu(y),V.lightsStateVersion=Le,V.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.sunLights.value=G.state.sun,Ue.sunLightShadows.value=G.state.sunShadow,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.sunShadowMatrix.value=G.state.sunShadowMatrix,Ue.sunShadowCascade.value=G.state.sunShadowCascade,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=_.state.lightProbeGridArray.length>0,V.currentProgram=mt,V.uniformsList=null,mt}function wa(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=Vl.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function go(y,D){let O=q.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function qu(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;F.setFromMatrixPosition(D.matrixWorld);for(let O=0,V=y.length;O<V;O++){let G=y[O];if(G.texture!==null&&G.boundingBox.containsPoint(F))return G}return null}function Wu(y,D,O,V,G){D.isScene!==!0&&(D=Be),Q.resetTextureUnits();let be=D.fog,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,Se=re===null?A.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:vt.workingColorSpace,Oe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,qe=he.get(V.envMap||Le,Oe),lt=V.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,mt=!!O.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!O.morphAttributes.position,Ct=!!O.morphAttributes.normal,_t=!!O.morphAttributes.color,Mt=un;V.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=A.toneMapping);let je=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Kt=je!==void 0?je.length:0,ke=q.get(V),ha=_.state.lights;if(ne===!0&&(le===!0||y!==$)){let Gt=y===$&&V.id===W;ie.setState(V,y,Gt)}let yt=!1;V.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ha.state.version||ke.outputColorSpace!==Se||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==qe||V.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ie.numPlanes||ke.numIntersection!==ie.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==mt||ke.morphTargets!==Ue||ke.morphNormals!==Ct||ke.morphColors!==_t||ke.toneMapping!==Mt||ke.morphTargetsCount!==Kt||!!ke.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=V.version);let ma=ke.currentProgram;yt===!0&&(ma=Za(V,D,G),H&&V.isNodeMaterial&&H.onUpdateProgram(V,ma,ke));let so=!1,No=!1,hn=!1,Tt=ma.getUniforms(),oa=ke.uniforms;if(g.useProgram(ma.program)&&(so=!0,No=!0,hn=!0),V.id!==W&&(W=V.id,No=!0),ke.needsLights){let Gt=qu(_.state.lightProbeGridArray,G);ke.lightProbeGrid!==Gt&&(ke.lightProbeGrid=Gt,No=!0)}if(so||$!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Tt.setValue(E,"projectionMatrix",y.projectionMatrix),Tt.setValue(E,"viewMatrix",y.matrixWorldInverse);let xr=Tt.map.cameraPosition;xr!==void 0&&xr.setValue(E,de.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&Tt.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Tt.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,No=!0,hn=!0)}if(ke.needsLights&&(ha.state.sunShadowMap.length>0&&Tt.setValue(E,"sunShadowMap",ha.state.sunShadowMap,Q),ha.state.directionalShadowMap.length>0&&Tt.setValue(E,"directionalShadowMap",ha.state.directionalShadowMap,Q),ha.state.spotShadowMap.length>0&&Tt.setValue(E,"spotShadowMap",ha.state.spotShadowMap,Q),ha.state.pointShadowMap.length>0&&Tt.setValue(E,"pointShadowMap",ha.state.pointShadowMap,Q)),G.isSkinnedMesh){Tt.setOptional(E,G,"bindMatrix"),Tt.setOptional(E,G,"bindMatrixInverse");let Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Tt.setValue(E,"boneTexture",Gt.boneTexture,Q))}G.isBatchedMesh&&(Tt.setOptional(E,G,"batchingTexture"),Tt.setValue(E,"batchingTexture",G._matricesTexture,Q),Tt.setOptional(E,G,"batchingIdTexture"),Tt.setValue(E,"batchingIdTexture",G._indirectTexture,Q),Tt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(E,"batchingColorTexture",G._colorsTexture,Q));let Ir=O.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&L.update(G,O,ma),(No||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Tt.setValue(E,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(oa.envMapIntensity.value=D.environmentIntensity),oa.dfgLUT!==void 0&&(oa.dfgLUT.value=YL()),No){if(Tt.setValue(E,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&Xu(oa,hn),be&&V.fog===!0&&ze.refreshFogUniforms(oa,be),ze.refreshMaterialUniforms(oa,V,J,Z,_.state.transmissionRenderTarget[y.id]),ke.needsLights&&ke.lightProbeGrid){let Gt=ke.lightProbeGrid;oa.probesSH.value=Gt.texture,oa.probesMin.value.copy(Gt.boundingBox.min),oa.probesMax.value.copy(Gt.boundingBox.max),oa.probesResolution.value.copy(Gt.resolution)}Vl.upload(E,wa(ke),oa,Q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Vl.upload(E,wa(ke),oa,Q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Tt.setValue(E,"center",G.center),Tt.setValue(E,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(E,"normalMatrix",G.normalMatrix),Tt.setValue(E,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Gt=V.uniformsGroups;for(let xr=0,oi=Gt.length;xr<oi;xr++){let Lg=Gt[xr];se.update(Lg,ma),se.bind(Lg,ma)}}return ma}function Xu(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Yu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(y,D,O){let V=q.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(y.texture).__webglTexture=D,q.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:O,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let O=q.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,O=0){re=y,ee=D,Y=O;let V=null,G=!1,be=!1;if(y){let Se=q.get(y);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(E.FRAMEBUFFER,Se.__webglFramebuffer),ae.copy(y.viewport),Ae.copy(y.scissor),Me=y.scissorTest,g.viewport(ae),g.scissor(Ae),g.setScissorTest(Me),W=-1;return}else if(Se.__webglFramebuffer===void 0)Q.setupRenderTarget(y);else if(Se.__hasExternalTextures)Q.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let lt=y.depthTexture;if(Se.__boundDepthTexture!==lt){if(lt!==null&&q.has(lt)&&(y.width!==lt.image.width||y.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(y)}}let Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);let qe=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(qe[D])?V=qe[D][O]:V=qe[D],G=!0):y.samples>0&&Q.useMultisampledRTT(y)===!1?V=q.get(y).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[O]:V=qe,ae.copy(y.viewport),Ae.copy(y.scissor),Me=y.scissorTest}else ae.copy(xe).multiplyScalar(J).floor(),Ae.copy(Ve).multiplyScalar(J).floor(),Me=Qe;if(O!==0&&(V=k),g.bindFramebuffer(E.FRAMEBUFFER,V)&&g.drawBuffers(y,V),g.viewport(ae),g.scissor(Ae),g.setScissorTest(Me),G){let Se=q.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,O)}else if(be){let Se=D;for(let Oe=0;Oe<y.textures.length;Oe++){let qe=q.get(y.textures[Oe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Oe,qe.__webglTexture,O,Se)}}else if(y!==null&&O!==0){let Se=q.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Se.__webglTexture,O)}W=-1};function ue(y){let D=q.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=b.textureFormatReadable(y.format),D.__typeReadable=b.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,O,V,G,be,Le,Se=0){if(!(y&&y.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){g.bindFramebuffer(E.FRAMEBUFFER,Oe);try{let qe=y.textures[Se],lt=qe.format,mt=qe.type;y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Se);let Ue=ue(qe);if(Ue.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&O>=0&&O<=y.height-G&&E.readPixels(D,O,V,G,Ie.convert(lt),Ie.convert(mt),be)}finally{let qe=re!==null?q.get(re).__webglFramebuffer:null;g.bindFramebuffer(E.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,V,G,be,Le,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(D>=0&&D<=y.width-V&&O>=0&&O<=y.height-G){g.bindFramebuffer(E.FRAMEBUFFER,Oe);let qe=y.textures[Se],lt=qe.format,mt=qe.type;y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Se);let Ue=ue(qe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.bufferData(E.PIXEL_PACK_BUFFER,be.byteLength,E.STREAM_READ),E.readPixels(D,O,V,G,Ie.convert(lt),Ie.convert(mt),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let _t=re!==null?q.get(re).__webglFramebuffer:null;g.bindFramebuffer(E.FRAMEBUFFER,_t);let Mt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await p1(E,Mt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,be),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(Ct),E.deleteSync(Mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,O=0){let V=Math.pow(2,-O),G=Math.floor(y.image.width*V),be=Math.floor(y.image.height*V),Le=D!==null?D.x:0,Se=D!==null?D.y:0;Q.setTexture2D(y,0),E.copyTexSubImage2D(E.TEXTURE_2D,O,0,0,Le,Se,G,be),g.unbindTexture()},this.copyTextureToTexture=function(y,D,O=null,V=null,G=0,be=0){let Le,Se,Oe,qe,lt,mt,Ue,Ct,_t,Mt=y.isCompressedTexture?y.mipmaps[be]:y.image;if(O!==null)Le=O.max.x-O.min.x,Se=O.max.y-O.min.y,Oe=O.isBox3?O.max.z-O.min.z:1,qe=O.min.x,lt=O.min.y,mt=O.isBox3?O.min.z:0;else{let oa=Math.pow(2,-G);Le=Math.floor(Mt.width*oa),Se=Math.floor(Mt.height*oa),y.isDataArrayTexture?Oe=Mt.depth:y.isData3DTexture?Oe=Math.floor(Mt.depth*oa):Oe=1,qe=0,lt=0,mt=0}V!==null?(Ue=V.x,Ct=V.y,_t=V.z):(Ue=0,Ct=0,_t=0);let je=Ie.convert(D.format),Kt=Ie.convert(D.type),ke;D.isData3DTexture?(Q.setTexture3D(D,0),ke=E.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Q.setTexture2DArray(D,0),ke=E.TEXTURE_2D_ARRAY):(Q.setTexture2D(D,0),ke=E.TEXTURE_2D),g.activeTexture(E.TEXTURE0),g.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let ha=g.getParameter(E.UNPACK_ROW_LENGTH),yt=g.getParameter(E.UNPACK_IMAGE_HEIGHT),ma=g.getParameter(E.UNPACK_SKIP_PIXELS),so=g.getParameter(E.UNPACK_SKIP_ROWS),No=g.getParameter(E.UNPACK_SKIP_IMAGES);g.pixelStorei(E.UNPACK_ROW_LENGTH,Mt.width),g.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt.height),g.pixelStorei(E.UNPACK_SKIP_PIXELS,qe),g.pixelStorei(E.UNPACK_SKIP_ROWS,lt),g.pixelStorei(E.UNPACK_SKIP_IMAGES,mt);let hn=y.isDataArrayTexture||y.isData3DTexture,Tt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let oa=q.get(y),Ir=q.get(D),Gt=q.get(oa.__renderTarget),xr=q.get(Ir.__renderTarget);g.bindFramebuffer(E.READ_FRAMEBUFFER,Gt.__webglFramebuffer),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let oi=0;oi<Oe;oi++)hn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,q.get(y).__webglTexture,G,mt+oi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,q.get(D).__webglTexture,be,_t+oi)),E.blitFramebuffer(qe,lt,Le,Se,Ue,Ct,Le,Se,E.DEPTH_BUFFER_BIT,E.NEAREST);g.bindFramebuffer(E.READ_FRAMEBUFFER,null),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||q.has(y)){let oa=q.get(y),Ir=q.get(D);g.bindFramebuffer(E.READ_FRAMEBUFFER,B),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,z);for(let Gt=0;Gt<Oe;Gt++)hn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,oa.__webglTexture,G,mt+Gt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,oa.__webglTexture,G),Tt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ir.__webglTexture,be,_t+Gt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ir.__webglTexture,be),G!==0?E.blitFramebuffer(qe,lt,Le,Se,Ue,Ct,Le,Se,E.COLOR_BUFFER_BIT,E.NEAREST):Tt?E.copyTexSubImage3D(ke,be,Ue,Ct,_t+Gt,qe,lt,Le,Se):E.copyTexSubImage2D(ke,be,Ue,Ct,qe,lt,Le,Se);g.bindFramebuffer(E.READ_FRAMEBUFFER,null),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Tt?y.isDataTexture||y.isData3DTexture?E.texSubImage3D(ke,be,Ue,Ct,_t,Le,Se,Oe,je,Kt,Mt.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(ke,be,Ue,Ct,_t,Le,Se,Oe,je,Mt.data):E.texSubImage3D(ke,be,Ue,Ct,_t,Le,Se,Oe,je,Kt,Mt):y.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,be,Ue,Ct,Le,Se,je,Kt,Mt.data):y.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,be,Ue,Ct,Mt.width,Mt.height,je,Mt.data):E.texSubImage2D(E.TEXTURE_2D,be,Ue,Ct,Le,Se,je,Kt,Mt);g.pixelStorei(E.UNPACK_ROW_LENGTH,ha),g.pixelStorei(E.UNPACK_IMAGE_HEIGHT,yt),g.pixelStorei(E.UNPACK_SKIP_PIXELS,ma),g.pixelStorei(E.UNPACK_SKIP_ROWS,so),g.pixelStorei(E.UNPACK_SKIP_IMAGES,No),be===0&&D.generateMipmaps&&E.generateMipmap(ke),g.unbindTexture()},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&Q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Q.setTextureCube(y,0):y.isData3DTexture?Q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Q.setTexture2DArray(y,0):Q.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){ee=0,Y=0,re=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),a.unpackColorSpace=vt._getUnpackColorSpace()}};var Q1={portrait:[1.32,2.25],landscape:[2.25,1.32]},KL={left:.27,center:.5,right:.73},Nu=.018,ro=.007,pa=4,j1=1/.05,JL=1/960,QL=2,dr=72,$1=24,yg=.36,Ag=.095,jL=.0135,Bh=.036,Uu=.15,e_=1024,t_={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Uh=[0,.07,.93,1],$L=[-.95,-.28,.28,.95],e3=9,t3=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,a3=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,o3=`
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
`,n3=`
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
`,a_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},ei=(t,e,a)=>Math.min(a,Math.max(e,t)),kh=(t,e,a)=>t+(e-t)*a,Mg=(t,e)=>{try{let a=document.createElement("canvas").getContext("2d");if(!a)return e;a.fillStyle="#000000",a.fillStyle=t;let o=a.fillStyle;if(o.startsWith("#")){let r=parseInt(o.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let n=o.match(/[\d.]+/g);return!n||n.length<3?e:[Number(n[0])/255,Number(n[1])/255,Number(n[2])/255]}catch{return e}},r3=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],Nh=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,i_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}},Tg=(t,e,a,o,n,r)=>{let s=Math.max(0,Math.min(r,o/2,n/2)),i=s*.4477;t.moveTo(e+s,a),t.lineTo(e+o-s,a),t.bezierCurveTo(e+o-i,a,e+o,a+i,e+o,a+s),t.lineTo(e+o,a+n-s),t.bezierCurveTo(e+o,a+n-i,e+o-i,a+n,e+o-s,a+n),t.lineTo(e+s,a+n),t.bezierCurveTo(e+i,a+n,e,a+n-i,e,a+n-s),t.lineTo(e,a+s),t.bezierCurveTo(e,a+i,e+i,a,e+s,a)},Cg=(t,e)=>{if(!e)return Promise.resolve(null);let a=t.get(e);if(a)return a;let o=new Promise(n=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>n(r),r.onerror=()=>n(null),r.src=e});return t.set(e,o),o},o_=(t,e,a)=>{let[o,n]=Array.isArray(a)&&a.length===2?a:Q1[t]||Q1.portrait,r=kh(.03,Math.min(o,n)*.2,ei(e,0,1)),s={width:.3,height:.07,y:n/2-.13},i=n/2-.055;return{width:o,height:n,radius:r,slot:s,ringY:i,hangY:i+Ag}},s3=t=>{let{width:e,height:a,radius:o,slot:n}=t,r=new ss;Tg(r,-e/2+ro,-a/2+ro,e-ro*2,a-ro*2,Math.max(o-ro,.005));let s=new Ys;Tg(s,-n.width/2-ro,n.y-n.height/2-ro,n.width+ro*2,n.height+ro*2,n.height/2+ro),r.holes.push(s);let i=new El(r,{depth:Nu,bevelEnabled:!0,bevelThickness:ro,bevelSize:ro,bevelSegments:5,curveSegments:24});i.translate(0,0,-Nu/2);let l=new Fu(r,24),c=l.getAttribute("position"),f=l.getAttribute("uv");for(let h=0;h<c.count;h++)f.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+a/2)/a);return f.needsUpdate=!0,{body:i,face:l}},n_=t=>{let e=new ss,a=t*1.16;Tg(e,-a/2+.014,-Uu/2+.014,a-.028,Uu-.028,.024);let o=new El(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return o.translate(0,0,-.01),o},i3=t=>{let e=Uh.length,a=new oo;a.setAttribute("position",new qa(new Float32Array(t*e*3),3)),a.setAttribute("normal",new qa(new Float32Array(t*e*3),3)),a.setAttribute("uv",new qa(new Float32Array(t*e*2),2));let o=[];for(let n=0;n<t-1;n++)for(let r=0;r<e-1;r++){let s=n*e+r;o.push(s,s+e,s+1,s+1,s+e,s+e+1)}return a.setIndex(o),a},l3=t=>{let e=new yl;e.background=new ut(.035,.035,.04);let a=new Ks(1,1),o=[],n=(i,l,c,f=0)=>{let h=new Ws({color:new ut(i,i,i),side:Bo});o.push(h);let u=new ra(a,h);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(f),e.add(u)};n(2.6,[0,4.5,8],[9,4]),n(6,[-5.5,.5,7],[.9,14]),n(4,[5,-.5,8],[.6,14]),n(3.5,[0,-1,9],[24,.35],Math.PI/3),n(2.5,[1,2.5,9],[24,.2],Math.PI/3),n(1.4,[0,6,-6],[12,4]),n(.5,[0,-7,1],[16,6]),n(.9,[8,0,-2],[4,10]);let r=new Gl(t),s=r.fromScene(e,.035);return r.dispose(),a.dispose(),o.forEach(i=>i.dispose()),s},_g=(t,e)=>{let a=new Xs(t);return a.colorSpace=ka,a.anisotropy=e,a},c3=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let a=e.getContext("2d");if(!a)return new Xs(e);let o=i_(7),n=Float32Array.from({length:128*128},()=>o()),r=(l,c)=>{let f=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++)f+=n[(c+h+128)%128*128+(l+u+128)%128];return f/9*1.6},s=a.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=r((c-1+128)%128,l)-r((c+1)%128,l),h=r(c,(l-1+128)%128)-r(c,(l+1)%128),u=Math.hypot(f,h,1),d=(l*128+c)*4;s.data[d]=(f/u*.5+.5)*255,s.data[d+1]=(h/u*.5+.5)*255,s.data[d+2]=(1/u*.5+.5)*255,s.data[d+3]=255}a.putImageData(s,0,0);let i=new Xs(e);return i.wrapS=Pn,i.wrapT=Pn,i.repeat.set(5,7),i},u3=()=>{let a=i_(19),o=Float32Array.from({length:128*128},()=>a()),n=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let f=(l%128+128)%128,h=(c%128+128)%128,u=f/128*8,d=h/128*8,I=Math.floor(u),M=Math.floor(d),m=u-I-.5,p=d-M-.5,x=(I+M)%2===0,v=n(m)*(.55+.45*Math.cos(p*Math.PI*(x?1:.6))),F=n(p)*(.55+.45*Math.cos(m*Math.PI*(x?.6:1)));return(x?Math.max(v,F*.7):Math.max(F,v*.7))+o[h*128+f]*.08},s=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=(r(c-1,l)-r(c+1,l))*1.6,h=(r(c,l-1)-r(c,l+1))*1.6,u=Math.hypot(f,h,1),d=(l*128+c)*4;s[d]=(f/u*.5+.5)*255,s[d+1]=(h/u*.5+.5)*255,s[d+2]=(1/u*.5+.5)*255,s[d+3]=255}let i=new Cl(s,128,128);return i.wrapS=Pn,i.wrapT=Pn,i.magFilter=Fa,i.minFilter=Nn,i.generateMipmaps=!0,i.needsUpdate=!0,i},ku=(t,e,a)=>{try{let o=document.createElement("canvas");o.width=1,o.height=1;let n=o.getContext("2d");if(!n)return null;n.drawImage(t,Math.max(0,Math.min(t.width-1,Math.round(t.width*e))),Math.max(0,Math.min(t.height-1,Math.round(t.height*a))),1,1,0,0,1,1);let r=n.getImageData(0,0,1,1).data;return r[3]===0?null:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]/255})`}catch{return null}},f3=(t,e,a)=>{if(typeof a=="number")return a>1?a:Math.round(a*e);if(!t||!t.slot)return 0;let o=t.height/2-(t.slot.y-t.slot.height/2),n=t.height/2-(t.ringY-Ag),r=Math.max(o,n)+.05;return Math.round(r/t.height*e)},r_=(t,e,a,o,n)=>{if(!(o<=0))try{let r=ku(e,.98,.02),s=ku(e,.05,.02),i=ku(e,.5,.02);if(!r||!s)return;let l=F=>{let C=F.match(/[\d.]+/g);return C?[Number(C[0]),Number(C[1]),Number(C[2])]:[255,255,255]},c=l(s),f=l(r),h=i?l(i):c;if(Math.hypot(f[0]-c[0],f[1]-c[1],f[2]-c[2])<40)return;let d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]),I=Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&d>40&&I>40){let F=t.createLinearGradient(0,0,a,0);F.addColorStop(0,s),F.addColorStop(1,r),t.fillStyle=F,t.fillRect(0,0,a,o+2);return}let m=1254/1495,p=.42;try{let F=document.createElement("canvas");F.width=100,F.height=20;let C=F.getContext("2d",{willReadFrequently:!0});if(C){C.drawImage(e,0,0,e.width,Math.min(e.height*.1,200),0,0,100,20);let _=C.getImageData(0,0,100,1).data,w=C.getImageData(0,19,100,1).data,S=_[98*4],T=_[98*4+1],A=_[98*4+2],R=-1,H=-1;for(let k=98;k>=0;k--){let B=k*4;if(Math.hypot(_[B]-S,_[B+1]-T,_[B+2]-A)>40){R=k+1;break}}for(let k=98;k>=0;k--){let B=k*4;if(Math.hypot(w[B]-S,w[B+1]-T,w[B+2]-A)>40){H=k+1;break}}if(R>50&&R<98&&(m=R/100,H>0)){let k=Math.min(e.height*.1,200)*.95,B=(H-R)/100*e.width;k>0&&(p=Math.max(0,Math.min(1.5,B/k)))}}}catch{}let x=a*m,v=x-o*p;t.save(),t.fillStyle=r,t.beginPath(),t.moveTo(v,0),t.lineTo(a+2,0),t.lineTo(a+2,o+2),t.lineTo(x,o+2),t.closePath(),t.fill(),t.restore()}catch{}},d3=(t,e,a,o,n,r=0)=>{if(r>0){let s=o-r,i=a/e.width,l=e.height*i;if(l<=o){let f=o-l;r_(t,e,a,f,i),t.drawImage(e,0,f,a,l)}else{let c=Math.min(a/e.width,s/e.height),f=e.width*c,h=e.height*c,u=(a-f)/2,d=o-h;r_(t,e,a,d,c),t.drawImage(e,u,d,f,h)}}else{let s=(n==="contain"?Math.min:Math.max)(a/e.width,o/e.height),i=e.width*s,l=e.height*s;t.drawImage(e,(a-i)/2,(o-l)/2,i,l)}},s_=(t,e,a,o,n,r=!0,s=null)=>{let i=t.getContext("2d");if(!i)return;let l=r?f3(n,t.height,s):0,c=e?ku(e,.05,.02):null;if(i.fillStyle=c||Nh(a),i.fillRect(0,0,t.width,t.height),e){if(l>0){let f=ku(e,.05,.98);f&&f!==c&&(i.fillStyle=f,i.fillRect(0,t.height-30,t.width,30))}d3(i,e,t.width,t.height,o,l)}},p3=(t,e,a)=>{let n=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=n;let r=t.getContext("2d");if(!r)return n/192;if(r.fillStyle=Nh(a),r.fillRect(0,0,192,n),e)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(e,0,0,n,192),r.restore(),n/192;let s=r3(a)>.5?[0,0,0]:[1,1,1];r.fillStyle=Nh(s,.05);for(let i=0;i<n;i+=4)r.fillRect(0,i,192,1);r.fillStyle=Nh(s,.2);for(let i=0;i<n;i+=14)r.fillRect(192*.075,i,2,8),r.fillRect(192*.925-2,i,2,8);return n/192},h3=()=>{let t=()=>Array.from({length:pa+1},()=>new U);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(pa),impulses:new Float64Array(pa),rest:1,anchor:new U,body:{position:new U,previous:new U,velocity:new U,quaternion:new eo,previousQuaternion:new eo,angular:new U,mass:1,inverseInertia:new U(1,1,1),hang:new U},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},kt={a:new U,b:new U,c:new U,d:new U,e:new U,f:new U,g:new U,pin:new U,q:new eo,r:new eo},wg=(t,e,a)=>(kt.r.copy(t.quaternion).invert(),a.copy(e).applyQuaternion(kt.r),a.set(a.x*t.inverseInertia.x,a.y*t.inverseInertia.y,a.z*t.inverseInertia.z),a.applyQuaternion(t.quaternion)),l_=(t,e)=>{let{x:a,y:o,z:n,w:r}=t;t.x+=.5*(e.x*r+e.y*n-e.z*o),t.y+=.5*(e.y*r+e.z*a-e.x*n),t.z+=.5*(e.z*r+e.x*o-e.y*a),t.w+=.5*(-e.x*a-e.y*o-e.z*n),t.normalize()},c_=(t,e,a)=>{let o=kt.c.crossVectors(e,a);return 1/t.mass+o.dot(wg(t,o,kt.d))},u_=(t,e,a)=>{t.position.addScaledVector(a,1/t.mass),l_(t.quaternion,wg(t,kt.e.crossVectors(e,a),kt.f))},m3=(t,e,a,o)=>{let{nodes:n,body:r}=t,s=n[e],i=e===0?0:j1,l=e===pa-1,c=kt.g,f=n[e+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),f=kt.b.copy(r.position).add(c));let h=kt.a.subVectors(f,s),u=h.length(),d=u-t.rest;if(d<=0||u<1e-9)return;let I=h.divideScalar(u),M=l?c_(r,c,I):j1,m=(u-t.lengths[e])/a,x=(o.hold*Math.tanh(o.stiffness*d/o.hold)+o.spring*d+o.bandDamping*Math.max(0,m))*a*a-t.impulses[e];if(x<=0)return;let v=Math.min(d/(i+M),x);t.impulses[e]+=v,i&&s.addScaledVector(I,v*i),l?u_(r,c,I.multiplyScalar(-v)):f.addScaledVector(I,-v*M)},I3=(t,e,a)=>{let o=kt.g.copy(e.local).applyQuaternion(t.quaternion),n=kt.a.copy(a).sub(t.position).sub(o),r=n.length();if(r<1e-9)return;let s=n.divideScalar(r),i=r/c_(t,o,s);u_(t,o,s.multiplyScalar(i))},bg=(t,e,a)=>{let{nodes:o,previous:n,velocities:r,body:s,anchor:i}=t;o[0].copy(i);for(let c=1;c<=pa;c++)o[c].copy(o[c-1]),o[c].y-=t.rest;s.quaternion.identity(),s.hang.set(0,e.hangY,0);let l=kt.a.copy(s.hang).applyQuaternion(s.quaternion);s.position.copy(o[pa]).sub(l),s.previous.copy(s.position),s.previousQuaternion.copy(s.quaternion),s.velocity.set(0,0,0),s.angular.set(0,0,0);for(let c=0;c<=pa;c++)n[c].copy(o[c]),r[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},x3=(t,e,a)=>{t.rest=a/pa;let{width:o,height:n}=e,r=t.body,s=Nu+ro*2;r.mass=1,r.inverseInertia.set(12/(n*n+s*s),12/(o*o+s*s),12/(o*o+n*n)),r.hang.set(0,e.hangY,0)},g3=(t,e,a,o)=>{let n=Math.max(1,Math.ceil(e/JL-1e-6)),r=e/n,{nodes:s,previous:i,velocities:l,body:c}=t,f=a.breeze*(Math.sin(o*.53)*.7+Math.sin(o*1.31+1.7)*.3)*3,h=a.breeze*Math.sin(o*.37+.6)*2,u=t.grab,d=kt.pin,I=Math.exp(-a.nodeDrag*r),M=Math.exp(-a.linearDrag*r),m=Math.exp(-a.angularDrag*r);for(let x=0;x<n;x++){for(let A=1;A<pa;A++){let R=l[A];R.y-=a.gravity*r,R.x+=f*r,R.z+=h*r,i[A].copy(s[A]),s[A].addScaledVector(R,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let v=c.quaternion;if(u){let A=kt.q.copy(u.rotation).multiply(kt.r.copy(v).invert());A.w<0&&A.set(-A.x,-A.y,-A.z,-A.w);let R=kt.a.set(A.x,A.y,A.z).multiplyScalar(2*a.grip);R.addScaledVector(c.angular,-a.gripDamping),c.angular.addScaledVector(wg(c,R,kt.b),r)}let F=kt.a.set(0,1,0).applyQuaternion(v),C=kt.b.set(-F.x*F.z,-F.y*F.z,1-F.z*F.z);if(C.lengthSq()>.001){let A=kt.d.set(0,0,1).applyQuaternion(v),R=Math.atan2(kt.e.crossVectors(C,A).dot(F),C.dot(A)),H=R-t.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),t.twist+=H,t.twistRaw=R}if(!u){let A=c.angular.dot(F);c.angular.addScaledVector(F,(a.twist*(t.turn-t.twist)-a.twistDamping*A)*r)}c.velocity.y-=a.gravity*r,c.velocity.x+=f*.35*r,c.velocity.z+=h*.35*r,c.position.addScaledVector(c.velocity,r),l_(c.quaternion,kt.f.copy(c.angular).multiplyScalar(r)),t.impulses.fill(0),u&&d.lerpVectors(u.from,u.target,(x+1)/n);for(let A=0;A<QL;A++){for(let R=0;R<pa;R++)m3(t,R,r,a);u&&I3(c,u,d)}for(let A=1;A<pa;A++){let R=l[A].subVectors(s[A],i[A]).divideScalar(r).multiplyScalar(I);R.multiplyScalar(1/(1+a.nodeAir*R.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let _=kt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(_.x,_.y,_.z).multiplyScalar(2/r*(_.w<0?-1:1));let w=kt.a.set(0,0,1).applyQuaternion(c.quaternion),S=c.velocity.dot(w),T=kt.b.copy(c.velocity).addScaledVector(w,-S);T.multiplyScalar(1/(1+a.air*T.length()*r)),c.velocity.copy(T).addScaledVector(w,S/(1+a.broadside*Math.abs(S)*r)).multiplyScalar(M),c.angular.multiplyScalar(m/(1+a.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),s[pa].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let A=0;A<pa;A++)t.lengths[A]=s[A].distanceTo(s[A+1])}u&&u.from.copy(u.target);let p=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let x=1;x<pa;x++)p+=l[x].lengthSq()*.05;t.calm=p<2e-4?t.calm+e:0},F3=({frontImage:t,backImage:e,imageFit:a="cover",slotClearance:o=!0,cardColor:n="#ffffff",orientation:r="portrait",cardSize:s,finish:i="glossy",cornerRadius:l=.3,size:c=.6,anchor:f="center",strapLength:h=.5,strapImage:u,strapColor:d="#111111",strapWidth:I=.65,metal:M="silver",gravity:m=1,damping:p=.5,elasticity:x=.5,breeze:v=.5,interactive:F=!0,intro:C=!0,className:_="",style:w})=>{let S=(0,ti.useRef)(null),T=(0,ti.useRef)(null),A=(0,ti.useRef)(null);return T.current={frontImage:t,backImage:e,imageFit:a==="contain"?"contain":"cover",slotClearance:o!==!1,slotClearanceValue:typeof o=="number"?o:null,cardColor:n,orientation:r==="landscape"?"landscape":"portrait",cardSize:s,finish:i,cornerRadius:l,size:c,anchor:f,strapLength:h,strapImage:u,strapColor:d,strapWidth:I,metal:M,gravity:m,damping:p,elasticity:x,breeze:v,interactive:F,intro:C},(0,ti.useEffect)(()=>{A.current?.()}),(0,ti.useEffect)(()=>{let R=S.current;if(!R)return;let H;try{H=new Dh({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}H.setClearColor(0,0),H.outputColorSpace=ka,H.toneMapping=Cu,H.toneMappingExposure=1;let k=H.domElement;k.className="lanyard-canvas",k.setAttribute("aria-hidden","true"),R.appendChild(k);let B=Math.min(8,H.capabilities.getMaxAnisotropy()),z=new yl,ee=l3(H);z.environment=ee.texture;let Y=new Ga($1,1,.1,200),re=new Pl(16777215,1.6);re.position.set(-2.5,4,6);let W=new Pl(16777215,.35);W.position.set(3,-1,4),z.add(re,W);let $=new Map,ae={front:null,back:null,strap:null},Ae=document.createElement("canvas"),Me=document.createElement("canvas"),Ze=document.createElement("canvas"),N=_g(Ae,B),$e=_g(Me,B),Z=_g(Ze,B);Z.wrapS=Jo,Z.wrapT=Pn;let J=c3(),ye=u3(),Ne={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new U},foilFill:{value:new U},foilTop:{value:new U}},xe=ue=>{Object.assign(ue.uniforms,Ne),ue.vertexShader=ue.vertexShader.replace("#include <common>",`#include <common>
${t3}`).replace("#include <project_vertex>",`#include <project_vertex>
${a3}`),ue.fragmentShader=ue.fragmentShader.replace("#include <common>",`#include <common>
${o3}`).replace("#include <opaque_fragment>",`${n3}
#include <opaque_fragment>`)},Ve=new is({map:N,normalMap:J,normalScale:new Te(.06,.06)}),Qe=new is({map:$e,normalMap:J,normalScale:new Te(.06,.06)});Ve.onBeforeCompile=xe,Qe.onBeforeCompile=xe;let j=new is,ne=new Dl({metalness:1}),le=new is({map:Z,normalMap:ye,normalScale:new Te(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new ut(.32,.32,.34),side:Bo}),ce=new Dn,de=new ra(void 0,j),Ge=new ra(void 0,Ve),Be=new ra(void 0,Qe),Pe=new ra(new Rl(Ag,jL,18,72),ne);Pe.rotation.y=Math.PI/2-.7,ce.add(de,Ge,Be,Pe),z.add(ce);let He=i3(dr),E=new ra(He,le);E.frustumCulled=!1,z.add(E);let nt=new Dn,Xe=new ra(n_(yg),ne);Xe.position.y=Bh+Uu/2-.004;let b=new ra(new Rl(Bh,.0105,14,40),ne);nt.add(Xe,b),z.add(nt);let g=h3(),P=[],q=new U,Q=new U,he=new Al(P,!1,"centripetal"),fe={width:1,height:1},X=o_("portrait",.3),te={},ge=yg,ze=2,ve=0,Ce=performance.now(),ie=0,Fe=!0,me=!0,L=!1,pe=!1,K=null,Ie=0,_e=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,se=()=>{let ue=T.current,y=Mg(ue.cardColor,[1,1,1]),D=e_,O=Math.round(e_*X.height/X.width);(Ae.width!==D||Ae.height!==O)&&(Ae.width=D,Ae.height=O,Me.width=D,Me.height=O,N.dispose(),$e.dispose()),s_(Ae,ae.front,y,ue.imageFit,X,ue.slotClearance,ue.slotClearanceValue),s_(Me,ae.back||ae.front,y,ue.imageFit,X,ue.slotClearance,ue.slotClearanceValue),N.needsUpdate=!0,$e.needsUpdate=!0,We()},we=()=>{let ue=T.current;ze=p3(Ze,ae.strap,Mg(ue.strapColor,[.07,.07,.07])),ye.repeat.set(2,2*ze),Z.dispose(),Z.needsUpdate=!0,We()},Ee=()=>{let ue=T.current,y=fe.width/fe.height,D=ei(ue.size??1,.2,3),O=X.height/.72/D,V=X.width/.65/D;O*y<V&&(O=V/y);let G=O*y,be=.04*O,Le=((KL[ue.anchor]??.5)-.5)*G,Se=be+O/2+.15,Oe=be+X.height/2+(X.hangY-X.height/2);Y.aspect=y,Y.position.set(0,be,O/2/Math.tan($1*Math.PI/360)),Y.lookAt(0,be,0),Y.updateProjectionMatrix(),Y.updateMatrixWorld(),Ne.foilKey.value.set(-2.5,4,6).normalize().transformDirection(Y.matrixWorldInverse),Ne.foilFill.value.set(3,-1,4).normalize().transformDirection(Y.matrixWorldInverse),Ne.foilTop.value.set(.5,4.5,8).normalize().transformDirection(Y.matrixWorldInverse),g.anchor.set(Le,Se,0),x3(g,X,Math.max(.4,Se-Oe)),g.nodes[0].copy(g.anchor),g.previous[0].copy(g.anchor)},dt=()=>{let ue=T.current,y=`${ue.orientation}|${ue.cornerRadius}|${JSON.stringify(ue.cardSize)}`;if(y!==te.layoutKey){X=o_(ue.orientation,ue.cornerRadius,ue.cardSize);let Se=s3(X);de.geometry.dispose(),Ge.geometry.dispose(),Be.geometry.dispose(),de.geometry=Se.body,Ge.geometry=Se.face,Be.geometry=Se.face.clone(),Ge.position.z=Nu/2+ro+6e-4,Be.rotation.y=Math.PI,Be.position.z=-(Nu/2+ro+6e-4),Pe.position.set(0,X.ringY,0),te.framingKey=""}let D=`${y}|${ue.size}|${ue.anchor}|${ue.strapLength}|${fe.width}|${fe.height}`;D!==te.framingKey&&(Ee(),L?y!==te.layoutKey&&bg(g,X,!1):(bg(g,X,ue.intro&&!_e),L=!0));let O=`${ue.frontImage}|${ue.backImage}|${ue.strapImage}`;if(O!==te.imageKey){let Se=++Ie;Promise.all([Cg($,ue.frontImage),Cg($,ue.backImage),Cg($,ue.strapImage)]).then(([Oe,qe,lt])=>{!me||Se!==Ie||(ae.front=Oe,ae.back=qe,ae.strap=lt,se(),we())})}let V=`${y}|${ue.cardColor}|${ue.imageFit}|${ue.slotClearance}|${ue.slotClearanceValue}`;V!==te.faceKey&&se(),ue.strapColor!==te.strapColor&&we();let G=t_[ue.finish]||t_.glossy,be=Mg(ue.cardColor,[1,1,1]);[Ve,Qe].forEach(Se=>{Se.roughness=G.roughness,Se.metalness=G.metalness,Se.clearcoat=G.clearcoat,Se.clearcoatRoughness=G.clearcoatRoughness,Se.anisotropy=G.anisotropy}),Ne.foilStrength.value=G.foil,Ne.foilAspect.value=X.height/X.width,j.color.setRGB(be[0]*.92,be[1]*.92,be[2]*.92,ka),j.roughness=Math.min(G.roughness,.35),j.metalness=G.metalness,j.clearcoat=1,j.clearcoatRoughness=.08;let Le=a_[ue.metal]||a_.silver;ne.color.set(Le.color),ne.roughness=Le.roughness,ge=yg*ei(ue.strapWidth,.4,2),ge!==te.strapScale&&(Xe.geometry.dispose(),Xe.geometry=n_(ge)),k.style.touchAction=ue.interactive?"pan-y":"auto",te={layoutKey:y,framingKey:D,imageKey:O,faceKey:V,strapColor:ue.strapColor,strapScale:ge},We()},rt=Array.from({length:dr},()=>new U),sa=Array.from({length:dr},()=>new U),Ya=$L.map(ue=>[Math.cos(ue),Math.sin(ue)]),ko={tangent:new U,toCamera:new U,basis:new Vt,up:new U,across:new U,facing:new U,end:new U},ai=()=>{let ue=g.nodes[pa],y=Bh+Uu+.05,D=pa-1;for(;D>0&&g.nodes[D].distanceTo(ue)<y*1.1;)D--;let O=ko.up.subVectors(g.nodes[D],ue);O.lengthSq()<1e-8&&O.set(0,1,0).applyQuaternion(g.body.quaternion),O.normalize(),q.copy(ue).addScaledVector(O,y),Q.copy(ue).addScaledVector(O,Bh+Uu*.35),P.length=0;for(let je=0;je<=D;je++)P.push(g.nodes[je]);P.push(q,Q),he.updateArcLengths();for(let je=0;je<dr;je++)he.getPointAt(je/(dr-1),rt[je]);let V=he.getLength(),G=1-q.distanceTo(Q)/Math.max(V,.001),be=He.getAttribute("position"),Le=He.getAttribute("normal"),Se=He.getAttribute("uv"),Oe=Uh.length,qe=g.rest*pa,lt=qe/(ge*ze),mt=ge/Math.pow(Math.max(1,V/Math.max(qe,.001)),.35),{tangent:Ue,toCamera:Ct,across:_t,facing:Mt}=ko;for(let je=0;je<dr;je++){Ue.subVectors(rt[Math.min(dr-1,je+1)],rt[Math.max(0,je-1)]),Ue.lengthSq()<1e-12&&Ue.set(0,-1,0),Ue.normalize(),Ct.subVectors(Y.position,rt[je]).normalize();let Kt=sa[je].crossVectors(Ct,Ue);Kt.lengthSq()<1e-10&&Kt.copy(je>0?sa[je-1]:kt.a.set(1,0,0)),Kt.normalize(),je>0&&Kt.dot(sa[je-1])<0&&Kt.negate();let ke=-g.twist*Math.pow(Math.min(1,je/(dr-1)/G),1.3);Mt.crossVectors(Ue,Kt),_t.copy(Kt).multiplyScalar(Math.cos(ke)).addScaledVector(Mt,Math.sin(ke)),Mt.crossVectors(Ue,_t);let ha=rt[je],yt=(1-je/(dr-1))*lt;for(let ma=0;ma<Oe;ma++){let so=je*Oe+ma,No=(Uh[ma]-.5)*mt,[hn,Tt]=Ya[ma];be.setXYZ(so,ha.x+_t.x*No,ha.y+_t.y*No,ha.z+_t.z*No),Le.setXYZ(so,Mt.x*hn+_t.x*Tt,Mt.y*hn+_t.y*Tt,Mt.z*hn+_t.z*Tt),Se.setXY(so,Uh[ma],yt)}}ko.end.copy(_t),be.needsUpdate=!0,Le.needsUpdate=!0,Se.needsUpdate=!0,_t.copy(ko.end).addScaledVector(O,-ko.end.dot(O)).normalize(),Mt.crossVectors(_t,O).normalize(),ko.basis.makeBasis(_t,O,Mt),nt.quaternion.setFromRotationMatrix(ko.basis),nt.position.copy(ue)},hr=()=>{ce.position.copy(g.body.position),ce.quaternion.copy(g.body.quaternion),ai(),H.render(z,Y)},mr=()=>{let ue=T.current,y=40*ei(ue.gravity,0,3),D=Math.max(y,20),O=ei(ue.elasticity,0,1),V=ei(ue.damping,0,1);return{gravity:y,hold:D*kh(2.2,5.5,O),stiffness:D*10*pa,spring:D*kh(.1,.4,O)*pa,bandDamping:D*kh(.3,.08,O)*pa,linearDrag:.25*Math.pow(16,V),angularDrag:.5*Math.pow(12,V),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:_e?0:ei(ue.breeze,0,1)}},Re=ue=>{if(ve=0,!me)return;let y=Math.min(1/30,Math.max(1/240,(ue-Ce)/1e3));Ce=ue,ie+=y;let D=mr();g3(g,y,D,ie);let O=g.body;Number.isFinite(O.position.x+O.position.y+O.position.z+O.quaternion.w)||(g.grab=null,bg(g,X,!1)),hr();let V=g.calm>1.2&&!g.grab&&D.breeze===0;Fe&&!V&&(ve=requestAnimationFrame(Re))},We=()=>{ve||!Fe||!me||(g.calm=0,Ce=performance.now(),ve=requestAnimationFrame(Re))},Ke=new yu,pt=new Te,bt=ue=>{let y=k.getBoundingClientRect();pt.set((ue.clientX-y.left)/y.width*2-1,-((ue.clientY-y.top)/y.height)*2+1),Ke.setFromCamera(pt,Y)},ia=()=>(ce.updateMatrixWorld(),Ke.intersectObjects([de,Ge,Be],!1)[0]||null),ya=ue=>{k.style.cursor!==ue&&(k.style.cursor=ue)},wt=ue=>{let y=g.body,D=kt.a.set(0,1,0).applyQuaternion(y.quaternion),O=g.turn>0?-1:1;if(g.turn===0){let V=kt.c.subVectors(ue,Y.position).normalize();O=kt.b.subVectors(ue,y.position).cross(V).dot(D)<0?-1:1}g.turn=g.turn===0?Math.PI*O:0,y.angular.addScaledVector(D,e3*O)},at=ue=>{if(!T.current.interactive||ue.button>0)return;bt(ue);let y=ia();y&&(g.grab={local:y.point.clone().sub(g.body.position).applyQuaternion(g.body.quaternion.clone().invert()),rotation:g.body.quaternion.clone(),reach:y.distance,from:y.point.clone(),target:y.point.clone()},K={x:ue.clientX,y:ue.clientY,time:performance.now(),point:y.point.clone()},k.setPointerCapture?.(ue.pointerId),ya("grabbing"),ue.preventDefault(),We())},Za=ue=>{if(T.current.interactive){if(bt(ue),g.grab){K&&Math.hypot(ue.clientX-K.x,ue.clientY-K.y)>6&&(K=null),Ke.ray.at(g.grab.reach,g.grab.target),We();return}ue.pointerType!=="touch"&&(pe=!!ia(),ya(pe?"grab":""))}},wa=ue=>{g.grab&&(g.grab=null,K&&ue.type==="pointerup"&&performance.now()-K.time<450&&wt(K.point),K=null,k.releasePointerCapture?.(ue.pointerId),ya(pe&&ue.pointerType!=="touch"?"grab":""),We())},go=ue=>{!T.current.interactive||ue.touches.length!==1||(bt(ue.touches[0]),ia()&&ue.preventDefault())};k.addEventListener("pointerdown",at),k.addEventListener("pointermove",Za),k.addEventListener("pointerup",wa),k.addEventListener("pointercancel",wa),k.addEventListener("lostpointercapture",wa),k.addEventListener("touchstart",go,{passive:!1});let qu=()=>{fe.width=Math.max(1,R.clientWidth),fe.height=Math.max(1,R.clientHeight),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setSize(fe.width,fe.height,!1),dt(),hr()},Wu=new ResizeObserver(qu);Wu.observe(R);let Xu=new IntersectionObserver(([ue])=>{Fe=ue.isIntersecting,Fe&&We()});Xu.observe(R);let Yu=()=>{document.hidden||We()};return document.addEventListener("visibilitychange",Yu),A.current=dt,qu(),()=>{me=!1,cancelAnimationFrame(ve),A.current=null,Wu.disconnect(),Xu.disconnect(),document.removeEventListener("visibilitychange",Yu),k.removeEventListener("pointerdown",at),k.removeEventListener("pointermove",Za),k.removeEventListener("pointerup",wa),k.removeEventListener("pointercancel",wa),k.removeEventListener("lostpointercapture",wa),k.removeEventListener("touchstart",go),[de,Ge,Be,Pe,Xe,b,E].forEach(ue=>ue.geometry?.dispose()),[Ve,Qe,j,ne,le].forEach(ue=>ue.dispose()),[N,$e,Z,J,ye].forEach(ue=>ue.dispose()),ee.dispose(),H.dispose(),k.parentNode&&k.parentNode.removeChild(k)}},[]),Je.createElement("div",{ref:S,className:`lanyard ${_}`.trim(),style:w})},Eg=F3;ct();var Uo=Fr(mn());var Oh=4,f_=2.4,S3=2.2,zh=1.25,v3="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",y3="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",M3={solid:0,dashed:1,dotted:2},C3=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,_3=`#version 300 es
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
}`,b3=`#version 300 es
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
}`,T3=`#version 300 es
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
}`,A3=`#version 300 es
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
}`,Xa=(t,e,a)=>Math.min(a,Math.max(e,t)),d_=(t,e,a)=>{let o=t.createShader(e);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},Hh=(t,e)=>{let a=d_(t,t.VERTEX_SHADER,C3),o=d_(t,t.FRAGMENT_SHADER,e),n=t.createProgram();if(!a||!o||!n)return null;if(t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.deleteShader(a),t.deleteShader(o),!t.getProgramParameter(n,t.LINK_STATUS))return t.deleteProgram(n),null;let r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){let l=t.getActiveUniform(n,i);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");r[c]=t.getUniformLocation(n,c)}return{program:n,uniforms:r}},Vh=t=>{let e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:e,width:0,height:0}},Gh=(t,e,a,o)=>{e.width===a&&e.height===o||(e.width=a,e.height=o,t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,o,0,t.RGBA,t.UNSIGNED_BYTE,null))},qh=null,w3=()=>window.faceapi?Promise.resolve(window.faceapi):(qh||(qh=new Promise((t,e)=>{let a=document.createElement("script");a.src=v3,a.async=!0,a.onload=()=>window.faceapi?t(window.faceapi):e(new Error("face-api.js")),a.onerror=()=>{qh=null,e(new Error("face-api.js"))},document.head.appendChild(a)})),qh),E3={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},R3=({linesColor:t,scanColor:e,cells:a=8,lineThickness:o=1,lineStyle:n="solid",depth:r=3,depthFade:s=.6,parallax:i=1,points:l=!0,reflection:c=.35,shading:f=.7,scanDirection:h="forward",scanDuration:u=2.4,scanDelay:d=1.6,scanWidth:I=1,trail:M=.5,glow:m=.6,autoScan:p=!0,interactive:x=!0,clickEffect:v="ping",enableWebcam:F=!1,showPreview:C=!1,modelsPath:_=y3,enableGyro:w=!1,intro:S=!0,lightMode:T=!1,dpr:A,className:R="",style:H,...k})=>{let B=(0,Uo.useRef)(null),z=(0,Uo.useRef)(null),ee=(0,Uo.useRef)(null),Y=(0,Uo.useRef)(null),re=(0,Uo.useRef)(null),[W,$]=(0,Uo.useState)("loading"),ae={linesColor:t??(T?"#d4d4d8":"#4d4757"),scanColor:e??(T?"#0284c7":"#7dd3fc"),cells:Xa(a,2,40),thickness:Xa(o,.5,4),style:M3[n]??0,depth:Xa(r,.5,12),depthFade:Xa(s,0,1),parallax:Xa(i,0,3),points:l,reflection:Xa(c,0,1),shading:Xa(f,0,1),direction:h,duration:Xa(u,.3,20),delay:Xa(d,0,30),scanWidth:Xa(I,.2,5),trail:Xa(M,0,1),glow:Xa(m,0,1.5),autoScan:p,interactive:x,clickEffect:v,enableGyro:w,intro:S,lightMode:T,dpr:A},Ae=(0,Uo.useRef)(ae);return Ae.current=ae,(0,Uo.useEffect)(()=>{let Me=B.current,Ze=z.current,N=Ze?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!Me||!Ze||!N)return;let $e=Hh(N,_3),Z=Hh(N,b3),J=Hh(N,T3),ye=Hh(N,A3);if(!$e||!Z||!J||!ye)return;let Ne=N.createVertexArray(),xe=Vh(N),Ve=Vh(N),Qe=Vh(N),j=Vh(N),ne=N.createFramebuffer(),le=N.createFramebuffer(),ce=N.createFramebuffer(),de=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ge=new Map,Be=Re=>{let We=String(Re),Ke=Ge.get(We);if(Ke)return Ke;let pt=[1,1,1];if(de){de.clearRect(0,0,1,1),de.fillStyle="#000000",de.fillStyle=We,de.fillRect(0,0,1,1);let[bt,ia,ya]=de.getImageData(0,0,1,1).data;pt=[bt/255,ia/255,ya/255]}return Ge.set(We,pt),pt},Pe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,He={width:1,height:1,ratio:1},E={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:zh,vf:0,tf:zh},nt={x:0,y:0,inside:!1},Xe={x:0,y:0,held:!1},b={gamma:0,beta:0,ready:!1,asked:!1},g={x:0,y:0,z:0,strength:0,ready:!1},P={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},q=[],Q=new Float32Array(Oh*4),he=new Float32Array(Oh),fe=0,X=Ae.current.intro&&!Pe?0:1,te=0,ge=0,ze=!0,ve=0,Ce=()=>{let Re=Ae.current,We=He.width/He.height,Ke=1/Math.round(Re.cells),pt=We/Math.max(1,Math.round(We/Ke)),bt=Math.max(Ke,Math.round(Re.depth/Ke)*Ke);return{aspect:We,cx:pt,cy:Ke,roomDepth:bt}},ie=(Re,We)=>{let{aspect:Ke,roomDepth:pt}=Ce(),bt=(Re-.5)*Ke,ia=We-.5,ya=bt-E.x,wt=ia-E.y,at=E.f,Za=ya>0?.5*Ke:-.5*Ke,wa=wt>0?.5:-.5,go=pt/at;return Math.abs(ya)>1e-6&&(go=Math.min(go,(Za-bt)/ya)),Math.abs(wt)>1e-6&&(go=Math.min(go,(wa-ia)/wt)),{x:bt+ya*go,y:ia+wt*go,z:at*go}},Fe=Re=>{P.dir=Re.direction==="backward"||Re.direction==="pingpong"&&P.sweeps%2===1?-1:1,P.start=fe,P.waiting=!1,P.sweeps+=1},me=(Re,We)=>{if(X<1){let bt=X;P.dir=1,P.z=bt*(We+.4)-.2,P.alpha=Math.min(1,bt*6)*(1-Math.max(0,bt-.85)/.15);return}if(P.sweeps===0&&!P.waiting&&(P.waiting=!0,P.start=fe,P.alpha=0),P.waiting){P.alpha=0,Re.autoScan&&!Pe&&fe-P.start>=Re.delay&&Fe(Re);return}let Ke=(fe-P.start)/Re.duration;if(Ke>=1){P.waiting=!0,P.start=fe,P.alpha=0;return}let pt=Ke*(We+.3)-.15;P.z=P.dir>0?pt:We-pt,P.alpha=Math.min(1,Ke/.12)*Math.min(1,(1-Ke)/.12)},L=Re=>{let We=Math.max(1,Math.ceil(Re/.008333333333333333)),Ke=Re/We;for(let pt=0;pt<We;pt++)E.vx+=((E.tx-E.x)*42-E.vx*11)*Ke,E.vy+=((E.ty-E.y)*42-E.vy*11)*Ke,E.vf+=((E.tf-E.f)*42-E.vf*11)*Ke,E.x+=E.vx*Ke,E.y+=E.vy*Ke,E.f+=E.vf*Ke},pe=(Re,We,Ke)=>{Xe.x=Xa(Re,-1,1),Xe.y=Xa(We,-1,1),Xe.held=Ke},K=Re=>{let We=He.width/He.height,Ke=Pe?0:1,pt=Xe.held?Xe.x:(Math.sin(fe*.21)*.2+Math.sin(fe*.083+1.3)*.12)*Ke,bt=Xe.held?Xe.y:Math.sin(fe*.17+2.1)*.16*Ke;E.tx=pt*Re.parallax*.22*We,E.ty=bt*Re.parallax*.22},Ie=()=>{let Re=Ae.current;He.width=Math.max(1,Me.clientWidth),He.height=Math.max(1,Me.clientHeight),He.ratio=Math.min(Re.dpr||window.devicePixelRatio||1,2),Ze.width=Math.max(1,Math.round(He.width*He.ratio)),Ze.height=Math.max(1,Math.round(He.height*He.ratio)),Gh(N,xe,Ze.width,Ze.height),Gh(N,Ve,Ze.width,Ze.height),N.bindFramebuffer(N.FRAMEBUFFER,ne),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.texture,0),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT1,N.TEXTURE_2D,Ve.texture,0);let We=Math.max(1,Math.round(Ze.width/4)),Ke=Math.max(1,Math.round(Ze.height/4));Gh(N,Qe,We,Ke),Gh(N,j,We,Ke),N.bindFramebuffer(N.FRAMEBUFFER,le),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qe.texture,0),N.bindFramebuffer(N.FRAMEBUFFER,ce),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,j.texture,0),N.bindFramebuffer(N.FRAMEBUFFER,null),_e(),we()},_e=()=>{let Re=Ae.current,{aspect:We,cx:Ke,cy:pt,roomDepth:bt}=Ce(),ia=Be(Re.linesColor),ya=Be(Re.scanColor),wt=Re.lightMode?ya:ya.map(wa=>wa+(1-wa)*.65),at=$e.uniforms;N.bindVertexArray(Ne),N.disable(N.BLEND),N.bindFramebuffer(N.FRAMEBUFFER,ne),N.drawBuffers([N.COLOR_ATTACHMENT0,N.COLOR_ATTACHMENT1]),N.viewport(0,0,Ze.width,Ze.height),N.useProgram($e.program),N.uniform1f(at.uAspect,We),N.uniform1f(at.uPixel,1/Ze.height),N.uniform3f(at.uEye,E.x,E.y,-E.f),N.uniform1f(at.uDepth,bt),N.uniform3f(at.uCell,Ke,pt,pt),N.uniform1f(at.uThick,Re.thickness*He.ratio*.5),N.uniform1f(at.uDot,1.8*He.ratio),N.uniform1i(at.uStyle,Re.style),N.uniform3fv(at.uLineColor,ia),N.uniform3fv(at.uScanColor,ya),N.uniform3fv(at.uCoreColor,wt),N.uniform1f(at.uFade,Re.depthFade),N.uniform1f(at.uScanZ,P.z),N.uniform1f(at.uScanDir,P.dir),N.uniform1f(at.uScanAlpha,P.alpha),N.uniform1f(at.uScanWidth,.006*Re.scanWidth),N.uniform1f(at.uTrail,.04+Re.trail*1.1),N.uniform1f(at.uReveal,X<1?P.z+.05:1e4),N.uniform1f(at.uPoints,Re.points?1:0),N.uniform1f(at.uReflect,Re.reflection),N.uniform1f(at.uHaze,Re.lightMode?.03:.05),N.uniform1f(at.uShade,Re.shading),N.uniform1f(at.uLight,Re.lightMode?1:0),N.uniform4fv(at.uPing,Q),N.uniform1fv(at.uPingAlpha,he),N.uniform4f(at.uHover,g.x,g.y,g.z,g.strength),N.uniform1f(at.uTime,fe),N.drawArrays(N.TRIANGLES,0,3);let Za=Re.glow>0;if(Za){N.bindFramebuffer(N.FRAMEBUFFER,le),N.viewport(0,0,Qe.width,Qe.height),N.useProgram(Z.program),N.activeTexture(N.TEXTURE0),N.bindTexture(N.TEXTURE_2D,Ve.texture),N.uniform1i(Z.uniforms.uSource,0),N.uniform2f(Z.uniforms.uTexel,1/Ve.width,1/Ve.height),N.drawArrays(N.TRIANGLES,0,3);let wa=2.2*He.ratio/2;N.useProgram(J.program),N.uniform1i(J.uniforms.uSource,0),N.bindFramebuffer(N.FRAMEBUFFER,ce),N.bindTexture(N.TEXTURE_2D,Qe.texture),N.uniform2f(J.uniforms.uStep,wa/Qe.width,0),N.drawArrays(N.TRIANGLES,0,3),N.bindFramebuffer(N.FRAMEBUFFER,le),N.bindTexture(N.TEXTURE_2D,j.texture),N.uniform2f(J.uniforms.uStep,0,wa/Qe.height),N.drawArrays(N.TRIANGLES,0,3)}N.bindFramebuffer(N.FRAMEBUFFER,null),N.viewport(0,0,Ze.width,Ze.height),N.useProgram(ye.program),N.activeTexture(N.TEXTURE0),N.bindTexture(N.TEXTURE_2D,xe.texture),N.uniform1i(ye.uniforms.uScene,0),N.activeTexture(N.TEXTURE1),N.bindTexture(N.TEXTURE_2D,Qe.texture),N.uniform1i(ye.uniforms.uBloom,1),N.uniform1f(ye.uniforms.uGlow,Za?Re.glow*(Re.lightMode?.8:1.6):0),N.drawArrays(N.TRIANGLES,0,3),N.activeTexture(N.TEXTURE0)},se=Re=>{if(te=0,!ze||document.hidden)return;let We=Ae.current,Ke=ge?Xa((Re-ge)/1e3,.001,.05):1/60;ge=Re,fe+=Ke,X<1&&(X=Math.min(1,X+Ke/S3));let{roomDepth:pt}=Ce();me(We,pt),K(We),L(Ke);let bt=We.interactive&&nt.inside&&!Pe?1:0;if(bt){let wt=ie(nt.x,nt.y);g.ready||Object.assign(g,wt,{ready:!0});let at=1-Math.exp(-Ke/.08);g.x+=(wt.x-g.x)*at,g.y+=(wt.y-g.y)*at,g.z+=(wt.z-g.z)*at}g.strength+=(bt-g.strength)*(1-Math.exp(-Ke/.25)),!bt&&g.strength<.01&&(g.ready=!1);for(let wt=q.length-1;wt>=0;wt--)q[wt].age+=Ke,q[wt].age>f_&&q.splice(wt,1);for(let wt=0;wt<Oh;wt++){let at=q[wt];if(!at){he[wt]=0;continue}let Za=at.age/f_;Q.set([at.x,at.y,at.z,at.age*1.15],wt*4),he[wt]=Math.min(1,at.age/.05)*(1-Za)*(1-Za)}_e();let ia=Math.abs(E.tx-E.x)+Math.abs(E.ty-E.y)+Math.abs(E.tf-E.f)>1e-4||Math.abs(E.vx)+Math.abs(E.vy)+Math.abs(E.vf)>1e-4;X<1||!Pe&&We.autoScan||!P.waiting||q.length>0||ia||g.strength>.002||!Pe&&We.parallax>0&&!Xe.held||We.points&&!Pe&&P.alpha>0?te=requestAnimationFrame(se):ge=0};function we(){!te&&ze&&!document.hidden&&(te=requestAnimationFrame(se))}let Ee=Re=>{let We=Me.getBoundingClientRect(),Ke=(Re.clientX-We.left)/Math.max(1,We.width),pt=1-(Re.clientY-We.top)/Math.max(1,We.height);return{u:Ke,v:pt,inside:Ke>=0&&Ke<=1&&pt>=0&&pt<=1}},dt=Re=>{let We=Ae.current,{u:Ke,v:pt,inside:bt}=Ee(Re);nt.x=Ke,nt.y=pt;let ia=nt.inside;nt.inside=bt,bt?(window.clearTimeout(ve),ve=0,!re.current?.active&&We.interactive&&!Pe&&pe(Ke*2-1,pt*2-1,!0),we()):ia&&!ve&&(ve=window.setTimeout(()=>{ve=0,re.current?.active||(Xe.held=!1),we()},220),we())},rt=Re=>{let We=Ae.current,{u:Ke,v:pt,inside:bt}=Ee(Re);if(!(!bt||Pe||We.clickEffect==="none")){if(We.clickEffect==="scan")X>=1&&Fe(We);else{let ia=ie(Ke,pt);q.unshift({...ia,age:0}),q.length>Oh&&q.pop()}we()}},sa=()=>{nt.inside=!1,re.current?.active||(Xe.held=!1),we()},Ya=Re=>{!Ae.current.enableGyro||re.current?.active||Pe||Re.gamma===null||Re.beta===null||(b.ready||Object.assign(b,{gamma:Re.gamma,beta:Re.beta,ready:!0}),pe((Re.gamma-b.gamma)/25,(Re.beta-b.beta)/-25,!0),we())},ko=()=>{let Re=Ae.current,We=window.DeviceOrientationEvent?.requestPermission;!Re.enableGyro||b.asked||typeof We!="function"||(b.asked=!0,We.call(window.DeviceOrientationEvent).catch(()=>{}))},ai=()=>{ge=0,we()},hr=new ResizeObserver(Ie);hr.observe(Me);let mr=new IntersectionObserver(Re=>{ze=Re.some(We=>We.isIntersecting),ze&&(ge=0,we())});return mr.observe(Me),window.addEventListener("pointermove",dt,{passive:!0}),window.addEventListener("pointerdown",rt,{passive:!0}),window.addEventListener("deviceorientation",Ya),window.addEventListener("click",ko),document.documentElement.addEventListener("pointerleave",sa),document.addEventListener("visibilitychange",ai),re.current={active:!1,move:(Re,We,Ke)=>{Pe||(pe(Re*1.3,We*1.3,!0),E.tf=zh*Xa(Ke,.6,1.6),we())},release:()=>{E.tf=zh,Xe.held=!1,we()}},Ie(),Y.current=we,()=>{cancelAnimationFrame(te),window.clearTimeout(ve),Y.current=null,re.current=null,hr.disconnect(),mr.disconnect(),window.removeEventListener("pointermove",dt),window.removeEventListener("pointerdown",rt),window.removeEventListener("deviceorientation",Ya),window.removeEventListener("click",ko),document.documentElement.removeEventListener("pointerleave",sa),document.removeEventListener("visibilitychange",ai),[xe,Ve,Qe,j].forEach(Re=>N.deleteTexture(Re.texture)),[ne,le,ce].forEach(Re=>N.deleteFramebuffer(Re)),N.deleteVertexArray(Ne),[$e,Z,J,ye].forEach(Re=>N.deleteProgram(Re.program)),N.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Uo.useEffect)(()=>{Y.current?.()}),(0,Uo.useEffect)(()=>{if(!F)return;let Me=ee.current;if(!Me)return;let Ze=!1,N=null,$e=0,Z=0,J={x:0,y:0,near:1,ready:!1};return $("loading"),(async()=>{try{let Ne=await w3();if(await Ne.nets.tinyFaceDetector.loadFromUri(_),Ze)return;if(N=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),Ze){N.getTracks().forEach(Qe=>Qe.stop());return}Me.srcObject=N,await Me.play(),$("searching");let xe=new Ne.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ve=async()=>{if(Ze)return;let Qe=null;try{Qe=await Ne.detectSingleFace(Me,xe)}catch{Qe=null}if(Ze)return;let j=re.current;if(Qe&&j){let ne=Qe.box,le=Me.videoWidth||1,ce=Me.videoHeight||1,de=-((ne.x+ne.width/2)/le-.5)*2,Ge=-((ne.y+ne.height/2)/ce-.5)*2,Be=.32/Math.max(.08,ne.width/le),Pe=J.ready?.45:1;J.x+=(de-J.x)*Pe,J.y+=(Ge-J.y)*Pe,J.near+=(Be-J.near)*Pe,J.ready=!0,Z=0,j.active=!0,j.move(J.x,J.y,J.near),$("tracking")}else j&&++Z>12&&j.active&&(j.active=!1,J.ready=!1,j.release(),$("searching"));$e=window.setTimeout(Ve,40)};Ve()}catch{Ze||$("blocked")}})(),()=>{Ze=!0,window.clearTimeout($e),N?.getTracks().forEach(xe=>xe.stop()),Me.srcObject=null;let Ne=re.current;Ne?.active&&(Ne.active=!1,Ne.release())}},[F,_]),Je.createElement("div",{ref:B,className:`grid-scan${R?` ${R}`:""}`,style:H,...k},Je.createElement("canvas",{ref:z,className:"grid-scan-canvas","aria-hidden":"true"}),F&&Je.createElement("div",{className:C?"grid-scan-preview":"grid-scan-hidden"},Je.createElement("video",{ref:ee,className:"grid-scan-video",muted:!0,playsInline:!0}),C&&Je.createElement("span",{className:"grid-scan-status"},E3[W])))},p_=R3;ct();var Ye=Fr(mn());ct();var Ot=Fr(mn());ct();ct();var Ou=Fr(mn(),1),D3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Wl=(0,Ou.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a,absoluteStrokeWidth:o=!1,className:n="",altIcon:r,showAlt:s=!1,icon:i,primaryColor:l,secondaryColor:c,disableSecondaryOpacity:f=!1,...h},u)=>{let d=a!==void 0?o?Number(a)*24/Number(e):a:void 0,I=d!==void 0?{strokeWidth:d,stroke:"currentColor"}:{},M={ref:u,...D3,width:e,height:e,color:l||t,className:n,...I,...h},p=[...s&&r?r:i].sort(([,x],[,v])=>{let F=x.opacity!==void 0;return v.opacity!==void 0?1:F?-1:0}).map(([x,v])=>{let F=v.opacity!==void 0,C=F&&!f?v.opacity:void 0,_=c?{...v.stroke!==void 0?{stroke:F?c:l||t}:{fill:F?c:l||t}}:{};return(0,Ou.createElement)(x,{...v,...I,..._,opacity:C,key:v.key})});return(0,Ou.createElement)("svg",M,p)});Wl.displayName="HugeiconsIcon";ct();ct();var Hn=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ct();var pr=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];ct();var zu=[["path",{d:"M5 14L8.5 17.5L19 6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]];var Hu=typeof window>"u"?Ot.useEffect:Ot.useLayoutEffect,h_={dark:{"--stepper-frame":"rgba(10, 15, 29, 0.75)","--stepper-frame-edge":"rgba(0, 245, 255, 0.25)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.08)","--stepper-frame-shadow":"0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)","--stepper-tile":"linear-gradient(180deg, #131b31 0%, #0a0f1d 100%)","--stepper-tile-edge":"rgba(0, 245, 255, 0.2)","--stepper-tile-highlight":"rgba(255, 255, 255, 0.12)","--stepper-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--stepper-well":"rgba(255, 255, 255, 0.05)","--stepper-track":"rgba(255, 255, 255, 0.1)","--stepper-ink":"#f4f4f5","--stepper-muted":"rgba(244, 244, 245, 0.55)","--stepper-faint":"rgba(255, 255, 255, 0.22)","--stepper-ring":"rgba(0, 245, 255, 0.3)","--stepper-solid":"#00f5ff","--stepper-solid-ink":"#020914","--stepper-hover":"brightness(1.12)","--stepper-hover-fill":"rgba(0, 245, 255, 0.08)","--stepper-solid-hover":"brightness(0.9)","--stepper-press":"brightness(0.85)"},light:{"--stepper-frame":"rgba(240, 240, 243, 0.8)","--stepper-frame-edge":"rgba(24, 24, 27, 0.07)","--stepper-frame-highlight":"rgba(255, 255, 255, 0.95)","--stepper-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--stepper-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--stepper-tile-edge":"rgba(24, 24, 27, 0.08)","--stepper-tile-highlight":"rgba(255, 255, 255, 1)","--stepper-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--stepper-well":"rgba(24, 24, 27, 0.05)","--stepper-track":"rgba(24, 24, 27, 0.08)","--stepper-ink":"#27272a","--stepper-muted":"rgba(39, 39, 42, 0.55)","--stepper-faint":"rgba(24, 24, 27, 0.16)","--stepper-ring":"rgba(24, 24, 27, 0.28)","--stepper-solid":"#27272a","--stepper-solid-ink":"#ffffff","--stepper-hover":"brightness(0.97)","--stepper-hover-fill":"rgba(24, 24, 27, 0.035)","--stepper-solid-hover":"brightness(1.3)","--stepper-press":"brightness(0.92)"}},x_="linear(0, 0.0603, 0.2033, 0.3821, 0.5633, 0.7258, 0.8584, 0.9574, 1.0242, 1.0634, 1.0809, 1.0828, 1.0747, 1.0613, 1.046, 1.0313, 1.0186, 1.0085, 1.0012, 0.9965, 0.994, 0.9931, 0.9933, 0.9941, 0.9953, 0.9966, 0.9978, 0.9988, 1)",g_="cubic-bezier(0.22, 1, 0.36, 1)",m_=(t,e,a)=>Math.min(a,Math.max(e,t)),L3=t=>typeof t=="number"?`${t}px`:t,P3=t=>{let e=String(t||"").trim().replace("#","");if(e.length===3&&(e=e.replace(/./g,r=>r+r)),!/^[0-9a-f]{6}$/i.test(e))return"#ffffff";let[a,o,n]=[0,2,4].map(r=>{let s=parseInt(e.slice(r,r+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*a+.7152*o+.0722*n>.4?"#18181b":"#ffffff"},I_=()=>typeof CSS<"u"&&CSS.supports?.("transition-timing-function","linear(0, 1)")?x_:"cubic-bezier(0.34, 1.4, 0.64, 1)";function B3(){let t=(0,Ot.useRef)(null);return Hu(()=>{let e=t.current?.querySelector("path");!e||typeof e.animate!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e.style.strokeDasharray="24",e.animate([{strokeDashoffset:24},{strokeDashoffset:0}],{duration:360,easing:g_}))},[]),Je.createElement("span",{ref:t,className:"stepper__check"},Je.createElement(Wl,{icon:zu,size:16,strokeWidth:2.4}))}function Wh({children:t}){return Je.createElement("div",{className:"stepper__step"},t)}function Rg({children:t,step:e,initialStep:a=1,onStepChange:o=()=>{},onFinalStepCompleted:n=()=>{},indicator:r="numbers",orientation:s="horizontal",transition:i="slide",linear:l=!1,disableStepIndicators:c=!1,renderStepIndicator:f,showFooter:h=!0,backButtonText:u="Back",nextButtonText:d="Continue",completeButtonText:I="Complete",backButtonProps:M={},nextButtonProps:m={},completedContent:p,theme:x="dark",accentColor:v="#00f5ff",frame:F=!0,radius:C=20,width:_=620,className:w="",stepCircleContainerClassName:S="",stepContainerClassName:T="",contentClassName:A="",footerClassName:R="",style:H,...k}){let B=Ot.Children.toArray(t).filter(Ot.isValidElement),z=B.length,ee=typeof e=="number",[Y,re]=(0,Ot.useState)(a),W=m_(Math.round(ee?e:Y),1,z+1),$=W>z,ae=s==="vertical",Ae=ae?"numbers":r,Me=B.some(ie=>ie.props.title),[Ze,N]=(0,Ot.useState)(!1),[$e,Z]=(0,Ot.useState)(!1),J=ae&&!Ze,[ye,Ne]=(0,Ot.useState)(W);W>ye&&Ne(W);let[xe,Ve]=(0,Ot.useState)({step:W,previous:null,direction:1,id:0});xe.step!==W&&Ve({step:W,previous:xe.step,direction:W>xe.step?1:-1,id:xe.id+1});let Qe=(0,Ot.useRef)(null),j=(0,Ot.useRef)(null),ne=(0,Ot.useRef)(null),le=(0,Ot.useRef)([]),ce=(0,Ot.useRef)([]),de=(0,Ot.useRef)(null),Ge=(0,Ot.useRef)(null),Be=(0,Ot.useRef)(null),Pe=(0,Ot.useRef)(0),He=(0,Ot.useRef)([]),E=(0,Ot.useRef)(!1);E.current=$e;let nt=(0,Ot.useRef)(!1),Xe=ie=>{let Fe=m_(ie,1,z+1);Fe!==W&&(ee||re(Fe),Fe>z?n():o(Fe))},b=ie=>!c&&ie!==W&&(!l||ie<=Math.min(ye,z));Hu(()=>{let ie=Qe.current;if(!ie)return;let Fe=()=>{let L=ae&&ie.clientWidth<520;N(L);let pe=j.current;if(!pe||!Me||ae&&!L){Z(!1);return}let K=le.current.slice(0,z);E.current||K.forEach((we,Ee)=>{let dt=ce.current[Ee];He.current[Ee]=dt&&we?.contains(dt)?dt.scrollWidth+8:0});let Ie=K.reduce((we,Ee)=>we+(Ee?.firstElementChild?.getBoundingClientRect().width??22)+20,0),_e=He.current.slice(0,z).reduce((we,Ee)=>we+(Ee||0),0),se=pe.clientWidth-8-4*Math.max(0,z-1);Z(Ie+_e>se+.5)};Fe();let me=new ResizeObserver(Fe);return me.observe(ie),()=>me.disconnect()},[ae,Me,F,z,Ae]),Hu(()=>{let ie=de.current;if(!ie)return;Pe.current=ie.offsetHeight;let Fe=new ResizeObserver(()=>{Pe.current=ie.offsetHeight});return Fe.observe(ie),()=>Fe.disconnect()},[]),Hu(()=>{if(xe.id===0)return;let ie=de.current,Fe=Ge.current,me=Be.current,L=xe.id,pe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,K=i==="none"?"none":pe?"fade":i,Ie=()=>Ve(rt=>rt.id===L?{...rt,previous:null}:rt);if(me&&Fe&&me.contains(document.activeElement)&&Fe.focus({preventScroll:!0}),!ie||typeof ie.animate!="function"||K==="none"){Ie();return}for(let rt of[ie,Fe,me])rt?.getAnimations().forEach(sa=>sa.cancel());let _e=Pe.current,se=ie.offsetHeight,we=I_();Math.abs(_e-se)>.5&&ie.animate([{height:`${_e}px`},{height:`${se}px`}],{duration:pe?200:560,easing:pe?g_:we});let Ee=ae?"Y":"X",dt=K==="slide"?36:0;if(Fe&&(dt&&Fe.animate([{transform:`translate${Ee}(${xe.direction*dt}px)`},{transform:"none"}],{duration:560,easing:we}),Fe.animate([{opacity:0},{opacity:0,offset:.25},{opacity:1}],{duration:420,easing:"ease-out"})),me){me.animate([{opacity:1},{opacity:0}],{duration:140,easing:"cubic-bezier(0.2, 0, 0.4, 1)",fill:"forwards"});let rt=me.animate([{transform:"none"},{transform:`translate${Ee}(${-xe.direction*dt}px)`}],{duration:200,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});rt.onfinish=Ie}else Ie()},[xe.id]),Hu(()=>{let ie=j.current,Fe=ne.current;if(!ie||!Fe)return;let me=pe=>{let K=le.current[Math.min(W,z)-1];if(!K)return;let Ie=I_();Fe.style.transition=pe?`transform 560ms ${Ie}, width 560ms ${Ie}, height 560ms ${Ie}, opacity 200ms ease`:"opacity 200ms ease",Fe.style.transform=`translate3d(${K.offsetLeft}px, ${K.offsetTop}px, 0)`,Fe.style.width=`${K.offsetWidth}px`,Fe.style.height=`${K.offsetHeight}px`,Fe.style.opacity=$?"0":"1"};me(nt.current&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches),nt.current=!0;let L=new ResizeObserver(()=>me(!1));return L.observe(ie),()=>L.disconnect()},[W,z,$,Ae,Me,ae,Ze,$e]);let g=ie=>ie>z?p??null:B[ie-1],P=v?{"--stepper-solid":v,"--stepper-solid-ink":P3(v)}:{},q=(ie,Fe,me)=>Je.createElement("span",{className:"stepper__badge","data-status":me},me==="complete"?Je.createElement(B3,null):ie.props.icon?Je.createElement("span",{className:"stepper__glyph"},ie.props.icon):Fe),Q=()=>Ae==="dots"?Je.createElement("div",{className:"stepper__dots"},B.map((ie,Fe)=>{let me=Fe+1,L=$||me<W?"complete":me===W?"active":"upcoming";return Je.createElement("button",{key:me,type:"button",className:"stepper__dot","data-status":L,"aria-label":ie.props.title?`Step ${me}: ${ie.props.title}`:`Step ${me}`,"aria-current":me===W?"step":void 0,disabled:!b(me),onClick:()=>Xe(me)},Je.createElement("span",{className:"stepper__dot-mark","data-status":L}))})):Ae==="bars"?Je.createElement("div",{className:"stepper__bars"},B.map((ie,Fe)=>{let me=Fe+1,L=$||me<=W;return Je.createElement("button",{key:me,type:"button",className:"stepper__bar","data-status":$||me<W?"complete":me===W?"active":"upcoming","aria-label":ie.props.title?`Step ${me}: ${ie.props.title}`:`Step ${me}`,"aria-current":me===W?"step":void 0,disabled:!b(me),onClick:()=>Xe(me)},Je.createElement("span",{className:"stepper__bar-track"},Je.createElement("span",{className:"stepper__bar-fill","data-filled":L?"":void 0})))})):Je.createElement("div",{ref:j,className:"stepper__track","data-layout":J?"rail":"row"},Je.createElement("span",{ref:ne,className:"stepper__glider","aria-hidden":"true"}),B.map((ie,Fe)=>{let me=Fe+1,L=$||me<W?"complete":me===W?"active":"upcoming",pe=ie.props.title,K=pe&&!($e&&!J)&&Je.createElement("span",{className:"stepper__text"},Je.createElement("span",{ref:_e=>{ce.current[Fe]=_e},className:"stepper__title","data-status":L},pe),J&&ie.props.description&&Je.createElement("span",{className:"stepper__description"},ie.props.description)),Ie=_e=>{le.current[Fe]=_e};return f?Je.createElement("div",{key:me,ref:Ie,className:"stepper__segment","data-status":L},f({step:me,currentStep:W,onStepClick:_e=>Xe(_e)}),K):Je.createElement("button",{key:me,ref:Ie,type:"button",className:"stepper__segment","data-status":L,"aria-label":typeof pe=="string"?`Step ${me}: ${pe}`:`Step ${me}`,"aria-current":me===W?"step":void 0,disabled:!b(me),onClick:()=>Xe(me)},q(ie,me,L),K)})),he=W===z,fe=he?I:d,{className:X="",onClick:te,...ge}=M,{className:ze="",onClick:ve,...Ce}=m;return Je.createElement("div",{...k,ref:Qe,className:`stepper stepper--${J?"vertical":"horizontal"}${F?" stepper--framed":""} ${S} ${w}`.replace(/\s+/g," ").trim(),"data-completed":$?"":void 0,style:{...h_[x]??h_.dark,"--stepper-radius":`${Math.max(0,C)}px`,"--stepper-spring":x_,"--stepper-width":L3(_),...P,...H}},Je.createElement("div",{className:`stepper__header stepper__header--${Ae} ${T}`.trim()},Q()),Je.createElement("div",{className:"stepper__body"},Je.createElement("div",{ref:de,className:`stepper__viewport ${A}`.trim(),"aria-live":"polite"},xe.previous!==null&&Je.createElement("div",{key:xe.id-1,ref:Be,className:"stepper__pane stepper__pane--leaving","aria-hidden":"true"},g(xe.previous)),Je.createElement("div",{key:xe.id,ref:Ge,className:"stepper__pane",tabIndex:-1},g(xe.step))),h&&Je.createElement("div",{className:"stepper__footer-wrap","data-hidden":$?"":void 0,"aria-hidden":$?!0:void 0},Je.createElement("div",{className:"stepper__footer-clip"},Je.createElement("div",{className:`stepper__footer ${R}`.trim()},Je.createElement("button",{type:"button",...ge,className:`stepper__button stepper__button--back ${X}`.trim(),"data-hidden":W<=1?"":void 0,tabIndex:$?-1:ge.tabIndex,onClick:ie=>{te?.(ie),ie.defaultPrevented||Xe(W-1)}},Je.createElement(Wl,{icon:Hn,size:16,strokeWidth:2}),Je.createElement("span",null,u)),Je.createElement("button",{type:"button",...Ce,className:`stepper__button stepper__button--next ${ze}`.trim(),tabIndex:$?-1:Ce.tabIndex,onClick:ie=>{ve?.(ie),ie.defaultPrevented||Xe(W+1)}},Je.createElement("span",null,fe),Je.createElement(Wl,{icon:he?zu:pr,size:16,strokeWidth:2})))))),F&&Je.createElement("span",{className:"stepper__rim","aria-hidden":"true"}))}var U3=[{id:"Project Inquiry",label:"\u{1F4BC} Project / Freelance Work",icon:"\u{1F4BC}"},{id:"Job Opportunity",label:"\u{1F680} Full-Time / Contract Role",icon:"\u{1F680}"},{id:"Request NDA Demo",label:"\u{1F512} Private Demos & Builds (NDA)",icon:"\u{1F512}"},{id:"Technical Consultation",label:"\u26A1 Technical Advice",icon:"\u26A1"},{id:"Casual Connect",label:"\u2615 Say Hello / Networking",icon:"\u2615"}];function Dg(){let[t,e]=(0,Ye.useState)(1),[a,o]=(0,Ye.useState)(""),[n,r]=(0,Ye.useState)("Project Inquiry"),[s,i]=(0,Ye.useState)(""),[l,c]=(0,Ye.useState)(!1),[f,h]=(0,Ye.useState)(""),u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.trim());return Ye.default.createElement("div",{className:"stepper-quick-message-container"},Ye.default.createElement("div",{className:"stepper-qm-header"},Ye.default.createElement("div",{className:"stepper-qm-badge"},Ye.default.createElement("span",{className:"pulse-dot-cyan"}),Ye.default.createElement("span",null,"Send a Quick Message")),Ye.default.createElement("p",{className:"stepper-qm-subtitle"},"Leave your email and message below. I usually reply within a few hours.")),Ye.default.createElement(Rg,{step:t,onStepChange:M=>{h(""),e(M)},indicator:"bars",transition:"slide",accentColor:"#00f5ff",theme:"dark",frame:!0,radius:20,width:680,backButtonText:"Back",nextButtonText:"Continue",completeButtonText:l?"Sending...":"Send Message \u2709\uFE0F",nextButtonProps:{disabled:t===1&&!u||l},onFinalStepCompleted:async()=>{if(!u){h("Please enter a valid email address."),e(1);return}h(""),c(!0);try{if(!window.PortfolioAnalytics||typeof window.PortfolioAnalytics.submitLead!="function")throw new Error("Analytics engine initializing. Please try again in a moment.");let M=await window.PortfolioAnalytics.submitLead({email:a.trim(),type:"direct_inquiry",intent:n,message:s.trim()});if(M&&M.success)e(4);else throw new Error(M&&M.error||"Failed to send message. Please retry.")}catch(M){h(M.message||"Error transmitting message. Please try again.")}finally{c(!1)}},completedContent:Ye.default.createElement("div",{className:"stepper-complete-card"},Ye.default.createElement("div",{className:"stepper-complete-icon"},"\u2714"),Ye.default.createElement("h3",{className:"stepper-complete-title"},"Message Sent!"),Ye.default.createElement("p",{className:"stepper-complete-desc"},"Thank you for reaching out. I've received your note and will reply to"," ",Ye.default.createElement("strong",{style:{color:"#00f5ff"}},a)," shortly."),Ye.default.createElement("button",{type:"button",className:"stepper-reset-btn",onClick:()=>{o(""),r("Project Inquiry"),i(""),h(""),e(1)}},"Send Another Message"))},Ye.default.createElement(Wh,{title:"Email"},Ye.default.createElement("div",{className:"step-pane-content"},Ye.default.createElement("h3",{className:"step-title"},"Where should I reply?"),Ye.default.createElement("p",{className:"step-desc"},"Enter your work or personal email address."),Ye.default.createElement("div",{className:"step-input-box"},Ye.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},Ye.default.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Ye.default.createElement("polyline",{points:"22,6 12,13 2,6"})),Ye.default.createElement("input",{type:"email",placeholder:"you@example.com",value:a,autoFocus:!0,onChange:M=>{o(M.target.value),f&&h("")},className:"step-text-input"})),!u&&a.length>0&&Ye.default.createElement("span",{className:"step-field-hint error"},"Please enter a valid email address"),u&&Ye.default.createElement("span",{className:"step-field-hint success"},"\u2714 Valid email address"))),Ye.default.createElement(Wh,{title:"Details"},Ye.default.createElement("div",{className:"step-pane-content"},Ye.default.createElement("h3",{className:"step-title"},"What is this regarding?"),Ye.default.createElement("p",{className:"step-desc"},"Choose a topic and share any details or questions."),Ye.default.createElement("div",{className:"intent-pills-grid"},U3.map(M=>Ye.default.createElement("button",{key:M.id,type:"button",className:`intent-pill ${n===M.id?"active":""}`,onClick:()=>r(M.id)},Ye.default.createElement("span",{className:"intent-pill-label"},M.label)))),Ye.default.createElement("div",{className:"step-message-box"},Ye.default.createElement("label",{className:"step-message-label"},"Your Message ",Ye.default.createElement("span",{style:{opacity:.6,fontWeight:400}},"(Optional)")),Ye.default.createElement("textarea",{rows:3,placeholder:"Tell me a bit about your project, timeline, or headset target...",value:s,onChange:M=>i(M.target.value),className:"step-textarea"})))),Ye.default.createElement(Wh,{title:"Review"},Ye.default.createElement("div",{className:"step-pane-content"},Ye.default.createElement("h3",{className:"step-title"},"Ready to transmit"),Ye.default.createElement("p",{className:"step-desc"},"Review your message before sending."),Ye.default.createElement("div",{className:"review-summary-card"},Ye.default.createElement("div",{className:"review-row"},Ye.default.createElement("span",{className:"review-label"},"Your Email:"),Ye.default.createElement("span",{className:"review-value cyan"},a)),Ye.default.createElement("div",{className:"review-row"},Ye.default.createElement("span",{className:"review-label"},"Topic:"),Ye.default.createElement("span",{className:"review-value"},n)),s?Ye.default.createElement("div",{className:"review-row column"},Ye.default.createElement("span",{className:"review-label"},"Message:"),Ye.default.createElement("p",{className:"review-quote"},'"',s,'"')):Ye.default.createElement("div",{className:"review-row"},Ye.default.createElement("span",{className:"review-label"},"Message:"),Ye.default.createElement("span",{className:"review-value muted"},"No extra note attached"))),f&&Ye.default.createElement("div",{className:"step-error-banner"},Ye.default.createElement("span",null,"\u26A0 ",f))))))}function F_(){console.log("\u{1F680} initReactComponents running...");try{let t=document.getElementById("lanyard-container");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Gu.createRoot)(t).render(Vu.default.createElement(Eg,{frontImage:"assets/id_card_front.png",backImage:"assets/id_card_back.png",strapImage:"assets/hepl_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Digifox Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting Digifox Lanyard:",t)}try{let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Gu.createRoot)(t).render(Vu.default.createElement(Eg,{frontImage:"assets/mmw_id_front.png",backImage:"assets/mmw_id_back.png",strapImage:"assets/mmw_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})),console.log("\u2705 Madras Mindworks Lanyard mounted"))}catch(t){console.error("\u274C Failed mounting MMW Lanyard:",t)}try{let t=document.getElementById("disclaimer-gridscan-mount");t&&!t.dataset.gridScanMounted&&(t.dataset.gridScanMounted="true",t.innerHTML="",(0,Gu.createRoot)(t).render(Vu.default.createElement(p_,{linesColor:"#2a4563",scanColor:"#00f5ff",cells:10,depth:3,scanDuration:2,scanDelay:1,clickEffect:"ping",points:!0,glow:.9,trail:.65,interactive:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})),console.log("\u2705 GridScan mounted"))}catch(t){console.error("\u274C Failed mounting GridScan:",t)}try{let t=document.getElementById("contact-stepper-mount");console.log("\u{1F50D} Checking #contact-stepper-mount element:",t),t&&!t.dataset.stepperMounted&&(t.dataset.stepperMounted="true",t.innerHTML="",(0,Gu.createRoot)(t).render(Vu.default.createElement(Dg,null)),console.log("\u2705 QuickMessageStepper mounted successfully"))}catch(t){console.error("\u274C Failed mounting QuickMessageStepper:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F_):F_();
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
